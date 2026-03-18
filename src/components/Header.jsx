import React, { useState } from 'react';
import logoGrisino from '../../images/Logo-Grisino-WEB.webp';
import logoAllay from '../../images/Logo-Allay-WEB.webp';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import { faInstagram, faYoutube, faWhatsapp } from '@fortawesome/free-brands-svg-icons';

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  
  const handleClose = () => setShowMenu(false);
  const handleShow = () => setShowMenu(true);


  return (
    <>
      {/* Barra superior con enlaces a la derecha */}
      <div className="top-bar custom-navbar position-fixed w-100">
        <div className="d-flex align-items-center w-100 position-relative navbar-inner">
          {/* Hamburger Menu - visible siempre */}
          <div>
            <button 
              onClick={handleShow}
              style={{ 
                background: 'none', 
                border: 'none', 
                cursor: 'pointer',
                fontSize: '1.8rem',
                color: '#333',
                padding: '0',
                display: 'flex',
                alignItems: 'center'
              }}
              title="Abrir menú"
            >
              <FontAwesomeIcon icon={faBars} style={{ color: '#333' }} />
            </button>
          </div>

          {/* Logo centrado */}
          <div className="flex-grow-1 d-flex justify-content-center navbar-logo-container">
            <img 
              src={logoAllay} 
              alt="Logo Allay" 
              className="navbar-logo"
            />
          </div>

          {/* Iconos de redes sociales - pushidos a la derecha */}
          <div className="d-flex gap-2 gap-md-3 align-items-center ms-auto navbar-links">
            <a href="https://wa.me/541168854910" className="navbar-link d-none d-sm-inline-flex align-items-center gap-1" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faWhatsapp} style={{ fontSize: '1em' }} />
              <span>11-6885-4910</span>
            </a>
            <a href="https://wa.me/541168854910" className="navbar-link d-sm-none" title="WhatsApp" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faWhatsapp} style={{ fontSize: '1.2em' }} />
            </a>
            <a href="mailto:allay.gluten.free@gmail.com" className="navbar-link" title="Email">
              <FontAwesomeIcon icon={faEnvelope} style={{ fontSize: '1.1em' }} />
            </a>
            <a href="https://www.instagram.com/allay_singluten?igsh=eGVkNng0OTg4MGty" target="_blank" rel="noopener noreferrer" className="navbar-link" title="Instagram">
              <FontAwesomeIcon icon={faInstagram} style={{ fontSize: '1.1em' }} />
            </a>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {showMenu && (
        <>
          <div 
            className="position-fixed top-0 start-0 w-100 h-100" 
            style={{ backgroundColor: 'rgba(0,0,0,0.5)', zIndex: 999 }}
            onClick={handleClose}
          />
          <div 
            className="position-fixed top-0 start-0 bg-dark" 
            style={{ width: '250px', height: '100vh', zIndex: 1000, overflowY: 'auto' }}
          >
            <div className="d-flex justify-content-between align-items-center p-3 border-bottom border-secondary">
              <span className="text-white fw-bold">Menú</span>
              <Button 
                variant="dark" 
                onClick={handleClose}
                className="p-0 border-0"
                style={{ fontSize: '1.5rem' }}
              >
                <FontAwesomeIcon icon={faTimes} className="text-white" />
              </Button>
            </div>
            <div className="d-flex flex-column">
              <Link 
                to="/pages/nuestra-empresa" 
                className="text-white text-decoration-none p-3 border-bottom border-secondary"
                onClick={handleClose}
              >
                EMPRESA
              </Link>
              <Link 
                to="/productos" 
                className="text-white text-decoration-none p-3 border-bottom border-secondary"
                onClick={handleClose}
              >
                PRODUCTOS
              </Link>
              <Link 
                to="/vida-sin-gluten" 
                className="text-white text-decoration-none p-3 border-bottom border-secondary"
                onClick={handleClose}
              >
                VIDA SIN GLUTEN
              </Link>
              <Link 
                to="/contacto" 
                className="text-white text-decoration-none p-3"
                onClick={handleClose}
              >
                CONTACTO
              </Link>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Header;
