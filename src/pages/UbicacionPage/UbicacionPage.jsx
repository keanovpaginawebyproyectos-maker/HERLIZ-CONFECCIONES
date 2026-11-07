import React from 'react';
import '../Pages.css';

const UbicacionPage = () => {
  // Dirección exacta de la tienda dentro de la Galería Miramar
  const direccion = "Galería Miramar, Jr. Gamarra N° 1010, 2do. Piso Tienda 205, La Victoria, Lima, Perú";
  
  // Enlace directo a Google Maps con búsqueda exacta
  const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    "Confecciones Herliz, Galería Miramar, Jr. Gamarra 1010, La Victoria, Lima, Perú"
  )}`;

  return (
    <div className="page-container">
      <h1>Ubicación</h1>
      <div className="page-content">
        <div className="ubication-info">
          {/* Dirección clicable */}
          <p>
            <strong>
              <a 
                href={googleMapsUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                style={{ 
                  color: 'inherit', 
                  textDecoration: 'underline', 
                  cursor: 'pointer',
                  transition: 'color 0.2s ease'
                }}
                title="Abrir en Google Maps"
              >
                {direccion}
              </a>
            </strong>
          </p>
          
          <div className="map-container">
            {/* Mapa incrustado apuntando a Galería Miramar */}
            <iframe
              src={`https://maps.google.com/maps?q=${encodeURIComponent(
                "Galería Miramar, Jr. Gamarra 1010, La Victoria, Lima, Perú"
              )}&t=&z=17&ie=UTF8&iwloc=&output=embed`}
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Ubicación de Herliz Confecciones en Galería Miramar"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default UbicacionPage;