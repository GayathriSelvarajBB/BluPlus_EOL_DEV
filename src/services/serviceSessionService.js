import { handleOfflineSavedItemResponse, responseErrorHandler } from "helpers";
import apiEndpoints from "./apiEndpoints";
import { cloudAuthRequestInstance } from "./request";

export const pushServiceSessionToCloud = (data, offlineItemId) => {
   return cloudAuthRequestInstance
      .post(apiEndpoints.serviceSession, data)
      .then(handleOfflineSavedItemResponse(offlineItemId))
      .catch(responseErrorHandler);
};

/**
 * Service function to fetch the transferred service session for the provided vin number
 * @returns {Promise<AxiosResponse<any, any>>}
 */
export const getTransferredSessionData = (vinNumber) => {
   return cloudAuthRequestInstance
      .get(apiEndpoints.getTransferredServiceSession, { params: { vinNumber } })
      .catch(responseErrorHandler);
};
