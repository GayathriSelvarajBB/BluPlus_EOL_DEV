import VehicleConnection from "assets/images/car-insurance.png";
import Ignition from "assets/images/ignition.png";
import LinkmIage from "assets/images/url.png";
import Wifi from "assets/images/wifi.png";

export const HardwareInterfacePopup = ({
   isloading,
   onClosePopup,
   onRetryVinDetection,
   detected,
}) => {
   return (
      <div
         className="hardware-inteface-popup"
         data-testid="hardware-inteface-popup"
      >
         <div className="hardware-interface-content">
            {isloading ? (
               <div className="popup-loader">
                  <svg
                     xmlns="http://www.w3.org/2000/svg"
                     width="16"
                     height="16"
                     fill="currentColor"
                     className="bi bi-arrow-clockwise"
                     viewBox="0 0 16 16"
                  >
                     <path
                        fillRule="evenodd"
                        d="M8 3a5 5 0 1 0 4.546 2.914.5.5 0 0 1 .908-.417A6 6 0 1 1 8 2v1z"
                     />
                     <path d="M8 4.466V.534a.25.25 0 0 1 .41-.192l2.36 1.966c.12.1.12.284 0 .384L8.41 4.658A.25.25 0 0 1 8 4.466z" />
                  </svg>
                  <p>
                     {!detected
                        ? "Establishing Connection"
                        : "Connecting with Vehicle..."}
                  </p>
                
               </div>
            ) : (
               <>
                  <div className="error-message" style={{ display: "none" }}>
                     <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        className="bi bi-x-circle-fill"
                        viewBox="0 0 16 16"
                     >
                        <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293 5.354 4.646z" />
                     </svg>
                     <h4>Error In Connection To Vehicle</h4>
                  </div>
                  <p>Please check the following steps</p>
                  <ul>
                     <li>
                        <img src={Ignition} alt="Ignition" />
                        <span>Check if Ignition ON</span>
                     </li>
                     <li>
                        <img src={LinkmIage} alt="LinkImage" />
                        <span>
                           Check if connection is still intact through USB
                        </span>
                     </li>
                     <li>
                        <img src={Wifi} alt="Wifi" />
                        <span>
                           Or an Active connection through Bluetooth / Wifi
                        </span>
                     </li>
                     <li>
                        <img src={VehicleConnection} alt="VehicleConnection" />
                        <span>Check if OBD cable is connected</span>
                     </li>
                  </ul>
                  <div className="button-hardware">
                     <button
                        data-testid="retry-loader-button"
                        onClick={onRetryVinDetection}
                     >
                        Retry
                     </button>
                   
                  </div>
               </>
            )}
         </div>
      </div>
   );
};

export default HardwareInterfacePopup;
