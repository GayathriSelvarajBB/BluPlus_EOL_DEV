import {
   localAuthRequestInstance,
} from "services/request";
// import apiEndpoints from "services/apiEndpoints";
import { responseErrorHandler } from "helpers";
import localapiEndpoints from "services/localapiEndpoints";
// import { getUserTokenData } from "storage/userTokenStorage";

/**
 * Service function to fetch all the ecus private keys
 * @returns {Promise<AxiosResponse<any, any>>}
 */
// export const getEcuKeys = async () => {
//    const { id_token: idToken } = await getUserTokenData();
//    return cloudAuthRequestInstance
//       .get(apiEndpoints.fetchEcuKeys, {
//          headers: {
//             idToken: `Bearer ${idToken}`,
//          },
//       })
//       .catch(responseErrorHandler);
// };

/**
 * Service function to save the ecu private keys through local API
 * @param {object} data Data Object to be saved
 * @returns {Promise<AxiosResponse<any, any>>}
 */
export const saveEcuKeys = (data) => {
   return localAuthRequestInstance
      .post(localapiEndpoints.saveEcuKeys, data)
      .catch(responseErrorHandler);
};
