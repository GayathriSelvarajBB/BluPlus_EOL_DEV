import { HISTORY_CONFIG_ACTION, HISTORY_STATION_ACTION } from "app_constants";
import moment from "moment";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { allImages } from "utils/images";

const ManufactureStation = () => {
   const [configHistoryData, setConfigHistoryData] = useState([]);
   const [stationHistoryData, setStationHistoryData] = useState([]);


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

   const handleCLickCreateFile = async () => {
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
               saveConfigHistory(savedName);
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

   return (
      <div className="manufacture-container">
         <div className="mf-wrapper">
            <div className="mf-left">
               <span className="title">Recent Activity</span>
               <div className="mf-content">
                  <div className="configuration">
                     <p className="cf-title">Configuration</p>

                     <ol>
                        {configHistoryData?.length > 0 ? (
                           <>
                              {configHistoryData?.map((item) => (
                                 <li key={item?.time}>
                                    <span>
                                       {`${item?.fileName} ${item?.action} `}
                                    </span>
                                    <span>{`${moment(item?.time).format(
                                       "DD MMM YYYY, hh:mm A"
                                    )}`}</span>
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
                     <p className="cf-title">Stations</p>
                     <ol>
                        {stationHistoryData?.length > 0 ? (
                           <>
                              {stationHistoryData?.map((item) => (
                                 <li key={item?.time}>
                                    <span>
                                       {`${item?.fileName} ${item?.action} `}
                                    </span>
                                    <span>{`${moment(item?.time).format(
                                       "DD MMM YYYY, hh:mm A"
                                    )}`}</span>
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
            <div className="mf-right">
               <div className="mf-config">
                  <p className="rcn-title">Configurations</p>
                  <div className="selection-con">
                     <button className="sc-btn" onClick={handleCLickCreateFile}>
                        <img src={allImages.createIcon} alt="icon" />
                        <span>Create</span>
                     </button>
                     <button className="sc-btn" onClick={handleCLickCreateFile}>
                        <img src={allImages.modifyIcon} alt="icon" />
                        <span>Modify</span>
                     </button>
                     <button className="sc-btn" onClick={handleCLickCreateFile}>
                        <img src={allImages.syncIcon} alt="icon" />
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
                        <img src={allImages.createIcon} alt="icon" />
                        <span>Create</span>
                     </button>
                     <button
                        className="sc-btn"
                        onClick={handleStationCreateFIle}
                     >
                        <img src={allImages.modifyIcon} alt="icon" />
                        <span>Modify</span>
                     </button>
                     <button
                        className="sc-btn"
                        onClick={handleStationCreateFIle}
                     >
                        <img src={allImages.syncIcon} alt="icon" />
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
