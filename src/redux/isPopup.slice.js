import { createSlice } from "@reduxjs/toolkit";

const isPopupSlice = createSlice({
   name: "isPopupOpen",
   initialState: false,
   reducers: {
      isPopupOpen: (state, { payload }) => {
         return (state = payload);
      },
   },
});

export const { isPopupOpen } = isPopupSlice.actions;

export default isPopupSlice;
