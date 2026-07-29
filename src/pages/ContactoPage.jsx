import React from 'react';
import './Pages.css';

const ContactoPage = () => {
  return (
    <div className="page-container fade-in">
      <h1>Contacto</h1>
      <div className="page-content">
        <div className="contact-grid">
          <div className="contact-card">
            <div className="contact-icon"></div>
            <h3>Correo Electrónico</h3>
            <p>confecciones.herliz@gmail.com</p>
            <small>Respuesta en 24 horas</small>
          </div>

          <div className="contact-card">
            <div className="contact-icon"></div>
            <h3>Teléfonos</h3>
            <p><strong>963 382 211</strong></p>
            <p><strong>980 931 321</strong></p>
            <small>Lun - Sab: 9am - 5pm</small>
          </div>

          <div className="contact-card">
            <div className="contact-icon"></div>
            <h3>Ubicación</h3>
            <p>Jr. Gamarra N° 1010</p>
            <p>2do. Piso Tienda 205</p>
            <small>Gamarra - Lima</small>
          </div>

          <div className="contact-card">
            <div className="contact-icon"></div>
            <h3>Horario de Atención</h3>
            <p><strong>Lunes a Sábado</strong></p>
            <p>9:00 am - 8:00 pm</p>
            <p><strong>Domingo</strong></p>
            <p>10:00 am - 4:00 pm</p>
          </div>
        </div>

        <div className="contact-social">
          <h3>Síguenos en redes</h3>
          <div className="social-links">
            <a href="https://www.facebook.com/confecciones.herliz" target="_blank" rel="noopener noreferrer" className="social-link facebook">
              Facebook
            </a>
            <a href="https://www.instagram.com/herlizconfecciones" target="_blank" rel="noopener noreferrer" className="social-link instagram">
              Instagram
            </a>
            <a href="https://www.tiktok.com/@herliz.confecciones" target="_blank" rel="noopener noreferrer" className="social-link tiktok">
              TikTok
            </a>
            <a href="https://wa.me/51980931321" target="_blank" rel="noopener noreferrer" className="social-link whatsapp">
              WhatsApp
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactoPage;