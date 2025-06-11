import { ACTIVE_VIN_DATA_STORE } from "app_constants";
import { decryptJson, encryptJson } from "helpers/crypto";
import storage from "localforage";

/**
 * Local Forage instance for storing actively connected VIN data
 */
const activeVinStorage = storage.createInstance({
   name: "ACTIVE_VIN_DATA",
});

// not updating the INDEXEDDB driver while unit testing to ignore some issues
if (window.process?.env?.NODE_ENV !== "test") {
   activeVinStorage.setDriver(storage.INDEXEDDB);
}

/**
 * Setter function to store active VIN data in local
 * @param {object} data - active VIN data object
 */
export const setActiveVinData = (data) => {
   return activeVinStorage.setItem(ACTIVE_VIN_DATA_STORE, encryptJson(data));
};

/**
 * Getter function to get the active VIN data from local
 * @returns {Promise} Promise with active VIN data
 */
export const getActiveVinData = () => {
   return activeVinStorage.getItem(ACTIVE_VIN_DATA_STORE).then((data) => {
      return decryptJson(data);
   });
};

/**
 * Helper function to clear the Active vin data  from local
 * @returns {Promise} Promise for clearing the data
 */
export const clearActiveVinData = () => {
   return activeVinStorage.clear();
};
