import React, { useState } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from "reactstrap";

const NavBar = props => {
  const [collapsed, setCollapsed] = useState(true);

  const toggleNavbar = () => setCollapsed(!collapsed);

  return (
    <div>
      <Navbar color="faded" light>
        <NavbarBrand href="/" className="mr-auto">
          BookTrader.
        </NavbarBrand>
        <Nav navbar className="mr-3">
          <NavItem>
            <NavLink href="/">{props.item1}</NavLink>
          </NavItem>
        </Nav>
        <NavbarToggler onClick={toggleNavbar} className="mr-4" />
        <Collapse isOpen={!collapsed} navbar>
          <Nav navbar>
            <NavItem>
              <NavLink href="/">{props.item1}</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/">{props.item2}</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default NavBar;
