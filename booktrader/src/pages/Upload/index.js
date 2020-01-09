import React, { useState } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';

import { InputUpload } from '../../Component/InputForm';
import Button from '../../Component/Button';
import Footer from '../../Component/Footer';
import Loading from '../../Component/Loading';

import * as actions from '../../store/actions';

const UID = '5dd9491650c68f2d74b4a6ae';

const Wrapper = styled.div`
  margin-top: 7rem;
`;

const WrapperFooter = styled.div`
  position: absolute;
  width: 100%;
  left: 0;
  bottom: 0;
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
    name: bookName,
    author: [author],
    description: describe,
    coverImage: link,
    statusImage: [],
    language: ['Tiếng Việt', 'English'],
    editedYear: 2015,
  };

  const handleSubmit = () => {
    insertBook(data, UID);
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
            <Footer />
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
