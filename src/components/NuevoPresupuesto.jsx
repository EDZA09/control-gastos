import { useState } from "react";
import { Mensaje } from "./Mensaje";

export const NuevoPresupuesto = ({ presupuesto, setPresupuesto }) => {
  const [mensaje, setMensaje] = useState("");

  const handlePresupuesto = (event) => {
    event.preventDefault();

    if (!Number(presupuesto) || presupuesto < 0) {
      setMensaje("No es un presupuesto Válido");
      return;
    }
    setMensaje("");
  };

  return (
    <div className="contenedor-presupuesto contenedor sombra">
      <form onSubmit={handlePresupuesto} className="formulario">
        <div className="campo">
          <label>Definir Presupuesto</label>

          <input
            type="text"
            className="nuevo-presupuesto"
            placeholder="Añade tu Presupuesto"
            value={presupuesto}
            onChange={(event) => setPresupuesto(Number(event.target.value))}
          />
        </div>

        <input type="submit" value="Añadir" />

        {mensaje && <Mensaje tipo="error">{mensaje}</Mensaje>}
      </form>
    </div>
  );
};
