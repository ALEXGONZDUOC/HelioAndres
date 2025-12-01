import React from 'react';
import { Routes, Route } from 'react-router-dom';
import AdminSidebar from '../components/AdminSidebar';
import AdminDashboard from '../components/AdminDashboard';
import AdminServicios from '../components/AdminServicios';
import AdminPlanes from '../components/AdminPlanes';
import AdminVendedores from '../components/AdminVendedores';

const AdminLayout = () => {
  return (
    <div className="d-flex" style={{ minHeight: '100vh' }}>
      <AdminSidebar />
      <main className="container-fluid p-4" style={{ backgroundColor: '#f4f6f9' }}>
        <Routes>
          <Route path="servicios" element={<AdminServicios />} />
          <Route path="planes" element={<AdminPlanes />} />
          <Route path="vendedores" element={<AdminVendedores />} />
          <Route index element={<AdminDashboard />} />
        </Routes>
      </main>
    </div>
  );
};

export default AdminLayout;

