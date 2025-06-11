import { createSlice } from "@reduxjs/toolkit";

const StationNameSlice = createSlice({
   name: "StationName",
   initialState:[ {
      value: "Battery Fitment",
      id:"01"
   }],
   reducers: {
      UpdateStationName: (state, action) => {
         state[0]= action.payload;
      },
   },
});
export const {UpdateStationName}=StationNameSlice.actions;
export default StationNameSlice
