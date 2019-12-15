import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  width: 15rem;
  height: 25rem;
  background: #ffffff;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;

const Img = styled.img`
  width: 15rem;
  height: 15rem;
`;

const Title = styled.p`
  padding-left: 0.5rem;
  margin-top: 1rem;
  margin-bottom: 0rem;
  font-family: 'Manjari', sans-serif;
  font-size: 1.5rem;
`;

const SubTitle = styled.p`
  padding-left: 0.5rem;
  font-family: 'Open Sans', sans-serif;
  font-size: 1rem;
`;

const BookTab = ({ title, children, img }) => {
  return (
    <Wrapper>
      <Img src={img} alt={title} />
      <Title>{title}</Title>
      <SubTitle>{children}</SubTitle>
    </Wrapper>
  );
};

export default BookTab;
