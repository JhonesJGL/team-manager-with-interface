import {IconLockFill, IconPerson} from '../../assets/icons/icons'
import logo from '../../assets/hopper.png'
import './Form.css'

interface FormProps {
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    onSubmit: () => void;
}

export default function Form(props: FormProps){
    
    return (
        <div className="form-container">
            <img src={logo}/>
            <h1>login</h1>
            <div className="form-content">
                <div className="input-container">
                    <IconPerson/>
                <input type="text" name="username" className="input-login" placeholder='username' onChange={props.onChange} required/>
                </div>
                
                
                <div className="input-container">
                    <IconLockFill/>
                <input type="password" name="password" className="input-password" placeholder='password' onChange={props.onChange} required/>
                </div>
                
            </div>
            <button className='submit-form-button' onClick={props.onSubmit}>login</button>
        </div>
    )
}

