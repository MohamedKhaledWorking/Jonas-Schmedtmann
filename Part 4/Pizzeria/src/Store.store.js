import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./Features/cartSlice.js";

export const store = configureStore({
  reducer: {
    cart: cartSlice,
  },
});
