/* eslint-disable indent */
/* eslint-disable no-unused-vars */
import CarSection from "components/VehicleInfoSummary/Car2dSection/CarSection";
import warning from "../../assets/images/warning.png";
import closed from "../../assets/images/cancel.png";
import complete from "../../assets/images/checked.png";
import { useEffect, useState } from "react";
import EcusHealthStatus from "components/VehicleInfoSummary/EcuHealthStatus/EcusHealthStatus";
import { SaveStationActivity, getDTC } from "services/dashboardService";
import ReactModal from "react-modal";
import routePaths from "routes/routePaths";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { UpdateStationStatus } from "redux/stationStatus.slice";
import { clearDTCListRedux, scanDTCListRedux } from "redux/ecuDtcList.slice";

const Dtccheck = () => {
   const [orderedEcus, setOrderedEcus] = useState([]);
   const [ecuFaultParameters, setEcuFaultParameters] = useState([]);
   const [isDignoseBtnDisable, setIsDignoseBtnDisable] = useState(false);
   const [notDetectEcu, setNotDetectEcu] = useState({});
   const [eachEcuDetails, setEachEcuDetails] = useState({});
   const [ecusFaulty, setEecusFaulty] = useState([]);
   const [isDisabled, setisDisabled] = useState(true);
   const [disableClear, setDisableClear] = useState(true);
   // const [buttonDisable, setButtonDisable] = useState(true);
   const [dtcCode, setDtcCode] = useState(false);
   const [selectItem, setSelectItem] = useState(null);
   const [completedCheck, setCompletedCheck] = useState();
   const [pendingCheck, setPendingCheck] = useState();
   const [commad, setCommand] = useState("Please clear the Dtc's");
   const [scanningprogress, setScanningProgress] = useState("");
   const [buttondisable, setButtonDisable] = useState(true);
   const [filterData, setFilterData] = useState();
   const Navigate = useNavigate();
   const dispatch = useDispatch();
   const eachDtc = useSelector((state) => state?.ecuDtcListSlice);
   const OrderNumber = useSelector(
      (state) => state?.OrderInputValue?.inputValue
   );
   const dtcCodeTable = filterData?.[0]?.ecuDtcMapList;
   const modalStyle = {
      overlay: {
         backgroundColor: "rgba(0,0,0,0.6)",
         zIndex: 999,
      },
      content: {
         top: "50%",
         left: "50%",
         transform: "translate(-50%, -50%)",
         right: "auto",
         bottom: "auto",
         marginRight: "-50%",
         borderRadius: "10px",
         display: "flex",
         justifyContent: "center",
         textAlign: "center",
         width: "58%",
         //  width: "100%",
      },
   };
   const ShowDtc = () => {
      setDtcCode(true);
   };
   // let newData = [];
   // let newData1 = ["ENGINE", "ACU"];
   // ecusFaulty?.filter((ecu) => {
   //    if (ecu.ecuStatus !== "Active") {
   //       if (ecu.ecuStatus === "Fault") {
   //          newData.unshift(ecu);
   //       } else {
   //          newData.push(ecu);
   //       }
   //    }
   // });
   const [isOpen, setIsOpen] = useState(false);
   const [scanEcu, setScanEcu] = useState(false);
   const [clearedDtc, setClearedDtc] = useState([]);
   const [ecuName, setEcuName] = useState([]);
   const [statuste, setStatuste] = useState({});
   // const [eachDtc, setEachDtc] = useState([]);
   const [allEcus, AllEcus] = useState([]);
   const [dtcList, setDtcList] = useState([]);

   const vinNumber = "MAKDF554AJ4123456";
   const orderId = OrderNumber;
   const project = "BS6";
   const plant = "EOL - 01";

   const stationName = "Short Track Test";
   const stationId = "st10";

   const ecuNames = ["Vehicle", "GW", "ACM", "CLUSTER"];
   const result = {
      orderId: orderId,
      project: project,
      plant: plant,
      vinNumber: vinNumber,
      stationEcuParametersList: [],
   };
   const StationActivity = {
      activityVehicle: [
         "VIN verification",
         "Scan Vehicle",
         "Scan Vehicle for Detected",
         "Scan Vehicle for Undetected",
         "Scan Vehicle for Selected",
         "Short Track Test",
      ],
      activityDescriptionVehicle: [
         "VIN verification completed",
         "Scan Vehicle completed",
         "Detected ECU's (GW, CLUSTER, ACM)",
         "Undetected ECU's (ENGINE, ACU)",
         "Selected ECU's (GW, CLUSTER, ACM)",
         "Short Track Test completed",
      ],
      activityACM: ["Read DTC for ACM", "Clear DTC for ACM"],
      activityGW: ["Read DTC for GW", "Clear DTC for GW"],
      activityCLUSTER: ["Read DTC for CLUSTER", "Clear DTC for CLUSTER"],
      activityDescriptionGW: [
         "Read DTC for GW completed",
         "Clear DTC for GW completed",
      ],
      activityDescriptionACM: [
         "Read DTC for ACM completed",
         "Clear DTC for ACM completed",
      ],
      activityDescriptionCLUSTER: [
         "Read DTC for CLUSTER completed",
         "Clear DTC for CLUSTER completed",
      ],
   };

   ecuNames.forEach((ecuName) => {
      StationActivity[`activity${ecuName}`]?.forEach((activity, index) => {
         const activityDescription =
            StationActivity[`activityDescription${ecuName}`]?.[index];
         const activityStatus = "complete"; // You can set the status accordingly

         result.stationEcuParametersList.push({
            stationName: stationName,
            stationId: stationId,
            ecuName: ecuName,
            activity: activity,
            activityDescription: activityDescription,
            activityStatus: activityStatus,
         });
      });
   });
   console.log("postData", result);
   const handlePopup = (ecu, i) => {
      setEcuName((prev) => [...prev, ecu]);
      setIsOpen(true);
      setScanEcu(false);
      setSelectItem(ecu);
      console.log("object", ecu, i);
      setFilterData(eachDtc?.filter((item) => item.ecuName === ecu));
   };
   const RescanDtc = () => {
      setScanningProgress("Please wait, scanning is in progress...");
      setTimeout(() => {
         // setEcuDtcListFrmReduc([]);
         dispatch(scanDTCListRedux(ecuName));
         setScanEcu(true);
         setDisableClear(false);
         setScanningProgress("");
      }, 2000);
   };
   const ClearDtc = (ecuName) => {
      setClearedDtc(ecuName);
      console.log("ecuName", ecuName);
      dispatch(clearDTCListRedux(ecuName));
      setDisableClear(true);
      setTimeout(() => {
         setIsOpen(false);
      }, 1000);
   };
   const Closepopup = () => {
      setIsOpen(false);
   };
   const Submit = () => {
      SaveStationActivity(result);
      dispatch(UpdateStationStatus("EOL Checks"));
      Navigate(routePaths.VciConnective);
   };
   const CompletedCheck = (e) => {
      if (e.target.checked) {
         setCompletedCheck(true);
         setPendingCheck(false);
      } else {
         setCompletedCheck(false);
      }
   };
   const PendingCheck = (e) => {
      if (e.target.checked) {
         setPendingCheck(true);
         setCompletedCheck(false);
      } else {
         setPendingCheck(false);
      }
   };
   useEffect(() => {
      if (clearedDtc?.length === 3) {
         setButtonDisable(false);
         setCommand(
            "All operations in the current station completed successfully"
         );
      }
   }, [clearedDtc]);
   console.log("ecuName", ecuName);
   return (
      <div className="brake-eol-container">
         <div className="brake-eol-contianer-sec">
            <div className="short-track-header">
               <p>Short Track</p>
               <div className="short-track-check">
                  <input
                     type="checkbox"
                     checked={completedCheck}
                     onChange={CompletedCheck}
                  />
                  <span>Complete</span>
                  <input
                     type="checkbox"
                     checked={pendingCheck}
                     onChange={PendingCheck}
                  />
                  <span>Pending</span>
               </div>
            </div>
            <div className="parameter-section body_wrapper">
               <div className="static-carsection">
                  <CarSection
                     setOrderedEcus={setOrderedEcus}
                     setEcuFaultParameters={setEcuFaultParameters}
                     setIsDignoseBtnDisable={setIsDignoseBtnDisable}
                     isDignoseBtnDisable={isDignoseBtnDisable}
                     setNotDetectEcu={setNotDetectEcu}
                     notDetectEcu={notDetectEcu}
                     setEachEcuDetails={setEachEcuDetails}
                     eachEcuDetails={eachEcuDetails}
                     setEecusFaulty={setEecusFaulty}
                     ecusFaulty={ecusFaulty}
                     setisDisabled={setisDisabled}
                     isDisabled={isDisabled}
                     setButtonDisable={setButtonDisable}
                     buttonDisable={buttondisable}
                     AllEcus={AllEcus}
                     allEcus={allEcus}
                     setDtcList={setDtcList}
                     dtcList={dtcList}
                  />
               </div>
               <div className="static-section">
                  <section className="ecu_section">
                     <div className="ecu_health_status">
                        <p className="para_heading">Detected ECU</p>
                        {dtcList?.length > 0 ? (
                           <div className="fault_ecus_con">
                              {dtcList?.map((ecu, i) => {
                                 if (ecu?.isDtcFound === "found")
                                    return (
                                       <div
                                          id={`${
                                             ecu.ecuStatus === "Fault"
                                                ? "fault_ecus_orange"
                                                : "fault_ecus_inactive"
                                          }`}
                                          key={i}
                                          className={`fault_ecus_div ${
                                             clearedDtc?.includes(ecu.ecuName)
                                                ? "fault_ecus_green"
                                                : "fault_ecus_orange"
                                          }`}
                                       >
                                          <div
                                             className="ecu-status-check"
                                             onClick={() =>
                                                handlePopup(ecu.ecuName, i)
                                             }
                                          >
                                             <p>{ecu.ecuName}</p>
                                             {clearedDtc?.includes(
                                                ecu.ecuName
                                             ) ? (
                                                <img
                                                   src={complete}
                                                   alt="Correct"
                                                />
                                             ) : (
                                                <img
                                                   src={warning}
                                                   alt="warning"
                                                />
                                             )}
                                          </div>
                                       </div>
                                    );
                              })}
                           </div>
                        ) : null}
                        {/* {newData?.length > 0 && (
                           <>
                              <p className="para_heading">UnDetected ECU</p>
                              <div className="fault_ecus_con">
                                 {newData1?.map((ecu, i) => (
                                    <div
                                       key={i}
                                       className={
                                          "fault_ecus_div  fault_ecus_inactive"
                                       }
                                    >
                                       <p>{ecu}</p>
                                    </div>
                                 ))}
                              </div>
                           </>
                        )} */}
                     </div>
                  </section>
               </div>
               {selectItem && (
                  <ReactModal isOpen={isOpen} style={modalStyle}>
                     <div className="dtccheck-code">
                        {dtcCodeTable?.length > 0 ? (
                           <>
                              <div>
                                 <ul className="bus-code-list1">
                                    {dtcCodeTable.map((eachDtc, i) => {
                                       return (
                                          <>
                                             <li className="" key={i}>
                                                <div className="dtc-code1">
                                                   <div
                                                      className={`${
                                                         scanEcu
                                                            ? "Memorised-fault"
                                                            : "dtc-code-ecu"
                                                      }`}
                                                   >
                                                      <span>
                                                         {
                                                            eachDtc?.readDtc
                                                               ?.diagnosticTroubleCode
                                                         }
                                                      </span>
                                                      <span>
                                                         {
                                                            eachDtc?.readDtc
                                                               ?.description
                                                         }
                                                      </span>
                                                   </div>
                                                </div>
                                             </li>
                                          </>
                                       );
                                    })}
                                 </ul>
                              </div>
                              <div></div>
                              <div className="Rescan-Dtc">
                                 <button onClick={RescanDtc}>Rescan</button>
                                 <button
                                    onClick={() => ClearDtc(ecuName)}
                                    disabled={disableClear}
                                 >
                                    Clear
                                 </button>
                                 {scanningprogress !== "" && (
                                    <p>{scanningprogress}</p>
                                 )}
                              </div>
                           </>
                        ) : (
                           <div className="cleared-dtc">
                              <span>DTC&apos;s are Cleared</span>
                           </div>
                        )}
                     </div>
                     <div className="close-icon" onClick={Closepopup}>
                        <img src={closed} alt="close" />
                     </div>
                  </ReactModal>
               )}
            </div>
         </div>
         <div className="Break-submit">
            <div className="comments">
               <>
                  <span>Station Operation : {commad} </span>
               </>
            </div>
            <div>
               <button onClick={Submit} disabled={buttondisable}>
                  Submit
               </button>
            </div>
         </div>
      </div>
   );
};

export default Dtccheck;
