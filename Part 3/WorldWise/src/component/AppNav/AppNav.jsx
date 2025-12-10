import React from "react";
import styles from "./AppNav.module.css";
import { NavLink } from "react-router-dom";

export default function AppNav() {
  return (
    <div className={styles.nav}>
      <ul>
        <li>
          <NavLink to={"cities"}> city</NavLink>
        </li>
        <li>
          <NavLink to={"countries"}> country</NavLink>
        </li>
      </ul>
    </div>
  );
}
