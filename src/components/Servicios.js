import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';


const Servicios = () => {
  const servicios = [
    {
      icon: '📊',
      title: 'Estudio energético',
      description: 'Análisis de consumo y propuesta acorde a tu perfil'
    },
    {
      icon: '✓',
      title: 'Instalación certificada',
      description: 'Ejecutada por personal capacitado y certificado'
    },
    {
      icon: '📈',
      title: 'Monitoreo',
      description: 'Seguimiento de rendimiento y alertas preventivas'
    },
    {
      icon: '🔧',
      title: 'Mantención',
      description: 'Planes periódicos para maximizar vida útil del sistema'
    }
  ];

  return (
    <section id="servicios" className="py-5">
      <div className="container">
        <h2 className="text-center mb-5 fw-bold">Servicios</h2>
        <p className="text-center text-muted mb-5">
          Estudio energético, instalación certificada, monitoreo y mantención
        </p>
        <div className="row g-4">
          {servicios.map((servicio, idx) => (
            <div key={idx} className="col-md-6 col-lg-3">
              <div className="card h-100 border-0 shadow-sm">
                <div className="card-body text-center">
                  <div className="mb-3" style={{fontSize: '40px'}}>{servicio.icon}</div>
                  <h5 className="card-title">{servicio.title}</h5>
                  <p className="card-text text-muted">{servicio.description}</p>
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
