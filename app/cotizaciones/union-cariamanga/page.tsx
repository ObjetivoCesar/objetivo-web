import CotizacionViewer from "@/components/CotizacionViewer";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Propuesta de Trazabilidad de Encomiendas — Cooperativa Unión Cariamanga",
  description:
    "Plataforma de trazabilidad de encomiendas para la Cooperativa de Transportes Unión Cariamanga: registro QR, manifiestos digitales, control de transferencias, alertas y reportes de supervisión.",
  openGraph: {
    title: "Trazabilidad de Encomiendas — Unión Cariamanga × César Reyes",
    description:
      "Control en cada movimiento. Confianza en cada entrega. Plataforma de trazabilidad diseñada para la operación de Unión Cariamanga.",
    url: "https://www.cesarreyesjaramillo.com/cotizaciones/union-cariamanga",
    siteName: "César Reyes Jaramillo",
    type: "website",
    images: [
      {
        url: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&q=80&w=2000",
        width: 1200,
        height: 630,
        alt: "Trazabilidad de encomiendas — Unión Cariamanga",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Trazabilidad de Encomiendas — Unión Cariamanga",
    description:
      "Plataforma de trazabilidad de encomiendas con registro QR, manifiestos digitales y control de transferencias para Unión Cariamanga.",
    images: [
      "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&q=80&w=2000",
    ],
  },
};

export default function UnionCariamangaCotizacionPage() {
  const data = {
    id: "trazabilidad-encomiendas-union-cariamanga",
    portada: {
      etiqueta: "Control Operativo de Encomiendas",
      titulo_principal: "Trazabilidad de encomiendas",
      titulo_destacado: "con control en cada movimiento.",
      subtitulo:
        "Una solución diseñada para la operación de Unión Cariamanga: registra los movimientos de cada bulto, deja constancia de las transferencias y ayuda a investigar incidencias con evidencia.",
      preparado_para:
        "Ing. Fausto Morocho, Gerente General, y Honorable Consejo de Administración de la Cooperativa de Transportes Unión Cariamanga",
      preparado_por: "Ing. César Augusto Reyes Jaramillo",
      fecha: "Octubre 2026",
      imagen_url:
        "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&q=80&w=2000",
      url_fondo:
        "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&q=80&w=2000",
    },
    introduccion: {
      titulo:
        "El prestigio se defiende con evidencia, no diciendo «voy a averiguar». ",
      parrafos: [
        "Cuando una encomienda no aparece, llega a una agencia equivocada o debe reenviarse, la cooperativa invierte tiempo en llamadas, puede asumir costos adicionales y queda expuesta ante un cliente que espera respuestas. El daño no se limita al bulto: también afecta la confianza construida durante años.",
        "La propuesta busca que la operación deje de depender únicamente de llamadas y memoria. El sistema registra los movimientos que realiza el personal, valida pasos críticos y ayuda a detectar diferencias antes de que el recorrido continúe. La efectividad se medirá durante el piloto; no prometemos que la tecnología elimine todos los errores ni sustituya el registro responsable de cada movimiento.",
      ],
    },
    etapas: [
      {
        numero: "01",
        etiqueta_tiempo: "Desarrollo a medida · Meses 1 y 2",
        nombre: "Plataforma de trazabilidad de encomiendas",
        eslogan: "Cada bulto identificado. Cada movimiento registrado.",
        precio: "USD 10.800",
        precio_subtitulo:
          "inversión inicial por desarrollo, piloto y seguimiento",
        descripcion:
          "Construcción de la primera versión de la plataforma y los dos meses posteriores de aplicación y seguimiento. Cada escaneo operativo deja constancia del movimiento registrado para ayudar a detectar diferencias y reconstruir el recorrido de una encomienda.",
        entregables: [
          "Registro de cada encomienda y de cada bulto con código QR individual.",
          "Manifiestos digitales por viaje y parada, con control de carga, descarga y recepción.",
          "Registro de transferencias y redespachos con responsable, plazo y confirmación.",
          "Alertas ante bultos faltantes, escaneos incorrectos y entregas pendientes de confirmar.",
          "Avisos de estado por WhatsApp, con reglas para evitar mensajes innecesarios.",
          "Registro de incidencias, confirmación de entrega, historial de movimientos y reportes de supervisión.",
          "Acceso por roles y registro de las acciones operativas.",
        ],
        nota_especial:
          "El sistema funcionará en paralelo al software actual: esta primera versión no lo reemplaza ni se integra con él. No incluye cobros, facturación, venta de boletos, GPS en vivo, video ni cálculo tarifario mediante IA. Las tarifas se aplicarán mediante reglas aprobadas por la cooperativa. Pagos: 30% al inicio (USD 3.240), 30% al aprobar la trazabilidad central (USD 3.240), 25% al completar pruebas integradas (USD 2.700) y 15% con la aceptación del piloto (USD 1.620).",
        detalles_pie: [
          "Desarrollo y primera versión: 8 semanas",
          "Aplicación web para celulares y computadores compatibles",
        ],
      },
      {
        numero: "02",
        etiqueta_tiempo: "Aplicación y seguimiento · Meses 3 y 4",
        nombre: "Piloto operativo, capacitación y medición",
        eslogan:
          "No basta con entregar el sistema: hay que comprobarlo en la operación.",
        precio: "Incluido",
        precio_subtitulo:
          "sin costo adicional dentro de la inversión de USD 10.800",
        descripcion:
          "El sistema se aplicará en una ruta piloto y en las agencias que intervengan en ese recorrido. Se capacitará a los responsables designados, se registrarán incidencias reales y se corregirán defectos relacionados con el alcance aprobado.",
        entregables: [
          "Configuración de una ruta piloto y las agencias participantes.",
          "Capacitación a los responsables operativos designados.",
          "Pruebas de recepción, despacho, redespacho, diferencias y confirmación de entrega.",
          "Registro, análisis y clasificación de incidencias observadas durante el piloto.",
          "Medición de bultos conciliados, diferencias detectadas, redespachos pendientes y tiempo de investigación.",
          "Informe de resultados y recomendaciones para ampliar el despliegue.",
        ],
        nota_especial:
          "La ruta y las agencias se fijarán en el acta de inicio. La capacitación presencial de toda la red, equipos adicionales y desplazamientos fuera del alcance acordado se presupuestarán por separado.",
        detalles_pie: [
          "Seguimiento operativo: 8 semanas",
          "Resultado: informe del piloto con indicadores observados",
        ],
      },
      {
        numero: "03",
        etiqueta_tiempo: "Desde el mes 5 · Servicio mensual",
        nombre: "Respaldo técnico especializado y continuidad",
        eslogan:
          "Un equipo que conoce la aplicación y responde por su mantenimiento.",
        precio: "USD 300 / mes",
        precio_subtitulo:
          "desde el mes 5, al concluir los cuatro meses incluidos y aceptar el piloto",
        descripcion:
          "La cooperativa contará con un equipo técnico que conoce el código y la arquitectura de la aplicación. No tendrá que crear una plaza adicional de desarrollo ni formar a una persona interna para interpretar un sistema que no escribió. Este servicio complementa al personal que atiende computadoras, impresoras, redes y conectividad.",
        entregables: [
          "Soporte de lunes a viernes, de 09:00 a 17:00, hora de Ecuador, excepto feriados nacionales.",
          "Primera respuesta a incidencias en un máximo de un día laborable.",
          "Investigación y mantenimiento correctivo de las funciones entregadas.",
          "Registro y clasificación de errores para identificar patrones y priorizar correcciones.",
          "Revisión básica del funcionamiento y de los respaldos configurados.",
        ],
        nota_especial:
          "El plazo de resolución depende de la causa y severidad del incidente. La mensualidad no incluye nuevas funcionalidades, ampliaciones de alcance, consumo de WhatsApp Business API, equipos ni servicios de terceros. Cualquier costo externo se informará y aprobará antes de activarlo.",
        detalles_pie: [
          "Servicio mensual: USD 300",
          "Nuevas funcionalidades: se acuerdan y cotizan por separado",
        ],
      },
    ],
    cierre: {
      titulo:
        "Una decisión estratégica para proteger la operación y la confianza de sus clientes.",
      frase_bisagra:
        "El objetivo no es añadir otro programa. Es que la cooperativa pueda investigar incidencias con evidencia y contar con respaldo técnico para mantener el sistema.",
      texto:
        "Ing. Fausto Morocho y miembros del Consejo de Administración: proponemos una reunión de revisión para validar el alcance del piloto, los requisitos de infraestructura y las responsabilidades de cada parte. La decisión no debe basarse solo en comparar mensualidades, sino en verificar qué solución cubre el volumen, el proceso de custodia y el respaldo técnico que Unión Cariamanga necesita.",
      bloque_derecha: {
        titulo: "Lo que esta inversión aporta a Unión Cariamanga",
        subtitulo:
          "Cuatro compromisos concretos, más allá de entregar un software.",
        cards: [
          {
            titulo: "1. Respaldo técnico especializado",
            texto:
              "Acompañamos la instalación, la puesta en marcha y el piloto. Después, el servicio mensual mantiene un canal directo para reportar y dar seguimiento a incidencias de la aplicación dentro del horario acordado. La cooperativa no necesita contratar un desarrollador adicional ni montar un departamento interno para mantener este código. El servicio complementa al personal que atiende computadoras, impresoras, redes y conectividad.",
          },
          {
            titulo: "2. Control de responsabilidades, no solo seguimiento",
            texto:
              "El objetivo no es mostrar únicamente una ubicación. Es poder consultar qué movimiento quedó registrado, quién lo registró, a qué viaje correspondía y qué agencia intervino. Si falta un registro, la diferencia puede quedar visible para su investigación; el sistema no puede atribuir una transferencia que nadie registró.",
          },
          {
            titulo: "3. Mejora a partir de incidencias",
            texto:
              "Cada incidencia reportada se documenta, investiga y clasifica. Al revisar los casos repetidos, podemos priorizar correcciones y mejorar el funcionamiento del sistema dentro del alcance contratado. Los cambios de proceso y nuevas funcionalidades se acuerdan y cotizan aparte.",
          },
          {
            titulo: "4. Capacidad dimensionada para su operación",
            texto:
              "El diseño contempla instalar el sistema en servidores propios de la cooperativa, después de comprobar que tengan capacidad, conectividad y respaldos adecuados. No se pagará una tarifa comercial por cada paquete procesado; la capacidad dependerá de los recursos disponibles y podrá ampliarse según el crecimiento. Se definirán permisos de acceso, historial de movimientos y copias de seguridad. Si hace falta ampliar servidores o equipos, se cotizará antes de ejecutarlo. Estas medidas reducen riesgos, pero ningún sistema puede prometer seguridad absoluta.",
          },
        ],
      },
      mapa_url: "https://maps.app.goo.gl/jdZgBYatRApSHLnTA",
      cta_texto:
        "Agendar reunión de revisión con el Ing. Fausto Morocho y su equipo",
      cta_url:
        "https://wa.me/593984180497?text=Hola%20C%C3%A9sar%2C%20queremos%20agendar%20la%20reuni%C3%B3n%20de%20revisi%C3%B3n%20de%20la%20propuesta%20de%20trazabilidad%20de%20encomiendas%20para%20Uni%C3%B3n%20Cariamanga.",
      pie_texto:
        "La reunión permitirá validar alcance, infraestructura y responsables del piloto.",
      frase_final:
        "Que cada encomienda deje rastro. <span>Que cada incidencia tenga seguimiento.</span>",
    },
    validez: "Válida hasta el 29 de octubre de 2026 (15 días corridos)",
  };

  return <CotizacionViewer data={data} />;
}
