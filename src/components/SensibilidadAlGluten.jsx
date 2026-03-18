import React, { useEffect } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const SensibilidadAlGluten = () => {
  const navigate = useNavigate();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);
  return (
    <Container className="py-4" style={{ marginTop: '80px' }}>
      <div className="d-flex align-items-center mb-3" style={{ marginTop: '60px' }}>
        <Button variant="outline-secondary" size="sm" onClick={() => navigate(-1)}>
          &#8592; Volver
        </Button>
      </div>
      <Row>
        <Col md={8} className="mx-auto">
          <h2 style={{ wordBreak: 'keep-all', whiteSpace: 'normal', fontSize: '2rem' }}>
            Sensibilidad al Gluten No Celíaca: ¿Qué es y cómo se diagnostica?
          </h2>
          <p>
            Cada vez más personas son diagnosticadas con sensibilidad al gluten, aunque no cumplen con los criterios para celiaquía. Esta condición, conocida como Sensibilidad al Gluten No Celíaca (SGNC), se caracteriza por síntomas digestivos y extra-digestivos que aparecen tras el consumo de gluten, pero sin daño intestinal ni marcadores autoinmunes típicos de la celiaquía.
          </p>
        <h4>¿Cómo se manifiesta?</h4>
        <ul>
          <li>Dolor abdominal, hinchazón, gases</li>
          <li>Fatiga, dolor de cabeza</li>
          <li>Alteraciones en el ánimo</li>
          <li>Malestar general tras consumir alimentos con gluten</li>
        </ul>
        <h4>¿Cómo se diagnostica?</h4>
        <p>
          El diagnóstico de SGNC es de exclusión: se descarta primero la celiaquía y la alergia al trigo mediante estudios médicos. Si los síntomas mejoran al retirar el gluten y reaparecen al reintroducirlo, se considera sensibilidad al gluten.
        </p>
        <h4>¿Qué hacer si sospechas SGNC?</h4>
        <ul>
          <li>Consultar a un profesional de la salud</li>
          <li>No eliminar el gluten sin supervisión médica</li>
          <li>Realizar estudios para descartar celiaquía y alergia</li>
        </ul>
        <p>
          La SGNC es una condición real y cada vez más reconocida. Si tienes síntomas, busca orientación médica para un diagnóstico adecuado y un plan alimentario seguro.
        </p>
      </Col>
    </Row>
  </Container>
)};

export default SensibilidadAlGluten;
