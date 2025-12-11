import React from 'react';
import { Routes, Route } from 'react-router-dom';
import AdminSidebar from '../components/AdminSidebar';
import AdminDashboard from '../components/AdminDashboard';
import AdminServicios from '../components/AdminServicios';
import AdminPlanes from '../components/AdminPlanes';
import AdminVendedores from '../components/AdminVendedores';
import ServicioDetalle from '../components/ServicioDetalle';
import PlanDetalle from '../components/PlanDetalle';
import VendedorDetalle from '../components/VendedorDetalle';

const AdminLayout = () => {
  return (
    <div className="d-flex" style={{ minHeight: '100vh' }}>
      <AdminSidebar />
      <main className="container-fluid p-4" style={{ backgroundColor: '#f4f6f9', marginLeft: '280px' }}>
        <Routes>
          <Route path="servicios/:id" element={<ServicioDetalle />} />
          <Route path="servicios" element={<AdminServicios />} />
          <Route path="planes/:id" element={<PlanDetalle />} />
          <Route path="planes" element={<AdminPlanes />} />
          <Route path="vendedores/:id" element={<VendedorDetalle />} />
          <Route path="vendedores" element={<AdminVendedores />} />
          <Route index element={<AdminDashboard />} />
        </Routes>
      </main>
    </div>
  );
};

export default AdminLayout;

