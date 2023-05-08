import "./homeHeader.css";
import "../../index.css";
import LogoutButton from "../LogoutButton/LogoutButton";

export default function HomeHeader() {
  return (
    <header className="pattern-header">
      <div className="pattern-header-title-container">
        <h1 className="pattern-header-title">Bem vindo!</h1>
      </div>
      <LogoutButton />
    </header>
  );
}
