import { createSlice } from "@reduxjs/toolkit";
const eolSessionSlice = createSlice({
   name: "eolSession",
   initialState: {
      eolselect: false,
   },
   reducers: {
      UpdateEolSession: (state, action) => {
         state.eolselect = action.payload;
      },
   },
});
export const { UpdateEolSession } = eolSessionSlice.actions;
export default eolSessionSlice
