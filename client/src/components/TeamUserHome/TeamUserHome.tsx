import HomeHeader from "../HomeHeader/HomeHeader";
import "../../index.css";
import SeeMyTeamCard from "../Cards/SeeMyTeamCard/SeeMyTeamCard";
import MyUserCard from "../Cards/MyUserCard/MyUserCard";

export default function TeamUserHome() {
  return (
    <div className="pattern-container">
      <HomeHeader />
      <main className="pattern-main-container main-container-two-cards">
        <SeeMyTeamCard />
        <MyUserCard />
      </main>
    </div>
  );
}
