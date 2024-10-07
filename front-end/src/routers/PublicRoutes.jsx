// src/routers/PublicRoutes.jsx
import React from "react";
import { Navigate } from "react-router-dom";

const PublicRoutes = ({ children, auth }) => {
  return !auth ? children : <Navigate to="/" />;
};

export default PublicRoutes;
