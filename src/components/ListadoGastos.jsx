import React from "react";

const ListadoGastos = ({ gastos }) => {
  return (
    <div className="listado-gastos contenedor">
      <h2>{gastos.length ? "Gastos" : "No Hay Gastos aún"}</h2>
    </div>
  );
};

export default ListadoGastos;