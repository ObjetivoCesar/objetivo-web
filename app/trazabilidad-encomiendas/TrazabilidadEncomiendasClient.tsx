'use client';

import React, { useState } from 'react';
import {
  Package, QrCode, Truck, ShieldCheck, Bell, KeyRound, RefreshCw,
  AlertTriangle, BarChart3, Zap, CheckCircle2,
  Sparkles, Smartphone, ArrowRight, FileText, Check, Phone, Mail,
  Radio, Shield, Eye, ChevronLeft, ChevronRight, Cpu, Layers
} from 'lucide-react';

export default function TrazabilidadEncomiendasClient() {
  const [activeModuleTab, setActiveModuleTab] = useState<'operativo' | 'gestion'>('operativo');
  const [selectedModuleId, setSelectedModuleId] = useState<number>(1);

  // Estados de carruseles en móvil (control exacto de tarjeta activa)
  const [mobileStepIndex, setMobileStepIndex] = useState<number>(0);
  const [mobileModuleIndex, setMobileModuleIndex] = useState<number>(0);
  const [mobileDiffIndex, setMobileDiffIndex] = useState<number>(0);

  // Touch tracking para swipe profesional en móvil
  const [touchStartX, setTouchStartX] = useState<number | null>(null);

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStartX(e.touches[0].clientX);
  };

  const handleTouchEnd = (
    e: React.TouchEvent,
    currentIndex: number,
    setIndex: (val: number | ((prev: number) => number)) => void,
    totalLength: number
  ) => {
    if (touchStartX === null) return;
    const touchEndX = e.changedTouches[0].clientX;
    const diff = touchStartX - touchEndX;

    // Umbral de 40px para swipe
    if (diff > 40) {
      // Swipe hacia la izquierda -> avanzar
      setIndex((prev) => (prev < totalLength - 1 ? prev + 1 : 0));
    } else if (diff < -40) {
      // Swipe hacia la derecha -> retroceder
      setIndex((prev) => (prev > 0 ? prev - 1 : totalLength - 1));
    }
    setTouchStartX(null);
  };

  const modules = [
    {
      id: 1,
      category: 'operativo',
      title: '1. Registro & Etiquetado QR en Ventanilla',
      shortTitle: 'Admisión & Sticker QR',
      badge: 'Admisión',
      desc: 'Ingreso rápido de encomiendas con impresión instantánea de comprobante para el cliente y sticker térmico con código QR único para el bulto.',
      features: [
        'Registro con datos completos: remitente, destinatario, cédulas, teléfonos, origen, destino y cálculo de tarifa.',
        'Generación de código QR irrepetible por bulto/paquete.',
        'Impresión térmica dual inmediata: Comprobante cliente + Etiqueta autoadhesiva.',
        'Soporte multi-bulto bajo una sola guía (ej. bulto 1 de 3, 2 de 3).'
      ]
    },
    {
      id: 2,
      category: 'operativo',
      title: '2. Conciliación & Despacho al Bus (Cero Errores)',
      shortTitle: 'Conciliación de Andén',
      badge: 'Carga Crítica',
      desc: 'El corazón de la seguridad operativa: ningún bus sale de la terminal con carga sin verificar.',
      features: [
        'Escaneo bulto por bulto al maletero con smartphone o lector láser.',
        'Bloqueo acústico y visual preventivo si un bulto no pertenece a la ruta o unidad.',
        'Generación automática de Manifiesto de Carga Digital con firma de despacho.',
        'Alerta en tiempo real a las agencias de destino intermedio sobre la carga en camino.'
      ]
    },
    {
      id: 3,
      category: 'operativo',
      title: '3. Trazabilidad en Paradas & Tránsitos Intermedios',
      shortTitle: 'Tránsito & Descargas',
      badge: 'En Ruta',
      desc: 'Control estricto en cada parada de la ruta para descargas y transferencias seguras.',
      features: [
        'Escaneo obligatorio de descarga: solo se bajan los paquetes asignados a la parada.',
        'Alerta inmediata de extravío o bulto faltante con ubicación GPS de la parada.',
        'Reasignación o trasbordo autorizado ante contingencias mecánicas.',
        'Confirmación del auxiliar o chofer con entrega a bodega intermedia.'
      ]
    },
    {
      id: 4,
      category: 'operativo',
      title: '4. Entrega Segura con Validación Cédula / PIN',
      shortTitle: 'Entrega Blindada',
      badge: 'Última Milla',
      desc: 'Garantía absoluta de entrega al destinatario real sin suplantaciones ni entregas erróneas.',
      features: [
        'Verificación obligatoria de cédula física y escaneo de guía en ventanilla.',
        'PIN de seguridad temporal opcional al celular para retiros de alto valor.',
        'Registro fotográfico opcional del comprobante firmado o documento de identidad.',
        'Cierre de guía con fecha, hora exacta y operador responsable en la nube.'
      ]
    },
    {
      id: 5,
      category: 'operativo',
      title: '5. Notificaciones Automáticas por WhatsApp & SMS',
      shortTitle: 'Avisos WhatsApp',
      badge: 'Cliente',
      desc: 'Mantén informados a remitentes y destinatarios en cada hito del trayecto sin saturar la atención telefónica.',
      features: [
        'Mensaje de confirmación al recibir el paquete con enlace directo de rastreo web.',
        'Aviso de salida de la unidad con tiempo estimado de arribo.',
        'Notificación inmediata: Su paquete está listo para retiro en la agencia.',
        'Recordatorios automáticos para paquetes no reclamados tras 48/72 horas.'
      ]
    },
    {
      id: 6,
      category: 'operativo',
      title: '6. Portal Público de Rastreo Web (Tracking 24/7)',
      shortTitle: 'Portal Tracking',
      badge: 'Público',
      desc: 'Una interfaz limpia, rápida y responsive para que los clientes consulten el estado de sus envíos.',
      features: [
        'Consulta directa ingresando número de guía o escaneando QR desde la cámara.',
        'Línea de tiempo visual: Recibido → En Bus → En Ruta → En Destino → Entregado.',
        'Horarios de atención y ubicación exacta de la agencia de retiro.',
        'Protección de datos personales y anonimización de información sensible.'
      ]
    },
    {
      id: 7,
      category: 'gestion',
      title: '7. Liquidaciones Diarias & Control de Caja',
      shortTitle: 'Arqueo & Fletes',
      badge: 'Finanzas',
      desc: 'Cuadre milimétrico de ingresos en ventanilla y cobros contra-entrega (flete al cobro).',
      features: [
        'Arqueo de caja por turno, ventanilla y usuario con desglose de medios de pago.',
        'Manejo transparente de fletes por cobrar en destino con retención contable.',
        'Reportes exportables a Excel y PDF con un solo clic para contabilidad.',
        'Control de comisiones por agencia o concesionaria si aplica.'
      ]
    },
    {
      id: 8,
      category: 'gestion',
      title: '8. Gestión de Discrepancias, Daños & Novedades',
      shortTitle: 'Incidencias & Daños',
      badge: 'Auditoría',
      desc: 'Protocolo formal para registrar, clasificar y resolver incidencias sin disputas operativas.',
      features: [
        'Registro fotográfico inmediato de paquetes recibidos con daños o empaque defectuoso.',
        'Trazabilidad de responsabilidad: se identifica qué operador o unidad manipuló el bulto.',
        'Flujo de aprobación para reclamos, devoluciones o indemnizaciones reglamentarias.',
        'Estadísticas de siniestralidad por ruta, agencia y turno de trabajo.'
      ]
    },
    {
      id: 9,
      category: 'gestion',
      title: '9. Panel Administrativo & Métricas Ejecutivas',
      shortTitle: 'Panel Gerencial',
      badge: 'Métricas',
      desc: 'Visibilidad global en tiempo real para gerentes de operaciones y directivos.',
      features: [
        'Dashboard con volumen diario de paquetes, recaudación total y rutas principales.',
        'Monitoreo de tiempos de tránsito y cumplimiento de horarios de llegada.',
        'Identificación de cuellos de botella en bodegas con alta saturación.',
        'Productividad por operador y volumen de carga por unidad de transporte.'
      ]
    },
    {
      id: 10,
      category: 'gestion',
      title: '10. Seguridad Operativa, Perfiles & Permisos',
      shortTitle: 'Perfiles & Auditoría',
      badge: 'Seguridad',
      desc: 'Acceso estrictamente segmentado según el rol de cada colaborador en la cadena.',
      features: [
        'Perfiles: Ventanilla, Bodeguero, Conductor/Auxiliar, Jefe de Agencia y SuperAdmin.',
        'Bitácora inalterable (Audit Log): quién registró, despachó y entregó cada paquete.',
        'Cierre automático de sesión por inactividad y contraseñas seguras.',
        'Bloqueo preventivo de terminales o dispositivos móviles no autorizados.'
      ]
    },
    {
      id: 11,
      category: 'gestion',
      title: '11. Modo Offline / PWA con Sincronización Automática',
      shortTitle: 'Modo Offline PWA',
      badge: 'Sin Internet',
      desc: 'Diseñado específicamente para carreteras con zonas de sombra o cobertura celular intermitente.',
      features: [
        'Escaneo y registro de entregas/descargas intermedias sin conexión a internet.',
        'Almacenamiento local cifrado en la memoria del dispositivo móvil (IndexedDB).',
        'Sincronización silenciosa en cuanto el dispositivo detecta red 3G/4G/WiFi.',
        'Cero pérdida de registros en páramos y zonas remotas del país.'
      ]
    }
  ];

  const filteredModules = modules.filter(m => m.category === activeModuleTab);
  const currentModule = modules.find(m => m.id === selectedModuleId) || modules[0];

  const packageLifecycle = [
    {
      step: '01',
      title: 'Admisión en Ventanilla',
      icon: Package,
      desc: 'Pesaje, tarifación automática y emisión de comprobante más etiqueta QR única autoadhesiva.',
      location: 'Agencia Origen'
    },
    {
      step: '02',
      title: 'Conciliación de Carga',
      icon: QrCode,
      desc: 'Escaneo bulto por bulto al maletero. Si un paquete no pertenece al bus, salta alerta acústica roja.',
      location: 'Andén de Salida'
    },
    {
      step: '03',
      title: 'Tránsito & Monitoreo',
      icon: Truck,
      desc: 'La app móvil valida en cada parada únicamente los paquetes asignados a ese destino, incluso sin señal.',
      location: 'Ruta Nacional'
    },
    {
      step: '04',
      title: 'Recepción en Bodega',
      icon: RefreshCw,
      desc: 'La agencia receptora escanea y concilia la carga. Se envía notificación WhatsApp automática al destinatario.',
      location: 'Agencia Destino'
    },
    {
      step: '05',
      title: 'Entrega con Cédula/PIN',
      icon: ShieldCheck,
      desc: 'El destinatario retira con cédula y código PIN. Queda cerrado el ciclo con registro de hora y operador.',
      location: 'Ventanilla Final'
    }
  ];

  const differentiators = [
    {
      title: 'Cero Carga Cruzada en Andén',
      desc: 'La validación por escaneo antes de que el bus arranque impide físicamente que un bulto suba a una ruta incorrecta.',
      icon: Shield
    },
    {
      title: 'Modo Offline en Páramos (PWA)',
      desc: 'Registra escaneos sin internet en carretera y sincroniza automáticamente al recuperar señal celular.',
      icon: Radio
    },
    {
      title: 'WhatsApp Automático al Cliente',
      desc: 'Reduce un 70% las llamadas preguntando por el encargo. Avisos de admisión, arribo y retiro.',
      icon: Bell
    },
    {
      title: 'Entrega Blindada con Cédula/PIN',
      desc: 'Evita suplantaciones de identidad. El paquete solo se libera con código seguro verificado.',
      icon: KeyRound
    },
    {
      title: 'Arqueo de Caja & Flete al Cobro',
      desc: 'Control estricto de dinero recaudado en ventanilla y fletes por cobrar en destino, al centavo.',
      icon: BarChart3
    },
    {
      title: 'Hardware Económico Estándar',
      desc: 'Usa smartphones Android comunes, lectores de código de barra USB/Bluetooth e impresoras térmicas de 58/80mm.',
      icon: Smartphone
    },
    {
      title: 'Auditoría Total en Cada Toque',
      desc: 'Registro exacto de qué persona manipuló, subió al bus, transportó y entregó cada encomienda.',
      icon: Eye
    },
    {
      title: 'Implementación Rápida',
      desc: 'Adaptado desde el día 1 al modelo operativo de cooperativas y terminales de transporte de pasajeros en Ecuador.',
      icon: Zap
    }
  ];

  const roles = [
    {
      role: 'Ventanilla',
      icon: Package,
      desc: 'Recepción rápida, pesaje, cobro, comprobante térmico y sticker QR.',
      task: 'Genera guía en <40 seg'
    },
    {
      role: 'Bodeguero / Despacho',
      icon: QrCode,
      desc: 'Control de andén, escaneo de maletero y bloqueo de carga ajena.',
      task: 'Cero paquetes cruzados'
    },
    {
      role: 'Conductor / Auxiliar',
      icon: Truck,
      desc: 'Control a bordo, validación de paradas y operación offline en carretera.',
      task: 'Descargas intermedias seguras'
    },
    {
      role: 'Gerencia & Auditoría',
      icon: BarChart3,
      desc: 'Supervisión en vivo de volumen, ingresos por agencia y novedades.',
      task: 'Control total de cajas y rutas'
    }
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 selection:bg-amber-500 selection:text-slate-950 font-sans">
      
      {/* ══════════════════════════════════════════
          1. HERO FULLSCREEN FOTOGRÁFICO CON OVERLAY ELEGANTE
      ══════════════════════════════════════════ */}
      <header className="relative min-h-[92vh] md:min-h-screen flex items-center justify-center overflow-hidden border-b border-slate-800 isolate">
        <img
          src="/images/trazabilidad-hero.jpg"
          alt="Operación de carga y encomiendas en terminal de buses interprovinciales"
          className="absolute inset-0 w-full h-full object-cover object-center"
          style={{ zIndex: -2 }}
        />

        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/75 to-slate-950/40" style={{ zIndex: -1 }} />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/60 to-transparent" style={{ zIndex: -1 }} />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-16 md:py-24 z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-black/60 border border-amber-500/40 text-amber-300 text-xs sm:text-sm font-semibold mb-6 backdrop-blur-md shadow-lg">
              <Truck className="w-4 h-4 text-amber-400" />
              <span>Transporte Interprovincial · Control de Carga</span>
            </div>

            {/* Título Principal: conciso en móvil, completo en desktop */}
            <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.15] drop-shadow-md">
              Control de encomiendas sin paquetes perdidos{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-orange-400 to-amber-200">
                ni carga equivocada.
              </span>
            </h1>

            {/* Descripción Breve y Directa */}
            <p className="mt-3 sm:mt-5 text-sm sm:text-base md:text-lg text-slate-200 leading-relaxed max-w-2xl drop-shadow">
              Trazabilidad con código QR para buses interprovinciales: control en andén, entrega segura y modo 100% offline en carretera.
            </p>

            {/* Métricas Compactas: solo 3 métricas claras */}
            <div className="grid grid-cols-3 gap-2.5 sm:gap-3 mt-6 sm:mt-8 max-w-lg">
              <div className="bg-slate-900/80 border border-slate-700/80 rounded-xl p-2.5 sm:p-3 backdrop-blur-md text-center sm:text-left">
                <div className="text-lg sm:text-2xl font-black text-amber-400 font-mono">0%</div>
                <div className="text-[10px] sm:text-xs text-slate-300">Carga cruzada</div>
              </div>
              <div className="bg-slate-900/80 border border-slate-700/80 rounded-xl p-2.5 sm:p-3 backdrop-blur-md text-center sm:text-left">
                <div className="text-lg sm:text-2xl font-black text-amber-400 font-mono">Offline</div>
                <div className="text-[10px] sm:text-xs text-slate-300">Opera en ruta</div>
              </div>
              <div className="bg-slate-900/80 border border-slate-700/80 rounded-xl p-2.5 sm:p-3 backdrop-blur-md text-center sm:text-left">
                <div className="text-lg sm:text-2xl font-black text-amber-400 font-mono">WhatsApp</div>
                <div className="text-[10px] sm:text-xs text-slate-300">Avisos al cliente</div>
              </div>
            </div>

            <div className="mt-8 flex flex-wrap gap-3.5 items-center">
              <a
                href="#modulos"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-amber-500 to-orange-500 text-slate-950 font-bold hover:from-amber-400 hover:to-orange-400 transition-all shadow-lg shadow-amber-500/20 text-sm sm:text-base">
                <span>Ver Módulos del Sistema</span>
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="https://wa.me/593994503758?text=Hola%20C%C3%A9sar%2C%20quisiera%20agendar%20una%20demostraci%C3%B3n%20del%20Sistema%20de%20Trazabilidad%20de%20Encomiendas"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-slate-900/90 hover:bg-slate-800 border border-slate-700 text-white font-medium transition-all text-sm sm:text-base backdrop-blur-sm">
                <Phone className="w-4 h-4 text-emerald-400" />
                <span>Solicitar Demostración</span>
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* ══════════════════════════════════════════
          2. EL PROBLEMA OPERATIVO (CONDENSADO EN 3 BLOQUES)
      ══════════════════════════════════════════ */}
      <section className="py-12 md:py-16 bg-slate-900/60 border-b border-slate-800/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-amber-400">Problemas Frecuentes en Cooperativas</span>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-white mt-1">
                El alto costo del control manual en papel
              </h2>
            </div>
            <p className="text-slate-400 text-xs sm:text-sm max-w-md">
              Pérdidas económicas, discusiones con pasajeros y reclamos que dañan el prestigio de la empresa de transporte.
            </p>
          </div>

          <div className="grid sm:grid-cols-3 gap-4">
            <div className="bg-slate-950/80 border border-red-500/20 rounded-xl p-5 hover:border-red-500/40 transition-all">
              <div className="w-9 h-9 rounded-lg bg-red-500/10 flex items-center justify-center text-red-400 mb-3">
                <AlertTriangle className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-white text-sm sm:text-base">Carga Cruzada en Andenes</h3>
              <p className="text-slate-400 text-xs mt-1.5 leading-relaxed">
                Paquetes que suben al bus equivocado por falta de validación antes del cierre del maletero.
              </p>
            </div>

            <div className="bg-slate-950/80 border border-amber-500/20 rounded-xl p-5 hover:border-amber-500/40 transition-all">
              <div className="w-9 h-9 rounded-lg bg-amber-500/10 flex items-center justify-center text-amber-400 mb-3">
                <FileText className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-white text-sm sm:text-base">Talonarios y Cuadres Manuales</h3>
              <p className="text-slate-400 text-xs mt-1.5 leading-relaxed">
                Guías de papel extraviadas y fletes al cobro en destino que no concilian con el dinero en caja.
              </p>
            </div>

            <div className="bg-slate-950/80 border border-orange-500/20 rounded-xl p-5 hover:border-orange-500/40 transition-all">
              <div className="w-9 h-9 rounded-lg bg-orange-500/10 flex items-center justify-center text-orange-400 mb-3">
                <Phone className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-white text-sm sm:text-base">Ventanillas Saturadas</h3>
              <p className="text-slate-400 text-xs mt-1.5 leading-relaxed">
                Decenas de clientes llamando constantemente para preguntar si su paquete ya arribó.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          3. FLUJO DEL PAQUETE (SWIPE TOUCH PROFESIONAL EN MÓVIL + 5 COLUMNAS EN DESKTOP)
      ══════════════════════════════════════════ */}
      <section className="py-14 md:py-20 border-b border-slate-800/80 bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-amber-400">Trazabilidad Extremo a Extremo</span>
              <h2 className="text-xl sm:text-3xl font-extrabold text-white mt-1">
                El viaje del paquete en 5 pasos
              </h2>
            </div>

            {/* Controles para Móvil */}
            <div className="flex md:hidden items-center gap-2">
              <button
                onClick={() => setMobileStepIndex((prev) => (prev > 0 ? prev - 1 : packageLifecycle.length - 1))}
                className="w-9 h-9 rounded-full bg-slate-800 border border-slate-700 flex items-center justify-center text-white active:scale-95 transition-all shadow-md"
                aria-label="Paso anterior">
                <ChevronLeft className="w-4 h-4" />
              </button>
              <span className="text-xs font-mono font-bold text-amber-400 px-2 py-1 rounded bg-slate-900 border border-slate-800">
                {mobileStepIndex + 1}/{packageLifecycle.length}
              </span>
              <button
                onClick={() => setMobileStepIndex((prev) => (prev < packageLifecycle.length - 1 ? prev + 1 : 0))}
                className="w-9 h-9 rounded-full bg-slate-800 border border-slate-700 flex items-center justify-center text-white active:scale-95 transition-all shadow-md"
                aria-label="Paso siguiente">
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* VISTA DESKTOP: 5 Columnas Elegantes */}
          <div className="hidden md:grid md:grid-cols-5 gap-4">
            {packageLifecycle.map((item, idx) => {
              const IconComp = item.icon;
              return (
                <div
                  key={idx}
                  className="bg-slate-900/90 border border-slate-800 hover:border-amber-500/40 rounded-2xl p-5 flex flex-col justify-between transition-all">
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-xs font-mono font-bold text-amber-400 px-2 py-0.5 rounded bg-amber-500/10 border border-amber-500/30">
                        {item.step}
                      </span>
                      <span className="text-[11px] text-slate-400 font-medium">{item.location}</span>
                    </div>

                    <div className="w-10 h-10 rounded-xl bg-amber-500/10 flex items-center justify-center text-amber-400 mb-3">
                      <IconComp className="w-5 h-5" />
                    </div>

                    <h3 className="text-sm sm:text-base font-bold text-white mb-2">{item.title}</h3>
                    <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* VISTA MÓVIL: Slider Touch Profesional (1 Card con Swipe + Indicadores Dot) */}
          <div
            className="md:hidden relative"
            onTouchStart={handleTouchStart}
            onTouchEnd={(e) => handleTouchEnd(e, mobileStepIndex, setMobileStepIndex, packageLifecycle.length)}>
            {(() => {
              const currentStep = packageLifecycle[mobileStepIndex];
              const StepIcon = currentStep.icon;
              return (
                <div className="bg-gradient-to-br from-slate-900 via-slate-900/90 to-slate-950 border border-amber-500/30 rounded-2xl p-6 shadow-2xl relative overflow-hidden transition-all duration-300">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-mono font-bold text-amber-400 px-3 py-1 rounded-md bg-amber-500/15 border border-amber-500/30">
                      PASO {currentStep.step} DE 05
                    </span>
                    <span className="text-xs text-slate-400 font-medium flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                      {currentStep.location}
                    </span>
                  </div>

                  <div className="flex items-center gap-3.5 mb-4">
                    <div className="w-12 h-12 rounded-xl bg-amber-500/15 border border-amber-500/30 flex items-center justify-center text-amber-400 shrink-0">
                      <StepIcon className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-white leading-tight">{currentStep.title}</h3>
                      <p className="text-xs text-amber-300/80 mt-0.5">Control verificado en sistema</p>
                    </div>
                  </div>

                  <p className="text-slate-300 text-sm leading-relaxed mb-4">{currentStep.desc}</p>

                  <div className="flex justify-between items-center pt-3 border-t border-slate-800/80 text-[11px] text-slate-400">
                    <span>← Desliza para navegar →</span>
                    <span className="font-semibold text-amber-400">Paso {mobileStepIndex + 1} de 5</span>
                  </div>
                </div>
              );
            })()}

            {/* Dots Indicadores */}
            <div className="flex justify-center gap-2 mt-4">
              {packageLifecycle.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setMobileStepIndex(idx)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    mobileStepIndex === idx ? 'w-6 bg-amber-400' : 'w-2 bg-slate-700'
                  }`}
                  aria-label={`Ir al paso ${idx + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          4. LOS 11 MÓDULOS (COMPACTO Y CONDENSADO: SELECTOR TIPO MASTER-DETAIL EN DESKTOP Y CARD PROFESIONAL CON TOUCH SWIPE EN MÓVIL)
      ══════════════════════════════════════════ */}
      <section id="modulos" className="py-14 md:py-20 border-b border-slate-800/80 bg-slate-900/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs font-bold uppercase tracking-wider text-amber-400">Arquitectura del Software</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white mt-1">
              11 Módulos diseñados para carretera
            </h2>
            <p className="text-slate-400 text-xs sm:text-sm mt-2">
              Selecciona una categoría para explorar la arquitectura del sistema.
            </p>

            {/* Pestañas Operativo vs Gestión */}
            <div className="inline-flex p-1 rounded-xl bg-slate-950 border border-slate-800 mt-5 shadow-inner">
              <button
                onClick={() => {
                  setActiveModuleTab('operativo');
                  setSelectedModuleId(1);
                  setMobileModuleIndex(0);
                }}
                className={`px-4 py-2 rounded-lg text-xs sm:text-sm font-semibold transition-all ${
                  activeModuleTab === 'operativo'
                    ? 'bg-amber-500 text-slate-950 shadow-md font-bold'
                    : 'text-slate-400 hover:text-white'
                }`}>
                Módulos Operativos (1 - 6)
              </button>
              <button
                onClick={() => {
                  setActiveModuleTab('gestion');
                  setSelectedModuleId(7);
                  setMobileModuleIndex(0);
                }}
                className={`px-4 py-2 rounded-lg text-xs sm:text-sm font-semibold transition-all ${
                  activeModuleTab === 'gestion'
                    ? 'bg-amber-500 text-slate-950 shadow-md font-bold'
                    : 'text-slate-400 hover:text-white'
                }`}>
                Control & Offline (7 - 11)
              </button>
            </div>
          </div>

          {/* VISTA DESKTOP: Master-Detail Compacto */}
          <div className="hidden lg:grid grid-cols-12 gap-6 items-start">
            <div className="col-span-5 space-y-2">
              {filteredModules.map((m) => {
                const isSelected = selectedModuleId === m.id;
                return (
                  <button
                    key={m.id}
                    onClick={() => setSelectedModuleId(m.id)}
                    className={`w-full text-left p-3.5 rounded-xl border transition-all flex items-center justify-between ${
                      isSelected
                        ? 'bg-amber-500/15 border-amber-500/60 text-white shadow-lg'
                        : 'bg-slate-900/80 border-slate-800 text-slate-300 hover:bg-slate-900 hover:border-slate-700'
                    }`}>
                    <div className="flex items-center gap-3">
                      <span className={`text-xs font-mono font-bold px-2 py-0.5 rounded ${
                        isSelected ? 'bg-amber-500 text-slate-950' : 'bg-slate-800 text-slate-400'
                      }`}>
                        {m.id < 10 ? `0${m.id}` : m.id}
                      </span>
                      <span className="font-semibold text-sm">{m.shortTitle}</span>
                    </div>
                    <span className="text-[11px] text-amber-400/80 font-medium">{m.badge}</span>
                  </button>
                );
              })}
            </div>

            <div className="col-span-7 bg-slate-900/90 border border-slate-800 rounded-2xl p-7 shadow-xl min-h-[380px] flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-bold px-2.5 py-1 rounded-full bg-amber-500/10 text-amber-400 border border-amber-500/30">
                    {currentModule.badge}
                  </span>
                  <span className="text-xs font-mono text-slate-500">Módulo {currentModule.id} de 11</span>
                </div>

                <h3 className="text-xl font-bold text-white mb-3">{currentModule.title}</h3>
                <p className="text-slate-300 text-sm leading-relaxed mb-6">{currentModule.desc}</p>

                <h4 className="text-xs font-bold text-amber-400 uppercase tracking-wider mb-3">Funciones Clave Incluidas:</h4>
                <div className="space-y-2.5">
                  {currentModule.features.map((feat, fIdx) => (
                    <div key={fIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                      <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-6 pt-5 border-t border-slate-800 flex items-center justify-between text-xs text-slate-400">
                <span>Totalmente configurable según las rutas de tu empresa</span>
                <a
                  href="https://wa.me/593994503758?text=Hola%20C%C3%A9sar%2C%20quisiera%20consultar%20sobre%20el%20m%C3%B3dulo%20de%20trazabilidad"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-amber-400 font-semibold hover:underline">
                  Consultar sobre este módulo →
                </a>
              </div>
            </div>
          </div>

          {/* VISTA MÓVIL: Slider Touch Profesional (1 Card con Flechas y Swipe) */}
          <div
            className="lg:hidden relative"
            onTouchStart={handleTouchStart}
            onTouchEnd={(e) => handleTouchEnd(e, mobileModuleIndex, setMobileModuleIndex, filteredModules.length)}>
            {/* Cabecera Móvil con Controles de Flecha */}
            <div className="flex items-center justify-between mb-3 px-1">
              <span className="text-xs font-semibold text-slate-400">
                {activeModuleTab === 'operativo' ? 'Operación en Ruta' : 'Caja & Administración'}
              </span>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setMobileModuleIndex((prev) => (prev > 0 ? prev - 1 : filteredModules.length - 1))}
                  className="w-8 h-8 rounded-full bg-slate-800 border border-slate-700 flex items-center justify-center text-white active:scale-95 transition-all shadow"
                  aria-label="Módulo anterior">
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <span className="text-xs font-mono font-bold text-amber-400 px-2 py-0.5 rounded bg-slate-900 border border-slate-800">
                  {mobileModuleIndex + 1}/{filteredModules.length}
                </span>
                <button
                  onClick={() => setMobileModuleIndex((prev) => (prev < filteredModules.length - 1 ? prev + 1 : 0))}
                  className="w-8 h-8 rounded-full bg-slate-800 border border-slate-700 flex items-center justify-center text-white active:scale-95 transition-all shadow"
                  aria-label="Módulo siguiente">
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Tarjeta Móvil Principal */}
            {(() => {
              const currentMobileModule = filteredModules[mobileModuleIndex] || filteredModules[0];
              return (
                <div className="bg-gradient-to-br from-slate-900 to-slate-950 border border-amber-500/30 rounded-2xl p-5 shadow-2xl relative transition-all duration-300">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-bold px-3 py-1 rounded-full bg-amber-500/15 text-amber-400 border border-amber-500/30">
                      {currentMobileModule.badge}
                    </span>
                    <span className="text-xs font-mono text-slate-400">
                      Módulo {currentMobileModule.id} de 11
                    </span>
                  </div>

                  <h3 className="text-base sm:text-lg font-bold text-white mb-2 leading-snug">
                    {currentMobileModule.title}
                  </h3>
                  <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mb-4">
                    {currentMobileModule.desc}
                  </p>

                  <div className="space-y-2.5 border-t border-slate-800/80 pt-3.5 mb-4">
                    {currentMobileModule.features.map((feat, fIdx) => (
                      <div key={fIdx} className="flex items-start gap-2.5 text-xs text-slate-300">
                        <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>

                  <div className="pt-3 border-t border-slate-800/80 flex items-center justify-between text-[11px] text-slate-400">
                    <span>← Swipe para siguiente módulo</span>
                    <a
                      href="https://wa.me/593994503758?text=Hola%20C%C3%A9sar%2C%20quisiera%20consultar%20sobre%20el%20m%C3%B3dulo%20de%20trazabilidad"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-amber-400 font-bold hover:underline">
                      Consultar WhatsApp →
                    </a>
                  </div>
                </div>
              );
            })()}

            {/* Dots Indicadores Móvil */}
            <div className="flex justify-center gap-1.5 mt-3">
              {filteredModules.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setMobileModuleIndex(idx)}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    mobileModuleIndex === idx ? 'w-5 bg-amber-400' : 'w-1.5 bg-slate-700'
                  }`}
                  aria-label={`Ver módulo ${idx + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          5. VENTAJAS DIFERENCIADORAS (SWIPE TOUCH PROFESIONAL EN MÓVIL + GRID EN DESKTOP)
      ══════════════════════════════════════════ */}
      <section className="py-14 md:py-20 border-b border-slate-800/80 bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-amber-400">Por qué elegir esta solución</span>
              <h2 className="text-xl sm:text-3xl font-extrabold text-white mt-1">
                8 Ventajas frente a sistemas genéricos
              </h2>
            </div>

            {/* Controles para Móvil */}
            <div className="flex md:hidden items-center gap-2">
              <button
                onClick={() => setMobileDiffIndex((prev) => (prev > 0 ? prev - 1 : differentiators.length - 1))}
                className="w-8 h-8 rounded-full bg-slate-800 border border-slate-700 flex items-center justify-center text-white active:scale-95 shadow"
                aria-label="Ventaja anterior">
                <ChevronLeft className="w-4 h-4" />
              </button>
              <span className="text-xs font-mono font-bold text-amber-400 px-2 py-0.5 rounded bg-slate-900 border border-slate-800">
                {mobileDiffIndex + 1}/{differentiators.length}
              </span>
              <button
                onClick={() => setMobileDiffIndex((prev) => (prev < differentiators.length - 1 ? prev + 1 : 0))}
                className="w-8 h-8 rounded-full bg-slate-800 border border-slate-700 flex items-center justify-center text-white active:scale-95 shadow"
                aria-label="Ventaja siguiente">
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* VISTA DESKTOP: Grid 4x2 */}
          <div className="hidden md:grid md:grid-cols-4 gap-4">
            {differentiators.map((diff, idx) => {
              const Icon = diff.icon;
              return (
                <div
                  key={idx}
                  className="bg-slate-900/70 border border-slate-800/90 rounded-2xl p-5 hover:border-amber-500/40 transition-all flex flex-col justify-between">
                  <div>
                    <div className="w-9 h-9 rounded-lg bg-amber-500/10 flex items-center justify-center text-amber-400 mb-3">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="font-bold text-white text-sm sm:text-base mb-1.5">{diff.title}</h3>
                    <p className="text-slate-400 text-xs leading-relaxed">{diff.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* VISTA MÓVIL: Tarjeta Activa con Touch Swipe */}
          <div
            className="md:hidden relative"
            onTouchStart={handleTouchStart}
            onTouchEnd={(e) => handleTouchEnd(e, mobileDiffIndex, setMobileDiffIndex, differentiators.length)}>
            {(() => {
              const currentDiff = differentiators[mobileDiffIndex];
              const DiffIcon = currentDiff.icon;
              return (
                <div className="bg-gradient-to-br from-slate-900 to-slate-950 border border-amber-500/30 rounded-2xl p-6 shadow-xl">
                  <div className="w-12 h-12 rounded-xl bg-amber-500/15 border border-amber-500/30 flex items-center justify-center text-amber-400 mb-4">
                    <DiffIcon className="w-6 h-6" />
                  </div>
                  <div className="text-xs font-mono font-bold text-amber-400 mb-1">
                    DIFERENCIAL 0{mobileDiffIndex + 1}
                  </div>
                  <h3 className="font-bold text-white text-base mb-2">{currentDiff.title}</h3>
                  <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mb-4">{currentDiff.desc}</p>

                  <div className="flex justify-between items-center pt-3 border-t border-slate-800/80 text-[11px] text-slate-400">
                    <span>← Desliza para la siguiente ventaja →</span>
                    <span className="text-amber-400 font-semibold">{mobileDiffIndex + 1} de {differentiators.length}</span>
                  </div>
                </div>
              );
            })()}

            {/* Dots Indicadores Móvil */}
            <div className="flex justify-center gap-1.5 mt-3">
              {differentiators.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setMobileDiffIndex(idx)}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    mobileDiffIndex === idx ? 'w-5 bg-amber-400' : 'w-1.5 bg-slate-700'
                  }`}
                  aria-label={`Ver diferencial ${idx + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          6. ROLES OPERATIVOS & HARDWARE ECONÓMICO (COMPACTADO EN 2 COLUMNAS)
      ══════════════════════════════════════════ */}
      <section className="py-14 md:py-20 border-b border-slate-800/80 bg-slate-900/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-8 items-center">
            
            {/* Columna Izquierda: Roles Simples */}
            <div className="lg:col-span-6 space-y-4">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-amber-400">Para Todo tu Equipo</span>
                <h2 className="text-xl sm:text-3xl font-extrabold text-white mt-1">
                  Pantallas adaptadas a cada rol operativo
                </h2>
                <p className="text-slate-400 text-xs sm:text-sm mt-1">
                  Interfaces ultra-simplificadas para evitar confusiones en momentos de alta afluencia de pasajeros.
                </p>
              </div>

              <div className="grid sm:grid-cols-2 gap-3 pt-2">
                {roles.map((r, idx) => {
                  const Icon = r.icon;
                  return (
                    <div key={idx} className="bg-slate-950/80 border border-slate-800 rounded-xl p-4">
                      <div className="flex items-center gap-2.5 mb-2">
                        <div className="w-7 h-7 rounded-md bg-amber-500/10 flex items-center justify-center text-amber-400">
                          <Icon className="w-4 h-4" />
                        </div>
                        <h3 className="font-bold text-white text-sm">{r.role}</h3>
                      </div>
                      <p className="text-slate-400 text-xs leading-relaxed mb-2">{r.desc}</p>
                      <div className="text-[11px] font-semibold text-amber-400">✓ {r.task}</div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Columna Derecha: Hardware Económico */}
            <div className="lg:col-span-6 bg-slate-900 border border-slate-800 rounded-2xl p-6 sm:p-8">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-semibold mb-3">
                <Smartphone className="w-3.5 h-3.5" />
                <span>Cero Inversión en Terminales Costosos</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Compatible con el equipo que ya tienes</h3>
              <p className="text-slate-300 text-xs sm:text-sm mb-6 leading-relaxed">
                No requieres comprar dispositivos industriales privativos de miles de dólares:
              </p>

              <div className="space-y-3 text-xs sm:text-sm">
                <div className="p-3 rounded-lg bg-slate-950/80 border border-slate-800 flex items-center gap-3">
                  <div className="w-6 h-6 rounded bg-amber-500/10 text-amber-400 flex items-center justify-center shrink-0">✓</div>
                  <span className="text-slate-200"><strong>Celulares Android o iOS:</strong> Cámara como escáner QR rápido.</span>
                </div>
                <div className="p-3 rounded-lg bg-slate-950/80 border border-slate-800 flex items-center gap-3">
                  <div className="w-6 h-6 rounded bg-amber-500/10 text-amber-400 flex items-center justify-center shrink-0">✓</div>
                  <span className="text-slate-200"><strong>Lectores Láser USB/Bluetooth:</strong> Pistolas económicas plug & play.</span>
                </div>
                <div className="p-3 rounded-lg bg-slate-950/80 border border-slate-800 flex items-center gap-3">
                  <div className="w-6 h-6 rounded bg-amber-500/10 text-amber-400 flex items-center justify-center shrink-0">✓</div>
                  <span className="text-slate-200"><strong>Impresoras Térmicas (58/80mm):</strong> Tickets y stickers adhesivos.</span>
                </div>
                <div className="p-3 rounded-lg bg-slate-950/80 border border-slate-800 flex items-center gap-3">
                  <div className="w-6 h-6 rounded bg-amber-500/10 text-amber-400 flex items-center justify-center shrink-0">✓</div>
                  <span className="text-slate-200"><strong>PostgreSQL + Cifrado TLS 1.3:</strong> Respaldo automático diario.</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          7. CTA FINAL CONDENSADO CON BOTÓN WHATSAPP
      ══════════════════════════════════════════ */}
      <section className="py-16 md:py-20 relative overflow-hidden bg-gradient-to-b from-slate-950 to-slate-900 text-center">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-medium mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Demostración en Vivo para tu Empresa</span>
          </div>

          <h2 className="text-2xl sm:text-4xl font-black text-white tracking-tight leading-tight">
            Moderniza el control de encomiendas de tu flota hoy mismo
          </h2>

          <p className="mt-4 text-slate-300 text-xs sm:text-base max-w-xl mx-auto leading-relaxed">
            Coordinemos una demostración práctica para ver cómo se concilia la carga en tiempo real y cómo se adapta a las rutas de tu cooperativa.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-3.5">
            <a
              href="https://wa.me/593994503758?text=Hola%20C%C3%A9sar%2C%20quisiera%20agendar%20una%20demostraci%C3%B3n%20del%20Sistema%20de%20Trazabilidad%20de%20Encomiendas"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-gradient-to-r from-amber-500 to-orange-500 text-slate-950 font-bold hover:from-amber-400 hover:to-orange-400 transition-all shadow-xl shadow-amber-500/20 text-sm sm:text-base">
              <Phone className="w-4 h-4" />
              <span>Solicitar Demo por WhatsApp</span>
            </a>
            <a
              href="mailto:contacto@cesarreyesjaramillo.com?subject=Demostracion%20Sistema%20de%20Trazabilidad%20de%20Encomiendas"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-700 text-white font-medium transition-all text-sm sm:text-base">
              <Mail className="w-4 h-4 text-slate-400" />
              <span>Contactar por Email</span>
            </a>
          </div>

          <p className="mt-6 text-[11px] text-slate-500">
            Desarrollo e ingeniería de software a medida para cooperativas de transporte en Ecuador.
          </p>
        </div>
      </section>

    </div>
  );
}
