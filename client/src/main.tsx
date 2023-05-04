import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import AdminInitPage from "./components/AdminInitPage/AdminInitPage.tsx";
import "./index.css";
import LoginPage from "./components/LoginPage/LoginPage.tsx";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <AdminInitPage />
);
