/**
 * Plantilla HTML responsive y elegante para emails del Newsletter de César Reyes Jaramillo.
 * Compatible con clientes de correo como Gmail, Apple Mail, Outlook, etc.
 */

interface NewsletterEmailProps {
  subject: string;
  preheader?: string;
  content: string; // Puede contener HTML o texto formateado
  imageUrl?: string;
  ctaText?: string;
  ctaUrl?: string;
  unsubscribeUrl?: string;
}

export function generateNewsletterHtml({
  subject,
  preheader = "Actualizaciones exclusivas y estrategias de negocio de César Reyes Jaramillo",
  content,
  imageUrl,
  ctaText,
  ctaUrl,
  unsubscribeUrl = "mailto:menuobjetivo@cesarreyesjaramillo.com?subject=Baja%20Newsletter",
}: NewsletterEmailProps): string {
  // Convertir saltos de línea simples en párrafos si no viene como HTML
  const formattedContent = content.includes("<p>") || content.includes("<div>") || content.includes("<br")
    ? content
    : content
        .split("\n\n")
        .map((p) => `<p style="margin: 0 0 16px 0; line-height: 1.6; color: #d4d4d8; font-size: 16px;">${p.replace(/\n/g, "<br>")}</p>`)
        .join("");

  return `<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${subject}</title>
  <style>
    /* Estilos base de reseteo para clientes de correo */
    body, table, td, a { -webkit-text-size-adjust: 100%; -ms-text-size-adjust: 100%; }
    table, td { mso-table-lspace: 0pt; mso-table-rspace: 0pt; }
    img { -ms-interpolation-mode: bicubic; border: 0; outline: none; text-decoration: none; }
    body { margin: 0; padding: 0; width: 100% !important; background-color: #121212; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; }
    @media only screen and (max-width: 620px) {
      .container-table { width: 100% !important; }
      .header-padding { padding: 24px 20px !important; }
      .content-padding { padding: 24px 20px !important; }
    }
  </style>
</head>
<body style="margin: 0; padding: 0; background-color: #121212; color: #ffffff;">
  <!-- Preheader oculto para clientes de correo -->
  <div style="display: none; font-size: 1px; color: #121212; line-height: 1px; max-height: 0px; max-width: 0px; opacity: 0; overflow: hidden;">
    ${preheader}
  </div>

  <center style="width: 100%; background-color: #121212; padding: 30px 10px 40px 10px;">
    <!-- Contenedor principal del correo -->
    <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="600" class="container-table" style="max-width: 600px; width: 100%; background-color: #1a1a1a; border-radius: 12px; overflow: hidden; border: 1px solid #2a2a2a; box-shadow: 0 10px 25px rgba(0,0,0,0.5);">
      
      <!-- Encabezado / Branding -->
      <tr>
        <td class="header-padding" align="center" style="background: linear-gradient(180deg, #241d1a 0%, #1a1a1a 100%); padding: 32px 30px 24px 30px; border-bottom: 1px solid #2d2420;">
          <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%">
            <tr>
              <td align="center">
                <a href="https://cesarreyesjaramillo.com" target="_blank" style="text-decoration: none;">
                  <h1 style="margin: 0; font-size: 26px; font-weight: 800; letter-spacing: 0.5px; color: #f59e0b; font-family: 'Georgia', serif;">
                    César Reyes Jaramillo
                  </h1>
                  <p style="margin: 4px 0 0 0; font-size: 13px; color: #a1a1aa; letter-spacing: 1px; text-transform: uppercase;">
                    Estrategia de Negocios · Desarrollo Web · Posicionamiento SEO & GEO
                  </p>
                </a>
              </td>
            </tr>
          </table>
        </td>
      </tr>

      <!-- Imagen destacada opcional -->
      ${
        imageUrl
          ? `
      <tr>
        <td align="center" style="padding: 0; background-color: #000000;">
          <img src="${imageUrl}" alt="${subject}" width="600" style="width: 100%; max-width: 600px; display: block; object-fit: cover; max-height: 320px;" />
        </td>
      </tr>
      `
          : ""
      }

      <!-- Título y Contenido principal -->
      <tr>
        <td class="content-padding" style="padding: 36px 36px 28px 36px;">
          <!-- Título del newsletter -->
          <h2 style="margin: 0 0 20px 0; font-size: 22px; font-weight: 700; line-height: 1.35; color: #ffffff;">
            ${subject}
          </h2>

          <!-- Línea divisoria sutil -->
          <div style="width: 48px; height: 3px; background-color: #f59e0b; margin-bottom: 24px; border-radius: 2px;"></div>

          <!-- Cuerpo -->
          <div style="font-size: 16px; line-height: 1.65; color: #d4d4d8;">
            ${formattedContent}
          </div>

          <!-- Botón CTA opcional -->
          ${
            ctaText && ctaUrl
              ? `
          <div style="margin: 32px 0 16px 0; text-align: center;">
            <a href="${ctaUrl}" target="_blank" style="display: inline-block; background-color: #f59e0b; color: #121212; font-weight: 700; font-size: 15px; padding: 14px 32px; border-radius: 9999px; text-decoration: none; box-shadow: 0 4px 14px rgba(245, 158, 11, 0.35);">
              ${ctaText} →
            </a>
          </div>
          `
              : ""
          }
        </td>
      </tr>

      <!-- Frase / Firma del autor -->
      <tr>
        <td style="padding: 0 36px 32px 36px;">
          <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%" style="background-color: #241d1a; border-radius: 8px; border-left: 4px solid #f59e0b;">
            <tr>
              <td style="padding: 16px 20px;">
                <p style="margin: 0; font-size: 14px; font-style: italic; color: #e4e4e7;">
                  "No adivines, mide. El crecimiento rentable de un negocio se construye con datos y estrategia."
                </p>
                <p style="margin: 6px 0 0 0; font-size: 13px; font-weight: 600; color: #f59e0b;">
                  — César Reyes Jaramillo
                </p>
              </td>
            </tr>
          </table>
        </td>
      </tr>

      <!-- Pie de página / Cumplimiento legal y baja -->
      <tr>
        <td style="background-color: #141414; padding: 28px 30px; text-align: center; border-top: 1px solid #242424;">
          <p style="margin: 0 0 12px 0; font-size: 14px; font-weight: 600; color: #ffffff;">
            César Reyes Jaramillo · Consultoría & Tecnología
          </p>
          <p style="margin: 0 0 16px 0; font-size: 12px; color: #888888; line-height: 1.5;">
            Loja, Ecuador · Conectando y haciendo crecer negocios a nivel nacional.<br>
            <a href="https://cesarreyesjaramillo.com" target="_blank" style="color: #f59e0b; text-decoration: none;">www.cesarreyesjaramillo.com</a> · 
            <a href="mailto:negocios@cesarreyesjaramillo.com" style="color: #f59e0b; text-decoration: none;">negocios@cesarreyesjaramillo.com</a>
          </p>

          <p style="margin: 0; font-size: 11px; color: #666666; line-height: 1.5;">
            Recibes este correo porque te suscribiste al newsletter en nuestro sitio web.<br>
            Si deseas dejar de recibir estas publicaciones, puedes 
            <a href="${unsubscribeUrl}" style="color: #999999; text-decoration: underline;">darte de baja aquí</a>.
          </p>
        </td>
      </tr>

    </table>
  </center>
</body>
</html>`;
}
