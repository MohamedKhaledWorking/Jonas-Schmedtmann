import React from "react";
import styles from "./Sidebar.module.css";
import Logo from "../Logo.jsx";
import { Outlet } from "react-router-dom";
import AppNav from "../AppNav/AppNav.jsx";
export default function Sidebar() {
  return (
    <div className={`${styles.sidebar}`}>
      <Logo />
      <AppNav />

      <div className="h-full overflow-y-auto mb-10 " >
        <Outlet />
      </div>

      <footer className={styles.footer}>
        <p className={styles.copyright}>
          <span>© {new Date().getFullYear()}</span> by WorldWise
        </p>
      </footer>
    </div>
  );
}
