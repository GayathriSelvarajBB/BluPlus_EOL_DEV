/* eslint-disable indent */
import axios from "axios";
import { responseErrorHandler } from "helpers";
import localapiEndpoints from "services/localapiEndpoints";
import { getUserTokenData } from "storage/userTokenStorage";
import apiEndpoints from "./apiEndpoints";
import { cloudAuthRequestInstance, localAuthRequestInstance } from "./request";

export const getDashboardInfo = () => {
   return localAuthRequestInstance.get(localapiEndpoints.dashboardInfo);
};

export const getVehicleInfo = (vinNumber) => {
   return cloudAuthRequestInstance.post(apiEndpoints.vehicleConnection, {
      vinNumber,
   });
};

//parameter popup
export const getParameterPopupInfo = (isDefault = null) => {
   return cloudAuthRequestInstance.get(apiEndpoints.masterParamList, {
      params: {
         isDefault: isDefault,
      },
   });
};

//fetchparameter popup
export const getUserSelectParamInfo = async () => {
   const { username } = (await getUserTokenData()) || {};

   return cloudAuthRequestInstance.get(
      apiEndpoints.fetchUserSelectedMasterParamList(username)
   );
};

//storeparameter popup
export const storeParamInfo = (data) => {
   return cloudAuthRequestInstance.post(apiEndpoints.storeUseParamList, data);
};

//getmanifest info

export const getManifestDetail = async (vinNumber) => {
   const { id_token } = (await getUserTokenData()) || {};

   return cloudAuthRequestInstance
      .get(apiEndpoints.getManifestInfo, {
         headers: {
            Token: id_token,
         },
         params: { vinNumber },
      })
      .catch((err) => {
         return err.response;
      });
};

//getmanifest id info
export const getManifestIdInfo = async (id) => {
   const { id_token } = (await getUserTokenData()) || {};
   return cloudAuthRequestInstance
      .get(apiEndpoints.getManifestId(id), {
         headers: {
            Token: id_token,
         },
      })
      .catch(responseErrorHandler);
};

//workorder

export const getWorkOrderIdInfo = (vinNumber) => {
   return cloudAuthRequestInstance
      .get(apiEndpoints.getWorkOrderId(vinNumber))
      .catch(responseErrorHandler);
};

//vin connection
export const getVehicle = async (Token) => {
   // eslint-disable-next-line no-debugger
   return axios
      .post(localapiEndpoints.vehicleStatus, null, {
         headers: {
            Token: Token,
         },
      })

      .catch((err) => {
         return err.response;
      });
};

export const getVehicleParameters = (Token) => {
   return axios
      .get(apiEndpoints.vehicleparameters, {
         headers: { Token },
      })
      .catch(responseErrorHandler);
};

export const getVciDetect = () => {
   return axios
      .get(apiEndpoints.vciDetect, {
         params: { connected: 0 },
      })
      .catch(responseErrorHandler);
};

export const setRoutine = async (code) => {
   let access_token = JSON.parse(localStorage.getItem("access_token"));

   try {
      return await axios.post(
         apiEndpoints.setRoutine,
         {
            Injector_1: code.Injector_1,
            Injector_2: code.Injector_2,
            Injector_3: code.Injector_3,
            Injector_4: code.Injector_4,
         },
         {
            params: {
               accessToken: `Bearer ${access_token}`,
            },
            headers: {
               Authorization: `Bearer ${access_token}`,
            },
         }
      );
   } catch (err) {
      return responseErrorHandler(err);
   }
};

export const getRoutine = async () => {
   let access_token = JSON.parse(localStorage.getItem("access_token"));
   try {
      return await axios.get(apiEndpoints.getRoutine, {
         params: {
            accessToken: `Bearer ${access_token}`,
         },
         headers: { Authorization: `Bearer ${access_token}` },
      });
   } catch (err) {
      return responseErrorHandler(err);
   }
};

export const getRoutineTyre = async () => {
   let access_token = JSON.parse(localStorage.getItem("access_token"));
   try {
      return await axios.get(apiEndpoints.getRoutineTyre, {
         params: {
            accessToken: `Bearer ${access_token}`,
         },
         headers: { Authorization: `Bearer ${access_token}` },
      });
   } catch (err) {
      return responseErrorHandler(err);
   }
};

