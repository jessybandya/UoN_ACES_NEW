import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Provider } from "react-redux";
import App from './App';
import reportWebVitals from './reportWebVitals';
import store from "./store1";
import * as CONSTANTS from "../src/constants/constants"
import { CometChat } from "@cometchat-pro/chat";
import App1 from './defaultPages/App';


const appID = CONSTANTS.APP_ID;
const region = CONSTANTS.APP_REGION;
const appSetting = new CometChat.AppSettingsBuilder().subscribePresenceForAllUsers().setRegion(region).build();
CometChat.init(appID, appSetting).then(
  () => {
    console.log("Initialization completed successfully");
    

    ReactDOM.render(
      <Provider store={store}>
        <App />
      </Provider>,
      document.getElementById('root')
    );
  },
  error => {
    console.log("Initialization failed with error:", error);
    // Check the reason for error and take appropriate action.
  }
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
