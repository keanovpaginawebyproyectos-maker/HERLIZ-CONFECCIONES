import React from 'react';
import { Link } from 'react-router-dom';
import './HeroSection.css';

const HeroSection = () => {
  return (
    <section className="hero-section fade-in">
      <div className="logo-wrapper">
        <img src="/images/logo.png" alt="Herliz Confecciones" />
      </div>
      
      <h1>
        Productos de <span className="highlight">Alta Calidad</span><br />
        a Precios Increíbles
      </h1>
      
      <div className="hero-description">
        En <strong>Herliz Confecciones</strong> te ofrecemos lo mejor en moda y confección,
        con diseños exclusivos, materiales resistentes y una atención personalizada
        que te hará volver. <strong>Viste con estilo y confianza</strong>, sin pagar de más.
      </div>
      
      <Link to="/productos" className="btn-productos">
        Explorar Colección
      </Link>
    </section>
  );
};

export default HeroSection;