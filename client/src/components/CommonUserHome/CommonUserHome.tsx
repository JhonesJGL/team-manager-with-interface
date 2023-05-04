import HomeHeader from "../HomeHeader/HomeHeader";
import "../../index.css";
import MyUserCard from "../MyUserCard/MyUserCard";

export default function CommonUserHome() {
  return (
    <div className="patternContainer">
      <HomeHeader />
      <main className="mainContainer">
        <MyUserCard />
      </main>
    </div>
  );
}
