import "./seeAndEditMyTeamCard.css";
import "../../../index.css";
import GroupIcon from "@mui/icons-material/Group";

export default function SeeAndEditMyTeamCard() {
  return (
    <div className="see-and-edit-my-team-card-container pattern-card">
      <GroupIcon className="pattern-card-icon" sx={{ fontSize: 150 }} />
      <h2 className="pattern-card-title">Consultar seu time</h2>
      <p className="pattern-card-description">
        Veja e edite as informações do seu time.
      </p>
    </div>
  );
}
