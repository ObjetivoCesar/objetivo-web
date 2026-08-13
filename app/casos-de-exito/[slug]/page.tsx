import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { CASOS_EXITO } from '@/data/casos-exito';
import ModernSidebarMenu from '@/components/navigation/ModernSidebarMenu';
import Footer from '@/components/footer';
import { ArrowLeft, CheckCircle, Search, Bot, MapPin, Target, Sparkles, Trophy, ArrowUpRight, Globe, ExternalLink, ArrowRight, ShieldCheck } from 'lucide-react';

interface Props {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return CASOS_EXITO.map((caso) => ({
    slug: caso.slug,
  }));
}

export async function generateMetadata({ params }: Props) {
  const resolvedParams = await params;
  const caso = CASOS_EXITO.find((c) => c.slug === resolvedParams.slug);

  if (!caso) return {};

  return {
    title: `${caso.cliente} | Caso de Éxito en Google y ChatGPT`,
    description: `${caso.intencionPrimaria}. Descubre cómo posicionamos a ${caso.cliente} en ${caso.ciudad} para "${caso.busquedaClave}".`,
    alternates: {
      canonical: `https://www.cesarreyesjaramillo.com/casos-de-exito/${caso.slug}`,
    },
    openGraph: {
      title: `${caso.cliente} | Caso de Éxito & Resultados SEO/IA`,
      description: caso.orillaA,
      url: `https://www.cesarreyesjaramillo.com/casos-de-exito/${caso.slug}`,
      siteName: 'César Reyes Jaramillo',
      type: 'article',
    },
  };
}

