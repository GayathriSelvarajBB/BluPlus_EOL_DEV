/* eslint-disable indent */

import routePaths from "routes/routePaths";
import { useEffect, useLayoutEffect, useState } from "react";
import { getUserTokenData } from "storage/userTokenStorage";
import { addHours } from "date-fns";
import { userLoginSessionHours } from "appConfig";
import { toast } from "react-toastify";
import { isLogoutTimeoutAdded } from "app_constants/globalRefs";
import { setLogoutTimeout } from "redux/sessionTimeout.slice";
import { userLogoutTimeoutCallback } from "helpers/globalTimeoutCallbacks";
import { Navigate, Outlet, useLocation, useNavigate } from "react-router-dom";
import FullpageLoader from "components/FullpageLoader";
import { Vehicle } from "./data";
import { useSelector } from "react-redux";
import { REACT_APP_URL } from "envConfig";
import PopupModal from "components/popupmodel/PopupModal";
import {
   getDashboardParametersVehicleModel,
   getDashboardParametersVehicleName,
   getDashboardParametersVehicleSpeed,
   getDashboardParametersVehicleVIN,
   getDashboardParametersVehicleVoltage,
} from "socket/socketEmitters";
import Header_Vehicle_EOL from "./Header_Vehicle_EOL";
import Header_Common from "./Header_Common";
import { List_Of_Tool, SELECTED_TOOL } from "app_constants/listOfTools";
import Header_Manufacturing from "./Header_Manufacturing";

