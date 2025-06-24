/* eslint-disable no-unused-vars */

import { allImages } from "utils/images";
import SelectSearch from "react-select-search";
import "react-select-search/style.css";
import { useRef, useState } from "react";
import { useFormik } from "formik";
import { stationCountSchema } from "../Validations";
import { toast } from "react-toastify";
import { useEffect } from "react";
import { getLocalStorageFile } from "helpers";
import { MANUFACTURE_FILES, TAB_NAME } from "app_constants";

const StationCount = ({ setActiveTab }) => {
   // const [selectOption, setSelectOption] = useState("");
   const [allFiles, setAllFiles] = useState([]);
   const inputRef = useRef(null);

   console.log("allFiles", allFiles);

   useEffect(() => {
      let localFiles = getLocalStorageFile(MANUFACTURE_FILES);
      let modifyData = localFiles.map((item) => ({
         ...item,
         value: item?.name,
      }));
      setAllFiles(modifyData);
   }, []);

   // const options = [
   //    { name: "Swedish", value: "sv" },
   //    { name: "English", value: "en" },
   //    { name: "Hind", value: "hin" },
   //    { name: "Fran", value: "fn" },
   // ];

   const {
      values,
      setFieldValue,
      errors,
      handleChange,
      touched,
      handleSubmit,
   } = useFormik({
      initialValues: { pdx_selection: "", pdx_file: null, no_of_station: "" },
      validationSchema: stationCountSchema,
      onSubmit: (value) => {
         toast.success("form submitted successfully");
         setActiveTab(TAB_NAME.editStation);
      },
   });
   console.log("values", values);
   console.log("errors", errors);

   const handleBroseFile = () => {
      inputRef.current.click();
   };
   const handleFileChange = (event) => {
      const file = event.target.files[0];
      if (file) {
         setFieldValue("pdx_file", file);

         let localFiles = getLocalStorageFile(MANUFACTURE_FILES);
         let newData = [
            {
               name: file.name,
               type: file.type,
               size: file.size,
               lastModified: file.lastModified,
            },
            ...localFiles,
         ];
         newData = newData?.filter(
            (item, i, self) =>
               i ===
               self.findIndex((val) => val.lastModified === item.lastModified)
         );
         if (newData?.length > 10) {
            newData.pop();
         }
         localStorage.setItem(MANUFACTURE_FILES, JSON.stringify(newData));
         let modifyData = newData.map((item) => ({
            ...item,
            value: item?.name,
         }));
         setAllFiles(modifyData);
      }
   };
   return (
      <div className="station-count">
         <form onSubmit={handleSubmit}>
            <div
               className="form-group"
               // className={`form-group ${
               //    touched.pdx_selection && errors.pdx_selection && "error"
               // }`}
            >
               <label htmlFor="entire_configuration">
                  <input
                     type="radio"
                     name="pdx_selection"
                     value="pdx for entire configuration"
                     onChange={handleChange}
                     id="entire_configuration"
                  />
                  Assign PDX for entire configuration
               </label>
               <div
                  className={`custom-select-search ${
                     values.pdx_selection === "pdx for entire configuration"
                        ? touched.pdx_file && errors.pdx_file && "error"
                        : null
                  }`}
               >
                  <img
                     className="down-arrow"
                     src={allImages.downArrowIcon}
                     alt="arrow"
                  />
                  <SelectSearch
                     options={allFiles}
                     // onChange={setSelectOption}
                     onChange={(values) => {
                        setFieldValue("pdx_file", values);
                     }}
                     value={values?.pdx_file?.name}
                     name="select_PDX"
                     placeholder="Select PDX..."
                  />
               </div>
               <div className="browse" onClick={handleBroseFile}>
                  <input
                     type="file"
                     hidden
                     ref={inputRef}
                     onChange={handleFileChange}
                  />
                  <img src={allImages.folderIcon} alt="browse" />
                  Browse
               </div>
               {touched.pdx_selection && errors.pdx_selection && (
                  <span className="error-con">{errors.pdx_selection}</span>
               )}
            </div>

            <div
               className="form-group"
               // className={`form-group ${
               //    touched.pdx_selection && errors.pdx_selection && "error"
               // }`}
            >
               <label htmlFor="pdx_per_station">
                  <input
                     type="radio"
                     name="pdx_selection"
                     value="pdx per station"
                     onChange={handleChange}
                     id="pdx_per_station"
                  />
                  Assign PDX/ODX per station (later)
               </label>
               {touched.pdx_selection && errors.pdx_selection && (
                  <span className="error-con">{errors.pdx_selection}</span>
               )}
            </div>

            <div
               className="form-group"
               // className={`form-group ${
               //    touched.no_of_station && errors.no_of_station && "error"
               // }`}
            >
               <label htmlFor="no_of_station">
                  Number of stations
                  <input
                     className="station-input"
                     type="text"
                     name="no_of_station"
                     onChange={handleChange}
                     value={values.no_of_station}
                     id="no_of_station"
                  />
               </label>
               {touched.no_of_station && errors.no_of_station && (
                  <span className="error-con">{errors.no_of_station}</span>
               )}
            </div>

            <div className="button-container">
               <span className="btn btn-cancel">Cancel</span>
               <button className="btn" type="submit">
                  Next
               </button>
            </div>
         </form>
      </div>
   );
};

export default StationCount;
