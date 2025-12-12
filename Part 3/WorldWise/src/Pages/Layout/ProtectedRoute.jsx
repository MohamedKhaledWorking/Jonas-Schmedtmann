import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../../../Context/AuthContext.jsx";

export default function ProtectedRoute({ children }) {
  const { isAuthenticated } = useAuth();
  return <>{isAuthenticated ? children : <Navigate to={"/login"} />}</>;
}
