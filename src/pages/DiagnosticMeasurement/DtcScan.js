/* eslint-disable sonarjs/cognitive-complexity */
/* eslint-disable indent */
/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import SideBar from "components/SideBar/SideBar";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
   removeMemorizedDTC,
   addDTCRedux,
   removeDTCRedux,
   addDTCReduxfrmVsummry,
   reScanecus,
   addALLDTCRedux,
   removeAllDTCRedux,
} from "redux/dtcList.slice";
import { getDTC, getScanEcusList } from "services/dashboardService";
import CommonPopup from "components/commonPopup/CommonPopup";
import routePaths from "routes/routePaths";
import { useNavigate } from "react-router-dom";
import SnapShot from "./SnapShot";
import infoLogo from "../../assets/images/Book.svg";
import snap from "../../assets/images/snap-w.svg";
import Close from "../../assets/images/close.svg";
import { Link } from "react-router-dom";
import closeIcon from "../../assets/images/cross.png";
import expandIcon from "../../assets/images/expand2.png";
import { clearDTCListRedux, scanDTCListRedux } from "redux/ecuDtcList.slice";

function DtcScan() {
   const scanEcuListData = useSelector((state) => state.ecusScanListSlice); //socket
   const ecuDtcListData = useSelector((state) => state.ecuDtcListSlice); //socket
   const [ecuDtcMainListFrmReduc, setEcuDtcMainListFrmReduc] = useState([]);
   const [ecuDtcListFrmReduc, setEcuDtcListFrmReduc] = useState([]);
   const [ecusScanList, setEcusScanList] = useState([]);
   const [scanEcuList, setScanEcuList] = useState({});

   const [selectedEcuName, setSelectedEcuName] = useState([]);

   //after page render, storing dtc parameters to state from redux
   useEffect(() => {
      setEcuDtcMainListFrmReduc(ecuDtcListData);

      if (selectedEcuName) {
         selectedEcuName.map((ecuname) => {
            let filtereddata = ecuDtcListData?.filter(
               (item) => item.ecuName === ecuname
            );
            setEcuDtcListFrmReduc((pre) => [...pre, filtereddata]);
         });
      }
   }, [ecuDtcListData]);

   //after page render, storing ecu list to state from redux
   useEffect(() => {
      let newEcuListData = [];
      Array.isArray(scanEcuListData) &&
         scanEcuListData?.filter((ecu) => {
            // if (ecu.ecuStatus !== "Inactive") {
            if (ecu.ecuStatus === "found") {
               newEcuListData.unshift(ecu);
            } else {
               newEcuListData.push(ecu);
            }
            // }
         });
      let updateEcuData = newEcuListData.map((item) => {
         return { ...item, selected: false };
      });
      setScanEcuList(updateEcuData);
   }, [scanEcuListData]);

   const dtcParam1 = useSelector((state) => state.dtcListSlice);
   // const ecuList = useSelector((state) => state.ecuListSlice);
   const [dtcParams, setDtcParams] = useState([]);
   let copyData = [...dtcParams];
   const dispatch = useDispatch();

   const [activeBus] = useState(
      localStorage.getItem("busName") ? localStorage.getItem("busName") : "BCM"
   );
   const [clearedDtc, setClearedDTC] = useState([]);
   const [clearBtn, setClearBtn] = useState(false);
   const [isDisabled, setisDisabled] = useState(true);
   const [IsSelectAllCheckboxes, setIsSelectAllCheckboxes] = useState(false);
   const [command, setCommand] = useState("");
   const [info, setInfo] = useState(true);
   const [ecuStatus, setEcuStatus] = useState(true);
   const [isPdfProcedure, setIsPdfProcedure] = useState(true);
   const [isPdfImg, setIsPdfImg] = useState(true);
   const history = useNavigate();

   //======click from v-summary page to get params, call in useEffect below
   const getdtcParamsFrmVsummry = (faultEcuName) => {
      let newEcuListData = [];
      localStorage.removeItem("faultEcu");

      Array.isArray(scanEcuListData) &&
         scanEcuListData?.filter((ecu) => {
            // if (ecu.ecuStatus !== "Inactive") {
            if (ecu.ecuStatus === "found") {
               newEcuListData.unshift(ecu);
            } else {
               newEcuListData.push(ecu);
            }
            // }
         });
      let updateEcuData = newEcuListData.map((item) => {
         if (item.ecuName === faultEcuName) {
            return { ...item, selected: true };
         } else {
            return { ...item, selected: false };
         }
      });

      setScanEcuList(updateEcuData);

      let filtereddata =
         Array.isArray(ecuDtcListData) &&
         ecuDtcListData?.filter((item) => item.ecuName === faultEcuName);
      setEcuDtcListFrmReduc((pre) => [...pre, filtereddata]);
   };

   //from vehicle summary page
   useEffect(() => {
      let faultEcuName = JSON.parse(localStorage.getItem("faultEcu"));

      if (faultEcuName) {
         getdtcParamsFrmVsummry(faultEcuName);
         setSelectedEcuName([faultEcuName]);
      }
   }, []);

   //===Onclick getting ecu params,====
   const getDTCApi = (ecu, from, event) => {
      setInfo(true); //pdf hiding
      if (event.target.checked) {
         setClearBtn(false);

         selectedCheckboxes(ecu.ecuName, event.target.checked);
         setSelectedEcuName((pre) => [...pre, ecu.ecuName]);

         let filtereddata = ecuDtcMainListFrmReduc?.filter(
            (item) => item.ecuName === ecu?.ecuName
         );
         setEcuDtcListFrmReduc((pre) => [...pre, filtereddata]);

         setScanEcuList(
            scanEcuList.filter((item) => {
               if (item.ecuName === ecu.ecuName) {
                  item.selected = true;
               }
               return item;
            })
         );
      } else {
         setIsSelectAllCheckboxes(false);
         dispatch(removeDTCRedux(ecu));
         let filterEcuName = selectedEcuName.filter(
            (item) => item !== ecu.ecuName
         );
         setSelectedEcuName(filterEcuName);

         let indexx = ecuDtcListFrmReduc.findIndex((item) =>
            item?.find((elem) => elem.ecuName === ecu?.ecuName)
         );
         if (indexx >= 0) {
            ecuDtcListFrmReduc.splice(indexx, 1);
         }

         selectedCheckboxes(ecu.ecuName, event.target.checked);
      }
   };

   const reScan = () => {
      setisDisabled(false);
      setCommand("Scaning is in-progress, please wait...");
      setTimeout(() => {
         setEcuDtcListFrmReduc([]);
         dispatch(scanDTCListRedux(selectedEcuName)); //socket

         setisDisabled(true);
         setCommand("Scaning is completed");
         setTimeout(() => {
            setCommand("");
         }, 1000);
      }, 3000);
   };
   const clearDTC = () => {
      setEcuDtcListFrmReduc([]);
      dispatch(clearDTCListRedux(selectedEcuName)); //socket
   };

   useEffect(() => {
      setDtcParams(dtcParam1);
   }, [dtcParam1, activeBus]);

   //==function for checking ecu checkbox selected or not===
   let selectedCheckboxes = (ecuname, ecuChecked) => {
      setScanEcuList(
         scanEcuList?.filter((item) => {
            if (item.ecuName === ecuname) {
               item.selected = ecuChecked;
            }
            return item;
         })
      );
   };

   //=====select all ecus, get all dtc params=====
   const getSelectAll = async (e) => {
      setEcuDtcListFrmReduc([]);
      setSelectedEcuName([]);

      setIsSelectAllCheckboxes(!IsSelectAllCheckboxes);
      if (e.target.checked) {
         for (let ecu of scanEcuList) {
            selectedCheckboxes(ecu.ecuName, e.target.checked);
            setSelectedEcuName((pre) => [...pre, ecu.ecuName]);

            // setEcuDtcListFrmReduc(ecuDtcMainListFrmReduc)
            // if (ecu?.ecuStatus === "found") {
            let filtereddata = ecuDtcMainListFrmReduc?.filter(
               (item) => item.ecuName === ecu?.ecuName
            );
            setEcuDtcListFrmReduc((pre) => [...pre, filtereddata]);
            // }
         }
      } else {
         for (let ecu of scanEcuList) {
            selectedCheckboxes(ecu.ecuName, e.target.checked);
            setEcuDtcListFrmReduc([]);
            setSelectedEcuName([]);
         }
      }
   };

   const [diagProcedureHeading, setDiagProcedureHeading] = useState("");
   const getInfo = (eachDtc) => {
      setDiagProcedureHeading(eachDtc.diagnosticTroubleCode);
      setInfo(!info);
   };
   const getSnapShot = () => {
      setEcuStatus(!ecuStatus);
   };
   //======================================
   const [pdfImgsLink] = useState([
      {
         imgName: "fuse",
         imgLink: "https://developmentbb.blob.core.windows.net/bcm/Fuse.gif",
      },
      {
         imgName: "Connector",
         imgLink:
            "https://developmentbb.blob.core.windows.net/bcm/Connector%20_T42.jpg",
      },
      {
         imgName: "Terminals",
         imgLink:
            "https://developmentbb.blob.core.windows.net/bcm/Terminals.gif",
      },
      {
         imgName: "BCM",
         imgLink: "https://developmentbb.blob.core.windows.net/bcm/BCM.jpg",
      },
      {
         imgName: "Rain_sensor",
         imgLink:
            "https://developmentbb.blob.core.windows.net/bcm/Rain_sensor.gif",
      },
   ]);
   const [currentPpfImgs, setCurrentPdfImg] = useState("");
   const [activeCategory, setActiveCategory] = useState("Terminals");
   const handleClickGetPdfImg = (imgname) => {
      setActiveCategory(imgname);
      let imgPath = pdfImgsLink.filter((item) => item.imgName === imgname);
      setCurrentPdfImg(imgPath);
      setIsPdfProcedure(false);
   };

   //define a variable for btn disabling
   let isDtcParamsInactiveFault = false;
   let isData = dtcParams?.map((item) =>
      item.filter((elem) => elem.dtcState === "Memorised fault")
   );
   let isDataLength = isData.every((item) => item.length === 0);
   if (
      clearBtn ||
      !ecuStatus ||
      !info ||
      !isDisabled ||
      dtcParams[0]?.length === 0 ||
      dtcParams?.length === 0 ||
      isData.length === 0 ||
      isDataLength
   ) {
      isDtcParamsInactiveFault = true;
   }

   return (
      <div className="dtc-scan-page">
         <div className="page-wrapper">
            <SideBar />
            <div className="body-wrapper">
               <div className="dtc-scan-container">
                  <div className="dtc-contianer-sec">
                     <div className="dtc-container-list">
                        {/* =======buttons group on the top===== */}
                        <div className="clear-dtc">
                           <div className="right_btns_div" id="right_btns_div">
                              <button
                                 // disabled={
                                 //    !isDisabled ||
                                 //    dtcParams[0]?.length === 0 ||
                                 //    dtcParams?.length === 0 ||
                                 //    !ecuStatus ||
                                 //    !info
                                 // }
                                 onClick={reScan}
                                 id="rescan-btn"
                              >
                                 <span>Scan ECU</span>
                              </button>

                              <button
                                 onClick={clearDTC}
                                 // disabled={isDtcParamsInactiveFault}
                                 id="Clear-DTC-btn"
                              >
                                 <span>Clear DTC</span>
                              </button>
                           </div>
                        </div>
                        {/* ====Ecu & dtc parameters==== */}
                        <div className="fault-manage-DTC">
                              <>
                                 <div id="scan-progress-msg">
                                    {command ? (
                                       <CommonPopup child={command} isPopup={true} />
                                    ) : null}
                                 </div>
                                 {/* ====Ecus rendering==== */}
                                 <div className="sidebar-bus1">
                                    <div
                                       className="select_all"
                                       id="select-all-div"
                                    >
                                       <span id="select-all-btn">
                                          Select all
                                       </span>
                                       <input
                                          type="checkbox"
                                          name="select all"
                                          checked={IsSelectAllCheckboxes}
                                          onChange={getSelectAll}
                                       />
                                    </div>
                                    <ul
                                       className="sidebar-bus-list-dtc"
                                       id="ul-sidebar-bus-list-dtc"
                                    >
                                       {Array.isArray(scanEcuList)
                                          ? scanEcuList?.map((ecu, i) => (
                                               <label
                                                  key={i}
                                                  id={i + 1}
                                                  name={ecu?.ecuName}
                                                  value={ecu?.ecuName}
                                               >
                                                  <li
                                                     id={ecu.ecuName}
                                                     className={`
                                                     ${
                                                        ecu?.ecuName ===
                                                        activeBus
                                                           ? "dtc-values1 active-dtc1"
                                                           : "dtc-values1"
                                                     } 
                                                     ${
                                                        ecu?.ecuStatus ===
                                                        "found"
                                                           ? "fault_ecus_orange"
                                                           : "fault_ecus_green"
                                                     } `}
                                                  >
                                                     {ecu?.ecuName}
                                                     <input
                                                        type="checkbox"
                                                        name="ecuName"
                                                        id={ecu?.ecuName}
                                                        value={ecu?.ecuName}
                                                        checked={ecu?.selected}
                                                        onChange={(event) =>
                                                           getDTCApi(
                                                              ecu,
                                                              "ecu",
                                                              event
                                                           )
                                                        }
                                                     />
                                                  </li>
                                               </label>
                                            ))
                                          : null}
                                    </ul>
                                 </div>
                                 {ecuStatus ? (
                                    <>
                                       {/* =====parameters rendering===== */}
                                       {info ? (
                                          <div className="bus-code1">
                                             {ecuDtcListFrmReduc?.length ===
                                             0 ? (
                                                <div
                                                   className="no-dtc-txt"
                                                   id="no-dtc-txt"
                                                >
                                                   <span>No DTC Found</span>
                                                </div>
                                             ) : (
                                                <div>
                                                   <ul className="bus-code-list">
                                                      {ecuDtcListFrmReduc.map(
                                                         (item, i) => {
                                                            return (
                                                               <div key={i}>
                                                                  {item?.length >
                                                                  0 ? (
                                                                     <ul>
                                                                        <p
                                                                           id={
                                                                              item[0]
                                                                                 .ecuName
                                                                           }
                                                                        >
                                                                           {
                                                                              item[0]
                                                                                 ?.ecuName
                                                                           }
                                                                        </p>
                                                                        {item[0]?.ecuDtcMapList?.map(
                                                                           (
                                                                              eachDtc,
                                                                              i
                                                                           ) => {
                                                                              if (
                                                                                 eachDtc?.isDtcFound ===
                                                                                 "found"
                                                                              ) {
                                                                                 return (
                                                                                    <li
                                                                                       key={
                                                                                          i
                                                                                       }
                                                                                       name={`${
                                                                                          eachDtc
                                                                                             ?.readDtc[
                                                                                             "dtcState"
                                                                                          ] ===
                                                                                          "Active"
                                                                                             ? "active-dtc-list"
                                                                                             : eachDtc
                                                                                                  ?.readDtc[
                                                                                                  "dtcState"
                                                                                               ] ===
                                                                                               "Memorised"
                                                                                             ? "in-active-dtc-list"
                                                                                             : "pending-dtc-value"
                                                                                       }`}
                                                                                       className={`${
                                                                                          eachDtc
                                                                                             ?.readDtc[
                                                                                             "dtcState"
                                                                                          ] ===
                                                                                          "Active"
                                                                                             ? "active-dtc-list"
                                                                                             : eachDtc
                                                                                                  ?.readDtc[
                                                                                                  "dtcState"
                                                                                               ] ===
                                                                                               "Memorised"
                                                                                             ? "in-active-dtc-list"
                                                                                             : "pending-dtc-value"
                                                                                       }`}
                                                                                    >
                                                                                       <span
                                                                                          id={
                                                                                             eachDtc
                                                                                                ?.readDtc[
                                                                                                "diagnosticTroubleCode"
                                                                                             ]
                                                                                          }
                                                                                       >
                                                                                          {
                                                                                             eachDtc
                                                                                                ?.readDtc[
                                                                                                "diagnosticTroubleCode"
                                                                                             ]
                                                                                          }
                                                                                       </span>
                                                                                       <span
                                                                                          id={`${eachDtc?.readDtc["diagnosticTroubleCode"]}-${i}`}
                                                                                       >
                                                                                          {
                                                                                             eachDtc
                                                                                                ?.readDtc[
                                                                                                "description"
                                                                                             ]
                                                                                          }
                                                                                          <img
                                                                                             name="snap-shot"
                                                                                             onClick={
                                                                                                getSnapShot
                                                                                             }
                                                                                             src={
                                                                                                snap
                                                                                             }
                                                                                             alt="snap-img"
                                                                                          />
                                                                                          <img
                                                                                             name="info-icon"
                                                                                             onClick={() =>
                                                                                                getInfo(
                                                                                                   eachDtc
                                                                                                )
                                                                                             }
                                                                                             src={
                                                                                                infoLogo
                                                                                             }
                                                                                             alt="info-img"
                                                                                          ></img>
                                                                                       </span>
                                                                                    </li>
                                                                                 );
                                                                              } else {
                                                                                 return (
                                                                                    <li
                                                                                       key={
                                                                                          i
                                                                                       }
                                                                                       // name={`${
                                                                                       //    eachDtc
                                                                                       //       ?.readDtc[
                                                                                       //       "dtcState"
                                                                                       //    ] ===
                                                                                       //    "Active"
                                                                                       //       ? "active-dtc-list"
                                                                                       //       : eachDtc
                                                                                       //            ?.readDtc[
                                                                                       //            "dtcState"
                                                                                       //         ] ===
                                                                                       //         "Memorised"
                                                                                       //       ? "in-active-dtc-list"
                                                                                       //       : "pending-dtc-value"
                                                                                       // }`}
                                                                                       className={`${
                                                                                          eachDtc
                                                                                             ?.readDtc[
                                                                                             "dtcState"
                                                                                          ] ===
                                                                                          "Active"
                                                                                             ? "active-dtc-list"
                                                                                             : eachDtc
                                                                                                  ?.readDtc[
                                                                                                  "dtcState"
                                                                                               ] ===
                                                                                               "Memorised"
                                                                                             ? "in-active-dtc-list"
                                                                                             : "pending-dtc-value"
                                                                                       }`}
                                                                                    >
                                                                                       {/* <span
                                                                                          id={
                                                                                             eachDtc
                                                                                                ?.readDtc[
                                                                                                "diagnosticTroubleCode"
                                                                                             ]
                                                                                          }
                                                                                       >
                                                                                          {
                                                                                             eachDtc
                                                                                                ?.readDtc[
                                                                                                "diagnosticTroubleCode"
                                                                                             ]
                                                                                          }
                                                                                       </span> */}
                                                                                       {/* <span
                                                                                          id={`${eachDtc?.readDtc["diagnosticTroubleCode"]}-${i}`}
                                                                                       >
                                                                                          {
                                                                                             eachDtc
                                                                                                ?.readDtc[
                                                                                                "description"
                                                                                             ]
                                                                                          }
                                                                                          <img
                                                                                             name="snap-shot"
                                                                                             onClick={
                                                                                                getSnapShot
                                                                                             }
                                                                                             src={
                                                                                                snap
                                                                                             }
                                                                                             alt="snap-img"
                                                                                          />
                                                                                          <img
                                                                                             name="info-icon"
                                                                                             onClick={() =>
                                                                                                getInfo(
                                                                                                   eachDtc
                                                                                                )
                                                                                             }
                                                                                             src={
                                                                                                infoLogo
                                                                                             }
                                                                                             alt="info-img"
                                                                                          ></img>
                                                                                       </span> */}
                                                                                       <p className="dtc_not_found">
                                                                                          No
                                                                                          data
                                                                                          found
                                                                                       </p>
                                                                                    </li>
                                                                                 );
                                                                              }
                                                                           }
                                                                        )}
                                                                     </ul>
                                                                  ) : null}
                                                               </div>
                                                            );
                                                         }
                                                      )}
                                                   </ul>
                                                </div>
                                             )}
                                          </div>
                                       ) : (
                                          <>
                                             <div className="change_design">
                                                {isPdfImg ? (
                                                   <div
                                                      style={{
                                                         display: "flex",
                                                         justifyContent:
                                                            "flex-end",
                                                         marginBottom: "7px",
                                                      }}
                                                   >
                                                      <img
                                                         src={Close}
                                                         onClick={() =>
                                                            setInfo(!info)
                                                         }
                                                         alt="close"
                                                      />
                                                   </div>
                                                ) : null}
                                                {isPdfImg ? (
                                                   <div className="pdf_con">
                                                      <div className="pdf_left">
                                                         <p className="para_heading">
                                                            <span>
                                                               {
                                                                  diagProcedureHeading
                                                               }{" "}
                                                               - Diagnostics
                                                               procedure
                                                            </span>
                                                            {/* <span>
                                                         DTC 056016 - Voltage
                                                         too low - Diagnostics
                                                         procedure
                                                      </span> */}
                                                         </p>
                                                         {/* step-1 */}
                                                         <div>
                                                            <strong>
                                                               Step 1 Check Fuse
                                                            </strong>
                                                            <ul>
                                                               <li>
                                                                  {" "}
                                                                  Turn the
                                                                  ignition OFF
                                                               </li>
                                                               <li>
                                                                  {" "}
                                                                  Visually check
                                                                  the condition
                                                                  of the fuse
                                                                  (Fuse should
                                                                  not be blown)
                                                               </li>
                                                               <li>
                                                                  {" "}
                                                                  Check the
                                                                  continuity of
                                                                  the fuse
                                                                  terminals by
                                                                  using
                                                                  multimeter.
                                                               </li>
                                                            </ul>
                                                            <div>
                                                               <p>
                                                                  Is the Fuse,
                                                                  okay?
                                                               </p>
                                                               <p>
                                                                  Yes ==&gt; Go
                                                                  to step 2
                                                               </p>
                                                               <p>
                                                                  NO ==&gt;
                                                                  Replace the
                                                                  fuse.
                                                                  <Link
                                                                     onClick={() =>
                                                                        handleClickGetPdfImg(
                                                                           "fuse"
                                                                        )
                                                                     }
                                                                     // () =>
                                                                     //    setIsPdfProcedure(
                                                                     //       false
                                                                     //    )
                                                                     // }
                                                                  >
                                                                     Click here
                                                                  </Link>
                                                               </p>
                                                            </div>
                                                         </div>
                                                         {/* step-2 */}
                                                         <div>
                                                            <strong>
                                                               Step 2 Check the
                                                               power supply
                                                               circuit
                                                            </strong>
                                                            <ul>
                                                               <li>
                                                                  {" "}
                                                                  Disconnect the
                                                                  Rain sensor
                                                                  harness
                                                                  connector.
                                                               </li>
                                                               <li>
                                                                  Turn the
                                                                  ignition ON.
                                                               </li>
                                                               <li>
                                                                  Check the
                                                                  power supply
                                                                  at rain sensor
                                                                  harness
                                                                  connector
                                                                  terminals.
                                                               </li>
                                                            </ul>
                                                            <p>
                                                               Connector:
                                                               T42&nbsp;
                                                               <Link
                                                                  onClick={() =>
                                                                     handleClickGetPdfImg(
                                                                        "Connector"
                                                                     )
                                                                  }
                                                               >
                                                                  Click here
                                                               </Link>
                                                            </p>
                                                            <p>
                                                               Terminals:
                                                               Between 32 and
                                                               34&nbsp;
                                                               <Link
                                                                  onClick={() =>
                                                                     handleClickGetPdfImg(
                                                                        "Terminals"
                                                                     )
                                                                  }
                                                               >
                                                                  Click here
                                                               </Link>
                                                            </p>
                                                            <p>
                                                               Is the voltage
                                                               value between 5V
                                                               -7V?
                                                            </p>
                                                            <p>
                                                               Yes ==&gt; Go to
                                                               step 4
                                                            </p>
                                                            <p>
                                                               NO ==&gt; Go to
                                                               step 3
                                                            </p>
                                                         </div>
                                                         {/* step-3 */}
                                                         <div>
                                                            <strong>
                                                               Step 3 Check the
                                                               conformity of the
                                                               rain sensor
                                                               wiring harness
                                                            </strong>
                                                            <ul>
                                                               <li>
                                                                  Check the
                                                                  continuity,
                                                                  insulation
                                                                  check (12V or
                                                                  earth) for the
                                                                  wiring
                                                                  harness.
                                                               </li>
                                                               <li>
                                                                  Connector:
                                                                  T42&nbsp;
                                                                  <Link
                                                                     onClick={() =>
                                                                        handleClickGetPdfImg(
                                                                           "Connector"
                                                                        )
                                                                     }
                                                                  >
                                                                     Click here
                                                                  </Link>
                                                               </li>
                                                               <li>
                                                                  Terminals:
                                                                  Between 32 and
                                                                  34&nbsp;
                                                                  <Link
                                                                     onClick={() =>
                                                                        handleClickGetPdfImg(
                                                                           "Terminals"
                                                                        )
                                                                     }
                                                                  >
                                                                     Click here
                                                                  </Link>
                                                               </li>
                                                               <li>ECU: BCM</li>
                                                            </ul>
                                                            <p>
                                                               Is the test
                                                               result, okay?
                                                            </p>

                                                            <p>
                                                               Yes ==&gt; Go to
                                                               step 4
                                                            </p>
                                                            <p>
                                                               NO ==&gt; Repair
                                                               the wiring
                                                               harness connector
                                                            </p>
                                                         </div>
                                                         {/* step-4 */}
                                                         <div>
                                                            <strong>
                                                               Step 4 Check the
                                                               rain sensor
                                                            </strong>
                                                            <ul>
                                                               <li>
                                                                  Check the
                                                                  resistance of
                                                                  the rain
                                                                  sensor.
                                                               </li>
                                                            </ul>
                                                            <p>
                                                               Is the resistance
                                                               value between 25
                                                               ohms - 45 Ohms?
                                                            </p>
                                                            <p>
                                                               Yes ==&gt;
                                                               Replace the
                                                               BCM.&nbsp;
                                                               <Link
                                                                  onClick={() =>
                                                                     handleClickGetPdfImg(
                                                                        "BCM"
                                                                     )
                                                                  }
                                                               >
                                                                  Click here
                                                               </Link>
                                                            </p>
                                                            <p>
                                                               NO ==&gt; Replace
                                                               the Rain
                                                               sensor.&nbsp;
                                                               <Link
                                                                  onClick={() =>
                                                                     handleClickGetPdfImg(
                                                                        "Rain_sensor"
                                                                     )
                                                                  }
                                                               >
                                                                  Click here
                                                               </Link>
                                                            </p>
                                                         </div>
                                                      </div>
                                                      {/* right side, Pdf images rendering */}
                                                      {!isPdfProcedure && (
                                                         <div className="pdf_imgs">
                                                            <div className="img_heading">
                                                               {activeCategory ===
                                                                  "Terminals" ||
                                                               activeCategory ===
                                                                  "fuse" ||
                                                               activeCategory ===
                                                                  "Connector" ? (
                                                                  <>
                                                                     <p>
                                                                        SCHEMATICS
                                                                     </p>
                                                                     <span
                                                                        onClick={() =>
                                                                           handleClickGetPdfImg(
                                                                              "Terminals"
                                                                           )
                                                                        }
                                                                        className={`${
                                                                           activeCategory ===
                                                                              "Terminals" ||
                                                                           activeCategory ===
                                                                              "fuse"
                                                                              ? "activeHeading"
                                                                              : ""
                                                                        }`}
                                                                     >
                                                                        Wiring
                                                                        Diagram
                                                                     </span>
                                                                     <span
                                                                        onClick={() =>
                                                                           handleClickGetPdfImg(
                                                                              "Connector"
                                                                           )
                                                                        }
                                                                        className={`${
                                                                           activeCategory ===
                                                                           "Connector"
                                                                              ? "activeHeading"
                                                                              : ""
                                                                        }`}
                                                                     >
                                                                        Connector
                                                                        Info
                                                                     </span>
                                                                  </>
                                                               ) : (
                                                                  <p>
                                                                     Remove
                                                                     &amp; Refit
                                                                     Procedure
                                                                  </p>
                                                               )}
                                                            </div>
                                                            <div className="img_div">
                                                               <div className="close_expand">
                                                                  <img
                                                                     onClick={() =>
                                                                        setIsPdfImg(
                                                                           false
                                                                        )
                                                                     }
                                                                     src={
                                                                        expandIcon
                                                                     }
                                                                     alt="expand"
                                                                  />
                                                                  <img
                                                                     onClick={() =>
                                                                        setIsPdfProcedure(
                                                                           true
                                                                        )
                                                                     }
                                                                     src={
                                                                        closeIcon
                                                                     }
                                                                     alt="close"
                                                                  />
                                                               </div>
                                                               <img
                                                                  onClick={() =>
                                                                     setIsPdfImg(
                                                                        false
                                                                     )
                                                                  }
                                                                  src={
                                                                     currentPpfImgs[0]
                                                                        .imgLink
                                                                  }
                                                                  alt="wiringDiaIcon"
                                                               />
                                                            </div>
                                                         </div>
                                                      )}
                                                   </div>
                                                ) : (
                                                   // expanding images div
                                                   <div className="pdf_expand_imgs">
                                                      <div className="img_exp_heading">
                                                         <div>
                                                            {activeCategory ===
                                                               "Terminals" ||
                                                            activeCategory ===
                                                               "fuse" ||
                                                            activeCategory ===
                                                               "Connector" ? (
                                                               <span>
                                                                  SCHEMATICS
                                                               </span>
                                                            ) : (
                                                               <span>
                                                                  Remove &amp;
                                                                  Refit
                                                                  Procedure
                                                               </span>
                                                            )}

                                                            <img
                                                               src={Close}
                                                               onClick={() =>
                                                                  setIsPdfImg(
                                                                     true
                                                                  )
                                                               }
                                                               alt="close"
                                                            />
                                                         </div>
                                                         {activeCategory ===
                                                            "Terminals" ||
                                                         activeCategory ===
                                                            "fuse" ||
                                                         activeCategory ===
                                                            "Connector" ? (
                                                            <div>
                                                               <span
                                                                  onClick={() =>
                                                                     handleClickGetPdfImg(
                                                                        "Terminals"
                                                                     )
                                                                  }
                                                               >
                                                                  Wiring Diagram
                                                               </span>
                                                               <span
                                                                  onClick={() =>
                                                                     handleClickGetPdfImg(
                                                                        "Connector"
                                                                     )
                                                                  }
                                                               >
                                                                  Connector Info
                                                               </span>
                                                            </div>
                                                         ) : (
                                                            ""
                                                         )}
                                                      </div>
                                                      <div className="img_expand_div">
                                                         <img
                                                            src={
                                                               currentPpfImgs[0]
                                                                  .imgLink
                                                            }
                                                            alt="wiringDiaIcon"
                                                         />
                                                      </div>
                                                   </div>
                                                )}
                                                {/* <div className="pdf_div">
                                             <SymptomPdfView
                                                url="https://developmentbb.blob.core.windows.net/bcm/DTC_056016_Diagnostics_procedure.pdf"
                                        
                                             />
                                          </div> */}
                                             </div>
                                          </>
                                       )}
                                    </>
                                 ) : (
                                    <SnapShot click={getSnapShot} />
                                 )}
                              </>
                        </div>
                        {/* legends on the bottom */}
                        <div className="clear-dtc">
                           <ul className="dtc-identity">
                              <li className="dtc-active">
                                 <span></span>

                                 <span>Active Fault</span>
                              </li>

                              <li className="dtc-inactive">
                                 <span></span>

                                 <span>Memorised fault</span>
                              </li>

                              <li className="dtc-pending">
                                 <span></span>

                                 <span>Pending Fault</span>
                              </li>
                           </ul>
                        </div>
                     </div>
                  </div>
               </div>
               {/* <Informationicon click={getInfo} infoStatus={info} /> */}
            </div>
         </div>
      </div>
   );
}

export default DtcScan;
