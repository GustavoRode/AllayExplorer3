import React, { useEffect, useState } from 'react';
import HeroCarouselBootstrap from './HeroCarouselBootstrap';
import HeroCarouselSlick from './HeroCarouselSlick';

const CAROUSEL_URL = 'https://692e49a591e00bafccd3623c.mockapi.io/catalog';

const HeroCarouselRemote = () => {
  const [slides, setSlides] = useState([]);
  const [loading, setLoading] = useState(true);
  const [mode, setMode] = useState('bootstrap');

  useEffect(() => {
    fetch(CAROUSEL_URL)
      .then(r => r.json())
      .then(data => {
        // Adapt API data to carousel slides
        const slidesData = data.map(item => ({
          image: item.image,
          title: item.title,
          text: item.description?.slice(0, 120) || '',
        }));
        setSlides(slidesData);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  useEffect(() => {
    import('../config/carouselMode.json').then(cfg => {
      setMode(cfg.mode || 'bootstrap');
    }).catch(() => setMode('bootstrap'));
  }, []);

  if (loading) return <div className="text-center py-5">Cargando carrusel...</div>;

  return mode === 'bootstrap'
    ? <HeroCarouselBootstrap slides={slides} />
    : <HeroCarouselSlick slides={slides} />;
};

export default HeroCarouselRemote;
