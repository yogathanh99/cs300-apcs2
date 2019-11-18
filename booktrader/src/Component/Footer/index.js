import React from "react";
import styled from "styled-components";
import { Container } from "reactstrap";

const Styles = styled.div`
  .container-fluid {
    background-color: #f0f0f0;
  }
`;
const Footer = () => {
  return (
    <Styles>
      <Container fluid>
        <h2>Footer</h2>
        <p>Trung is in loveeeee</p>
      </Container>
    </Styles>
  );
};

export default Footer;
