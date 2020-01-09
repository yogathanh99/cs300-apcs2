import React, { useEffect } from 'react';
import { Jumbotron, Container } from 'reactstrap';
import styled from 'styled-components';
import { connect } from 'react-redux';
import base64 from 'base-64';

import cover from '../../assets/cover.png';
import { ReactComponent as Magnifier } from '../../assets/magnifying-glass.svg';
import { Input } from '../../Component/InputForm';
import Footer from '../../Component/Footer';
import FourColGrid from '../../Component/FourColGrid';
import BookThumb from '../../Component/BookThumb';
import { WrapSearch, WrapperInput, WrapperTags, Tag } from './index.style';

import data from '../../data/data.json';
import * as actions from '../../store/actions';

const StyleMagnifier = styled(Magnifier)`
  fill: rgba(0, 0, 0, 0.4);
  position: absolute;
  bottom: 2rem;
  right: 0;
  width: 3rem;
`;

const Wrapper = styled.div`
  box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.4);
`;

const StorePage = ({ books, fetchBooks, searchBooks, loading }) => {
  useEffect(() => {
    fetchBooks();
  }, [fetchBooks]);

  console.log(books);

  const search = searchValue => {
    searchBooks(searchValue);
  };

  return (
    <>
      <Wrapper>
        <Jumbotron
          style={{
            background: `url(${cover}) center center / cover no-repeat`,
            height: '60rem',
            zIndex: '-100',
          }}
          fluid
        ></Jumbotron>
        <Container>
          <WrapSearch>
            <span>
              <p>Search:</p>
              <WrapperInput>
                <Input searchVal={search} />
              </WrapperInput>
              <StyleMagnifier />
            </span>
            <WrapperTags>
              {data.tags.map((tag, i) => (
                <Tag key={i}>{tag}</Tag>
              ))}
            </WrapperTags>
          </WrapSearch>
        </Container>
      </Wrapper>
      <Container
        style={{
          marginTop: '2rem',
        }}
      >
        {books.length === 1 ? (
          <FourColGrid>
            <BookThumb
              key={books[0].name}
              image={books[0].coverImage}
              title={books[0].name}
              author={books[0].author[0]}
              username='Thanh Vo'
              avaiable
            />
          </FourColGrid>
        ) : (
          <FourColGrid>
            {books.map(book => (
              <BookThumb
                key={book.name}
                image={book.coverImage}
                bookName={book.name}
                title={base64.decode(book.name)}
                author={book.author[0]}
                username='Thanh Vo'
                avaiable
              />
            ))}
          </FourColGrid>
        )}
      </Container>
      <div style={{ marginTop: '2rem' }}>
        <Footer />
      </div>
    </>
  );
};

const mapStateToProps = state => ({
  books: state.books.booksData,
  loading: state.books.loading,
  error: state.books.error,
});

const mapDispatchToProps = {
  fetchBooks: actions.fetchBooks,
  searchBooks: actions.searchBooks,
};

export default connect(mapStateToProps, mapDispatchToProps)(StorePage);
