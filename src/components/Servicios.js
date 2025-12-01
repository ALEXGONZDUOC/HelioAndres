import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { servicios } from '../data/db';

const Servicios = () => {
  return (
    <section id="servicios" className="py-5">
      <div className="container">
        <h2 className="text-center mb-5 fw-bold">Servicios</h2>
        <p className="text-center text-muted mb-5">
          Estudio energético, instalación certificada, monitoreo y mantención
        </p>
        <div className="row g-4">
          {servicios.map((servicio) => (
            <div key={servicio.id} className="col-md-6 col-lg-3">
              <div className="card h-100 border-0 shadow-sm">
                <div className="card-body text-center">
                  <div className="mb-3" style={{fontSize: '40px'}}>
                    {/* Placeholder for icon, assuming Font Awesome will be added */}
                    <i className={`fas ${servicio.icono}`}></i>
                  </div>
                  <h5 className="card-title">{servicio.nombre}</h5>
                  <p className="card-text text-muted">{servicio.descripcion}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Servicios;
