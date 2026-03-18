
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Container, Row, Col, Spinner, Image, Button, Breadcrumb } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import Header from './Header';
import './ProductV2.css';

// Componente funcional ProductDetail
const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);
  const [gallery, setGallery] = useState([]);
  const [galleryLoading, setGalleryLoading] = useState(true);
  const [activeIdx, setActiveIdx] = useState(0);

  useEffect(() => {
    setGalleryLoading(true);
    // 1. Buscar el producto por id
    fetch(`https://69aedb7dc8b37f499836bf53.mockapi.io/catalog/${id}`)
      .then(res => res.json())
      .then(data => {
        setProduct(data);
        // 2. Buscar galería por codProd
        if (data && data.codProd) {
          fetch(`https://69aedb7dc8b37f499836bf53.mockapi.io/catalog_det?codProd=${encodeURIComponent(data.codProd)}`)
            .then(res => res.json())
            .then(gal => {
              if (Array.isArray(gal) && gal.length > 0) {
                setGallery(gal);
              } else if (data.image) {
                setGallery([{ image: data.image, descripcion: data.title }]);
              } else {
                setGallery([]);
              }
              setActiveIdx(0);
              setGalleryLoading(false);
            })
            .catch(() => {
              setGallery(data.image ? [{ image: data.image, descripcion: data.title }] : []);
              setActiveIdx(0);
              setGalleryLoading(false);
            });
        } else {
          setGallery(data.image ? [{ image: data.image, descripcion: data.title }] : []);
          setActiveIdx(0);
          setGalleryLoading(false);
        }
      });
  }, [id]);

  if (!product) {
    return (
      <Container className="py-5 text-center">
        <Spinner animation="border" />
      </Container>
    );
  }

  return (
    <>
      <Header />
      <Container className="py-4">
      <nav aria-label="breadcrumb" className="mb-3" style={{ marginTop: '60px' }}>
        <ol className="breadcrumb productos-breadcrumb mb-0 d-flex align-items-center custom-breadcrumb">
          <li className="breadcrumb-item volver-item">
            <a href="#" onClick={e => { e.preventDefault(); navigate(-1); }} className="volver-link">
              &#8592; Volver
            </a>
          </li>
          {/* <span className="breadcrumb-separator volver-separator">|</span>
          <li className="breadcrumb-item"><a href={import.meta.env.BASE_URL}>Inicio</a></li>
          <span className="breadcrumb-separator">&gt;</span>
          <li className="breadcrumb-item"><a href={`${import.meta.env.BASE_URL}productos`}>Productos</a></li>
          <span className="breadcrumb-separator">&gt;</span>
          <li className="breadcrumb-item active" aria-current="page">Detalle</li> */}
        </ol>
      </nav>
      <Row className="justify-content-center">
        <Col md={10}>
          <div className="d-flex flex-row gap-4 align-items-start product-detail-main-row" style={{ border: 'none', background: 'none', borderRadius: '1.5rem', minHeight: 308 }}>
            {/* Imagen y carrusel */}
            <div className="product-detail-img-col" style={{ minWidth: 320, maxWidth: 400, flex: '0 0 auto', minHeight: 308, display: 'flex', alignItems: 'flex-start' }}>
              {galleryLoading ? (
                <div className="text-center py-3" style={{ minHeight: 308 }}><Spinner animation="border" size="sm" /></div>
              ) : gallery.length > 0 ? (
                <div id="gallery-carrusel" className="position-relative" style={{ minHeight: 308, overflow: 'hidden', marginBottom: 0 }}
                  onTouchStart={e => (window._touchStartX = e.touches[0].clientX)}
                  onTouchEnd={e => {
                    const diff = e.changedTouches[0].clientX - (window._touchStartX || 0);
                    if (Math.abs(diff) > 40) {
                      if (diff > 0) setActiveIdx(i => Math.max(i - 1, 0));
                      else setActiveIdx(i => Math.min(i + 1, gallery.length - 1));
                    }
                  }}
                >
                  <div className="d-flex align-items-center" style={{ minHeight: 308 }}>
                    <Image src={gallery[activeIdx].foto || gallery[activeIdx].image} alt={gallery[activeIdx].descripcion || product.title} fluid style={{ maxHeight: 308, objectFit: 'contain', transition: 'opacity 0.3s', marginLeft: 0, background: 'none', border: 'none', boxShadow: 'none' }} className="ms-0" />
                  </div>
                  {gallery[activeIdx].descripcion && (
                    <div className="text-start mt-2">
                      <span className="bg-dark bg-opacity-50 rounded px-2 small d-inline-block text-white">{gallery[activeIdx].descripcion}</span>
                    </div>
                  )}
                  {/* Navegación con botones numerados */}
                  {gallery.length > 1 && (
                    <div className="d-flex justify-content-center align-items-center gap-2 mt-2" style={{ width: '100%' }}>
                      <Button
                        variant="light"
                        size="sm"
                        style={{ minWidth: 32 }}
                        onClick={() => setActiveIdx(i => Math.max(i - 1, 0))}
                        disabled={activeIdx === 0}
                        aria-label="Anterior"
                      >
                        &#8592;
                      </Button>
                      {gallery.map((_, idx) => (
                        <Button
                          key={idx}
                          variant={idx === activeIdx ? 'primary' : 'outline-secondary'}
                          size="sm"
                          style={{ minWidth: 32, fontWeight: idx === activeIdx ? 'bold' : 'normal' }}
                          onClick={() => setActiveIdx(idx)}
                          aria-label={`Ver imagen ${idx + 1}`}
                          active={idx === activeIdx}
                        >
                          {idx + 1}
                        </Button>
                      ))}
                      <Button
                        variant="light"
                        size="sm"
                        style={{ minWidth: 32 }}
                        onClick={() => setActiveIdx(i => Math.min(i + 1, gallery.length - 1))}
                        disabled={activeIdx === gallery.length - 1}
                        aria-label="Siguiente"
                      >
                        &#8594;
                      </Button>
                    </div>
                  )}
                </div>
              ) : null}
            </div>
            {/* Detalle a la derecha */}
            <div className="flex-grow-1 product-detail-info-col" style={{ border: 'none', background: 'none', minHeight: 308, display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', paddingTop: '18px' }}>
              <h3 className="mb-3">{product.title}</h3>
              <div className="mb-2 text-muted">{product.description}</div>
              <ul className="list-unstyled mb-3">
                <li><strong>Stock:</strong> {product.stock ?? 0}</li>
                <li><strong>Categoría:</strong> {product.category}</li>
                {product.codProd && <li><strong>Código:</strong> {product.codProd}</li>}
              </ul>
              <div className="mb-3">
                <h6 className="fw-bold">Ingredientes</h6>
                <p className="small text-muted">
                  {product.ingredients || 'No disponible'}
                  {/* 
                   */}
                </p>
              </div>
            </div>
          </div>
        </Col>
      </Row>
      </Container>
    </>
  );
};

export default ProductDetail;
    
