import SideBar from "components/SideBar/SideBar";
import { useState } from "react";
import Vehicle from "assets/images/car.png";
import EcuChip from "assets/images/ecu-chip-blue.png";
import VehicleLevel from "./VehicleLevel";
import EcuLevel from "./EcuLevel";

function EcuFlashing() {
   const [flashingDetails, setFlashingDetails] = useState({
      ADASBUS: {
         ADAS: {
            flashFile: "ADAS-1628.s19",
            currentVersion: "1.0.5",
            availableVersion: "1.0.5",
            downloadPercentage: 0,
            flashPercentage: 0,
         },
         FCM: {
            flashFile: "FCM-1628.s19",
            currentVersion: "2.0.5",
            availableVersion: "3.0.1",
            downloadPercentage: 0,
            flashPercentage: 0,
         },
      },
      EVBUS: {
         BMS: {
            flashFile: "BMS-1628.s19",
            currentVersion: "3.5",
            availableVersion: "3.5",
            downloadPercentage: 0,
            flashPercentage: 0,
         },
         ECC: {
            flashFile: "ECC-1628.s19",
            currentVersion: "5.15",
            availableVersion: "6.0.1",
            downloadPercentage: 0,
            flashPercentage: 0,
         },
      },
      CBUS: {
         EPS: {
            flashFile: "EPS-1628.s19",
            currentVersion: "4.5",
            availableVersion: "5.1",
            downloadPercentage: 0,
            flashPercentage: 0,
         },
         ESP: {
            flashFile: "ESP-1628.s19",
            currentVersion: "5.15",
            availableVersion: "5.15",
            downloadPercentage: 0,
            flashPercentage: 0,
         },
      },
   });

   const downloadFiles = [];

   const [cancelDownloadPopup, setCancelDownloadPopup] = useState(false);

   const [activeTab, setActiveTab] = useState("vehicle-level");

   const [downloadSelected, setDownloadSelected] = useState(false);

   const handleTab = (event) => {
      setActiveTab(event.currentTarget.getAttribute("data-attribute"));
   };

   const downloadFilesData = (event) => {
      const getMainInput = document.getElementById("main-check");

      if (event.target.checked) {
         setDownloadSelected(true);
         downloadFiles.push(event.target.value);
         if (
            downloadFiles.length ===
            document.getElementsByClassName("total-files").length
         ) {
            getMainInput.checked = true;
         }
      } else {
         const getIndex = downloadFiles.indexOf(event.target.value);
         downloadFiles.splice(getIndex, 1);
         getMainInput.checked = false;
         console.log(downloadFiles.length);
      }
      if (downloadFiles.length === 0) {
         setDownloadSelected(false);
      }
   };

   const selectAll = (event) => {
      const getAllCheck = document.getElementsByClassName("ecu-check");
      downloadFiles.splice(0, downloadFiles.length);
      if (event.target.checked) {
         Object.keys(flashingDetails).map((busData, i) =>
            Object.keys(flashingDetails[busData]).map((ecuData, j) =>
               downloadFiles.push(ecuData)
            )
         );
         for (var k = 0; k < getAllCheck.length; k++) {
            getAllCheck[k].checked = true;
            setDownloadSelected(true);
         }
      } else {
         for (var l = 0; l < getAllCheck.length; l++) {
            getAllCheck[l].checked = false;
            setDownloadSelected(false);
         }
      }
   };

   const downloadSingle = (event) => {
      const getBus = event.currentTarget.getAttribute("bus-data");
      const getEcu = event.currentTarget.getAttribute("ecu-data");
      setInterval(() => {
         if (flashingDetails[getBus][getEcu].downloadPercentage < 100) {
            flashingDetails[getBus][getEcu].downloadPercentage++;
         }
         setFlashingDetails({ ...flashingDetails });
      }, 100);
   };

   const cancelDownload = () => {
      setCancelDownloadPopup(!cancelDownloadPopup);
   };

   const cancelDownloadDisable = () => {
      setCancelDownloadPopup(false);
   };

   return (
      <div className="ecu-flashing">
         <div className="page-wrapper">
            <SideBar />
            <div className="body-wrapper">
               <div className="flashing-container">
                  <div className="flash-tab">
                     <ul>
                        <li
                           data-attribute="vehicle-level"
                           className={`${
                              activeTab === "vehicle-level" ? "active" : ""
                           }`}
                           onClick={handleTab}
                        >
                           <img src={Vehicle} alt="vehicle" />
                           <span>Vehicle Level</span>
                        </li>
                        <li
                           data-attribute="ecu-level"
                           className={`${
                              activeTab === "ecu-level" ? "active" : ""
                           }`}
                           onClick={handleTab}
                        >
                           <img src={EcuChip} alt="Ecu" />
                           <span>ECU Level</span>
                        </li>
                     </ul>
                  </div>
                  <div className="flash-section">
                     {activeTab === "vehicle-level" ? (
                        <VehicleLevel
                           flashingDetails={flashingDetails}
                           cancelDownload={cancelDownload}
                           cancelDownloadPopup={cancelDownloadPopup}
                           cancelDownloadDisable={cancelDownloadDisable}
                        />
                     ) : (
                        <EcuLevel
                           flashingDetails={flashingDetails}
                           downloadFilesData={downloadFilesData}
                           selectAll={selectAll}
                           downloadSelected={downloadSelected}
                           downloadSingle={downloadSingle}
                           setFlashingDetails={setFlashingDetails}
                        />
                     )}
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
}

export default EcuFlashing;
