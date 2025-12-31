import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  cart: JSON.parse(localStorage.getItem("cart")) || [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action) {
      const newPizza = action.payload;
      const foundedItem = state.cart.find(
        (item) =>
          item.pizzaId === newPizza.pizzaId &&
          item.selectedSizePrice === newPizza.selectedSizePrice &&
          item.isSpicy === newPizza.isSpicy &&
          item.instructions === newPizza.instructions &&
          JSON.stringify(item.extraToppings) ===
            JSON.stringify(newPizza.extraToppings)
      );

      if (foundedItem) {
        foundedItem.quantity += newPizza.quantity;
      } else {
        state.cart.push(action.payload);
      }

      state.cart.forEach((item) => {
        item.totalPrice =
          item.quantity * item.basePrice * item.selectedSizePrice +
          item.totalToppingsPrice * item.quantity;
      });

      localStorage.setItem("cart", JSON.stringify(state.cart));
    },

    updateQuantity(state, action) {
      const { id, quantity } = action.payload;
      const item = state.cart.find((item) => item.id === id);

      if (!item) return;

      item.quantity = Math.max(1, quantity);
      item.totalPrice =
        item.quantity * item.basePrice * item.selectedSizePrice +
        item.totalToppingsPrice * item.quantity;

      localStorage.setItem("cart", JSON.stringify(state.cart));
    },

    deleteFromCart(state, action) {
      const id = action.payload;
      state.cart = state.cart.filter((item) => item.id !== id);
      localStorage.setItem("cart", JSON.stringify(state.cart));
    },

    clearItems(state) {
      state.cart = [];
      localStorage.removeItem("cart");
    },
  },
});

export default cartSlice.reducer;

export const { addToCart, deleteFromCart, updateQuantity, clearItems } =
  cartSlice.actions;
