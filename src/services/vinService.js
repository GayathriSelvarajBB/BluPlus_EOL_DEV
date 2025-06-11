import axios from "axios";
import apiEndpoints from "./apiEndpoints";

export const verifyVinNumber = (vin) => {
   return axios.get(apiEndpoints.verifyVin(vin));
};
