'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, CheckCircle2, ChevronRight, Target, CalendarDays, Award, ArrowRight, Zap, Clock, Shield } from 'lucide-react';

interface CotizacionData {
  id: string;
  portada: {
    etiqueta: string;
    titulo_principal: string;
    titulo_destacado: string;
    subtitulo: string;
    preparado_para: string;
    preparado_por: string;
    fecha: string;
    url_logo_cliente?: string;
    imagen_url?: string;
    url_fondo?: string;
  };
  introduccion: {
    titulo: string;
    parrafos: string[];
  };
  etapas: {
    numero: string;
    etiqueta_tiempo: string;
    nombre: string;
    eslogan: string;
    precio: string;
    precio_subtitulo: string;
    descripcion: string;
    entregables: string[];
    nota_especial?: string;
    detalles_pie: string[];
  }[];
  como_funciona?: {
    titulo: string;
    pasos: {
      momento: string;
      descripcion: string;
    }[];
  };
  modalidades?: {
    titulo: string;
    subtitulo: string;
    opciones: {
      nombre: string;
      descripcion: string;
      precio: string;
      detalle_precio: string;
    }[];
  };
  comparativa?: {
    titulo: string;
    filas: {
      antes: string;
      despues: string;
    }[];
  };
  ir_mas_alla?: {
    titulo: string;
    parrafos: string[];
  };
  cierre: {
    titulo: string;
    texto: string;
    frase_final: string;
    frase_bisagra?: string;
    mapa_url?: string;
    mapa_embed_url?: string;
    mapa_iframe?: string;
    cta_texto?: string;
    cta_url?: string;
    pie_texto?: string;
  };
  validez?: string;
}

