import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const VendedorDetalle = () => {
    const { id } = useParams();
    const [vendedor, setVendedor] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchVendedor = async () => {
            try {
                const response = await axios.get(`http://localhost:3001/vendedores/${id}`);
                setVendedor(response.data);
            } catch (err) {
                setError('Error al cargar los datos del vendedor');
            } finally {
                setLoading(false);
            }
        };

        fetchVendedor();
    }, [id]);

    if (loading) {
        return <p>Cargando detalles del vendedor...</p>;
    }

    if (error) {
        return <p>{error}</p>;
    }

    if (!vendedor) {
        return <p>No se encontró el vendedor.</p>;
    }

    const progreso = (vendedor.ventasActuales / vendedor.metaVentas) * 100;

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4">Detalle del Vendedor</h1>
            <div className="card shadow-sm">
                <div className="card-header">
                    <h5 className="card-title m-0">{vendedor.nombre} (ID: {vendedor.id})</h5>
                </div>
                <div className="card-body">
                    <h6 className="card-subtitle mb-2 text-muted">Meta de Ventas: ${vendedor.metaVentas.toLocaleString('es-CL')}</h6>
                    <h6 className="card-subtitle mb-3 text-muted">Ventas Actuales: ${vendedor.ventasActuales.toLocaleString('es-CL')}</h6>
                    
                    <div className="progress">
                        <div 
                            className="progress-bar" 
                            role="progressbar" 
                            style={{ width: `${progreso}%` }} 
                            aria-valuenow={progreso} 
                            aria-valuemin="0" 
                            aria-valuemax="100"
                        >
                            {progreso.toFixed(2)}%
                        </div>
                    </div>
                    <p className="mt-2 text-center">Progreso hacia la meta</p>
                </div>
            </div>
        </div>
    );
};

export default VendedorDetalle;
