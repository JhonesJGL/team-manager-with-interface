import LogoutIcon from "@mui/icons-material/Logout";
import "./logoutButton.css";
import "../../index.css";

export default function LogoutButton() {
  return (
    <div className="logoutContainer">
      <button className="logoutButton" title="Logout">
        <LogoutIcon className="icon" />
      </button>
    </div>
  );
}
