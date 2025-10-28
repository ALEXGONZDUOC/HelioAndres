import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Footer = () => {
  return (
    <footer className="bg-dark text-white py-4">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <p className="mb-0">© 2025 HelioAndes Energía</p>
          </div>
          <div className="col-md-6 text-md-end">
            <a href="#" className="text-white text-decoration-none me-3">Privacidad</a>
            <a href="#" className="text-white text-decoration-none">Términos</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
