import React from 'react';
/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from '@emotion/core';
import { Global } from "@emotion/core";

import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import { CometChatAvatar } from '../../cometchat-pro-react-ui-kit/CometChatWorkspace/src';
import { COMETCHAT_CONSTANTS } from '../../consts';
import { auth } from "../../components/firebase"
import {
  wrapperStyle,
  errorStyle,
  titleStyle,
  subtitleStyle,
  userContainerStyle,
  userWrapperStyle,
  thumbnailWrapperStyle,
  uidWrapperStyle,
  inputWrapperStyle,
  loginBtn,
} from "./style";
import Testhome from "../../components/Testhome"
import { loaderStyle } from "./loader";

import * as actions from '../../store/action';
import Homepage2 from "../HomePage"
class KitchenSinkApp extends React.PureComponent {

  constructor(props) {
    super(props);

    this.myRef = React.createRef();
  }

  login = (uid) => {
    


    this.uid = auth?.currentUser?.uid;
    this.props.onLogin(this.uid, COMETCHAT_CONSTANTS.AUTH_KEY);

    console.log("CurrentUserId: ",auth?.currentUser?.uid)
  }
  
  render() {

    let loader = null;
    if (this.props.loading) {
      loader = (<div className="loading">Loading...</div>);
    }

    let errorMessage = null;
    if (this.props.error) {
      errorMessage = (<p css={errorStyle()}>{this.props.error.message}</p>);
    }

    let authRedirect = null;
    if (this.props.isLoggedIn) {
      authRedirect = <Redirect to="/embedded-app" />
    }

    return (
      <React.Fragment>
      <Global styles={loaderStyle} />
      <Testhome />
      <div css={wrapperStyle()}>
          {authRedirect}
          {loader}
          {errorMessage}

<br/>
          <div css={uidWrapperStyle()}>
            <div>
            </div>
            <div css={inputWrapperStyle()}>
              {/* <input ref={this.myRef} type="text" placeholder="Enter your UID here" /> */}
            </div>
            <div css={loginBtn()}><button type="button" onClick={() => this.login()}>Proceed</button></div>

          </div>
        </div>
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    loading: state.loading,
    error: state.error,
    isLoggedIn: state.isLoggedIn
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onLogin: ( uid, authKey ) => dispatch( actions.auth( uid, authKey ) )
  };
};

export default connect( mapStateToProps, mapDispatchToProps )( KitchenSinkApp );
