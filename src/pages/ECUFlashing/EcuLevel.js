/* eslint-disable indent */
/* eslint-disable react/no-unknown-property */
import { useState } from "react";
import FlashDownload from "assets/images/download-flash.png";
import FlashVehicle from "assets/images/flash.png";
import EcuLevelFlash from "./EcuLevelFlash";

function EcuLevel({
   flashingDetails,
   downloadFilesData,
   selectAll,
   downloadSelected,
   setFlashingDetails,
   downloadSingle,
}) {
   const [ecuData, setEcuData] = useState();
   const [busData, setBusData] = useState();
   const [flashPopup, setFlashPopup] = useState(false);

   const flashSingle = (event) => {
      setEcuData(event.currentTarget.getAttribute("ecu-attribute"));
      setBusData(event.currentTarget.getAttribute("bus-attribute"));
      setFlashPopup(true);
   };

   return (
      <div className="ecu-level-flashing">
         {flashPopup && (
            <EcuLevelFlash
               ecuData={ecuData}
               busData={busData}
               flashingDetails={flashingDetails}
               setFlashingDetails={setFlashingDetails}
               setFlashPopup={setFlashPopup}
            />
         )}
        
         <div className="flash-files">
            <table>
               <thead>
                  <tr>
                                        <td>Bus</td>
                     <td>ECU</td>
                     <td>File</td>
                     <td>Current Version</td>
                     <td>Available Version</td>
                     <td>Actions</td>
                  </tr>
               </thead>
               <tbody>
                  {Object.keys(flashingDetails).map((busData, index) =>
                     Object.keys(flashingDetails[busData]).map((ecuData, i) => (
                        <tr
                           key={`table-data-${index}-${i}`}
                           className="total-files"
                        >
                          
                           <td>{busData}</td>
                           <td>{ecuData}</td>
                           <td>
                              {flashingDetails[busData][ecuData]["flashFile"]}
                           </td>
                           <td>
                              {
                                 flashingDetails[busData][ecuData][
                                    "currentVersion"
                                 ]
                              }
                           </td>
                           <td>
                              {
                                 flashingDetails[busData][ecuData][
                                    "availableVersion"
                                 ]
                              }
                           </td>
                           <td>
                              {flashingDetails[busData][ecuData][
                                 "downloadPercentage"
                              ] === 0 && (
                                 <button
                                    ecu-data={ecuData}
                                    bus-data={busData}
                                    onClick={downloadSingle}
                                 >
                                    <img
                                       src={FlashDownload}
                                       className="download-img"
                                       alt="flash-download"
                                    />
                                    <span>Download Now</span>
                                 </button>
                              )}
                              {flashingDetails[busData][ecuData][
                                 "downloadPercentage"
                              ] < 100 &&
                                 flashingDetails[busData][ecuData][
                                    "downloadPercentage"
                                 ] > 0 && (
                                    <div className="download-ecu-progess">
                                       <div
                                          className="download-current-progress"
                                          style={{
                                             width:
                                                flashingDetails[busData][
                                                   ecuData
                                                ]["downloadPercentage"] + "%",
                                          }}
                                       ></div>
                                       <span>
                                          {
                                             flashingDetails[busData][ecuData][
                                                "downloadPercentage"
                                             ]
                                          }
                                          %
                                       </span>
                                    </div>
                                 )}
                              {flashingDetails[busData][ecuData][
                                 "downloadPercentage"
                              ] === 100 && (
                                 <button
                                    onClick={flashSingle}
                                    ecu-attribute={ecuData}
                                    bus-attribute={busData}
                                 >
                                    <img
                                       src={FlashVehicle}
                                       alt="flash-download"
                                       className="flash-img"
                                    />
                                    <span>
                                       {flashingDetails[busData][ecuData][
                                          "flashPercentage"
                                       ] === 100
                                          ? "Reflash"
                                          : "Flash Now"}
                                    </span>
                                 </button>
                              )}
                           </td>
                        </tr>
                     ))
                  )}
               </tbody>
            </table>
         </div>
      </div>
   );
}

export default EcuLevel;
