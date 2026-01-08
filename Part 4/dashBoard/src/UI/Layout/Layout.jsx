import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../Sidebar/Sidebar.jsx";
import AppNavbar from "../Navbar/Navbar.jsx";
import { useTheme } from "../../Context/ThemeContext.jsx";

export default function Layout() {
  const { showSidebar, dispatch } = useTheme();
  return (
    <>
      <div className="flex bg-mainBgc text-textMainClr">
        <div
          className={`${
            showSidebar ? "w-3/20 " : "w-1/20"
          }  h-screen duration-500 border-r lightBorder p-10`}
        >
          <Sidebar />
        </div>
        <div className="flex flex-col w-full">
          <AppNavbar />
          <div className=" min-h-screen w-19/20  mx-auto py-10">
            <Outlet />
          </div>
        </div>
      </div>
    </>
  );
}
