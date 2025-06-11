import { createSlice } from "@reduxjs/toolkit";

const ecuFlashingdeatails = createSlice({
   name: "ecuList",
   initialState: [],
   reducers: {
      ecuList: (state, { payload }) => {
         console.log("dd rdux",state)
         
         return payload;
      },
   },
});

export const { ecuList } = ecuFlashingdeatails.actions;

export default ecuFlashingdeatails;
