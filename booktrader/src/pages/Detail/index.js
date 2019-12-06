import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';

import {
  Wrapper,
  Title,
  Tag,
  Button,
  User,
  SubTitle,
  Des,
  WrapperRelated,
} from './index.style';
import BookTab from '../../components/BookTab';
import cover from '../../images/cover.png';

import data from '../../data/data.json';

const Detail = () => {
  const { title, subTitle, des, tags, image, author, date, avaiable } = data;
  console.log(avaiable);
  return (
    <>
      <hr />
      <Wrapper>
        <Title>{title}</Title>
        {tags.map((tag, i) => (
          <Tag key={i}>{tag}</Tag>
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
            <Button avaiable={avaiable}>Borrow</Button>
          </Col>
          <Col xs='8'>
            <User>
              <FontAwesomeIcon icon={faUser} style={{ marginRight: '.5rem' }} />
              {author}, {date}
            </User>
            {subTitle ? <SubTitle>{subTitle}</SubTitle> : ''}
            <Des>{des}</Des>
          </Col>
        </Row>
        <WrapperRelated>Related books</WrapperRelated>
        <BookTab img={cover} title='Lorem'>
          qualisque pro. Duo laoreet dissentiunt ei, autem prodesset deseruisse
          in quo.
        </BookTab>
        <div style={{ marginTop: '10rem' }}>Hello</div>
      </Container>
    </>
  );
};

export default Detail;
