'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { 
  Zap, 
  ShieldCheck, 
  Target, 
  DollarSign, 
  Check, 
  Plane, 
  Hotel, 
  Utensils, 
  ArrowRight, 
  X, 
  CheckCircle2, 
  PlayCircle, 
  Smartphone, 
  Rocket, 
  MessageCircle, 
  Heart,
  BarChart,
  ListChecks,
  Clock,
  Users,
  Globe
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import ArticleIndustryCarousel, { sectorsData } from '@/components/ArticleIndustryCarousel';
import CrmPricingSection from '@/components/CrmPricingSection';
import FAQSection from '@/components/FaqSection';
import DemoFacade from '@/components/DemoFacade';
import VideoModal from '@/components/VideoModal';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

// Mockup Component for Hero
const CrmMockup = () => (
  <div className="relative w-full aspect-[4/3] rounded-[2rem] overflow-hidden border border-white/10 shadow-2xl bg-gradient-to-br from-gray-800 to-black p-4 md:p-8">
    <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:20px_20px]"></div>
    <div className="relative h-full w-full bg-black/40 backdrop-blur-sm rounded-xl border border-white/5 p-4 flex flex-col">
      <div className="flex items-center gap-2 mb-6">
        <div className="w-3 h-3 rounded-full bg-red-500"></div>
        <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
        <div className="w-3 h-3 rounded-full bg-green-500"></div>
        <div className="ml-4 h-4 w-32 bg-white/10 rounded-full"></div>
      </div>
      <div className="grid grid-cols-3 gap-4 mb-6">
        <div className="h-20 bg-white/5 rounded-lg border border-white/10 p-3">
          <div className="h-3 w-12 bg-orange-500/50 rounded-full mb-2"></div>
          <div className="h-6 w-16 bg-white/20 rounded-full"></div>
        </div>
        <div className="h-20 bg-white/5 rounded-lg border border-white/10 p-3">
          <div className="h-3 w-12 bg-green-500/50 rounded-full mb-2"></div>
          <div className="h-6 w-16 bg-white/20 rounded-full"></div>
        </div>
        <div className="h-20 bg-white/5 rounded-lg border border-white/10 p-3">
          <div className="h-3 w-12 bg-blue-500/50 rounded-full mb-2"></div>
          <div className="h-6 w-16 bg-white/20 rounded-full"></div>
        </div>
      </div>
      <div className="flex-grow bg-white/5 rounded-lg border border-white/10 p-4 space-y-3">
        {[1, 2, 3, 4].map((i) => (
          <div key={i} className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-white/10"></div>
            <div className="h-3 w-40 bg-white/10 rounded-full"></div>
            <div className="ml-auto h-6 w-20 bg-orange-500/20 border border-orange-500/30 rounded-full"></div>
          </div>
        ))}
      </div>
    </div>
    {/* Decorative Elements */}
    <div className="absolute -top-10 -right-10 w-40 h-40 bg-orange-500/20 blur-[80px] rounded-full"></div>
    <div className="absolute -bottom-20 -left-20 w-60 h-60 bg-blue-500/10 blur-[100px] rounded-full"></div>
  </div>
);

