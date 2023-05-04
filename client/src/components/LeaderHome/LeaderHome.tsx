import HomeHeader from "../HomeHeader/HomeHeader";
import "../../index.css";
import MyUserCard from "../MyUserCard/MyUserCard";
import SeeAndEditMyTeamCard from "../SeeAndEditMyTeamCard/SeeAndEditMyTeamCard";
import SeeOtherTeamsCard from "../SeeOtherTeamsCard/SeeOtherTeamsCard";

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
