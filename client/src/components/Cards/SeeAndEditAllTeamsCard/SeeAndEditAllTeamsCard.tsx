import "./seeAndEditAllTeamsCard.css";
import "../../../index.css";
import GroupsIcon from "@mui/icons-material/Groups";

export default function SeeAndEditAllTeamsCard() {
  return (
    <div className="see-and-edit-all-teams-card-container pattern-card">
      <GroupsIcon className="pattern-card-icon" sx={{ fontSize: 150 }} />
      <h2 className="pattern-card-title">Consultar times</h2>
      <p className="pattern-card-description">
        Veja e edite as informações de qualquer time.
      </p>
    </div>
  );
}
