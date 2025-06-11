/* eslint-disable indent */
/* eslint-disable react/no-unknown-property */
import { useEffect, useState } from "react";
// import FlashDownload from "assets/images/download-flash.png";
// import FlashVehicle from "assets/images/flash-new.png";
import EcuLevelFlash from "./EcuLevelFlash";
// import ReactModal from "react-modal";
// import Flashpopup from "assets/images/Flashing.png";
// import { useDispatch } from "react-redux";
// import { getFreezeAll } from "redux/freezeSlice";
// import axios from "axios";

function Online(props) {
   const [ecuData, setEcuData] = useState();
   const [busData, setBusData] = useState();
   const [flashPopup, setFlashPopup] = useState(false);
   // const dispatch = useDispatch();
   // eslint-disable-next-line no-unused-vars
   const flashSingle = (event) => {
      setEcuData(event.currentTarget.getAttribute("ecu-attribute"));
      setBusData(event.currentTarget.getAttribute("bus-attribute"));
      setFlashPopup(false);
   };
   console.log("object", props.Table);
   const TableEcu = props?.Table;
   console.log("TableEcu", TableEcu);
   // const download=(url)=>{
   //          let alink=document.createElement("a")
   //          alink.href=url
   //          alink.download="download"
   //          alink.click()
   // }
   useEffect(() => {
      if (props.activeBus) {
         // setFlashPercentage(0);
         setCommand("");
      }
   }, [props.activeBus]);
   // const modalStyles = {
   //    overlay: {
   //       backgroundColor: "rgba(0,0,0,0.6)",
   //       zIndex: 999,
   //    },
   //    content: {
   //       top: "50%",
   //       left: "50%",
   //       right: "auto",
   //       bottom: "auto",
   //       marginRight: "-50%",
   //       transform: "translate(-50%, -50%)",
   //       borderRadius: "10px",
   //    },
   // };
   // let [flashPercentage, setFlashPercentage] = useState(0);
   const [commend, setCommand] = useState("");
   // const [open, setOpen] = useState(false);
   // const FlashDownload = () => {
   //    setOpen(true);
   // };
   //    let alink=document.createElement("a")
   //          alink.href=url
   //          alink.download="download"
   //          alink.click()
   //    if(flash==="reflash"){
   //      flashPercentage=0
   //    }
   //    const intervalId = setInterval(() => {
   //       setFlashPercentage((prevProgress) => {
   //         if (prevProgress >= 100) {
   //            clearInterval(intervalId);
   //            setCommand("Download Completed")
   //            setOpen(true)
   //            setFlashPercentage(0);
   //            return 100;
   //          } else {
   //             setCommand("Download is in progress")
   //             return prevProgress +1;
   //          }
   //       });
   //     }, 10);
   // }
   // const FlashClose = () => {
   //    setOpen(false);
   // };
   // const access_token =
   //    "!AQMAQMCw9vrkISKtoZg4XgRnyyBfmqfB38P8jsAFCwLHqVXswkZw5T_U5YC_vveN0HNPZJBb91ZkDj99ovEo4zoTzs2nnhgK";
   // const Flashing = (e, flash, url) => {
   //    const newObj = {
   //       Name: props.postcampaignDetails?.Name,
   //       ECU_Name: props.postcampaignDetails?.ECU_Name__c,
   //       VIN_Number: props.postcampaignDetails?.VIN_Number__c,
   //       Status: "true",
   //    };
   //    if (props.postcampaignDetails?.Status__c === "Yet to Start") {
   //       axios.patch(
   //          "https://bluebinaries6-dev-ed.develop.my.salesforce.com/services/apexrest/restResourceForCampaign",
   //          {
   //             newObj,
   //          },
   //          {
   //             headers: {
   //                Authorization: `Bearer ${access_token}`,
   //             },
   //          }
   //       );
   //    }
   //    const PostUpdate = TableEcu.map((ele) => ({
   //       VIN_Number: "VIN-0008",
   //       ECU_Name: props.activeBus,
   //       Hardware_Part_Number: ele["Hardware_Part_Number"],
   //       Cloud_Software_Part_Number: ele["Cloud_Software_Part_Number"],
   //       Cloud_Software_Version_Number: ele["Cloud_Software_Version_Number"],
   //       Stack_Software_Part_Number: ele["Cloud_Software_Part_Number"],
   //       Stack_Software_Version_Number: ele["Cloud_Software_Version_Number"],
   //    }));
   //    console.log("newObj", PostUpdate);
   //    axios.post(
   //       "https://apidiagnostics.bluebinaries.com/dtd-salesforce/save-vehicle-software",
   //       PostUpdate[0]
   //    );
   //    setOpen(false);
   //    dispatch(getFreezeAll(false));
   //    if (flash === "flash") {
   //       const intervalId = setInterval(() => {
   //          setFlashPercentage((prevProgress) => {
   //             if (prevProgress >= 100) {
   //                clearInterval(intervalId);
   //                setCommand("Flashing Completed");
   //                dispatch(getFreezeAll(true));

   //                setFlashPercentage(-1);
   //                return 100;
   //             } else if (prevProgress <= 25) {
   //                setCommand("Downlaod in progress");
   //                return prevProgress + 1;
   //             } else if (prevProgress >= 40) {
   //                setCommand("Flashing in progress");
   //                console.log("commend", commend);
   //                return prevProgress + 1;
   //             } else {
   //                setCommand("Downlaod Completed");
   //                return prevProgress + 1;
   //             }
   //          });
   //       }, 100);
   //    } else {
   //       flashPercentage = 0;
   //       const intervalId = setInterval(() => {
   //          setFlashPercentage((prevProgress) => {
   //             if (prevProgress >= 100) {
   //                clearInterval(intervalId);
   //                setCommand("Flashing Completed");
   //                dispatch(getFreezeAll(true));

   //                setFlashPercentage(-1);
   //                return 100;
   //             } else {
   //                setCommand("Flashing in-progress");
   //                return prevProgress + 1;
   //             }
   //          });
   //       }, 100);
   //    }
   //    console.log("flash", flash);
   //    //   const intervalId = setInterval(() => {
   //    //    setFlashPercentage((prevProgress) => {
   //    //      if (prevProgress >= 100) {
   //    //         clearInterval(intervalId);
   //    //         setCommand("Flashing Completed")
   //    //         setFlashPercentage(-1);
   //    //         return 100;
   //    //       } else if(prevProgress<=15) {
   //    //          setCommand("Downlaod in progress")
   //    //          return prevProgress +1;
   //    //       }
   //    //       else if(prevProgress>=30){
   //    //          setCommand("Flashing in progress")
   //    //          console.log("commend",commend)
   //    //          return prevProgress +1
   //    //       }
   //    //       else{
   //    //          setCommand("Downlaod Completed")
   //    //          return prevProgress+1
   //    //       }
   //    //    });
   //    //  }, 100);
   // };

   return (
      <>
         <div className="caution-msg">
            <h4>Pre-Condition:</h4>
            <ul className="list-content">
               <li>
                  Vehicle should be in Ignition ON condition (Do not start the
                  engine)
               </li>
               <li>
                  Before Reprogramming/programming the ECU, Vehicle battery
                  voltage should be above 13.5V
               </li>
               <li>
                  Before Reprogramming/programming, ensure the tool connectivity
                  with good network condition.
               </li>
               <li>
                  If reprogramming/programming failure due to low battery
                  voltage/Network, ECU will be corrupted.
               </li>
            </ul>
         </div>
         <div className="campagin-available">
            <span>{props.campaignAvailable}</span>
         </div>
         <div className="ecu-level-flashing">
            {flashPopup && (
               <EcuLevelFlash
                  ecuData={ecuData}
                  busData={busData}
                  setFlashPopup={setFlashPopup}
               />
            )}

            <div className="flash-files">
               <table>
                  <thead>
                     <th>ECU Name</th>
                     <th>H/W Part Number</th>
                     <th>S/W Part Number</th>
                     <th>Current ECU S/W version</th>
                     <th>Cloud S/W Part Number</th>
                     <th>Cloud Available ECU S/W version</th>
                     {/* <th>Action</th> */}
                  </thead>
                  <tbody>
                     {TableEcu?.map((ele, i) => {
                        return (
                           <tr key={i}>
                              <td>{ele["ECU_Name"]}</td>
                              <td>{ele["Hardware_Part_Number"]}</td>
                              <td>{ele["Stack_Software_Part_Number"]}</td>
                              <td>{ele["Stack_Software_Version_Number"]}</td>
                              <td>{ele["Cloud_Software_Part_Number"]}</td>
                              <td>{ele["Cloud_Software_Version_Number"]}</td>
                              {/* <td>
                                 {flashPercentage === 0 && (
                                    <button
                                       className="button-flash"
                                       onClick={FlashDownload}
                                    >
                                       <img
                                          src={FlashVehicle}
                                          alt="flash-download"
                                          className="flash-img"
                                       />
                                       <span>Flash Now</span>
                                    </button>
                                 )}
                                 <ReactModal
                                    isOpen={open}
                                    style={modalStyles}
                                    onRequestClose={FlashClose}
                                 >
                                    <div className="logout-confirmation-modal-container">
                                       <div className="logout-mark">
                                          <img src={Flashpopup} alt="logout" />
                                       </div>
                                       <div className="confirmation-text">
                                          <p>Are you sure you want to flash?</p>
                                       </div>
                                       <div className="action-buttons">
                                          <button
                                             className="btn-cancel"
                                             id="btn-cancel"
                                             onClick={FlashClose}
                                          >
                                             Cancel
                                          </button>
                                          <button
                                             className="btn-okay"
                                             id="btn-okay"
                                             onClick={(e) =>
                                                Flashing(
                                                   e,
                                                   "flash",
                                                   ele["softwarePackageLink"]
                                                )
                                             }
                                          >
                                             Okay
                                          </button>
                                       </div>
                                    </div>
                                 </ReactModal>
                                 {flashPercentage === -1 && (
                                    <button
                                       className="button-reflash"
                                       onClick={(e) => Flashing(e, "reflash")}
                                    >
                                       <img
                                          src={FlashVehicle}
                                          alt="flash-download"
                                          className="flash-img"
                                       />
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
                              </td> */}
                           </tr>
                        );
                     })}
                  </tbody>
               </table>
               {commend !== "" && (
                  <div className="data-comments">
                     <span>{commend}</span>
                  </div>
               )}
            </div>
         </div>
      </>
   );
}

export default Online;
