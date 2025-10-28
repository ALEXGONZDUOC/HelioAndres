import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Testimonios = () => {
  const testimonios = [
    { nombre: 'Alejandra, Ñuñoa', texto: 'Instalación rápida y ahorro visible en la primera boleta.' },
    { nombre: 'Diego, Valdivia', texto: 'El monitoreo me permite proyectar mejor los ingresos.' },
    { nombre: 'Carla, Coquimbo', texto: 'Excelente asesoría y profesionales 100% recomendable.' }
  ];

  return (
    <section id="testimonios" className="py-5">
      <div className="container">
        <h2 className="text-center mb-5 fw-bold">Testimonios</h2>
        <p className="text-center text-muted mb-5">Clientes que ya confían en HelioAndes</p>
        <div className="row g-4">
          {testimonios.map((test, idx) => (
            <div key={idx} className="col-md-4">
              <div className="card h-100 border-0 shadow-sm">
                <div className="card-body">
                  <div className="d-flex align-items-center mb-3">
                    <div className="bg-primary text-white rounded-circle d-flex align-items-center justify-content-center me-3" style={{width: '50px', height: '50px'}}>
                      {test.nombre.charAt(0)}
                    </div>
                    <h6 className="mb-0">{test.nombre}</h6>
                  </div>
                  <p className="text-muted">"{test.texto}"</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonios;
