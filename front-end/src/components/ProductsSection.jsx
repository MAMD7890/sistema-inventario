import React from "react";
import ProductTable from "./ProductTable";

const ProductsSection = () => {
  return (
    <>
      <div className="row">
        <div className="col s12">
          <div className="d-flex justify-content-between align-items-center">
            <h1 className="movih1">Registrar Productos</h1>
          </div>
        </div>
      </div>
      <div className="movements-section">
        <div className="actions">
          <div className="search-bar"></div>
        </div>
        <ProductTable />
      </div>
    </>
  );
};

export default ProductsSection;
