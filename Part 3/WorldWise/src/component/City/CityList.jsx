import React from "react";
import styles from "./CityList.module.css";
import CityItem from "./CityItem.jsx";
import Spinner from "../Spinner.jsx";
import Message from "../Message.jsx";

export default function CityList({ cities, isLoading }) {
  return cities?.length === 0 ? (
    <Message message="Add your first city by clicking on a marker on the map" />
  ) : isLoading ? (
    <Spinner />
  ) : (
    <ul className={styles.cityList}>
      {cities?.map((city) => {
        return <CityItem cityItem={city} key={city.id} />;
      })}
    </ul>
  );
}
