import { createSlice } from "@reduxjs/toolkit";

const fileDataSlice = createSlice({
   name: "filedata",
   initialState: {
      fileData: [],
   },
   reducers: {
      updateFileData: (state, action) => {
         state.fileData = action.payload;
      },
   },
});

export const { updateFileData } = fileDataSlice.actions;
export default fileDataSlice;