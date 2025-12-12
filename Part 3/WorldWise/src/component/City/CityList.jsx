import React from "react";
import styles from "./CityList.module.css";
import CityItem from "./CityItem.jsx";
import Spinner from "../Spinner.jsx";
import Message from "../Message.jsx";
import { useCities } from "../../../Context/CitiesContext.jsx";

export default function CityList() {
  const { cities, isLoading, error } = useCities();

  return isLoading ? (
    <Spinner />
  ) : cities?.length === 0 ? (
    <Message
      message={"Add your first city by clicking on a marker on the map"}
    />
  ) : error ? (
    <Message message={error} />
  ) : (
    <div className="h-full overflow-y-auto mb-10 ">
      <ul className={styles.cityList}>
        {cities?.map((city) => {
          return <CityItem cityItem={city} key={city.id} />;
        })}
      </ul>
    </div>
  );
}
