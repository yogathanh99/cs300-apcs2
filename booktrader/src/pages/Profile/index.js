import React, { useState } from 'react';
import styled from 'styled-components';
import Footer from '../../Component/Footer';
import { Button } from 'reactstrap';
import {
  Style,
  Wrapper,
  Box,
  StyleStrongText,
  Table,
  Data,
} from '../Profile/index.style';
import { InputFormGoi } from '../../Component/InputForm';
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
//test list book item
const book_item = [
  {
    book_id: 1,
    book_name: 'Hello',
    book_status: 'Available',
  },
];
const Profile = props => {
  const [username, setUsername] = useState(props.username);
  const [email, setEmail] = useState(props.email);
  const [password, setPassword] = useState('hello');
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
  const [currentPassword, setcurrentPassword] = useState('');
  const [newPassword, setnewPassword] = useState('');
  const [confirmPassword, setconfirmPassword] = useState('');
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
            Upload Book
          </Button>
        </Box>
        <Box style={{ height: '800px' }}>
          <StyleStrongText>Change password: </StyleStrongText>
          Change your password every once in a while to secure your privacy
          <div style={{ marginLeft: '35px' }}>
            Current Password:
            <StyleInputForm
              onChange={e => {
                setcurrentPassword(e.target.value);
                console.log(currentPassword);
              }}
              value={currentPassword}
              type='password'
            />
            New Password:{' '}
            <StyleInputForm
              onChange={e => {
                setnewPassword(e.target.value);
              }}
              value={newPassword}
              type='password'
            />
            Confirm Password:
            <StyleInputForm
              onChange={e => {
                setconfirmPassword(e.target.value);
              }}
              value={confirmPassword}
              type='password'
            />
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

export default Profile;
