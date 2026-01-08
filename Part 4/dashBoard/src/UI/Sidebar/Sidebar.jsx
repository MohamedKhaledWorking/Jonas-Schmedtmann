import React from "react";
import { useTheme } from "../../Context/ThemeContext.jsx";

export default function Sidebar() {
  const { showSidebar, dispatch } = useTheme();

  return (
    <>
      <aside
        className={`h-screen duration-500 border-r lightBorder md:py-5 lg:py-10 hidden  md:absolute lg:relative z-50 bg-mainBgc md:flex items-center flex-col ${
          showSidebar
            ? "md:w-7/20 lg:w-3/21 px-5"
            : "lg:w-1/23 md:hidden lg:flex"
        }`}
      >
        <div className="logo">
          <div className="size-15 rounded-xl overflow-hidden">
            <img
              src="https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg"
              alt="logo image"
              className="w-full h-full object-cover"
            />
          </div>
          <p>luxe hotel</p>
        </div>
        <p>Sidebar</p>

        <button onClick={() => dispatch({ type: "toggle/sidebar" })}>
          collapse
        </button>
      </aside>
    </>
  );
}
