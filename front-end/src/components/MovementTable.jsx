import React from "react";

const MovementTable = () => {
  return (
    <table className="highlight">
      <thead>
        <tr>
          {/* <th>Categoría</th>
          <th>Subcategoría</th>
          <th>Nombre del producto</th> */}
          <th>Fecha inicial</th>
          <th>Fecha final</th>
          <th>ID producto</th>
          <th>Tipo de movimiento</th>
          <th>Acciones</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          {/* <td>Electrónica</td>
          <td>Teléfonos</td>
          <td>iPhone 13</td> */}
          <td>2024-01-01</td>
          <td>2024-01-10</td>
          <td>001</td>
          <td>Entrada</td>
        </tr>
        <tr>
          {/* <td>Electrónica</td>
          <td>Computadoras</td>
          <td>MacBook Pro</td> */}
          <td>2024-02-01</td>
          <td>2024-02-10</td>
          <td>002</td>
          <td>Salida</td>
        </tr>
        <tr>
          {/* <td>Hogar</td>
          <td>Muebles</td>
          <td>Sofá</td> */}
          <td>2024-03-01</td>
          <td>2024-03-10</td>
          <td>003</td>
          <td>Entrada</td>
        </tr>
        <tr>
          {/* <td>Hogar</td>
          <td>Electrodomésticos</td>
          <td>Refrigerador</td> */}
          <td>2024-04-01</td>
          <td>2024-04-10</td>
          <td>004</td>
          <td>Salida</td>
        </tr>
        <tr>
          {/* <td>Ropa</td>
          <td>Calzado</td>
          <td>Zapatillas</td> */}
          <td>2024-05-01</td>
          <td>2024-05-10</td>
          <td>005</td>
          <td>Entrada</td>
        </tr>
      </tbody>
    </table>
  );
};

export default MovementTable;
