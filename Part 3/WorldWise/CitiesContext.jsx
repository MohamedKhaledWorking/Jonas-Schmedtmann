import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";

export const CitiesContext = createContext();

export function CitiesContextProvider({ children }) {
  const [cities, setCities] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [currentCity, setCurrentCity] = useState({});
  const navigate = useNavigate();

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

  function addNewCity(newCity) {
    try {
      setIsLoading(true);
      axios
        .post("http://localhost:3001/cities", newCity)
        .then(() => setCities((cities) => [...cities, newCity]))
        .then(() => navigate("/app/cities"))
        .catch((err) => setError(err.message));
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  }

  function deleteCity(id) {
    try {
      axios
        .delete(`http://localhost:3001/cities/${id}`)
        .then(() =>
          setCities((cities) => cities.filter((city) => city.id !== id))
        );
    } catch (error) {
      console.log(error);
    }
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
        addNewCity,
        deleteCity,
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
