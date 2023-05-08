import HomeHeader from "../HomeHeader/HomeHeader";
import "../../index.css";
import MyUserCard from "../Cards/MyUserCard/MyUserCard";
import SeeAndEditMyTeamCard from "../Cards/SeeAndEditMyTeamCard/SeeAndEditMyTeamCard";
import SeeOtherTeamsCard from "../Cards/SeeOtherTeamsCard/SeeOtherTeamsCard";

export default function LeaderHome() {
  return (
    <div className="pattern-container">
      <HomeHeader />
      <main className="pattern-main-container main-container-three-cards">
        <SeeAndEditMyTeamCard />
        <SeeOtherTeamsCard />
        <MyUserCard />
      </main>
    </div>
  );
}
