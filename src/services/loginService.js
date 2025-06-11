import axios from "axios";
import { handleOfflineSavedItemResponse, responseErrorHandler } from "helpers";
import { getUserTokenData } from "storage/userTokenStorage";
import apiEndpoints from "./apiEndpoints";
import { cloudAuthRequestInstance } from "./request";
import { DESKTOP_REDIRECT_URI, WEB_REDIRECT_URI } from "envConfig";

/**
 * Service function for user Login
 * @param {string} authCode - Auth code got from Microsoft AD Login page(Popup)
 * @returns {Promise}
 */
export const loginUser = (authCode, desktop) => {
   return axios
      .post(apiEndpoints.login, {
         authCode,
         platform: desktop,
         redirectDesk: DESKTOP_REDIRECT_URI,
         // redirectWeb: "http://localhost:3000/#/solution-offering",
         // redirectWeb: "http://localhost:3000/#/login",
         redirectWeb: WEB_REDIRECT_URI,
      })
      .catch(responseErrorHandler);
};

/**
 * Service function for user Logout
 * @param {object} body - request body
 * @param {number} offlineDataId
 * @returns {Promise}
 */
export const logoutUser = async (body, offlineDataId) => {
   return cloudAuthRequestInstance
      .post(apiEndpoints.logout, body)
      .then(handleOfflineSavedItemResponse(offlineDataId))
      .catch((err) => {
         return err.response;
      });
};

export const extendLoginExpiryTime = async () => {
   const { username } = await getUserTokenData();
   return cloudAuthRequestInstance
      .post(apiEndpoints.extendLoginExpiryTime, {
         userName: username,
      })
      .catch((err) => {
         return err.response;
      });
};
