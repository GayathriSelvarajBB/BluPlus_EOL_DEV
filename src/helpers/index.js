import { serviceNames } from "app_constants/serviceFunctionMap";
import { toast } from "react-toastify";
import { addHours } from "date-fns";
import { setActiveServiceSession } from "redux/activeServiceSession.slice";
import { setActiveVin } from "redux/activeVin.slice";
import store from "redux/store";
import { browserHistory } from "routes/browserHistory";
import routePaths from "routes/routePaths";
import { extendLoginExpiryTime, logoutUser } from "services/loginService";
import { pushServiceSessionToCloud } from "services/serviceSessionService";
import { clearActiveVinData } from "storage/Activevinstorage";
import { clearLocalAuthData } from "storage/localAuthStorage";
import {
   deleteOfflineDataWithId,
   setOfflineData,
} from "storage/offlineDataStorage";
import {
   deleteServiceSessionsDataWithId,
   getAllServiceSessionsData,
   setServiceSessionData,
} from "storage/serviceSessionStorage";
import { clearUserTokenData, getUserTokenData } from "storage/userTokenStorage";
import { clearVehicleConfigData } from "storage/vehicleConfigStorage";
import { clearVinData } from "storage/vinStorage";
import { updateOfflineSyncFailedCount } from "helpers/offlineDataSync";
import {
   addSessionTimeout,
   clearLogoutTimeout,
} from "redux/sessionTimeout.slice";
import { serviceSessionHours } from "appConfig";
import { serviceSessionTimeoutCallback } from "helpers/globalTimeoutCallbacks";
import { cloudAuthRequestInstance } from "services/request";
import { clearVciInfo } from "redux/vciInfo.slice";
import { clearManifestData } from "redux/manifestData.slice";
import { List_Of_Tool } from "app_constants/listOfTools";

/**
 * Helper function to open miscrosoft password reset page in default browser
 */
export const openResetpasswordPage = () => {
   try {
      window.electronAPI.openExternal(
         "https://passwordreset.microsoftonline.com/"
      );
   } catch {
      console.log("error opening external link");
   }
};

/**
 * Helper function to handle axios error and return the error response
 * @param {any} err Error object from axios
 */
export const responseErrorHandler = (err) => {
   return err.response;
};

/**
 * Helper function to clear the session data stored locally(IndexedDB & Redux)
 */
export const clearLocalSessionData = async () => {
   try {
      // clearing data from Local(IndexedDB)
      await clearUserTokenData();
      await clearLocalAuthData();
      await clearActiveVinData();
      await clearVinData();
      await clearVehicleConfigData();
      // Clearing data from redux store
      store.dispatch(setActiveServiceSession(null));
      store.dispatch(setActiveVin(null));
      store.dispatch(clearVciInfo());
      // Clearig the timeout for the loggedout use
      store.dispatch(clearLogoutTimeout());
      store.dispatch(clearManifestData());
      return true;
   } catch {
      return false;
   }
};

/**
 * Helper function to handle the response for offline Sync stored(applicable) API based on the status code returned by the axios response
 * @param {number} offlineDataId Offline item Id
 * @returns {(res: Response) => {}} returns a function that takes the actual axios response as parameter and update the offline data based on the status code
 */
export const handleOfflineSavedItemResponse =
   (offlineDataId) => async (res) => {
      if (res.status === 200) {
         // to delete the offline item from array
         await deleteOfflineDataWithId(offlineDataId);
      } else if (res.status !== 401) {
         // to update the delete count for the offline item
         updateOfflineSyncFailedCount(offlineDataId);
      }
      return res;
   };

/**
 * Helper function to logout the user and delete the local data
 * @returns {Promise}
 */
export const logoutUserAndClearData = async () => {
   const { username } = (await getUserTokenData()) || {};
   if (username) {
      const requestBody = {
         username,
      };
      if (!navigator.onLine) {
         requestBody.timestamp = new Date().toISOString();
      }
      return setOfflineData(serviceNames.LOGOUT_USER, [requestBody]).then(
         (ID) => {
            if (navigator.onLine) {
               return logoutUser(requestBody, ID)
                  .then(clearLocalSessionData)
                  .catch(() => true);
            } else return clearLocalSessionData();
         }
      );
   } else {
      return clearLocalSessionData();
   }
};

/**
 * Helper function to logout the user and clear data and navigate the user to Login Page and showing a toast message "User session timeout"
 */
export const logoutUserAndNavigetToLogin = () => {
   // logout the user and Clearing all the session data from local
   logoutUserAndClearData();
   // redirecting the user to login page
   browserHistory.push(routePaths.login);
   // showing toast message as session timeout
   toast.error("User session timeout");
};

/**
 * Helper function to update the end time and transfer mode for service session in Local (IndexedDB)
 * @returns {Promise}
 */
export const updateTheEndTimeAndTransferModeForSession = (
   sessionId,
   transferMode
) => {
   return getAllServiceSessionsData().then(async (res) => {
      if (res && Array.isArray(res)) {
         // updating the end time for active service session only
         const ind = res.findIndex(
            (item) => item.serviceSessionId === sessionId
         );
         if (ind > -1) {
            res[ind].transferMode = transferMode;
            if (!transferMode) {
               res[ind].endTime = new Date().toISOString();
            }
         }
         await setServiceSessionData(res);
         return res[ind] ? [res[ind]] : [];
      }
      return false;
   });
};

