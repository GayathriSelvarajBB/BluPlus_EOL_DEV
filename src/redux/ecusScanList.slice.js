import { createSlice } from "@reduxjs/toolkit";

const ecusScanListSlice = createSlice({
   name: "ecusScanList",
   initialState: [],
   reducers: {
      // this is for socket
      addEcusScanList: (state, { payload }) => {
         if (!payload?.data?.error) {
            return [
               ...state,
               {
                  dllCallMethod: payload?.data?.dllCallMethod,
                  ecuName: payload?.data?.ecuName,
                  ecuPositionData: payload?.data?.ecuPositionData,
               },
            ];
         } else {
            return [
               ...state,
               {
                  dllCallMethod: payload.data.dllCallMethod,
                  ecuName: payload.data.ecuName,
                  ecuPositionData: "",
               },
            ];
         }
      },
      modifyEcusScanList: (state, { payload }) => {
         let modifyData;
         payload.map((elem) => {
            modifyData = state.map((item) => {
               if (item.ecuName === elem.ecuName) {
                  return {
                     ...item,
                     ecuStatus: elem.isDtcFound,
                  };
               } else {
                  return {
                     ...item,
                  };
               }
            });
            state = modifyData;
         });

         return state;
      },
      removeAllScanEcuListRedux: (state, { payload }) => {
         state = [];
         return state;
      },
   },
});

export const {
   addEcusScanList,
   modifyEcusScanList,
   removeAllScanEcuListRedux,
} = ecusScanListSlice.actions;

export default ecusScanListSlice;
