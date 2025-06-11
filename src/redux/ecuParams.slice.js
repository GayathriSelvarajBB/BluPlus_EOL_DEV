import { createSlice } from "@reduxjs/toolkit";

const initialState = {
   // dtcData: {},
   dtcData: {
      BCM: {
         dtcResponse: [
            {
               dtcCode: "CODE345",
               dtcStatus: "Status",
               ecuName: "BCM",
               dtcDescription: "NO Description",
            },
            {
               dtcCode: "CODE334",
               dtcStatus: "Statttttus",
               ecuName: "BCM",
               dtcDescription: "NO Description dtfgh",
            },
         ], // contains the array of DTCs
         ecuName: "BCM",
         ecuStatus: "healthy", // contains the status of the ECU ( "healthy" | "faulty" | "undetected" )
      },
   },
   dtcCount: 2,
};

/* 
Example reducer data
{
   vinNumber: "",
   softwarePartNumber: "",
   hardwarePartNumber: "",
   dtcData: {
      "BCM": {
         dtcResponse: [], // contains the array of DTCs
         ecuName: "BCM",
         ecuStatus: "healthy" // contains the status of the ECU ( "healthy" | "faulty" | "undetected" )
      }
   }
}
 */

const ecuParamsSlice = createSlice({
   name: "ecuParams",
   initialState: initialState,
   reducers: {
      updateParamData(state, { payload }) {
         return state ? { ...state, ...payload } : payload;
      },
      updateAllDTCData(state, { payload }) {
         const existingState = state || initialState;
         return {
            ...existingState,
            dtcData: {
               ...state.dtcData,
               [payload.ecuName]: payload,
            },
            dtcCount:
               state.dtcCount +
               (payload.dtcResponse?.length || 0) -
               (state.dtcData[payload.ecuName]?.dtcResponse?.length || 0),
         };
      },
      clearEcuParamData(state) {
         return state.dtcData ? { dtcData: state.dtcData } : {};
      },
      clearDtcData(state) {
         state.dtcData = {};
         state.dtcCount = 0;
         return state;
      },
   },
});

export const {
   updateParamData,
   updateAllDTCData,
   clearEcuParamData,
   clearDtcData,
} = ecuParamsSlice.actions;

export default ecuParamsSlice;
