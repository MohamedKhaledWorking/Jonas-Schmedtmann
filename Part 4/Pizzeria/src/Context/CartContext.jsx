import { useContext, useReducer } from "react";
import { createContext } from "react";

const CartContext = createContext();

const initialState = {
  pizza: null,
  isSpicy: false,
  mainImg: null,
  selectedSize: "small",
  extraToppings: [],
  instructions: "",
  quantity: 1,
};

function reducer(state, action) {
  switch (action.type) {
    case "set/Spicy":
      return { ...state, isSpicy: action.payload };
    case "set/Pizza":
      return { ...state, pizza: action.payload };
    case "set/mainImg":
      return { ...state, mainImg: action.payload };
    case "set/selectedSize":
      return { ...state, selectedSize: action.payload };
    case "set/instructions":
      return { ...state, instructions: action.payload };
    case "increment/quantity":
      return { ...state, quantity: state.quantity + 1 };
    case "decrement/quantity":
      return { ...state, quantity: state.quantity - 1 };
    case "set/quantity":
      return { ...state, quantity: action.payload };
    case "set/extraToppings":
      return {
        ...state,
        extraToppings: [...state.extraToppings, action.payload],
      };
    case "remove/extraToppings":
      return {
        ...state,
        extraToppings: state.extraToppings.filter(
          (topping) => topping.name !== action.payload.name
        ),
      };

    default:
      return state;
  }
}

export default function CartContextProvider({ children }) {
  const [
    {
      isSpicy,
      pizza,
      mainImg,
      selectedSize,
      extraToppings,
      instructions,
      quantity,
    },
    dispatch,
  ] = useReducer(reducer, initialState);
  return (
    <CartContext.Provider
      value={{
        isSpicy,
        pizza,
        mainImg,
        selectedSize,
        dispatch,
        extraToppings,
        instructions,
        quantity,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  return useContext(CartContext);
}
