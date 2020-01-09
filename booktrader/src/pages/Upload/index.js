import React, { useState } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';

import { InputUpload } from '../../Component/InputForm';
import Button from '../../Component/Button';
import Footer from '../../Component/Footer';
import Loading from '../../Component/Loading';

import * as actions from '../../store/actions';

const Wrapper = styled.div`
  margin-top: 7rem;
`;

const WrapperFooter = styled.div`
  position: absolute;
  width: 100%;
  left: 0;
  bottom: 0;
`;

const Tag = styled.span`
  font-family: 'Manjari', sans-serif;
  font-size: 2rem;
  text-align: center;
  padding: 0.5rem 0.5rem;
  margin-right: 2rem;
  margin-bottom: 2rem;
  text-transform: capitalize;
  background: rgba(196, 196, 196, 0.35);
  cursor: pointer;
`;

const TagName = styled.p`
  text-align: center;
  font-family: Abhaya Libre;
  font-style: normal;
  font-weight: normal;
  font-size: 3rem;
  line-height: 3rem;
`;

const Content = styled.div`
  text-align: center;
`;

const Upload = ({ loading, firebase, insertBook }) => {
  const [bookName, setName] = useState('');
  const [author, setAuthor] = useState('');
  const [link, setLink] = useState('');
  const [describe, setDescribe] = useState('');

  const handleVal = (val, name) => {
    if (name === 'book') setName(val);
    else if (name === 'author') setAuthor(val);
    else if (name === 'link') setLink(val);
    else setDescribe(val);
  };

  const data = {
    user: firebase.profile.name,
    name: bookName,
    author: [author],
    description: describe,
    coverImage: link,
    statusImage: [],
  };

  const handleSubmit = () => {
    insertBook(data, firebase.auth.uid);
  };

  return (
    <Wrapper>
      {loading ? (
        <Loading />
      ) : (
        <>
          <hr />
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <InputUpload
              name='book'
              placeholder='What is the name of the book ?'
              handleValue={handleVal}
            />
            <InputUpload
              name='author'
              placeholder='What is the name author of the book ?'
              handleValue={handleVal}
            />
            {/* <TagName>
              Tags: <Tag>Hello</Tag>
              <Tag>Hi</Tag>
            </TagName> */}
            <Content>
              <InputUpload
                name='link'
                placeholder='What does your book look like ? (Link image)'
                handleValue={handleVal}
              />
              <InputUpload
                name='describe'
                placeholder='Describe...'
                handleValue={handleVal}
              />
              <Button onClick={handleSubmit}>Share</Button>
            </Content>
          </div>
          <WrapperFooter>
            <Footer title='BookTrader'>
              Lorem ipsum dolor sit amet. Duo laoreet dissentiunt ei, autem
              prodesset deseruisse in quo.
            </Footer>
          </WrapperFooter>
        </>
      )}
    </Wrapper>
  );
};

const mapStateToProps = state => ({
  loading: state.auth.loading,
  firebase: state.firebase,
});

const mapDispatchToProps = {
  insertBook: actions.insertBook,
};

export default connect(mapStateToProps, mapDispatchToProps)(Upload);
