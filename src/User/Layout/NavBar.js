import React from 'react';
import { Nav, NavItem, NavLink } from 'reactstrap';
import { Popover} from 'antd/lib';
const getPopoverContent = (navName) => {
  console.log(navName);
  const content = (

    navName.map((key,value) => 
      <NavItem key={value}>
        <NavLink key={value} href="#">{key}</NavLink>
      </NavItem>
    )
  );
  return content;
}

const NavBar = (props) => {
  return (
    <div id="navbar">
      <Nav pills>
        <Popover placement="topLeft" title={"Books"} content={getPopoverContent(["All","Science","Math","Social","Hindi"])}>
          <button className="custom_nav">Books</button>
        </Popover>

        <Popover placement="topLeft" content={getPopoverContent(["All","Science","Math","Social","Hindi"])} title="Hands Note">
          <button className="custom_nav">Hand Notes</button>
        </Popover>
        <Popover placement="topLeft" content={getPopoverContent(["All","Science","Math","Social","Hindi"])} title="Mock Test">
          <button className="custom_nav">Mock Test</button>
        </Popover>
        <Popover placement="topLeft" content={getPopoverContent(["All","Science","Math","Social","Hindi"])} title="Videos">
          <button className="custom_nav">Videos</button>
        </Popover>
        <Popover placement="topLeft" content={getPopoverContent(["Login","Register","Profile","Cart","Order"])} title="E-Learninig">
          <button className="custom_nav">Login/Register</button>
        </Popover>
        <Popover  placement="topLeft" content={getPopoverContent(["Course","Pending Course"])} title="WishList">
          <button className="custom_nav_icon"><i className="fa fa-heart" aria-hidden="true"></i></button>
        </Popover>
        <button className="custom_nav_icon"><i className="fa fa-shopping-cart" aria-hidden="true"></i></button>
      </Nav>
    </div>
  );
}

export default NavBar;