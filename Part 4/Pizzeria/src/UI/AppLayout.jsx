import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import NavBar from "./NavBar.jsx";

export default function AppLayout() {
  const [isDark, setIsDark] = useState(true);
  return (
    <div
      className={`min-h-[500vh] relative bg-mainBgc dark:bg-mainBgcDark text-textClr dark:text-textClrDark overflow-x-hidden ${
        isDark ? "dark" : ""
      }`}
    >
      <NavBar setIsDark={setIsDark} />
      <div className="container mx-auto pt-20">
        <Outlet />
      </div>
    </div>
  );
}
