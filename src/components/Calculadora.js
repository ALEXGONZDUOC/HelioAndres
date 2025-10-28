import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Calculadora = () => {
  const [form, setForm] = useState({
    potenciaPanelW: 400,
    cantidadPaneles: 8,
    precioPanelUnitario: 180000,
    inversionCLP: 5000000,
    precioInversor: 800000,
    tasaCLP: 15000,
    cantidadBaterias: 0,
    estructuraCableado: 0,
    instalacionBase: 400000,
    pesoEnvio: 30,
    tipoTecho: 'tejaAsfalt',
    region: 'RM',
    complejidad: 'baja',
    subsidio: 'noSubsid',
    metodoPago: 'contado',
    garantia: 'estd10a',
    planPago: 'contado',
    tipoPie: 'porcentaje',
    valorPie: 10
  });

  const [resultado, setResultado] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  };

  const calcular = () => {
    const potencia = parseFloat(form.potenciaPanelW || 0) * parseFloat(form.cantidadPaneles || 0) / 1000;
    const costoPaneles = parseFloat(form.cantidadPaneles || 0) * parseFloat(form.precioPanelUnitario || 0);
    const costoInversor = parseFloat(form.precioInversor || 0);
    const totalEquipos = costoPaneles + costoInversor + parseFloat(form.inversionCLP || 0);
    const subsidio = form.subsidio === 'estd20' ? totalEquipos * 0.2 : 0;
    const recargo = form.metodoPago === 'Financiado' ? totalEquipos * 0.1 : 0;
    const envio = parseFloat(form.pesoEnvio || 0) * 50;
    const garantia = form.garantia === 'ext25a' ? 200000 : 0;
    const costoBaterias = parseFloat(form.cantidadBaterias || 0) * parseFloat(form.tasaCLP || 0);
    const costoEstructura = parseFloat(form.estructuraCableado || 0);
    const iva = (totalEquipos + parseFloat(form.instalacionBase || 0) + envio + garantia + costoBaterias + costoEstructura) * 0.19;
    const costos = totalEquipos + parseFloat(form.instalacionBase || 0) + envio + garantia + recargo + costoBaterias + costoEstructura;
    const total = costos + iva - subsidio;

    setResultado({
      potencia: potencia.toFixed(2),
      cantidadPaneles: form.cantidadPaneles,
      costoPaneles: Math.round(costoPaneles),
      costoInversor: Math.round(costoInversor),
      costoBaterias: Math.round(costoBaterias),
      costoEstructura: Math.round(costoEstructura),
      subsidio: Math.round(subsidio),
      recargo: Math.round(recargo),
      subsidioFinal: Math.round(subsidio),
      instalacion: form.instalacionBase,
      iva: Math.round(iva),
      envio: Math.round(envio),
      garantia: Math.round(garantia),
      interesTotal: Math.round(recargo),
      pie: 0,
      costos: Math.round(costos),
      total: Math.round(total)
    });
  };

  const resetear = () => {
    setForm({
      potenciaPanelW: 400,
      cantidadPaneles: 8,
      precioPanelUnitario: 180000,
      inversionCLP: 5000000,
      precioInversor: 800000,
      tasaCLP: 15000,
      cantidadBaterias: 0,
      estructuraCableado: 0,
      instalacionBase: 400000,
      pesoEnvio: 30,
      tipoTecho: 'tejaAsfalt',
      region: 'RM',
      complejidad: 'baja',
      subsidio: 'noSubsid',
      metodoPago: 'contado',
      garantia: 'estd10a',
      planPago: 'contado',
      tipoPie: 'porcentaje',
      valorPie: 10
    });
    setResultado(null);
  };

  return (
    <section id="demo" className="py-5">
      <div className="container">
        <h2 className="text-center mb-5 fw-bold">DEMO calculadora</h2>
        <p className="text-center text-muted mb-5">
          Manualmente te formularios y números. Esto brinda 3+ de otros modelos.
        </p>
        <div className="row">
          <div className="col-lg-6 mb-4">
            <div className="card shadow-sm">
              <div className="card-body">
                <h5 className="card-title mb-4">Formulario</h5>
                
                <div className="row mb-3">
                  <div className="col-md-4">
                    <label className="form-label">Potencia del panel (W)</label>
                    <input type="number" className="form-control" name="potenciaPanelW" value={form.potenciaPanelW} onChange={handleChange} />
                  </div>
                  <div className="col-md-4">
                    <label className="form-label">Cantidad de paneles</label>
                    <input type="number" className="form-control" name="cantidadPaneles" value={form.cantidadPaneles} onChange={handleChange} />
                  </div>
                  <div className="col-md-4">
                    <label className="form-label">Precio unitario (CLP)</label>
                    <input type="number" className="form-control" name="precioPanelUnitario" value={form.precioPanelUnitario} onChange={handleChange} />
                  </div>
                </div>

                {form.cantidadPaneles > 0 && form.precioPanelUnitario > 0 && (
                  <div className="alert alert-info py-2 mb-3">
                    <small>
                      <strong>Total paneles:</strong> {form.cantidadPaneles} x ${parseInt(form.precioPanelUnitario).toLocaleString()} = ${(form.cantidadPaneles * form.precioPanelUnitario).toLocaleString()}
                    </small>
                  </div>
                )}

                <div className="row mb-3">
                  <div className="col-md-6">
                    <label className="form-label">Inversor (CLP)</label>
                    <input type="number" className="form-control" name="precioInversor" value={form.precioInversor} onChange={handleChange} />
                  </div>
                  <div className="col-md-6">
                    <label className="form-label">Inversión adicional (CLP)</label>
                    <input type="number" className="form-control" name="inversionCLP" value={form.inversionCLP} onChange={handleChange} />
                  </div>
                </div>

                <div className="row mb-3">
                  <div className="col-md-6">
                    <label className="form-label">Batería (precio unidad)</label>
                    <input type="number" className="form-control" name="tasaCLP" value={form.tasaCLP} onChange={handleChange} />
                  </div>
                  <div className="col-md-6">
                    <label className="form-label">Cantidad baterías</label>
                    <input type="number" className="form-control" name="cantidadBaterias" value={form.cantidadBaterias} onChange={handleChange} />
                  </div>
                </div>

                <div className="row mb-3">
                  <div className="col-md-6">
                    <label className="form-label">Estructura/Cableado</label>
                    <input type="number" className="form-control" name="estructuraCableado" value={form.estructuraCableado} onChange={handleChange} />
                  </div>
                  <div className="col-md-6">
                    <label className="form-label">Instalación base</label>
                    <input type="number" className="form-control" name="instalacionBase" value={form.instalacionBase} onChange={handleChange} />
                  </div>
                </div>

                <div className="row mb-3">
                  <div className="col-md-6">
                    <label className="form-label">Peso envío (kg)</label>
                    <input type="number" className="form-control" name="pesoEnvio" value={form.pesoEnvio} onChange={handleChange} />
                  </div>
                  <div className="col-md-6">
                    <label className="form-label">Tipo de techo</label>
                    <select className="form-select" name="tipoTecho" value={form.tipoTecho} onChange={handleChange}>
                      <option value="tejaAsfalt">Teja/Asfáltica (+0%)</option>
                      <option value="metalico">Metálico (+5%)</option>
                    </select>
                  </div>
                </div>

                <div className="row mb-3">
                  <div className="col-md-6">
                    <label className="form-label">Región</label>
                    <select className="form-select" name="region" value={form.region} onChange={handleChange}>
                      <option value="RM">RM del 1000</option>
                      <option value="V">V Región</option>
                    </select>
                  </div>
                  <div className="col-md-6">
                    <label className="form-label">Complejidad instalación</label>
                    <select className="form-select" name="complejidad" value={form.complejidad} onChange={handleChange}>
                      <option value="baja">Baja (0%)</option>
                      <option value="media">Media (+10%)</option>
                    </select>
                  </div>
                </div>

                <div className="row mb-3">
                  <div className="col-md-6">
                    <label className="form-label">Subsidio</label>
                    <select className="form-select" name="subsidio" value={form.subsidio} onChange={handleChange}>
                      <option value="noSubsid">Sin subsidio (0%)</option>
                      <option value="estd20">Est. 20% (-20%)</option>
                    </select>
                  </div>
                  <div className="col-md-6">
                    <label className="form-label">Método de pago</label>
                    <select className="form-select" name="metodoPago" value={form.metodoPago} onChange={handleChange}>
                      <option value="contado">Contado (0%)</option>
                      <option value="Financiado">Financiado (+10%)</option>
                    </select>
                  </div>
                </div>

                <div className="row mb-3">
                  <div className="col-md-6">
                    <label className="form-label">Garantía</label>
                    <select className="form-select" name="garantia" value={form.garantia} onChange={handleChange}>
                      <option value="estd10a">Estándar 10a (+0%)</option>
                      <option value="ext25a">12 meses (+2%)</option>
                    </select>
                  </div>
                  <div className="col-md-6">
                    <label className="form-label">Plan de pago</label>
                    <select className="form-select" name="planPago" value={form.planPago} onChange={handleChange}>
                      <option value="contado">Contado (0%)</option>
                      <option value="cuotas">En cuotas</option>
                    </select>
                  </div>
                </div>

                <div className="row mb-3">
                  <div className="col-md-6">
                    <label className="form-label">Tipo de pie</label>
                    <select className="form-select" name="tipoPie" value={form.tipoPie} onChange={handleChange}>
                      <option value="porcentaje">Porcentaje</option>
                      <option value="monto">Monto fijo</option>
                    </select>
                  </div>
                  <div className="col-md-6">
                    <label className="form-label">Valor de pie</label>
                    <input type="number" className="form-control" name="valorPie" value={form.valorPie} onChange={handleChange} />
                    <small className="form-text text-muted">% o porcentaje (0-100)</small>
                  </div>
                </div>

                <div className="d-flex gap-2">
                  <button className="btn btn-primary" onClick={calcular}>Calcular resumen</button>
                  <button className="btn btn-secondary" onClick={resetear}>Limpiar</button>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-6">
            <div className="card shadow-sm">
              <div className="card-body">
                <h5 className="card-title mb-4">Resumen</h5>
                
                {resultado ? (
                  <div>
                    <div className="d-flex justify-content-between border-bottom py-2">
                      <span>Potencia estimada (kWp)</span>
                      <strong>{resultado.potencia}</strong>
                    </div>
                    <div className="d-flex justify-content-between border-bottom py-2">
                      <span>Paneles solares ({resultado.cantidadPaneles} uni.)</span>
                      <strong>${resultado.costoPaneles.toLocaleString()}</strong>
                    </div>
                    <div className="d-flex justify-content-between border-bottom py-2">
                      <span>Inversor</span>
                      <strong>${resultado.costoInversor.toLocaleString()}</strong>
                    </div>
                    {resultado.costoBaterias > 0 && (
                      <div className="d-flex justify-content-between border-bottom py-2">
                        <span>Baterías</span>
                        <strong>${resultado.costoBaterias.toLocaleString()}</strong>
                      </div>
                    )}
                    {resultado.costoEstructura > 0 && (
                      <div className="d-flex justify-content-between border-bottom py-2">
                        <span>Estructura/Jabalcón</span>
                        <strong>${resultado.costoEstructura.toLocaleString()}</strong>
                      </div>
                    )}
                    <div className="d-flex justify-content-between border-bottom py-2">
                      <span>Recargo techo</span>
                      <strong>${resultado.recargo.toLocaleString()}</strong>
                    </div>
                    <div className="d-flex justify-content-between border-bottom py-2">
                      <span>Subsidio</span>
                      <strong>-${resultado.subsidioFinal.toLocaleString()}</strong>
                    </div>
                    <div className="d-flex justify-content-between border-bottom py-2">
                      <span>Instalación final</span>
                      <strong>${resultado.instalacion.toLocaleString()}</strong>
                    </div>
                    <div className="d-flex justify-content-between border-bottom py-2">
                      <span>IVA 19%</span>
                      <strong>${resultado.iva.toLocaleString()}</strong>
                    </div>
                    <div className="d-flex justify-content-between border-bottom py-2">
                      <span>Envío</span>
                      <strong>${resultado.envio.toLocaleString()}</strong>
                    </div>
                    <div className="d-flex justify-content-between border-bottom py-2">
                      <span>Garantía</span>
                      <strong>${resultado.garantia.toLocaleString()}</strong>
                    </div>
                    <div className="d-flex justify-content-between border-bottom py-2">
                      <span>Total años de financiar</span>
                      <strong>${resultado.interesTotal.toLocaleString()}</strong>
                    </div>
                    <div className="d-flex justify-content-between border-bottom py-2">
                      <span>Pie</span>
                      <strong>${resultado.pie.toLocaleString()}</strong>
                    </div>
                    <div className="d-flex justify-content-between border-bottom py-2">
                      <span>Interés total</span>
                      <strong>${resultado.interesTotal.toLocaleString()}</strong>
                    </div>
                    <div className="d-flex justify-content-between border-bottom py-2">
                      <span>Costos</span>
                      <strong>${resultado.costos.toLocaleString()}</strong>
                    </div>
                    <div className="d-flex justify-content-between py-3 bg-light mt-3 px-3 rounded">
                      <span className="fw-bold">Total final</span>
                      <strong className="text-primary fs-5">${resultado.total.toLocaleString()}</strong>
                    </div>
                  </div>
                ) : (
                  <p className="text-muted text-center py-5">Completa el formulario y haz clic en "Calcular resumen"</p>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Calculadora;