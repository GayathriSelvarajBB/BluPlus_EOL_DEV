import { ecuSocket } from "socket";
import { socketEvents, socketProcedures } from "./socketConstants";

//checking h/w is connected or not only
// export const emitGetVciInfoEvent = () => {
//    if (ecuSocket.connected) {
//       ecuSocket.emit(socketEvents.fetchVciInfo);
//    }
// };

export const emitGetVinNumberEvent = () => {
   if (ecuSocket.connected) {
      ecuSocket.emit(socketEvents.fetchVinNumber, {
         fieldName: socketProcedures.vinNumber,
      });
   }
};

export const emitRetryConnectionEvent = () => {
   if (ecuSocket.connected) {
      ecuSocket.emit(socketEvents.retryConnection);
   }
};

export const emitFetchEcuParamEvent = (field) => {
   if (ecuSocket.connected) {
      ecuSocket.emit(socketEvents.fetchValue, {
         // token: "",
         fieldName: field,
         // fieldValue: 0,
      });
   }
};

export const emitFetchAllDTCsEvent = (ecuNames) => {
   if (ecuSocket.connected) {
      ecuSocket.emit(socketEvents.fetchAllDtc, {
         fieldName: socketProcedures.readAllDTC,
         ecuNames: ecuNames,
      });
   }
};

export const emitGetConnectivityStatusEvent = () => {
   if (ecuSocket.connected) {
      ecuSocket.emit(socketEvents.checkConnectivity);
      // ecuSocket.emit(socketEvents.checkVciConnectivityStatus);
   }
};

export const emitgetEcuParameters = (sideactive) => {
   if (ecuSocket.connected) {
      ecuSocket.emit(socketEvents.getEcuParameters, {
         ecuName: sideactive,
      });
   }
};
// export const emitgetEcuParametersValues = (ecuParameters) => {
//    if (ecuSocket.connected) {
//       ecuSocket.emit(socketEvents.getEcuParametersValues, {
//          ecuParameters,
//       });
//    }
// };
// export const emitgetEcuStatus = (sideactive) => {
//    if (ecuSocket.connected) {
//       ecuSocket.emit(socketEvents.getEcuStatus, {
//          ecuName: sideactive,
//       });
//    }
// };
// export const emitgetEcuStatusValues = (ecuStatuses) => {
//    if (ecuSocket.connected) {
//       ecuSocket.emit(socketEvents.getEcuStatusValues, {
//          ecuStatuses,
//       });
//    }
// }

//======================================
//scaning ecu
// export const getEcuScanListEvent = (sideactive) => {
//    if (ecuSocket.connected) {
//       ecuSocket.emit(socketEvents.getEcuParameters, {
//          ecuName: sideactive,
//       });
//    }
// };
export const emitgetEcuParametersValues = (ecuParameters) => {
   if (ecuSocket.connected) {
      ecuSocket.emit(socketEvents.getEcuParametersValues, {
         ecuParameters,
      });
   }
};
export const emitgetEcuStatus = (sideactive) => {
   if (ecuSocket.connected) {
      ecuSocket.emit(socketEvents.getEcuStatus, {
         ecuName: sideactive,
      });
   }
};
export const emitgetEcuStatusValues = (ecuStatuses) => {
   if (ecuSocket.connected) {
      ecuSocket.emit(socketEvents.getEcuStatusValues, {
         ecuStatuses,
      });
   }
};
//=========================================
//getting VIN details
export const getVciInfo = () => {
   if (ecuSocket.connected) {
      ecuSocket.emit(socketEvents.getVciInfoData);
   }
};
//getting vehicle name
export const getDashboardParametersVehicleName = () => {
   //calling in h/w interface component
   if (ecuSocket.connected) {
      ecuSocket.emit(socketEvents.readDashboardParameter, {
         dllCallMethod: "READVehiclename",
         ecuName: "BCM",
         // dllArgs: ["0x7c1"],
         // ecuCanId: "",
      });
   }
};
//gettig vehicle model
export const getDashboardParametersVehicleModel = () => {
   if (ecuSocket.connected) {
      ecuSocket.emit(socketEvents.readDashboardParameter, {
         dllCallMethod: "READVehicleModel",
         ecuName: "BCM",
         // dllArgs: ["0x7c1"],
      });
   }
};
//getting VIN number
export const getDashboardParametersVehicleVIN = () => {
   if (ecuSocket.connected) {
      ecuSocket.emit(socketEvents.readDashboardParameter, {
         dllCallMethod: "READVIN",
         ecuName: "BCM",
         // dllArgs: ["0x7c1"],
      });
   }
};
//getting vehicle speed
export const getDashboardParametersVehicleSpeed = () => {
   if (ecuSocket.connected) {
      ecuSocket.emit(socketEvents.readDashboardParameter, {
         dllCallMethod: "READVehicleSpeed",
         ecuName: "BCM",
         // dllArgs: ["0x7c1"],
      });
   }
};

// getting vehicle voltage
export const getDashboardParametersVehicleVoltage = () => {
   if (ecuSocket.connected) {
      ecuSocket.emit(socketEvents.readDashboardParameter, {
         dllCallMethod: "READBatteryVolt",
         ecuName: "BCM",
         // dllArgs: ["0x7c1"],
      });
   }
};
export const getreadEcuParameterValue = (ecuParameter) => {
   if (ecuSocket.connected) {
      ecuSocket.emit(socketEvents.getreadEcuParameterValue, ecuParameter);
   }
};
export const getreadEcuStatusValue = (ecuStatusParam) => {
   if (ecuSocket.connected) {
      ecuSocket.emit(socketEvents.readEcuStatusParamValue, ecuStatusParam);
   }
};
export const checkEcuConnectivityStatus = (formated) => {
   if (ecuSocket.connected) {
      ecuSocket.emit(socketEvents.checkEcuConnectivityStatus, formated);
   }
};
export const initiateEcuFlashing = (flashing) => {
   if (ecuSocket.connected) {
      ecuSocket.emit(socketEvents.initiateEcuFlashing, flashing);
   }
};
export const checkEcuConnectivity = (ecuname) => {
   if (ecuSocket.connected) {
      ecuSocket.emit(socketEvents.checkEcuConnectivityStatus, {
         dllCallMethod: "TesterPresent",
         ecuName: ecuname,
      });
   }
};
export const getReadEcuDtcListCallEvent = async (ecuName) => {
   if (ecuSocket.connected) {
      await ecuSocket.emit(socketEvents.getReadEcuDtcList, {
         dllCallMethod: "READDTC",
         ecuName: ecuName, //"BCM"
      });
   }
};
export const readEcuActuatorParams = async (ecuName) => {
   if (ecuSocket.connected) {
      ecuSocket.emit(socketEvents.readEcuActuatorParams, {
         dllCallMethod: "GetIOparameter",
         ecuName: ecuName,
      });
   }
};
export const fetchEcuActuatorParamOptions = async (ecuName, selected) => {
   if (ecuSocket.connected) {
      ecuSocket.emit(socketEvents.fetchEcuActuatorParamOptions, {
         dllCallMethod: "GetIOFormula",
         ecuActuatorParameter: {
            ecuName: ecuName,
            actuatorTestParam: selected,
         },
      });
   }
};
