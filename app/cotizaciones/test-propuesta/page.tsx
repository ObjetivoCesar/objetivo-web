import CotizacionViewer from "@/components/CotizacionViewer";

export default function TestPropuestaPage() {
  const data = {
    "id": "propuesta-taxi-central-2026",
    "portada": {
      "etiqueta": "Sistema de Control y Prestigio Institucional",
      "titulo_principal": "Cooperativa Central merece",
      "titulo_destacado": "una autoridad operativa inquebrantable.",
      "subtitulo": "Preparado para la Directiva | Abril 2026",
      "preparado_para": "Sr. Pablo Palacios Salinas (Gerente) y Sr. Nixon R. Buri (Presidente)",
      "preparado_por": "Ing. César Augusto Reyes Jaramillo",
      "fecha": "Abril 2026",
      "imagen_url": "https://cesarweb.b-cdn.net/activaqr/entrda%20a%20la%20ciudad%20de%20loja-%20taxismo.webp",
      "url_fondo": "https://cesarweb.b-cdn.net/activaqr/entrda%20a%20la%20ciudad%20de%20loja-%20taxismo.webp",
      "url_logo_cliente": ""
    },
    "introduccion": {
      "titulo": "La supervivencia del taxi formal es un tema de control.",
      "parrafos": [
        "Sr. Pablo y Sr. Nixon, su activo más valioso está en manos del chofer más grosero de su flota. Las aplicaciones piratas están ganando terreno no porque sean mejores, sino porque el pasajero tiene un canal de reporte inmediato y ustedes no.",
        "El prestigio de Cooperativa Central se construye o se destruye en cada viaje. Cuando un conductor es grosero, acelera innecesariamente o maltrata al pasajero, la cooperativa es la que pierde clientes de por vida.",
        "He diseñado una arquitectura tecnológica que devuelve la autoridad absoluta a la gerencia. No es un buzón de quejas; es un sistema de fiscalización en tiempo real que protege a sus buenos conductores y neutraliza las manzanas podridas antes de que el daño reputacional sea irreversible."
      ]
    },
    "etapas": [
      {
        "numero": "1",
        "etiqueta_tiempo": "Etapa Uno · Despliegue Físico",
        "nombre": "Activación de Control por Unidad",
        "eslogan": "\"Hecho para la Cooperativa Central. Solo para la Cooperativa Central.\"",
        "precio": "$300",
        "precio_subtitulo": "configuración de plataforma",
        "descripcion": "Configuración exclusiva: su cooperativa tiene su propio sistema con su identidad, flujos y reglas. Un canal de comunicación institucional hecho a la medida para blindar su flota, no una plantilla genérica.",
        "entregables": [
          "Placas QR físicas por unidad",
          "Generación de enlace directo a gerencia",
          "Activación de canal WhatsApp"
        ],
        "nota_especial": "Implementación en 48 horas una vez aprobado el diseño.",
        "detalles_pie": [
          "📍 Placas de alto tráfico"
        ]
      },
      {
        "numero": "2",
        "etiqueta_tiempo": "Etapa Dos · Inteligencia",
        "nombre": "Su Centro de Mando",
        "eslogan": "\"Datos reales para la asamblea.\"",
        "precio": "$9.80",
        "precio_subtitulo": "mensual por unidad (Plan Flota)",
        "descripcion": "Acceso 24/7 a su panel de control donde usted y la directiva verán el ranking de sus socios. Sabrá exactamente quién merece una felicitación y quién necesita una sanción con pruebas irrefutables.",
        "entregables": [
          "Acceso Dashboard Gerencial 24/7",
          "Ranking mensual de calidad de socios",
          "Métricas de servicio y velocidad"
        ],
        "nota_especial": "Costo escalable según el número exacto de socios activos.",
        "detalles_pie": [
          "✅ Soporte técnico incluido"
        ]
      },
      {
        "numero": "3",
        "etiqueta_tiempo": "Etapa Tres · Respaldo Jurídico",
        "nombre": "Blindaje Legal y Reputacional",
        "eslogan": "\"Evidencia que protege. Testimonios que venden.\"",
        "precio": "Incluido",
        "precio_subtitulo": "sin costo extra",
        "descripcion": "Cada reporte negativo genera un expediente PDF con fecha y hora inalterable para respaldar sanciones. Cada viaje de 5 estrellas alimenta un perfil digital que da seguridad instantánea al pasajero.",
        "entregables": [
          "Generación automática de PDFs de sanción",
          "Perfil digital público (VCard) del socio",
          "Banco de testimonios positivos"
        ],
        "nota_especial": "Fundamental para procesos disciplinarios internos.",
        "detalles_pie": [
          "📄 Respaldo total para la directiva"
        ]
      }
    ],
    "cierre": {
      "titulo": "El siguiente paso",
      "frase_bisagra": "Directiva de la Cooperativa Central, esto no requiere una decisión grande. Solo requiere 20 minutos.",
      "texto": "Les propongo una visita a nuestra oficina en Loja para mostrarles el sistema funcionando en vivo. Sin presentaciones largas, sin compromisos. Solo 20 minutos para que ustedes decidan con lo que ven, no con lo que yo les cuento.",
      "mapa_url": "https://maps.app.goo.gl/tmQ1M2Uf1pz43DVp6",
      "mapa_embed_url": "https://maps.google.com/maps?q=-4.0008052,-79.1988292&z=16&output=embed",
      "cta_texto": "✅ Confirmar nuestra visita a la oficina",
      "cta_url": "https://wa.me/593963410409?text=Confirmamos+nuestra+visita+a+la+oficina+de+ActivaQR.+Somos+la+Directiva+de+la+Cooperativa+Central.",
      "pie_texto": "Sin contratos de entrada. Sin compromisos. Solo la reunión.",
      "frase_final": "Quien tiene los datos, <span>tiene el poder en la asamblea.</span>"
    }
  };

  return <CotizacionViewer data={data} />;
}
