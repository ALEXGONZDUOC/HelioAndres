import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const AdminSidebar = () => {
  const { logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  const linkStyle = {
    color: 'rgba(255, 255, 255, 0.8)',
    padding: '10px 15px',
    display: 'block'
  };

  const activeLinkStyle = {
    backgroundColor: '#494e53',
    color: '#fff'
  };

  return (
    <div className="d-flex flex-column p-3 text-white bg-dark" style={{ width: '280px', position: 'fixed', top: 0, bottom: 0, left: 0, overflowY: 'auto' }}>
      <a href="/admin" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none">
        <span className="fs-4">HelioAndes Admin</span>
      </a>
      <hr />
      <ul className="nav nav-pills flex-column mb-auto">
        <li className="nav-item">
          <NavLink 
            to="/admin" 
            className="nav-link text-white" 
            style={({ isActive }) => isActive ? {...linkStyle, ...activeLinkStyle} : linkStyle}
            end
          >
            <i className="fas fa-tachometer-alt me-2"></i> Dashboard
          </NavLink>
        </li>
        <li>
          <NavLink 
            to="/admin/servicios" 
            className="nav-link text-white" 
            style={({ isActive }) => isActive ? {...linkStyle, ...activeLinkStyle} : linkStyle}
          >
            <i className="fas fa-cogs me-2"></i> Servicios
          </NavLink>
        </li>
        <li>
          <NavLink 
            to="/admin/planes" 
            className="nav-link text-white" 
            style={({ isActive }) => isActive ? {...linkStyle, ...activeLinkStyle} : linkStyle}
          >
            <i className="fas fa-clipboard-list me-2"></i> Planes
          </NavLink>
        </li>
        <li>
          <NavLink 
            to="/admin/vendedores" 
            className="nav-link text-white" 
            style={({ isActive }) => isActive ? {...linkStyle, ...activeLinkStyle} : linkStyle}
          >
            <i className="fas fa-users me-2"></i> Vendedores
          </NavLink>
        </li>
      </ul>
      <hr />
      <div className="pb-2">
        <button onClick={handleLogout} className="btn btn-dark text-white text-start w-100">
          <i className="fas fa-sign-out-alt me-2"></i>
          <strong>Cerrar Sesión</strong>
        </button>
      </div>
    </div>
  );
};

export default AdminSidebar;

