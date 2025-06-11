const { ipcMain, app, BrowserWindow } = require("electron");
const fs = require("fs");
const http = require("http");
const https = require("https");

const { BlobServiceClient } = require("@azure/storage-blob");
const {
   SAVE_PTX_FILE,
   REPLY_SAVE_PTX_FILE,
   PDX_FILES_LOCATION,
   OPEN_LOGIN,
   REPLY_OPEN_LOGIN,
   FETCH_APP_PATH,
   REPLY_APP_PATH,
   FETCH_APP_EXEC_PATH,
   REPLY_APP_EXEC_PATH,
   TRIGGER_DELETE_VIN_FOLDER,
   REPLY_DELETE_VIN_FOLDER,
   FETCH_APIPORT_RUNNING_STATUS,
   REPLY_APIPORT_RUNNING_STATUS,
   SAVE_FLASH_FILE,
   REPLY_SAVE_FLASH_FILE,
   PTX_FILE_TYPE,
} = require("./constants");
const CustomProtocolListener = require("./CustomProtocolListener");
const {
   getAppDirPath,
   createFlashFilesFolderStructure,
   createPdxFilesFolderStructure,
} = require("./helper");
const {
   ENV_AZURE_REDIRECT_URI,
   ENV_AZURE_OAUTH_AUTHORIZE_ENDPOINT,
   ENV_AZURE_CLIENT_ID,
} = require("./nodeEnvConfig");
const { getAPIPort } = require("./runJarAPI");

//ptx download
ipcMain.on(SAVE_PTX_FILE, async (ev, vinNumber, url, _options) => {
   try {
      const ptxFilePath = createPdxFilesFolderStructure(vinNumber);
      const AZURE_STORAGE_CONNECTION_STRING =
         "DefaultEndpointsProtocol=https;AccountName=devasdt;AccountKey=bUTx2EjjxhQUppBE6fZfUxqA85fcpSm/uoLH5dnMcnQB4xnOnYZouiQoBXpd7dIeZQGkhRjusUYr+AStk7V9Qg==;EndpointSuffix=core.windows.net";
      if (!AZURE_STORAGE_CONNECTION_STRING) {
         throw Error("Azure Storage Connection string not found");
      }

      // Create the BlobServiceClient object with connection string
      const blobServiceClient = BlobServiceClient.fromConnectionString(
         AZURE_STORAGE_CONNECTION_STRING
      );
      console.log(blobServiceClient);
      // Create a unique name for the container
      const containerName = "asdt-dev";
      const blobName = "FAST_PTX_Nov7_test.ptx";
      // Get a reference to a container
      const containerClient =
         blobServiceClient.getContainerClient(containerName);

      const blockBlobClient = containerClient.getBlockBlobClient(blobName);

      const downloadBlockBlobResponse = await blockBlobClient.downloadToFile(
         `${ptxFilePath}\\${PTX_FILE_TYPE}`
      );
      console.log(`File downloaded!`);

      ev.reply(REPLY_SAVE_PTX_FILE, {
         downloaded: true,
      });
   } catch (ex) {
      ev.reply(REPLY_SAVE_PTX_FILE, {
         downloaded: false,
         error: ex,
      });
   }
});

//Flashfiles
ipcMain.on(SAVE_FLASH_FILE, (ev, vinNumber, data) => {
   try {
      const ecuName = createFlashFilesFolderStructure(vinNumber, data);
      let totalDownloadedFiles = 0,
         totalExistingFiles = 0;
      data.files.forEach((file) => {
         const fileType = `${ecuName}\\${file.type}`;
         if (!fs.existsSync(fileType)) {
            // creating folder name with file type
            fs.mkdirSync(fileType);
         }
         const filePath = `${fileType}\\${file.filename}`;
         const url = file.url;
         if (!fs.existsSync(filePath)) {
            const urlProtocol = url.startsWith("https")
               ? https
               : url.startsWith("http") && http;
            if (urlProtocol) {
               console.log("File download url", url);
               urlProtocol
                  .get(url, (res) => {
                     // Open file in local filesystem
                     const file = fs.createWriteStream(filePath);

                     // Write data into local file
                     res.pipe(file);

                     // Close the file
                     file.on("finish", () => {
                        file.close();
                        // incrementing the downloaded files count
                        totalDownloadedFiles += 1;
                        if (
                           totalDownloadedFiles + totalExistingFiles ===
                           data.files.length
                        ) {
                           ev.reply(REPLY_SAVE_FLASH_FILE, {
                              downloaded: true,
                              totalDownloadedFiles,
                              totalExistingFiles,
                           });
                        }
                     });
                  })
                  .on("error", (err) => {
                     console.log(
                        "Error downloading the flash file: ",
                        err.message
                     );
                     ev.reply(REPLY_SAVE_FLASH_FILE, {
                        downloaded: false,
                        error: err,
                     });
                  });
            }
         } else {
            // incrementing the downloaded files count
            totalExistingFiles += 1;
            if (
               totalDownloadedFiles + totalExistingFiles ===
               data.files.length
            ) {
               ev.reply(REPLY_SAVE_FLASH_FILE, {
                  downloaded: true,
                  totalDownloadedFiles,
                  totalExistingFiles,
               });
            }
         }
      });
   } catch (ex) {
      ev.reply(REPLY_SAVE_FLASH_FILE, {
         downloaded: false,
         error: ex,
      });
   }
});

