import React, { useState, useEffect } from 'react';
import './HeroCarousel.css';

const BASE = '/assets/images/ANUNCIOS';

const slides = [
  { id: 1,  image: `${BASE}/anuncio-2-index.jpg`, title: 'Colección 2025',         subtitle: 'Lo mejor en moda y confección' },
  { id: 2,  image: `${BASE}/anuncio-3-index.jpg`, title: 'Calidad Premium',        subtitle: 'Materiales seleccionados para ti' },
  { id: 3,  image: `${BASE}/anuncio-4-index.jpg`, title: 'Ofertas Especiales',     subtitle: 'Precios increíbles en toda la colección' },
  { id: 4,  image: `${BASE}/anuncio-5-index.jpg`, title: 'Moda para Todos',        subtitle: 'Encuentra tu estilo ideal' },
  { id: 5,  image: `${BASE}/anuncio-6-index.jpg`, title: 'Temporada Primavera',    subtitle: 'Las mejores tendencias' },
  { id: 6,  image: `${BASE}/anuncio-7-index.jpg`, title: 'Outlet Especial',        subtitle: 'Hasta 50% de descuento' },
  { id: 7,  image: `${BASE}/anuncio-8-index.jpg`, title: 'Nuevos Ingresos',        subtitle: 'Las últimas novedades' },
  { id: 8,  image: `${BASE}/anuncioBolsas.jpg`,   title: 'Bolsos Exclusivos',      subtitle: 'Diseños únicos para ti' },
  { id: 9,  image: `${BASE}/anuncioMnadiles.jpg`, title: 'Mandiles Profesionales', subtitle: 'Calidad y resistencia' },
  { id: 10, image: `${BASE}/anuncioPolos.jpg`,    title: 'Polos de Calidad',       subtitle: 'Los mejores precios' },
];

const HeroCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="hero-carousel">
      <div className="carousel-container">
        <div
          className="carousel-track"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {slides.map((slide) => (
            <div key={slide.id} className="carousel-slide">
              <div
                className="slide-bg"
                style={{ backgroundImage: `url("${slide.image}")` }}
              />
              <img src={slide.image} alt={slide.title} />
              <div className="slide-overlay">
                <div className="slide-content">
                  <h2>{slide.title}</h2>
                  <p>{slide.subtitle}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="carousel-dots">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`dot ${index === currentSlide ? 'active' : ''}`}
            onClick={() => setCurrentSlide(index)}
            aria-label={`Ir a slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroCarousel;