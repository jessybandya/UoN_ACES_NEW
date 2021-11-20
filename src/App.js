import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home1 from './components/Firstpage/pages/Home';
import SignUp from './components/Firstpage/pages/SignupPage';
import Pricing from './components/Firstpage/pages/PricingPage';
import Footer from './components/Firstpage/components/Footer/Footer';
import GlobalStyle from './components/Firstpage/globalStyles';
import Navbar from './components/Grid/Navbar';
import Home from "./components/Home"
import Register from './components/Register';
import Login from './components/Login';
import { useState,useEffect } from 'react';
import {auth} from "./components/firebase"
import Postview from './components/Postview';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';


function App() {
	const [user, setUser] = useState([]);
	useEffect(() => {
	  auth.onAuthStateChanged((authUser) =>{
		if(authUser){
		  setUser(authUser)
		}else{
		  setUser(false);
		}
	  })
	}, [])
  return (
    <div className="App">
		<Router>
			<GlobalStyle />
			<Navbar />
			<ToastContainer />
			<Switch>
				<Route exact path="/" component={Home1} />
				<Route exact path="/home"  component={Home} />
				<Route exact path="/login"  component={Login} />
				<Route exact path="/register"  component={Register} />
				<Route exact path="/postview">
              <Postview user={user}/>
             </Route> 
			</Switch>
			<Footer />
		</Router>
    </div>
  );
}

export default App;
