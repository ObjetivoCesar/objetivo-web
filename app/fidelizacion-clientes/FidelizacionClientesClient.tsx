'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  MessageCircle,
  Users,
  TrendingUp,
  Clock,
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  Sparkles,
  Calendar,
  Bell,
  RefreshCw,
  Gift,
  Building2,
  ChevronDown,
  ChevronRight,
  DollarSign,
  Wrench,
  Smartphone,
  Award,
  Layers,
  HeartHandshake
} from 'lucide-react';

const WHATSAPP_URL =
  'https://wa.me/593963410409?text=Hola%20C%C3%A9sar%2C%20quiero%20conocer%20c%C3%B3mo%20funcionar%C3%ADa%20el%20Sistema%20de%20Fidelizaci%C3%B3n%20y%20CRM%20WhatsApp%20en%20mi%20negocio';

/** Mockup Interactivo de Smartphone con Notificación de Fidelización */
const MobilePhoneMockup = () => {
  return (
    <div className="relative mx-auto w-[290px] sm:w-[325px]">
      {/* Resplandor ambiental */}
      <div className="absolute inset-0 bg-gradient-to-tr from-amber-500/30 via-orange-500/20 to-emerald-500/20 blur-[70px] rounded-full scale-95 -z-10 animate-pulse" />

      {/* Chasis celular */}
      <div className="relative bg-zinc-950/90 backdrop-blur-xl border-2 border-zinc-700/80 rounded-[3rem] p-3.5 shadow-2xl shadow-black/90">
        {/* Dynamic Island */}
        <div className="w-24 h-5 bg-zinc-900 rounded-full mx-auto mb-3 flex items-center justify-center">
          <div className="w-2.5 h-2.5 rounded-full bg-zinc-700 mr-2" />
          <div className="w-2 h-2 rounded-full bg-emerald-500/70" />
        </div>

        {/* Pantalla Activa de Fidelización */}
        <div className="bg-zinc-900/95 rounded-[2.2rem] overflow-hidden p-4 space-y-3.5 border border-zinc-800 text-xs">
          {/* Header WhatsApp CRM */}
          <div className="flex items-center justify-between border-b border-zinc-800/80 pb-2.5">
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-full bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-emerald-400 font-bold text-[11px]">
                CRM
              </div>
              <div>
                <p className="font-extrabold text-white text-[11px] leading-tight">Fideliza WhatsApp</p>
                <p className="text-[9px] text-emerald-400 flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" /> Activo 24/7
                </p>
              </div>
            </div>
            <span className="text-[9px] bg-zinc-800 text-zinc-300 px-2 py-0.5 rounded-full">Automático</span>
          </div>

          {/* Tarjeta de Cliente Activo */}
          <div className="bg-zinc-800/80 border border-zinc-700/60 rounded-xl p-2.5 space-y-1.5">
            <div className="flex items-center justify-between">
              <span className="text-[10px] text-amber-400 font-bold">Ficha de Cliente</span>
              <span className="text-[9px] text-zinc-400">Hace 3 min</span>
            </div>
            <p className="text-[12px] font-bold text-white">Carlos Méndez</p>
            <div className="grid grid-cols-2 gap-1.5 pt-1 text-[9px] text-zinc-300">
              <div className="bg-zinc-900/70 p-1.5 rounded-lg border border-zinc-800">
                <span className="text-zinc-500 block">Compra:</span>
                <span className="font-semibold text-white">Servicio Premium</span>
              </div>
              <div className="bg-zinc-900/70 p-1.5 rounded-lg border border-zinc-800">
                <span className="text-zinc-500 block">Garantía:</span>
                <span className="font-semibold text-amber-300">Vence en 15 días</span>
              </div>
            </div>
          </div>

          {/* Notificación Automática Generada */}
          <div className="bg-emerald-950/40 border border-emerald-500/40 rounded-xl p-2.5 space-y-1">
            <div className="flex items-center justify-between text-emerald-400 font-semibold text-[9px]">
              <span className="flex items-center gap-1">
                <Bell className="w-3 h-3" /> Recordatorio Enviado
              </span>
              <span>10:42 AM</span>
            </div>
            <p className="text-[10px] text-zinc-200 leading-snug">
              &quot;Hola Carlos, tu garantía vence pronto. Tienes 1 revisión gratuita agendada para este mes.&quot;
            </p>
            <div className="pt-1 flex items-center justify-between text-[9px]">
              <span className="text-emerald-400 font-bold">Respuesta del cliente:</span>
              <span className="text-zinc-400">¡Confirmo cita el sábado!</span>
            </div>
          </div>

          {/* Métricas del Mes */}
          <div className="grid grid-cols-3 gap-1.5 text-center">
            <div className="bg-zinc-800/60 p-2 rounded-xl border border-zinc-700/40">
              <p className="font-extrabold text-amber-400 text-sm">78%</p>
              <p className="text-[8px] text-zinc-400">Recompra</p>
            </div>
            <div className="bg-zinc-800/60 p-2 rounded-xl border border-zinc-700/40">
              <p className="font-extrabold text-cyan-400 text-sm">240</p>
              <p className="text-[8px] text-zinc-400">Avisos dados</p>
            </div>
            <div className="bg-zinc-800/60 p-2 rounded-xl border border-zinc-700/40">
              <p className="font-extrabold text-emerald-400 text-sm">+$4.2k</p>
              <p className="text-[8px] text-zinc-400">Recuperado</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default function FidelizacionClientesClient() {
  return (
    <div className="min-h-screen bg-zinc-950 text-white overflow-x-hidden selection:bg-amber-500 selection:text-black">
      
      {/* ══════════════════════════════════════════
          1. HERO PRINCIPAL FULLSCREEN
      ══════════════════════════════════════════ */}
      <section className="relative min-h-[90vh] md:min-h-screen flex items-center justify-center pt-28 pb-16 overflow-hidden isolate">
        {/* Fondo Fotográfico Limpio Fullscreen */}
        <img
          src="/images/fidelizacion-clientes-hero.jpg"
          alt="Sistema de Fidelización de Clientes y CRM WhatsApp en Ecuador"
          className="absolute inset-0 w-full h-full object-cover object-center"
          style={{ zIndex: -2 }}
        />
        {/* Sombra suave solo para legibilidad del texto */}
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/40 to-black/30" style={{ zIndex: -1 }} />
        <div className="absolute inset-0 bg-gradient-to-r from-zinc-950/85 via-zinc-950/40 to-transparent" style={{ zIndex: -1 }} />

        <div className="container mx-auto px-4 md:px-8 w-full">
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Copy Principal Conciso */}
            <div className="lg:col-span-7 space-y-4 md:space-y-5 max-w-xl">
              <div className="inline-flex items-center gap-2 bg-black/60 border border-amber-500/40 rounded-full px-3.5 py-1 backdrop-blur-md">
                <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                <span className="text-amber-300 text-[11px] font-bold uppercase tracking-wider">
                  CRM WhatsApp & Fidelización · Ecuador
                </span>
              </div>

              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white leading-[1.1] tracking-tight drop-shadow-md">
                No atiendas solo a quien quiere comprar.{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-orange-400 to-amber-200">
                  Atiende a tus clientes.
                </span>
              </h1>

              <p className="text-base sm:text-lg text-zinc-100 font-medium leading-relaxed drop-shadow">
                Convierte cada mensaje de WhatsApp en un cliente registrado, cada venta en una razón para volver y cada cliente en su siguiente compra.
              </p>

              <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2.5 bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-400 hover:to-orange-400 text-black font-extrabold px-8 py-4 rounded-full text-base transition-all duration-300 shadow-xl shadow-amber-500/20 hover:scale-105 active:scale-95 text-center"
                >
                  <MessageCircle className="w-5 h-5 shrink-0" />
                  <span>Quiero ver cómo funcionaría en mi negocio</span>
                </a>
              </div>

              {/* Micro-puntos de confianza */}
              <div className="pt-4 grid grid-cols-3 gap-2.5 max-w-md">
                <div className="bg-black/60 backdrop-blur-md border border-zinc-700/70 rounded-xl p-2.5 text-center">
                  <p className="text-lg sm:text-xl font-black text-amber-400">24/7</p>
                  <p className="text-[9px] text-zinc-300 font-medium">Atención WhatsApp</p>
                </div>
                <div className="bg-black/60 backdrop-blur-md border border-zinc-700/70 rounded-xl p-2.5 text-center">
                  <p className="text-lg sm:text-xl font-black text-cyan-400">100%</p>
                  <p className="text-[9px] text-zinc-300 font-medium">Datos tuyos</p>
                </div>
                <div className="bg-black/60 backdrop-blur-md border border-zinc-700/70 rounded-xl p-2.5 text-center">
                  <p className="text-lg sm:text-xl font-black text-emerald-400">+$5k</p>
                  <p className="text-[9px] text-zinc-300 font-medium">Ahorro anual</p>
                </div>
              </div>
            </div>

            {/* Mockup Celular Activo */}
            <div className="lg:col-span-5 flex justify-center mt-6 lg:mt-0">
              <MobilePhoneMockup />
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          2. VIDEO DE PRESENTACIÓN
      ══════════════════════════════════════════ */}
      <section className="relative bg-zinc-950 py-16 md:py-24 border-t border-zinc-900 overflow-hidden">
        {/* Glow ambiental decorativo */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-amber-500/8 via-transparent to-transparent pointer-events-none" />
        <div className="container mx-auto px-4 md:px-8 max-w-5xl relative z-10">
          {/* Encabezado de sección */}
          <div className="text-center mb-10 md:mb-14">
            <div className="inline-flex items-center gap-2 text-amber-400 text-[11px] font-bold uppercase tracking-widest mb-4">
              <span className="w-8 h-px bg-amber-500/60" />
              Cómo funciona en la práctica
              <span className="w-8 h-px bg-amber-500/60" />
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-white leading-tight tracking-tight">
              Mira en 60 segundos lo que puede hacer{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-300">
                por tu negocio
              </span>
            </h2>
            <p className="mt-3 text-zinc-400 text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
              Del primer mensaje de WhatsApp a la segunda compra, en automático.
            </p>
          </div>

          {/* Contenedor de video con relación de aspecto 16:9 */}
          <div className="relative mx-auto rounded-2xl overflow-hidden shadow-2xl shadow-black/60 border border-zinc-700/50 bg-black aspect-video w-full max-w-4xl">
            <iframe
              src="https://www.youtube-nocookie.com/embed/hrza7hcMoyY?rel=0&modestbranding=1&playsinline=1"
              title="Sistema de Fidelización de Clientes y CRM WhatsApp — César Reyes Jaramillo"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              className="w-full h-full border-0 absolute inset-0"
            />
          </div>

          {/* Bajada de apoyo */}
          <p className="mt-6 text-center text-zinc-500 text-xs max-w-md mx-auto leading-relaxed">
            Sistema desarrollado por <span className="text-zinc-300 font-semibold">César Reyes Jaramillo</span> · Consultor de Negocios en Ecuador
          </p>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          3. EL PUNTO DE PARTIDA (DOLOR DE RECOMPRA)
      ══════════════════════════════════════════ */}
      <section className="py-20 bg-zinc-900/50 border-t border-zinc-900">
        <div className="container mx-auto px-4 md:px-8 max-w-4xl text-center space-y-6">
          <span className="text-amber-400 text-xs font-bold uppercase tracking-widest bg-amber-500/10 border border-amber-500/20 px-3.5 py-1.5 rounded-full">
            La Realidad Comercial
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white leading-tight">
            Vender una vez es el comienzo, no el final
          </h2>
          <p className="text-zinc-300 text-base sm:text-lg leading-relaxed max-w-3xl mx-auto">
            Conseguir un cliente cuesta tiempo y dinero en publicidad. Que vuelva a comprar debería costar mucho menos. Pero cuando la información vive dispersa en celulares personales, libretas de papel y chats sueltos, es imposible recordar a tiempo quién compró qué, quién está por necesitar su siguiente servicio o quién cumple años esta semana.
          </p>
          <p className="text-amber-300/90 font-semibold text-base sm:text-lg">
            Tu negocio ya hizo lo más difícil: ganarse la confianza. Este sistema hace que esa confianza se convierta en ventas repetidas.
          </p>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          3. CÓMO FUNCIONA (LOS 4 MOMENTOS CLAVE)
      ══════════════════════════════════════════ */}
      <section className="py-20 bg-zinc-950 border-t border-zinc-900">
        <div className="container mx-auto px-4 md:px-8 max-w-5xl">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-amber-400 text-xs font-bold uppercase tracking-widest bg-amber-500/10 border border-amber-500/20 px-3.5 py-1.5 rounded-full">
              Flujo Continuo
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-white mt-4 leading-tight">
              Un sistema que trabaja mientras atiendes tu negocio
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                num: "01",
                etiqueta: "ATENDER",
                titulo: "Respuesta inmediata",
                desc: "Un agente por WhatsApp responde consultas, muestra productos o servicios y precios, a cualquier hora del día sin esperas.",
                icon: MessageCircle,
                accent: "from-amber-500 to-orange-500"
              },
              {
                num: "02",
                etiqueta: "REGISTRAR",
                titulo: "Clientes con contexto",
                desc: "Cada contacto queda en una ficha con su interés, su historial de compra y todos los datos que tu negocio necesite para dar seguimiento.",
                icon: Users,
                accent: "from-cyan-500 to-blue-500"
              },
              {
                num: "03",
                etiqueta: "DAR CONTINUIDAD",
                titulo: "Recordatorios activos",
                desc: "Avisos automáticos de mantenimientos, garantías, renovaciones, citas y cumpleaños, justo cuando el cliente los necesita.",
                icon: Bell,
                accent: "from-emerald-500 to-teal-500"
              },
              {
                num: "04",
                etiqueta: "RECOMPRAR",
                titulo: "Clientes que vuelven",
                desc: "Ofertas segmentadas, accesorios, repuestos y programa de referidos ofrecidos a la base que ya te conoce y confía en ti.",
                icon: RefreshCw,
                accent: "from-purple-500 to-pink-500"
              }
            ].map((p, i) => (
              <div
                key={i}
                className="bg-zinc-900/70 border border-zinc-800 rounded-2xl p-6 relative group hover:border-zinc-700 transition-all duration-300"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="text-2xl font-black text-zinc-600 group-hover:text-amber-400 transition-colors">
                    {p.num}
                  </span>
                  <div className={`w-10 h-10 rounded-xl bg-gradient-to-tr ${p.accent} p-0.5`}>
                    <div className="w-full h-full bg-zinc-950 rounded-[10px] flex items-center justify-center text-white">
                      <p.icon className="w-5 h-5 text-amber-400" />
                    </div>
                  </div>
                </div>
                <span className="text-[10px] font-bold text-amber-400 uppercase tracking-widest block mb-1">
                  {p.etiqueta}
                </span>
                <h3 className="text-lg font-bold text-white mb-2">{p.titulo}</h3>
                <p className="text-xs text-zinc-400 leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          4. COMPONENTES Y PRECIOS CLAROS
      ══════════════════════════════════════════ */}
      <section className="py-20 bg-zinc-900/40 border-t border-zinc-900">
        <div className="container mx-auto px-4 md:px-8 max-w-5xl">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-amber-400 text-xs font-bold uppercase tracking-widest bg-amber-500/10 border border-amber-500/20 px-3.5 py-1.5 rounded-full">
              Estructura Ejecutiva
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-white mt-4 leading-tight">
              Componentes del sistema e inversión
            </h2>
            <p className="text-zinc-400 text-sm mt-3">
              Cada componente se contrata de forma modular según la etapa y prioridad de tu negocio.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 items-stretch">
            {/* Componente 01 */}
            <div className="bg-zinc-900/80 border border-zinc-800 rounded-3xl p-7 flex flex-col justify-between">
              <div>
                <span className="text-xs font-bold text-zinc-400 uppercase tracking-widest block mb-2">Componente 01 · Presencia</span>
                <h3 className="text-xl font-black text-white mb-1">Sitio web administrable</h3>
                <p className="text-xs text-amber-400/90 italic mb-4">&quot;Que tu negocio se vea, se encuentre y reciba consultas 24/7.&quot;</p>
                
                <div className="bg-black/60 border border-zinc-800 rounded-2xl p-4 mb-5">
                  <div className="flex items-baseline gap-1">
                    <span className="text-3xl font-black text-white">Desde $1.000</span>
                  </div>
                  <p className="text-[11px] text-zinc-400 mt-1">Inversión única · Opcional si ya tienes web</p>
                </div>

                <ul className="space-y-2.5 text-xs text-zinc-300 mb-6">
                  {[
                    "Catálogo de productos o vitrina de servicios",
                    "Botón directo a WhatsApp desde cada ficha",
                    "Panel para actualizar contenidos tú mismo sin programador",
                    "Estructura técnica optimizada para Google (SEO)",
                    "Medición de visitas y consultas reales"
                  ].map((it, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                      <span>{it}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 bg-zinc-800 hover:bg-zinc-700 text-white rounded-xl text-xs font-bold text-center transition-colors"
              >
                Consultar sitio web
              </a>
            </div>

            {/* Componente 02 - DESTACADO */}
            <div className="bg-gradient-to-b from-amber-500/10 via-zinc-900/90 to-zinc-900 border-2 border-amber-500/40 rounded-3xl p-7 flex flex-col justify-between relative shadow-2xl shadow-amber-500/10">
              <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-gradient-to-r from-amber-500 to-orange-500 text-black text-[10px] font-black uppercase tracking-wider px-3.5 py-1 rounded-full shadow-lg">
                El Motor de Recompra
              </div>
              <div>
                <span className="text-xs font-bold text-amber-400 uppercase tracking-widest block mb-2 pt-2">Componente 02 · Relación</span>
                <h3 className="text-xl font-black text-white mb-1">CRM + Agente WhatsApp + Fidelización</h3>
                <p className="text-xs text-amber-300/90 italic mb-4">&quot;Una base de clientes a la que puedas venderle muchas veces.&quot;</p>
                
                <div className="bg-black/80 border border-amber-500/30 rounded-2xl p-4 mb-5">
                  <div className="flex items-baseline gap-1">
                    <span className="text-3xl font-black text-amber-400">Desde $2.500</span>
                  </div>
                  <p className="text-[11px] text-zinc-300 mt-1">Inversión única · CRM, Agente y Recordatorios</p>
                </div>

                <ul className="space-y-2.5 text-xs text-zinc-200 mb-6">
                  {[
                    "CRM automático que se arma solo desde el primer chat",
                    "Agente de ventas por WhatsApp que atiende y cotiza 24/7",
                    "Traspaso a un asesor humano con todo el historial",
                    "Recordatorios automáticos de garantías, mantenimientos y citas",
                    "Saludos de cumpleaños con ofertas personalizadas",
                    "Programa de referidos para comisiones o premios",
                    "Panel de control con clientes, oportunidades y vencimientos"
                  ].map((it, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                      <span>{it}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3.5 bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-400 hover:to-orange-400 text-black rounded-xl text-xs font-black text-center transition-all shadow-lg shadow-amber-500/20"
              >
                Cotizar CRM y Fidelización
              </a>
            </div>

            {/* Componente 03 */}
            <div className="bg-zinc-900/80 border border-zinc-800 rounded-3xl p-7 flex flex-col justify-between">
              <div>
                <span className="text-xs font-bold text-zinc-400 uppercase tracking-widest block mb-2">Componente 03 · Continuidad</span>
                <h3 className="text-xl font-black text-white mb-1">Mantenimiento técnico anual</h3>
                <p className="text-xs text-amber-400/90 italic mb-4">&quot;Que el sistema siga funcionando, protegido y al día.&quot;</p>
                
                <div className="bg-black/60 border border-zinc-800 rounded-2xl p-4 mb-5">
                  <div className="flex items-baseline gap-1">
                    <span className="text-3xl font-black text-white">$290</span>
                    <span className="text-xs text-zinc-400">/ año</span>
                  </div>
                  <p className="text-[11px] text-zinc-400 mt-1">Soporte y protección continua</p>
                </div>

                <ul className="space-y-2.5 text-xs text-zinc-300 mb-6">
                  {[
                    "Actualizaciones de seguridad y software",
                    "Respaldos periódicos de toda tu base de clientes",
                    "Monitoreo de disponibilidad del agente WhatsApp",
                    "Soporte técnico directo vía WhatsApp para tu equipo",
                    "Sin contratos leoninos forzosos"
                  ].map((it, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                      <span>{it}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 bg-zinc-800 hover:bg-zinc-700 text-white rounded-xl text-xs font-bold text-center transition-colors"
              >
                Conocer cobertura
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          5. TABLA DE TRANSFORMACIÓN
      ══════════════════════════════════════════ */}
      <section className="py-20 bg-zinc-950 border-t border-zinc-900">
        <div className="container mx-auto px-4 md:px-8 max-w-4xl">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-amber-400 text-xs font-bold uppercase tracking-widest bg-amber-500/10 border border-amber-500/20 px-3.5 py-1.5 rounded-full">
              Transformación Real
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-white mt-4 leading-tight">
              De cada venta a una relación que se repite
            </h2>
          </div>

          <div className="bg-zinc-900/70 border border-zinc-800 rounded-3xl overflow-hidden shadow-xl">
            <div className="grid grid-cols-2 bg-zinc-900 border-b border-zinc-800 p-4 text-xs font-bold uppercase tracking-wider">
              <span className="text-red-400/90">Sin el sistema</span>
              <span className="text-emerald-400">Con Fidelización & CRM WhatsApp</span>
            </div>
            {[
              {
                antes: "Garantías, revisiones o renovaciones dependiendo de que el cliente se acuerde solo.",
                despues: "Aviso automático antes de cada vencimiento, justo a tiempo y por WhatsApp."
              },
              {
                antes: "Conversaciones de WhatsApp dispersas en celulares de los empleados que se pierden si alguien renuncia.",
                despues: "Cada chat queda registrado en una ficha histórica con todos los datos que tu negocio defina."
              },
              {
                antes: "Consultas repetidas sobre precios y disponibilidad fuera de horario que se quedan sin responder.",
                despues: "Respuesta inmediata a cualquier hora con catálogo y precios; el asesor humano entra cuando hace falta."
              },
              {
                antes: "Clientes que compran una vez y se olvidan por completo de tu negocio.",
                despues: "Una base activa y segmentada para ofrecerles mantenimiento, repuestos, servicios y recompra."
              }
            ].map((fila, i) => (
              <div key={i} className="grid grid-cols-2 p-4 sm:p-5 border-b border-zinc-800/80 last:border-0 text-xs sm:text-sm gap-4">
                <p className="text-zinc-400 leading-relaxed">{fila.antes}</p>
                <p className="text-zinc-200 font-medium leading-relaxed flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>{fila.despues}</span>
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          6. IMPACTO FINANCIERO Y NEGOCIOS
      ══════════════════════════════════════════ */}
      <section className="py-20 bg-zinc-900/60 border-t border-zinc-900">
        <div className="container mx-auto px-4 md:px-8 max-w-5xl">
          <div className="grid lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-6 space-y-5">
              <span className="text-amber-400 text-xs font-bold uppercase tracking-widest bg-amber-500/10 border border-amber-500/20 px-3.5 py-1.5 rounded-full">
                Rentabilidad Pura
              </span>
              <h2 className="text-3xl sm:text-4xl font-black text-white leading-tight">
                Lo que significa en números para tu empresa
              </h2>
              <p className="text-zinc-300 text-sm sm:text-base leading-relaxed">
                Un colaborador en Ecuador con salario básico cuesta cerca de <strong className="text-white">$8.000 al año</strong> considerando aportes y beneficios de ley.
              </p>
              <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed">
                Si el agente virtual de WhatsApp absorbe entre el <strong>70% y el 80%</strong> de su tiempo en responder consultas repetidas y enviar avisos de garantía, el ahorro estimado supera los <strong className="text-amber-400">$5.000 anuales</strong>. Y esa persona no se reemplaza: queda libre para atender a clientes calificados y cerrar más ventas.
              </p>
            </div>

            <div className="lg:col-span-6 bg-black/60 border border-zinc-800 rounded-3xl p-6 sm:p-8 space-y-4">
              <h3 className="text-base font-bold text-white mb-2 flex items-center gap-2">
                <Building2 className="w-5 h-5 text-amber-400" />
                ¿Para qué negocios está diseñado?
              </h3>
              <p className="text-xs text-zinc-400 leading-relaxed">
                Ideal para cualquier empresa donde un cliente satisfecho pueda volver a comprar:
              </p>
              <div className="grid grid-cols-2 gap-2 text-xs font-medium text-zinc-300 pt-1">
                <span className="bg-zinc-900/90 border border-zinc-800 p-2.5 rounded-xl">🚗 Concesionarias y motos</span>
                <span className="bg-zinc-900/90 border border-zinc-800 p-2.5 rounded-xl">🛠️ Talleres y lubricadoras</span>
                <span className="bg-zinc-900/90 border border-zinc-800 p-2.5 rounded-xl">⚙️ Repuestos e insumos</span>
                <span className="bg-zinc-900/90 border border-zinc-800 p-2.5 rounded-xl">🐾 Veterinarias y agro</span>
                <span className="bg-zinc-900/90 border border-zinc-800 p-2.5 rounded-xl">👓 Ópticas y salud estética</span>
                <span className="bg-zinc-900/90 border border-zinc-800 p-2.5 rounded-xl">🏋️ Gimnasios y membresías</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          7. FAQ
      ══════════════════════════════════════════ */}
      <section className="py-20 bg-zinc-950 border-t border-zinc-900">
        <div className="container mx-auto px-4 md:px-8 max-w-3xl">
          <div className="text-center mb-12">
            <span className="text-amber-400 text-xs font-bold uppercase tracking-widest bg-amber-500/10 border border-amber-500/20 px-3.5 py-1.5 rounded-full">
              Preguntas Frecuentes
            </span>
            <h2 className="text-3xl font-black text-white mt-4">
              Dudas comunes sobre el sistema
            </h2>
          </div>

          <div className="space-y-4">
            {[
              {
                q: "¿El agente virtual reemplaza a mi equipo humano?",
                a: "No. Lo libera de responder las mismas 10 preguntas todos los días (precios, horarios, ubicaciones, catálogos) para que tu equipo se concentre en cerrar tratos con clientes que ya están listos para comprar."
              },
              {
                q: "¿Los datos de mis clientes son míos o de una plataforma?",
                a: "Son 100% tuyos. La base de datos queda bajo tu propiedad. Si en algún momento decides cambiar o exportar tu información, no pagas rescate ni comisiones extras."
              },
              {
                q: "¿Necesito tener una página web previamente?",
                a: "No es obligatorio. El sistema de CRM, agente de WhatsApp y fidelización funciona directamente conectado a tu número comercial. Si deseas la vitrina web, podemos incluirla en el proyecto."
              },
              {
                q: "¿Cómo se configuran los recordatorios de garantía o mantenimiento?",
                a: "Definimos contigo las reglas de tu negocio: por ejemplo, 'avisar 15 días antes de que venza la garantía', 'recordar cambio de aceite a los 3 meses' o 'enviar felicitación de cumpleaños con 10% de descuento'."
              }
            ].map((faq, i) => (
              <FaqCard key={i} question={faq.q} answer={faq.a} />
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          8. CIERRE Y CTA FINAL
      ══════════════════════════════════════════ */}
      <section className="py-24 bg-gradient-to-b from-zinc-950 to-zinc-900 border-t border-zinc-900 text-center">
        <div className="container mx-auto px-4 md:px-8 max-w-3xl space-y-6">
          <span className="text-amber-400 text-xs font-bold uppercase tracking-widest bg-amber-500/10 border border-amber-500/20 px-4 py-1.5 rounded-full">
            Tus clientes ya te conocen
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white leading-tight">
            Haz que vuelvan a comprar una y otra vez.
          </h2>
          <p className="text-zinc-300 text-base max-w-xl mx-auto leading-relaxed">
            Coordinemos una sesión de trabajo de 20 minutos por WhatsApp. Evaluamos tus canales actuales y te mostramos cómo funciona en vivo.
          </p>
          <div className="pt-2">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2.5 bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-400 hover:to-orange-400 text-black font-black px-10 py-5 rounded-full text-lg shadow-xl shadow-amber-500/20 hover:scale-105 transition-all duration-300"
            >
              <MessageCircle className="w-5 h-5 shrink-0" />
              <span>Coordinar sesión por WhatsApp</span>
            </a>
          </div>

          {/* Interlinking de Retorno a Software Personalizado */}
          <div className="pt-8 border-t border-zinc-800/80 mt-10">
            <p className="text-xs text-zinc-500">
              Parte del ecosistema de{' '}
              <Link href="/software-personalizado" className="text-amber-400 hover:underline font-semibold">
                Software Personalizado en Ecuador
              </Link>{' '}
              por{' '}
              <Link href="/" className="text-zinc-400 hover:text-white hover:underline font-semibold">
                César Reyes Jaramillo
              </Link>
            </p>
          </div>
        </div>
      </section>

    </div>
  );
}

const FaqCard = ({ question, answer }: { question: string; answer: string }) => {
  const [open, setOpen] = useState(false);
  return (
    <div className="bg-zinc-900/70 border border-zinc-800 rounded-2xl overflow-hidden transition-all duration-200">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between gap-4 p-5 text-left hover:bg-zinc-800/40 transition-colors"
        aria-expanded={open}
      >
        <span className="text-sm sm:text-base font-bold text-white leading-snug">{question}</span>
        <ChevronDown
          className={`w-4 h-4 text-amber-400 shrink-0 transition-transform duration-300 ${open ? 'rotate-180' : ''}`}
        />
      </button>
      {open && (
        <div className="px-5 pb-5 text-xs sm:text-sm text-zinc-300 leading-relaxed border-t border-zinc-800/60 pt-3.5">
          {answer}
        </div>
      )}
    </div>
  );
};
