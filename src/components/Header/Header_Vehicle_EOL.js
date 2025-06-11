/* eslint-disable indent */
import LogoutMark from "../../assets/images/logout-mark.png";
import { ReactComponent as USB } from "../../assets/images/usb-connector.svg";
import { ReactComponent as Network } from "../../assets/images/Connect.svg";
import Logo from "../../assets/images/bluebinaries.png";
import Connectivity from "components/Connectivity/Connectivity";
import ConfirmingPopup from "components/ConfirmingPopup/ConfirmingPopup";
import { isParameterShow } from "helpers";
const Header_Vehicle_EOL = ({
   data,
   SELECTED_TOOL_NAME,
   usbStatus,
   carDetails,
   stationName,
   Redirect,
   toggleLogoutConfirmModal,
   logoutConfirmOpen,
   handleLogoutConfirm,
   modalStyles,
   OrderNumber,
   netWorkStatus,
   isLoggedIn,
   showVehicleConnectionStatus,
   heading,
   location,
}) => {
   return (
      <div className="header hardware-header">
         <div className="header-vin-details">
            <ul>
               <li>
                  {data?.map((ele, i) => {
                     return (
                        <div key={i}>
                           {isParameterShow(SELECTED_TOOL_NAME, location) && (
                              //    location.pathname !== routePaths.solutionOffering &&
                              //       location.pathname !==
                              //          routePaths.hardwareInterface &&
                              //       location.pathname !== routePaths.VciConnective &&
                              //       location.pathname !==
                              //          routePaths.manufacturing
                              <span>Order : {OrderNumber}</span>
                           )}
                           {isParameterShow(SELECTED_TOOL_NAME, location) && (
                              //    location.pathname !== routePaths.solutionOffering &&
                              //       location.pathname !==
                              //          routePaths.hardwareInterface &&
                              //       location.pathname !== routePaths.VciConnective &&
                              //       location.pathname !==
                              //          routePaths.manufacturing
                              <li
                                 className={`header-vin-list ${
                                    !usbStatus
                                       ? "connectivity-success"
                                       : "connectivity-failed"
                                 }`}
                              >
                                 {usbStatus === null ? (
                                    <>
                                       <span className="mini-loader-header" />
                                       <span>Detecting VCI ...</span>
                                    </>
                                 ) : (
                                    <>
                                       {" "}
                                       <USB id="usb-status-icon" />
                                       <span name="usb-status">
                                          VCI{" "}
                                          {!usbStatus
                                             ? "Connected"
                                             : "Disconnected"}
                                       </span>
                                    </>
                                 )}
                              </li>
                           )}
                        </div>
                     );
                  })}
               </li>
               <li>
                  {data?.map((ele, i) => {
                     return (
                        <div key={i}>
                           {isParameterShow(SELECTED_TOOL_NAME, location) && (
                              //    location.pathname !== routePaths.solutionOffering &&
                              //       location.pathname !==
                              //          routePaths.hardwareInterface &&
                              //       location.pathname !== routePaths.VciConnective &&
                              //       location.pathname !==
                              //          routePaths.manufacturing
                              <>
                                 <span>VIN : {carDetails?.vehicleVIN}</span>
                              </>
                           )}
                        </div>
                     );
                  })}
                  {isParameterShow(SELECTED_TOOL_NAME, location) && (
                     //   location.pathname !== routePaths.solutionOffering &&
                     //      location.pathname !== routePaths.hardwareInterface &&
                     //      location.pathname !== routePaths.VciConnective &&
                     //      location.pathname !== routePaths.manufacturing
                     <li
                        className={`header-vin-list ${
                           netWorkStatus
                              ? "connectivity-success"
                              : "connectivity-failed"
                        }`}
                     >
                        <Network id="network-status-icon" />
                        <span name="network-status">
                           {netWorkStatus ? "Connected" : "Disconnected"} With
                           DataBase
                        </span>
                     </li>
                  )}
               </li>

               <Connectivity
                  isUserLoggedIn={isLoggedIn}
                  showVehicleConnectionStatus={showVehicleConnectionStatus}
               />
            </ul>
         </div>
         <div className="station-name">
            {isParameterShow(SELECTED_TOOL_NAME, location) && (
               // location.pathname !== routePaths.VciConnective &&
               //    location.pathname !== routePaths.solutionOffering &&
               //    location.pathname !== routePaths.hardwareInterface &&
               //    location.pathname !== routePaths.manufacturing
               <ul>
                  <li>
                     {stationName?.map((ele, i) => (
                        <>
                           <div className="station-name-sec" key={i}>
                              <span>Station Name</span> {":"}
                              <span>{ele.value}</span>
                           </div>
                           <div className="station-name-sec">
                              <span>Plant Name </span> {":"}{" "}
                              <span>{ele.id}</span>
                           </div>
                        </>
                     ))}
                  </li>
               </ul>
            )}
         </div>
         <div className="header-virtual">
            <h2>{heading}</h2>
         </div>
         <div className="logo-section">
            <div className="logo-section-img">
               <img
                  onClick={Redirect}
                  src={Logo}
                  alt="BlueBinaries"
                  title="BlueBinaries"
               />
            </div>

            <ConfirmingPopup
               modalStyles={modalStyles}
               toggleLogoutConfirmModal={toggleLogoutConfirmModal}
               logoutConfirmOpen={logoutConfirmOpen}
               handleLogoutConfirm={handleLogoutConfirm}
               icon={LogoutMark}
               title="Something is taking place in the background. Are you sure you want to exit?"
            />
         </div>
      </div>
   );
};

export default Header_Vehicle_EOL;
