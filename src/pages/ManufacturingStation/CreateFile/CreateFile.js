/* eslint-disable no-unused-vars */
import { HISTORY_CONFIG_ACTION, HISTORY_STATION_ACTION } from "app_constants";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import routePaths from "routes/routePaths";
import { allImages } from "utils/images";

const CreateFile = () => {
   const navigate = useNavigate();
   const [configHistoryData, setConfigHistoryData] = useState([]);
   const [stationHistoryData, setStationHistoryData] = useState([]);
   const [isFileCreated, setIsFileCreated] = useState(false);

   console.log("configHistoryData", configHistoryData);

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
   }, [isFileCreated]);

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

   const handleClickCreateFile = async () => {
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
               setIsFileCreated(true);
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
            setIsFileCreated(true);
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
      <div className="create-file-container">
         <div
            className="close-con"
            onClick={() => navigate(routePaths.manufacturing)}
         >
            <img src={allImages.homeIcon} alt="home" />
         </div>
         {!isFileCreated ? (
            <div className="content-box">
               <p>
                  Dou you want to create new configuration or re-use an existing
                  configuration ?
               </p>
               <div className="btn-grp">
                  <button onClick={handleClickCreateFile}>Create new</button>
                  <button>Re-use and create </button>
               </div>
            </div>
         ) : (
            <div className="file-created-box">
               <span>{configHistoryData[0]?.fileName}</span>
               <p>
                  Dou you want to setup the initial station flow using the
                  Config wizard?
               </p>
               <div className="btn-grp">
                  <button
                     className="btn-yes"
                     onClick={() => navigate(routePaths.configWizard)}
                  >
                     Yes
                  </button>
                  <button
                     className="btn-no"
                     onClick={() => navigate(routePaths.manufacturing)}
                  >
                     No
                  </button>
               </div>
            </div>
         )}
      </div>
   );
};

export default CreateFile;
