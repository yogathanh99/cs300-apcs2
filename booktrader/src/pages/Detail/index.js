import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';

import data from '../../data/data.json';

const Wrapper = styled.div`
  text-align: center;
`;

const Button = styled.button`
  font-family: 'Manjari', sans-serif;
  font-size: 3.5rem;
  background: var(--color-mainButton);
  width: 33.5rem;
  height: 8rem;
  border: none;
  &:forcus-visible,
  &:focus {
    outline: 0;
  }
`;

const Detail = () => {
  const { title, des, tags, image, author, date, avaiable } = data;
  return (
    <>
      <hr />
      <Wrapper>
        <h1>{title}</h1>
        {tags.map((tag, i) => (
          <button key={i}>{tag}</button>
        ))}
      </Wrapper>
      <Container>
        <Row>
          <Col xs='4'>
            <img
              style={{ width: 'calc(67rem / 2)', height: 'calc(98rem / 2)' }}
              src={image}
              alt='book-cover'
            />
            <Button>Borrow</Button>
          </Col>
          <Col xs='8'>
            <p>
              <FontAwesomeIcon icon={faUser} />
              {author}, {date}
            </p>
            <p>{des}</p>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Detail;
