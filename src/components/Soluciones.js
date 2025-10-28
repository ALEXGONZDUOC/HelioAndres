import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Soluciones = () => {
  const soluciones = [
    { title: 'Hogar 3-5 kW', description: 'Solución ideal para casa de tamaño mediano' },
    { title: 'PyME 10-20 kW', description: 'Para pequeños locales con buena irradiación' },
    { title: 'Off-grid con baterías', description: 'Autonomía sin red con red eléctrica' }
  ];

  return (
    <section id="soluciones" className="py-5 bg-light">
      <div className="container">
        <h2 className="text-center mb-5 fw-bold">Soluciones</h2>
        <p className="text-center text-muted mb-5">
          Kits residenciales, PyME, off-grid con baterías o híbridos
        </p>
        <div className="row g-4">
          {soluciones.map((sol, idx) => (
            <div key={idx} className="col-md-4">
              <div className="card h-100 border-0 shadow-sm">
                <div className="card-body">
                  <div className="mb-3 text-primary" style={{fontSize: '40px'}}>⚡</div>
                  <h5 className="card-title">{sol.title}</h5>
                  <p className="card-text text-muted">{sol.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Soluciones;
