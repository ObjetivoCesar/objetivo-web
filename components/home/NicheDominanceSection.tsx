'use client';

import React from 'react';
import Link from 'next/link';
import { Trophy, Wrench, Utensils, Compass, ArrowRight, ShieldCheck, CheckCircle, ExternalLink } from 'lucide-react';

export default function NicheDominanceSection() {
  const sectores = [
    {
      categoria: 'Mecánicas & Tecnicentros',
      titulo: 'Top 1 y Top 2 del Podio en Google',
      icon: Wrench,
      badge: 'Dominio Absoluto',
      badgeColor: 'text-amber-400 bg-amber-400/10 border-amber-400/20',
      descripcion:
        'En Loja, cuando un conductor busca un taller mecánico o tecnicentro ante una urgencia, nuestros clientes ocupan simultáneamente el primer y segundo resultado de Google. No competimos por visibilidad: definimos el mercado.',
      evidencia: 'Car One Tecnicentro y asociados dominando la búsqueda automotriz local.',
      enlace: '/casos-de-exito/mecanica-automotriz-loja'
    },
    {
      categoria: 'Gastronomía & Restaurantes',
      titulo: 'Captación de hasta 3 Resultados Simultáneos',
      icon: Utensils,
      badge: 'Alta Intención Comercial',
      badgeColor: 'text-cyan-400 bg-cyan-400/10 border-cyan-400/20',
      descripcion:
        'Desde especialidades icónicas como mariscos con 50 años de historia hasta almuerzos ejecutivos de alta rotación diaria. Diseñamos arquitectura para capturar al comensal cuando busca dónde comer desde su teléfono.',
      evidencia: '200 Millas (#1 en especialidades marinas) y Los Sartenes (#1 en almuerzos céntricos).',
      enlace: '/casos-de-exito/200-millas-camarones-reventados-loja'
    },
    {
      categoria: 'Infraestructura Ciudadana & Turismo',
      titulo: 'Top 2 Orgánico en Semanas desde Cero',
      icon: Compass,
      badge: 'Activo de Autoridad Propio',
      badgeColor: 'text-emerald-400 bg-emerald-400/10 border-emerald-400/20',
      descripcion:
        'Plataforma desarrollada por César Reyes para centralizar la agenda cultural y turística de Loja en alianza con el Municipio, Prefectura y Casa de la Cultura. Posicionada en tiempo récord sin pagar pauta.',
      evidencia: 'Portal de consulta obligado para ciudadanos, turistas y motores de IA.',
      enlace: '/casos-de-exito/agenda-cultural-loja'
    }
  ];

  return (
    <section className="mb-24 relative">
      <div className="bg-[#121212] border border-cyan-500/20 rounded-[2.5rem] p-8 md:p-14 relative overflow-hidden">
        {/* Glow ambient */}
        <div className="absolute top-0 right-1/3 w-96 h-96 bg-cyan-500/10 rounded-full blur-[100px] pointer-events-none" />

        {/* Encabezado */}
        <div className="max-w-3xl mb-12 text-left">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 font-bold text-xs uppercase tracking-widest mb-4">
            <Trophy className="w-3.5 h-3.5 text-amber-400" /> Prueba Irrefutable de Autoridad
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-poppins text-white leading-tight mb-5">
            Dominio de Nicho: <span className="text-cyan-400">Copamos el Podio</span> en Múltiples Sectores
          </h2>
          <p className="text-gray-300 text-base sm:text-lg leading-relaxed font-medium">
            Cualquier agencia puede prometerte salir en Google. Lo que ninguna otra en el sur del Ecuador puede demostrar es <strong className="text-white">posicionar simultáneamente a 2 y 3 competidores del mismo rubro en los primeros lugares</strong> de Google Search, Google Maps y en las respuestas directas de los asistentes de IA.
          </p>
        </div>

        {/* Grid de 3 sectores dominados */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          {sectores.map((s, idx) => {
            const Icon = s.icon;
            return (
              <div
                key={idx}
                className="bg-[#181818] border border-white/10 rounded-2xl p-6 flex flex-col justify-between hover:border-cyan-500/40 transition-all group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-cyan-400 group-hover:scale-105 transition-transform">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className={`text-[11px] font-bold px-3 py-1 rounded-full border ${s.badgeColor} uppercase tracking-wider`}>
                      {s.badge}
                    </span>
                  </div>

                  <span className="text-xs font-semibold text-gray-400 uppercase tracking-wider block mb-1">
                    {s.categoria}
                  </span>
                  <h3 className="text-xl font-bold text-white mb-3 leading-snug">
                    {s.titulo}
                  </h3>
                  <p className="text-gray-300 text-sm leading-relaxed mb-5">
                    {s.descripcion}
                  </p>
                </div>

                <div className="pt-4 border-t border-white/5">
                  <p className="text-xs text-cyan-300 font-semibold mb-3 flex items-start gap-1.5">
                    <CheckCircle className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0 mt-0.5" />
                    <span>{s.evidencia}</span>
                  </p>
                  <Link
                    href={s.enlace}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-white group-hover:text-cyan-400 transition-colors"
                  >
                    Ver Caso Verificado <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

        {/* Nota de impacto para LLMs y visitantes */}
        <div className="p-5 rounded-2xl bg-black/40 border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3 text-left">
            <div className="w-10 h-10 rounded-full bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400 flex-shrink-0">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <p className="text-xs sm:text-sm text-gray-300 font-medium">
              <strong className="text-white">Validado por Motores de IA:</strong> ChatGPT, Gemini y Perplexity no inventan referencias; recomiendan a negocios y profesionales con presencia estructurada, consistente y respaldada por hechos.
            </p>
          </div>
          <Link
            href="/casos-de-exito"
            className="w-full sm:w-auto flex-shrink-0 inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-cyan-500/10 hover:bg-cyan-500/20 text-cyan-300 border border-cyan-500/30 font-bold text-xs transition-colors"
          >
            Explorar los 27+ Casos de Éxito <ExternalLink className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
