import { decryptJson, encryptJson } from "helpers/crypto";
import storage from "localforage";

/**
 * Local Forage instance for storing actively connected VIN data
 */
const offlineDataStorage = storage.createInstance({
   name: "OFFLINE_SYNC_DATA",
});

// not updating the INDEXEDDB driver while unit testing to ignore some issues
if (window.process?.env?.NODE_ENV !== "test") {
   offlineDataStorage.setDriver(storage.INDEXEDDB);
}

/**
 * Setter function to store Vehicle features data in local
 * @param {string} serviceName - servicename key
 * @param {Array} data - offline data array
 */
export const setOfflineData = (serviceName, data) => {
   const ID = Date.now();
   const obj = {
      id: ID,
      syncedWithServer: false,
      serviceName: serviceName,
      arguments: [...data, ID],
      failedCount: 0,
   };
   return offlineDataStorage
      .setItem(String(ID), encryptJson(obj))
      .then(() => ID);
};
/**
 * Getter function to get data from local
 * @returns {Promise} Promise with active VIN data
 */
export const getOfflineData = () => {
   const ofllineDataArr = [];
   return offlineDataStorage
      .iterate((value) => {
         const decryptedData = decryptJson(value || "");
         if (decryptedData) {
            ofllineDataArr.push(decryptedData);
         }
      })
      .then(() => {
         console.log("data", ofllineDataArr);
         return ofllineDataArr;
      });
};

/**
 * remove offline item for the passed id  in  local
 * @param {number} ID - Offline sync item ID
 */
export const deleteOfflineDataWithId = (ID) => {
   return offlineDataStorage.removeItem(String(ID));
};

/**
 * Getter function to get data from local
 * @param {number} id - offlineSyncPendingDA
 * @returns {Promise} Promise with active VIN data
 */
export const getOfflineDataWithId = (id) => {
   return offlineDataStorage.getItem(id).then((data) => {
      return decryptJson(data || "");
   });
};
/**
 * Getter function to get data from local
 * @param {number} id - Vehicle features data object
 * @param {obj} data - Vehicle features data object
 * @returns {Promise} Promise with active VIN data
 */
export const updateOfflineDataForId = (id, data) => {
   return offlineDataStorage.setItem(String(id), encryptJson(data));
};
