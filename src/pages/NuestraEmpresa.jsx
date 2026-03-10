import React from 'react';
import { Container } from 'react-bootstrap';
import { useEffect } from 'react';

const NuestraHistoria = () => {
      useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }, []);
  return (
    <Container className="py-5 site-content">
      <h1 className="mb-4">Empresa</h1>

      <h2 className="mt-4">Nuestra historia</h2>
      {/* <p>
        Desde nuestros inicios, nos propusimos construir una empresa centrada en las personas y en la calidad.
        Comenzamos como un pequeño equipo con la convicción de que la innovación y el compromiso social
        podían convivir con un enfoque empresarial sólido. A lo largo de los años fuimos creciendo de forma
        sostenida, ampliando nuestros servicios y perfeccionando procesos sin perder la identidad que nos define.
      </p> */}
      <p>Allay sin gluten nació con el objetivo de brindar soluciones alimenticias seguras y deliciosas para personas con celiaquía y sensibilidad al gluten.</p>

      <h2 className="mt-4">Crecimiento con propósito</h2>
      <p>
        Nuestro crecimiento se apoyó en la adopción de buenas prácticas, la inversión en talento y la
        implementación de estándares de calidad que garantizan la confianza de clientes y colaboradores.
        Cada paso estuvo guiado por una política de mejora continua que hoy nos permite ofrecer soluciones
        confiables y competitivas.
      </p>

      <h2 className="mt-4">Compromiso social y ambiental</h2>
      <p>
        Entendemos que el éxito empresarial va de la mano de la responsabilidad social. Por eso impulsamos
        iniciativas locales de integración, formación y apoyo comunitario, y adoptamos medidas para reducir
        nuestro impacto ambiental. Creemos en el valor de devolver a la comunidad parte de lo recibido.
      </p>

      <h2 className="mt-4">Mirando hacia el futuro</h2>
      <p>
        Hoy miramos al futuro con la misma pasión que nos trajo hasta aquí: innovando, cuidando a nuestro
        equipo y manteniendo la calidad como principio innegociable. Seguiremos adaptándonos a los cambios
        para seguir siendo aliados confiables de nuestros clientes y promotores de un desarrollo sostenible.
      </p>

        
      <h2 className="mt-4">Política de calidad</h2>
      <p>Garantizamos la calidad de nuestros productos mediante estrictos controles, selección de materias primas certificadas y mejora continua. Nuestro objetivo es ofrecer alimentos seguros, ricos y confiables para todos.</p>
        


    </Container>
  )};

export default NuestraHistoria;
