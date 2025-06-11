import { createSlice } from "@reduxjs/toolkit";

const themeModeSlice = createSlice({
   name: "themeMode",
   initialState: false,
   reducers: {
      getThemeMode: (state, { payload }) => {
         return payload;
      },
   },
});

export const { getThemeMode } = themeModeSlice.actions;

export default themeModeSlice;
