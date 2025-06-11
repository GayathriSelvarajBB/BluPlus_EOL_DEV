import { PARAM_STORE } from "app_constants";
import { decryptJson, encryptJson } from "helpers/crypto";
import storage from "localforage";

/**
 * Local Forage instance for storing logged in user token and other data
 */
const paramStorage = storage.createInstance({
   name: "PARAM_STORAGE",
});

// not updating the INDEXEDDB driver while unit testing to ignore some issues
if (window.process?.env?.NODE_ENV !== "test") {
   paramStorage.setDriver(storage.INDEXEDDB);
}
/**
 * Setter function to store logged in user data in local
 * @param {object} data - logged in user access token and other data object
 */
export const setParamData = (data) => {
   return paramStorage.setItem(PARAM_STORE, encryptJson(data));
};

/**
 * Getter function to get the logged in user data from local
 * @returns {Promise} Promise with logged in user data
 */
export const getParamData = () => {
   return paramStorage.getItem(PARAM_STORE).then((data) => {
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
export const clearParamData = () => {
   return paramStorage.removeItem(PARAM_STORE);
};
