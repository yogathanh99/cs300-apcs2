import React from 'react';
import { Container, Row, Col } from 'reactstrap';

import InputForm from '../../Component/InputForm';
import { ReactComponent as LoginFacebook } from '../../assets/login-facebook.svg';
import TemplateImg from '../../assets/template-image.png';
import {
  Img,
  Button,
  StyleText,
  StyleStrong,
  StyleLink,
  Wrapper,
  Right,
} from './index.style';

const Signup = () => {
  return (
    <Wrapper>
      <Container>
        <Row>
          <Col xs='6'>
            <Img src={TemplateImg} alt='avatar' />
          </Col>
          <Col xs='6'>
            <Right>
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
            </Right>
          </Col>
        </Row>
      </Container>
    </Wrapper>
  );
};

export default Signup;
