import "./seeOtherTeamsCard.css";
import "../../index.css";
import ManageAccountsIcon from "@mui/icons-material/ManageAccounts";

export default function SeeOtherTeamsCard() {
  return (
    <div className="see-other-teams-card-container pattern-card">
      <ManageAccountsIcon
        className="pattern-card-icon"
        sx={{ fontSize: 150 }}
      />
      <h2 className="pattern-card-title">Consultar outros times</h2>
      <p className="pattern-card-description">
        Veja as informações de todos os outros time e seus respectivos líderes.
      </p>
    </div>
  );
}
