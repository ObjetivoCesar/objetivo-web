'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { ArrowRight, CheckCircle, ChevronRight, TrendingUp, BarChart3, Users, Rocket, Target, Zap, Brain, FileText, Headphones, Calendar, MessageCircle, Search, Globe, Award, X, Lightbulb, Layers, Gauge } from 'lucide-react';
import { ExpandableText } from '@/components/ui/expandable-text';

// --- DATA --- //

// Video real de César - reemplazar ID si es diferente
const heroVideoUrl = "https://www.youtube.com/embed/YOUR_VIDEO_ID";

// 3 Cards de servicios agrupados
const servicioCards = [
  {
    icon: Lightbulb,
    title: "Estrategia",
    items: ["Diagnóstico de su empresa en digital", "Estrategia de posicionamiento a medida", "Reportes ejecutivos mensuales"]
  },
  {
    icon: Layers,
    title: "Ejecución",
    items: ["Contenido que posiciona", "Presencia digital construida", "Automatización que trabaja 24/7"]
  },
  {
    icon: Gauge,
    title: "Crecimiento",
    items: ["Un solo objetivo: sus ventas", "Inteligencia artificial aplicada", "Un estratega permanente en su equipo"]
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

const whatsappUrl = "https://wa.me/593963410409?text=Hola%20C%C3%A9sar,%20me%20interesa%20el%20Departamento%20Digital%20de%20Posicionamiento";

export default function DepartamentoDigitalPosicionamientoClient() {
  const [currentCard, setCurrentCard] = useState(0);
  const [currentCaso, setCurrentCaso] = useState(0);

  const nextCard = () => setCurrentCard((prev) => (prev + 1) % servicioCards.length);
  const prevCard = () => setCurrentCard((prev) => (prev - 1 + servicioCards.length) % servicioCards.length);
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
            Usted ya sabe lo que necesita. El problema siempre fue encontrar a alguien que realmente lo ejecute.
          </h2>
          
          {/* Video embed real de César */}
          <div className="max-w-3xl mx-auto mb-8 rounded-2xl overflow-hidden border border-gray-700 bg-gray-900 aspect-video">
            <iframe
              src={heroVideoUrl + "?autoplay=1&mute=1"}
              title="Video de César"
              className="w-full h-full"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
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

      {/* SECCIÓN 1 - EL PROBLEMA - NUEVA REDACCIÓN */}
      <section className="py-16 md:py-24 px-4 bg-gray-900/50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
            ¿Cuántas veces pensó: necesito a alguien que se haga cargo de esto, no que me deje el trabajo a mí?
          </h2>
          
          <p className="text-center text-xl text-gray-400 mb-8">
            Si esa pregunta le suena familiar, esta página es para usted.
          </p>
          
          <div className="space-y-4 text-lg text-gray-300">
            <div className="bg-gray-800/50 p-4 rounded-xl border-l-4 border-blue-500">
              <p>Ha contratado personas que publican, pero no posicionan.</p>
            </div>
            <div className="bg-gray-800/50 p-4 rounded-xl border-l-4 border-blue-500">
              <p>Ha pagado por presencia digital que nadie encuentra.</p>
            </div>
            <div className="bg-gray-800/50 p-4 rounded-xl border-l-4 border-blue-500">
              <p>Ha escuchado propuestas que suenan bien y desaparecen al mes siguiente.</p>
            </div>
          </div>
          
          <div className="mt-12 p-8 rounded-2xl bg-gray-800 border border-gray-700">
            <h3 className="text-xl font-bold mb-4">Un community manager publica contenido. Nosotros construimos posición.</h3>
            <p className="text-gray-300">
              La diferencia es esta: publicar es aparecer. Posicionarse es que cuando su cliente ideal busca lo que usted ofrece, lo encuentra a usted primero - y confía en lo que ve.
            </p>
            <p className="text-gray-300 mt-4">
              Para llegar ahí se necesita estrategia, tecnología, contenido, análisis y ejecución constante. No una persona con un celular. <strong className="text-white">Un departamento completo.</strong>
            </p>
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
          
          {/* Párrafo puente */}
          <div className="text-lg text-gray-300 mb-8 leading-relaxed">
            <p className="mb-4">
              En algún momento usted consideró contratar a alguien para manejar su presencia digital. Quizás pensó en una agencia. Quizás en un empleado interno. Quizás en darle esa responsabilidad a alguien de confianza.
            </p>
            <p className="mb-4">
              Ninguna de esas opciones le dio lo que realmente necesitaba: alguien que entienda su negocio, diseñe la estrategia y la ejecute sin que usted tenga que supervisar cada paso.
            </p>
            <p>
              Eso es exactamente lo que hacemos.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="space-y-6 text-lg text-gray-300">
              <div className="flex items-start gap-3">
                <ArrowRight className="w-6 h-6 text-blue-400 flex-shrink-0 mt-1" />
                <p>Llegamos a su empresa, entendemos su mercado, su competencia y sus objetivos. Diseñamos la estrategia. Y la ejecutamos todos los días.</p>
              </div>
              <div className="flex items-start gap-3">
                <ArrowRight className="w-6 h-6 text-blue-400 flex-shrink-0 mt-1" />
                <p>Sin que usted tenga que explicarnos cómo funciona internet. Sin perseguirnos. Sin aprender herramientas que no son su negocio.</p>
              </div>
              <div className="flex items-start gap-3">
                <ArrowRight className="w-6 h-6 text-blue-400 flex-shrink-0 mt-1" />
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

      {/* SECCIÓN 3 - QUÉ INCLUYE - 3 CARDS */}
      <section className="py-16 md:py-24 px-4 bg-gray-900/50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            Lo que hace su Departamento Digital de Posicionamiento y Ejecución
          </h2>
          
          {/* Desktop: 3 cards | Mobile: Carousel */}
          <div className="mt-12">
            {/* Desktop: 3 Cards Grid */}
            <div className="hidden md:grid md:grid-cols-3 gap-6">
              {servicioCards.map((card, index) => (
                <div 
                  key={index}
                  className="p-8 rounded-2xl bg-gray-800/50 border border-gray-700 hover:border-blue-500/50 transition-all duration-300"
                >
                  <card.icon className="w-12 h-12 text-blue-400 mb-4" />
                  <h3 className="text-2xl font-bold mb-4">{card.title}</h3>
                  <ul className="space-y-3">
                    {card.items.map((item, i) => (
                      <li key={i} className="flex items-start gap-2 text-gray-300">
                        <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            
            {/* Mobile Carousel */}
            <div className="md:hidden">
              <div className="relative">
                <div className="overflow-hidden">
                  <div 
                    className="flex transition-transform duration-300"
                    style={{ transform: `translateX(-${currentCard * 100}%)` }}
                  >
                    {servicioCards.map((card, index) => (
                      <div 
                        key={index}
                        className="w-full flex-shrink-0 px-2"
                      >
                        <div className="p-8 rounded-2xl bg-gray-800/50 border border-gray-700">
                          <card.icon className="w-12 h-12 text-blue-400 mb-4" />
                          <h3 className="text-2xl font-bold mb-4">{card.title}</h3>
                          <ul className="space-y-3">
                            {card.items.map((item, i) => (
                              <li key={i} className="flex items-start gap-2 text-gray-300">
                                <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                                <span>{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                
                {/* Carousel Controls */}
                <div className="flex items-center justify-between mt-4">
                  <button 
                    onClick={prevCard}
                    className="w-12 h-12 rounded-full bg-gray-700 flex items-center justify-center hover:bg-gray-600"
                  >
                    <ChevronRight className="w-6 h-6 rotate-180" />
                  </button>
                  <div className="flex gap-2">
                    {servicioCards.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentCard(index)}
                        className={`w-3 h-3 rounded-full transition-all ${
                          index === currentCard ? 'bg-blue-500 w-6' : 'bg-gray-600'
                        }`}
                      />
                    ))}
                  </div>
                  <button 
                    onClick={nextCard}
                    className="w-12 h-12 rounded-full bg-gray-700 flex items-center justify-center hover:bg-gray-600"
                  >
                    <ChevronRight className="w-6 h-6" />
                  </button>
                </div>
                
                <p className="text-center text-gray-500 text-sm mt-2">
                  {currentCard + 1} / {servicioCards.length}
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
          
          {/* Técnica de anticipación */}
          <div className="text-lg text-gray-300 mb-8 text-center italic">
            <p className="mb-4">Hay tres formas en que las empresas suelen resolver esto.</p>
            <p className="mb-2">La primera es contratar internamente - costosa y lenta.</p>
            <p className="mb-2">La segunda es contratar una agencia - cara y genérica.</p>
            <p>La tercera... es la que usted está leyendo ahora.</p>
          </div>
          
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

      {/* SECCIÓN 5B - FOTO DE CESAR */}
      <section className="py-16 px-4 bg-gray-900">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="order-2 md:order-1">
              <img 
                src="/images/cesar_trabajando.png" 
                alt="César Reyes" 
                className="rounded-2xl shadow-2xl"
              />
            </div>
            <div className="order-1 md:order-2 text-center md:text-left">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">
                El que le está hablando ya hizo esto antes.
              </h2>
              <p className="text-lg text-gray-300 mb-4">
                He construido presencia digital para empresas en Ecuador. Las he visto posicionarse, crecer y captar clientes que antes no sabían que existían.
              </p>
              <p className="text-lg text-gray-300">
                No le vendo humo. Le muestro resultados. Y si no los hay, se lo digo antes de que gaste un centavo.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECCIÓN 5C - ECUADOR */}
      <section className="py-12 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-xl text-gray-400 italic">
            Trabajamos con empresas en todo Ecuador. La estrategia no tiene fronteras geográficas. Imagínelo en su ciudad.
          </p>
        </div>
      </section>

      {/* SECCIÓN 6 - FILTRO Y CTA */}
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
              <span className="px-4 py-2 bg-green-900/30 text-green-400 rounded-full">Sin costo</span>
              <span className="px-4 py-2 bg-blue-900/30 text-blue-400 rounded-full">Sin compromiso</span>
              <span className="px-4 py-2 bg-purple-900/30 text-purple-400 rounded-full">Sin propuesta genérica</span>
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

      {/* CTA FLOTANTE MOBILE */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 p-4 bg-gray-950/95 border-t border-gray-800 z-50">
        <Link 
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-xl font-bold transition-all duration-300"
        >
          <MessageCircle className="w-5 h-5" />
          Quiero mi sesión de diagnóstico
        </Link>
      </div>
    </div>
  );
}