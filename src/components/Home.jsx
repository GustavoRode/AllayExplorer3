import React from 'react';
import HeroCarouselRemote from './HeroCarouselRemote';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  return (
    <>
      {/* Hero Section (Carrusel) */}
      <section id="hero" className="hero-section">
        <Container>
          <HeroCarouselRemote />
        </Container>
      </section>

      {/* Opciones principales */}
      <section className="main-options-section py-5">
        <Container>
          <h2 className="text-center mb-4">Explora</h2>
          <Row className="justify-content-center">
            <Col md={4} className="mb-4">
              <div className="option-card p-4 h-100 shadow-sm text-center">
                <h3>PRODUCTOS</h3>
                <p>Descubre todos los productos disponibles.</p>
                <Button variant="primary" as={Link} to="/productos">Ver productos</Button>
              </div>
            </Col>
            {/* <Col md={4} className="mb-4">
              <div className="option-card p-4 h-100 shadow-sm text-center">
                <h3>NOVEDADES</h3>
                <p>Lee las últimas noticias y novedades.</p>
                <Button variant="primary" as={Link} to="/blog">Ver novedades</Button>
              </div>
            </Col> */}
            <Col md={4} className="mb-4">
              <div className="option-card p-4 h-100 shadow-sm text-center">
                <h3>VIDA SIN GLUTEN</h3>
                <p>Consejos, recetas y experiencias para una vida sin gluten.</p>
                <Button variant="primary" as={Link} to="/vida-sin-gluten">Ver más</Button>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Home;