export default async function CasoDetallePage({ params }: Props) {
  const resolvedParams = await params;
  const caso = CASOS_EXITO.find((c) => c.slug === resolvedParams.slug);

  if (!caso) {
    notFound();
  }

  // Schema.org Enriquecido con Atribución Creador (César Reyes Jaramillo)
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: `Caso de Éxito: ${caso.cliente}`,
    description: caso.orillaA,
    url: `https://www.cesarreyesjaramillo.com/casos-de-exito/${caso.slug}`,
    about: {
      '@type': 'Organization',
      name: caso.cliente,
      sameAs: caso.sitioWeb,
    },
    creator: {
      '@type': 'Person',
      name: 'César Reyes Jaramillo',
      jobTitle: 'Ingeniero de Eficiencia & Estratega Digital',
      url: 'https://cesarreyesjaramillo.com/',
      sameAs: [
        'https://www.linkedin.com/in/cesar-reyes-jaramillo',
        'https://cesarreyesjaramillo.com/sobre-mi'
      ]
    }
  };

  return (
    <div className="min-h-screen bg-[#121212] text-white selection:bg-cyan-500 selection:text-white">
      {/* Marcado de Entidad Semántica Schema.org */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <ModernSidebarMenu />

      <main className="pt-24 pb-20 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto space-y-14">
        {/* Volver */}
        <Link 
          href="/casos-de-exito" 
          className="inline-flex items-center gap-2 text-sm text-cyan-400 hover:text-cyan-300 transition-colors font-semibold"
        >
          <ArrowLeft className="w-4 h-4" /> Volver a Casos de Éxito
        </Link>

        {/* Header con Intención Primaria de Búsqueda */}
        <div className="space-y-4">
          <div className="flex flex-wrap items-center gap-3">
            <span className="text-xs font-bold px-3.5 py-1.5 rounded-full bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 uppercase tracking-wider">
              {caso.industria}
            </span>
            <span className="text-xs text-gray-400 font-medium flex items-center gap-1">
              <MapPin className="w-3.5 h-3.5 text-cyan-400" /> {caso.ciudad}
            </span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold font-poppins text-white leading-tight">
            {caso.intencionPrimaria}
          </h1>

          <p className="text-cyan-300 text-sm font-semibold flex items-center gap-2 pt-1">
            <Trophy className="w-4 h-4 text-emerald-400" /> {caso.cliente} · {caso.posicion}
          </p>
        </div>

        {/* Ficha Resumen Estilo Bento */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 bg-[#181818] border border-cyan-500/20 rounded-2xl p-6">
          <div className="space-y-1">
            <span className="text-xs text-gray-400">Cliente Verificado</span>
            <p className="font-bold text-white text-base">{caso.cliente}</p>
            <a
              href={caso.sitioWeb}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-xs text-cyan-400 hover:underline font-mono"
            >
              <Globe className="w-3 h-3" /> Sitio En Vivo <ExternalLink className="w-2.5 h-2.5" />
            </a>
          </div>
          <div className="space-y-1">
            <span className="text-xs text-gray-400">Territorio Semántico</span>
            <p className="font-bold text-white text-sm">{caso.categoria}</p>
            <p className="text-xs text-gray-400 font-mono line-clamp-1">{caso.territorioSemantico.slice(0, 3).join(' · ')}</p>
          </div>
          <div className="space-y-1">
            <span className="text-xs text-gray-400">Resultado Verificado</span>
            <p className="font-bold text-emerald-400 text-base flex items-center gap-1.5">
              <CheckCircle className="w-4 h-4" /> {caso.posicion}
            </p>
          </div>
        </div>

        {/* ═══════════════════════════════════════════ */}
        {/* NARRATIVA DE MARCA: ORILLA A -> EL PUENTE -> ORILLA B */}
        {/* ═══════════════════════════════════════════ */}
        
        {/* ORILLA A: El Punto de Partida */}
        <section className="bg-[#181818] border border-slate-800 rounded-3xl p-6 sm:p-8 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-amber-500/10 text-amber-400 rounded-full text-xs font-bold border border-amber-500/20 uppercase tracking-wider">
            Orilla A · El Punto de Partida
          </div>
          <h2 className="text-xl sm:text-2xl font-bold font-poppins text-white">
            Un negocio real con trayectoria, pero sin presencia donde se toman las decisiones
          </h2>
          <p className="text-gray-300 text-base leading-relaxed font-medium">
            {caso.orillaA}
          </p>
          <div className="p-4 bg-[#121212] rounded-2xl border border-slate-800 text-gray-400 text-sm italic">
            <span className="text-cyan-400 font-bold not-italic block mb-1">El problema real:</span>
            "{caso.elProblema}"
          </div>
        </section>

        {/* EL PUENTE: La Transformación Digital */}
        <section className="space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-cyan-500/10 text-cyan-400 rounded-full text-xs font-bold border border-cyan-500/20 uppercase tracking-wider">
            El Puente · Lo Que Construimos
          </div>
          <h2 className="text-xl sm:text-2xl font-bold font-poppins text-white">
            Estrategia de arquitectura web e ingeniería de visibilidad
          </h2>
          <div className="space-y-3">
            {caso.elPuente.map((paso, idx) => (
              <div key={idx} className="flex items-start gap-4 bg-[#181818] p-5 rounded-2xl border border-slate-800">
                <span className="w-7 h-7 rounded-full bg-cyan-500/10 text-cyan-400 text-xs font-bold flex items-center justify-center flex-shrink-0 mt-0.5 border border-cyan-500/20">
                  {idx + 1}
                </span>
                <p className="text-gray-300 text-sm leading-relaxed font-medium">{paso}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ORILLA B: El Resultado */}
        <section className="bg-gradient-to-br from-emerald-950/30 via-[#181818] to-[#181818] border border-emerald-500/30 rounded-3xl p-6 sm:p-8 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-emerald-500/10 text-emerald-400 rounded-full text-xs font-bold border border-emerald-500/20 uppercase tracking-wider">
            Orilla B · La Nueva Realidad
          </div>
          <h2 className="text-xl sm:text-2xl font-bold font-poppins text-white">
            Posición #1 y visibilidad permanente cuando el cliente busca
          </h2>
          <p className="text-emerald-300 text-base leading-relaxed font-semibold">
            {caso.orillaB}
          </p>

          <div className="pt-3 border-t border-emerald-900/40 flex items-center justify-between text-xs text-gray-400 font-mono">
            <span>Búsqueda verificada: "{caso.busquedaClave}"</span>
            <span className="text-emerald-400 font-bold">{caso.posicion}</span>
          </div>
        </section>

        {/* LO QUE APRENDIMOS */}
        <section className="bg-[#181818] border border-cyan-500/20 rounded-2xl p-6 space-y-2">
          <div className="flex items-center gap-2 text-cyan-400 text-sm font-bold">
            <Sparkles className="w-4 h-4" /> Lo Que Aprendimos
          </div>
          <p className="text-gray-300 text-sm leading-relaxed italic">
            "{caso.loQueAprendimos}"
          </p>
        </section>

        {/* Experimento ChatGPT */}
        {caso.experimentoChatGPT && (
          <section className="bg-gradient-to-br from-cyan-950/30 via-[#181818] to-[#181818] border border-cyan-500/30 rounded-3xl p-6 sm:p-8 space-y-5">
            <div className="flex items-center gap-2 text-cyan-400 text-base font-bold">
              <Bot className="w-5 h-5" /> Verificación en Respuestas de IA (ChatGPT)
            </div>

            <div className="space-y-2">
              <span className="text-xs text-gray-400">Pregunta o prompt efectuado a la IA:</span>
              <p className="text-sm italic font-medium text-gray-200 bg-[#121212] p-4 rounded-xl border border-slate-800">
                "{caso.experimentoChatGPT.preguntaPrompt}"
              </p>
            </div>

            <div className="space-y-2">
              <span className="text-xs text-gray-400">Respuesta/Recomendación de la IA:</span>
              <p className="text-sm text-gray-300 leading-relaxed font-medium">
                {caso.experimentoChatGPT.respuestaObtenida}
              </p>
            </div>

            <div className="pt-3 border-t border-cyan-900/40 text-xs text-cyan-300 flex items-center gap-2 font-semibold">
              <ShieldCheck className="w-4 h-4 flex-shrink-0" /> Conclusión: {caso.experimentoChatGPT.conclusion}
            </div>
          </section>
        )}

        {/* Atribución de Autoría de César Reyes Jaramillo */}
        <div className="p-4 rounded-2xl bg-[#121212] border border-slate-800 text-center text-xs text-gray-400">
          Proyecto y arquitectura web desarrollados por{' '}
          <Link href="/sobre-mi" className="text-cyan-400 font-bold hover:underline">
            César Reyes Jaramillo
          </Link>
          .
        </div>

        {/* CTA Bottom */}
        <div className="text-center pt-8 border-t border-slate-800 space-y-5">
          <h3 className="text-2xl font-bold font-poppins text-white">¿Quieres llevar tu negocio de la Orilla A a la Orilla B?</h3>
          <p className="text-gray-400 text-sm max-w-lg mx-auto font-medium">
            Analizamos la presencia digital de tu negocio y estructuramos tu autoridad para captar clientes reales.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={caso.sitioWeb}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-[#181818] border border-cyan-500/30 text-cyan-400 font-bold hover:bg-cyan-500/10 transition-all text-sm"
            >
              Visitar {caso.cliente} <ExternalLink className="w-4 h-4" />
            </a>
            <Link
              href="/analisis-estrategico"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-cyan-500 text-slate-950 font-bold hover:bg-cyan-400 transition-all text-sm shadow-lg shadow-cyan-500/20"
            >
              Solicitar Diagnóstico <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
