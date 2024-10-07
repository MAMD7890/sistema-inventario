// src/routers/AuthRouter.js
import React, { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { useDispatch } from "react-redux";
import Login from "../pages/Login.jsx";
import PasswordRecovery from "../pages/PasswordRecovery.jsx";
import AppScreen from "../pages/AppScreen.jsx";
import Movimientos from "../pages/Movimientos.jsx";
import RegisterProduct from "../pages/RegisterProduct.jsx";
import ProductList from "../pages/ProductList.jsx";
import PublicRoutes from "./PublicRoutes.jsx";
import PrivateRoutes from "./PrivateRoutes.jsx";
import LoadingScreen from "../components/LoadingScreen.jsx";
import RegisterMoviment from "../pages/RegisterMoviment.jsx";
import Retorno from "../pages/Retorno.jsx";

const AuthRouter = () => {
  const dispatch = useDispatch();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Verificar si hay un token en el almacenamiento local
    const token = localStorage.getItem("token");
    if (token) {
      // Aquí podrías hacer una solicitud al backend para verificar el token
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
    setLoading(false);
  }, [dispatch]);

  if (loading) {
    return <LoadingScreen />;
  }

  return (
    <Router>
      <Routes>
        <Route
          path="/login"
          element={
            <PublicRoutes auth={isLoggedIn}>
              <Login />
            </PublicRoutes>
          }
        />
        <Route
          path="/restablecer"
          element={
            <PublicRoutes auth={isLoggedIn}>
              <PasswordRecovery />
            </PublicRoutes>
          }
        />
        <Route
          path="/pantalla1"
          element={
            <PublicRoutes auth={isLoggedIn}>
              <Movimientos />
            </PublicRoutes>
          }
        />
        <Route
          path="/pantalla2"
          element={
            <PublicRoutes auth={isLoggedIn}>
              <RegisterProduct />
            </PublicRoutes>
          }
        />
        <Route
          path="/pantalla3"
          element={
            <PublicRoutes auth={isLoggedIn}>
              <ProductList />
            </PublicRoutes>
          }
        />
        <Route
          path="/pantalla4"
          element={
            <PublicRoutes auth={isLoggedIn}>
              <RegisterMoviment />
            </PublicRoutes>
          }
        />
        <Route
          path="/pantalla5"
          element={
            <PublicRoutes auth={isLoggedIn}>
              <Retorno />
            </PublicRoutes>
          }
        />
        <Route
          path="/*"
          element={
            <PrivateRoutes auth={isLoggedIn}>
              <AppScreen /> {/* Ruta principal de la aplicación */}
            </PrivateRoutes>
          }
        />
        <Route path="/" element={<Navigate to="/login" replace />} />
      </Routes>
    </Router>
  );
};

export default AuthRouter;
