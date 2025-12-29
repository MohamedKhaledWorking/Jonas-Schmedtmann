import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  cart: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action) {
      state.cart.push(action.payload);
    },
    deleteFromCart(state, action) {
      const id = action.payload;
      state.cart = state.cart.filter((item) => item.id !== id);
    },
    updateQuantity(state, action) {
      const { id, quantity } = action.payload;
      const items = state.cart.find((item) => item.id === id);
      items.quantity = quantity;
      items.totalPrice =
        items.quantity *
          items.basePrice *
          items.selectedSizePrice +
        items.totalToppingsPrice;
    },
    clearItems(state) {
      state.cart = [];
    },
  },
});

export default cartSlice.reducer;

export const { addToCart, deleteFromCart, updateQuantity, clearItems } =
  cartSlice.actions;
