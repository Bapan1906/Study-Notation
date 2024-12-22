import React from "react";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ isLoggedIn, children }) => {
  // Check if user is logged in
  if (isLoggedIn) {
    return children;
  }

  // If not logged in, return null or a redirect, depending on your requirements
  else {
    return <Navigate to="/login"></Navigate>;
  }
};

export default PrivateRoute;
