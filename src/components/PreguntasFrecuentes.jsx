import React, { useState } from 'react';
import { Container, Row, Col, Accordion, Card } from 'react-bootstrap';
import { Helmet } from 'react-helmet';
import './PreguntasFrecuentes.css';

const PreguntasFrecuentes = () => {
  const faqData = [
    {
      category: 'Guía Inicio Rápido',
      questions: [
        {
          q: '¿Qué es Tokenova? ¿Quién puede invertir? ¿Cómo invierto?',
          a: 'Tokenova revoluciona los bienes raíces al ofrecer acciones de propiedades tokenizadas desde solo $50, permitiendo inversiones rápidas, fáciles y líquidas. Cualquier persona mayor de 18 años puede invertir en Tokenova en la mayoría de países. Para invertir, simplemente: 1) Crea una cuenta y verifica tu identidad, 2) Conecta tu cartera o usa la Cartera Tokenova, 3) Explora propiedades en el Marketplace, 4) Compra los tokens que desees.'
        },
        {
          q: '¿Cómo funciona el ingreso semanal y cómo vendo mis RealTokens?',
          a: 'Recibes ingresos semanales de rentas con opciones para recibir stablecoins, tokens que generan intereses, o una función de reinversión automática. Puedes vender fácilmente tus tokens a través de plataformas como YAM u otros mercados secundarios de la plataforma.'
        },
        {
          q: '¿Cómo se administran las propiedades?',
          a: 'Tokenova se asocia con profesionales locales para la gestión de propiedades, manejando alquileres, recopilación de ingresos y mantenimiento, asegurando una supervisión de primera clase. Esto permite a Tokenova enfocarse en expandirse globalmente.'
        },
        {
          q: '¿Puedo regalar tokens a alguien?',
          a: 'Sí. Puedes regalar tokens seleccionando una propiedad, marcándola como regalo en el checkout, e ingresando los detalles del destinatario. ¡Incluso puedes agregar un mensaje personal!'
        },
        {
          q: '¿Puedo invertir con mi empresa?',
          a: 'Sí. Puedes registrar tu empresa en nuestro sitio web para invertir en bienes raíces tokenizados, proporcionando detalles de la empresa y documentos legales.'
        }
      ]
    },
    {
      category: 'Gestión de Carteras',
      questions: [
        {
          q: '¿Qué es la Cartera Tokenova? ¿Cómo uso RMM o YAM con ella?',
          a: 'La Cartera Tokenova es nuestra cartera criptográfica interna asegurada con tu inicio de sesión social o correo. Diseñada para principiantes, incluye autenticación multifactor y garantiza que nunca pierdas acceso a tus fondos. Funciona con el protocolo Aave para RMM (gestión de liquidez).'
        },
        {
          q: '¿Qué es una "cartera"? ¿Por qué necesito una?',
          a: 'Una cartera es donde almacenas tus tokens y criptomonedas de forma segura. Tienes opciones: carteras calientes (conectadas en línea), carteras frías (sin conexión, más seguras), contratos multi-firma, o nuestra Cartera Tokenova amigable para principiantes.'
        },
        {
          q: '¿Cómo muestro mis tokens de Tokenova en MetaMask?',
          a: 'Los tokens de Tokenova no se muestran por defecto en MetaMask. Puedes agregarlos en 3 pasos: 1) Obtén el contrato del token, 2) En MetaMask, ve a Importar Tokens, 3) Ingresa los detalles del contrato. Ahora aparecerán en tu cartera.'
        },
        {
          q: '¿Cómo protejo mis tokens con una cartera de hardware?',
          a: 'Usa carteras de hardware como Ledger, Trezor o Tangem. Estas mantienen tus claves privadas fuera de línea, ofreciendo máxima seguridad incluso si tu computadora se ve comprometida.'
        },
        {
          q: '¿Cómo protejo mis tokens con una caja fuerte digital?',
          a: 'Las cuentas de caja fuerte digital (Safe) son gratuitas y fáciles de configurar. Protegen tus activos requiriendo múltiples direcciones de confirmación, ofreciendo seguridad adicional con un simple click.'
        }
      ]
    },
    {
      category: 'Blockchain y Técnica',
      questions: [
        {
          q: '¿Qué es un token? ¿Qué es "tokenización"?',
          a: 'Los tokens en blockchain pueden representar cualquier cosa, determinado por el emisor. Así, activos del mundo real como bienes raíces, dólares u oro pueden ser comercializados, invertidos, prestados u obtenidos en blockchain. Normalmente, la propiedad se representa con papel; la tokenización convierte esto en un token digital, fraccionándolo para que muchos puedan poseer partes del mismo activo.'
        },
        {
          q: '¿Qué es una cadena de bloques (blockchain)?',
          a: 'Las criptomonedas como Bitcoin y Ethereum usan tecnología blockchain: una lista de transacciones que cualquiera puede ver y verificar. El blockchain de Bitcoin contiene un registro de cada transacción de Bitcoin. Esto permite transferir valor en línea sin intermediarios como bancos.'
        },
        {
          q: '¿Qué es un hash de transacción?',
          a: 'Cada transacción en la blockchain tiene un identificador único llamado hash. Lo encuentras en tu aplicación wallet (MetaMask, Cartera Tokenova, etc.) o en exploradores blockchain. El hash se genera automáticamente después de enviar tus tokens.'
        },
        {
          q: '¿Cómo envío mis tokens de Ethereum a Gnosis Chain?',
          a: 'Usa nuestro bridge en https://bridge.realtoken.network/: 1) Selecciona la opción de tokens, 2) Elige si quieres transferir de Ethereum a Gnosis Chain o vice versa, 3) Busca los tokens por nombre o dirección de contrato.'
        },
        {
          q: '¿Cómo envío criptomonedas de Gnosis Chain a otra red o a moneda fiduciaria?',
          a: 'Para convertir a moneda fiduciaria, usa Mt Pelerin. Para transferir a otra red (Polygon, Binance Chain, etc.), usa puentes como CrossCurve o Jumper.'
        }
      ]
    },
    {
      category: 'Mercado Secundario',
      questions: [
        {
          q: '¿Qué es YAM? ¿Cómo funciona la lista blanca?',
          a: 'YAM es el mercado secundario para tokens de Tokenova, permitiéndote comprar y vender tokens de forma segura las 24/7. La legislación requiere que Tokenova sepa quién posee los tokens en blockchain. Las direcciones blockchain deben estar registradas en tu cartera de propiedades en el sitio web para comerciar libremente.'
        },
        {
          q: '¿Cómo envío mis tokens de vuelta a Tokenova usando MetaMask?',
          a: 'Requiere: 1) Ya creaste una orden de venta y fue aceptada, 2) Tienes Ether o xDAI en tu cartera para pagar gas. Luego, desde MetaMask, envía los tokens de vuelta a la dirección especificada en la plataforma.'
        },
        {
          q: '¿Cómo pago la deuda de RMM desde otra dirección?',
          a: 'Puedes repagar fondos del RMM v3 desde cualquier dirección de Gnosis Chain interactuando directamente con el contrato inteligente: 1) Autoriza el RMM a usar tus stablecoins, 2) Conéctate al contrato inteligente RMM v3, 3) Ingresa el monto y la dirección beneficiaria.'
        }
      ]
    },
    {
      category: 'Tokens Especiales',
      questions: [
        {
          q: '¿Qué es el token REG?',
          a: 'REG (RealToken Ecosystem Governance) es el token de gobernanza para el RealToken DAO. Viene con derechos y utilidad que se expandirán con el tiempo, permitiéndote participar en la toma de decisiones descentralizada de Tokenova.'
        },
        {
          q: '¿Qué es REUSD?',
          a: 'REUSD (RealToken Ecosystem USD) es un token estable creado por RealT. Cada token REUSD representa exactamente $1 que puedes usar en la plataforma para comprar propiedades. Diseñado para permitir a inversores recibir devoluciones si las inversiones no salen como se planificó.'
        },
        {
          q: '¿Qué puedo hacer con mis tokens de Tokenova? ¿Puedo usarlos como garantía?',
          a: 'Además de ingresos semanales, puedes usar tus tokens como garantía en el RMM (protocolo basado en Aave) para ganar intereses. Los prestadores de liquidez obtienen la capacidad de ganar intereses y retornos de ingresos pasivos mientras proporcionan liquidez.'
        }
      ]
    },
    {
      category: 'Impuestos',
      questions: [
        {
          q: '¿Qué debo saber sobre impuestos en mis inversiones en Tokenova?',
          a: 'Tokenova no puede proporcionar asesoramiento fiscal individual; consulta a tu preparador de impuestos local. En EE.UU., Tokenova gestiona acciones fiscales corporativas, clasificando distribuciones como rendimiento de capital o dividendos, detallado en tu Resumen de Fin de Año e Informes Fiscales anuales.'
        },
        {
          q: '¿Qué debo saber sobre los impuestos a la propiedad en EE.UU.?',
          a: 'Esta información cubre impuestos a la propiedad, embargos, certificados de ejecución hipotecaria y planes de pago de impuestos estatales según se relate a propiedades listadas en Tokenova. Los detalles específicos están disponibles en nuestro FAQ completo.'
        }
      ]
    },
    {
      category: 'DAO de Tokenova',
      questions: [
        {
          q: '¿Qué es un DAO?',
          a: 'DAO (Organización Autónoma Descentralizada) es una estructura organizacional basada en blockchain donde las reglas de gobernanza están codificadas en contratos inteligentes. Permite toma de decisiones colectiva y transparente sin autoridad central, con participación de cualquiera que respete las reglas comunes.'
        },
        {
          q: '¿Qué es el RealToken DAO?',
          a: 'El RealToken DAO es una comunidad descentralizada donde los poseedores del token REG pueden participar en decisiones sobre la evolución de protocolos y proyectos. Es el futuro de Tokenova: gobernanza colectiva por y para la comunidad.'
        }
      ]
    }
  ];

  return (
    <>
      <Helmet>
        <title>Preguntas Frecuentes - Tokenova</title>
        <meta name="description" content="Respuestas a las preguntas más frecuentes sobre Tokenova, inversiones en bienes raíces tokenizados y blockchain." />
      </Helmet>

      <Container className="faq-container py-5">
        {/* Encabezado */}
        <Row className="mb-5">
          <Col lg={12}>
            <div className="faq-header text-center">
              <h1 className="mb-3">Preguntas Frecuentes</h1>
              <p className="lead">
                Encuentra respuestas a las preguntas más comunes sobre Tokenova, inversión inmobiliaria 
                tokenizada y blockchain.
              </p>
            </div>
          </Col>
        </Row>

        {/* FAQ Accordion */}
        <Row>
          <Col lg={12}>
            {faqData.map((section, sectionIndex) => (
              <div key={sectionIndex} className="mb-5">
                <h3 className="mb-3 section-title">{section.category}</h3>
                <Accordion className="faq-accordion">
                  {section.questions.map((item, itemIndex) => (
                    <Accordion.Item 
                      eventKey={`${sectionIndex}-${itemIndex}`} 
                      key={`${sectionIndex}-${itemIndex}`}
                      className="faq-item"
                    >
                      <Accordion.Header className="faq-question">
                        {item.q}
                      </Accordion.Header>
                      <Accordion.Body className="faq-answer">
                        {item.a}
                      </Accordion.Body>
                    </Accordion.Item>
                  ))}
                </Accordion>
              </div>
            ))}
          </Col>
        </Row>

        {/* Contacto */}
        <Row className="mt-5 pt-5 border-top">
          <Col lg={12} className="text-center">
            <h3 className="mb-3">¿No encontraste tu respuesta?</h3>
            <p className="mb-4">
              Si tienes más preguntas, no dudes en contactar con nuestro equipo de soporte.
            </p>
            <a href="mailto:support@tokenova.com" className="btn btn-primary btn-lg">
              Enviar Pregunta al Soporte
            </a>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default PreguntasFrecuentes;
