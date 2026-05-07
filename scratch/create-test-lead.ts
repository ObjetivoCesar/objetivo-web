import dotenv from 'dotenv';
import path from 'path';
import { pool } from '../lib/db';
import { sendConsentConfirmationEmail } from '../lib/consentEmail';

// Cargar variables de entorno
dotenv.config({ path: path.resolve(__dirname, '../.env') });

async function runTest() {
    const testUuid = 'test-uuid-123456789';
    console.log('🚀 Creando registro de prueba en la DB...');
    
    try {
        // 1. Insertar en la base de datos
        await pool.execute(
            `INSERT INTO clientes_consentimiento 
            (consent_uuid, nombre, email, whatsapp, consent_whatsapp, consent_email, consent_media, duracion_meses) 
            VALUES (?, ?, ?, ?, ?, ?, ?, ?)
            ON DUPLICATE KEY UPDATE nombre = VALUES(nombre)`,
            [
                testUuid,
                'Cristhopher (Prueba)',
                'cristhopheryeah113@gmail.com',
                '0999999999',
                1, // whatsapp
                1, // email
                0, // media
                6  // duracion
            ]
        );
        console.log('✅ Registro creado en MySQL.');

        // 2. Enviar el correo
        const testData = {
            email: 'cristhopheryeah113@gmail.com',
            nombre: 'Cristhopher (Prueba)',
            uuid: testUuid,
            consentimientos: {
                whatsapp: true,
                email: true,
                media: false
            }
        };

        const result = await sendConsentConfirmationEmail(testData);

        if (result.success) {
            console.log('✅ Correo enviado con éxito.');
        } else {
            console.error('❌ Error al enviar correo:', result.error);
        }

        console.log('\n✨ LISTO. Ya puedes recargar la página en el navegador.');
        console.log('URL:', `https://cesarreyesjaramillo.com/gestion-consentimiento?id=${testUuid}`);

    } catch (err) {
        console.error('❌ Error general:', err);
    } finally {
        process.exit();
    }
}

runTest();
