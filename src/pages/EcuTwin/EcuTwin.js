/* eslint-disable no-unused-vars */
import SideBar from "components/SideBar/SideBar";
import ABS from "../../assets/images/ECUParts/ABS_ECU.png";
import Cluster from "../../assets/images/ECUParts/CLUSTER_ECU.png";
import HAC from "../../assets/images/ECUParts/HAC_ECU.png";
import ENGINE from "../../assets/images/ECUParts/ENGINE_ECU.png";
import BCM from "../../assets/images/ECUParts/BCM_ECU.png";
import { useState, useEffect } from "react";
import axios from "axios";
import ReactModal from "react-modal";
import CommonPopup from "components/commonPopup/CommonPopup";
const EcuTwin = () => {
   // eslint-disable-next-line no-unused-vars
   const [campanginname, setCampanginName] = useState([]);
   //    const [softwarePartNumber, setSoftwarePartNumber] = useState("");
   const [softwareVersionNumber, setSoftwareVersionNumber] = useState("");
   const [selectEcuName, setSelectEcuName] = useState([]);
   // eslint-disable-next-line no-unused-vars
   const [campanginNameEnter, setCampanginNameEnter] = useState([]);
   const [vehiclePartDetails, setVehiclePartDetails] = useState([]);
   const [HardwarePartNo, setHardwarePartNo] = useState([]);
   const [selectdisable, setSelectDisable] = useState(true);

   const [imagesoure, setImageSoure] = useState("");
   const [content, setContent] = useState("");
   const [ecuName, setEcuName] = useState("");
   const [connectDisable, setConnectDisable] = useState(true);
   const [flashDisable, setFlashDisable] = useState(true);
   const [troubleCode, setTroubleCode] = useState("");
   const [dtcClear, setDtcClear] = useState("");
   const [updateSoftware, setUpdateSoftware] = useState(false);
   const [softwareDtc, setSoftwareDtc] = useState(0);
   const modalStyle = {
      overlay: {
         backgroundColor: "rgba(0,0,0,0.6)",
         zIndex: 999,
      },
      content: {
         top: "50%",
         left: "50%",
         transform: "translate(-50%, -50%)",
         right: "auto",
         bottom: "auto",
         marginRight: "-50%",
         borderRadius: "10px",
         display: "flex",
         justifyContent: "center",
         textAlign: "center",
         //  width: "100%",
      },
   };
   const selectEcu = (e) => {
      setDtcDetails([]);
      setHardwarePartNo([]);
      setSoftwareVersionNumber("");
      setSelectDisable(true);
      setConnectDisable(false);
      setEcuName(e.target.value);
      let Ecuvalue = e.target.value;
      if (Ecuvalue === "ABS") {
         setImageSoure(ABS);
         setContent("Anti-lock braking system ");
         setTroubleCode("C1265-77");
         setDtcClear("clear");
      } else if (Ecuvalue === "CLUSTER") {
         setImageSoure(Cluster);
         setContent("Cluster unit");
         setTroubleCode("B1152-01");
         setDtcClear("clear");
      } else if (Ecuvalue === "ENGINE") {
         setImageSoure(ENGINE);
         setContent("Engine control unit");
         setTroubleCode("P0478-91");
         setDtcClear("clear");
      } else if (Ecuvalue === "HAC") {
         setImageSoure(HAC);
         setContent("Air-conditioning control unit");
         setTroubleCode("P1002-77");
         setDtcClear("");
      } else if (Ecuvalue === "BCM") {
         setImageSoure(BCM);
         setContent("Body control module ");
         setTroubleCode("B27C5-01");
         setDtcClear("clear");
      }
      campanginname.EcuName = Ecuvalue;
      axios
         .get(
            `https://apidiagnostics.bluebinaries.com/dtd-demo/get-vehicle-software-updates?ecuName=${Ecuvalue}`
         )
         .then((res) => {
            if (res.status === 200) {
               setVehiclePartDetails(res?.data?.data[0]["vehiclePartDetails"]);
            }
         })
         .catch((err) => console.log("object", err));
   };
   console.log("imagesoure", imagesoure);
   useEffect(() => {
      const values = [
         ...new Set(vehiclePartDetails.map((ele) => ele.hardwarePartNumber)),
      ];
      setHardwarePartNo(values);
   }, [vehiclePartDetails]);
   console.log("value", HardwarePartNo);
   const selectSoftware = (e) => {
      setFlashPercentage(0);
      setScanDisable(true);
      setFlashDisable(false);
      campanginname.EcuHardwarePartNo = e.target.value;
      setSoftwareDtc(e.target.selectedIndex);
      let currentOption = e.target.options[e.target.selectedIndex];
      campanginname.softwarePartNumber = currentOption.getAttribute(
         "data-software-number"
      );
      campanginname.softwareVersionNumber = currentOption.getAttribute(
         "data-software-version"
      );
      //   setSoftwarePartNumber(currentOption.getAttribute("data-software-number"));
      setSoftwareVersionNumber(
         currentOption.getAttribute("data-software-version")
      );
      console.log("currentOption", e.target.selectedIndex);
   };
   const [select, setSelect] = useState("");
   const [existingSoftware, setExisitingSoftware] = useState("");
   const [exisitingVersion, setExisitingVersion] = useState("");
   const selectHardware = (e) => {
      setSelect(e.target.value);
      axios
         .get(
            `https://apidiagnostics.bluebinaries.com/dtd-demo/get-vehicle-software?vinNumber=VIN-0012&ecuName=${ecuName}`
         )
         .then((res) => {
            setEcuSoftware(
               res?.data?.data?.map((ele) => ele["Stack_Software_Part_Number"])
            );
            setExisitingSoftware(
               res?.data?.data?.map((ele) => ele["Stack_Software_Part_Number"])
            );
            setEcuVersion(
               res?.data?.data?.map(
                  (ele) => ele["Stack_Software_Version_Number"]
               )
            );
            setExisitingVersion(
               res?.data?.data?.map(
                  (ele) => ele["Stack_Software_Version_Number"]
               )
            );
         });
      axios
         .get(
            `https://apidiagnostics.bluebinaries.com/dtd-demo/twin-diagnostic-trouble-codes/get-ecu-dtc-list?ecuName=${ecuName}&dtcClearFlag=`
         )
         .then((res) => {
            if (res.status === 200) {
               setDtcDetails(res.data.data);
               console.log("res", res.data.data);
            }
         });
   };
   const filterData = vehiclePartDetails.filter(
      (item) => item.hardwarePartNumber === select
   );
   useEffect(() => {
      axios
         .get(
            "https://apidiagnostics.bluebinaries.com/dtd-demo/get-vehicle-ecu"
         )
         .then((res) => {
            if (res.status === 200) {
               setSelectEcuName(res?.data?.data);
            }
         })
         .catch((error) => console.log("err", error));
      axios
         .get(
            "https://apidiagnostics.bluebinaries.com/dtd-demo/all-vehicle-campaign"
         )
         .then((res) => setCampanginNameEnter(res?.data))
         .catch((err) => console.log("object", err));
   }, []);
   const [flashPercentage, setFlashPercentage] = useState(0);
   const [scanDisable, setScanDisable] = useState(true);
   const [ecuSoftware, setEcuSoftware] = useState("");
   const [ecuversion, setEcuVersion] = useState("");
   const Flashing = () => {
      setCommand("Scanning in progress");
      const intervalId = setInterval(() => {
         setFlashPercentage((prevProgress) => {
            if (prevProgress >= 100) {
               clearInterval(intervalId);
               setScanDisable(false);
               setEcuSoftware(campanginname.EcuHardwarePartNo);
               setEcuVersion(softwareVersionNumber);
               setFlashPercentage(-1);
               return 100;
            } else if (prevProgress <= 25) {
               return prevProgress + 1;
            } else if (prevProgress >= 40) {
               return prevProgress + 1;
            } else {
               return prevProgress + 1;
            }
         });
      }, 100);
   };
   const vechileSoftwareSuccess = [
      "Scanning completed",
      "Software Validation started",
      "Software Validation in progress",
      "Software Validation completed",
      `DTC caused by existing ECU Software ${existingSoftware} Version - ${exisitingVersion} has been cleared by the software update - ${ecuSoftware} Version - ${ecuversion} update. Testing and validations successful. Would you like to push this software version to Vehicle?`,
   ];
   const vechileSoftwareFailed = [
      "Scanning completed",
      "Software Validation started",
      "Software Validation in progress",
      "Software Validation completed",
      `DTC caused by existing ECU Software ${existingSoftware} Version - ${exisitingVersion} has not been cleared by the software update - ${ecuSoftware} Version -  ${ecuversion} update. Testing and validations Failed.`,
   ];
   const ecuUpdate = (i) => {
      if (softwareDtc === 2) {
         setTimeout(function () {
            for (var j = 0; j < vechileSoftwareSuccess.length; j++) {
               sequenceRunning(j);
            }
         }, 20000 * i);
      } else {
         setTimeout(function () {
            for (var j = 0; j < vechileSoftwareFailed.length; j++) {
               sequenceRunning(j);
            }
         }, 20000 * i);
      }
   };

   const sequenceRunning = (i) => {
      if (softwareDtc === 2) {
         setTimeout(function () {
            setTimeout(function () {
               console.log(vechileSoftwareSuccess[i], "checking data");
               setCommand(vechileSoftwareSuccess[i]);
            }, 4000);
         }, 4000 * i);
      } else {
         setTimeout(function () {
            setTimeout(function () {
               console.log(vechileSoftwareFailed[i], "checking data");
               setCommand(vechileSoftwareFailed[i]);
            }, 4000);
         }, 4000 * i);
      }
   };
   const Scan = () => {
      ecuUpdate();
      setIsPopupOpen(true);
      setTimeout(() => {
         setPushSoftware(false);
         setSoftwareFailed(false)
         if (softwareDtc === 2) {
            setDtcDetails([]);
         }
      }, 24000);
      axios.post(
         "https://apidiagnostics.bluebinaries.com/dtd-demo/twin-diagnostic-trouble-codes/clear-ecu-dtc",
         {
            ecuName: ecuName,
            diagnosticTroubleCode: troubleCode,
            dtcClearFlag: dtcClear,
         }
      );
      // setInterval(() => {
      //    setIsPopupOpen(false);
      // }, 3000);
      // if (ecuName !== "HAC") {
      //    setDtcDetails([]);
      // }
      // axios.post(
      //    "https://apidiagnostics.bluebinaries.com/dtd-demo/save-vehicle-software",
      //    {
      //       ECU_Name: ecuName,
      //       Hardware_Part_Number: select,
      //       Cloud_Software_Part_Number: campanginname.EcuHardwarePartNo,
      //       Cloud_Software_Version_Number: softwareVersionNumber,
      //    }
      // );
   };
   const [command, setCommand] = useState("Scanning in progress");
   const [pushSoftware, setPushSoftware] = useState(true);
   const [softwareFailed, setSoftwareFailed] = useState(true);
   const VehicleSoftware = () => {
      setUpdateSoftware(true);
      setPushSoftware(false);
      setPushPopup(true);
      setCommand("Software Pushed to Vehicle.");
      setTimeout(() => {
         setIsPopupOpen(false);
         // setPushCommand("Software has been successfully moved to the cloud");
      }, 3000);
      // if (!updateSoftware === false) {
      // }
      if (ecuName !== "HAC") {
         axios.post(
            "https://apidiagnostics.bluebinaries.com/dtd-demo/push-vehicle-software",
            {
               ECU_Name: ecuName,
               Hardware_Part_Number: select,
               Cloud_Software_Part_Number: campanginname.EcuHardwarePartNo,
               Cloud_Software_Version_Number: softwareVersionNumber,
            }
         );
      }
   };
   const [isPopupOpen, setIsPopupOpen] = useState(false);
   const [isPopup, setIsPopup] = useState(false);
   const [pushPopup, setPushPopup] = useState(false);
   const Connect = () => {
      setIsPopup(true);
      setTimeout(() => {
         setIsPopup(false);
         setSelectDisable(false);
      }, 3000);
   };
   // const Cancel = () => {
   //    setIsPopupOpen(false);
   // };
   const FailedEcu = () => {
      setIsPopupOpen(false);
   };
   const [dtcdetails, setDtcDetails] = useState([]);
   useEffect(() => {}, [ecuName]);
   console.log("softwareVersionNumber", updateSoftware);
   return (
      <div className="routine-page">
         <div className="page-wrapper">
            <SideBar />
            <div className="body-wrapper">
               <div className="dtc-scan-container">
                  <div className="Ecu-container">
                     <div className="Ecu-header">
                        <h3>ECU TWIN</h3>
                        <h3>VIRTUAL ECU</h3>
                     </div>
                     <div className="Ecu-body">
                        <div className="Ecu-Select">
                           <ul>
                              <li>
                                 <select onChange={selectEcu}>
                                    <option>--Select ECU--</option>
                                    {selectEcuName?.map((ele, i) => (
                                       <option key={i}>{ele}</option>
                                    ))}
                                 </select>
                              </li>
                              <li>
                                 <select
                                    onChange={selectHardware}
                                    disabled={selectdisable}
                                 >
                                    <option>---Hardware PartNo---</option>
                                    {HardwarePartNo?.map((ele, i) => (
                                       <option key={i}>{ele}</option>
                                    ))}
                                 </select>
                              </li>
                              <li>
                                 <select
                                    onChange={selectSoftware}
                                    disabled={selectdisable}
                                 >
                                    <option>
                                       --Available SoftwarePartNo---
                                    </option>
                                    {filterData?.map((ele, i) => (
                                       <option
                                          key={i}
                                          data-software-version={
                                             ele.softwareVersionNumber
                                          }
                                       >
                                          {ele.softwarePartNumber}
                                       </option>
                                    ))}
                                 </select>
                              </li>
                              <li>
                                 <input
                                    type="text"
                                    value={softwareVersionNumber}
                                    placeholder="software Version Number"
                                    name="softwareVersionNumber"
                                    disabled={selectdisable}
                                 />
                              </li>
                           </ul>
                           <div className="scan-button">
                              <button onClick={Scan} disabled={scanDisable}>
                                 Scan ECU
                              </button>
                              <ReactModal
                                 isOpen={isPopupOpen}
                                 style={modalStyle}
                                 ariaHideApp={false}
                                 // onRequestClose={() => setOpen(false)}
                              >
                                 <div className="confirmation-modal-container">
                                    {ecuName !== "HAC" && softwareDtc === 2 ? (
                                       <>
                                          <p>{command}</p>
                                          <div className="pop-button">
                                             <button
                                                onClick={VehicleSoftware}
                                                disabled={pushSoftware}
                                             >
                                                Push Software
                                             </button>
                                          </div>
                                       </>
                                    ) : (
                                       <>
                                          <p>{command}</p>
                                          <div className="pop-button">
                                             <button onClick={FailedEcu} disabled={softwareFailed}>
                                                Okay
                                             </button>
                                          </div>
                                       </>
                                    )}
                                 </div>
                              </ReactModal>
                              {/* <ReactModal isOpen={pushPopup} style={modalStyle}>
                                 <div className="confirmation-modal-container">
                                    <p>{pushcommand}</p>
                                 </div>
                              </ReactModal> */}

                              {flashPercentage === 0 && (
                                 <button
                                    className="button-flash"
                                    onClick={Flashing}
                                    disabled={flashDisable}
                                 >
                                    {/* <img
                                       src={FlashVehicle}
                                       alt="flash-download"
                                       className="flash-img"
                                    /> */}
                                    <span>Flash Now</span>
                                 </button>
                              )}

                              {flashPercentage === -1 && (
                                 <button
                                    className="button-reflash"
                                    onClick={Flashing}
                                 >
                                    {/* <img
                                       src={FlashVehicle}
                                       alt="flash-download"
                                       className="flash-img"
                                    /> */}
                                    <span>Reflash</span>
                                 </button>
                              )}

                              {flashPercentage < 100 && flashPercentage > 0 && (
                                 <div className="download-ecu-progess">
                                    <div
                                       className="flash-current-progress"
                                       style={{
                                          width: flashPercentage + "%",
                                       }}
                                    ></div>
                                    <span>{flashPercentage}%</span>
                                 </div>
                              )}
                           </div>
                        </div>

                        <div className="Ecu-image-content">
                           <div className="Ecu-image">
                              {/* {image?.map((ele, i) => ( */}
                              {imagesoure !== "" && (
                                 <div>
                                    <img src={imagesoure} alt="ABS" />
                                    <span>{content}</span>
                                    <div>
                                       <p>ECU H/W Part No : {select}</p>
                                       <p>ECU S/W Part No : {ecuSoftware}</p>
                                       <p>ECU Version : {ecuversion}</p>
                                    </div>
                                 </div>
                              )}
                           </div>
                           <button
                              onClick={Connect}
                              className={`${
                                 selectdisable
                                    ? "connect-button"
                                    : "connected-button"
                              }`}
                              disabled={connectDisable}
                           >
                              {selectdisable ? "Connect" : "Connected"}
                           </button>
                        </div>
                     </div>
                     <CommonPopup
                        child="Please Wait, Connecting To ECU Twin"
                        isPopup={isPopup}
                     />
                     <div className="Dtc-details">
                        <h3>DTC Information</h3>
                        <h5>{dtcdetails?.length > 0 ? ecuName : ""}</h5>
                        {dtcdetails?.map((ele, i) => (
                           <>
                              <span key={i}>{ele.diagnosticTroubleCode}</span>
                              <span> {ele.dtcDescription}</span>
                           </>
                        ))}
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
};

export default EcuTwin;
