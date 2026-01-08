import React from "react";
import { useTheme } from "../../Context/ThemeContext.jsx";

export default function Sidebar() {
  const { showSidebar, dispatch } = useTheme();

  return (
    <>
      <aside
        className={`h-screen duration-500 border-r lightBorder p-10 ${
          showSidebar ? "w-3/20 " : "w-1/20"
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
      </aside>
    </>
  );
}
