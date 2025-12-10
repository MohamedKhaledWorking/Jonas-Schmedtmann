import React from "react";
import styles from "./CityItem.module.css";
import { Link } from "react-router-dom";
import { useCities } from "../../../CitiesContext.jsx";

const formatDate = (date) =>
  new Intl.DateTimeFormat("en", {
    day: "numeric",
    month: "long",
    year: "numeric",
    weekday: "long",
  }).format(new Date(date));

export function convertToEmoji(countryCode) {
  const codePoints = countryCode
    .toUpperCase()
    .split("")
    .map((char) => 127397 + char.charCodeAt());
  return String.fromCodePoint(...codePoints);
}

export default function CityItem({ cityItem }) {
  const {
    cityName,
    emoji,
    date,
    id,
    position: { lat, lng },
  } = cityItem;
  const { currentCity } = useCities();
  const isSelected = currentCity?.id == id
  return (
    <li >
      <Link to={`${id}?lat=${lat}&lng=${lng}`} className={`${styles.cityItem} ${isSelected && styles.cityItemActive}`}>
        <span className={styles.emoji}>{emoji}</span>
        <h3 className={styles.name}>{cityName}</h3>
        <span className={styles.date}> {formatDate(date || null)}</span>
        <button className={styles.deleteBtn}>x</button>
      </Link>
    </li>
  );
}
