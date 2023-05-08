import { useEffect, useState } from "react";
import './AdminPage.css'
import HomeHeader from "../HomeHeader/HomeHeader";
import TeamsTable from "../Table/TeamsTable";
import TeamsModal from "./TeamsModal";



export default function AdminToTeams() {
    const [isOpen, setIsOpen] = useState(true)
    function closeModal() {
        setIsOpen(false);
    }

    return (
        <div >
        <HomeHeader/>
                
            <div className="table-container">
                {isOpen && <TeamsModal click={closeModal}/>}
                <TeamsTable/>
                
            </div>
        </div>
    )
}