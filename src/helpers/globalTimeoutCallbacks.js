import {
   logoutUserAndNavigetToLogin,
   updateAndPushServiceSessionLogToCloud,
} from "helpers";
import {
   extendLogoutTimeout,
   extendSessionTimeout,
} from "redux/sessionTimeout.slice";
import store from "redux/store";
import { extendLoginExpiryTime } from "services/loginService";

/**
 * Helper function to handle the time out callback for the newly created service session
 * @param {object} sessionObj - new Service session object
 */
export const serviceSessionTimeoutCallback = (
   sessionObj,
   transferMode = false
) => {
   // if the service Session is actively running then we need to extend it else we can close it and push the logs to cloud
   const { activeServiceSession } = store.getState();
   if (
      activeServiceSession?.serviceSessionId === sessionObj?.serviceSessionId
   ) {
      // extending the service session with the ID
      store.dispatch(
         extendSessionTimeout({
            sessionId: sessionObj?.serviceSessionId,
            callback: () =>
               serviceSessionTimeoutCallback(sessionObj, transferMode),
         })
      );
   } else {
      updateAndPushServiceSessionLogToCloud(
         sessionObj.serviceSessionId,
         transferMode,
         false
      );
   }
};

/**
 * Helper function to handle the user session timeout(Logout)
 */
export const userLogoutTimeoutCallback = () => {
   const { activeServiceSession } = store.getState();
   if (activeServiceSession?.serviceSessionId) {
      // extending the user logout time if service session is actively running
      extendLogoutTimeout({
         callback: userLogoutTimeoutCallback,
      });
      // Calling the API to extend the user's login session expiry time
      extendLoginExpiryTime();
   } else {
      logoutUserAndNavigetToLogin();
   }
};
