import axios from "axios";
import { LOCAL_CLIENT_SECRET } from "envConfig";
import { responseErrorHandler } from "helpers";
import localapiEndpoints from "./localapiEndpoints";

export const getLocalAccessToken = () => {
   return axios
      .post(localapiEndpoints.localAccessToken, {
         clientSecret: LOCAL_CLIENT_SECRET,
      })
      .catch(responseErrorHandler);
};
