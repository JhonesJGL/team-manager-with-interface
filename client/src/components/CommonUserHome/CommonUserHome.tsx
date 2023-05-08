import HomeHeader from "../HomeHeader/HomeHeader";
import "../../index.css";
import MyUserCard from "../Cards/MyUserCard/MyUserCard";
import { useState } from "react";
import EditMyUserModal from "../Modals/EditMyUserModal/EditMyUserModal";

export default function CommonUserHome() {
  const [isOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <div className="pattern-container">
      <HomeHeader />
      <main className="pattern-main-container">
        <MyUserCard onClick={openModal} />
        {isOpen && <EditMyUserModal onClose={closeModal} />}
      </main>
    </div>
  );
}
