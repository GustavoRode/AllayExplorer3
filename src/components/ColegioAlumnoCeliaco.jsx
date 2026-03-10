import React from 'react';
import { Container } from 'react-bootstrap';
import { useEffect } from 'react';

const ColegioAlumnoCeliaco = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);
  return (
  <Container className="py-5">
    <h1 className="mb-4 text-center">¿Cómo actuar en el colegio con un niño celíaco?</h1>
    <p>
      Cuando un niño celíaco asiste al colegio, es fundamental que toda la comunidad educativa esté informada y comprometida para garantizar su bienestar y seguridad alimentaria. Aquí tienes algunos consejos y pautas para actuar correctamente:
    </p>
    <h4 className="mt-4">Comunicación y concientización</h4>
    <ul>
      <li>Informar a directivos, docentes y personal de comedor sobre la condición del niño.</li>
      <li>Explicar la importancia de evitar la contaminación cruzada y de respetar la dieta sin gluten.</li>
      <li>Promover charlas o talleres para que los compañeros comprendan la celiaquía y puedan acompañar al niño.</li>
    </ul>
    <h4 className="mt-4">Organización de las comidas</h4>
    <ul>
      <li>Si el niño lleva vianda, asegurarse de que esté bien identificada y separada de otros alimentos.</li>
      <li>En caso de comedor escolar, coordinar con el personal para que preparen o sirvan alimentos sin gluten de forma segura.</li>
      <li>Supervisar que los utensilios y superficies estén limpios y no se mezclen con alimentos con gluten.</li>
    </ul>
    <h4 className="mt-4">Actividades y celebraciones</h4>
    <ul>
      <li>En cumpleaños, eventos o salidas escolares, prever opciones sin gluten para que el niño pueda participar plenamente.</li>
      <li>Consultar siempre a la familia sobre productos aptos y marcas seguras.</li>
    </ul>
    <h4 className="mt-4">Acompañamiento emocional</h4>
    <ul>
      <li>Fomentar la inclusión y evitar que el niño se sienta diferente o excluido por su dieta.</li>
      <li>Escuchar sus inquietudes y acompañarlo en la adaptación a la vida escolar.</li>
    </ul>
    <p className="mt-4">
      Con información, empatía y organización, el colegio puede ser un espacio seguro y feliz para los niños celíacos.
    </p>
    <div className="mt-4 text-center">
      <a href="https://santamariaproductos.com.ar/vida-sin-gluten/como-actuar-en-el-colegio-con-un-nino-celiaco/" target="_blank" rel="noopener noreferrer" className="btn btn-primary">
        Más información sobre celiaquía en el colegio
      </a>
    </div>
  </Container>
)};

export default ColegioAlumnoCeliaco;
