"use client";

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { CASOS_EXITO, INDUSTRIAS, Industria } from '@/data/casos-exito';
import ModernSidebarMenu from '@/components/navigation/ModernSidebarMenu';
import Footer from '@/components/footer';
import { Search, Trophy, Bot, CheckCircle2, ArrowRight, Sparkles, Globe, ExternalLink, Filter } from 'lucide-react';

export default function CasosExitoClientPage() {
  const [selectedIndustria, setSelectedIndustria] = useState<string>('Todas');

  const filteredCasos = selectedIndustria === 'Todas'
    ? CASOS_EXITO
    : CASOS_EXITO.filter(c => c.industria === selectedIndustria);

  return (
    <div className="min-h-screen bg-[#121212] text-white selection:bg-cyan-500 selection:text-white">
      {/* Menú Sidebar Oficial */}
      <ModernSidebarMenu />

      <main className="pt-24 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-16">
        {/* Header Hero Estilo Home */}
        <section className="relative pt-8 text-center space-y-6 max-w-4xl mx-auto">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-cyan-500/10 blur-[130px] pointer-events-none rounded-full" />

          <span className="inline-flex items-center gap-2 px-4 py-2 bg-cyan-500/10 text-cyan-400 font-bold rounded-full text-xs sm:text-sm border border-cyan-500/20 uppercase tracking-widest">
            <Trophy className="w-4 h-4" /> Portafolio de Evidencia Real
          </span>
          
          <h1 className="text-4xl sm:text-6xl font-extrabold font-poppins text-white leading-tight">
            Posicionamos negocios reales en <span className="text-cyan-400">Google y ChatGPT</span>
          </h1>
          
          <p className="text-lg sm:text-xl text-gray-400 font-medium leading-relaxed max-w-3xl mx-auto">
            No te mostramos teoría ni promesas. Te mostramos <span className="text-white font-bold">{CASOS_EXITO.length} proyectos reales</span> en Ecuador con búsquedas verificables, sitios activos y posiciones en buscadores de IA.
          </p>

          {/* Métricas Rápidas */}
          <div className="pt-4 grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-2xl mx-auto">
            <div className="bg-[#181818] border border-cyan-500/20 rounded-2xl p-4 text-center">
              <span className="text-2xl sm:text-3xl font-extrabold text-cyan-400 block">{CASOS_EXITO.length}</span>
              <span className="text-xs text-gray-400 font-medium">Sitios Web Desarrollados</span>
            </div>
            <div className="bg-[#181818] border border-cyan-500/20 rounded-2xl p-4 text-center">
              <span className="text-2xl sm:text-3xl font-extrabold text-emerald-400 block">100%</span>
              <span className="text-xs text-gray-400 font-medium">Resultados Verificables</span>
            </div>
            <div className="bg-[#181818] border border-cyan-500/20 rounded-2xl p-4 text-center">
              <span className="text-2xl sm:text-3xl font-extrabold text-cyan-400 block">11+</span>
              <span className="text-xs text-gray-400 font-medium">Industrias Atendidas</span>
            </div>
          </div>
        </section>

        {/* Filtros por Industria */}
        <section className="space-y-4">
          <div className="flex items-center gap-2 text-sm font-semibold text-gray-400">
            <Filter className="w-4 h-4 text-cyan-400" /> Filtrar por industria:
          </div>

          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => setSelectedIndustria('Todas')}
              className={`px-4 py-2 rounded-full text-xs font-bold transition-all ${
                selectedIndustria === 'Todas'
                  ? 'bg-cyan-500 text-slate-950 shadow-lg shadow-cyan-500/20'
                  : 'bg-[#181818] text-gray-400 border border-slate-800 hover:border-cyan-500/40 hover:text-white'
              }`}
            >
              Todas ({CASOS_EXITO.length})
            </button>

            {INDUSTRIAS.map((ind) => {
              const count = CASOS_EXITO.filter(c => c.industria === ind).length;
              if (count === 0) return null;
              return (
                <button
                  key={ind}
                  onClick={() => setSelectedIndustria(ind)}
                  className={`px-4 py-2 rounded-full text-xs font-bold transition-all ${
                    selectedIndustria === ind
                      ? 'bg-cyan-500 text-slate-950 shadow-lg shadow-cyan-500/20'
                      : 'bg-[#181818] text-gray-400 border border-slate-800 hover:border-cyan-500/40 hover:text-white'
                  }`}
                >
                  {ind} ({count})
                </button>
              );
            })}
          </div>
        </section>

        {/* Grid Bento de Proyectos */}
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCasos.map((caso) => (
            <div 
              key={caso.id}
              className="group relative bg-[#181818] border border-cyan-500/20 rounded-[2rem] p-6 hover:border-cyan-400/50 transition-all duration-300 flex flex-col justify-between overflow-hidden shadow-xl"
            >
              <div className="space-y-5 relative z-10">
                {/* Header de Tarjeta */}
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-300 border border-cyan-500/30">
                    {caso.industria}
                  </span>
                  <span className="text-xs font-medium text-gray-400">{caso.ciudad}</span>
                </div>

                {/* Info Cliente */}
                <div className="flex items-center gap-3">
                  {caso.logoCliente && (
                    <div className="w-12 h-12 rounded-xl bg-black/80 p-2 border border-slate-700/80 flex items-center justify-center flex-shrink-0">
                      <Image 
                        src={caso.logoCliente} 
                        alt={`Logo ${caso.cliente}`}
                        width={36}
                        height={36}
                        className="object-contain max-h-full"
                      />
                    </div>
                  )}
                  <div>
                    <h3 className="text-xl font-bold font-poppins text-white group-hover:text-cyan-400 transition-colors">
                      {caso.cliente}
                    </h3>
                    <a
                      href={caso.sitioWeb}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-xs text-cyan-400/80 hover:text-cyan-300 font-mono transition-colors mt-0.5"
                    >
                      <Globe className="w-3 h-3" /> {caso.sitioWeb.replace('https://', '').replace('www.', '').replace(/\/$/, '')}
                      <ExternalLink className="w-2.5 h-2.5" />
                    </a>
                  </div>
                </div>

                {/* Búsqueda Clave */}
                <div className="p-3.5 bg-[#121212] rounded-xl border border-slate-800 space-y-1">
                  <div className="flex items-center gap-1.5 text-xs text-gray-400 font-medium">
                    <Search className="w-3.5 h-3.5 text-cyan-400" /> Búsqueda Objetivo:
                  </div>
                  <p className="text-sm font-bold text-cyan-300 font-mono">"{caso.busquedaClave}"</p>
                </div>

                <p className="text-sm text-gray-400 font-medium leading-relaxed line-clamp-3">
                  {caso.orillaA}
                </p>

                {caso.experimentoChatGPT && (
                  <div className="flex items-center gap-2 text-xs text-gray-300 bg-cyan-950/40 border border-cyan-500/30 p-2.5 rounded-xl">
                    <Bot className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                    <span>Respuesta verificada en ChatGPT</span>
                  </div>
                )}
              </div>

              {/* Footer de Tarjeta */}
              <div className="pt-5 mt-6 border-t border-slate-800/80 flex items-center justify-between relative z-10">
                <span className="text-xs font-bold text-emerald-400 flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4" /> {caso.posicion}
                </span>

                <Link
                  href={`/casos-de-exito/${caso.slug}`}
                  className="inline-flex items-center gap-1 text-xs font-bold text-cyan-400 hover:text-cyan-300 transition-colors"
                >
                  Ver Caso <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          ))}
        </section>

        {/* Banner Final de IA */}
        <section className="relative bg-[#181818] border border-cyan-500/20 rounded-[2.5rem] p-8 md:p-14 overflow-hidden text-center space-y-6 max-w-4xl mx-auto">
          <div className="w-14 h-14 rounded-2xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center mx-auto text-cyan-400">
            <Sparkles className="w-7 h-7" />
          </div>

          <h2 className="text-2xl sm:text-4xl font-bold font-poppins text-white">
            ¿Quieres que tu empresa aparezca en Google y respuestas de Inteligencia Artificial?
          </h2>

          <p className="text-gray-400 text-base sm:text-lg font-medium leading-relaxed max-w-2xl mx-auto">
            Analizamos la presencia digital de tu negocio y estructuramos tu autoridad para captar clientes en buscadores tradicionales y modelos de IA como ChatGPT.
          </p>

          <div className="pt-2">
            <Link
              href="/analisis-estrategico"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-cyan-500 text-slate-950 font-bold hover:bg-cyan-400 transition-all shadow-lg shadow-cyan-500/20"
            >
              Solicitar Auditoría Estratégica <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
