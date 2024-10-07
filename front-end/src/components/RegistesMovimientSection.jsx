// import React, { useState } from "react";
// import RegisterMovimientTable from "./RegisterMovimientTable";

// const RegistesMovimientSection = () => {
//   const [activeTab, setActiveTab] = useState(1); // 1 es "Información de envío", 2 es "Movimiento"

//   return (
//     <div>
//       <div className="row">
//         <div className="col s12">
//           <div className="d-flex justify-content-between align-items-center">
//             <h1 className="movih1">Registrar Movimiento</h1>
//           </div>
//         </div>
//       </div>

//       {/* Pestañas (no clicables) */}
//       <div className="row">
//         <ul className="tabs">
//           <li className={`tab col s6 ${activeTab === 1 ? "active" : ""}`}>
//             <a href="#!" onClick={(e) => e.preventDefault()}>
//               Información de envío
//             </a>
//           </li>
//           <li className={`tab col s6 ${activeTab === 2 ? "active" : ""}`}>
//             <a href="#!" onClick={(e) => e.preventDefault()}>
//               Movimiento
//             </a>
//           </li>
//         </ul>
//       </div>

//       <div className="movements-section">
//         <div className="actions">
//           <div className="search-bar"></div>
//         </div>

//         {/* Aquí pasamos la pestaña activa y una función para cambiar de pestaña */}
//         <RegisterMovimientTable
//           activeTab={activeTab}
//           setActiveTab={setActiveTab}
//         />
//       </div>
//     </div>
//   );
// };

// export default RegistesMovimientSection;

import React, { useState, useEffect } from "react";
import RegisterMovimientTable from "./RegisterMovimientTable";
import M from "materialize-css";
import "../Styles/diseñoPestaña.css";

const RegistesMovimientSection = () => {
  const [activeTab, setActiveTab] = useState(1); // 1 es "Información de envío", 2 es "Movimiento"

  useEffect(() => {
    // Inicializar las pestañas de Materialize
    M.Tabs.init(document.querySelectorAll(".tabs"), {});
  }, []);

  // Estilos en línea para las pestañas
  const tabStyle = {
    backgroundColor: "#f0f0f0", // Color gris para pestañas inactivas
    color: "#000",
    borderRadius: "10px 10px 0 0",
    marginRight: "5px",
  };

  const activeTabStyle = {
    ...tabStyle,
    backgroundColor: "#fff", // Color blanco para la pestaña activa
    borderBottom: "3px solid #26a69a", // Línea inferior para la pestaña activa
  };

  return (
    <div>
      <div className="row">
        <div className="col s12">
          <div className="d-flex justify-content-between align-items-center">
            <h1 className="movih1">Registrar Movimiento</h1>
          </div>
        </div>
      </div>

      {/* Pestañas estilizadas */}
      <div className="row mb-0">
        <div className="col s12">
          <ul className="tabs">
            <li className="tab col s6">
              <a
                href="#tab1"
                onClick={() => setActiveTab(1)}
                style={activeTab === 1 ? activeTabStyle : tabStyle}
              >
                Información de envío
              </a>
            </li>
            <li className="tab col s6">
              <a
                href="#tab2"
                onClick={() => setActiveTab(2)}
                style={activeTab === 2 ? activeTabStyle : tabStyle}
              >
                Movimiento
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="movements-section">
        <div className="actions">
          <div className="search-bar"></div>
        </div>

        {/* Contenido de las pestañas */}
        <div id="tab1" className={activeTab === 1 ? "active" : ""}>
          <RegisterMovimientTable
            activeTab={activeTab}
            setActiveTab={setActiveTab}
          />
        </div>
        <div id="tab2" className={activeTab === 2 ? "active" : ""}>
          <RegisterMovimientTable
            activeTab={activeTab}
            setActiveTab={setActiveTab}
          />
        </div>
      </div>
    </div>
  );
};

export default RegistesMovimientSection;