export const setRoutineTyre = async (ecu) => {
   let access_token = JSON.parse(localStorage.getItem("access_token"));
   try {
      return await axios.post(
         apiEndpoints.setRoutineTyre,
         {
            Front_Left_Wheel: ecu.Front_Left_Wheel,
            Front_Right_Wheel: ecu.Front_Right_Wheel,
            Rear_Left_Wheel: ecu.Rear_Left_Wheel,
            Rear_Right_Wheel: ecu.Rear_Right_Wheel,
            createdAt: ecu.createdAt,
            updatedAt: ecu.updatedAt,
         },
         {
            params: {
               accessToken: `Bearer ${access_token}`,
            },
            headers: {
               Authorization: `Bearer ${access_token}`,
            },
         }
      );
   } catch (err) {
      return responseErrorHandler(err);
   }
};

export const getActuatorData = async (ecu) => {
   try {
      return await axios.get(apiEndpoints.getActuatorData, {
         params: { ecuName: ecu },
      });
   } catch (err) {
      return responseErrorHandler(err);
   }
};

export const getDTC = async (ecuname) => {
   try {
      return await axios.get(apiEndpoints.getDTC, {
         params: { ecuName: ecuname },
      });
   } catch (err) {
      return responseErrorHandler(err);
   }
};
export const getScanEcusList = async (ecuNames) => {
   try {
      return await axios.get(apiEndpoints.getScanEcu, {
         params: { ecuName: ecuNames },
      });
   } catch (err) {
      return responseErrorHandler(err);
   }
};
export const getEachEcuDetails = async (ecuName) => {
   try {
      return await axios.get(apiEndpoints.getEachEcuInfo, {
         params: { ecuName },
      });
   } catch (err) {
      return responseErrorHandler(err);
   }
};

export const setActuatorData = async (selected, ecu) => {
   try {
      return await axios.post(apiEndpoints.setActuatorData, {
         actuatorTestParam: [selected],
         ecuName: ecu,
      });
   } catch (err) {
      return responseErrorHandler(err);
   }
};

