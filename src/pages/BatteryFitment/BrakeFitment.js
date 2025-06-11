/* eslint-disable indent */
/* eslint-disable no-unused-vars */
import { useState } from "react";
import tick from "../../assets/images/tick.png";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import routePaths from "routes/routePaths";
import { useDispatch, useSelector } from "react-redux";
import { UpdateStationStatus } from "redux/stationStatus.slice";
import {
   ReadAndWrite,
   SaveStationActivity,
   fetchStationActivity,
} from "services/dashboardService";
import { breakFitmentPrequites } from "app_constants/breakFitmentprequites";
import {
   getreadEcuParameterValue,
   initiateEcuFlashing,
} from "socket/socketEmitters";
import CommonPopup from "components/commonPopup/CommonPopup";

const BrakeFitment = () => {
   const [percent, setPercent] = useState(0);
   const [count, setCount] = useState(0);
   const [selectFile, setSelectFile] = useState(true);
   const [flashActive, setFlashActive] = useState(true);
   const [buttonChange, setButtonChange] = useState(true);
   const [readEcu, setReadEcu] = useState([]);
   const [writeEcu, setWriteEcu] = useState([]);
   const [ecuList, setEcuList] = useState(false);
   const [checkitems, setCheckItems] = useState([]);
   const dispatch = useDispatch();
   const [command, setCommand] = useState(
      "Please complete the necessary requirements"
   );
   const [flashCommand, setFlashCommand] = useState("");
   const Prerequisite = breakFitmentPrequites?.[0]?.prerequisites;
   const ParameterList = breakFitmentPrequites?.[1]?.parameterList;
   const EcuName = breakFitmentPrequites?.[2]?.ecuname;
   const FlashingStatusCheck = useSelector(
      (state) => state?.getEcuFlashing?.ecuFlashing
   );
   const ecuParameterTable = useSelector(
      (state) => state?.getParameterData?.ecuParameter
   );
   const OrderNumber = useSelector(
      (state) => state?.OrderInputValue?.inputValue
   );
   let intervalId;
   const Navigate = useNavigate();
   const StationActivity = {
      activity: [
         "VIN verification",
         "Brake Fluid Filling",
         "AC Gas Filling",
         "Coolant Oil Filling",
         "Flashing for ABS",
         "Write VIN",
         "Software Part Number",
         "Hardware Part Number",
      ],
      activityDescription: [
         "VIN verification completed",
         "Brake Fluid Filling completed",
         "AC Gas Filling completed",
         "Coolant Oil Filling completed",
         "Flashing for ABS completed",
         `Write VIN ${writeEcu} completed`,
         `Software Part Number ${readEcu?.[1]} completed`,
         `Hardware Part Number ${readEcu?.[2]} completed`,
      ],

      activityStatus: [
         "Completed",
         "Completed",
         "Completed",
         "Completed",
         "Completed",
         "Completed",
         "Completed",
         "Completed",
      ],
   };

   const postData = {
      orderId: OrderNumber,
      project: "BS6",
      plant: "EOL - 01",
      vinNumber: "MAKDF554AJ4123456",
      stationEcuParametersList: StationActivity?.activity?.map(
         (activity, i) => ({
            stationName: "brake fitment",
            stationId: "st02",
            ecuName: "ABS",
            activity,
            activityDescription: StationActivity?.activityDescription?.[i],
            activityStatus: StationActivity?.activityStatus?.[i],
         })
      ),
   };
   console.log("postData", percent);

   const FlashingStatus = () => {
      const formated = {
         dllCallMethod: "flashing_sequence",
         ecuName: EcuName.join(),
      };
      initiateEcuFlashing(formated);
   };
   const EcuParameter = () => {
      let formated = {
         dllCallMethod: "ReadDatabyidentifier",
         ecuParameter: {},
      };
      const request = {};
      request[EcuName] = ParameterList;
      for (let key in request) {
         request[key]?.forEach((value) => {
            formated.ecuParameter = {
               ecuName: key,
               ecuParameter: value,
            };
            getreadEcuParameterValue(formated);
            console.log("monitorObj", key, value, formated);
         });
         console.log("formated", formated);
      }
   };
   const Flash = () => {
      setSelectFile(true);
      setFlashActive(true);
      FlashingStatus();
      EcuParameter();
      setButtonChange(false);
      setFlashCommand("Flashing In-Progress");
      setCommand("Flashing in Progress");
   };
   useEffect(() => {
      if (!buttonChange) {
         console.log("object", FlashingStatusCheck?.[0]?.ecuFlashingStatus);
         // const FlashingStatus=FlashingStatusCheck?.map()
         const progressInterval = setInterval(UpdateProgress, 1000);
         if (
            FlashingStatusCheck?.[0]?.ecuFlashingStatus ===
            "Pre-Programming completed"
         ) {
            setPercent(100);
            setEcuList(true);
            clearInterval(progressInterval);
         }
      }
   }, [FlashingStatusCheck, buttonChange]);
   const UpdateProgress = () => {
      setPercent((prev) => {
         if (prev < 75) {
            return prev + 1;
         }
      });
   };
   const FileSelected = (e) => {
      setFlashActive(false);
   };
   const BreakSubmit = () => {
      SaveStationActivity(postData);
      dispatch(UpdateStationStatus("Key card learning"));
      Navigate(routePaths.VciConnective);
   };
   const CheckHandler = ({ e, item }) => {
      if (e.target.checked) {
         setCheckItems((prev) => [...prev, item]);
         setCount(count + 1);
      } else {
         setCount(count - 1);
         for (let i = 0; i < checkitems?.length; i++) {
            if (checkitems[i] === item) {
               var spliced = checkitems.splice(i, 1);
               console.log("Removed Value => ", spliced);
            }
         }
      }
   };
   useEffect(() => {
      if (count === Prerequisite?.length) {
         setSelectFile(false);
      } else {
         setSelectFile(true);
      }
   }, [count, Prerequisite?.length]);
   console.log("ecuParameterTable", ecuParameterTable, FlashingStatusCheck);
   return (
      <div className="brake-eol-container">
         <div className="brake-eol-contianer-sec">
            <div className="contianer-sec">
               <div className="Breaking-requirements-main">
                  <div className="Breaking-requirements">
                     <h3>Prerequisites for ABS ECU Flashing</h3>
                     <div>
                        {Prerequisite?.map((item, i) => (
                           <div key={i} className="break-checklist">
                              <input
                                 type="checkbox"
                                 onChange={(e) => CheckHandler({ e, item })}
                              />
                              <p>{item}</p>
                           </div>
                        ))}
                     </div>
                  </div>
                  <div className="Flashing-details">
                     <h3>Actions Required</h3>
                     <div className="Flashing-setup">
                        <div className="Flashing-item">
                           <span className="Ecu-flashing">
                              <p className="Ecu-name">ABS</p>
                              <input
                                 type="file"
                                 name="browse"
                                 disabled={selectFile}
                                 onChange={FileSelected}
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
                              <p>{flashCommand}</p>
                              {/* <div className="Read-Ecu">
                              <button onClick={ECURead} disabled={readECU}>ECU Read/Write</button>
                           </div> */}
                           </span>
                        </div>
                     </div>
                  </div>
               </div>
               <div className="campaign-table">
                  <div className="key-ecu">
                     <span>ABS</span>
                  </div>
                  <table>
                     <thead>
                        <th>Parameter</th>
                        <th>Write - ECU</th>
                        <th>Read - ECU</th>
                        <th>Status</th>
                     </thead>
                     {ecuParameterTable?.length !== ParameterList?.length &&
                        ecuList && (
                           <CommonPopup
                              child="Parameter loading,please wait..."
                              isPopup={true}
                           />
                        )}
                     {ecuList ? (
                        <tbody>
                           <>
                              {ecuParameterTable?.map((ele, i) => {
                                 return (
                                    <tr key={i}>
                                       <td>{ele?.ecuParameter}</td>
                                       <td>
                                          {ele?.ecuParameter === "VIN Number"
                                             ? ele?.ecuParameterValue
                                             : ""}
                                       </td>
                                       <td>{ele?.ecuParameterValue}</td>
                                       <td>
                                          <img src={tick} alt="tick" />
                                       </td>
                                    </tr>
                                 );
                              })}
                           </>
                        </tbody>
                     ) : (
                        <div>
                           <p>Please complete neccessary actions</p>
                        </div>
                     )}
                  </table>
               </div>
            </div>
         </div>

         <div>
            <div className="Break-submit">
               <div className="comments">
                  <span>{command}</span>
               </div>
               <div>
                  {!ecuList ? (
                     <button disabled={flashActive} onClick={Flash}>
                        {buttonChange ? "Start" : "Inprogess"}
                     </button>
                  ) : (
                     <button onClick={BreakSubmit}>Submit</button>
                  )}
               </div>
            </div>
         </div>
      </div>
   );
};

export default BrakeFitment;
