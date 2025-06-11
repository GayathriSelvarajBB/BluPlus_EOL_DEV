import { createSlice } from "@reduxjs/toolkit";

const batteryFlowSlice = createSlice({
   name: "Batteryflow",
   initialState: {
      status: false,
   },
   reducers: {
      batteryStatusDetails: (state, action) => {
         state.status = action.payload;
      },
   },
});
export const { batteryStatusDetails } = batteryFlowSlice.actions;
export default batteryFlowSlice;
