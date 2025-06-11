import { USER_TOKEN_DATA_STORE } from "app_constants";
import { decryptJson, encryptJson } from "helpers/crypto";
import storage from "localforage";

/**
 * Local Forage instance for storing logged in user token and other data
 */
const userTokenStorage = storage.createInstance({
   name: "USER_TOKEN_STORAGE",
});

// not updating the INDEXEDDB driver while unit testing to ignore some issues
if (window.process?.env?.NODE_ENV !== "test") {
   userTokenStorage.setDriver(storage.INDEXEDDB);
}
/**
 * Setter function to store logged in user data in local
 * @param {object} data - logged in user access token and other data object
 */
export const setUserTokenData = (data) => {
   return userTokenStorage.setItem(USER_TOKEN_DATA_STORE, encryptJson(data));
};

/**
 * Getter function to get the logged in user data from local
 * @returns {Promise} Promise with logged in user data
 */
export const getUserTokenData = () => {
   return userTokenStorage.getItem(USER_TOKEN_DATA_STORE).then((data) => {
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
export const clearUserTokenData = () => {
   return userTokenStorage.removeItem(USER_TOKEN_DATA_STORE);
};
