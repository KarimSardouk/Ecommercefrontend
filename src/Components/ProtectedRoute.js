import React from "react";
import { Navigate } from "react-router-dom";
import { getUserRole } from "../Util/GetUserData";

const ProtectedRoute = ({ children, adminOnly = false }) => {
  // Move authentication check inside the component
  const isAuthenticated = sessionStorage.getItem("authToken");
  const userRole = getUserRole();

  // Check if authenticated and user has admin role, or if adminOnly is required
  if (
    (isAuthenticated === "true" && userRole === "admin") ||
    (adminOnly && userRole !== "admin")
  ) {
    return <Navigate to="/AdminDash" />;
  } else if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }

  // If authenticated and adminOnly is not required, render children
  return children;
};

export default ProtectedRoute;
