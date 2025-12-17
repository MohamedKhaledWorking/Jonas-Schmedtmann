import { configureStore } from "@reduxjs/toolkit";
import accountReducer from "../Features/Account/AccountSlice.js";
import userReducer  from "../Features/User/UserSlice.js";

export const store = configureStore({
  reducer: {
    account: accountReducer,
    user: userReducer,
  },
});

