import { useRef } from "react";
import ReactModal from "react-modal";
import { allImages } from "utils/images";

const OpenFileSelectorModal = ({
   isOpen,
   rowIndex,
   editStationFormik,
   handleFileChange,
   setIsFileSelectionOpen,
}) => {
   const myStyles = {
      overlay: {
         background: "#0007",
         backdropFilter: "blur(1px)",
         zIndex: "999",
      },
      content: {
         top: "50%",
         left: "50%",
         bottom: "auto",
         right: "auto",
         //  padding: "20px",
         transform: "translate(-50%,-50%)",
         width: "100%",
         background: "pink",
         border: "none",
      },
   };

   const inputRef = useRef(null);
   const handleBroseFile = () => {
      inputRef.current.click();
   };

   return (
      <ReactModal style={myStyles} isOpen={isOpen} ariaHideApp={false}>
         <div className="open-file-selector-modal">
            <div className="open-file-header-con">
               <span className="tittle-span">PDX</span>
               <div className="browse-con">
                  <input
                     className="ecu-input"
                     type="text"
                     placeholder="No ECU assigned"
                     readOnly
                     value={
                        editStationFormik?.values?.stations[rowIndex]?.pdx_file
                           ?.name || ""
                     }
                  />
                  <div
                     className="browse"
                     onClick={handleBroseFile}
                     //  onClick={() => handleBroseFile(rowIndex)}
                     //   onClick={() => handleOpenFileSelector(rowIndex)}
                  >
                     <input
                        type="file"
                        name={`stations[${rowIndex}].pdx_file`}
                        // ref={inputRef.current[rowIndex]}
                        ref={inputRef}
                        onChange={(e) => handleFileChange(e, rowIndex)}
                        hidden
                     />
                     <img src={allImages.folderIcon} alt="browse" />
                     Browse
                  </div>
               </div>
            </div>
            <div className="file-body">
               <div className="ecu_pdx">
                  <span className="tittle-span">ECUs in PDX</span>
                  <div className="pdx-checkboxes">
                     <span>No data found</span>
                  </div>
               </div>
               <div className="ecu_variant">
                  <span className="tittle-span">ECUs Variant</span>
                  <div className="pdx-checkboxes">
                     <span>No data found</span>
                  </div>
               </div>
            </div>
            <div className="button-container">
               <span
                  className="btn btn-cancel"
                  onClick={() => {
                     editStationFormik.setFieldValue(
                        `stations[${rowIndex}].pdx_file`,
                        ""
                     );
                     setIsFileSelectionOpen(false);
                  }}
               >
                  Cancel
               </span>
               <span
                  className="btn"
                  onClick={() => {
                     setIsFileSelectionOpen(false);
                  }}
               >
                  Select and Assign
               </span>
            </div>
         </div>
      </ReactModal>
   );
};

export default OpenFileSelectorModal;
