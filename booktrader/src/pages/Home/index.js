import React from 'react';
import { Jumbotron, Container } from 'reactstrap';

import cover from '../../assets/cover.png';
import Carousel from '../../Component/Slideshow';
import Jumbo from '../../Component/Jumbo';
import Footer from '../../Component/Footer';

const Home = () => {
  return (
    <>
      <Jumbotron
        style={{
          background: `url(${cover}) center center / cover no-repeat`,
          height: '60rem',
          zIndex: '-100',
        }}
        fluid
      ></Jumbotron>
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
      <h1 style={{ paddingLeft: '1.2rem' }}>Find your favorite book</h1>
      <Carousel />
      <Jumbo />
      <Footer />
    </>
  );
};

export default Home;
