import React, { useEffect } from 'react';
import { Container, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const TipsComerAfuera = () => {
    const navigate = useNavigate();
    useEffect(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, []);
    return (
  <Container className="py-5">
    <div className="d-flex align-items-center mb-3" style={{ marginTop: '60px' }}>
      <Button variant="outline-secondary" size="sm" onClick={() => navigate(-1)}>
        &#8592; Volver
      </Button>
    </div>
    <h1 className="mb-4 text-center">Tips para comer afuera</h1>
    <p>Salir a comer fuera de casa puede ser un desafío para quienes deben seguir una dieta libre de gluten. Aquí te dejamos algunos consejos para disfrutar de una comida segura y placentera:</p>
    <ul>
      <li><strong>Infórmate antes de salir:</strong> Averigua si el restaurante ofrece opciones sin gluten y si conocen sobre la celiaquía.</li>
      <li><strong>Comunica tus necesidades:</strong> Al llegar, informa al personal que eres celíaco o intolerante al gluten y explica la importancia de evitar la contaminación cruzada.</li>
      <li><strong>Pregunta por la preparación:</strong> Consulta cómo preparan los alimentos, si usan utensilios y superficies exclusivas para sin gluten y si los ingredientes están certificados.</li>
      <li><strong>Evita las frituras compartidas:</strong> No consumas alimentos fritos en aceites donde también se cocinan productos con gluten.</li>
      <li><strong>Elige platos simples:</strong> Prefiere carnes, pescados, verduras y ensaladas frescas, evitando salsas y aderezos dudosos.</li>
      <li><strong>Lleva tus propios productos:</strong> Si tienes dudas, puedes llevar pan o galletas sin gluten para acompañar tu comida.</li>
      <li><strong>Lee la carta con atención:</strong> Busca el símbolo sin TACC o pregunta por la lista de alérgenos.</li>
      <li><strong>Confía en tu intuición:</strong> Si no te sientes seguro, es mejor elegir otro lugar.</li>
    </ul>
    <p className="mt-4">¡Comer afuera también puede ser una experiencia segura y deliciosa!</p>
  </Container>
)};

export default TipsComerAfuera;
