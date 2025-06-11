import BrakeTestImg from "../../../assets/images/Brake Test.svg";
import Incoming from "../../../assets/images/incoming.png";
import BrakeBleedImg from "../../../assets/images/Brake Bleed.svg";
import DoorAutoLockImg from "../../../assets/images/Door Auto Lock.svg";
import AcStatusImg from "../../../assets/images/AC Status.svg";
import EcuFlashingImg from "../../../assets/images/EcuFlashing.svg";
import { NavLink } from "react-router-dom";
import routePaths from "routes/routePaths";

const QuiclAccess = () => {
   return (
      <>
         <div className="card_div">
            <div className="campaign-card">
               <NavLink to={routePaths.flashing}>
                  <div className="img_div">
                     <img src={Incoming} alt="img" />
                  </div>
               </NavLink>
            </div>
            <div className="card">
               <div className="img_div">
                  <img src={BrakeTestImg} alt="img" />
               </div>
               <span>Brake Test</span>
            </div>
            <div className="card">
               <div className="img_div">
                  <img src={BrakeBleedImg} alt="img" />
               </div>
               <span>Brake Bleed</span>
            </div>
            <div className="card">
               <div className="img_div">
                  <img src={DoorAutoLockImg} alt="img" />
               </div>
               <span>Door Auto Lock</span>
            </div>
            <div className="card">
               <div className="img_div">
                  <img src={AcStatusImg} alt="img" />
               </div>
               <span>AC Status</span>
            </div>
            <div className="card">
               <div className="img_div">
                  <img src={EcuFlashingImg} alt="img" />
               </div>
               <span>ECU Flashing</span>
            </div>
         </div>
      </>
   );
};

export default QuiclAccess;
