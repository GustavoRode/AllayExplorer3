import React from 'react';
import { Container } from 'react-bootstrap';

const PorQueFunciona = () => {
  return (
    <Container className="py-5">
      <h1>Por qué funciona — mecánicas financieras de la colateralización</h1>

      <p>
        Esta página resume y adapta los conceptos clave sobre por qué la
        colateralización y la opción de apalancamiento pueden aumentar
        potencialmente la rentabilidad de una inversión inmobiliaria tokenizada.
        Contenido adaptado para Tokenona.
      </p>

      <h2>1. Return on Net Asset (RONA)</h2>
      <p>
        El RONA es la rentabilidad operativa esperada de una propiedad: renta neta
        estimada dividida por la inversión total. Tokenona presenta el RONA como
        una medida conservadora del rendimiento esperado, excluyendo otras
        palancas como reapreciaciones o apalancamiento.
      </p>

      <h2>2. Efecto del apalancamiento (Credit Leverage)</h2>
      <p>
        Si un inversor decide usar sus tokens como colateral para pedir prestado,
        puede aumentar el capital disponible para reinvertir y así mejorar la
        rentabilidad promedio. El apalancamiento aumenta potencial de retorno,
        pero también eleva el riesgo de liquidación si los precios o rentas
        caen.
      </p>

      <h2>3. Ganancias por revalorización</h2>
      <p>
        Las revalorizaciones periódicas de las propiedades pueden añadir un
        componente de ganancia de capital que no está incluido en el RONA. Estas
        ganancias dependen de mercados locales y del desempeño operativo del
        activo.
      </p>

      <h2>Conclusión y buenas prácticas</h2>
      <ul>
        <li>Tokenona muestra el RONA como una estimación conservadora de rendimiento.</li>
        <li>El apalancamiento puede aumentar la rentabilidad pero requiere gestión activa del riesgo (Health Factor).</li>
        <li>Combinar reinversión, optimización de costes y monitorización de mercado mejora las probabilidades de éxito.</li>
      </ul>

      <hr />
      <p className="small text-muted">
        Contenido adaptado y resumido desde el artículo original de RealT. Si quieres
        que añada tablas y ejemplos numéricos completos (loops y cálculos), lo
        incluyo en una sección ampliada.
      </p>
    </Container>
  );
};

export default PorQueFunciona;
