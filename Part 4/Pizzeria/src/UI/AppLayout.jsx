import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import NavBar from "./NavBar.jsx";
import Footer from "./Footer.jsx";

export default function AppLayout() {
  const [isDark, setIsDark] = useState(true);
  return (
    <div
      className={`min-h-screen relative bg-mainBgc dark:bg-mainBgcDark text-textClr dark:text-textClrDark overflow-x-hidden ${
        isDark ? "dark" : ""
      }`}
    >
      <NavBar setIsDark={setIsDark} />
      <div className="container mx-auto  ">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}
