import { createSlice } from "@reduxjs/toolkit";

const initialState = {
   flashFilesDownloaded: false,
};

const ecuFlashingSlice = createSlice({
   name: "ecuFlashing",
   initialState: initialState,
   reducers: {
      updateEcuFlashing(state, { payload }) {
         return { ...state, ...payload };
      },
      clearEcuFlashing(state) {
         return null;
      },
   },
});

export const { updateEcuFlashing, clearEcuFlashing } = ecuFlashingSlice.actions;

export default ecuFlashingSlice;
