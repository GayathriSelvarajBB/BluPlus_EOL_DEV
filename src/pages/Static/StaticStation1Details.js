import { useState } from "react";
import tick from "../../assets/images/tick.png";
import { useNavigate } from "react-router-dom";
import routePaths from "routes/routePaths";
import { UpdateStationStatus } from "redux/stationStatus.slice";
import { useDispatch, useSelector } from "react-redux";
import { SaveStationActivity } from "services/dashboardService";
import { static1Parameter } from "app_constants/staticParameter";
import {
   getReadEcuDtcListCallEvent,
   getreadEcuParameterValue,
   initiateEcuFlashing,
} from "socket/socketEmitters";
import { useEffect } from "react";

const StaticStation1Details = () => {
   const [percent, setPercent] = useState(0);
   const [flashingCompleted, setFlashingCompleted] = useState(false);
   // eslint-disable-next-line no-unused-vars
   const [readEcu, setReadEcu] = useState([]);
   // eslint-disable-next-line no-unused-vars
   // const [dtcCode, setDtcCode] = useState([]);
   const [flashingselected, setFlashingSelected] = useState(false);
   const [buttonDisable, setButtonDisable] = useState(true);
   const [buttonName, setButtonName] = useState(true);
   const [selectFile, setSelectedFile] = useState([]);
   const [command, setCommand] = useState(
      "Please choose the file for Flashing"
   );
   const [flashComand, setFlashcomand] = useState("");
   const ecuName = static1Parameter?.[0]?.ecuName;
   const ParameterList = static1Parameter?.[1]?.parameterList;
   const Navigate = useNavigate();
   const dispatch = useDispatch();
   const ecuParameterTable = useSelector(
      (state) => state?.getParameterData?.ecuParameter
   );
   const FlashingStatusCheck = useSelector(
      (state) => state?.getEcuFlashing?.ecuFlashing
   );
   const OrderNumber = useSelector(
      (state) => state?.OrderInputValue?.inputValue
   );
   const dtcCode = useSelector((state) => state?.ecuDtcListSlice);
   const dtcCodeTable = dtcCode?.[0]?.ecuDtcMapList;
   // console.log(
   //    "dtcCodeTable",
   //    dtcCodeTable?.map((ele) => ele.readDtc.ecuName)
   // );
   // const readECU = readEcu?.map((ele) => ele?.readEcu);
   // const writeEcu = readEcu?.map((ele) => ele?.writeEcu);
   // eslint-disable-next-line no-unused-vars
   const vinNumber = "MAKDF554AJ4123456";
   const orderId = OrderNumber;
   const project = "BS6";
   const plant = "EOL - 01";

   const stationName = "Static 1";
   const stationId = "st04";

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
         "Scan Vehicle detected",
         "Scan Vehicle undetected",
         "Scan Vehicle selected",
      ],
      activityDescriptionVehicle: [
         "VIN verification completed",
         "Scan Vehicle completed",
         "Detected ECU's (GW, CLUSTER, ACM)",
         "Undetected ECU's (ENGINE, ACU)",
         "Selected ECU's (GW, CLUSTER, ACM)",
      ],
      activityACM: [
         "Flashing for ACM",
         "VIN for ACM",
         "Read DTC for ACM",
         "Clear DTC for ACM",
         "Software Part Number for ACM",
         "Hardware Part Number for ACM",
      ],
      activityGW: [
         "Flashing for GW",
         "VIN for GW",
         "Read DTC for GW",
         "Clear DTC for GW",
         "Software Part Number for GW",
         "Hardware Part Number for GW",
      ],
      activityCLUSTER: [
         "Flashing for CLUSTER",
         "VIN for CLUSTER",
         "Read DTC for CLUSTER",
         "Clear DTC for CLUSTER",
         "Software Part Number for CLUSTER",
         "Hardware Part Number for CLUSTER",
      ],
      activityDescriptionGW: [
         "Flashing for GW completed",
         "write VIN read VIN completed",
         "Read DTC for GW completed",
         "Clear DTC for GW",
         `Software Part Number for GW ${ecuName?.[0]?.[1]} completed`,
         `Hardware Part Number for GW ${ecuName?.[0]?.[2]} completed`,
      ],
      activityDescriptionACM: [
         "Flashing for ACM completed",
         "write VIN read VIN completed",
         "Read DTC for ACM completed",
         "Clear DTC for ACM completed",
         `Software Part Number for ACM ${ecuName?.[1]?.[1]} completed`,
         `Hardware Part Number for ACM ${ecuName?.[1]?.[2]} completed`,
      ],
      activityDescriptionCLUSTER: [
         "Flashing for CLUSTER completed",
         "write VIN read VIN completed",
         "Read DTC for CLUSTER completed",
         "Clear DTC for CLUSTER completed",
         `Software Part Number for CLUSTER ${ecuName?.[2]?.[1]} completed`,
         `Hardware Part Number for CLUSTER ${ecuName?.[2]?.[2]} completed`,
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
   console.log("postData", result);

   // eslint-disable-next-line no-unused-vars
   const Flash = () => {
      setFlashingSelected(true);
      setButtonDisable(true);
      setButtonName(false);
      EcuParameter();
      FlashingStatus();
      setCommand("In-progress flashing");
      setFlashcomand("Flashing In-progress");
   };
   const StaticSubmit = () => {
      SaveStationActivity(result);
      Navigate(routePaths.VciConnective);
      localStorage.removeItem("scanEcuList");
      localStorage.removeItem("ecusFaulty");
      dispatch(UpdateStationStatus("Static 2"));
   };
   const fileSelected = (e) => {
      setSelectedFile((prev) => [...prev, e.target.files[0]]);
      if (selectFile.length === 0) {
         setButtonDisable(false);
      }
   };

   const EcuParameter = () => {
      getReadEcuDtcListCallEvent(ecuName.join());
      let formated = {
         dllCallMethod: "ReadDatabyidentifier",
         ecuParameter: {},
      };
      const request = {};
      request[ecuName] = ParameterList;
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
   const FlashingStatus = () => {
      const formated = {
         dllCallMethod: "flashing_sequence",
         ecuName: ecuName.join(),
      };
      initiateEcuFlashing(formated);
   };
   useEffect(() => {
      if (!buttonName) {
         console.log("object", FlashingStatusCheck);
         // const FlashingStatus=FlashingStatusCheck?.map()
         const progressInterval = setInterval(UpdateProgress, 1000);
         if (
            FlashingStatusCheck?.[0]?.ecuFlashingStatus ===
            "Pre-Programming completed"
         ) {
            setPercent(100);
            setFlashingCompleted(true);
            clearInterval(progressInterval);
         }
      }
   }, [FlashingStatusCheck, buttonName]);
   const UpdateProgress = () => {
      setPercent((prev) => {
         if (prev < 75) {
            return prev + 1;
         }
      });
   };
   // useEffect(() => {
   //    ReadAndWrite(Parmeter)
   //       .then((res) => {
   //          setReadEcu(res?.data?.data);
   //       })
   //       .catch((err) => console.log("err", err));
   //    getDTC("CLUSTER")
   //       .then((res) => {
   //          setDtcCode(res?.data?.data);
   //       })
   //       .catch((err) => console.log("err", err));
   // }, []);

   console.log("dtcCode", dtcCode);

   return (
      <div className="brake-eol-container">
         <div className="brake-eol-contianer-sec">
            <div className="list-main">
               {ecuName?.map((ele, index) => (
                  <>
                     <div className="static-flashing">
                        <span key={index}>{ele}</span>
                        <div className="Static-list">
                           <span className="Ecu-flashing">
                              <input
                                 type="file"
                                 name="browse"
                                 onChange={fileSelected}
                                 disabled={flashingselected}
                              />
                              {/* <p className={"battery-width battery-yellow"}>
                              {command}
                           </p> */}
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
                        </div>
                     </div>
                     {flashingCompleted && (
                        <>
                           <div className="campaign-table">
                              <table>
                                 <thead>
                                    <th>Parameter</th>
                                    <th>Write - ECU</th>
                                    <th>Read - ECU</th>
                                    <th>Status</th>
                                 </thead>

                                 <tbody>
                                    {ecuParameterTable?.map((elm, i) => (
                                       <tr key={i}>
                                          <td>{elm?.ecuParameter}</td>
                                          <td>
                                             {" "}
                                             {elm?.ecuParameter === "VIN Number"
                                                ? elm?.ecuParameterValue
                                                : ""}
                                          </td>
                                          <td>{elm?.ecuParameterValue}</td>
                                          <td>
                                             {" "}
                                             <img src={tick} alt="tick" />
                                          </td>
                                       </tr>
                                    ))}
                                    <td>
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
                                                {dtcCodeTable?.map(
                                                   (code, i) => (
                                                      <>
                                                         <tr key={i}>
                                                            <td>
                                                               {
                                                                  code?.readDtc
                                                                     ?.diagnosticTroubleCode
                                                               }
                                                            </td>
                                                            <td key={i}>
                                                               {
                                                                  code?.readDtc
                                                                     ?.description
                                                               }
                                                            </td>
                                                         </tr>
                                                      </>
                                                   )
                                                )}
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
                                    </td>
                                 </tbody>
                              </table>
                           </div>
                        </>
                     )}
                  </>
               ))}
               {/* {!flashingCompleted ? (
                  <div className="button-start">
                     <button onClick={Flash}>Start</button>
                  </div>
               ) : (
                  <div className="button-start">
                     <button onClick={StaticSubmit}>Submit</button>
                  </div>
               )} */}
            </div>
         </div>
         <div className="Break-submit">
            <div className="comments">
               <span>{command}</span>
            </div>
            <div>
               {!flashingCompleted ? (
                  <button onClick={Flash} disabled={buttonDisable}>
                     {buttonName ? "Start" : "In-progress"}
                  </button>
               ) : (
                  <button onClick={StaticSubmit}>Submit</button>
               )}
            </div>
         </div>
      </div>
   );
};

export default StaticStation1Details;
