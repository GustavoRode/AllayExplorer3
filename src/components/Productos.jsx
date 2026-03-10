import React from 'react';
import './Productos.css';
import { Container, Breadcrumb } from 'react-bootstrap';
import Product_List_v01 from './Product_List_v01';
import { useEffect } from 'react';

const Productos = () => {
      useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }, []);
  return (
    <Container className="productos-container">
      <h1 className="productos-heading">Productos</h1>
      <Breadcrumb className="productos-breadcrumb mb-3">
        <Breadcrumb.Item href="/">Inicio</Breadcrumb.Item>
        <Breadcrumb.Item active>Productos</Breadcrumb.Item>
      </Breadcrumb>
      <Product_List_v01 />
    </Container>
  );
};

export default Productos;
