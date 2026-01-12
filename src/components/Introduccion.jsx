import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import './Introduccion.css';

const Introduccion = () => {
  return (
    <>
      <Helmet>
        <title>Introducción a los Bienes Raíces Tokenizados - Tokenova</title>
        <meta name="description" content="Qué es la tokenización de activos, ventajas, y cómo cambia la inversión inmobiliaria. Una introducción clara y práctica." />
      </Helmet>

      <Container className="intro-container py-5">
        <Row className="mb-4">
          <Col lg={10} className="mx-auto text-center">
            <h1 className="mb-3">Introducción a los bienes raíces tokenizados</h1>
            <p className="lead">
              La tokenización transforma derechos sobre activos reales en tokens digitales, permitiendo
              que la propiedad se divida, transfiera y comercie con mayor rapidez, transparencia y accesibilidad.
              Esta tecnología abre la inversión inmobiliaria a más personas, reduce fricciones y fomenta mercado secundarios más líquidos.
            </p>
          </Col>
        </Row>

        <Row className="mb-5">
          <Col md={6} className="mb-3">
            <Card className="shadow-sm h-100">
              <Card.Body>
                <h3>¿Qué es la tokenización?</h3>
                <p>
                  La tokenización es el proceso de representar los derechos sobre un activo (por ejemplo, una vivienda)
                  como un token digital en una cadena de bloques. Estos tokens pueden fraccionarse, transferirse y registrarse
                  de forma inmutable, lo que facilita la compra y venta global del activo subyacente.
                </p>
              </Card.Body>
            </Card>
          </Col>

          <Col md={6} className="mb-3">
            <Card className="shadow-sm h-100">
              <Card.Body>
                <h3>Beneficios principales</h3>
                <ul>
                  <li><strong>Transparencia:</strong> los registros de propiedad son inmutables y auditable en la blockchain.</li>
                  <li><strong>Liquidez:</strong> activos típicamente ilíquidos pueden negociarse en mercados secundarios.</li>
                  <li><strong>Globalización:</strong> inversionistas de todo el mundo pueden participar fácilmente.</li>
                  <li><strong>Menores barreras de entrada:</strong> inversiones fraccionadas permiten empezar con montos pequeños.</li>
                </ul>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        <Row className="mb-5">
          <Col lg={12}>
            <Card className="shadow-sm">
              <Card.Body>
                <h3>Aplicación en bienes raíces</h3>
                <p>
                  En lugar de comprar una propiedad completa, la tokenización permite comprar una proporción de la misma.
                  Por ejemplo, una propiedad valorada en $100.000 puede dividirse en 100 tokens y cada token representa el 1%.
                  Esto democratiza el acceso a activos de alto valor y ofrece mayor flexibilidad a la hora de gestionar
                  la inversión.
                </p>
                <p>
                  La naturaleza inmutable del registro en blockchain protege la propiedad contra fraudes y manipulaciones,
                  y combinada con una gestión profesional de las propiedades, permite que los ingresos por rentas se distribuyan
                  de forma transparente entre los titulares de tokens.
                </p>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        <Row className="mb-5">
          <Col lg={8} className="mx-auto text-center">
            <h4 className="mb-3">¿Te interesa recibir novedades?</h4>
            <p>Suscríbete para recibir actualizaciones sobre nuevos contenidos y oportunidades de inversión.</p>
            <Button variant="primary" as={Link} to="/comenzar">Empezar en Tokenova</Button>
          </Col>
        </Row>

        <Row className="mt-5">
          <Col>
            <div className="text-muted small">
              <p>
                Nota: La información ofrecida es de carácter informativo y no constituye asesoramiento de inversión. Consulta
                con un asesor financiero o legal antes de tomar decisiones de inversión.
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Introduccion;
