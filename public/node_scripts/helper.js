const { app } = require("electron");
const isDev = require("electron-is-dev");
const net = require("net");
const {
   FLASH_FILES_APP_LOCATION,
   FLASH_FILES_LOCATION,
   WORK_DIRECTORY_PATH,
   PTX_FILES_LOCATION,
} = require("./constants");
const fs = require("fs");

/**
 * A Helper function to find whether the port is occupied or not
 * @param {number} port - PORT to be checked
 * @param {function} cb - callback function to get the response
 */
const isPortOccupied = function (port, cb) {
   const tester = net
      .createServer()
      .once("error", function (err) {
         if (err.code !== "EADDRINUSE") return cb(err, false);
         cb(null, true);
      })
      .once("listening", function () {
         tester
            .once("close", function () {
               cb(null, false);
            })
            .close();
      })
      .listen(port);
};

/**
 * Helper function to find the open port from the initial port
 * @param {number} initialPort - Initial PORT to start with
 * @param {function} cb - callback function to get the response
 */
const findOpenPort = (initialPort, cb) => {
   isPortOccupied(initialPort, (_, isOccupied) => {
      if (isOccupied) {
         console.log("PORT OCCUPIED", initialPort);
         findOpenPort(initialPort + 1, cb);
      } else {
         console.log("PORT AVAILABLE", initialPort);
         cb(initialPort);
      }
   });
};

const getAppDirPath = () => {
   const appPath = app.getAppPath();
   let appDir = appPath;
   if (!isDev && appPath.endsWith(".asar")) {
      appDir = appPath.substring(0, appPath.lastIndexOf("\\"));
   }
   return appDir;
};

const getExeFileName = () => {
   const execPath = process.execPath;
   const lastInd = execPath.lastIndexOf("\\");
   return execPath.substring(lastInd).replaceAll("\\", "");
};
//creating folder structure to store flash related files
const createFlashFilesFolderStructure = (vinNumber, data) => {
   const folderPath = WORK_DIRECTORY_PATH;

   if (!fs.existsSync(folderPath)) {
      // Creating  folder if not exists
      fs.mkdirSync(folderPath);
   }
   const appPath = `${folderPath}\\${FLASH_FILES_APP_LOCATION}`;
   if (!fs.existsSync(appPath)) {
      // creating application folder
      fs.mkdirSync(appPath);
   }
   const flashFilePath = `${appPath}\\${FLASH_FILES_LOCATION}`;
   if (!fs.existsSync(flashFilePath)) {
      // creating flash folder
      fs.mkdirSync(flashFilePath);
   }
   const flashVinPath = `${flashFilePath}\\${vinNumber}`;
   if (!fs.existsSync(flashVinPath)) {
      // creating folder name with VIN Number
      fs.mkdirSync(flashVinPath);
   }
   const ecuName = `${flashVinPath}\\${data.name}`;
   if (!fs.existsSync(ecuName)) {
      // creating folder name with ecu name
      fs.mkdirSync(ecuName);
   }
   return ecuName;
};
//creating folder structure to store ptx related files
const createPdxFilesFolderStructure = (vinNumber, data) => {
   const folderPath = WORK_DIRECTORY_PATH;

   if (!fs.existsSync(folderPath)) {
      // Creating  folder if not exists
      fs.mkdirSync(folderPath);
   }
   const appPath = `${folderPath}\\${FLASH_FILES_APP_LOCATION}`;
   if (!fs.existsSync(appPath)) {
      // creating application folder
      fs.mkdirSync(appPath);
   }
   const ptxFilePath = `${appPath}\\${PTX_FILES_LOCATION}`;
   if (!fs.existsSync(ptxFilePath)) {
      // creating flash folder
      fs.mkdirSync(ptxFilePath);
   }

   return ptxFilePath;
};

module.exports = {
   findOpenPort,
   getAppDirPath,
   getExeFileName,
   createFlashFilesFolderStructure,
   createPdxFilesFolderStructure,
};
