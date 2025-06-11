import { createSlice } from "@reduxjs/toolkit";

const vciStatusSlice = createSlice({
   name: "vciStatus",
   initialState: null,
   reducers: {
      setVciStatusRedux(state, { payload }) {
         return payload;
      },
   },
});

export const { setVciStatusRedux } = vciStatusSlice.actions;

export default vciStatusSlice;
