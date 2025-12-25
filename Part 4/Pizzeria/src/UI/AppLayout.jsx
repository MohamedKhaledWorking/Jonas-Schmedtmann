import React, { useState } from "react";
import { Outlet, useNavigation } from "react-router-dom";
import NavBar from "./NavBar.jsx";
import Footer from "./Footer.jsx";
import Loading from "./Loading.jsx";

export default function AppLayout() {
  const [isDark, setIsDark] = useState(true);
  const { state } = useNavigation();
  return (
    <div
      className={`min-h-screen relative bg-mainBgc dark:bg-mainBgcDark text-textClr dark:text-textClrDark overflow-x-hidden ${
        isDark ? "dark" : ""
      }`}
    >
      {state === "loading" && <Loading />}
      <NavBar setIsDark={setIsDark} />
      <Outlet />
      <Footer />
    </div>
  );
}
