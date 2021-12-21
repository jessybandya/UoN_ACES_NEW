import React from "react";
/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "@emotion/core";

import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";

import { wrapperStyle, titleStyle, subTitleStyle, componentStyle, boxStyle, titleWrapperStyle, thumbnailWrapperStyle, componentTitleStyle, UIComponentStyle, descWrapperStyle, linkWrapperStyle, linkStyle, logoutBtn } from "./style";

import * as actions from "../../store/action";

import CometChatUI from "./resources/CometChatUI.png";
import Component from "./resources/components.png";
import listComponent from "./resources/wall.png";

class HomePage extends React.Component {
	render() {
		let authRedirect = null;
		if (!this.props.isLoggedIn) {
			authRedirect = <Redirect to="/login" />;
		}

		return (
			<div css={wrapperStyle()}>
				{authRedirect}

				<div css={UIComponentStyle()}>
					<div css={boxStyle()}>


						<ul css={logoutBtn()}>
							<li>
								<button type="button" onClick={this.props.onLogout}>
								Logout
								</button>
							</li>
						</ul>
					</div>
				</div>


				

			</div>
		);
	}
}

const mapStateToProps = state => {
	return {
		loading: state.loading,
		error: state.error,
		isLoggedIn: state.isLoggedIn,
	};
};

const mapDispatchToProps = dispatch => {
	return {
		onLogout: () => dispatch(actions.logout()),
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
