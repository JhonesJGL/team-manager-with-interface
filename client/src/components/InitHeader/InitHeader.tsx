import "./initHeader.css";
import "../../index.css";
import LogoutButton from "../LogoutButton/LogoutButton";

export default function InitHeader() {
  return (
    <header className="initHeader">
      <div className="pageTitleContainer">
        <h1>Bem vindo!</h1>
      </div>
      <LogoutButton />
    </header>
  );
}
