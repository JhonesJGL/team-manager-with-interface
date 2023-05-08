import HomeHeader from "../HomeHeader/HomeHeader";
import "../../index.css";
import MyUserCard from "../Cards/MyUserCard/MyUserCard";

export default function CommonUserHome() {
  return (
    <div className="pattern-container">
      <HomeHeader />
      <main className="pattern-main-container">
        <MyUserCard />
      </main>
    </div>
  );
}
