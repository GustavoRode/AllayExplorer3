import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Empresa = () => (
  <Container className="py-5">
    <h1 className="mb-4 text-center">Empresa</h1>
    <Card className="shadow-sm mx-auto" style={{ maxWidth: 600 }}>
      <Card.Body>
        <Card.Title className="mb-4">Información institucional</Card.Title>
        <section className="mb-4">
          <h4 className="fw-bold">Nuestra historia</h4>
          <p>Allay sin gluten nació con el objetivo de brindar soluciones alimenticias seguras y deliciosas para personas con celiaquía y sensibilidad al gluten. A lo largo de los años, hemos evolucionado y crecido, manteniendo siempre el compromiso con la calidad y la salud de nuestros clientes.</p>
        </section>
        <section className="mb-4">
          <h4 className="fw-bold">Recursos humanos</h4>
          <p>Contamos con un equipo multidisciplinario apasionado por la alimentación saludable y la inclusión. Fomentamos el desarrollo profesional y la capacitación continua, creando un ambiente de trabajo colaborativo y respetuoso.</p>
        </section>
        <section className="mb-4">
          <h4 className="fw-bold">Responsabilidad social</h4>
          <p>Nos comprometemos con la comunidad y el medio ambiente, participando en iniciativas solidarias, promoviendo la educación sobre la celiaquía y adoptando prácticas sustentables en nuestros procesos productivos.</p>
        </section>
        <section>
          <h4 className="fw-bold">Política de calidad</h4>
          <p>Garantizamos la calidad de nuestros productos mediante estrictos controles, selección de materias primas certificadas y mejora continua. Nuestro objetivo es ofrecer alimentos seguros, ricos y confiables para todos.</p>
        </section>
      </Card.Body>
    </Card>
  </Container>
);

export default Empresa;
