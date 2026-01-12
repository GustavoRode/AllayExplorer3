import React, { useEffect } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  useEffect(() => {
    const hero = document.getElementById('hero');
    if (hero) {
      hero.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, []);
  return (
    <>
      {/* Hero Section */}
      <section id="hero" className="hero-section">
        <Container>
          <Row className="align-items-center min-vh-100">
            <Col lg={6} className="hero-text">
              <h1 className="hero-title">Inversión inmobiliaria fraccionada y sin fricción</h1>
              <h2 className="hero-subtitle">La propiedad reinventada — invierte globalmente</h2>
              <p className="hero-description">
                Por primera vez, inversores de todo el mundo pueden comprar participaciones fraccionadas en bienes raíces de EE. UU.
                mediante tokens completamente compatibles con la normativa. Comienza con poco, recibe ingresos semanales y negocia en mercados secundarios.
              </p>
              <div className="hero-buttons">
                <Button variant="primary" size="lg" as={Link} to="/comenzar" className="btn-comenzar">
                  COMENZAR
                </Button>
                <Button variant="outline-light" size="lg" className="ms-3" as={Link} to="/educacion/introduccion">
                  Más información
                </Button>
              </div>

              <div className="mt-4 hero-trust d-flex gap-3 align-items-center">
                <div className="trust-pill">65K+ inversores</div>
                <div className="trust-pill">$29M+ distribuidos</div>
                <div className="trust-pill">6-16% rent. anual</div>
              </div>
            </Col>
            <Col lg={6} className="hero-image">
              <img src="https://placehold.co/600x420?text=Tokenized+Property" alt="Tokenized property" className="img-fluid" />
            </Col>
          </Row>
        </Container>
      </section>

      {/* How it works */}
      <section className="howitworks-section py-5">
        <Container>
          <h2 className="text-center mb-4">La inversión inmobiliaria, simplificada</h2>
          <p className="text-center lead mb-5">Compra participaciones fraccionadas, recibe ingresos semanales y negocia tus tokens en mercados secundarios.</p>

          <Row className="text-center">
            <Col md={4} className="mb-4">
              <div className="how-card p-4 h-100 shadow-sm">
                <h3 className="mb-3">1. Invertir</h3>
                <p>Abre una cuenta, verifica tu identidad y elige propiedades en el Marketplace. Compra tokens que representan una participación de la propiedad.</p>
              </div>
            </Col>
            <Col md={4} className="mb-4">
              <div className="how-card p-4 h-100 shadow-sm">
                <h3 className="mb-3">2. Gana semanalmente</h3>
                <p>Recibe ingresos por rentas cada semana en stablecoins, distribuidos automáticamente a tu cartera.</p>
              </div>
            </Col>
            <Col md={4} className="mb-4">
              <div className="how-card p-4 h-100 shadow-sm">
                <h3 className="mb-3">3. Compra y vende</h3>
                <p>Utiliza mercados secundarios como YAM para vender o comprar tokens 24/7 (sujeto a regulación local).</p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* DeFi RMM callout */}
      <section className="rmm-section py-5 bg-light">
        <Container>
          <Row className="align-items-center">
            <Col lg={8}>
              <h3>Integración DeFi — Plataforma de colateralización RMM</h3>
              <p className="mb-3">Aprovecha tus tokens con la plataforma RMM para obtener rendimiento adicional y acceso a funciones de préstamo/colateralización basadas en Aave.</p>

              <div className="rmm-links d-flex flex-wrap gap-2">
                <Button variant="outline-primary" size="sm" as={Link} to="/como-funciona" className="btn btn-outline-primary btn-sm">CÓMO FUNCIONA</Button>
                <Button variant="outline-primary" size="sm" as={Link} to="/por-que-funciona" className="btn btn-outline-primary btn-sm">POR QUÉ FUNCIONA</Button>
                <a href="https://www.youtube.com/watch?v=vM08S73cCRI" target="_blank" rel="noreferrer" className="btn btn-outline-primary btn-sm">CÓMO USARLO</a>
              </div>
            </Col>
            <Col lg={4} className="text-lg-end mt-3 mt-lg-0">
              <a href="https://rmm.realtoken.network/" target="_blank" rel="noreferrer" className="btn btn-primary">Ir al RMM</a>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Features grid */}
      <section className="features-section py-5">
        <Container>
          <h2 className="text-center mb-4">Sin permiso, compatible y pionera en su tipo</h2>
          <Row>
            <Col md={3} className="mb-4">
              <div className="feature-card p-3 text-center h-100 shadow-sm">
                <h5>Tokens únicos</h5>
                <p>Cada propiedad se representa mediante un conjunto finito de tokens; los titulares reciben ingresos proporcionales a su participación.</p>
              </div>
            </Col>
            <Col md={3} className="mb-4">
              <div className="feature-card p-3 text-center h-100 shadow-sm">
                <h5>Propiedad gestionada</h5>
                <p>Gestores locales de propiedades manejan inquilinos, mantenimiento y cobros — nosotros coordinamos por ti.</p>
              </div>
            </Col>
            <Col md={3} className="mb-4">
              <div className="feature-card p-3 text-center h-100 shadow-sm">
                <h5>Propiedad en INC/LLC</h5>
                <p>Las propiedades son de empresas (Inc o LLC) para permitir una tokenización compatible con la normativa.</p>
              </div>
            </Col>
            <Col md={3} className="mb-4">
              <div className="feature-card p-3 text-center h-100 shadow-sm">
                <h5>Pagos semanales de renta</h5>
                <p>Los pagos de renta se distribuyen semanalmente a los titulares de tokens en stablecoins.</p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Latest news */}
      <section className="news-section py-5 bg-white">
        <Container>
          <h2 className="text-center mb-4">Últimas del blog</h2>
          <Row>
            <Col md={4} className="mb-4">
              <div className="news-card p-4 h-100 shadow-sm">
                <h5>Vervana, A Scenic Residence in Panama</h5>
                <p className="small text-muted">AUG 21, 2024</p>
                <a href="https://realt.co/vervana-a-scenic-residence-in-panama/" target="_blank" rel="noreferrer">Leer más</a>
              </div>
            </Col>
            <Col md={4} className="mb-4">
              <div className="news-card p-4 h-100 shadow-sm">
                <h5>Birth of a Leading Player in Europe</h5>
                <p className="small text-muted">JUL 6, 2023</p>
                <a href="https://realt.co/birth-of-a-leading-player-in-real-estate-asset-tokenization-in-europe/" target="_blank" rel="noreferrer">Leer más</a>
              </div>
            </Col>
            <Col md={4} className="mb-4">
              <div className="news-card p-4 h-100 shadow-sm">
                <h5>Episode 7: On the road to Web3 adoption</h5>
                <p className="small text-muted">SEP 20, 2022</p>
                <a href="https://realt.co/episode-7-on-the-road-to-web3-mass-adoption-realt-continues-to-innovate/" target="_blank" rel="noreferrer">Leer más</a>
              </div>
            </Col>
          </Row>
          <div className="text-center mt-4">
            <a href="/blog" className="btn btn-outline-primary">Ver todas las noticias</a>
          </div>
        </Container>
      </section>

      {/* Newsletter */}
      <section className="newsletter-section py-5 bg-primary text-white text-center">
        <Container>
          <h3 className="mb-3">¿Interesado en recibir novedades?</h3>
          <p className="mb-4">Suscríbete a nuestro boletín para recibir las últimas propiedades y contenidos educativos.</p>
          <form action="mailto:help@tokenova.com" method="post" encType="text/plain" className="d-flex justify-content-center gap-2">
            <input type="email" name="email" className="form-control form-control-lg" placeholder="Tu correo electrónico" style={{ maxWidth: 420 }} required />
            <button type="submit" className="btn btn-dark btn-lg">Suscribirse</button>
          </form>
        </Container>
      </section>

      {/* CTA Final Section */}
      <section className="cta-final-section text-center py-5 bg-light">
        <Container>
          <h2 className="mb-3">Únete a miles de inversores globales</h2>
          <p className="lead mb-4">Comienza a construir tu cartera de bienes raíces tokenizados hoy.</p>
          <Button variant="primary" size="lg" as={Link} to="/comenzar">
            CREAR CUENTA
          </Button>
        </Container>
      </section>
    </>
  );
};

export default Home;

