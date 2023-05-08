import "./editMyUserModal.css";
import "../../../index.css";

interface ModalProps {
  onClose: () => void;
}

export default function EditMyUserModal(props: ModalProps) {
  function stopPropagation(e: React.MouseEvent<HTMLDivElement>) {
    e.stopPropagation();
  }

  return (
    <div className="modal-background" onClick={props.onClose}>
      <div className="modal-container" onClick={stopPropagation}>
        <div>
          <h2>Editar seus dados</h2>
        </div>

        <div className="form-container">
          <form action="">
            <input
              className="username-input"
              type="text"
              placeholder="Nome de Usuário"
              name="username"
            />
            <input
              className="email-input"
              type="text"
              placeholder="Email"
              name="email"
            />
            <input
              className="first-name-input"
              type="text"
              placeholder="Primeiro Nome"
              name="firstName"
            />
            <input
              className="last-name-input"
              type="text"
              placeholder="Último Nome"
              name="lastName"
            />
            <input
              className="password-input"
              type="text"
              placeholder="Senha"
              name="password"
            />
            <button type="button" className="submit-button">
              Aplicar Alterações
            </button>
          </form>
        </div>
        <div className="navigation-buttons-container">
          <button className="pattern-close-button" />
        </div>
      </div>
    </div>
  );
}
