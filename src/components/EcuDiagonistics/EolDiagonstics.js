import { useNavigate } from "react-router-dom";
import routePaths from "routes/routePaths";
import diagnosticsScanToolIcon from "../../assets/images/testbench.png"
import remoteDiagIconIcon from "../../assets/images/station.png"
// import prognosticsIcon from "../../assets/images/others.png";

const EolDiagnostics = () => {
   const history = useNavigate();
   const handleClickToNavigatePage = () => {
      localStorage.removeItem("sidebarMenuName");
      localStorage.removeItem("scanEcuList");
      history(routePaths.diagnosticMeasurement);
   };
   return (
      <div className="solution_offering_main_div">
         <div className="tools_div">
            <div className="card_body">
               <div
                  className="card"
                  id="card"
                  onClick={handleClickToNavigatePage}
               >
                  <img
                     src={diagnosticsScanToolIcon}
                     alt="tool"
                     id="diagnosticsScanToolIcon"
                  />
                  <span name="DIAGNOSTICS SCAN TOOL">
                    TEST BENCH Station
                  </span>
               </div>
               <div className="card">
                  <img src={remoteDiagIconIcon} alt="tool" />
                  <span>EOL Vehicle Station</span>
               </div>
               {/* <div className="card">
                  <img src={prognosticsIcon} alt="tool" />
                  <span>OTHERS</span>
               </div> */}
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

export default EolDiagnostics;