export default function CotizacionViewer({ data }: { data: CotizacionData }) {
  const [openEtapas, setOpenEtapas] = useState<Record<string, boolean>>({ "01": true });
  const [showFullIntro, setShowFullIntro] = useState(false);

  const toggleEtapa = (num: string) => {
    setOpenEtapas(prev => ({
      ...prev,
      [num]: !prev[num]
    }));
  };

  if (!data) return <div className="p-20 text-center animate-pulse text-slate-500">Generando experiencia...</div>;

  const fadeInUp: any = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } }
  };

  return (
    <div className="min-h-screen bg-slate-50 font-sans selection:bg-amber-500/30 text-slate-800">
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700&family=Outfit:wght@300;400;600;800&family=Playfair+Display:ital,wght@0,400;0,600;1,400&family=Poiret+One&display=swap');
        
        .font-serif-elegant { font-family: 'Playfair Display', serif; }
        .font-outfit { font-family: 'Outfit', sans-serif; }
        .font-montserrat { font-family: 'Montserrat', sans-serif; }
        
        .text-gold { color: #d4af37; }
        .bg-gold { background-color: #d4af37; }
        .border-gold { border-color: #d4af37; }
        
        .glass-panel {
          background: rgba(255, 255, 255, 0.8);
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
          border: 1px solid rgba(255,255,255,0.4);
        }
        
        .quote-box {
          font-family: 'Poiret One', cursive;
          font-size: clamp(24px, 4vw, 32px);
          color: #0A1128;
          max-width: 700px;
          margin: 48px auto;
          line-height: 1.5;
        }
      `}</style>

      {/* PORTADA FULL SCREEN */}
      <section className="relative flex items-center min-h-[100svh] w-full overflow-hidden bg-[#111111]">
        {(data.portada.url_fondo || data.portada.imagen_url) && (
            <motion.div 
              initial={{ scale: 1.1 }}
              animate={{ scale: 1 }}
              transition={{ duration: 1.5, ease: 'easeOut' }}
              className="absolute inset-0 bg-cover bg-center z-0" 
              style={{ backgroundImage: `url(${data.portada.url_fondo || data.portada.imagen_url})` }}
            />
        )}
        <div className="absolute inset-0 z-10 bg-gradient-to-r from-[#111111]/95 via-[#111111]/80 to-transparent"></div>
        
        <div className="container mx-auto px-6 relative z-20 pt-20 pb-16 h-full flex flex-col justify-center">
          {data.portada.url_logo_cliente && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="mb-12"
            >
              <img src={data.portada.url_logo_cliente} alt="Logo Cliente" className="h-12 md:h-16 w-auto object-contain brightness-0 invert opacity-60" />
            </motion.div>
          )}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            <div className="font-outfit text-xs md:text-sm tracking-[0.3em] uppercase text-gold font-bold mb-6 flex items-center gap-4">
              <span className="w-12 h-px bg-gold"></span>
              {data.portada.etiqueta}
            </div>
            
            <h1 className="font-outfit text-4xl md:text-6xl lg:text-7xl font-light text-white leading-[1.1] mb-6 max-w-4xl tracking-tight">
              {data?.portada?.titulo_principal || ""} <br className="hidden md:block"/>
              <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 to-amber-200" dangerouslySetInnerHTML={{ __html: data?.portada?.titulo_destacado || "" }}></span>
            </h1>
            
            <p className="font-montserrat text-lg md:text-xl text-slate-300 max-w-2xl leading-relaxed mb-16 font-light">
              {data?.portada?.subtitulo || ""}
            </p>
          </motion.div>

          {/* META INFO */}
          <motion.div 
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.8, duration: 1 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-8 border-t border-white/10 max-w-4xl"
          >
            <div>
              <p className="font-outfit text-[10px] tracking-widest uppercase text-slate-400 mb-2">Preparado para</p>
              <div className="flex items-center gap-3 text-white font-montserrat font-medium">
                <Target className="w-4 h-4 text-gold" />
                {data.portada.preparado_para}
              </div>
            </div>
            <div>
              <p className="font-outfit text-[10px] tracking-widest uppercase text-slate-400 mb-2">Preparado por</p>
              <div className="flex items-center gap-3 text-white font-montserrat font-medium">
                <Award className="w-4 h-4 text-gold" />
                {data.portada.preparado_por}
              </div>
            </div>
            <div>
              <p className="font-outfit text-[10px] tracking-widest uppercase text-slate-400 mb-2">Fecha</p>
              <div className="flex items-center gap-3 text-white font-montserrat font-medium">
                <CalendarDays className="w-4 h-4 text-gold" />
                {data.portada.fecha}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* INTRODUCCIÓN */}
      <section className="py-24 px-6 relative bg-white">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-b from-slate-50 to-white -skew-x-12 transform origin-top blur-3xl opacity-50 z-0"></div>
        <motion.div 
          initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeInUp}
          className="container mx-auto max-w-4xl relative z-10"
        >
          <div className="font-outfit text-xs tracking-[0.2em] uppercase text-gold font-bold mb-4 flex items-center gap-2">
            <span className="w-8 h-px bg-gold"></span>
            El Punto de Partida
          </div>
          <h2 className="font-serif-elegant text-4xl md:text-5xl text-slate-900 mb-10 leading-tight" dangerouslySetInnerHTML={{ __html: data.introduccion.titulo.replace('\\n', '<br/>') }}></h2>
          
          <div className="space-y-6 font-montserrat text-lg text-slate-600 leading-relaxed max-w-3xl">
            {/* Primer párrafo siempre visible */}
            {data.introduccion.parrafos.length > 0 && (
              <p className="first-letter:text-5xl first-letter:font-serif-elegant first-letter:text-slate-900 first-letter:float-left first-letter:mr-3 first-letter:-mt-1 first-letter:font-medium">
                {data.introduccion.parrafos[0]}
              </p>
            )}

            {/* Párrafos restantes colapsables */}
            {data.introduccion.parrafos.length > 1 && (
              <>
                <AnimatePresence>
                  {showFullIntro && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                      className="space-y-6 overflow-hidden"
                    >
                      {data.introduccion.parrafos.slice(1).map((p, i) => (
                        <p key={i + 1} className="first-letter:text-5xl first-letter:font-serif-elegant first-letter:text-slate-900 first-letter:float-left first-letter:mr-3 first-letter:-mt-1 first-letter:font-medium">{p}</p>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>

                <button
                  onClick={() => setShowFullIntro(!showFullIntro)}
                  className="group flex items-center gap-2 font-outfit text-sm tracking-widest uppercase text-gold hover:text-amber-600 font-bold transition-colors duration-300 mt-4"
                >
                  <span className="w-8 h-px bg-gold group-hover:w-12 transition-all duration-300"></span>
                  {showFullIntro ? 'Leer menos' : 'Seguir leyendo'}
                  <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${showFullIntro ? 'rotate-180' : ''}`} />
                </button>
              </>
            )}
          </div>
        </motion.div>
      </section>

      {/* CÓMO FUNCIONA (Timeline) */}
      {data.como_funciona && data.como_funciona.pasos && data.como_funciona.pasos.length > 0 && (
        <section className="py-24 px-6 relative bg-[#111111] overflow-hidden">
          <div className="absolute top-0 left-1/2 w-px h-full bg-gradient-to-b from-transparent via-gold/20 to-transparent z-0"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-gold opacity-[0.03] blur-[120px] pointer-events-none"></div>

          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeInUp}
            className="container mx-auto max-w-5xl relative z-10"
          >
            <div className="text-center mb-20">
              <div className="font-outfit text-xs tracking-[0.2em] uppercase text-gold font-bold mb-4 justify-center flex items-center gap-2">
                <span className="w-8 h-px bg-gold"></span>
                Funcionamiento
                <span className="w-8 h-px bg-gold"></span>
              </div>
              <h2 className="font-outfit text-4xl md:text-5xl font-light text-white">
                {data.como_funciona.titulo}
              </h2>
            </div>

            <div className="space-y-8">
              {data.como_funciona.pasos.map((paso, idx) => {
                const stepIcons = [Clock, Zap, ArrowRight, Shield];
                const StepIcon = stepIcons[idx % stepIcons.length];
                return (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: idx % 2 === 0 ? -40 : 40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: idx * 0.15, ease: [0.22, 1, 0.36, 1] }}
                    className="relative group"
                  >
                    <div className="flex items-start gap-6 bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-6 md:p-8 hover:bg-white/10 transition-all duration-500 shadow-xl">
                      <div className="w-14 h-14 rounded-2xl bg-gold/10 border border-gold/20 flex items-center justify-center shrink-0 group-hover:scale-110 group-hover:bg-gold/20 transition-all duration-500">
                        <StepIcon className="w-6 h-6 text-gold" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-3">
                          <span className="font-outfit text-[10px] tracking-widest uppercase text-gold font-bold bg-gold/10 px-3 py-1 rounded-full">
                            {String(idx + 1).padStart(2, '0')}
                          </span>
                          <h3 className="font-outfit text-xl font-semibold text-white">{paso.momento}</h3>
                        </div>
                        <p className="font-montserrat text-sm md:text-base text-slate-300 leading-relaxed">{paso.descripcion}</p>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </section>
      )}

      {/* ETAPAS (GLASSMORPHISM SOBRE IMAGEN) */}
      <section className="py-24 px-6 relative overflow-hidden">
        {/* Imagen de fondo solicitada */}
        <div className="absolute inset-0 bg-cover bg-fixed bg-center z-0" style={{ backgroundImage: "url('/images/categorias/analisis-estrategico/analisis-financiero.webp')" }}></div>
        <div className="absolute inset-0 bg-[#111111]/80 z-10 backdrop-blur-sm"></div>

        <motion.div 
          initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}
          className="container mx-auto max-w-5xl relative z-20"
        >
          <div className="text-center mb-20 text-white">
            <div className="font-outfit text-xs tracking-[0.2em] uppercase text-gold font-bold mb-4 justify-center flex items-center gap-2">
              <span className="w-8 h-px bg-gold"></span>
              Estructura Ejecutiva
              <span className="w-8 h-px bg-gold"></span>
            </div>
            <h2 className="font-outfit text-4xl md:text-5xl font-light text-white">Las etapas <span className="font-semibold text-white">propuestas</span></h2>
          </div>

          <div className="space-y-6">
            {data.etapas.map((etapa, idx) => {
              const isOpen = openEtapas[etapa.numero];
              return (
                <motion.div 
                  key={idx}
                  layout
                  className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl overflow-hidden hover:bg-white/10 transition-all duration-500 shadow-2xl"
                >
                  <div 
                    className="p-6 md:p-8 flex flex-col md:flex-row items-start md:items-center gap-6 cursor-pointer group"
                    onClick={() => toggleEtapa(etapa.numero)}
                  >
                    {/* Número Flotante */}
                    <div className="w-16 h-16 rounded-2xl bg-white/10 border border-white/20 flex items-center justify-center font-outfit text-2xl font-bold text-white shrink-0 group-hover:scale-110 group-hover:bg-gold/20 group-hover:text-gold group-hover:border-gold/30 transition-all duration-500">
                      {etapa.numero}
                    </div>

                    {/* Título */}
                    <div className="flex-1 text-white">
                      <div className="font-outfit text-[10px] tracking-widest uppercase text-gold font-bold mb-1">{etapa.etiqueta_tiempo}</div>
                      <h3 className="font-outfit text-2xl font-semibold text-white mb-1">{etapa.nombre}</h3>
                      <p className="font-montserrat text-sm text-slate-300">{etapa.eslogan}</p>
                    </div>

                    {/* Precio y Toggle */}
                    <div className="flex items-center justify-between w-full md:w-auto md:gap-8 pt-4 md:pt-0 border-t md:border-t-0 border-white/10">
                      <div className="text-left md:text-right text-white">
                        <div className="font-outfit text-3xl font-bold text-white tracking-tight">{etapa.precio}</div>
                        <div className="font-montserrat text-xs text-slate-400 uppercase tracking-widest">{etapa.precio_subtitulo}</div>
                      </div>
                      <motion.div 
                        animate={{ rotate: isOpen ? 180 : 0 }}
                        transition={{ type: "spring", stiffness: 200, damping: 20 }}
                        className="w-10 h-10 rounded-full flex items-center justify-center bg-white/10 text-white group-hover:bg-gold group-hover:text-white transition-colors"
                      >
                        <ChevronDown className="w-5 h-5" />
                      </motion.div>
                    </div>
                  </div>

                  {/* CUEPO (Expandible) */}
                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.4, ease: [0.04, 0.62, 0.23, 0.98] }}
                        className="overflow-hidden"
                      >
                        <div className="p-6 md:p-8 pt-0 border-t border-white/10 bg-black/20">
                          <p className="font-montserrat text-base text-slate-300 mt-6 mb-8 max-w-4xl leading-relaxed">
                            {etapa.descripcion}
                          </p>

                          <div className="mb-6">
                            <span className="font-outfit text-[10px] tracking-widest uppercase text-slate-400 font-bold mb-4 block">Entregables Inclusos</span>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                              {etapa.entregables.map((item, i) => (
                                <div key={i} className="flex items-start gap-3 bg-white/5 p-4 rounded-2xl border border-white/5 shadow-sm">
                                  <CheckCircle2 className="w-5 h-5 text-gold shrink-0 mt-0.5" />
                                  <span className="font-montserrat text-sm text-slate-200 leading-snug">{item}</span>
                                </div>
                              ))}
                            </div>
                          </div>

                          {etapa.nota_especial && (
                            <div className="mt-8 p-5 bg-gradient-to-r from-amber-500/10 to-orange-500/5 border border-amber-500/20 rounded-2xl flex items-center gap-4">
                              <div className="w-1 h-10 bg-gold rounded-full"></div>
                              <p className="font-montserrat text-sm italic text-slate-300">
                                {etapa.nota_especial}
                              </p>
                            </div>
                          )}

                          <div className="mt-8 pt-6 border-t border-white/10 flex flex-wrap gap-x-8 gap-y-4">
                            {etapa.detalles_pie.map((detail, i) => (
                              <div key={i} className="font-montserrat text-xs text-slate-400 flex items-center gap-2" dangerouslySetInnerHTML={{ __html: detail.replace(/⏱|📄|✅|📍/, m => `<span class="opacity-50">${m}</span>`) }}></div>
                            ))}
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </section>

      {/* MODALIDADES (Optional) */}
      {data.modalidades && (
        <section className="py-24 px-6 relative bg-[#111111] overflow-hidden">
          <div className="absolute bottom-0 left-0 w-full h-[500px] bg-gold opacity-5 blur-[150px] pointer-events-none"></div>
          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}
            className="container mx-auto max-w-5xl relative z-10"
          >
            <div className="text-center mb-16">
              <div className="font-outfit text-xs tracking-widest uppercase text-gold font-bold mb-4">Flexibilidad Total</div>
              <h2 className="font-outfit text-4xl md:text-5xl font-light text-white mb-4">{data.modalidades.titulo}</h2>
              <p className="font-montserrat text-slate-400 max-w-xl mx-auto">{data.modalidades.subtitulo}</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {data.modalidades.opciones.map((opt, i) => (
                <div key={i} className="glass-panel rounded-3xl p-8 md:p-10 relative group hover:-translate-y-2 transition-transform duration-500">
                  <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
                     <Target className="w-24 h-24 text-white" />
                  </div>
                  <h3 className="font-outfit text-2xl font-semibold text-white mb-4 relative z-10">{opt.nombre}</h3>
                  <p className="font-montserrat text-sm text-slate-300 leading-relaxed mb-10 relative z-10 max-w-sm">{opt.descripcion}</p>
                  
                  <div className="pt-6 border-t border-white/10 relative z-10">
                    <div className="font-outfit text-[10px] tracking-widest uppercase text-gold mb-2">Inversión</div>
                    <div className="font-outfit text-4xl font-bold text-white mb-1">{opt.precio}</div>
                    <div className="font-montserrat text-xs text-slate-400">{opt.detalle_precio}</div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </section>
      )}

      {/* COMPARATIVA (Antes vs Después) */}
      {data.comparativa && data.comparativa.filas && data.comparativa.filas.length > 0 && (
        <section className="py-24 px-6 relative bg-[#111111] overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent"></div>
          <div className="absolute top-1/2 left-0 w-64 h-64 bg-red-500/5 blur-[120px] pointer-events-none"></div>
          <div className="absolute bottom-1/2 right-0 w-64 h-64 bg-emerald-500/5 blur-[120px] pointer-events-none"></div>

          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeInUp}
            className="container mx-auto max-w-5xl relative z-10"
          >
            <div className="text-center mb-16">
              <div className="font-outfit text-xs tracking-[0.2em] uppercase text-gold font-bold mb-4 justify-center flex items-center gap-2">
                <span className="w-8 h-px bg-gold"></span>
                Transformación
                <span className="w-8 h-px bg-gold"></span>
              </div>
              <h2 className="font-outfit text-4xl md:text-5xl font-light text-white">
                {data.comparativa.titulo}
              </h2>
            </div>

            {/* Header Row */}
            <div className="hidden md:grid grid-cols-[1fr_48px_1fr] gap-4 mb-6 px-4">
              <div className="font-outfit text-[10px] tracking-widest uppercase text-red-400/60 font-bold text-center">Antes</div>
              <div></div>
              <div className="font-outfit text-[10px] tracking-widest uppercase text-emerald-400/60 font-bold text-center">Después</div>
            </div>

            <div className="space-y-4">
              {data.comparativa.filas.map((fila, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.12 }}
                  className="grid grid-cols-1 md:grid-cols-[1fr_48px_1fr] gap-4 items-stretch"
                >
                  {/* Antes */}
                  <div className="bg-white/5 backdrop-blur-xl border border-red-500/10 rounded-2xl p-5 md:p-6 flex items-start gap-4 group hover:border-red-500/20 transition-colors duration-300">
                    <div className="w-8 h-8 rounded-lg bg-red-500/10 flex items-center justify-center shrink-0 mt-0.5">
                      <span className="text-red-400 text-sm">✕</span>
                    </div>
                    <p className="font-montserrat text-sm text-slate-400 leading-relaxed">{fila.antes}</p>
                  </div>

                  {/* Arrow */}
                  <div className="hidden md:flex items-center justify-center">
                    <div className="w-10 h-10 rounded-full bg-gold/10 border border-gold/20 flex items-center justify-center">
                      <ArrowRight className="w-4 h-4 text-gold" />
                    </div>
                  </div>
                  {/* Mobile arrow */}
                  <div className="flex md:hidden items-center justify-center -my-1">
                    <ChevronDown className="w-5 h-5 text-gold/40" />
                  </div>

                  {/* Después */}
                  <div className="bg-white/5 backdrop-blur-xl border border-emerald-500/10 rounded-2xl p-5 md:p-6 flex items-start gap-4 group hover:border-emerald-500/20 transition-colors duration-300">
                    <div className="w-8 h-8 rounded-lg bg-emerald-500/10 flex items-center justify-center shrink-0 mt-0.5">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                    </div>
                    <p className="font-montserrat text-sm text-slate-200 leading-relaxed">{fila.despues}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>
      )}

      {/* IR MÁS ALLÁ */}
      {data.ir_mas_alla && data.ir_mas_alla.parrafos && data.ir_mas_alla.parrafos.length > 0 && (
        <section className="py-20 px-6 relative bg-slate-50 overflow-hidden">
          <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent"></div>
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeInUp}
            className="container mx-auto max-w-4xl relative z-10"
          >
            <div className="bg-white border border-slate-200/80 rounded-3xl p-8 md:p-12 shadow-lg relative overflow-hidden">
              <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-bl from-gold/5 to-transparent pointer-events-none"></div>
              <div className="relative z-10">
                <div className="font-outfit text-xs tracking-[0.2em] uppercase text-gold font-bold mb-4 flex items-center gap-2">
                  <span className="w-8 h-px bg-gold"></span>
                  Nota Adicional
                </div>
                <h2 className="font-serif-elegant text-3xl md:text-4xl text-slate-900 mb-8 leading-tight">
                  {data.ir_mas_alla.titulo}
                </h2>
                <div className="space-y-5">
                  {data.ir_mas_alla.parrafos.map((p, i) => (
                    <p key={i} className="font-montserrat text-base text-slate-500 leading-relaxed">{p}</p>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </section>
      )}

      {/* CIERRE MONOLÍTICO */}
      <section className="py-32 px-6 bg-white relative overflow-hidden">
        <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent"></div>
        <motion.div 
          initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}
          className="container mx-auto max-w-4xl text-center"
        >
          {/* Frase Bisagra */}
          {data.cierre.frase_bisagra && (
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="font-outfit text-2xl md:text-3xl text-slate-500 mb-12 font-light italic leading-relaxed"
            >
              "{data.cierre.frase_bisagra}"
            </motion.p>
          )}

          <div className="inline-flex items-center justify-center p-4 rounded-full bg-slate-50 border border-slate-100 mb-10 text-gold shadow-sm">
             <Target className="w-8 h-8" />
          </div>
          
          <h2 className="font-outfit text-5xl md:text-7xl font-bold tracking-tight text-slate-900 mb-8 leading-[1.1]">{data.cierre.titulo}</h2>
          
          <div 
            className="font-montserrat text-xl text-slate-600 leading-relaxed mb-16 max-w-2xl mx-auto"
            dangerouslySetInnerHTML={{ __html: data.cierre.texto }}
          />

          {/* Mapa Embebido con Botón Flotante */}
          <div className="relative mb-16 rounded-[2rem] overflow-hidden border border-slate-200 shadow-2xl p-2 bg-slate-50 max-w-5xl mx-auto w-full group">
            <iframe 
              src="https://maps.google.com/maps?q=-4.0008611,-79.199&hl=es&z=18&t=&ie=UTF8&iwloc=B&output=embed"
              width="100%"
              height="450"
              className="rounded-[1.5rem] grayscale hover:grayscale-0 transition-all duration-1000 ease-in-out min-h-[400px]"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
            
            {/* Botón de ubicación flotante */}
            <div className="absolute top-6 left-6 z-10">
              <a 
                href="https://maps.app.goo.gl/jdZgBYatRApSHLnTA"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-white/90 backdrop-blur-md hover:bg-white text-slate-700 px-6 py-3 rounded-xl font-montserrat text-xs font-bold transition-all duration-300 hover:scale-105 active:scale-95 border border-slate-200/50 shadow-xl"
              >
                📍 Ver ubicación de la oficina en Google Maps
              </a>
            </div>
          </div>





          {/* CTA Button */}
          {data.cierre.cta_texto && data.cierre.cta_url && (
            <div className="mb-8">
              <a 
                href={data.cierre.cta_url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-4 bg-[#111111] hover:bg-gold text-white px-10 py-6 rounded-full font-outfit text-lg font-bold transition-all duration-500 hover:scale-105 active:scale-95 shadow-2xl shadow-black/20 hover:shadow-gold/40 group"
              >
                {data.cierre.cta_texto}
                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-white/20 group-hover:translate-x-1 transition-all">
                  <ChevronRight className="w-6 h-6" />
                </div>
              </a>
            </div>
          )}

          {/* Pie Texto */}
          {data.cierre.pie_texto && (
            <p className="font-montserrat text-sm text-slate-400 mb-16 tracking-wide">
              {data.cierre.pie_texto}
            </p>
          )}
          
          <div className="quote-box" dangerouslySetInnerHTML={{ __html: (data?.cierre?.frase_final || "").replace(/<span>(.*?)<\/span>/g, '<span class="text-gold font-bold">$1</span>') }}>
          </div>

          {/* Validez */}
          {data.validez && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-12 pt-8 border-t border-slate-100"
            >
              <div className="inline-flex items-center gap-3 bg-slate-50 border border-slate-200 rounded-full px-6 py-3 font-montserrat text-sm text-slate-500">
                <CalendarDays className="w-4 h-4 text-gold" />
                {data.validez}
              </div>
            </motion.div>
          )}
        </motion.div>
      </section>
    </div>
  );
}
