import React from "react";
import { Navigate, Outlet } from "react-router";

const PrivateRoute = () => {
  const isAuthenticated = !!localStorage.getItem("bearer_token"); // will return truthy value
  return isAuthenticated ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRoute;
