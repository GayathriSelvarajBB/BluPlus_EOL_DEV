import { createSlice } from "@reduxjs/toolkit";

const ecuParameterValues = createSlice({
   name: "ecuParameter",
   initialState: [],
   reducers: {
      getecuparameterValues: (state, { payload }) => {
         return payload;
      },
   },
});

export const { getecuparameterValues } = ecuParameterValues.actions;

export default ecuParameterValues;
