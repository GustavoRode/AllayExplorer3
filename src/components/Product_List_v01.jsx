import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Form, InputGroup, Button, Spinner } from 'react-bootstrap';
import ProductCardV2Simple from './ProductCardV2Simple';
import './ProductV2.css';

const Product_List_v01 = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let mounted = true;
    const url = 'https://69aedb7dc8b37f499836bf53.mockapi.io/catalog';
    fetch(url)
      .then((r) => r.json())
      .then((data) => {
        if (!mounted) return;
        setProducts(data);
        setLoading(false);
      })
      .catch((e) => {
        console.error(e);
        setError('No se pudo cargar el listado de productos.');
        setLoading(false);
      });
    return () => { mounted = false; };
  }, []);

  // No filters or sorting, just show products as returned
  const sorted = products;

  return (
    <Container className="py-5 px-0 px-md-4" fluid>
      <Row>
        <Col lg={9}>
          <div className="d-flex justify-content-between align-items-center mb-3"></div>
          {error && (
            <div className="alert alert-danger mt-4">{error}</div>
          )}
          {loading && !error ? (
            <div className="text-center py-5"><Spinner animation="border" /></div>
          ) : null}
          {!loading && !error && (
            <Row xs={2} sm={2} md={2} lg={4} className="g-2">
              {sorted.map(product => {
                try {
                  return (
                    <Col key={product.id}>
                      <ProductCardV2Simple product={product} />
                    </Col>
                  );
                } catch (err) {
                  return (
                    <Col key={product.id}>
                      <div className="alert alert-warning">Error al mostrar el producto.</div>
                    </Col>
                  );
                }
              })}
            </Row>
          )}
          {!loading && !error && sorted.length === 0 && (
            <div className="alert alert-info mt-4">No hay productos disponibles.</div>
          )}
        </Col>
      </Row>
    </Container>
  );
};

export default Product_List_v01;
