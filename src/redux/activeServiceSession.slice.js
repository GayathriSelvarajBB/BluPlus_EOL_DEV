import { createSlice } from "@reduxjs/toolkit";

const activeServiceSessionSlice = createSlice({
   name: "activeServiceSession",
   initialState: null,
   reducers: {
      setActiveServiceSession(state, { payload }) {
         return payload;
      },
      updateActiveServiceSessionEndTime(state) {
         state.endTime = new Date().toISOString();
         return state;
      },
   },
});

export const { setActiveServiceSession, updateActiveServiceSessionEndTime } =
   activeServiceSessionSlice.actions;

export default activeServiceSessionSlice;
