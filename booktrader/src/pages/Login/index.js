import React from 'react';
import styled from 'styled-components';

import InputForm from '../../components/InputForm';
import { FooterLogin } from '../../components/Footer';
import { ReactComponent as LoginFacebook } from '../../images/login-facebook.svg';

const Button = styled.button`
  font-family: 'Manjari', sans-serif;
  font-size: 3.5rem;
  background: var(--color-mainButton);
  width: 40rem;
  height: 8rem;
  border: none;
  &:forcus-visible,
  &:focus {
    outline: 0;
  }
`;

const StyleText = styled.p`
  font-family: 'Open Sans', sans-serif;
  margin-top: 1rem;
  font-size: 2.8rem;
  font-weight: normal;
`;

const StyleStrong = styled.strong`
  font-size: 3rem;
`;

const Wrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Login = () => {
  return (
    <>
      <Wrapper>
        <InputForm name='Email' />
        <InputForm name='Password' />
        <Button>Log in</Button>
        <StyleText>or log in using</StyleText>
        <LoginFacebook style={{ cursor: 'pointer' }} />
        <StyleText>
          Don't have an account ? <StyleStrong>Register</StyleStrong>
        </StyleText>
      </Wrapper>
      <FooterLogin />
    </>
  );
};

export default Login;
