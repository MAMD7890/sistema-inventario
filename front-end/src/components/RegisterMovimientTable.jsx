import React, { useEffect, useState, useRef } from "react";
import M from "materialize-css";

const RegisterMovimientTable = ({ activeTab, setActiveTab }) => {
  const [formData, setFormData] = useState({
    movement_type: "",
    destination: "",
    phone: "",
    responsible: "",
    date: "",
    description: "",
  });

  const [products, setProducts] = useState([
    {
      name: "Producto 1",
      category: "Categoría 1",
      subcategory: "Subcategoría 1",
      quantity: 10,
      total: 100,
    },
    // Puedes agregar más productos aquí
  ]);

  const selectRef = useRef(null);
  const selectInstanceRef = useRef(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Datos del formulario:", formData);
    console.log("Productos:", products);
  };

  useEffect(() => {
    if (activeTab === 1) {
      const select = selectRef.current;
      if (select && !selectInstanceRef.current) {
        selectInstanceRef.current = M.FormSelect.init(select);
      }
    } else {
      if (selectInstanceRef.current) {
        selectInstanceRef.current.destroy();
        selectInstanceRef.current = null;
      }
    }

    return () => {
      if (selectInstanceRef.current) {
        selectInstanceRef.current.destroy();
        selectInstanceRef.current = null;
      }
    };
  }, [activeTab]);

  return (
    <div className="row">
      <form className="col s12" onSubmit={handleSubmit}>
        {activeTab === 1 ? (
          <>
            <h5>Información de envío</h5>

            <div className="row">
              <div className="input-field col s6">
                <select
                  ref={selectRef}
                  id="movement_type"
                  value={formData.movement_type}
                  onChange={handleChange}
                >
                  <option value="" disabled>
                    Seleccione un tipo de movimiento
                  </option>
                  <option value="entrada">Entrada</option>
                  <option value="salida">Salida</option>
                </select>
                <label htmlFor="movement_type">Tipo de movimiento</label>
              </div>

              <div className="input-field col s6">
                <input
                  id="responsible"
                  type="text"
                  className="validate"
                  value={formData.responsible}
                  onChange={handleChange}
                />
                <label htmlFor="responsible">Responsable</label>
              </div>
            </div>

            <div className="row">
              <div className="input-field col s6">
                <input
                  id="destination"
                  type="text"
                  className="validate"
                  value={formData.destination}
                  onChange={handleChange}
                />
                <label htmlFor="destination">Destino</label>
              </div>

              <div className="input-field col s6">
                <input
                  id="date"
                  type="date"
                  className="validate"
                  value={formData.date}
                  onChange={handleChange}
                />
                <label htmlFor="date">Fecha</label>
              </div>
            </div>

            <div className="row">
              <div className="input-field col s6">
                <input
                  id="phone"
                  type="tel"
                  className="validate"
                  value={formData.phone}
                  onChange={handleChange}
                />
                <label htmlFor="phone">Teléfono</label>
              </div>

              <div className="input-field col s6">
                <input
                  id="description"
                  type="text"
                  className="validate"
                  value={formData.description}
                  onChange={handleChange}
                />
                <label htmlFor="description">Descripción</label>
              </div>
            </div>

            <div className="row">
              <div className="col s12 right-align">
                <button
                  className="btn waves-effect waves-light"
                  type="button"
                  style={{
                    borderRadius: "20px",
                    padding: "0 30px",
                    backgroundColor: "#a0d6b4",
                    color: "#000",
                  }}
                  onClick={() => setActiveTab(2)}
                >
                  Siguiente
                </button>
              </div>
            </div>
          </>
        ) : (
          <>
            <h5>Vista de Movimiento</h5>
            <div className="row">
              <table className="highlight responsive-table">
                <thead>
                  <tr>
                    <th>Nombre del producto</th>
                    <th>Categoría</th>
                    <th>Subcategoría</th>
                    <th>Cantidad</th>
                    <th>Total</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <input type="text" placeholder="Producto" />
                    </td>
                    <td>
                      <input type="text" placeholder="Categoría" />
                    </td>
                    <td>
                      <input type="text" placeholder="Subcategoría" />
                    </td>
                    <td>
                      <input type="number" placeholder="Cantidad" />
                    </td>
                    <td>
                      <input type="text" placeholder="Total" />
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="row">
              <div className="col s6 left-align">
                <button
                  className="btn waves-effect waves-light"
                  type="button"
                  style={{
                    borderRadius: "20px",
                    padding: "0 30px",
                    backgroundColor: "#ccc",
                    color: "#000",
                  }}
                  onClick={() => setActiveTab(1)}
                >
                  Anterior
                </button>
              </div>
              <div className="col s6 right-align">
                <button
                  className="btn waves-effect waves-light"
                  type="submit"
                  style={{
                    borderRadius: "20px",
                    padding: "0 30px",
                    backgroundColor: "#a0d6b4",
                    color: "#000",
                  }}
                >
                  Guardar
                </button>
              </div>
            </div>
          </>
        )}
      </form>
    </div>
  );
};

export default RegisterMovimientTable;
