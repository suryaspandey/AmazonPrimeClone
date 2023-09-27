import React from "react";
import { Route, Navigate } from "react-router";

const PrivateRoute = ({ component: Component, ...rest }) => {
  const isAuthenticated = true;
  return (
    <Route
      {...rest}
      element={isAuthenticated ? <Component /> : <Navigate to="/login" />}
    />
  );
};

export default PrivateRoute;
