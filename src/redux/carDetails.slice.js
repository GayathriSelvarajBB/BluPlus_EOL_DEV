import { createSlice } from "@reduxjs/toolkit";

const carDetailsSlice = createSlice({
   name: "carDetails",
   initialState: [
      {
         vehicleName: "",
         vehicleModel: "",
         vehicleVIN: "",
         vehicleSpeed: "0000",
         vehicleVoltage: "0",
      },
   ],
   // initialState: [
   //    { dllCallMethod: "", vehicleName: "", ecuCanId: "" },
   //    { dllCallMethod: "READVehicleModel", vehicleModel: "", ecuCanId: "" },
   // ],
   reducers: {
      setcarDetails(state, { payload }) {
         return {
            ...state,
            vehicleName:
               payload?.data?.dllCallMethod === "READVehiclename"
                  ? payload?.data?.dashboardParameterValue
                  : state?.vehicleName,

            vehicleModel:
               payload?.data?.dllCallMethod === "READVehicleModel"
                  ? payload?.data?.dashboardParameterValue
                  : state?.vehicleModel,
            vehicleVIN:
               payload?.data?.dllCallMethod === "READVIN"
                  ? payload?.data?.dashboardParameterValue
                  : state?.vehicleVIN,
            vehicleSpeed:
               payload?.data?.dllCallMethod === "READVehicleSpeed"
                  ? payload?.data?.dashboardParameterValue
                  : state?.vehicleSpeed,
            vehicleVoltage:
               payload?.data?.dllCallMethod === "READBatteryVolt"
                  ? payload?.data?.dashboardParameterValue
                  : state?.vehicleVoltage,
         };
         // return payload;
      },
   },
});

export const { setcarDetails } = carDetailsSlice.actions;

export default carDetailsSlice;
