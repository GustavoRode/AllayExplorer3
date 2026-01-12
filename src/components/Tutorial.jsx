import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';

const Tutorial = () => {
  return (
    <>
      <Helmet>
        <title>Onboarding Tutorial - Tokenova</title>
        <meta name="description" content="Tutorial de onboarding: pasos para registrarte, verificar identidad y hacer tu primera compra." />
      </Helmet>

      <Container className="py-5">
        <Row>
          <Col lg={12} className="mb-4">
            <h1>Onboarding Tutorial</h1>
            <p className="lead">Sigue los pasos para registrarte, verificar tu identidad, configurar una cartera y realizar tu primera compra.</p>
            <div className="mb-3">
              <Button variant="outline-primary" as={Link} to="/educacion">← Volver a Educación</Button>{' '}
              <Button variant="primary" href="/docs/onboarding-tutorial-en.html" target="_blank" className="ms-2">Abrir Tutorial (HTML)</Button>
              <Button variant="secondary" href="/docs/onboarding-tutorial-en.docx" target="_blank" className="ms-2">Descargar DOCX</Button>
            </div>
          </Col>
        </Row>

        <Row>
          <Col lg={12}>
            <iframe
              src="/docs/onboarding-tutorial-en.html"
              title="Onboarding Tutorial"
              style={{ width: '100%', height: '70vh', border: '1px solid #ddd', borderRadius: 6 }}
            />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Tutorial;