const Header = ({ redirectTo = routePaths.login }) => {
   const [isLoggedIn, setIsLoggedIn] = useState(true);
   const [showVehicleConnectionStatus, setShowVehicleConnectionStatus] =
      useState(false);
   // const EOLHeader = JSON.parse(localStorage.getItem("eolSession"));
   const SELECTED_TOOL_NAME = JSON.parse(localStorage.getItem(SELECTED_TOOL));
   const [heading, setHeading] = useState("MANUFACTURING SOLUTIONS");
   const [vciStatus, setVciStauts] = useState(null);
   const [netWorkStatus, setNetworkStauts] = useState(navigator.onLine);
   const selector = useSelector((state) => state?.vciStatusSlice);
   const carDetails = useSelector((state) => state?.carDetails);
   const stationName = useSelector((state) => state?.UpadateStationName);

   const usbStatus = selector;

   useEffect(() => {
      if (
         usbStatus &&
         usbStatus !== null &&
         window.location.href !== `${REACT_APP_URL}/hardware-interface`
      ) {
         console.log("VCI connected");
      }
   }, [usbStatus]);

   useEffect(() => {
      // if (statuss === "open") {
      let locstatus = JSON.parse(localStorage.getItem("vciStatus"));
      if (locstatus === "open") {
         setVciStauts(true);
      }
   }, [vciStatus]);

   // const { id } = useParams();
   const batteryMin = 10;
   const batteryMax = 14;
   const batteryRandomValue =
      Math.random(0) * (batteryMax - batteryMin) + batteryMin;
   const location = useLocation();
   const [data, setData] = useState([]);
   const [random, setRandom] = useState(batteryRandomValue);
   // const [rand, setRand] = useState(0);

   // let minn = 20;
   // let maxx = 35;
   console.log(random);
   useEffect(() => {
      if (location.pathname !== routePaths.solutionOffering) {
         const ChangeHeading = JSON.parse(localStorage.getItem("Heading"));
         setHeading(ChangeHeading);
         console.log("ChangeHeading", ChangeHeading);
      } else {
         setHeading("MANUFACTURING SOLUTIONS");
      }
   }, [heading, location.pathname]);

   // const tyreRandomValue = Math.floor(Math.random(0) * (maxx - minn)) + minn;
   useEffect(() => {
      setRandom(batteryRandomValue);
      // setRand(tyreRandomValue);
      setData(Vehicle);
      setInterval(() => {
         setNetworkStauts(navigator.onLine);
      }, 100);
      // setBatteryValue(13.6);
   }, []);

   useLayoutEffect(() => {
      getUserTokenData().then((data) => {
         if (data?.loggedinTime) {
            // calculating the expiry time of the user session
            const estimatedExpiryTime = addHours(
               new Date(data.loggedinTime),
               userLoginSessionHours
            );
            const now = new Date();
            // updating isLoggedIn state based on whether the user logged in time is before 8 hrs or not
            const isActive = estimatedExpiryTime > now;
            setIsLoggedIn(isActive);
            if (!isActive) {
               toast.error("User session timeout, Please login again");
            } else {
               if (!isLogoutTimeoutAdded.current) {
                  setLogoutTimeout({
                     loggedinTime: data.loggedinTime,
                     callback: userLogoutTimeoutCallback,
                  });
               }
            }
         } else setIsLoggedIn(false);
      });
   }, []);

   useLayoutEffect(() => {
      if (location.pathname === routePaths.hardwareInterface) {
         setShowVehicleConnectionStatus(false);
      } else {
         !showVehicleConnectionStatus && setShowVehicleConnectionStatus(true);
      }
      // eslint-disable-next-line react-hooks/exhaustive-deps
   }, [location]);
   useEffect(() => {
      getDashboardParametersVehicleName();
      getDashboardParametersVehicleModel();
      getDashboardParametersVehicleVIN();
      getDashboardParametersVehicleSpeed();
      getDashboardParametersVehicleVoltage();
   }, [selector]);
   //========================================
   const [logoutConfirmOpen, setLogoutConfirmOpen] = useState();
   const history = useNavigate();

   const modalStyles = {
      overlay: {
         backgroundColor: "rgba(0,0,0,0.6)",
         zIndex: 999,
      },
      content: {
         top: "50%",
         left: "50%",
         right: "auto",
         bottom: "auto",
         marginRight: "-50%",
         transform: "translate(-50%, -50%)",
         borderRadius: "10px",
      },
   };

   const toggleLogoutConfirmModal = () => {
      setLogoutConfirmOpen((val) => !val);
   };
   const handleLogoutConfirm = () => {
      setLogoutConfirmOpen((val) => !val);
      localStorage.removeItem("sidebarMenuName");
      localStorage.removeItem("scanEcuList");
      history(routePaths.solutionOffering);
   };
   const OrderNumber = useSelector(
      (state) => state?.OrderInputValue?.inputValue
   );
   const Redirect = () => {
      history(routePaths.solutionOffering);
   };
   //========================================
   const Logged2 = true;
   switch (Logged2) {
      case true:
         return (
            <div className="inner-component">
               {(SELECTED_TOOL_NAME === null ||
                  SELECTED_TOOL_NAME === List_Of_Tool?.COMPONENTS_FLASHING ||
                  SELECTED_TOOL_NAME === List_Of_Tool?.TEST_BENCH) &&
                  location.pathname !== routePaths.solutionOffering &&
                  location.pathname !== routePaths.hardwareInterface &&
                  location.pathname !== routePaths.VciConnective && (
                     <PopupModal usbStatus={usbStatus} />
                  )}

               <>
                  {/* {!EOLHeader ? ( */}
                  {/* {SELECTED_TOOL_NAME === null ||
                  SELECTED_TOOL_NAME === List_Of_Tool?.COMPONENTS_FLASHING ||
                  SELECTED_TOOL_NAME === List_Of_Tool?.TEST_BENCH ? (
                     <Header_Common
                        data={data}
                        location={location}
                        usbStatus={usbStatus}
                        carDetails={carDetails}
                        Redirect={Redirect}
                        toggleLogoutConfirmModal={toggleLogoutConfirmModal}
                        logoutConfirmOpen={logoutConfirmOpen}
                        handleLogoutConfirm={handleLogoutConfirm}
                        modalStyles={modalStyles}
                        netWorkStatus={netWorkStatus}
                        isLoggedIn={isLoggedIn}
                        showVehicleConnectionStatus={
                           showVehicleConnectionStatus
                        }
                        heading={heading}
                        SELECTED_TOOL_NAME={SELECTED_TOOL_NAME}
                        // EOLHeader={EOLHeader}
                     />
                  ) : (
                     <Header_Vehicle_EOL
                        data={data}
                        SELECTED_TOOL_NAME={SELECTED_TOOL_NAME}
                        location={location}
                        usbStatus={usbStatus}
                        carDetails={carDetails}
                        stationName={stationName}
                        Redirect={Redirect}
                        toggleLogoutConfirmModal={toggleLogoutConfirmModal}
                        logoutConfirmOpen={logoutConfirmOpen}
                        handleLogoutConfirm={handleLogoutConfirm}
                        modalStyles={modalStyles}
                        OrderNumber={OrderNumber}
                        netWorkStatus={netWorkStatus}
                        isLoggedIn={isLoggedIn}
                        showVehicleConnectionStatus={
                           showVehicleConnectionStatus
                        }
                        heading={heading}
                     />
                  )} */}
                  {(SELECTED_TOOL_NAME === null ||
                     SELECTED_TOOL_NAME === List_Of_Tool?.COMPONENTS_FLASHING ||
                     SELECTED_TOOL_NAME === List_Of_Tool?.TEST_BENCH) && (
                     <Header_Common
                        data={data}
                        location={location}
                        usbStatus={usbStatus}
                        carDetails={carDetails}
                        Redirect={Redirect}
                        toggleLogoutConfirmModal={toggleLogoutConfirmModal}
                        logoutConfirmOpen={logoutConfirmOpen}
                        handleLogoutConfirm={handleLogoutConfirm}
                        modalStyles={modalStyles}
                        netWorkStatus={netWorkStatus}
                        isLoggedIn={isLoggedIn}
                        showVehicleConnectionStatus={
                           showVehicleConnectionStatus
                        }
                        heading={heading}
                        SELECTED_TOOL_NAME={SELECTED_TOOL_NAME}
                     />
                  )}
                  {SELECTED_TOOL_NAME === List_Of_Tool?.VEHICLE_EOL && (
                     <Header_Vehicle_EOL
                        data={data}
                        SELECTED_TOOL_NAME={SELECTED_TOOL_NAME}
                        location={location}
                        usbStatus={usbStatus}
                        carDetails={carDetails}
                        stationName={stationName}
                        Redirect={Redirect}
                        toggleLogoutConfirmModal={toggleLogoutConfirmModal}
                        logoutConfirmOpen={logoutConfirmOpen}
                        handleLogoutConfirm={handleLogoutConfirm}
                        modalStyles={modalStyles}
                        OrderNumber={OrderNumber}
                        netWorkStatus={netWorkStatus}
                        isLoggedIn={isLoggedIn}
                        showVehicleConnectionStatus={
                           showVehicleConnectionStatus
                        }
                        heading={heading}
                     />
                  )}
                  {SELECTED_TOOL_NAME ===
                     List_Of_Tool?.MANUFACTURING_STATION && (
                     <Header_Manufacturing
                        data={data}
                        SELECTED_TOOL_NAME={SELECTED_TOOL_NAME}
                        location={location}
                        usbStatus={usbStatus}
                        carDetails={carDetails}
                        stationName={stationName}
                        Redirect={Redirect}
                        toggleLogoutConfirmModal={toggleLogoutConfirmModal}
                        logoutConfirmOpen={logoutConfirmOpen}
                        handleLogoutConfirm={handleLogoutConfirm}
                        modalStyles={modalStyles}
                        OrderNumber={OrderNumber}
                        netWorkStatus={netWorkStatus}
                        isLoggedIn={isLoggedIn}
                        showVehicleConnectionStatus={
                           showVehicleConnectionStatus
                        }
                        heading={heading}
                     />
                  )}
               </>
               <Outlet />
            </div>
         );
      case false:
         return <Navigate to={redirectTo} />;
      default:
         return <FullpageLoader />;
   }
};

export default Header;
