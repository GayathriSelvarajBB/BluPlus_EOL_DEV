import { createSlice } from "@reduxjs/toolkit";

const checkEcuConnectivityStatusSlice = createSlice({
   name: "EcuConnectivity",
   initialState: {
      ecuConnectivityStatus: [],
   },
   reducers: {
      getEcuConnectivityData: (state, { payload }) => {
         return {
            ...state,
            ecuConnectivityStatus: [...state.ecuConnectivityStatus, payload],
         };
      },
      removeEcuConnectivityData: (state, { payload }) => {
         let deletevar = state?.ecuConnectivityStatus?.filter(
            (item) => item.ecuName !== payload
         );
         console.log("eol payload", deletevar);
         return {
            ...state,
            ecuConnectivityStatus: deletevar,
         };
      },
      removeEcuconnectivity:(state,{payload})=>{
         return{
            ...state,
            ecuConnectivityStatus:[]
         }
      }
   },
});

export const { getEcuConnectivityData, removeEcuConnectivityData,removeEcuconnectivity } =
   checkEcuConnectivityStatusSlice.actions;

export default checkEcuConnectivityStatusSlice;
