import React from 'react';
import { Container } from 'react-bootstrap';

const PoliticaCalidad = () => {
  return (
    <Container className="py-5 site-content">
      <h1 className="mb-4">Política de calidad</h1>

      <p>
        En nuestra empresa la calidad es un compromiso permanente y transversal a todas las actividades.
        Buscamos satisfacer las expectativas de nuestros clientes mediante procesos estandarizados,
        el uso de buenas prácticas y la mejora continua.
      </p>

      <h2 className="mt-4">Principios rectores</h2>
      <ul>
        <li>Orientación al cliente: entendemos sus necesidades y trabajamos para superarlas.</li>
        <li>Mejora continua: promovemos la revisión sistemática de procesos y la adopción de mejores prácticas.</li>
        <li>Cumplimiento normativo: respetamos la legislación aplicable y los requisitos contractuales.</li>
        <li>Gestión de riesgos: identificamos y mitigamos riesgos que puedan afectar la calidad.</li>
        <li>Formación y desarrollo: impulsamos la capacitación de nuestro equipo para asegurar competencias adecuadas.</li>
      </ul>

      <h2 className="mt-4">Objetivos de calidad</h2>
      <p>
        Establecemos objetivos medibles que abarcan la satisfacción del cliente, la reducción de no conformidades,
        la mejora de tiempos de entrega y la eficiencia operativa. Estos objetivos se revisan periódicamente
        y se comunican a todo el personal.
      </p>

      <h2 className="mt-4">Responsabilidades</h2>
      <p>
        La alta dirección garantiza los recursos necesarios y define la política. Cada colaborador es responsable
        de aplicar y respetar los procesos y controles definidos. Además fomentamos la participación y la comunicación
        para detectar oportunidades de mejora.
      </p>

      <h2 className="mt-4">Compromiso con la sostenibilidad</h2>
      <p>
        Integramos prácticas que reducen nuestro impacto ambiental y promovemos iniciativas socialmente responsables
        en nuestras comunidades de actuación.
      </p>

      <p className="mt-4">
        Esta política se comunica a todos los miembros de la organización y está disponible para las partes interesadas.
      </p>
    </Container>
  );
};

export default PoliticaCalidad;
