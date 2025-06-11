import localapiEndpoints from "services/localapiEndpoints";
import { localAuthRequestInstance } from "services/request";

export const fetchVehicleStatus = () => {
   return localAuthRequestInstance.post(localapiEndpoints.vehicleStatus);
};
