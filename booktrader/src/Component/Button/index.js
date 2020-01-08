import React from 'react';
import styled from 'styled-components';

const StyleButton = styled.button`
  font-family: 'Manjari', sans-serif;
  font-size: 3.5rem;
  background: var(--color-mainButton);
  color: black;
  width: 53.5rem;
  height: 8rem;
  border: none;
  &:forcus-visible,
  &:focus {
    outline: 0;
  }
  &:disabled {
    cursor: not-allowed;
    background-color: #f0f0f0;
  }
`;

const Button = ({ loading, children, disabled, ...rest }) => {
  return (
    <StyleButton disabled={disabled} {...rest}>
      {loading ? loading : children}
    </StyleButton>
  );
};

export default Button;
