import { createSlice } from "@reduxjs/toolkit";

const freezeSlice = createSlice({
   name: "freezeSideBar",
   initialState: true,
   reducers: {
      getFreezeAll: (state, { payload }) => {
         return payload;
      },
   },
});

export const { getFreezeAll } = freezeSlice.actions;

export default freezeSlice;
