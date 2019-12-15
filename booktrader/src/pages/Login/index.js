import React from 'react';

import InputForm from '../../components/InputForm';
import Footer from '../../components/Footer';
import { ReactComponent as LoginFacebook } from '../../images/login-facebook.svg';
import { Wrapper, Button, StyleText, StyleStrong } from './index.style';

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
      <Footer />
    </>
  );
};

export default Login;
