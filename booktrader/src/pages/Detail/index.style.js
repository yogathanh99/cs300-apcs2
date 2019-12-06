import styled from 'styled-components';

export const Wrapper = styled.div`
  text-align: center;
  margin-bottom: 6rem;
`;

export const Button = styled.button`
  font-family: 'Manjari', sans-serif;
  font-size: 3.5rem;
  background: ${props =>
    props.avaiable ? 'var(--color-mainButton)' : 'rgba(196, 196, 196, 0.35)'};
  width: 33.5rem;
  height: 8rem;
  margin-top: 4rem;
  border: none;
  &:forcus-visible,
  &:focus {
    outline: 0;
  }
`;

export const Title = styled.h4`
  font-family: 'Abhaya Libre', sans-serif;
  margin-bottom: 2rem;
  font-size: 13rem;
  font-weight: normal;
  line-height: 17rem;
`;

export const Tag = styled.span`
  font-family: 'Manjari', sans-serif;
  font-size: 2rem;
  text-align: center;
  margin-right: 2rem;
  padding: 1rem 2rem;
  text-transform: capitalize;
  background: rgba(196, 196, 196, 0.35);
  cursor: pointer;
`;

export const User = styled.div`
  color: black;
  opacity: 0.4;
  font-family: 'Manjari', sans-serif;
  font-size: 1.4rem;
`;

export const SubTitle = styled.h5`
  font-family: 'Manjari', sans-serif;
  font-size: 4rem;
  margin: 2rem 0;
`;

export const Des = styled.p`
  font-family: 'Open Sans', sans-serif;
  font-size: 2rem;
  line-height: 3rem;
`;

export const WrapperRelated = styled.p`
  font-family: 'Manjari', sans-serif;
  font-size: 4rem;
  line-height: 4rem;
  margin-top: 10rem;
  margin-bottom: 5rem;
`;
