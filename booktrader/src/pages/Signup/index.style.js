import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Img = styled.img`
  margin-top: 10rem;
`;

export const Button = styled.button`
  font-family: 'Manjari', sans-serif;
  font-size: 3.5rem;
  background: var(--color-mainButton);
  width: 53.5rem;
  height: 8rem;
  border: none;
  &:forcus-visible,
  &:focus {
    outline: 0;
  }
`;

export const StyleText = styled.p`
  font-family: 'Open Sans', sans-serif;
  margin-top: 5.6rem;
  font-size: 2.8rem;
  font-weight: normal;
`;

export const StyleStrong = styled.strong`
  font-size: 3rem;
`;

export const StyleLink = styled(Link)`
  color: black;
  text-decoration: none;

  &:hover {
    text-decoration: none;
    color: black;
  }
`;
