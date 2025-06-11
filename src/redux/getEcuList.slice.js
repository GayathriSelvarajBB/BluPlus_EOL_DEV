import { createSlice } from "@reduxjs/toolkit";

const getEcuListSlice = createSlice({
   name: "Eculists",
   initialState: [],
   reducers: {
      getEcuListdata: (state, { payload }) => {
         return payload;
      },
   },
});

export const { getEcuListdata } = getEcuListSlice.actions;

export default getEcuListSlice;