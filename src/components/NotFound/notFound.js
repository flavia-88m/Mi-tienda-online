import React from 'react';
import {Link} from 'react-router-dom';
import '../NotFound/notFound.css';


export const NotFound = () => {
  return (
    <section className="notFound-title">
      <h1>404</h1>
      <h2>Página no encontrada</h2>
      <Link extact to='/'>Volver al Home</Link>
    </section>
  );
};


