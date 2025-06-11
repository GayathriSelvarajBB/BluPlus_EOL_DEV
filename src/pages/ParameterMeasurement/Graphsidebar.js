import Current from "../../assets/images/C.svg";
import Tempature from "../../assets/images/T.svg";
import Voltage from "../../assets/images/V.svg";
import Battery from "../../assets/images/Graphbattery.svg";
import { NavLink } from "react-router-dom";
import routePaths from "routes/routePaths";

const Graphsidebar = (props) => {
   return (
      <div>
         <div className="Graph-sidebar">
            <h5>Battery Prediction Parameter</h5>
            {/* <div className="Graph-status-img"> */}
            {/* <img src={Current} alt="current" /> */}
            {/* <img src={Tempature} alt="Tempature" />
            <img src={Voltage} alt="Voltage" /> */}
            {/* </div> */}
            <div className="Graph-status">
               <NavLink to={routePaths.CurrentBattery}>
                  <div className="Current">
                     <img src={Current} alt="current" />
                     <p>Current</p>
                  </div>
               </NavLink>
               <NavLink to={routePaths.PredictiveBattery}>
                  <div className="Temperature">
                     <img
                        src={Tempature}
                        alt="Tempature"
                        onClick={props.Toggle}
                     />
                     <p>Tempature</p>
                  </div>
               </NavLink>
               <div className="Voltage">
                  <img src={Voltage} alt="Voltage" />
                  <p>Voltage</p>
               </div>
            </div>
            <div className="Graph-battery">
               <img src={Battery} alt="battery" />
            </div>
            <div className="Vechile-details">
               <ul>
                  <li>
                     <span>BATTERY TYPE</span>
                     <span>SLI</span>
                  </li>
                  <li>
                     <span>VEHICLE</span>
                     <span>BB-JAZZ</span>
                  </li>
                  <li>
                     <span>MODEL</span>
                     <span>VX-2018</span>
                  </li>
                  <li>
                     <span>VIN</span>
                     <span>T834023XC3943HU4R</span>
                  </li>
               </ul>
            </div>
         </div>
         <div className="table-main">
            <h5>Reference Data</h5>
            <table className="table-details">
               <thead>
                  <th>Parameter</th>
                  <th>Min</th>
                  <th>Max</th>
               </thead>
               <tbody>
                  <tr>
                     <td>Current</td>
                     <td>45amp</td>
                     <td>70amp</td>
                  </tr>
                  <tr>
                     <td>Tempature</td>
                     <td>25°C</td>
                     <td>60°C</td>
                  </tr>
                  <tr>
                     <td>Voltage</td>
                     <td>2.5V</td>
                     <td>4.2V</td>
                  </tr>
               </tbody>
            </table>
         </div>
      </div>
   );
};

export default Graphsidebar;
