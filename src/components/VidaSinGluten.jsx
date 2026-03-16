import React, { useEffect } from 'react';
import CustomBreadcrumb from './CustomBreadcrumb';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const tips = [
  {
    title: '¿Qué es la celiaquía?',
    text: 'La celiaquía es una intolerancia permanente al gluten, una proteína presente en trigo, avena, cebada y centeno. Afecta la absorción de nutrientes y requiere una dieta estricta sin gluten.'
  },
  {
    title: '¿Qué alimentos evitar?',
    text: 'Evita panificados, pastas, cervezas y productos que contengan trigo, avena, cebada o centeno. Lee siempre las etiquetas y busca productos certificados sin TACC.'
  },
  {
    title: 'Opciones seguras',
    text: 'Frutas, verduras, carnes, huevos, legumbres y productos especialmente elaborados sin gluten son seguros. Existen harinas alternativas como arroz, maíz, mandioca y almendra.'
  },
  {
    title: 'Contaminación cruzada',
    text: 'Evita la contaminación cruzada usando utensilios y superficies limpias. No mezcles alimentos sin gluten con otros que sí lo contienen.'
  },
  {
    title: 'Tips para comer afuera',
    text: 'Al comer afuera, asegúrate de pedir opciones sin gluten o que no hayan sido contaminadas. Busca restaurantes que ofrezcan menús sin gluten o que puedan adaptar platos.'
  },
  {
    title: 'Fibras y una dieta sin gluten',
    text: 'Una dieta sin gluten puede ser rica en fibra si se incluyen frutas, verduras, legumbres y productos sin gluten. Asegúrate de consumir alimentos ricos en fibra para mantener una buena salud digestiva.'
  },
  {
    title: 'Consejos para ir de vacaciones',
    text: 'Ser celiaco no nos impide a tener unas lindas vacaciones por eso les contamos las siguientes recomendaciones para el momento de ir de vacaciones a algún lugar.'
  },
  {
    title: '¿Cómo actuar en el colegio con un niño celíaco?',
    text: 'Muchas veces no sabemos como reaccionar cuando los niños diagnosticados celiacos van al colegio, ¿que pueden comer? ¿sabrán que es celiaco? …'
  },
  {
    title: 'Diagnostican cada vez a más gente con sensibilidad al gluten, pero no son celíacos',
    text: 'Cada vez más personas son diagnosticadas con sensibilidad al gluten, pero no son celíacos. Esto implica que deben seguir una dieta sin gluten, aunque no tengan la enfermedad celiaca.'
  }
];

const VidaSinGluten = () => {
  const navigate = useNavigate();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);
  return (
    <Container className="py-5">
      {/* <CustomBreadcrumb /> */}
      {/* <h2 style={{ marginTop: '40px', marginBottom: '34px' }}>Contacto</h2> */}
      <h2 style={{ marginTop: '40px', marginBottom: '34px' }}>Vida sin Gluten</h2>
      {/* <h1 className="mb-4 text-center">Vida Sin Gluten</h1> */}
      <p className="lead text-center mb-5">
        Consejos e información para quienes eligen o necesitan una alimentación libre de gluten.
      </p>
      <Row className="g-4 mb-5">
        {tips.map((tip, idx) => (
          <Col md={6} lg={4} key={idx}>
            <Card className="h-100 shadow-sm">
              <Card.Body>
                <Card.Title>{tip.title}</Card.Title>
                <Card.Text>{tip.text}</Card.Text>
                {tip.title === 'Tips para comer afuera' && (
                  <button className="btn btn-outline-primary mt-2" onClick={() => navigate('/vida-sin-gluten/tips-para-comer-afuera')}>
                    Conoce más
                  </button>
                )}

                {tip.title === 'Fibras y una dieta sin gluten' && (
                  <button className="btn btn-outline-primary mt-2" onClick={() => navigate('/vida-sin-gluten/fibras-dieta-sin-gluten')}>
                    Conoce más
                  </button>
                )}

                {tip.title === 'Consejos para ir de vacaciones' && (
                  <button className="btn btn-outline-primary mt-2" onClick={() => navigate('/vida-sin-gluten/consejos-para-vacaciones')}>
                    Conoce más
                  </button>
                )}

                {tip.title === '¿Cómo actuar en el colegio con un niño celíaco?' && (
                  <button className="btn btn-outline-primary mt-2" onClick={() => navigate('/vida-sin-gluten/colegio-alumno-celiaco')}>
                    Conoce más
                  </button>
                )}
                 {tip.title === 'Diagnostican cada vez a más gente con sensibilidad al gluten, pero no son celíacos' && (
                  <button className="btn btn-outline-primary mt-2" onClick={() => navigate('/vida-sin-gluten/diagnostico-sensibilidad-gluten')}>
                    Conoce más
                  </button>
                )}

              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
{/*       <div className="text-center">
        <h2 className="mb-3">Recetas destacadas</h2>
        <p>Descubre recetas sin gluten para cada momento del día:</p>
        <ul className="list-unstyled d-inline-block text-start">
          <li>• Pan de molde sin gluten</li>
          <li>• Budín de chocolate</li>
          <li>• Alfajores de maicena</li>
          <li>• Galletitas dulces</li>
          <li>• Bizcochuelo de vainilla</li>
        </ul>
        <div className="mt-4">
          <a href="https://santamariaproductos.com.ar/recetas/" target="_blank" rel="noopener noreferrer" className="btn btn-primary">
            Ver más recetas
          </a>
        </div>
      </div> */}
    </Container>
  );
};

export default VidaSinGluten;
