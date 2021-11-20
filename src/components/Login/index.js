import { Link } from 'react-router-dom';
import React, {useState} from 'react';
import './styles.css';
import {auth} from './../firebase';
import {useHistory} from 'react-router-dom';


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
                alert(e.message)
                
                
                ) {
                alert("The password is invalid or the user does not have a password");
            } else if (
                e.message ===
                alert(e.message)
            ) {
                history.push("/register");
                window.scrollTo({
                    top: document.body.scrollHeight,
                    left: 0,
                    behavior: "smooth",
                });
            }
        })
    }
    
    return (
        <>
<div class="container bg-white pb-5">
    <div class="row d-flex justify-content-start align-items-center mt-sm-5">
        <div class="col-lg-5 col-10">
            {/* <div id="circle"></div> */}
            <div class="pb-5"> <img  className="img1" src="https://www.studentportal.news/wp-content/uploads/2018/08/UniversityOfNairobi.jpg" alt="" style={{maxHeight: "350px",opacity: "0.7",borderRadius: "50px"}}/> </div>
        </div>
        <div  class="col-lg-4 offset-lg-2 col-md-6 offset-md-3">
            <div class="pt-4">
                <h6><span class="fa fa-superpowers text-primary px-md-2"></span></h6>
            </div>
            <div style={{border: "1px solid #3f51b5",padding:10,borderRadius:10}} class="mt-3 mt-md-5">
                <h5 style={{color: "#3f51b5"}}>Log in to your account</h5>
                <hr/>
                <form class="pt-4">
                    <div class="d-flex flex-column pb-3"> <label style={{background: "",color:"#3f51b5",borderRadius: "10px"}} for="email">School Email</label> <input style={{color: ""}} onChange={(e) => setEmail(e.target.value)}  type="email" name="" id="emailId" class="border-bottom border-primary"/> </div>
                    <div class="d-flex flex-column pb-3"> <label style={{background: "",color:"#3f51b5",borderRadius: "10px"}} for="password">Password</label> <input style={{color: ""}}  type="password" onChange={(e) => setPassword(e.target.value)}   name="passwrd" id="pwd" class="border-bottom border-primary"/> </div>
                    <div class="d-flex jusity-content-end pb-4">
                        <div class="ml-auto"> <a href="#" class="text-danger text-decoration-none"></a> </div>
                    </div> <input type="button" style={{backgroundColor: "#3f51b5"}} onClick={login} type="submit" value="Log in" class="btn btn-primary btn-block mb-3"/> 
                    <div class="register mt-5">
                        <p>Don't have an account? <a style={{color: "#3f51b5"}} href="/register">Create an account</a></p>
                    </div>
                </form>
                                </div>

        </div>
    </div>
</div>
            
  </>      
    )
}

export default Login
