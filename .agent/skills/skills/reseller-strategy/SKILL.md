---
description: Estrategia completa para la implementación del sistema SAS de revendedores y migración.
---

# Estrategia de Implementación: Sistema SAS de Revendedores (Project Regístrame Ya)

Esta skill define la hoja de ruta estratégica para transformar la aplicación de vCard en un sistema SAS con red comercial, basado estrictamente en las definiciones del documento de planificación (`doc.docx`).

## 🏢 Visión General
Transformar "Regístrame Ya" en una plataforma donde **Admins** gestionan **Vendedores**, y estos a su vez gestionan **Clientes**, manteniendo un control financiero centralizado y estricto.

---

## 🛑 Fase 1: Migración Tecnológica (Prioridad Inmediata)
**Objetivo:** Cambiar la infraestructura sin romper la funcionalidad actual.

1.  **Réplica Exacta de Base de Datos:**
    -   Origen: Supabase (PostgreSQL).
    -   Destino: StackCP (MySQL).
    -   Acción: Crear tablas en MySQL con la **misma estructura** exacta que en Supabase (`registraya_vcard_registros`, etc.).
    -   Migración de Datos: Copiar todos los registros existentes para asegurar continuidad.

2.  **Cambio de Conexión:**
    -   Actualizar el backend (Next.js API routes) para usar un ORM compatible con MySQL (ej. Prisma o Drizzle) en lugar del cliente de Supabase.
    -   **Importante:** Mantener la lógica de negocio intacta por ahora.

---

## 🚀 Fase 2: Implementación Estructural (El "SAS")
**Objetivo:** Preparar el sistema para múltiples actores (Admin, Vendedor).

1.  **Nuevo Modelo de Datos (MySQL):**
    -   **`users` (Admins/Vendedores):**
        -   `id`, `username`, `password_hash`, `role` (admin, seller), `city`, `status` (active/inactive).
    -   **`sellers_profile`:**
        -   `user_id`, `commission_rate` (default 50%), `total_sales`, `pending_balance`.
    -   **`clients` (La tabla actual `registros` modificada):**
        -   Agregar `seller_id` (FK).
        -   Agregar `payment_status` (pending, verified).
        -   Agregar `commission_status` (pending, paid).

2.  **Panel de Administración (El "Core"):**
    -   **Gestión de Credenciales:** El Admin crea usuarios para los Vendedores.
    -   **Asignación:** Definir a qué ciudad o zona pertenece cada vendedor.

---

## 💰 Fase 3: Reglas de Negocio y Financieras (Según Doc)
**Objetivo:** Control financiero estricto y flujo de caja ordenado.

### 1. Política de Cobros (Regla de Oro)
> **"El dinero entra completo a la empresa."**

-   **Prohibido:** Que el vendedor cobre en efectivo y se quede su parte, depositando solo el resto.
-   **Flujo Correcto:**
    1.  Cliente paga $20 (o precio final) a cuentas oficiales de "Regístrame Ya".
    2.  Sistema detecta el pago.
    3.  Sistema marca venta como "Pagada".
    4.  Sistema genera registro de "Comisión Pendiente" ($10) para el vendedor asociado.

### 2. Política de Comisiones
-   **Cálculo:** 50% del valor de venta (o lo pactado).
-   **Pago al Vendedor:** Se realiza por transferencia desde la empresa al vendedor (diario, semanal o según corte).
-   **Fiscalidad:**
    -   Considerar el impacto del IVA (precio podría subir a $23).
    -   Vendedores deben idealmente facturar sus comisiones o firmar contrato mercantil.

---

## 📊 Fase 4: Métricas y Escalabilidad
**Objetivo:** Control de gestión.

-   **Dashboard por Vendedor:**
    -   "Mis Ventas hoy".
    -   "Mi Saldo pendiente".
-   **Dashboard Admin:**
    -   Ventas por Ciudad.
    -   Ranking de Vendedores.
    -   Flujo de Caja Real vs Comisiones por Pagar.

---

## 📝 Instrucciones de Uso
Para ejecutar cualquier paso de este plan, el agente debe:
1.  Verificar en qué fase estamos.
2.  Si es Fase 1, centrarse SOLO en replicar funcionalidad (no innovar).
3.  Si es Fase 2+, asegurar que cada cambio de código respete la "Regla de Oro" financiera.
