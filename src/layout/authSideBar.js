import React, { Component } from 'react';
import './layout.css';
import DropDown from './customDropDown';
export default class AuthSideBar extends Component {
    constructor(props) {
        super(props)
        this.state = {
            activeclassName:"wrapper",
        }
    }
    toggleSideBar = () => {
        if(this.state.activeclassName === "wrapper") {
            this.setState({
                activeclassName:"wrapper active"
            }) 
        } else {
            this.setState({
                activeclassName:"wrapper"
            }) 
        }
    }
	render() {
		return (
 <div className={this.state.activeclassName}>
    <div className="sidebar">
      <div className="bg_shadow"></div>
        <div className="sidebar__inner">
           <div className="close">
            <i onClick={this.toggleSideBar} className="fas fa-times"></i>
        </div>
        <div className="profile_info">
            <div className="profile_img">
              <img src="https://i.imgur.com/A1Fjq0d.png" alt="profile_img"/>
            </div>
            <div className="profile_data">
                <p className="name">Alex John</p>  
                <p className="role">UI Developer</p>
                <div className="btn">Update Profile</div>
            </div>
        </div>
        <ul className="siderbar_menu">
            <li><a href="#">
              <div className="icon"><i className="fas fa-laptop"></i></div>
              <div className="title">Dashboard</div>
              </a></li>  
          <li><a href="#" className="active">
              <div className="icon"><i className="fas fa-newspaper"></i></div>
              <div className="title">Jobs</div>
              </a></li>  
          <li><a href="#">
              <div className="icon"><i className="fas fa-file-alt"></i></div>
              <div className="title">Documents</div>
              </a></li>  
          <li><a href="#">
              <div className="icon"><i className="fas fa-cog"></i></div>
              <div className="title">Settings</div>
              </a></li>  
          <li><a href="#">
              <div className="icon"><i className="fas fa-question-circle"></i></div>
              <div className="title">Help</div>
              </a></li>  
        </ul>
      </div>
    </div>
    <div className="main_container">
      <div className="top_navbar">
          <div className="hamburger">
              <div className="hamburger__inner">
                  <i onClick={this.toggleSideBar} className="fas fa-bars"></i>  
              </div>  
          </div>
          <div className="brand_logo ml-3 mt-1">
              <div className="brand_logo_inner">
                  METADRIVE
              </div>  
          </div>
         <ul className="menu">
            <DropDown/>
            <DropDown/>
            <DropDown/>
         </ul>
         <ul className="right_bar">
            <li><i className="fas fa-sign-out-alt"></i></li> 
         </ul>
      </div> 
    </div>
</div>
		);
	}
}

