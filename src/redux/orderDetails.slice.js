import { createSlice } from "@reduxjs/toolkit";

const OrderSlice = createSlice({
   name: "Order",
   initialState: {
      inputValue: [""],
   },
   reducers: {
      OrderInputValue: (state, action) => {
         state.inputValue = action.payload;
      },
   },
});
export const { OrderInputValue } = OrderSlice.actions;
export default OrderSlice;