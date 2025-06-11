/* eslint-disable indent */
/* eslint-disable no-unused-vars */
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom/dist";
import { UpdateStationStatus } from "redux/stationStatus.slice";
import routePaths from "routes/routePaths";
import tick from "../../assets/images/tick.png";
import { SaveStationActivity } from "services/dashboardService";

const Static2deatils = () => {
   const Eculist = ["BCM"];
   // const [percent, setPercent] = useState(0);
   const [command, setComand] = useState("Please complete required actions");
   const navigate = useNavigate();
   const dispatch = useDispatch();
   const OrderNumber = useSelector(
      (state) => state?.OrderInputValue?.inputValue
   );
   const [items, setItems] = useState([
      {
         name: "Center Door",
         lock: ["Lock", "UnLock"],
         isLocked: false,
         progress: 0,
      },
      {
         name: "Battery Flap",
         lock: ["Lock", "UnLock"],
         isLocked: false,
         progress: 0,
      },
      {
         name: "Sunroof Open",
         lock: ["0%", "50%", "100%"],
         isLocked: false,
         progress: 0,
      },
   ]);
   let intervalId;
   const postData = {
      orderId: OrderNumber,
      project: "BS6",
      plant: "EOL - 01",
      vinNumber: "MAKDF554AJ4123456",
      stationEcuParametersList: [
         {
            stationName: "Static 2",
            stationId: "st05",
            ecuName: "Vehicle",
            activity: "VIN verification",
            activityDescription: "VIN verification completed",
            activityStatus: "complete",
         },
         {
            stationName: "Static 2",
            stationId: "st05",
            ecuName: "Vehicle",
            activity: "Scan Vehicle detected",
            activityDescription: "Detected ECU's (GW, Cluster, ACM)",
            activityStatus: "complete",
         },
         {
            stationName: "Static 2",
            stationId: "st05",
            ecuName: "Vehicle",
            activity: "Scan Vehicle undetected",
            activityDescription: "Undetected ECU's (ABS, TCU)",
            activityStatus: "complete",
         },
         {
            stationName: "Static 2",
            stationId: "st05",
            ecuName: "Vehicle",
            activity: "Scan Vehicle selected",
            activityDescription: "Selected ECU's (GW, Cluster)",
            activityStatus: "complete",
         },
         {
            stationName: "Static 2",
            stationId: "st05",
            ecuName: "BCM",
            activity: "Central Door",
            activityDescription: "Central Door {Lock}",
            activityStatus: "complete",
         },
         {
            stationName: "Static 2",
            stationId: "st05",
            ecuName: "BCM",
            activity: "Battery Flap",
            activityDescription: "Battery Flap {Open}",
            activityStatus: "complete",
         },
         {
            stationName: "Static 2",
            stationId: "st05",
            ecuName: "BCM",
            activity: "Sunroof",
            activityDescription: "Sunroof {Open}",
            activityStatus: "complete",
         },
      ],
   };
   const Flash = (ele) => {
      setItems((prevItems) =>
         prevItems.map((item) =>
            item.name === ele ? { ...item, isLocked: true, progress: 0 } : item
         )
      );
      intervalId = setInterval(() => {
         setItems((prevItems) =>
            prevItems.map((item) =>
               item.name === ele
                  ? {
                       ...item,
                       progress: item.progress + 20,
                    }
                  : item
            )
         );
      }, 100);
      setTimeout(() => {
         clearInterval(intervalId);
      }, 500);
   };
   // const InjectorFlash = () => {
   //    let interval = setInterval(() => {
   //       setPercent((prevProgress) => {
   //          if (prevProgress >= 100) {
   //             clearInterval(interval);
   //             setPercent(0);
   //             setComand(
   //                "All operations in the current station completed successfully"
   //             );
   //             setFlashingCompleted(true);
   //             return 100;
   //          } else {
   //             return prevProgress + 1;
   //          }
   //       });
   //    }, 100);
   // };
   console.log("item", items);
   // const EcuActionss = ["0%", "50%", "100%"];
   // const injectorslist = [
   //    "Injector 1",
   //    "Injector 2",
   //    "Injector 3",
   //    "Injector 4",
   // ];
   // const injectorslist1 = ["axel1711", "axel1712", "axel1713", "axel1714"];
   // const Injector = injectorslist?.map((ele, i) => {
   //    return (
   //       <tr key={i}>
   //          <td>{ele}</td>
   //       </tr>
   //    );
   // });
   // const Injectorvalues = injectorslist1?.map((elm, i) => {
   //    return (
   //       <tr key={i}>
   //          <td>
   //             <input maxLength="8" type="text" value={elm} />
   //          </td>
   //       </tr>
   //    );
   // });
   const StaticSubmit = () => {
      SaveStationActivity(postData);
      dispatch(UpdateStationStatus("WAHA"));
      localStorage.removeItem("scanEcuList");
      localStorage.removeItem("ecusFaulty");
      navigate(routePaths.VciConnective);
   };
   return (
      <div className="brake-eol-container">
         <div className="brake-eol-contianer-sec">
            {Eculist?.map((ele, i) => (
               <div className="static2-table" key={i}>
                  <span>{ele}</span>
                  <h5>Actuator/IO</h5>
                  <table>
                     <thead>
                        <th>Parameter</th>
                        <th>Actions</th>
                        <th>Progress</th>
                     </thead>
                     <tbody>
                        {items?.map((elm, i) => (
                           <tr key={i}>
                              <td>{elm.name}</td>
                              <td key={i}>
                                 {elm.lock?.map((ele, i) => (
                                    <button
                                       key={i}
                                       onClick={() => Flash(elm.name)}
                                    >
                                       {ele}
                                    </button>
                                 ))}
                              </td>
                              <td>
                                 <div className="progress_bar_div">
                                    {elm.progress === 0 && (
                                       <div>{elm.progress}%</div>
                                    )}
                                    <div className="outer_progress_bar">
                                       <div
                                          className="inner_progress_bar"
                                          style={{
                                             width: elm.progress + "%",
                                          }}
                                       ></div>
                                    </div>
                                    {elm.progress === 100 && (
                                       <span>
                                          <img src={tick} alt="tick" />
                                       </span>
                                    )}
                                 </div>
                              </td>
                           </tr>
                        ))}
                     </tbody>
                  </table>
                  {/* <div className="static2-injector-list">
                     <h5>Rotiunes</h5>
                     <table>
                        <thead>
                           <th>Parameter</th>
                           <th>
                              <div className="injector-progress">
                                 <div>code</div>
                                 <div className="progress_bar_div">
                                    <span>{percent}%</span>
                                    <div className="outer_progress_bar">
                                       <div
                                          className="inner_progress_bar"
                                          style={{
                                             width: percent + "%",
                                          }}
                                       ></div>
                                    </div>
                                 </div>
                              </div>
                           </th>
                        </thead>
                        <tbody>
                           <tr>
                              <td>{Injector}</td>
                              <td>{Injectorvalues}</td>
                           </tr>
                        </tbody>
                     </table>
                  </div> */}
               </div>
            ))}
         </div>
         <div className="Break-submit">
            <div className="comments">
               <span>{command}</span>
            </div>
            <div>
               <button onClick={StaticSubmit}>Submit</button>
            </div>
         </div>
      </div>
   );
};

export default Static2deatils;
