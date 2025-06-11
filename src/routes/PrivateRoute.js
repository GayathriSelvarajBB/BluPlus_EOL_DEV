import { userLoginSessionHours } from "appConfig";
import { isLogoutTimeoutAdded } from "app_constants/globalRefs";
import FullpageLoader from "components/FullpageLoader";
import { addHours } from "date-fns";
import { userLogoutTimeoutCallback } from "helpers/globalTimeoutCallbacks";
import { useLayoutEffect, useState } from "react";
import { Navigate, Outlet} from "react-router-dom";
import { toast } from "react-toastify";
import { setLogoutTimeout } from "redux/sessionTimeout.slice";
import { getUserTokenData } from "storage/userTokenStorage";
import routePaths from "./routePaths";

const PrivateRoute = ({ redirectTo = routePaths.login }) => {
   const [isLoggedIn, setIsLoggedIn] = useState();

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

   switch (isLoggedIn) {
      case true:
         return <Outlet/>;
      case false:
         return <Navigate to={redirectTo} />;
      default:
         return <FullpageLoader />;
   }
};

export default PrivateRoute;
