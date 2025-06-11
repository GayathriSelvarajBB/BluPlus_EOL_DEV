import { logoutUser } from "services/loginService";
import { pushServiceSessionToCloud } from "services/serviceSessionService";

export const serviceNames = {
   LOGOUT_USER: "LOGOUT_USER",
   PUSH_SERVICE_SESSIONS: "PUSH_SERVICE_SESSIONS",
};

// returning the service functions with property name as getter to ignore some babel compile issue
const offlineServicesMap = {
   get [serviceNames.LOGOUT_USER]() {
      return logoutUser;
   },
   get [serviceNames.PUSH_SERVICE_SESSIONS]() {
      return pushServiceSessionToCloud;
   },
};

export default offlineServicesMap;
