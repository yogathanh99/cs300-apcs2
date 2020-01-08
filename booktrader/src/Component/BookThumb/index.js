import React from 'react';
import styled from 'styled-components';

const Img = styled.img`
  width: 100%;
  height: auto;
  transition: all 0.3s;
  object-fit: cover;
`;

const Content = styled.div`
  width: 100%;
  height: auto;
  background: #ffffff;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  padding-left: 2rem;
`;

const Title = styled.h5`
  margin-top: 1.5rem;
  font-family: 'Manjari', sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 2.5rem;
  line-height: 2rem;
`;

const Author = styled.p`
  font-family: 'Open Sans', sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 1.5rem;
  line-height: 2rem;
  color: #7d7d7d;
`;

const Upload = styled.p`
  font-family: Open Sans;
  font-style: normal;
  font-weight: 300;
  font-size: 1.2rem;
  line-height: 1.5rem;
`;

const Button = styled.button`
  font-family: 'Manjari', sans-serif;
  font-weight: 500;
  font-size: 2rem;
  background: ${props =>
    props.avaiable ? 'var(--color-mainButton)' : 'rgba(196, 196, 196, 0.35)'};
  width: 90%;
  height: auto;
  border: none;
  &:forcus-visible,
  &:focus {
    outline: 0;
  }
`;

const Wrapper = styled.div`
  text-align: center;
  padding-bottom: 1rem;
  padding-right: 2rem;
`;

const BookThumb = ({ image, title, author, username, avaiable }) => {
  return (
    <div style={{ border: '1px solid rgba(0,0,0,.25)' }}>
      <Img src={image} alt='movie' />
      <Content>
        <Title>{title}</Title>
        <Author>{author}</Author>
        <Upload>
          Upload by <strong>{username}</strong>
        </Upload>
        <Wrapper>
          <Button avaiable={avaiable}>Borrow</Button>
        </Wrapper>
      </Content>
    </div>
  );
};

export default BookThumb;
