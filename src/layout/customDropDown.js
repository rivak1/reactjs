/* eslint react/no-multi-comp: 0, react/prop-types: 0 */
import React, { useState } from 'react';
import { Button, Popover, PopoverHeader, PopoverBody } from 'reactstrap';
import { Nav, NavItem, NavLink } from 'reactstrap';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
const Example = (props) => {
  const [popoverOpen, setPopoverOpen] = useState(false);

  const toggle = () => setPopoverOpen(!popoverOpen);

  return (
    <div>
      <li id="Popover1"><a href="#">Home</a></li>
      <Popover placement="bottom" isOpen={popoverOpen} target="Popover1" toggle={toggle}>
        <PopoverHeader>Home Navs</PopoverHeader>
        <PopoverBody>
            <Nav vertical>
                <NavItem>
                  <NavLink><Link to="/">Home</Link></NavLink>
                </NavItem>
                <NavItem>
                  <NavLink><Link to="/about">About</Link></NavLink>
                </NavItem>
                <NavItem>
                  <NavLink><Link to="/dashboard">Dashboard</Link></NavLink>
                </NavItem>
            </Nav>    
        </PopoverBody>
      </Popover>
    </div>
  );
}

export default Example;