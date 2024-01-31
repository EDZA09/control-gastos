import CerrarBtn from "../assets/img/cerrar.svg";

export const Modal = () => {
  return (
    <div className="modal">
      <p>Desde Modal</p>
      <div className="cerrar-modal">
        <img src={CerrarBtn} alt="cerrar modal" onClick={ocultarModal} />
      </div>
    </div>
  );
};
