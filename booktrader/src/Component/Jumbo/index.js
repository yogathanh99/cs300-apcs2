import React from "react";
import styled from "styled-components";
import { Jumbotron, Container } from "reactstrap";

import quote from "../../assets/quote.png";
const Styles = styled.div`
  .jumbo {
    margin-top: 70px;
    margin-bottom: 50px;
    background: url(${quote});
    position: relative;
    height: 400px;
    z-index: -2;
    color: #efefef;
  }
  .overlay {
    opacity: 0.6;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: -1;
  }
`;
const Jumbo = () => {
  return (
    <Styles>
      <Jumbotron fluid className="jumbo">
        <div className="overlay"></div>
        <Container>
          <h1>Goi Chi Trung</h1>
          <p>A slow walker but never walk back</p>
        </Container>
      </Jumbotron>
    </Styles>
  );
};

export default Jumbo;
