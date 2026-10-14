import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/common/Header';
import Footer from './components/common/Footer';
import WhatsAppFloat from './components/common/WhatsAppFloat';
import HomePage from './pages/HomePage';
import ProductosPage from './pages/ProductosPage';
import NosotrosPage from './pages/NosotrosPage';
import ContactoPage from './pages/ContactoPage';
import UbicacionPage from './pages/UbicacionPage';
import './styles/global.css';

function App() {
  return (
    <Router>
      <Header />
      <WhatsAppFloat />
      <main style={{ flex: 1, minHeight: '80vh' }}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/productos" element={<ProductosPage />} />
          <Route path="/nosotros" element={<NosotrosPage />} />
          <Route path="/contacto" element={<ContactoPage />} />
          <Route path="/ubicacion" element={<UbicacionPage />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;