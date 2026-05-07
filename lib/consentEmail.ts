import nodemailer from "nodemailer";
import { v4 as uuidv4 } from 'uuid';

interface ConsentEmailData {
    email: string;
    nombre: string;
    uuid: string;
    consentimientos: {
        whatsapp: boolean;
        email: boolean;
        media: boolean;
    };
}

export async function sendConsentConfirmationEmail(data: ConsentEmailData) {
    try {
        const { email, nombre, uuid, consentimientos } = data;

        const transporter = nodemailer.createTransport({
            host: process.env.EMAIL_SERVER,
            port: Number(process.env.EMAIL_PORT),
            secure: true,
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASSWORD,
            },
            tls: {
                rejectUnauthorized: false
            }
        });

        // Verificar conexión
        await transporter.verify();

        const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://cesarreyesjaramillo.com';
        const manageUrl = `${siteUrl}/gestion-consentimiento?id=${uuid}`;
        const revokeUrl = `${siteUrl}/api/consent/revoke?id=${uuid}`;

        const html = `
      <div style="font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; background-color: #f9f9f9; padding: 40px 20px;">
        <div style="max-width: 600px; margin: 0 auto; background-color: #ffffff; border-radius: 12px; overflow: hidden; box-shadow: 0 10px 25px rgba(0,0,0,0.05); border: 1px solid #eeeeee;">
            
            <div style="padding: 40px 30px;">
                <div style="text-align: center; margin-bottom: 30px;">
                   <h2 style="color: #000; font-size: 24px; margin: 0; font-weight: 800; letter-spacing: -0.5px;">OBJETIVO</h2>
                   <p style="color: #666; font-size: 14px; margin-top: 5px;">Privacidad y Consentimiento</p>
                </div>

                <h1 style="color: #111; font-size: 22px; margin: 20px 0 15px; line-height: 1.3;">Hola, ${nombre} 👋</h1>
                
                <p style="color: #444; font-size: 16px; line-height: 1.6; margin-bottom: 25px;">
                    Gracias por confiar en nosotros. Este correo es para confirmar las preferencias de privacidad que has seleccionado recientemente:
                </p>

                <div style="background-color: #fcfcfc; border-radius: 8px; padding: 20px; border: 1px solid #f0f0f0; margin-bottom: 30px;">
                    <ul style="list-style: none; padding: 0; margin: 0;">
                        <li style="margin-bottom: 12px; display: flex; align-items: center; font-size: 15px;">
                            <span style="color: ${consentimientos.whatsapp ? '#10b981' : '#ef4444'}; font-weight: bold; margin-right: 10px;">${consentimientos.whatsapp ? '✓' : '✕'}</span>
                            <span style="color: #333;">Comunicación por <b>WhatsApp</b>: ${consentimientos.whatsapp ? 'SÍ' : 'NO'}</span>
                        </li>
                        <li style="margin-bottom: 12px; display: flex; align-items: center; font-size: 15px;">
                            <span style="color: ${consentimientos.email ? '#10b981' : '#ef4444'}; font-weight: bold; margin-right: 10px;">${consentimientos.email ? '✓' : '✕'}</span>
                            <span style="color: #333;">Novedades por <b>Correo Electrónico</b>: ${consentimientos.email ? 'SÍ' : 'NO'}</span>
                        </li>
                        <li style="display: flex; align-items: center; font-size: 15px;">
                            <span style="color: ${consentimientos.media ? '#10b981' : '#ef4444'}; font-weight: bold; margin-right: 10px;">${consentimientos.media ? '✓' : '✕'}</span>
                            <span style="color: #333;">Uso de <b>Material Multimedia</b>: ${consentimientos.media ? 'SÍ' : 'NO'}</span>
                        </li>
                    </ul>
                </div>

                <p style="color: #666; font-size: 14px; line-height: 1.5; margin-bottom: 35px; text-align: center;">
                    Puedes cambiar estas preferencias o revocar tu consentimiento en cualquier momento utilizando los botones de abajo.
                </p>
                
                <div style="text-align: center; margin: 20px 0;">
                    <a href="${manageUrl}" style="background-color: #000000; color: #ffffff; padding: 14px 24px; text-decoration: none; border-radius: 8px; font-weight: bold; font-size: 15px; display: block; margin-bottom: 15px; border: 1px solid #000;">Gestionar mis permisos</a>
                    
                    <a href="${revokeUrl}" style="color: #ef4444; text-decoration: none; font-size: 14px; font-weight: 500;">Cancelar todas las autorizaciones</a>
                </div>
                
                <hr style="border: 0; border-top: 1px solid #eee; margin: 40px 0;" />
                
                <p style="font-size: 11px; color: #aaa; text-align: center; line-height: 1.5;">
                    Este correo se envió automáticamente en cumplimiento con la LOPDP. <br/>
                    ID de registro: ${uuid} <br/>
                    &copy; ${new Date().getFullYear()} Objetivo - César Reyes
                </p>
            </div>
        </div>
      </div>
    `;

        await transporter.sendMail({
            from: process.env.EMAIL_FROM || 'César Reyes <menuobjetivo@cesarreyesjaramillo.com>',
            to: email,
            subject: `🔐 Confirmación de tus preferencias de privacidad - ${nombre}`,
            html,
        });

        return { success: true };
    } catch (error) {
        console.error("Error enviando correo de consentimiento:", error);
        return { success: false, error };
    }
}
