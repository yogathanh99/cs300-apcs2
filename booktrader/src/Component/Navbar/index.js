import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Collapse, Navbar, NavbarToggler, Nav, NavItem } from 'reactstrap';
import { connect } from 'react-redux';

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

const StyleNavBrand = styled(Link)`
  color: black;
  font-size: 3.5rem;

  &:hover {
    color: black;
    text-decoration: none;
  }
`;

const StyleNavbar = styled(Navbar)`
  padding: 0 9.9rem !important;
  padding-top: 2rem !important;
`;

const StyleName = styled(Link)`
  color: black;
  font-size: 2rem;

  &:hover {
    color: black;
    text-decoration: none;
  }
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
        <StyleNavBrand to='/'>BookTrader.</StyleNavBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className='ml-auto' navbar>
            <StyleName to='/profile'>
              {props.firebase.profile.name
                ? props.firebase.profile.name
                : props.firebase.auth.displayName}
            </StyleName>
            {listItems}
          </Nav>
        </Collapse>
      </StyleNavbar>
    </Styles>
  );
};

const mapStateToProps = state => ({
  firebase: state.firebase,
});

export default connect(mapStateToProps)(NavBar);
