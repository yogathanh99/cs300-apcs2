import React from "react";
import { Jumbotron, Container } from "reactstrap";

import cover from "../../assets/cover.png";
import Carousel from "../../Component/Slideshow";
import Jumbo from "../../Component/Jumbo";
import Footer from "../../Component/Footer";

const Home = () => {
  return (
    <>
      <Jumbotron
        style={{
          background: `url(${cover}) center center / cover no-repeat`,
          height: "60rem",
          zIndex: "-100"
        }}
        fluid
      ></Jumbotron>
      <Container className="my-5" fluid>
        <h1 style={{ fontSize: "50px", fontWeight: "900" }}>Our Vision</h1>
        <br />
        <p style={{ marginLeft: "20px", fontSize: "30px" }}>
          Book has proved that it will never be outdated. Nowadays, the demand
          for reading, buying and especially exchanging books is drastically
          increased. The solution is not only save money on buyers but also to
          help people find old books which are no longer published.
        </p>
        <p style={{ marginLeft: "20px", fontSize: "30px" }}>
          Therefore BookTrader was born not only to fulfil the passion of book
          lovers, but also to encourage and support the reading culture among
          youngsters.
        </p>
      </Container>
      <h1
        style={{ fontSize: "50px", fontWeight: "900", paddingLeft: "1.2rem" }}
      >
        Find your favorite book
      </h1>
      <Carousel />
      <Jumbo />
      <Footer />
    </>
  );
};

export default Home;
