# 26 — Software a Medida / CRM Personalizado

> **Empresa:** OBJETIVO (marca personal) — pendiente decisión Opción A/B/C
> **Fuente:** cesarreyesjaramillo.com/software-gestion-servicios
> **Tag sistema:** `software-medida`
> **Tag de marca:** OBJETIVO Software / CRM a Medida
> **Modalidad:** Servicio de desarrollo a medida
> **Tier:** 🟡 Medio-Alto (ticket alto, requiere calificación)
> **Fecha de carga:** 2026-08-09

---

## Descripción comercial (texto extraído del sitio OBJETIVO)

**El control total de tus proyectos y clientes hecho para ti**

> No es un software genérico que se adapta "más o menos". Lo construimos sobre cómo trabaja tu empresa: tus procesos, tu equipo, tu forma de cotizar.

**Propuesta de valor diferencial (orilla A → orilla B):**
- **Orilla A:** "Tus técnicos se quedan sin señal en una obra", "anotas reservas en una agenda o WhatsApp", "ya te ofrecieron algo parecido la semana pasada"
- **Orilla B:** "Control total desde el día 1, sin comisiones ocultas, pago seguro con PayPhone"
- **Puente (NO debería venderse según Manual Cap 2.1):** "software personalizado, CRM, dashboard"

**Sectores que atiende (7):**
1. Educación — plataformas de aprendizaje, matrículas
2. Salud — historias clínicas, turnos médicos
3. Comercio — puntos de venta, e-commerce, lealtad
4. Turismo — reservas, check-ins, experiencias
5. Industria — procesos, mantenimiento, monitoreo
6. Manufactura — inventarios, órdenes, calidad
7. Servicios — agendamiento, tickets, atención al cliente

**Promesa clave:** "Que se pague sola" — financia hasta 24 meses sin intereses.

**Comparativa contra objeciones comunes:**
- "Ya te ofrecieron algo parecido la semana pasada, qué tiene de diferente" → respuesta en landing
- "¿Por qué no seguir usando Excel o Notion?" → respuesta en landing
- "¿Cuánto tiempo tarda en estar listo?" → respuesta en landing
- "¿Qué pasa si mis técnicos se quedan sin señal?" → respuesta en landing (bitácora offline)
- "¿Tengo que pagar por funciones que no voy a usar?" → respuesta en landing (módulos independientes)

---

## SKUs individuales (4 módulos / planes)

| Módulo | Precio | Target | Incluye | Archivo |
|---|---|---|---|---|
| **Agendamiento** | $600 | Empresas que agendan visitas o citas | Calendario centralizado, código QR dinámico, asignación automática de tareas, recordatorios | [27-software-agendamiento.md](27-software-agendamiento.md) |
| **Cotizaciones** | $600 | Empresas que cotizan servicios a medida | Generación automática de PDFs, cotización personalizada al instante, inventario integrado, sistema a la medida | [28-software-cotizaciones.md](28-software-cotizaciones.md) |
| **Proyectos y Rutas** | $1,500 | Empresas con técnicos o trabajadores en campo | Control de proyectos y equipo, ubicación GPS en tiempo real, bitácora offline, fotos y reportes desde campo | [29-software-proyectos-rutas.md](29-software-proyectos-rutas.md) |
| **Suite Completa** | $2,500 | Empresas que buscan máxima eficiencia operativa | Todos los módulos integrados, chat offline, galería de eventos y promociones, integración con redes sociales | [30-software-suite-completa.md](30-software-suite-completa.md) |

**Pago:** Hasta 24 meses sin intereses. Sin comisiones ocultas. Pago seguro con PayPhone.

---

## Proceso operativo (inferido)

**Cliente entrega:**
- Descripción de sus procesos actuales
- Dolor principal que quiere resolver
- Tamaño de equipo
- Sectores / industrias que atiende
- Sistema actual (Excel, Notion, nada, otro CRM)
- Módulo(s) que le interesa(n)

**Proveedor entrega (4-12 semanas según módulo):**
- Software personalizado con los módulos elegidos
- Capacitación al equipo
- Documentación técnica
- Soporte post-implementación

**Post-entrega:**
- Actualizaciones según necesidad
- Soporte técnico

---

## Campos del formulario sugeridos

**Capa 1 — Base universal:**
| Campo | Tipo | Obligatorio |
|---|---|---|
| Nombre del responsable | text | ✅ |
| Email | email | ✅ |
| WhatsApp | tel | ✅ |
| Nombre de la empresa | text | ✅ |
| Ciudad | select | ✅ |
| Sector | select (los 7 listados arriba) | ✅ |

**Capa 2 — Específica por módulo:**
| Campo | Tipo | Obligatorio |
|---|---|---|
| Tamaño del equipo | number | ✅ |
| ¿Qué sistema usa actualmente? | checkbox (Excel, Notion, otro CRM, papel, ninguno) | ✅ |
| ¿Cuál es su dolor principal? | textarea | ✅ |
| Módulo(s) que le interesa(n) | checkbox (4 opciones) | ✅ |
| ¿Necesita integración con sistemas actuales? | textarea | ❌ |
| Timeline deseado | radio | ✅ |
| Presupuesto aproximado | radio (<$1k / $1k-$3k / $3k-$5k / >$5k) | ✅ |

---

## Upsell natural

- **Agendamiento → Cotizaciones** cuando empiece a necesitar generar propuestas
- **Cotizaciones → Proyectos y Rutas** cuando crezca y tenga equipo en campo
- **Cualquier módulo → Suite Completa** cuando quiera integrar todo
- **Software a Medida → Estrategia para Ganar Clientes (OBJETIVO)** para vender más con el software
- **Software a Medida → Plan SEO (OBJETIVO)** para captar clientes que llenen el sistema

---

## Decisión de governance

Este producto está claramente en OBJETIVO porque:
1. Es servicio a medida (no recurrente)
2. Requiere consultoría de César para definir alcance
3. Es desarrollo personalizado (no SaaS estandarizado)
4. **Inconsistencia detectada:** El blog tiene categoría `Software Personalizado` con URLs `/blog/software-personalizado/crm-turismo`, `/crm-educacion`, `/crm-salud`, etc. — esos posts están actualmente en cesarreyesjaramillo.com. **Decisión recomendada:** Mantenerlos en OBJETIVO porque son contenido informativo sobre los servicios.

---

## Notas internas

- **Demo en vivo real:** `software-orcin-eight.vercel.app/admin` — el equipo puede mostrar esto a leads calificados
- Sectores específicos (educación, salud, etc.) tienen posts de blog dedicados → buena estructura de cluster temático
- Tiene FAQ bien armada → candidata a FAQ schema markup
- El pricing escalonado es inteligente (1 módulo, 2 módulos, 3 módulos, suite) — facilita upsell natural
