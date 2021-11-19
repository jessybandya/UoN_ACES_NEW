import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home1 from './components/Firstpage/pages/Home';
import SignUp from './components/Firstpage/pages/SignupPage';
import Pricing from './components/Firstpage/pages/PricingPage';
import Footer from './components/Firstpage/components/Footer/Footer';
import GlobalStyle from './components/Firstpage/globalStyles';
import Navbar from './components/Grid/Navbar';
import Home from "./components/Home"
function App() {
  return (
    <div className="App">
		<Router>
			<GlobalStyle />
			<Navbar />
			<Switch>
				<Route path="/" exact component={Home1} />
				<Route path="/home" exact component={Home} />
				<Route path="/signup" exact component={SignUp} />
				<Route path="/pricing" exact component={Pricing} />
			</Switch>
			<Footer />
		</Router>
    </div>
  );
}

export default App;
