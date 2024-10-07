import React from "react";

const ListTable = () => {
  return (
    <table className="highlight">
      <thead>
        <tr>
          <th>Nombre del producto</th>
          <th>Categoría</th>
          <th>Subcategoría</th>
          <th>Fecha de creación</th>
          <th>ID producto</th>
          <th>Cantidad</th>
          <th>Descripción</th>
          <th>Acciones</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>iPhone 13</td>
          <td>Electrónica</td>
          <td>Teléfonos</td>
          <td>2024-01-01</td>
          <td>001</td>
          <td>50</td>
          <td>Último modelo de iPhone con 128GB.</td>
          <td>
            <button className="btn">Editar</button>{" "}
            <button className="btn">Eliminar</button>
          </td>
        </tr>
        <tr>
          <td>MacBook Pro</td>
          <td>Electrónica</td>
          <td>Computadoras</td>
          <td>2024-02-01</td>
          <td>002</td>
          <td>30</td>
          <td>Portátil Apple con M1 chip.</td>
          <td>
            <button className="btn">Editar</button>{" "}
            <button className="btn">Eliminar</button>
          </td>
        </tr>
        <tr>
          <td>Sofá</td>
          <td>Hogar</td>
          <td>Muebles</td>
          <td>2024-03-01</td>
          <td>003</td>
          <td>10</td>
          <td>Sofá de tres plazas color gris.</td>
          <td>
            <button className="btn">Editar</button>{" "}
            <button className="btn">Eliminar</button>
          </td>
        </tr>
        <tr>
          <td>Refrigerador</td>
          <td>Hogar</td>
          <td>Electrodomésticos</td>
          <td>2024-04-01</td>
          <td>004</td>
          <td>15</td>
          <td>Refrigerador de doble puerta con congelador.</td>
          <td>
            <button className="btn">Editar</button>{" "}
            <button className="btn">Eliminar</button>
          </td>
        </tr>
        <tr>
          <td>Zapatillas Deportivas</td>
          <td>Ropa</td>
          <td>Calzado</td>
          <td>2024-05-01</td>
          <td>005</td>
          <td>100</td>
          <td>Zapatillas deportivas para correr.</td>
          <td>
            <button className="btn">Editar</button>{" "}
            <button className="btn">Eliminar</button>
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export default ListTable;
