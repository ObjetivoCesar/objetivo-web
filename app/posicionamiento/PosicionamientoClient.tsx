'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { ArrowRight, CheckCircle, DollarSign, Award, TrendingUp, Clock, Map, Compass, Route, Telescope, Search, BarChart, Crown, Settings, Building, HelpCircle, Download, Target, ChevronDown } from 'lucide-react'
import { ExpandableText } from '@/components/ui/expandable-text'

const heroImages = [
  '/images/categorias/posicionamiento-web/auditoria-seo-hero.webp',
  '/images/categorias/posicionamiento-web/alianza-exclusiva-hero.webp'
];

const tabData = [
  {
    id: 'auditoria',
    slug: 'auditoria-seo-rediseno',
    title: 'Auditoría SEO y Rediseño Web',
    price: 'Desde $1,250',
    badge1: 'Inversión Única Desde',
    badge2: '$1,250 USD',
    h3: 'Auditoría SEO y Rediseño Web: Descubre Por Qué No Vendes Online',
    subtitle: 'Para PYMEs con sitio web existente que no genera tráfico ni ventas, necesitan diagnóstico técnico profesional y estrategia de contenido efectiva.',
    description: '¿Por qué tu competencia vende online y tú no, aunque tengas mejor producto? Porque ellos aparecen en Google y tú no. Esta auditoría analiza decenas de factores técnicos y de contenido que Google evalúa, identificando exactamente qué te impide aparecer en la primera página. Incluye rediseño UX optimizado para conversión. La mayoría de compradores buscan en Google: si no estás ahí, pierdes oportunidades reales.',
    benefits: [
      { text: 'Mayor Visibilidad: Aparece en primeros resultados cuando clientes buscan tu servicio' },
      { text: 'Tráfico Calificado: Visitantes interesados que buscan exactamente lo que vendes' },
      { text: 'Mayor Conversión: Rediseño UX optimizado para que visitantes compren/contacten' },
      { text: 'Errores Técnicos Resueltos: Identifica problemas de rastreo, velocidad, indexación' },
      { text: 'ROI Medible: Reportes mensuales con posiciones, tráfico y conversiones reales' },
    ],
    includes: {
        'Análisis Técnico Exhaustivo': [
            'Auditoría completa de factores SEO on-page y off-page',
            'Análisis de velocidad de carga y Core Web Vitals (Google ranking)',
            'Revisión estructura URLs, metadatos, headers, enlaces internos',
            'Identificación errores rastreo, indexación y penalizaciones Google'
        ],
        'Análisis de Contenido y Competencia': [
            'Investigación keywords con volumen de búsqueda real (SEMrush)',
            'Análisis competencia: qué keywords posicionan tus rivales',
            'Auditoría contenido existente y oportunidades de mejora',
            'Estrategia contenido: artículos pilares y clusters recomendados'
        ],
        'Rediseño UX/UI para Conversión': [
            'Rediseño de páginas clave orientado a acción del usuario',
            'Optimización formularios de contacto y CTAs estratégicos',
            'Mejora navegación y arquitectura de información',
            'Diseño responsive optimizado para móviles (pantallas pequeñas y smartphones)'
        ],
        'Entregables y Soporte': [
            'Documento ejecutivo PDF con hallazgos y plan priorizado',
            'Roadmap de implementación a 90 días con acciones concretas',
            'Sesión de presentación y capacitación (2 horas)',
            '30 días soporte para dudas de implementación'
        ]
    },
    centralBenefit: 'Deja de adivinar por qué no vendes. Obtén un diagnóstico profesional con plan de acción concreto que te posiciona en Google y multiplica conversiones. ROI promedio: inversión recuperada en 3-6 meses.',
    cta: 'Solicitar Auditoría SEO Gratuita',
    ctaSub: 'Sin compromiso · Sin tarjeta de crédito · Diagnóstico inicial en 48 horas'
  },
  {
    id: 'alianza',
    slug: 'alianza-exclusiva',
    title: 'Alianza Exclusiva Cero Inversión',
    price: '$500/mes x 24',
    badge1: 'Inversión Inicial $0',
    badge2: '$500 USD/mes x 24 meses',
    h3: 'Alianza Exclusiva: Tu E-commerce Completo Sin Riesgo Financiero',
    subtitle: 'Para artesanos, independientes y PYMEs que quieren vender online pero no tienen capital inicial para e-commerce profesional ni conocimientos técnicos.',
    description: '¿Te frena no tener el capital inicial para invertir en e-commerce profesional? Imagina tener tu tienda online completa, posicionada en Google y generando ventas, sin desembolsar una inversión alta de entrada. Asumimos desarrollo valorado en $1,550 USD: sitio e-commerce 30 productos, fotos profesionales, hosting 24 meses, estudio mercado y SEO continuo. Solo pagas $500 mensuales mientras vendemos juntos. ¿Mereces menos que las grandes empresas?',
    benefits: [
      { text: 'Inversión Inicial Cero: Sin riesgos financieros upfront, comenzamos nosotros' },
      { text: 'E-commerce Listo 30 Días: Tienda profesional con 30 productos y fotos incluidas' },
      { text: 'Posicionamiento Google Continuo: SEO mensual para aparecer en búsquedas relevantes' },
      { text: 'Propiedad Total 24 Meses: Al finalizar, 100% del sitio es tuyo sin restricciones' },
      { text: 'Exclusividad Sectorial: No trabajamos con tu competencia directa (contrato)' },
    ],
    includes: {
        'Desarrollo E-commerce Completo (Valorado $1,550)': [
            'Sitio e-commerce profesional con hasta 30 productos individuales',
            'Diseño UX/UI responsive optimizado para ventas móviles',
            'Carrito de compras optimizado para conversión',
            'Integración pagos: Tarjetas, PayPal, transferencias',
            'Sistema gestión inventario con capacitación incluida',
            'Dominio profesional personalizado (www.tunegocio.com)',
            'Hosting premium 24 meses incluido sin costo adicional',
            'Certificado SSL seguridad y protección datos'
        ],
        'Recursos y Contenido Profesional': [
            'Sesión fotográfica profesional de productos incluida',
            'Descripciones SEO optimizadas para cada producto',
            'Estudio de mercado y análisis competencia inicial',
            'Logo profesional o adaptación de existente',
            'Sesión video productos/negocio (opcional según caso)'
        ],
        'Plan Marketing y Posicionamiento 24 Meses': [
            'Estrategia SEO continua con keywords investigadas (SEMrush)',
            '5 artículos blog mensuales optimizados para Google',
            '20 posts profesionales redes sociales (Facebook/Instagram) mensual',
            '1 campaña publicitaria enfocada por mes (Facebook Ads/Google Ads)',
            'Página nueva por cada producto adicional que agregues',
            'Optimización SEO técnica continua (velocidad, estructura, enlaces)',
            'Informes mensuales detallados: tráfico, posiciones, conversiones',
            'Mantenimiento técnico completo: actualizaciones, seguridad, backups'
        ],
        'Garantías y Propiedad': [
            'Exclusividad sectorial contractual en tu zona geográfica',
            'Transferencia 100% propiedad tras 24 meses: sitio, dominio, contenido',
            'Sin restricciones técnicas ni dependencias post-contrato',
            'Opción renovación hosting económica ($50-80 anuales)',
            'Opción continuar servicios marketing basado en resultados'
        ]
    },
    centralBenefit: 'Forma una sociedad real donde asumimos riesgo financiero inicial y trabajamos juntos para generar ventas. Tú enfócate en tu negocio, nosotros en posicionarte en Google y atraer clientes. Al final, todo es tuyo sin ataduras.',
    cta: 'Agenda Llamada de Alianza Gratuita',
    ctaSub: 'Validemos viabilidad juntos · Sin compromiso · Cupos limitados por exclusividad sectorial'
  }
];

