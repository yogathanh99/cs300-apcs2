import React from 'react';
import { Container, Row, Col } from 'reactstrap';

import InputForm from '../../components/InputForm';
import { ReactComponent as LoginFacebook } from '../../images/login-facebook.svg';
import TemplateImg from '../../images/template-image.png';
import { Img, Button, StyleText, StyleStrong, StyleLink } from './index.style';

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
