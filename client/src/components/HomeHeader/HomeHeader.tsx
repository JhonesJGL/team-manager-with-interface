import "./homeHeader.css";
import "../../index.css";
import LogoutButton from "../LogoutButton/LogoutButton";

export default function HomeHeader() {
  return (
    <header className="patternHeader">
      <div className="patternHeaderTitleContainer">
        <h1 className="patternHeaderTitle">Bem vindo!</h1>
      </div>
      <LogoutButton />
    </header>
  );
}
