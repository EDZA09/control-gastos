export const NuevoPresupuesto = ({ presupuesto, setPresupuesto }) => {
  const handlePresupuesto = (event) => {
    event.preventDefault();

    if (!Number(presupuesto) || presupuesto < 0) {
      console.log("No es un presupuesto");
    } else {
      console.log("Si es un presupuesto");
    }
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
            onChange={(event) => setPresupuesto(event.target.value)}
          />
        </div>

        <input type="submit" value="Añadir" />
      </form>
    </div>
  );
};
