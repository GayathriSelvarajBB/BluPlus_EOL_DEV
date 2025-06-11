import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import logger from "redux-logger";
import activeServiceSessionSlice from "redux/activeServiceSession.slice";
import activeVinSlice from "redux/activeVin.slice";
import ecuParamsSlice from "redux/ecuParams.slice";
import sessionTimeout from "redux/sessionTimeout.slice";
import userParamSlice from "redux/userParam.slice";
import vciInfoSlice from "redux/vciInfo.slice";

// Initial state will be uncommented and will be used if needed
// const initialState = {}

export const testStore = configureStore({
   reducer: {
      activeVin: activeVinSlice.reducer,
      userParam: userParamSlice.reducer,
      activeServiceSession: activeServiceSessionSlice.reducer,
      sessionTimeout: sessionTimeout.reducer,
      ecuParams: ecuParamsSlice.reducer,
      vciInfo: vciInfoSlice.reducer,
   },
   middleware: [logger],
   // preloadedState: initialState // uncomment to provide initial state
});

const TestProvider = ({ children }) => (
   <Provider store={testStore}>{children}</Provider>
);

export default TestProvider;
