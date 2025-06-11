import { createSlice } from "@reduxjs/toolkit";
const initialState = {
   AllData: {},
   TBdownloadPDF: {},
};

const techBulletinSlice = createSlice({
   name: "TechBulletin",
   // initialState: { },
   initialState,
   reducers: {
      getTechBullentinApiData: (state, { payload }) => {
         state.AllData = payload;
      },
      // downloadTechBulletinData: (state, { payload }) => {
      //    state.TBdownloadPDF = payload;
      // },
   },
});

export const { getTechBullentinApiData, downloadTechBulletinData } =
   techBulletinSlice.actions;

export default techBulletinSlice;
