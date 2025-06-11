import { createSlice } from "@reduxjs/toolkit";

const manifestDataSlice = createSlice({
   name: "manifestData",
   initialState: [],
   reducers: {
      setManifestData(state, { payload }) {
         return payload;
      },
      clearManifestData(state) {
         return {};
      },
   },
});

export const { setManifestData, clearManifestData } = manifestDataSlice.actions;

export default manifestDataSlice;
