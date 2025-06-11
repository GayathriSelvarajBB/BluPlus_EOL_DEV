// import { toast } from "react-toastify";
import io from "socket.io-client";
import {
   socketEndpoints,
   SOCKET_SERVER_BASE_URL,
} from "socket/socketConstants";
import { listenEcuSocketEvents } from "./socketListeners";
// import { listenEcuSocketEvents } from "socket/socketListeners";

const manager = new io.Manager(SOCKET_SERVER_BASE_URL, {
   autoConnect: true,
   reconnectionAttempts: 2,
});

export const ecuSocket = manager.socket(socketEndpoints.ecuSocket);

export const createSocketConnection = async () => {
   // if (ecuSocket.connected) {
   //    return Promise.resolve(true);
   // }
   ecuSocket.open();
   // ecuSocket.on("error", (e) => {
   //    console.log("error",e);
   // });
   listenEcuSocketEvents(); // to listen the ecu-socket reply events
   // return new Promise((resolve) => {
   //    ecuSocket.on("connect", () => {
   //       resolve(true);
   //       ecuSocket.on("disconnected", () => {
   //          // TODO: handle socket disconnected
   //          toast.warning("Error connecting to the local server.", {
   //             autoClose: false,
   //          });
   //       });
   //    });
   // });
};
