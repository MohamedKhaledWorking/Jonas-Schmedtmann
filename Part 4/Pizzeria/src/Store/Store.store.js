import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "../Features/cartSlice.js";
import checkOutSlice from "../Features/checkOut.js";

export const store = configureStore({
  reducer: {
    cart: cartSlice,
    checkOut: checkOutSlice,
  },
});
