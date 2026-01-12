import React from 'react';
import { Container } from 'react-bootstrap';

const ComoFunciona = () => {
  return (
    <Container className="py-5">
      <h1>Cómo funciona — RMM explicado para Tokenona</h1>

      <p>
        RMM (la plataforma de colateralización integrada con Tokenona) permite a
        titulares de tokens usar sus activos como garantía, prestar o aportar
        liquidez para obtener rendimiento. Está basado en mecanismos DeFi
        probados (Aave) y equilibra proveedores de liquidez y prestatarios mediante
        tasas dinámicas.
      </p>

      <h2>1. Para proveedores de liquidez (lenders)</h2>
      <p>
        Cuando depositas un activo en RMM recibes un token de depósito (ArmmToken)
        que representa tu participación 1:1 y que acumula interés de forma
        continua. Puedes transferir estos tokens a otras direcciones y canjearlos
        por la liquidez subyacente en cualquier momento, sujeto a disponibilidad
        de mercado.
      </p>

      <h2>2. Depositar y ganar rendimiento</h2>
      <p>
        Selecciona el activo y la cantidad que quieras depositar. La plataforma
        utiliza los fondos para prestar a prestatarios, y las tasas de interés
        que estos pagan se redistribuyen entre los proveedores de liquidez
        según la utilización del mercado. Las ganancias se reflejan en tu saldo
        casi en tiempo real.
      </p>

      <h2>3. Para prestatarios</h2>
      <p>
        Puedes pedir prestado usando RealTokens u otros activos como colateral.
        El máximo que puedes pedir prestado depende del colateral depositado y
        del ratio de colateralización. Las tasas pueden ser estables o variables
        según prefieras — cada opción tiene sus ventajas y riesgos.
      </p>

      <h2>4. Salud de la posición y liquidaciones</h2>
      <p>
        El "Health Factor" mide la relación entre tu colateral y tu deuda. Si baja
        por debajo del umbral de liquidación, parte de tu colateral puede ser
        liquidado para cubrir la deuda (con una penalización aplicada). Para
        reducir el riesgo: puedes devolver deuda parcial o aportar más colateral.
      </p>

      <h2>5. Ejemplos sencillos</h2>
      <p>
        - Depósitos y retiros: si la liquidez disponible en el mercado es baja,
        es posible retirar parcialmente y esperar a que nuevos depósitos
        liberen fondos.
      </p>
      <p>
        - Préstamos con apalancamiento: usando colateral puedes aumentar tu
        exposición; esto puede mejorar la rentabilidad pero también aumenta el
        riesgo de liquidación si los precios fluctúan.
      </p>

      <h2>¿Cómo empezar en Tokenona?</h2>
      <ol>
        <li>Abre tu cuenta y completa la verificación requerida.</li>
        <li>En el dashboard, ve a la sección RMM y elige depositar o pedir prestado.</li>
        <li>Monitoriza tu Health Factor y las tasas para gestionar el riesgo.</li>
      </ol>

      <hr />
      <p className="small text-muted">
        Contenido adaptado y localizado para Tokenona (versión resumida y reescrita
        para claridad). Si quieres la traducción literal del artículo original,
        dímelo y la añadiré como referencia separada.
      </p>
    </Container>
  );
};

export default ComoFunciona;
