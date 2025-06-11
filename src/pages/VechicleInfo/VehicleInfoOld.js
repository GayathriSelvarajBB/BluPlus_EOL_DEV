/* eslint-disable sonarjs/no-unused-collection */
/* eslint-disable indent */
import SideBar from "components/SideBar/SideBar";
import RefreshIcon from "assets/images/loader-settings.png";
import SettingsIcon from "assets/images/settings-parameter.png";
import DTCError from "assets/images/dtc-error.png";
import ECUChip from "assets/images/ecu-chip.png";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { setVehicleParametersSlice } from "redux/vehicleParameters.slice";
import { addEcuList } from "redux/ecuList.slice";
function VehicleInfo() {
   const [vehicleDataCount, setVehicleDataCount] = useState(0);
   const [dtcDataCount, setDtcCount] = useState(0);
   const vehicleParamsRedux = useSelector((state) => state.vehicleParameter);
   const dispatch = useDispatch();
   let paramCount = [];
   let dtcCount = [];
   useEffect(() => {
      if (localStorage.getItem("vehicleParamsData")) {
         dispatch(
            setVehicleParametersSlice(
               JSON.parse(localStorage.getItem("vehicleParamsData"))
            )
         );
      }
      if (localStorage.getItem("ecuList")) {
         dispatch(addEcuList(JSON.parse(localStorage.getItem("ecuList"))));
      }
      setDtcCount(dtcCount.length);
      setVehicleDataCount(paramCount.length);
   }, []);

   function getFirstLetters(str) {
      return str
         .split(" ")
         .map((word) => word[0])
         .join("");
   }

   function percentageCalc(currentData, maxData) {
      return (currentData / maxData) * 100;
   }

   return (
      <div className="vehicle-info-page">
         <div className="page-wrapper">
            <SideBar />
            <div className="body-wrapper">
               <div className="vehicle-info-component">
                  <div className="parameter-section">
                     <div className="parameter-title">
                        <h3>Overall Vehicle Parameters</h3>
                        <div className="parameters-details">
                           <img src={SettingsIcon} alt="settings" />
                           <img src={RefreshIcon} alt="settings" />
                           <span>
                              Total Parameters Selected: {vehicleDataCount}
                           </span>
                        </div>
                     </div>
                     <ul>
                        {Object.keys(
                           vehicleParamsRedux?.Vehicle_Parameters || {}
                        )?.map((bus) =>
                           Object.keys(
                              vehicleParamsRedux?.Vehicle_Parameters[bus] || {}
                           )?.map((ecu) =>
                              Object.keys(
                                 vehicleParamsRedux?.Vehicle_Parameters[bus][
                                    ecu
                                 ] || {}
                              )?.map((params, i) => {
                                 paramCount.push(i);
                                 return (
                                    <Link
                                       to="/measurement"
                                       key={i}
                                       state={{
                                          bus,
                                          ecu,
                                          params,
                                          flag: "vehicle_info",
                                       }}
                                    >
                                       <li>
                                          <h4>{params}</h4>
                                          <div
                                             style={{
                                                width: 100,
                                                height: 100,
                                                margin: "0 auto 20px",
                                             }}
                                             className="param-circle"
                                          >
                                             <div className="param-value">
                                                {
                                                   vehicleParamsRedux
                                                      ?.Vehicle_Parameters[bus][
                                                      ecu
                                                   ][params]?.displayValue
                                                }
                                             </div>
                                             <CircularProgressbar
                                                value={percentageCalc(
                                                   vehicleParamsRedux
                                                      ?.Vehicle_Parameters[bus][
                                                      ecu
                                                   ][params]?.value,
                                                   vehicleParamsRedux
                                                      ?.Vehicle_Parameters[bus][
                                                      ecu
                                                   ][params]?.maxValue
                                                )}
                                                strokeWidth={40}
                                                styles={buildStyles({
                                                   strokeLinecap: "butt",
                                                   textSize: "16px",
                                                   pathTransitionDuration: 0.5,
                                                   pathColor: "#1b6fee",
                                                   backgroundColor: "#cfcfcf",
                                                   trailColor: "#d2d2d2",
                                                })}
                                             />
                                          </div>
                                          <h3>ECU: {ecu}</h3>
                                          <div className="min-max">
                                             <div className="each-val">
                                                <span>Min Value</span>
                                                <span>
                                                   {
                                                      vehicleParamsRedux
                                                         ?.Vehicle_Parameters[
                                                         bus
                                                      ][ecu][params]?.minValue
                                                   }
                                                </span>
                                             </div>
                                             <div className="each-val">
                                                <span>Max Value</span>
                                                <span>
                                                   {
                                                      vehicleParamsRedux
                                                         ?.Vehicle_Parameters[
                                                         bus
                                                      ][ecu][params]?.maxValue
                                                   }
                                                </span>
                                             </div>
                                          </div>
                                       </li>
                                    </Link>
                                 );
                              })
                           )
                        )}
                     </ul>
                  </div>
                  <div className="dtc-section">
                     <div className="parameter-title">
                        <h3>DTC Overview</h3>
                        <div className="parameters-details">
                           <img src={SettingsIcon} alt="settings" />
                           <img src={RefreshIcon} alt="settings" />
                           <span>
                              Total Parameters Selected: {dtcDataCount}
                           </span>
                        </div>
                     </div>
                     <ul>
                        {Object.keys(vehicleParamsRedux?.dtc || {})?.map(
                           (bus) => {
                              return Object.keys(
                                 vehicleParamsRedux?.dtc[bus]
                              )?.map((ecu) => {
                                 return Object.keys(
                                    vehicleParamsRedux?.dtc[bus][ecu] || {}
                                 )?.map((params) => {
                                    return vehicleParamsRedux?.dtc[bus][ecu][
                                       params
                                    ]?.map((data, index) => {
                                       dtcCount.push(index);
                                       return (
                                          <Link
                                             to="/diagnostic-measurement"
                                             key={index}
                                             onClick={() =>
                                                localStorage.setItem(
                                                   "busName",
                                                   getFirstLetters(
                                                      data?.expandName
                                                   )
                                                )
                                             }
                                          >
                                             <li>
                                                <div className="dtc-value">
                                                   <div className="dtc-each">
                                                      <div className="dtc-sec-each">
                                                         <div className="dtc-icon">
                                                            <img
                                                               src={DTCError}
                                                               alt="dtc"
                                                            />
                                                         </div>
                                                         <span>
                                                            {
                                                               data?.displayTroubleCode
                                                            }
                                                         </span>
                                                      </div>
                                                      <div className="dtc-sec-each">
                                                         <div className="dtc-icon">
                                                            <img
                                                               src={ECUChip}
                                                               alt="ecu"
                                                            />
                                                         </div>
                                                         <span>
                                                            {getFirstLetters(
                                                               data?.expandName
                                                            )}
                                                         </span>
                                                      </div>
                                                   </div>
                                                   <div className="dtc-desc">
                                                      <p>{data?.description}</p>
                                                   </div>
                                                </div>
                                             </li>
                                          </Link>
                                       );
                                    });
                                 });
                              });
                           }
                        )}
                     </ul>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
}

export default VehicleInfo;
