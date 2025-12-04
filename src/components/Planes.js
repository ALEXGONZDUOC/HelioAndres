import React, { useState, useEffect } from 'react';

const Planes = () => {
  const [planes, setPlanes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // ✅ Función para formatear a CLP
  const formatoCLP = (valor) => {
    return new Intl.NumberFormat("es-CL", {
      style: "currency",
      currency: "CLP",
      minimumFractionDigits: 0
    }).format(valor);
  };

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
    <section id="planes" className="py-5 bg-light">
      <div className="container">
        <h2 className="text-center mb-5 fw-bold">Planes</h2>
        <p className="text-center text-muted mb-5">Elige el plan que se ajuste a tu proyecto</p>
        <div className="row g-4 justify-content-center">
          {planes.map((plan) => (
            <div key={plan.id} className="col-md-4">
              <div className="card h-100 shadow-sm">
                <div className="card-body d-flex flex-column text-center">
                  <h4 className="card-title">{plan.nombre}</h4>

                  {/* ✅ Aquí aplicamos el formato chileno */}
                  <p className="fs-5 fw-bold text-primary">
                    {formatoCLP(plan.precio)}
                  </p>

                  <ul className="list-unstyled text-muted">
                    {plan.caracteristicas.map((caracteristica, i) => (
                      <li key={i}>{caracteristica}</li>
                    ))}
                  </ul>

                  <button className="btn btn-primary w-100 mt-auto">Cotizar</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Planes;
