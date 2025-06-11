import { responseErrorHandler } from "helpers";
import apiEndpoints from "services/apiEndpoints";
import {
   cloudAuthRequestInstance,
   localAuthRequestInstance,
} from "services/request";
import localapiEndpoints from "./localapiEndpoints";

export const fetchVehicleConfigData = (vinNumber) => {
   return cloudAuthRequestInstance
      .get(apiEndpoints.fetchVehicleConfiguration(vinNumber))
      .catch(responseErrorHandler);
};

export const updateVehicleConfigLocal = (vinNumber, features) => {
   return localAuthRequestInstance.post(
      localapiEndpoints.updateStackVehicleFeature,
      {
         Features: features,
         VIN_Number: vinNumber,
      }
   );
};
