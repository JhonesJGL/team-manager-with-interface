import { useEffect, useState } from "react";
import './AdminPage.css'
import Table from "../Table/Table";


export default function AdminPage() {

    return (
        <div className="main-container">
            <header className='admin-header'>
                <div className="go-back-container">
                    <a>Home</a>
                </div>
                <div className="page-name-container">
                    <h1>Ver e editar usuários</h1>
                </div>
                <div className="logout-container">
                    <button>Log Out</button>
                </div>
            </header>

            <div className="table-container">
                <Table/>
            </div>
        </div>
    )
}