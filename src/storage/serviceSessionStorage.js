import { SERVICE_SESSION_DATA } from "app_constants";
import { decryptJson, encryptJson } from "helpers/crypto";
import commonStorageInstance from "storage/commonStorageInstance";

/**
 * Function to add the new service session data in local
 * @param {object} data - new service session object
 */
export const addServiceSessionData = (data) => {
   return getAllServiceSessionsData().then((serviceSessionArr) => {
      if (serviceSessionArr && Array.isArray(serviceSessionArr)) {
         serviceSessionArr.push(data);
      } else {
         serviceSessionArr = [data];
      }
      return setServiceSessionData(serviceSessionArr);
   });
};

/**
 * Function to update the service session data in local
 * @param {object} data - service session object
 */
export const updateServiceSessionData = (serviceSessionId, data) => {
   return getAllServiceSessionsData().then((serviceSessionArr) => {
      if (serviceSessionArr && Array.isArray(serviceSessionArr)) {
         const ind = serviceSessionArr.findIndex(
            (s) => s.serviceSessionId === serviceSessionId
         );
         if (ind > -1) {
            serviceSessionArr[ind] = data;
         }
      } else {
         serviceSessionArr = [data];
      }
      return setServiceSessionData(serviceSessionArr);
   });
};

/**
 * Setter function to set the service session data in local
 * @param {object} data - service session array
 */
export const setServiceSessionData = (data) => {
   return commonStorageInstance.setItem(
      SERVICE_SESSION_DATA,
      encryptJson(data)
   );
};

/**
 * Getter function to get all the service sessions data from local
 * @returns {Promise} Promise with service sessions data
 */
export const getAllServiceSessionsData = () => {
   return commonStorageInstance.getItem(SERVICE_SESSION_DATA).then((data) => {
      return decryptJson(data);
   });
};

/**
 * remove service session item with id in  local
 * @param {number} ID - service session ID
 */
export const deleteServiceSessionsDataWithId = (ID) => {
   return getAllServiceSessionsData().then((serviceSessionArr) => {
      if (serviceSessionArr) {
         const updatedArr = serviceSessionArr.filter(
            (s) => s.serviceSessionId !== ID
         );
         return setServiceSessionData(updatedArr);
      } else {
         return true;
      }
   });
};
