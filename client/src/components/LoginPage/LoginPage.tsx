import {useState, useEffect} from 'react';
import Form from '../LoginForm/Form';


export default function LoginPage() {
    const [inputs, setInputs] = useState({
        username: "",
        password: ""
    });
     

    function handleInputs(event: React.ChangeEvent<HTMLInputElement>) : void {
        const { name, value } = event.target;
        setInputs((prevState) => ({ ...prevState, [name]: value }))
    }

    return(
        <div className="login-container">           
            <Form onChange={handleInputs}/>
        </div>
        
    )
}