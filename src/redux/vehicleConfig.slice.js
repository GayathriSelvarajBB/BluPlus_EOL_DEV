/* eslint-disable indent */
import { createSlice } from "@reduxjs/toolkit";

const vehicleConfigSlice = createSlice({
   name: "vehicleConfig",
   initialState: {
      BMS: {
         expandName: "Battery Management System",
         busName: "EVBUS",
         values: [
            {
               parameterName: "State of charge calculations",
               cloudStatus: false,
               carStatus: false,
               carAction: true,
            },
              {
                 parameterName: "Cell over-voltage and under-voltage protection",
                 cloudStatus: false,
                 carStatus: false,
                 carAction:true

              },
              {
                 parameterName: "Intelligent battery balancing (passive)",
                 cloudStatus: true,
                 carStatus: true,
                 carAction:false

              },
              {
                 parameterName: "Battery charger control",
                 cloudStatus: true,
                 carStatus: true,
                 carAction:false

              },
              {
                 parameterName: "Pack temperature monitoring",
                 cloudStatus: false,
                 carStatus: false,
                 carAction:true

              },
              {
                 parameterName: "Monitors health of battery pack",
                 cloudStatus: true,
                 carStatus: true,
                 carAction:false

              },
         ],
      },

      TRM: {
         expandName: "Trailer Response Management",
         busName: "EVBUS",
         values: [
            {
               parameterName: "State of charge calculations",
               cloudStatus: false,
               carStatus: false,
               carAction: true,
            },
            {
               parameterName: "Cell over-voltage and under-voltage protection",
               cloudStatus: false,
               carStatus: false,
               carAction: true,
            },
            {
               parameterName: "Intelligent battery balancing (passive)",
               cloudStatus: true,
               carStatus: true,
            },
            {
               parameterName: "Battery charger control",
               cloudStatus: true,
               carStatus: true,
            },
            {
               parameterName: "Pack temperature monitoring",
               cloudStatus: false,
               carStatus: false,
            },
            {
               parameterName: "Monitors health of battery pack",
               cloudStatus: true,
               carStatus: true,
               carAction: true,
            },
         ],
      },
      WEVC: {
         expandName: "Wireless Electric Vehicle charging",
         busName: "INVCAN",
         values: [
            {
               parameterName: "State of charge calculations",
               cloudStatus: true,
               carStatus: false,
               carAction: true,
            },
            {
               parameterName: "Cell over-voltage and under-voltage protection",
               cloudStatus: false,
               carStatus: false,
               carAction: true,
            },
            {
               parameterName: "Intelligent battery balancing (passive)",
               cloudStatus: true,
               carStatus: true,
            },
            {
               parameterName: "Battery charger control",
               cloudStatus: false,
               carStatus: true,
            },
            {
               parameterName: "Pack temperature monitoring",
               cloudStatus: false,
               carStatus: false,
            },
            {
               parameterName: "Monitors health of battery pack",
               cloudStatus: false,
               carStatus: true,
            },
         ],
      },
      ECC: {
         expandName: "Electrical Climate Controller",
         busName: "CBUS",
         values: [
            {
               parameterName: "State of charge calculations",
               cloudStatus: false,
               carStatus: false,
            },
            {
               parameterName: "Cell over-voltage and under-voltage protection",
               cloudStatus: false,
               carStatus: false,
            },
            {
               parameterName: "Intelligent battery balancing (passive)",
               cloudStatus: true,
               carStatus: true,
            },
            {
               parameterName: "Battery charger control",
               cloudStatus: true,
               carStatus: true,
            },
            {
               parameterName: "Pack temperature monitoring",
               cloudStatus: false,
               carStatus: false,
            },
            {
               parameterName: "Monitors health of battery pack",
               cloudStatus: true,
               carStatus: true,
            },
         ],
      },
      PDS: {
         expandName: "Power Distribution Unit",
         busName: "IBUS1",
         values: [
            {
               parameterName: "State of charge calculations",
               cloudStatus: false,
               carStatus: false,
               carAction: true,
            },
            {
               parameterName: "Cell over-voltage and under-voltage protection",
               cloudStatus: false,
               carStatus: false,
               carAction: false,
            },
            {
               parameterName: "Intelligent battery balancing (passive)",
               cloudStatus: true,
               carStatus: true,
               carAction: true,
            },
            {
               parameterName: "Battery charger control",
               cloudStatus: true,
               carStatus: true,
               carAction: true,
            },
            {
               parameterName: "Pack temperature monitoring",
               cloudStatus: false,
               carStatus: false,
               carAction: false,
            },
            {
               parameterName: "Monitors health of battery pack",
               cloudStatus: true,
               carStatus: true,
               carAction: true,
            },
         ],
      },
      VCU: {
         expandName: "Vehicle Control Unit",
         busName: "IBUS2",
         values: [
            {
               parameterName: "State of charge calculations",
               cloudStatus: false,
               carStatus: false,
            },
            {
               parameterName: "Cell over-voltage and under-voltage protection",
               cloudStatus: false,
               carStatus: false,
            },
            {
               parameterName: "Intelligent battery balancing (passive)",
               cloudStatus: true,
               carStatus: true,
            },
            {
               parameterName: "Battery charger control",
               cloudStatus: true,
               carStatus: true,
            },
            {
               parameterName: "Pack temperature monitoring",
               cloudStatus: false,
               carStatus: false,
            },
            {
               parameterName: "Monitors health of battery pack",
               cloudStatus: true,
               carStatus: true,
            },
         ],
      },
   },
   reducers: {
      setVehicleConfig: (state, action) => {
         const { status, data, index } = action.payload;
         state[data].values[index].carStatus = status;
         return state;
      },
   },
});

export const { setVehicleConfig } = vehicleConfigSlice.actions;

export default vehicleConfigSlice;
