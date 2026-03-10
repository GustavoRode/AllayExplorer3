import React from 'react';
import { Breadcrumb } from 'react-bootstrap';
import { Link, useLocation } from 'react-router-dom';

const breadcrumbMap = {
  '/productos': ['Productos'],
  '/productos/detalle': ['Productos', 'Detalle'],
  '/vida-sin-gluten': ['Productos', 'Vida Sin Gluten'],
  '/empresa': ['Productos', 'Empresa'],
  '/contacto': ['Productos', 'Contacto'],
  // Agrega más rutas según sea necesario
};

const CustomBreadcrumb = () => {
  const location = useLocation();
  const path = location.pathname;
  const crumbs = breadcrumbMap[path] || ['Productos'];

  // Genera los links para los breadcrumbs
  const links = [];
  let url = '/productos';
  crumbs.forEach((crumb, idx) => {
    if (idx === 0) {
      links.push(
        <Breadcrumb.Item linkAs={Link} linkProps={{ to: url }} key={crumb}>
          {crumb}
        </Breadcrumb.Item>
      );
    } else {
      url += `/${crumb.toLowerCase().replace(/ /g, '-')}`;
      links.push(
        <Breadcrumb.Item linkAs={Link} linkProps={{ to: url }} key={crumb} active={idx === crumbs.length - 1}>
          {crumb}
        </Breadcrumb.Item>
      );
    }
  });

  return (
    <Breadcrumb className="mb-3">
      {links}
    </Breadcrumb>
  );
};

export default CustomBreadcrumb;
