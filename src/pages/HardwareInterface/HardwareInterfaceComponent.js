// export default HardwareInterfaceComponent;
/* eslint-disable sonarjs/no-identical-functions */
/* eslint-disable indent */
import { Fragment, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import HardwareInterfacePopup from "pages/HardwareInterface/HardwareInterfacePopup";
import { ReactComponent as Usb } from "assets/images/usb.svg";
import { useDispatch, useSelector } from "react-redux";
// import { getEcuKeys, saveEcuKeys } from "services/keymanagementService";
import { getLocalAccessToken } from "services/localAuthService";
// import { setLocalAuthData } from "storage/localAuthStorage";

import { addEcuList } from "redux/ecuList.slice";
import {
   getVehicle,
   getVehicleParameters,
   getECUList,
} from "services/dashboardService";
import { createSocketConnection, ecuSocket } from "socket";
import {
   emitGetConnectivityStatusEvent,
   getVciInfo,
} from "socket/socketEmitters";
import { socketEvents } from "socket/socketConstants";
import { clearVciInfo } from "redux/vciInfo.slice";
import routePaths from "routes/routePaths";
import { setVciStatusRedux } from "redux/vciStatus.slice";
// import { saveEcuKeys } from "services/keyManagementService";
// import { setLocalAuthData } from "storage/localAuthStorage";

let loaderTime;
function HardwareInterfaceComponent(props) {
   const [showLoaderPopup, setShowLoaderPopup] = useState(false);
   const [loader, setloader] = useState(false);

   const [detect, setDetect] = useState(false);

   const [accessToken, setAccessToken] = useState();
   console.log("h/w interface comp page,accessToken", accessToken);
   // eslint-disable-next-line no-unused-vars
   const [isBtnDisabled, setIsBtnDisabled] = useState(true);
   const NavigatetoFlashingSetup = JSON.parse(
      localStorage.getItem("NavigateOperator")
   );

   const dispatch = useDispatch();
   // const [vciDetectStatus, setvciDetectStatus] = useState(false);//==cmnt
   const vciDetectStatus = useSelector((state) => state?.vciStatusSlice); //==
   console.log("dd vciDetectStatus", vciDetectStatus);

   const { vciInfo } = useSelector(({ vciInfo, activeVin, manifestData }) => ({
      vciInfo,
      activeVin,
      manifestData,
   }));
   // const selector = useSelector((state) => state?.vciStatusSlice);
   // const vciInfo = useSelector((state) => state.vciInfo);
   // console.log("dd vciInfo", vciInfo);

   let navigate = useNavigate();
   // const routeLocation = useLocation();

   const [vciStatus, setVciStatus] = useState("Detecting VCI ...");

   useEffect(() => {
      // establish socket connection
      createSocketConnection().then(() => {
         // emitting event to fetch VCI info
         emitGetConnectivityStatusEvent();
         // emitGetVciInfoEvent(); //checking h/w is connected or not
         // getVciInfo();
         // detaching the connectivity status event listener before attachin
      });
      ecuSocket.off(socketEvents.connectivityResponse);
      // attaching connectivity status event listener
      ecuSocket.on(
         socketEvents.connectivityResponse,
         handleConnectivityStatusSocketResponse
      );

      // if (!routeLocation.state?.skipECUKeysFetch) {
      //    fetchAndSaveECUPrivateKeys();
      // }
      // eslint-disable-next-line react-hooks/exhaustive-deps
   }, []);

   useEffect(() => {
      handleVCIDetectedData();
      // eslint-disable-next-line react-hooks/exhaustive-deps
   }, [vciInfo]);

   const handleVCIDetectedData = () => {
      if (vciInfo) {
         if (!vciInfo.error) {
            //   setConnectButtonEnabled(true);
            // If VCI detected then triggerring event to keep checking the connected status of the VCI
            checkConnectivityAfterDelay();
         } else {
            // retrying to detect the VCI if error while detecting the VCI
            // checkVciInfoAfterDelay();
         }
      }
   };

   // eslint-disable-next-line sonarjs/cognitive-complexity, no-unused-vars
   const Api = () => {
      getECUList()
         .then((res) => {
            console.log("resresres", res);
            localStorage.setItem("ecuList", JSON.stringify(res?.data?.data));
            dispatch(addEcuList(res?.data?.data));
         })
         .catch((err) => {
            console.log(err);
         });
      getLocalAccessToken().then(async (res) => {
         setAccessToken(res.data.data.Token);
         getVehicle(res.data.data.Token);
         if (res.data.VIN_Number !== "") {
            localStorage.setItem("carStatus", true);
            const vehicleParams = await getVehicleParameters(
               res.data.data.Token
            );
            localStorage.setItem(
               "vehicleParamsData",
               JSON.stringify(vehicleParams?.data)
            );
            // eslint-disable-next-line sonarjs/no-collapsible-if
            if (vehicleParams && NavigatetoFlashingSetup === false) {
               localStorage.setItem("StartEcu", JSON.stringify(true));
               navigate(routePaths.vehicleInfo);
            } else if (vehicleParams && NavigatetoFlashingSetup === true) {
               navigate(routePaths.Flashingsetup);
            }
         }
      });
   };
   useEffect(() => {
      if (vciDetectStatus === false) {
         getVciInfo();
      }
   }, [vciDetectStatus]);
   const handleConnectivityStatusSocketResponse = (data) => {
      dispatch(setVciStatusRedux(data?.error)); //passing true/false
      console.log("dd data", data);
      if (data?.error && data?.message === "VCI is disconnected.") {
         // checkVciInfoAfterDelay();
         // emitGetVciInfoEvent()
         dispatch(clearVciInfo());
      }
      checkConnectivityAfterDelay();
   };

   const checkConnectivityAfterDelay = () => {
      setTimeout(() => {
         emitGetConnectivityStatusEvent();
      }, 3000);
   };

   // const checkVciInfoAfterDelay = () => {
   //    setTimeout(() => {
   //       emitGetVciInfoEvent();
   //    }, 3000);
   // };

   // const fetchAndSaveECUPrivateKeys = () => {
   //    // Fetching the ECU keys
   //    getEcuKeys().then((ecuRes) => {
   //       if (ecuRes && ecuRes.status === 200) {
   //          // Fetching the local access(Auth) token
   //          getLocalAccessToken().then((res) => {
   //             if (res.status === 200) {
   //                setLocalAuthData(res.data.data).then(() => {
   //                   // Sending the keys to local API to save
   //                   saveEcuKeys(ecuRes.data?.data?.ecc_keys_map)
   //                      .then((savedEcuRes) => {
   //                         if (savedEcuRes.status !== 200) {
   //                            console.log(
   //                               "Error while saving the ECU",
   //                               savedEcuRes
   //                            );
   //                         }
   //                      })
   //                      .catch((err) => {
   //                         console.log("Error while saving the ECU", err);
   //                      });
   //                });
   //             }
   //          });
   //       }
   //    });
   // };

   const establishConnectionPopup = () => {
      setShowLoaderPopup(true);
      setloader(true);
      // setvciDetectStatus(true);//==cmnt
      loaderTime = setTimeout(() => {
         setDetect(true);
         setShowLoaderPopup(false);
         setloader(false);
      }, 3000);
   };

   const onClosePopup = () => {
      clearTimeout(loaderTime);
      setShowLoaderPopup(false);
   };

   // eslint-disable-next-line sonarjs/no-identical-functions
   const startDiagnostic = () => {
      if (NavigatetoFlashingSetup === false) {
         localStorage.setItem("StartEcu", JSON.stringify(true));
         navigate(routePaths.vehicleInfo);
      } else if (NavigatetoFlashingSetup === true) {
         navigate(routePaths.Flashingsetup);
      }
      // navigate(routePaths.vehicleInfo)//===
      setShowLoaderPopup(true);
      setloader(true);
      loaderTime = setTimeout(() => {
         setDetect(true);
         setShowLoaderPopup(false);
         setloader(false);
         // Api();
      }, 3000);
   };

   const renderVciInfo = () => {
      //===when h/w not connected
      if (vciDetectStatus === null) {
         return (
            <div className="vci-detector-loader">
               {vciStatus === "Detecting VCI ..." ? (
                  <span className="mini-loader" />
               ) : null}
               &nbsp;&nbsp;&nbsp;
               <span style={{ textAlign: "center" }}>{vciStatus}</span>
            </div>
         );
         //===when h/w not connected (true condition)
      } else if (vciDetectStatus) {
         setTimeout(() => {
            setVciStatus("VCI Not Detected");
         }, 1000);
         return (
            <>
               <div className="vci-detector-loader">
                  {vciStatus === "Detecting VCI ..." ? (
                     <span className="mini-loader" />
                  ) : null}
                  &nbsp;&nbsp;&nbsp;
                  <span style={{ textAlign: "center" }}>{vciStatus}</span>
               </div>
            </>
         );
      } else {
         // when h/w connected (false condition)
         return (
            <>
               {detect ? (
                  <>
                     <h3 style={{ textAlign: "center" }}>
                        VCI Connection Established
                     </h3>

                     <span
                        className="h_w_number"
                        style={{
                           display: "block",
                           textAlign: "center",
                           marginTop: "4px",
                        }}
                     >
                        <p>
                           VCI Part Number -{" "}
                           {vciInfo?.data?.interfacePartNumber}
                        </p>
                        <p>
                           VCI Version -{" "}
                           {vciInfo?.data?.interfaceFirmwareVersion}
                        </p>
                     </span>
                  </>
               ) : (
                  <>
                     {loader ? (
                        <>
                           <div className="vci-detector-loader">
                              <span className="mini-loader" />
                              &nbsp;&nbsp;&nbsp;
                              <span style={{ textAlign: "center" }}>
                                 Detecting VCI ...
                              </span>
                           </div>
                        </>
                     ) : (
                        <h3 style={{ textAlign: "center" }}>
                           VCI Detected
                           {/* VCI Detected - IPEH-004022 */}
                           {/* {vciInfo?.data?.interfacePartNumber &&
                              ` - ${vciInfo?.data?.interfacePartNumber}`} */}
                        </h3>
                     )}
                  </>
               )}
            </>
         );
      }
   };
   useEffect(() => {
      if (vciDetectStatus === null || vciDetectStatus === true) {
         setloader(true);
         setIsBtnDisabled(true);
         setTimeout(() => {
            setloader(false);
         }, 3000);
      } else if (vciDetectStatus === false) {
         setDetect(false);
         setIsBtnDisabled(false);
      }
   }, [vciDetectStatus]);

   return (
      <div className="common-component">
         {showLoaderPopup && (
            <HardwareInterfacePopup
               onRetryVinDetection={establishConnectionPopup}
               onClosePopup={onClosePopup}
               isloading={loader}
               detected={detect}
            />
         )}

         <div className="interface-component">
            <div className="conncection-content">
               <Fragment>
                  <div className="vci-model-box">
                     <div
                        className="vci-connection"
                        id="detect-vci-button"
                        data-testid="detectedvci-button"
                     >
                        <div className="usb-detection">
                           <Usb />
                        </div>
                        <div className="vci-detected">{renderVciInfo()}</div>
                        {!detect ? (
                           <>
                              <button
                                 // disabled={vciDetectStatus}
                                 disabled={isBtnDisabled}
                                 className="establish-conneciton"
                                 onClick={establishConnectionPopup}
                              >
                                 <span>Establish Connection</span>
                              </button>
                           </>
                        ) : !vciDetectStatus ? (
                           <>
                              <button
                                 // disabled={vciDetectStatus}
                                 className="establish-conneciton"
                                 onClick={startDiagnostic}
                              >
                                 <span>Start Diagnostics</span>
                              </button>
                           </>
                        ) : (
                           <>
                              <button
                                 disabled={isBtnDisabled}
                                 className="establish-conneciton"
                                 onClick={establishConnectionPopup}
                              >
                                 <span>Establish Connection</span>
                              </button>
                           </>
                        )}
                     </div>
                  </div>
               </Fragment>
               <div></div>
            </div>
         </div>
      </div>
   );
}

export default HardwareInterfaceComponent;
