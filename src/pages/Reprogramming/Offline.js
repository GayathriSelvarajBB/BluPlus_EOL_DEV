/* eslint-disable indent */
/* eslint-disable react/no-unknown-property */
import FlashVehicle from "assets/images/flash-new.png";
import UploadImg from "assets/images/upload-icon.png";
import { useState } from "react";
function Offline({
   flashingDetails,
   cancelDownload,
   cancelDownloadPopup,
   cancelDownloadDisable,
   activeBus,
   offlineFlash,
   setSWFileName,
   command,
}) {
   const [count, setCount] = useState(0);
   const setFile = (e) => {
      console.log("target", e);
      setSWFileName(e);
      setCount(count + 1);
   };

   return (
      <>
         <div className="caution-msg">
            <h4>Caution:</h4>
            <ul className="list-content">
               <li>
                  Vehicle should be in Ignition ON condition (Do not start the
                  engine)
               </li>
               <li>
                  Before Reprogramming/programming the ECU, Vehicle battery
                  voltage should be above 13.5V
               </li>
               <li>
                  Ensure and use the right file for programming/reprogramming
                  the ECU
               </li>
               <li>
                  If reprogramming/programming is failure due to low battery
                  voltage, ECU will be corrupted.
               </li>
            </ul>
         </div>
         <div className="offline-section">
            <div className="flash-table">
               <table>
               <thead>
                        <th>ECU</th>
                        <th>{activeBus}</th>
                     </thead>
                  <tbody>
                     <tr>
                        <td>H/W Part Number</td>

                        <td>
                           {
                              flashingDetails[activeBus][activeBus][
                                 "hwPartNumber"
                              ]
                           }
                        </td>
                     </tr>
                     <tr>
                        <td>S/W Part Number</td>

                        <td>
                           {
                              flashingDetails[activeBus][activeBus][
                                 "swPartNumber"
                              ]
                           }
                        </td>
                     </tr>
                     <tr>
                        <td>Current S/W Version</td>

                        <td>
                           {
                              flashingDetails[activeBus][activeBus][
                                 "currentVersion"
                              ]
                           }
                        </td>
                     </tr>
                  </tbody>
               </table>
            </div>

            <div className="upload-section">
               <input
                  style={{ display: "none" }}
                  type="file"
                  id={activeBus}
                  name={activeBus}
                  accept="text/xml"
                  onChange={setFile}
                  bus-event={activeBus}
                  ecu-event={activeBus}
               />

               <label htmlFor={activeBus}>
                  <img
                     src={UploadImg}
                     alt="flash-download"
                     className="flash-img"
                  />
                  <span>Select/Upload the file</span>
               </label>
               <span>
                  {flashingDetails[activeBus][activeBus]["swFileName"]}
               </span>
            </div>
            <div className="upload">
               <p>Only .pdf,.png and .jpg files are supported.</p>
            </div>
            <div className="upload-section">
               {flashingDetails[activeBus][activeBus]["offlineFlash"] === 0 && (
                  <button
                     disabled={
                        !flashingDetails[activeBus][activeBus]["swFileName"]
                     }
                     className="flash-button"
                     ecu-value={activeBus}
                     bus-value={activeBus}
                     onClick={(e) => offlineFlash(e, "flash")}
                  >
                     <img
                        src={FlashVehicle}
                        alt="flash-download"
                        className="flash-img"
                     />
                     <span>Reprogramming/Flashing</span>
                  </button>
               )}
               {flashingDetails[activeBus][activeBus]["offlineFlash"] < 100 &&
                  flashingDetails[activeBus][activeBus]["offlineFlash"] > 0 && (
                     <div className="ofline-ecu-progess">
                        <div
                           className="flash-current-progress"
                           style={{
                              width:
                                 flashingDetails[activeBus][activeBus][
                                    "offlineFlash"
                                 ] + "%",
                           }}
                        ></div>
                        <span>
                           {
                              flashingDetails[activeBus][activeBus][
                                 "offlineFlash"
                              ]
                           }
                           %
                        </span>
                     </div>
                  )}

               {flashingDetails[activeBus][activeBus]["offlineFlash"] ===
                  100 && (
                  <button
                     className="reflash-button"
                     onClick={(e) => offlineFlash(e, "reflash")}
                     ecu-value={activeBus}
                     bus-value={activeBus}
                  >
                     <img
                        src={FlashVehicle}
                        alt="flash-download"
                        className="flash-img"
                     />
                     <span>Reprogramming/Flashing</span>
                  </button>
               )}
            </div>
         </div>
         {flashingDetails[activeBus][activeBus]["offlineCommand"] !== "" && (
            <div className="data-comments">
               <span>
                  {flashingDetails[activeBus][activeBus]["offlineCommand"]}
               </span>
            </div>
         )}
      </>
   );
}

export default Offline;
