import React, { Component } from 'react';
import './layout.css';
import NavBar from 'user/Layout/NavBar';
import { Link } from 'react-router-dom';
import {NavItem, NavLink } from 'reactstrap';
import { Popover } from 'antd/lib';
import { Drawer } from 'antd/lib';
import {HEAD_LINKS} from '../config/constant';
export default class AuthSideBar extends Component {
    constructor(props) {
        super(props)
        this.state = {
            visible: false, 
            childrenDrawer: false, 
            width: 320,
            navkey:'',
            title:'',
        }
    }
    showDrawer = () => {
        this.setState({
        visible: true
        });
    };

    onClose = () => {
        this.setState({
        visible: false
        });
    };

    showChildrenDrawer = (key) => {
        this.setState({
        childrenDrawer: true,
        width: 0,
        navkey:key,
        title:key,
        });
    };

    onChildrenDrawerClose = () => {
        this.setState({
        childrenDrawer: false,
        width: 320,
        });
    };
	render() {
        const content = (
            <div>
              <NavItem>
                <NavLink href="#">Course</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#">Pending Course</NavLink>
              </NavItem>
            </div>
          );
		return (
            <div className="wrapper">
                <Drawer
                title={<h3>E-Learning</h3>}
                width={this.state.width}
                closable={true}
                placement={"left"}
                onClose={this.onClose}
                visible={this.state.visible}
                >
                <ul>
                    {
                        HEAD_LINKS.map((key, value) => 
                        <NavItem key={value}>
                            <NavLink href="#" key={value} onClick={()=>this.showChildrenDrawer(key.key)}>{key.key}</NavLink>
                        </NavItem>
                        )
                    }
                </ul>
                    <Drawer
                        title={this.state.title}
                        width={320}
                        placement={"left"}
                        closable={true}
                        onClose={this.onChildrenDrawerClose}
                        visible={this.state.childrenDrawer}
                    >
                    <ul>
                        {
                            HEAD_LINKS.map((key, value) => 
                                this.state.navkey === key.key?
                                key.value.map((key, value) => 
                                <NavItem key={value}>
                                    <NavLink href="#" key={value}>{key}</NavLink>
                                </NavItem>
                                ):null
                            )
                        }
                    </ul>
                    </Drawer>
                </Drawer>
                <div className="main_container">
                    <div className="colorbar">
                    </div>
                    <div className="top_navbar">
                    <div className="hamburger mt-2 ml-2">
                        <div className="hamburger__inner">
                            <i onClick={this.showDrawer} className="fas fa-bars"></i>  
                        </div>  
                    </div>
                    <div className="brand_logo ml-1">
                        <div className="brand_logo_inner mt-1">
                            <Link to={"/"}>
                                <img alt="logo" src="https://www.makelogoonlinefree.com/assets/base/img/content/stock/15.png" width="130" />
                            </Link>
                        </div>  
                    </div>
                    <ul className="menu">
                        <NavBar/>
                    </ul>
                    <div className="right_bar mt-1">
                        <Popover content={content} title="Wishlist">
                            <NavItem>
                                <NavLink href="#"><i className="fa fa-heart text-danger" aria-hidden="true"></i></NavLink>
                            </NavItem>
                        </Popover>
                        <NavItem>
                            <NavLink href="#"><i className="fa fa-shopping-cart" aria-hidden="true"></i></NavLink>
                        </NavItem>
                    </div>
                </div> 
                </div>
            </div>
		);
	}
}

