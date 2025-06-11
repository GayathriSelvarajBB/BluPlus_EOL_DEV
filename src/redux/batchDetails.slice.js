import { createSlice } from "@reduxjs/toolkit";

const BatchSlice = createSlice({
   name: "input",
   initialState: {
      inputValue: "",
   },
   reducers: {
      updateInputValue: (state, action) => {
         state.inputValue = action.payload;
      },
   },
});
export const { updateInputValue } = BatchSlice.actions;
export default BatchSlice;
