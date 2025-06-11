import { createSlice } from "@reduxjs/toolkit";

const ecuStatusValue = createSlice({
   name: "ecuStatus",
   initialState: [],
   reducers: {
      getecuStatusValues: (state, { payload }) => {
         return payload;
      },
   },
});
export const { getecuStatusValues } = ecuStatusValue.actions;

export default ecuStatusValue;
