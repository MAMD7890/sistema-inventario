import axios from "axios";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import "../Styles/LoginScreen.css";

const Login = () => {
  const [data, setData] = useState({ email: "", password: "" });
  const [showPassword, setShowPassword] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const { email, password } = data;
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleEmailLogon = async (e) => {
    e.preventDefault();
    if (email.trim() === "" || !email.trim().includes(".com")) {
      setErrorMessage("Por favor, ingresa un email válido.");
      return;
    }
    if (password.trim().length < 6) {
      setErrorMessage("La contraseña debe tener al menos 6 caracteres.");
      return;
    }
    setIsLoading(true);
    setErrorMessage("");

    try {
      const response = await axios.post("http://localhost:8080/api/login", {
        username: email,
        password: password,
      });
      localStorage.setItem("token", response.data); // Guarda el token en el almacenamiento local
      // Aquí puedes redirigir al usuario o actualizar el estado
    } catch (error) {
      console.error("Error during login:", error);
      setErrorMessage(
        "Ocurrió un error al iniciar sesión. Por favor, intenta de nuevo."
      );
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="login-page animate__animated animate__zoomIn">
      <div className="login-image">
        <img loading="lazy" src="/imgs/logo.svg" alt="Login" />
      </div>
      <div className="login-container">
        <div className="login-card">
          <h2 className="login-title">Bienvenido</h2>
          <p className="login-subtitle">Inicia sesión para continuar</p>

          {errorMessage && <div className="error-message">{errorMessage}</div>}

          <form onSubmit={handleEmailLogon} className="login-form">
            <div className={`input-container ${email ? "has-value" : ""}`}>
              <i className="fas fa-envelope input-icon"></i>
              <input
                type="email"
                name="email"
                value={email}
                onChange={handleChange}
                required
              />
              <label>Email</label>
            </div>

            <div className={`input-container ${password ? "has-value" : ""}`}>
              <i className="fas fa-lock input-icon"></i>
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                value={password}
                onChange={handleChange}
                required
              />
              <label>Contraseña</label>
              <i
                className={`fas ${
                  showPassword ? "fa-eye-slash" : "fa-eye"
                } toggle-password`}
                onClick={() => setShowPassword(!showPassword)}
              ></i>
            </div>

            <button type="submit" className="login-button" disabled={isLoading}>
              {isLoading ? "Iniciando sesión..." : "Iniciar sesión"}
            </button>
          </form>

          <div className="separator">
            <span>o</span>
          </div>

          <p className="register-link">
            ¿Olvidaste tu contraseña?{" "}
            <Link to="/restablecer">Recupérala aquí</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
