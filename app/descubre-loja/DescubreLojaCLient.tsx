'use client';

import React, { useState, useEffect } from 'react';
import {
  Sparkles,
  Bot,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  MessageCircle,
  Clock,
  TrendingUp,
  ExternalLink,
  ChevronDown,
  AlertCircle,
} from 'lucide-react';

import { CATEGORIAS_DEFINIDAS, CategoriaInfo, WHATSAPP_CESAR_REYES } from '@/lib/descubre-loja-constants';

export interface PropuestaConfig {
  nombreNegocio?: string;
  categoriaKey?: string;
  categoriaCustom?: string;
  precioMensual?: number;
  precioAnual?: number;
  whatsappNumero?: string;
  diasVigencia?: number;
}

export default function DescubreLojaClient({
  config = {},
}: {
  config?: PropuestaConfig;
}) {
  const nombreNegocio = config.nombreNegocio?.trim() || 'su negocio';
  const esPersonalizado = Boolean(config.nombreNegocio && config.nombreNegocio !== 'su negocio');

  // Determinar categoría y precios
  const catKey = (config.categoriaKey || '').toLowerCase();
  const catData = CATEGORIAS_DEFINIDAS[catKey] || CATEGORIAS_DEFINIDAS.restaurantes;

  const nombreCategoria = config.categoriaCustom || catData.nombre;
  const coberturaTexto = catData.cobertura;
  const precioMensual = config.precioMensual || catData.mensual;
  const precioAnual = config.precioAnual || catData.anual;
  const cuposMax = catData.cuposMax || 10;
  
  // Número oficial de César Reyes
  const whatsappNumero = config.whatsappNumero || WHATSAPP_CESAR_REYES;

  // Temporizador visual
  const diasInit = config.diasVigencia || 4;
  const [time, setTime] = useState({ d: diasInit, h: 14, m: 28, s: 19 });

  useEffect(() => {
    const t = setInterval(() => {
      setTime((prev) => {
        if (prev.s > 0) return { ...prev, s: prev.s - 1 };
        if (prev.m > 0) return { ...prev, m: 59, s: 59 };
        if (prev.h > 0) return { ...prev, h: prev.h - 1, m: 59, s: 59 };
        if (prev.d > 0) return { ...prev, d: prev.d - 1, h: 23, m: 59, s: 59 };
        return prev;
      });
    }, 1000);
    return () => clearInterval(t);
  }, []);

  const waMensaje = esPersonalizado
    ? `Hola César, vi la propuesta de afiliación exclusiva para ${nombreNegocio} en el Asesor Turístico de Agenda Cultural Loja y deseo confirmar mi cupo.`
    : `Hola César, vi la propuesta para ser Aliado Exclusivo en el Asesor Turístico de Agenda Cultural Loja y deseo afiliar mi negocio.`;

  const waLink = `https://wa.me/${whatsappNumero}?text=${encodeURIComponent(waMensaje)}`;

  return (
    <div className="min-h-screen bg-[#121212] text-white selection:bg-cyan-500 selection:text-white font-sans antialiased overflow-x-hidden">
      
      {/* Luz ambiental sutil branding César Reyes */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[550px] sm:w-[750px] h-[320px] bg-cyan-500/10 blur-[130px] rounded-full" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6">
        
        {/* ═══ 1. HERO MINIMALISTA & IMPACTANTE ═══ */}
        <section className="min-h-[85vh] sm:min-h-[90vh] flex flex-col items-center justify-center text-center pt-24 pb-12">
          
          {/* Eyebrow */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/25 text-cyan-400 text-[11px] sm:text-xs font-semibold uppercase tracking-wider mb-6">
            <Sparkles size={13} className="shrink-0" />
            <span>Alianza con agendaculturalloja.com</span>
          </div>

          {/* Título Principal */}
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight leading-[1.18] sm:leading-[1.12] mb-8 max-w-3xl">
            Miles de turistas buscan qué hacer en Loja.{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-cyan-300 to-blue-400 block mt-2">
              Nuestro Asesor Turístico les dirá que elijan {esPersonalizado ? `a ${nombreNegocio}` : 'su negocio'}.
            </span>
          </h1>

          {/* Flecha indicadora de scroll */}
          <a
            href="#como-funciona"
            aria-label="Continuar leyendo"
            className="group inline-flex flex-col items-center gap-2 text-gray-400 hover:text-cyan-400 transition-colors mt-4 p-2"
          >
            <span className="text-xs uppercase tracking-widest font-medium group-hover:text-cyan-400 transition-colors">
              Descubra cómo
            </span>
            <div className="w-9 h-9 rounded-full border border-white/10 bg-white/5 flex items-center justify-center group-hover:border-cyan-500/40 group-hover:bg-cyan-500/10 transition-all animate-bounce">
              <ChevronDown size={18} className="text-cyan-400" />
            </div>
          </a>
        </section>

        {/* ═══ 2. DETALLE DE LA PROPUESTA ═══ */}
        <section id="como-funciona" className="scroll-mt-20 pt-10 pb-16 text-center">
          <div className="max-w-2xl mx-auto bg-white/[0.02] border border-white/10 rounded-3xl p-6 sm:p-10 mb-14">
            <p className="text-gray-200 text-base sm:text-lg md:text-xl leading-relaxed mb-8 text-balance">
              <a
                href="https://agendaculturalloja.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-cyan-400 underline underline-offset-4 hover:text-cyan-300 font-semibold inline-flex items-center gap-1"
              >
                Agenda Cultural Loja <ExternalLink size={15} />
              </a>{' '}
              es la plataforma con más movimiento donde turistas y lojanos consultan eventos día a día. Cuando le pregunten al Asesor Virtual dónde hospedarse, cenar o salir cerca del evento,{' '}
              <strong className="text-white">
                {esPersonalizado ? nombreNegocio : 'su negocio'} será el recomendado exclusivo
              </strong>.
            </p>

            <a
              href="#oferta"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold text-sm sm:text-base shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 hover:scale-[1.02] active:scale-[0.98] transition-all"
            >
              <span>Ver propuesta para {nombreNegocio}</span>
              <ArrowRight size={18} />
            </a>
          </div>

          {/* ═══ SIMULACIÓN VISUAL EN VIVO ═══ */}
          <div className="bg-[#181818] border border-cyan-500/20 rounded-2xl sm:rounded-3xl p-4 sm:p-7 shadow-2xl relative overflow-hidden text-left">
            
            {/* Header del simulador */}
            <div className="flex flex-wrap items-center justify-between gap-2 border-b border-white/10 pb-3 mb-5">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400 shrink-0">
                  <Bot size={18} />
                </div>
                <div>
                  <div className="text-xs sm:text-sm font-bold text-white leading-tight">
                    Asesor Virtual de Agenda Cultural Loja
                  </div>
                  <div className="text-[10px] sm:text-xs text-gray-400">
                    Conectado a turistas y visitantes en tiempo real
                  </div>
                </div>
              </div>
              <span className="text-[10px] sm:text-[11px] font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 px-2.5 py-0.5 rounded-full whitespace-nowrap">
                ● En vivo
              </span>
            </div>

            {/* Burbujas de chat */}
            <div className="space-y-4 max-w-xl mx-auto">
              {/* Mensaje del turista */}
              <div className="flex items-start gap-2 sm:gap-3">
                <div className="w-7 h-7 rounded-full bg-white/10 flex items-center justify-center text-xs font-bold text-gray-300 shrink-0 mt-0.5">
                  T
                </div>
                <div className="bg-white/5 border border-white/10 rounded-2xl rounded-tl-sm p-3.5 sm:p-4 text-xs sm:text-sm text-gray-200 leading-relaxed">
                  <p className="font-semibold text-[11px] text-gray-400 mb-1">Turista en Loja:</p>
                  "Hola, voy hoy al evento cultural en el centro. ¿Qué lugar auténtico me recomiendas para cenar y pasar la noche cerca?"
                </div>
              </div>

              {/* Respuesta del Asesor */}
              <div className="flex items-start gap-2 sm:gap-3">
                <div className="w-7 h-7 rounded-full bg-cyan-500/20 border border-cyan-500/40 flex items-center justify-center text-xs font-bold text-cyan-400 shrink-0 mt-0.5">
                  AI
                </div>
                <div className="bg-cyan-950/40 border border-cyan-500/40 rounded-2xl rounded-tl-sm p-3.5 sm:p-4 text-xs sm:text-sm text-cyan-50 leading-relaxed flex-1">
                  <p className="font-semibold text-[11px] text-cyan-400 mb-1.5 flex items-center gap-1.5">
                    <Sparkles size={12} className="shrink-0" /> Recomendación Exclusiva Aliada:
                  </p>
                  <p className="mb-3">
                    "Para disfrutar la mejor experiencia gastronómica y de descanso cerca del evento, te recomiendo directamente a nuestro aliado exclusivo:{' '}
                    <strong>{nombreNegocio}</strong>."
                  </p>
                  
                  {/* Tarjeta de negocio responsive */}
                  <div className="bg-black/50 border border-cyan-500/30 rounded-xl p-3 flex flex-col sm:flex-row sm:items-center justify-between gap-2.5">
                    <div>
                      <span className="font-bold text-white text-xs sm:text-sm block">{nombreNegocio}</span>
                      <span className="text-gray-400 text-[10px] sm:text-[11px]">{nombreCategoria} · Aliado Oficial</span>
                    </div>
                    <a
                      href={waLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center px-3 py-1.5 bg-cyan-500 text-black font-bold rounded-lg text-[11px] self-start sm:self-auto hover:bg-cyan-400 transition-colors"
                    >
                      Contactar / Reservar
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-5 pt-3.5 border-t border-white/5 text-center text-[11px] sm:text-xs text-gray-400">
              🔒 <strong>Exclusividad garantizada:</strong> El Asesor Turístico solo recomienda a los negocios afiliados. Nunca a su competencia no afiliada.
            </div>
          </div>
        </section>

        {/* ═══ 3. LOS 3 BENEFICIOS DIRECTOS ═══ */}
        <section className="grid sm:grid-cols-3 gap-4 sm:gap-5 mb-14 sm:mb-20">
          <div className="bg-white/[0.03] border border-white/10 rounded-2xl p-5 sm:p-6 hover:border-cyan-500/30 transition-all">
            <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 mb-3.5">
              <TrendingUp size={20} />
            </div>
            <h3 className="font-bold text-white text-base mb-1.5">Tráfico real y posicionado</h3>
            <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">
              No paga publicidad por clics vacíos. Capta al turista en el momento en que busca qué hacer y necesita resolver de inmediato dónde comer y dormir.
            </p>
          </div>

          <div className="bg-white/[0.03] border border-white/10 rounded-2xl p-5 sm:p-6 hover:border-cyan-500/30 transition-all">
            <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 mb-3.5">
              <ShieldCheck size={20} />
            </div>
            <h3 className="font-bold text-white text-base mb-1.5">Cupo limitado por categoría</h3>
            <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">
              Máximo <strong className="text-cyan-400">{cuposMax} cupos oficiales</strong> para {nombreCategoria}. No es una lista infinita donde nadie destaca.
            </p>
          </div>

          <div className="bg-white/[0.03] border border-white/10 rounded-2xl p-5 sm:p-6 hover:border-cyan-500/30 transition-all">
            <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 mb-3.5">
              <Clock size={20} />
            </div>
            <h3 className="font-bold text-white text-base mb-1.5">Cero esfuerzo operativo</h3>
            <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">
              Nosotros integramos su ficha. El Asesor Virtual atiende y recomienda 24/7 y deriva a los clientes directo a su WhatsApp o recepción.
            </p>
          </div>
        </section>

        {/* ═══ 4. PROPUESTA Y PRECIO EXCLUSIVO DE SU CATEGORÍA ═══ */}
        <section id="oferta" className="scroll-mt-16 mb-16 sm:mb-24">
          <div className="bg-gradient-to-b from-[#1c1c1c] to-[#141414] border-2 border-cyan-500/40 rounded-2xl sm:rounded-3xl p-5 sm:p-10 shadow-2xl relative">
            
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-6 border-b border-white/10">
              <div>
                <span className="text-xs uppercase tracking-wider text-cyan-400 font-bold block mb-1">
                  Membresía Anual de Afiliación
                </span>
                <h2 className="text-2xl sm:text-3xl font-black text-white">
                  Propuesta para {nombreNegocio}
                </h2>
                <p className="text-gray-400 text-xs sm:text-sm mt-0.5">
                  Categoría asignada: <strong className="text-cyan-300">{nombreCategoria}</strong>
                </p>
              </div>

              <div className="bg-cyan-500/10 border border-cyan-500/30 rounded-xl px-3.5 py-2 text-cyan-300 text-xs font-semibold self-start sm:self-auto">
                🎁 Oferta 10x12: Paga 10 meses y recibe 12
              </div>
            </div>

            {/* Badge de Urgencia de Cupos Limitados para esta Categoría */}
            <div className="my-5 p-3.5 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-between gap-3">
              <div className="flex items-center gap-2.5 text-xs sm:text-sm text-amber-200">
                <AlertCircle size={17} className="text-amber-400 shrink-0" />
                <span>
                  <strong>Cupos estrictamente limitados:</strong> Máximo <strong>{cuposMax} plazas</strong> para {nombreCategoria} en toda la red.
                </span>
              </div>
              <span className="px-2.5 py-0.5 rounded-full bg-amber-400/20 text-amber-300 text-[11px] font-bold shrink-0 hidden sm:inline-block">
                Fase de Lanzamiento
              </span>
            </div>

            {/* Tarjeta de Tarifa Específica del Negocio */}
            <div className="py-6 border-b border-white/10">
              <div className="p-5 sm:p-6 rounded-2xl bg-white/[0.03] border border-cyan-500/30 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <div className="font-bold text-white text-base sm:text-lg mb-0.5">
                    {nombreCategoria}
                  </div>
                  <div className="text-xs text-cyan-400 font-medium">
                    {coberturaTexto}
                  </div>
                </div>

                <div className="flex items-baseline sm:text-right gap-3 sm:gap-4">
                  <div>
                    <span className="text-gray-400 text-xs mr-1">Mensual:</span>
                    <span className="text-white font-bold text-base sm:text-lg">${precioMensual} USD</span>
                  </div>
                  <div className="bg-cyan-500/15 border border-cyan-500/30 px-3.5 py-1.5 rounded-xl">
                    <span className="text-gray-300 text-xs mr-1.5">Anual (10x12):</span>
                    <span className="text-cyan-300 font-black text-lg sm:text-2xl">${precioAnual} USD</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Facilidades de pago */}
            <div className="py-5 border-b border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs sm:text-sm text-gray-300">
              <div className="flex items-center gap-2">
                <CheckCircle2 size={16} className="text-cyan-400 shrink-0" />
                <span>Pago de contado anual: <strong>10% de descuento adicional</strong></span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 size={16} className="text-cyan-400 shrink-0" />
                <span>O difiérelo en <strong>12 cuotas sin intereses</strong> con tarjeta de crédito</span>
              </div>
            </div>

            {/* Temporizador de Urgencia y CTA */}
            <div className="pt-6 sm:pt-8 text-center">
              <p className="text-gray-300 text-xs sm:text-sm mb-4">
                Plazo de reserva para {nombreNegocio} antes de liberar este cupo:
              </p>

              <div className="inline-flex items-center gap-1.5 sm:gap-2 p-2.5 sm:p-3 bg-black/40 border border-white/10 rounded-2xl mb-6">
                {[
                  { v: time.d, l: 'Días' },
                  { v: time.h, l: 'Horas' },
                  { v: time.m, l: 'Min' },
                  { v: time.s, l: 'Seg' },
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-1.5">
                    <div className="px-2.5 py-1 bg-white/5 rounded-lg text-center min-w-[42px] sm:min-w-[48px]">
                      <div className="text-lg sm:text-xl font-bold font-mono text-cyan-400">
                        {String(item.v).padStart(2, '0')}
                      </div>
                      <div className="text-[8px] sm:text-[9px] uppercase text-gray-400">{item.l}</div>
                    </div>
                    {i < 3 && <span className="text-gray-600 font-bold text-xs">:</span>}
                  </div>
                ))}
              </div>

              <div>
                <a
                  href={waLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3.5 sm:px-8 sm:py-4 rounded-xl bg-[#25D366] hover:bg-[#20bd5a] text-black font-extrabold text-sm sm:text-base shadow-lg shadow-[#25D366]/20 hover:scale-[1.02] active:scale-[0.98] transition-all"
                >
                  <MessageCircle size={19} className="fill-black shrink-0" />
                  <span>Confirmar cupo para {nombreNegocio} por WhatsApp</span>
                </a>
              </div>
            </div>

          </div>
        </section>

      </div>
    </div>
  );
}
