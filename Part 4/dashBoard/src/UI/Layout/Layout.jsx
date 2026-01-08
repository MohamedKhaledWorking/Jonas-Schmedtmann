import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../Sidebar/Sidebar.jsx";
import AppNavbar from "../Navbar/Navbar.jsx";
import { useTheme } from "../../Context/ThemeContext.jsx";

export default function Layout() {
  return (
    <>
      <main className="flex bg-mainBgc text-textMainClr">
        <Sidebar />
        <section className="flex flex-col w-full ">
          <AppNavbar />
          <div className=" min-h-screen w-full mx-auto p-10">
            <Outlet />
          </div>
        </section>
      </main>
    </>
  );
}
