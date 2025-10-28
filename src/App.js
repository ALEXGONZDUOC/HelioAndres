import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Servicios from './components/Servicios';
import Soluciones from './components/Soluciones';
import Calculadora from './components/Calculadora';
import Planes from './components/Planes';
import Testimonios from './components/Testimonios';
import FAQ from './components/FAQ';
import Contacto from './components/Contacto';
import Footer from './components/Footer';


const App = () => {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Servicios />
      <Soluciones />
      <Calculadora />
      <Planes />
      <Testimonios />
      <FAQ />
      <Contacto />
      <Footer />
    </div>
  );
};

export default App;