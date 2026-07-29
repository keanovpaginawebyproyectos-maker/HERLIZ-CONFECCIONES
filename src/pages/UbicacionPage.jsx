import React from 'react';
import './Pages.css';

const UbicacionPage = () => {
  return (
    <div className="page-container">
      <h1>Ubicación</h1>
      <div className="page-content">
        <div className="ubication-info">
          <p><strong>Jr. Gamarra N° 1010 - 2do. Piso Tienda 205 – Gamarra</strong></p>
          <div className="map-container">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d975.9487956547658!2d-77.0224177869702!3d-12.058159563457307!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105c8e2b67eb043%3A0x71db870d8d627c3f!2sGamarra!5e0!3m2!1ses!2spe!4v1700000000000"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Ubicación de Herliz Confecciones"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default UbicacionPage;