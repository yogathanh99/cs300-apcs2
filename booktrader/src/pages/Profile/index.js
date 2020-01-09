import React, { useState } from 'react';
import styled from 'styled-components';
import Footer from '../../Component/Footer';
import { Button } from 'reactstrap';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import * as Yup from 'yup';
import { Formik, Field, Form } from 'formik';

import {
  Style,
  Wrapper,
  Box,
  StyleStrongText,
  Table,
  Data,
} from '../Profile/index.style';
import InputForm, { InputFormGoi } from '../../Component/InputForm';

const schema = Yup.object().shape({
  currentPassword: Yup.string()
    .required('The current password is required')
    .min(8, 'Password must have min 8 characters'),
  newPassword: Yup.string()
    .required('The new password is required')
    .min(8, 'Password must have min 8 characters'),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref('newPassword'), null], `Password doesn't match`)
    .required('You need to confirm your password.'),
});

const StyleFooter = styled(Footer)`
  width: 100%;
  position: absolute;
  bottom: 0;
`;

const StyleInputForm = styled(InputFormGoi)`
  margin: 0;
  padding: 0;
  width: 500px;
  height: 20px;
  display: inline;
`;

const StyleLink = styled(Link)`
  color: black;

  &:hover {
    color: white;
    text-decoration: none;
    transition: all 0.5s;
  }
`;

//test list book item
const book_item = [
  {
    book_id: 1,
    book_name: 'Hello',
    book_status: 'Available',
  },
];

const Profile = ({ firebase }) => {
  const data = firebase.auth.providerData[0];
  const name = firebase.profile.name ? firebase.profile.name : data.displayName;
  const [username, setUsername] = useState(name);
  const [email, setEmail] = useState(data.email);
  const [password, setPassword] = useState('hello');
  const [currentPassword, setcurrentPassword] = useState('');
  const [newPassword, setnewPassword] = useState('');
  const [confirmPassword, setconfirmPassword] = useState('');

  const HandleChange = e => {
    return e.target.name === 'email'
      ? setEmail(e.target.value)
      : setUsername(e.target.value);
  };

  const listBook = book_item.map(item => (
    <tr key={item.book_id}>
      <td>{item.book_name}</td>
      <td>{item.book_status}</td>
    </tr>
  ));

  const handleSubmitData = e => {
    e.preventDefault();
    //more work with backend
  };

  const handleCancel = () => {
    setcurrentPassword('');
    setnewPassword('');
    setconfirmPassword('');
  };

  return (
    <Style>
      <Wrapper>
        <Box style={{ height: '300px' }}>
          <StyleStrongText>
            Email:
            <form onSubmit={handleSubmitData}>
              <Data
                name='email'
                onChange={HandleChange}
                value={email}
                type='text'
                style={{ top: '20px' }}
              />
            </form>
          </StyleStrongText>

          <StyleStrongText>
            Username:
            <form onSubmit={handleSubmitData}>
              <Data
                name='username'
                onChange={HandleChange}
                type='text'
                value={username}
                style={{ top: '79px' }}
              ></Data>
            </form>
          </StyleStrongText>

          <Button
            style={{
              position: 'absolute',
              top: '270px',
              left: '120px',
              width: '250px',
              fontSize: '25px',
              height: '50px',
            }}
            color='success'
          >
            <StyleLink to='/upload'>Upload Book</StyleLink>
          </Button>
        </Box>
        <Box style={{ height: '800px' }}>
          <StyleStrongText>Change password: </StyleStrongText>
          Change your password every once in a while to secure your privacy
          <div style={{ marginLeft: '35px' }}>
            <Formik
              initialValues={{
                currentPassword: '',
                newPassword: '',
                confirmPassword: '',
              }}
              validationSchema={schema}
              onSubmit={async (value, { setSubmitting }) => {
                // await signUp(value);
                setSubmitting(false);
              }}
            >
              {({ isSubmitting, isValid }) => (
                <div>
                  <Form>
                    <Field
                      type='password'
                      name='currentPassword'
                      placeholder='Current password...'
                      component={InputForm}
                    />
                    <Field
                      type='password'
                      name='newPassword'
                      placeholder='New password...'
                      component={InputForm}
                    />
                    <Field
                      type='password'
                      name='confirmPassword'
                      placeholder='Re-type your password...'
                      component={InputForm}
                    />
                  </Form>
                </div>
              )}
            </Formik>
          </div>
          <div style={{ marginLeft: '450px' }}>
            <Button
              style={{
                marginRight: '30px',
                width: '150px',
                fontSize: '25px',
                height: '50px',
              }}
              color='success'
            >
              Confirm
            </Button>
            <Button
              onClick={handleCancel}
              style={{ width: '150px', fontSize: '25px', height: '50px' }}
              color='secondary'
            >
              Cancel
            </Button>
          </div>
        </Box>
        <Box>
          <StyleStrongText>Uploaded Book: </StyleStrongText>
          <Table>
            <table>
              <thead>
                <tr>
                  <th>
                    <StyleStrongText>Book Name</StyleStrongText>
                  </th>
                  <th>
                    <StyleStrongText>Book Status</StyleStrongText>
                  </th>
                </tr>
              </thead>
              <tbody>{listBook}</tbody>
            </table>
          </Table>
        </Box>
      </Wrapper>
      <StyleFooter />
    </Style>
  );
};

const mapStateToProps = state => ({
  firebase: state.firebase,
});

export default connect(mapStateToProps)(Profile);
