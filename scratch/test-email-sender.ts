import dotenv from 'dotenv';
import path from 'path';
import { sendConsentConfirmationEmail } from '../lib/consentEmail';

// Cargar variables de entorno
dotenv.config({ path: path.resolve(__dirname, '../.env') });

async function runTest() {
    console.log('🚀 Iniciando prueba de envío de correo...');
    
    const testData = {
        email: 'cristhopheryeah113@gmail.com',
        nombre: 'Cristhopher (Prueba)',
        uuid: 'test-uuid-123456789',
        consentimientos: {
            whatsapp: true,
            email: true,
            media: false
        }
    };

    const result = await sendConsentConfirmationEmail(testData);

    if (result.success) {
        console.log('✅ Correo enviado con éxito a:', testData.email);
    } else {
        console.error('❌ Error al enviar correo:', result.error);
    }
}

runTest();
