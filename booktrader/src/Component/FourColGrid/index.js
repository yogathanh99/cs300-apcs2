import React from 'react';
import styled from 'styled-components';

const Content = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 40px;
  position: relative;
`;

const Element = styled.div`
  animation: animateGrid 0.5s;

  @keyframes animateGrid {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

const FourColGrid = ({ children }) => {
  return (
    <div className='rmdb-grid'>
      <Content>
        {children.length > 1 ? (
          children.map((element, i) => <Element key={i}>{element}</Element>)
        ) : (
          <Element>{children}</Element>
        )}
      </Content>
    </div>
  );
};

export default FourColGrid;
