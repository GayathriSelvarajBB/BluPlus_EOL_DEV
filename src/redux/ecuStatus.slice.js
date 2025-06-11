import { createSlice } from "@reduxjs/toolkit";

const ecuStatus = createSlice({
   name: "ecuStatus",
   initialState: [],
   reducers: {
      getecuStatus: (state, { payload }) => {
         return payload;
      },
   },
});

export const { getecuStatus } = ecuStatus.actions;

export default ecuStatus;
