import React from 'react';
import './Productos.css';
import { Container } from 'react-bootstrap';
import Product_List_v01 from './Product_List_v01';
import { useEffect } from 'react';

const Productos = () => {
      useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }, []);
  return (
    <Container className="productos-container">
      <h2>Productos</h2>
      <Product_List_v01 />
    </Container>
  );
};

export default Productos;
