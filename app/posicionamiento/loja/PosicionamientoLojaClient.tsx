'use client';

import Link from 'next/link';
import Image from 'next/image';
import { CASOS_EXITO } from '@/data/casos-exito';
import ModernSidebarMenu from '@/components/navigation/ModernSidebarMenu';
import Footer from '@/components/footer';
import { 
  MapPin, 
  Search, 
  CheckCircle, 
  ArrowRight, 
  ExternalLink, 
  Target, 
  Compass, 
  TrendingUp, 
  Star, 
  ShieldCheck, 
  Building, 
  HelpCircle,
  Sparkles
} from 'lucide-react';

export default function PosicionamientoLojaClient() {
  // Filtrar estrictamente los casos reales con ubicación en Loja
  const casosLoja = CASOS_EXITO.filter(
    (c) => c.ciudad.toLowerCase().includes('loja')
  );

  const faqs = [
    {
      q: '¿Cuánto cuesta el posicionamiento web (SEO) en Loja?',
      a: 'La inversión varía según la situación técnica de tu sitio web y la competencia de tu sector en Loja. Ofrecemos desde diagnósticos y auditorías técnicas iniciales hasta planes integrales de posicionamiento local y alianzas adaptadas a la realidad de PYMEs y profesionales lojanos.'
    },
    {
      q: '¿Funciona el SEO para negocios pequeños o locales en Loja?',
      a: 'Absolutamente; de hecho, es donde mayor retorno genera. Los clientes en Loja y zonas cercanas buscan soluciones por cercanía y necesidad inmediata. Posicionar tu negocio en búsquedas directas y en Google Maps te permite captar clientes sin depender de pagar publicidad todos los días.'
    },
    {
      q: '¿Cuánto tiempo toma ver resultados de posicionamiento en Loja?',
      a: 'En el contexto de búsquedas locales en Loja, las optimizaciones de Google Maps y las mejoras técnicas en el código suelen reflejar avances en visibilidad entre las 3 y 8 semanas iniciales, consolidando tráfico orgánico sostenido en el mediano plazo.'
    },
    {
      q: '¿Por qué es indispensable optimizar Google Maps además del sitio web?',
      a: 'Porque la mayoría de usuarios que buscan en su teléfono celular un servicio en Loja ven primero los resultados del mapa local. Al unir una web ultrarrápida con una ficha de Google Maps optimizada y datos estructurados, tu negocio lidera tanto en Google Search como en mapas y buscadores de inteligencia artificial.'
    }
  ];

  return (
    <div className="min-h-screen bg-[#121212] text-white selection:bg-cyan-500 selection:text-white">
      <ModernSidebarMenu />

      {/* Hero Section Local */}
      <header className="relative pt-32 pb-20 px-6 overflow-hidden border-b border-white/10">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-5xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs sm:text-sm font-semibold mb-6">
            <MapPin className="w-4 h-4" />
            <span>Consultoría SEO & Posicionamiento Local en Loja, Ecuador</span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-extrabold font-poppins text-white leading-tight mb-6">
            Posicionamiento Web y SEO en <span className="text-cyan-400">Loja, Ecuador</span>
          </h1>

          <p className="text-lg sm:text-xl text-gray-300 font-normal leading-relaxed max-w-3xl mx-auto mb-8">
            Ayudamos a empresas, negocios y profesionales independientes en <strong className="text-white font-semibold">Loja</strong> y cantones de la región sur (<span className="text-cyan-300">Catamayo, Cariamanga, Saraguro, Vilcabamba y Zamora</span>) a conquistar las primeras posiciones de Google, Google Maps y buscadores de Inteligencia Artificial.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#casos-loja"
              className="w-full sm:w-auto px-8 py-4 bg-cyan-400 hover:bg-cyan-300 text-slate-950 font-bold rounded-2xl transition-all shadow-xl shadow-cyan-400/20 text-center"
            >
              Ver Casos Reales en Loja
            </a>
            <Link
              href="/posicionamiento"
              className="w-full sm:w-auto px-8 py-4 bg-white/5 hover:bg-white/10 border border-white/10 text-white font-semibold rounded-2xl transition-all text-center"
            >
              Conocer Todos los Servicios SEO
            </Link>
          </div>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-6 py-16 space-y-24">
        {/* Sección de Evidencia Real: Casos en Loja */}
        <section id="casos-loja" className="scroll-mt-24 space-y-10">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <div className="inline-flex items-center gap-2 text-cyan-400 text-sm font-bold uppercase tracking-wider">
              <ShieldCheck className="w-4 h-4" />
              <span>Evidencia Comprobable</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold font-poppins">
              Casos Reales de Negocios Posicionados en Loja
            </h2>
            <p className="text-gray-400 text-base sm:text-lg">
              No te mostramos promesas vacías. Estos son negocios y profesionales de Loja con sitios activos, búsquedas verificadas y resultados orgánicos reales.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {casosLoja.map((caso) => (
              <div
                key={caso.id}
                className="bg-[#181818] border border-white/10 rounded-2xl p-6 flex flex-col justify-between hover:border-cyan-500/40 transition-all duration-300 group"
              >
                <div>
                  <div className="flex items-center justify-between gap-4 mb-4">
                    <div className="relative w-12 h-12 bg-white/5 rounded-xl border border-white/10 flex items-center justify-center overflow-hidden p-2">
                      <Image
                        src={caso.logoCliente}
                        alt={caso.cliente}
                        fill
                        className="object-contain p-1"
                      />
                    </div>
                    <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                      {caso.categoria}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                    {caso.cliente}
                  </h3>

                  <div className="space-y-2 mb-4 text-xs sm:text-sm">
                    <div className="flex items-start gap-2 text-gray-300">
                      <Search className="w-4 h-4 text-cyan-400 flex-shrink-0 mt-0.5" />
                      <div>
                        <span className="text-gray-400 block text-xs">Búsqueda objetivo:</span>
                        <strong className="text-white">"{caso.busquedaClave}"</strong>
                      </div>
                    </div>

                    <div className="flex items-start gap-2 text-gray-300">
                      <CheckCircle className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                      <div>
                        <span className="text-gray-400 block text-xs">Resultado comprobado:</span>
                        <span className="text-emerald-300 font-medium">{caso.posicion}</span>
                      </div>
                    </div>
                  </div>

                  <p className="text-gray-400 text-xs leading-relaxed line-clamp-3 mb-6">
                    {caso.orillaA}
                  </p>
                </div>

                <div className="pt-4 border-t border-white/5 flex items-center justify-between gap-2">
                  <Link
                    href={`/casos-de-exito/${caso.slug}`}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-cyan-400 hover:text-cyan-300 transition-colors"
                  >
                    <span>Ver caso detallado</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>

                  <a
                    href={caso.sitioWeb}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-white text-xs inline-flex items-center gap-1 transition-colors"
                    title="Visitar sitio web oficial"
                  >
                    <span>Web en vivo</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Sección de Enfoque Local: Google Maps y Búsqueda Móvil */}
        <section className="bg-gradient-to-br from-white/5 via-[#161616] to-white/5 border border-cyan-500/20 rounded-3xl p-8 sm:p-12 space-y-8">
          <div className="max-w-3xl space-y-3">
            <span className="text-cyan-400 text-xs sm:text-sm font-bold uppercase tracking-wider">
              Estrategia Localizada
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold font-poppins text-white">
              SEO Local y Google Maps para Empresas de Loja
            </h2>
            <p className="text-gray-300 text-base sm:text-lg leading-relaxed">
              El comportamiento del consumidor en Loja es principalmente móvil y de proximidad. No compites con empresas internacionales; compites por ser la opción visible cuando un cliente busca un servicio en tu barrio, sector o ciudad.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-[#181818] border border-white/10 rounded-2xl p-6 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400">
                <MapPin className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-white">Google Business Profile</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Configuración y optimización de tu ficha de Google Maps para aparecer en el top local cuando buscan desde smartphones en Loja y cantones vecinos.
              </p>
            </div>

            <div className="bg-[#181818] border border-white/10 rounded-2xl p-6 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400">
                <Target className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-white">SEO de Intención Específica</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Estructura web enfocada en consultas de compra directa y especialidades, evitando competir por palabras genéricas sin intención de consumo.
              </p>
            </div>

            <div className="bg-[#181818] border border-white/10 rounded-2xl p-6 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400">
                <Sparkles className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-white">Schema Markup & Respuestas IA</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Marcado semántico estructurado (Schema.org) para que Google y asistentes de IA (ChatGPT, Gemini) reconozcan la ubicación, especialidad y teléfono de tu negocio en Loja.
              </p>
            </div>
          </div>
        </section>

        {/* Sección FAQ Localizada */}
        <section className="space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <h2 className="text-3xl font-bold font-poppins">Preguntas Frecuentes sobre SEO en Loja</h2>
            <p className="text-gray-400 text-sm sm:text-base">
              Respuestas claras y honestas sobre cómo funciona el posicionamiento web en la ciudad.
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq, idx) => (
              <div
                key={idx}
                className="bg-[#181818] border border-white/10 rounded-2xl p-6 space-y-2 hover:border-white/20 transition-all"
              >
                <h3 className="text-lg font-bold text-white flex items-start gap-3">
                  <span className="text-cyan-400 font-mono">0{idx + 1}.</span>
                  <span>{faq.q}</span>
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed pl-7">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Final */}
        <section className="bg-gradient-to-r from-cyan-900/40 via-[#181818] to-cyan-900/40 border border-cyan-500/30 rounded-3xl p-8 sm:p-12 text-center space-y-6">
          <h2 className="text-3xl sm:text-4xl font-bold font-poppins text-white">
            ¿Listo para posicionar tu negocio en Loja?
          </h2>
          <p className="text-gray-300 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            Analizamos la presencia digital de tu negocio y te mostramos el camino técnico para superar a tu competencia local en Google y Google Maps.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
            <Link
              href="/posicionamiento"
              className="w-full sm:w-auto px-8 py-4 bg-cyan-400 hover:bg-cyan-300 text-slate-950 font-bold rounded-2xl transition-all shadow-xl shadow-cyan-400/20"
            >
              Consultar Planes de Posicionamiento
            </Link>
            <Link
              href="/casos-de-exito"
              className="w-full sm:w-auto px-8 py-4 bg-white/5 hover:bg-white/10 border border-white/10 text-white font-semibold rounded-2xl transition-all"
            >
              Explorar Todos los Casos de Éxito
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
