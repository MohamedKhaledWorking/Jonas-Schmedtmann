import React from "react";
import { useTheme } from "../../Context/ThemeContext.jsx";
import Logo from "../../components/AsideBar/Logo.jsx";
import SideLinks from "../../components/AsideBar/Links.jsx";

export default function Sidebar() {
  const { showSidebar, dispatch } = useTheme();

  return (
    <>
      <aside
        className={`h-screen duration-500 border-r lightBorder md:py-5 lg:py-5 hidden  md:absolute lg:relative z-50 bg-mainBgc md:flex items-center flex-col relative ${
          showSidebar
            ? "md:w-7/20 lg:w-3/21"
            : "lg:w-1/23 md:hidden lg:flex lg:items-center mxa"
        }`}
      >
        <Logo showSidebar={showSidebar} />
        <SideLinks />

          <button
            onClick={() => dispatch({ type: "toggle/sidebar" })}
            className="lg:invisible absolute bottom-10 text-xl border w-10/12  mainBtn  justify-center"
          >
            collapse
          </button>
      </aside>
    </>
  );
}
