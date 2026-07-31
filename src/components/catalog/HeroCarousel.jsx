import React, { useState, useEffect } from 'react';
import './HeroCarousel.css';

const HeroCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Anuncios con tus imágenes reales
  const slides = [
    {
      id: 1,
      image: '/assets/images/ANUNCIOS/anuncio 2 index.jpg',
      title: 'Colección 2025',
      subtitle: 'Lo mejor en moda y confección'
    },
    {
      id: 2,
      image: '/assets/images/ANUNCIOS/anuncio 3 index.jpg',
      title: 'Calidad Premium',
      subtitle: 'Materiales seleccionados para ti'
    },
    {
      id: 3,
      image: '/assets/images/ANUNCIOS/anuncio 4 index.jpg',
      title: 'Ofertas Especiales',
      subtitle: 'Precios increíbles en toda la colección'
    },
    {
      id: 4,
      image: '/assets/images/ANUNCIOS/anuncio 5 index.jpg',
      title: 'Moda para Todos',
      subtitle: 'Encuentra tu estilo ideal'
    },
    {
      id: 5,
      image: '/assets/images/ANUNCIOS/anuncio 6 index.jpg',
      title: 'Temporada Primavera',
      subtitle: 'Las mejores tendencias'
    },
    {
      id: 6,
      image: '/assets/images/ANUNCIOS/anuncio 7 index.jpg',
      title: 'Outlet Especial',
      subtitle: 'Hasta 50% de descuento'
    },
    {
      id: 7,
      image: '/assets/images/ANUNCIOS/anuncio 8 index.jpg',
      title: 'Nuevos Ingresos',
      subtitle: 'Las últimas novedades'
    },
    {
      id: 8,
      image: '/assets/images/ANUNCIOS/anuncioBolsas.jpg',
      title: 'Bolsos Exclusivos',
      subtitle: 'Diseños únicos para ti'
    },
    {
      id: 9,
      image: '/assets/images/ANUNCIOS/AnuncioGorras.jpg',
      title: 'Gorras Originales',
      subtitle: 'Estilo y comodidad'
    },
    {
      id: 10,
      image: '/assets/images/ANUNCIOS/anuncioLOL.jpg',
      title: 'Colección Especial',
      subtitle: 'Lo más buscado de la temporada'
    },
    {
      id: 11,
      image: '/assets/images/ANUNCIOS/anuncioMnadiles.jpg',
      title: 'Mandiles Profesionales',
      subtitle: 'Calidad y resistencia'
    },
    {
      id: 12,
      image: '/assets/images/ANUNCIOS/anuncioPolos.jpg',
      title: 'Polos de Calidad',
      subtitle: 'Los mejores precios'
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [slides.length]);

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <div className="hero-carousel">
      <div className="carousel-container">
        <div 
          className="carousel-track"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {slides.map((slide) => (
            <div key={slide.id} className="carousel-slide">
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
            onClick={() => goToSlide(index)}
            aria-label={`Ir a slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroCarousel;