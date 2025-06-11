import { useEffect, useMemo, useState } from "react";
import SideBar from "../../components/SideBar/SideBar";
import "react-toastify/dist/ReactToastify.css";
import bblogo from "assets/images/bblogo.png";
import FlashingIcon from "assets/images/flashing-icon.png";
import FlashingContainer from "./FlashingContainer";
import { getManifestIdInfo } from "services/dashboardService";
import { useDispatch, useSelector } from "react-redux";
import { setFlashManifestData } from "redux/flashEcuManifest.slice";
import { staticManifestDetails } from "app_constants/staticManifestDetails";
import { ecuBusMapping } from "app_constants/busEcuMapping";
import useIsOnline from "hooks/useIsOnline";
import {
   getAllVehicleFlashingData,
   setVehicleFlashingData,
} from "storage/vehicleFlashingStorage";
import { toast } from "react-toastify";
import { updateEcuFlashing } from "redux/ecuFlashing.slice";

function Flashing() {
   const [showDownloadProgress, setShowDownloadProgress] = useState(false);
   const [downloadProgress, setDownloadProgress] = useState(0);

   const [isloading, setIsLoading] = useState(true);
   const isOnline = useIsOnline();

   const dispatch = useDispatch();

   const { manifestData, manifestDetails, activeVinNumber, ecuFlashState } =
      useSelector((state) => ({
         manifestData: state.manifestData?.manifests || [],
         manifestDetails: state.ecuFlashingManifestData || [],
         activeVinNumber: state.activeVin?.vinNumber || "VIN5153",
         ecuFlashState: state.ecuFlashing,
      }));

   useEffect(() => {
      // Fetching ecu data from API
      fetchAllManifestDetails();
      // eslint-disable-next-line react-hooks/exhaustive-deps
   }, []);

   const cloudManifestDetails = useMemo(() => {
      let data = {};
      // Looping through the manifest data
      // for (const item of staticManifestDetails) {
      for (const item of manifestDetails) {
         // Looping through the ecu items
         for (const ecuData of item.ecu_updates) {
            const ecuName = ecuData.name;
            const busName = ecuBusMapping[ecuName] || "BUS";
            !data[busName] && (data[busName] = {});
            data[busName][ecuName] = {
               hardware: ecuData.hwVersion ?? "--",
               softaware: ecuData.version ?? "--",
               flashDate: "--", // TODO: update the propertyName once proper data has arriev the ecuData.updated
            };
         }
      }
      return data;
   }, [manifestDetails]);

   const vehicleManifestDetails = useMemo(() => {
      let data = {};
      // Looping through the manifest data
      // for (const item of staticManifestDetails) {
      for (const item of manifestDetails) {
         // Looping through the ecu items
         for (const ecuData of item.ecu_updates) {
            const ecuName = ecuData.name;
            const busName = ecuBusMapping[ecuName] || "BUS";
            !data[busName] && (data[busName] = {});
            data[busName][ecuName] = {
               hardware: "--",
               softaware: "--",
               flashDate: "--",
            };
         }
      }
      return data;
   }, [manifestDetails]);

   const fetchAllManifestDetails = async () => {
      // eslint-disable-next-line sonarjs/no-unused-collection
      let manifestDetailsArr = [];
      if (navigator.onLine) {
         for (const data of manifestData) {
            const res = await getManifestIdInfo(data?.id);
            if (res.status === 200) {
               console.log("Manifest details response", res.data.data);
               manifestDetailsArr.push(res.data?.data);
            } else {
               // TODO: show error response in Toast
               toast.error("Could not fetch flashing data");
               return;
            }
         }
         // updating the fetched data in Local(indexedDB)
         setVehicleFlashingData(manifestDetailsArr);
      } else {
         manifestDetailsArr = await getAllVehicleFlashingData();
      }
      console.log("Manifes details Data received", manifestDetailsArr);
      // TODO: pass the processed data variable "manifestDetailsArr" to below action as payload
      dispatch(setFlashManifestData(staticManifestDetails));
      // TODO: emit socket events to fetch the ecu details from vehicle once the data received from API
      setIsLoading(false); // TODO: set the loader false once received data from both vehicle and cloud
   };

   const downloadFlashFiles = () => {
      setShowDownloadProgress(true);
      let totalFiles = 0,
         totalDownloadedFiles = 0;
      for (const item of manifestDetails) {
         for (const data of item.ecu_updates) {
            // call the main process api to download files
            totalFiles += data.files.length;
            window.electronAPI
               .downloadFlashFiles(activeVinNumber || "VIN5153", data)
               // eslint-disable-next-line no-loop-func
               .then((res) => {
                  console.log("Response from flash file download", res);
                  // eslint-disable-next-line no-debugger
                  debugger;
                  if (res.downloaded) {
                     totalDownloadedFiles += data.files.length;
                     // calculating percentage of the downloaded files
                     setDownloadProgress(
                        Math.floor((totalDownloadedFiles * 100) / totalFiles)
                     );
                     if (totalFiles === totalDownloadedFiles) {
                        dispatch(
                           updateEcuFlashing({ flashFilesDownloaded: true })
                        );
                     }
                  }
               });
         }
      }
   };

   const handleDownloadClick = () => {
      if (!ecuFlashState?.flashFilesDownloaded) {
         downloadFlashFiles();
      } else {
         toast.info("Flash files already downloaded");
      }
   };

   return (
      <div className="flashing-page">
         <div className="page-wrapper">
            <SideBar />
            <div className="body-wrapper">
               <div className="ecu-flashing-screen">
                  <div className="ecu-flashing-container">
                     <div className="vehicle-software-level">
                        <h2>Vehicle Software Level</h2>
                        <div className="current-software-details">
                           <div className="current-software-content">
                              <h4>Current Vehicle Software: NA</h4>
                              <h3>Available Vehicle Software: NA</h3>
                              <h5>
                                 Previous Vehicle Flash: <span>NA</span>
                              </h5>
                              <button
                                 onClick={handleDownloadClick}
                                 disabled={!isOnline}
                              >
                                 Download Now
                              </button>
                              <button
                                 className="flash-vehicle"
                                 disabled={!ecuFlashState?.flashFilesDownloaded}
                              >
                                 Flash Vehicle
                              </button>
                              {/* Flash file download progress bar */}
                              {showDownloadProgress && (
                                 <div className="download-progress">
                                    <div className="progress-total">
                                       <div
                                          className="progress-completed"
                                          style={{
                                             width: downloadProgress + "%",
                                          }}
                                       />
                                    </div>
                                    <span className="download-progress-percenntage-txt">
                                       {downloadProgress}%
                                    </span>
                                 </div>
                              )}
                           </div>
                           <div className="current-software-logo">
                              <img src={bblogo} alt="bluebinaries" />
                           </div>
                        </div>
                     </div>
                     <div className="ecu-software-level">
                        <div className="ecu-software-level-head">
                           <h2>
                              <img src={FlashingIcon} alt="flashing" />
                              <span>ECU Software Level</span>
                              {/* Mini Loader */}
                              {isloading && <span className="mini-loader" />}
                           </h2>
                        </div>
                        <div className="flashing-status-details">
                           <FlashingContainer
                              title="Car Status"
                              ecuData={vehicleManifestDetails}
                           />
                           <FlashingContainer
                              title="Cloud Status"
                              ecuData={cloudManifestDetails}
                           />
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
}

export default Flashing;