// Componente para el texto del hero con funcionalidad de expandir
interface HeroTextProps {
  fullText: string;
  shortText: string;
  className?: string;
}

const HeroText = ({ fullText, shortText, className = '' }: HeroTextProps) => {
  const [isExpanded, setIsExpanded] = useState(false);
  
  return (
    <div className={className}>
      <p className="text-lg md:text-xl max-w-2xl text-gray-200 leading-relaxed">
        {isExpanded ? fullText : (
          <>
            {shortText}
            <button 
              onClick={() => setIsExpanded(true)}
              className="text-blue-300 hover:text-white font-medium ml-1 focus:outline-none"
            >
              Seguir leyendo...
            </button>
          </>
        )}
      </p>
    </div>
  );
};

const faqData = [
    { q: '¿Cuánto dinero pierdo cada mes sin aparecer en Google?', a: 'Si tu sector tiene búsquedas mensuales en Google (ej: \'abogado Quito\') y no apareces en primera página, pierdes la oportunidad de conectar con la mayoría de esos clientes potenciales. Como estimación ilustrativa, perder decenas de clientes al mes equivale a miles de dólares en ingresos cedidos directamente a la competencia.' },
    { q: '¿Por qué mi competencia aparece primero si yo tengo mejores productos?', a: 'Porque Google no sabe que tu producto es mejor; lee código, contenido optimizado y velocidad de carga. Tu competencia invirtió en SEO técnico para cumplir con los factores que Google mide, mientras tú dependes de redes sociales donde no siempre te buscan activamente.' },
    { q: '¿Cuánto cuesta posicionamiento vs. seguir pagando anuncios eternamente?', a: 'Anuncios: requieren pago mensual continuo; al dejar de pagar, desapareces. SEO: Inversión en un activo permanente. Sigues apareciendo orgánicamente sin pagar por clic. Generalmente, los usuarios tienden a confiar más en resultados orgánicos que en anuncios pagados.' },
    { q: '¿Puedo hacer SEO yo mismo con tutoriales de YouTube?', a: 'SEO requiere dominar múltiples factores técnicos, herramientas profesionales, análisis y creación de contenido constante. Tu tiempo vale dinero: es cuestión de evaluar si prefieres invertirlo en aprender la técnica o en atender tu negocio.' },
    { q: '¿En cuánto tiempo veo resultados reales en posiciones y ventas?', a: 'El SEO es progresivo: primeras mejoras técnicas en 2-4 semanas, subidas de posiciones en 1-3 meses, y tráfico significativo en 3-6 meses.' },
    { q: '¿El SEO funciona para negocios locales pequeños?', a: 'Funciona muy bien. Es más accesible competir por términos específicos locales como \'abogado divorcios Quito\' que por palabras genéricas. Google prioriza búsquedas de intención local para que compitas de igual a igual en tu zona.' },
];

