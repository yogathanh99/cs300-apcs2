import React from "react";
import { Container } from "reactstrap";
import styled from "styled-components";

const Wrapper = styled.div`
  width: 100%;
  height: 9.4rem;
  background: #f0f0f0;
`;

const StyleContainer = styled(Container)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 9.4rem;
`;

const Title = styled.h5`
  font-family: "Manjari", sans-serif;
  font-size: 2rem;
  line-height: 2rem;
`;

const Content = styled.p`
  font-family: "Open Sans", sans-serif;
`;
const Footer = () => {
  const title = "APCS-17CTT2-Group01";
  const children = "Lecturer: Mrs Minh Tuyen";
  return (
    <>
      {title ? (
        <Wrapper>
          <StyleContainer>
            <Title>{title}</Title>
            <Content>{children}</Content>
          </StyleContainer>
        </Wrapper>
      ) : (
        <Wrapper />
      )}
    </>
  );
};

export default Footer;
