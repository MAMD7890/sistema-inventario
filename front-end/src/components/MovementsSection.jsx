// import React from "react";
// import MovementTable from "./MovementTable";
// import Pagination from "./Pagination";

// const MovementsSection = () => {
//   return (
//     <>
//       <div className="row">
//         <div className="col s12">
//           <div className="d-flex justify-content-between align-items-center">
//             <h1>Movimientos</h1>
//             <button className="btn-new-movement btn">+ Nuevo movimiento</button>
//           </div>
//         </div>
//       </div>
//       <div className="movements-section">
//         <div className="actions">
//           <div className="search-bar">
//             <input type="text" placeholder="Buscar" />
//           </div>
//         </div>
//         <MovementTable />
//         <Pagination />
//       </div>
//     </>
//   );
// };

// export default MovementsSection;

import React from "react";
import MovementTable from "./MovementTable";
import Pagination from "./Pagination";

const MovementsSection = () => {
  return (
    <>
      <div className="row">
        <div className="col s12">
          <div className="d-flex justify-content-between align-items-center">
            <h1 className="movih1">Movimientos</h1>
            <button className="btn-new-movement btn">+ Nuevo movimiento</button>
          </div>
        </div>
      </div>
      <div className="movements-section">
        <div className="actions">
          <div className="search-bar">
            <div className="input-field">
              <input id="search" type="text" className="validate" />
              <label htmlFor="search">Buscar</label>
            </div>
          </div>
        </div>
        <MovementTable />
        <Pagination />
      </div>
    </>
  );
};

export default MovementsSection;
