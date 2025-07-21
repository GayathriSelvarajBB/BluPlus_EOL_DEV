/* eslint-disable no-unused-vars */
/* eslint-disable indent */

import React, { useEffect, useMemo, useRef, useState } from "react";
import { allImages } from "utils/images";
import { ReactSortable } from "react-sortablejs";
import { TAB_NAME } from "app_constants";
import OpenFileSelectorModal from "../ReactModals/OpenFileSelection.jsx";
const EditStation = ({
   stationCountFormik,
   editStationFormik,
   editStationsFormData,
   setEditStationsFormData,
   setActiveTab,
}) => {
   console.log("editStationFormik", editStationFormik);

   const inputRef = useRef([]);
   const [isFileSelectionOpen, setIsFileSelectionOpen] = useState(false);
   const [rowIndex, setRowIndex] = useState(null);
   useEffect(() => {
      inputRef.current = editStationFormik.values.stations.map(
         (_, i) => inputRef.current[i] || React.createRef()
      );
   }, [editStationFormik.values.stations.length]);

   const handleOpenFileSelector = (index) => {
      setIsFileSelectionOpen(!isFileSelectionOpen);
      setRowIndex(index);
      // inputRef.current.click();
   };
   // const handleBroseFile = (index) => {
   //    inputRef.current[index]?.current?.click();
   // };
   const handleFileChange = (e, index) => {
      const file = e.target.files[0];
      if (file) {
         editStationFormik.setFieldValue(`stations[${index}].pdx_file`, file);
      }
   };

   const handleDeleteRow = (index) => {
      let updatedData = [...editStationFormik.values.stations];
      updatedData.splice(index, 1);
      // Update local state
      setEditStationsFormData(updatedData);

      // Update Formik state
      editStationFormik.setFieldValue("stations", updatedData);
   };

   const handleAddRow = () => {
      // Add a new row to the stations array
      const newStation = {
         id: Date.now(), // or use uuid()
         stationName: "",
         pdx_file: null,
      };

      const updatedStations = [
         ...editStationFormik.values.stations,
         newStation,
      ];

      // Update both formik and external state
      editStationFormik.setFieldValue("stations", updatedStations);
      setEditStationsFormData(updatedStations);
   };
   return (
      <div className="edit-station">
         <OpenFileSelectorModal
            isOpen={isFileSelectionOpen}
            rowIndex={rowIndex}
            editStationFormik={editStationFormik}
            handleFileChange={handleFileChange}
            setIsFileSelectionOpen={setIsFileSelectionOpen}
         />
         <form onSubmit={editStationFormik.handleSubmit}>
            <div className="table-container">
               <table className="table-header">
                  <thead>
                     <tr>
                        <th className="th-sno">Station No.</th>
                        <th>Station Name</th>
                        <th colSpan={2}>Assign ECU from PDX</th>
                     </tr>
                  </thead>
               </table>
               {/* table body */}
               <div className="table-scroll-container">
                  <table className="table-body">
                     <ReactSortable
                        tag="tbody"
                        list={editStationFormik.values.stations}
                        // setList={setStations}
                        setList={(newList) => {
                           editStationFormik.setFieldValue("stations", newList);
                           setEditStationsFormData(newList);
                        }}
                        handle=".drag-handle"
                     >
                        {editStationFormik.values.stations.map((row, index) => (
                           <tr key={row.id}>
                              <td>
                                 <div className="common-div sno-con">
                                    <img
                                       src={allImages.arrowUDIcon}
                                       alt="arrow"
                                       className="drag-handle"
                                    />
                                    {index + 1}
                                 </div>
                              </td>
                              <td>
                                 <div className="common-div">
                                    <input
                                       // className="station-input"
                                       className={`station-input ${
                                          editStationFormik.touched.stations?.[
                                             index
                                          ]?.stationName &&
                                          editStationFormik.errors.stations?.[
                                             index
                                          ]?.stationName &&
                                          "error"
                                       }`}
                                       type="text"
                                       placeholder="Input station name..."
                                       // name="stationName"
                                       name={`stations[${index}].stationName`}
                                       value={
                                          editStationFormik.values.stations[
                                             index
                                          ].stationName
                                       }
                                       onChange={editStationFormik.handleChange}
                                    />
                                 </div>
                              </td>

                              <td colSpan={2}>
                                 <div
                                    // className="common-div browse-con"
                                    className={`common-div browse-con ${
                                       editStationFormik.touched.stations?.[
                                          index
                                       ]?.pdx_file &&
                                       editStationFormik.errors.stations?.[
                                          index
                                       ]?.pdx_file &&
                                       "error"
                                    }`}
                                 >
                                    <input
                                       className="ecu-input"
                                       type="text"
                                       placeholder="No ECU assigned"
                                       readOnly
                                       value={
                                          editStationFormik.values.stations[
                                             index
                                          ].pdx_file?.name || ""
                                       }
                                    />
                                    <div
                                       className="browse"
                                       onClick={() =>
                                          handleOpenFileSelector(index)
                                       }
                                    >
                                       <input
                                          type="file"
                                          name={`stations[${index}].pdx_file`}
                                          ref={inputRef.current[index]}
                                          onChange={(e) =>
                                             handleFileChange(e, index)
                                          }
                                          hidden
                                       />
                                       <img
                                          src={allImages.folderIcon}
                                          alt="browse"
                                       />
                                       Browse
                                    </div>
                                    <div
                                       className="delete"
                                       onClick={() => handleDeleteRow(index)}
                                    >
                                       <img
                                          src={allImages.deleteIcon}
                                          alt="delete"
                                       />
                                    </div>
                                 </div>
                              </td>
                           </tr>
                        ))}
                     </ReactSortable>
                  </table>
               </div>
            </div>
            {/* buttons */}
            <div className="button-container edit-btn">
               <span className="btn btn-cancel">Cancel</span>
               <div className="btn-left-con">
                  <span className="btn" onClick={handleAddRow}>
                     <img src={allImages.addIcon} alt="add" />
                     Add new station
                  </span>
                  <span
                     className="btn"
                     onClick={() => setActiveTab(TAB_NAME.stationCount)}
                  >
                     Previous
                  </span>
                  <button className="btn" type="submit">
                     Next
                  </button>
               </div>
            </div>
         </form>
      </div>
   );
};

export default EditStation;
