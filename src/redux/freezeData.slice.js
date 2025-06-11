import { createSlice } from "@reduxjs/toolkit";

const freezeDataSlice = createSlice({
   name: "freezeData",
   initialState: {
      Value: false,
   },
   reducers: {
      FreezeData: (state, action) => {
         state.Value = action.payload;
      },
   },
});
export const { FreezeData } = freezeDataSlice.actions;
export default freezeDataSlice;
