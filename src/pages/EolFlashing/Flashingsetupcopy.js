/* eslint-disable indent */
/* eslint-disable no-unused-vars */
// import SideBar from "components/SideBar copy/SideBar";
import { useState } from "react";
import { useNavigate } from "react-router-dom/dist";
import routePaths from "routes/routePaths";

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
   const Navigate=useNavigate()
   const [open, setOpen] = useState(false);
   const [progress, setProgress] = useState(false);
   const [percent, setPercent] = useState(0);
   const [command, setCommand] = useState("");
   const [activeButton, setActiveButton] = useState(0);
   // const Popup = (i) => {
   //    console.log("Object", i);
   // };
   let intervalId;
   const Flash = () => {
      Navigate(routePaths.Operator)
   };
   const fileSelected=(e)=>{
      localStorage.setItem("name",e.target.files[0].name)
      console.log("object",e.target.files[0].name)
      setCommand("Latest File Selected")
   }
   return (
      <div className="dtc-scan-page">
         <div className="page-wrapper">
            {/* <SideBar /> */}
            <div className="body-wrapper">
               <div className="dtc-scan-container">
                  <div className="parameter-contianer">
                     {/* <div className="Flash-header">
                        <h4>Operator</h4>
                     </div> */}
                     <div className="Operator-setup">
                        <div className="main-Heading">
                        <div className="Heading">
                           <h3>ECU Name</h3>
                           <h3>Description</h3>
                        </div>
                        <div className="Heading">
                           <h3>ECU Name</h3>
                           <h3>Description</h3>
                        </div>
                        </div>
                        <div>
                           <div className="Flashing-setup">
                              <ul className="Flashing-list">
                                 {ECUList?.map((ele, i) => (
                                    <li key={i}>
                                       <span className="Ecu-name">
                                          {ele}
                                          {/* <input type="checkbox" checked={open}/> */}
                                       </span>
                                       <span className="Ecu-flashing">
                                          <input type="file" name="browse" onChange={fileSelected}/>
                                          <p
                                             className={
                                                "battery-width battery-yellow"
                                          }
                                          >
                                             {command}
                                          </p>
                                          {/* <div className="progress_bar_div">
                                             <div className="outer_progress_bar">
                                                <div
                                                   className="inner_progress_bar"
                                                   style={{
                                                      width: percent + "%",
                                                   }}
                                                />
                                             </div>
                                          </div> */}
                                       </span>
                                    </li>
                                 ))}
                              </ul>
                              <div className={`${!progress?"Flashing-button":"Flashing-Complete"}`}>
                                 {!progress?(
                                    <button onClick={Flash}>NEXT</button>
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
