/* eslint-disable indent */
import { ecuNameConstants } from "app_constants/ecuName";
import SideBar from "components/SideBar/SideBar";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeActuatorData } from "redux/actuatorsDropDownData.slice";
import { removeActuatorDropDown } from "redux/actuatorselected.slice";
import {
   fetchEcuActuatorParamOptions,
   readEcuActuatorParams,
} from "socket/socketEmitters";

function Actuator() {
   // const [offBtnDisabled, setOffBtnDisabled] = useState(true);
   const [comments, setComments] = useState([]);

   const [dropDown, setDropDown] = useState([]);
   const [selected, setSelected] = useState("--Select--");
   // const [condition, setCondition] = useState([]);
   const [conditionDescription, setConditionDescription] = useState({
      condition: [],
      description: [],
      timeDuration: "",
   });
   const [action, setAction] = useState([]);
   const [onBtnDisabled, setOnBtnDisabled] = useState();
   const [command, setCommand] = useState("");
   const [drop1, setDrop1] = useState(false);
   const [buttonValue, setButtonValue] = useState();

   const ActuatorEcu = Object.keys(ecuNameConstants);
   const dispatch = useDispatch();
   const ActuatordropDown = useSelector(
      (state) => state?.getActuatorDropDown?.actuatorData
   );
   const ActuatorInfo = useSelector(
      (state) => state?.getActuatorData?.actuatorData
   );

   const selectFunction = (selected, ecu) => {
      dispatch(removeActuatorData([]));
      setCommand(false);
      setSelected(selected);
      fetchEcuActuatorParamOptions(ecu, selected);
   };
   useEffect(() => {
      setConditionDescription({
         condition: ActuatorInfo?.actuatorActivationMethod
            ?.join()
            ?.replaceAll("*", "")
            ?.split(","),
         description: ActuatorInfo?.actuatorTestDescription
            ?.join()
            // .replaceAll("*", "")
            ?.split(","),
         timeDuration: ActuatorInfo?.actuatorTestTimeDuration,
      });
      setAction(ActuatorInfo?.action);
      if(ActuatorInfo?.action?.includes?.("Idle speed")){
         setOnBtnDisabled(ActuatorInfo?.action?.length-1)
      }else{
         setOnBtnDisabled(0)
      }
   }, [ActuatorInfo]);

   const handleClick = (elm, i) => {
      let comments = commentsData.filter(
         (item) => item.name?.toLowerCase() === elm?.toLowerCase()
      );
      setComments(comments);
      if (
         elm === "Off" ||
         elm === "Close" ||
         elm === "Idle speed" ||
         elm === "Deactivate" ||
         elm === "Disengage"||
         elm ==="Inactive"
      ) {
         setDrop1(false);
      } else {
         setDrop1(true);
      }
      setOnBtnDisabled(i);
      setCommand(true);
      setButtonValue(elm);
   };
   const Handler = (busList) => {
      setActiveBus(busList);
      setDrop1(false);
      dispatch(removeActuatorDropDown([]));
   };

   const [activeBus, setActiveBus] = useState(ActuatorEcu[0]);
   useEffect(() => {
      return () => {
         localStorage.removeItem("busName");
      };
   }, []);
   useEffect(() => {
      setCommand("");
   }, [activeBus]);
   useEffect(() => {
      setSelected("--Select--");
   }, [activeBus]);
   useEffect(() => {
      const array = Object?.values(ActuatordropDown);
      const newFirstElement = "--Select--";
      const newArray = [newFirstElement]?.concat(array)?.flat();
      setDropDown(newArray);
   }, [activeBus, ActuatordropDown]);
   useEffect(() => {
      readEcuActuatorParams(activeBus);
   }, [activeBus]);
   console.log("ActuatordropDown", ActuatordropDown, dropDown,ActuatorInfo);
   //---------------------------------------
   const commentsData = [
      {
         name: "ACTIVATE",
         comment: "Activated",
      },
      {
         name: "ENGAGE",
         comment: "Engaged",
      },
      {
         name: "DEACTIVATE",
         comment: "De-activated",
      },
      {
         name: "DISENGAGE",
         comment: "Dis-engaged",
      },
      {
         name: "0%",
         comment: "set to",
      },
      {
         name: "20%",
         comment: "set to",
      },
      {
         name: "40%",
         comment: "set to",
      },
      {
         name: "60%",
         comment: "set to",
      },
      {
         name: "80%",
         comment: "set to",
      },
      {
         name: "Idle Speed",
         comment: "set to",
      },
      {
         name: "LOW SPEED",
         comment: "set to",
      },
      {
         name: "MEDIUM SPEED",
         comment: "set to",
      },
      {
         name: "HIGH SPEED",
         comment: "set to",
      },
      {
         name: "LOW",
         comment: "set to",
      },
      {
         name: "MEDIUM",
         comment: "set to",
      },
      {
         name: "HIGH",
         comment: "set to",
      },
      {
         name: "DARK",
         comment: "set to",
      },
      {
         name: "LIGHT",
         comment: "set to",
      },
      {
         name: "BRIGHTER",
         comment: "set to",
      },
      {
         name: "SPEED 1",
         comment: "set to",
      },
      {
         name: "SPEED 2",
         comment: "set to",
      },
      {
         name: "SPEED 3",
         comment: "set to",
      },
      {
         name: "SPEED 4",
         comment: "set to",
      },
      {
         name: "LEVEL 1",
         comment: "set to",
      },
      {
         name: "LEVEL 2",
         comment: "set to",
      },
      {
         name: "LEVEL 3",
         comment: "set to",
      },
      {
         name: "LEVEL 4",
         comment: "set to",
      },
      {
         name: "ON",
         comment: "turned",
      },
      {
         name: "OFF",
         comment: "turned",
      },
      {
         name: "OPEN",
         comment: "OPENED",
      },
      {
         name: "CLOSE",
         comment: "CLOSED",
      },
      {
         name: "INACTIVE",
         comment: "is",
      },
      {
         name: "ACTIVE",
         comment: "is",
      },
   ];
   //---------------------------------------
   return (
      <div className="actuator-page">
         <div className="page-wrapper">
            <SideBar />
            <div className="body-wrapper">
               <div className="dtc-scan-container">
                  <div className="dtc-contianer-sec-actuator">
                     <div className="dtc-container-actuator">
                        <div className="fault-manage">
                           <div className="sidebar-bus">
                              <ul className="sidebar-bus-list">
                                 {ActuatorEcu?.map((busList, i) => {
                                    return (
                                       <li
                                          key={i}
                                          onClick={() => Handler(busList)}
                                          className={`${
                                             busList === activeBus
                                                ? "dtc-values active-dtc"
                                                : "dtc-values"
                                          }`}
                                       >
                                          <span>{busList}</span>
                                       </li>
                                    );
                                 })}
                              </ul>
                           </div>

                           <div className="bus-code-actuator">
                              {activeBus!=="ACU"?(
                                 <>
                              {Object.values(ActuatordropDown)[0]?.length >
                              0 ? (
                                 <>
                                    {" "}
                                    <select
                                       disabled={drop1}
                                       value={selected}
                                       onChange={(e) =>
                                          selectFunction(
                                             e.target.value,
                                             activeBus
                                          )
                                       }
                                    >
                                       {dropDown?.map((data, i) => {
                                          return (
                                             <option key={i} value={data}>
                                                {data}
                                             </option>
                                          );
                                       })}
                                    </select>
                                 </>
                              ) : (
                                 <div className="main-mini-loader"><span className="mini_loader" /></div>
                              )}
                              </>
                              ):(
                                 <p className="no_data_found">
                                 No Active test applicable for ACU
                              </p>
                              )}


                              {selected === "--Select--" ? null : (
                                 <>
                                    {conditionDescription?.description ===undefined
                                     ? (
                                       <div className="main-mini-loader">
                                          <span className="main_loader"></span>
                                       </div>
                                    ) : (
                                       <>
                                          <div className="description_div">
                                             <h4>Description</h4>
                                             <ul>
                                                {conditionDescription?.description?.map(
                                                   (elm, i) => {
                                                      return (
                                                         <li key={i}>{elm}</li>
                                                      );
                                                   }
                                                )}
                                                {/* <li>
                                             The throttle valve is actuated to
                                             various levels from 0% to 80%.
                                          </li>
                                          <li>
                                             The level can be varied during the
                                             test continously to check for
                                             proper operation.
                                          </li> */}
                                             </ul>
                                             <span>
                                                <h4 className="time_h4">
                                                   Time Duration :
                                                </h4>
                                                {` ${conditionDescription?.timeDuration}`}
                                             </span>
                                          </div>

                                          <div className="data-content">
                                             <h4>Condition:</h4>
                                             <ul className="list-content">
                                                {conditionDescription?.condition?.map(
                                                   (elm, i) => {
                                                      return (
                                                         <li key={i}>{elm}</li>
                                                      );
                                                   }
                                                )}
                                             </ul>
                                          </div>
                                          <div className="condition-dtc">
                                             {action?.map((elm, i) => {
                                                return (
                                                   <button
                                                      key={i}
                                                      disabled={
                                                         onBtnDisabled === i
                                                            ? true
                                                            : false
                                                      }
                                                      onClick={() => {
                                                         handleClick(elm, i);
                                                      }}
                                                   >
                                                      {elm}
                                                   </button>
                                                );
                                             })}
                                          </div>
                                       </>
                                    )}

                                    {!command ? null : (
                                       <>
                                          <div className="data-comments">
                                             <span>
                                                {/* {selected
                                                   .charAt(0)
                                                   .toUpperCase() +
                                                   selected
                                                      .toLowerCase()
                                                      .slice(1) +
                                                   " "}
                                                {buttonValue.toLowerCase() + " "}
                                                executed successfully. */}
                                                {selected
                                                   .charAt(0)
                                                   .toUpperCase() +
                                                   selected
                                                      .toLowerCase()
                                                      .slice(1) +
                                                   " "}
                                                {comments[0].comment}{" "}
                                                {buttonValue.toLowerCase() ===
                                                   "activate" ||
                                                buttonValue.toLowerCase() ===
                                                   "deactivate" ||
                                                buttonValue.toLowerCase() ===
                                                   "engage" ||
                                                buttonValue.toLowerCase() ===
                                                   "disengage" ||
                                                buttonValue.toLowerCase() ===
                                                   "open" ||
                                                buttonValue.toLowerCase() === "close"
                                                   ? ""
                                                   : buttonValue + " "}
                                                {/* executed successfully. */}
                                             </span>
                                          </div>
                                       </>
                                    )}
                                 </>
                              )}
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
}

export default Actuator;
