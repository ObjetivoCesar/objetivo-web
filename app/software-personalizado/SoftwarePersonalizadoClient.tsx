'use client';

import React from 'react';
import Link from 'next/link';
import { 
  Code2, 
  Cpu, 
  UtensilsCrossed, 
  Hotel, 
  Briefcase, 
  MessageSquare, 
  Calculator, 
  CheckCircle2, 
  ArrowRight, 
  Sparkles, 
  Layers, 
  Database, 
  ShieldCheck, 
  Smartphone,
  ChevronRight,
  TrendingUp,
  Zap,
  Activity,
  Server,
  Terminal,
  Lock,
  Globe,
  MapPin,
  Building2,
  Users
} from 'lucide-react';

const soluciones = [
  {
    title: "Comandas Restaurantes",
    badge: "Gastronomía",
    href: "/comandas-restaurantes",
    icon: UtensilsCrossed,
    color: "from-amber-500 to-orange-500",
    border: "border-amber-500/30",
    desc: "Control total de mesas, pedidos a cocina ordenados por tiempo de espera, carta digital con QR propio y ventas del día en tu celular.",
    destacado: "Desde $50/mes (12 cuotas)",
    items: ["Pantalla de cocina en vivo", "Base de datos de comensales", "Carta digital autoadministrable"]
  },
  {
    title: "Fidelización de Clientes & CRM WhatsApp",
    badge: "Retención & Ventas",
    href: "/fidelizacion-clientes",
    icon: Users,
    color: "from-amber-500 to-emerald-500",
    border: "border-emerald-500/40",
    desc: "Convierte cada chat de WhatsApp en un cliente registrado. Agente 24/7 y recordatorios automáticos de garantías, mantenimientos y recompras.",
    destacado: "Ahorra +$5.000/año en atención",
    items: ["CRM que se llena solo desde WhatsApp", "Avisos automáticos de garantías y citas", "Historial completo de cada cliente"]
  },
  {
    title: "Software de Gestión (Servicios)",
    badge: "Empresas & Contratistas",
    href: "/software-gestion-servicios",
    icon: Briefcase,
    color: "from-blue-500 to-indigo-600",
    border: "border-blue-500/30",
    desc: "CRM y control operativo de campo. Cotizaciones dinámicas, agendamiento de técnicos con geolocalización GPS y trazabilidad de obras.",
    destacado: "Módulos desde $500",
    items: ["Seguimiento de cuadrillas GPS", "Cotizaciones interactivas WhatsApp", "Historial por cliente"]
  },
  {
    title: "Motor de Reservas para Hoteles",
    badge: "Hotelería & Turismo",
    href: "/motor-reservas-hotel",
    icon: Hotel,
    color: "from-emerald-500 to-teal-600",
    border: "border-emerald-500/30",
    desc: "Ventas directas sin pagar el 20% de comisión a plataformas. Calendario sincronizado, pasarela de pagos y confirmación por WhatsApp.",
    destacado: "0% comisiones a terceros",
    items: ["Motor de reservas directo", "Sincronización anti-overbooking", "Estructura para motores IA"]
  },
  {
    title: "Menú Digital Interactivo",
    badge: "Cafeterías & Bares",
    href: "/menu-digital",
    icon: Smartphone,
    color: "from-purple-500 to-pink-600",
    border: "border-purple-500/30",
    desc: "Carta visual interactiva, botón de pedido directo a WhatsApp, buscador por plato, fotos de alta resolución y actualización inmediata.",
    destacado: "Catálogo ágil en la nube",
    items: ["Cero apps pesadas para el cliente", "Integración con redes y mapas", "Precios en tiempo real"]
  },

  {
    title: "Sistema de Control Financiero",
    badge: "Microempresas & Pymes",
    href: "/sistema-de-contabilidad",
    icon: Calculator,
    color: "from-cyan-500 to-blue-600",
    border: "border-cyan-500/30",
    desc: "Control de ingresos, gastos, flujo de caja proyectado y cuentas por cobrar para que sepas la salud real de tu negocio.",
    destacado: "Claridad en tus números",
    items: ["Reportes de utilidad neta", "Cuentas por cobrar y pagar", "Sin complicaciones contables"]
  }
];

