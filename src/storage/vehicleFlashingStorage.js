import { VEHICLE_FLASHING_DATA } from "app_constants";
import { decryptJson, encryptJson } from "helpers/crypto";
import commonStorageInstance from "storage/commonStorageInstance";

/**
 * Setter function to set the Vehicle Flashing(Manifest details) data in local
 * @param {object} data - Vehicle Flashing(Manifest details) array
 */
export const setVehicleFlashingData = (data) => {
   return commonStorageInstance.setItem(
      VEHICLE_FLASHING_DATA,
      encryptJson(data)
   );
};

/**
 * Getter function to get all the Vehicle Flashing(Manifest details) data from local
 * @returns {Promise} Promise with Vehicle Flashing(Manifest details) data
 */
export const getAllVehicleFlashingData = () => {
   return commonStorageInstance.getItem(VEHICLE_FLASHING_DATA).then((data) => {
      return decryptJson(data);
   });
};
