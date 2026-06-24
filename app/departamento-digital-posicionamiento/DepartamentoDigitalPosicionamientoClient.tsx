'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { ArrowRight, CheckCircle, ChevronRight, DollarSign, TrendingUp, BarChart3, Users, Rocket, Target, Zap, Brain, FileText, Headphones, Calendar, MessageCircle, Eye, Search, Globe, Smartphone, Megaphone, Award, Building2, Handshake, X } from 'lucide-react';
import { ExpandableText } from '@/components/ui/expandable-text';

// --- DATA --- //

const heroVideoUrl = "https://www.youtube.com/embed/dQw4w9WgXcQ"; // Placeholder - replace with actual video

const servicios = [
  {
    icon: Search,
    title: "Diagnóstico de su empresa en digital",
    description: "Antes de mover nada, analizamos dónde está hoy: en Google, en redes, frente a su competencia directa. Le decimos la verdad aunque no sea cómoda."
  },
  {
    icon: Target,
    title: "Estrategia de posicionamiento a medida",
    description: "No usamos plantillas. Construimos un plan específico para su mercado, su ciudad y su tipo de cliente. Con objetivos reales y plazos honestos."
  },
  {
    icon: Globe,
    title: "Presencia digital construida para convertir",
    description: "Si necesita sitio web, lo construimos. Si necesita optimizar el que tiene, lo hacemos. Si necesita aparecer en Google antes que su competencia, trabajamos para eso."
  },
  {
    icon: FileText,
    title: "Contenido que posiciona, no que rellena",
    description: "Cada publicación, cada artículo, cada pieza tiene un propósito estratégico. Su equipo nos provee las imágenes y videos — nosotros transformamos en contenido que genera posición."
  },
  {
    icon: Zap,
    title: "Automatización que trabaja mientras usted duerme",
    description: "WhatsApp automatizado, seguimiento de prospectos, respuestas inmediatas, captación de leads. Su empresa atiende y convierte sin que usted esté detrás de cada mensaje."
  },
  {
    icon: TrendingUp,
    title: "Un solo objetivo que nos une: sus ventas",
    description: "Todo lo que hacemos tiene un único destino: que su empresa venda más. No trabajamos para tener bonitas métricas. Trabajamos para que al final del mes usted vea más clientes."
  },
  {
    icon: Brain,
    title: "Inteligencia artificial aplicada a su negocio",
    description: "Las empresas que adopten estas herramientas ahora tendrán una ventaja que sus competidores no podrán alcanzar en años. Le mostramos exactamente cómo reducir costos y multiplicar alcance."
  },
  {
    icon: BarChart3,
    title: "Reportes ejecutivos mensuales",
    description: "Un informe claro cada mes. No métricas de vanidad — resultados reales: visibilidad ganada, leads generados, posición frente a la competencia."
  },
  {
    icon: Headphones,
    title: "Un estratega en su mesa",
    description: "Disponibles. Respondemos. Cuando surge una idea, la evaluamos. Cuando hay un problema, lo resolvemos. Somos parte de su equipo directivo."
  }
];

const costosInternos = [
  { label: "Ejecutivo de marketing digital", rango: "$700 - $1,200/mes" },
  { label: "Especialista en SEO", rango: "$1,000 - $2,000/mes" },
  { label: "Community manager", rango: "$600 - $1,000/mes" },
  { label: "Herramientas, licencias y software", rango: "Varía" },
  { label: "Gestión, supervisión y capacitación", rango: "Constante" }
];

const casosExito = [
  {
    sector: "Sector automotriz",
    ciudad: "Loja",
    titulo: "Una empresa con nombre comercial distinto al nombre de búsqueda",
    resultado: "Hoy dominan las búsquedas de su categoría y captan clientes que ni sabían que existían."
  },
  {
    sector: "Sector construcción",
    ciudad: "Loja",
    titulo: "Cuando alguien busca dónde comprar materiales de impermeabilización",
    resultado: "Aparecen primero. Antes de trabajar con nosotros, no existían en digital."
  },
  {
    sector: "Sector gastronómico",
    ciudad: "Loja",
    titulo: "Dos restaurantes compitiendo por las mismas búsquedas locales",
    resultado: "Ambos clientes nuestros. Ambos en primera página."
  }
];

