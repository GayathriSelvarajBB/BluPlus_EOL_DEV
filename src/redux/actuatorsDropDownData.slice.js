import { createSlice } from "@reduxjs/toolkit";

const getActuatorDropDownDataSlice = createSlice({
   name: "ActuatorDropDown",
   initialState: {
      actuatorData: [],
   },
   reducers: {
      getActuatorData: (state, action) => {
         if (action?.payload?.status === 200) {
            state.actuatorData =
               action?.payload?.data?.ecuActuatorParameterOptions;
         }
      },
      removeActuatorData:(state)=>{
         state.actuatorData=[]
      }
   },
});

export const { getActuatorData,removeActuatorData } = getActuatorDropDownDataSlice.actions;

export default getActuatorDropDownDataSlice;
