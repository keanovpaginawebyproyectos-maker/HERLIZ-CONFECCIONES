import React from 'react';
import './Pages.css';

const NosotrosPage = () => {
  return (
    <div className="page-container fade-in">
      <h1>Nosotros</h1>
      <div className="page-content">
        <div className="about-hero">
          <h2>Más de 10 años de experiencia</h2>
          <p>
            En <strong>Herliz Confecciones</strong> somos una empresa dedicada a la confección
            de prendas de alta calidad. Con más de 10 años de experiencia en el mercado,
            nos especializamos en la producción de moda con diseños exclusivos y
            materiales de primera calidad.
          </p>
        </div>

        <div className="about-mission">
          <div className="mission-card">
            <h3> Misión</h3>
            <p>Ofrecer prendas de vestir de alta calidad que combinen estilo, comodidad y durabilidad, satisfaciendo las necesidades de nuestros clientes y superando sus expectativas.</p>
          </div>
          <div className="mission-card">
            <h3> Visión</h3>
            <p>Ser reconocidos como líderes en el sector textil por nuestra calidad, innovación y compromiso con la excelencia en cada prenda que confeccionamos.</p>
          </div>
        </div>

        <div className="about-values">
          <h3>Nuestros Valores</h3>
          <div className="values-grid">
            <div className="value-item">
              <div className="value-icon"></div>
              <h4>Calidad</h4>
              <p>Materiales seleccionados y procesos controlados</p>
            </div>
            <div className="value-item">
              <div className="value-icon"></div>
              <h4>Diseño</h4>
              <p>Creaciones únicas con tendencia actual</p>
            </div>
            <div className="value-item">
              <div className="value-icon"></div>
              <h4>Confianza</h4>
              <p>Más de 10 años de trayectoria</p>
            </div>
            <div className="value-item">
              <div className="value-icon"></div>
              <h4>Excelencia</h4>
              <p>Compromiso con la perfección en cada detalle</p>
            </div>
          </div>
        </div>

        <div className="about-stats">
          <div className="stat">
            <span className="stat-number">10+</span>
            <span className="stat-label">Años de experiencia</span>
          </div>
          <div className="stat">
            <span className="stat-number">1000+</span>
            <span className="stat-label">Clientes satisfechos</span>
          </div>
          <div className="stat">
            <span className="stat-number">50+</span>
            <span className="stat-label">Diseños exclusivos</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NosotrosPage;