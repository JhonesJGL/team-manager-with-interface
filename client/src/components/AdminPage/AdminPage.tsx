import { useEffect, useState } from "react";
import './AdminPage.css'
import Table from "../Table/Table";
import AdminModal from "./AdminModal";
import NotAdminModal from './NotAdminModal'


export default function AdminPage() {
    const [isOpen, setIsOpen] = useState(true)
    function closeModal() {
        setIsOpen(false);
    }

    return (
        <div className="main-container">
            <header className='admin-header'>
                <div className="go-back-container">
                    <button className="nav-return-button"/>
                </div>
                <div className="page-name-container">
                    <h1>Ver e editar usuários</h1>
                </div>
                <div className="logout-container">
                    <button className="nav-logout-button"/>
                </div>
            </header>

            <div className="table-container">
                {isOpen && <NotAdminModal click={closeModal}/>}
                
                <Table/>
                
            </div>
        </div>
    )
}