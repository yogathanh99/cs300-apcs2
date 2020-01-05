import React, { useEffect } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { Formik, Field, Form } from 'formik';
import * as Yup from 'yup';
import * as actions from '../../store/actions';

import InputForm from '../../Component/InputForm';
import Button from '../../Component/Button';
import Message from '../../Component/Message';
import Footer from '../../Component/Footer';
import { ReactComponent as LoginFacebook } from '../../assets/login-facebook.svg';
import {
  Wrapper,
  StyleText,
  StyleStrong,
  StyleLink,
  Style,
  MessageWrapper,
} from './index.style';

const StyleFooter = styled(Footer)`
  position: absolute;
  bottom: 0;
  width: 100%;
`;

const schemaLogin = Yup.object().shape({
  email: Yup.string()
    .required('The email is required')
    .email('Invalid email'),
  password: Yup.string()
    .required('The password is required')
    .min(8, 'Password must have min 8 characters'),
});

const Login = ({ error, loading, login, cleanUp }) => {
  useEffect(() => {
    return () => {
      cleanUp();
    };
  }, [cleanUp]);
  return (
    <Style>
      <Wrapper>
        <Formik
          initialValues={{
            email: '',
            password: '',
          }}
          validationSchema={schemaLogin}
          onSubmit={async (value, { setSubmitting }) => {
            await login(value);
            setSubmitting(false);
          }}
        >
          {({ isSubmitting, isValid }) => (
            <Form>
              <Field
                type='email'
                name='email'
                placeholder='Your email...'
                component={InputForm}
              />
              <Field
                type='password'
                name='password'
                placeholder='Your password...'
                component={InputForm}
              />
              <div style={{ textAlign: 'center' }}>
                <Button
                  disabled={!isValid || isSubmitting}
                  type='submit'
                  loading={loading ? 'Logging in...' : null}
                >
                  Login
                </Button>
                <MessageWrapper>
                  <Message error show={error}>
                    {error}
                  </Message>
                </MessageWrapper>
              </div>
            </Form>
          )}
        </Formik>
        <StyleText>or log in using</StyleText>
        <LoginFacebook style={{ cursor: 'pointer' }} />
        <StyleText>
          Don't have an account ?{' '}
          <StyleStrong>
            <StyleLink to='/signup'>Register</StyleLink>
          </StyleStrong>
        </StyleText>
      </Wrapper>
      <StyleFooter />
    </Style>
  );
};

const mapStateToProps = state => ({
  loading: state.auth.loading,
  error: state.auth.error,
});

const mapDispatchToProps = {
  login: actions.logIn,
  cleanUp: actions.cleanUp,
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
