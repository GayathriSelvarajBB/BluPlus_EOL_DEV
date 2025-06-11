import { createSlice } from "@reduxjs/toolkit";

const vciInfoSlice = createSlice({
   name: "vciInfo",
   initialState: null,
   reducers: {
      setVciInfo(state, { payload }) {
         return payload;
      },
      clearVciInfo(state) {
         return null
      }
   },
});

export const { setVciInfo, clearVciInfo } = vciInfoSlice.actions;

export default vciInfoSlice;
