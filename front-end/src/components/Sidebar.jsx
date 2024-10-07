// components/Sidebar.js
import React from "react";
import "../Styles/LeftMenu.css";

const Sidebar = () => {
  return (
    <div className="left-menu">
      <div className="logo-container">
        <div className="logo">logo</div>
      </div>
      <section className="seccion_container">
        <ul>
          <li className="menu-section">Gestión</li>
          <li className="menu-item">Registro de usuario</li>
          <li className="menu-item">Registro de productos</li>
          <li className="menu-section">Administración</li>
          <li className="menu-item">Administración de usuarios</li>
        </ul>
      </section>
    </div>
  );
};

export default Sidebar;