export default function CrmTurismoClient() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalVideoUrl, setModalVideoUrl] = useState('');

  const openModal = (url: string) => {
    setModalVideoUrl(url);
    setIsModalOpen(true);
  };

  return (
    <div className="min-h-screen text-white selection:bg-[#FF6B00] selection:text-white">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
        {/* Base Background Layer */}
        <div className="absolute inset-0 bg-zinc-950 -z-30"></div>
        
        {/* Hero Background Image */}
        <div className="absolute inset-0 -z-20">
          <img 
            src="/images/software_gestion_servicios/portada%20CRM-TURISMO.webp"
            alt="CRM Turismo Background"
            className="w-full h-full object-cover opacity-85"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/5 to-zinc-950"></div>
        </div>

        {/* Background Gradients */}
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-orange-500/10 blur-[120px] rounded-full -z-10 animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-blue-500/5 blur-[150px] rounded-full -z-10"></div>
        
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="space-y-8 text-left">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm">
                <span className="w-2 h-2 rounded-full bg-[#FF6B00] animate-ping"></span>
                <span className="text-xs font-black uppercase tracking-widest text-gray-400">
                  Sistema de Gestión Turística
                </span>
              </div>
              
              <h1 className="text-3xl md:text-5xl lg:text-6xl font-black leading-[0.9] tracking-normal uppercase">
                ¿Sigues manejando tu <br />
                <span className="text-[#FF6B00]">Negocio con Libreta</span> <br />
                y 100 Chats de WhatsApp?
              </h1>
              
              <p className="text-lg md:text-xl text-gray-400 font-medium max-w-xl leading-relaxed">
                Detén la hemorragia de reservas hoy mismo. Mientras tú descansas, tu sistema debería estar cotizando, confirmando y cobrando. No es software, es tu mejor vendedor trabajando 24/7.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Link href="#contacto" className="w-full sm:w-auto">
                  <Button className="bg-[#FF6B00] hover:bg-white hover:text-black text-white font-black py-8 px-10 rounded-2xl text-lg transition-all duration-300 transform hover:scale-105 w-full shadow-2xl shadow-orange-500/20 uppercase tracking-widest">
                    Ponerla a trabajar ahora
                    <Zap className="ml-2 w-5 h-5 fill-current" />
                  </Button>
                </Link>
                <button 
                  onClick={() => openModal('https://www.youtube.com/embed/dQw4w9WgXcQ')} // Placeholder video
                  className="flex items-center justify-center gap-3 px-8 py-4 rounded-2xl border border-white/10 hover:bg-white/5 transition-all group"
                >
                  <PlayCircle className="w-6 h-6 text-[#FF6B00] group-hover:scale-110 transition-transform" />
                  <span className="font-bold uppercase tracking-widest text-sm">Ver Demo en Vivo</span>
                </button>
              </div>

              <div className="flex items-center gap-6 pt-8 border-t border-white/5">
                <div className="flex -space-x-3">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="w-10 h-10 rounded-full border-2 border-black bg-gray-800 flex items-center justify-center overflow-hidden relative">
                       <img src={`https://i.pravatar.cc/100?u=${i}`} alt="User" width={40} height={40} className="object-cover" />
                    </div>
                  ))}
                </div>
                <p className="text-sm text-gray-500 font-medium">
                  <span className="text-white font-bold">+500 establecimientos</span> ya rescataron su tiempo.
                </p>
              </div>
            </div>
            

          </div>
        </div>
      </section>

      {/* Problem Section - Tabbed */}
      <section className="py-32 bg-zinc-950">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-4xl md:text-6xl font-black mb-6 tracking-normal uppercase text-white">
              Si no respondes en <br />
              <span className="text-[#FF6B00]">5 Minutos</span>, ya perdiste.
            </h2>
            <p className="text-xl text-gray-500 font-medium">
              El viajero moderno no espera. Si no le respondes tú, le responde tu competencia. Así de simple.
            </p>
          </div>

          <Tabs defaultValue="agencias" className="w-full max-w-5xl mx-auto">
            <TabsList className="grid grid-cols-3 bg-white/5 p-1 rounded-2xl border border-white/10 mb-12 h-auto">
              <TabsTrigger value="agencias" className="rounded-xl font-bold py-4 data-[state=active]:bg-[#FF6B00] data-[state=active]:text-white uppercase tracking-widest text-xs">Agencias</TabsTrigger>
              <TabsTrigger value="hoteles" className="rounded-xl font-bold py-4 data-[state=active]:bg-[#FF6B00] data-[state=active]:text-white uppercase tracking-widest text-xs">Hoteles</TabsTrigger>
              <TabsTrigger value="restaurantes" className="rounded-xl font-bold py-4 data-[state=active]:bg-[#FF6B00] data-[state=active]:text-white uppercase tracking-widest text-xs">Restaurantes</TabsTrigger>
            </TabsList>
            
            {sectorsData.map((sector) => (
              <TabsContent key={sector.id} value={sector.id} className="mt-0 outline-none">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="bg-red-500/5 border border-red-500/10 rounded-[2.5rem] p-10">
                    <h4 className="text-red-500 font-black uppercase tracking-tight mb-8 flex items-center gap-3 text-lg">
                      <div className="w-10 h-10 rounded-xl bg-red-500/10 flex items-center justify-center">
                        <X className="w-6 h-6" />
                      </div>
                      El Desangre Diario
                    </h4>
                    <ul className="space-y-6">
                      {sector.problemPoints.map((pt, i) => (
                        <li key={i} className="flex gap-4 text-gray-400 font-medium text-lg leading-snug">
                          <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-red-500 shrink-0" />
                          {pt}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="bg-[#FF6B00]/5 border border-[#FF6B00]/10 rounded-[2.5rem] p-10">
                    <h4 className="text-[#FF6B00] font-black uppercase tracking-tight mb-8 flex items-center gap-3 text-lg">
                      <div className="w-10 h-10 rounded-xl bg-[#FF6B00]/10 flex items-center justify-center">
                        <CheckCircle2 className="w-6 h-6" />
                      </div>
                      La Victoria
                    </h4>
                    <ul className="space-y-6">
                      {sector.solutionPoints.map((pt, i) => (
                        <li key={i} className="flex gap-4 text-white font-bold text-lg leading-snug">
                          <CheckCircle2 className="w-6 h-6 text-[#FF6B00] shrink-0 mt-0.5" />
                          {pt}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      {/* Demo Section */}
      <section className="py-32 bg-black overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-20 items-center">
            <div className="w-full lg:w-1/2 space-y-8">
              <span className="text-[#FF6B00] font-black uppercase tracking-[0.4em] text-xs">Mira cómo funciona</span>
              <h2 className="text-5xl md:text-7xl font-black leading-[0.9] tracking-normal uppercase text-white">
                Tus Proformas <br />
                en <span className="text-[#FF6B00]">Segundos</span>, <br />
                no en Horas.
              </h2>
              <p className="text-xl text-gray-500 font-medium leading-relaxed">
                El 70% de tus ventas dependen de la velocidad de tu primera respuesta. Hemos eliminado la fricción manual para que cotizar sea tan fácil como enviar un mensaje.
              </p>
              <Accordion type="single" collapsible className="w-full space-y-4">
                <AccordionItem value="item-1" className="border border-white/10 rounded-2xl px-6 bg-white/5">
                  <AccordionTrigger className="hover:no-underline font-bold text-lg uppercase tracking-tight py-6 text-white">Gestión de Leads</AccordionTrigger>
                  <AccordionContent className="text-gray-400 text-lg pb-6">
                    Captura automáticamente cada interesado desde Instagram, WhatsApp y tu Web en un solo lugar. Nunca más pierdas un contacto.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2" className="border border-white/10 rounded-2xl px-6 bg-white/5">
                  <AccordionTrigger className="hover:no-underline font-bold text-lg uppercase tracking-tight py-6 text-white">Motor de Reservas</AccordionTrigger>
                  <AccordionContent className="text-gray-400 text-lg pb-6">
                    Sincronización total. Si se reserva en línea, se bloquea en recepción. Sin errores, sin overbooking, sin estrés.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3" className="border border-white/10 rounded-2xl px-6 bg-white/5">
                  <AccordionTrigger className="hover:no-underline font-bold text-lg uppercase tracking-tight py-6 text-white">Pagos Integrados</AccordionTrigger>
                  <AccordionContent className="text-gray-400 text-lg pb-6">
                    El cliente puede pagar su reserva o abono directamente desde la proforma digital. Menos pasos, más ventas.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
            <div className="w-full lg:w-1/2">
                <DemoFacade 
                  src="/images/software_gestion_servicios/video-crm.mp4" 
                  title="Demo CRM Turismo"
                  previewImage="/images/software_gestion_servicios/nicho_turismo_objetivo.webp"
                />
            </div>
          </div>
        </div>
      </section>

      {/* ROI Section */}
      <section className="py-32 bg-[#FF6B00] text-black">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-5xl md:text-8xl font-black mb-12 tracking-tighter uppercase leading-[0.85] text-black">
            El sistema se paga <br />
            con <span className="text-white">2 Reservas</span> recuperadas.
          </h2>
          <p className="text-2xl md:text-3xl font-black max-w-3xl mx-auto mb-16 uppercase tracking-tight opacity-90 text-black">
            Si dejas de perder el 20% de tus leads por falta de seguimiento, habrás pagado el CRM de todo el año en el primer mes.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
             <div className="p-8 bg-black/5 rounded-3xl border border-black/10">
                <p className="text-5xl font-black mb-2">35%</p>
                <p className="font-bold uppercase tracking-widest text-xs">Aumento en Cierre</p>
             </div>
             <div className="p-8 bg-black/5 rounded-3xl border border-black/10">
                <p className="text-5xl font-black mb-2">-80%</p>
                <p className="font-bold uppercase tracking-widest text-xs">Tiempo Administrativo</p>
             </div>
             <div className="p-8 bg-black/5 rounded-3xl border border-black/10">
                <p className="text-5xl font-black mb-2">0</p>
                <p className="font-bold uppercase tracking-widest text-xs">Overbooking Reportados</p>
             </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-32 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-6xl font-black mb-6 tracking-normal uppercase text-gray-900">
              Escoge tu <span className="text-[#FF6B00]">Arma</span>
            </h2>
            <p className="text-xl text-gray-600 font-medium">Transparente. Sin contratos leoninos. Paga por lo que usas.</p>
          </div>
          
          <section className="relative overflow-hidden bg-gray-50 py-16 px-4 rounded-3xl mb-12">
            <div className="absolute -top-20 -left-20 w-72 h-72 bg-[#FF6B00] rounded-full blur-[100px] opacity-10 pointer-events-none"></div>
            <div className="absolute -bottom-20 -right-20 w-72 h-72 bg-[#FF6B00] rounded-full blur-[100px] opacity-10 pointer-events-none"></div>
            <div className="relative max-w-5xl mx-auto text-center">
              <span className="inline-block text-[#FF6B00] font-bold tracking-widest uppercase text-xs mb-6">Antes de ver los precios, lee esto</span>
              <h2 className="text-4xl md:text-6xl font-black text-gray-900 mb-6 leading-tight font-poiret-one">
                Ponla a trabajar. <span className="text-[#FF6B00]">Que se pague sola.</span>
              </h2>
              <p className="text-gray-600 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed mb-8">
                Pon tu tarjeta de crédito una vez. El sistema empieza a trabajar desde el primer día: <strong className="text-gray-900">controla tu equipo, cierra más cotizaciones, ahorra horas de coordinación.</strong> Mientras tanto, tu tarjeta se va pagando mes a mes con lo que el sistema te hace ganar.
              </p>
              <div className="inline-flex items-center gap-3 bg-[#FF6B00]/10 border border-[#FF6B00]/30 rounded-2xl px-8 py-4 mb-10">
                <svg className="w-6 h-6 text-[#FF6B00] flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"></path>
                </svg>
                <p className="text-[#FF6B00] font-bold text-lg md:text-xl">Hasta 24 meses sin intereses con todas las tarjetas.</p>
              </div>
              <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-gray-600">
                <span className="flex items-center gap-2"><span className="w-2 h-2 bg-[#FF6B00] rounded-full"></span>Sin comisiones ocultas</span>
                <span className="flex items-center gap-2"><span className="w-2 h-2 bg-[#FF6B00] rounded-full"></span>Pago seguro con PayPhone</span>
                <span className="flex items-center gap-2"><span className="w-2 h-2 bg-[#FF6B00] rounded-full"></span>Control total desde el día 1</span>
              </div>
            </div>
          </section>

          <section id="cuanto-cuesta" className="py-20 px-4 bg-gradient-to-b from-gray-50 to-white rounded-3xl">
            <div className="max-w-7xl mx-auto text-left">
              <div className="max-w-4xl mb-6">
                <h2 className="text-3xl md:text-4xl font-bold font-montserrat text-gray-900 mb-4">Elige lo que necesitas. Paga solo por eso.</h2>
                <p className="text-lg text-gray-600 leading-relaxed">Tres módulos independientes. Puedes empezar con uno y crecer cuando quieras. Cada uno incluye la configuración completa de tu empresa.</p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
                {/* Card 1 */}
                <div className="bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 flex flex-col border-2 border-gray-100 hover:border-[#FF6B00]/30 relative">
                  <div className="p-6 border-b border-gray-100 bg-gradient-to-br from-gray-50 to-transparent">
                    <h3 className="text-xl font-bold text-gray-900 font-playfair mb-2">Proyectos y Rutas</h3>
                    <div className="flex items-baseline gap-2 mb-2">
                      <span className="text-4xl font-bold text-[#FF6B00]">$1.500</span>
                    </div>
                  </div>
                  <div className="p-6 flex-grow">
                    <p className="text-sm font-semibold text-gray-700 mb-4">Para: Empresas con técnicos o trabajadores en campo.</p>
                    <ul className="space-y-3 mb-6">
                      <li className="flex items-start gap-2 text-sm text-gray-600">
                        <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                        <span>Control de proyectos y equipo</span>
                      </li>
                      <li className="flex items-start gap-2 text-sm text-gray-600">
                        <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                        <span>Ubicación GPS en tiempo real</span>
                      </li>
                      <li className="flex items-start gap-2 text-sm text-gray-600">
                        <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                        <span>Bitácora offline</span>
                      </li>
                      <li className="flex items-start gap-2 text-sm text-gray-600">
                        <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                        <span>Fotos y reportes desde el campo</span>
                      </li>
                    </ul>
                  </div>
                  <div className="p-6 pt-0">
                    <Link href="/pago?amount=1500&amp;description=CRM%20Proyectos%20y%20Rutas&amp;backTo=/blog/software-personalizado/crm-turismo" className="block w-full bg-gray-900 text-white text-center font-bold py-4 px-6 rounded-xl hover:bg-[#FF6B00] transition-colors shadow-lg">
                      Seleccionar Plan
                    </Link>
                  </div>
                </div>

                {/* Card 2 */}
                <div className="bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 flex flex-col border-2 border-gray-100 hover:border-[#FF6B00]/30 relative">
                  <div className="p-6 border-b border-gray-100 bg-gradient-to-br from-gray-50 to-transparent">
                    <h3 className="text-xl font-bold text-gray-900 font-playfair mb-2">Agendamiento</h3>
                    <div className="flex items-baseline gap-2 mb-2">
                      <span className="text-4xl font-bold text-[#FF6B00]">$600</span>
                    </div>
                  </div>
                  <div className="p-6 flex-grow">
                    <p className="text-sm font-semibold text-gray-700 mb-4">Para: Empresas que dependen de agendar visitas o citas.</p>
                    <ul className="space-y-3 mb-6">
                      <li className="flex items-start gap-2 text-sm text-gray-600">
                        <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                        <span>Calendario centralizado</span>
                      </li>
                      <li className="flex items-start gap-2 text-sm text-gray-600">
                        <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                        <span>Código QR dinámico</span>
                      </li>
                      <li className="flex items-start gap-2 text-sm text-gray-600">
                        <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                        <span>Asignación de tareas automáticas</span>
                      </li>
                      <li className="flex items-start gap-2 text-sm text-gray-600">
                        <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                        <span>Recordatorios automáticos</span>
                      </li>
                    </ul>
                  </div>
                  <div className="p-6 pt-0">
                    <Link href="/pago?amount=600&amp;description=CRM%20Agendamiento&amp;backTo=/blog/software-personalizado/crm-turismo" className="block w-full bg-[#FF6B00] text-white text-center font-bold py-4 px-6 rounded-xl hover:bg-gray-900 transition-colors shadow-lg">
                      Seleccionar Plan
                    </Link>
                  </div>
                </div>

                {/* Card 3 */}
                <div className="bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 flex flex-col border-2 border-gray-100 hover:border-[#FF6B00]/30 relative">
                  <div className="p-6 border-b border-gray-100 bg-gradient-to-br from-gray-50 to-transparent">
                    <h3 className="text-xl font-bold text-gray-900 font-playfair mb-2">Cotizaciones</h3>
                    <div className="flex items-baseline gap-2 mb-2">
                      <span className="text-4xl font-bold text-[#FF6B00]">$600</span>
                    </div>
                  </div>
                  <div className="p-6 flex-grow">
                    <p className="text-sm font-semibold text-gray-700 mb-4">Para: Empresas que cotizan servicios a medida.</p>
                    <ul className="space-y-3 mb-6">
                      <li className="flex items-start gap-2 text-sm text-gray-600">
                        <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                        <span>Generación automática de PDFs</span>
                      </li>
                      <li className="flex items-start gap-2 text-sm text-gray-600">
                        <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                        <span>Cotización personalizada al instante</span>
                      </li>
                      <li className="flex items-start gap-2 text-sm text-gray-600">
                        <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                        <span>Inventario integrado</span>
                      </li>
                      <li className="flex items-start gap-2 text-sm text-gray-600">
                        <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                        <span>Sistema a la medida</span>
                      </li>
                    </ul>
                  </div>
                  <div className="p-6 pt-0">
                    <Link href="/pago?amount=600&amp;description=CRM%20Cotizaciones&amp;backTo=/blog/software-personalizado/crm-turismo" className="block w-full bg-gray-900 text-white text-center font-bold py-4 px-6 rounded-xl hover:bg-[#FF6B00] transition-colors shadow-lg">
                      Seleccionar Plan
                    </Link>
                  </div>
                </div>

                {/* Card 4 - Recomendado */}
                <div className="bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 flex flex-col border-2 border-[#FF6B00] relative transform md:scale-105 z-10">
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-[#FF6B00] text-white text-xs font-bold px-4 py-1 rounded-full shadow-lg">RECOMENDADO</span>
                  </div>
                  <div className="p-6 border-b border-gray-100 bg-gradient-to-br from-[#FF6B00]/5 to-transparent">
                    <h3 className="text-xl font-bold text-gray-900 font-playfair mb-2">Suite Completa</h3>
                    <div className="flex items-baseline gap-2 mb-2">
                      <span className="text-4xl font-bold text-[#FF6B00]">$2.500</span>
                    </div>
                  </div>
                  <div className="p-6 flex-grow">
                    <p className="text-sm font-semibold text-gray-700 mb-4">Para: Empresas que buscan máxima eficiencia operativa.</p>
                    <ul className="space-y-3 mb-6">
                      <li className="flex items-start gap-2 text-sm text-gray-600">
                        <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                        <span>Todos los módulos integrados</span>
                      </li>
                      <li className="flex items-start gap-2 text-sm text-gray-600">
                        <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                        <span>Chat offline</span>
                      </li>
                      <li className="flex items-start gap-2 text-sm text-gray-600">
                        <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                        <span>Galería de eventos y promociones</span>
                      </li>
                      <li className="flex items-start gap-2 text-sm text-gray-600">
                        <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                        <span>Integración con redes sociales</span>
                      </li>
                    </ul>
                  </div>
                  <div className="p-6 pt-0">
                    <Link href="/pago?amount=2500&amp;description=CRM%20Suite%20Completa&amp;backTo=/blog/software-personalizado/crm-turismo" className="block w-full bg-[#FF6B00] text-white text-center font-bold py-4 px-6 rounded-xl hover:bg-gray-900 transition-colors shadow-lg">
                      Seleccionar Plan
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-32 bg-gray-50 text-gray-900">
        <div className="container mx-auto px-4">
          <FAQSection 
            h2="Preguntas que todo hotelero y agente se hace:"
            questions={[
              {
                q: "¿Mi negocio es pequeño, esto es para mí?",
                a: "Especialmente para ti. Un equipo pequeño no puede darse el lujo de perder tiempo en tareas manuales. El sistema actúa como tu asistente 24/7 y te permite competir en velocidad con negocios diez veces más grandes.",
                cta: "Empezar ahora"
              },
              {
                q: "¿Por qué cambiar de WhatsApp y Excel a un CRM?",
                a: "WhatsApp y Excel son herramientas reactivas: respondes cuando puedes, registras cuando te acuerdas. Un CRM es proactivo: captura, avisa, da seguimiento y cobra por ti. La diferencia es entre sobrevivir operativamente y escalar.",
                cta: "Ver beneficios"
              },
              {
                q: "¿Es difícil de usar?",
                a: "Si tu equipo sabe usar WhatsApp, sabe usar este sistema. Está diseñado para eliminar fricción, no para añadirla. El entrenamiento inicial toma menos de una tarde.",
                cta: "Reservar demo"
              },
              {
                q: "¿Puedo integrarlo con mi web actual?",
                a: "Sí. Cada consulta que llegue a tu web cae directamente en tu embudo de ventas, con notificación inmediata para que no se enfríe ningún prospecto.",
                cta: "Hablar con soporte"
              }
            ]}
          />
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-32 bg-white relative overflow-hidden border-t border-gray-200">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto space-y-12">
            <h2 className="text-5xl md:text-8xl font-black tracking-normal uppercase leading-[0.85] text-gray-900">
              ¿Vas a seguir <br />
              regalando <span className="text-[#FF6B00]">Dinero?</span>
            </h2>
            <p className="text-xl md:text-2xl text-gray-600 font-medium leading-relaxed">
              Cada minuto que pasas sin un sistema es una oportunidad que se lleva otro. <br className="hidden md:block" />
              Toma el control hoy mismo.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
               <Link href="#contacto" className="w-full sm:w-auto">
                <Button className="bg-[#FF6B00] hover:bg-gray-900 hover:text-white text-white font-black py-10 px-16 rounded-[2rem] text-2xl transition-all duration-300 transform hover:scale-105 shadow-2xl shadow-orange-500/40 uppercase tracking-widest w-full">
                  Agendar Videollamada
                </Button>
               </Link>
               <Button variant="outline" className="border-gray-300 text-gray-900 hover:bg-gray-100 font-black py-10 px-16 rounded-[2rem] text-2xl transition-all duration-300 uppercase tracking-widest w-full md:w-auto">
                 WhatsApp
               </Button>
            </div>
            
            <div className="pt-20 opacity-50 flex flex-col items-center gap-4">
               <div className="w-20 h-px bg-gradient-to-r from-transparent via-gray-400 to-transparent"></div>
               <p className="text-xs font-black uppercase tracking-[0.5em] text-gray-500">César Reyes Jaramillo</p>
            </div>
          </div>
        </div>
      </section>

      <VideoModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} videoUrl={modalVideoUrl} />
    </div>
  );
}
