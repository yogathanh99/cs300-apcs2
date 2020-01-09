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
} from './index.style';
import BookTab from '../../Component/BookTab';
import Footer from '../../Component/Footer';
import cover from '../../assets/book-cover.png';

import data from '../../data/data.json';
import { searchBook, lendBook } from '../../store/actions';

const URL_SERVER = process.env.REACT_APP_SERVER;
const PORT_SERVER = process.env.REACT_APP_PORT;
const SERVER_URL_API = `http://${URL_SERVER}:${PORT_SERVER}/books`;

const UID = '5dea47f0df5bd5dadf145cbf';

const Detail = ({ searchBook, match, loading }) => {
  const [book, setBook] = useState([]);
  useEffect(() => {
    axios.get(`${SERVER_URL_API}/${match.params.bookID}`).then(res => {
      setBook(res.data.book);
    });
  }, [book, match.params.bookID]);

  const { tags, date, avaiable } = data;
  const { name, coverImage, author, description, userID } = book;
  const [avaiableBook, setAvaiable] = useState(avaiable);

  const handleTrade = () => {
    const dataLoad = {
      lenderID: userID[0],
      bookName: name,
    };
    console.log(dataLoad);
    lendBook(dataLoad, UID);
    console.log('DONE');
    setAvaiable(false);
    // avaiable = false;
  };
  return (
    <>
      {book && author && userID ? (
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
                <Button avaiable={avaiableBook} onClick={handleTrade}>
                  Borrow
                </Button>
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
  lendBook: lendBook,
};

export default connect(mapStateToProps, mapDispatchToProps)(Detail);
