/* eslint-disable quotes */
/* eslint-disable no-unused-vars */
/* eslint-disable indent */

import { NavLink } from "react-router-dom";
import routePaths from "routes/routePaths";
import { allImages } from "utils/images";
import Draggable from "react-draggable";
import { useState } from "react";
import AssemblyEditStationModal from "../ReactModals/AssemblyEditStation.jsx";
import { useFormik } from "formik";
import { toast } from "react-toastify";
import { assemblyStationInitialValues } from "../Validations/index.js";
import { Link } from "react-router-dom";

const AssemblyLine = () => {
   // const [stationFormData, setStationFormData] = useState([]);
   const OFFSET_X_INITIAL = 30;
   const OFFSET_Y_INITIAL = 100;
   const OFFSET_X = 260;
   const OFFSET_Y = 160;
   const [openEditForm, setOpenEditForm] = useState(false);
   const [currentStationIndex, setCurrentStationIndex] = useState(0);
   const [newlyAddedStationIndex, setNewlyAddedStationIndex] = useState(0);

   const assemblyFormik = useFormik({
      initialValues: assemblyStationInitialValues,
      validationSchema: "",
      onSubmit: (value) => {
         setOpenEditForm(false);
         toast.success("form submitted successfully");
         // setActiveTab(TAB_NAME.finishSetup);
      },
   });
   const [activeStation, setActiveStation] = useState(
      assemblyFormik.values.stations[0]?.id || 0
   );
   console.log("assemblyFormik", assemblyFormik.values.stations);
   console.log("activeStation", activeStation);

   //handle click on plus icon of the Main tool box
   const handleClickAddNewStation = () => {
      const newStation = {
         id: Date.now(),
         stationName: "",
         x: OFFSET_X_INITIAL,
         y: OFFSET_Y_INITIAL,
         operations: [
            {
               operation: "",
               pdx_file: null,
               ecu: "",
               sequence_or_service: "",
               sequence_file: null,
               service_file: null,
            },
         ],
      };
      const updatedStations = [...assemblyFormik.values.stations, newStation];
      assemblyFormik?.setFieldValue("stations", updatedStations);
   };

   const handleOpenForm = (item, idx) => {
      setActiveStation(item);
      setOpenEditForm(true);
      setCurrentStationIndex(idx);
   };
   const handleCloseForm = (item, idx) => {
      // setActiveStation(item);
      setOpenEditForm(false);
      // setCurrentStationIndex(idx);
   };

   const handleDeleteStation = (item, index) => {
      const updatedData = [...assemblyFormik.values.stations];

      // Filter out the station to delete
      const filtered = updatedData.filter((s) => s.id !== item?.id);

      // Recalculate X and Y positions to avoid gaps
      // const offsetX = 230;
      // const offsetY = 130;

      const rePositioned = filtered.map((station, i) => ({
         ...station,
         x: i === 0 ? 30 : i * OFFSET_X + 30,
         y: 100, // All on same row; adjust if you're using grid layout
      }));

      assemblyFormik.setFieldValue("stations", rePositioned);
   };

   //handle click on any side plus icon of station box
   const handleAddStationAround = (direction, currentStation) => {
      // const offsetX = 230;
      // const offsetY = 130;

      let newX = currentStation.x;
      let newY = currentStation.y;

      // Adjust position based on direction
      switch (direction) {
         case "left":
            newX -= OFFSET_X;
            break;
         case "right":
            newX += OFFSET_X;
            break;
         case "top":
            newY -= OFFSET_Y;
            break;
         case "bottom":
            newY += OFFSET_Y;
            break;
         default:
            break;
      }

      const newStation = {
         id: Date.now(), // unique
         stationName: "",
         x: newX,
         y: newY,
         operations: [
            {
               operation: "",
               pdx_file: null,
               ecu: "",
               sequence_or_service: "",
               sequence_file: null,
               service_file: null,
            },
         ],
      };

      const updatedStations = [...assemblyFormik.values.stations, newStation];
      assemblyFormik.setFieldValue("stations", updatedStations);
   };

   //handle click on plus icon between the station/box
   const handleAddStationBetween = (item, idx) => {
      setNewlyAddedStationIndex(null);

      const newX = item?.x + OFFSET_X;
      const newY = item?.y;
      const newItem = {
         id: Date.now(),
         stationName: "new station",
         x: newX,
         y: newY,
         ci: "",
         operations: [
            {
               operation: "",
               pdx_file: null,
               ecu: "",
               sequence_or_service: "",
               sequence_file: null,
               service_file: null,
            },
         ],
      };
      const insertIndex = idx; // for example, insert at index 1
      const updatedStations = [
         ...assemblyFormik.values.stations.slice(0, insertIndex + 1),
         newItem,
         ...assemblyFormik.values.stations.slice(insertIndex + 1),
      ];
      const repositioned = updatedStations.map((station, i) => {
         if (i > insertIndex + 1) {
            return {
               ...station,
               x: (station.x || 0) + OFFSET_X,
               // y: (station.y || 0) + OFFSET_Y_INITIAL,
            };
         }
         setTimeout(() => {
            setNewlyAddedStationIndex(idx + 1); //index of newly added station for animation purpose only
         }, 10);
         return station;
      });
      assemblyFormik.setFieldValue("stations", repositioned);
   };
   return (
      <div>
         <AssemblyEditStationModal
            isOpen={openEditForm}
            handleClose={handleCloseForm}
            handleClickAddNewStation={handleClickAddNewStation}
            assemblyFormik={assemblyFormik}
            currentStationIndex={currentStationIndex}
         />
         <div className="al-header">
            <div className="img-con" onClick={() => routePaths.manufacturing}>
               <img src={allImages.homeIcon} alt="home" />
            </div>
            <div className="options-con">
               <span className="file-span">
                  Current Configuration: Sample configuration.bcm
               </span>
               <div className="option-box ">
                  <img src={allImages.saveIcon} alt="save" />
               </div>
               <div className="option-box ">
                  <img src={allImages.saveIcon} alt="save" />
               </div>
               <div className="option-box ">
                  <img src={allImages.undoBackIcon} alt="undo" />
               </div>
               <div className="option-box ">
                  <img src={allImages.undoBackIcon} alt="undo" />
               </div>
            </div>
         </div>
         <div className="assembly-line">
            {/* Tools */}
            <div className="drag-wrap">
               <Draggable
               // defaultPosition={{ x: "100%", y: "0" }}
               >
                  <div className="draggable-box">
                     <div
                        className="tool-box"
                        style={{ "--toolTip": '"Add New Station"' }}
                        onClick={handleClickAddNewStation}
                     >
                        <img src={allImages.addRoundIcon} alt="tool" />
                     </div>
                     <div
                        className="tool-box"
                        style={{ "--toolTip": '"folder"' }}
                     >
                        <img src={allImages.formKitIcon} alt="tool" />
                     </div>
                     <div
                        className="tool-box"
                        style={{ "--toolTip": '"play"' }}
                     >
                        <img src={allImages.playIcon} alt="tool" />
                     </div>
                     <div
                        className="tool-box"
                        style={{ "--toolTip": '"material"' }}
                     >
                        <img src={allImages.materialSymbolsIcon} alt="tool" />
                     </div>
                     <div
                        className="tool-box"
                        style={{ "--toolTip": '"save"' }}
                     >
                        <img src={allImages.saveIcon} alt="tool" />
                     </div>
                     <div
                        className="tool-box"
                        style={{ "--toolTip": '"delete"' }}
                     >
                        <img src={allImages.deleteToolIcon} alt="tool" />
                     </div>
                     <div
                        className="tool-box"
                        style={{ "--toolTip": '"sync"' }}
                     >
                        <img src={allImages.arrowSyncIcon} alt="tool" />
                     </div>
                  </div>
               </Draggable>
            </div>
            {/* stations */}
            <div className="station-con">
               {assemblyFormik?.values?.stations?.map((item, i) => (
                  <div
                     key={i}
                     // className="station-item"
                     className={`station-item ${
                        activeStation?.id === item?.id && "active-station"
                     } ${newlyAddedStationIndex === i && "newly-added-item"}`}
                     style={{
                        position: "absolute",
                        top: item?.y,
                        left: item?.x,
                     }}
                  >
                     {/* position absolutes containers */}
                     <>
                        {i < assemblyFormik?.values?.stations?.length - 1 && (
                           <div className="arrow-line" title="Add new station">
                              <div
                                 className="img-con"
                                 onClick={() =>
                                    handleAddStationBetween(item, i)
                                 }
                              >
                                 <img src={allImages.plusSmallIcon} alt="add" />
                              </div>
                           </div>
                        )}
                        <div className="add-opt top-con">
                           <img src={allImages.addRoundIcon} alt="top" />
                        </div>
                        {i === assemblyFormik?.values?.stations?.length - 1 && (
                           <div
                              className="add-opt right-con"
                              onClick={() =>
                                 handleAddStationAround("right", item)
                              }
                           >
                              <img src={allImages.addRoundIcon} alt="right" />
                           </div>
                        )}
                        <div className="add-opt bottom-con">
                           <img
                              src={allImages.addRoundIcon}
                              alt="bottom"
                              onClick={() =>
                                 handleAddStationAround("bottom", item)
                              }
                           />
                        </div>
                        {i === 0 && (
                           <div className="add-opt left-con">
                              <img src={allImages.addRoundIcon} alt="left" />
                           </div>
                        )}
                     </>
                     {/* header tools */}
                     <div className="header-tool">
                        <div
                           className="tool-icon"
                           style={{ "--toolTip": '"Edit"' }}
                           onClick={() => handleOpenForm(item, i)}
                        >
                           <img src={allImages.editingIcon} alt="edit" />
                        </div>
                        <div
                           className="tool-icon"
                           style={{ "--toolTip": '"Copy"' }}
                        >
                           <img src={allImages.copyIcon} alt="edit" />
                        </div>
                        <div
                           className="tool-icon"
                           style={{ "--toolTip": '"Close"' }}
                           onClick={() => handleDeleteStation(item, i)}
                        >
                           <img src={allImages.closeCircleIcon} alt="edit" />
                        </div>
                     </div>

                     <div className="st-body">
                        <span>
                           {item?.stationName
                              ? item?.stationName
                              : `Station ${i + 1}`}
                        </span>
                     </div>
                  </div>
               ))}
            </div>
         </div>
      </div>
   );
};

export default AssemblyLine;
