import React, { useState } from "react";

const ProductTable = () => {
  // Estado para capturar los valores del formulario
  const [formData, setFormData] = useState({
    product_name: "",
    subcategory: "",
    product_id: "",
    quantity: "",
    category: "",
    description: "",
  });

  // Manejar el cambio en los inputs
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  // Manejar el envío del formulario
  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes implementar la lógica para enviar los datos al backend
    console.log("Datos del formulario:", formData);
  };

  return (
    <div className="row">
      <h5>Información del producto</h5>

      <form className="col s12" onSubmit={handleSubmit}>
        <div className="row">
          {/* Nombre del producto */}
          <div className="input-field col s6">
            <input
              id="product_name"
              type="text"
              className="validate"
              value={formData.product_name}
              onChange={handleChange}
            />
            <label htmlFor="product_name">Nombre del producto</label>
          </div>

          {/* Subcategoría */}
          <div className="input-field col s6">
            <input
              id="subcategory"
              type="text"
              className="validate"
              value={formData.subcategory}
              onChange={handleChange}
            />
            <label htmlFor="subcategory">Subcategoría</label>
          </div>
        </div>

        <div className="row">
          {/* ID */}
          <div className="input-field col s6">
            <input
              id="product_id"
              type="text"
              className="validate"
              value={formData.product_id}
              onChange={handleChange}
            />
            <label htmlFor="product_id">ID</label>
          </div>

          {/* Cantidad */}
          <div className="input-field col s6">
            <input
              id="quantity"
              type="number"
              className="validate"
              value={formData.quantity}
              onChange={handleChange}
            />
            <label htmlFor="quantity">Cantidad</label>
          </div>
        </div>

        <div className="row">
          {/* Categoría */}
          <div className="input-field col s6">
            <input
              id="category"
              type="text"
              className="validate"
              value={formData.category}
              onChange={handleChange}
            />
            <label htmlFor="category">Categoría</label>
          </div>

          {/* Descripción del producto */}
          <div className="input-field col s6">
            <input
              id="description"
              type="text"
              className="validate"
              value={formData.description}
              onChange={handleChange}
            />
            <label htmlFor="description">Descripción del producto</label>
          </div>
        </div>

        {/* Botón Guardar con ícono */}
        <div className="row">
          <div className="col s12 center-align">
            <button
              className="btn waves-effect waves-light"
              type="submit"
              name="action"
              style={{
                borderRadius: "20px",
                padding: "0 30px",
                width: "12rem",
              }}
            >
              <i className="material-icons left">save</i> Guardar
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default ProductTable;
