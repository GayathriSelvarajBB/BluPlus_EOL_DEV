/* eslint-disable quotes */
/* eslint-disable no-unused-vars */

import React, { useEffect, useRef, useState } from "react";
import ReactModal from "react-modal";
import { allImages } from "utils/images";

const AssemblyEditStationModal = ({
   isOpen,
   handleClose,
   assemblyFormik,
   currentStationIndex,
}) => {
   const myStyles = {
      overlay: {
         background: "#0002",
         backdropFilter: "blur(1px)",
         zIndex: "999",
      },
      content: {
         top: "50%",
         left: "50%",
         bottom: "auto",
         right: "auto",
         transform: "translate(-50%,-50%)",
         width: "100%",
         background: "pink",
         border: "none",
      },
   };

   const inputRefs = useRef([]);
   useEffect(() => {
      inputRefs.current = assemblyFormik.values.stations.map(
         (station, stationIdx) =>
            station.operations.map((_, opIdx) => ({
               pdx_file:
                  inputRefs.current?.[stationIdx]?.[opIdx]?.pdx_file ||
                  React.createRef(),
               sequence_file:
                  inputRefs.current?.[stationIdx]?.[opIdx]?.sequence_file ||
                  React.createRef(),
            }))
      );
   }, [assemblyFormik.values.stations]);

   const handleAddNewOperation = () => {
      const newOperation = {
         operation: "",
         pdx_file: null,
         ecu: "",
         sequence_or_service: "",
         sequence_file: null,
         service_file: null,
      };
      const updatedOperations = [
         ...assemblyFormik.values.stations[currentStationIndex].operations,
         newOperation,
      ];

      assemblyFormik.setFieldValue(
         `stations[${currentStationIndex}].operations`,
         updatedOperations
      );
   };
   const handleChangeStationName = (e) => {
      assemblyFormik?.setFieldValue(
         `stations[${currentStationIndex}].stationName`,
         e.target.value
      );
   };
   //handle change operation fields
   const handleChangeOperations = (name, e, idx) => {
      assemblyFormik.setFieldValue(
         `stations[${currentStationIndex}].operations[${idx}].${name}`,
         e.target.value
      );
      if (e.target.value === "UDS service") {
         assemblyFormik.setFieldValue(
            `stations[${currentStationIndex}].operations[${idx}].sequence_file`,
            null
         );
      }
      if (e.target.value === "test sequence") {
         assemblyFormik.setFieldValue(
            `stations[${currentStationIndex}].operations[${idx}].service_file`,
            ""
         );
      }
   };

   const handleBrowseFilePDX = (idx, type) => {
      inputRefs.current[currentStationIndex]?.[idx]?.[type]?.current?.click();
      // inputRef.current.click();
      // inputRefs.current[idx]?.current?.click();
   };
   const handleChangePDXFile = (name, e, idx) => {
      const file = e.target.files[0];
      if (file) {
         assemblyFormik.setFieldValue(
            `stations[${currentStationIndex}].operations[${idx}].${name}`,
            file
         );
      }
   };
   //delete operation
   const handleDeleteRow = (idx) => {
      let updatedData = [
         ...assemblyFormik.values.stations[currentStationIndex].operations,
      ];
      updatedData.splice(idx, 1);

      assemblyFormik.setFieldValue(
         `stations[${currentStationIndex}].operations`,
         updatedData
      );
   };
   return (
      <ReactModal style={myStyles} isOpen={isOpen} ariaHideApp={false}>
         <div className="assembly-edit-station-modal">
            <div className="st-header">
               <span> Station Editor</span>
               <div className="close-con" onClick={handleClose}>
                  <img src={allImages.closeCircleIcon} alt="close" />
               </div>
            </div>
            <form onSubmit={assemblyFormik.handleSubmit}>
               <div className="form-wrapper">
                  {/* station name */}
                  <div className="st-name form-grp">
                     <label htmlFor="station_name">
                        <span>Station name</span>
                        <div className="asm-browse-con">
                           <input
                              type="text"
                              id="station_name"
                              placeholder={`station #${
                                 currentStationIndex + 1
                              }`}
                              value={
                                 assemblyFormik?.values?.stations[
                                    currentStationIndex
                                 ]?.stationName
                              }
                              onChange={handleChangeStationName}
                           />
                        </div>
                     </label>
                  </div>
                  <div className="form-content">
                     {assemblyFormik.values.stations[
                        currentStationIndex
                     ]?.operations?.map((item, i) => (
                        <div className="operation-render" key={i}>
                           {/* Operation*/}
                           <div className="form-grp">
                              <label htmlFor="operation">
                                 <span>{`Operation #${i + 1}`}</span>
                                 <div className="asm-browse-con">
                                    <input
                                       className="operation-input"
                                       type="text"
                                       id="operation"
                                       name="operation"
                                       value={
                                          assemblyFormik?.values?.stations[
                                             currentStationIndex
                                          ]?.operations[i]?.operation
                                       }
                                       placeholder="input name of the operation"
                                       onChange={(e) =>
                                          handleChangeOperations(
                                             "operation",
                                             e,
                                             i
                                          )
                                       }
                                    />

                                    <button
                                       className="delete"
                                       onClick={() => handleDeleteRow(i)}
                                       disabled={
                                          assemblyFormik.values.stations[
                                             currentStationIndex
                                          ]?.operations?.length < 2
                                       }
                                    >
                                       <img
                                          src={allImages.deleteIcon}
                                          alt="delete"
                                       />
                                    </button>
                                 </div>
                              </label>
                           </div>
                           {/* PDX */}
                           <div className="form-grp">
                              <label htmlFor="pdx_file">
                                 <span>PDX</span>

                                 <div className="asm-browse-con">
                                    <input
                                       className="pdx-input"
                                       type="text"
                                       readOnly
                                       id="pdx_file"
                                       name="pdx_file"
                                       value={
                                          assemblyFormik?.values?.stations[
                                             currentStationIndex
                                          ]?.operations[i]?.pdx_file?.name
                                       }
                                       placeholder="Select PDX.."
                                    />
                                    <div
                                       className="browse"
                                       onClick={() =>
                                          handleBrowseFilePDX(i, "pdx_file")
                                       }
                                       // onClick={handleBrowseFilePDX}
                                    >
                                       <input
                                          type="file"
                                          hidden
                                          name="pdx_file"
                                          ref={
                                             inputRefs.current[
                                                currentStationIndex
                                             ]?.[i]?.pdx_file
                                          }
                                          onChange={(e) =>
                                             handleChangePDXFile(
                                                "pdx_file",
                                                e,
                                                i
                                             )
                                          }
                                       />
                                       <img
                                          src={allImages.folderIcon}
                                          alt="browse"
                                       />
                                       Browse
                                    </div>
                                 </div>
                              </label>
                           </div>
                           {/* ECU */}
                           <div className="form-grp">
                              <label htmlFor="ecu_name">
                                 <span>ECU</span>
                                 <div className="asm-browse-con ">
                                    <input
                                       className="pdx-input"
                                       type="text"
                                       id="ecu_name"
                                       placeholder="Select ECU.."
                                       name="ecu"
                                       value={
                                          assemblyFormik?.values?.stations[
                                             currentStationIndex
                                          ]?.operations[i]?.ecu
                                       }
                                       onChange={(e) =>
                                          handleChangeOperations("ecu", e, i)
                                       }
                                    />
                                 </div>
                              </label>
                           </div>
                           {/* Test Sequence */}
                           <div className="form-grp">
                              <label htmlFor="options">
                                 <span>Test Sequence</span>
                                 <div className="asm-browse-con ">
                                    <input
                                       type="radio"
                                       id="options"
                                       name={`sequence_or_service${i}`}
                                       value="test sequence"
                                       onChange={(e) =>
                                          handleChangeOperations(
                                             "sequence_or_service",
                                             e,
                                             i
                                          )
                                       }
                                    />
                                    <input
                                       readOnly
                                       className="opt-input"
                                       type="text"
                                       id="options"
                                       name="sequence_or_service_file"
                                       value={
                                          assemblyFormik?.values?.stations[
                                             currentStationIndex
                                          ]?.operations[i]?.sequence_file
                                             ?.name || ""
                                       }
                                       placeholder="Select OTX/PTX.."
                                    />
                                    <div
                                       className="browse"
                                       onClick={() =>
                                          handleBrowseFilePDX(
                                             i,
                                             "sequence_file"
                                          )
                                       }
                                       // onClick={handleBrowseFilePDX} //open file dialog box
                                    >
                                       <input
                                          type="file"
                                          hidden
                                          name="sequence_or_service_file"
                                          ref={
                                             inputRefs.current[
                                                currentStationIndex
                                             ]?.[i]?.sequence_file
                                          }
                                          onChange={(e) =>
                                             handleChangePDXFile(
                                                "sequence_file",
                                                e,
                                                i
                                             )
                                          }
                                       />
                                       <img
                                          src={allImages.folderIcon}
                                          alt="browse"
                                       />
                                       Browse
                                    </div>
                                 </div>
                              </label>
                           </div>
                           {/* UDS Service */}
                           <div className="form-grp">
                              <label htmlFor="options">
                                 <span>UDS Service</span>
                                 <div className="asm-browse-con ">
                                    <input
                                       type="radio"
                                       id="options"
                                       // name="sequence_or_service"
                                       name={`sequence_or_service${i}`}
                                       value="UDS service"
                                       onChange={(e) =>
                                          handleChangeOperations(
                                             "sequence_or_service",
                                             e,
                                             i
                                          )
                                       }
                                    />
                                    <input
                                       className="opt-input2"
                                       type="text"
                                       id="options"
                                       name="sequence_or_service_file"
                                       placeholder="UDS service"
                                       value={
                                          assemblyFormik?.values?.stations[
                                             currentStationIndex
                                          ]?.operations[i]?.service_file || ""
                                       }
                                       onChange={(e) =>
                                          handleChangeOperations(
                                             "service_file",
                                             e,
                                             i
                                          )
                                       }
                                    />
                                 </div>
                              </label>
                           </div>
                        </div>
                     ))}
                  </div>
               </div>
               {/* buttons */}
               <div
                  className="button-container assembly-line-btn"
                  style={{ margin: "10px" }}
               >
                  <span className="btn btn-cancel">Cancel</span>
                  <div className="btn-left-con">
                     <div className="btn" onClick={handleAddNewOperation}>
                        <input type="file" hidden />
                        <img src={allImages.addIcon} alt="browse" />
                        Add new operation
                     </div>
                     <button
                        className="btn"
                        type="submit"
                        // onClick={() => navigate(routePaths.assemblyLine)}
                     >
                        Finish
                     </button>
                  </div>
               </div>
            </form>
         </div>
      </ReactModal>
   );
};

export default AssemblyEditStationModal;
