import axios from "axios";
import { createContext, useContext, useEffect, useReducer } from "react";
import { useNavigate } from "react-router-dom";

export const CitiesContext = createContext();

const initialState = {
  cities: [],
  isLoading: true,
  currentCity: {},
  error: "",
};

function reducer(state, action) {
  switch (action.type) {
    case "cities/fetched":
      return { ...state, cities: action.payload, isLoading: false, error: "" };
  }
  switch (action.type) {
    case "city/fetched":
      return {
        ...state,
        currentCity: action.payload,
        isLoading: false,
        error: "",
      };
  }
  switch (action.type) {
    case "city/added":
      return {
        currentCity: action.payload,
        cities: [...state.cities, action.payload],
        isLoading: false,
        error: "",
      };
  }
  switch (action.type) {
    case "city/deleted":
      return {
        ...state,
        cities: state?.cities?.filter((city) => city.id !== action.payload),
        isLoading: false,
        error: "",
      };
  }
  switch (action.type) {
    case "cities/error":
      return { ...state, error: action.payload, isLoading: false };
  }
}

export function CitiesContextProvider({ children }) {
  const navigate = useNavigate();
  const [{ cities, isLoading, currentCity, error }, dispatch] = useReducer(
    reducer,
    initialState
  );

  function getData() {
    axios
      .get(`${import.meta.env.VITE_BASE_URL}/cities`)
      .then((res) => dispatch({ type: "cities/fetched", payload: res.data }))
      .catch((error) =>
        dispatch({ type: "cities/error", payload: error?.response?.data })
      );
  }

  function getCity(id) {
    axios
      .get(`${import.meta.env.VITE_BASE_URL}/cities/${id}`)
      .then((res) => dispatch({ type: "city/fetched", payload: res.data }))
      .catch((error) =>
        dispatch({ type: "cities/error", payload: error?.response?.data })
      );
  }

  function addNewCity(newCity) {
    axios
      .post(`${import.meta.env.VITE_BASE_URL}/cities`, newCity)
      .then(() => dispatch({ type: "city/added", payload: newCity }))
      .then(() => navigate("/app/cities"))
      .catch((error) =>
        dispatch({ type: "cities/error", payload: error?.response?.data })
      );
  }

  function deleteCity(id) {
    axios
      .delete(`${import.meta.env.VITE_BASE_URL}/cities/${id}`)
      .then(() => dispatch({ type: "city/deleted", payload: id }))
      .catch((error) =>
        dispatch({ type: "cities/error", payload: error?.response?.data })
      );
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <CitiesContext.Provider
      value={{
        cities,
        isLoading,
        currentCity,
        getCity,
        addNewCity,
        deleteCity,
        error,
      }}
    >
      {children}
    </CitiesContext.Provider>
  );
}

export function useCities() {
  if (!CitiesContext) {
    throw new Error("useCities must be used within a CitiesContextProvider");
  }
  return useContext(CitiesContext);
}
