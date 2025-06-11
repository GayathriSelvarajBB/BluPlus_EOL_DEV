import { configureStore } from "@reduxjs/toolkit";
import activeVinSlice from "redux/activeVin.slice";
import userParamSlice from "redux/userParam.slice";
import activeServiceSessionSlice from "redux/activeServiceSession.slice";
import sessionTimeout from "redux/sessionTimeout.slice";
import logger from "redux-logger";
import manifestDataSlice from "./manifestData.slice";
import ecuFlashingManifestSlice from "./flashEcuManifest.slice";
import ecuParamsSlice from "redux/ecuParams.slice";
import vciInfoSlice from "redux/vciInfo.slice";
import ecuFlashingSlice from "redux/ecuFlashing.slice";

import vehicleParameterSlice from "redux/vehicleParameters.slice";
import vehicleConfigSlice from "redux/vehicleConfig.slice";
import serviceSessionSlice from "./serviceSession.slice";
import dtcListSlice from "./dtcList.slice";
import vciStatusSlice from "./vciStatus.slice";
import carDetailsSlice from "./carDetails.slice";
import ecuListSlice from "./ecuList.slice";
import freezeSlice from "./freezeSlice";
import themeModeSlice from "./themeMode";
import techBulletinSlice from "./TechBulletinSlice";
// import symtomsDiagnosisSlice from "./SymtomsDignosisSlice";
// import vehicleInfoSlice from "./vehicleInfo.slice";
import isPopupSlice from "./isPopup.slice";
import sideBarActiveSlice from "./sideBarActive.slice";
import ecuSlice from "./ecuFlashingdetails.slice";
import fileSlice from "./filename.slice";
import BatchSlice from "./batchDetails.slice";
import fileDataSlice from "./filedata.slice";
import OrderSlice from "./orderDetails.slice";
import batteryFlowSlice from "./batteryFlow.slice";
import eolSessionSlice from "./eolSession.slice";
import freezeDataSlice from "./freezeData.slice";
import StationStatusSlice from "./stationStatus.slice";
import StationNameSlice from "./stationName.slice";
import getEcuListSlice from "./getEcuList.slice";
import getEcuParameterDataSlice from "./getEcuParameterData.slice";
import getEcuStatusSlice from "./getEcuStatus.slice";
import checkEcuConnectivityStatusSlice from "./checkEcuConnectivity.slice";
import flashingStatusSlice from "./flashingStatus.slice";
import ecusScanListSlice from "./ecusScanList.slice";
import ecuDtcListSlice from "./ecuDtcList.slice";
import getActuatorSelectorSlice from "./actuatorselected.slice";
import getActuatorDropDownDataSlice from "./actuatorsDropDownData.slice";
const store = configureStore({
   reducer: {
      activeVin: activeVinSlice.reducer,
      userParam: userParamSlice.reducer,
      activeServiceSession: activeServiceSessionSlice.reducer,
      sessionTimeout: sessionTimeout.reducer,
      manifestData: manifestDataSlice.reducer,
      ecuFlashingManifestData: ecuFlashingManifestSlice.reducer,
      ecuParams: ecuParamsSlice.reducer,
      vciInfo: vciInfoSlice.reducer,
      carDetails: carDetailsSlice.reducer,
      ecuFlashing: ecuFlashingSlice.reducer,
      vehicleParameter: vehicleParameterSlice.reducer,
      vehicleConfigSlice: vehicleConfigSlice.reducer,
      serviceSessionSlice: serviceSessionSlice.reducer,
      dtcListSlice: dtcListSlice.reducer,
      vciStatusSlice: vciStatusSlice.reducer,
      ecuListSlice: ecuListSlice.reducer,
      freezeSlice: freezeSlice.reducer,
      themeModeSlice: themeModeSlice.reducer,
      techBulletinSlice: techBulletinSlice.reducer,
      // symtomsDiagnosisSlice: symtomsDiagnosisSlice.reducer,
      // vehicleInfoSlice: vehicleInfoSlice.reducer,
      isPopupSlice:isPopupSlice.reducer,
      sideBarActiveSlice:sideBarActiveSlice.reducer,
      ecuList:ecuSlice.reducer,
      updateFileName:fileSlice.reducer,
      updateInputValue:BatchSlice.reducer,
      updateFileData:fileDataSlice.reducer,
      OrderInputValue:OrderSlice.reducer,
      batteryStatus:batteryFlowSlice.reducer,
      UpdateEolSession:eolSessionSlice.reducer,
      FreezeData:freezeDataSlice.reducer,
      UpdateStationStatus:StationStatusSlice.reducer,
      UpadateStationName:StationNameSlice.reducer,
      getEcuListdata:getEcuListSlice.reducer,
      getParameterData:getEcuParameterDataSlice.reducer,
      getStatusData:getEcuStatusSlice.reducer,
      getEcuConnectivityData:checkEcuConnectivityStatusSlice.reducer,
      getEcuFlashing:flashingStatusSlice.reducer,
      ecusScanListSlice:ecusScanListSlice.reducer,
      ecuDtcListSlice:ecuDtcListSlice.reducer,
      getActuatorDropDown:getActuatorSelectorSlice.reducer,
      getActuatorData:getActuatorDropDownDataSlice.reducer
      
   },
   middleware: [logger],
});

export default store;
