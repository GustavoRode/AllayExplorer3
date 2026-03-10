import React from 'react';
import { Card, Button, Modal, Row, Col } from 'react-bootstrap';
import './ProductV2.css';

const Product_Card_v01_old = ({ product, onBuy }) => {
  const [show, setShow] = React.useState(false);
  const tokensTotal = product.stock ?? 0;

  return (
    <>
      <Card className="product-card-v2 h-100">
        <div className="card-media">
          <img src={product.image} alt={product.title} className="card-img img-fluid" />
        </div>

        <Card.Body className="d-flex flex-column">
          <div className="d-flex justify-content-between align-items-start mb-2">
            <Card.Title className="mb-0 product-title">{product.title}</Card.Title>
          </div>

          {/* No expected income */}

          <Card.Text className="text-muted small mb-3">{product.description?.slice(0, 120)}...</Card.Text>

          <div className="mt-auto">
            <Row>
              <Col xs={12} className="text-center">
                <Button size="sm" variant="primary" className="w-100" onClick={() => setShow(true)}>
                  Conoce más
                </Button>
              </Col>
            </Row>
          </div>
        </Card.Body>
      </Card>

      <Modal show={show} onHide={() => setShow(false)} centered size="lg">
        <Modal.Header closeButton>
          <Modal.Title>{product.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Row>
            <Col md={6} className="mb-3 d-flex align-items-center justify-content-center" style={{ minHeight: 220 }}>
              <img src={product.image} alt={product.title} className="img-fluid rounded" style={{ maxHeight: 220, width: 'auto', objectFit: 'contain' }} />
            </Col>
            <Col md={6}>
              <h5>Detalles</h5>
              <p>{product.description}</p>
              <ul className="list-unstyled">
                <li><strong>Stock:</strong> {tokensTotal}</li>
                <li><strong>Categoría:</strong> {product.category}</li>
              </ul>
              <div className="d-flex gap-2 mt-3">
                {/* <Button as="a" href="/comenzar" variant="primary" onClick={() => { setShow(false); if (onBuy) onBuy(product); }}>
                  Comprar
                </Button> */}
                <Button variant="outline-secondary" onClick={() => setShow(false)}>Cerrar</Button>
              </div>
            </Col>
          </Row>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default Product_Card_v01_old;
