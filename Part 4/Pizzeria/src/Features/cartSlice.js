import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  items: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action) {
      state.items.push(action.payload);
    },
    deleteFromCart(state, action) {
      state.items = state.items.filter((item) => item.id != action.payload);
    },
    updateQuantity(state, action) {
      const { id, quantity } = action.payload;
      const items = state.items.map((item) => {
        return item.id == id ? { ...item, quantity } : item;
      });
    },
    clearItems(state) {
      state.items = [];
    },
  },
});
