import React from "react";
import { Outlet } from "react-router-dom";
import NavBar from "./NavBar.jsx";

export default function AppLayout() {
  return (
    <div className="min-h-screen dark relative bg-mainBgc dark:bg-mainBgcDark text-textClr dark:text-textClrDark overflow-x-hidden">
      <NavBar />
      <div className="container mx-auto pt-20">
        <Outlet />
      </div>
    </div>
  );
}
