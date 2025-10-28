import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Planes = () => {
  const planes = [
    { nombre: '3-5 kW', tipo: 'Hogar', descripcion: 'Hogar energético mediano', precio: 'Desde $4.500.000', caracteristicas: 'Mantención básica' },
    { nombre: '10-15 kW', tipo: 'Empresa', descripcion: 'Estudio avanzado PYME/Comercio', precio: 'Desde $12.000.000', caracteristicas: 'Mantención avanzada', destacado: true },
    { nombre: 'Híbrido + baterías', tipo: 'Avanzado', descripcion: 'Hogar off-grid Autonomía total', precio: 'Desde $18.000.000', caracteristicas: 'Soporte premium' }
  ];

  return (
    <section id="planes" className="py-5 bg-light">
      <div className="container">
        <h2 className="text-center mb-5 fw-bold">Planes</h2>
        <p className="text-center text-muted mb-5">Elige el plan que se ajuste a tu proyecto</p>
        <div className="row g-4">
          {planes.map((plan, idx) => (
            <div key={idx} className="col-md-4">
              <div className={`card h-100 ${plan.destacado ? 'border-primary' : 'border-0'} shadow-sm`}>
                <div className="card-body text-center">
                  {plan.destacado && <span className="badge bg-primary mb-3">Destacado</span>}
                  {!plan.destacado && <span className="badge bg-info text-dark mb-3">{plan.tipo}</span>}
                  <h4 className="card-title">{plan.nombre}</h4>
                  <p className="text-muted">{plan.descripcion}</p>
                  <p className="fs-5 fw-bold text-primary">{plan.precio}</p>
                  <p className="text-muted small">{plan.caracteristicas}</p>
                  <button className="btn btn-primary w-100 mt-3">Solicitar evaluación</button>
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
