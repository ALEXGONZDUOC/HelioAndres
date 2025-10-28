import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light sticky-top shadow-sm">
      <div className="container">
        <a className="navbar-brand d-flex align-items-center" href="#inicio">
          <div className="bg-primary text-white px-3 py-2 rounded me-2">HA</div>
          <span className="fw-bold">HelioAndes</span>
        </a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item"><a className="nav-link" href="#inicio">Inicio</a></li>
            <li className="nav-item"><a className="nav-link" href="#servicios">Servicios</a></li>
            <li className="nav-item"><a className="nav-link" href="#soluciones">Soluciones</a></li>
            <li className="nav-item"><a className="nav-link" href="#demo">DEMO</a></li>
            <li className="nav-item"><a className="nav-link" href="#planes">Planes</a></li>
            <li className="nav-item"><a className="nav-link" href="#testimonios">Testimonios</a></li>
            <li className="nav-item"><a className="nav-link" href="#faq">FAQ</a></li>
            <li className="nav-item"><a className="nav-link" href="#contacto">Contacto</a></li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
