import { createSlice } from "@reduxjs/toolkit";

const ecuListSlice = createSlice({
   name: "ecuList",
   initialState: {
      ecuList:[]},
   reducers: {
      addEcuList: (state, action ) => {
         return state.ecuList=action.payload;
      },
   },
});

export const { addEcuList } = ecuListSlice.actions;

export default ecuListSlice;
