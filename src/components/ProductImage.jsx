import React, { useState } from 'react';
import './ProductImage.css';

const ProductImage = ({ src, alt, ...props }) => {
  const [loaded, setLoaded] = useState(false);

  return (
    <img
      src={src}
      alt={alt}
      className={`product-image${loaded ? ' loaded' : ''}`}
      onLoad={() => setLoaded(true)}
      {...props}
    />
  );
};

export default ProductImage;
