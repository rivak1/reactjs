import React, { Component } from 'react';
import AuthsideBar from 'user/Layout/authSideBar';
import Footer from 'user/Components/Footer/footer';
import Header from 'user/Components/Header/header';
class AppLayout extends Component {
	render() {
		return (
			<div>
                <AuthsideBar>
                </AuthsideBar>
                <Header title={"HEADER"}/>
                <div className="container-fluid mt-5">
                    <div className="row">
                        <div className="col-md-12 mt-3">
                        {this.props.children}
                        </div>
                    </div>
                </div>
                <Footer title={"FOOTER"}/>
			</div>
		);
	}
}
export default AppLayout;

