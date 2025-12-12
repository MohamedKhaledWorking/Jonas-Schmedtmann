import React from "react";
import Sidebar from "../../component/SideBar/Sidebar.jsx";
import Map from "../../component/Map/Map.jsx";
import "../../App.css";
import { useAuth } from "../../../Context/AuthContext.jsx";
import User from "../../component/User.jsx";

export default function Main() {
  const { isAuthenticated } = useAuth();
  return (
    <div className="app">
      <Sidebar />
      <Map />
      <User />
    </div>
  );
}
