'use client';

import React, { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';

const CookieBannerSPDP = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [isExpanded, setIsExpanded] = useState(false);
  const [isSaved, setIsSaved] = useState(false);
  const [showForm, setShowForm] = useState(false);
  
  const [personalizacion, setPersonalizacion] = useState(false);
  const [optimizacion, setOptimizacion] = useState(false);
  const [anuncios, setAnuncios] = useState(false);
  const [duracion, setDuracion] = useState('6');
  const [sector, setSector] = useState('');
  const [sectorManual, setSectorManual] = useState('');
  const [problema, setProblema] = useState('');
  const [problemaManual, setProblemaManual] = useState('');
  const [consentUuid, setConsentUuid] = useState('');
  
  // Estados del formulario
  const [formData, setFormData] = useState({
    nombre: '',
    whatsapp: '',
    email: '',
    ciudad: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Inicializar UUID y verificar consentimiento previo
  useEffect(() => {
    let uuid = localStorage.getItem('consent_uuid');
    if (!uuid) {
      uuid = uuidv4();
      localStorage.setItem('consent_uuid', uuid);
    }
    setConsentUuid(uuid);

    const savedConsent = localStorage.getItem('consent_saved');
    if (savedConsent) {
      setIsVisible(false);
    }
  }, []);

  const saveConsentToDB = async (fullData = {}) => {
    const payload = {
      consent_uuid: consentUuid,
      consent_whatsapp: personalizacion,
      consent_email: optimizacion,
      consent_media: anuncios,
      duracion_meses: duracion,
      ...fullData
    };

    try {
      await fetch('/api/consent', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });
      localStorage.setItem('consent_saved', 'true');
    } catch (err) {
      console.error("Error saving consent:", err);
    }
  };

  const handleGuardar = async () => {
    setIsSaved(true);
    setShowForm(true);
    // Guardamos el consentimiento inicial inmediatamente, aunque no llene el formulario
    await saveConsentToDB();
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const fullData = {
      ...formData,
      sector: sector === 'otro' ? sectorManual : sector,
      problema: problema === 'otro' ? problemaManual : problema,
    };

    await saveConsentToDB(fullData);
    setIsSubmitting(false);
    setIsVisible(false);
  };

  const handleAceptarTodo = async () => {
    setPersonalizacion(true);
    setOptimizacion(true);
    setAnuncios(true);
    setIsSaved(true);
    setShowForm(true);
    
    // Guardamos con los valores explícitamente en true
    await saveConsentToDB({
      consent_whatsapp: true,
      consent_email: true,
      consent_media: true
    });
  };

  if (!isVisible) return null;

  return (
    <>
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@tabler/icons-webfont@latest/tabler-icons.min.css" />
      
      <style jsx>{`
        @keyframes slideUp { from { transform: translateY(20px); opacity: 0; } to { transform: translateY(0); opacity: 1; } }
        .hu-top { display: flex; align-items: center; justify-content: space-between; padding: 15px 25px; border-bottom: 1px solid #f1f5f9; background: #f8fafc; }
        .hu-content { padding: 30px 40px; }
        .hu-header { text-align: center; margin-bottom: 30px; }
        .hu-title { font-size: 21px; font-weight: 800; color: #0f172a; margin-bottom: 12px; }
        .hu-sub { font-size: 15px; color: #64748b; line-height: 1.6; max-width: 900px; margin: 0 auto; }
        
        .cats-grid { 
          display: grid; 
          grid-template-columns: repeat(4, 1fr); 
          gap: 20px; 
          margin: 30px 0; 
        }

        @media (max-width: 1024px) { .cats-grid { grid-template-columns: repeat(2, 1fr); } }
        @media (max-width: 640px) { .cats-grid { grid-template-columns: 1fr; } }

        .cat-card { border: 1px solid #e2e8f0; border-radius: 14px; padding: 20px; background: #fff; display: flex; flex-direction: column; transition: transform 0.2s; }
        .cat-card:hover { border-color: #cbd5e1; }
        .cat-head { display: flex; align-items: center; justify-content: space-between; margin-bottom: 15px; }
        .cat-name { font-size: 16px; font-weight: 800; color: #0f172a; }
        .cat-desc { font-size: 14px; color: #64748b; line-height: 1.5; margin-bottom: 15px; min-height: 90px; overflow-y: auto; }

        .toggle { position: relative; width: 42px; height: 22px; }
        .toggle input { opacity: 0; width: 0; height: 0; }
        .slider { position: absolute; cursor: pointer; inset: 0; background-color: #e2e8f0; border-radius: 20px; transition: 0.2s; }
        .slider:before { content: ""; position: absolute; height: 16px; width: 16px; left: 3px; top: 3px; background-color: white; border-radius: 50%; transition: 0.2s; }
        input:checked + .slider { background-color: #121212; }
        input:checked + .slider:before { transform: translateX(20px); }

        .datos-sec { border-top: 1px solid #f1f5f9; padding-top: 15px; margin-top: auto; }
        .dato-item { display: flex; gap: 10px; font-size: 12px; color: #64748b; margin-bottom: 8px; align-items: flex-start; }
        .dato-item i { font-size: 15px; color: #94a3b8; }
        
        .hu-footer { display: flex; align-items: center; justify-content: space-between; padding: 20px 40px; border-top: 1px solid #f1f5f9; }
        .btn-primary { background: #121212; color: #fff; border: none; border-radius: 30px; padding: 12px 35px; font-size: 15px; font-weight: 700; cursor: pointer; transition: 0.2s; }
        .btn-primary:hover { transform: translateY(-2px); box-shadow: 0 4px 12px rgba(0,0,0,0.15); }
        .link-btn { background: none; border: none; color: #121212; font-size: 14px; font-weight: 700; cursor: pointer; display: flex; align-items: center; gap: 8px; }

        .time-select {
          padding: 10px 25px; 
          border-radius: 30px; 
          border: 2px solid #121212; 
          background: #f1f5f9; 
          color: #121212; 
          font-weight: 800; 
          outline: none; 
          cursor: pointer; 
          font-size: 14px;
          transition: 0.2s;
        }
        .time-select:hover { background: #e2e8f0; }

        /* BANNER MINIMIZADO ESTILOS */
        .hu-mini-banner {
          position: fixed;
          bottom: 20px;
          left: 50%;
          transform: translateX(-50%);
          width: 90%;
          max-width: 650px;
          background: #fff;
          border: 1px solid #e2e8f0;
          border-radius: 50px;
          padding: 12px 25px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          box-shadow: 0 10px 25px rgba(0,0,0,0.1);
          z-index: 9998;
          font-family: Montserrat, sans-serif;
          gap: 20px;
        }
        .hu-mini-text {
          display: flex;
          align-items: center;
          gap: 12px;
          font-size: 14px;
          color: #4a5568;
        }
        .hu-mini-text i {
          font-size: 22px;
          color: #121212;
        }
        .hu-mini-btns {
          display: flex;
          gap: 10px;
          align-items: center;
        }
        .hu-btn-config {
          background: none;
          border: none;
          font-size: 14px;
          font-weight: 600;
          cursor: pointer;
          color: #121212;
          white-space: nowrap;
          transition: 0.2s;
        }
        .hu-btn-accept {
          background: #121212;
          color: #fff;
          border: none;
          border-radius: 20px;
          padding: 8px 18px;
          font-size: 13px;
          font-weight: 600;
          cursor: pointer;
          white-space: nowrap;
          transition: 0.2s;
        }
        .hu-btn-accept:hover {
          transform: translateY(-2px);
          box-shadow: 0 4px 12px rgba(0,0,0,0.15);
        }

        @media (max-width: 640px) {
          form { grid-template-columns: 1fr !important; }
          
          .hu-mini-banner {
            flex-direction: column;
            border-radius: 20px;
            padding: 15px 20px;
            gap: 15px;
            width: 95%;
            bottom: 15px;
          }
          .hu-mini-text {
            font-size: 13px;
            text-align: center;
            justify-content: center;
          }
          .hu-mini-btns {
            width: 100%;
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 10px;
          }
          .hu-btn-config {
            font-size: 13px;
            padding: 10px 0;
            background: #f1f5f9;
            border-radius: 20px;
          }
          .hu-btn-accept {
            font-size: 13px;
            padding: 10px 0;
            width: 100%;
          }
        }
      `}</style>
      
      {/* BANNER MINIMIZADO */}
      {!isExpanded && !isSaved && (
        <div className="hu-mini-banner">
          <div className="hu-mini-text">
            <i className="ti ti-cookie"></i>
            <span>Preferencias de contacto y privacidad.</span>
          </div>
          <div className="hu-mini-btns">
            <button className="hu-btn-config" onClick={() => setIsExpanded(true)}>Configurar</button>
            <button className="hu-btn-accept" onClick={handleAceptarTodo}>Aceptar todo</button>
          </div>
        </div>
      )}

      {/* MODAL DE PERSONALIZACIÓN */}
      {(isExpanded || isSaved) && (
        <div className="hu-overlay" style={{
          position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.4)', zIndex: 9999,
          display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '15px'
        }}>
          <div className="hu" style={{
            background: '#fff', borderRadius: '20px', width: '100%', maxWidth: '1200px',
            maxHeight: '95vh', overflowY: 'auto', boxShadow: '0 25px 50px rgba(0,0,0,0.2)',
            fontFamily: 'Montserrat, sans-serif', position: 'relative', animation: 'slideUp 0.3s ease-out'
          }}>

            <div className="hu-top">
              <div style={{fontSize:'12px', fontWeight:600, color:'#64748b', letterSpacing:'0.5px'}}>CONFIGURACIÓN DE PRIVACIDAD Y RECONTACTO</div>
              <div style={{display:'flex', gap:'8px'}}>
                <button onClick={() => setIsExpanded(false)} style={{background:'none', border:'none', color:'#94a3b8', cursor:'pointer'}}><i className="ti ti-minus" style={{fontSize:'20px'}}></i></button>
                <button onClick={() => setIsVisible(false)} style={{background:'none', border:'none', color:'#94a3b8', cursor:'pointer'}}><i className="ti ti-x" style={{fontSize:'20px'}}></i></button>
              </div>
            </div>

            {!showForm ? (
              <div className="hu-content">
                <div className="hu-header">
                  <div className="hu-title">Gestione sus preferencias de contacto</div>
                  <div className="hu-sub">Seleccione los medios por los cuales desea recibir información y el tiempo de validez de su autorización personalizada.</div>
                  
                  <div style={{marginTop:'25px'}}>
                    <select value={duracion} onChange={(e) => setDuracion(e.target.value)} className="time-select">
                      <option value="1">AUTORIZAR RECONTACTO POR 1 MES</option>
                      <option value="6">AUTORIZAR RECONTACTO POR 6 MESES</option>
                      <option value="12">AUTORIZAR RECONTACTO POR 12 MESES</option>
                    </select>
                  </div>
                </div>

                <div className="cats-grid">
                  {/* Operaciones básicas */}
                  <div className="cat-card">
                    <div className="cat-head"><span className="cat-name">Operaciones básicas</span><label className="toggle"><input type="checkbox" checked disabled/><span className="slider"></span></label></div>
                    <div className="cat-desc">Cookies técnicas necesarias para el funcionamiento seguro del sitio y la gestión de su sesión.</div>
                    <div className="datos-sec">
                      <div style={{fontSize:'12px', fontWeight:700, marginBottom:'10px'}}>Datos Utilizados:</div>
                      <div className="dato-item"><i className="ti ti-lock"></i><span>Seguridad y sesión</span></div>
                      <div className="dato-item"><i className="ti ti-device-desktop"></i><span>Navegador y resolución</span></div>
                    </div>
                  </div>

                  {/* WhatsApp y Mensajería */}
                  <div className="cat-card">
                    <div className="cat-head"><span className="cat-name">WhatsApp / Chat</span><label className="toggle"><input type="checkbox" checked={personalizacion} onChange={() => setPersonalizacion(!personalizacion)}/><span className="slider"></span></label></div>
                    <div className="cat-desc">Permite el envío de audios, videos explicativos, mensajes de texto y enlaces directos vía WhatsApp.</div>
                    <div className="datos-sec">
                      <div style={{fontSize:'12px', fontWeight:700, marginBottom:'10px'}}>Acciones:</div>
                      <div className="dato-item"><i className="ti ti-brand-whatsapp"></i><span>Mensajes y audios</span></div>
                      <div className="dato-item"><i className="ti ti-video"></i><span>Videos informativos</span></div>
                    </div>
                  </div>

                  {/* Recontacto por Correo */}
                  <div className="cat-card">
                    <div className="cat-head"><span className="cat-name">Recontacto Correo</span><label className="toggle"><input type="checkbox" checked={optimizacion} onChange={() => setOptimizacion(!optimizacion)}/><span className="slider"></span></label></div>
                    <div className="cat-desc">Envío de correos electrónicos con actualizaciones de su solicitud, material de apoyo y links de interés.</div>
                    <div className="datos-sec">
                      <div style={{fontSize:'12px', fontWeight:700, marginBottom:'10px'}}>Acciones:</div>
                      <div className="dato-item"><i className="ti ti-mail"></i><span>Seguimiento personalizado</span></div>
                      <div className="dato-item"><i className="ti ti-history"></i><span>Historial de contacto</span></div>
                    </div>
                  </div>

                  {/* Optimización de Medios */}
                  <div className="cat-card">
                    <div className="cat-head"><span className="cat-name">Mejora de Contenido</span><label className="toggle"><input type="checkbox" checked={anuncios} onChange={() => setAnuncios(!anuncios)}/><span className="slider"></span></label></div>
                    <div className="cat-desc">Analiza qué videos o audios le son más útiles para personalizar el material multimedia que le enviamos.</div>
                    <div className="datos-sec">
                      <div style={{fontSize:'12px', fontWeight:700, marginBottom:'10px'}}>Acciones:</div>
                      <div className="dato-item"><i className="ti ti-headphones"></i><span>Preferencia de medios</span></div>
                      <div className="dato-item"><i className="ti ti-player-play"></i><span>Interés multimedia</span></div>
                    </div>
                  </div>
                </div>

                <div style={{textAlign:'center', marginTop:'15px'}}>
                  <div style={{fontSize:'14px', fontWeight:800, color:'#0f172a'}}>Privacidad Garantizada</div>
                  <div style={{fontSize:'13px', color:'#64748b'}}>Manejamos su recontacto bajo estrictos estándares de seguridad y transparencia.</div>
                </div>
              </div>
            ) : (
              <div className="hu-content" style={{padding:'30px 40px'}}>
                <div style={{textAlign:'left', marginBottom:'30px'}}>
                  <h2 style={{fontSize:'24px', fontWeight:800, color:'#0f172a', marginBottom:'10px'}}>Cuéntame sobre tu negocio</h2>
                  <p style={{fontSize:'15px', color:'#64748b', lineHeight:'1.6'}}>
                    Tus datos están protegidos según el consentimiento que acabas de otorgar. Solo uso interno — no compartimos con terceros.
                  </p>
                </div>

                <form onSubmit={handleSubmit} style={{display:'grid', gridTemplateColumns:'1fr 1fr', gap:'20px'}}>
                  
                  <div style={{display:'flex', flexDirection:'column', gap:'8px'}}>
                    <label style={{fontSize:'13px', fontWeight:700, color:'#0f172a'}}>Nombre completo *</label>
                    <input 
                      type="text" 
                      placeholder="Juan Pérez" 
                      required 
                      value={formData.nombre}
                      onChange={(e) => setFormData({...formData, nombre: e.target.value})}
                      style={{padding:'12px 16px', borderRadius:'10px', border:'1px solid #cbd5e1', fontSize:'14px', background:'#f8fafc', outline:'none', color:'#0f172a'}}
                    />
                  </div>

                  <div style={{display:'flex', flexDirection:'column', gap:'8px'}}>
                    <label style={{fontSize:'13px', fontWeight:700, color:'#0f172a'}}>WhatsApp *</label>
                    <input 
                      type="tel" 
                      placeholder="+593 99 000 0000" 
                      required 
                      value={formData.whatsapp}
                      onChange={(e) => setFormData({...formData, whatsapp: e.target.value})}
                      style={{padding:'12px 16px', borderRadius:'10px', border:'1px solid #cbd5e1', fontSize:'14px', background:'#f8fafc', outline:'none', color:'#0f172a'}}
                    />
                  </div>

                  <div style={{display:'flex', flexDirection:'column', gap:'8px'}}>
                    <label style={{fontSize:'13px', fontWeight:700, color:'#0f172a'}}>Email *</label>
                    <input 
                      type="email" 
                      placeholder="juan@minegocio.com" 
                      required 
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      style={{padding:'12px 16px', borderRadius:'10px', border:'1px solid #cbd5e1', fontSize:'14px', background:'#f8fafc', outline:'none', color:'#0f172a'}}
                    />
                  </div>

                  <div style={{display:'flex', flexDirection:'column', gap:'8px'}}>
                    <label style={{fontSize:'13px', fontWeight:700, color:'#0f172a'}}>Ciudad</label>
                    <input 
                      type="text" 
                      placeholder="Loja, Quito, Guayaquil..." 
                      value={formData.ciudad}
                      onChange={(e) => setFormData({...formData, ciudad: e.target.value})}
                      style={{padding:'12px 16px', borderRadius:'10px', border:'1px solid #cbd5e1', fontSize:'14px', background:'#f8fafc', outline:'none', color:'#0f172a'}}
                    />
                  </div>

                  <div style={{display:'flex', flexDirection:'column', gap:'8px'}}>
                    <label style={{fontSize:'13px', fontWeight:700, color:'#0f172a'}}>Sector / tipo de negocio</label>
                    <select 
                      value={sector}
                      onChange={(e) => setSector(e.target.value)}
                      style={{padding:'12px 16px', borderRadius:'10px', border:'1px solid #cbd5e1', fontSize:'14px', background:'#f8fafc', outline:'none', color:'#0f172a', appearance:'none', cursor:'pointer'}}
                    >
                      <option value="">Selecciona...</option>
                      <option value="ecommerce">E-commerce</option>
                      <option value="servicios">Servicios</option>
                      <option value="inmobiliaria">Inmobiliaria</option>
                      <option value="tecnologia">Tecnología</option>
                      <option value="otro">Otro</option>
                    </select>
                    {sector === 'otro' && (
                      <input 
                        type="text" 
                        placeholder="Describe tu sector..." 
                        value={sectorManual}
                        onChange={(e) => setSectorManual(e.target.value)}
                        style={{padding:'12px 16px', borderRadius:'10px', border:'1px solid #cbd5e1', fontSize:'14px', background:'#f8fafc', outline:'none', color:'#0f172a', marginTop:'-4px'}}
                      />
                    )}
                  </div>

                  <div style={{display:'flex', flexDirection:'column', gap:'8px'}}>
                    <label style={{fontSize:'13px', fontWeight:700, color:'#0f172a'}}>¿Cuál es tu mayor problema hoy?</label>
                    <select 
                      value={problema}
                      onChange={(e) => setProblema(e.target.value)}
                      style={{padding:'12px 16px', borderRadius:'10px', border:'1px solid #cbd5e1', fontSize:'14px', background:'#f8fafc', outline:'none', color:'#0f172a', appearance:'none', cursor:'pointer'}}
                    >
                      <option value="">Selecciona...</option>
                      <option value="ventas">Ventas y clientes</option>
                      <option value="procesos">Procesos manuales</option>
                      <option value="visibilidad">Poca visibilidad</option>
                      <option value="otro">Otro problema</option>
                    </select>
                    {problema === 'otro' && (
                      <input 
                        type="text" 
                        placeholder="Cuéntame más sobre tu problema..." 
                        value={problemaManual}
                        onChange={(e) => setProblemaManual(e.target.value)}
                        style={{padding:'12px 16px', borderRadius:'10px', border:'1px solid #cbd5e1', fontSize:'14px', background:'#f8fafc', outline:'none', color:'#0f172a', marginTop:'-4px'}}
                      />
                    )}
                  </div>

                  <div style={{gridColumn:'1 / -1', marginTop:'15px'}}>
                    <button 
                      type="submit" 
                      disabled={isSubmitting}
                      className="btn-primary" 
                      style={{width:'100%', padding:'16px', fontSize:'16px', fontWeight:800, opacity: isSubmitting ? 0.7 : 1, cursor: isSubmitting ? 'not-allowed' : 'pointer'}}
                    >
                      {isSubmitting ? 'Enviando...' : 'Enviar mensaje'}
                    </button>
                  </div>
                </form>
              </div>
            )}

            {!showForm && (
              <div className="hu-footer">
                <button className="link-btn" onClick={() => setIsExpanded(false)}><i className="ti ti-adjustments-horizontal"></i> CONFIGURAR</button>
                <button className="btn-primary" onClick={handleGuardar}>GUARDAR PREFERENCIAS</button>
                <button className="link-btn" style={{color:'#64748b', fontSize:'13px'}}>POLÍTICA DE PRIVACIDAD</button>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default CookieBannerSPDP;
