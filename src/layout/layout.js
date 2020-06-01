import React, { Component } from 'react';
import AuthsideBar from './authSideBar';
import NoAuthNavbar from './noAuthNavbar';
export default class AppLayout extends Component {
	render() {
		return (
			<div>
                <AuthsideBar>
                </AuthsideBar>
                <div className="container-fluid mt-5">
                    <div className="row">
                        <div className="col-md-12 mt-3">
                        {this.props.children}
                        </div>
                    </div>
                </div>
			</div>
		);
	}
}

