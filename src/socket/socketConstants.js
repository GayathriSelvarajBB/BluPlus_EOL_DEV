// socket server host
// export const SOCKET_SERVER_BASE_URL = "http://192.168.1.93:9092"; // TODO: Change the host to localhost once checking is done
export const SOCKET_SERVER_BASE_URL = "http://localhost:9093"; // TODO: Change the host to localhost once checking is done
// socket endpoints
export const socketEndpoints = {
   ecuSocket: "/ecu-socket",
};
// event Listeners name
export const socketEvents = {
   fetchValue: "fetchValue", // demo event
   responseValue: "responseValue", // demo event
   fetchAllDtc: "fetchAllDtc", // demo event
   replyAllDtc: "replyAllDtc", // demo event
   // checkConnectivity: "checkConnectivity",
   // connectivityResponse: "connectivityResponse",
   checkConnectivity: "checkVciConnectivityStatus",
   connectivityResponse: "replyVciConnectivityStatus",
   retryConnection: "retryConnection",
   retryConnectionResponse: "retryConnectionResponse",
   // fetchVciInfo: "checkVciConnectivityStatus",
   // fetchVciInfo: "fetchVciInfo",
   // replyVciInfo: "replyVciInfo",//check below
   fetchVinNumber: "fetchVinNumber",
   replyVinNumber: "replyVinNumber",
   getEcuParameters: "getEcuParameters",
   replyEcuParametersList: "replyEcuParametersList",
   getEcuParametersValues: "getEcuParametersValues",
   replyEcuParameterValues: "replyEcuParameterValues",
   getEcuStatus: "getEcuStatus",
   replyEcuStatus: "replyEcuStatus",
   getEcuStatusValues: "getEcuStatusValues",
   replyEcuStatusValues: "replyEcuStatusValues",
   //============================
   getEcuStatusValuesLevel: "getEcuStatusValuesLevel",
   replyGetEcuStatusValuesLevel: "replyGetEcuStatusValuesLevel",
   getEcuScanList: "getEcuScanList",
   replyEcuScanList: "replyEcuScanList",
   getVciInfoData: "fetchVciInfo",
   replyVciInfo: "replyVciInfo",
   readDashboardParameter: "readDashboardParameter",
   replyDashboardParameters: "replyDashboardParameters",
   getreadEcuParameterValue: "readEcuParameterValue",
   replyEcuParameterValue: "replyEcuParameterValue",
   readEcuStatusParamValue: "readEcuStatusParamValue",
   replyEcuStatusParamValue: "replyEcuStatusParamValue",
   checkEcuConnectivityStatus: "checkEcuConnectivityStatus",
   replyEcuConnectivityStatus: "replyEcuConnectivityStatus",
   initiateEcuFlashing: "initiateEcuFlashing",
   replyEcuFlashing: "replyEcuFlashing",
   getReadEcuDtcList: "readEcuDtcList",
   replyEcuDtcList: "replyEcuDtcList",
   readEcuActuatorParams: "readEcuActuatorParams",
   replyEcuActuatorParams: "replyEcuActuatorParams",
   fetchEcuActuatorParamOptions: "fetchEcuActuatorParamOptions",
   replyEcuActuatorParamOptions: "replyEcuActuatorParamOptions",
};

// procedure names
export const socketProcedures = {
   partNo: "u_getPartNo",
   vinNumber: "u_getVINNumber",
   readAllDTC: "u_readAllDtc",
};
