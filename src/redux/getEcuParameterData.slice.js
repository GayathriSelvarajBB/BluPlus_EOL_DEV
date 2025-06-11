import { createSlice } from "@reduxjs/toolkit";

const getEcuParameterDataSlice = createSlice({
   name: "ParameterData",
   initialState: {
      ecuParameter: [],
   },
   reducers: {
      getParameterData: (state, { payload }) => {
         return {
            ...state,
            ecuParameter: [...state.ecuParameter, payload],
         };
      },
      removeParameter: (state, { payload }) => {
         return{
            ...state,
            ecuParameter:[]
         }
      },
      // deleteParameter: (state, { payload }) => {
      //    return{
      //       ...state,
      //       ecuParameter:[]
      //    }
      // },
   },
});

export const { getParameterData, removeParameter,deleteParameter } =
   getEcuParameterDataSlice.actions;

export default getEcuParameterDataSlice;
