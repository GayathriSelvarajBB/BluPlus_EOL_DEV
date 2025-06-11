import { createSlice } from "@reduxjs/toolkit";

const ecuParameterSlice = createSlice({
   name: "ecuParameter",
   initialState: [],
   reducers: {
      getecuParameter: (state, { payload }) => {
         return payload;
      },
   },
});

export const { getecuParameter } = ecuParameterSlice.actions;

export default ecuParameterSlice;
