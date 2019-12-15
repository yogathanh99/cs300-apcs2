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
  WrapperContent,
} from './index.style';
import BookTab from '../../Component/BookTab';
import Footer from '../../Component/Footer';
import cover from '../../assets/book-cover.png';

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
          </Col>
        </Row>
        <WrapperContent>
          {subTitle ? <SubTitle>{subTitle}</SubTitle> : ''}
          <Des>{des}</Des>
        </WrapperContent>
        <WrapperRelated>Related books</WrapperRelated>
        <BookTab img={cover} title='Lorem'>
          qualisque pro. Duo laoreet dissentiunt ei, autem prodesset deseruisse
          in quo.
        </BookTab>
      </Container>
      <div style={{ marginTop: '10rem' }}>
        <Footer title='BookTrader'>
          Lorem ipsum dolor sit amet. Duo laoreet dissentiunt ei, autem
          prodesset deseruisse in quo.
        </Footer>
      </div>
    </>
  );
};

export default Detail;
