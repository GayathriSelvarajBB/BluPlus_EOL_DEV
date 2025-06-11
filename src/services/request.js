import axios from "axios";
import { getUserTokenData, setUserTokenData } from "storage/userTokenStorage";
import apiEndpoints from "services/apiEndpoints";
import {
   cloudUserSessionTimeoutHandler,
   logoutUserAndNavigetToLogin,
} from "helpers";
import { getLocalAuthData } from "storage/localAuthStorage";

/**
 * Axios Request instance for local Java API after vin connected and verified
 */
const localAuthRequestInstance = axios.create();

/**
 * interceptor middleware for local Java API requests to add vin connection token in header
 */
localAuthRequestInstance.interceptors.request.use(async function (config) {
   try {
      const localAuthData = await getLocalAuthData();
      const token = localAuthData.Token;

      config.headers["Token"] = token;
   } catch (err) {
      console.log("Error thrown while sending request", err);
   }
   return config;
});

/**
 * Axios Request instance for cloud Java API after user loggedin
 */
const cloudAuthRequestInstance = axios.create();

/**
 * interceptor middleware for cloud Java API requests to add Auth token in header
 */
cloudAuthRequestInstance.interceptors.request.use(async function (config) {
   try {
      const { access_token } = (await getUserTokenData()) || {};
      if (access_token) {
         config.headers.Authorization = `Bearer ${access_token}`;
      }
   } catch (err) {
      console.log("Error thrown while sending request", err);
   }
   return config;
});

/**
 * interceptor middleware for cloud Java API responses to validate unAuthorized status code and redirect to login page
 */
cloudAuthRequestInstance.interceptors.response.use(
   null,
   async function (error) {
      try {
         if (error.response?.status === 401 && !error.config?.__isRetrying) {
            const { refresh_token, username } =
               (await getUserTokenData()) || {};
            if (refresh_token && username) {
               const newToken = await axios.post(apiEndpoints.refreshToken, {
                  refreshToken: refresh_token,
                  username,
               }
               
               );

               if (newToken?.data?.data?.access_token) {
                  await setUserTokenData({
                     ...newToken.data.data,
                     username,
                  });
                  error.config.__isRetrying = true;
                  return cloudAuthRequestInstance(error.config);
               } else if (newToken?.data?.status === 401) {
                  await cloudUserSessionTimeoutHandler(error);
                  return;
               }
            } else {
               logoutUserAndNavigetToLogin();
            }
         }
         return Promise.reject(error);
      } catch (err) {
         console.log("Error thrown while receiving response", err);
         return Promise.reject(error);
      }
   }
);

export { localAuthRequestInstance, cloudAuthRequestInstance };
