import type { Metadata } from 'next';
import Link from 'next/link';
import { Phone, Mail, MapPin, MessageCircle, Clock, ShieldCheck, ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Contacto | César Reyes Jaramillo - Consultor y Estratega Digital',
  description: 'Comunícate con César Reyes Jaramillo para consultoría estratégica, desarrollo web y posicionamiento SEO en Ecuador. Atención en Loja, Quito, Guayaquil, Cuenca y todo el país.',
  alternates: {
    canonical: 'https://www.cesarreyesjaramillo.com/contacto',
  },
  openGraph: {
    title: 'Contacto | César Reyes Jaramillo',
    description: 'Agenda tu consultoría estratégica o cotiza tu proyecto web y SEO en Ecuador.',
    url: 'https://www.cesarreyesjaramillo.com/contacto',
  }
};

export default function ContactoPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="inline-flex items-center gap-2 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-emerald-400 bg-emerald-950/60 border border-emerald-800/60 rounded-full mb-4">
            <ShieldCheck className="w-4 h-4" /> Canal Oficial de Comunicación
          </span>
          <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-white mb-4">
            Hablemos de tu Proyecto y Estrategia de Crecimiento
          </h1>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto">
            ¿Buscas posicionar tu negocio en Google, optimizar tu presencia para motores de IA o desarrollar una web orientada a ventas? Conversemos directamente y analicemos tu caso.
          </p>
        </div>

        {/* Contact Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {/* Card WhatsApp / Directo */}
          <div className="bg-slate-900/80 border border-slate-800 rounded-2xl p-6 sm:p-8 flex flex-col justify-between hover:border-emerald-500/50 transition duration-300">
            <div>
              <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 mb-6">
                <MessageCircle className="w-6 h-6" />
              </div>
              <h2 className="text-xl font-bold text-white mb-2">WhatsApp Directo</h2>
              <p className="text-slate-300 text-sm mb-6 leading-relaxed">
                La forma más rápida de coordinar una llamada, solicitar un diagnóstico inicial o consultar sobre servicios de SEO y desarrollo web.
              </p>
            </div>
            <a
              href="https://wa.me/593963410409?text=Hola%20C%C3%A9sar,%20estoy%20interesado%20en%20una%20consultor%C3%ADa%20estrat%C3%A9gica."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 w-full py-3 px-4 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-slate-950 font-semibold transition"
            >
              Escribir por WhatsApp <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          {/* Card Correo Electrónico */}
          <div className="bg-slate-900/80 border border-slate-800 rounded-2xl p-6 sm:p-8 flex flex-col justify-between hover:border-cyan-500/50 transition duration-300">
            <div>
              <div className="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400 mb-6">
                <Mail className="w-6 h-6" />
              </div>
              <h2 className="text-xl font-bold text-white mb-2">Correo Electrónico</h2>
              <p className="text-slate-300 text-sm mb-6 leading-relaxed">
                Envía tus requerimientos técnicos, propuestas comerciales o solicitudes institucionales detalladas.
              </p>
            </div>
            <a
              href="mailto:contacto@cesarreyesjaramillo.com"
              className="inline-flex items-center justify-center gap-2 w-full py-3 px-4 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-semibold border border-slate-700 transition"
            >
              contacto@cesarreyesjaramillo.com
            </a>
          </div>
        </div>

        {/* Location & Details */}
        <div className="bg-slate-900/60 border border-slate-800/80 rounded-2xl p-6 sm:p-8 mb-12">
          <h2 className="text-xl font-bold text-white mb-6">Datos de Operación y Ubicación</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div className="flex items-start gap-4">
              <MapPin className="w-5 h-5 text-emerald-400 mt-1 flex-shrink-0" />
              <div>
                <h3 className="text-sm font-semibold text-white">Sede Principal</h3>
                <p className="text-xs text-slate-400 mt-1">Loja, Ecuador. Servicio presencial en la región y virtual para todo el territorio nacional.</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Clock className="w-5 h-5 text-emerald-400 mt-1 flex-shrink-0" />
              <div>
                <h3 className="text-sm font-semibold text-white">Horario de Atención</h3>
                <p className="text-xs text-slate-400 mt-1">Lunes a Viernes: 09:00 - 18:00 (Hora Ecuador / GMT-5).</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Phone className="w-5 h-5 text-emerald-400 mt-1 flex-shrink-0" />
              <div>
                <h3 className="text-sm font-semibold text-white">Línea Telefónica</h3>
                <p className="text-xs text-slate-400 mt-1">+593 96 341 0409 (Ecuador)</p>
              </div>
            </div>
          </div>
        </div>

        {/* Trust Links / Navigation */}
        <div className="border-t border-slate-800 pt-8 flex flex-wrap justify-center gap-6 text-sm text-slate-400">
          <Link href="/sobre-mi" className="hover:text-emerald-400 transition">Sobre César Reyes</Link>
          <Link href="/servicios/posicionamiento" className="hover:text-emerald-400 transition">Posicionamiento SEO</Link>
          <Link href="/servicios/desarrollo-web" className="hover:text-emerald-400 transition">Desarrollo Web</Link>
          <Link href="/politicas" className="hover:text-emerald-400 transition">Políticas de Privacidad</Link>
          <Link href="/terminos" className="hover:text-emerald-400 transition">Términos y Condiciones</Link>
          <Link href="/sitemap.xml" className="hover:text-emerald-400 transition">Mapa del Sitio</Link>
        </div>
      </div>
    </div>
  );
}
