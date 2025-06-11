import { useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";
// import routePaths from "routes/routePaths";
import Close from "assets/images/close.png";
import { useDispatch, useSelector} from "react-redux";

import VehicleSummary from "assets/images/vehicle-summary.svg";
import FaultManagement from "assets/images/fault-management.svg";
import ActuatorTesting from "assets/images/actuator-test.svg";
import Routine from "assets/images/Routine-1.svg";
import Reprogramming from "assets/images/reprogramming.svg";
import vehicleConfiguration from "assets/images/vehicle-configuration.svg";
import MeasurementMonitoring from "assets/images/measurement-monitoring.svg";
import { removeAllDTCRedux } from "redux/dtcList.slice";

// import ComponentCalibration from "assets/images/component-calibration.svg";
// import VehicleDelivery from "assets/images/vehicle-delivery.svg";
// import ServiceSession from "assets/images/service-session.svg";

const sidebarmenu = [
   {
      name: "Test Bench Summary",
      icon: VehicleSummary,
      data_content: "Vehicle Summary",
      sidebar_link: "/vehicle-info",
      id: "vehicle-summary-link",
      activeClass: "Inactive_Sidebar",
   },
   {
      name: "Reprogramming/Flashing",
      icon: Reprogramming,
      data_content: "Reprogramming/Flashing",
      sidebar_link: "/ecu-flashing",
      id: "ecu-flashing-link",
      activeClass: "Inactive_Sidebar",
   },
   {
      name: "Fault Management",
      icon: FaultManagement,
      data_content: "Fault Management",
      sidebar_link: "/diagnostic-measurement",
      id: "diagnostic-measurement-link",
      activeClass: "Inactive_Sidebar",
   },
   {
      // name: "Measurement & Monitoring",
      name: "Read & Write ECU Data",
      icon: MeasurementMonitoring,
      data_content: "Measurement & Monitoring",
      sidebar_link: "/measurement",
      id: "vehicle-diagnostic-link",
      activeClass: "Inactive_Sidebar",
   },
   {
      name: "Actuators/ IO Controls",
      icon: ActuatorTesting,
      data_content: "Actuators/ IO Controls",
      sidebar_link: "/actuator-testing",
      id: "vehicle-configuration-link",
      activeClass: "Inactive_Sidebar",
   },
   {
      name: "Routines",
      icon: Routine,
      data_content: "Routines",
      sidebar_link: "/routine",
      id: "vehicle-configuration-link",
      activeClass: "Inactive_Sidebar",
   },
 
   // {
   //    name: "Label Print",
   //    icon: VehicleSummary,
   //    data_content: "ECU Configuration",
   //    sidebar_link: "/LabelPrintCopy",
   //    id: "vehicle-configuration-link",
   //    activeClass: "Inactive_Sidebar",
   // },
   {
      name: "Vehicle Configuration",
      icon:vehicleConfiguration,
      data_content: "vehicleConfiguration",
      sidebar_link: "/vehicle-configuration",
      id: "vehicle-configuration-link",
      activeClass: "Inactive_Sidebar",
   },
];

function SideBar() {
   const sidebarDivRef = useRef();
   const dispatch = useDispatch();
   const width = window.innerWidth;

   const freezeAll = useSelector((state) => state.freezeSlice);
   const scanEcuListData = useSelector((state) => state.ecusScanListSlice); 

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

      // localStorage.removeItem("faultEcu");
      localStorage.setItem("sidebarMenuName", JSON.stringify(sideBar.name));
      sidebarmenu?.filter((item) => {
         if (item?.name === sideBar.name) {
            item.activeClass = "Active_Sidebar";
         } else {
            item.activeClass = "Inactive_Sidebar";
         }
         return item;
      });
      dispatch(removeAllDTCRedux([]));
   };

   //sidebar active while refreshing page
   useEffect(() => {
      const localeStotageSidebarMenuName = JSON.parse(
         localStorage.getItem("sidebarMenuName")
      );
      if (localeStotageSidebarMenuName) {
         sidebarmenu?.filter((item) => {
            if (item?.name === localeStotageSidebarMenuName) {
               item.activeClass = "Active_Sidebar";
            } else {
               item.activeClass = "Inactive_Sidebar";
            }
            return item;
         });
      } else {
         sidebarmenu?.filter((item) => {
            if (item?.name === "Vehicle Summary") {
               item.activeClass = "Active_Sidebar";
            } else {
               item.activeClass = "Inactive_Sidebar";
            }
            return item;
         });
      }
   }, []);

   //when click on ecu from vSummary, sidebar "active" status
   useEffect(() => {
      let faultEcuName = JSON.parse(localStorage.getItem("faultEcu"));
      if (faultEcuName) {
         sidebarmenu.filter((item) => {
            if (item.name === faultEcuName) {
               item.activeClass = "Active_Sidebar";
            } else {
               item.activeClass = "Inactive_Sidebar";
            }
            return item;
         });
      }
   }, []);

   // const sideBarActiveClassStatus = useSelector(state=>state.sideBarActiveSlice);

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
            {sidebarmenu.map((sideBar, i) => (
               <li
                  // onClick={() => mobileMenu(sideBar)}
                  onClick={ () => mobileMenu(sideBar)}
                  key={i}
                  className={sideBar.activeClass}
               >
                  <NavLink
                     data-content={sideBar.data_content}
                     className={`navbar__link ${!freezeAll && "cursor_not_allowed"}`}
                     id={sideBar.name}
                     to={
                        freezeAll &&
                        Object.keys(scanEcuListData)?.length !== 0 &&
                        `${sideBar.sidebar_link}`
                     }
                  >
                     <div className="siderbar-icon-size">
                        <img src={sideBar.icon} alt={sideBar.name} />
                     </div>
                     <span>{sideBar.name}</span>
                  </NavLink>
               </li>
            ))}

            {/* <li onClick={mobileMenu}>
               <NavLink
                  data-content="Vehicle Summary"
                  className="navbar__link "
                  id="vehicle-summary-link"
                  to="/vehicle-info"
                  name="Vehicle Summary"
               >
                  <div className="siderbar-icon-size">
                     <img src={VehicleSummary} alt="summary" />
                  </div>
                  <span>Vehicle Summary</span>
               </NavLink>
            </li>

            <li onClick={mobileMenu} className="cursor_notAllowed">
               <NavLink
                  data-content="Fault Management"
                  className="navbar__link"
                  id="diagnostic-measurement-link"
                  name="Fault Management"
                  to={
                     freezeAll &&
                     localStorageEcus &&
                     `${routePaths.diagnosticMeasurement}`
                  }
               >
                  <div className="siderbar-icon-size">
                     <img src={FaultManagement} alt="FaultManagement" />
                  </div>
                  <span>Fault Management</span>
               </NavLink>
            </li>
            <li onClick={mobileMenu}>
               <NavLink
                  data-content="Measurement & Monitoring"
                  className="navbar__link"
                  id="vehicle-diagnostic-link"
                  name="Measurement & Monitoring"
                  to={
                     freezeAll &&
                     localStorageEcus &&
                     `${routePaths.measurement}`
                  }
               >
                  <div className="siderbar-icon-size">
                     <img
                        src={MeasurementMonitoring}
                        alt="MeasurementMonitoring"
                     />
                  </div>
                  <span>Read & Write ECU</span>
               </NavLink>
            </li>
            <li onClick={mobileMenu}>
               <NavLink
                  data-content="Actuators/ IO Controls"
                  className="navbar__link"
                  id="vehicle-configuration-link"
                  name="Actuators/ IO Controls"
                  to={
                     freezeAll &&
                     localStorageEcus &&
                     `${routePaths.actuatorTesting}`
                  }
               >
                  <div className="siderbar-icon-size">
                     <img src={ActuatorTesting} alt="Actuators/ IO Controls" />
                  </div>
                  <span>Actuators/ IO Controls</span>
               </NavLink>
            </li>
            <li onClick={mobileMenu}>
               <NavLink
                  data-content="Routines"
                  className="navbar__link"
                  id="vehicle-configuration-link"
                  name="Routines"
                  to={freezeAll && localStorageEcus && `${routePaths.routine}`}
               >
                  <div className="siderbar-icon-size">
                     <img src={Routine} alt="Routine" />
                  </div>
                  <span>Routines</span>
               </NavLink>
            </li>
            <li onClick={mobileMenu}>
               <NavLink
                  data-content="Vehicle Flashing"
                  className="navbar__link"
                  id="ecu-flashing-link"
                  name="Vehicle Flashing"
                  to={freezeAll && localStorageEcus && `${routePaths.flashing}`}
               >
                  <div className="siderbar-icon-size">
                     <img src={Reprogramming} alt="Reprogramming" />
                  </div>
                  <span>Reprogramming/Flashing</span>
               </NavLink>
            </li>
            {/* <li onClick={mobileMenu}>
               <NavLink
                  data-content="Vehicle Configuration"
                  className="navbar__link"
                  id="vehicle-configuration-link"
                  // to={routePaths.vehicleConfiguration}
                  to={freezeAll && localStorageEcus && "/vehicle-configuration"}
               >
                  <div className="siderbar-icon-size">
                     <img
                        src={vehicleConfiguration}
                        alt="vehicleConfiguration"
                     />
                  </div>
                  <span>ECU Configuration</span>
               </NavLink>
            </li> */}
            {/* <li onClick={mobileMenu}>
               <NavLink
                  data-content="Vehicle Configuration"
                  className="navbar__link"
                  id="vehicle-configuration-link"
                  name="Service History"
                  // to={routePaths.vehicleConfiguration}
                  to={
                     freezeAll &&
                     localStorageEcus &&
                     `${routePaths.serviceHistory}`
                  }
               >
                  <div className="siderbar-icon-size">
                     <img
                        src={vehicleConfiguration}
                        alt="vehicleConfiguration"
                     />
                  </div>
                  <span>Service History</span>
               </NavLink> */}
            {/* </li> */}
         </ul>
      </div>
   );
}

export default SideBar;
