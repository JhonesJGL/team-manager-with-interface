import { useState } from "react";
import './TeamsModal.css'

interface TeamsProps {
    click: () => void;
}


export default function TeamsModal(props: TeamsProps) {
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
                    <h2>Teams Editar</h2>
                </div>

                <div className="form-container">
                    <form action="">
                        <div className="input-container">
                            <div className="user-icon"></div>
                            <input className='team-name-input' type="text" placeholder="Nome da Equipe" name='teamName'/>
                        </div>
                        <div className="input-container">
                            <div className="user-icon"></div>
                            <input className='leader-input' type="text" placeholder="Líder" name='leader'/>
                        </div>
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