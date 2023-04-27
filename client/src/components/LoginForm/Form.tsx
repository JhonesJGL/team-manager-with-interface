// import Button from '@mui/material/Button'
import { TextField } from '@mui/material/';
import {IconLockFill, IconPerson} from '../../assets/icons/icons'
import logo from '../../assets/hopper.png'
import './Form.css'

export default function Form(){
    return (
        <div className="form-container">
            <img src={logo}/>
            <div className="form-content">
                <div className="input-container"><IconPerson/>
                <input type="text" name="username" className="input-login" placeholder='username' required/>
                </div>
                
                
                <div className="input-container">
                    <IconLockFill/>
                <input type="password" name="password" className="input-password" placeholder='password' required/>
                </div>
                
            </div>
            <button className='submit-form-button'>Login</button>
        </div>
    )
}

