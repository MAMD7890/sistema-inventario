import React from "react";
import RetornoTable from "./RetornoTable";
import "../Styles/diseñoPestaña.css"; // Si tienes un archivo CSS personalizado

const RetornoSection = () => {
  // Estilos en línea para la pestaña
  const tabStyle = {
    backgroundColor: "#fff", // Fondo blanco para la pestaña
    color: "#000",
    borderRadius: "10px 10px 0 0", // Bordes redondeados arriba
    padding: "10px 20px", // Espaciado interno
    fontSize: "18px", // Tamaño de la fuente
    fontWeight: "bold", // Negrita
    borderBottom: "3px solid #26a69a", // Línea inferior para la pestaña
    display: "inline-block",
    cursor: "default", // No clicable
  };

  // Estilos para el contenedor de la pestaña y la barra de búsqueda
  const headerStyle = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "10px",
    position: "relative",
    top: "6px",
  };

  // Estilos para la barra de búsqueda
  const searchBarStyle = {
    display: "flex",
    alignItems: "center",
    justifyContent: "end",
  };

  const inputStyle = {
    border: "1px solid #ccc",
    borderRadius: "25px",
    padding: "5px 15px",
    width: "200px",
    outline: "none",
    fontSize: "14px",
    marginRight: "10px",
  };

  const buttonStyle = {
    backgroundColor: "#f1f1f1", 
    border: "none",
    padding: "10px 20px",
    borderRadius: "20px", 
    cursor: "pointer",
    transition: "background-color 0.3s ease",
    color: "#000",
    border: "1px solid #000",
  };

  return (
    <div>
      {/* Título principal */}
      <div className="row">
        <div className="col s12">
          <div className="d-flex justify-content-between align-items-center">
            <h1 className="movih1">Retorno</h1>
          </div>
        </div>
      </div>

      {/* Pestaña y barra de búsqueda en la misma línea */}
      <div className="row mb-0" style={headerStyle}>
        <div
          className="col s6"
          style={{
            paddingLeft: "0px",
          }}
        >
          <div style={tabStyle}>Retorno</div>
        </div>

        {/* Barra de búsqueda */}
        <div className="col s6" style={searchBarStyle}>
          <input type="text" placeholder="Buscar..." style={inputStyle} />
          <button style={buttonStyle}>Buscar</button>
        </div>
      </div>

      {/* Sección de movimientos */}
      <div
        className="movements-section"
        style={{
          borderRadius: "0rem 1rem 1rem",
        }}
      >
        {/* <div className="actions">
          <div className="search-bar"></div>
        </div> */}
        <RetornoTable />
      </div>
    </div>
  );
};

export default RetornoSection;
