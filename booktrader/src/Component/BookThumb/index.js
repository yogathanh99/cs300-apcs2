import React from 'react';
import styled from 'styled-components';

const Img = styled.img`
  width: 100%;
  height: auto;
  transition: all 0.3s;
  object-fit: cover;
  border-radius: 20px;
`;

const BookThumb = ({ image }) => {
  return (
    <div>
      <Img src={image} alt='movie' />
    </div>
  );
};

export default BookThumb;
