import { createSlice } from "@reduxjs/toolkit";

const vehicleParameterSlice = createSlice({
   name: "vehicleParameterSlice",
   initialState: null,
   reducers: {
      setVehicleParametersSlice(state, { payload }) {
         return payload;
      },
   },
});

export const { setVehicleParametersSlice } = vehicleParameterSlice.actions;

export default vehicleParameterSlice;
