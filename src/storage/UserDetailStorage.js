import { USER_DETAIL_DATA_STORE } from "app_constants";
import { decryptJson, encryptJson } from "helpers/crypto";
import storage from "localforage";

/**
 * Local Forage instance for storing logged in user token and other data
 */
const userDetailStorage = storage.createInstance({
   name: "USER_DETAIL_STORAGE",
});

// not updating the INDEXEDDB driver while unit testing to ignore some issues
if (window.process?.env?.NODE_ENV !== "test") {
   userDetailStorage.setDriver(storage.INDEXEDDB);
}
/**
 * Setter function to store logged in user data in local
 * @param {object} data - logged in user access token and other data object
 */
export const setUserDetailData = (data) => {
   return userDetailStorage.setItem(USER_DETAIL_DATA_STORE, encryptJson(data));
};

/**
 * Getter function to get the logged in user data from local
 * @returns {Promise} Promise with logged in user data
 */
export const getUserDetailData = () => {
   return userDetailStorage.getItem(USER_DETAIL_DATA_STORE).then((data) => {
      if (data) {
         return decryptJson(data);
      }
      return data;
   });
};

/**
 * Helper function to clear the logged in user data from local
 * @returns {Promise} Promise for clearing the data
 */
export const clearUserDetailData = () => {
   return userDetailStorage.removeItem(USER_DETAIL_DATA_STORE);
};
