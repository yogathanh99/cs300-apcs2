import React, { useState } from 'react';
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
} from 'reactstrap';
import book from '../../assets/book1.png';
import styled from 'styled-components';

const Styles = styled.div`
  .carousel {
    margin-top: 50px;
    margin-bottom: 50px;
    border: none;
  }
  .carousel-control-prev-icon,
  .carousel-control-next-icon {
    height: 50px;
    width: 50px;
    filter: invert(100%);
  }
`;

const StyleItem = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

const items = [
  {
    src: `${book}`,
    altText: 'Book 1',
  },
  {
    src: `${book}`,
    altText: 'Book 2',
  },
  {
    src: `${book}`,
    altText: 'Book 3',
  },
];

const Slideshow = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };
  const goToIndex = newIndex => {
    if (animating) return;
    setActiveIndex(newIndex);
  };

  const slides = items.map((item, i) => {
    return (
      <CarouselItem
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={i}
      >
        <StyleItem>
          <img src={item.src} alt={item.altText} />
        </StyleItem>
      </CarouselItem>
    );
  });

  return (
    <Styles>
      <Carousel activeIndex={activeIndex} next={next} previous={previous}>
        <CarouselIndicators
          items={items}
          activeIndex={activeIndex}
          onClickHandler={goToIndex}
        />
        {slides}
        <CarouselControl
          direction='prev'
          directionText='Previous'
          onClickHandler={previous}
        />
        <CarouselControl
          direction='next'
          directionText='Next'
          onClickHandler={next}
        />
      </Carousel>
    </Styles>
  );
};

export default Slideshow;
