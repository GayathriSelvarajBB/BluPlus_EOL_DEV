/* eslint-disable react/style-prop-object */
/* eslint-disable indent */
import { useEffect, useLayoutEffect } from "react";
import { useNavigate } from "react-router-dom";
import LoginBox from "pages/Login/LoginBox/LoginBox";
import CopyRights from "components/CopyRight/CopyRights";
// import LoginHeader from "pages/Login/LoginHeader";
import { getUserTokenData } from "storage/userTokenStorage";
import routePaths from "routes/routePaths";
import { addHours } from "date-fns";
import { userLoginSessionHours } from "appConfig";
import Map from "../../assets/images/map.png";

const Login = (props) => {
   const navigate = useNavigate();

   useEffect(() => {
      localStorage.setItem("carStatus", false);
   }, []);

   useLayoutEffect(() => {
      getUserTokenData().then((data) => {
         if (data && data?.loggedinTime) {
            // calculating the expiry time of the user session
            const estimatedExpiryTime = addHours(
               new Date(data.loggedinTime),
               userLoginSessionHours
            );
            const now = new Date();
            // navigating the user to connectivity page if the user logged in time is less than 8 hrs compared to cuurent time
            // estimatedExpiryTime > now && navigate(routePaths.hardwareInterface);
            estimatedExpiryTime > now && navigate(routePaths.solutionOffering);
         }
      });
      // eslint-disable-next-line react-hooks/exhaustive-deps
   }, []);

   const { BBLogo } = props;
   return (
      <div className="login-component">
         {/* <LoginHeader /> */}
         <div className="login-component-section">
            <img src={Map} alt="map" className="map" />
            <div className="login-box-img">
               <LoginBox />
            </div>
         </div>

         <CopyRights BBLogo={BBLogo} />
      </div>
   );
};
export default Login;
