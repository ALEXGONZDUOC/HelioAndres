import React, { useState, useEffect } from 'react';

const AdminServicios = () => {
  const [servicios, setServicios] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchServicios = async () => {
      try {
        const response = await fetch('http://localhost:3001/servicios');
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        if (Array.isArray(data)) {
          setServicios(data);
        } else {
          throw new Error("La data recibida no es un array");
        }
      } catch (error){
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchServicios();
  }, []);

  if (loading) {
    return <div className="text-center py-5">Cargando servicios...</div>;
  }

  if (error) {
    return <div className="text-center py-5 text-danger">Error: {error.message}</div>;
  }
  return (
    <div>
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h3 className="m-0">Gestión de Servicios</h3>
        <button className="btn btn-primary">Añadir Servicio</button>
      </div>
      <div className="card shadow-sm">
        <div className="card-header">
          <h5 className="card-title m-0">Servicios Registrados</h5>
        </div>
        <div className="card-body">
          <table className="table table-hover">
            <thead className="table-light">
              <tr>
                <th>ID</th>
                <th>Nombre</th>
                <th>Descripción</th>
                <th>Acciones</th>
              </tr>
            </thead>
            <tbody>
              {servicios.map(servicio => (
                <tr key={servicio.id}>
                  <td>{servicio.id}</td>
                  <td>{servicio.nombre}</td>
                  <td>{servicio.descripcion}</td>
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

export default AdminServicios;

