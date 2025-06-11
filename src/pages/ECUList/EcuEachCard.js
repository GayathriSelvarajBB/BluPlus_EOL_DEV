/* eslint-disable quotes */
/* eslint-disable indent */
// import { useEffect, useRef } from "react";
// import EcuError from 'assets/images/ecu-error.png';
// import SoftwareUpdate from 'assets/images/software-update.png';
import info from "assets/images/info.png";
import ECUList from "assets/images/ecu-list.png";
import { useRef, useState } from "react";
// import EcuChip from '../../images/ecu-chip.png';
// import SettingsSmall from "assets/images/settings-icon-small.png";
// import SettingsBig from "assets/images/settings-big.png";
// import { Link } from "react-router-dom";
// import Update from "assets/images/software-system.png";
// import { useState } from "react";
// import Rotate from 'assets/images/rotate.png';

function EcuEachCard(props) {
   // const activeCard = useRef(null);
   const id = props.id;
   // const titleEcu = props.title;
   const subTitle = props.subTitle;
   const subTitles = props.title;
   const ecuHealth = props.ecuHealth ? "ecu-pass" : "ecu-failure";
   const ecuHealthMark = props.ecuHealth;
   const possible=props.possible
   // const dtc = props.dtc;
   // const softwareUpdate = props.softwareUpdate;
   const index = props.index;

   const getRef = useRef();

   // const [data, setData] = useState(false);

   // function rotatePopup(){
   //     document.getElementById("popup-flip").classList.toggle("ecu-popup-active");
   // }

   // function rotatePopup(){
   //     document.getElementById("ecu-popup-"+index).classList.toggle("ecu-popup-active");
   // }

const [data,setData]=useState(false)
   const Handle = (event) => {
      const getClassList = document.getElementsByClassName("popup-check");

      for(var i=0;i<getClassList.length;i++){
         getClassList[i].style.display="none";
      }

      document.getElementById(event.currentTarget.getAttribute("data-attribute")).style.display="block";
      console.log(getRef);
      setData(!data)
   };
   return (
      <div
         className={`ecu-each-card ${ecuHealth}`}
         id={`${id}`}
         tabIndex={index}
      >
         <div>
            {!ecuHealthMark ? (
               <div className="issue-mark">
                  {/* <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-exclamation-lg" viewBox="0 0 16 16">
                        <path d="M7.005 3.1a1 1 0 1 1 1.99 0l-.388 6.35a.61.61 0 0 1-1.214 0L7.005 3.1ZM7 12a1 1 0 1 1 2 0 1 1 0 0 1-2 0Z"/>
                    </svg> */}
                  {/* <svg
                     xmlns="http://www.w3.org/2000/svg"
                     width="20"
                     height="20"
                     fill="currentColor"
                     className="bi bi-patch-exclamation-fill"
                     viewBox="0 0 16 16"
                  >
                     <path d="M10.067.87a2.89 2.89 0 0 0-4.134 0l-.622.638-.89-.011a2.89 2.89 0 0 0-2.924 2.924l.01.89-.636.622a2.89 2.89 0 0 0 0 4.134l.637.622-.011.89a2.89 2.89 0 0 0 2.924 2.924l.89-.01.622.636a2.89 2.89 0 0 0 4.134 0l.622-.637.89.011a2.89 2.89 0 0 0 2.924-2.924l-.01-.89.636-.622a2.89 2.89 0 0 0 0-4.134l-.637-.622.011-.89a2.89 2.89 0 0 0-2.924-2.924l-.89.01-.622-.636zM8 4c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 4.995A.905.905 0 0 1 8 4zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
                  </svg> */}
               </div>
            ) : (
               <div className="success-mark">
                  {/* <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-exclamation-lg" viewBox="0 0 16 16">
                        <path d="M7.005 3.1a1 1 0 1 1 1.99 0l-.388 6.35a.61.61 0 0 1-1.214 0L7.005 3.1ZM7 12a1 1 0 1 1 2 0 1 1 0 0 1-2 0Z"/>
                    </svg> */}
                  {/* <svg
                     xmlns="http://www.w3.org/2000/svg"
                     width="17"
                     height="17"
                     fill="currentColor"
                     className="bi bi-patch-check-fill"
                     viewBox="0 0 16 16"
                  >
                     <path d="M10.067.87a2.89 2.89 0 0 0-4.134 0l-.622.638-.89-.011a2.89 2.89 0 0 0-2.924 2.924l.01.89-.636.622a2.89 2.89 0 0 0 0 4.134l.637.622-.011.89a2.89 2.89 0 0 0 2.924 2.924l.89-.01.622.636a2.89 2.89 0 0 0 4.134 0l.622-.637.89.011a2.89 2.89 0 0 0 2.924-2.924l-.01-.89.636-.622a2.89 2.89 0 0 0 0-4.134l-.637-.622.011-.89a2.89 2.89 0 0 0-2.924-2.924l-.89.01-.622-.636zm.287 5.984-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7 8.793l2.646-2.647a.5.5 0 0 1 .708.708z"></path>
                  </svg> */}
               </div>
            )}
          
            <div className="ect-strap">
               <img src={ECUList} alt="ecu list" />
            </div>

            <p><b>{subTitles}</b></p>
            <p>{subTitle}</p>
            <div className="status-view">
               <button data-attribute={`popup_content_${id}`} onClick={Handle}>
                  <img src={info} alt="info" />
               </button>     
               {/* <div
                  className={`dtc-mistake ${
                     dtc ? "status-success" : "status-failure"
                  }`}
               >
                  <img src={EcuError} alt="ecu error" />
               </div>
               <div
                  className={`ecu-mistake ${
                     SoftwareUpdate ? "status-success" : "status-failure"
                  }`}
               >
                  <img src={SoftwareUpdate} alt="software update" />
               </div> */}
            </div>
            {/* {data && 
            <p>{possible}</p>
            } */}

            <div className="popup-check" id={`popup_content_${id}`} ref={getRef}>
               <div className="popup-ecu">
                  {data &&
                  <p className="para">{possible}</p>
}
                  {/* <div className="rotate-icon" onClick={rotatePopup}>
                        <div className="rotate-img">
                            <img src={Rotate} alt='rotate'/>
                        </div>
                    </div> */}
                  {/* <section>
                        <h4>ECU Information</h4>
                        <p>Battery management system (BMS) is technology dedicated to the oversight of a battery pack, which is an assembly of battery cells.</p>
                        <ul>
                            <li>
                                <span>DTC Count :</span>
                                <span>4</span>
                            </li>
                        </ul>
                    </section> */}
                  {/* <aside> */}
                  {/* <h3>Software Update</h3> */}
                  {/* <div className="settings-image">
                        <img src={Update} alt="update" />
                        <img src={SettingsBig} alt="SettingsBig" />
                        <img src={SettingsSmall} alt="SettingsSmall" />
                     </div> */}
                  {/* <div className="software-version">
                        <h5>Current version : 1.4.0</h5>
                        <h5>Available version : 1.4.5</h5>
                        <Link to="/">View More</Link>
                     </div>
                  </aside> */}
                  {/* {data && (
                    
                  )} */}
                  {/* {data && (
                     <span>
                        <p>jhgwefihicyvdfukgher;cnvubgfyuhfnv bjkvbi</p>
                     </span>
                  )} */}
               </div>
            </div>
         </div>
      </div>
   );
}

export default EcuEachCard;
