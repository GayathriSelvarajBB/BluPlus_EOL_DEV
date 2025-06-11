import { createSlice } from "@reduxjs/toolkit";

const getActuatorSelectorSlice = createSlice({
   name: "ActuatorData",
   initialState: {
      actuatorData: [],
   },
   reducers: {
      getActuatorDropDown: (state, action) => {
         if (action?.payload?.status === 200) {
            state.actuatorData = action?.payload?.data?.ecuActuatorParams;
         } else {
            state.actuatorData = [];
         }
      },
      removeActuatorDropDown: (state) => {
         state.actuatorData = [];
      },
   },
});

export const { getActuatorDropDown,removeActuatorDropDown } = getActuatorSelectorSlice.actions;

export default getActuatorSelectorSlice;
