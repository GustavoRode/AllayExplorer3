import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import './Educacion.css';

const Educacion = () => {
  return (
    <>
      <Helmet>
        <title>Educación - Tokenova</title>
        <meta name="description" content="Aprende sobre tokenización, blockchain y cómo invertir en bienes raíces tokenizados con Tokenova." />
      </Helmet>

      <Container className="educacion-container py-5">
        {/* Encabezado */}
        <Row className="mb-5">
          <Col lg={12}>
            <div className="educacion-header text-center">
              <h1 className="mb-3">Aprende sobre Tokenova</h1>
              <p className="lead">
                ¿Nuevo en blockchain, criptomonedas y tokenización? ¡Es más fácil de lo que parece! 
                Aquí encontrarás todo lo que necesitas saber sobre bienes raíces tokenizados y cómo 
                comenzar tu inversión en este nuevo sistema financiero alternativo.
              </p>
            </div>
          </Col>
        </Row>

        {/* Sección de Introducción */}
        <Row className="mb-5">
          <Col lg={6} md={12} className="mb-4">
            <Card className="educacion-card h-100 shadow-sm">
              <Card.Body className="d-flex flex-column">
                <Card.Title className="mb-3">
                  <h3>📖 Lee nuestra Introducción</h3>
                </Card.Title>
                <Card.Text className="mb-4 flex-grow-1">
                  Para aquellos que recién están aprendiendo sobre Tokenova, lee esta breve introducción 
                  al sistema. Proporciona una descripción general de alto nivel y es una excelente forma 
                  de comenzar.
                </Card.Text>
                <Button variant="primary" as={Link} to="/educacion/introduccion" className="mt-auto">
                  Leer Introducción
                </Button>
              </Card.Body>
            </Card>
          </Col>

          <Col lg={6} md={12} className="mb-4">
            <Card className="educacion-card h-100 shadow-sm">
              <Card.Body className="d-flex flex-column">
                <Card.Title className="mb-3">
                  <h3>🎥 Ver nuestro Tutorial</h3>
                </Card.Title>
                <Card.Text className="mb-4 flex-grow-1">
                  Este recorrido paso a paso comienza con el registro, te ayuda a completar la verificación 
                  de identidad, configurar una cartera digital y realizar tu primera compra.
                </Card.Text>
                <Button variant="primary" as={Link} to="/educacion/tutorial" className="mt-auto">
                  Ver Tutorial
                </Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        {/* Sección de FAQ */}
        <Row className="mb-5">
          <Col lg={6} md={12} className="mb-4">
            <Card className="educacion-card h-100 shadow-sm">
              <Card.Body>
                <Card.Title className="mb-3">
                  <h3>❓ Consulta nuestro FAQ</h3>
                </Card.Title>

                <p className="mb-3">
                  Encuentra artículos populares y categorías clave que te ayudarán a registrarte, gestionar tu cartera, 
                  entender cómo funcionan los tokens y las opciones de mercado secundario.
                </p>

                <div className="faq-highlights mb-3">
                  <h5>Categorías recomendadas</h5>
                  <ul>
                    <li><a href="https://faq.realt.co/en/category/start-here-realt-guide-bjni42/" target="_blank" rel="noreferrer">Start Here: Guía de inicio</a></li>
                    <li><a href="https://faq.realt.co/en/category/wallet-management-107p62b/" target="_blank" rel="noreferrer">Gestión de Carteras</a></li>
                    <li><a href="https://faq.realt.co/en/category/blockchain-how-to-j8jkpv/" target="_blank" rel="noreferrer">Blockchain How-To</a></li>
                  </ul>

                  <h5 className="mt-3">Artículos populares</h5>
                  <ul>
                    <li><a href="https://faq.realt.co/en/article/what-is-realt-who-can-invest-how-do-i-invest-1yyc5h5/" target="_blank" rel="noreferrer">What is RealT? Who can Invest? How do I invest?</a></li>
                    <li><a href="https://faq.realt.co/en/article/weekly-income-and-selling-your-realtokens-1coru1j/" target="_blank" rel="noreferrer">Weekly income and selling your RealTokens</a></li>
                    <li><a href="https://faq.realt.co/en/article/what-is-the-realtoken-wallet-how-to-use-the-rmm-or-yam-with-the-realtoken-wallet-1tux35k/" target="_blank" rel="noreferrer">What is the RealToken Wallet?</a></li>
                    <li><a href="https://faq.realt.co/en/article/displaying-my-realtokens-in-metamask-l38t06/" target="_blank" rel="noreferrer">Displaying my RealTokens in MetaMask</a></li>
                  </ul>
                </div>

                <div className="mt-3">
                  <Button variant="primary" as={Link} to="/preguntas-frecuentes">Ver FAQ de Tokenova</Button>
                  <a href="https://faq.realt.co/en/" target="_blank" rel="noreferrer" className="btn btn-outline-secondary ms-2">Visitar FAQ externo</a>
                </div>

                <div className="mt-4 text-muted small">
                  Nota: los recursos externos son mantenidos por terceros; consulta nuestra página de preguntas frecuentes para contenido adaptado a Tokenova.
                </div>
              </Card.Body>
            </Card>
          </Col>

          <Col lg={6} md={12} className="mb-4">
            <Card className="educacion-card h-100 shadow-sm">
              <Card.Body className="d-flex flex-column">
                <Card.Title className="mb-3">
                  <h3>📺 Síguenos en YouTube</h3>
                </Card.Title>
                <Card.Text className="mb-4 flex-grow-1">
                  Tokenova ofrece llamadas comunitarias semanales y videos de nuestra academia para ayudarte 
                  a entender nuestro ecosistema. ¡Únete a la conversación!
                </Card.Text>
                <Button variant="primary" href="#" className="mt-auto">
                  Ver YouTube
                </Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        {/* Sección de Conceptos Clave */}
        <Row className="mb-5">
          <Col lg={12}>
            <h2 className="mb-4">Conceptos Clave</h2>
          </Col>
        </Row>

        <Row className="mb-5">
          <Col lg={4} md={6} className="mb-4">
            <Card className="concept-card h-100 text-center shadow-sm">
              <Card.Body>
                <h5 className="mb-3">🔗 Blockchain</h5>
                <p>
                  Tecnología de libro mayor distribuido que proporciona seguridad, transparencia 
                  y descentralización en las transacciones.
                </p>
              </Card.Body>
            </Card>
          </Col>

          <Col lg={4} md={6} className="mb-4">
            <Card className="concept-card h-100 text-center shadow-sm">
              <Card.Body>
                <h5 className="mb-3">💰 Tokenización</h5>
                <p>
                  Proceso de convertir activos del mundo real, como bienes raíces, en tokens digitales 
                  que se pueden comerciar en plataformas blockchain.
                </p>
              </Card.Body>
            </Card>
          </Col>

          <Col lg={4} md={6} className="mb-4">
            <Card className="concept-card h-100 text-center shadow-sm">
              <Card.Body>
                <h5 className="mb-3">🏠 Bienes Raíces Tokenizados</h5>
                <p>
                  Acciones fraccionadas de propiedades representadas como tokens, permitiendo a cualquiera 
                  invertir en bienes raíces con bajo capital.
                </p>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        {/* Sección de Redes Sociales */}
        <Row className="mb-5 text-center">
          <Col lg={12}>
            <h2 className="mb-4">Síguenos en Redes Sociales</h2>
            <div className="social-links">
              <a href="#" className="btn btn-outline-primary mx-2 mb-2">Facebook</a>
              <a href="#" className="btn btn-outline-primary mx-2 mb-2">Twitter</a>
              <a href="#" className="btn btn-outline-primary mx-2 mb-2">Instagram</a>
              <a href="#" className="btn btn-outline-primary mx-2 mb-2">LinkedIn</a>
              <a href="#" className="btn btn-outline-primary mx-2 mb-2">Discord</a>
              <a href="#" className="btn btn-outline-primary mx-2 mb-2">Telegram</a>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Educacion;
