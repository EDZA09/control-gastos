import CerrarBtn from "../assets/img/cerrar.svg";

export const Modal = ({ setModal }) => {
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
    </div>
  );
};
