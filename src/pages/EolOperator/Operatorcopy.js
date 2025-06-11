/* eslint-disable indent */
/* eslint-disable no-unused-vars */
import SideBar from "components/SideBar copy/SideBar";
import { useState } from "react";

const Operator = () => {
   const ECUList = [
      "BCM",
      "GW",
      "ADAS",
      "PVIU",
      "PKC",
      "CIM",
      "INS",
      "ABS",
   ];
   const [open, setOpen] = useState(false);
   const [progress, setProgress] = useState(false);
   const [percent, setPercent] = useState(0);
   const [command, setCommand] = useState("Latest File Selected");
   const [activeButton, setActiveButton] = useState(0);
   // const Popup = (i) => {
   //    console.log("Object", i);
   // };
   let intervalId;
   const Flash = () => {
      setOpen(true)
      setCommand("Flashing in Progress");
      intervalId = setInterval(() => {
         setPercent((prevProgress) => {
            if (prevProgress >= 100) {
               clearInterval(intervalId);
               setProgress(true)
               setCommand("Flashing Completed");
               setPercent(-1);
               return 100;
            } else {
               return prevProgress + 1;
            }
         });
      }, 100);
   };
   const fileSelected=()=>{
      setCommand("File Selected")
   }
   const Commands=localStorage.getItem("name")
   console.log("Commands",Commands)
   return (
      <div className="dtc-scan-page">
         <div className="page-wrapper">
            <SideBar />
            <div className="body-wrapper">
               <div className="dtc-scan-container">
                  <div className="parameter-contianer">
                     {/* <div className="Flash-header">
                        <h4>Operator</h4>
                     </div> */}
                     <div className="Operator-setup">
                        {/* <div className="Heading">
                           <h3>ECU Name</h3>
                           <h3>Description</h3>
                        </div> */}
                        <div>
                           <div className="Flashing-setup">
                              <ul className="Operator-list">
                                 {ECUList?.map((ele, i) => (
                                    <li key={i}>
                                       <span className="Ecu-name">
                                          {ele}
                                          {/* <input type="checkbox" checked={open}/> */}
                                       </span>
                                       <span className="Ecu-flashing">
                                          <p>{Commands}</p>
                                          {/* <input type="type"/> */}
                                          <p
                                             className={`battery-width 
                                          ${
                                             percent === 0
                                                ? "battery-red"
                                                : percent <= 100 &&
                                                percent < 0
                                                ? "battery-yellow"
                                                : "battery-green"
                                          }`}
                                          >
                                             {command}
                                          </p>
                                          <div className="progress_bar_div">
                                             <div className="outer_progress_bar">
                                                <div
                                                   className="inner_progress_bar"
                                                   style={{
                                                      width: percent + "%",
                                                   }}
                                                />
                                                {percent>0 &&(
                                                <span>{percent}%</span>
                                                )}
                                                
                                             </div>
                                          </div>
                                       </span>
                                    </li>
                                 ))}
                              </ul>
                              <div className={`${!progress?"Flashing-button":"Flashing-Complete"}`}>
                                 {!progress?(
                                    <button onClick={Flash}>Start</button>
                                 ):(
                                    <button>Completed</button>
                                 )}
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
};

export default Operator;
