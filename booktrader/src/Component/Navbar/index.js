import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
} from 'reactstrap';

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
    color: black;
  }
`;

const StyleLink = styled(Link)`
  color: black;

  &:hover {
    color: green;
  }

  & svg {
    margin-right: 10px;
  }
`;

const StyleNavbar = styled(Navbar)`
  padding: 0 9.9rem !important;
  padding-top: 2rem !important;
`;

const NavBar = props => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  const listItems = props.list_item.map(item => (
    <NavItem key={item.name}>
      <StyleLink to={item.link}>
        <FontAwesomeIcon icon={item.icon} />
        {item.name}
      </StyleLink>
    </NavItem>
  ));

  return (
    <Styles>
      <StyleNavbar className='mx-4 fixed-top' light expand='md'>
        <NavbarBrand href='/'>BookTrader.</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className='ml-auto' navbar>
            {listItems}
          </Nav>
        </Collapse>
      </StyleNavbar>
    </Styles>
  );
};

export default NavBar;
