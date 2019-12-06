import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUserPlus,
  faSignInAlt,
  faBook
} from "@fortawesome/free-solid-svg-icons";
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
  .nav-link svg {
    margin-right: 10px;
  }
  .nav-link a:hover {
    color: green;
  }
`;
const NavBar = props => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  const HandleIcon = icon => {
    if (icon === "Book") return faBook;
    else if (icon === "SignIn") return faSignInAlt;
    else if (icon === "SignUp") return faUserPlus;
  };
  const listItems = props.list_item.map(item => (
    <NavItem>
      <NavLink>
        <Link to={item.link}>
          <FontAwesomeIcon icon={HandleIcon(item.icon)} />
          {item.name}
        </Link>
      </NavLink>
    </NavItem>
  ));
  return (
    <Styles>
      <Navbar className="mx-4 fixed-top" light expand="md">
        <NavbarBrand href="/">BookTrader.</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto" navbar>
            {listItems}
          </Nav>
        </Collapse>
      </Navbar>
    </Styles>
  );
};

export default NavBar;
