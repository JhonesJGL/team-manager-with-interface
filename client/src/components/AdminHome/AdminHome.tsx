import HomeHeader from "../HomeHeader/HomeHeader";
import "../../index.css";
import MyUserCard from "../MyUserCard/MyUserCard";
import SeeAndEditAllUsersCard from "../SeeAndEditAllUsersCard/SeeAndEditAllUsersCard";
import SeeAndEditAllTeamsCard from "../SeeAndEditAllTeamsCard/SeeAndEditAllTeamsCard";

export default function LeaderHome() {
  return (
    <div className="pattern-container">
      <HomeHeader />
      <main className="pattern-main-container main-container-three-cards">
        <SeeAndEditAllUsersCard />
        <SeeAndEditAllTeamsCard />
        <MyUserCard />
      </main>
    </div>
  );
}
