import React, { useState } from 'react';
import styled from 'styled-components';
import { Collapse, Navbar, NavbarToggler, Nav, NavItem } from 'reactstrap';
import { Link } from 'react-router-dom';

const StyleNavbar = styled(Navbar)`
  padding: 0 9.9rem !important;
  padding-top: 2rem !important;
`;

const StyleLink = styled(Link)`
  padding-left: 2.8rem;
  font-size: 2rem;
  color: black;
  text-decoration: none;

  &:hover {
    text-decoration: none;
    color: black;
  }
`;

const StyleNavBrand = styled(Link)`
  color: black;
  text-decoration: none;
  font-size: 4rem;

  &:hover {
    text-decoration: none;
    color: black;
  }
`;

const NavBar = ({ items }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <StyleNavbar light expand='md'>
      <StyleNavBrand to='/'>BookTrader.</StyleNavBrand>
      <NavbarToggler onClick={toggle} />
      <Collapse isOpen={isOpen} navbar>
        <Nav className='ml-auto' navbar>
          {items.map((item, i) => (
            <NavItem key={i}>
              <StyleLink to={item.link}>{item.name}</StyleLink>
            </NavItem>
          ))}
        </Nav>
      </Collapse>
    </StyleNavbar>
  );
};

export default NavBar;
