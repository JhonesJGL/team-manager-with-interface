import './Modal.css'

interface PropsModal {
    click: () => void;
    message: string;
}


export default function Modal(props: PropsModal) {
    
    return (
        <div className="modal-background"onClick={props.click} >
            <div className="modal-container" onClick={(e) => e.stopPropagation()}>
                <p>{props.message}</p>
            </div>
        </div>
    )
}