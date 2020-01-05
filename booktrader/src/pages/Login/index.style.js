import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Button = styled.button`
  font-family: 'Manjari', sans-serif;
  font-size: 3.5rem;
  background: var(--color-mainButton);
  width: 40rem;
  height: 8rem;
  border: none;
  &:forcus-visible,
  &:focus {
    outline: 0;
  }
`;

export const StyleText = styled.p`
  font-family: 'Open Sans', sans-serif;
  margin-top: 1rem;
  font-size: 2.8rem;
  font-weight: normal;
`;

export const StyleStrong = styled.strong`
  font-size: 3rem;
`;

export const Wrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Style = styled.div`
  height: 90vh;
  padding: 0;
  margin: 0;
  position: relative;
`;

export const StyleLink = styled(Link)`
  color: black;
  text-decoration: none;

  &:hover {
    text-decoration: none;
    color: black;
  }
`;

export const MessageWrapper = styled.div`
  position: absolute;
  bottom: 0rem;
`;
