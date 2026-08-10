# Flujo de Captura — Datos por Servicio

> **Para qué sirve:** Definir exactamente qué campos del formulario se piden según el servicio que el cliente elija. Sin duplicar, sin omitir.

---

## 🎯 Estructura de 3 capas

Todos los formularios comparten una **capa base** (datos universales) y agregan una **capa específica** según el servicio:

```
┌────────────────────────────────────────┐
│ CAPA 1 — Base universal (todos)       │
├────────────────────────────────────────┤
│ CAPA 2 — Específica por servicio       │
├────────────────────────────────────────┤
│ CAPA 3 — Calificación (oculta/deriv.)  │
└────────────────────────────────────────┘
```

---

## 📦 CAPA 1 — Base universal

Estos campos aparecen en TODOS los formularios:

| Campo | Tipo | Obligatorio | Notas |
|---|---|---|---|
| `nombre` | text | ✅ | Nombre completo |
| `email` | email | ✅ | Validado |
| `whatsapp` | tel | ✅ | Con código país (Ecuador +593) |
| `ciudad` | select | ✅ | Guayaquil, Quito, Cuenca, + otras 7 |
| `nombre_negocio` | text | ✅ | Como aparece en redes/RUC |
| `sector` | select | ✅ | Comercio, Servicios, Manufactura, Agro, Tecnología, Otro |
| `tamano_negocio` | radio | ✅ | Micro (1-9), Pequeña (10-49), Mediana (50-199) |
| `servicio_interes` | select | ✅ | Los 6 servicios + "Aún no sé" |
| `como_se_entero` | select | ❌ | Google, Referido, Redes, Newsletter, Otro |

---

## 📦 CAPA 2 — Específica por servicio

### 🟢 02 — Consultoría Empresarial ($250)

| Campo | Tipo | Obligatorio |
|---|---|---|
| `estado_actual` | radio | ✅ | "Validando idea" / "Tengo negocio informal" / "Tengo RUC pero recién empiezo" |
| `descripcion_idea` | textarea | ✅ | Máx 500 caracteres |
| `capital_disponible` | radio | ✅ | <$500 / $500-$2,000 / $2,000-$10,000 / >$10,000 |
| `timeline_arranque` | radio | ✅ | Inmediato / 1-3 meses / 3-6 meses / Solo explorando |

---

### 🟢 01 — Análisis de Competencia ($600)

| Campo | Tipo | Obligatorio |
|---|---|---|
| `url_web` | url | ❌ | Si tiene web |
| `url_instagram` | url | ❌ | Si tiene Instagram |
| `competidores_conocidos` | textarea | ✅ | Lista de 3-5 competidores |
| `facturacion_actual_mensual` | radio | ✅ | <$1k / $1k-$5k / $5k-$20k / >$20k |
| `meta_facturacion_6_meses` | radio | ✅ | Mismos rangos |
| `clientes_nuevos_por_mes` | number | ❌ | Cuántos capta actualmente |

---

### 🟡 03 — Estrategia para Ganar Clientes ($1,550)

| Campo | Tipo | Obligatorio |
|---|---|---|
| `url_web` | url | ✅ | |
| `trafico_mensual_actual` | radio | ✅ | <500 / 500-2k / 2k-10k / >10k |
| `leads_mensuales` | number | ✅ | |
| `ventas_mensuales` | number | ✅ | |
| `meta_clientes_90_dias` | number | ✅ | |
| `presupuesto_para_ads` | radio | ✅ | $0 / <$200 / $200-$1k / >$1k mensual |
| `tipo_decisor` | radio | ✅ | Unipersonal / Comité / Familiar |

---

### 🟡 05 — Plan para Salir en Google ($1,300)

| Campo | Tipo | Obligatorio |
|---|---|---|
| `url_web` | url | ✅ | |
| `search_console_acceso` | radio | ✅ | Sí / No / No sé |
| `visitas_organicas_mensuales` | radio | ✅ | <100 / 100-500 / 500-2k / >2k |
| `keywords_actuales_top10` | number | ❌ | Si los conocen |
| `ciudad_objetivo_principal` | select | ✅ | Local o nacional |
| `disponibilidad_crear_contenido` | radio | ✅ | Sí, mensual / Trimestral / Solo contratar |

---

### 🟡 06 — Reingeniería de Procesos ($1,500)

| Campo | Tipo | Obligatorio |
|---|---|---|
| `tamano_equipo` | number | ✅ | Personas en operación |
| `areas_principales` | checkbox | ✅ | Ventas, Operaciones, Admin, Soporte, Logística |
| `software_actual` | textarea | ✅ | Lista de herramientas |
| `proceso_mas_doloroso` | textarea | ✅ | Máx 500 caracteres |
| `horas_perdidas_semana_estimadas` | number | ❌ | Estimación del cliente |
| `procesos_documentados` | radio | ✅ | Sí, todos / Algunos / Casi nada |

---

### 🔴 04 — Estudio de Factibilidad ($3,500)

| Campo | Tipo | Obligatorio |
|---|---|---|
| `tipo_inversion` | radio | ✅ | Patrimonio propio / Préstamo bancario / Inversionistas / Mixto |
| `monto_total_estimado` | number | ✅ | En USD |
| `decision_unipersonal` | radio | ✅ | Sí / No (socios) |
| `cantidad_socios` | number | ❌ | Si No |
| `timeline_decision` | radio | ✅ | Inmediato / 30 días / 60 días / 90 días |
| `tiene_local_o_terreno` | radio | ✅ | Sí / Buscando / Aún no |
| `experiencia_previa_en_sector` | textarea | ✅ | |

---

## 🧠 CAPA 3 — Calificación (capa invisible para el cliente)

Estos campos los llena **Ale automáticamente** o se calculan:

| Campo | Cómo se llena | Para qué sirve |
|---|---|---|
| `tier_servicio` | Auto (por servicio elegido) | Verde/Amarillo/Rojo |
| `score_calificacion` | Auto (0-100 según respuestas) | Routing automático |
| `requiere_llamada_previa` | Auto (true si tier Rojo o ticket >$2,000) | Activar flujo César |
| `lead_source_quality` | Auto (de dónde vino) | Métrica de canal |
| `utm_campaign` | Auto (si vino de Ads) | Tracking |
| `fecha_primer_contacto` | Auto | Embudo |
| `dispositivo` | Auto (mobile/desktop) | UX |

---

## 🚦 Lógica de routing post-envío

```
Formulario enviado
    │
    ├─ tier = 🟢 (bajo) → Ale envía email confirmación + agenda sesión
    │
    ├─ tier = 🟡 (medio) → Ale confirma recepción + notifica a César vía Slack/CRM
    │                       César llama en <24h
    │
    └─ tier = 🔴 (alto) → Ale NO responde automáticamente
                          Notifica a César inmediatamente
                          César agenda llamada de calificación primero
```

---

## 📊 Métricas que el CRM debe trackear por servicio

| Métrica | Para qué |
|---|---|
| Tasa de conversión lead → cierre | Eficiencia del formulario |
| Tiempo promedio de respuesta | SLA por tier |
| Ticket promedio real (vs precio lista) | Detectar descuentos |
| Servicio más común entre referidos | Calidad del upsell |
| Razón de pérdida por servicio | Mejorar copy/form |
