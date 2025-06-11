import { useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";
import Close from "assets/images/close.png";
import { useDispatch, useSelector } from "react-redux";
import ActuatorTesting from "assets/images/actuator-test.svg";
import Routine from "assets/images/Routine-1.svg";
import Reprogramming from "assets/images/reprogramming.svg";
import MeasurementMonitoring from "assets/images/measurement-monitoring.svg";
import { removeAllDTCRedux } from "redux/dtcList.slice";
import routePaths from "routes/routePaths";

function SideBar() {
   const sidebarDivRef = useRef();
   const dispatch = useDispatch();
   const width = window.innerWidth;

   const FreezeData = useSelector((state) => state?.FreezeData?.Value);

   useEffect(() => {
      const sidebarValue = localStorage.getItem("sidebar-active");

      if (sidebarValue === "sidebar-active") {
         document.getElementById("root")?.classList.add("sidebar-active");
         sidebarDivRef.current?.classList.add("sidebar-collapsed");
      } else {
         document.getElementById("root")?.classList.remove("sidebar-active");
         sidebarDivRef.current?.classList.remove("sidebar-collapsed");
      }
   }, []);

   const hamBurger = () => {
      const sideBarLocalStatus = localStorage.getItem("sidebar-active");
      document.getElementById("root")?.classList.toggle("sidebar-active");
      sidebarDivRef.current.classList.toggle("sidebar-collapsed");
      if (sideBarLocalStatus === "sidebar-active") {
         localStorage.setItem("sidebar-active", "sidebar-disabled");
      } else {
         localStorage.setItem("sidebar-active", "sidebar-active");
      }
   };

   const closeSideBarMobile = () => {
      document.getElementById("root").classList.add("sidebar-active");
      document.getElementById("sidebar").classList.add("sidebar-collapsed");
   };

   //onclick sidebar
   const mobileMenu = (sideBar) => {
      width < 1100 && closeSideBarMobile();

      dispatch(removeAllDTCRedux([]));
   };

   return (
      <div className="side-bar" id="sidebar" ref={sidebarDivRef}>
         <ul>
            <div className="close-sidebar" onClick={closeSideBarMobile}>
               <img src={Close} alt="close" />
            </div>
            <div className="list-head">
               <ul onClick={hamBurger}>
                  <li></li>
                  <li></li>
                  <li></li>
               </ul>
            </div>
            <li onClick={mobileMenu} className={`${!FreezeData?"cursor_not_allowed":""}`}>
               <NavLink
                  data-content="Fault Management"
                  className= {`${!FreezeData?"navbar__link":"cursor_not_allowed"}`}
                  id="diagnostic-measurement-link"
                  name="Fault Management"
                  to={
                     !FreezeData &&
                     `${routePaths.Flashingsetup}`
                  }
               >
                  <div className="siderbar-icon-size">
                     <img src={ActuatorTesting} alt="FaultManagement" />
                  </div>
                  <span>Flash File Selection</span>
               </NavLink>
            </li>
            <li onClick={mobileMenu}>
               <NavLink
                  data-content="Measurement & Monitoring"
                  className={`${FreezeData?"navbar__link":"cursor_not_allowed"}`}
                  id="vehicle-diagnostic-link"
                  name="Measurement & Monitoring"
                  to={
                     FreezeData &&
                     `${routePaths.Operator}`
                  }
               >
                  <div className="siderbar-icon-size">
                     <img
                        src={MeasurementMonitoring}
                        alt="MeasurementMonitoring"
                     />
                  </div>
                  <span>Component Flashing</span>
               </NavLink>
            </li>
            <li onClick={mobileMenu}>
               <NavLink
                  data-content="Actuators/ IO Controls"
                  className={`${FreezeData?"navbar__link":"cursor_not_allowed"}`}
                  id="vehicle-configuration-link"
                  name="Actuators/ IO Controls"
                  to={
                     FreezeData &&
                     `${routePaths.PartDetails}`
                  }
               >
                  <div className="siderbar-icon-size">
                     <img src={ActuatorTesting} alt="Actuators/ IO Controls" />
                  </div>
                  <span>Part Details</span>
               </NavLink>
            </li>
            <li onClick={mobileMenu}>
               <NavLink
                  data-content="Routines"
                  className={`${FreezeData?"navbar__link":"cursor_not_allowed"}`}
                  id="vehicle-configuration-link"
                  name="Routines"
                  to={  FreezeData && `${routePaths.LabelPrint}`}
               >
                  <div className="siderbar-icon-size">
                     <img src={Routine} alt="Routine" />
                  </div>
                  <span>Print Label</span>
               </NavLink>
            </li>
            <li onClick={mobileMenu}>
               <NavLink
                  data-content="Vehicle Flashing"
                  className="navbar__link"
                  id="ecu-flashing-link"
                  name="Vehicle Flashing"
                  to={ `${routePaths.ProductionReport}`}
               >
                  <div className="siderbar-icon-size">
                     <img src={Reprogramming} alt="Reprogramming" />
                  </div>
                  <span>Production Report</span>
               </NavLink>
            </li>
         </ul>
      </div>
   );
}

export default SideBar;
