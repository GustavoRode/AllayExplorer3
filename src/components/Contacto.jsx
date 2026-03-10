import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, Alert } from 'react-bootstrap';

// Reemplaza este endpoint por el tuyo de Formspree
const FORMSPREE_ENDPOINT = 'https://formspree.io/f/mkovlrqn';

const Contacto = () => {
  const [form, setForm] = useState({ nombre: '', email: '', mensaje: '' });
  const [enviado, setEnviado] = useState(false);
  const [error, setError] = useState('');

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    setError('');
    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          nombre: form.nombre,
          email: form.email,
          mensaje: form.mensaje
        })
      });
      if (res.ok) {
        setEnviado(true);
        setForm({ nombre: '', email: '', mensaje: '' });
      } else {
        setError('No se pudo enviar el mensaje. Intenta nuevamente.');
      }
    } catch {
      setError('Error de red. Intenta más tarde.');
    }
  };

  return (
    <Container className="py-5" style={{ maxWidth: 600 }}>
      <h2 className="mb-4 text-center">Contacto</h2>
      {enviado && <Alert variant="success">¡Mensaje enviado correctamente!</Alert>}
      {error && <Alert variant="danger">{error}</Alert>}
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="nombre">
          <Form.Label>Ingrese su nombre</Form.Label>
          <Form.Control
            type="text"
            name="nombre"
            value={form.nombre}
            onChange={handleChange}
            required
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="email">
          <Form.Label>Ingrese su eMail</Form.Label>
          <Form.Control
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            required
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="mensaje">
          <Form.Label>Ingrese su mensaje</Form.Label>
          <Form.Control
            as="textarea"
            name="mensaje"
            rows={4}
            value={form.mensaje}
            onChange={handleChange}
            required
          />
        </Form.Group>
        <Button type="submit" variant="primary" disabled={enviado}>
          Enviar
        </Button>
      </Form>
    </Container>
  );
};

export default Contacto;
