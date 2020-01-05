import React, { useEffect } from 'react';
import { Container, Row, Col } from 'reactstrap';
import * as Yup from 'yup';
import { Formik, Field, Form } from 'formik';
import { connect } from 'react-redux';

import InputForm from '../../Component/InputForm';
import Message from '../../Component/Message';
import Button from '../../Component/Button';
import { ReactComponent as LoginFacebook } from '../../assets/login-facebook.svg';
import TemplateImg from '../../assets/template-image.png';
import {
  Img,
  StyleText,
  StyleStrong,
  StyleLink,
  Wrapper,
  Right,
  MessageWrapper,
} from './index.style';

import * as actions from '../../store/actions';

const schemaSignUp = Yup.object().shape({
  name: Yup.string().required('Your name is required.'),
  email: Yup.string()
    .required('The email is required')
    .email('Invalid email'),
  password: Yup.string()
    .required('The password is required')
    .min(8, 'Password must have min 8 characters'),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref('password'), null], `Password doesn't match`)
    .required('You need to confirm your password.'),
});

const Signup = ({ loading, error, signUp, cleanUp }) => {
  useEffect(() => {
    return () => {
      cleanUp();
    };
  }, [cleanUp]);

  return (
    <Wrapper>
      <Container>
        <Row>
          <Col xs='6'>
            <Img src={TemplateImg} alt='avatar' />
          </Col>
          <Col xs='6'>
            <Right>
              <Formik
                initialValues={{
                  name: '',
                  email: '',
                  password: '',
                  confirmPassword: '',
                }}
                validationSchema={schemaSignUp}
                onSubmit={async (value, { setSubmitting }) => {
                  await signUp(value);
                  setSubmitting(false);
                }}
              >
                {({ isSubmitting, isValid }) => (
                  <div>
                    <Form>
                      <Field
                        type='text'
                        name='name'
                        placeholder='Your name...'
                        component={InputForm}
                      />
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
                      <Field
                        type='password'
                        name='confirmPassword'
                        placeholder='Re-type your password...'
                        component={InputForm}
                      />
                      <div style={{ paddingTop: '2rem' }}>
                        <Button
                          disabled={!isValid || isSubmitting}
                          loading={loading ? 'Signing up...' : null}
                          type='submit'
                        >
                          Sign Up
                        </Button>
                        <MessageWrapper>
                          <Message error show={error}>
                            {error}
                          </Message>
                        </MessageWrapper>
                      </div>
                    </Form>
                  </div>
                )}
              </Formik>
              <StyleText>or sign up using</StyleText>
              <LoginFacebook style={{ cursor: 'pointer' }} />
              <StyleText>
                Already have an account?{' '}
                <StyleStrong>
                  <StyleLink to='/login'>Log in</StyleLink>
                </StyleStrong>
              </StyleText>
            </Right>
          </Col>
        </Row>
      </Container>
    </Wrapper>
  );
};
const mapStateToProps = state => ({
  loading: state.auth.loading,
  error: state.auth.error,
});

const mapDispatchToProps = {
  signUp: actions.signUp,
  cleanUp: actions.cleanUp,
};

export default connect(mapStateToProps, mapDispatchToProps)(Signup);
