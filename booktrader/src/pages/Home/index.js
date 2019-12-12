import React from 'react';
import NavBar from '../../Component/Navbar';
import { Jumbotron, Container } from 'reactstrap';
import {
  faUserPlus,
  faSignInAlt,
  faBook,
} from '@fortawesome/free-solid-svg-icons';

import cover from '../../assets/cover.png';
import Carousel from '../../Component/Slideshow';
import Jumbo from '../../Component/Jumbo';
import Footer from '../../Component/Footer';

const list_item = [
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
const Home = () => {
  return (
    <React.Fragment>
      <Jumbotron
        style={{
          background: `url(${cover}) center center / cover no-repeat`,
          height: '650px',
        }}
        fluid
      >
        <NavBar list_item={list_item} />
      </Jumbotron>
      <Container className='my-5' fluid>
        <h1>Our Vision</h1>
        <br />
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </Container>
      <h1>Find your favorite book</h1>
      <Carousel />
      <Jumbo />
      <Footer />
    </React.Fragment>
  );
};

export default Home;
