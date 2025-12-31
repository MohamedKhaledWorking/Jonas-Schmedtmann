import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  id: "",
  user: "",
  isPriority: false,
  items: [],
  address: null,
  total: 0,
  paymentMethod: "",
};
const checkOutSlice = createSlice({
  name: "checkOut",
  initialState,
  reducers: {
    setOrder(state, action) {
      return action.payload;
    },
  },
});

export const { setOrder } = checkOutSlice.actions;

export default checkOutSlice.reducer;