export const getECUList = async () => {
   try {
      return await axios.get(apiEndpoints.getECU);
   } catch (err) {
      return responseErrorHandler(err);
   }
};
export const getMeasurementParameter = async (ecu) => {
   try {
      return await axios.get(apiEndpoints.measurementEcuparameter, {
         params: { ecuName: ecu },
      });
   } catch (error) {
      return responseErrorHandler(error);
   }
};
export const getMeasurementStatus = async (ecu) => {
   try {
      return await axios.get(apiEndpoints.measurementEcuStatus, {
         params: { ecuName: ecu },
      });
   } catch (error) {
      return responseErrorHandler(error);
   }
};
export const getMeasurementParameterValues = async (request) => {
   try {
      return await axios.post(
         apiEndpoints.measurementecuparameterValues,
         request
      );
   } catch (error) {
      return responseErrorHandler(error);
   }
};
export const getMeasurementParameterStatus = async (request) => {
   try {
      return await axios.post(
         apiEndpoints.measurementEcuparameterStatus,
         request
      );
   } catch (error) {
      return responseErrorHandler(error);
   }
};
export const getMeasurementParameterStatusData = async (req) => {
   try {
      return await axios.get(
         apiEndpoints.measurementecuparameterstatusData,
         req
      );
   } catch (error) {
      return responseErrorHandler(error);
   }
};
export const getMesurementEcuList = async () => {
   try {
      return await axios.get(apiEndpoints.getECU);
   } catch (error) {
      return responseErrorHandler(error);
   }
};
export const getMeasurementEcuStatus = async (req) => {
   try {
      return await axios.post(
         apiEndpoints.measurementEcuparameterStatusValues,
         req
      );
   } catch (error) {
      return responseErrorHandler(error);
   }
};
export const getTechBulletinApi = async () => {
   let access_token = JSON.parse(localStorage.getItem("access_token"));
   try {
      return await axios.get(
         apiEndpoints.TechBulletin,

         { headers: { Authorization: `Bearer ${access_token}` } }
      );
   } catch (error) {
      return responseErrorHandler(error);
   }
};
export const getVehicleFlashing = async (ecuName, data) => {
   let access_token = JSON.parse(localStorage.getItem("access_token"));
   try {
      return await axios.get(apiEndpoints.VechicleFlashing, {
         headers: {
            Authorization: `Bearer ${access_token}`,
         },
         params: {
            accessToken: `Bearer ${access_token}`,
            ecuName: ecuName,
            hardwarePartNo: data,
            vinNumber: "T834023XC3943HU4R",
         },
      });
   } catch (error) {
      return responseErrorHandler(error);
   }
};
export const getVehicleDetailsApi = async (vinInput) => {
   let access_token = JSON.parse(localStorage.getItem("access_token"));
   try {
      return await axios.get(
         apiEndpoints.vehicleInfo,

         {
            headers: {
               Authorization: `Bearer ${access_token}`,
               // re: "ecuFunction=Lighting&vinNumber=T834023XC3943HU4R",
            },
            params: {
               accessToken: `Bearer ${access_token}`,
               // ecuFunctionality: item,
               vinNumber: vinInput,
            },
         }
      );
   } catch (error) {
      return responseErrorHandler(error);
   }
};
export const getServiceHistoryApi = async () => {
   // https://apiservicediagnostics.bluebinaries.com/dtd-auth/vehicle/find-history-info?accessToken=Bearer%20testToken&vinNumber=T834023XC3943HU4R

   let access_token = JSON.parse(localStorage.getItem("access_token"));
   try {
      return await axios.get(
         apiEndpoints.serviceHistory,

         {
            headers: {
               Authorization: `Bearer ${access_token}`,
               // re: "ecuFunction=Lighting&vinNumber=T834023XC3943HU4R",
            },
            params: {
               accessToken: `Bearer ${access_token}`,
               // ecuFunctionality: item,
               vinNumber: "T834023XC3943HU4R",
            },
         }
      );
   } catch (error) {
      return responseErrorHandler(error);
   }
};
export const getSymtomsDignosisApi = async () => {
   let access_token = JSON.parse(localStorage.getItem("access_token"));
   try {
      return await axios.get(
         apiEndpoints.SymtomsDiagnosis,

         { headers: { Authorization: `Bearer ${access_token}` } }
      );
   } catch (error) {
      return responseErrorHandler(error);
   }
};

export const getSymtomsDignosisValueApi = async (item) => {
   let access_token = JSON.parse(localStorage.getItem("access_token"));
   try {
      return await axios.get(
         apiEndpoints.SymtomsDiagnosisValues,

         {
            headers: {
               Authorization: `Bearer ${access_token}`,
               // re: "ecuFunction=Lighting&vinNumber=T834023XC3943HU4R",
            },
            params: {
               ecuFunctionality: item,
               //  vinNumber: "T834023XC3943HU4R"
            },
         }
      );
   } catch (error) {
      return responseErrorHandler(error);
   }
};

