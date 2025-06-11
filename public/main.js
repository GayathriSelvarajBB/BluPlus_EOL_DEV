const { app, BrowserWindow, session, ipcMain, dialog } = require("electron");
const { runJarAPI, stopLocalJar } = require("./node_scripts/runJarAPI");
const fs = require("fs");
const path = require("path");
const isDev = require("electron-is-dev");

const dotenv = require("dotenv");
const dotenvExpand = require("dotenv-expand");

let envFile = isDev ? ".env" : ".env.production";
dotenvExpand.expand(dotenv.config({ path: envFile }));

require("@electron/remote/main").initialize();
// require("./node_scripts/mainProcessListeners");

function createWindow() {
   const win = new BrowserWindow({
      width: 900,
      height: 600,
      minWidth: 800,
      minHeight: 200,
      icon: path.join(__dirname, "public/icon.ico"),
      webPreferences: {
         preload: path.join(__dirname, "preload.js"),
      },
   });
   win.loadFile("index.html");
   // invoking all the process listeners inside the file
   require("./node_scripts/mainProcessListeners");

   runJarAPI(() => {
      win.loadURL(
         isDev
            ? "http://localhost:3000"
            : `file://${path.join(__dirname, "../build/index.html")}`
      );
      // TODO: App should close all the window when the main window closed manually
      // win.on("close", () => {
      //    app.quit();
      // });
   });
   win.on("close", function (e) {
      let response = dialog.showMessageBoxSync(this, {
         type: "question",
         buttons: ["Yes", "No"],
         title: "Confirm",
         message: "Are you sure! you want to exit from application?",
      });
      if (response === 1) e.preventDefault();
   });
}

app.on("ready", createWindow);

app.on("window-all-closed", function () {
   if (process.platform !== "darwin") {
      app.quit();
   }
});

app.on("activate", function () {
   if (BrowserWindow.getAllWindows().length === 0) createWindow();
});
//create file. dialog box appears (manufacturing page)
ipcMain.handle("save-file", async (event, { defaultFileName, content }) => {
   console.log("Save file handler invoked!"); // Debug log
   const { canceled, filePath } = await dialog.showSaveDialog({
      title: "Save BCM File",
      defaultPath: defaultFileName,
      filters: [{ name: "BCM Files", extensions: ["bcm"] }],
   });

   if (canceled || !filePath) return { canceled: true };

   fs.writeFileSync(filePath, content, "utf-8");
   return { canceled: false, filePath };
});
