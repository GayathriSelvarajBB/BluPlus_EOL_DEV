/* eslint-disable sonarjs/cognitive-complexity */
/* eslint-disable indent */
/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */

import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import routePaths from "routes/routePaths";
import Car2dImg from "../../../assets/images/car.png";
import { getEachEcuDetails } from "services/dashboardService";
import notDetectedImg from "../../../assets/images/notDetected.png";
import { useDispatch, useSelector } from "react-redux";
import { getFreezeAll } from "redux/freezeSlice";
import { HashLink } from "react-router-hash-link";
import {
   checkEcuConnectivity,
   getReadEcuDtcListCallEvent,
} from "socket/socketEmitters";
import { removeAllDTCListRedux } from "redux/ecuDtcList.slice";
import {
   modifyEcusScanList,
   removeAllScanEcuListRedux,
} from "redux/ecusScanList.slice";

const CarSection = ({
   setIsDignoseBtnDisable,
   isDignoseBtnDisable,
   setNotDetectEcu,
   setEachEcuDetails,
   eachEcuDetails,
   setisDisabled,
   isDisabled,
   setDtcList,
}) => {
   const [progressing, setProgressing] = useState(0);
   const [scanEcuList, setScanEcuList] = useState([]);
   const [index, setIndex] = useState(0);
   const [ecuNamesStatic] = useState([
      "ENGINE",
      "ABS",
      "CLUSTER",
      "BCM",
      "ACU",
   ]);

   let percent = Math.ceil(progressing);
   let commonEcuImgPath = "ECUParts"; //ecu imgs kept in public folder
   // const usbStatus = useSelector((state) => state?.vciStatusSlice); 
   const usbStatus = false
   const dispatch = useDispatch();
   const scanEcuListData = useSelector((state) => state.ecusScanListSlice); //socket
   const ecuDtcListData = useSelector((state) => state.ecuDtcListSlice); //socket
   console.log("dd scanEcuListData", scanEcuListData);
   console.log("dd ecuDtcListData", ecuDtcListData);

   //===after click, ecu list storing to state frm redux
   useEffect(() => {
      setScanEcuList(scanEcuListData);
   }, [scanEcuListData]);

   //===after click, dtc parameters storing to state frm redux in array format
   useEffect(() => {
      setDtcList(ecuDtcListData);

      //sending to redux for adding dtcSatus in ecu scan list,
      dispatch(modifyEcusScanList(ecuDtcListData));
   }, [ecuDtcListData]);

   //onClick, ecuScan button
   const ecuScanOnClick = () => {
      setEachEcuDetails(null);
      dispatch(removeAllScanEcuListRedux([])); //socket--whenever click, making empty redux state
      dispatch(removeAllDTCListRedux([]));
      setIndex(0);
      setProgressing(0);
      setDtcList([]);
      dispatch(getFreezeAll(false));
      setisDisabled(false); //below useffect
   };

   //=== 1> after click on scan btn, sending req one after another  (ecu dots displaying)
   useEffect(() => {
      if (!usbStatus && !isDisabled && index < ecuNamesStatic.length) {
         checkEcuConnectivity(ecuNamesStatic[index]); //socket--emit event for ecu scan list
         getReadEcuDtcListCallEvent(ecuNamesStatic[index]); //socket--emit event, ecu parameters for ecu health status
      } else {
         setisDisabled(true); // All requests are complete
      }
   }, [isDisabled, index,usbStatus]);

   //== 2> after click on scan btn, once getting previous response then sending next req
   useEffect(() => {
      if (!isDisabled && scanEcuList?.length > 0) {
         setIndex((pre) => pre + 1);
      }
   }, [scanEcuList.length]);

   //== 3> progress bar increases b/w req, res
   // let intervalId = null;
   useEffect(() => {
      if (!usbStatus && !isDisabled && progressing < 100) {
         // intervalId = setTimeout(() => {
         setTimeout(() => {
            setProgressing((pre) => pre + 0.5);
            stopProgressFun();
         }, 500);
      } else {
         setProgressing(0);
         // clearInterval(intervalId);
         setisDisabled(true);
         dispatch(getFreezeAll(true));
      }
      // return () => {
      //    clearInterval(intervalId);
      // };
   }, [isDisabled, progressing,usbStatus]);
   //==stop progress bar after few sec if the 1st res not comes
   let stopProgressFun = () => {
      if (progressing > 23 && scanEcuListData?.length < 1) {
         setProgressing(24);
      }
   };
   //== 4> progress bar based on res
   useEffect(() => {
      setProgressing((scanEcuListData?.length / ecuNamesStatic.length) * 100);
   }, [scanEcuListData?.length]);

   //while disconnected vci, state (redux) making empty
   useEffect(() => {
      if (usbStatus || usbStatus === null) {
         dispatch(removeAllScanEcuListRedux([])); //socket--making empty redux state
         dispatch(removeAllDTCListRedux([]));
      }
   }, [usbStatus]);

   //onclick Cancel Scanning
   const onclickCancelScanning = () => {
      setisDisabled(true);
      dispatch(getFreezeAll(true));
   };

   const getEcuDetails = async (ecu) => {
      // let btnDisable = scanEcuList.filter((item) => item.ecuName === ecu?.ecuName);
      // if (btnDisable[0].ecuStatus === "found") {
      //       setIsDignoseBtnDisable(true);
      //    setNotDetectEcu({});
      // } else {
      //       setIsDignoseBtnDisable(false);
      //    }
      getEachEcuDetails(ecu?.ecuName).then((res) => {
         // let updateData = { ...res, ecuStatus: btnDisable[0].ecuStatus };
         setEachEcuDetails(res);
      });
   };

   //Diagnose button, Navigate to fault management page
   const OnclickGotoFaultMng = (ecuName) => {
      localStorage.setItem("faultEcu", JSON.stringify(ecuName));
      localStorage.setItem("sidebarMenuName", JSON.stringify("Fault Management"));
   };

   return (
      <>
         <section className="car_section">
            {/* ======Ecu Scan Button====== */}
            <div className="progress_btn">
               <button
                  id="scan-btn"
                  className={`${
                     isDisabled ? "scanEcuBtn" : "scanEcuBtn_disabled"
                  }`}
                  onClick={ecuScanOnClick}
                  disabled={!isDisabled}
               >
                  Scan Vehicle
               </button>
               {percent > 0 ? (
                  <div className="progress_bar_div">
                     <div className="percentage_div">
                        <span id="scanning-msg">
                           {percent === 100
                              ? "ECU Scan successfully completed"
                              : "Communication in progress, please wait..."}
                        </span>
                        <span id="percent-value">{percent}%</span>
                     </div>
                     <div className="outer_progress_bar">
                        <div
                           id="progress-bar"
                           className={`inner_progress_bar progress_bar_on ${
                              percent < 1 ? "display_none" : ""
                           }`}
                           style={{ width: `${percent}%` }}
                        ></div>
                     </div>
                     <button id="cancel-btn" onClick={onclickCancelScanning}>
                        Cancel
                     </button>
                  </div>
               ) : null}
            </div>
            {/* ====2d Car image==== */}
            <div className="car2d_div">
               <div className="car_img_div">
                  {scanEcuListData?.data?.data?.imgSrc?.url ? (
                     <img
                        id="2dcar-img"
                        src={`${commonEcuImgPath}/${scanEcuListData?.data?.data?.imgSrc?.url}`}
                        alt="car-img"
                     />
                  ) : (
                     <img id="2dcar-img-offline" src={Car2dImg} alt="car-img" />
                  )}
                  {/* ====Ecus Dots==== */}
                  {scanEcuList?.length > 0 ? (
                     <>
                        {scanEcuList?.map((ecu, i) => {
                           return (
                              <div
                                 key={ecu?.ecuPositionData?.id}
                                 id={`${
                                    ecu?.ecuStatus === "found"
                                       ? "Fault-ecu"
                                       : // : ecu?.ecuStatus === "Inactive"
                                         // ? "not-detected-ecu"
                                         "good-ecu"
                                 }`}
                                 name={i}
                                 className={`coordinates_dot ${
                                    ecu?.ecuStatus === "found"
                                       ? "coordinates_bg_yellow"
                                       : ecu?.ecuStatus === "No DTC found"
                                       ? "coordinates_bg_green "
                                       : "coordinates_bg_grey"
                                 } `}
                                 style={{
                                    left: `${ecu?.ecuPositionData?.directionX}%`,
                                    top: `${ecu?.ecuPositionData?.directionY}%`,
                                 }}
                                 onClick={() =>
                                    isDisabled &&
                                    getEcuDetails(ecu)
                                 }
                              >
                                 {/* {i + 1} */}
                              </div>
                           );
                        })}
                     </>
                  ) : null}
               </div>

               {/* ======getting each Ecu Details after click====== */}
               {eachEcuDetails?.data?.data?.length > 0 ? (
                  <div className="ecu_details">
                     {eachEcuDetails?.data?.data?.map((ecu, i) =>
                        !isDignoseBtnDisable ? (
                           <div className="ecu_details_main" key={i}>
                              <div className="ecu_details_img">
                                 <img
                                    id="ecu-img"
                                    src={` ${commonEcuImgPath}/${ecu.imgUrl}`}
                                    alt={ecu.ecuName}
                                 />
                              </div>
                              <ul>
                                 <li className="ecu_name">
                                    <strong>
                                       {ecu.ecuDescription} ({ecu.ecuName})
                                    </strong>
                                 </li>
                                 <li className="ecu_name">
                                    ECU H/W Part No:
                                    <strong> {ecu.ecuHardwarePartNo} </strong>
                                 </li>
                                 <li className="ecu_name">
                                    ECU S/W Part No:{" "}
                                    <strong>{ecu.ecuSoftwarePartNo}</strong>
                                 </li>
                                 <li className="ecu_name1">
                                    ECU Version:{" "}
                                    <strong>{ecu.softwareVersion}</strong>
                                 </li>
                                 <li className="ecu_name">
                                    <HashLink
                                       to={`${routePaths.diagnosticMeasurement}#${ecu.ecuName}`}
                                    >
                                       {/* <div> */}
                                       <button
                                          id="Diagnose-btn"
                                          onClick={() =>
                                             OnclickGotoFaultMng(ecu.ecuName)
                                          }
                                          disabled={isDignoseBtnDisable}
                                       >
                                          Diagnose
                                       </button>
                                       {/* </div> */}
                                    </HashLink>
                                 </li>
                              </ul>
                           </div>
                        ) : (
                           <div className="ecu_details_main" key={i}>
                              <div className="ecu_details_img">
                                 <img src={notDetectedImg} alt="img" />
                              </div>
                              <ul>
                                 <li>
                                    <strong>{ecu.ecuDescription}</strong>
                                 </li>
                                 <li className="ecu_name_default">
                                    Check power supply to ECU
                                 </li>
                                 <li className="ecu_name_default">
                                    Check the wiring ( ground & CAN)
                                 </li>
                                 <li className="ecu_name1_default">
                                    Redo the SCAN Vehicle
                                 </li>
                                 <li>
                                    <Link to={routePaths.diagnosticMeasurement}>
                                       <div>
                                          <button
                                             className={`${
                                                isDignoseBtnDisable &&
                                                "btn_disabled"
                                             }`}
                                             onClick={() =>
                                                OnclickGotoFaultMng(ecu.ecuName)
                                             }
                                             disabled={isDignoseBtnDisable}
                                          >
                                             Diagnose
                                          </button>
                                       </div>
                                    </Link>
                                 </li>
                              </ul>
                           </div>
                        )
                     )}
                  </div>
               ) : null}
            </div>

            {/* Indicaters Dots, bottom legends */}
            <div className="indicaters">
               <div className="common_indicaters">
                  <div className="dot_green common_dots"></div>
                  <span>ECU without Faults</span>
               </div>
               <div className="common_indicaters">
                  <div className="dot_yellow common_dots"></div>
                  <span>ECU with Faults</span>
               </div>
               <div className="common_indicaters">
                  <div className="dot_grey common_dots"></div>
                  <span>ECU not Detected</span>
               </div>
            </div>
         </section>
      </>
   );
};

export default CarSection;
