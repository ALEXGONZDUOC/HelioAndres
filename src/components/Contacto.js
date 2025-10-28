import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Contacto = () => {
  const [formData, setFormData] = useState({ nombre: '', email: '', mensaje: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Mensaje enviado. Te contactaremos pronto.');
    setFormData({ nombre: '', email: '', mensaje: '' });
  };

  return (
    <section id="contacto" className="py-5">
      <div className="container">
        <h2 className="text-center mb-5 fw-bold">Contacto</h2>
        <p className="text-center text-muted mb-5">Contáctanos tu proyecto y agenda una asesoría</p>
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <form onSubmit={handleSubmit}>
              <div className="row mb-3">
                <div className="col-md-6">
                  <label className="form-label">Nombre</label>
                  <input type="text" className="form-control" placeholder="Tu nombre" value={formData.nombre} onChange={(e) => setFormData({...formData, nombre: e.target.value})} required />
                </div>
                <div className="col-md-6">
                  <label className="form-label">Correo electrónico</label>
                  <input type="email" className="form-control" placeholder="tu-email@ejemplo.com" value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})} required />
                </div>
              </div>
              <div className="mb-3">
                <label className="form-label">Mensaje</label>
                <textarea className="form-control" rows="5" placeholder="Describe tu consumo, tu necesidad" value={formData.mensaje} onChange={(e) => setFormData({...formData, mensaje: e.target.value})} required></textarea>
              </div>
              <div className="d-flex gap-2">
                <button type="submit" className="btn btn-primary">Enviar</button>
                <button type="button" className="btn btn-outline-secondary" onClick={() => setFormData({ nombre: '', email: '', mensaje: '' })}>Limpiar</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contacto;
