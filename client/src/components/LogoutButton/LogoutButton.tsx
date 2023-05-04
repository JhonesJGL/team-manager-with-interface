import LogoutIcon from "@mui/icons-material/Logout";
import "./logoutButton.css";
import "../../index.css";

export default function LogoutButton() {
  return (
    <div className="logout-container">
      <button className="logout-button" title="Logout">
        <LogoutIcon className="icon" />
      </button>
    </div>
  );
}
