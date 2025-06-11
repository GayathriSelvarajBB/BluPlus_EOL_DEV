/* eslint-disable indent */
import LogoutMark from "../../assets/images/logout-mark.png";
import { ReactComponent as USB } from "../../assets/images/usb-connector.svg";
import { ReactComponent as Network } from "../../assets/images/Connect.svg";
import Logo from "../../assets/images/bluebinaries.png";
import Connectivity from "components/Connectivity/Connectivity";
import ConfirmingPopup from "components/ConfirmingPopup/ConfirmingPopup";
// import routePaths from "routes/routePaths";
import { isParameterShow } from "helpers";

const Header_Common = ({
   data,
   usbStatus,
   carDetails,
   Redirect,
   toggleLogoutConfirmModal,
   logoutConfirmOpen,
   handleLogoutConfirm,
   modalStyles,
   netWorkStatus,
   isLoggedIn,
   showVehicleConnectionStatus,
   heading,
   location,
   SELECTED_TOOL_NAME,
   //    EOLHeader,
}) => {
   return (
      <div className="header hardware-header">
         <div className="header-vin-details">
            <ul>
               <li>
                  {data?.map((ele, i) => {
                     return (
                        <div key={i}>
                           {/* {isParameterShow(EOLHeader, location) && ( */}

                           {isParameterShow(SELECTED_TOOL_NAME, location) && (
                              <span>
                                 Vehicle :{" "}
                                 {!usbStatus ? carDetails?.vehicleName : "N/A"}
                              </span>
                           )}
                           {isParameterShow(SELECTED_TOOL_NAME, location) && (
                              // location.pathname !== routePaths.solutionOffering &&
                              //    location.pathname !==
                              //       routePaths.hardwareInterface &&
                              //    location.pathname !==
                              //       routePaths.VciConnective
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
                           {/* {isParameterShow(EOLHeader, location) && ( */}
                           {isParameterShow(SELECTED_TOOL_NAME, location) && (
                              // !EOLHeader &&
                              //    location.pathname !==
                              //       routePaths.solutionOffering &&
                              //    location.pathname !==
                              //       routePaths.hardwareInterface &&
                              //    location.pathname !==
                              //       routePaths.VciConnective
                              <>
                                 <span>
                                    Model :{" "}
                                    {!usbStatus
                                       ? carDetails?.vehicleModel
                                       : "N/A"}
                                 </span>
                                 <span>
                                    VIN :{" "}
                                    {!usbStatus
                                       ? carDetails?.vehicleVIN
                                       : "N/A"}
                                 </span>
                              </>
                           )}
                        </div>
                     );
                  })}
                  {isParameterShow(SELECTED_TOOL_NAME, location) && (
                     // location.pathname !== routePaths.solutionOffering &&
                     //    location.pathname !== routePaths.hardwareInterface &&
                     //    location.pathname !== routePaths.VciConnective

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
         <div className="header-virtual">
            <h2>{heading}</h2>
         </div>
         <div className="logo-sec">
            <div className="logo-sec-img">
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
               // title="Are you sure you want to exit?"
               title="Something is taking place in the background. Are you sure you want to exit?"
            />
         </div>
      </div>
   );
};

export default Header_Common;