const HeroSlider = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent(prev => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden">
      {heroImages.map((src, index) => (
        <img
          key={index}
          src={src}
          alt={`Imagen de posicionamiento web ${index + 1}`}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${index === current ? 'opacity-100' : 'opacity-0'}`}
        />
      ))}
      <div className="absolute inset-0 bg-black/60"></div>
    </div>
  );
};

const ServicesTabs = () => {
    const [activeTab, setActiveTab] = useState(tabData[0].id);
    const [openAccordion, setOpenAccordion] = useState<string | null>(null);
    const activeContent = tabData.find(t => t.id === activeTab);

    useEffect(() => {
        setOpenAccordion(null); // Reset accordion on tab change
    }, [activeTab]);

    return (
        <div className="w-full max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row gap-4 md:gap-8">
                <div className="flex md:flex-col gap-3 overflow-x-auto pb-2 md:pb-0 md:w-1/4 scrollbar-hide">
                    {tabData.map(tab => (
                        <button 
                            key={tab.id}
                            onClick={() => setActiveTab(tab.id)}
                            className={`flex items-center justify-between w-full px-4 py-3 rounded-xl transition-all duration-300 text-left ${activeTab === tab.id ? 'bg-blue-600 text-white shadow-lg' : 'bg-gray-800 text-gray-300 hover:bg-gray-700'}`}>
                            <span className="font-medium text-sm md:text-base flex-grow">{tab.title}</span>
                            <span className={`text-xs font-bold px-2 py-1 rounded-full ml-2 flex-shrink-0 ${activeTab === tab.id ? 'bg-white/20' : 'bg-blue-100 text-blue-800'}`}>
                                {tab.price}
                            </span>
                        </button>
                    ))}
                </div>
                <div className="md:w-3/4 w-full min-w-0">
                    {activeContent && (
                        <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-gray-700">
                            <div className="flex items-center gap-4 mb-4 flex-wrap">
                                <span className="font-bold text-sm bg-blue-100 text-blue-800 px-3 py-1 rounded-full">{activeContent.badge1}</span>
                                <span className="font-bold text-sm bg-green-100 text-green-800 px-3 py-1 rounded-full">{activeContent.badge2}</span>
                            </div>
                            <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">{activeContent.h3}</h3>
                            <p className="text-blue-400 font-medium mb-4 italic">{activeContent.subtitle}</p>
                            <p className="text-gray-300 mb-6">{activeContent.description}</p>
                            
                            <div className="grid md:grid-cols-2 gap-6">
                                <div>
                                    <h4 className="font-bold text-lg mb-3 text-white">🎯 Beneficios Clave:</h4>
                                    <ul className="space-y-2 mb-6 text-gray-300">
                                        {activeContent.benefits.map((benefit, i) => (
                                            <li key={i} className="flex items-start"><CheckCircle className="w-5 h-5 text-green-400 mr-2 mt-1 flex-shrink-0"/><span>{benefit.text}</span></li>
                                        ))}
                                    </ul>
                                </div>
                                <div className="bg-gray-900/50 p-4 rounded-lg">
                                    <h4 className="font-bold text-lg mb-3 text-white">📦 Incluye:</h4>
                                    <div className="space-y-2">
                                        {Object.entries(activeContent.includes).map(([category, items]) => (
                                            <div key={category} className="border-b border-gray-700 last:border-b-0 pb-2 mb-2">
                                                <button onClick={() => setOpenAccordion(openAccordion === category ? null : category)} className="w-full flex justify-between items-center text-left font-semibold text-blue-400 text-sm">
                                                    <span>{category}</span>
                                                    <ChevronDown className={`w-4 h-4 transition-transform ${openAccordion === category ? 'rotate-180' : ''}`} />
                                                </button>
                                                {openAccordion === category && (
                                                    <ul className="list-disc pl-5 mt-2 space-y-1 text-sm text-gray-400">
                                                        {(items as string[]).map((item, i) => <li key={i}>{item}</li>)}
                                                    </ul>
                                                )}
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            <div className="bg-blue-900/50 border-l-4 border-blue-500 p-4 rounded-r-lg mt-6">
                                <h4 className="font-bold text-white">💎 Beneficio Central:</h4>
                                <p className="text-blue-300 italic">{activeContent.centralBenefit}</p>
                            </div>

                            <div className="text-center mt-8">
                                <Link href={`/servicios/posicionamiento/${activeContent.slug}`} className={`inline-block text-white font-bold py-4 px-10 rounded-lg text-xl transition-transform transform hover:scale-105 ${activeContent.id === 'alianza' ? 'bg-green-600 hover:bg-green-700' : 'bg-blue-600 hover:bg-blue-700'}`}>
                                    {activeContent.cta}
                                </Link>
                                <p className="text-xs text-gray-400 mt-2">{activeContent.ctaSub}</p>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}

const FaqAccordion = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    return (
        <div className="max-w-4xl mx-auto">
            {faqData.map((faq, index) => (
                <div key={index} className="border-b border-gray-200 py-4">
                    <button onClick={() => setOpenIndex(openIndex === index ? null : index)} className="w-full flex justify-between items-center text-left">
                        <h3 className="text-lg font-semibold text-gray-800">{faq.q}</h3>
                        <span className={`transform transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''}`}><ArrowRight /></span>
                    </button>
                    {openIndex === index && (
                        <div className="mt-4 text-gray-600">
                            <p>{faq.a}</p>
                        </div>
                    )}
                </div>
            ))}
        </div>
    );
}

export default function PosicionamientoPage() {
  return (
    <div className="bg-white text-gray-800">
      <section className="relative text-white h-screen">
        <HeroSlider />
        <div className="relative container mx-auto px-4 h-full flex flex-col justify-center">
            <div className="max-w-3xl">
                <h1 className="text-4xl md:text-5xl font-bold leading-tight shadow-text">¿Tu Competencia Aparece en Google y Tú No? Róbales el Tráfico.</h1>
                <div className="mt-6">
                  <HeroText 
                    fullText="La gran mayoría de tus clientes potenciales buscan en Google antes de comprar. Si no estás en la primera página, eres invisible. Con nuestra estrategia SEO, te posicionamos para capturar ese tráfico y convertirlo en ventas reales."
                    shortText="La gran mayoría de tus clientes potenciales buscan en Google antes de comprar..."
                  />
                </div>
                <a href="#servicios" className="mt-8 inline-block bg-blue-600 text-white font-bold py-4 px-10 rounded-lg text-xl hover:bg-blue-700 transition-transform transform hover:scale-105">
                    Descubre Cómo
                </a>
                <p className="mt-4 text-sm font-semibold text-gray-300">Búsquedas de Intención Directa · Resultados Medibles · PYMEs Ecuador</p>
            </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Por Qué Estar en Google No Es Opcional (Es Supervivencia)</h2>
            <p className="mt-6 text-lg text-gray-600 max-w-3xl mx-auto">
              ¿Cuántos clientes pierdes cada día porque tu competencia aparece primero en Google y tú no existes? La gran mayoría de compradores buscan en Google antes de tomar decisiones de compra. Si no apareces en la primera página, pierdes la oportunidad de captar a tu mercado potencial.
            </p>
          </div>
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-md text-center">
                  <Search className="h-10 w-10 text-blue-600 mb-3 mx-auto"/>
                  <h3 className="font-bold text-lg">Diagnóstico</h3>
                  <p className="text-gray-600 text-sm mt-1">Auditoría de factores técnicos y de contenido que afectan tu posición hoy.</p>
              </div>
              <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-md text-center">
                  <Target className="h-10 w-10 text-blue-600 mb-3 mx-auto"/>
                  <h3 className="font-bold text-lg">Objetivo</h3>
                  <p className="text-gray-600 text-sm mt-1">Primera página para keywords que generan ventas, no solo visitas.</p>
              </div>
              <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-md text-center">
                  <BarChart className="h-10 w-10 text-blue-600 mb-3 mx-auto"/>
                  <h3 className="font-bold text-lg">Estrategia</h3>
                  <p className="text-gray-600 text-sm mt-1">Plan técnico y de contenido para superar a tu competencia directa.</p>
              </div>
              <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-md text-center">
                  <Route className="h-10 w-10 text-blue-600 mb-3 mx-auto"/>
                  <h3 className="font-bold text-lg">Ejecución</h3>
                  <p className="text-gray-600 text-sm mt-1">Implementación continua con reportes mensuales de progreso medible.</p>
              </div>
          </div>
        </div>
      </section>

      {/* Sección de Video Interactivo */}
      <section className="py-8 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-6">
            <h2 className="text-xl font-bold text-gray-900 mb-2">
              Cómo Funciona Nuestra Estrategia
            </h2>
            <p className="text-gray-600">
              Mira cómo transformamos negocios como el tuyo
            </p>
          </div>
          
          <div className="max-w-2xl mx-auto">
            {/* Versión móvil - Vertical */}
            <div className="md:hidden">
              <div className="relative" style={{ paddingTop: '177.78%' /* 9:16 */ }}>
                <iframe
                  className="absolute top-0 left-0 w-full h-full rounded-lg shadow-md"
                  src="https://www.youtube.com/embed/0X52D1kspEc?autoplay=0&rel=0&showinfo=0"
                  title="Estrategia de Posicionamiento Web - César Reyes"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
            
            {/* Versión escritorio - Horizontal */}
            <div className="hidden md:block">
              <div className="relative" style={{ paddingTop: '56.25%' /* 16:9 */ }}>
                <iframe
                  className="absolute top-0 left-0 w-full h-full rounded-lg shadow-md"
                  src="https://www.youtube.com/embed/0X52D1kspEc?autoplay=0&rel=0&showinfo=0"
                  title="Estrategia de Posicionamiento Web - César Reyes"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
            <div className="p-6 md:p-8 bg-gradient-to-r from-blue-50 to-white">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                ¿Listo para aparecer en la primera página de Google?
              </h3>
              <p className="text-gray-700 mb-6">
                Este video te muestra exactamente cómo trabajamos para posicionar tu negocio en los primeros resultados de búsqueda. Desde el análisis técnico hasta la creación de contenido optimizado, te guiamos en cada paso del proceso.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a 
                  href="#servicios" 
                  className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg text-center transition-colors"
                >
                  Ver Planes de Posicionamiento
                </a>
                <a 
                  href="#contacto" 
                  className="bg-white border-2 border-blue-600 text-blue-600 hover:bg-blue-50 font-bold py-3 px-6 rounded-lg text-center transition-colors"
                >
                  Hablar con un Experto
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="servicios" className="py-16 md:py-24 bg-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-12">Soluciones de Posicionamiento: Desde Auditoría hasta Alianza Completa</h2>
          <ServicesTabs />
        </div>
      </section>

    </div>
  );
}
