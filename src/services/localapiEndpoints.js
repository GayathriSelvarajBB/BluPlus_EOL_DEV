import { LOCAL_BASE_URL } from "envConfig";

const localapiEndpoints = {
   localAccessToken: `${LOCAL_BASE_URL}/vehicle/access-token`,
   vehicleStatus: `${LOCAL_BASE_URL}/vehicle/vehiclestatus`,
   dashboardInfo: `${LOCAL_BASE_URL}/vehicle/vehicle-info`,
   updateStackVehicleFeature: `${LOCAL_BASE_URL}/vehicle/update-vehicle-features`,
   saveEcuKeys: `${LOCAL_BASE_URL}/ecu/save-ecu-key`,
};

export default localapiEndpoints;