export default function SoftwarePersonalizadoClient() {
  return (
    <div className="min-h-screen bg-zinc-950 text-white selection:bg-amber-500 selection:text-black">
      
      {/* ══════════════════════════════════════════
          1. HERO FULLSCREEN LIMPIO (SIN OVERLAY OPACO, TEXTO CONCISO)
      ══════════════════════════════════════════ */}
      <section className="relative min-h-[90vh] md:min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden isolate">
        {/* Fondo Fotográfico Limpio Fullscreen */}
        <img
          src="/images/software-personalizado-hero.jpg"
          alt="Desarrollo de Software Personalizado en Ecuador"
          className="absolute inset-0 w-full h-full object-cover object-center"
          style={{ zIndex: -2 }}
        />
        {/* Sutiles sombras de degradado para legibilidad del texto sin apagar la imagen */}
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/40 to-black/20" style={{ zIndex: -1 }} />
        <div className="absolute inset-0 bg-gradient-to-r from-zinc-950/80 via-zinc-950/30 to-transparent" style={{ zIndex: -1 }} />

        <div className="container mx-auto px-4 md:px-8 w-full">
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Columna Texto Hero Conciso */}
            <div className="lg:col-span-7 space-y-4 md:space-y-5 max-w-xl">
              <div className="inline-flex items-center gap-2 bg-black/60 border border-amber-500/40 rounded-full px-3.5 py-1 backdrop-blur-md">
                <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                <span className="text-amber-300 text-[11px] font-bold uppercase tracking-wider">
                  Ingeniería de Eficiencia · Ecuador
                </span>
              </div>

              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white leading-[1.1] tracking-tight drop-shadow-md">
                Software a la medida de tu negocio,{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-orange-400 to-amber-200">
                  no al revés.
                </span>
              </h1>

              <p className="text-base sm:text-lg text-zinc-100 font-medium leading-relaxed drop-shadow">
                Sin plantillas rígidas ni mensualidades en dólares que no resuelven. Desarrollamos herramientas que controlan tu operación en tiempo real.
              </p>

              <div className="pt-1 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                <a
                  href="https://wa.me/593963410409?text=Hola%20C%C3%A9sar%2C%20quiero%20conversar%20sobre%20un%20Software%20Personalizado%20para%20mi%20empresa"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2.5 bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-400 hover:to-orange-400 text-black font-extrabold px-7 py-3.5 rounded-full text-base transition-all duration-300 shadow-xl shadow-amber-500/20 hover:scale-105 active:scale-95 text-center"
                >
                  <Zap className="w-5 h-5 shrink-0" />
                  <span>Cotizar mi software a medida</span>
                </a>
                <Link
                  href="#soluciones"
                  className="inline-flex items-center justify-center gap-2 bg-black/60 hover:bg-zinc-800 border border-zinc-700/80 backdrop-blur-md text-zinc-200 font-bold px-6 py-3.5 rounded-full text-base transition-all text-center"
                >
                  <span>Ver soluciones</span>
                  <ChevronRight className="w-4 h-4" />
                </Link>
              </div>

              {/* Badges Rápidos Compactos */}
              <div className="pt-4 grid grid-cols-3 gap-2.5 max-w-md">
                <div className="bg-black/60 backdrop-blur-md border border-zinc-700/70 rounded-xl p-2.5 text-center">
                  <p className="text-lg sm:text-xl font-black text-amber-400">100%</p>
                  <p className="text-[9px] text-zinc-300 font-medium">A tu medida</p>
                </div>
                <div className="bg-black/60 backdrop-blur-md border border-zinc-700/70 rounded-xl p-2.5 text-center">
                  <p className="text-lg sm:text-xl font-black text-cyan-400">0%</p>
                  <p className="text-[9px] text-zinc-300 font-medium">Comisiones extra</p>
                </div>
                <div className="bg-black/60 backdrop-blur-md border border-zinc-700/70 rounded-xl p-2.5 text-center">
                  <p className="text-lg sm:text-xl font-black text-emerald-400">24/7</p>
                  <p className="text-[9px] text-zinc-300 font-medium">En la nube</p>
                </div>
              </div>
            </div>

            {/* Columna Componente Dinámico Holográfico */}
            <div className="lg:col-span-5 relative hidden sm:block mt-6 lg:mt-0">
              <div className="absolute inset-0 bg-gradient-to-tr from-amber-500/20 to-cyan-500/20 blur-[80px] rounded-full -z-10" />

              <div className="bg-black/80 border border-zinc-700/80 rounded-3xl p-5 shadow-2xl backdrop-blur-xl space-y-3 transform hover:-translate-y-1 transition-transform duration-300">
                <div className="flex items-center justify-between border-b border-zinc-800 pb-2.5">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                    <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                    <span className="text-[11px] text-zinc-400 font-mono ml-2">architecture.core.ts</span>
                  </div>
                  <span className="text-[9px] text-emerald-400 font-mono bg-emerald-950/60 border border-emerald-500/30 px-2 py-0.5 rounded">
                    LIVE SYSTEM
                  </span>
                </div>

                <div className="space-y-1.5 font-mono text-[11px] leading-relaxed">
                  <p className="text-zinc-500">// Arquitectura sin plantillas</p>
                  <p className="text-cyan-400">const <span className="text-white">engine</span> = new <span className="text-amber-400">CustomApp</span>({'{'}</p>
                  <p className="text-zinc-300 pl-3">client: <span className="text-emerald-300">&quot;Tu Empresa Ecuador&quot;</span>,</p>
                  <p className="text-zinc-300 pl-3">database: <span className="text-emerald-300">&quot;Supabase Postgres Cloud&quot;</span>,</p>
                  <p className="text-zinc-300 pl-3">payments: [<span className="text-amber-300">&quot;PayPhone&quot;</span>, <span className="text-amber-300">&quot;Transferencia&quot;</span>],</p>
                  <p className="text-cyan-400">{'}'});</p>
                </div>

                <div className="bg-gradient-to-r from-amber-500/10 to-orange-500/10 border border-amber-500/30 rounded-xl p-3 flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-lg bg-amber-500/20 border border-amber-500/40 flex items-center justify-center text-amber-400">
                      <Activity className="w-4 h-4 animate-pulse" />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-white">Eficiencia Operativa</p>
                      <p className="text-[9px] text-zinc-400">+45% tiempo ahorrado</p>
                    </div>
                  </div>
                  <span className="text-xs font-black text-amber-400 font-mono">99.9%</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          2. CATÁLOGO DE SOLUCIONES ESPECIALIZADAS
      ══════════════════════════════════════════ */}
      <section className="py-24 bg-zinc-950 relative border-t border-zinc-900" id="soluciones">
        <div className="container mx-auto px-4 md:px-8 max-w-6xl">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <span className="text-amber-400 text-xs font-bold uppercase tracking-widest bg-amber-500/10 border border-amber-500/20 px-3.5 py-1.5 rounded-full">
              Ecosistema de soluciones a medida
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mt-4 leading-tight">
              Elige la herramienta adecuada para tu industria
            </h2>
            <p className="text-zinc-400 text-base mt-3">
              Cada producto ha sido probado en negocios reales de Ecuador para resolver cuellos de botella operativos específicos.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {soluciones.map((sol, idx) => {
              const Icon = sol.icon;
              return (
                <div 
                  key={idx}
                  className="group bg-zinc-900/70 border border-zinc-800 hover:border-zinc-700 rounded-3xl p-7 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-black/70 relative overflow-hidden"
                >
                  <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${sol.color} opacity-80`} />

                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${sol.color} p-0.5`}>
                        <div className="w-full h-full bg-zinc-950 rounded-[14px] flex items-center justify-center text-white">
                          <Icon className="w-6 h-6" />
                        </div>
                      </div>
                      <span className="text-[11px] font-bold text-zinc-300 bg-zinc-800/80 border border-zinc-700/60 px-3 py-1 rounded-full">
                        {sol.badge}
                      </span>
                    </div>

                    <div>
                      <h3 className="text-xl font-bold text-white group-hover:text-amber-300 transition-colors">
                        {sol.title}
                      </h3>
                      <p className="text-xs font-semibold text-amber-400 mt-0.5">
                        {sol.destacado}
                      </p>
                    </div>

                    <p className="text-zinc-400 text-sm leading-relaxed">
                      {sol.desc}
                    </p>

                    <div className="border-t border-zinc-800/80 pt-4 space-y-2">
                      {sol.items.map((it, i) => (
                        <div key={i} className="flex items-center gap-2 text-xs text-zinc-300">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                          <span>{it}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-6">
                    <Link
                      href={sol.href}
                      className="inline-flex items-center justify-between w-full bg-zinc-800/80 hover:bg-zinc-800 text-white font-bold px-5 py-3 rounded-xl text-sm transition-colors group-hover:bg-amber-500 group-hover:text-black"
                    >
                      <span>Conocer solución</span>
                      <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          3. SECCIÓN FOTO FULLSCREEN CON EFECTO PARALLAX
      ══════════════════════════════════════════ */}
      <section className="relative py-28 overflow-hidden border-t border-zinc-900">
        <div 
          className="absolute inset-0 -z-20 bg-cover bg-center bg-no-repeat bg-fixed scale-105 opacity-35"
          style={{ backgroundImage: `url('/images/comandas-salon-restaurante.jpg')` }}
        />
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-zinc-950 via-zinc-950/90 to-zinc-950/70" />

        <div className="container mx-auto px-4 md:px-8 max-w-5xl">
          <div className="grid lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7 space-y-5">
              <span className="text-amber-400 text-xs font-bold uppercase tracking-widest bg-amber-500/10 border border-amber-500/20 px-3.5 py-1.5 rounded-full">
                Enfoque directo al terreno
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white leading-tight">
                Software creado para el mundo real, no para el escritorio.
              </h2>
              <p className="text-zinc-300 text-base leading-relaxed">
                Nuestras plataformas operan desde un celular en la mano de un mesero en sala, el cocinero en el calor de los fogones o el técnico haciendo mantenimiento en campo.
              </p>
              <div className="pt-2">
                <Link
                  href="/comandas-restaurantes"
                  className="inline-flex items-center gap-2 text-amber-400 hover:text-amber-300 font-bold text-sm underline underline-offset-4"
                >
                  <span>Ver ejemplo en vivo: Comandas para Restaurantes</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            <div className="lg:col-span-5 grid grid-cols-2 gap-4">
              <div className="bg-zinc-900/90 backdrop-blur-md border border-zinc-800 rounded-2xl p-5 text-center">
                <p className="text-3xl font-black text-amber-400">12</p>
                <p className="text-xs text-zinc-300 font-bold mt-1">Cuotas sin intereses</p>
                <p className="text-[10px] text-zinc-500 mt-0.5">Vía PayPhone Ecuador</p>
              </div>
              <div className="bg-zinc-900/90 backdrop-blur-md border border-zinc-800 rounded-2xl p-5 text-center">
                <p className="text-3xl font-black text-emerald-400">0%</p>
                <p className="text-xs text-zinc-300 font-bold mt-1">Dependencia técnica</p>
                <p className="text-[10px] text-zinc-500 mt-0.5">Controlas tus precios tú</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          4. POR QUÉ SOFTWARE A MEDIDA
      ══════════════════════════════════════════ */}
      <section className="py-24 bg-zinc-950 border-t border-zinc-900">
        <div className="container mx-auto px-4 md:px-8 max-w-5xl">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-6">
              <span className="text-amber-400 text-xs font-bold uppercase tracking-widest bg-amber-500/10 border border-amber-500/20 px-3.5 py-1.5 rounded-full">
                Sin dolores de cabeza
              </span>
              <h2 className="text-3xl sm:text-4xl font-black text-white leading-tight">
                Las plataformas grandes cobran en dólares por usuario y te dejan solo.
              </h2>
              <p className="text-zinc-300 text-base leading-relaxed">
                Muchos negocios en Ecuador contratan software internacional creyendo que resolverá su desorden, y terminan frustrados con sistemas en inglés, facturas mensuales en aumento y un soporte por correo que tarda 5 días en responder.
              </p>
              <p className="text-zinc-400 text-sm leading-relaxed">
                Nosotros construimos lo que tu negocio necesita hoy: directo al grano, en español, con tus métodos de cobro locales y soporte cercano por WhatsApp.
              </p>
            </div>

            <div className="lg:col-span-6 space-y-4">
              {[
                {
                  titulo: "Propiedad real de tus datos",
                  detalle: "Tus clientes, tus ventas y tus registros son tuyos. No te cobramos por exportar lo que tú mismo ingresaste."
                },
                {
                  titulo: "Adaptado a tu flujo operativo",
                  detalle: "Si tus técnicos cobran en campo o tu cocina saca comandas por tiempo, el software se programa respetando tu estilo de trabajo."
                },
                {
                  titulo: "Pagos locales y transparentes",
                  detalle: "Precios claros en dólares, sin cobros ocultos por usuario adicional ni comisiones sorpresa a fin de mes."
                }
              ].map((c, i) => (
                <div key={i} className="bg-zinc-900/60 border border-zinc-800 rounded-2xl p-6">
                  <h3 className="font-bold text-white text-base mb-1.5 flex items-center gap-2">
                    <ShieldCheck className="w-5 h-5 text-amber-400 shrink-0" />
                    {c.titulo}
                  </h3>
                  <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed pl-7">
                    {c.detalle}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          5. PRESENCIA Y COBERTURA EN ECUADOR
      ══════════════════════════════════════════ */}
      <section className="py-20 bg-zinc-900/60 border-t border-zinc-900">
        <div className="container mx-auto px-4 md:px-8 max-w-6xl">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-amber-400 text-xs font-bold uppercase tracking-widest bg-amber-500/10 border border-amber-500/20 px-3.5 py-1.5 rounded-full">
              Soporte Local y Despliegue Nacional
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-white mt-4 leading-tight">
              Software personalizado para las principales ciudades de Ecuador
            </h2>
            <p className="text-zinc-400 text-sm sm:text-base mt-3">
              Desarrollamos soluciones a medida adaptadas a las dinámicas comerciales y operativas de cada región, con soporte presencial o 100% remoto.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                ciudad: "Loja",
                tag: "Sede Principal",
                desc: "Soporte presencial, consultoría directa en tu negocio y desarrollo de sistemas a medida para pymes del sur del país.",
                enlace: "/software-personalizado/loja",
                destacado: "border-amber-500/40 bg-gradient-to-b from-amber-500/10 to-zinc-900/80"
              },
              {
                ciudad: "Quito",
                tag: "Corporativo & B2B",
                desc: "Sistemas empresariales de gestión, automatización de procesos internos e integración de facturación electrónica SRI.",
                enlace: "/software-personalizado/quito",
                destacado: "border-zinc-800 bg-zinc-900/70"
              },
              {
                ciudad: "Guayaquil",
                tag: "Comercio & Logística",
                desc: "Software para distribuidoras, control de inventario en tiempo real, puntos de venta y cobros con PayPhone / Deuna.",
                enlace: "/software-personalizado/guayaquil",
                destacado: "border-zinc-800 bg-zinc-900/70"
              },
              {
                ciudad: "Cuenca",
                tag: "Producción & Servicios",
                desc: "Herramientas de control de talleres, seguimiento de órdenes, hostelería y gastronomía de alto flujo comensal.",
                enlace: "/software-personalizado/cuenca",
                destacado: "border-zinc-800 bg-zinc-900/70"
              }
            ].map((c, i) => (
              <Link
                key={i}
                href={c.enlace}
                className={`p-6 rounded-2xl border transition-all duration-300 hover:scale-105 group flex flex-col justify-between ${c.destacado}`}
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-bold text-amber-400 uppercase tracking-wider">{c.tag}</span>
                    <MapPin className="w-4 h-4 text-zinc-400 group-hover:text-amber-400 transition-colors" />
                  </div>
                  <h3 className="text-xl font-black text-white group-hover:text-amber-300 transition-colors">
                    {c.ciudad}
                  </h3>
                  <p className="text-xs text-zinc-400 mt-2.5 leading-relaxed">
                    {c.desc}
                  </p>
                </div>
                <div className="pt-4 mt-4 border-t border-zinc-800/80 flex items-center gap-1.5 text-xs font-bold text-amber-400">
                  <span>Ver detalles locales</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            ))}
          </div>

          {/* Integraciones locales Ecuatorianas */}
          <div className="mt-12 bg-black/50 border border-zinc-800/80 rounded-2xl p-6 md:p-8">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
              <div>
                <p className="text-xs font-bold text-amber-400 uppercase tracking-widest">Ecosistema Financiero Ecuador</p>
                <h3 className="text-lg md:text-xl font-bold text-white mt-1">
                  100% integrado con los sistemas de pago y facturación del país
                </h3>
                <p className="text-xs text-zinc-400 mt-1">
                  Facturación Electrónica SRI (.p12, XML firmados), PayPhone, Deuna (Banco Pichincha), Placetopay y conciliación bancaria local.
                </p>
              </div>
              <div className="flex flex-wrap items-center justify-center gap-2 shrink-0">
                <span className="px-3 py-1.5 bg-zinc-800/80 border border-zinc-700/60 rounded-lg text-xs font-semibold text-zinc-200">Facturación SRI</span>
                <span className="px-3 py-1.5 bg-zinc-800/80 border border-zinc-700/60 rounded-lg text-xs font-semibold text-zinc-200">PayPhone</span>
                <span className="px-3 py-1.5 bg-zinc-800/80 border border-zinc-700/60 rounded-lg text-xs font-semibold text-zinc-200">Deuna</span>
                <span className="px-3 py-1.5 bg-zinc-800/80 border border-zinc-700/60 rounded-lg text-xs font-semibold text-zinc-200">PostgreSQL</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          6. CTA FINAL
      ══════════════════════════════════════════ */}
      <section className="py-24 bg-gradient-to-b from-zinc-950 to-zinc-900 border-t border-zinc-900 text-center">
        <div className="container mx-auto px-4 md:px-8 max-w-3xl space-y-6">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white leading-tight">
            ¿Tienes una necesidad específica en tu empresa?
          </h2>
          <p className="text-zinc-300 text-base max-w-xl mx-auto leading-relaxed">
            Cuéntanos cómo opera tu negocio y te asesoramos sobre el desarrollo exacto que necesitas, sin compromiso.
          </p>
          <div className="pt-2">
            <a
              href="https://wa.me/593963410409?text=Hola%20C%C3%A9sar%2C%20quiero%20conversar%20sobre%20un%20software%20a%20medida%20para%20mi%20negocio"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2.5 bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-400 hover:to-orange-400 text-black font-black px-10 py-5 rounded-full text-lg shadow-xl shadow-amber-500/20 hover:scale-105 transition-all duration-300"
            >
              <MessageSquare className="w-5 h-5 shrink-0" />
              <span>Hablar con César por WhatsApp</span>
            </a>
          </div>
          <p className="text-xs text-zinc-500 pt-4">
            César Reyes Jaramillo · Consultoría y Software a Medida en Ecuador
          </p>
        </div>
      </section>

    </div>
  );
}
