import { Link } from 'react-router-dom';
import React, {useState} from 'react';
import './styles.css';
import {auth} from './../firebase';
import {useHistory} from 'react-router-dom';
import {  toast } from 'react-toastify';
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@material-ui/core/CircularProgress';
import Footer from './../Firstpage/components/Footer/Footer';

function Login() {
    const {currentUser} = auth
    const [email, setEmail] = useState('');
    const history = useHistory('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false)
    const [open2, setOpen2] = React.useState(true);
    const handleClose2 = () => {
      setOpen2(false);
    };
    const handleToggle = () => {
      setOpen2(true);
    };

    const login = (e)=> {
        e.preventDefault();
       setLoading(true)
        auth.signInWithEmailAndPassword(email,password)
        .then((auth) =>{
            setLoading(false)
          history.push(`/home`);
        })
        .catch((e) =>{
                toast.error(e.message)      
              setLoading(false)     
        })
    }
    
    return (
        <>
        {loading ?(
            <>
                        <Backdrop
        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={open2}
        onClick={handleClose2}
      >
        <CircularProgress color="inherit" />
        
      </Backdrop>
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
                      ):(
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
                      )}
                        <Footer />   

            
  </>   
    )
}

export default Login
