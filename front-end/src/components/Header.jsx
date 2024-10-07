import React from "react";

const Header = () => {
  return (
    <header>
      <div className="user-profile">
        {/* <span>Nombre</span> */}
        <img
          src="/imgs/man.png"
          alt="User"
          className="circle dropdown-toggle"
          data-bs-toggle="dropdown"
          aria-expanded="false"
          style={{ cursor: "pointer" }}
        />
        <ul className="dropdown-menu">
          <div>
            <p
              className="dropdown-item"
              href="#"
              style={{
                display: "flex",
                flexDirection: "column",
                margin: 0,
              }}
            >
              Nombre
              <span
                style={{
                  color: "gray",
                  fontSize: 14,
                  margin: 0,
                }}
              >
                Administrador
              </span>
            </p>
          </div>
          <li>
            <hr className="dropdown-divider" />
          </li>
          <li>
            <a className="dropdown-item" href="#">
              Configuración
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="#">
              Salir
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
