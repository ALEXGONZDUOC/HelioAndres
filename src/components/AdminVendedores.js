import React, { useState, useEffect } from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

const formatCurrency = (value) => {
  return new Intl.NumberFormat('es-CL', { style: 'currency', currency: 'CLP' }).format(value);
};

const VendedorCard = ({ vendedor }) => {
  const { nombre, metaVentas, ventasActuales } = vendedor;
  const porcentaje = Math.round((ventasActuales / metaVentas) * 100);
  const restante = metaVentas - ventasActuales;

  const data = {
    labels: ['Ventas Realizadas', 'Restante para la Meta'],
    datasets: [
      {
        data: [ventasActuales, restante > 0 ? restante : 0],
        backgroundColor: ['#198754', '#dee2e6'],
        borderColor: ['#fff', '#fff'],
        borderWidth: 2,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      tooltip: {
        callbacks: {
          label: function (context) {
            let label = context.label || '';
            if (label) {
              label += ': ';
            }
            if (context.parsed !== null) {
              label += formatCurrency(context.parsed);
            }
            return label;
          },
        },
      },
    },
  };

  return (
    <div className="card h-100 shadow-sm">
      <div className="card-header d-flex justify-content-between align-items-center">
        <h5 className="card-title m-0">{nombre}</h5>
        <span className={`badge ${porcentaje >= 100 ? 'bg-success' : 'bg-info'}`}>{porcentaje}% de la meta</span>
      </div>
      <div className="card-body">
        <div className="row align-items-center">
          <div className="col-md-6">
            <Pie data={data} options={options} />
          </div>
          <div className="col-md-6">
            <p className="card-text">
              <strong>Meta:</strong> {formatCurrency(metaVentas)}
            </p>
            <p className="card-text">
              <strong>Ventas:</strong> {formatCurrency(ventasActuales)}
            </p>
            <div className="progress" style={{ height: '20px' }}>
              <div
                className="progress-bar bg-success"
                role="progressbar"
                style={{ width: `${porcentaje}%` }}
                aria-valuenow={porcentaje}
                aria-valuemin="0"
                aria-valuemax="100"
              >
                {porcentaje}%
              </div>
            </div>
             {restante > 0 ? (
                <p className="mt-2 text-muted">Faltan {formatCurrency(restante)} para la meta.</p>
              ) : (
                <p className="mt-2 text-success fw-bold">¡Meta superada!</p>
              )}
          </div>
        </div>
      </div>
    </div>
  );
};

const AdminVendedores = () => {
  const [vendedores, setVendedores] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchVendedores = async () => {
      try {
        const response = await fetch('http://localhost:3001/vendedores');
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        if (Array.isArray(data)) {
          setVendedores(data);
        } else {
          throw new Error("La data recibida no es un array");
        }
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchVendedores();
  }, []);

  if (loading) {
    return <div className="text-center py-5">Cargando vendedores...</div>;
  }

  if (error) {
    return <div className="text-center py-5 text-danger">Error: {error.message}</div>;
  }
  return (
    <div>
      <h3 className="mb-4">Rendimiento de Vendedores</h3>
      <div className="row g-4">
        {vendedores.map(vendedor => (
          <div key={vendedor.id} className="col-lg-6">
            <VendedorCard vendedor={vendedor} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminVendedores;
