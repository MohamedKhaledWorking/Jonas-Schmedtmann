import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "../Features/cartSlice.js";
import checkOutSlice from "../Features/checkOut.js";
import menuSlice from "../Features/menuSlice.js";
import addressSlice from "../Features/address.js";

export const store = configureStore({
  reducer: {
    cart: cartSlice,
    checkOut: checkOutSlice,
    menu: menuSlice,
    address: addressSlice,
  },
});
