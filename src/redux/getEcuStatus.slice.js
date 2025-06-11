import { createSlice } from "@reduxjs/toolkit";

const getEcuStatusSlice = createSlice({
   name: "StatusData",
   initialState: {
      ecuStatus: [],
   },
   reducers: {
      getStatusData: (state, { payload }) => {
         return {
            ...state,
            ecuStatus: [...state.ecuStatus, payload],
         };
      },
      removeStatus: (state, { payload }) => {
         return{
            ...state,
            ecuStatus:[]
         }
      },
     
   },
});

export const { getStatusData, removeStatus } =
getEcuStatusSlice.actions;

export default getEcuStatusSlice;
