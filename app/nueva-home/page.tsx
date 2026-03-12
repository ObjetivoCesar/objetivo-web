"use client"

import React from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, Sparkles, Brain, Search, LayoutGrid, CheckCircle, Smartphone, Rocket } from 'lucide-react'
import ModernSidebarMenu from '@/components/navigation/ModernSidebarMenu'
import Footer from '@/components/footer'
import { DualLogoCarousel } from '@/components/DualLogoCarousel'

export default function NuevaHome() {
  return (
    <div className="min-h-screen bg-[#121212] text-white selection:bg-cyan-500 selection:text-white">
      <ModernSidebarMenu />
      
      {/* Hero Section - Full Screen & Limbic Focus */}
      <section className="min-h-screen flex flex-col items-center justify-center text-center relative overflow-hidden px-6 pt-20">
        
        {/* Background Images for Hero */}
        <div className="absolute inset-0 w-full h-full z-0 pointer-events-none">
          {/* Desktop Image Placeholder */}
          <div className="hidden md:block absolute inset-0 w-full h-full">
            {/* Aquí colocaremos la imagen generada en apaisado (horizontal) */}
            {/* <Image src="/images/hero-bg-desktop.webp" alt="Evolución con IA" fill className="object-cover opacity-50 mix-blend-luminosity" priority /> */}
            
            {/* Degrades para asegurar que el texto sea siempre legible sin importar la imagen */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#121212] via-[#121212]/50 to-[#121212]/80 z-10"></div>
            <div className="absolute inset-0 bg-gradient-to-b from-[#121212]/80 via-transparent to-[#121212] z-10"></div>
          </div>
          
          {/* Mobile Image Placeholder */}
          <div className="block md:hidden absolute inset-0 w-full h-full">
            {/* Aquí colocaremos la imagen generada en vertical */}
            {/* <Image src="/images/hero-bg-mobile.webp" alt="Evolución con IA" fill className="object-cover opacity-40 mix-blend-luminosity" priority /> */}
            
            <div className="absolute inset-0 bg-gradient-to-b from-[#121212]/80 via-[#121212]/60 to-[#121212] z-10"></div>
          </div>
        </div>

        {/* High-Impact Abstract Background (Fallback/Accent) */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full pointer-events-none opacity-20 z-0">
           <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-500/10 blur-[150px] rounded-full"></div>
           <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] bg-blue-500/5 blur-[120px] rounded-full"></div>
        </div>

          {/* Focal Content */}
          <div className="relative z-10 max-w-4xl mx-auto">
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
              
              <p className="text-lg md:text-xl text-gray-400 mb-10 max-w-2xl mx-auto leading-relaxed font-medium">
                Soy César Reyes. Construyo los sistemas que venden por ti mientras el resto sigue peleando por "likes" en redes sociales.
              </p>
              
              <div className="flex flex-col md:flex-row items-center justify-center gap-5">
                <button 
                  onClick={() => document.getElementById('auditoria-form')?.scrollIntoView({ behavior: 'smooth' })}
                  className="w-full md:w-auto px-10 py-4 bg-white text-black font-extrabold text-lg rounded-2xl hover:bg-cyan-400 hover:text-black transition-all flex items-center justify-center gap-3 shadow-2xl shadow-white/5 active:scale-95"
                >
                  Solicitar Auditoría de Eficiencia <ArrowRight size={20} />
                </button>
                <button className="w-full md:w-auto px-10 py-4 bg-gray-900/50 border border-white/10 text-white font-bold text-lg rounded-2xl hover:bg-gray-800 transition-all backdrop-blur-md active:scale-95">
                  Ver Casos de ADN
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
        {/* Emotional & Lead Capture Section - The 2026 Reality */}
        <div className="mb-24 relative">
           <div className="bg-[#121212] border border-cyan-500/20 rounded-[2.5rem] p-8 md:p-16 relative overflow-hidden group">
             {/* Background Effects */}
             <div className="absolute top-0 right-0 w-[500px] h-full bg-cyan-900/10 blur-[120px] pointer-events-none group-hover:bg-cyan-800/20 transition-colors duration-1000"></div>
             <div className="absolute bottom-0 left-0 w-[500px] h-full bg-blue-900/10 blur-[120px] pointer-events-none"></div>
             
             <div className="relative z-10 max-w-4xl mx-auto text-center">
               <span className="inline-block px-4 py-2 bg-cyan-500/10 text-cyan-400 font-bold rounded-full text-sm mb-6 border border-cyan-500/20 uppercase tracking-widest">
                 La Realidad del Mercado
               </span>
               
               <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold font-poppins text-white leading-tight mb-8">
                 En 2026, el que no se modernice será <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-500">absorbido</span> por su competencia.
               </h2>
               
               <p className="text-xl md:text-2xl text-gray-400 font-medium leading-relaxed mb-12 max-w-3xl mx-auto">
                 La Inteligencia Artificial está desplomando los costos operativos. 
                 <span className="text-white"> "Estar en Internet" ya NO es subir bailes a TikTok.</span> Es tener un sistema que trabaje mientras tú duermes.
               </p>
               
               {/* Pain Point Capture Box */}
               <div className="bg-black/60 border border-white/10 p-8 rounded-3xl shadow-2xl relative backdrop-blur-sm transform md:scale-105 z-20">
                 <h3 className="text-2xl font-bold text-white mb-6">
                   Hablemos de tu negocio: <span className="text-cyan-400">¿Qué proceso manual o dolor te está frenando hoy?</span>
                 </h3>
                 
                 <div className="flex flex-col gap-4">
                   <textarea 
                     id="pain-input"
                     className="w-full bg-[#121212] border border-white/20 rounded-2xl p-6 text-white text-lg focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all resize-none min-h-[120px] placeholder:text-gray-600"
                     placeholder="Ej: Pierdo mucho tiempo anotando pedidos en WhatsApp, pago publicidad pero los clientes no regresan, mis costos de operación son muy altos..."
                   ></textarea>
                   
                   <button 
                     onClick={() => {
                       const input = (document.getElementById('pain-input') as HTMLTextAreaElement)?.value || 'Necesito modernizar mis procesos';
                       const message = encodeURIComponent(`Hola César, este es el problema en mi negocio actualmente: "${input}". Me gustaría saber cómo la IA o tus herramientas pueden ayudarme.`);
                       window.open(`https://wa.me/593959957252?text=${message}`, '_blank');
                     }}
                     className="w-full py-5 bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white font-bold text-xl rounded-2xl transition-all shadow-[0_0_20px_rgba(6,182,212,0.3)] hover:shadow-[0_0_30px_rgba(6,182,212,0.5)] flex items-center justify-center gap-3 active:scale-95"
                   >
                     <Smartphone size={24} />
                     Contarme este problema por WhatsApp
                   </button>
                 </div>
                 <p className="text-gray-500 text-sm mt-4 font-medium">Iremos directo al grano sobre cómo solucionarlo con tecnología.</p>
               </div>
               
             </div>
           </div>
        </div>

        {/* Casos ADN Section */}
        <section className="mb-24">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <div className="max-w-2xl">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Resultados Reales en Negocios Reales</h2>
              <p className="text-gray-400 text-lg">De la libreta al sistema digital. Así transformamos la operatividad en rentabilidad.</p>
            </div>
            <div className="flex gap-2">
               <span className="px-4 py-2 bg-white/5 border border-white/10 rounded-full text-sm font-medium">Salud</span>
               <span className="px-4 py-2 bg-white/5 border border-white/10 rounded-full text-sm font-medium">Turismo</span>
               <span className="px-4 py-2 bg-white/5 border border-white/10 rounded-full text-sm font-medium">Ventas</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Case Study 1 */}
            <div className="group bg-gradient-to-br from-gray-900/50 to-black border border-white/10 rounded-3xl overflow-hidden hover:border-cyan-500/30 transition-all">
              <div className="p-8">
                <div className="flex items-center gap-3 mb-6">
                   <div className="w-10 h-10 bg-cyan-500/20 rounded-lg flex items-center justify-center text-cyan-400">
                     <Brain size={20} />
                   </div>
                   <span className="text-sm font-bold text-cyan-400 uppercase tracking-widest">IA en Salud</span>
                </div>
                <h3 className="text-2xl font-bold mb-4">Gestión Clínica Sin Cuadernos</h3>
                <p className="text-gray-400 mb-8 leading-relaxed">
                  Pasamos de agendas de papel a un sistema inteligente que predice cancelaciones y automatiza recordatorios vía WhatsApp, aumentando la ocupación en un 35%.
                </p>
                <div className="flex items-center gap-4 text-sm font-bold">
                   <div className="flex items-center gap-1 text-green-400">
                     <CheckCircle size={16} /> Fricción Cero
                   </div>
                   <div className="flex items-center gap-1 text-cyan-400">
                     <CheckCircle size={16} /> IA Predictiva
                   </div>
                </div>
              </div>
              <div className="h-48 bg-gray-800/50 border-t border-white/5 flex items-center justify-center italic text-gray-500 group-hover:text-gray-400 transition-colors">
                [Visual: Dashboard de Clínica]
              </div>
            </div>

            {/* Case Study 2 */}
            <div className="group bg-gradient-to-br from-gray-900/50 to-black border border-white/10 rounded-3xl overflow-hidden hover:border-cyan-500/30 transition-all">
              <div className="p-8">
                <div className="flex items-center gap-3 mb-6">
                   <div className="w-10 h-10 bg-purple-500/20 rounded-lg flex items-center justify-center text-purple-400">
                     <Search size={20} />
                   </div>
                   <span className="text-sm font-bold text-purple-400 uppercase tracking-widest">SEO & Distribución</span>
                </div>
                <h3 className="text-2xl font-bold mb-4">Venta Directa 24/7 (B2B)</h3>
                <p className="text-gray-400 mb-8 leading-relaxed">
                  Implementamos una plataforma de pedidos automáticos que notifica al equipo de despacho al instante. Eliminamos el 100% de los errores manuales en facturación.
                </p>
                <div className="flex items-center gap-4 text-sm font-bold">
                   <div className="flex items-center gap-1 text-green-400">
                     <CheckCircle size={16} /> Automatización
                   </div>
                   <div className="flex items-center gap-1 text-purple-400">
                     <CheckCircle size={16} /> Dominio Google
                   </div>
                </div>
              </div>
              <div className="h-48 bg-gray-800/50 border-t border-white/5 flex items-center justify-center italic text-gray-500 group-hover:text-gray-400 transition-colors">
                [Visual: Órdenes de WhatsApp]
              </div>
            </div>
          </div>
        </section>

        {/* Dynamic Filtering Form Section */}
        <section id="auditoria-form" className="mb-24 scroll-mt-24">
          <div className="max-w-4xl mx-auto bg-white/5 border border-white/10 rounded-[3rem] p-8 md:p-16 backdrop-blur-xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-5xl font-bold mb-4">Auditoría de Eficiencia Técnica</h2>
              <p className="text-gray-400 text-lg">Filtramos curiosos para enfocarnos en quienes buscan resultados reales. Responde estas 3 preguntas.</p>
            </div>

            <DynamicQualifyingForm />
          </div>
        </section>

        {/* About Me Section */}
        <section className="mb-24">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="aspect-square bg-white/5 rounded-[3rem] overflow-hidden border border-white/10 relative group">
                {/* Placeholder for Caesar's Photo */}
                <div className="absolute inset-0 flex items-center justify-center text-gray-700 italic">
                  [Foto Profesional: César Reyes]
                </div>
                <div className="absolute inset-x-0 bottom-0 p-8 bg-gradient-to-t from-black to-transparent">
                  <h3 className="text-2xl font-bold">César Reyes Jaramillo</h3>
                  <p className="text-cyan-400 font-medium">Ingeniero de Software & Estratega</p>
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
        <section className="bg-gradient-to-r from-cyan-600 to-blue-700 rounded-[3rem] p-8 md:p-20 text-center text-white relative overflow-hidden shadow-2xl shadow-cyan-500/10 active:scale-[0.99] transition-transform">
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
                    {[1,2,3,4].map(i => (
                      <div key={i} className={`w-10 h-10 rounded-full border-2 border-cyan-600 bg-gray-300 flex items-center justify-center text-[10px] text-gray-800 font-bold`}>
                        CR
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

      <Footer />
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
          <button className="px-10 py-5 bg-green-600 text-white font-bold text-lg rounded-2xl hover:bg-green-500 transition-all flex items-center gap-3 mx-auto shadow-xl shadow-green-500/10">
            Hablar con César por WhatsApp <ArrowRight size={24} />
          </button>
        </motion.div>
      )}
    </div>
  )
}
