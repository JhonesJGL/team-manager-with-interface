import "./seeAndEditAllUsersCard.css";
import "../../../index.css";
import BadgeIcon from "@mui/icons-material/Badge";

export default function SeeAndEditAllUsersCard() {
  return (
    <div className="see-and-edit-all-users-card-container pattern-card">
      <BadgeIcon className="pattern-card-icon" sx={{ fontSize: 150 }} />
      <h2 className="pattern-card-title">Consultar usuários</h2>
      <p className="pattern-card-description">
        Veja e edite as informações de qualquer usuário.
      </p>
    </div>
  );
}
