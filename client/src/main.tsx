import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import AdminHome from "./components/AdminHome/AdminHome.tsx";
import LoginPage from "./components/LoginPage/LoginPage.tsx";
import CommonUserHome from "./components/CommonUserHome/CommonUserHome.tsx";
import TeamUserHome from "./components/TeamUserHome/TeamUserHome.tsx";
import LeaderHome from "./components/LeaderHome/LeaderHome.tsx";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <LeaderHome />
);
