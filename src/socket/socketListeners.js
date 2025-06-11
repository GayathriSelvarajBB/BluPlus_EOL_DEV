import { setActiveVin } from "redux/activeVin.slice";
import { getActuatorData } from "redux/actuatorsDropDownData.slice";
import { getActuatorDropDown } from "redux/actuatorselected.slice";

import { setcarDetails } from "redux/carDetails.slice";
import { getEcuConnectivityData } from "redux/checkEcuConnectivity.slice";
import { addEcuDtcListRedux } from "redux/ecuDtcList.slice";
import { getecuParameter } from "redux/ecuParameter.slice";
// import { getecuparameterValues } from "redux/ecuParameterValues.slice";
import { updateAllDTCData, updateParamData } from "redux/ecuParams.slice";
// import { getecuStatus } from "redux/ecuStatus.slice";
import { getecuStatusValues } from "redux/ecuStatusValues.slice";
import { addEcusScanList } from "redux/ecusScanList.slice";
import { getEcuFlashing } from "redux/flashingStatus.slice";
// import { getEcuListdata } from "redux/getEcuList.slice";
import { getParameterData } from "redux/getEcuParameterData.slice";
import { getStatusData } from "redux/getEcuStatus.slice";
// import { getecustatusValues } from "redux/ecuStatusValue.slice";
import store from "redux/store";
import { setVciInfo } from "redux/vciInfo.slice";
import { ecuSocket } from "socket";
import { socketEvents } from "socket/socketConstants";

const replyVciInfoEventCallback = (res) => {
   store.dispatch(setVciInfo(res));
};

const replyVinNumnerEventCallback = (res) => {
   const vinData = {
      ...(res || {}),
      automatedVin: true,
      vinNumber: res?.data?.response?.vinNumber,
   };
   store.dispatch(setActiveVin(vinData));
};

const demoResponseValueCallback = (data) => {
   store.dispatch(updateParamData(data.fieldValue));
};

const replyAllDtcEventCallback = (data) => {
   store.dispatch(updateAllDTCData(data.data));
};

const replyEcuParametersList = (data) => {
   store.dispatch(getecuParameter(data?.data?.ecuParameters));
};

// const replyEcuStatus = (data) => {
//    store.dispatch(getecuStatus(data?.data?.ecuStatus));
// };
const replyEcuStatusValues = (data) => {
   store.dispatch(getecuStatusValues(data?.data?.ecuStatusValues));
};
const replyDashboardParametersCallback = async (data) => {
   store.dispatch(setcarDetails(data));
};
const replyEcuParameter = async (data) => {
   if (data?.data) {
      store.dispatch(getParameterData(data?.data?.ecuParameterValue));
   }
};
const replyEcuStatus = async (data) => {
   if (data?.data) {
      store.dispatch(getStatusData(data?.data?.ecuStatusParamValue));
   }
};
const replyEcuConnectivityStatus = async (data) => {
   if (data?.data) {
      store.dispatch(getEcuConnectivityData(data?.data?.ecuPositionData));
   }
   if (data?.status === 200) {
      store.dispatch(addEcusScanList(data));
   }
};
const replyEcuFlashing = async (data) => {
   if (data?.data) {
      store.dispatch(getEcuFlashing(data?.data));
   }
};
const replyEcuActuatorParams = async (data) => {
   store.dispatch(getActuatorDropDown(data))

};
const replyEcuActuatorParamOptions=(data)=>{
   console.log("replyEcuActuatorParamOptions",data)
   store.dispatch(getActuatorData(data));
}
//getting ecu list
// const replyEcuConnectivityStatusCallback = (data) => {
//    console.log("dd data", data?.status);

// };
//getting dtc list
const replyEcuDtcListCallback = (data) => {
   store.dispatch(addEcuDtcListRedux(data));
};
//===============================================
//getting scaning ecu's data
// const replyEcuScanListCallback = (data) => {
//    console.log("replyEcuScanListCallback", data?.data?.ecuScanList?.ecuData);
//    store.dispatch(getEcuListdata(data?.data?.ecuScanList?.ecuData));
// };

export const listenEcuSocketEvents = () => {
   // Detaching the event before attaching
   ecuSocket.off(socketEvents.replyVciInfo);
   // Reply "Fetch VCI info" listener
   ecuSocket.on(socketEvents.replyVciInfo, replyVciInfoEventCallback);

   // Detaching the event before attaching
   ecuSocket.off(socketEvents.replyVinNumber);
   // Reply "Fetch VIN Number" listener
   ecuSocket.on(socketEvents.replyVinNumber, replyVinNumnerEventCallback);

   // Detaching the event before attaching
   ecuSocket.off(socketEvents.responseValue);
   // Reply "Fetch Ecu param" listener
   ecuSocket.on(socketEvents.responseValue, demoResponseValueCallback);

   // Detaching the event before attaching
   ecuSocket.off(socketEvents.replyAllDtc);
   // Reply "Fetch All DTC" listener
   ecuSocket.on(socketEvents.replyAllDtc, replyAllDtcEventCallback);

   ecuSocket.off(socketEvents.replyEcuParametersList);
   ecuSocket.on(socketEvents.replyEcuParametersList, replyEcuParametersList);
   ecuSocket.off(socketEvents.replyEcuParameterValue);
   ecuSocket.on(socketEvents.replyEcuParameterValue, replyEcuParameter);
   ecuSocket.off(socketEvents.replyEcuStatusParamValue);
   ecuSocket.on(socketEvents.replyEcuStatusParamValue, replyEcuStatus);
   ecuSocket.off(socketEvents.replyEcuStatusValues);
   ecuSocket.on(socketEvents.replyEcuStatusValues, replyEcuStatusValues);
   ecuSocket.off(socketEvents.replyEcuConnectivityStatus);
   ecuSocket.on(
      socketEvents.replyEcuConnectivityStatus,
      replyEcuConnectivityStatus
   );
   ecuSocket.off(socketEvents.replyEcuFlashing);
   ecuSocket.on(socketEvents.replyEcuFlashing, replyEcuFlashing);
   ecuSocket.off(socketEvents.replyDashboardParameters);
   ecuSocket.off(socketEvents.replyEcuActuatorParams);
   ecuSocket.on(socketEvents.replyEcuActuatorParams, replyEcuActuatorParams);
   ecuSocket.on(
      socketEvents.replyDashboardParameters,
      replyDashboardParametersCallback
   );
   ecuSocket.off(socketEvents.replyEcuActuatorParamOptions)
   ecuSocket.on(socketEvents.replyEcuActuatorParamOptions,replyEcuActuatorParamOptions)
   //============================================
   ecuSocket.off(socketEvents.replyEcuDtcList);
   ecuSocket.on(socketEvents.replyEcuDtcList, replyEcuDtcListCallback);
};
