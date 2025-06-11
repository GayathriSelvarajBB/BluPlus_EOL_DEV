const { contextBridge, ipcRenderer } = require("electron");
// const { REPLY_OPEN_LOGIN, OPEN_LOGIN } = require("./node_scripts/constants");

contextBridge.exposeInMainWorld("electronAPI", {
   saveFile: async (defaultFileName, content) => {
      return await ipcRenderer.invoke("save-file", {
         defaultFileName,
         content,
      });
   },
   initiateLogin: () => {
      return new Promise((resolve, reject) => {
         ipcRenderer.once("REPLY_OPEN_LOGIN", (_ev, data) => {
            data ? resolve(data) : reject();
         });
         ipcRenderer.send("OPEN_LOGIN");
      });
   },
});
