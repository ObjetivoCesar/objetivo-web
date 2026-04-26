"use client"

import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { ArrowRight, Sparkles, Brain, Search, LayoutGrid, CheckCircle, Smartphone, Rocket } from 'lucide-react'
import ModernSidebarMenu from '@/components/navigation/ModernSidebarMenu'
import Footer from '@/components/footer'
import { DualLogoCarousel } from '@/components/DualLogoCarousel'
import CasesTabs from '@/components/home/CasesTabs'

export default function NuevaHome() {
  const [isExpanded, setIsExpanded] = React.useState(false)
  return (
    <div className="min-h-screen bg-[#121212] text-white selection:bg-cyan-500 selection:text-white">
      <ModernSidebarMenu />
      
      {/* Hero Section - Full Screen & Limbic Focus */}
      <section className="min-h-screen flex flex-col items-center justify-center text-center relative overflow-hidden px-6 pt-20">
        
        {/* Background Images for Hero - True High-Tech Fusion */}
        <div className="absolute inset-0 w-full h-full z-0 pointer-events-none select-none bg-[#121212]">
          
          {/* Base Layer: César's Real Photo (Always present, no flash) */}
          <div className="absolute inset-0 w-full h-full">
            <Image 
              src="/images/blog_cesar_bn.webp" 
              alt="César Reyes trabajando" 
              fill 
              className="object-cover object-[20%_center] brightness-110 contrast-110" 
              priority 
            />
          </div>

          {/* Top Tech Layer: Hologram masked to show on the right seamlessly */}
          <div className="hidden md:block absolute inset-0 w-full h-full"
               style={{
                 maskImage: 'linear-gradient(to right, transparent 50%, black 80%)',
                 WebkitMaskImage: 'linear-gradient(to right, transparent 50%, black 80%)'
               }}>
            <Image 
              src="/images/hero-bg-desktop-v2.png" 
              alt="Holograma Tecnológico" 
              fill 
              className="object-cover object-right opacity-90 brightness-110" 
              priority 
            />
          </div>

          {/* Top Tech Layer for Mobile: Masked to show at the top/bottom */}
          <div className="block md:hidden absolute inset-0 w-full h-full"
               style={{
                 maskImage: 'linear-gradient(to bottom, transparent 10%, black 80%)',
                 WebkitMaskImage: 'linear-gradient(to bottom, transparent 10%, black 80%)'
               }}>
            <Image 
              src="/images/hero-bg-desktop-v2.png" 
              alt="Holograma Tecnológico" 
              fill 
              className="object-cover opacity-80" 
              priority 
            />
          </div>

          {/* Precision Polish Overlay for Text Readability & Professional Contrast */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#121212]/40 via-[#121212]/10 to-[#121212] z-20"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-[#121212]/80 via-[#121212]/20 to-transparent z-20"></div>
        </div>

        {/* Global Accent Glow */}
        <div className="absolute inset-0 pointer-events-none z-0">
           <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-500/10 blur-[150px] rounded-full"></div>
        </div>

          {/* Focal Content */}
          <div className="relative z-30 max-w-4xl mx-auto">
            {/* Subtle Tech Accents */}
            <div className="absolute -top-20 -left-20 w-40 h-40 bg-cyan-500/10 blur-[80px] rounded-full animate-pulse pointer-events-none"></div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-sm font-bold mb-6 uppercase tracking-widest bg-black/40 backdrop-blur-md">
                <Sparkles size={16} /> Ingeniría de Eficiencia e IA
              </span>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-8 bg-gradient-to-b from-white via-white to-white/40 bg-clip-text text-transparent">
                Evoluciona tu negocio con IA o quédate en el ayer.
              </h1>
              
              <p className="text-lg md:text-xl text-gray-400 mb-10 max-w-2xl mx-auto leading-snug font-medium">
                <span className="hidden md:inline">
                  Soy César Reyes. Construyo los sistemas que venden por ti mientras el resto sigue peleando por "likes" en redes sociales.
                </span>
                <span className="md:hidden">
                  {isExpanded ? (
                    <>
                      Soy César Reyes. Construyo los sistemas que venden por ti mientras el resto sigue peleando por "likes" en redes sociales.
                    </>
                  ) : (
                    <>
                      Soy César Reyes. Construyo los sistemas que...{' '}
                      <button 
                        onClick={() => setIsExpanded(true)}
                        className="text-cyan-400 font-bold ml-1"
                      >
                        seguir leyendo
                      </button>
                    </>
                  )}
                </span>
              </p>
              
              <div className="flex flex-col md:flex-row items-center justify-center gap-5">
                <button 
                  onClick={() => document.getElementById('auditoria-form')?.scrollIntoView({ behavior: 'smooth' })}
                  className="w-full md:w-auto px-10 py-4 bg-white text-black font-extrabold text-lg rounded-2xl hover:bg-cyan-400 hover:text-black transition-all flex items-center justify-center gap-3 shadow-2xl shadow-white/5 active:scale-95"
                >
                  Revisa mi negocio <ArrowRight size={20} />
                </button>
                <button 
                  onClick={() => document.getElementById('proyectos-actuales')?.scrollIntoView({ behavior: 'smooth' })}
                  className="w-full md:w-auto px-10 py-4 bg-gray-900/50 border border-white/10 text-white font-bold text-lg rounded-2xl hover:bg-gray-800 transition-all backdrop-blur-md active:scale-95"
                >
                  Proyectos Actuales
                </button>
              </div>
            </motion.div>
          </div>
          
        {/* Subtle scroll indicator for people 30+ */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 opacity-20 hidden md:block animate-bounce z-20">
          <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center p-1">
            <div className="w-1 h-3 bg-white rounded-full animate-scroll-dot"></div>
          </div>
        </div>
      </section>

      {/* Marcas que Confían Carousel - Original UI Component */}
      <section className="mb-16 relative z-30">
        <DualLogoCarousel />
      </section>

      <main className="max-w-7xl mx-auto px-6">
        {/* The new "Bento Grid Start" - Now contains ActivaQR and Anti-Reels */}
        {/* Nueva Era: Visibilidad IA & Optimización */}
        <div className="mb-24 relative">
          <div className="bg-[#121212] border border-cyan-500/20 rounded-[2.5rem] p-8 md:p-16 relative overflow-hidden group">
            {/* Background Effects */}
            <div className="absolute top-0 right-0 w-[500px] h-full bg-cyan-900/10 blur-[120px] pointer-events-none group-hover:bg-cyan-800/20 transition-colors duration-1000"></div>
            
            <div className="relative z-10 flex flex-col lg:flex-row gap-12 items-center">
              {/* Columna Izquierda: El Mensaje (80/20 Focus) */}
              <div className="lg:w-1/2 text-left">
                <span className="inline-block px-4 py-2 bg-cyan-500/10 text-cyan-400 font-bold rounded-full text-sm mb-6 border border-cyan-500/20 uppercase tracking-widest">
                  Visibilidad 2.0: La Era de la Inteligencia artificial
                </span>
                <h2 className="text-3xl md:text-5xl font-bold font-poppins text-white leading-tight mb-8">
                  ¿Qué dice <span className="text-cyan-400">ChatGPT</span> de tu negocio cuando un cliente le pregunta?
                </h2>
                <p className="text-lg md:text-xl text-gray-400 font-medium leading-relaxed mb-6">
                  Tus clientes ya no solo "Googlean". Usan Inteligencia Artificial para decidir dónde comprar o a quién contratar.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="mt-1 bg-cyan-500/20 p-1 rounded-full text-cyan-400">
                      <CheckCircle size={18} />
                    </div>
                    <p className="text-gray-300 font-medium">Si no hablas el lenguaje de la IA, eres invisible para el consumidor moderno.</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="mt-1 bg-cyan-500/20 p-1 rounded-full text-cyan-400">
                      <CheckCircle size={18} />
                    </div>
                    <p className="text-gray-300 font-medium">La optimización hoy no es solo SEO, es relevancia ante mentes artificiales.</p>
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
                    <p className="text-gray-500 text-xs text-center font-medium">Analizaremos tu caso específico y propondremos soluciones de optimización real.</p>
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
                  <div className="text-sm text-gray-500 uppercase tracking-wider">Experiencia Real</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-white mb-1">+50</div>
                  <div className="text-sm text-gray-500 uppercase tracking-wider">Sistemas Entregados</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ / Objections Section */}
        <section className="mb-24">
          <h2 className="text-3xl font-bold mb-12 text-center">Preguntas Frecuentes</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto">
            {[
              { q: "¿Por qué no haces redes sociales?", a: "Porque mi enfoque es la rentabilidad técnica, no el entretenimiento. Las redes atraen curiosos; los sistemas de ingeniería capturan clientes." },
              { q: "¿Qué tan difícil es usar la IA?", a: "Para ti, nada. Yo configuro el asistente para que trabaje por ti. Tú solo recibes los resultados en tu WhatsApp o panel de control." },
              { q: "¿Cuánto tiempo toma ver resultados?", a: "El posicionamiento SEO toma semanas, pero las herramientas de fidelización como ActivaQR funcionan desde el primer día." },
              { q: "¿Aceptas pagos diferidos?", a: "Sí, puedes financiar tu arquitectura hasta 12 meses con cualquier tarjeta de crédito." }
            ].map((faq, i) => (
              <div key={i} className="p-8 bg-white/5 border border-white/10 rounded-3xl hover:border-white/20 transition-all">
                <h4 className="font-bold text-lg mb-3 flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-cyan-500"></div> {faq.q}
                </h4>
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
