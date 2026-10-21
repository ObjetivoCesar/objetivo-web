'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import {
  Smartphone,
  Users,
  TrendingUp,
  MessageCircle,
  QrCode,
  ChefHat,
  Star,
  ArrowRight,
  Check,
  ChevronDown,
  Bell,
  MapPin,
  Phone,
  Heart,
  Clock,
  DollarSign,
  Eye,
  AlertCircle,
  BookOpen,
  Wifi,
  WifiOff,
  FileText,
  Shield,
  Repeat,
  BarChart2,
  X,
  Sparkles,
  UtensilsCrossed,
  Globe
} from 'lucide-react';

/* ─────────────────────────────────────────────
   CONSTANTES
───────────────────────────────────────────── */
const WHATSAPP_URL =
  'https://wa.me/593963410409?text=Hola%2C%20quiero%20ver%20la%20prueba%20del%20sistema%20de%20Comandas%20y%20Carta%20Digital';

/* ─────────────────────────────────────────────
   COMPONENTES INTERNOS
───────────────────────────────────────────── */

const CtaButton = ({
  text = 'Quiero ver mi carta de prueba',
  id,
  className = '',
}: {
  text?: string;
  id?: string;
  className?: string;
}) => (
  <a
    id={id}
    href={WHATSAPP_URL}
    target="_blank"
    rel="noopener noreferrer"
    className={`inline-flex items-center justify-center gap-2.5 bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-400 hover:to-orange-400 text-black font-extrabold px-8 py-4 rounded-full text-base tracking-wide transition-all duration-300 shadow-xl shadow-amber-500/20 hover:shadow-amber-500/40 hover:scale-105 active:scale-95 ${className}`}
  >
    <MessageCircle className="w-5 h-5 shrink-0" />
    <span>{text}</span>
  </a>
);

