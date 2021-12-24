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
import { useState,useEffect, useContext } from 'react';
import {auth1} from "./components/firebase"
import Postview from './components/Postview';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';
import Addpost from './components/Addpost';
import Friends from './components/Friends';
import MainMessagesPage from './components/MainMessagesPage';
import ChatDm from './components/ChatDm1';
import Notificationspage from './components/Notificationspage1';
import Profileview from './components/Profileview1';
import Academics from './components/Academics';
import Year1 from "./components/Years/Year1"
import Year2 from "./components/Years/Year2"
import Year3 from "./components/Years/Year3"
import Year4 from "./components/Years/Year4"
import Year5 from "./components/Years/Year5"
import Root from "./components/Testhome"
// import { CometChat } from "@cometchat-pro/chat";
import * as CONSTANTS from "../src/constants/constants"
import Context from './components/Register/Context';
import { createBrowserHistory } from 'history';
// import {CometChatUI} from "./cometchat-pro-react-ui-kit/CometChatWorkspace/src";
import MessagePage from "./defaultPages/App"
import {
  CometChatUI,
  CometChatConversationList,
  CometChatConversationListWithMessages,
  CometChatUserList,
  CometChatUserListWithMessages,
  CometChatGroupList,
  CometChatGroupListWithMessages,
  CometChatMessages
} from './cometchat-pro-react-ui-kit/CometChatWorkspace/src';
import { connect } from 'react-redux';
import PrivateRoute from './PrivateRoute';
import KitchenSinkApp from './defaultPages/KitchenSinkApp';
import HomePage from './defaultPages/HomePage';

import  App1 from "./defaultPages/App"
function App() {
	const [user, setUser] = useState([]);
  const [cometChat, setCometChat] = useState(null);

	useEffect(() => {
	  auth1.onAuthStateChanged((authUser) =>{
		if(authUser){
		  setUser(authUser)
		}else{
		  setUser(false);
		}
	  })
	}, [])


    // user state contains authenticated user.
    // comet chat.
  
    useEffect(() => {
      initAuthUser();
      initCometChat();
    }, []);
  
    /**
     * init auth user
     */
    const initAuthUser = () => { 
      const authenticatedUser = localStorage.getItem('auth');
      if (authenticatedUser) { 
        setUser(JSON.parse(authenticatedUser));
      }
    };
  
 

  const initCometChat = async () => {
    const { CometChat } = await import('@cometchat-pro/chat');
    const appID = `${CONSTANTS.APP_ID}`;
    const region = `${CONSTANTS.APP_REGION}`;
    const appSetting = new CometChat.AppSettingsBuilder().subscribePresenceForAllUsers().setRegion(region).build();
    CometChat.init(appID, appSetting).then(
      () => {
        setCometChat(() => CometChat);
      },
      error => {
      }
    );
  }
  const history = createBrowserHistory();

  return (
    <div className="App">
		<Router history={history}>
			<GlobalStyle />
			{/* <Navbar /> */}
			<ToastContainer />
			<Switch>
				<Route exact path="/" component={Home1} />
				<Route exact path="/home"  component={Home} />
				<Route exact path="/login"  component={Login} />
				<Route exact path="/register"  component={Register} />
				<Route exact path="/postview/:id/:uid">
					
              <Postview user={user}/>
             </Route> 
			 <Route exact path="/manageposts">
              <Addpost user={user}/>
             </Route> 

			 <Route exact path="/friends">
              <Friends user={user}/>
             </Route> 

		      {/* <Route exact path="/mainmessagespage">
              <MessagePage user={user}/>
             </Route>  */}
             <Route exact path="/messages">
              <ChatDm user={user}/>
             </Route>

			  <Route exact path="/notifications">
              <Notificationspage user={user}/>
             </Route> 	 
			 
             <Route exact path="/profileview">
              <Profileview user={user}/>
             </Route>
			 <Route exact path="/academics">
              <Academics user={user}/>
             </Route>

			 <Route exact path="/academics/year1">
              <Year1 user={user}/>
             </Route>

			 <Route exact path="/academics/year2">
              <Year2 user={user}/>
             </Route>

			 <Route exact path="/academics/year3">
              <Year3 user={user}/>
             </Route>

			 <Route exact path="/academics/year4">
              <Year4 user={user}/>
             </Route>

			 <Route exact path="/academics/year5">
              <Year5 user={user}/>
             </Route>

			 <Route exact path="/mesagetest">
              <Root user={user}/>
             </Route>

                   {/* <PrivateRoute path="/embedded-app" component={App1} /> */}
                   <PrivateRoute path="/conversations" component={CometChatConversationListWithMessages} />
                        <PrivateRoute path="/groups" component={CometChatGroupListWithMessages} />
                        <PrivateRoute path="/users" component={CometChatUserListWithMessages} />
                        <PrivateRoute path="/conversation-list" component={CometChatConversationList} />
                        <PrivateRoute path="/group-list" component={CometChatGroupList} />
                        <PrivateRoute path="/user-list" component={CometChatUserList} />
                        <PrivateRoute path="/messages" component={CometChatMessages} chatWithGroup="supergroup" />
                  <Route path="/mainmessagespage" component={App1} />
                  <Route path="/Re-authintication" component={KitchenSinkApp} />

			</Switch>
			{/* <Footer /> */}
		</Router>
    </div>
  );
}

export default App;
