import { Outlet } from "react-router-dom";
import Sidebar from "../Sidebar/Sidebar.jsx";
import NavBar from "../Navbar/Navbar.jsx";
import { useState } from "react";

export default function AppLayout() {
  const [showSidebar, setShowSidebar] = useState(false);
  return (
    <>
      <div className="flex min-h-screen relative bg-mainBgc text-textClr ">
        <div
          className={`hidden lg:block md:absolute lg:relative duration-500 ${
            showSidebar
              ? "md:block md:w-1/4 md:h-full lg:w-3/20 lg:h-screen"
              : "lg:w-1/25"
          } z-41`}
        >
          <Sidebar />
        </div>
        <div className="w-full">
          <NavBar onToggleSidebar={setShowSidebar} />
          <div className="px-10 py-10">
            <Outlet />
          </div>
        </div>
      </div>
    </>
  );
}
