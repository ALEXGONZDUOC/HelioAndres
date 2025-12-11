
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const ServicioDetalle = () => {
    const { id } = useParams();
    const [servicio, setServicio] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchServicio = async () => {
            try {
                const response = await axios.get(`http://localhost:3001/servicios/${id}`);
                setServicio(response.data);
            } catch (err) {
                setError('Error al cargar los datos');
            } finally {
                setLoading(false);
            }
        };

        fetchServicio();
    }, [id]);

    if (loading) {
        return <p>Cargando...</p>;
    }

    if (error) {
        return <p>{error}</p>;
    }

    if (!servicio) {
        return <p>No se encontró el servicio.</p>;
    }

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4">Detalle del Servicio</h1>
            <div className="card shadow-sm">
                <div className="card-header">
                    <h5 className="card-title m-0">{servicio.nombre} (ID: {servicio.id})</h5>
                </div>
                <div className="card-body">
                    <p className="card-text">{servicio.descripcion}</p>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item d-flex justify-content-between align-items-center">
                            Proyectos Realizados
                            <span className="badge bg-primary rounded-pill">{servicio.proyectos.toLocaleString('es-CL')}</span>
                        </li>
                        <li className="list-group-item d-flex justify-content-between align-items-center">
                            Nivel de Eficiencia
                            <span className="badge bg-info rounded-pill">{servicio.eficiencia}</span>
                        </li>
                        <li className="list-group-item d-flex justify-content-between align-items-center">
                            Precio Base
                            <span className="badge bg-success rounded-pill">${servicio.precio.toLocaleString('es-CL')}</span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default ServicioDetalle;

