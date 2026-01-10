import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../Sidebar/Sidebar.jsx";
import AppNavbar from "../Navbar/Navbar.jsx";

export default function Layout() {
  return (
    <>
      <main className="flex bg-mainBgc text-textMainClr">
        {/* <!-- Sidebar --> */}
        <Sidebar />

        {/* <!-- Content --> */}
        <section className="flex flex-col w-full ">
          <AppNavbar />
          <div className="min-h-screen w-full mx-auto p-5 md:p-10">
            <Outlet />
          </div>
        </section>
      </main>
    </>
  );
}
