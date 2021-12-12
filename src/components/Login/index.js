import { Link } from 'react-router-dom';
import React, {useState} from 'react';
import './styles.css';
import {auth} from './../firebase';
import {useHistory} from 'react-router-dom';
import {  toast } from 'react-toastify';
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@material-ui/core/CircularProgress';
import Footer from './../Firstpage/components/Footer/Footer';
import { motion } from "framer-motion"
import Navbar from "../Grid/Navbar"

const buttonVariants = {


  hidden:{
    opacity:0,
     x: '-100vw',
   },
   visible:{
     opacity:1,
     x: 0,
     transition: {
       type: 'spring',
       delay: 0.5
     }
   },
   exit:{
     x: '-100vw',
     transition:{
       ease: 'easeOut'
     }
   }
}

const containerVariants={
  hidden:{
    opacity: 0,
  },
  visible:{
    opacity:1,
    transition:{
      delay: 1.5,
      duration: 1.5
    }
  },
  exit:{
    x: '-100vw',
    transition:{
      ease: 'easeOut'
    }
  }
}





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
        <Navbar />
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
      <span className="loginTitle"  style={{color: "#3f51b5",marginTop:70}}>UoN_ACES</span>
                        <form className="loginForm">
                          <label style={{color: "#3f51b5"}}>Username</label>
                          <input className="loginInput" type="text" onChange={(e) => setEmail(e.target.value)} placeholder="Enter your school email..." />
                          <label style={{color: "#3f51b5"}}>Password</label>
                          <input className="loginInput" type="password" onChange={(e) => setPassword(e.target.value)} placeholder="Enter your password..." />
                          <button onClick={login} className="loginButton">Login</button>
                        </form>
                        <button onClick={()=> toast.warn("!oops, we're still working on this...")} className="loginRegisterButton">Forgot password?</button>
                      </div>
      </>
                      ):(
                        <div className="login">
                        <motion.span className="loginTitle"  style={{color: "#3f51b5",marginTop:70}}
                            variants={containerVariants}
                            initial="hidden"
                            animate="visible"
                            exit="exit"
                        >UoN_ACES</motion.span>
                        <motion.form className="loginForm"
                                                         variants={containerVariants}
                                                         initial="hidden"
                                                         animate="visible"
                                                         exit="exit"                     
                        >

                          <label style={{color: "#3f51b5"}}></label>
                          <input className="loginInput" type="text" onChange={(e) => setEmail(e.target.value)} placeholder="School E-mail..." />
                          <label style={{color: "#3f51b5"}}></label>
                          <input className="loginInput" type="password" onChange={(e) => setPassword(e.target.value)} placeholder="Password..." />
                          <button onClick={login} className="loginButton"

                          >Login</button>
                        </motion.form>
                        <motion.button onClick={()=> toast.warn("!oops, we're still working on this...")} className="loginRegisterButton"
                                                    variants={containerVariants}
                                                    initial="hidden"
                                                    animate="visible"
                                                    exit="exit"
                        >Forgot password?</motion.button>
                      </div>
                      )}
                        <Footer />   

            
  </>   
    )
}

export default Login
