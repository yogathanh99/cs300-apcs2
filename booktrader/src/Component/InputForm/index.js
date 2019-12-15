import React from 'react';
import styled from 'styled-components';

import './style.css';

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 3rem;
`;

const InputForm = ({ name }) => {
  return (
    <Wrapper>
      <div className='group'>
        <input type='text' required />
        <span className='highlight' />
        <span className='bar' />
        <label>{name}</label>
      </div>
    </Wrapper>
  );
};

export default InputForm;
