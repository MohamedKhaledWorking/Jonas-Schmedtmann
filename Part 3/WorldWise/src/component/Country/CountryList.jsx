import React from "react";
import styles from "./CountryList.module.css";
import Message from "../Message.jsx";
import Spinner from "../Spinner.jsx";
import CountryItem from "./CountryItem.jsx";
import { useCities } from "../../../Context/CitiesContext.jsx";

export default function CountryList() {
  const { cities, isLoading } = useCities();

  const countries = cities.reduce((acc, city) => {
    if (!acc.map((el) => el.country).includes(city.country)) {
      return [...acc, { country: city.country, emoji: city.emoji }];
    } else {
      return acc;
    }
  }, []);

  return isLoading ? (
    <Spinner />
  ) : cities?.length === 0 ? (
    <Message message="Add your first city by clicking on a marker on the map" />
  ) : (
    <ul className={styles.countryList}>
      {countries.map((country) => (
        <CountryItem key={country.country} country={country} />
      ))}
    </ul>
  );
}