/** Mockup de celular con efectos visuales */
const PhoneMockup = () => (
  <div className="relative mx-auto w-[280px] sm:w-[320px]">
    {/* Resplandor ambiental de fondo */}
    <div className="absolute inset-0 bg-gradient-to-tr from-amber-500/40 via-orange-600/30 to-yellow-400/20 blur-[70px] rounded-full scale-90 -z-10 animate-pulse" />

    {/* Marco del celular */}
    <div className="relative bg-zinc-950/90 backdrop-blur-xl border-2 border-zinc-700/80 rounded-[3rem] p-3.5 shadow-2xl shadow-black/80">
      {/* Isla / Bocina */}
      <div className="w-24 h-5 bg-zinc-900 rounded-full mx-auto mb-3 flex items-center justify-center">
        <div className="w-2.5 h-2.5 rounded-full bg-zinc-700 mr-2" />
        <div className="w-2 h-2 rounded-full bg-amber-500/60" />
      </div>

      {/* Pantalla viva de Comandas y Restaurante */}
      <div className="bg-zinc-900/95 rounded-[2.2rem] overflow-hidden p-4 space-y-3.5 border border-zinc-800">
        {/* Header activo */}
        <div className="flex items-center justify-between border-b border-zinc-800/80 pb-2.5">
          <div>
            <div className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
              <p className="text-[10px] text-emerald-400 font-semibold uppercase tracking-wider">En vivo · Turno actual</p>
            </div>
            <p className="text-base font-extrabold text-white">Comandas & Caja</p>
          </div>
          <div className="relative p-2 bg-zinc-800 rounded-xl">
            <Bell className="w-4 h-4 text-amber-400" />
            <span className="absolute 1 top-1.5 right-1.5 w-2 h-2 bg-red-500 rounded-full" />
          </div>
        </div>

        {/* Métricas clave en tiempo real */}
        <div className="grid grid-cols-3 gap-2">
          <div className="bg-zinc-800/80 border border-zinc-700/50 rounded-xl p-2 text-center">
            <p className="text-sm font-black text-emerald-400">$340</p>
            <p className="text-[9px] text-zinc-400 font-medium">Ventas hoy</p>
          </div>
          <div className="bg-zinc-800/80 border border-zinc-700/50 rounded-xl p-2 text-center">
            <p className="text-sm font-black text-amber-400">8</p>
            <p className="text-[9px] text-zinc-400 font-medium">Mesas vivas</p>
          </div>
          <div className="bg-zinc-800/80 border border-zinc-700/50 rounded-xl p-2 text-center">
            <p className="text-sm font-black text-cyan-400">4</p>
            <p className="text-[9px] text-zinc-400 font-medium">Nuevos</p>
          </div>
        </div>

        {/* Comanda en cocina lista para despachar */}
        <div className="bg-amber-950/40 border border-amber-500/30 rounded-xl p-2.5">
          <div className="flex items-center justify-between mb-1.5">
            <span className="text-[10px] font-bold text-amber-300 flex items-center gap-1">
              <Clock className="w-3 h-3 text-amber-400" /> Mesa 4 · Hace 6 min
            </span>
            <span className="bg-amber-500/20 text-amber-300 text-[8px] font-bold px-1.5 py-0.5 rounded">En cocina</span>
          </div>
          <p className="text-[10px] text-zinc-200 font-medium">2x Seco de Pollo, 1x Jugo Mora</p>
        </div>

        {/* Alerta de cliente que dejó de venir */}
        <div className="bg-red-950/40 border border-red-500/30 rounded-xl p-2.5 flex items-start gap-2">
          <AlertCircle className="w-4 h-4 text-red-400 shrink-0 mt-0.5" />
          <div>
            <p className="text-[9px] font-bold text-red-300">Cliente habitual sin volver</p>
            <p className="text-[8px] text-zinc-400">Carlos M. · 24 días sin visitarte (le encanta la Picantería)</p>
          </div>
        </div>

        {/* Clientes fidelizados */}
        <div className="space-y-1.5 pt-1">
          <p className="text-[9px] text-zinc-400 font-bold uppercase tracking-wider">Últimos comensales registrados</p>
          {[
            { name: 'Diana R.', dish: 'Lomo Fino', phone: '+593 98...' },
            { name: 'Mateo G.', dish: 'Hamburguesa Doble', phone: '+593 99...' },
          ].map((c) => (
            <div key={c.name} className="flex items-center justify-between bg-zinc-800/60 border border-zinc-700/40 rounded-lg px-2 py-1.5">
              <div>
                <p className="text-[10px] font-semibold text-white">{c.name}</p>
                <p className="text-[8px] text-amber-400/90 font-medium">{c.dish}</p>
              </div>
              <span className="text-[8px] text-emerald-400 font-mono bg-emerald-950/40 border border-emerald-500/20 px-1.5 py-0.5 rounded">WhatsApp</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
);

export default function ComandasRestaurantesClient() {
  return (
    <div className="min-h-screen bg-zinc-950 text-white overflow-x-hidden selection:bg-amber-500 selection:text-black">

      {/* ══════════════════════════════════════════
          1. PORTADA / HERO (FULLSCREEN SIN OVERLAY OSCURO, TEXTO CONCISO)
      ══════════════════════════════════════════ */}
      <section className="relative min-h-[90vh] md:min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden isolate">
        {/* Fondo Fotográfico Fullscreen */}
        <img
          src="/images/mirest-hero.jpg"
          alt="Restaurante usando comandas digitales"
          className="absolute inset-0 w-full h-full object-cover object-center" style={{zIndex: -2}}
        />
        {/* Overlay sutil: solo la parte inferior oscura para leer el texto, el centro queda abierto */}
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/30 to-transparent" style={{zIndex: -1}} />
        <div className="absolute inset-0 bg-gradient-to-r from-zinc-950/75 via-zinc-950/20 to-transparent" style={{zIndex: -1}} />

        <div className="container mx-auto px-4 md:px-8 w-full">
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Copy Hero Directo y Conciso */}
            <div className="lg:col-span-7 space-y-4 md:space-y-5 max-w-xl">
              {/* Badge Contexto */}
              <div className="inline-flex items-center gap-2 bg-black/60 border border-amber-500/40 rounded-full px-3.5 py-1 backdrop-blur-md">
                <UtensilsCrossed className="w-3.5 h-3.5 text-amber-400" />
                <span className="text-amber-300 text-[11px] font-bold uppercase tracking-wider">
                  Comandas & Carta Digital · Ecuador
                </span>
              </div>

              {/* Titular */}
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black leading-[1.1] tracking-tight text-white drop-shadow-md">
                Tu restaurante vende todos los días.{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-orange-400 to-amber-200">
                  ¿Sabes cómo te va?
                </span>
              </h1>

              {/* Subtítulo Corto (Sin saturación en móvil) */}
              <p className="text-base sm:text-lg text-zinc-100 font-medium leading-relaxed drop-shadow">
                Controla en tu celular las ventas del día, mesas y pedidos a cocina. Con carta digital incluida.
              </p>

              {/* Precio Compacto y Claro */}
              <div className="inline-flex items-center gap-3 bg-black/70 border border-zinc-700/80 rounded-2xl px-4 py-2.5 backdrop-blur-md shadow-xl">
                <div className="flex items-baseline gap-1">
                  <span className="text-2xl sm:text-3xl font-black text-amber-400">$50</span>
                  <span className="text-xs text-zinc-300 font-normal">/ mes</span>
                </div>
                <div className="border-l border-zinc-700 pl-3">
                  <p className="text-[11px] text-zinc-200 font-semibold">$600 el primer año</p>
                  <p className="text-[10px] text-zinc-400">12 cuotas sin intereses con PayPhone</p>
                </div>
              </div>

              {/* CTA Hero Directo */}
              <div className="pt-1 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                <CtaButton id="hero-comandas-cta" text="Quiero ver mi carta de prueba" />
                <span className="text-xs text-zinc-300 flex items-center justify-center sm:justify-start gap-1.5 drop-shadow">
                  <Sparkles className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                  Prueba gratis en tu celular
                </span>
              </div>
            </div>

            {/* Mockup Interactivo Celular */}
            <div className="lg:col-span-5 flex justify-center mt-4 lg:mt-0">
              <PhoneMockup />
            </div>
          </div>
        </div>

        {/* Flecha Scroll */}
        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 opacity-70">
          <ChevronDown className="w-5 h-5 text-amber-400 animate-bounce" />
        </div>
      </section>

      {/* ══════════════════════════════════════════
          2. VIDEO PLACEHOLDER (60 a 90 segundos)
      ══════════════════════════════════════════ */}
      <section className="py-14 bg-zinc-950 border-y border-zinc-900">
        <div className="container mx-auto px-4 md:px-8 max-w-4xl text-center">
          <div className="relative aspect-video rounded-3xl overflow-hidden border border-zinc-800 bg-zinc-900 group cursor-pointer shadow-2xl">
            {/* Foto preview video */}
            <img
              src="/images/comandas-celular.jpg"
              alt="Comandas restaurantes demostración en video"
              className="absolute inset-0 w-full h-full object-cover opacity-40 group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/40 to-transparent" />
            
            {/* Botón play central */}
            <div className="relative z-10 h-full flex flex-col items-center justify-center gap-3 p-6">
              <div className="w-20 h-20 rounded-full bg-amber-500/20 border-2 border-amber-400/80 flex items-center justify-center group-hover:scale-110 group-hover:bg-amber-500/30 transition-all duration-300 shadow-xl shadow-amber-500/20">
                <div className="w-0 h-0 border-t-[12px] border-t-transparent border-b-[12px] border-b-transparent border-l-[20px] border-l-amber-400 ml-1.5" />
              </div>
              <p className="text-white text-base md:text-lg font-bold">
                Mira cómo funciona en tu restaurante (60 a 90 segundos)
              </p>
              <p className="text-xs text-zinc-400">
                Desde que el cliente pide hasta que cocina despacha y tú ves la venta en tu celular
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          3. UN RESTAURANTE QUE NO LLEVA NÚMEROS, ADIVINA
      ══════════════════════════════════════════ */}
      <section className="py-24 bg-zinc-900/40 relative">
        <div className="container mx-auto px-4 md:px-8 max-w-4xl">
          <div className="text-center mb-14">
            <span className="text-amber-400 text-xs font-bold uppercase tracking-widest bg-amber-500/10 border border-amber-500/20 px-3.5 py-1.5 rounded-full">
              La realidad diaria
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mt-4 leading-tight">
              Un restaurante que no lleva números, adivina
            </h2>
            <p className="text-zinc-400 text-base max-w-xl mx-auto mt-3">
              Pregúntate con total sinceridad si alguna vez has dicho alguna de estas frases al cerrar caja:
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            {[
              { frase: "No sé cuánto se vendió hoy.", desc: "Cierras con plata en el bolsillo pero sin saber el margen real." },
              { frase: "No sé quiénes son mis clientes.", desc: "Comen, pagan y se van. No tienes cómo volver a invitarlos." },
              { frase: "No sé quién dejó de venir.", desc: "Mesas vacías y clientes leales que desaparecieron sin darte cuenta." },
              { frase: "No me enteré de que un cliente se fue molesto.", desc: "Te enteras semanas después con una mala reseña pública." },
              { frase: "Mi carta está vieja o rota.", desc: "Precios tachados con esfero y hojas que dan mala impresión." },
            ].map((item, idx) => (
              <div 
                key={idx}
                className={`bg-zinc-950/80 border border-zinc-800 hover:border-red-500/40 rounded-2xl p-5 flex items-start gap-4 transition-all duration-300 ${idx === 4 ? 'md:col-span-2' : ''}`}
              >
                <div className="w-8 h-8 rounded-full bg-red-500/10 border border-red-500/30 flex items-center justify-center shrink-0 mt-0.5">
                  <X className="w-4 h-4 text-red-400" />
                </div>
                <div>
                  <p className="text-white font-bold text-base leading-snug">&ldquo;{item.frase}&rdquo;</p>
                  <p className="text-zinc-400 text-xs mt-1 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <div className="inline-block bg-gradient-to-r from-amber-500/15 via-orange-500/20 to-amber-500/15 border border-amber-500/30 rounded-2xl px-8 py-5 shadow-xl">
              <p className="text-xl sm:text-2xl font-black text-amber-300">
                Con Mi-Rest dejas de adivinar.
              </p>
              <p className="text-xs text-zinc-300 mt-1">
                Tomas decisiones con números reales en tu mano, no con suposiciones.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          4. ¿UN QR? ESO LO HACE CUALQUIERA (IMAGEN + COPY)
      ══════════════════════════════════════════ */}
      <section className="py-24 bg-zinc-950 relative overflow-hidden border-t border-zinc-900">
        <div className="container mx-auto px-4 md:px-8 max-w-5xl">
          <div className="grid lg:grid-cols-12 gap-10 items-center">
            
            {/* Imagen ilustrativa comanda / cliente */}
            <div className="lg:col-span-5 relative">
              <div className="rounded-3xl overflow-hidden border border-zinc-800 shadow-2xl group">
                <img 
                  src="/images/comandas-celular.jpg" 
                  alt="Restaurante usando comanda digital y celular"
                  className="w-full h-80 lg:h-96 object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 bg-zinc-900/95 border border-amber-500/30 rounded-2xl p-4 shadow-xl max-w-xs backdrop-blur-md hidden sm:block">
                <p className="text-[11px] text-amber-300 font-bold">Un QR es solo un enlace.</p>
                <p className="text-[10px] text-zinc-300">Lo valioso es lo que el sistema registra cada vez que alguien lo escanea.</p>
              </div>
            </div>

            {/* Contenido reflexivo */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 bg-zinc-900 border border-zinc-800 rounded-full px-4 py-1.5">
                <QrCode className="w-4 h-4 text-amber-400" />
                <span className="text-zinc-300 text-xs font-bold uppercase tracking-wider">
                  Diferenciador contundente
                </span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-tight">
                ¿Un QR? Eso lo hace cualquiera.
              </h2>

              <p className="text-base sm:text-lg text-zinc-300 leading-relaxed">
                Un QR solo muestra una carta. Lo que casi nadie te da es lo que pasa <strong className="text-white">después</strong>: saber quién es cada cliente que se registra, quién lleva semanas sin volver, qué te dicen en privado y cómo va tu día.
              </p>

              <div className="bg-gradient-to-r from-amber-950/40 to-zinc-900/80 border-l-4 border-amber-500 rounded-r-2xl p-5">
                <p className="text-lg sm:text-xl font-bold text-white">
                  <span className="text-amber-400">El QR es la puerta.</span> Los números son el negocio.
                </p>
                <p className="text-xs text-zinc-400 mt-1">
                  Cualquiera imprime un código pegado a una mesa; casi ningún dueño sabe cuántos platos vendió cada mesero ni a quién felicitar por su cumpleaños.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          5. LO QUE VES CADA DÍA EN TU CELULAR (6 SECCIONES + FOTO COCINA)
      ══════════════════════════════════════════ */}
      <section className="py-24 bg-zinc-900/30" id="funciones">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <span className="text-amber-400 text-xs font-bold uppercase tracking-widest bg-amber-500/10 border border-amber-500/20 px-4 py-1.5 rounded-full">
              Control total en la palma de tu mano
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mt-4 leading-tight">
              Lo que ves cada día en tu celular
            </h2>
            <p className="text-zinc-400 text-base mt-2">
              Diseñado pensando en ti: no necesitas ser experto en sistemas. Todo es visual, rápido y directo.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {/* 1. Cómo va tu día */}
            <div className="bg-zinc-900/80 border border-zinc-800 rounded-2xl p-6 hover:border-amber-500/40 transition-all duration-300 shadow-lg">
              <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 mb-4">
                <TrendingUp className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Cómo va tu día</h3>
              <p className="text-zinc-400 text-sm leading-relaxed">
                Cuánto suman los pedidos tomados en el sistema, qué mesas están ocupadas y cuántos clientes nuevos se registraron. Sin tener que preguntarle a cada rato a tu cajero.
              </p>
            </div>

            {/* 2. Tus clientes */}
            <div className="bg-zinc-900/80 border border-zinc-800 rounded-2xl p-6 hover:border-blue-500/40 transition-all duration-300 shadow-lg">
              <div className="w-12 h-12 rounded-xl bg-blue-500/10 border border-blue-500/30 flex items-center justify-center text-blue-400 mb-4">
                <Users className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Tus clientes</h3>
              <p className="text-zinc-400 text-sm leading-relaxed">
                Nombre, WhatsApp, cumpleaños y plato favorito de quienes se registran, con una cortesía para que vuelvan. Creas una clientela fiel que no se va a la competencia.
              </p>
            </div>

            {/* 3. Quiénes llevan semanas sin volver */}
            <div className="bg-zinc-900/80 border border-zinc-800 rounded-2xl p-6 hover:border-red-500/40 transition-all duration-300 shadow-lg">
              <div className="w-12 h-12 rounded-xl bg-red-500/10 border border-red-500/30 flex items-center justify-center text-red-400 mb-4">
                <Bell className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Quiénes llevan semanas sin volver</h3>
              <p className="text-zinc-400 text-sm leading-relaxed">
                Un aviso automático para que les escribas con algo de su plato favorito. Recuperas ventas que se estaban perdiendo en silencio.
              </p>
            </div>

            {/* 4. Lo que te dicen en privado */}
            <div className="bg-zinc-900/80 border border-zinc-800 rounded-2xl p-6 hover:border-emerald-500/40 transition-all duration-300 shadow-lg">
              <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 mb-4">
                <MessageCircle className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Lo que te dicen en privado</h3>
              <p className="text-zinc-400 text-sm leading-relaxed">
                Si un cliente quiere contarte algo, te llega directo a ti. También puede dejar su reseña en Google; las dos opciones aparecen siempre para proteger tu reputación.
              </p>
            </div>

            {/* 5. Tu carta digital con fotos */}
            <div className="bg-zinc-900/80 border border-zinc-800 rounded-2xl p-6 hover:border-violet-500/40 transition-all duration-300 shadow-lg">
              <div className="w-12 h-12 rounded-xl bg-violet-500/10 border border-violet-500/30 flex items-center justify-center text-violet-400 mb-4">
                <BookOpen className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Tu carta digital con fotos</h3>
              <p className="text-zinc-400 text-sm leading-relaxed">
                Con botón para pedir por WhatsApp, buscador rápido, categorías, mapa y botón para compartir. Los precios los cambias tú desde el celular en segundos.
              </p>
            </div>

            {/* 6. Tu cocina en orden */}
            <div className="bg-zinc-900/80 border border-zinc-800 rounded-2xl p-6 hover:border-amber-500/40 transition-all duration-300 shadow-lg">
              <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 mb-4">
                <ChefHat className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Tu cocina en orden (Comandas)</h3>
              <p className="text-zinc-400 text-sm leading-relaxed">
                Los pedidos llegan a una pantalla en cocina, ordenados por tiempo de espera. Cero comandas perdidas o platos retrasados. Empezamos con un piloto de un turno.
              </p>
            </div>
          </div>

          {/* Banner Fotográfico Cocina en Orden */}
          <div className="mt-14 max-w-5xl mx-auto rounded-3xl overflow-hidden border border-zinc-800 shadow-2xl relative">
            <img 
              src="/images/comandas-cocina.jpg" 
              alt="Pantalla de cocina con comandas en orden de espera" 
              className="w-full h-72 sm:h-80 md:h-96 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/60 to-transparent flex items-end p-6 sm:p-10">
              <div className="max-w-xl">
                <span className="bg-amber-500 text-black text-xs font-black uppercase px-2.5 py-1 rounded">
                  Comandas visuales en cocina
                </span>
                <h4 className="text-xl sm:text-2xl font-black text-white mt-2">
                  Se acabaron los gritos y los papeles mojados en cocina
                </h4>
                <p className="text-xs sm:text-sm text-zinc-300 mt-1">
                  Cada comanda se ordena automáticamente por minutos de espera. El cocinero sabe exactamente qué sacar primero.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          6. CÓMO EMPEZAMOS (3 PASOS FÁCILES)
      ══════════════════════════════════════════ */}
      <section className="py-24 bg-zinc-950 border-t border-zinc-900">
        <div className="container mx-auto px-4 md:px-8 max-w-3xl">
          <div className="text-center mb-16">
            <span className="text-amber-400 text-xs font-bold uppercase tracking-widest bg-amber-500/10 border border-amber-500/20 px-3.5 py-1.5 rounded-full">
              Fácil y sin riesgos
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mt-4">
              Cómo empezamos
            </h2>
            <p className="text-zinc-400 text-sm mt-2">Sin trámites engorrosos ni instalaciones difíciles.</p>
          </div>

          <div className="space-y-6">
            {[
              {
                step: '01',
                title: 'Nos escribes por WhatsApp',
                desc: 'Nos mandas un mensaje contándonos de tu restaurante y tus platos principales.',
              },
              {
                step: '02',
                title: 'Te mostramos tu carta de prueba en tu celular, sin costo',
                desc: 'Armamos tu carta digital con tus fotos reales y te enviamos el enlace para que lo abras en tu teléfono y veas cómo queda.',
              },
              {
                step: '03',
                title: 'Tú decides',
                desc: 'Si te gusta cómo se ve y cómo ordena tus comandas, arrancamos. Si no, no pagas ni un solo centavo.',
              },
            ].map((st, i) => (
              <div key={i} className="flex gap-5 items-start bg-zinc-900/60 border border-zinc-800 rounded-2xl p-6">
                <span className="text-3xl font-black text-amber-400/80 font-mono shrink-0">{st.step}</span>
                <div>
                  <h3 className="text-lg font-bold text-white mb-1">{st.title}</h3>
                  <p className="text-zinc-400 text-sm leading-relaxed">{st.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <CtaButton id="pasos-comandas-cta" text="Quiero ver mi carta de prueba" />
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          7. PRECIO (TODO CLARO, SIN LETRAS CHICAS)
      ══════════════════════════════════════════ */}
      <section className="py-24 bg-gradient-to-b from-zinc-950 via-zinc-900/50 to-zinc-950 border-t border-zinc-900" id="precio">
        <div className="container mx-auto px-4 md:px-8 max-w-3xl">
          <div className="text-center mb-14">
            <span className="text-amber-400 text-xs font-bold uppercase tracking-widest bg-amber-500/10 border border-amber-500/20 px-3.5 py-1.5 rounded-full">
              Inversión clara
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mt-4">
              Precio
            </h2>
          </div>

          <div className="bg-zinc-900/90 border border-amber-500/30 rounded-3xl p-8 sm:p-12 shadow-2xl relative overflow-hidden">
            {/* Resplandor decorativo */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-amber-500/10 blur-[80px] rounded-full pointer-events-none" />

            <div className="text-center mb-8">
              <span className="text-zinc-400 text-sm uppercase tracking-wider font-semibold">El primer año completo</span>
              <div className="flex items-center justify-center gap-2 mt-2">
                <span className="text-5xl sm:text-6xl font-black text-white">$600</span>
              </div>
              <div className="inline-block bg-amber-500/20 border border-amber-500/40 rounded-full px-5 py-2 mt-4">
                <span className="text-amber-300 font-extrabold text-base sm:text-lg">
                  Son $50 al mes en 12 cuotas
                </span>
              </div>
              <p className="text-xs text-zinc-400 mt-2">
                Difiérelo a 12 meses sin intereses con PayPhone
              </p>
            </div>

            {/* Lo que incluye */}
            <div className="border-t border-zinc-800 pt-8 mb-8 space-y-3.5">
              <p className="text-xs font-bold text-zinc-400 uppercase tracking-wider mb-4">Todo lo anterior incluido:</p>
              {[
                'Tu dirección propia en internet (por ejemplo www.leltenedor.com) donde vive tu carta',
                'El código QR de tu mesa que lleva a tu dirección propia',
                'Pantalla de cocina para comandas ordenadas por tiempo',
                'Visualización en vivo de ventas del día, mesas y pedidos',
                'Base de datos con WhatsApp, cumpleaños y platos favoritos',
                'Aviso de clientes que llevan semanas sin visitarte',
                'Recepción privada de sugerencias y quejas antes de que vayan a Google',
                'Actualizas fotos y precios cuando quieras desde tu celular',
              ].map((inc, i) => (
                <div key={i} className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                  <span className="text-sm text-zinc-300">{inc}</span>
                </div>
              ))}
            </div>

            {/* Reglas de dominio y renovación con total transparencia */}
            <div className="bg-zinc-950/80 border border-zinc-800 rounded-2xl p-5 mb-8 space-y-3">
              <div className="flex items-start gap-3">
                <Globe className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                <p className="text-xs text-zinc-400 leading-relaxed">
                  <strong className="text-white">Sobre tu dirección web:</strong> Mientras renueves, esa dirección se mantiene activa; si no renuevas, el QR deja de funcionar.
                </p>
              </div>
              <div className="flex items-start gap-3 border-t border-zinc-900 pt-3">
                <Shield className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                <p className="text-xs text-zinc-400 leading-relaxed">
                  <strong className="text-white">Renovación del segundo año:</strong> Se informa por escrito antes de cobrar. Cero débitos automáticos sorpresa.
                </p>
              </div>
            </div>

            <CtaButton id="precio-comandas-cta" text="Quiero ver mi carta de prueba" className="w-full text-center" />
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          8. PREGUNTAS FRECUENTES (5 PREGUNTAS CLAVE)
      ══════════════════════════════════════════ */}
      <section className="py-24 bg-zinc-950 border-t border-zinc-900">
        <div className="container mx-auto px-4 md:px-8 max-w-3xl">
          <div className="text-center mb-14">
            <span className="text-amber-400 text-xs font-bold uppercase tracking-widest bg-amber-500/10 border border-amber-500/20 px-3.5 py-1.5 rounded-full">
              Resolvemos tus dudas
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mt-4">
              Preguntas frecuentes
            </h2>
          </div>

          <div className="space-y-4">
            {[
              {
                q: '¿Y si no llevo ninguna cuenta?',
                a: 'Empiezas con lo visible (carta y clientes) y sumas lo demás cuando quieras.',
              },
              {
                q: '¿Emite factura?',
                a: 'No. Sigues facturando como hoy, por ejemplo con tu contador o tu facturero habitual.',
              },
              {
                q: '¿Y si se cae el internet?',
                a: 'Vuelves a la comanda en papel y luego cargas los pedidos. Tu cocina nunca se detiene.',
              },
              {
                q: '¿De quién son los datos de mis clientes?',
                a: 'Tuyos. Los pides en Excel cuando quieras. La información de tus clientes es de tu propiedad exclusiva.',
              },
              {
                q: 'No sé de tecnología.',
                a: 'Lo dejamos funcionando y te atendemos por WhatsApp. No tienes que configurar servidores ni lidiar con cosas raras.',
              },
            ].map((faq, i) => (
              <FaqItem key={i} question={faq.q} answer={faq.a} />
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          9. CIERRE CON EFECTO PARALLAX
      ══════════════════════════════════════════ */}
      <section className="relative py-28 overflow-hidden">
        {/* Fondo Parallax en cierre */}
        <div 
          className="absolute inset-0 -z-20 bg-cover bg-center bg-no-repeat bg-fixed opacity-30"
          style={{ backgroundImage: `url('/images/comandas-cocina.jpg')` }}
        />
        <div className="absolute inset-0 -z-10 bg-gradient-to-t from-zinc-950 via-zinc-950/95 to-zinc-950/80" />

        <div className="container mx-auto px-4 md:px-8 max-w-3xl text-center space-y-6">
          <span className="text-amber-400 text-xs font-bold uppercase tracking-widest bg-amber-500/10 border border-amber-500/20 px-4 py-1.5 rounded-full">
            Da el primer paso hoy
          </span>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white leading-tight">
            ¿Quieres ver tu carta en el celular de tus clientes?
          </h2>

          <p className="text-lg text-zinc-300 max-w-xl mx-auto leading-relaxed">
            Escríbenos y te la mostramos sin costo.
          </p>

          <div className="pt-4">
            <CtaButton id="cierre-comandas-cta" text="Quiero ver mi carta de prueba" className="text-lg px-10 py-5" />
          </div>

          <p className="text-xs text-zinc-500 pt-6">
            Una solución de{' '}
            <Link href="/software-personalizado" className="text-amber-400 hover:underline font-semibold">
              Software Personalizado
            </Link>{' '}
            para la gastronomía ecuatoriana por{' '}
            <Link href="/" className="text-zinc-400 hover:text-white hover:underline font-semibold">
              César Reyes Jaramillo
            </Link>
          </p>
        </div>
      </section>

    </div>
  );
}

const FaqItem = ({ question, answer }: { question: string; answer: string }) => {
  const [open, setOpen] = useState(false);
  return (
    <div className="bg-zinc-900/70 border border-zinc-800 rounded-2xl overflow-hidden transition-all duration-200">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between gap-4 p-5 sm:p-6 text-left hover:bg-zinc-800/40 transition-colors"
        aria-expanded={open}
      >
        <span className="text-base font-bold text-white leading-snug">{question}</span>
        <ChevronDown
          className={`w-5 h-5 text-amber-400 shrink-0 transition-transform duration-300 ${open ? 'rotate-180' : ''}`}
        />
      </button>
      {open && (
        <div className="px-5 pb-5 sm:px-6 sm:pb-6 text-sm text-zinc-300 leading-relaxed border-t border-zinc-800/60 pt-4">
          {answer}
        </div>
      )}
    </div>
  );
};
