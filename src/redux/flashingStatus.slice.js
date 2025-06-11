import { createSlice } from "@reduxjs/toolkit";

const flashingStatusSlice = createSlice({
   name: "FlashingStatus ",
   initialState: {
      ecuFlashing: [],
   },
   reducers: {
      getEcuFlashing: (state, { payload }) => {
         return {
            ...state,
            ecuFlashing: [...state.ecuFlashing, payload],
         };
      },
    
      // deleteParameter: (state, { payload }) => {
      //    return{
      //       ...state,
      //       ecuParameter:[]
      //    }
      // },
   },
});

export const { getEcuFlashing } =
flashingStatusSlice.actions;

export default flashingStatusSlice;
