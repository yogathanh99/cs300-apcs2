import React, { useEffect, useState } from 'react';
import { Container, Row, Col } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { connect } from 'react-redux';
import axios from 'axios';

import {
  Wrapper,
  Title,
  Tag,
  Button,
  User,
  Des,
  WrapperRelated,
  WrapperContent,
} from './index.style';
import BookTab from '../../Component/BookTab';
import Footer from '../../Component/Footer';
import Loading from '../../Component/Loading';
import cover from '../../assets/book-cover.png';

import data from '../../data/data.json';
import { searchBook } from '../../store/actions';

const URL_SERVER = process.env.REACT_APP_SERVER;
const PORT_SERVER = process.env.REACT_APP_PORT;
const SERVER_URL_API = `http://${URL_SERVER}:${PORT_SERVER}/books`;

const Detail = ({ searchBook, match, loading }) => {
  const [book, setBook] = useState([]);
  useEffect(() => {
    axios.get(`${SERVER_URL_API}/${match.params.bookID}`).then(res => {
      setBook(res.data.book);
      console.log(book);
    });
  }, [book, match.params.bookID]);

  const { title, subTitle, des, tags, image, date, avaiable } = data;
  const { name, coverImage, author, description } = book;
  return (
    <>
      {book && author ? (
        <>
          <hr />
          <Wrapper>
            <Title>{name}</Title>
            {tags.map((tag, i) => (
              <Tag key={i}>{tag}</Tag>
            ))}
          </Wrapper>
          <Container>
            <Row>
              <Col xs='4'>
                <img
                  style={{
                    width: '100%',
                    height: 'auto',
                  }}
                  src={coverImage}
                  alt='book-cover'
                />
                <Button avaiable={avaiable}>Borrow</Button>
              </Col>
              <Col xs='8'>
                <User>
                  <FontAwesomeIcon
                    icon={faUser}
                    style={{ marginRight: '.5rem' }}
                  />
                  {author[0]},{date}
                </User>
                <Des>{description}</Des>
              </Col>
            </Row>
            {/* <WrapperContent>
          {subTitle ? <SubTitle>{subTitle}</SubTitle> : ''}
        </WrapperContent> */}
            <WrapperRelated>Related books</WrapperRelated>
            <BookTab img={cover} title='Lorem'>
              qualisque pro. Duo laoreet dissentiunt ei, autem prodesset
              deseruisse in quo.
            </BookTab>
          </Container>
          <div style={{ marginTop: '10rem' }}>
            <Footer title='BookTrader'>
              Lorem ipsum dolor sit amet. Duo laoreet dissentiunt ei, autem
              prodesset deseruisse in quo.
            </Footer>
          </div>
        </>
      ) : null}
    </>
  );
};

const mapStateToProps = state => ({
  books: state.books.booksData,
  loading: state.books.loading,
});

const mapDispatchToProps = {
  searchBook: searchBook,
};

export default connect(mapStateToProps, mapDispatchToProps)(Detail);
