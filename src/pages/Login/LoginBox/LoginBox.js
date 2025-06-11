/* eslint-disable react/style-prop-object */
/* eslint-disable indent */
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { loginUser } from "services/loginService";
import routePaths from "routes/routePaths";
import { toast } from "react-toastify";
import {   setUserTokenData } from "storage/userTokenStorage";
import { triggerOfflineSyncData } from "helpers/offlineDataSync";
import OutlookLogo from "assets/images/outlook-logo.png";
import { setLogoutTimeout } from "redux/sessionTimeout.slice";
import { useDispatch } from "react-redux";
import { userLogoutTimeoutCallback } from "helpers/globalTimeoutCallbacks";
import LoginImage from "assets/images/BlueBinaries_logo_login.png";
import IIIMoto from "assets/images/III.svg";
import GoogleLogo from "assets/images/Google-logo.webp";

import {
   MFA_OAUTH_AUTHORIZE_ENDPOINT,
   MFA_CLIENT_ID,
   OAUTH_WEB_REDIRECT_URI,
} from "envConfig";
import { NavLink } from "react-router-dom";
const LoginBox = () => {
   const [loginLoading, setLoginLoading] = useState(false);
   const navigate = useNavigate();
   let nAgt = navigator.userAgent;
   let platform = false;
   const dispatch = useDispatch();
   useEffect(() => {
      platform = nAgt.split(" ")[12]?.split("/")?.includes("Electron");
      console.log("platform", platform);
   }, [nAgt, platform]);

   const scopes = "user.read";
   const responseType = "code";
   const queryParameters = new URLSearchParams(window.location.search);
   const code = queryParameters.get("code");

   //checking user already logged in or not
   // useEffect(() => {
   //    getUserTokenData().then((data) => {
   //       if (data?.access_token) {
   //          navigate(routePaths.solutionOffering);
   //       }else{
   //          return
   //       }
   //    });
   // }, []);

   //web login
   // eslint-disable-next-line sonarjs/cognitive-complexity
   useEffect(() => {
      if (code != null) {
         setLoginLoading(true);

         loginUser(code, nAgt.split(" ")[12]?.split("/")?.includes("Electron"))
            .then((res) => {
               if (res?.status === 200) {
                  //Storing token in storage Note:web storage & electron storage diff
                  localStorage.setItem(
                     "access_token",
                     JSON.stringify(res?.data?.data?.access_token)
                  );
                  // Adding loggedinTime property to track the LoggedIn time of the user
                  const loggedinTime = new Date().toISOString();
                  setUserTokenData({
                     ...res.data.data,
                     loggedinTime,
                  });
                  // adding timeout to logout the user after session ends
                  dispatch(
                     setLogoutTimeout({
                        loggedinTime,
                        callback: userLogoutTimeoutCallback,
                     })
                  );
                  toast.success("Logged in successfully");
                  
                  // if(res?.data?.data?.username==="Yaswanth.Epi@bluebinaries.com")
                  // {
                  //    navigate(routePaths.createCampangin)
                  // }else{
                  navigate(routePaths.solutionOffering)
                  // }
                  triggerOfflineSyncData();
               } else if (
                  res.status === 400 &&
                  res?.data?.data?.access_token === ""
               ) {
                  toast.error(res?.data?.message);
               } else {
                  if (res?.data?.data?.access_token === "") {
                     toast.error("Something went wrong. Please try again.");
                  }
               }
               setLoginLoading(false);
            })
            .catch((err) => {
               console.log("Error", err);
            });
      }
   }, []);

   const openUrl = () => {
      console.log("web");
      window.location.href = `${MFA_OAUTH_AUTHORIZE_ENDPOINT}?client_id=${MFA_CLIENT_ID}&scope=${scopes}&response_type=${responseType}&prompt=select_account&redirect_uri=${OAUTH_WEB_REDIRECT_URI}`;
      localStorage.setItem("access", JSON.stringify(true));
   };

   // eslint-disable-next-line no-unused-vars

   //desktop login
   const initiateLogin = () => {
      if (navigator.onLine) {
         setLoginLoading(true);
         // Initiating Microsoft MFA login using popup window
         window.electronAPI
            .initiateLogin()
            .then((authCode) => {
               // eslint-disable-next-line no-debugger
               loginUser(
                  authCode,
                  nAgt.split(" ")[12]?.split("/")?.includes("Electron")
               ).then((res) => {
                  if (res.status === 200) {
                     //Storing token in storage Note:web storage & electron storage diff
                     localStorage.setItem(
                        "access_token",
                        JSON.stringify(res?.data?.data?.access_token)
                     );
                     // Adding loggedinTime property to track the LoggedIn time of the user
                     const loggedinTime = new Date().toISOString();
                     setUserTokenData({
                        ...res.data.data,
                        loggedinTime,
                     });
                     // adding timeout to logout the user after session ends
                     dispatch(
                        setLogoutTimeout({
                           loggedinTime,
                           callback: userLogoutTimeoutCallback,
                        })
                     );
                     toast.success("Logged in successfully");
                     navigate(routePaths.solutionOffering);
                     // navigate(routePaths.campanginManager);
                     triggerOfflineSyncData();
                  } else if (res.status === 400) {
                     toast.error(res.data.message);
                  } else {
                     toast.error("Something went wrong. Please try again.");
                  }
                  setLoginLoading(false);
               });
            })
            .catch(() => {
               // if the popup closed by the user then it will be handled here
               setLoginLoading(false);
            });
      } else {
         toast.error("No Internet connection");
      }
   };
   const Redirect=()=>{
      navigate(routePaths.solutionOffering)
   }
   return (
      <div className="login-container-box">
         <div className="moto">
            <img src={IIIMoto} alt="moto" />
         </div>
         <div className="login-img">
            <NavLink to={routePaths.Homepage}>
               <img src={LoginImage} alt="BlueBinaries" />
            </NavLink>
         </div>
         <div className="login-box">
            <div className="login-button-wrapper">
               {!loginLoading ? (
                  <div className="sign">
                     <button
                        id="login-button"
                        data-testid="login-button"
                        disabled={loginLoading}
                        title="Login With Microsoft"
                        onClick={
                           nAgt.split(" ")[12]?.split("/")?.includes("Electron")
                              ? initiateLogin
                              : openUrl
                        }
                     >
                        <img src={OutlookLogo} alt="outlook logo" />
                        <span className="ms-login">LOGIN WITH MICROSOFT</span>
                     </button>
                     <button
                        id="login-button"
                        data-testid="login-button"
                        disabled={loginLoading}
                        title="Login With Google "
                        // onClick={
                        //    nAgt.split(" ")[12]?.split("/")?.includes("Electron")
                        //       ? initiateLogin
                        //       : openUrl
                        // }
                        onClick={
                         Redirect
                        }
                     >
                        <img src={GoogleLogo} alt="outlook logo" />
                        <span className="ms-login">LOGIN WITH GOOGLE</span>
                     </button>
                  </div>
               ) : (
                  <div className="login-loader-wrapper">
                     <div
                        className="loader"
                        id="login-btn-loader"
                        data-testid="login-btn-loader"
                     />
                  </div>
               )}
            </div>
         </div>
      </div>
   );
};

export default LoginBox;
