// src/routers/PrivateRoutes.jsx
import React from "react";
import { Navigate } from "react-router-dom";

const PrivateRoutes = ({ children, auth }) => {
  return auth ? children : <Navigate to="/login" />;
};

export default PrivateRoutes;
