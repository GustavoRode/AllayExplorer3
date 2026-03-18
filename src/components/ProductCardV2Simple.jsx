import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, Button } from 'react-bootstrap';
import './ProductV2.css';

const ProductCardV2Simple = ({ product }) => {
  const navigate = useNavigate();
  const tokensTotal = product.stock ?? 0;

  const handleLearnMore = () => {
    navigate(`/productos/${product.id}`);
  };

  return (
    <Card className="product-card-v2 h-100">
      <div className="card-media">
        <img
          src={product.image}
          alt={product.title}
          className="card-img img-fluid product-img-marco"
          role="button"
          tabIndex={0}
          style={{ cursor: 'pointer' }}
          onClick={handleLearnMore}
          onKeyPress={e => { if (e.key === 'Enter' || e.key === ' ') handleLearnMore(); }}
        />
      </div>
      <Card.Body className="d-flex flex-column">
        <div className="d-flex justify-content-between align-items-start mb-2">
          <Card.Title className="mb-0 product-title">{product.title}</Card.Title>
        </div>
        <Card.Text className="text-muted small mb-1">{product.description?.slice(0, 120)}...</Card.Text>
        <div className="mt-auto">
          <Button size="sm" variant="primary" className="w-100" onClick={handleLearnMore}>
            Conoce más
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
};

export default ProductCardV2Simple;
