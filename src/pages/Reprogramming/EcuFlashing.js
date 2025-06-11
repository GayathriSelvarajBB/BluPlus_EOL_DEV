// /* eslint-disable array-callback-return */
// /* eslint-disable no-unused-vars */
// import SideBar from "components/SideBar/SideBar";
// import { useEffect } from "react";
// import { useState } from "react";
// import { getMesurementEcuList } from "services/dashboardService";
// import Online from "./Online";
// import axios from "axios";
// function EcuFlashing() {
//    const [ecuList, setEcuList] = useState([]);
//    const [activeBus, setActiveBus] = useState("ENGINE");
//    const [Tableecu, setTableEcu] = useState([]);
//    const [postcampaignDetails, setPostCampaignDetails] = useState([]);
//    const [campaignAvailable, setCampignAvailable] = useState("")
//    const[flash,setFlash]=useState(false)
//    const [data, setData] = useState();
//    const HardwarePartNoEcu = "398309322V";
//    const HardwarePartNoBCM = "2436707ILK";
//    const getEcuList = () => {
//       getMesurementEcuList().then((res) => {
//          console.log("side", res);
//          setEcuList(res.data.data);
//       });
//    };
//    const Hardware = () => {
//       if (activeBus !== "BCM") {
//          setData(HardwarePartNoEcu);
//       } else if (activeBus === "BCM") {
//          setData(HardwarePartNoBCM);
//       }
//    };
//    useEffect(() => {
//       Hardware();
//    }, [activeBus, data]);

//    useEffect(() => {
//       getEcuList();
//       axios
//          .get(
//             `https://apidiagnostics.bluebinaries.com/dtd-demo/get-vehicle-software?vinNumber=VIN-0012&ecuName=${activeBus}`
//          )
//          .then((res) => setTableEcu(res?.data?.data))
//          .catch((err) => console.log("err", err));
//       axios
//          .get(
//             `https://apidiagnostics.bluebinaries.com/dtd-salesforce/vehicle-campaign-ecu?vinNumber=VIN-0008&ecuName=${activeBus}`
//          )
//          .then((res) => setPostCampaignDetails(res?.data[0]))
//          .catch((err) => console.log("err", err));
//    }, [activeBus]);
//    useEffect(()=>{
//       Tableecu?.filter((ele) => {
//          if (ele.Stack_Software_Part_Number !==ele.Cloud_Software_Part_Number && ele.Stack_Software_Version_Number !==ele.Cloud_Software_Version_Number)
//          {
//             setCampignAvailable("Software Available")
//             setFlash(true)
//          }
//          else{
//             setCampignAvailable("Software is upto-date")
//             setFlash(false)
//          }
//       })
//    },[Tableecu])

//    console.log("first", campaignAvailable);
//    return (
//       <div className="dtc-scan-page">
//          <div className="page-wrapper">
//             <SideBar />
//             <div className="body-wrapper">
//                <div className="dtc-scan-container">
//                   <div className="dtc-contianer-sec-flashing">
//                      <div className="dtc-container-flashing">
//                         <div className="fault-manage">
//                            <div className="sidebar-bus">
//                               <ul className="sidebar-bus-list">
//                                  {ecuList.map((bus) => {
//                                     return (
//                                        <>
//                                           <li
//                                              className={`${
//                                                 bus === activeBus
//                                                    ? "dtc-values  active-dtc"
//                                                    : "dtc-values"
//                                              }`}
//                                              onClick={() => setActiveBus(bus)}
//                                           >
//                                              <span>{bus}</span>

//                                           </li>
//                                        </>
//                                     );
//                                  })}
//                               </ul>
//                            </div>
//                            <div className="bus-code-flashing">
//                               <div className="ecu-flashing">
//                                  <div className="flashing-container">
//                                     <div className="flash-tab-program"></div>
//                                     <div className="flash-section">
//                                        <Online
//                                           activeBus={activeBus}
//                                           Table={Tableecu}
//                                           HardwarePartNoEcu={HardwarePartNoEcu}
//                                           HardwarePartNoBCM={HardwarePartNoBCM}
//                                           postcampaignDetails={
//                                              postcampaignDetails
//                                           }
//                                           campaignAvailable={campaignAvailable}
//                                           flash={flash}
//                                        />
//                                        {/* )} */}
//                                     </div>
//                                  </div>
//                               </div>
//                            </div>
//                         </div>
//                      </div>
//                   </div>
//                </div>
//             </div>
//          </div>
//       </div>
//    );
// }

