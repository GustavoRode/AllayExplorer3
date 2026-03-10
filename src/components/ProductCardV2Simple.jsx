import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, Button } from 'react-bootstrap';
import './ProductV2.css';

const ProductCardV2Simple = ({ product }) => {
  const navigate = useNavigate();
  const tokensTotal = product.stock ?? 0;

  return (
    <Card className="product-card-v2 h-100 mb-3">
      <div className="card-media">
        <img src={product.image} alt={product.title} className="card-img img-fluid" />
      </div>
      <Card.Body className="d-flex flex-column">
        <div className="d-flex justify-content-between align-items-start mb-2">
          <Card.Title className="mb-0 product-title">{product.title}</Card.Title>
        </div>
        <Card.Text className="text-muted small mb-3">{product.description?.slice(0, 120)}...</Card.Text>
        <div className="mt-auto">
          <Button size="sm" variant="primary" className="w-100" onClick={() => navigate(`/productos/${product.id}`)}>
            Conoce más! {product.codProd}
          </Button>
        </div>
        {/* El contenido expandido se eliminó, ahora solo navega al detalle */}
      </Card.Body>
    </Card>
  );
};

export default ProductCardV2Simple;
