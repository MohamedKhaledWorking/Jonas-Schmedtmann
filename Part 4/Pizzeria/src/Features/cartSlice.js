import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  items: [
    {
      id: "1",
      name: "Margherita Classica",
      size: "medium",
      isSpicy: true,
      instructions: "Extra cheese, please.",
      quantity: 2,
      toppings: [
        { name: "San Marzano Tomatoes", price: 4.99 },
        { name: "Fresh Mozzarella", price: 2.99 },
        { name: "Fresh Basil", price: 1.99 },
        { name: "Extra Virgin Olive Oil", price: 3.99 },
      ],
      basePrice: 14.99,
      image:
        "https://images.unsplash.com/photo-1604068549290-dea0e4a305ca?w=800&q=80",
    },
    {
      id: "2",
      name: "Pepperoni Feast",
      size: "large",
      isSpicy: false,
      instructions: "No onions.",
      quantity: 1,
      toppings: [
        { name: "Pepperoni", price: 3.99 },
        { name: "Mozzarella", price: 2.99 },
        { name: "Tomato Sauce", price: 1.99 },
      ],
      basePrice: 16.99,
      image:
        "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=800&q=80",
    },
    {
      id: "3",
      name: "Margherita Classica",
      size: "medium",
      isSpicy: true,
      quantity: 2,
      basePrice: 14.99,
      image:
        "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=800&q=80",
    },
  ],
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

export default cartSlice.reducer;

export const { addToCart, deleteFromCart, updateQuantity, clearItems } =
  cartSlice.actions;
