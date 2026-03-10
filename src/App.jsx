import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import Deals from './components/Deals';
import Essentials from './components/Essentials';
import Login from './components/Login'; 
import ProductDetail from './components/ProductDetail';
import Empresa from './components/Empresa';
import Footer from './components/Footer'
import { CartProvider } from './components/CartContext';
import CrudProductos from './components/CrudProductos';
import Productos from './components/Productos';
import ComoFunciona from './components/ComoFunciona';
import PorQueFunciona from './components/PorQueFunciona';
import Aprender from './components/Aprender';
import Contacto from './components/Contacto';
import SensibilidadAlGluten from './components/SensibilidadAlGluten';
import SobreNosotros from './components/SobreNosotros';
import Empleos from './components/Empleos';
import Blog from './components/Blog';
import Comenzar from './components/Comenzar';
import Cartera from './components/Cartera';
import ProductListV2 from './components/ProductListV2';
import Verificacion from './components/Verificacion';
import DetallesCuenta from './components/DetallesCuenta';
import Logout from './components/Logout';
import Educacion from './components/Educacion';
import PreguntasFrecuentes from './components/PreguntasFrecuentes';
import Introduccion from './components/Introduccion';
import Tutorial from './components/Tutorial';
import NuestraEmpresa from './pages/NuestraEmpresa';
import PoliticaCalidad from './components/PoliticaCalidad';
import RecursosHumanos from './components/RecursosHumanos';
import ResponsabilidadSocial from './components/ResponsabilidadSocial';
import { Helmet } from "react-helmet";
import VidaSinGluten from './components/VidaSinGluten';
import TipsComerAfuera from './components/TipsComerAfuera';
import FibrasDietaSinGluten from './components/FibrasDietaSinGluten';
import ConsejosParaVacaciones from './components/ConsejosParaVacaciones';
import ColegioAlumnoCeliaco from './components/ColegioAlumnoCeliaco';

function App() {

  return (
    <CartProvider>
      <Router basename={import.meta.env.BASE_URL}>
        {/* Helmet global: título y metadatos para toda la app */}
        <Helmet>
          <title>Allay</title>
          <meta 
            name="description" 
            content="Allay." 
          />
          <meta 
            name="keywords" 
            content="Allay, Sin gluten, sin TACC, libre de gluten, libre de TACC, SEO" 
          />
        </Helmet>

        <Header aria-label="Allay" />


   
      <main className="site-content">
        <Routes>
          <Route path="/administracion" element={<Login />} />
          <Route path="/" element={<Home />} />
          <Route path="/deals" element={<Deals />} />
          <Route path="/essentials" element={<Essentials />} />
          <Route path="/crud" element={<CrudProductos />} />
          <Route path="/productos" element={<Productos />} />
          <Route path="/productos/:id" element={<ProductDetail />} />
          <Route path="/como-funciona" element={<ComoFunciona />} />
          <Route path="/por-que-funciona" element={<PorQueFunciona />} />
          <Route path="/porquefunciona" element={<PorQueFunciona />} />
          <Route path="/aprender" element={<Aprender />} />
          <Route path="/educacion" element={<Educacion />} />
          <Route path="/educacion/introduccion" element={<Introduccion />} />
          <Route path="/educacion/tutorial" element={<Tutorial />} />
          <Route path="/preguntas-frecuentes" element={<PreguntasFrecuentes />} />
          <Route path="/sobre-nosotros" element={<SobreNosotros />} />
          <Route path="/pages/nuestra-empresa" element={<NuestraEmpresa />} />
          <Route path="/empresa/politica-calidad" element={<PoliticaCalidad />} />
          <Route path="/empresa/recursos-humanos" element={<RecursosHumanos />} />
          <Route path="/empresa/responsabilidad-social" element={<ResponsabilidadSocial />} />
          <Route path="/empleos" element={<Empleos />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/comenzar" element={<Comenzar />} />
          <Route path="/cartera" element={<Cartera />} />
          <Route path="/verificacion" element={<Verificacion />} />
          <Route path="/detalles-cuenta" element={<DetallesCuenta />} />
          <Route path="/logout" element={<Logout />} />
          <Route path="/buy-tokens" element={<ProductListV2 />} />
          <Route path="/vida-sin-gluten" element={<VidaSinGluten />} />
          <Route path="/vida-sin-gluten/tips-para-comer-afuera" element={<TipsComerAfuera />} />
          <Route path="/vida-sin-gluten/fibras-dieta-sin-gluten" element={<FibrasDietaSinGluten />} />
          <Route path="/vida-sin-gluten/consejos-para-vacaciones" element={<ConsejosParaVacaciones />} />
          <Route path="/vida-sin-gluten/colegio-alumno-celiaco" element={<ColegioAlumnoCeliaco />} />
          <Route path="/vida-sin-gluten/diagnostico-sensibilidad-gluten" element={<SensibilidadAlGluten />} />
          <Route path="/empresa" element={<Empresa />} />
          <Route path="/contacto" element={<Contacto />} />
        </Routes>
        <Footer/>
      </main>
    </Router>
    </CartProvider>
  )
}

export default App