/**
 * Listener to open Login window for Microsoft account with MFA
 */
ipcMain.on(OPEN_LOGIN, async (ev) => {
   const loginPopupWindow = new BrowserWindow({
      width: 500,
      height: 600,
   });
   // redirect URL of the Azure App taken "https://portal.azure.com/#view/Microsoft_AAD_RegisteredApps/ApplicationMenuBlade/~/Authentication/appId/ff8e9be1-f47e-4375-ac08-0be27495e31e/isMSAApp~/false"
   const msalRedirectURI = ENV_AZURE_REDIRECT_URI;
   const msalHost = msalRedirectURI.split(":")[0];
   const authCodeListener = new CustomProtocolListener(msalHost);
   const oAuthV2AuthorizeEndpoint = ENV_AZURE_OAUTH_AUTHORIZE_ENDPOINT;
   const clientID = ENV_AZURE_CLIENT_ID; // Azure App Id
   // Scopes to get user data (user.read -> to read user's basic data including access_token)
   const scopes = "user.read";
   const responseType = "code"; // response type as "Code" to get the Auth code of the user after successfull login
   // start listening for the custom protocol
   const authCodePromise = authCodeListener.start();
   // loading the micosoft OAuth 2.0 authorization endpoint (v2) taken from "https://portal.azure.com/#view/Microsoft_AAD_RegisteredApps/ApplicationsListBlade"
   // It has following added params to the endpoint. (Params === >> client_id, scope, response_type)
   loginPopupWindow.loadURL(
      `${oAuthV2AuthorizeEndpoint}?client_id=${clientID}&scope=${scopes}&response_type=${responseType}&prompt=select_account&redirect_uri=${msalRedirectURI}`
   );
   loginPopupWindow.on("closed", () => {
      ev.reply(REPLY_OPEN_LOGIN);
   });
   const authCode = await authCodePromise;
   // closing the custom protocol listener
   authCodeListener.close();
   // Closing the popup window
   loginPopupWindow.close();
   ev.reply(REPLY_OPEN_LOGIN, authCode);
});

/**
 * Listener to get the App path
 */
ipcMain.on(FETCH_APP_PATH, (ev) => {
   const appDir = getAppDirPath();
   ev.reply(REPLY_APP_PATH, appDir);
});

ipcMain.on(FETCH_APP_EXEC_PATH, (ev) => {
   ev.reply(REPLY_APP_EXEC_PATH, process.execPath);
});

/**
 * Listener to delete the
 */
ipcMain.on(TRIGGER_DELETE_VIN_FOLDER, (ev, vinNumber) => {
   try {
      const vinFolderPath = `${app.getPath(
         "userData"
      )}\\${PDX_FILES_LOCATION}\\${vinNumber}`;
      if (fs.existsSync(vinFolderPath)) {
         // deleting folder name with VIN Number and all the files inside of it
         fs.rmSync(vinFolderPath, { recursive: true, force: true });
         ev.reply(REPLY_DELETE_VIN_FOLDER, {
            deleted: true,
         });
      }
      ev.reply(REPLY_DELETE_VIN_FOLDER, {
         deleted: true,
      });
   } catch (ex) {
      ev.reply(REPLY_DELETE_VIN_FOLDER, {
         deleted: false,
         error: ex,
      });
   }
});

/**
 * Listener to delete the
 */
ipcMain.on(TRIGGER_DELETE_VIN_FOLDER, (ev, vinNumber) => {
   try {
      const vinFolderPath = `${app.getPath(
         "userData"
      )}\\${PDX_FILES_LOCATION}\\${vinNumber}`;
      if (fs.existsSync(vinFolderPath)) {
         // deleting folder name with VIN Number and all the files inside of it
         fs.rmSync(vinFolderPath, { recursive: true, force: true });
         ev.reply(REPLY_DELETE_VIN_FOLDER, {
            deleted: true,
         });
      }
      ev.reply(REPLY_DELETE_VIN_FOLDER, {
         deleted: true,
      });
   } catch (ex) {
      ev.reply(REPLY_DELETE_VIN_FOLDER, {
         deleted: false,
         error: ex,
      });
   }
});

//listener to get the apiport
ipcMain.on(FETCH_APIPORT_RUNNING_STATUS, (ev) => {
   ev.reply(REPLY_APIPORT_RUNNING_STATUS, {
      APIPort: getAPIPort(),
   });
});
