import { Link } from "react-router-dom";
import routePaths from "routes/routePaths";

const EnterVINnumber = ({
   vinInput,
   handleChange,
   inputErrorMsg,
   getVehicleInfoDatafromApi,
   getVehicleDerviceDatafromApi,
   title,
   icon,
}) => {
   return (
      <div className="vehicle_info_sec">
         <div className="v_info_details">
            <span> {title}</span>
            <span className="usb-detection">
               <img src={icon} alt="V-info" />
            </span>

            <input
               type="text"
               placeholder="Enter VIN number"
               value={vinInput}
               onChange={handleChange}
            />
            {inputErrorMsg ? (
               <span className="input_error">{inputErrorMsg}</span>
            ) : (
               ""
            )}
            <div className="button_div_flex">
               <button
                  onClick={
                     getVehicleInfoDatafromApi
                        ? getVehicleInfoDatafromApi
                        : getVehicleDerviceDatafromApi
                  }
               >
                  Get Details
               </button>
               <Link to={routePaths.hardwareInterface}>
                  <button>Back</button>
               </Link>
            </div>
         </div>
      </div>
   );
};

export default EnterVINnumber;
