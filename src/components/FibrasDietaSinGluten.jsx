
import React from 'react';
import { Container } from 'react-bootstrap';
import { useEffect } from 'react';

const FibrasDietaSinGluten = () => {
    useEffect(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, []);
    return (
  <Container className="py-5">
    <h1 className="mb-4 text-center">Fibras y una dieta sin gluten</h1>
    <p>
      Una dieta sin gluten puede ser saludable y equilibrada, pero es importante prestar atención al consumo de fibra, ya que muchos productos sin gluten industriales suelen tener menos fibra que sus equivalentes con gluten. La fibra es fundamental para la salud digestiva y el bienestar general.
    </p>
    <h4 className="mt-4">¿Por qué es importante la fibra?</h4>
    <p>
      La fibra ayuda a regular el tránsito intestinal, previene el estreñimiento y contribuye a mantener una microbiota intestinal saludable. Además, ayuda a controlar los niveles de glucosa y colesterol en sangre.
    </p>
    <h4 className="mt-4">¿Dónde encontrar fibra en una dieta sin gluten?</h4>
    <ul>
      <li>Frutas y verduras frescas: manzanas, peras, naranjas, zanahorias, brócoli, espinaca, etc.</li>
      <li>Legumbres: lentejas, garbanzos, porotos, arvejas.</li>
      <li>Frutos secos y semillas: nueces, almendras, semillas de chía y lino.</li>
      <li>Cereales y pseudocereales sin gluten: arroz integral, maíz, quinoa, amaranto, mijo, trigo sarraceno.</li>
      <li>Productos específicos sin gluten enriquecidos con fibra (consultar etiquetas).</li>
    </ul>
    <h4 className="mt-4">Consejos para aumentar la fibra en tu dieta sin gluten</h4>
    <ul>
      <li>Incluye frutas y verduras en cada comida.</li>
      <li>Prefiere cereales integrales y pseudocereales naturalmente libres de gluten.</li>
      <li>Agrega legumbres a tus ensaladas, guisos o sopas.</li>
      <li>Elige snacks saludables como frutas frescas, frutos secos o barritas sin gluten con semillas.</li>
      <li>Bebe suficiente agua para acompañar el aumento de fibra.</li>
    </ul>
    <p className="mt-4">
      Recuerda que una dieta sin gluten no tiene por qué ser baja en fibra. Con una buena selección de alimentos naturales y variados, puedes cubrir tus necesidades nutricionales y disfrutar de una alimentación saludable.
    </p>
    <div className="mt-4 text-center">
      <a href="https://santamariaproductos.com.ar/vida-sin-gluten/fibras-y-una-dieta-sin-gluten/" target="_blank" rel="noopener noreferrer" className="btn btn-primary">
        Más información sobre fibras y dieta sin gluten
      </a>
    </div>
  </Container>
)};

export default FibrasDietaSinGluten;