export const getDiagnosticsProcedure = async (eachDtc) => {
   let access_token = JSON.parse(localStorage.getItem("access_token"));
   try {
      return await axios.get(
         apiEndpoints.diagnosticsProcedure,
         // "https://apiservicediagnostics.bluebinaries.com/dtd-auth/vehicle/diagnostics-procedure",

         {
            headers: {
               Authorization: `Bearer ${access_token}`,
            },
            params: {
               accessToken: `Bearer ${access_token}`,
               dtc: eachDtc.displayTroubleCode,
               ecuName: eachDtc.expandName,
            },
         }
      );
   } catch (error) {
      return responseErrorHandler(error);
   }
};
export const getEolParameter = async (ecu) => {
   let access_token = JSON.parse(localStorage.getItem("access_token"));
   try {
      return await axios.get(apiEndpoints.eolecuParameterData, {
         headers: {
            Authorization: `Bearer ${access_token}`,
         },
         params: {
            accessToken: `Bearer ${access_token}`,
            ecuName: ecu,
         },
      });
   } catch (error) {
      return responseErrorHandler(error);
   }
};
export const getEolLabel = async (request) => {
   let access_token = JSON.parse(localStorage.getItem("access_token"));
   try {
      return await axios.get(apiEndpoints.eolLabelData, {
         headers: {
            Authorization: `Bearer ${access_token}`,
         },
         params: {
            ecuNames: request.join(),
         },
      });
   } catch (error) {
      return responseErrorHandler(error);
   }
};
export const eolGetComponent = async (request, startDate, endDate) => {
   let access_token = JSON.parse(localStorage.getItem("access_token"));
   try {
      return await axios.get(apiEndpoints.eolGetComponent, {
         headers: {
            Authorization: `Bearer ${access_token}`,
         },
         params: {
            batchId: request,
            startDate: startDate,
            endDate: endDate,
         },
      });
   } catch (error) {
      return responseErrorHandler(error);
   }
};
export const eolSaveComponent = async (request) => {
   let access_token = JSON.parse(localStorage.getItem("access_token"));
   try {
      return await axios.post(apiEndpoints.eolSaveComponent, request, {
         headers: {
            Authorization: `Bearer ${access_token}`,
         },
      });
   } catch (err) {
      return responseErrorHandler(err);
   }
};
export const eolBatchID = async (request) => {
   let access_token = JSON.parse(localStorage.getItem("access_token"));
   try {
      return await axios.get(apiEndpoints.eolBatchID, {
         headers: {
            Authorization: `Bearer ${access_token}`,
         },
      });
   } catch (err) {
      return responseErrorHandler(err);
   }
};
export const batteryManufacture = async () => {
   let access_token = JSON.parse(localStorage.getItem("access_token"));
   try {
      return await axios.get(apiEndpoints.batteryManufacture, {
         headers: {
            Authorization: `Bearer ${access_token}`,
         },
      });
   } catch (err) {
      return responseErrorHandler(err);
   }
};
export const ReadAndWrite = async (request) => {
   let access_token = JSON.parse(localStorage.getItem("access_token"));
   try {
      return await axios.get(apiEndpoints.Readandwrite, {
         headers: {
            Authorization: `Bearer ${access_token}`,
         },
         params: {
            ecuNames: request.join(),
         },
      });
   } catch (err) {
      return responseErrorHandler(err);
   }
};
export const WheelAlignment = async () => {
   let access_token = JSON.parse(localStorage.getItem("access_token"));
   try {
      return await axios.get(apiEndpoints.wahaValues, {
         headers: {
            Authorization: `Bearer ${access_token}`,
         },
         params: {
            vehicleParameters: "wheel alignment",
            vinNumber: "MAKDF554AJ4123456",
         },
      });
   } catch (err) {
      return responseErrorHandler(err);
   }
};
export const SaveStationActivity = async (request) => {
   let access_token = JSON.parse(localStorage.getItem("access_token"));
   try {
      return await axios.post(apiEndpoints.stationActivity, request, {
         headers: {
            Authorization: `Bearer ${access_token}`,
         },
      });
   } catch (err) {
      return responseErrorHandler(err);
   }
};
export const fetchStationActivity = async (station) => {
   let access_token = JSON.parse(localStorage.getItem("access_token"));
   try {
      return await axios.get(apiEndpoints.fetchStationActivity, {
         headers: {
            Authorization: `Bearer ${access_token}`,
         },
         params: {
            stationId: station,
         },
      });
   } catch (err) {
      return responseErrorHandler(err);
   }
};
export const fetchStationInformation = async (OrderNumber) => {
   let access_token = JSON.parse(localStorage.getItem("access_token"));
   try {
      return await axios.get(apiEndpoints.fetchStationInformation, {
         headers: {
            Authorization: `Bearer ${access_token}`,
         },
         params: {
            orderId: OrderNumber,
            vinNumber: "MAKDF554AJ4123456",
         },
      });
   } catch (err) {
      return responseErrorHandler(err);
   }
};
export const fetchWorIDInformation = async (OrderNumber) => {
   let access_token = JSON.parse(localStorage.getItem("access_token"));
   try {
      return await axios.get(apiEndpoints.fetchWorkIDInformation, {
         headers: {
            Authorization: `Bearer ${access_token}`,
         },
         params: {
            orderId: OrderNumber,
         },
      });
   } catch (err) {
      return responseErrorHandler(err);
   }
};
