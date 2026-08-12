"use client"

import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { ArrowRight, Sparkles, Brain, Search, LayoutGrid, CheckCircle, Smartphone, Rocket } from 'lucide-react'
import ModernSidebarMenu from '@/components/navigation/ModernSidebarMenu'
import HeroNarrativeScroll from '@/components/home/HeroNarrativeScroll'
import { DualLogoCarousel } from '@/components/DualLogoCarousel'
import GoogleReviews from '@/components/home/GoogleReviews'
import CasesTabs from '@/components/home/CasesTabs'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, EffectFade } from 'swiper/modules'

// Swiper styles
import 'swiper/css'
import 'swiper/css/effect-fade'

const heroImagesDesktop = [
  "https://cesarweb.b-cdn.net/guia-whatsapp-crm-ia.webp",
  "https://cesarweb.b-cdn.net/ia-ecuador-casos-reales.webp",
  "https://cesarweb.b-cdn.net/sindrome-madrugada-ventas.webp"
]

const heroImagesMobile = [
  "https://cesarweb.b-cdn.net/hero/hero-mobile-1.webp",
  "https://cesarweb.b-cdn.net/hero/hero-mobile-2.webp",
  "https://cesarweb.b-cdn.net/hero/hero-mobile-3.webp"
]

export default function HomePersonalClient() {
  const [isExpanded, setIsExpanded] = React.useState(false)
  return (
    <div className="min-h-screen bg-[#121212] text-white selection:bg-cyan-500 selection:text-white">
      <ModernSidebarMenu />
      
      {/* Hero Narrative Scroll-Driven Section (6 Pantallas Continuas) */}
      <HeroNarrativeScroll />

      {/* Google My Business Reviews Section */}
      <GoogleReviews />

      {/* Marcas que Confían Carousel - Original UI Component */}
      <section className="mb-16 relative z-30">
        <DualLogoCarousel />
      </section>

      <main className="max-w-7xl mx-auto px-6">
        {/* ═══ BLOQUE EXPLICATIVO SEO / POSICIONAMIENTO WEB ═══ */}
        <section className="mb-24 scroll-mt-24" id="que-es-posicionamiento-web">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-cyan-500/10 border border-cyan-500/30 rounded-xl flex items-center justify-center text-cyan-400">
                <Search size={20} />
              </div>
              <span className="text-cyan-400 text-sm font-bold uppercase tracking-widest">Posicionamiento Web en Ecuador</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold mb-8 leading-tight">
              ¿Qué es el <span className="text-cyan-400">posicionamiento web</span> y por qué tu negocio lo necesita?
            </h2>
            <div className="space-y-6 text-lg text-gray-400 leading-relaxed">
              <p>
                El <strong className="text-white">posicionamiento web (SEO)</strong> es el conjunto de estrategias técnicas y de contenido que permiten que tu sitio web aparezca en Google cuando un potencial cliente busca tus productos o servicios en su ciudad. No se trata de comprar anuncios temporales: se trata de <strong className="text-white">construir autoridad digital real</strong>.
              </p>
              <p>
                En el mercado ecuatoriano, cuando una persona necesita contratar una notaría, buscar una clínica dental o encontrar un restaurante especializado, su primer impulso es buscar en Google o consultar asistentes de inteligencia artificial. Si tu negocio no aparece en esas búsquedas específicas (ejemplo: <em>"notaria en loja"</em>, <em>"restaurante de mariscos"</em> o <em>"mecánica automotriz"</em>), esos clientes terminan en la competencia.
              </p>
              <p>
                Nuestra metodología de <strong className="text-white">SEO técnico y de intención primaria</strong> optimiza la arquitectura de tu sitio web, su velocidad y los datos estructurados (Schema Markup) para que Google y la IA reconozcan tu negocio como la respuesta exacta a lo que busca el usuario.
              </p>
            </div>
            {/* Mini métricas comprobables */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-10">
              {[
                { metric: '27+', label: 'Proyectos Reales' },
                { metric: '11+', label: 'Industrias Atendidas' },
                { metric: 'SEO Local', label: 'Enfoque de Intención' },
                { metric: '100%', label: 'Tráfico Orgánico Directo' },
              ].map((item, i) => (
                <div key={i} className="bg-white/5 border border-white/10 rounded-2xl p-5 text-center hover:border-cyan-500/30 transition-all">
                  <div className="text-2xl md:text-3xl font-bold text-cyan-400 mb-1">{item.metric}</div>
                  <div className="text-xs text-gray-400 uppercase tracking-wider">{item.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ═══ POSICIONAMIENTO EN LA ERA IA: Extensión natural del SEO ═══ */}
        <div className="mb-24 relative">
          <div className="bg-[#121212] border border-cyan-500/20 rounded-[2.5rem] p-8 md:p-16 relative overflow-hidden group">
            {/* Background Effects */}
            <div className="absolute top-0 right-0 w-[500px] h-full bg-cyan-900/10 blur-[120px] pointer-events-none group-hover:bg-cyan-800/20 transition-colors duration-1000"></div>
            
            <div className="relative z-10 flex flex-col lg:flex-row gap-12 items-center">
              {/* Columna Izquierda: El Mensaje */}
              <div className="lg:w-1/2 text-left">
                <span className="inline-block px-4 py-2 bg-cyan-500/10 text-cyan-400 font-bold rounded-full text-sm mb-6 border border-cyan-500/20 uppercase tracking-widest">
                  SEO + Inteligencia Artificial
                </span>
                <h2 className="text-3xl md:text-5xl font-bold font-poppins text-white leading-tight mb-8">
                  El posicionamiento web ya no es solo Google: <span className="text-cyan-400">la IA también decide</span> a quién recomendar
                </h2>
                <p className="text-lg md:text-xl text-gray-400 font-medium leading-relaxed mb-6">
                  Tus clientes ya no solo buscan en Google. Usan ChatGPT, Gemini y asistentes de IA para decidir dónde comprar o a quién contratar. <strong className="text-white">Si tu web no está optimizada para ambos canales, pierdes visibilidad.</strong>
                </p>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="mt-1 bg-cyan-500/20 p-1 rounded-full text-cyan-400">
                      <CheckCircle size={18} />
                    </div>
                    <p className="text-gray-300 font-medium">Un sitio bien posicionado en Google también es citado por ChatGPT y asistentes de IA.</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="mt-1 bg-cyan-500/20 p-1 rounded-full text-cyan-400">
                      <CheckCircle size={18} />
                    </div>
                    <p className="text-gray-300 font-medium">Optimizamos contenido, Schema Markup y estructura técnica para que la IA entienda y recomiende tu negocio.</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="mt-1 bg-cyan-500/20 p-1 rounded-full text-cyan-400">
                      <CheckCircle size={18} />
                    </div>
                    <p className="text-gray-300 font-medium">Posicionamiento web integral: Google Search + Google Maps + ChatGPT + Gemini.</p>
                  </div>
                </div>
              </div>

              {/* Columna Derecha: Captura de Oportunidad */}
              <div className="lg:w-1/2 w-full">
                <div className="bg-black/40 border border-white/10 p-8 rounded-3xl shadow-2xl backdrop-blur-sm relative z-20 overflow-hidden">
                  {/* Subtle accent line */}
                  <div className="absolute top-0 left-0 w-1 h-full bg-cyan-500/50"></div>
                  
                  <h3 className="text-2xl font-bold text-white mb-6">
                    ¿Quieres saber el potencial de tu negocio con IA?<br/>
                    <span className="text-cyan-400 italic">DESCRIBE TU PROBLEMA 👇</span>
                  </h3>
                  
                  <div className="flex flex-col gap-4 text-left">
                    <textarea 
                      id="pain-input"
                      className="w-full bg-[#121212]/80 border border-white/10 rounded-2xl p-6 text-white text-lg focus:outline-none focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/20 transition-all resize-none min-h-[140px] placeholder:text-gray-600"
                      placeholder="Ej: Quiero que ChatGPT recomiende mi hotel, busco automatizar mis ventas con un agente de IA, necesito reducir costos operativos mediante automatización..."
                    ></textarea>
                    
                    <button 
                      onClick={() => {
                        const input = (document.getElementById('pain-input') as HTMLTextAreaElement)?.value || 'Necesito optimizar mi negocio con IA';
                        const message = encodeURIComponent(`Hola César, me interesa optimizar mi negocio. Este es mi objetivo actual: "${input}". ¿Cómo me puedes ayudar a ser más visible en esta era de IA?`);
                        window.open(`https://wa.me/593959957252?text=${message}`, '_blank');
                      }}
                      className="w-full py-5 bg-white text-black font-black text-xl rounded-2xl transition-all shadow-xl hover:bg-cyan-400 flex items-center justify-center gap-3 active:scale-95 group"
                    >
                      <Brain size={24} className="group-hover:animate-pulse" />
                      Consultar Estrategia de IA
                    </button>
                    <p className="text-gray-400 text-xs text-center font-medium">Analizaremos tu caso específico y propondremos soluciones de optimización real.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Casos ADN Section con Tabs Interactivos */}
        <section id="proyectos-actuales" className="mb-24 scroll-mt-24">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <div className="max-w-2xl">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Proyectos en los que estamos trabajando</h2>
              <p className="text-gray-400 text-lg">Un vistazo a la actualidad corporativa donde transformamos la operatividad en rentabilidad.</p>
            </div>
          </div>

          <CasesTabs />
        </section>

        {/* Dynamic Filtering Form Section */}
        <section id="auditoria-form" className="mb-24 scroll-mt-24">
          <div className="max-w-4xl mx-auto bg-white/5 border border-white/10 rounded-[3rem] p-8 md:p-16 backdrop-blur-xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-5xl font-bold mb-4">Todo cambiará hasta el 2028</h2>
              <p className="text-gray-400 text-lg">Una pregunta.. ¿Estas decidido a modernizar? contesta estas preguntas 👇</p>
            </div>

            <DynamicQualifyingForm />
          </div>
        </section>

        {/* About Me Section */}
        <section className="mb-24">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="aspect-square bg-white/5 rounded-[3rem] overflow-hidden border border-white/10 relative group">
                <Image 
                  src="/images/portada_cesarbn.webp" 
                  alt="César Reyes" 
                  fill 
                  className="object-cover grayscale hover:grayscale-0 transition-all duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-x-0 bottom-0 p-8 bg-gradient-to-t from-black via-black/40 to-transparent">
                  <h3 className="text-2xl font-bold">César Reyes Jaramillo</h3>
                  <p className="text-cyan-400 font-medium">Software & Estrategia</p>
                </div>
              </div>
              {/* Decorative elements */}
              <div className="absolute -top-6 -left-6 w-24 h-24 bg-cyan-500/10 rounded-full blur-2xl"></div>
            </div>
            
            <div>
              <h2 className="text-3xl md:text-5xl font-bold mb-8">Menos "Likes". Más Ventas.</h2>
              <p className="text-xl text-gray-400 mb-6 leading-relaxed">
                Durante años he visto a empresas ecuatorianas ahogarse pagando campañas inútiles en redes sociales porque nadie les enseñó a <span className="text-white font-bold">retener a sus propios clientes</span>.
              </p>
              <p className="text-lg text-gray-400 mb-8 leading-relaxed">
                Mi misión es democratizar el software de alta gama para que cualquier profesional independiente o pequeña empresa pueda usar la tecnología (y la Inteligencia Artificial) a su favor, compitiendo de tú a tú con los más grandes.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <div className="text-3xl font-bold text-white mb-1">6+ Años</div>
                  <div className="text-sm text-gray-400 uppercase tracking-wider">Experiencia Real</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-white mb-1">+50</div>
                  <div className="text-sm text-gray-400 uppercase tracking-wider">Sistemas Entregados</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ / Objections Section — SEO-optimized */}
        <section className="mb-24" id="preguntas-frecuentes">
          <h2 className="text-3xl font-bold mb-12 text-center">Preguntas Frecuentes sobre Posicionamiento Web</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto">
            {[
              { q: "¿Cuánto tarda el posicionamiento web en dar resultados?", a: "El SEO técnico y local empieza a mostrar mejoras en 4-8 semanas. Los primeros rankings consistentes en Google suelen consolidarse entre 2 y 4 meses, dependiendo de la competencia del sector." },
              { q: "¿Por qué SEO y no publicidad pagada?", a: "La publicidad pagada desaparece cuando dejas de pagar. El posicionamiento web orgánico genera tráfico constante y gratuito que se mantiene en el tiempo. Es una inversión, no un gasto recurrente." },
              { q: "¿Optimizas para ChatGPT y otros asistentes de IA?", a: "Sí. Un sitio bien posicionado en Google con Schema Markup y contenido estructurado también es citado por ChatGPT, Gemini y otros asistentes. Optimizamos para ambos canales." },
              { q: "¿Funciona el SEO para negocios pequeños en Ecuador?", a: "Absolutamente. De hecho, es donde más impacto tiene. Un negocio local con buen posicionamiento puede superar a cadenas grandes en búsquedas como 'cerca de mí'. Tenemos 27+ casos reales." },
              { q: "¿Qué incluye tu servicio de posicionamiento web?", a: "SEO técnico (velocidad, estructura, Core Web Vitals), SEO local (Google Maps, fichas GMB), contenido optimizado, Schema Markup, y monitoreo continuo de rankings." },
              { q: "¿Aceptas pagos diferidos?", a: "Sí, puedes financiar tu proyecto hasta 12 meses con cualquier tarjeta de crédito. Sin comisiones extra." }
            ].map((faq, i) => (
              <div key={i} className="p-8 bg-white/5 border border-white/10 rounded-3xl hover:border-white/20 transition-all">
                <h3 className="font-bold text-lg mb-3 flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-cyan-500"></div> {faq.q}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Final CTA / Payment Section */}
        <section className="bg-gradient-to-r from-cyan-600 to-blue-700 rounded-[3rem] p-8 md:p-20 text-center text-white relative overflow-hidden shadow-2xl shadow-cyan-500/10 active:scale-[0.99] transition-transform mb-32">
          <div className="relative z-10">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">¿Listo para que tu negocio se pague solo?</h2>
            <p className="text-xl text-cyan-100 max-w-2xl mx-auto mb-10 leading-relaxed">
              La eficiencia digital no es un gasto, es la inversión que te devuelve el tiempo y dinero que hoy pierdes por fricción manual.
            </p>
            <div className="flex flex-col items-center gap-6">
              <button 
                onClick={() => document.getElementById('auditoria-form')?.scrollIntoView({ behavior: 'smooth' })}
                className="px-12 py-5 bg-white text-cyan-700 font-bold text-xl rounded-2xl hover:bg-cyan-50 transition-all flex items-center gap-3 shadow-xl"
              >
                Empezar mi Transformación <ArrowRight size={24} />
              </button>
              <div className="flex items-center gap-4">
                 <div className="flex -space-x-3">
                    {[
                      { name: 'Socio 1', src: '/images/testimonios/viviana_novillo.png' },
                      { name: 'Socio 2', src: '/images/testimonios/camila-reyes.png' },
                      { name: 'Socio 3', src: '/images/testimonios/dr_guifo_diaz_ortega.png' },
                      { name: 'Socio 4', src: '/images/testimonios/Patricio_Reyes_Polit.png' }
                    ].map((avatar, i) => (
                      <div key={i} className="w-10 h-10 rounded-full border-2 border-cyan-600 bg-gray-900 overflow-hidden flex items-center justify-center relative shadow-lg">
                        <Image 
                          src={avatar.src} 
                          alt={avatar.name} 
                          fill 
                          className="object-cover"
                        />
                      </div>
                    ))}
                 </div>
                 <span className="text-sm font-medium text-cyan-100">+50 negocios transformados en Ecuador</span>
              </div>
            </div>
          </div>
          
          {/* Subtle branding overlay */}
          <div className="absolute top-0 right-0 p-12 opacity-5 pointer-events-none">
            <Rocket size={300} />
          </div>
        </section>
      </main>
    </div>
  )
}

function DynamicQualifyingForm() {
  const [step, setStep] = React.useState(1)
  const [formData, setFormData] = React.useState({
    pain: '',
    tool: '',
    commitment: ''
  })

  const nextStep = () => setStep(prev => prev + 1)
  
  return (
    <div className="min-h-[400px] flex flex-col justify-center">
      {step === 1 && (
        <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }}>
          <h3 className="text-2xl font-bold mb-8 text-center">1. ¿Qué es lo que más frena tu crecimiento hoy?</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              "Pierdo mucho tiempo en procesos manuales",
              "Hago publicidad pero no atraigo clientes",
              "Mis clientes me compran y no vuelven",
              "Quiero usar IA pero no sé por dónde empezar"
            ].map(option => (
              <button 
                key={option}
                onClick={() => { setFormData({...formData, pain: option}); nextStep(); }}
                className="p-6 bg-white/5 border border-white/10 rounded-2xl text-left hover:bg-white/10 hover:border-cyan-500/50 transition-all active:scale-95"
              >
                {option}
              </button>
            ))}
          </div>
        </motion.div>
      )}

      {step === 2 && (
        <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }}>
          <h3 className="text-2xl font-bold mb-8 text-center">2. ¿Qué usas actualmente para gestionar tu negocio?</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {["Libreta / Cuaderno físico", "Excel / Google Sheets", "Software antiguo / Lento", "Ninguna herramienta"].map(option => (
              <button 
                key={option}
                onClick={() => { setFormData({...formData, tool: option}); nextStep(); }}
                className="p-6 bg-white/5 border border-white/10 rounded-2xl text-left hover:bg-white/10 hover:border-cyan-500/50 transition-all active:scale-95"
              >
                {option}
              </button>
            ))}
          </div>
        </motion.div>
      )}

      {step === 3 && (
        <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }}>
          <h3 className="text-2xl font-bold mb-8 text-center">3. ¿Estás listo para invertir en eficiencia real?</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
             <button 
                onClick={() => { setFormData({...formData, commitment: 'High'}); nextStep(); }}
                className="p-8 bg-cyan-500/10 border border-cyan-500/40 rounded-2xl text-center hover:bg-cyan-500/20 transition-all active:scale-95 group"
              >
                <div className="text-2xl mb-2 group-hover:scale-110 transition-transform">🚀</div>
                <div className="font-bold text-white">Sí, busco resultados serios</div>
              </button>
              <button 
                onClick={() => { setFormData({...formData, commitment: 'Low'}); nextStep(); }}
                className="p-8 bg-white/5 border border-white/10 rounded-2xl text-center hover:bg-white/10 transition-all active:scale-95"
              >
                <div className="text-2xl mb-2">🤔</div>
                <div className="font-bold text-gray-400">Solo estoy curioseando</div>
              </button>
          </div>
        </motion.div>
      )}

      {step === 4 && (
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }} 
          animate={{ opacity: 1, scale: 1 }}
          className="text-center"
        >
          <div className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center text-green-400 mx-auto mb-6">
            <CheckCircle size={40} />
          </div>
          <h3 className="text-3xl font-bold mb-4">¡Diagnóstico Solicitado!</h3>
          <p className="text-gray-400 mb-8 max-w-md mx-auto">
            He recibido tus datos. Para ir al grano, haz clic abajo para conectar por WhatsApp y agendar nuestros 15 minutos.
          </p>
          <button 
            onClick={() => {
              const message = encodeURIComponent("¡Hola César! He completado la Auditoría de Eficiencia técnica y estoy listo para agendar nuestros 15 minutos.");
              window.open(`https://wa.me/593959957252?text=${message}`, '_blank');
            }}
            className="px-10 py-5 bg-green-600 text-white font-bold text-lg rounded-2xl hover:bg-green-500 transition-all flex items-center gap-3 mx-auto shadow-xl shadow-green-500/10"
          >
            Hablar con César por WhatsApp <ArrowRight size={24} />
          </button>
        </motion.div>
      )}
    </div>
  )
}
