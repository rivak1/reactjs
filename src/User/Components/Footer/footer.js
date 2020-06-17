import React, { Component } from 'react';
import './footer.css';
import { BackTop } from 'antd/lib';
import { Nav, NavItem, NavLink } from 'reactstrap';
class Footer extends Component {
    render() {
        return (
            <section id="footer" className="mt-5">
                <div className="container">
                    <div className="row">
                        <div className="col-md-4">
                            <Nav vertical>
                                <NavItem>
                                <NavLink href="#"><small>Elearning for Business</small></NavLink>
                                </NavItem>
                                <NavItem>
                                <NavLink href="#"><small>Teach on Elearning</small></NavLink>
                                </NavItem>
                                <NavItem>
                                <NavLink href="#"><small>Elearning app</small></NavLink>
                                </NavItem>
                                <NavItem>
                                <NavLink href="#"><small>About us</small></NavLink>
                                </NavItem>
                            </Nav>
                        </div>
                        <hr></hr>
                        <div className="col-md-4">
                            <Nav vertical>
                                <NavItem>
                                <NavLink href="#"><small>Careers</small></NavLink>
                                </NavItem>
                                <NavItem>
                                <NavLink href="#"><small>Blog</small></NavLink>
                                </NavItem>
                                <NavItem>
                                <NavLink href="#"><small>Help And Support</small></NavLink>
                                </NavItem>
                                <NavItem>
                                <NavLink href="#"><small>Affiliate</small></NavLink>
                                </NavItem>
                            </Nav>
                        </div>
                        <hr></hr>
                        <div className="col-md-4">
                            <Nav vertical>
                                <NavItem>
                                <NavLink href="#"><small>sitemap</small></NavLink>
                                </NavItem>
                                <NavItem>
                                <NavLink href="#"><small>Teach on Elearning</small></NavLink>
                                </NavItem>
                                <NavItem>
                                <NavLink href="#"><small>Elearning app</small></NavLink>
                                </NavItem>
                                <NavItem>
                                <NavLink href="#"><small>About us</small></NavLink>
                                </NavItem>
                            </Nav>
                        </div>
                    </div>
                </div>
                <hr></hr>
                <div className="container-fluid footer-end">
                    <div className="footer-end-sec">
                        <div className="footer-privacy">
                            <Nav>
                                <NavItem>
                                <NavLink href="#"><small>Terms</small></NavLink>
                                </NavItem>
                                <NavItem>
                                <NavLink href="#"><small> Privacy Policy</small></NavLink>
                                </NavItem>
                                <NavItem>
                                <NavLink href="#"><small>Cookie Policy</small></NavLink>
                                </NavItem>
                            </Nav>
                        </div>
                        <div className="footer-block">
                            <div className="footer-img">
                                <img className="img-fluid" alt="footer" src="https://www.makelogoonlinefree.com/assets/base/img/content/stock/15.png" />
                            </div>
                            <div className="footer-copyright">
                                <small>Copyright © 2020 Elearning, Inc </small>
                            </div>
                        </div>
                    </div>
                </div>
                <BackTop>
                </BackTop>
            </section>
        );
    }
}



export default Footer;

