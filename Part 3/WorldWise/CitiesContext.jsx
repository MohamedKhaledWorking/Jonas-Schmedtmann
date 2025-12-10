import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";

export const CitiesContext = createContext();

export function CitiesContextProvider({ children }) {
  const [cities, setCities] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [currentCity, setCurrentCity] = useState({});

  function getData() {
    setIsLoading(true);
    axios
      .get(`http://localhost:3001/cities`)
      .then((res) => res.data)
      .then((data) => setCities(data));

    setIsLoading(false);
  }

  function getCity(id) {
    setIsLoading(true);
    axios
      .get("http://localhost:3001/cities/" + id)
      .then((res) => setCurrentCity(res.data));
    setIsLoading(false);
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <CitiesContext.Provider
      value={{
        cities,
        isLoading,
        setCities,
        currentCity,
        setCurrentCity,
        getCity,
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
