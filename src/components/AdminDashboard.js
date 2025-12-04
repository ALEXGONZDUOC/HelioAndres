import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, ArcElement } from 'chart.js';
import { Bar, Doughnut, Pie } from 'react-chartjs-2';


ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, ArcElement);

const formatCurrency = (value) => {
  return new Intl.NumberFormat('es-CL', { style: 'currency', currency: 'CLP' }).format(value);
};

const AdminDashboard = () => {
  const [servicios, setServicios] = useState([]);
  const [planes, setPlanes] = useState([]);
  const [vendedores, setVendedores] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [serviciosResponse, planesResponse, vendedoresResponse] = await Promise.all([
          fetch('http://localhost:3001/servicios'),
          fetch('http://localhost:3001/planes'),
          fetch('http://localhost:3001/vendedores')
        ]);

        if (!serviciosResponse.ok) throw new Error(`HTTP error! status: ${serviciosResponse.status} for servicios`);
        if (!planesResponse.ok) throw new Error(`HTTP error! status: ${planesResponse.status} for planes`);
        if (!vendedoresResponse.ok) throw new Error(`HTTP error! status: ${vendedoresResponse.status} for vendedores`);

        const serviciosData = await serviciosResponse.json();
        const planesData = await planesResponse.json();
        const vendedoresData = await vendedoresResponse.json();

        if (!Array.isArray(serviciosData)) throw new Error("La data de servicios no es un array");
        if (!Array.isArray(planesData)) throw new Error("La data de planes no es un array");
        if (!Array.isArray(vendedoresData)) throw new Error("La data de vendedores no es un array");

        setServicios(serviciosData);
        setPlanes(planesData);
        setVendedores(vendedoresData);

      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <div className="text-center py-5">Cargando datos del Dashboard...</div>;
  }

  if (error) {
    return <div className="text-center py-5 text-danger">Error al cargar el Dashboard: {error.message}</div>;
  }
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
        <div className="col-lg-3 col-6"><div className="card text-white bg-primary mb-3 shadow"><div className="card-body"><h3>{totalServicios}</h3><p>Tipos de Servicios</p></div><div className="card-footer d-flex align-items-center justify-content-between"><Link to="/admin/servicios" className="small text-white stretched-link">Ver Detalles <i className="fas fa-arrow-circle-right"></i></Link></div></div></div>
        <div className="col-lg-3 col-6"><div className="card text-white bg-success mb-3 shadow"><div className="card-body"><h3>{totalPlanes}</h3><p>Planes Disponibles</p></div><div className="card-footer d-flex align-items-center justify-content-between"><Link to="/admin/planes" className="small text-white stretched-link">Ver Detalles <i className="fas fa-arrow-circle-right"></i></Link></div></div></div>
        <div className="col-lg-3 col-6"><div className="card text-white bg-info mb-3 shadow"><div className="card-body"><h3>{totalVendedores}</h3><p>Equipo de Vendedores</p></div><div className="card-footer d-flex align-items-center justify-content-between"><Link to="/admin/vendedores" className="small text-white stretched-link">Ver Detalles <i className="fas fa-arrow-circle-right"></i></Link></div></div></div>
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
