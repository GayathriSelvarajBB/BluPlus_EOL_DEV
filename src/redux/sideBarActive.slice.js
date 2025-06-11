import { createSlice } from "@reduxjs/toolkit";

const sideBarActiveSlice = createSlice({
   name: "sideBarActive",
   initialState: false,
   reducers: {
      sideBarActiveStatus: (state, { payload }) => {
         return state=payload;
      },
   },
});
export const { sideBarActiveStatus } = sideBarActiveSlice.actions;

export default sideBarActiveSlice;
