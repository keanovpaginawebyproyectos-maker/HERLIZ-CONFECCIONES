import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';

// Componentes comunes
import Header from './components/common/Header/Header';
import Footer from './components/common/Footer/Footer';
import WhatsAppFloat from './components/common/WhatsAppFloat/WhatsAppFloat';

// Páginas
import HomePage from './pages/HomePage/HomePage';
import ProductosPage from './pages/ProductosPage/ProductosPage';
import NosotrosPage from './pages/Nosotros/NosotrosPage'; // Corregido: tu archivo se llama NosotrosPage.jsx
import ContactoPage from './pages/ContactoPage/ContactoPage';
import UbicacionPage from './pages/UbicacionPage/UbicacionPage';

// Estilos
import './styles/global.css';
import './App.css';

function App() {
  return (
    <Router>
      <div className="app-wrapper">
        <Header />
        <WhatsAppFloat />
        <main className="app-main">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/productos" element={<ProductosPage />} />
            <Route path="/nosotros" element={<NosotrosPage />} />
            <Route path="/contacto" element={<ContactoPage />} />
            <Route path="/ubicacion" element={<UbicacionPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;