import brandLogo from "../../assets/images/bluebinaries.png";
import afterMarketImg from "../../assets/images/background/bgAfterMarket.png";
import afterEngg from "../../assets/images/background/bgEngg.png";
import afterSales from "../../assets/images/background/bgAfterSales.png";
import afterBgManufacture from "../../assets/images/background/bgManufacture.png";
import microsoftIcon from "../../assets/images/microsoft.png";
import googleIcon from "../../assets/images/google.png";
import { useNavigate } from "react-router-dom";
import routePaths from "../../routes/routePaths";
import { useEffect, useState } from "react";
import { loginUser } from "../../services/loginService";
import { setUserTokenData } from "../../storage/userTokenStorage";
import {
   MFA_OAUTH_AUTHORIZE_ENDPOINT,
   MFA_CLIENT_ID,
   OAUTH_WEB_REDIRECT_URI,
} from "../../envConfig";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { userLogoutTimeoutCallback } from "helpers/globalTimeoutCallbacks";
import { setLogoutTimeout } from "redux/sessionTimeout.slice";
import { triggerOfflineSyncData } from "helpers/offlineDataSync";

const Homepage = () => {
   const [activeFeature, setActiveFeature] = useState("manufacturing");
   const [loginLoading, setLoginLoading] = useState(false);

   const imgShow = {
      engineering: afterEngg,
      aftermarket: afterMarketImg,
      aftersales: afterSales,
      manufacturing: afterBgManufacture,
   };
   const featureName = {
      engineering: "ENGINEERING",
      aftermarket: "AFTER MARKET",
      aftersales: "AFTER SALES",
      manufacturing: "MANUFACTURING",
   };

   const navigate = useNavigate();
   const dispatch = useDispatch();

   const scopes = "user.read";
   const responseType = "code";
   const queryParameters = new URLSearchParams(window.location.search);
   const code = queryParameters.get("code");

   //web login
   useEffect(() => {
      if (code != null) {
         loginUser(code)
            .then((res) => {
               localStorage.removeItem("access");
               setLoginLoading(false);

               if (res?.data?.status === 200) {
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
                  setTimeout(() => {
                     navigate(routePaths.solutionOffering);
                  }, 600);
                  triggerOfflineSyncData();
               }
               //  else {
               //    toast.warning(
               //       "Something went wrong. Please check connection"
               //    );
               // }
            })
            .catch((err) => {
               console.log("Error", err);
               toast.warning("Internal server error");
            });
      }
   }, []);

   const openUrl = () => {
      window.location.href = `${MFA_OAUTH_AUTHORIZE_ENDPOINT}?client_id=${MFA_CLIENT_ID}&scope=${scopes}&response_type=${responseType}&prompt=select_account&redirect_uri=${OAUTH_WEB_REDIRECT_URI}`;
      localStorage.setItem("access", JSON.stringify(true));
      setLoginLoading(true);
   };

   const handleActiveClick = (e) => {
      setActiveFeature(e.currentTarget.getAttribute("data-attribute"));
      let featureName = e.currentTarget.getAttribute("data-attribute");
      if (featureName === "aftersales") {
         window.location.href =
            "http://192.168.1.179:32441/dtd-new-login/#/home";
         // "https://apiservicediagnostics.bluebinaries.com/login/#/home";
         // "http://localhost:3001/#/home";
      }
   };

   //mini loader-after click
   useEffect(() => {
      let access = JSON.parse(localStorage.getItem("access"));
      if (access === true) {
         setLoginLoading(true);
      } else {
         setLoginLoading(false);
      }
   }, []);

   //onprem login
   const handleOnpremLogin = () => {
      setLoginLoading(true);

      setTimeout(() => {
         navigate(routePaths.solutionOffering);
         setLoginLoading(false);
         toast.success("Logged in successfully");
      }, 1000);
   };

   return (
      <div className="inner-Homepage">
         <div className="homepage_header">
            <img src={brandLogo} alt="" />
         </div>

         <div className="home_body">
            <div className="content-home">
               <h1>
                  <span>{featureName[activeFeature]}</span>
               </h1>
               <p>
                  Next-gen diagnostic solutions that brings failure prediction,
                  fault tracing, smart resolution and a quick up-time to your
                  fingertips.
               </p>
               <button onClick={openUrl}>
                  <img src={microsoftIcon} alt="microsoft" /> Login With
                  Microsoft
                  {/*{loginLoading ? <span className="mini-loader"></span> : null}*/}
               </button>
               <button onClick={handleOnpremLogin}>
                  <img src={googleIcon} alt="google" />
                  Login With Google
                  {loginLoading ? <span className="mini-loader"></span> : null}
               </button>
            </div>
            <div className="content-img">
               <img src={imgShow[activeFeature]} alt="aftersales" />
            </div>
         </div>

         <div className="home_feature">
            <span
               className={`${
                  activeFeature === "engineering" ? "active-feature" : ""
               }`}
               // onClick={handleActiveClick}
               data-attribute="engineering"
            >
               ENGINEERING
            </span>
            <span
               className={`${
                  activeFeature === "manufacturing" ? "active-feature" : ""
               }`}
               onClick={handleActiveClick}
               data-attribute="manufacturing"
            >
               MANUFACTURING
            </span>
            <span
               className={`${
                  activeFeature === "aftersales" ? "active-feature" : ""
               }`}
               onClick={handleActiveClick}
               data-attribute="aftersales"
            >
               AFTER SALES
            </span>
            <span
               className={`${
                  activeFeature === "aftermarket" ? "active-feature" : ""
               }`}
               // onClick={handleActiveClick}
               data-attribute="aftermarket"
            >
               AFTER MARKET
            </span>
         </div>
      </div>
   );
};

export default Homepage;
