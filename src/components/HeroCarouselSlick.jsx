import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const HeroCarouselSlick = ({ slides }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: true,
  };
  return (
    <Slider {...settings} className="hero-carousel">
      {slides.map((slide, idx) => (
        <div key={idx}>
          <img
            src={slide.image}
            alt={slide.title}
            style={{ width: '100%', maxHeight: 400, objectFit: 'cover' }}
          />
          <div className="carousel-caption">
            <h3>{slide.title}</h3>
            <p>{slide.text}</p>
          </div>
        </div>
      ))}
    </Slider>
  );
};

export default HeroCarouselSlick;
