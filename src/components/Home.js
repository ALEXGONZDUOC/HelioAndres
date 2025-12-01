import React from 'react';
import Navbar from './Navbar';
import Hero from './Hero';
import Servicios from './Servicios';
import Soluciones from './Soluciones';
import Calculadora from './Calculadora';
import Planes from './Planes';
import Testimonios from './Testimonios';
import FAQ from './FAQ';
import Contacto from './Contacto';
import Footer from './Footer';

const Home = () => {
  return (
    <>
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
    </>
  );
};

export default Home;
