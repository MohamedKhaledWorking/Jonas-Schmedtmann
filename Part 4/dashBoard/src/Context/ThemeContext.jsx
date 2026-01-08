import { useContext } from "react";
import { createContext, useReducer } from "react";

const ThemeContext = createContext();

const initialState = {
  theme: "light",
  showSidebar: false,
};

function reducer(state, action) {
  switch (action.type) {
    case "set/theme":
      return { ...state, theme: action.payload };
    case "toggle/sidebar":
      return { ...state, showSidebar: !state.showSidebar };
  }
}

export default function ThemeContextProvider({ children }) {
  const [{ theme, showSidebar }, dispatch] = useReducer(reducer, initialState);
  return (
    <ThemeContext.Provider value={{ theme, showSidebar, dispatch }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  return useContext(ThemeContext);
}
