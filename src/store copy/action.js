import * as actionTypes from './actionTypes';

import { CometChat } from '@cometchat-pro/chat';
import { auth1 } from "../components/firebase"
import { useHistory } from "react-router";
import { Redirect } from 'react-router-dom';

export const authStart = () => {
    return {
        type: actionTypes.AUTH_START
    };
};

export const authSuccess = (user) => {
    return {
        type: actionTypes.AUTH_SUCCESS,
        user: user,
        isLoggedIn: true
    };
};

export const authFail = (error) => {
    return {
        type: actionTypes.AUTH_FAIL,
        error: error
    };
};

export const logoutSuccess = () => {



    return {
        type: actionTypes.AUTH_LOGOUT,
        authRedirectPath: <Redirect to="/home" />
    };
}

export const logout = () => {
    return dispatch => {
        auth1.signOut();
        CometChat.logout().then(dispatch(logoutSuccess()));   
        <Redirect to="/home" />   
    }
    
};

export const auth = (uid, authKey) => {

    return dispatch => {

        dispatch(authStart());

        CometChat.login(uid, authKey).then((user) => {

            if(user) {
                dispatch(authSuccess(user));
            } else {
                dispatch(authFail(user));
            }
            
        }).catch(error => {
            console.log('CometChatLogin Failed', error);
            dispatch(authFail(error));
        });
    };
};

export const authCheckState = () => {
    return dispatch => {
        CometChat.getLoggedinUser().then(user => {
            
            if(user) {
                dispatch(authSuccess(user));
            } else {
                dispatch(authFail(user));
            }
      
        }).catch(error => {
            dispatch(authFail(error));
        });
    };
};

export const setAuthRedirectPath = (path) => {
    return {
        type: actionTypes.SET_AUTH_REDIRECT_PATH,
        path: path
    };
};