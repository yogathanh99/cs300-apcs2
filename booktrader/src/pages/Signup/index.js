import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import InputForm from '../../components/InputForm';
import { ReactComponent as LoginFacebook } from '../../images/login-facebook.svg';
import TemplateImg from '../../images/template-image.png';

const Img = styled.img`
  margin-top: 10rem;
`;

const Button = styled.button`
  font-family: 'Manjari', sans-serif;
  font-size: 3.5rem;
  background: var(--color-mainButton);
  width: 53.5rem;
  height: 8rem;
  border: none;
  &:forcus-visible,
  &:focus {
    outline: 0;
  }
`;

const StyleText = styled.p`
  font-family: 'Open Sans', sans-serif;
  margin-top: 5.6rem;
  font-size: 2.8rem;
  font-weight: normal;
`;

const StyleStrong = styled.strong`
  font-size: 3rem;
`;

const StyleLink = styled(Link)`
  color: black;
  text-decoration: none;

  &:hover {
    text-decoration: none;
    color: black;
  }
`;

const Signup = () => {
  return (
    <Container>
      <Row>
        <Col xs='6'>
          <Img src={TemplateImg} alt='avatar' />
        </Col>
        <Col xs='6'>
          <InputForm name='Name' />
          <InputForm name='Email' />
          <InputForm name='Password' />
          <Button>Sign up</Button>
          <StyleText>or sign up using</StyleText>
          <LoginFacebook style={{ cursor: 'pointer' }} />
          <StyleText>
            Already have an account?{' '}
            <StyleStrong>
              <StyleLink>Log in</StyleLink>
            </StyleStrong>
          </StyleText>
        </Col>
      </Row>
    </Container>
  );
};

export default Signup;
