import Loader from "assets/images/loader-im-blue.png";
import FlashDownload from "assets/images/download-flash.png";
import FlashVehicle from "assets/images/flash.png";
import Cancel from "assets/images/close.png";
import Pause from "assets/images/pause.png";
import Play from "assets/images/play-btn.png";
import { useState } from "react";
import CancelPopup from "./CancelPopup";
import FlashingPopup from "./FlashingPopup";

let timer;

function VehicleLevel({
   flashingDetails,
   cancelDownload,
   cancelDownloadPopup,
   cancelDownloadDisable,
}) {
   let [downloadPercentage, setDownloadPercentage] = useState(0);
   const [downloadContainer, setDownloadContainer] = useState(false);
   const [pauseButton, setPauseButton] = useState(false);
   const [flashingPopup, setFlashingPopup] = useState(false);
   const [vehicleFlashed, setVehcileFlashed] = useState(false);

   const downLoadVehicle = () => {
      setDownloadContainer(true);
      timer = setInterval(downloadTimer, 100);
   };
   const downloadTimer = () => {
      if (downloadPercentage !== 100) {
         downloadPercentage++;
      }
      setDownloadPercentage(downloadPercentage);
      // eslint-disable-next-line no-empty
      if (downloadPercentage === 100) {
      }
   };

   const pauseDownload = () => {
      setPauseButton(!pauseButton);
      clearInterval(timer);
   };

   const resumeDownload = () => {
      setPauseButton(!pauseButton);
      downLoadVehicle();
   };

   const downloadCanceling = () => {
      clearInterval(timer);
      cancelDownload();
   };

   const cancelPopup = () => {
      cancelDownloadDisable();
      downLoadVehicle();
   };

   const stopDownload = () => {
      cancelDownloadDisable();
      setDownloadPercentage(0);
      setDownloadContainer(false);
   };

   const flashVehiclePopup = () => {
      setFlashingPopup(true);
      setDownloadContainer(false);
   };

   

   return (
      <div className="vehicle-level">
         {flashingPopup && (
            <FlashingPopup
               flashingDetails={flashingDetails}
               setFlashingPopup={setFlashingPopup}
               setVehcileFlashed={setVehcileFlashed}
            />
         )}
         {cancelDownloadPopup && (
            <CancelPopup
               cancelPopup={cancelPopup}
               stopDownload={stopDownload}
            />
         )}
         <div className="download-all-btn">
            {downloadPercentage !== 100 ? (
               <button
                  onClick={downLoadVehicle}
                  className={`${downloadPercentage !== 0 ? "disable-btn" : ""}`}
               >
                  {downloadPercentage === 0 ? (
                     <img src={FlashDownload} alt="download" />
                  ) : (
                     <img
                        src={Loader}
                        alt="loader"
                        className="loader-download"
                     />
                  )}
                  <span>Download</span>
               </button>
            ) : vehicleFlashed ? (
               <button className="flash-vehicle">
                  <img src={FlashVehicle} alt="download" />
                  <span>Reflash Vehicle</span>
               </button>
            ) : (
               <button className="flash-vehicle" onClick={flashVehiclePopup}>
                  <img src={FlashVehicle} alt="download" />
                  <span>Flash Vehicle</span>
               </button>
            )}
         </div>
         {downloadContainer && (
            <div className="downlo-vehicle-contianer">
               <div className="vehicle-download-percentage">
                  <div className="download-text">
                     <div className="download-icon">
                        <img src={FlashDownload} alt="download" />
                     </div>
                     <span>Downloading</span>
                  </div>
                  <div className="download-progress-bar">
                     <span className="download-file-name">
                        Flash-Vehicle.s19
                     </span>
                     <div className="download-progress">
                        <div
                           className="download-percentage"
                           style={{ width: downloadPercentage + "%" }}
                        ></div>
                     </div>
                     <span className="download-percentage-text">
                        {downloadPercentage}%
                     </span>
                  </div>
               </div>
               <div className="download-pause">
                  <button onClick={downloadCanceling}>
                     <div className="btn-img-container">
                        <img src={Cancel} alt="Cancel Download" />
                     </div>
                     <span>Cancel</span>
                  </button>
                  {pauseButton ? (
                     <button onClick={resumeDownload}>
                        <div className="btn-img-container">
                           <img src={Play} alt="Play Download" />
                        </div>
                        <span>Resume</span>
                     </button>
                  ) : (
                     <button onClick={pauseDownload}>
                        <div className="btn-img-container">
                           <img src={Pause} alt="Pause Download" />
                        </div>
                        <span>Pause</span>
                     </button>
                  )}
               </div>
            </div>
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
                  </tr>
               </thead>
               <tbody>
                  {Object.keys(flashingDetails).map((busData, index) =>
                     Object.keys(flashingDetails[busData]).map((ecuData, i) => (
                        <tr key={`vehicle-flash-${index}-${i}`}>
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
                        </tr>
                     ))
                  )}
               </tbody>
            </table>
         </div>
      </div>
   );
}

export default VehicleLevel;
