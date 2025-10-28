import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    { pregunta: '¿Incluyen instalación y certificación?', respuesta: 'Sí, todos nuestros planes incluyen instalación profesional certificada y los trámites necesarios ante la SEC (Superintendencia de Electricidad y Combustibles).' },
    { pregunta: '¿Ofrecen financiamiento?', respuesta: 'Sí, trabajamos con diversas instituciones financieras para ofrecer planes de pago flexibles adaptados a tu presupuesto.' },
    { pregunta: '¿Tienen despacho a regiones?', respuesta: 'Sí, realizamos instalaciones en todo Chile. El costo de envío varía según la región y el peso del equipo.' }
  ];

  return (
    <section id="faq" className="py-5 bg-light">
      <div className="container">
        <h2 className="text-center mb-5 fw-bold">FAQ</h2>
        <p className="text-center text-muted mb-5">Preguntas frecuentes</p>
        <div className="row justify-content-center">
          <div className="col-lg-8">
            {faqs.map((faq, idx) => (
              <div key={idx} className="card mb-3 border-0 shadow-sm">
                <div className="card-header bg-white" onClick={() => setActiveIndex(activeIndex === idx ? null : idx)} style={{cursor: 'pointer'}}>
                  <div className="d-flex justify-content-between align-items-center">
                    <h6 className="mb-0">▸ {faq.pregunta}</h6>
                    <span>{activeIndex === idx ? '−' : '+'}</span>
                  </div>
                </div>
                {activeIndex === idx && (
                  <div className="card-body">
                    <p className="mb-0 text-muted">{faq.respuesta}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
