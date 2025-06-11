import { createSlice } from "@reduxjs/toolkit";

const StationStatusSlice = createSlice({
   name: "StationStatus",
   initialState: {
      Value: "Battery Fitment",
   },
   reducers: {
      UpdateStationStatus: (state, action) => {
         state.Value = action.payload;
      },
   },
});
export const { UpdateStationStatus } = StationStatusSlice.actions;
export default StationStatusSlice;