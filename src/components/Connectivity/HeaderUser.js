/* eslint-disable jsx-a11y/no-noninteractive-tabindex */
/* eslint-disable indent */

import { useState, useEffect } from "react";
import UserProfile from "assets/images/login-logo.png";
import Logout from "assets/images/logout.png";
// import vInfo from "assets/images/wheel.png";
import LogoutMark from "assets/images/logout-mark.png";
import { useNavigate } from "react-router-dom";
import routePaths from "routes/routePaths";
import { toast } from "react-toastify";
import { logoutUserAndClearData } from "helpers";
import { getUserTokenData } from "storage/userTokenStorage";
// import Logo from "assets/images/v_info.png";
import { useLocation } from "react-router-dom";
// import { useDispatch } from "react-redux";
// import { getFreezeAll } from "redux/freezeSlice";
// import { ReactComponent as Vinfo } from "../../assets/images/Car-info.svg";
// import { ReactComponent as ServiceHistory } from "../../assets/images/SH.svg";
import ConfirmingPopup from "components/ConfirmingPopup/ConfirmingPopup";
import homeIcon from "../../assets/images/home2.png";
import { useSelector } from "react-redux";

// Basic styles for the Modal component
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

const HeaderUser = () => {
   const [logoutConfirmOpen, setLogoutConfirmOpen] = useState();
   const [homePageOpen, setHomePageOpen] = useState();
   const [userInfo, setUserInfo] = useState({
      email: "",
      role: "",
   });
   const freezeAll = useSelector((state) => state.freezeSlice);

   useEffect(() => {
      getUserTokenData().then((res) => {
         setUserInfo({
            email: res?.username,
            role: res?.roleName,
         });
      });
   }, []);

   const navigate = useNavigate();
   // const dispatch = useDispatch();
   const location = useLocation();

   const toggleLogoutConfirmModal = () => {
      // localStorage.removeItem("scanEcuList");
      localStorage.removeItem("access");
      setLogoutConfirmOpen((val) => !val);
   };

   const handleLogoutConfirm = () => {
      logoutUserAndClearData().then((res) => {
         toast.success("Logged out successfully");
         navigate(routePaths.Homepage);
         localStorage.removeItem("access_token");
         localStorage.removeItem("scanEcuList");
         localStorage.removeItem("ecusFaulty");
         localStorage.removeItem("sidebarMenuName");
         localStorage.removeItem("access");
      });
   };
   // const onclickGoToV_InfoPage = () => {
   //    document.getElementById("user-profile-iconn").removeAttribute("tabindex");
   //    document.getElementById("user-profile-iconn").tabIndex = "0";

   //    navigate(routePaths.vehicleDetails);
   // };
   // const onclickGoToV_servicePage = () => {
   //    document.getElementById("user-profile-iconn").removeAttribute("tabindex");
   //    document.getElementById("user-profile-iconn").tabIndex = "0";

   //    navigate(routePaths.serviceHistoryCopy);
   // };
   // const handleAddTabIndex = () => {
   //    document.getElementById("user-profile-iconn").tabIndex = "0";
   // };

   //handleClickHomeIcon
   const handleClickHomeIcon = () => {
      localStorage.setItem("eolSession",JSON.stringify(false))
      setHomePageOpen((val) => !val);
   };
   //handleClickNavigate to home/solution offering page
   const handleNavigateConfirm = () => {
      setHomePageOpen((val) => !val);
      localStorage.removeItem("sidebarMenuName");
      localStorage.removeItem("scanEcuList");
      navigate(routePaths.solutionOffering);
      window.location.reload()
   };

   return (
      <>
         {/* {location.pathname === routePaths.hardwareInterface ||
         location.pathname === routePaths.serviceHistoryCopy ||
         location.pathname === routePaths.vehicleDetails ? (
            <div className="user-icon" id="user-profile-iconn" tabIndex="0">
               <img
                  src={Logo}
                  alt="User Profile"
                  className="v_info_img"
                  onClick={handleAddTabIndex}
               />
               <ul className="drop_down_option">
                  <li id="logout-button" onClick={onclickGoToV_InfoPage}>
                     <Vinfo className="icon" />
                     <span>Vehicle Info</span>
                  </li>
                  <li id="logout-button" onClick={onclickGoToV_servicePage}>
                     <ServiceHistory className="icon" />
                     <span>Service History</span>
                  </li>
               </ul>
            </div>
         ) : null} */}
         {/* logout icon */}
         <div className="user-icon" id="user-profile-icon" tabIndex="0">
            <img src={UserProfile} alt="User Profile" id="user-img" />
            <ul>
               <div className="user-details-manage">
                  <img
                     src={UserProfile}
                     alt="User Profile"
                     name="User Profile"
                  />
                  <div className="user-profile-details">
                     <span title={userInfo.email} name="userInfo-email">
                        {userInfo.email}
                     </span>
                     <span>{userInfo.role}</span>
                  </div>
               </div>
               <li id="logout-button" onClick={toggleLogoutConfirmModal}>
                  <img src={Logout} alt="logout" />
                  <span id="logout">Logout</span>
               </li>
            </ul>
         </div>

         {/* homepage/ solution offering page */}
         {location.pathname !== routePaths.solutionOffering && location.pathname !== routePaths.createCampangin ? (
            <div
               className={"home_icon_div"}
               onClick={
                  freezeAll && location.pathname !== routePaths.solutionOffering
                     ? handleClickHomeIcon
                     : null
               }
            >
               <img src={homeIcon} alt="home-icon" />
            </div>
         ) : null}

         {/* Modal for logout confirmation */}
         <ConfirmingPopup
            modalStyles={modalStyles}
            toggleLogoutConfirmModal={toggleLogoutConfirmModal}
            logoutConfirmOpen={logoutConfirmOpen}
            handleLogoutConfirm={handleLogoutConfirm}
            icon={LogoutMark}
            title="Are you sure you want to logout?"
         />
         {/* Modal for navigate to home/solution offering page confirmation */}
         <ConfirmingPopup
            modalStyles={modalStyles}
            toggleLogoutConfirmModal={handleClickHomeIcon}
            logoutConfirmOpen={homePageOpen}
            handleLogoutConfirm={handleNavigateConfirm}
            icon={LogoutMark}
            // title="Are you sure you want to exit?"
            title="Something is taking place in the background. Are you sure you want to exit?"
         />
      </>
      
   );
};

export default HeaderUser;
