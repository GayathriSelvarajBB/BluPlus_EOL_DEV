import offlineServicesMap from "app_constants/serviceFunctionMap";
import {
   deleteOfflineDataWithId,
   getOfflineData,
   getOfflineDataWithId,
   updateOfflineDataForId,
} from "storage/offlineDataStorage";
import { getUserTokenData } from "storage/userTokenStorage";

/**
 * Helper function to call servicefunction
 * @param {object} data -offline item object
 */
const callServiceFunction = (data) => {
   if (window.navigator.onLine) {
      getUserTokenData().then((userData) => {
         if (userData.access_token) {
            const serviceName = data.serviceName;
            const args = data.arguments;
            const serviceFunction = offlineServicesMap[serviceName];
            serviceFunction?.apply(null, args);
         }
      });
   }
};

/**
 /**
  * Helper function to handle axios error and return the error response
  * @param {any} err Error object from axios
  */
export const triggerOfflineSyncData = () => {
   if (window.navigator.onLine) {
      getOfflineData().then((offlineData) => {
         if (offlineData && offlineData.length > 0) {
            for (let row of offlineData) {
               callServiceFunction(row);
            }
         }
      });
   }
};

/**
 *
 * @param {number} id - Id of the offline sync failed item
 */
export const updateOfflineSyncFailedCount = (id) => {
   getOfflineDataWithId(id).then((data) => {
      if (data) {
         if (data.failedCount < 10) {
            data.failedCount++;
            updateOfflineDataForId(id, data);
         } else if (data.failedCount >= 10) {
            deleteOfflineDataWithId(id);
         }
      }
   });
};
