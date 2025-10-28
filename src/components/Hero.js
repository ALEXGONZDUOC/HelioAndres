import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Hero = () => {
  return (
    <section id="inicio" className="py-5" style={{backgroundColor: '#cae6efff'}}>
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <span className="badge bg-info text-dark mb-3">Energía limpia</span>
            <h1 className="display-4 fw-bold mb-3">Energía solar accesible y confiable para tu hogar o pyme</h1>
            <p className="lead text-muted mb-4">
              Reducir tu Gobierno, mejorar el medio ambiente y utilizar energía sin límites. 
              La USAID te guía con nuestras soluciones.
            </p>
            <div className="d-flex gap-3">
              <button className="btn btn-primary btn-lg">Ver DEMO</button>
              <button className="btn btn-outline-secondary btn-lg">Descargar catálogo</button>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="bg-dark rounded p-5" style={{minHeight: '300px'}}>
              <div className="text-white text-center">
                <div style={{fontSize: '60px'}}>☀️</div>
                <p className="mt-3">Panel Solar Ilustrativo</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
