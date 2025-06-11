import { VIN_DATA_STORE } from "app_constants";
import { decryptJson, encryptJson } from "helpers/crypto";
import storage from "localforage";

/**
 * Local Forage instance for storing multiple Vehicle VIN data
 */
const vinStorage = storage.createInstance({
   name: "VIN_DATA",
});

// not updating the INDEXEDDB driver while unit testing to ignore some issues
if (window.process?.env?.NODE_ENV !== "test") {
   vinStorage.setDriver(storage.INDEXEDDB);
}

/**
 * Setter function to set Vehicle data
 * @param {object} data - object to be set
 * @returns {Promise}
 */
export const setVinData = (data) => {
   return vinStorage.setItem(VIN_DATA_STORE, encryptJson(data));
};

/**
 * Setter function to update Vehicle data for provided VIN number
 * @param {string} vinNumber - VIN Number of the vehicle
 * @param {object} data - vehicle data
 * @returns {Promise}
 */
export const updateVinData = (vinNumber, data) => {
   return vinStorage.getItem(VIN_DATA_STORE).then((existingEncData) => {
      if (existingEncData) {
         const existingData = decryptJson(existingEncData);
         const newData = {
            ...existingData,
         };
         if (existingData[vinNumber]) {
            newData[vinNumber] = {
               ...existingData[vinNumber],
               ...data,
            };
         } else {
            newData[vinNumber] = data;
         }
         setVinData(newData);
      } else {
         setVinData({
            [vinNumber]: data,
         });
      }
      return true;
   });
};

/**
 * Getter function to get the provided VIN number data from local
 * @returns {Promise} Promise with Vehicle data
 */
export const getVinData = (vinNumber) => {
   return vinStorage.getItem(VIN_DATA_STORE).then((data) => {
      const decryptedData = decryptJson(data);
      return decryptedData[vinNumber];
   });
};

/**
 * function to delete the provided VIN number data from local
 * @returns {Promise} Promise with Vehicle data
 */
export const deleteVinData = (vinNumber) => {
   return vinStorage.getItem(VIN_DATA_STORE).then(async (data) => {
      const decryptedData = decryptJson(data);
      if (decryptedData && typeof decryptedData === "object" && vinNumber) {
         try {
            delete decryptedData[vinNumber];
            await setVinData(decryptedData);
         } catch (e) {
            console.error("Error while deleting VIN details");
         }
      }
      return decryptedData;
   });
};

/**
 * Helper function to clear the vin data  from local
 * @returns {Promise} Promise for clearing the data
 */
export const clearVinData = () => {
   return vinStorage.clear();
};
