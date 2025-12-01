import React from 'react';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, ArcElement } from 'chart.js';
import { Bar, Doughnut, Pie } from 'react-chartjs-2';
import { servicios, planes, vendedores } from '../data/db';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, ArcElement);

const formatCurrency = (value) => {
  return new Intl.NumberFormat('es-CL', { style: 'currency', currency: 'CLP' }).format(value);
};

const AdminDashboard = () => {
  const totalServicios = servicios.length;
  const totalPlanes = planes.length;
  const totalVendedores = vendedores.length;
  const totalProyectos = servicios.reduce((sum, s) => sum + s.proyectos, 0);

  // --- Data for Charts ---

  // 1. Sales vs Goals
  const totalVentas = vendedores.reduce((sum, v) => sum + v.ventasActuales, 0);
  const totalMetas = vendedores.reduce((sum, v) => sum + v.metaVentas, 0);
  const salesVsGoalsData = {
    labels: ['Rendimiento de Ventas'],
    datasets: [
      {
        label: 'Ventas Actuales',
        data: [totalVentas],
        backgroundColor: 'rgba(25, 135, 84, 0.7)',
      },
      {
        label: 'Meta Total',
        data: [totalMetas],
        backgroundColor: 'rgba(220, 53, 69, 0.7)',
      },
    ],
  };

  // 2. Sales Distribution by Seller
  const salesBySellerData = {
    labels: vendedores.map(v => v.nombre),
    datasets: [{
      data: vendedores.map(v => v.ventasActuales),
      backgroundColor: ['#0d6efd', '#198754', '#ffc107', '#dc3545'],
      hoverOffset: 4,
    }],
  };
  
  // 3. Plan Popularity
  const planPopularityData = {
    labels: planes.map(p => p.nombre),
    datasets: [{
      data: planes.map(p => p.ventas),
      backgroundColor: ['#0dcaf0', '#fd7e14', '#6f42c1'],
      hoverOffset: 4,
    }],
  };

  // 4. Projects per Service
  const projectsPerServiceData = {
    labels: servicios.map(s => s.nombre),
    datasets: [{
      label: 'Nº de Proyectos',
      data: servicios.map(s => s.proyectos),
      backgroundColor: 'rgba(13, 202, 240, 0.7)',
    }],
  };
  
  const chartOptions = {
    responsive: true,
    plugins: {
      legend: { position: 'top' },
      tooltip: {
        callbacks: {
          label: (context) => {
            let label = context.dataset.label || context.label || '';
            if (label) { label += ': '; }
            if (context.parsed.y !== null || context.parsed !== null) {
              const value = typeof context.parsed === 'object' ? context.parsed.y : context.parsed;
              // Check if it's the sales vs goals chart to format as currency
              if (context.dataset.label?.includes('Ventas') || context.dataset.label?.includes('Meta')) {
                label += formatCurrency(value);
              } else {
                 label += value;
              }
            }
            return label;
          }
        }
      }
    }
  };


  return (
    <div>
      <h3 className="mb-4">Dashboard</h3>
      {/* --- Stat Cards --- */}
      <div className="row">
        <div className="col-lg-3 col-6"><div className="card text-white bg-primary mb-3 shadow"><div className="card-body"><h3>{totalServicios}</h3><p>Tipos de Servicios</p></div><div className="card-footer d-flex align-items-center justify-content-between"><a href="/admin/servicios" className="small text-white stretched-link">Ver Detalles <i className="fas fa-arrow-circle-right"></i></a></div></div></div>
        <div className="col-lg-3 col-6"><div className="card text-white bg-success mb-3 shadow"><div className="card-body"><h3>{totalPlanes}</h3><p>Planes Disponibles</p></div><div className="card-footer d-flex align-items-center justify-content-between"><a href="/admin/planes" className="small text-white stretched-link">Ver Detalles <i className="fas fa-arrow-circle-right"></i></a></div></div></div>
        <div className="col-lg-3 col-6"><div className="card text-white bg-info mb-3 shadow"><div className="card-body"><h3>{totalVendedores}</h3><p>Equipo de Vendedores</p></div><div className="card-footer d-flex align-items-center justify-content-between"><a href="/admin/vendedores" className="small text-white stretched-link">Ver Detalles <i className="fas fa-arrow-circle-right"></i></a></div></div></div>
        <div className="col-lg-3 col-6"><div className="card text-white bg-warning mb-3 shadow"><div className="card-body"><h3>{totalProyectos}</h3><p>Proyectos Totales</p></div><div className="card-footer d-flex align-items-center justify-content-between"><span className="small text-white">Cifra de ejemplo</span><i className="fas fa-chart-line"></i></div></div></div>
      </div>

      {/* --- Charts Section --- */}
      <div className="row mt-4">
        <div className="col-lg-6">
          <div className="card shadow-sm mb-4">
            <div className="card-header"><h5 className="card-title m-0"><i className="fas fa-chart-bar me-2"></i>Ventas Totales vs. Metas</h5></div>
            <div className="card-body"><Bar options={chartOptions} data={salesVsGoalsData} /></div>
          </div>
        </div>
        <div className="col-lg-6">
           <div className="card shadow-sm mb-4">
            <div className="card-header"><h5 className="card-title m-0"><i className="fas fa-chart-pie me-2"></i>Distribución de Ventas por Vendedor</h5></div>
            <div className="card-body"><Doughnut options={chartOptions} data={salesBySellerData} /></div>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-lg-6">
          <div className="card shadow-sm mb-4">
            <div className="card-header"><h5 className="card-title m-0"><i className="fas fa-star me-2"></i>Popularidad de Planes</h5></div>
            <div className="card-body"><Pie options={chartOptions} data={planPopularityData} /></div>
          </div>
        </div>
        <div className="col-lg-6">
          <div className="card shadow-sm mb-4">
            <div className="card-header"><h5 className="card-title m-0"><i className="fas fa-tasks me-2"></i>Proyectos por Tipo de Servicio</h5></div>
            <div className="card-body"><Bar options={{...chartOptions, indexAxis: 'y' }} data={projectsPerServiceData} /></div>
          </div>
        </div>
      </div>

    </div>
  );
};

export default AdminDashboard;
