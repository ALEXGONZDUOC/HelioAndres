import React, { useState, useEffect } from 'react';
import {Home, Wrench, Monitor, Gauge, Factory, Battery, Lightbulb, Settings} from "lucide-react";

const iconMap = {
  "solar-home": Home,
  "solar-wrench": Wrench,
  "solar-monitor": Monitor,
  "solar-optimization": Gauge,
  "solar-factory": Factory,
  "solar-battery": Battery,
  "solar-advice": Lightbulb,
  "solar-repair": Settings
};

const Servicios = () => {
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
      } catch (error) {
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
    <section id="servicios" className="py-5">
      <div className="container">
        <h2 className="text-center mb-5 fw-bold">Servicios</h2>
        <p className="text-center text-muted mb-5">
          Estudio energético, instalación certificada, monitoreo y mantención
        </p>
        <div className="row g-4">
          {servicios.map((servicio) => {
            const Icon = iconMap[servicio.icono]; // ← toma el icono correcto

            return (
              <div key={servicio.id} className="col-md-6 col-lg-3">
                <div className="card h-100 border-0 shadow-sm">
                  <div className="card-body text-center">

                    {/* Aquí usamos el icono */}
                    <div className="mb-3">
                      {Icon ? (
                        <Icon size={40} color="#f7b500" />  // puedes cambiar color
                      ) : (
                        <div>⚠️</div>
                      )}
                    </div>

                    <h5 className="card-title">{servicio.nombre}</h5>
                    <p className="card-text text-muted">{servicio.descripcion}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Servicios;
