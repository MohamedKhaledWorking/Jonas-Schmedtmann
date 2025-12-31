import { createContext, useContext, useReducer } from "react";

const CreatePizzaContext = createContext();

const initialState = {
  name: "great pizza",
  size: {
    size: "small",
    priceMultiplier: 0.8,
  },
  crust: {
    crust: "",
    price: 0,
  },
  sauce: {
    sauce: "",
    price: 0,
  },
  cheese: {
    sauce: "",
    price: 0,
  },
  spicy: false,
  instructions: "",
  toppings: [],
  basePrice: 8,
  quantity: 1,
  image:
    "https://images.unsplash.com/photo-1628840042765-356cda07504e?w=800&q=80",
};

function reducer(state, action) {
  switch (action.type) {
    case "set/name":
      return { ...state, name: action.payload };
    case "set/size":
      return {
        ...state,
        size: {
          size: action.payload.size,
          priceMultiplier: action.payload.priceMultiplier,
        },
      };
    case "set/crust":
      return {
        ...state,
        crust: {
          crust: action.payload.crust,
          price: action.payload.price,
        },
      };
    case "set/sauce":
      return {
        ...state,
        sauce: {
          sauce: action.payload.sauce,
          price: action.payload.price,
        },
      };
    case "set/cheese":
      return {
        ...state,
        cheese: {
          cheese: action.payload.cheese,
          price: action.payload.price,
        },
      };
    case "set/spicy":
      return {
        ...state,
        spicy: action.payload,
      };
    case "set/instructions":
      return {
        ...state,
        instructions: action.payload,
      };
    case "set/toppings":
      return {
        ...state,
        toppings: [...state.toppings, action.payload],
      };
    case "remove/toppings":
      return {
        ...state,
        toppings: state.toppings.filter(
          (topping) => topping.id !== action.payload
        ),
      };
    case "set/quantity":
      return {
        ...state,
        quantity: action.payload,
      };
    case "get/pizza":
      return {
        ...state,
      };
  }
}

export default function CreatePizzaContextProvider({ children }) {
  const [
    {
      name,
      size,
      crust,
      sauce,
      cheese,
      spicy,
      instructions,
      toppings,
      basePrice,
      quantity,
    },
    dispatch,
  ] = useReducer(reducer, initialState);

  return (
    <CreatePizzaContext.Provider
      value={{
        name,
        size,
        crust,
        dispatch,
        sauce,
        cheese,
        spicy,
        instructions,
        toppings,
        basePrice,
        quantity,
      }}
    >
      {children}
    </CreatePizzaContext.Provider>
  );
}

export function useCreatePizza() {
  return useContext(CreatePizzaContext);
}
