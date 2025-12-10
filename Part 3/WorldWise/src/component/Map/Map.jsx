import React from "react";
import styles from "./Map.module.css";
import { useNavigate, useParams, useSearchParams } from "react-router-dom";

export default function Map() {
  const navigate = useNavigate()


  function handleClick() {
    navigate("form")
  }
  return <div onClick={handleClick} className={styles.mapContainer}>map</div>;
}
