import React, { useState } from 'react'
import './Login.css'
import { Link,useNavigate } from "react-router-dom";
import { auth } from './firebase.js';
import './firebase'

function Login() {
     const history=useNavigate(); 
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const Signin = (e) => {
        e.preventDefault();
        //some fancy firebase login 
        auth.signInWithEmailAndPassword(email,password)
        .then((auth)=>{
            console.log(auth);
            if(auth)
            {
                history('/');
            }
        })
        .catch(error => alert(error.message));
    }
    const register = (e) => {
        e.preventDefault();
        //some fancy firebase register 
        auth.createUserWithEmailAndPassword(email, password)
            .then((auth) => {
                //it successfully created a new user with email and password
                console.log(auth);
                if(auth)
                {
                    history('/');
                }

            }
            )
            .catch(error => alert(error.message));
        
}

return (
    <div className='login'>
        <Link to='/'>
            <img className='login_logo' src="https://easyshop.direct/wp-content/uploads/2023/01/Logo-Easyshop_Bluegreen2240-2-2048x1288.png" alt="easyShop logo" />
        </Link>
        <div className="login_container">
            <h1>Sign-in</h1>
            <form >
                <h5>E-mail</h5>
                <input type="text" value={email} onChange={e => setEmail(e.target.value)} />
                <h5>Password</h5>
                <input type="password" value={password} onChange={e => setPassword(e.target.value)} />
                <button className='login_signin' type='submit' onClick={Signin}>Sign In</button>
            </form>
            <p>By signing-in you agree to the EasyShop Conditions of Use & Sale. Please
                see our Privacy Notice, our Cookies Notice and our Interest-Based Ads Notice.</p>
            <button className='login_register' onClick={register}>Create your EasyShop Account</button>
        </div>


    </div>
)
}

export default Login