import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
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
  .navbar-brand {
    font-size: 35px;
  }
  .nav-item {
    font-size: 20px;
    margin-left: 25px;
  }
  .nav-link a {
    color: black;
  }
  .nav-link a:hover {
    color: green;
  }
`;
const NavBar = props => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <Styles>
      <Navbar className="mx-4 fixed-top" light expand="md">
        <NavbarBrand href="/">BookTrader.</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <NavLink>
                <Link to={props.item1.link}>{props.item1.name}</Link>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink>
                <Link to={props.item2.link}>{props.item2.name}</Link>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink>
                <Link to={props.item3.link}>{props.item3.name}</Link>
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </Styles>
  );
};

export default NavBar;
