import Link from 'next/link';
import { Compass, Home, BookOpen, MessageCircle, FileText, ArrowRight } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex items-center justify-center py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl w-full text-center">
        {/* Badge / Code */}
        <div className="inline-flex items-center gap-2 px-3 py-1 text-xs font-mono font-semibold uppercase tracking-wider text-amber-400 bg-amber-950/50 border border-amber-800/50 rounded-full mb-6">
          <Compass className="w-4 h-4" /> Error 404 · Recurso No Encontrado
        </div>

        <h1 className="text-3xl sm:text-5xl font-extrabold text-white mb-4 tracking-tight">
          La página solicitada no está disponible
        </h1>

        <p className="text-slate-300 text-base sm:text-lg mb-8 max-w-lg mx-auto leading-relaxed">
          El enlace al que intentas acceder no existe, ha cambiado de ubicación o fue movido. Puedes explorar las secciones principales a continuación:
        </p>

        {/* Navigation Recovery for Humans and AI Agents */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8 text-left">
          <Link
            href="/"
            className="p-4 rounded-xl bg-slate-900/90 border border-slate-800 hover:border-emerald-500/50 hover:bg-slate-850 transition duration-200 flex items-center justify-between group"
          >
            <div className="flex items-center gap-3">
              <Home className="w-5 h-5 text-emerald-400" />
              <div>
                <div className="text-sm font-semibold text-white group-hover:text-emerald-300">Página Principal</div>
                <div className="text-xs text-slate-400">Inicio y resumen de servicios</div>
              </div>
            </div>
            <ArrowRight className="w-4 h-4 text-slate-500 group-hover:text-emerald-400 group-hover:translate-x-1 transition" />
          </Link>

          <Link
            href="/sobre-mi"
            className="p-4 rounded-xl bg-slate-900/90 border border-slate-800 hover:border-emerald-500/50 hover:bg-slate-850 transition duration-200 flex items-center justify-between group"
          >
            <div className="flex items-center gap-3">
              <BookOpen className="w-5 h-5 text-cyan-400" />
              <div>
                <div className="text-sm font-semibold text-white group-hover:text-cyan-300">Sobre César Reyes</div>
                <div className="text-xs text-slate-400">Perfil y 25 años de experiencia</div>
              </div>
            </div>
            <ArrowRight className="w-4 h-4 text-slate-500 group-hover:text-cyan-400 group-hover:translate-x-1 transition" />
          </Link>

          <Link
            href="/contacto"
            className="p-4 rounded-xl bg-slate-900/90 border border-slate-800 hover:border-emerald-500/50 hover:bg-slate-850 transition duration-200 flex items-center justify-between group"
          >
            <div className="flex items-center gap-3">
              <MessageCircle className="w-5 h-5 text-amber-400" />
              <div>
                <div className="text-sm font-semibold text-white group-hover:text-amber-300">Contacto Directo</div>
                <div className="text-xs text-slate-400">WhatsApp y cotizaciones</div>
              </div>
            </div>
            <ArrowRight className="w-4 h-4 text-slate-500 group-hover:text-amber-400 group-hover:translate-x-1 transition" />
          </Link>

          <Link
            href="/llms.txt"
            className="p-4 rounded-xl bg-slate-900/90 border border-slate-800 hover:border-emerald-500/50 hover:bg-slate-850 transition duration-200 flex items-center justify-between group"
          >
            <div className="flex items-center gap-3">
              <FileText className="w-5 h-5 text-violet-400" />
              <div>
                <div className="text-sm font-semibold text-white group-hover:text-violet-300">Índice para IA (llms.txt)</div>
                <div className="text-xs text-slate-400">Documentación para agentes</div>
              </div>
            </div>
            <ArrowRight className="w-4 h-4 text-slate-500 group-hover:text-violet-400 group-hover:translate-x-1 transition" />
          </Link>
        </div>

        {/* Machine readable / sitemap links for agents */}
        <div className="text-xs text-slate-400 border-t border-slate-800/80 pt-6 flex flex-wrap justify-center gap-4">
          <span>Recursos para Agentes e Indexadores:</span>
          <Link href="/sitemap.xml" className="text-emerald-400 hover:underline">sitemap.xml</Link>
          <span>·</span>
          <Link href="/llms.txt" className="text-emerald-400 hover:underline">llms.txt</Link>
          <span>·</span>
          <Link href="/politicas" className="text-slate-400 hover:text-slate-300">Políticas de Privacidad</Link>
        </div>
      </div>
    </div>
  );
}
