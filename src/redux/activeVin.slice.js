import { createSlice } from "@reduxjs/toolkit";

const activeVinSlice = createSlice({
   name: "activeVin",
   initialState: null,
   reducers: {
      setActiveVin(state, { payload }) {
         return payload;
      },
   },
});

export const { setActiveVin } = activeVinSlice.actions;

export default activeVinSlice;
