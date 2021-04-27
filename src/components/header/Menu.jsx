import React, { useState } from 'react';
import { Nav, NavItem, Dropdown, DropdownItem, DropdownToggle, DropdownMenu, NavLink } from 'reactstrap';
import { Link } from 'react-router-dom';
import './css/menu.css';


const Menu = () => {

  const user = JSON.parse(localStorage.getItem('USER'));

  const [dropdownOpen, setDropdownOpen] = useState(false);
  const toggle = () => setDropdownOpen(!dropdownOpen);

  return (
    <div className="container-menu">
      <Nav pills>

        <NavItem>
          <NavLink href="/home" active>Home</NavLink>
        </NavItem>

        <Dropdown nav isOpen={dropdownOpen} toggle={toggle}> 
          <DropdownToggle nav caret>
            Category
          </DropdownToggle>

          <DropdownMenu>
            <Link to="/category/Action"   className="link-category" ><DropdownItem>Action</DropdownItem></Link>
            <Link to="/category/Comedy"   className="link-category" ><DropdownItem >Comedy</DropdownItem></Link>
            <Link to="/category/Romance"  className="link-category" ><DropdownItem>Romance</DropdownItem></Link>
            <Link to="/category/Drama"    className="link-category" ><DropdownItem>Drama</DropdownItem></Link>
          </DropdownMenu>
        </Dropdown>

        {user == null ?
          <NavItem>
            <NavLink href="/login">Login</NavLink>
          </NavItem> :
          <NavItem>
            <NavLink onClick={() => localStorage.removeItem('USER')} href='/'>Log Out-{user.account} </NavLink>
          </NavItem>
        }
        {user != null ? 
          <NavItem>
            <NavLink href="/follow">Followed</NavLink>
          </NavItem> : ''
        }

      </Nav>
    </div>
  );
}
export default Menu;