import { createSlice } from "@reduxjs/toolkit";

const userParamSlice = createSlice({
   name: "userParam",
   initialState: [],
   reducers: {
      setUserParam(state, { payload }) {
         return payload;
      },
   },
});

export const { setUserParam } = userParamSlice.actions;

export default userParamSlice;
