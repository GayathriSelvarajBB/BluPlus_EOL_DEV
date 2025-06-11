import React, { useState, useEffect, useLayoutEffect, useRef } from "react";
import HeaderUser from "components/Connectivity/HeaderUser";
import useIsOnline from "hooks/useIsOnline";
import {
   emitGetConnectivityStatusEvent,
   emitRetryConnectionEvent,
} from "socket/socketEmitters";
import { ecuSocket } from "socket";
import { socketEvents } from "socket/socketConstants";
import { ReactComponent as UsbFillIcon } from "assets/images/usb-fill.svg";
import { ReactComponent as GlobeFillIcon } from "assets/images/globe-fill.svg";
import { ReactComponent as DarkThemeIcon } from "assets/images/dark-theme-icon.svg";
import { ReactComponent as LightThemeIcon } from "assets/images/light-theme-icon.svg";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";

import { getThemeMode } from "redux/themeMode";
import { setVciStatusRedux } from "redux/vciStatus.slice";

export const Connectivity = ({
   // isUserLoggedIn,
   showVehicleConnectionStatus,
}) => {
   const [themeChange, setThemeChange] = useState(false);
   const [vehicleIsConnected, setVehicleIsConnected] = useState(true);
   const dispatch = useDispatch();
   // console.log("themeModeStatus", themeModeStatus,themeChange);
   const isUserLoggedIn = true;
   const isOnline = useIsOnline();
   const vciIsConnectedRef = useRef(true); // Ref to maintain whether or not VCI is connected with Laptop/Desktop
   const vehicleIsConnectedRef = useRef(true); // Ref to maintain whether or not Vehicle is connected with VCI
   const toastIdRef = useRef(); // Ref to maintain the toast messsage Id to dismiss when both VCI & Vehicle connected
   const { activeSession, activeVin } =
      useSelector((state) => ({
         activeSession: state.activeServiceSession,
         activeVin: state.activeVin || {},
      })) || {};
   useLayoutEffect(() => {
      if (showVehicleConnectionStatus) {
         ecuSocket.off(socketEvents.connectivityResponse);
         // Listening for VCI && ECU connectivity status response
         ecuSocket.on(
            socketEvents.connectivityResponse,
            handleConnectivityStatusCallback
         );

         ecuSocket.off(socketEvents.retryConnectionResponse);
         // Listening Retry connection event
         ecuSocket.on(
            socketEvents.retryConnectionResponse,
            handleRetryStatusCallback
         );
         // emitting event to check connectivity of the VCI and Vehicle
         return () => {
            // Cleaning up the listeners
            // ecuSocket.off(socketEvents.connectivityResponse);
            // ecuSocket.off(socketEvents.retryConnectionResponse);
         };
      }
      if (!activeVin.automatedVin) {
         setVehicleIsConnected(false);
      }
      // eslint-disable-next-line react-hooks/exhaustive-deps
   }, [showVehicleConnectionStatus]);

   useEffect(() => {
      // once the vehicle connected status came true then dismissing the toast messages
      vehicleIsConnected && toast.dismiss(toastIdRef.current);
   }, [vehicleIsConnected]);

   useEffect(() => {
      const themeChangeValue = localStorage.getItem("theme-mode");
      setThemeChange(themeChangeValue === "dark-theme");
   }, []);

   // const showToastBasedOnResponse = (data, isVciDisconnected) => {
   //    if (
   //       data.error &&
   //       ((isVciDisconnected && vciIsConnectedRef.current) ||
   //          (!isVciDisconnected && vehicleIsConnectedRef.current))
   //    ) {
   //       toast.dismiss(toastIdRef.current);
   //       toastIdRef.current = toast.error(
   //          data.message || "Vehicle is disconnected.",
   //          {
   //             autoClose: false,
   //             position: "top-center",
   //          }
   //       );
   //    } else if (
   //       !data.error &&
   //       (!vciIsConnectedRef.current || !vehicleIsConnectedRef.current)
   //    ) {
   //       toast.dismiss(toastIdRef.current);
   //       toast.success(
   //          vciIsConnectedRef.current
   //             ? "Vehicle connected successfully"
   //             : "VCI connected successfully",
   //          {
   //             position: "top-center",
   //          }
   //       );
   //    }
   // };

   const updateRefStatusBasedOnResponse = (data, isVciDisconnected) => {
      if (data.error) {
         if (isVciDisconnected) {
            vciIsConnectedRef.current = !data.error;
            vehicleIsConnectedRef.current = true;
         } else {
            vciIsConnectedRef.current = true;
            vehicleIsConnectedRef.current = !data.error;
         }
      } else {
         vciIsConnectedRef.current = true;
         vehicleIsConnectedRef.current = true;
      }
   };

   const handleConnectivityStatusCallback = (data) => {
      const isVciDisconnected = data.message === "VCI is disconnected.";
      // showToastBasedOnResponse(data, isVciDisconnected);
      // emitting retry event when VCI disconnected error from server
      // Rechecking the connection after 3 seconds
      dispatch(setVciStatusRedux(data?.error))
      setTimeout(() => {
         emitGetConnectivityStatusEvent();
      }, 6000);
      setVehicleIsConnected(!data.error);
      updateRefStatusBasedOnResponse(data, isVciDisconnected);
   };

   const handleRetryStatusCallback = (res) => {
      if (res.error && res.message === "VCI is disconnected.") {
         // emitting retry event after 3 seconds
         setTimeout(() => {
            emitRetryConnectionEvent();
         }, 3000);
      } else {
         setTimeout(() => {
            emitGetConnectivityStatusEvent();
         }, 3000);
      }
   };

   const toggleTheme = () => {
      const body = document.getElementsByTagName("body")[0];
      if (themeChange) {
         body.classList.remove("dark-theme");
         body.classList.add("light-theme");
         localStorage.setItem("theme-mode", "light-theme");
         setThemeChange(false);
         dispatch(getThemeMode(false));
      } else {
         body.classList.add("dark-theme");
         body.classList.remove("light-theme");
         localStorage.setItem("theme-mode", "dark-theme");
         setThemeChange(true);
         dispatch(getThemeMode(true));
      }
   };

   return (
      <>
         <div className="connectivity">
            {showVehicleConnectionStatus && (
               <React.Fragment>
                  <div
                     className="connect-vin-number"
                     style={{ display: "none" }}
                  >
                     <span className="header-vin">
                        <b>VIN:</b> <span>{activeSession?.vinNumber}</span>
                     </span>
                     <span className="header-vin">
                        <b>Work Order ID:</b> {activeSession?.workOrderId}
                     </span>
                  </div>

                  {!vehicleIsConnected && <span className="mini-loader" />}
                  <div
                     className={`connect-check ${
                        vehicleIsConnected ? "online" : "offline"
                     }`}
                     style={{ display: "none" }}
                  >
                     <UsbFillIcon />
                  </div>
                  <div
                     className={`connect-check ${
                        isOnline ? "online" : "offline"
                     }`}
                     style={{ display: "none" }}
                  >
                     <GlobeFillIcon />
                  </div>
               </React.Fragment>
            )}

            <div
               className="toggle-theme"
               id="toggle-theme"
               data-testid="toggle-theme"
               onClick={toggleTheme}
               title={
                  themeChange ? "Switch to light theme" : "Switch to dark theme"
               }
            >
               <div className="toggle-icon-sec" id="toggle-icon-sec">
                  <div className="moon-icon" id="moon-icon">
                     <DarkThemeIcon />
                  </div>
                  <div className="sun-icon" id="sun-icon">
                     <LightThemeIcon />
                  </div>
               </div>
            </div>
            {isUserLoggedIn && <HeaderUser />}
         </div>
      </>
   );
};

export default Connectivity;
