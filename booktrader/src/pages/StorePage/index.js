import React from 'react';
import { Jumbotron, Container } from 'reactstrap';
import styled from 'styled-components';

import cover from '../../assets/cover.png';
import { ReactComponent as Magnifier } from '../../assets/magnifying-glass.svg';
import BookTab from '../../Component/BookTab';
import Footer from '../../Component/Footer';
import {
  WrapSearch,
  Line,
  WrapperTags,
  Tag,
  WrapperBooks,
} from './index.style';

import data from '../../data/data.json';

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

const StorePage = () => {
  const { tags } = data;
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
              <Line />
              <StyleMagnifier />
            </span>
            <WrapperTags>
              {tags.map((tag, i) => (
                <Tag key={i}>{tag}</Tag>
              ))}
            </WrapperTags>
          </WrapSearch>
        </Container>
      </Wrapper>
      <Container>
        <WrapperBooks>Newest books</WrapperBooks>
        <BookTab img={cover} title='Lorem'>
          qualisque pro. Duo laoreet dissentiunt ei, autem prodesset deseruisse
          in quo.
        </BookTab>
        <WrapperBooks>Popular books</WrapperBooks>
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

export default StorePage;
