import { createSlice } from "@reduxjs/toolkit";

const ecuFlashingManifestSlice = createSlice({
   name: "ecuFlashingManifestData",
   initialState: [],
   reducers: {
      setFlashManifestData(state, { payload }) {
         return payload;
      },
   },
});

export const { setFlashManifestData } = ecuFlashingManifestSlice.actions;

export default ecuFlashingManifestSlice;
