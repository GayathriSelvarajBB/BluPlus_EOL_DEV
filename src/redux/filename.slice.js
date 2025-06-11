import { createSlice } from "@reduxjs/toolkit";

const fileSlice = createSlice({
   name: "file",
   initialState: {
      fileName: [],
   },
   reducers: {
      updateFileName: (state, action) => {
         state.fileName = [...state.fileName, ...action.payload];
      },
   },
});

export const { updateFileName } = fileSlice.actions;
export default fileSlice;
