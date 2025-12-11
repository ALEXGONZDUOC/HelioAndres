import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const PlanDetalle = () => {
    const { id } = useParams();
    const [plan, setPlan] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchPlan = async () => {
            try {
                const response = await axios.get(`http://localhost:3001/planes/${id}`);
                setPlan(response.data);
            } catch (err) {
                setError('Error al cargar los datos del plan');
            } finally {
                setLoading(false);
            }
        };

        fetchPlan();
    }, [id]);

    if (loading) {
        return <p>Cargando detalles del plan...</p>;
    }

    if (error) {
        return <p>{error}</p>;
    }

    if (!plan) {
        return <p>No se encontró el plan.</p>;
    }

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4">Detalle del Plan</h1>
            <div className="card shadow-sm">
                <div className="card-header">
                    <h5 className="card-title m-0">{plan.nombre} (ID: {plan.id})</h5>
                </div>
                <div className="card-body">
                    <h6 className="card-subtitle mb-2 text-muted">Precio: ${plan.precio.toLocaleString('es-CL')}</h6>
                    <p className="card-text">Ventas estimadas: {plan.ventas.toLocaleString('es-CL')}</p>
                    <h6 className="mt-4">Características:</h6>
                    <ul className="list-group list-group-flush">
                        {plan.caracteristicas.map((item, index) => (
                            <li key={index} className="list-group-item">{item}</li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default PlanDetalle;