export const pushServiceSessionLogToServer = async (
   serviceSessionItem,
   offlineItemId,
   showToast = true
) => {
   // delete the PDX file folders for the expired sessions
   await window.electronAPI?.deleteVinRelatedFolderAndFiles(
      serviceSessionItem.vinNumber
   );
   if (navigator.onLine) {
      pushServiceSessionToCloud(serviceSessionItem, offlineItemId).then(
         (res) => {
            if (res.status !== 200 && showToast) {
               toast.error(
                  res.data?.message ||
                     "Failed to send service session Log to server"
               );
            } else if (res.status === 200 && showToast) {
               toast.success("Service session stored successfully");
            }
         }
      );
   }
};

/**
 *
 * @param {Number} serviceSessionId Service Session Id
 * @param {boolean} showToast whether or not to show the failure toast message
 * @returns {Promise}
 */
export const updateAndPushServiceSessionLogToCloud = (
   serviceSessionId,
   transferMode = false,
   showToast = true
) => {
   // updating the service session's endtime and transfer mode for the passes session-id in indexedDB
   return updateTheEndTimeAndTransferModeForSession(
      serviceSessionId,
      transferMode
   ).then(async (res) => {
      if (res && Array.isArray(res) && res.length) {
         // Showing No internet connect info toast
         if (!navigator.onLine && showToast) {
            toast.info(
               "Service session data will be stored locally and will be pushed to cloud once newtork is available"
            );
         }
         // looping through the service sessions array
         for (const serviceSessionItem of res) {
            // adding offline sync item for the service session item of the array
            const offlineItemId = await setOfflineData(
               serviceNames.PUSH_SERVICE_SESSIONS,
               [serviceSessionItem]
            );
            pushServiceSessionLogToServer(
               serviceSessionItem,
               offlineItemId,
               showToast
            );
            return true;
         }
      } else return false;
   });
};

/**
 * Helper function to check and update the expired service sessions and push to cloud and to set the timeout for incomplete service sessions
 * @returns {Promise}
 */
export const updateExpiredServiceSessions = () => {
   return getAllServiceSessionsData().then((res) => {
      if (Array.isArray(res)) {
         let currentDate = new Date();
         const expiredSessions = res.filter(
            (s) =>
               currentDate >=
               addHours(new Date(s.startTime), serviceSessionHours)
         );
         expiredSessions.forEach(async (s) => {
            // updating the endtime for the expired non-transferred sessions without endtime and push it to sync and delete from local after adding it on offline trigger
            if (!s.endTime && !s.transferMode) {
               s.endTime = addHours(
                  new Date(s.startTime),
                  serviceSessionHours
               ).toISOString();
               const offlineItemId = await setOfflineData(
                  serviceNames.PUSH_SERVICE_SESSIONS,
                  [s]
               );
               // Deleting the Session from local
               await deleteServiceSessionsDataWithId(s.serviceSessionId);
               pushServiceSessionLogToServer(s, offlineItemId, false);
            } else {
               // Deleting the Session from local if already session completed and expired
               await deleteServiceSessionsDataWithId(s.serviceSessionId);
            }
         });
         currentDate = new Date();
         const inCompleteSessions = res.filter(
            (s) =>
               !s.endTime &&
               !s.transferMode &&
               currentDate <
                  addHours(new Date(s.startTime), serviceSessionHours)
         );
         // adding timeout for incomplete sessions and in the callback update the end time for the session and push it to server(triggering usual process)
         inCompleteSessions.forEach((s) => {
            store.dispatch(
               addSessionTimeout({
                  sessionId: s.serviceSessionId,
                  startTime: s.startTime,
                  callback: () => {
                     serviceSessionTimeoutCallback(s);
                  },
               })
            );
         });
      }
   });
};

/**
 * Helper function to handle the user session timeout from cloud after calling refresh token through interceptor
 * @param {object} error error object if the root API failed
 * @returns {Promise}
 */
export const cloudUserSessionTimeoutHandler = async (error) => {
   const { activeServiceSession } = store.getState();
   if (activeServiceSession?.serviceSessionId) {
      // Calling the API to extend the user's login session expiry time
      const extendDataRes = await extendLoginExpiryTime();
      if (extendDataRes.status === 200) {
         return cloudAuthRequestInstance(error.config);
      } else {
         toast.error(
            extendDataRes?.data?.message ||
               "Something went wrong while extemding the user login expiry time"
         );
      }
   } else {
      // logout the user and Clearing all the session data from local
      logoutUserAndNavigetToLogin();
   }
   return Promise.resolve();
};

export const isParameterShow = (SELECTED_TOOL_NAME, location) => {
   console.log("SELECTED_TOOL_NAME", SELECTED_TOOL_NAME);
   switch (SELECTED_TOOL_NAME) {
      // case List_Of_Tool.COMPONENTS_FLASHING:
      // case List_Of_Tool.TEST_BENCH:
      // return (
      //    location.pathname !== routePaths.solutionOffering &&
      //    location.pathname !== routePaths.hardwareInterface &&
      //    location.pathname !== routePaths.VciConnective
      // );
      case List_Of_Tool.VEHICLE_EOL:
      case List_Of_Tool.MANUFACTURING_STATION:
         return (
            location?.pathname !== routePaths.solutionOffering &&
            location?.pathname !== routePaths.hardwareInterface &&
            location?.pathname !== routePaths.VciConnective &&
            location?.pathname !== routePaths.manufacturing
         );

      case List_Of_Tool.COMPONENTS_FLASHING:
      case List_Of_Tool.TEST_BENCH:
      default:
         return (
            location?.pathname !== routePaths.solutionOffering &&
            location?.pathname !== routePaths.hardwareInterface &&
            location?.pathname !== routePaths.VciConnective
         );
   }
   // return (
   //    !EOLHeader &&
   //    location.pathname !== routePaths.solutionOffering &&
   //    location.pathname !== routePaths.hardwareInterface &&
   //    location.pathname !== routePaths.VciConnective
   // );
};
