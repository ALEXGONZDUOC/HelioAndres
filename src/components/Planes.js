import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { planes } from '../data/db';

const Planes = () => {
  return (
    <section id="planes" className="py-5 bg-light">
      <div className="container">
        <h2 className="text-center mb-5 fw-bold">Planes</h2>
        <p className="text-center text-muted mb-5">Elige el plan que se ajuste a tu proyecto</p>
        <div className="row g-4 justify-content-center">
          {planes.map((plan) => (
            <div key={plan.id} className="col-md-4">
              <div className="card h-100 shadow-sm">
                <div className="card-body d-flex flex-column text-center">
                  <h4 className="card-title">{plan.nombre}</h4>
                  <p className="fs-5 fw-bold text-primary">{plan.precio}</p>
                  <ul className="list-unstyled text-muted">
                    {plan.caracteristicas.map((caracteristica, i) => (
                      <li key={i}>{caracteristica}</li>
                    ))}
                  </ul>
                  <button className="btn btn-primary w-100 mt-auto">Cotizar</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Planes;
