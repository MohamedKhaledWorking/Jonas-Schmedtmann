import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  selectedCategory: "all",
  isAvailableOnly: false,
  query: "",
};

const menuSlice = createSlice({
  name: "menu",
  initialState,
  reducers: {
    setCategory(state, action) {
      return { ...state, selectedCategory: action.payload };
    },
    setAvailable(state, action) {
      return { ...state, isAvailableOnly: action.payload };
    },
    setQuery(state, action) {
      return { ...state, query: action.payload };
    },
  },
});

export default menuSlice.reducer;
export const { setCategory, setAvailable, setQuery } = menuSlice.actions;
