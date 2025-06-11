import { VEHICLE_CONFIGURATION_DATA_STORE } from "app_constants";
import { decryptJson, encryptJson } from "helpers/crypto";
import storage from "localforage";

/**
 * Local Forage instance for storing Vehicle features/configurations data
 */
const vehicleConfigurationStorage = storage.createInstance({
   name: "VEHICLE_CONFIGURATION_DATA",
});

// not updating the INDEXEDDB driver while unit testing to ignore some issues
if (window.process?.env?.NODE_ENV !== "test") {
   vehicleConfigurationStorage.setDriver(storage.INDEXEDDB);
}

/**
 * Setter function to store Vehicle features/configurations data in local
 * @param {string} vinNumber - VIN Number of the vehicle
 * @param {object} data - Vehicle features/configurations data object
 */
export const setVehicleConfigData = (vinNumber, data) => {
   getAllVehicleConfigData().then((existingData) => {
      let updatedData = {};
      if (existingData) {
         updatedData = { ...existingData };
      }
      updatedData = {
         ...updatedData,
         [vinNumber]: { vinNumber: vinNumber, data, timeStamp: Date.now() },
      };
      vehicleConfigurationStorage.setItem(
         VEHICLE_CONFIGURATION_DATA_STORE,
         encryptJson(updatedData)
      );
   });
};

/**
 * Getter function to get the Vehicle features/configurations data for passed VIN Number from local
 * @returns {Promise} Promise with Vehicle features/configurations data
 */
export const getVehicleConfigData = (vinNumber) => {
   return getAllVehicleConfigData().then((data) => {
      return data?.[vinNumber];
   });
};

/**
 * Getter function to get all the Vehicle features/configurations data from local
 * @returns {Promise} Promise with Vehicle features/configurations data
 */
export const getAllVehicleConfigData = () => {
   return vehicleConfigurationStorage
      .getItem(VEHICLE_CONFIGURATION_DATA_STORE)
      .then((data) => {
         return decryptJson(data || "");
      });
};
/**
 * Helper function to clear the vehicle Configuration data  from local
 * @returns {Promise} Promise for clearing the data
 */
export const clearVehicleConfigData = () => {
   return vehicleConfigurationStorage.clear();
};