// export default EcuFlashing;

/* eslint-disable indent */
/* eslint-disable no-unused-vars */
import { ecuNameConstants } from "app_constants/ecuName";
import SideBar from "components/SideBar/SideBar";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom/dist";
import { getFreezeAll } from "redux/freezeSlice";
import { getScanEcusList } from "services/dashboardService";
import { initiateEcuFlashing } from "socket/socketEmitters";
// import { getEcuScan } from "socket/socketEmitters";

const EcuFlashing = () => {
   const Navigate = useNavigate();
   const [open, setOpen] = useState(false);
   const [progress, setProgress] = useState(false);
   const [disable, setDisable] = useState(true);
   const [item, setItem] = useState(false);
   const [percent, setPercent] = useState(0);
   const [command, setCommand] = useState("");
   const [activeButton, setActiveButton] = useState(0);
   const [count, setCount] = useState([]);
   const [ecuSelect, setEcuSelect] = useState([]);
   const [filteredData, setFliteredData] = useState([]);
   const [selectedFileEcu,setSelectedFileEcu]=useState([])
   const [countFile,setCountFile]=useState(0)
   // const ecuList = useSelector((state) => state?.getEcuListdata);
   const ecuList = Object.keys(ecuNameConstants)
   const FlashingStatusCheck = useSelector(
      (state) => state?.getEcuFlashing?.ecuFlashing
   );
   console.log("FlashingStatusCheck",FlashingStatusCheck,selectedFileEcu,selectedFileEcu?.every((ele) => (
      ele.progress!==100)),selectedFileEcu.length>=1)
   const dispatch = useDispatch();
   const getEcuSelect = ({ e, ecu, i }) => {
      setPercent(0);
      setDisable(true);
      if (count.indexOf(i) !== -1) {
         setCount(count.filter((checkBox) => checkBox !== i));
      } else {
         setCount([...count, i]);
      }
      if (e.target.checked) {
         setEcuSelect((prev) => [...prev, ecu]);
        

      } else {
         for (let j = 0; j < ecuSelect.length; j++) {
            if (ecuSelect[j] === ecu) {
               var spilce = ecuSelect.splice(j, 1);
               console.log("remove", spilce);
            }
         }
         setEcuSelect([...ecuSelect]);
      }
     
      console.log(ecuSelect.length);
     
   };
   const FlashingStatus = () => {
      let formated = {
         flashing: {},
      };
      filteredData?.forEach((ele) => {
         formated.flashing = {
            dllCallMethod: "flashing_sequence",
            ecuName: ele,
         };
         initiateEcuFlashing(formated.flashing);
      });
   };
   let intervalId;
   const Flash = () => {
      FlashingStatus()
      setDisable(true);
      setOpen(true);
      dispatch(getFreezeAll(false));
      setCommand("Flashing in Progress");
      setProgress(true);
      setActiveButton(true)
      intervalId = setInterval(() => {
         setPercent((prevProgress) => {
            if (prevProgress >= 100) {
               clearInterval(intervalId);
               // setOpen(false);
               setCommand("Flashing Completed");
               setPercent(-1);
               return 100;
            } else {
               return prevProgress + 1;
            }
         });
      }, 250);
   };
   const fileSelected = ({e,ele}) => {
      setFliteredData((prev)=>[...prev,ele.ecuName])
      // setSelectedFileEcu((prev)=>[...prev,ele])
      console.log("data",ele)
      if (e.target.files[0]) {
         setCountFile(countFile+1)
      }
      localStorage.setItem("name", e.target.files[0].name);
      console.log("object", e.target.files[0].name);
      setCommand("Latest File Selected");
   };
   useEffect(() => {
      const update=ecuSelect?.map(ecuName=>({ecuName,progress:0}))
      setSelectedFileEcu(update)
      if(ecuSelect?.length===countFile){
         setDisable(false)
      }
      else{
         setDisable(true)
      }
      if (ecuSelect.length> 1) {
         setItem(true);
      }else{
         setItem(false)
      }
   }, [ecuSelect,countFile]);
   useEffect(()=>{
      if(open){
      const progressInterval=setInterval(UpdateProgress,1000);
      return ()=>{
         clearInterval(progressInterval)
      };
   }
   },[open])
   useEffect(() => {
      if(open){
      setSelectedFileEcu(prev=>prev?.map((ele) => {
         const status = FlashingStatusCheck?.find(
            (elm) => elm?.ecuName === ele?.ecuName
         );
         console.log("FlashingStatusCheck",status)
         if (
            status &&
            status.ecuFlashingStatus === "Pre-Programming completed"
            // status.ecuFlashingStatus === "ECU flashing failed! - VCI not detected"
         ) 
         {
            dispatch(getFreezeAll(true));
            setActiveButton(false)
            // toast.success("Flashing is completed")
            return { ...ele,progress: 100 };
         }
         return ele
        
      })
      )
      // setSelectedFileEcu(update)
      // console.log("update",update)
    
   }
   }, [FlashingStatusCheck,open]);
   const UpdateProgress=()=>{
      let allComplete=true
      setSelectedFileEcu(prev=>prev?.map((ele)=>{
         if(ele.progress<75){
            allComplete=false
            return {...ele,progress:ele.progress+1}
         }
         return ele
      })
      )
      // console.log("updateProgressStatus",updateProgressStatus)
      // setSelectedFileEcu(updateProgressStatus)
   }
   console.log("countFile",countFile)
 
   return (
      <div className="dtc-scan-page">
         <div className="page-wrapper">
            <SideBar />
            <div className="body-wrapper">
               <div className="dtc-scan-container">
                  <div className="parameter-contianer">
                     <div className="fault-manage-DTC">
                        {/* ====Ecus rendering==== */}
                        <div className="sidebar-routine">
                           <ul
                              className="sidebar-part-list"
                              id="ul-sidebar-bus-list-dtc"
                           >
                              {ecuList?.map((ecu, i) => (
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
                                       disabled={activeButton}
                                       onChange={(e) =>
                                          getEcuSelect({ e, ecu, i })
                                       }
                                    />
                                 </li>
                              ))}
                           </ul>
                        </div>
                        {/* <div className="Flash-header">
                        <h4>Operator</h4>
                     </div> */}
                        <div className="bus-code1">
                           <div className="Operator-setup">
                              <div className="main-Heading">
                                 <div className="Heading">
                                    <h3>ECU Name</h3>
                                    <h3>Description</h3>
                                 </div>
                                 {item ? (
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
                                    ecuSelect.length > 0 ? "" : "Flashing-info"
                                 }`}
                              >
                                 <div className="Flashing-setup">
                                    {ecuSelect?.length > 0 ? (
                                       <ul className="Flashing-list">
                                          {selectedFileEcu?.map((ele, i) => (
                                             <li key={i}>
                                                <span className="Ecu-name">
                                                   {ele.ecuName}
                                                   {/* <input type="checkbox" checked={open}/> */}
                                                </span>
                                                <span className="Ecu-flashing">
                                                   <input
                                                      type="file"
                                                      name="browse"
                                                      onChange={(e)=>fileSelected({e,ele})}
                                                      disabled={open}
                                                   />
                                                   {/* <p
                                                      className={
                                                         "battery-width battery-yellow"
                                                      }
                                                   >
                                                      {command}
                                                   </p> */}
                                                   <div className="progress_bar_div">
                                                      <div className="outer_progress_bar">
                                                         <div
                                                            className="inner_progress_bar"
                                                            style={{
                                                               width:
                                                                  ele.progress + "%",
                                                            }}
                                                         />
                                                         {ele.progress > 0 && (
                                                            <span>
                                                               {ele.progress}%
                                                            </span>
                                                         )}
                                                      </div>
                                                   </div>
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
                        <div
                           className={`${
                              selectedFileEcu?.every((ele) => (
                                 ele.progress>=100)) && selectedFileEcu?.length>=1 ? "Flashing-Complete" : "Flashing-start"
                           }`}
                        >
                          
                          {selectedFileEcu?.every((ele) => (
                           ele.progress===100)) &&selectedFileEcu?.length>=1 ? (
                              <button>Completed</button>
                           ) : (
                              <button onClick={Flash} disabled={disable}>
                                 {progress?"Inprogress":"Flash"}
                              </button>
                           )}
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
};

export default EcuFlashing;
