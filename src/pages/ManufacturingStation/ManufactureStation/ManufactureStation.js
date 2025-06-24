/* eslint-disable no-unused-vars */

import { HISTORY_CONFIG_ACTION, HISTORY_STATION_ACTION } from "app_constants";
import moment from "moment";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { allImages } from "utils/images";
import { ReactComponent as SearchIcon } from "../../../assets/images/search.svg";
import { useNavigate } from "react-router-dom";
import routePaths from "routes/routePaths";
const ManufactureStation = () => {
   const [configHistoryData, setConfigHistoryData] = useState([]);
   const [stationHistoryData, setStationHistoryData] = useState([]);
   const [openCreateModal, setOpenCreateModal] = useState(false);

   const navigate = useNavigate();

   //getting history data from localstorage
   useEffect(() => {
      let configHistoryData =
         JSON.parse(localStorage.getItem(HISTORY_CONFIG_ACTION)) || [];
      let sortConfigData = configHistoryData?.sort(
         (a, b) => new Date(b.time) - new Date(a.time)
      );
      setConfigHistoryData(sortConfigData);

      //For Station history
      let stationHistoryData =
         JSON.parse(localStorage.getItem(HISTORY_STATION_ACTION)) || [];
      let sortStationData = stationHistoryData?.sort(
         (a, b) => new Date(b.time) - new Date(a.time)
      );
      setStationHistoryData(sortStationData);
   }, []);

   const saveConfigHistory = (fileName) => {
      //  Update history state and localStorage
      const updatedHistory = [
         {
            action: "file created",
            fileName, // store actual filename entered
            section: "configuration",
            time: new Date().toISOString(),
         },
         ...configHistoryData,
      ];
      if (updatedHistory?.length > 10) {
         updatedHistory.pop();
      }

      setConfigHistoryData(updatedHistory);
      localStorage.setItem(
         HISTORY_CONFIG_ACTION,
         JSON.stringify(updatedHistory)
      );
   };
   const saveStationHistory = (fileName) => {
      //  Update history state and localStorage
      const updatedHistory = [
         {
            action: "file created",
            fileName, // store actual filename entered
            section: "station",
            time: new Date().toISOString(),
         },
         ...stationHistoryData,
      ];
      if (updatedHistory?.length > 10) {
         updatedHistory.pop();
      }

      setStationHistoryData(updatedHistory);
      localStorage.setItem(
         HISTORY_STATION_ACTION,
         JSON.stringify(updatedHistory)
      );
   };

   // const handleClickCreateFile = async () => {
   //    try {
   //       const fileName = "new-file.bcm";
   //       const fileContent = ""; // Can be dynamic

   //       const isElectron = !!window?.electronAPI?.saveFile;

   //       if (isElectron) {
   //          const result = await window.electronAPI.saveFile(
   //             fileName,
   //             fileContent
   //          );
   //          if (!result.canceled) {
   //             toast.success("File created successfully!");
   //             const savedName = result.filePath.split(/[/\\]/).pop(); // Extract filename
   //             saveConfigHistory(savedName);
   //          }
   //       } else {
   //          const fileHandle = await window.showSaveFilePicker({
   //             suggestedName: fileName,
   //             types: [
   //                {
   //                   description: "BCM Files",
   //                   accept: { "text/plain": [".bcm"] },
   //                },
   //             ],
   //          });

   //          const writable = await fileHandle.createWritable();
   //          await writable.write(fileContent);
   //          await writable.close();

   //          toast.success("File created successfully!");
   //          saveConfigHistory(fileHandle.name);
   //       }
   //    } catch (error) {
   //       if (error.name !== "AbortError") {
   //          console.error("Error saving file:", error);
   //          toast.error("Error saving file");
   //       }
   //    }
   // };

   //handle click for Station section
   const handleStationCreateFIle = async () => {
      try {
         const fileName = "new-file.bcm";
         const fileContent = ""; // Can be dynamic

         const isElectron = !!window?.electronAPI?.saveFile;

         if (isElectron) {
            const result = await window.electronAPI.saveFile(
               fileName,
               fileContent
            );
            if (!result.canceled) {
               toast.success("File created successfully!");
               const savedName = result.filePath.split(/[/\\]/).pop(); // Extract filename
               saveStationHistory(savedName);
            }
         } else {
            const fileHandle = await window.showSaveFilePicker({
               suggestedName: fileName,
               types: [
                  {
                     description: "BCM Files",
                     accept: { "text/plain": [".bcm"] },
                  },
               ],
            });

            const writable = await fileHandle.createWritable();
            await writable.write(fileContent);
            await writable.close();

            toast.success("File created successfully!");
            saveConfigHistory(fileHandle.name);
         }
      } catch (error) {
         if (error.name !== "AbortError") {
            console.error("Error saving file:", error);
            toast.error("Error saving file");
         }
      }
   };
   const handleOpenCreatePopup = () => {
      // setOpenCreateModal(!openCreateModal);
      navigate(routePaths.createFile);
   };
   return (
      <div className="manufacture-container">
         {/* <CreateFileModal
            isOpen={openCreateModal}
            handleModal={handleOpenCreatePopup}
            handleClickCreateFile={handleClickCreateFile}
         /> */}
         <div className="mf-wrapper">
            <div className="mf-left">
               <div className="activity-con">
                  <span className="title">Recent Activity</span>
                  <div className="mf-content">
                     <div className="configuration">
                        <div className="cf-title">
                           <span>Configuration</span>
                           <div className="search-box">
                              <input
                                 type="text"
                                 placeholder="search by configuration"
                              />
                              <SearchIcon />
                           </div>
                        </div>

                        <ol>
                           {configHistoryData?.length > 0 ? (
                              <>
                                 {configHistoryData?.map((item, i) => (
                                    <li key={item?.time}>
                                       <span>
                                          {`${i + 1}. ${item?.fileName} ${
                                             item?.action
                                          } `}
                                       </span>
                                       <span>
                                          {moment(item?.time).fromNow()}
                                       </span>
                                    </li>
                                 ))}
                              </>
                           ) : (
                              <div className="no-data-found-manuf">
                                 <span>No history found</span>
                              </div>
                           )}
                        </ol>
                     </div>
                     <div className="station">
                        <div className="cf-title">
                           <span>Stations</span>
                           <div className="search-box">
                              <input
                                 type="text"
                                 placeholder="search by station"
                              />
                              <SearchIcon />
                           </div>
                        </div>
                        <ol>
                           {stationHistoryData?.length > 0 ? (
                              <>
                                 {stationHistoryData?.map((item, i) => (
                                    <li key={item?.time}>
                                       <span>
                                          {`${i + 1}. ${item?.fileName} ${
                                             item?.action
                                          } `}
                                       </span>
                                       <span>
                                          {moment(item?.time).fromNow()}
                                       </span>
                                    </li>
                                 ))}
                              </>
                           ) : (
                              <div className="no-data-found-manuf">
                                 <span>No history found</span>
                              </div>
                           )}
                        </ol>
                     </div>
                  </div>
               </div>
            </div>
            <div className="mf-right">
               <div className="mf-config">
                  <p className="rcn-title">Configurations</p>
                  <div className="selection-con">
                     <button className="sc-btn" onClick={handleOpenCreatePopup}>
                        <div className="img-box">
                           <img src={allImages.createIcon} alt="icon" />
                        </div>
                        <span>Create</span>
                     </button>
                     <button className="sc-btn">
                        <div className="img-box">
                           <img src={allImages.modifyIcon} alt="icon" />
                        </div>
                        <span>Modify</span>
                     </button>
                     <button className="sc-btn">
                        <div className="img-box">
                           <img src={allImages.syncIcon} alt="icon" />
                        </div>
                        <span>Sync</span>
                     </button>
                  </div>
               </div>
               <div className="mf-station">
                  <p className="rcn-title">Stations</p>
                  <div className="selection-con">
                     <button
                        className="sc-btn"
                        onClick={handleStationCreateFIle}
                     >
                        <div className="img-box">
                           <img src={allImages.createIcon} alt="icon" />
                        </div>
                        <span>Create</span>
                     </button>
                     <button className="sc-btn">
                        <div className="img-box">
                           <img src={allImages.modifyIcon} alt="icon" />
                        </div>
                        <span>Modify</span>
                     </button>
                     <button className="sc-btn">
                        <div className="img-box">
                           <img src={allImages.syncIcon} alt="icon" />
                        </div>
                        <span>Sync</span>
                     </button>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
};

export default ManufactureStation;
