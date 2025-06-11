import { useNavigate } from "react-router-dom";
import routePaths from "routes/routePaths";
// import diagnosticsScanToolIcon from "../../assets/images/EcuDiagonstic (3).png";
import remoteDiagIconIcon from "../../assets/images/EcuDiagonstic (2).png";
import diagnosticsScanTool from "../../assets/images/testbench.png";
import remoteDiagIcon from "../../assets/images/fleetMng.svg";
import { useDispatch } from "react-redux";
import { UpdateEolSession } from "redux/eolSession.slice";
import { useEffect } from "react";
import { List_Of_Tool, SELECTED_TOOL } from "app_constants/listOfTools";
import { allImages } from "utils/images";
// import prognosticsIcon from "../../assets/images/EcuDiagonstic (1).png";

const SolutionOffering = () => {
   const history = useNavigate();
   const dispatch = useDispatch();

   //handle click COMPONENTS FLASHING
   const NavigatetoOperator = () => {
      localStorage.removeItem("sidebarMenuName");
      localStorage.removeItem("scanEcuList");
      // localStorage.setItem("eolSession", JSON.stringify(false));
      localStorage.setItem("NavigateOperator", JSON.stringify(true));
      localStorage.setItem("Heading", JSON.stringify("COMPONENTS FLASHING"));
      localStorage.setItem(
         SELECTED_TOOL,
         JSON.stringify(List_Of_Tool.COMPONENTS_FLASHING)
      );
      history(routePaths.hardwareInterface);
   };
   //handle click TEST BENCH
   const NavigatetoEolDiagonstics = () => {
      localStorage.removeItem("sidebarMenuName");
      localStorage.removeItem("scanEcuList");
      localStorage.setItem("StartEcu", JSON.stringify(true));
      // localStorage.setItem("eolSession", JSON.stringify(false));
      localStorage.setItem("NavigateOperator", JSON.stringify(false));
      localStorage.setItem("Heading", JSON.stringify("TEST BENCH"));
      localStorage.setItem(
         SELECTED_TOOL,
         JSON.stringify(List_Of_Tool.TEST_BENCH)
      );
      history(routePaths.hardwareInterface);
   };
   // const NavigatetoFlashingSetup = () => {
   //    localStorage.removeItem("sidebarMenuName");
   //    localStorage.removeItem("scanEcuList");
   //    history(routePaths.Flashingsetup);
   // };

   //handle click VEHICLE EOL
   const NavigatetoVciConnective = () => {
      dispatch(UpdateEolSession(true));
      // localStorage.setItem("eolSession", JSON.stringify(true));
      localStorage.setItem("Heading", JSON.stringify("VEHICLE EOL"));
      history(routePaths.VciConnective);
      localStorage.setItem(
         SELECTED_TOOL,
         JSON.stringify(List_Of_Tool.VEHICLE_EOL)
      );
   };
   const navigateToManufactureStation = () => {
      dispatch(UpdateEolSession(true));
      // localStorage.setItem("eolSession", JSON.stringify(true));
      localStorage.setItem(
         "Heading",
         JSON.stringify("MANUFACTURING STATION CONFIGURATOR")
      );
      localStorage.setItem(
         SELECTED_TOOL,
         JSON.stringify(List_Of_Tool.MANUFACTURING_STATION)
      );
      history(routePaths.manufacturing);
   };
   useEffect(() => {
      localStorage.setItem("access_token", JSON.stringify("onPremtoken"));
      localStorage.removeItem(SELECTED_TOOL);
   }, []);
   return (
      <div className="solution_offering_main_div">
         <div className="tools_div">
            <div className="card_body">
               {/* <div
                  className="card"
                  id="card"
                  onClick={NavigatetoFlashingSetup}
               >
                  <img
                     src={diagnosticsScanToolIcon}
                     alt="tool"
                     id="diagnosticsScanToolIcon"
                  />
                  <span name="DIAGNOSTICS SCAN TOOL">EOL COMPONENT FLASHING SETUP</span>
               </div> */}
               <div className="card" onClick={NavigatetoOperator}>
                  <img src={remoteDiagIconIcon} alt="tool" />
                  <span>COMPONENTS FLASHING</span>
               </div>
               {/* <div className="card" onClick={NavigatetoEolDiagonstics}>
                  <img src={prognosticsIcon} alt="tool" />
                  <span>ECU Diagnostics</span>
               </div> */}

               <div
                  className="card"
                  id="card"
                  onClick={NavigatetoEolDiagonstics}
               >
                  <img
                     src={diagnosticsScanTool}
                     alt="tool"
                     id="diagnosticsScanToolIcon"
                  />
                  <span name="DIAGNOSTICS SCAN TOOL">TEST BENCH</span>
               </div>
               <div className="card" onClick={NavigatetoVciConnective}>
                  <img src={remoteDiagIcon} alt="tool" />
                  <span>VEHICLE EOL</span>
               </div>
               <div className="card" onClick={navigateToManufactureStation}>
                  <img src={allImages.configurationIcon} alt="tool" />
                  <span>STATION CONFIGURATOR</span>
               </div>
            </div>
         </div>
         <div className="footer">
            <span>
               Copyright &copy; {new Date().getFullYear()} BlueBinaries, Inc.
               All Rights Reserved.
            </span>
         </div>
      </div>
   );
};

export default SolutionOffering;
