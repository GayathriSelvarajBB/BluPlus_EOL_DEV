const { ipcMain, dialog } = require("electron");
const { exec, spawn } = require("node:child_process");
const {
   FETCH_COMMAND_RUNNING_STATUS,
   REPLY_COMMAND_RUNNING_STATUS,
   // FETCH_APIPORT_RUNNING_STATUS,
   // REPLY_APIPORT_RUNNING_STATUS,
} = require("./constants");
const { findOpenPort, getAppDirPath } = require("./helper");
const fs = require("fs");

const javaDependenciesFolderName = "java-dependencies";
const jarFileName = "vehiclestackcommunication-0.0.1-SNAPSHOT.jar";
const javaCommandName = "java";
//const javaInstalledDefaultDir = "C:\\Program Files\\Java\\jdk-18.0.2.1\\bin";

const netstatCommand = "netstat";
const findStrCommand = "findstr";
const taskListCommand = "tasklist";
const taskKillCommand = "taskkill";

let APIPort = 0;
let socketPort = 0;
let isJavaAvailable = true;
let isAPIRunning = false;
let isJARRunningError = false;
let JARRunningError = "";
let isJavaIntsllationError = false;
let javaIntsllationError = "";
let isJavaIntsllationDone = false;
let child;

// let isJarStopTriggered = false;

/**
 * @return {Promise<boolean>}
 */
const checkIsJavaAvailable = () => {
   return new Promise((resolve) => {
      try {
         const child_process = exec(
            `${javaCommandName} -version`,
            (error, stdout, stderr) => {
               if (
                  error !== null &&
                  stderr.startsWith(
                     `'${javaCommandName}' is not recognized as an internal or external command,`
                  )
               ) {
                  isJavaAvailable = false;
               }
            }
         );
         child_process.on("close", (_code, _signal) => {
            console.log("Java available", isJavaAvailable);
            resolve(isJavaAvailable);
         });
      } catch {
         resolve(isJavaAvailable);
      }
   });
};

const handleJavaRunningSpawn = (cb) => {
   child.on("error", (error) => {
      console.log(`error: from CHILD process `, error.message);
   });
   // Handling Java execution error
   child.on("close", (code) => {
      console.log("Error in starting Java", code);
      if (code !== 0) {
         isAPIRunning = false;
         isJARRunningError = true;
         JARRunningError = code;
         console.log("Error n starting Java", code);
         dialog.showErrorBox(
            "Oops!",
            "Error in starting Java jar for communicating with diagnostics stack.! \nContact Administrator for reinstalling the application."
         );
      }
   });
   // Starting react application (executing callback cb method) after the jar is started
   child.stdout.on("data", (message) => {
      console.log(
         "DATA COMING FROM EXEC COMMAND ---------",
         message.toString()
      );
      // checking the jar running success message checking as below
      // "SocketIO server started at port:"
      if (message.toString().includes("SocketIO server started at port:")) {
         //local setavailble port
         cb?.();
      } else if (message.toString().includes("SocketIO server start failed at port")) {
         dialog.showErrorBox(
            "Oops!",
            "Error in starting Java jar for communicating with diagnostics stack.! \nContact Administrator for reinstalling the application."
         );
      }
   });
   child.stderr.on("data", (message) => {
      console.log("ON STD ERR data ", message.toString());
   });
};

/**
 * @param {Function?} cb - callback function to invoke after the API run command triggered successfully
 */
