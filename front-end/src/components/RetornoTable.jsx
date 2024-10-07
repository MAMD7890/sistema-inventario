import React, { useState } from "react";

const RetornoTable = ({ idMovimiento }) => {
  const [editing, setEditing] = useState(false);
  const [rows, setRows] = useState([
    {
      id: 1,
      productos: "",
      cantidad: "",
      retornos: "",
      faltantes: "",
      total: "",
    },
    {
      id: 2,
      productos: "",
      cantidad: "",
      retornos: "",
      faltantes: "",
      total: "",
    },
    {
      id: 3,
      productos: "",
      cantidad: "",
      retornos: "",
      faltantes: "",
      total: "",
    },
    {
      id: 4,
      productos: "",
      cantidad: "",
      retornos: "",
      faltantes: "",
      total: "",
    },
    {
      id: 5,
      productos: "",
      cantidad: "",
      retornos: "",
      faltantes: "",
      total: "",
    },
  ]);

  const handleEdit = () => setEditing(true);
  const handleSave = () => {
    setEditing(false);
    console.log("Guardando cambios:", rows);
  };

  const handleInputChange = (id, field, value) => {
    setRows(
      rows.map((row) => (row.id === id ? { ...row, [field]: value } : row))
    );
  };

  const buttonStyle = {
    borderRadius: "20px",
    boxShadow: "none",
    textTransform: "none",
    fontWeight: "normal",
    padding: "0 20px",
  };

  return (
    <div
      style={{
        // border: "1px solid #e0e0e0",
        borderRadius: "4px",
        padding: "20px",
        margin: "20px 0",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "20px",
        }}
      >
        <h5 style={{ margin: 0, fontWeight: "normal" }}>
          id-movimiento: {idMovimiento}
        </h5>
        {!editing && (
          <button
            className="btn white black-text"
            onClick={handleEdit}
            style={{ ...buttonStyle, border: "1px solid #9e9e9e" }}
          >
            editar
          </button>
        )}
      </div>
      <table className="highlight" style={{ marginBottom: "20px" }}>
        <thead>
          <tr>
            <th>productos</th>
            <th>cantidad</th>
            <th>retornos</th>
            <th>faltantes</th>
            <th>total</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr key={row.id}>
              {["productos", "cantidad", "retornos", "faltantes", "total"].map(
                (field) => (
                  <td key={field}>
                    <input
                      type="text"
                      value={row[field]}
                      onChange={(e) =>
                        handleInputChange(row.id, field, e.target.value)
                      }
                      disabled={!editing}
                      style={{
                        margin: 0,
                        height: "2rem",
                        border: "none",
                        backgroundColor: "transparent",
                      }}
                    />
                  </td>
                )
              )}
            </tr>
          ))}
        </tbody>
      </table>
      {editing && (
        <div style={{ textAlign: "center" }}>
          <button
            className="btn white black-text"
            onClick={handleSave}
            style={{ ...buttonStyle, border: "1px solid #9e9e9e" }}
          >
            guardar Retorno
          </button>
        </div>
      )}
    </div>
  );
};

export default RetornoTable;