const whatsappUrl = "https://wa.me/593999999999?text=Hola%2C%20me%20interesa%20el%20Departamento%20Digital%20de%20Posicionamiento";

export default function DepartamentoDigitalPosicionamientoClient() {
  const [videoLoaded, setVideoLoaded] = useState(false);
  const [currentServicio, setCurrentServicio] = useState(0);
  const [currentCaso, setCurrentCaso] = useState(0);

  const nextServicio = () => setCurrentServicio((prev) => (prev + 1) % servicios.length);
  const prevServicio = () => setCurrentServicio((prev) => (prev - 1 + servicios.length) % servicios.length);
  const nextCaso = () => setCurrentCaso((prev) => (prev + 1) % casosExito.length);
  const prevCaso = () => setCurrentCaso((prev) => (prev - 1 + casosExito.length) % casosExito.length);

  return (
    <div className="min-h-screen bg-gray-950 text-white">
      {/* HERO SECTION */}
      <section className="relative py-20 md:py-32 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-gray-900 to-purple-900/20"></div>
        <div className="absolute inset-0 bg-[url('/patterns/grid.svg')] opacity-5"></div>
        
        <div className="relative max-w-5xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 leading-tight">
            Su empresa merece ocupar el primer lugar.
          </h1>
          <h2 className="text-xl md:text-2xl text-blue-400 mb-8">
            Nosotros nos encargamos de que eso ocurra.
          </h2>
          
          {/* VIDEO PLACEHOLDER - Replace with actual video embed */}
          <div className="max-w-3xl mx-auto mb-8 rounded-2xl overflow-hidden border border-gray-700 bg-gray-900 aspect-video flex items-center justify-center">
            <div className="text-center p-8">
              <div className="w-20 h-20 mx-auto mb-4 bg-blue-600 rounded-full flex items-center justify-center cursor-pointer hover:bg-blue-700 transition-colors">
                <svg className="w-8 h-8 ml-1" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z"/>
                </svg>
              </div>
              <p className="text-gray-400">Video de César - Haz clic para reproducir</p>
            </div>
          </div>
          
          <Link 
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 shadow-lg hover:shadow-green-500/25"
          >
            Solicitar sesión de diagnóstico estratégico
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>

      {/* SECCIÓN 1 - EL PROBLEMA */}
      <section className="py-16 md:py-24 px-4 bg-gray-900/50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
            ¿Cuándo fue la última vez que alguien se hizo cargo de verdad?
          </h2>
          
          <div className="space-y-4 text-lg">
            <div className="flex items-center gap-3 text-gray-300 bg-gray-800/50 p-4 rounded-xl">
              <span className="text-2xl">➡️</span>
              <p>Ha contratado personas que publican, pero no posicionan.</p>
            </div>
            <div className="flex items-center gap-3 text-gray-300 bg-gray-800/50 p-4 rounded-xl">
              <span className="text-2xl">➡️</span>
              <p>Ha pagado por presencia digital que nadie encuentra.</p>
            </div>
            <div className="flex items-center gap-3 text-gray-300 bg-gray-800/50 p-4 rounded-xl">
              <span className="text-2xl">➡️</span>
              <p>Ha escuchado propuestas que suenan bien y desaparecen al mes siguiente.</p>
            </div>
          </div>
          
          <div className="mt-12 p-8 rounded-2xl bg-gray-800 border border-gray-700">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center flex-shrink-0">
                <ArrowRight className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Un community manager publica contenido. Nosotros construimos posición.</h3>
                <ExpandableText 
                  shortText="La diferencia es esta: publicar es aparecer. Posicionarse es que cuando su cliente ideal busca lo que usted ofrece, lo encuentra a usted primero — y confía en lo que ve."
                  fullText="La diferencia es esta: publicar es aparecer. Posicionarse es que cuando su cliente ideal busca lo que usted ofrece, lo encuentra a usted primero — y confianza en lo que ve. Para llegar ahí se necesita estrategia, tecnología, contenido, análisis y ejecución constante. No una persona con un celular. <strong>Un departamento completo.</strong>"
                  className="text-gray-300"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECCIÓN 2 - LA SOLUCIÓN */}
      <section className="py-16 md:py-24 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
            Un departamento entero trabajando para usted.<br/>
            <span className="text-blue-400">Sin el costo de tenerlo adentro.</span>
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8 items-center mt-8">
            <div className="space-y-6 text-lg text-gray-300">
              <div className="flex items-start gap-3">
                <span className="text-2xl">🚀</span>
                <p>Llegamos a su empresa, entendemos su mercado, su competencia y sus objetivos. Diseñamos la estrategia. Y la ejecutamos todos los días.</p>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-2xl">⚡</span>
                <p>Sin que usted tenga que explicarnos cómo funciona internet. Sin perseguirnos. Sin aprender herramientas que no son su negocio.</p>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-2xl">💼</span>
                <p><strong className="text-white">Usted dirige su empresa.</strong> Nosotros nos encargamos de que el mundo digital trabaje para ella.</p>
              </div>
            </div>
            <div className="hidden md:block">
              <img 
                src="/images/categorias/desarrollo-web/empresa-online-hero.webp" 
                alt="Departamento Digital" 
                className="rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* SECCIÓN 3 - QUÉ INCLUYE - CAROUSEL */}
      <section className="py-16 md:py-24 px-4 bg-gray-900/50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            Lo que hace su Departamento Digital de Posicionamiento y Ejecución
          </h2>
          
          {/* Desktop: Grid | Mobile: Carousel */}
          <div className="mt-12">
            {/* Desktop Grid */}
            <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {servicios.map((servicio, index) => (
                <div 
                  key={index}
                  className="p-6 rounded-2xl bg-gray-800/50 border border-gray-700 hover:border-blue-500/50 transition-all duration-300"
                >
                  <servicio.icon className="w-10 h-10 text-blue-400 mb-4" />
                  <h3 className="text-lg font-bold mb-2">{servicio.title}</h3>
                  <p className="text-gray-400 text-sm">{servicio.description}</p>
                </div>
              ))}
            </div>
            
            {/* Mobile Carousel */}
            <div className="md:hidden">
              <div className="relative">
                <div className="overflow-hidden">
                  <div 
                    className="flex transition-transform duration-300"
                    style={{ transform: `translateX(-${currentServicio * 100}%)` }}
                  >
                    {servicios.map((servicio, index) => (
                      <div 
                        key={index}
                        className="w-full flex-shrink-0 px-2"
                      >
                        <div className="p-6 rounded-2xl bg-gray-800/50 border border-gray-700">
                          <servicio.icon className="w-10 h-10 text-blue-400 mb-4" />
                          <h3 className="text-lg font-bold mb-2">{servicio.title}</h3>
                          <p className="text-gray-400 text-sm">{servicio.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                
                {/* Carousel Controls */}
                <div className="flex items-center justify-between mt-4">
                  <button 
                    onClick={prevServicio}
                    className="w-12 h-12 rounded-full bg-gray-700 flex items-center justify-center hover:bg-gray-600"
                  >
                    <ChevronRight className="w-6 h-6 rotate-180" />
                  </button>
                  <div className="flex gap-2">
                    {servicios.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentServicio(index)}
                        className={`w-3 h-3 rounded-full transition-all ${
                          index === currentServicio ? 'bg-blue-500 w-6' : 'bg-gray-600'
                        }`}
                      />
                    ))}
                  </div>
                  <button 
                    onClick={nextServicio}
                    className="w-12 h-12 rounded-full bg-gray-700 flex items-center justify-center hover:bg-gray-600"
                  >
                    <ChevronRight className="w-6 h-6" />
                  </button>
                </div>
                
                <p className="text-center text-gray-500 text-sm mt-2">
                  {currentServicio + 1} / {servicios.length}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECCIÓN 4 - EL ARGUMENTO FINANCIERO */}
      <section className="py-16 md:py-24 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
            ¿Cuánto le cuesta no tener este departamento?
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {/* Costos Internos */}
            <div className="p-6 rounded-2xl bg-gray-800 border border-gray-700">
              <h3 className="text-xl font-bold mb-4 text-center">Contratar internamente</h3>
              <p className="text-sm text-gray-400 text-center mb-6">El equipo mínimo para hacer este trabajo implica:</p>
              
              <div className="space-y-3">
                {costosInternos.map((item, index) => (
                  <div key={index} className="flex items-center justify-between p-3 rounded-lg bg-gray-700/50">
                    <span className="text-gray-300">{item.label}</span>
                    <span className="text-blue-400 text-sm font-medium">{item.rango}</span>
                  </div>
                ))}
              </div>
              
              <div className="mt-6 p-4 rounded-lg bg-red-900/20 border border-red-800">
                <p className="text-center font-bold text-red-400">
                  Solo en nómina: más de $2,500/mes<br/>
                  <span className="text-sm font-normal text-gray-400">Antes de operar un solo día</span>
                </p>
              </div>
            </div>
            
            {/* Sucursal Física */}
            <div className="p-6 rounded-2xl bg-gray-800 border border-gray-700">
              <h3 className="text-xl font-bold mb-4 text-center">Abrir una sucursal física</h3>
              <p className="text-sm text-gray-400 text-center mb-6">Implica:</p>
              
              <div className="space-y-3">
                <div className="flex items-center justify-between p-3 rounded-lg bg-gray-700/50">
                  <span className="text-gray-300">Personal por turno</span>
                  <span className="text-blue-400 text-sm font-medium">Mínimo 2 personas</span>
                </div>
                <div className="flex items-center justify-between p-3 rounded-lg bg-gray-700/50">
                  <span className="text-gray-300">Dos turnos</span>
                  <span className="text-blue-400 text-sm font-medium">4 empleados</span>
                </div>
                <div className="flex items-center justify-between p-3 rounded-lg bg-gray-700/50">
                  <span className="text-gray-300">Arriendo, servicios, administración</span>
                  <span className="text-blue-400 text-sm font-medium">Más costos</span>
                </div>
                <div className="flex items-center justify-between p-3 rounded-lg bg-gray-700/50">
                  <span className="text-gray-300">Infraestructura y equipamiento</span>
                  <span className="text-blue-400 text-sm font-medium">Inversión inicial</span>
                </div>
              </div>
              
              <div className="mt-6 p-4 rounded-lg bg-red-900/20 border border-red-800">
                <p className="text-center font-bold text-red-400">
                  Una sucursal física puede costarle<br/>
                  <span className="text-2xl">$60,000+/año</span>
                </p>
              </div>
            </div>
          </div>
          
          <div className="mt-8 p-6 rounded-2xl bg-green-900/20 border border-green-800 text-center">
            <p className="text-xl">
              Nosotros le montamos esa sucursal en digital, la posicionamos y la mantenemos generando clientes — por una fracción de ese valor. 
              <strong className="text-green-400"> Y a diferencia de un empleado, no se toman vacaciones a mitad de una campaña.</strong>
            </p>
          </div>
        </div>
      </section>

      {/* SECCIÓN 5 - CASOS DE ÉXITO - CAROUSEL */}
      <section className="py-16 md:py-24 px-4 bg-gray-900/50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
            Resultados que puede verificar usted mismo
          </h2>
          
          {/* Desktop: Grid | Mobile: Carousel */}
          <div className="mt-8">
            {/* Desktop Grid */}
            <div className="hidden md:grid md:grid-cols-3 gap-6">
              {casosExito.map((caso, index) => (
                <div 
                  key={index}
                  className="p-6 rounded-2xl bg-gray-800 border border-gray-700"
                >
                  <div className="flex items-center gap-2 mb-3">
                    <Award className="w-5 h-5 text-yellow-500" />
                    <span className="text-sm font-medium text-yellow-500">{caso.sector}</span>
                  </div>
                  <p className="text-sm text-gray-400 mb-2">{caso.ciudad}</p>
                  <h3 className="text-lg font-bold mb-2">{caso.titulo}</h3>
                  <p className="text-gray-300">{caso.resultado}</p>
                </div>
              ))}
            </div>
            
            {/* Mobile Carousel */}
            <div className="md:hidden">
              <div className="relative">
                <div className="overflow-hidden">
                  <div 
                    className="flex transition-transform duration-300"
                    style={{ transform: `translateX(-${currentCaso * 100}%)` }}
                  >
                    {casosExito.map((caso, index) => (
                      <div 
                        key={index}
                        className="w-full flex-shrink-0 px-2"
                      >
                        <div className="p-6 rounded-2xl bg-gray-800 border border-gray-700">
                          <div className="flex items-center gap-2 mb-3">
                            <Award className="w-5 h-5 text-yellow-500" />
                            <span className="text-sm font-medium text-yellow-500">{caso.sector}</span>
                          </div>
                          <p className="text-sm text-gray-400 mb-2">{caso.ciudad}</p>
                          <h3 className="text-lg font-bold mb-2">{caso.titulo}</h3>
                          <p className="text-gray-300">{caso.resultado}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                
                {/* Carousel Controls */}
                <div className="flex items-center justify-between mt-4">
                  <button 
                    onClick={prevCaso}
                    className="w-12 h-12 rounded-full bg-gray-700 flex items-center justify-center hover:bg-gray-600"
                  >
                    <ChevronRight className="w-6 h-6 rotate-180" />
                  </button>
                  <div className="flex gap-2">
                    {casosExito.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentCaso(index)}
                        className={`w-3 h-3 rounded-full transition-all ${
                          index === currentCaso ? 'bg-yellow-500 w-6' : 'bg-gray-600'
                        }`}
                      />
                    ))}
                  </div>
                  <button 
                    onClick={nextCaso}
                    className="w-12 h-12 rounded-full bg-gray-700 flex items-center justify-center hover:bg-gray-600"
                  >
                    <ChevronRight className="w-6 h-6" />
                  </button>
                </div>
                
                <p className="text-center text-gray-500 text-sm mt-2">
                  {currentCaso + 1} / {casosExito.length}
                </p>
              </div>
            </div>
          </div>
          
          <p className="mt-8 text-center text-gray-400 italic">
            ¿Quiere ver cómo aparecen nuestros clientes cuando sus propios clientes los buscan? 
            Se lo mostramos en vivo — en la reunión de diagnóstico, desde su propio celular.
          </p>
        </div>
      </section>

      {/* SECCIÓN 6 - FILTRO Y CTA - NEW FORMAT */}
      <section className="py-16 md:py-24 px-4">
        <div className="max-w-4xl mx-auto">
          {/* Filtro */}
          <div className="bg-gradient-to-br from-red-900/30 to-orange-900/30 rounded-3xl p-8 md:p-12 border border-red-800/50 mb-8">
            <div className="flex items-center justify-center gap-3 mb-4">
              <X className="w-8 h-8 text-red-500" />
              <h2 className="text-3xl md:text-4xl font-bold">
                Trabajamos con empresas que quieren crecer.
              </h2>
            </div>
            <p className="text-xl text-center text-gray-300 mb-6">
              No con todas.
            </p>
            <div className="bg-gray-800/80 rounded-xl p-4 text-center">
              <p className="text-lg font-medium text-red-400">
                Si busca al más barato, no somos su opción.
              </p>
            </div>
            <p className="text-center text-gray-400 mt-6">
              Nuestro modelo exige compromiso real. Nos involucramos a fondo en su negocio, estrategia y resultados.
            </p>
          </div>
          
          {/* CTA Principal */}
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Solicite su sesión de diagnóstico estratégico
            </h2>
            
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <span className="px-4 py-2 bg-green-900/30 text-green-400 rounded-full">✅ Sin costo</span>
              <span className="px-4 py-2 bg-blue-900/30 text-blue-400 rounded-full">✅ Sin compromiso</span>
              <span className="px-4 py-2 bg-purple-900/30 text-purple-400 rounded-full">✅ Sin propuesta genérica</span>
            </div>
            
            <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
              En 30 minutos le decimos exactamente dónde está su presencia digital hoy, qué está perdiendo y qué haríamos en los primeros 90 días.
            </p>
            
            <p className="text-gray-500 mb-8">
              Trabajamos con empresas listas para comprometerse con su crecimiento digital.
            </p>
            
            <Link 
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 shadow-lg hover:shadow-green-500/25"
            >
              <MessageCircle className="w-5 h-5" />
              Quiero mi sesión de diagnóstico
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Footer - vacío */}
      <footer className="py-8 px-4 border-t border-gray-800">
        <div className="max-w-4xl mx-auto text-center">
          {/* Footer vacío */}
        </div>
      </footer>
    </div>
  );
}