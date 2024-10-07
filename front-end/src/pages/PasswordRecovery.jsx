import React, { useState } from "react";
import "../Styles/PasswordRecovery.css"; // Asegúrate de tener este archivo CSS

const PasswordRecovery = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Lógica para manejar la recuperación de contraseña
    console.log("Recuperar contraseña para:", email);
  };

  return (
    <div className="password-recovery-container animate__animated animate__zoomIn">
      {/* Formas de fondo en las esquinas */}
      <div className="background-shapes">
        <div className="shape shape-1"></div>
        <div className="shape shape-2"></div>
        <div className="shape shape-3"></div>
        <div className="shape shape-4"></div>
      </div>

      <div className="illustration-and-form">
        {/* Sección de Ilustración */}
        <div className="illustration">
          <img
            src="/imgs/logo2.svg"
            alt="Ilustración"
            className="illustration-image"
          />
        </div>

        {/* Sección del formulario */}
        <div className="form-container">
          <h1>
            Olvidaste
            <br />
            tu contraseña?
          </h1>

          <form onSubmit={handleSubmit}>
            {/* Input para Email con ícono */}
            <div className={`input-container ${email ? "has-value" : ""}`}>
              <i className="fas fa-envelope input-icon"></i>
              <input
                type="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <label>Email</label>
            </div>

            <button type="submit" className="login-button">
              Restablecer Contraseña
            </button>
          </form>

          <a href="/login" className="back-to-login">
            Volver al Login
          </a>
        </div>
      </div>
    </div>
  );
};

export default PasswordRecovery;
