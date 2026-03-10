import React from 'react';
import { Carousel } from 'react-bootstrap';

const HeroCarouselBootstrap = ({ slides }) => (
  <Carousel fade interval={4000} className="hero-carousel">
    {slides.map((slide, idx) => (
      <Carousel.Item key={idx}>
        <img
          className="d-block w-100"
          src={slide.image}
          alt={slide.title}
          style={{ maxHeight: 400, objectFit: 'cover' }}
        />
        <Carousel.Caption>
          <h3>{slide.title}</h3>
          <p>{slide.text}</p>
        </Carousel.Caption>
      </Carousel.Item>
    ))}
  </Carousel>
);

export default HeroCarouselBootstrap;
