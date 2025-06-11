/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { UpdateStationStatus } from "redux/stationStatus.slice";
import routePaths from "routes/routePaths";
import tick from "../../assets/images/tick.png";
import { SaveStationActivity } from "services/dashboardService";
import { keyCardLearning } from "app_constants/keyCardLearning";
import {
   getreadEcuParameterValue,
   initiateEcuFlashing,
} from "socket/socketEmitters";

const KeyCard = () => {
   // const [readEcu, setReadEcu] = useState(true);
   const [button, setButton] = useState(true);
   const [buttondisable, setButtonDisable] = useState(true);
   const [disable, setDisable] = useState(false);
   const [fileDisable, setFileDisable] = useState(false);
   const [count, setCount] = useState([]);
   const [ecuList, setEcuList] = useState(false);
   const [buttonName, setButtonName] = useState(true);
   const [readEcu, setReadEcu] = useState([]);
   const [dtcCode, setDtcCode] = useState([]);
   const [comand, setComand] = useState("Please complete required actions ");
   const [flashComand, setFlashcomand] = useState("");
   const dispatch = useDispatch();
   const Navigate = useNavigate();
   const [percent, setPercent] = useState(0);
   const [keycardpercent, setKeycardpercent] = useState(0);
   const [Keycardflashcomand, setkeycardFlashcomand] = useState("");
   let intervalId;
   let keyintervalId;
   const ecuName = keyCardLearning?.[0]?.ecuName;
   const Parmeter = keyCardLearning?.[1]?.parameterList;
   const routine = keyCardLearning?.[2]?.routine;
   const ecuParameterTable = useSelector(
      (state) => state?.getParameterData?.ecuParameter
   );
   const FlashingStatusCheck = useSelector(
      (state) => state?.getEcuFlashing?.ecuFlashing
   );
   const OrderNumber = useSelector(
      (state) => state?.OrderInputValue?.inputValue
   );
   const readECU = readEcu?.map((ele) => ele?.readEcu);
   const writeEcu = readEcu?.map((ele) => ele?.writeEcu);
   const vinNumber = "MAKDF554AJ4123456";
   const orderId = OrderNumber;
   const project = "BS6";
   const plant = "EOL - 01";

   const stationName = "Key Card Learning";
   const stationId = "st03";

   const ecuNames = ["Vehicle", "BCM", "MCM"];
   const result = {
      orderId: orderId,
      project: project,
      plant: plant,
      vinNumber: vinNumber,
      stationEcuParametersList: [],
   };
   const StationActivity = {
      activityVehicle: ["VIN verification"],
      activityDescriptionVehicle: ["VIN verification Completed"],
      activityMCM: [
         "Flashing for MCM",
         "VIN for MCM",
         "Read DTC for MCM",
         "Clear DTC for MCM",
         "Software Part Number for MCM",
         "Hardware Part Number for MCM",
      ],
      activityBCM: [
         "Flashing for BCM",
         "Key Card Learning Process",
         "VIN for BCM",
         "Read DTC for BCM",
         "Clear DTC for BCM",
         "Software Part Number for BCM",
         "Hardware Part Number for BCM",
      ],
      activityDescriptionBCM: [
         "Flashing for BCM Completed",
         "Key Card Learning Process Completed",
         "write VIN and Read VIN",
         "Read DTC for BCM Completed",
         "Clear DTC for BCM",
         `Software Part Number for BCM ${readECU?.[0]?.[1]} Completed`,
         `Hardware Part Number for BCM ${readECU?.[0]?.[2]} Completed`,
      ],
      activityDescriptionMCM: [
         "Flashing for MCM Completed",
         "write VIN and Read VIN",
         "Read DTC for MCM Completed",
         "Clear DTC for MCM Completed",
         `Software Part Number for MCM ${readECU?.[1]?.[1]} Completed`,
         `Hardware Part Number for MCM ${readECU?.[1]?.[2]} Completed`,
      ],
   };

   ecuNames.forEach((ecuName) => {
      StationActivity[`activity${ecuName}`]?.forEach((activity, index) => {
         const activityDescription =
            StationActivity[`activityDescription${ecuName}`]?.[index];
         const activityStatus = "Complete"; // You can set the status accordingly

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
   console.log("postData", ecuParameterTable);
   // eslint-disable-next-line sonarjs/no-unused-collection
   // eslint-disable-next-line no-unused-vars
   const Flash = (submit) => {
      setButtonDisable(true);
      setDisable(true);
      EcuParameter();
      setFileDisable(true);
      setButtonName(false);
      FlashingStatus();
      setFlashcomand("Flashing In-progress");
      console.log("submit", submit);
      setComand("Flashing In-progress");
   };
   const KeycardFlashing = () => {
      setkeycardFlashcomand("Key card learning started");
      keyintervalId = setInterval(() => {
         setKeycardpercent((prevProgress) => {
            if (prevProgress >= 100) {
               clearInterval(keyintervalId);
               setComand("Station Operations are Completed");
               setEcuList(true);
               setKeycardpercent(100);
               setkeycardFlashcomand("Key card learning Completed");
               setButton(false);
               return 100;
            } else {
               return prevProgress + 1;
            }
         });
      }, 100);
   };
   const fileSelected = (e) => {
      setCount((prev) => [...prev, e.target?.files?.length]);
      console.log("object", count);
   };
   const KeycardSubmit = () => {
      SaveStationActivity(result);
      dispatch(UpdateStationStatus("Static 1"));
      Navigate(routePaths.VciConnective);
   };
   useEffect(() => {
      if (count?.length === 2) {
         setButtonDisable(false);
      }
   }, [count]);
   const EcuParameter = () => {
      let formated = {
         dllCallMethod: "ReadDatabyidentifier",
         ecuParameter: {},
      };
      const request = {};
      ecuName.map((item) => (request[item] = Parmeter));
      for (let key in request) {
         request[key]?.forEach((value) => {
            formated.ecuParameter = {
               ecuName: key,
               ecuParameter: value,
            };
            getreadEcuParameterValue(formated);
            console.log("monitorObj", key, value, formated, request);
         });
         console.log("formated", formated);
      }
   };
   const FlashingStatus = () => {
      let formated = {
         flashing: {},
      };
      ecuName?.forEach((ele) => {
         formated.flashing = {
            dllCallMethod: "flashing_sequence",
            ecuName: ele,
         };
         initiateEcuFlashing(formated.flashing);
      });
   };
   useEffect(() => {
      if (disable) {
         console.log("object", FlashingStatusCheck);
         // const FlashingStatus=FlashingStatusCheck?.map()
         const progressInterval = setInterval(UpdateProgress, 1000);
         if (
            FlashingStatusCheck?.[0]?.ecuFlashingStatus ===
            "Pre-Programming completed"
         ) {
            setPercent(100);
            KeycardFlashing();
            clearInterval(progressInterval);
         }
      }
   }, [FlashingStatusCheck, disable]);
   const UpdateProgress = () => {
      setPercent((prev) => {
         if (prev < 75) {
            return prev + 1;
         }
      });
   };

   // console.log("request", readEcu, writeEcu, dtcCode, ecuName?.[0]?.[1]);
   return (
      <div className="brake-eol-container">
         <div className="brake-eol-contianer-sec">
            <div className="keycard-main">
               <div className="keycard-setup">
                  <h3>ECU&apos;s Flashing</h3>
                  <ul className="keycard-list">
                     {ecuName?.map((ele, i) => (
                        <li
                           key={i}
                           className={`${
                              ele.ECUName === "Key Card Learning"
                                 ? "keycard"
                                 : ""
                           }`}
                        >
                           <span className="Ecu-name">{ele}</span>
                           <span className="Ecu-flashing">
                              <input
                                 type="file"
                                 name="browse"
                                 disabled={fileDisable}
                                 onChange={fileSelected}
                              />
                              <div className="progress_bar_div">
                                 <div className="outer_progress_bar">
                                    <div
                                       className="inner_progress_bar"
                                       style={{
                                          width: percent + "%",
                                       }}
                                    />
                                    {percent > 0 && <span>{percent}%</span>}
                                 </div>
                              </div>
                              <p>{flashComand}</p>
                           </span>
                        </li>
                     ))}
                  </ul>
               </div>
               <div className="keycard-setup">
                  <h3>Keycard Learning Progress</h3>
                  <ul className="keycard-list">
                     {routine?.map((ele, i) => (
                        <li
                           key={i}
                           className={`${
                              ele === "Key Card Learning" ? "keycard" : ""
                           }`}
                        >
                           <span className="Ecu-name">{ele}</span>
                           <span className="Ecu-flashing">
                              <div className="progress_bar_div">
                                 <div className="outer_progress_bar">
                                    <div
                                       className="inner_progress_bar"
                                       style={{
                                          width: keycardpercent + "%",
                                       }}
                                    />
                                    {keycardpercent > 0 && (
                                       <span>{keycardpercent}%</span>
                                    )}
                                 </div>
                              </div>
                              <p>{Keycardflashcomand}</p>
                           </span>
                        </li>
                     ))}
                  </ul>
               </div>
            </div>
            <div className="campaign-table">
               <table>
                  <thead>
                     <th>Ecu Name</th>
                     <th>Parameter</th>
                     <th>Write - ECU</th>
                     <th>Read - ECU</th>
                     <th>Status</th>
                  </thead>
                  {ecuParameterTable?.map((ele, index) => (
                     <>
                        {ecuList && (
                           <>
                              {/* <span className="Ecuname"></span> */}
                              <tbody key={index}>
                                 <tr>
                                    <td>{ele?.ecuName}</td>
                                    <td>{ele.ecuParameter}</td>
                                    <td>
                                       {" "}
                                       {ele?.ecuParameter === "VIN Number"
                                          ? ele?.ecuParameterValue
                                          : ""}
                                    </td>
                                    <td>{ele?.ecuParameterValue}</td>
                                    <td>
                                       {" "}
                                       <img src={tick} alt="tick" />
                                    </td>
                                 </tr>
                                 {/* <td>
                                    <div className="dtc-code">
                                       <span>
                                          Refresh DTC
                                          <div className="dtc-code-read">
                                             <p>Read DTC</p>
                                             <p>Clear DTC</p>
                                             <p>Re-Read DTC</p>
                                          </div>
                                       </span>
                                    </div>
                                 </td>
                                 <td colSpan="2">
                                    <div className="table-dtc-code">
                                       <table>
                                          <thead>
                                             <th>DTC Code</th>
                                             <th>Description</th>
                                          </thead>
                                          <tbody>
                                             {dtcCode?.map((code, i) => (
                                                <>
                                                   {ele === code.ecuName && (
                                                      <tr key={i}>
                                                         <td>
                                                            {
                                                               code?.diagnosticTroubleCode
                                                            }
                                                         </td>
                                                         <td key={i}>
                                                            {code?.description}
                                                         </td>
                                                      </tr>
                                                   )}
                                                </>
                                             ))}
                                          </tbody>
                                       </table>
                                    </div>
                                 </td>
                                 <td>
                                    <div className="dtc-code-sucess">
                                       <p>
                                          <img src={tick} alt="tick" />
                                       </p>
                                    </div>
                                 </td> */}
                              </tbody>
                           </>
                        )}
                     </>
                  ))}
               </table>
            </div>
         </div>
         <div className="Break-submit">
            <div className="comments">
               <span>{comand}</span>
            </div>
            <div>
               {button ? (
                  <button disabled={buttondisable} onClick={Flash}>
                     {buttonName ? "Start" : "In-progress"}
                  </button>
               ) : (
                  <button onClick={KeycardSubmit}>Submit</button>
               )}
            </div>
         </div>
      </div>
   );
};

export default KeyCard;
