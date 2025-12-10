import React from "react";
import styles from "./CityItem.module.css";
import { Link } from "react-router-dom";

const formatDate = (date) =>
  new Intl.DateTimeFormat("en", {
    day: "numeric",
    month: "long",
    year: "numeric",
    weekday: "long",
  }).format(new Date(date));

export default function CityItem({ cityItem }) {
  const {
    cityName,
    emoji,
    date,
    id,
    position: { lat, lng },
  } = cityItem;
  return (
    <li>
      <Link to={`${id}?lat=${lat}&lng=${lng}`} className={styles.cityItem}>
        <span className={styles.emoji}>{emoji}</span>
        <h3 className={styles.name}>{cityName}</h3>
        <span className={styles.date}> {formatDate(date || null)}</span>
        <button className={styles.deleteBtn}>x</button>
      </Link>
    </li>
  );
}
