import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, Container, Button, NavDropdown } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faInstagram, faYoutube, faWhatsapp } from '@fortawesome/free-brands-svg-icons';

const Header = () => {
  // Fixed positioning and sizing of header elements is handled by CSS (`src/index.css`).
  // Removed runtime debugging and inline style forcing now that CSS rules are authoritative.


  return (
    <>
      {/* Barra superior con enlaces a la derecha */}
      <div className="top-bar bg-primary text-white position-relative" style={{ minHeight: '42px' }}>
        <Container className="d-flex justify-content-end align-items-center gap-2 position-relative" style={{ fontSize: '0.95rem' }}>
          {/* Logo superpuesto */}
          <img
            src={`${import.meta.env.BASE_URL}Allay_logo1.jpeg`} alt="Logo"
            style={{ position: 'absolute', left: 0, top: '-1px', zIndex: 2, maxWidth: '82px', height: 'auto', boxShadow: '0 2px 8px rgba(0,0,0,0.08)' }}
          />
          {/* Iconos de redes sociales */}
          <a href="https://wa.me/541168854910" className="text-white" style={{ fontSize: '1rem' }} target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faWhatsapp} style={{ fontSize: '1.1em' }} /> 11-6885-4910
          </a>
          <a href="mailto:allay.gluten.free@gmail.com" className="text-white" style={{ fontSize: '1rem' }}>
            <FontAwesomeIcon icon={faEnvelope} style={{ fontSize: '1.1em' }} />
          </a>
          <a href="https://www.instagram.com/allay_singluten?igsh=eGVkNng0OTg4MGty" target="_blank" rel="noopener noreferrer" className="text-white" style={{ fontSize: '1rem' }}>
            <FontAwesomeIcon icon={faInstagram} style={{ fontSize: '1.1em' }} />
          </a>
        </Container>
      </div>

      <Navbar bg="dark" variant="dark" expand="lg" className="mb-4 main-navbar" style={{ minHeight: '63px' }}>
        <Container style={{ fontSize: '0.91rem', fontFamily: 'inherit' }}>       
          <Navbar.Brand as={Link} to="/" className="d-flex align-items-center navbar-brand-logo">
            {/* Logo ahora está en el top-bar, no aquí */}
            {/*<span>Tienda de café</span>*/}
          </Navbar.Brand>

          <Nav className="ms-auto align-items-center">
            <Nav.Link as={Link} to="/pages/nuestra-empresa" className="me-3">EMPRESA</Nav.Link>
            <Nav.Link as={Link} to="/productos" className="me-3">PRODUCTOS</Nav.Link>
            {/* <Nav.Link as={Link} to="/blog" className="me-3">NOVEDADES</Nav.Link> */}
            <Nav.Link as={Link} to="/vida-sin-gluten" className="me-3">VIDA SIN GLUTEN</Nav.Link>
            <Nav.Link as={Link} to="/contacto" className="me-3">CONTACTO</Nav.Link>
            
            

            {/* <Button variant="primary" as={Link} to="/comenzar" className="ms-3"> */}
              {/* COMENZAR
            </Button> */}
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
