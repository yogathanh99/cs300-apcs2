import React from 'react';
import styled from 'styled-components';

import InputForm from '../../Component/InputForm';
import Footer from '../../Component/Footer';
import { ReactComponent as LoginFacebook } from '../../assets/login-facebook.svg';
import { Wrapper, Button, StyleText, StyleStrong, Style } from './index.style';

const StyleFooter = styled(Footer)`
  position: absolute;
  bottom: 0;
  width: 100%;
`;

const Login = () => {
  return (
    <Style>
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
      <StyleFooter />
    </Style>
  );
};

export default Login;
