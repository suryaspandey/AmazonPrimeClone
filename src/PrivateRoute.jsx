// import React from "react";
// import { Route, Navigate, Outlet } from "react-router";

// const PrivateRoute = ({ component: Component, ...rest }) => {
//   const isAuthenticated = true;
//   return (
//     <Route
//       {...rest}
//       element={isAuthenticated ? <Component /> : <Navigate to="/login" />}
//     />
//   );
// };

// export default PrivateRoute;

import React from "react";
import { Route, Navigate, Outlet } from "react-router";

const PrivateRoute = () => {
  const isAuthenticated = !!localStorage.getItem("bearer_token"); // will return truthy value
  return isAuthenticated ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRoute;
