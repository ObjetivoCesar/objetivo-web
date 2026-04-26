"use client"

import React, { useState } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowRight, Activity, Globe, Users, Building2 } from 'lucide-react'

const tabsData = {
  Hexadent: {
    status: "En curso",
    category: "Salud · Loja",
    title: "Hexadent",
    intro: "Una clínica odontológica moderna, atrapada pagando mes a mes por un software genérico que no era suyo. La agenda manual le robaba horas y los errores de citas le costaban pacientes.",
    quote: {
      text: '"Si me garantiza que va a funcionar igual o mejor que el que tengo… y que va a ser mío, le contrato."',
      author: "— Dra. Hexadent · Loja"
    },
    problem: {
      title: "El problema real",
      text: "Pagaba mensualmente por algo genérico. Sin control, sin personalización, sin propiedad."
    },
    solution: {
      title: "Lo que construimos",
      text: "CRM odontológico a medida: historia clínica, agendamiento automático y chatbot 24/7."
    },
    victory: {
      title: "Victoria",
      text: "Hoy tiene su propio sistema. Cero citas perdidas. Cero pagos por lo que no necesita. La agenda trabaja sola."
    },
    tags: ["CRM odontológico", "Agendamiento IA", "Chatbot 24/7", "Software propio"],
    color: "cyan",
    image: "/images/logos/Hexadent.webp",
    ctaText: "¿Tu clínica tiene el mismo problema?",
    whatsappMessage: "Hola César. Quiero dejar de pagar software genérico en mi clínica."
  },
  PagoExpress: {
    status: "Completado",
    category: "Finanzas",
    title: "PagoExpress",
    intro: "Una empresa que necesitaba un portal robusto multipáginas y un asistente 24/7 para automatizar la atención a clientes.",
    quote: {
      text: '"Necesitamos que la gente pueda ver nuestra información claramente y un chatbot que responda todas las dudas."',
      author: "— CEO PagoExpress"
    },
    problem: {
      title: "El problema real",
      text: "Las dudas simples y repetitivas saturaban a los operadores, y no tener un sitio web completo reducía la confianza."
    },
    solution: {
      title: "Lo que construimos",
      text: "Página web multipáginas estructurada para SEO y credibilidad, junto con un Chatbot Inteligente 24/7."
    },
    victory: {
      title: "Victoria",
      text: "Autoridad digital establecida. El chatbot resuelve inquietudes automáticamente, logrando rapidez en el soporte."
    },
    tags: ["Web Multipáginas", "Chatbot IA 24/7", "Automatización", "Soporte"],
    color: "purple",
    image: "/images/logos/PagoExpress.webp",
    ctaText: "¿Tu empresa pierde tiempo respondiendo dudas repetitivas?",
    whatsappMessage: "Hola César. Me interesa una web multipáginas con chatbot."
  },
  ActivaQR: {
    status: "Completado",
    category: "Ventas · Sistema",
    title: "ActivaQR",
    intro: "Un sistema de ventas que carecía de autogestión, lo que generaba un cuello de botella cada vez que querían crecer.",
    quote: {
      text: '"Queremos un sistema para nuestros vendedores, y que distintos productos se configuren solos cuando se hagan registros."',
      author: "— Director ActivaQR"
    },
    problem: {
      title: "El problema real",
      text: "Gestión ineficiente. Añadir vendedores y activar productos requería procesos manuales y mucho tiempo."
    },
    solution: {
      title: "Lo que construimos",
      text: "Web multipáginas con sistema de vendedores y automatización que crea páginas dinamicas por registro."
    },
    victory: {
      title: "Victoria",
      text: "Sistema autogestionable que trabaja solo tanto para el vendedor como para la entrega en /registro."
    },
    tags: ["Web Multipáginas", "Sistema Vendedores", "Registro Automático", "Aceleración"],
    color: "green",
    image: "/images/logos/activaqr.webp",
    ctaText: "¿Tu sistema comercial es lento y manual?",
    whatsappMessage: "Hola César. Quiero un sistema automatizado para mis vendedores y registros."
  },
  HotelCardenal: {
    status: "Completado",
    category: "Turismo · Hotel",
    title: "El Cardenal",
    intro: "Un hotel con reservas manuales y baja captación de clientes a través de búsquedas orgánicas.",
    quote: {
      text: '"Necesitamos que las reservas y pagos se hagan solos, y que la gente nos encuentre al buscar hoteles en la ciudad."',
      author: "— Gerencia Hotel El Cardenal"
    },
    problem: {
      title: "El problema real",
      text: "Dependencia de plataformas de terceros con altas comisiones y poco tráfico directo a su propia web."
    },
    solution: {
      title: "Lo que construimos",
      text: "Web multipáginas con sistema de reservas directo, pasarela de pagos automatizada y blog de posicionamiento (SEO)."
    },
    victory: {
      title: "Victoria",
      text: "Visibilidad constante en buscadores, reservas 100% directas y automatizadas con cero comisiones a terceros."
    },
    tags: ["Reservas Automáticas", "Pasarela de Pagos", "Blog SEO", "Web Multipáginas"],
    color: "yellow",
    image: "/images/logos/hotelcardenal.webp",
    ctaText: "¿Tu hotel paga demasiadas comisiones a plataformas?",
    whatsappMessage: "Hola César. Quiero un sistema de reservas directo y posicionamiento SEO para mi hotel."
  }
}

