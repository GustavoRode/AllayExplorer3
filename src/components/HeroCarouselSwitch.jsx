import React, { useState } from 'react';
import HeroCarouselBootstrap from './HeroCarouselBootstrap';
import HeroCarouselSlick from './HeroCarouselSlick';
import { Form } from 'react-bootstrap';

const demoSlides = [
  {
    image: 'https://santamariaproductos.com.ar/wp-content/uploads/2017/12/alfajores-negros-para-celiacos-santa-maria-alimentos-sin-gluten.jpg',
    title: 'Alfajores Negros',
    text: 'Deliciosos alfajores sin gluten.'
  },
  {
    image: 'https://santamariaproductos.com.ar/wp-content/uploads/2018/09/DSC7212-rect-1024x683.jpg',
    title: 'Obleas de Frutilla',
    text: 'Nuevas obleas para celíacos.'
  },
  {
    image: 'https://santamariaproductos.com.ar/wp-content/uploads/2018/09/DSC7231-1024x683.jpg',
    title: 'Obleas de Limón',
    text: 'Prueba nuestras obleas de limón.'
  }
];

const HeroCarouselSwitch = ({ slides = demoSlides }) => {
  const [mode, setMode] = useState('bootstrap');

  return (
    <div className="mb-4">
      <Form.Group className="mb-3">
        <Form.Label>Tipo de carrusel:</Form.Label>
        <Form.Select value={mode} onChange={e => setMode(e.target.value)}>
          <option value="bootstrap">Bootstrap</option>
          <option value="slick">Slick</option>
        </Form.Select>
      </Form.Group>
      {mode === 'bootstrap' ? (
        <HeroCarouselBootstrap slides={slides} />
      ) : (
        <HeroCarouselSlick slides={slides} />
      )}
    </div>
  );
};

export default HeroCarouselSwitch;
