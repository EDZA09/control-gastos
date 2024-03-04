import { useEffect, useState } from "react";

export const ControlPresupuesto = ({ presupuesto, gastos }) => {
  useEffect(() => {
    console.log("Cargando Componente");
  }, gastos);

  const formatearCantidad = (cantidad) => {
    return cantidad.toLocaleString("es-CO", {
      style: "currency",
      currency: "COP",
    });
  };

  return (
    <div className="contenedor-presupuesto contenedor sombra dos-columnas">
      <div>
        <p>Gr&aacute;fica Aqu&iacute;</p>
      </div>
      <div className="contenido-presupuesto">
        <p>
          <span>Presupuesto: </span>
          {formatearCantidad(presupuesto)}
        </p>
        <p>
          <span>Disponible: </span>
          {formatearCantidad(0)}
        </p>
        <p>
          <span>Gastado: </span>
          {formatearCantidad(0)}
        </p>
      </div>
    </div>
  );
};
