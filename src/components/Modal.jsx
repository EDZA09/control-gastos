import CerrarBtn from "../assets/img/cerrar.svg";

export const Modal = ({ setModal, animarModal }) => {
  const ocultarModal = () => {
    console.log("Cerrar modal");
    setModal(false);
  };
  return (
    <div className="modal">
      <p>Desde Modal</p>
      <div className="cerrar-modal">
        <img src={CerrarBtn} alt="cerrar modal" onClick={ocultarModal} />
      </div>

      <form className={`formulario ${animarModal ? "animar" : ""}`}>
        <legend>Nuevo Gasto</legend>
      </form>
    </div>
  );
};
