/* eslint-disable indent */
import React, { useEffect, useRef, useState } from "react";
// import Header from "../Header/Header";
import SideBar from "components/SideBar/SideBar";
import { busEcuList } from "../../busEcu";
// import VehicleCalibrationPopup from "./VehicleCalibrationPopup";
import Arrow from "assets/images/arrow-angle-pointing-to-right.png";
import SelectEmpty from "assets/images/select-item.png";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// import SaveCalibratePopup from "./SaveCalibratePopup";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";

// eslint-disable-next-line sonarjs/cognitive-complexity
function VehicleCalibration() {
   const [busValue, setBusValue] = useState([]);
   const [ecuValue, setEcuValue] = useState([]);
   const [busSelected, setBusSelected] = useState("0");
   const [calibrateValue, setCalibrateValue] = useState(false);
   const [calibrateSection, setCalibrateSection] = useState(false);
   const [calibActive, setCalibActive] = useState("");
   let [calibratePercentage, setCalibratePercentage] = useState(0);
   let interval = useRef();
   const [calibStatus, setCalibStatus] = useState(false);

   useEffect(() => {
      const setBus = [];
      Object.keys(busEcuList).map((data) => {
         if (data === "ADASBUS") {
            setBus.push(data);
         }
      });
      setBusValue(setBus);
   }, []);

   const handleBus = (event) => {
      const setEcu = [];
      setBusSelected(event.target.value);

      busEcuList[event.target.value].map((data) => {
         setEcu.push(data.ecu_name);
      });

      setEcuValue(setEcu);
   };

   const calibrateChange = (event) => {
      setCalibrateValue(!calibrateValue);
      const calibType = event.currentTarget.getAttribute("data-attribute");
      setCalibActive(calibType);
      if (calibType === "value") {
         setTimeout(() => {
            calibrateRunning();
         }, 100);
      }
   };

   const viewCalibrate = (event) => {
      setCalibrateSection(true);
      const calibType = event.currentTarget.getAttribute("data-attribute");

      if (calibType === "calibrate") {
         setCalibrateValue(false);
         setCalibActive("value");
         setTimeout(() => {
            calibrateRunning();
         }, 100);
      } else if (calibType === "current-calibrate") {
         setCalibrateValue(true);
         setCalibActive("current");
      }
   };

   const backToCalib = () => {
      setCalibrateSection(false);
      setCalibStatus(false);
      setCalibratePercentage(0);
   };

   const calibrateRunning = () => {
      const getCalibValue = document.querySelectorAll(
         "#calibrate-conditions li"
      );
      for (var i = 0; i < getCalibValue.length; i++) {
         sequenceRunning(i);
      }
      setTimeout(() => {
         document
            .getElementById("calib-button-start")
            .classList.remove("calib-disable");
      }, 6000);
   };

   const sequenceRunning = (i) => {
      const getCalibValue = document.querySelectorAll(
         "#calibrate-conditions li"
      );
      setTimeout(function () {
         getCalibValue[i].classList.add("set-loader");
         setTimeout(function () {
            getCalibValue[i].classList.add("set-success");
            getCalibValue[i].classList.remove("set-loader");
         }, 1000);
      }, 1000 * i);
   };

   const startCalibrate = () => {
      // eslint-disable-next-line sonarjs/no-all-duplicated-branches
      if (calibStatus === false) {
         setCalibStatus(true);
      }

      interval.current = setInterval(() => {
         if (calibratePercentage < 100) {
            calibratePercentage++;
         } else {
            clearInterval(interval.current);
         }
         setCalibratePercentage(calibratePercentage);
         console.log(calibratePercentage);
      }, 70);
   };

   const abortCalibrate = () => {
      clearInterval(interval.current);
      setCalibratePercentage(0);
      toast.warn("Calbiration Aborted!", {
         position: toast.POSITION.TOP_RIGHT,
      });
   };

   return (
      <div className="vehicle-calibration-page">
         <div className="page-wrapper">
            <SideBar />
            <div className="body-wrapper">
               <div className="calib-component">
                  <div className="calib-sec">
                     <div className="select-bus-calib">
                        <select onChange={handleBus}>
                           <option value="0">-- Select BUS --</option>
                           {busValue.map((data, i) => (
                              <option key={i} value={data}>
                                 {data}
                              </option>
                           ))}
                        </select>
                     </div>
                     {busSelected === "0" ? (
                        <div className="select-empty">
                           <img src={SelectEmpty} alt="select empty" />
                           <h4>Select the Bus check the Calibiration</h4>
                        </div>
                     ) : (
                        <React.Fragment>
                           {calibrateSection ? (
                              <div className="calibrate-results">
                                 <div className="calibrate-title">
                                    <ul id="calibrate-tab">
                                       <li
                                          data-attribute="value"
                                          className={
                                             calibActive === "value"
                                                ? "calibrate-active"
                                                : ""
                                          }
                                          onClick={calibrateChange}
                                       >
                                          Calibrate
                                       </li>
                                       <li
                                          data-attribute="current"
                                          className={
                                             calibActive === "current"
                                                ? "calibrate-active"
                                                : ""
                                          }
                                          onClick={calibrateChange}
                                       >
                                          Current Cals
                                       </li>
                                    </ul>
                                    <div>
                                       {calibratePercentage === 100 ? (
                                          <button
                                             disabled={
                                                calibratePercentage !== 100
                                             }
                                             onClick={backToCalib}
                                          >
                                             Back
                                          </button>
                                       ) : null}
                                    </div>
                                 </div>
                                 <div className="calibrate-result-box">
                                    {!calibrateValue ? (
                                       <div className="calibrate-result-each calib-pre-condition-box">
                                          <div className="precondition-status">
                                             <div className="precondition">
                                                <h4>
                                                   Pre-calibration conditions:
                                                </h4>
                                                <ul id="calibrate-conditions">
                                                   <li>Speed Signal Valid</li>
                                                   <li>
                                                      Yaw Rate Signal Valid
                                                   </li>
                                                   <li>Camera Initialized</li>
                                                   <li>
                                                      BCM Power Mode Detected
                                                   </li>
                                                   <li>Proper Camera Status</li>
                                                   <li>
                                                      {"Vehicle Speed < 3kph"}
                                                   </li>
                                                </ul>
                                             </div>
                                             <div className="calibration-progress">
                                                {calibStatus && (
                                                   <div
                                                      style={{
                                                         width: 130,
                                                         height: 130,
                                                      }}
                                                   >
                                                      <div className="calib-status">
                                                         <span className="percentage-calib">
                                                            {
                                                               calibratePercentage
                                                            }
                                                            %
                                                         </span>

                                                         <span className="calib-progress">
                                                            Complete
                                                         </span>
                                                      </div>
                                                      <CircularProgressbar
                                                         value={
                                                            calibratePercentage
                                                         }
                                                         strokeWidth={25}
                                                         styles={buildStyles({
                                                            strokeLinecap:
                                                               "butt",
                                                            textSize: "16px",
                                                            pathTransitionDuration: 0.5,
                                                            pathColor:
                                                               "#1b6fee",
                                                            backgroundColor:
                                                               "#cfcfcf",
                                                         })}
                                                      />
                                                   </div>
                                                )}
                                             </div>
                                          </div>
                                          <div
                                             className="calib-buttons calib-disable"
                                             id="calib-button-start"
                                          >
                                             <button onClick={startCalibrate}>
                                                Start Calibration
                                             </button>
                                             <button onClick={abortCalibrate}>
                                                Abort Calibration
                                             </button>
                                          </div>
                                       </div>
                                    ) : (
                                       <div className="calibrate-result-each calib-current-box">
                                          <div className="precondition-status">
                                             <h4>Current Cals</h4>
                                             <ul>
                                                <li>
                                                   Pitch Angle: -170 pixels
                                                </li>
                                                <li>Yaw Angle: 0 pixels</li>
                                                <li>Roll Angle: 0 pixels</li>
                                                <li>Height: 1.49 meters</li>
                                             </ul>
                                             <div className="calibration-progress"></div>
                                          </div>
                                          {/* <div className='calib-buttons'>
                                                    <button onClick={closePopup}>Save Current Cals Value</button>
                                                    <button onClick={closePopup}>Apply Calibrate Value</button>
                                                </div> */}
                                       </div>
                                    )}
                                    <div className="calibrate-result-each calibrate-instruction">
                                       <div className="calib-instructions">
                                          <h4>Calibration Instructions</h4>
                                          <ul>
                                             <li>
                                                Drive for 10 cumulative minutes
                                                under the following conditions:
                                             </li>
                                             <li>
                                                Speed greater than 20 kph / 13
                                                mph{" "}
                                             </li>
                                             <li>Straight</li>
                                             <li>Flat</li>
                                             <li>Asphalt road surface</li>
                                             <li>No bumps or potholes</li>
                                          </ul>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                           ) : (
                              <div className="calibration-comoponent-sec">
                                 <div className="calibration-box">
                                    {ecuValue.map((data, i) => (
                                       <div
                                          className="calibration-each-box"
                                          id={`calib-content-${i}`}
                                          key={i}
                                       >
                                          <div className="calib-ecu-sec">
                                             <h3>{data}</h3>
                                          </div>
                                          <div className="calib-details-all">
                                             <div className="calibrate-details">
                                                <div
                                                   className="calibrate"
                                                   data-attribute="calibrate"
                                                   onClick={viewCalibrate}
                                                >
                                                   <span>Calibrate</span>
                                                   <img
                                                      src={Arrow}
                                                      alt="arrow"
                                                   />
                                                </div>
                                             </div>
                                             <div className="calibrate-details">
                                                <div
                                                   className="calibrate"
                                                   data-attribute="current-calibrate"
                                                   onClick={viewCalibrate}
                                                >
                                                   <span>
                                                      View Current Cals
                                                   </span>
                                                   <img
                                                      src={Arrow}
                                                      alt="arrow"
                                                   />
                                                </div>
                                             </div>
                                          </div>
                                       </div>
                                    ))}
                                 </div>
                              </div>
                           )}
                        </React.Fragment>
                     )}
                  </div>
               </div>
            </div>
         </div>
         {/* <ToastContainer
            position="top-right"
            autoClose={2000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
         /> */}
      </div>
   );
}

export default VehicleCalibration;
