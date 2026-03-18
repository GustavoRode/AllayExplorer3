
import React, { useEffect } from 'react';
import { Container, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const ConsejosParaVacaciones = () => {
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
    <h1 className="mb-4 text-center">Consejos para ir de vacaciones sin gluten</h1>
    <p>
      Irse de vacaciones siendo celíaco o llevando una dieta sin gluten requiere organización, pero es totalmente posible disfrutar sin preocupaciones. Aquí tienes algunos consejos prácticos para viajar y comer seguro:
    </p>
    <h4 className="mt-4">Antes de salir</h4>
    <ul>
      <li>Investiga el destino: busca restaurantes, supermercados y tiendas que ofrezcan productos sin gluten.</li>
      <li>Consulta foros y grupos de celíacos para recomendaciones locales.</li>
      <li>Prepara un kit de viaje con snacks, galletas, pan y productos básicos sin gluten.</li>
      <li>Si viajas al exterior, aprende cómo se dice "sin gluten" en el idioma local o lleva tarjetas explicativas.</li>
    </ul>
    <h4 className="mt-4">Durante el viaje</h4>
    <ul>
      <li>En hoteles o alojamientos, consulta si pueden ofrecer opciones sin gluten o si puedes usar la cocina.</li>
      <li>En restaurantes, informa siempre tu condición y pregunta por la preparación y la contaminación cruzada.</li>
      <li>Elige platos simples: carnes, pescados, verduras y frutas frescas suelen ser opciones seguras.</li>
      <li>No dudes en llevar tus propios productos para complementar las comidas.</li>
    </ul>
    <h4 className="mt-4">Tips extra</h4>
    <ul>
      <li>Lleva siempre snacks sin gluten para excursiones o trayectos largos.</li>
      <li>Guarda en tu teléfono una lista de ingredientes prohibidos y permitidos.</li>
      <li>Si tienes dudas, prioriza la seguridad y elige lugares donde te sientas cómodo y comprendido.</li>
    </ul>
    <p className="mt-4">
      ¡Con organización y previsión, las vacaciones pueden ser un momento de disfrute y tranquilidad para todos!
    </p>
    {/* <div className="mt-4 text-center">
      <a href="https://santamariaproductos.com.ar/vida-sin-gluten/consejos-para-ir-de-vacaciones/" target="_blank" rel="noopener noreferrer" className="btn btn-primary">
        Más consejos para vacaciones sin gluten
      </a>
    </div> */}
  </Container>
)};

export default ConsejosParaVacaciones;
