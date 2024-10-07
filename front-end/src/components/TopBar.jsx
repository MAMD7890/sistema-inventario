import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import "../Styles/TopBar.css";

const TopBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="topbar bg-green-500 p-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* <a href="#" className="text-white text-2xl font-bold">
          Logo
        </a> */}

        {/* Botón de menú para pantallas pequeñas */}
        <button onClick={toggleMenu} className="menu-btn lg:hidden text-white">
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Menú para pantallas grandes */}
        <ul className="nav-links hidden lg:flex space-x-4">
          <li>
            <a href="#" className="text-white">
              Soporte al cliente
            </a>
          </li>
          <li>
            <a href="#" className="text-white">
              Preguntas frecuentes
            </a>
          </li>
        </ul>
      </div>

      {/* Menú desplegable para pantallas pequeñas */}
      {isMenuOpen && (
        <div className="menu-desplegable">
          <ul>
            <li className="menu-section">Gestión</li>
            <li>
              <a href="#" className="menu-item">
                <i className="material-icons">person_add</i>
                Registro de usuario
              </a>
            </li>
            <li>
              <a href="#" className="menu-item">
                <i className="material-icons">inventory</i>
                Registro de productos
              </a>
            </li>
          </ul>
          <ul>
            <li className="menu-section">Administración</li>
            <li>
              <a href="#" className="menu-item">
                <i className="material-icons">supervisor_account</i>
                Administración de usuarios
              </a>
            </li>
          </ul>
          <ul className="menu-footer">
            <li>
              <a href="#" className="menu-item">
                <i className="material-icons">support</i>
                Soporte al cliente
              </a>
            </li>
            <li>
              <a href="#" className="menu-item">
                <i className="material-icons">help_outline</i>
                Preguntas frecuentes
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default TopBar;
