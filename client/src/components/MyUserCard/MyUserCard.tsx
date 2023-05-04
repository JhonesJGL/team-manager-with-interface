import "./myUserCard.css";
import "../../index.css";
import ManageAccountsIcon from "@mui/icons-material/ManageAccounts";

export default function MyUserCard() {
  return (
    <div className="cardContainer patternCard">
      <ManageAccountsIcon className="patternCardIcon" sx={{ fontSize: 150 }} />
      <h2 className="patternCardTitle">Consultar seus dados</h2>
      <p className="patternCardDescription">
        Veja e edite as informações do seu usuário.
      </p>
    </div>
  );
}
