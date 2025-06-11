/* eslint-disable indent */
/* eslint-disable no-unused-vars */
import SideBar from "components/componentFlashingSidebar/ComponentFlashingSideBar";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { updateInputValue } from "redux/batchDetails.slice";
import { updateFileData } from "redux/filedata.slice";
import { getFreezeAll } from "redux/freezeSlice";
import routePaths from "routes/routePaths";
// import { ecuList, removeecu } from "redux/ecuFlashingdetails.slice";
import { getScanEcusList } from "services/dashboardService";
import { initiateEcuFlashing } from "socket/socketEmitters";

const Operator = () => {
   // const ECUList = ["BCM", "GW", "ADAS", "PVIU", "PKC", "CIM", "INS", "ABS"];
   const [open, setOpen] = useState(false);
   const [progress, setProgress] = useState(false);
   const [percent, setPercent] = useState(0);
   const [command, setCommand] = useState("Latest File Selected");
   const [eculistselected, setEcuListSelected] = useState(
      useSelector((state) => state?.updateFileName?.fileName)
   );
   const ecuDatalist = useSelector((state) => state?.updateFileData?.fileData);
   const [ecuSelect, setEcuSelect] = useState([]);
   const [inputValid, setInputValid] = useState(true);
   const [batchValue, setBatchValue] = useState("");
   const [active, setActive] = useState(true);
   const [isChecked, setIsChecked] = useState(false);
   const dispatch = useDispatch();
   const FlashingStatusCheck = useSelector(
      (state) => state?.getEcuFlashing?.ecuFlashing
   );
   
   const Navigate=useNavigate()
   useEffect(() => {
      const initialSelectedCheckboxes = eculistselected?.map((ele) => ele.item);
      setEcuSelect(initialSelectedCheckboxes);
   }, [eculistselected]);
   const getEcuSelect = ({ e }) => {
      setIsChecked(true)
      const { value, checked } = e.target;
      const isChecked = e.target.checked;
      const updatedItems = ecuDatalist.map((item) =>
         item.ecuName === value
            ? {
                 ...item,
                 flashStatus: isChecked ? "Yes" : "No",
                 flashDate: isChecked ? new Date() : "NA",
              }
            : item
      );
      dispatch(updateFileData(updatedItems));
      if (checked) {
         setEcuSelect((prev) => [...prev, value]);
      } else {
         setEcuSelect((prev) => prev.filter((item) => item !== value));
      }
   };
   useEffect(()=>{
      if(isChecked){
      if(ecuSelect?.length>0){
         setActive(false)
      }
      else{
         setActive(true)
      }
   }
   },[ecuSelect,isChecked])

   const filteredData = eculistselected?.filter((ele) =>
      ecuSelect.includes(ele.item)
   )
   const FlashingStatus = () => {
      let formated = {
         flashing: {},
      };
      filteredData?.forEach((ele) => {
         formated.flashing = {
            dllCallMethod: "flashing_sequence",
            ecuName: ele.item,
         };
         initiateEcuFlashing(formated.flashing);
      });
   };
 

   useEffect(() => {
      if(open){
        
         setEcuListSelected( filteredData?.map((ele) => {
         const status = FlashingStatusCheck?.find(
            (elm) => elm.ecuName === ele.item
         );
         if (
            status &&
            status.ecuFlashingStatus === "Pre-Programming completed"
         ) {
            dispatch(getFreezeAll(true));
            return { ...ele,progress: 100 };
         }
         return ele;
      })
         )
   }
   }, [FlashingStatusCheck,open]);
   useEffect(()=>{
      if(open){
      const progressInterval=setInterval(UpdateProgress,1000);
      return ()=>{
         clearInterval(progressInterval)
      };
   }
   },[open])
   const UpdateProgress=()=>{
      setEcuListSelected(prev=>prev?.map((ele)=>{
         if(ele.progress<75){
            return {...ele,progress:ele.progress+1}
         }
         return ele
      })
      )
   }
   let intervalId;
   const Flash = () => {
      setProgress(true)
      setActive(true)
      FlashingStatus();
      setOpen(true);
      UpdateProgress()
      setCommand("Flashing in Progress");
      // intervalId = setInterval(() => {
      //    setPercent((prevProgress) => {
      //       if (prevProgress >= 100) {
      //          clearInterval(intervalId);
      //          setProgress(true);
      //          setOpen(false);
      //          setCommand("Flashing Completed");
      //          setPercent(-1);
      //          return 100;
      //       } else {
      //          return prevProgress + 1;
      //       }
      //    });
      // }, 5000);
   };
   const fileSelected = () => {
      setCommand("File Selected");
   };
   const BatchDetails = (e) => {
      setActive(false);
      const value = e.target.value;
      const pattern = /^[A-Z0-9]+$/;
      console.log("pattern", value);
      if (pattern.test(value) && value.length < 16) {
         setBatchValue(value);
         setInputValid(true);
      } else if (value.length === 0) {
         setBatchValue("");
         setInputValid(false);
         setActive(true);
      } else {
         setInputValid(false);
      }
      dispatch(updateInputValue(value));
   };
   const RedirecttoPartDetails=()=>{
      Navigate(routePaths.PartDetails)
   }
   return (
      <div className="dtc-scan-page">
         <div className="page-wrapper">
            <SideBar />
            <div className="body-wrapper">
               <div className="dtc-scan-container">
                  <div className="dtc-contianer-sec">
                     <div className="dtc-container-list">
                        {/* =======buttons group on the top===== */}

                        {/* ====Ecu & dtc parameters==== */}
                        <div className="Batch-details">
                           <p>Batch ID</p>
                           <input
                              type="text"
                              value={batchValue}
                              onChange={BatchDetails}
                              placeholder="Please enter the Batch ID"
                           ></input>
                        </div>
                        <div className="Batch-input">
                           
                              <p>
                                 {" "}
                                 Provide details within a 15-character limit,
                                 utilizing only uppercase letters and numbers.
                              </p>
                           
                        </div>
                        <div className="fault-manage-DTC">
                           {/* ====Ecus rendering==== */}
                           <div className="sidebar-routine">
                              {/* <div className="select_all" id="select-all-div">
                                 <span id="select-all-btn">Select all</span>
                                 <input
                                    type="checkbox"
                                    name="select all"
                                    // checked={IsSelectAllCheckboxes}
                                    // onChange={getSelectAll}
                                 />
                              </div> */}
                              <ul
                                 className="sidebar-part-list"
                                 id="ul-sidebar-bus-list-dtc"
                              >
                                 {eculistselected?.map((ecu, i) => (
                                    <li
                                       key={i}
                                       id={ecu.ecuName}
                                       className={`${
                                          !eculistselected.includes(ecu.item)
                                             ? "dtc-select active-dtc"
                                             : "dtc-select"
                                       }`}
                                    >
                                       {ecu.item}
                                       <input
                                          type="checkbox"
                                          name="ecuName"
                                          value={ecu.item}
                                          // onChange={(e) =>
                                          //    getDTCApi({ e, ecu })
                                          // }
                                          checked={ecuSelect.includes(ecu.item)}
                                          disabled={open}
                                          onChange={(e) =>
                                             getEcuSelect({ e, ecu })
                                          }
                                       />
                                    </li>
                                 ))}
                              </ul>
                           </div>
                           {/* =====parameters rendering===== */}
                           <div className="bus-code1">
                              <div className="Operator-setup">
                                 <div>
                                    <div className="Flashing-setup">
                                       <ul className="Operator-list">
                                          {filteredData?.map((ele, i) => (
                                             <li key={i}>
                                                <span className="Ecu-name">
                                                   {ele.item}
                                                   {/* <input type="checkbox" checked={open}/> */}
                                                </span>
                                                <span className="Ecu-flashing">
                                                   {/* <p>{Commands}</p> */}
                                                   {/* <input type="type"/> */}
                                                   <p
                                                      className={`battery-width 
                                          ${
                                             ele.progress === 0
                                                ? "battery-red"
                                                : ele.progress <= 100 && ele.progress < 0
                                                ? "battery-yellow"
                                                : "battery-green"
                                          }`}
                                                   >
                                                      {ele.fileName}
                                                   </p>
                                                   <div className="progress_bar_div">
                                                      {ele.progress > -1 && (
                                                         <div>
                                                            {ele.progress}%
                                                         </div>
                                                      )}
                                                      <div className="outer_progress_bar">
                                                         <div
                                                            className="inner_progress_bar"
                                                            style={{
                                                               width:
                                                                  ele.progress +
                                                                  "%",
                                                            }}
                                                         ></div>
                                                      </div>
                                                   </div>
                                                </span>
                                             </li>
                                          ))}
                                       </ul>
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </div>
                        <div className="batch-details">
                        <div></div>
                           <div
                              className={`${
                                 filteredData?.every((ele) => (
                                    ele.progress===100)) &&filteredData?.length>=1
                                    ? "Flashing-Complete"
                                    : "Flashing-button"
                              }`}
                           >
                              {filteredData?.every((ele) => (
                           ele.progress===100)) &&filteredData?.length>=1  ? (
                              <button onClick={RedirecttoPartDetails}>Next</button>
                              ) : (
                                 <button disabled={active} onClick={Flash}>
                                   {progress?"Inprogress":"Flash"}
                                 </button>
                              )}
                           </div>
                        </div>
                     </div>

                     {/* legends on the bottom */}
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
};

export default Operator;
