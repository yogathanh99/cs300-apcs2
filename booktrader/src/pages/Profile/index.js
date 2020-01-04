import React, { useState } from "react";
import styled from "styled-components";
import Footer from "../../Component/Footer";
import {
  Style,
  Wrapper,
  Box,
  StyleStrongText,
  Table,
  Button
} from "../Profile/index.style";
import InputForm from "../../Component/InputForm";
const StyleFooter = styled(Footer)`
  width: 100%;
  position: absolute;
  bottom: 0;
`;
const StyleInputForm = styled(InputForm)`
  margin: 0;
  padding: 0;
  width: 500px;
  height: 20px;
  display: inline;
`;
const book_item = [
  {
    book_id: 1,
    book_name: "Hello",
    book_status: "Available"
  }
];
const Profile = props => {
  const listBook = book_item.map(item => (
    <tr key={item.book_id}>
      <td>{item.book_name}</td>
      <td>{item.book_status}</td>
    </tr>
  ));
  return (
    <Style>
      <Wrapper>
        <Box style={{ height: "300px" }}>
          <StyleStrongText>Email: </StyleStrongText>
          <div>{props.email}</div>
          <StyleStrongText>Username: </StyleStrongText>
          <div>{props.username}</div>
        </Box>
        <Box style={{ height: "800px" }}>
          <StyleStrongText>Change password: </StyleStrongText>
          Change your password every once in a while to secure your privacy
          <div style={{ marginLeft: "35px" }}>
            Current Password: <StyleInputForm />
            New Password: <StyleInputForm />
            Confirm Password: <StyleInputForm />
          </div>
          <div style={{ marginLeft: "650px" }}>
            <Button style={{ backgroundColor: "green" }}>Confirm</Button>
            <Button style={{ backgroundColor: "white" }}>Cancel</Button>
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
