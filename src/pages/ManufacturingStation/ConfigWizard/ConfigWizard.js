/* eslint-disable no-unused-vars */
import {
   HISTORY_CONFIG_ACTION,
   HISTORY_STATION_ACTION,
   TAB_NAME,
} from "app_constants";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import routePaths from "routes/routePaths";
import { allImages } from "utils/images";
import EditStation from "./EditStation";
import StationCount from "./StationCount";
import { editStationSchema, stationCountSchema } from "../Validations";
import { toast } from "react-toastify";
import { useFormik } from "formik";
import FinishSetup from "./FinishSetup.jsx";

const ConfigWizard = () => {
   const navigate = useNavigate();
   const [configHistoryData, setConfigHistoryData] = useState([]);
   const [stationHistoryData, setStationHistoryData] = useState([]);
   const [activeTab, setActiveTab] = useState(TAB_NAME.stationCount);

   //formik validation for station count
   const stationCountFormik = useFormik({
      initialValues: { pdx_selection: "", pdx_file: null, no_of_station: "" },
      validationSchema: stationCountSchema,
      onSubmit: (value) => {
         toast.success("form submitted successfully");
         setActiveTab(TAB_NAME.editStation);
      },
   });
   const generateStations = (count) =>
      Array.from({ length: count }, (_, i) => ({
         id: Date.now() + i,
         stationName: "",
         pdx_file: null,
      }));
   const [editStationsFormData, setEditStationsFormData] = useState(
      generateStations(stationCountFormik.values.no_of_station)
   );
   const editStationFormik = useFormik({
      initialValues: { stations: editStationsFormData },
      validationSchema: editStationSchema,
      onSubmit: (value) => {
         toast.success("form submitted successfully");
         setActiveTab(TAB_NAME.finishSetup);
      },
   });
   // console.log("editStationFormik", editStationFormik);
   console.log("values", editStationFormik.values);
   console.log("errors", editStationFormik.errors);
   // Regenerate stations when stationCount changes
   useEffect(() => {
      setEditStationsFormData(
         generateStations(stationCountFormik.values.no_of_station)
      );
      editStationFormik.setFieldValue(
         "stations",
         generateStations(stationCountFormik.values.no_of_station)
      );
   }, [stationCountFormik.values.no_of_station]);

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

   const handleClickTab = (e) => {
      let tabName = e.currentTarget.getAttribute("data-attr");
      setActiveTab(tabName);
   };

   return (
      <div className="config-wizard">
         <div
            className="close-con"
            onClick={() => navigate(routePaths.manufacturing)}
         >
            <img src={allImages.homeIcon} alt="home" />
         </div>
         <div className="wizard-body">
            <p className="title">{configHistoryData[0]?.fileName}</p>
            <div className="wizard-box">
               <p className="sub-title">
                  Config Wizard - Create Initial Configuration
               </p>
               <div className="wizard-tab">
                  <span
                     className={`pdx-span ${
                        activeTab === TAB_NAME.stationCount && "active"
                     }`}
                     data-attr={TAB_NAME.stationCount}
                     onClick={handleClickTab}
                  >
                     PDX & Station count
                  </span>
                  <span
                     className={activeTab === TAB_NAME.editStation && "active"}
                     data-attr={TAB_NAME.editStation}
                     onClick={handleClickTab}
                  >
                     Edit Stations
                  </span>
                  <span
                     className={activeTab === TAB_NAME.finishSetup && "active"}
                     data-attr={TAB_NAME.finishSetup}
                     onClick={handleClickTab}
                  >
                     Finish initial setup
                  </span>
               </div>

               <div className="tab-box">
                  {activeTab === TAB_NAME.stationCount && (
                     <StationCount
                        stationCountFormik={stationCountFormik}
                        setActiveTab={setActiveTab}
                     />
                  )}
                  {activeTab === TAB_NAME.editStation && (
                     <EditStation
                        stationCountFormik={stationCountFormik}
                        editStationFormik={editStationFormik}
                        editStationsFormData={editStationsFormData}
                        setEditStationsFormData={setEditStationsFormData}
                        setActiveTab={setActiveTab}
                     />
                  )}
                  {activeTab === TAB_NAME.finishSetup && (
                     <FinishSetup
                        stationCountFormik={stationCountFormik}
                        editStationFormik={editStationFormik}
                        setActiveTab={setActiveTab}
                     />
                  )}
               </div>
            </div>
         </div>
      </div>
   );
};

export default ConfigWizard;
