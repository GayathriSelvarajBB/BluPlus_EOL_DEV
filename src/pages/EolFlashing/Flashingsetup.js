/* eslint-disable no-unused-vars */
/* eslint-disable sonarjs/cognitive-complexity */
/* eslint-disable indent */

import { useEffect, useState } from "react";
import CommonPopup from "components/commonPopup/CommonPopup";
import routePaths from "routes/routePaths";
import { Link, useNavigate } from "react-router-dom";
import { ecuList } from "redux/ecuFlashingdetails.slice";
import { updateFileName } from "redux/filename.slice";
import { updateFileData } from "redux/filedata.slice";
import { FreezeData } from "redux/freezeData.slice";
import SideBar from "components/componentFlashingSidebar/ComponentFlashingSideBar";
import { ecuNameConstants } from "app_constants/ecuName";
import { checkEcuConnectivityStatus } from "socket/socketEmitters";
import { useDispatch, useSelector } from "react-redux";
import {
   removeEcuConnectivityData,
   removeEcuconnectivity,
} from "redux/checkEcuConnectivity.slice";
import { setISODay } from "date-fns";
// import fuseWD from "../../../public/dummyImg/fuseWD.jpg"

function DtcScan() {
   const [ecuSelect, setEcuSelect] = useState([]);
   const [command, setCommand] = useState("");
   const [count, setCount] = useState([]);
   const [item, setItem] = useState(false);
   const [fileSelect, setFileSelect] = useState(true);
   const [isCheck, setIsCheck] = useState(false);
   const [correctFile, setCorrectFile] = useState([]);
   const [active, setActive] = useState(true);
   const [scanActive, setScanActive] = useState(true);
   const [fileData, setFileData] = useState([]);
   const ecusScanList = Object.keys(ecuNameConstants);
   const dispatch = useDispatch();
   const Navigate = useNavigate();
   const ecuConnectivity = useSelector(
      (state) => state?.getEcuConnectivityData?.ecuConnectivityStatus
   );

   const getEcuSelect = ({ e, ecu, i }) => {
      dispatch(removeEcuconnectivity());
      setFileData([]);
      if (count.indexOf(i) !== -1) {
         setCount(count.filter((checkBox) => checkBox !== i));
      } else {
         setCount([...count, i]);
      }
      if (e.target.checked) {
         setActive(true);
         setEcuSelect((prev) => [...prev, ecu]);
      } else {
         for (let j = 0; j < ecuConnectivity.length; j++) {
            if (ecuConnectivity[j]?.ecuName === ecu) {
               dispatch(removeEcuConnectivityData(ecuConnectivity[j]?.ecuName));
            }
         }
         for (let j = 0; j < ecuSelect.length; j++) {
            if (ecuSelect[j] === ecu) {
               var spilce = ecuSelect.splice(j, 1);
               console.log("remove", spilce);
            }
         }
         setEcuSelect([...ecuSelect]);
      }
      if (ecuSelect?.length === 1) {
         setItem(true);
      }
      console.log("ecuSelect", ecuSelect);
      dispatch(ecuList(ecuSelect));
   };

   const handleFileRead = (e) => {
      const content = e.target.result;
      setCorrectFile((prev) => [...prev, content]);
      convertToJSON(content);
   };
   console.log("correctFile", fileData, count);
   const convertToJSON = (content) => {
      try {
         const jsonData = JSON?.parse(content);
         //   setFileData(jsonData);
         setFileData((prev) => [...prev, jsonData]);
      } catch (error) {
         console.error("Error parsing file content to JSON:", error);
      }
   };

   const FileSelect = ({ e, i, ele }) => {
      const files = Array.from(e.target.files);
      const updatedFiles = files.map((file) => ({
         fileName: file.name,
         item: ele.ecuName,
         progress: 0,
      }));
      dispatch(updateFileName(updatedFiles));

      const fileUpload = e.target.files;
      Array.from(fileUpload).forEach((file) => {
         const fileReader = new FileReader();
         fileReader.onloadend = (e) => handleFileRead(e);
         fileReader.readAsText(file);
      });
   };
   const EcuConnectivityDetect = () => {
      let formated = {
         ecuDetct: {},
      };
      ecuSelect?.forEach((ele) => {
         formated.ecuDetct = {
            dllCallMethod: "TesterPresent",
            ecuName: ele,
         };
         checkEcuConnectivityStatus(formated.ecuDetct);
      });
   };

   useEffect(() => {
      if (scanActive && count?.length === fileData?.length) {
         setFileSelect(false);
      } else {
         setFileSelect(true);
      }
   }, [fileData, count, item]);
   const Scan = () => {
      setFileSelect(true);
      setFileData([]);
      setScanActive(true);
      EcuConnectivityDetect();
      setCommand("Scanning is in-progress, please wait...");
      setTimeout(() => {
         setCommand("Scanning is completed");
         setTimeout(() => {
            setCommand("");
         }, 1000);
         setActive(false);
      }, 5000);
   };
   useEffect(() => {
      if (ecuSelect.length > 0) {
         setScanActive(false);
      } else {
         setScanActive(true);
      }
   }, [ecuSelect]);

   const UpdatedfileData = fileData?.map((ele) => ({
      ecuName: ele.ecuName,
      ECU_Hardware_Number: ele.HardwareNumber,
      ECU_Software_Number: ele.SoftwareNumber,
      bootloaderVersionNumber: ele.bootLoaderVersionNumber,
      printStatus: ele.status,
      flashDate: new Date(),
      flashStatus: ele.flashStatus,
   }));

   const Next = () => {
      dispatch(updateFileData(UpdatedfileData));
      dispatch(FreezeData(true));
      Navigate(routePaths.Operator);
   };

   return (
      <div className="dtc-scan-page">
         <div className="page-wrapper">
            <SideBar />
            <div className="body-wrapper">
               <div className="dtc-scan-container">
                  <div className="dtc-contianer-sec">
                     <div className="dtc-container-list  ">
                        {/* =======buttons group on the top===== */}

                        {/* ====Ecu & dtc parameters==== */}
                        <div className="fault-manage-DTC">
                           {/* ====Ecus rendering==== */}
                           <div className="sidebar-routine">
                              <ul
                                 className="sidebar-part-list"
                                 id="ul-sidebar-bus-list-dtc"
                              >
                                 {ecusScanList?.map((ecu, i) => (
                                    <li
                                       id={ecu}
                                       key={i}
                                       className={`${
                                          count.includes(i)
                                             ? "dtc-select active-dtc"
                                             : "dtc-select"
                                       }`}
                                    >
                                       {ecu}
                                       <input
                                          type="checkbox"
                                          name="ecuName"
                                          checked={count.includes(i)}
                                          onChange={(e) =>
                                             getEcuSelect({ e, ecu, i })
                                          }
                                       />
                                    </li>
                                 ))}
                              </ul>
                           </div>
                           {/* =====parameters rendering===== */}
                           <div className="bus-code1">
                              <div className="Operator-setup">
                                 <div className="main-Heading">
                                    <div className="Heading">
                                       <h3>ECU Name</h3>
                                       <h3>Description</h3>
                                    </div>
                                    {ecuConnectivity.length > 1 ? (
                                       <>
                                          <div className="Heading">
                                             <h3>ECU Name</h3>
                                             <h3>Description</h3>
                                          </div>
                                       </>
                                    ) : (
                                       <div className="Heading"></div>
                                    )}
                                 </div>
                                 <div
                                    className={`${
                                       ecuSelect.length > 0
                                          ? ""
                                          : "Flashing-info"
                                    }`}
                                 >
                                    <div className="Flashing-setup">
                                       {ecuSelect?.length > 0 ? (
                                          <ul className="Flashing-list">
                                             {ecuConnectivity?.map((ele, i) => (
                                                <li key={i}>
                                                   <span
                                                      className={`${
                                                         ele.ecuStatus !==
                                                         "Positive"
                                                            ? "Ecu-name active"
                                                            : "Ecu-name "
                                                      }`}
                                                   >
                                                      {ele.ecuName}
                                                   </span>
                                                   <span className="Ecu-flashing">
                                                      {ele.ecuStatus !==
                                                      "Positive" ? (
                                                         <p>
                                                            ECU Not Connected
                                                         </p>
                                                      ) : (
                                                         <input
                                                            type="file"
                                                            name="browse"
                                                            onChange={(e) =>
                                                               FileSelect({
                                                                  e,
                                                                  i,
                                                                  ele,
                                                               })
                                                            }
                                                         />
                                                      )}
                                                      {/* {selectedfile[i] && (
                                                      <p
                                                         className={`battery-width {${
                                                            correctFile
                                                               ? "battery-yellow"
                                                               : "battery-red"
                                                         }`}
                                                      >
                                                         {fileCommand}
                                                      </p>
                                                   )} */}
                                                   </span>
                                                </li>
                                             ))}
                                          </ul>
                                       ) : (
                                          <span>
                                             Please choose ECUs from the list to
                                             access ECU slots for scanning and
                                             select/upload the flash file for
                                             further processing{" "}
                                          </span>
                                       )}
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </div>
                        <div className="clear-Ecu">
                           <div className="selection-reach"></div>
                           <div className="right_btns_div" id="right_btns_div">
                              <button
                                 id="rescan-btn"
                                 onClick={Scan}
                                 disabled={scanActive}
                              >
                                 Scan ECU
                              </button>
                           </div>
                           <Link to={routePaths.Operator}>
                              <div className="next-button">
                                 <button disabled={fileSelect} onClick={Next}>
                                    NEXT
                                 </button>
                              </div>
                           </Link>
                        </div>
                        <div id="scan-progress-msg">
                           {command !== "" ? (
                              <CommonPopup child={command} isPopup={active} />
                           ) : null}
                        </div>
                        {/* legends on the bottom */}
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
}

export default DtcScan;
