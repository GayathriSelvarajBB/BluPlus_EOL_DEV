/* eslint-disable indent */
import { useState } from "react";
import tick from "../../assets/images/tick.png";
import wrong from "../../assets/images/NotEqual1.png";
import { useNavigate } from "react-router-dom/dist";
import routePaths from "routes/routePaths";
import { UpdateStationStatus } from "redux/stationStatus.slice";
import { useDispatch } from "react-redux";
import { SaveStationActivity } from "services/dashboardService";
import { useEffect } from "react";

const ADAS = () => {
   const [percent, setPercent] = useState(0);
   // const [complete, setComplete] = useState(false);
   const [disable, setDisable] = useState(true);
   const [clear, setClear] = useState(false);
   const [selectFile, setSelectFile] = useState([]);
   const [comand, setComand] = useState("Please complete required actions");
   const Parmeter = ["ADAS", "RADAR", "AIRBAG"];
   const [prerequisites, setPrerequisites] = useState([
      { name: "Airbag", complete: false, pending: false },
      { name: "Emergency Brake", complete: false, pending: false },
   ]);
   const dispatch = useDispatch();
   const Dynamicheading = ["Parameters", "Action", "Status"];
   const [isFlashingDisable, setisFlashingDisable] = useState(true);
   const AdasParameter = [
      "Front Surround Camera",
      "Rear Surround Camera",
      "Front Left Camera",
      "Front Right Camera",
      "Rear Left Camera",
      "Rear Right Camera",
   ];
   const navigate = useNavigate();
   const Buttondisable = prerequisites?.filter(
      (ele) => ele.pending || ele.complete
   );
   let intervalId;
   const Flash = () => {
      intervalId = setInterval(() => {
         setPercent((prevProgress) => {
            if (prevProgress >= 100) {
               clearInterval(intervalId);
               setClear(true);
               setComand(
                  "All operations in the current station completed successfully"
               );
               setPercent(-1);
               return 100;
            } else {
               return prevProgress + 1;
            }
         });
      }, 100);
   };
   const FileSelected = ({ e, i }) => {
      setSelectFile((prev) => [...prev, e.target.files[0]]);
      if (selectFile.length === 2) {
         setDisable(false);
         // setComplete(true);
         setComand("Please start the flashing");
      }
   };
   const Completed = (name, check) => {
      setPrerequisites((prev) =>
         prev.map((elm) =>
            elm.name === name
               ? {
                    ...elm,
                    [check]: !elm[check],
                    [check === "complete" ? "pending" : "complete"]: false,
                 }
               : elm
         )
      );
   };
   const postData = {
      orderId: "OrderNumber",
      project: "BS6",
      plant: "EOL - 01",
      vinNumber: "MAKDF554AJ4123456",
      stationEcuParametersList: [
         {
            stationName: "ADAS",
            stationId: "st08",
            ecuName: "Vehicle",
            activity: "VIN verification",
            activityDescription: "VIN verification completed",
            activityStatus: "complete",
         },
         {
            stationName: "ADAS",
            stationId: "st08",
            ecuName: "ADAS",
            activity: "Flashing for ADAS",
            activityDescription: "Flashing for ADAS completed",
            activityStatus: "complete",
         },
         {
            stationName: "ADAS",
            stationId: "st08",
            ecuName: "RADAR",
            activity: "Flashing for RADAR",
            activityDescription: "Flashing for RADAR completed",
            activityStatus: "complete",
         },
         {
            stationName: "ADAS",
            stationId: "st08",
            ecuName: "AIRBAG",
            activity: "Flashing for AIRBAG",
            activityDescription: "Flashing for AIRBAG completed",
            activityStatus: "complete",
         },
         {
            stationName: "ADAS",
            stationId: "st08",
            ecuName: "AIRBAG",
            activity: "Airbag",
            activityDescription: "AIRBAG Inspection completed",
            activityStatus: "complete",
         },
         {
            stationName: "ADAS",
            stationId: "st08",
            ecuName: "ADAS",
            activity: "Emergency Brake",
            activityDescription: "Emergency Brake Inspection completed",
            activityStatus: "complete",
         },
         {
            stationName: "ADAS",
            stationId: "st08",
            ecuName: "ADAS",
            activity: "VIN for ADAS",
            activityDescription: "write VIN Read VIN",
            activityStatus: "complete",
         },
         {
            stationName: "ADAS",
            stationId: "st08",
            ecuName: "RADAR",
            activity: "VIN for RADAR",
            activityDescription: "write VIN Read VIN",
            activityStatus: "complete",
         },
         {
            stationName: "ADAS",
            stationId: "st08",
            ecuName: "AIRBAG",
            activity: "VIN for AIRBAG",
            activityDescription: "write VIN Read VIN",
            activityStatus: "complete",
         },
         {
            stationName: "ADAS",
            stationId: "st08",
            ecuName: "ADAS",
            activity: "Read DTC for ADAS",
            activityDescription: "Read DTC for ADAS {complete}",
            activityStatus: "complete",
         },
         {
            stationName: "ADAS",
            stationId: "st08",
            ecuName: "ADAS",
            activity: "Clear DTC for ADAS",
            activityDescription: "Clear DTC for ADAS {complete}",
            activityStatus: "complete",
         },
         {
            stationName: "ADAS",
            stationId: "st08",
            ecuName: "RADAR",
            activity: "Read DTC for RADAR",
            activityDescription: "Read DTC for RADAR {complete}",
            activityStatus: "complete",
         },
         {
            stationName: "ADAS",
            stationId: "st08",
            ecuName: "AIRBAG",
            activity: "Read DTC for AIRBAG",
            activityDescription: "Read DTC for AIRBAG {complete}",
            activityStatus: "complete",
         },
         {
            stationName: "ADAS",
            stationId: "st08",
            ecuName: "AIRBAG",
            activity: "Clear DTC for AIRBAG",
            activityDescription: "Clear DTC for AIRBAG {complete}",
            activityStatus: "complete",
         },
         {
            stationName: "ADAS",
            stationId: "st08",
            ecuName: "RADAR",
            activity: "Clear DTC for RADAR",
            activityDescription: "Clear DTC for RADAR {complete}",
            activityStatus: "complete",
         },
         {
            stationName: "ADAS",
            stationId: "st08",
            ecuName: "ADAS",
            activity: "software Part Number for ADAS",
            activityDescription:
               "Read software Part Number {xxx1213 completed}",
            activityStatus: "complete",
         },
         {
            stationName: "ADAS",
            stationId: "st08",
            ecuName: "ADAS",
            activity: "Hardware Part Number for ADAS",
            activityDescription:
               "Read hardware Part Number {xxx1213 completed}",
            activityStatus: "complete",
         },
         {
            stationName: "ADAS",
            stationId: "st08",
            ecuName: "RADAR",
            activity: "software Part Number for RADAR",
            activityDescription:
               "Read software Part Number {xxx1213 completed}",
            activityStatus: "complete",
         },
         {
            stationName: "ADAS",
            stationId: "st08",
            ecuName: "RADAR",
            activity: "Hardware Part Number for RADAR",

            activityDescription:
               "Read hardware Part Number {xxx1213 completed}",
            activityStatus: "complete",
         },
         {
            stationName: "ADAS",
            stationId: "st08",
            ecuName: "AIRBAG",
            activity: "software Part Number for AIRBAG",
            activityDescription:
               "Read software Part Number {xxx1213 completed}",
            activityStatus: "complete",
         },
         {
            stationName: "ADAS",
            stationId: "st08",
            ecuName: "AIRBAG",
            activity: "Hardware Part Number for AIRBAG",
            activityDescription:
               "Read hardware Part Number {xxx1213 completed}",
            activityStatus: "complete",
         },
         {
            stationName: "ADAS",
            stationId: "st08",
            ecuName: "ADAS",
            activity: "Front Surround Camera",
            activityDescription:
               "Front Surround Camera Calliberation {completed}",
            activityStatus: "complete",
         },
         {
            stationName: "ADAS",
            stationId: "st08",
            ecuName: "AIRBAG",
            activity: "Rear Surround Camera",
            activityDescription:
               "Rear Surround Camera Calliberation {completed}",
            activityStatus: "complete",
         },
         {
            stationName: "ADAS",
            stationId: "st08",
            ecuName: "AIRBAG",
            activity: "Front Left Camera",
            activityDescription: "Front Left Camera Calliberation{completed}",
            activityStatus: "complete",
         },
         {
            stationName: "ADAS",
            stationId: "st08",
            ecuName: "AIRBAG",
            activity: "Front Right Camera",
            activityDescription: "Front Right Camera Calliberation{completed}",
            activityStatus: "complete",
         },
         {
            stationName: "ADAS",
            stationId: "st08",
            ecuName: "AIRBAG",
            activity: "Rear Left Camera",
            activityDescription: "Rear Left Camera Calliberation{completed}",
            activityStatus: "complete",
         },
         {
            stationName: "ADAS",
            stationId: "st08",
            ecuName: "AIRBAG",
            activity: "Rear Right Camera",
            activityDescription: "Rear Right Camera Calliberation{completed}",
            activityStatus: "complete",
         },
      ],
   };
   useEffect(() => {
      if (Buttondisable?.length === 2) {
         setisFlashingDisable(false);
      } else {
         setisFlashingDisable(true);
      }
   }, [prerequisites]);
   const Submit = () => {
      SaveStationActivity(postData);
      dispatch(UpdateStationStatus("DTCCheck"));
      navigate(routePaths.VciConnective);
   };
   return (
      <div className="brake-eol-container">
         <div className="brake-eol-contianer-sec">
            <div className="adas-main">
               <div className="keycard-setup">
                  <h3>Components Flashing</h3>
                  <ul className="keycard-list">
                     {Parmeter?.map((ele, i) => (
                        <li
                           key={i}
                           className={`${
                              ele.ECUName === "Key Card Learning"
                                 ? "keycard"
                                 : ""
                           }`}
                        >
                           <span className="Ecu-name">
                              {ele}
                              {/* <input type="checkbox" checked={open}/> */}
                           </span>
                           <span className="Ecu-flashing">
                              <input
                                 type="file"
                                 name="browse"
                                 disabled={isFlashingDisable}
                                 onChange={(e) => FileSelected({ e, i })}
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
                                    {percent === -1 && (
                                       <span className="Completed">
                                          Completed
                                       </span>
                                    )}
                                 </div>
                              </div>
                           </span>
                        </li>
                     ))}
                  </ul>
               </div>
               <div className="adas-section">
                  <div className="adas-requirements">
                     <h3>Inspection Parameters</h3>
                     <div className="campaign-table">
                        <table>
                           <thead>
                              <th>Parameter</th>
                              <th>Yes</th>
                              <th>NO</th>
                              <th>Status</th>
                           </thead>
                           <tbody>
                              {prerequisites?.map((ele, i) => (
                                 <>
                                    <tr key={i}>
                                       <td>{ele.name}</td>
                                       <td>
                                          <input
                                             type="checkbox"
                                             onChange={() =>
                                                Completed(ele.name, "complete")
                                             }
                                             checked={ele.complete}
                                          />
                                       </td>

                                       <td>
                                          <input
                                             type="checkbox"
                                             onChange={() =>
                                                Completed(ele.name, "pending")
                                             }
                                             checked={ele.pending}
                                             //   onChange={(e) => CheckboxNo({ e, i })}
                                          />
                                       </td>
                                       <td>
                                          {ele.complete && (
                                             <img src={tick} alt="tick" />
                                          )}
                                          {ele.pending && (
                                             <img src={wrong} alt="wrong" />
                                          )}
                                       </td>
                                    </tr>
                                 </>
                              ))}
                           </tbody>
                        </table>
                     </div>
                  </div>
                  <div className="adas-table">
                     <table>
                        <thead>
                           {Dynamicheading?.map((ele, i) => (
                              <th key={i}>{ele}</th>
                           ))}
                        </thead>
                        <tbody>
                           {AdasParameter?.map((ele, i) => (
                              <tr key={i}>
                                 <td>{ele}</td>
                                 <td>
                                    <div className="progress_bar_div">
                                       <div className="outer_progress_bar">
                                          <div
                                             className="inner_progress_bar"
                                             style={{
                                                width: percent + "%",
                                             }}
                                          />
                                          {percent > 0 && (
                                             <span>{percent}%</span>
                                          )}
                                          {percent === -1 && (
                                             <span className="Completed">
                                                Completed
                                             </span>
                                          )}
                                       </div>
                                    </div>
                                 </td>
                                 <td>
                                    {clear && <img src={tick} alt="tick" />}
                                 </td>
                              </tr>
                           ))}
                        </tbody>
                     </table>
                  </div>
               </div>
            </div>
         </div>
         <div className="Break-submit">
            <div className="comments">
               <span>{comand}</span>
            </div>
            {!clear ? (
               <div>
                  <button disabled={disable} onClick={Flash}>
                     Start
                  </button>
               </div>
            ) : (
               <div>
                  <button onClick={Submit}>Submit</button>
               </div>
            )}
         </div>
      </div>
   );
};

export default ADAS;