const runJarAPI = (cb) => {
   stopLocalJar(cb);
   findOpenPort(8082, async (availableApiPort) => {
      try {
         APIPort = availableApiPort;
         const javaAvailable = await checkIsJavaAvailable();
         if (javaAvailable) {
            findOpenPort(9093, async (availableSocketPort) => {
            socketPort = availableSocketPort;
            // updating the status flag to true.
            // If there is any error occured while running the JAR then it will be changed to false in the error handlers. Otherwise it will be true
            isAPIRunning = true;
            // cb();
            // return;
            const jarFilePath = `${getAppDirPath()}\\${javaDependenciesFolderName}\\${jarFileName}`;
            console.log("jarFilePath:",jarFilePath)
            // starting internal java API service using jar file
            if (!fs.existsSync(jarFilePath)) {
               dialog.showErrorBox(
                  "Oops!",
                  "Java jar which communicates with diagnostics stack is not found.! \nContact Administrator for reinstalling the application."
               );
            } else {
               // child = spawn(``, [
               // `"C:\\Program Files\\Java\\jdk-18.0.2.1\\bin\\java.exe"`,
               // TODO: pass socket.io.port value in args
               child = spawn(
                  javaCommandName,
                  [
                     `-Dserver.port=${availableApiPort}`,
                     // `-Dsocket.io.port=${availableSocketPort}`,
                     `-jar`,
                     jarFilePath,
                  ],
               );
               // childPid = child.pid;
               console.log(
                  "command for running JAR --- ",
                  `${javaCommandName} -Dserver.port=${APIPort} -jar "${jarFilePath}"`
               );
               handleJavaRunningSpawn(cb);
            }
            });
         } else {
            dialog.showErrorBox(
               "Oops!",
               "Java not found.! Contact Administrator for reinstalling the application."
            );
         }
      } catch (e) {
         console.log("Error occured in java command ", e);
      }

      ipcMain.on(FETCH_COMMAND_RUNNING_STATUS, (ev) => {
         ev.reply(REPLY_COMMAND_RUNNING_STATUS, {
            APIPort: APIPort,
            isAPIRunning: isAPIRunning,
            isJARRunningError: isJARRunningError,
            JARRunningError: JARRunningError,
            isJavaIntsllationError: isJavaIntsllationError,
            javaIntsllationError: javaIntsllationError,
            isJavaIntsllationDone: isJavaIntsllationDone,
         });
      });
   });
};

const getAPIPort = () => {
   console.log(getAPIPort, "getAPIPort");
   return {
      APIPort: APIPort,
   };
};

const getIsAPIRunning = () => isAPIRunning;

const getCommandStatus = () => {
   return {
      APIPort: APIPort,
      socketPort: socketPort,
      isAPIRunning: isAPIRunning,
      isJARRunningError: isJARRunningError,
      JARRunningError: JARRunningError,
      isJavaIntsllationError: isJavaIntsllationError,
      javaIntsllationError: javaIntsllationError,
      isJavaIntsllationDone: isJavaIntsllationDone,
   };
};

const stopLocalJar = (cb) => {
   socketPort = 9093;
   // isJarStopTriggered = true;
   return new Promise((resolve, reject) => {
      // cb.preventDefault();
      console.log("Started looking for PID to kill Java exe");
      const netstat = exec(
         `${netstatCommand} -aon | ${findStrCommand} ${socketPort}`,
         (error, stdout, stderr) => {
            const PIDs = [];
            console.log(
               "\n\n",
               "std out from netstat",
               error,
               stdout,
               stderr,
               "\n\n"
            );
            if (error !== null) {
               // app.exit();
               reject();
            }
            let str = stdout;
            const lineArr = str.split("\n");
            lineArr
               .filter(
                  (line) =>
                     line.includes("LISTENING") && line.includes("TCP")
               )
               .forEach((line) => {
                  const lastIndex = line.lastIndexOf(" ");
                  const pid = line
                     .substr(lastIndex)
                     .trim()
                     .replace("\r", "");
                  if (pid) {
                     console.log("PID FROM NET STAT ===== >>>>>>", pid);
                     PIDs.push(pid);
                  }
               });
            const javaPIDs = [...new Set(PIDs)]; // removing duplicate PIDs
            killJavaProcess(javaPIDs);
         }
      );
      netstat.on("spawn", (message, _send) => {
         console.log("Message from net stat == >>>", message);
      });
      netstat.on("close", (_code) => {
         console.log("Netstat closed");
         resolve();
      });
   });
};

const killJavaProcess = (javaPIDs) => {
   const javaPID = javaPIDs.length ? javaPIDs[0] : false;
   if (javaPID) {
      // console.log("\n\n\n Valid PID", javaPIDs, childPid);
      console.log("\n\n\n Valid PID", javaPIDs);
      exec(
         `${taskListCommand} | ${findStrCommand} ${javaPID}`,
         (err, stdOut, stdErr) => {
            const taskStrArr = stdOut.split("\n");
            taskStrArr.forEach((line) => {
               if (line.includes("java.exe") && line.includes("Console")) {
                  const killProcess = exec(
                     `${taskKillCommand} /pid ${javaPID} /t /f`,
                     (Err, std_out, std_err) => {
                        if (Err) {
                           console.log(
                              "Error on killing port ",
                              err,
                              "\n\n\n",
                              std_err
                           );
                        }
                     }
                  );
                  killProcess.on("close", (_code) => {
                     console.log("Killed the task for PID", javaPID);
                     // app.exit();
                  });
               }
            });
         }
      );
   } else {
      // app.exit();
      console.log("\n\n\n No valid PID found");
   }
};

module.exports = {
   runJarAPI,
   getAPIPort,
   getIsAPIRunning,
   getCommandStatus,
   stopLocalJar,
};
