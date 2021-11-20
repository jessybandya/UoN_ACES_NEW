import { Link } from 'react-router-dom';
import React, {useState} from 'react';
import './styles.css';
import {auth} from './../firebase';
import {useHistory} from 'react-router-dom';
import {  toast } from 'react-toastify';


function Login() {
    const {currentUser} = auth
    const [email, setEmail] = useState('');
    const history = useHistory('');
    const [password, setPassword] = useState('');

    const login = (e)=> {
        e.preventDefault();

        auth.signInWithEmailAndPassword(email,password)
        .then((auth) =>{
          history.push(`/home`);
        })
        .catch((e) =>{
            if (
                e.message ===
                toast.error(e.message)
                
                
                ) {
                    toast.error("The password is invalid or the user does not have a password");
            }
        })
    }
    
    return (
        <>
<div className="login">
      <span className="loginTitle" style={{color: "#3f51b5"}}>UoN_ACES</span>
      <form className="loginForm">
        <label>School Email</label>
        <input className="loginInput" type="text" onChange={(e) => setEmail(e.target.value)} placeholder="Enter your school email..." />
        <label>Password</label>
        <input className="loginInput" type="password" onChange={(e) => setPassword(e.target.value)} placeholder="Enter your password..." />
        <button onClick={login} className="loginButton">Login</button>
      </form>
      <button onClick={()=> toast.success("!oops, we're still working on this...")} className="loginRegisterButton">Forgot password?</button>
    </div>
            
  </>      
    )
}

export default Login
