import "./myUserCard.css";
import "../../../index.css";
import ManageAccountsIcon from "@mui/icons-material/ManageAccounts";

export default function MyUserCard() {
  return (
    <div className="my-user-card-container pattern-card">
      <ManageAccountsIcon
        className="pattern-card-icon"
        sx={{ fontSize: 150 }}
      />
      <h2 className="pattern-card-title">Consultar seus dados</h2>
      <p className="pattern-card-description">
        Veja e edite as informações do seu usuário.
      </p>
    </div>
  );
}
