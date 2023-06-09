import { useState } from "react";
import './AdminModal.css'

interface AdminProps {
    click: () => void;
}


export default function AdminModal(props: AdminProps) {
    const [isOpen, setIsOpen] = useState(false)
    function closeModal() {
        setIsOpen(false);
    }
    function openModal() {
        setIsOpen(true);
    }
   

    return (
        <div className="modal-background" onClick={props.click}>
            <div className="modal-container" onClick={(e) => e.stopPropagation()}>
                <div>
                    <h2>ADM Editar</h2>
                </div>

                <div className="form-container">
                    <form action="">
                        <input className='username-input' type="text" placeholder="Nome de Usuário" name='username'/>
                        <input className='email-input' type="text" placeholder="Email" name='email'/>
                        <input className='first-name-input' type="text" placeholder="Primeiro Nome" name='firstName'/>
                        <input className='last-name-input' type="text" placeholder="Último Nome" name='lastName'/>
                        <input className='password-input' type="text" placeholder="Senha" name='password'/>
                        <button type="button" className="submit-button">Aplicar Alterações</button>
                    </form>
                </div>
                <div className="navigation-buttons-container">
                    <button className="return-button" onClick={closeModal}></button>
                    <button className="home-button"></button>
                </div>
            </div>
        </div>
    )
}