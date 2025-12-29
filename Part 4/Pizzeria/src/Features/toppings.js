import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  toppings: [
    {
      pizzaId: 30,
      id: 1,
      name: "Extra Mozzarella",
      price: 2.5,
    },
    {
      pizzaId: 1,
      id: 2,
      name: "Parmesan",
      price: 2.0,
    },
    {
      pizzaId: 2,

      id: 3,
      name: "Gorgonzola",
      price: 3.0,
    },
    {
      pizzaId: 3,

      id: 4,
      name: "Pepperoni",
      price: 3.0,
    },
    {
      pizzaId: 2,

      id: 5,
      name: "Italian Sausage",
      price: 3.5,
    },
    {
      pizzaId: 2,
      id: 6,
      name: "Bacon",
      price: 3.0,
    },
    {
      pizzaId: 2,
      id: 7,
      name: "Mushrooms",
      price: 1.5,
    },
    {
      pizzaId: 2,
      id: 8,
      name: "Bell Peppers",
      price: 1.5,
    },
    {
      pizzaId: 2,
      id: 9,
      name: "Olives",
      price: 1.5,
    },
    {
      pizzaId: 2,
      id: 10,
      name: "Jalapeños",
      price: 1.5,
    },
    {
      pizzaId: 2,
      id: 11,
      name: "Truffle Oil",
      price: 4.0,
    },
    {
      pizzaId: 2,
      id: 12,
      name: "Hot Honey",
      price: 2.0,
    },
  ],
};

const toppingsSlice = createSlice({
  name: "toppings",
  initialState,
  reducers: {
    addTopping(state, action) {
      const { pizzaId, id, name, price } = action.payload;
      state.toppings.push({ pizzaId, id, name, price });
    },
    removeTopping(state, action) {
      const { id, pizzaId } = action.payload;
      state.toppings = state.toppings.filter(
        (topping) => topping.id != id && topping.pizzaId != pizzaId
      );
    },
  },
});

export default toppingsSlice.reducer;

export const { addTopping, removeTopping } = toppingsSlice.actions;
