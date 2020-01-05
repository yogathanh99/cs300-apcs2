import React from 'react';
import { connect } from 'react-redux';
import {
  faUserPlus,
  faSignInAlt,
  faBook,
  faSignOutAlt,
} from '@fortawesome/free-solid-svg-icons';

import Navbar from '../../Component/Navbar';

// const MainWrapper = styled.main`
//   width: 100%;
//   min-height: calc(100vh - 6rem);
//   margin-top: 6rem;
//   display: flex;
//   align-items: center;
//   justify-content: center;
// `;

const Layout = ({ children, loggedIn }) => {
  let list_item;

  if (!loggedIn) {
    list_item = [
      {
        link: '/store',
        name: 'Store',
        icon: faBook,
      },
      {
        link: '/login',
        name: 'Log in',
        icon: faSignInAlt,
      },
      {
        link: '/signup',
        name: 'Sign up',
        icon: faUserPlus,
      },
    ];
  } else {
    list_item = [
      {
        link: '/store',
        name: 'Store',
        icon: faBook,
      },
      {
        link: '/logout',
        name: 'Log out',
        icon: faSignOutAlt,
      },
    ];
  }

  return (
    <>
      <Navbar list_item={list_item} />
      <>{children}</>
    </>
  );
};

const mapStateToProps = ({ firebase }) => ({
  loggedIn: firebase.auth.uid,
});

export default connect(mapStateToProps)(Layout);
