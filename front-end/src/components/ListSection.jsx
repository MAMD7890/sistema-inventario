import React from "react";
import Pagination from "./Pagination";
import ListTable from "./ListTable";

const ListSection = () => {
  return (
    <>
      <div className="row">
        <div className="col s12">
          <div className="d-flex justify-content-between align-items-center">
            <h1 className="movih1">
              Productos/
              <span
                style={{
                  color: "gray",
                }}
              >
                Listado
              </span>
            </h1>
            <button className="btn-new-movement btn">+ Agregar Producto</button>
          </div>
        </div>
      </div>
      <div className="movements-section">
        <div className="actions d-flex justify-content-between align-items-center">
          {/* Dropdown numérico */}
          <div className="d-flex flex-column align-items-start">
            <label htmlFor="entriesDropdown">Mostrar entrada</label>
            <select
              id="entriesDropdown"
              className="form-select"
              aria-label="Mostrar entradas"
            >
              <option value="5">5</option>
              <option value="10">10</option>
              <option value="25">25</option>
              <option value="50">50</option>
              <option value="100">100</option>
            </select>
          </div>
          <div className="search-bar">
            <div className="input-field">
              <input id="search" type="text" className="validate" />
              <label htmlFor="search">Buscar</label>
            </div>
          </div>
        </div>

        <ListTable />
        <Pagination />
      </div>
    </>
  );
};

export default ListSection;
