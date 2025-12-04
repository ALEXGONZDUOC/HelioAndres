import React, { useState, useEffect } from 'react';

const AdminPlanes = () => {
  const [planes, setPlanes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPlanes = async () => {
      try {
        const response = await fetch('http://localhost:3001/planes');
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        if (Array.isArray(data)) {
          setPlanes(data);
        } else {
          throw new Error("La data recibida no es un array");
        }
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchPlanes();
  }, []);

  if (loading) {
    return <div className="text-center py-5">Cargando planes...</div>;
  }

  if (error) {
    return <div className="text-center py-5 text-danger">Error: {error.message}</div>;
  }

  return (
    <div>
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h3 className="m-0">Gestión de Planes</h3>
        <button className="btn btn-primary">Añadir Plan</button>
      </div>
      <div className="card shadow-sm">
        <div className="card-header">
          <h5 className="card-title m-0">Planes Registrados</h5>
        </div>
        <div className="card-body">
          <table className="table table-hover">
            <thead className="table-light">
              <tr>
                <th>ID</th>
                <th>Nombre</th>
                <th>Precio</th>
                <th>Acciones</th>
              </tr>
            </thead>
            <tbody>
              {planes.map(plan => (
                <tr key={plan.id}>
                  <td>{plan.id}</td>
                  <td>{plan.nombre}</td>
                  <td>{plan.precio}</td>
                  <td>
                    <button className="btn btn-info btn-sm">Ver Detalle</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AdminPlanes;

