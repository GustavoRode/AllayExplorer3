import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faInstagram, faWhatsapp } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <footer className="bg-primary text-white py-5 mt-5">
      <Container>
        <Row className="mb-4">
          <Col lg={3} md={6} className="mb-4">
            <h6 className="fw-bold mb-3">Allay sin gluten</h6>
            <p className="small mb-0">Soluciones sin gluten para una vida más saludable.</p>
          </Col>
          <Col lg={3} md={6} className="mb-4">
            <h6 className="fw-bold mb-3">Mapa del sitio</h6>
            <ul className="list-unstyled small">
              <li><Link to="/pages/nuestra-empresa" className="text-white text-decoration-none">Empresa</Link></li>
              <li><Link to="/productos" className="text-white text-decoration-none">Productos</Link></li>
              <li><Link to="/vida-sin-gluten" className="text-white text-decoration-none">Vida Sin Gluten</Link></li>
              {/* <li><Link to="/blog" className="text-white text-decoration-none">Novedades</Link></li> */}
              
            </ul>
          </Col>
          <Col lg={{ span: 3, offset: 3 }} md={6} className="mb-4">
            <h6 className="fw-bold mb-3">Conecta</h6>
            <div className="d-flex flex-column gap-2">
              <a href="https://wa.me/541168854910" className="text-white d-flex align-items-center" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faWhatsapp} className="me-2" /> 11-6885-4910
              </a>
              <a href="mailto:allay.gluten.free@gmail.com" className="text-white d-flex align-items-center">
                <FontAwesomeIcon icon={faEnvelope} className="me-2" /> allay.gluten.free@gmail.com
              </a>
              <a href="https://www.instagram.com/allay_singluten?igsh=eGVkNng0OTg4MGty" className="text-white d-flex align-items-center" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faInstagram} className="me-2" /> Instagram
              </a>
            </div>
          </Col>
        </Row>
        <hr className="bg-white" />
        <Row className="text-center small mt-3">
          <Col>
            <p className="mb-2">© 2025 Allay | Soluciones sin gluten</p>
            {/* <p className="mb-0">
              <Link to="/privacy" className="text-white text-decoration-none me-3">Privacidad</Link>
              <Link to="/terms" className="text-white text-decoration-none me-3">Términos</Link>
              <Link to="/disclaimer" className="text-white text-decoration-none">Disclaimer</Link>
            </p> */}
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;