import React from "react";

export const ControlPresupuesto = ({ presupuesto }) => {
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
          <span>Presupuesto: </span>${presupuesto}
        </p>
      </div>
    </div>
  );
};
