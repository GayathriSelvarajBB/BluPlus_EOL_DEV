import { LOCAL_AUTH_TOKEN_DATA } from "app_constants";
import { decryptJson, encryptJson } from "helpers/crypto";
import storage from "localforage";

/**
 * Local Forage instance for storing local Auth token data
 */
const localAuthStorage = storage.createInstance({
   name: "LOCAL_AUTH_STORAGE",
});

// not updating the INDEXEDDB driver while unit testing to ignore some issues
if (window.process?.env?.NODE_ENV !== "test") {
   localAuthStorage.setDriver(storage.INDEXEDDB);
}

/**
 * Setter function to store the local Auth token data in local
 * @param {object} data - token data object
 */
export const setLocalAuthData = (data) => {
   return localAuthStorage.setItem(LOCAL_AUTH_TOKEN_DATA, encryptJson(data));
};

/**
 * Getter function to get the local Auth token data from local
 * @returns {Promise} Promise with local Auth token data
 */
export const getLocalAuthData = () => {
   return localAuthStorage.getItem(LOCAL_AUTH_TOKEN_DATA).then((data) => {
      return decryptJson(data);
   });
};

/**
 * Helper function to clear the local Auth token data from local
 * @returns {Promise} Promise for clearing the data
 */
export const clearLocalAuthData = () => {
   return localAuthStorage.clear();
};
