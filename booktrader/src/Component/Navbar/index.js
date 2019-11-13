import React, { useState } from "react";
import styled from "styled-components";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from "reactstrap";

const Styles = styled.div`
  .navbar {
    background-color: transparent;
  }
`;
const NavBar = props => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <Styles>
      <Navbar light expand="md">
        <NavbarBrand href="/">BookTrader.</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <NavLink href="/">{props.item1}</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/">{props.item2}</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/">{props.item3}</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </Styles>
  );
};

export default NavBar;
