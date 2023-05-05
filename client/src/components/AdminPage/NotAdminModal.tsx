import { useState } from "react";
import './NotAdminModal.css'

interface AdminProps {
    click: () => void;
}


export default function NotAdminModal(props: AdminProps) {
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
                    <h2>Not ADM Editar</h2>
                </div>

                <div className="form-container">
                    <form action="">
                        <input className='username-input' type="text" placeholder="Nome de Usuário" name='username'/>
                        <input className='email-input' type="text" placeholder="Email" name='email'/>
                        <input className='first-name-input' type="text" placeholder="Primeiro Nome" name='firstName'/>
                        <input className='last-name-input' type="text" placeholder="Último Nome" name='lastName'/>
                        <input className='password-input' type="text" placeholder="Senha" name='password'/>
                        <select name="squad" className="squad-select" placeholder="Selecione um Squad">
                            {/* Código para chamar os valores de todos os squads; */}
                            <option value="">Selecione um Squad</option>
                        </select>
                        <button type="button" className="remove-squad-button">Remover do Squad</button>
                        <button type="button" className="make-admin-button">Tornar Admin</button>
                        <button type="button" className="submit-button">Aplicar Alterações</button>
                        
                    </form>
                </div>
                <div className="navigation-buttons-container">
                    <button className="return-button" onClick={closeModal}/>
                    <button className="home-button"/>
                </div>
            </div>
        </div>
    )
}