import React from "react";
import { Link } from "react-router-dom";
import { Menu } from "semantic-ui-react";

const NavBar = () => {
  return (
    <div className='nav-bar'>
      <Menu fixed='top' widths={4}>
        <Menu.Item className='menu-item' as={Link} to='/'>
          Home
        </Menu.Item>
        <Menu.Item className='menu-item' as={Link} to='/location'>
          Location Now
        </Menu.Item>
        <Menu.Item className='menu-item' as={Link} to='/times'>
          Pass Times
        </Menu.Item>
        <Menu.Item className='menu-item' as={Link} to='/people'>
          People In Space
        </Menu.Item>
      </Menu>
    </div>
  );
};

export default NavBar;
