import styled from 'styled-components';

export const WrapSearch = styled.div`
  margin: 0 auto;
  width: 60%;
  height: 15rem;
  display: flex;
  flex-direction: column;
  justify-content: center;

  span {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    position: relative;

    & > p {
      font-family: 'Manjari';
      font-size: 3rem;
      font-weight: bold;
    }
  }
`;

export const Line = styled.div`
  width: 83%;
  height: 47px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.4);
  position: absolute;
  bottom: 1.6rem;
  right: 0;
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

export const WrapperTags = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

export const WrapperBooks = styled.p`
  font-family: 'Manjari', sans-serif;
  font-size: 4rem;
  line-height: 4rem;
  margin-top: 10rem;
  margin-bottom: 5rem;
`;
