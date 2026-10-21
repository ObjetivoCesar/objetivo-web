import React from 'react';
import Link from 'next/link';
import { 
  Code2, 
  Cpu, 
  MapPin, 
  CheckCircle2, 
  ArrowRight, 
  Sparkles, 
  Layers, 
  Database, 
  ShieldCheck, 
  Smartphone,
  ChevronRight,
  TrendingUp,
  Zap,
  Building2,
  Clock,
  MessageSquare,
  UtensilsCrossed,
  Hotel,
  Briefcase
} from 'lucide-react';

interface CityPageProps {
  ciudad: string;
  region: string;
  tagline: string;
  contextoEconomico: string;
  enfoqueIndustrias: {
    nombre: string;
    descripcion: string;
    enlace: string;
    icon: any;
  }[];
  beneficiosLocales: string[];
  casosUso: string[];
}

export default function SoftwareCiudadClient({
  ciudad,
  region,
  tagline,
  contextoEconomico,
  enfoqueIndustrias,
  beneficiosLocales,
  casosUso
}: CityPageProps) {
  const whatsappUrl = `https://wa.me/593963410409?text=${encodeURIComponent(`Hola César, me interesa desarrollar un Software Personalizado para mi negocio en ${ciudad}.`)}`;

  return (
    <div className="min-h-screen bg-zinc-950 text-white selection:bg-amber-500 selection:text-black">
      {/* ══════════════════════════════════════════
          1. HERO GEO-ESPECÍFICO
      ══════════════════════════════════════════ */}
      <section className="relative min-h-[85vh] flex items-center justify-center pt-28 pb-16 overflow-hidden isolate">
        <img
          src="/images/software-personalizado-hero.jpg"
          alt={`Desarrollo de Software Personalizado en ${ciudad}, Ecuador`}
          className="absolute inset-0 w-full h-full object-cover object-center"
          style={{ zIndex: -2 }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/50 to-black/30" style={{ zIndex: -1 }} />
        <div className="absolute inset-0 bg-gradient-to-r from-zinc-950/85 via-zinc-950/40 to-transparent" style={{ zIndex: -1 }} />

        <div className="container mx-auto px-4 md:px-8 w-full">
          <div className="max-w-3xl space-y-5">
            <div className="inline-flex items-center gap-2 bg-black/60 border border-amber-500/40 rounded-full px-4 py-1.5 backdrop-blur-md">
              <MapPin className="w-3.5 h-3.5 text-amber-400" />
              <span className="text-amber-300 text-xs font-bold uppercase tracking-wider">
                {ciudad} · {region} · Ecuador
              </span>
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white leading-[1.1] tracking-tight">
              Desarrollo de Software Personalizado en{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-orange-400 to-amber-200">
                {ciudad}
              </span>
            </h1>

            <p className="text-base sm:text-lg text-zinc-200 font-medium leading-relaxed max-w-2xl">
              {tagline} {contextoEconomico}
            </p>

            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-400 hover:to-orange-400 text-black font-extrabold px-8 py-4 rounded-full text-base transition-all duration-300 shadow-xl shadow-amber-500/20 hover:scale-105 active:scale-95 text-center"
              >
                <Zap className="w-5 h-5 shrink-0" />
                <span>Cotizar software en {ciudad}</span>
              </a>
              <Link
                href="/software-personalizado"
                className="inline-flex items-center justify-center gap-2 bg-black/60 hover:bg-zinc-800 border border-zinc-700/80 backdrop-blur-md text-zinc-200 font-bold px-6 py-4 rounded-full text-base transition-all text-center"
              >
                <span>Ver catálogo general</span>
                <ChevronRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Microbadges */}
            <div className="pt-4 grid grid-cols-3 gap-2.5 max-w-lg">
              <div className="bg-black/60 backdrop-blur-md border border-zinc-700/70 rounded-xl p-2.5 text-center">
                <p className="text-base sm:text-lg font-black text-amber-400">100%</p>
                <p className="text-[10px] text-zinc-300 font-medium">A la medida</p>
              </div>
              <div className="bg-black/60 backdrop-blur-md border border-zinc-700/70 rounded-xl p-2.5 text-center">
                <p className="text-base sm:text-lg font-black text-cyan-400">SRI + Pagos</p>
                <p className="text-[10px] text-zinc-300 font-medium">Integración local</p>
              </div>
              <div className="bg-black/60 backdrop-blur-md border border-zinc-700/70 rounded-xl p-2.5 text-center">
                <p className="text-base sm:text-lg font-black text-emerald-400">Soporte</p>
                <p className="text-[10px] text-zinc-300 font-medium">WhatsApp directo</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          2. POR QUÉ UN SISTEMA A MEDIDA EN CIUDAD
      ══════════════════════════════════════════ */}
      <section className="py-20 bg-zinc-900/40 border-t border-zinc-900">
        <div className="container mx-auto px-4 md:px-8 max-w-5xl">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-amber-400 text-xs font-bold uppercase tracking-widest bg-amber-500/10 border border-amber-500/20 px-3.5 py-1.5 rounded-full">
              Ventaja Competitiva
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-white mt-4 leading-tight">
              ¿Por qué las empresas en {ciudad} eligen software personalizado?
            </h2>
            <p className="text-zinc-400 text-sm sm:text-base mt-3">
              Dejar de depender de hojas de cálculo desordenadas o plataformas extranjeras caras que no entienden la realidad de Ecuador.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {beneficiosLocales.map((ben, i) => (
              <div key={i} className="bg-zinc-900/70 border border-zinc-800 rounded-2xl p-6 flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center shrink-0">
                  <CheckCircle2 className="w-5 h-5 text-amber-400" />
                </div>
                <div>
                  <h3 className="font-bold text-white text-base mb-1">{ben.split(':')[0]}</h3>
                  <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed">
                    {ben.split(':')[1] || ben}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          3. SOLUCIONES DESTACADAS PARA ESTA REGIÓN
      ══════════════════════════════════════════ */}
      <section className="py-20 bg-zinc-950 border-t border-zinc-900">
        <div className="container mx-auto px-4 md:px-8 max-w-5xl">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-amber-400 text-xs font-bold uppercase tracking-widest bg-amber-500/10 border border-amber-500/20 px-3.5 py-1.5 rounded-full">
              Módulos Probados
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-white mt-4 leading-tight">
              Soluciones más solicitadas en {ciudad}
            </h2>
          </div>

          <div className="grid sm:grid-cols-3 gap-6">
            {enfoqueIndustrias.map((sol, i) => (
              <Link
                key={i}
                href={sol.enlace}
                className="bg-zinc-900/60 border border-zinc-800 hover:border-amber-500/50 rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1 group flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center mb-4 text-amber-400 group-hover:scale-110 transition-transform">
                    <sol.icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-white group-hover:text-amber-300 transition-colors">
                    {sol.nombre}
                  </h3>
                  <p className="text-xs text-zinc-400 mt-2 leading-relaxed">
                    {sol.descripcion}
                  </p>
                </div>
                <div className="pt-4 mt-4 border-t border-zinc-800 flex items-center gap-1.5 text-xs font-bold text-amber-400">
                  <span>Conocer solución</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          4. OTRAS CIUDADES (INTERLINKING)
      ══════════════════════════════════════════ */}
      <section className="py-16 bg-zinc-900/40 border-t border-zinc-900">
        <div className="container mx-auto px-4 md:px-8 max-w-4xl text-center">
          <p className="text-xs font-bold text-amber-400 uppercase tracking-widest mb-3">Cobertura Nacional</p>
          <h3 className="text-xl font-bold text-white mb-6">
            También desarrollamos software en otras ciudades de Ecuador
          </h3>
          <div className="flex flex-wrap items-center justify-center gap-3">
            {[
              { name: "Loja", href: "/software-personalizado/loja" },
              { name: "Quito", href: "/software-personalizado/quito" },
              { name: "Guayaquil", href: "/software-personalizado/guayaquil" },
              { name: "Cuenca", href: "/software-personalizado/cuenca" },
              { name: "Matriz Nacional", href: "/software-personalizado" }
            ].filter(c => c.name !== ciudad).map((c, i) => (
              <Link
                key={i}
                href={c.href}
                className="px-4 py-2 rounded-xl bg-zinc-800/80 border border-zinc-700/80 hover:border-amber-500/40 text-xs font-bold text-zinc-200 hover:text-amber-300 transition-colors"
              >
                {c.name}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          5. CTA FINAL
      ══════════════════════════════════════════ */}
      <section className="py-20 bg-gradient-to-b from-zinc-950 to-zinc-900 border-t border-zinc-900 text-center">
        <div className="container mx-auto px-4 md:px-8 max-w-2xl space-y-6">
          <h2 className="text-3xl sm:text-4xl font-black text-white leading-tight">
            ¿Tu empresa en {ciudad} necesita automatizar sus operaciones?
          </h2>
          <p className="text-zinc-300 text-sm sm:text-base leading-relaxed">
            Hablemos hoy mismo. Evaluamos tus flujos de trabajo actuales y te proponemos la arquitectura tecnológica ideal para crecer sin trabas.
          </p>
          <div className="pt-2">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2.5 bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-400 hover:to-orange-400 text-black font-black px-9 py-4 rounded-full text-base shadow-xl shadow-amber-500/20 hover:scale-105 transition-all duration-300"
            >
              <MessageSquare className="w-5 h-5 shrink-0" />
              <span>Contactar por WhatsApp</span>
            </a>
          </div>
          <p className="text-xs text-zinc-500 pt-2">
            César Reyes Jaramillo · Software Personalizado en {ciudad}, Ecuador
          </p>
        </div>
      </section>
    </div>
  );
}