type TabKey = keyof typeof tabsData;

export default function CasesTabs() {
  const [activeTab, setActiveTab] = useState<TabKey>('Hexadent');
  const tabs: TabKey[] = ['Hexadent', 'PagoExpress', 'ActivaQR', 'HotelCardenal'];

  const themeColors = {
    cyan: "text-cyan-400 border-cyan-500/50 bg-cyan-500/10 hover:bg-cyan-500/20",
    purple: "text-purple-400 border-purple-500/50 bg-purple-500/10 hover:bg-purple-500/20",
    green: "text-green-400 border-green-500/50 bg-green-500/10 hover:bg-green-500/20",
    yellow: "text-yellow-400 border-yellow-500/50 bg-yellow-500/10 hover:bg-yellow-500/20",
  }

  const activeData = tabsData[activeTab];

  return (
    <div className="w-full">
      {/* Mobile-friendly Tabs Header */}
      <div className="flex flex-wrap gap-4 mb-10 border-b border-white/10 pb-4">
        {tabs.map(tab => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-6 py-3 rounded-xl font-bold transition-all text-sm md:text-lg ${
              activeTab === tab 
                ? 'bg-white text-black shadow-[0_0_20px_rgba(255,255,255,0.3)]' 
                : 'text-gray-400 hover:bg-white/10 hover:text-white border border-transparent'
            }`}
          >
            {tab === 'HotelCardenal' ? 'Hotel El Cardenal' : tab}
          </button>
        ))}
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, scale: 0.98, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.98, y: -10 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="bg-[#18181b] border border-white/10 rounded-[2.5rem] p-8 md:p-12 relative overflow-hidden shadow-2xl"
        >
          {/* Subtle Background Glow */}
          <div className={`absolute top-0 right-0 w-[500px] h-full blur-[120px] pointer-events-none opacity-5 transition-colors duration-700 ${activeData.color === 'cyan' ? 'bg-cyan-500' : activeData.color === 'purple' ? 'bg-purple-500' : activeData.color === 'yellow' ? 'bg-yellow-500' : 'bg-green-500'}`}></div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start relative z-10">
            {/* Left Col: Case Story */}
            <div className="space-y-8">
              {/* Header: Status & Category */}
              <div className="flex items-center gap-3">
                <span className={`px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider border ${themeColors[activeData.color as keyof typeof themeColors]}`}>
                  {activeData.status}
                </span>
                <span className="text-gray-400 font-medium text-sm tracking-wide">
                  {activeData.category}
                </span>
              </div>
              
              <div>
                <h3 className="text-4xl md:text-5xl font-extrabold mb-4 text-white leading-tight">{activeData.title}</h3>
                <p className="text-xl text-gray-300 leading-relaxed">
                  {activeData.intro}
                </p>
              </div>

              {/* Quote Block */}
              <div className="border-l-4 border-white/20 pl-6 py-2">
                <p className="text-lg italic text-gray-400 mb-2">Lo que dijo antes de contratar:</p>
                <p className="text-xl font-medium text-white mb-2">{activeData.quote.text}</p>
                <p className="text-sm text-gray-400">{activeData.quote.author}</p>
              </div>

              <div className="space-y-6">
                {/* Problem */}
                <div>
                  <h4 className="text-lg font-bold text-gray-200 mb-2 flex items-center gap-2">
                    <span className="text-red-400">✕</span> {activeData.problem.title}
                  </h4>
                  <p className="text-gray-400">{activeData.problem.text}</p>
                </div>
                {/* Solution */}
                <div>
                  <h4 className="text-lg font-bold text-gray-200 mb-2 flex items-center gap-2">
                    <span className="text-blue-400">⚙</span> {activeData.solution.title}
                  </h4>
                  <p className="text-gray-400">{activeData.solution.text}</p>
                </div>
                {/* Victory */}
                <div className={`p-5 rounded-2xl bg-white/5 border border-white/10 ${activeData.color === 'cyan' ? 'shadow-[0_0_15px_rgba(6,182,212,0.15)]' : activeData.color === 'purple' ? 'shadow-[0_0_15px_rgba(168,85,247,0.15)]' : activeData.color === 'yellow' ? 'shadow-[0_0_15px_rgba(234,179,8,0.15)]' : 'shadow-[0_0_15px_rgba(34,197,94,0.15)]'}`}>
                  <h4 className="text-lg font-bold text-white mb-2 flex items-center gap-2">
                    <span className="text-yellow-400">🏆</span> {activeData.victory.title}
                  </h4>
                  <p className="text-gray-300 font-medium">{activeData.victory.text}</p>
                </div>
              </div>
            </div>

            {/* Right Col: Tags & CTA + Visual */}
            <div className="flex flex-col space-y-8 h-full">

               {/* Tags Grid */}
               <div className="grid grid-cols-2 gap-3">
                  {activeData.tags.map(tag => (
                    <div key={tag} className="bg-black/50 border border-white/5 rounded-xl p-4 flex items-center gap-3">
                       <div className={`w-2 h-2 rounded-full min-w-2 min-h-2 ${activeData.color === 'cyan' ? 'bg-cyan-500' : activeData.color === 'purple' ? 'bg-purple-500' : activeData.color === 'yellow' ? 'bg-yellow-500' : 'bg-green-500'}`}></div>
                       <span className="font-semibold text-sm text-gray-200">{tag}</span>
                    </div>
                  ))}
               </div>

              {/* Minimal Image / Abstract Visual to balance layout */}
              <div className={`relative flex-grow flex justify-center items-center min-h-[250px] md:min-h-[300px] ${activeTab === 'HotelCardenal' ? 'bg-white' : 'bg-[#0a0a0a]'} rounded-3xl overflow-hidden border border-white/5 group`}>
                 <Image 
                    src={activeData.image} 
                    alt={activeData.title} 
                    fill 
                    className={`object-contain p-8 md:p-12 ${activeTab === 'HotelCardenal' ? 'opacity-100' : 'opacity-80 group-hover:opacity-100'} group-hover:scale-105 transition-all duration-700`}
                  />
                  {activeTab !== 'HotelCardenal' && (
                    <div className={`absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/50 to-transparent opacity-80`}></div>
                  )}
                  {/* Overlay icon to make it look premium */}
                  <div className={`absolute z-10 w-20 h-20 rounded-2xl ${activeTab === 'HotelCardenal' ? 'bg-white/90 shadow-xl' : 'bg-black/60 backdrop-blur-md'} border border-white/10 flex items-center justify-center shadow-2xl`}>
                     {activeData.color === 'cyan' ? <Activity size={32} className="text-cyan-400" /> : 
                      activeData.color === 'purple' ? <Globe size={32} className="text-purple-400" /> : 
                      activeData.color === 'yellow' ? <Building2 size={32} className="text-yellow-400" /> :
                      <Users size={32} className="text-green-400" />}
                  </div>
              </div>

              {/* Call to Action Box */}
              <div className={`bg-gradient-to-br from-gray-900 to-black p-6 rounded-3xl border ${activeData.color === 'cyan' ? 'border-cyan-900/50' : activeData.color === 'purple' ? 'border-purple-900/50' : activeData.color === 'yellow' ? 'border-yellow-900/50' : 'border-green-900/50'} text-center shadow-xl`}>
                <p className="text-gray-400 font-medium mb-4">{activeData.ctaText}</p>
                <button 
                  onClick={() => window.open(`https://wa.me/593959957252?text=${encodeURIComponent(activeData.whatsappMessage)}`, '_blank')}
                  className="w-full py-4 bg-white text-black font-bold text-lg rounded-xl hover:bg-gray-200 transition-all flex items-center justify-center gap-2 group"
                >
                  Cuéntame tu caso <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </button>
              </div>

            </div>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  )
}

