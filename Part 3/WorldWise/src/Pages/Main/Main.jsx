import React from "react";
import Sidebar from "../../component/SideBar/Sidebar.jsx";
import Map from "../../component/Map/Map.jsx";
import "../../App.css";

export default function Main() {
  return (
    <div className="app">
      <Sidebar />
      <Map />
    </div>
  );
}
