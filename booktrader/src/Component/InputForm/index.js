import React, { useState } from 'react';
import styled from 'styled-components';

import './style.css';

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 3rem;
`;

const InputWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  position: relative;

  &:not(:last-child) {
    margin-bottom: 2rem;
  }
`;

const StyledError = styled.div`
  color: var(--color-error);
  font-weight: 700;
  font-size: 1.2rem;
  visibility: ${props => (props.show ? 'visibile' : 'hidden')};
  opacity: ${props => (props.show ? '1' : '0')};
  transform: translateY(${props => (props.show ? '20px' : '10px')});
  transition: all 0.1s;
  position: absolute;
  bottom: 0;
  left: 0;
  padding: 0rem 1rem;
`;

const InputForm = ({ field, form: { errors, touched }, ...props }) => {
  return (
    <Wrapper>
      <InputWrapper>
        <div className='group'>
          <input {...field} {...props} />
          <span className='highlight' />
          <span className='bar' />
          {/* <label>{name}</label> */}
        </div>
        <StyledError show={errors[field.name] && touched[field.name]}>
          {errors[field.name]}
        </StyledError>
      </InputWrapper>
    </Wrapper>
  );
};

export default InputForm;

export const Input = ({ name, searchVal }) => {
  const [search, setSearch] = useState('');

  const handleSearch = e => {
    setSearch(e.target.value);
  };

  const resetInputField = () => {
    setSearch('');
  };

  const submitSearch = e => {
    e.preventDefault();
    console.log(search);

    searchVal(search);
    resetInputField();
  };

  return (
    <Wrapper>
      <form className='group' onSubmit={submitSearch}>
        <input
          type='text'
          value={search}
          onChange={handleSearch}
          placeholder={name}
        />
        {/* <span className='highlight' /> */}
        <span className='bar' />
        {/* <label>{name}</label> */}
      </form>
    </Wrapper>
  );
};

export const InputFormGoi = ({ name, type, onChange, value }) => {
  return (
    <Wrapper>
      <form className='group'>
        <input type={type} onChange={onChange} value={value} />
        <span className='highlight' />
        <span className='bar' />
        <label>{name}</label>
      </form>
    </Wrapper>
  );
};
