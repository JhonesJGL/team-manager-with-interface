import "./seeMyTeamCard.css";
import "../../../index.css";
import GroupIcon from "@mui/icons-material/Group";

export default function SeeMyTeamCard() {
  return (
    <div className="see-my-team-card-container pattern-card">
      <GroupIcon className="pattern-card-icon" sx={{ fontSize: 150 }} />
      <h2 className="pattern-card-title">Consultar seu time</h2>
      <p className="pattern-card-description">
        Veja as informações do seu time.
      </p>
    </div>
  );
}
