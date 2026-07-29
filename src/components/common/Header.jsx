import React, { useState, useEffect, useCallback } from 'react';
import { Link, useLocation } from 'react-router-dom';
import MenuHamburger from './MenuHamburger';
import CartButton from './CartButton';
import './Header.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  // Cerrar menú al cambiar de página
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  // Cerrar menú con ESC - optimizado
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === 'Escape') {
        setIsMenuOpen(false);
      }
    };
    document.addEventListener('keydown', handleEsc);
    return () => document.removeEventListener('keydown', handleEsc);
  }, []);

  // Prevenir scroll cuando menú está abierto
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMenuOpen]);

  const toggleMenu = useCallback(() => {
    setIsMenuOpen(prev => !prev);
  }, []);

  const closeMenu = useCallback(() => {
    setIsMenuOpen(false);
  }, []);

  const navLinks = [
    { to: '/', label: 'Inicio' },
    { to: '/productos', label: 'Productos' },
    { to: '/nosotros', label: 'Nosotros' },
    { to: '/contacto', label: 'Contacto' },
    { to: '/ubicacion', label: 'Ubicación' },
  ];

  return (
    <>
      <header className="header">
        <div className="header-container">
          <MenuHamburger isOpen={isMenuOpen} setIsOpen={toggleMenu} />
          <Link to="/" className="site-title">
            <span>Herliz</span> Confecciones
          </Link>
          <div className="header-actions">
            <CartButton />
          </div>
        </div>
      </header>

      {/* Overlay */}
      <div 
        className={`nav-overlay ${isMenuOpen ? 'active' : ''}`} 
        onClick={closeMenu}
        aria-hidden="true"
      />

      {/* Menú lateral */}
      <nav className={`nav-menu ${isMenuOpen ? 'active' : ''}`} role="navigation">
        <div className="nav-header">
          <div className="nav-brand">Menú <span>Principal</span></div>
        </div>
        
        {navLinks.map((link) => (
          <Link 
            key={link.to} 
            to={link.to} 
            onClick={closeMenu}
          >
            {link.label}
          </Link>
        ))}

        <div className="nav-footer">
          <div className="nav-social">
            <a href="https://www.facebook.com/confecciones.herliz" target="_blank" rel="noopener noreferrer">Facebook</a>
            <a href="https://www.instagram.com/herlizconfecciones" target="_blank" rel="noopener noreferrer">Instagram</a>
            <a href="https://www.tiktok.com/@herliz.confecciones" target="_blank" rel="noopener noreferrer">TikTok</a>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;