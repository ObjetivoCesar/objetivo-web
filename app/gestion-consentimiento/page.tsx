'use client';

import { useState, useEffect, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { IconLoader2, IconAlertCircle, IconShieldCheck, IconMessageDots, IconMail, IconPlayerPlay, IconLock } from '@tabler/icons-react';
import Link from 'next/link';

function ConsentContent() {
    const searchParams = useSearchParams();
    const id = searchParams.get('id');

    const [loading, setLoading] = useState(true);
    const [saving, setSaving] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [success, setSuccess] = useState(false);
    const [data, setData] = useState<any>(null);

    const [whatsapp, setWhatsapp] = useState(false);
    const [email, setEmail] = useState(false);
    const [media, setMedia] = useState(false);
    const [duracion, setDuracion] = useState(6);

    useEffect(() => {
        if (!id) {
            setError('Falta el ID de consentimiento');
            setLoading(false);
            return;
        }

        const fetchData = async () => {
            try {
                const res = await fetch(`/api/consent/${id}`);
                const json = await res.json();
                if (!res.ok) throw new Error(json.error || 'Error al cargar datos');

                setData(json);
                setWhatsapp(json.consentimientos.whatsapp);
                setEmail(json.consentimientos.email);
                setMedia(json.consentimientos.media);
                setDuracion(json.duracion_meses || 6);
            } catch (err: any) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };
        fetchData();
    }, [id]);

    const handleSave = async () => {
        setSaving(true);
        try {
            const res = await fetch('/api/consent', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    consent_uuid: id,
                    consent_whatsapp: whatsapp,
                    consent_email: email,
                    consent_media: media,
                    nombre: data.nombre,
                    email: data.email,
                    whatsapp: data.whatsapp,
                    duracion_meses: duracion
                })
            });
            if (!res.ok) throw new Error('Error al guardar cambios');
            setSuccess(true);
            setTimeout(() => setSuccess(false), 3000);
        } catch (err: any) {
            setError(err.message);
        } finally {
            setSaving(false);
        }
    };

    if (loading) return (
        <div className="min-h-screen bg-[#f1f5f9] flex items-center justify-center">
            <IconLoader2 className="animate-spin text-black w-10 h-10" />
        </div>
    );

    if (error && !data) return (
        <div className="min-h-screen bg-[#f1f5f9] flex items-center justify-center p-4">
            <div className="max-w-md w-full bg-white rounded-[20px] shadow-xl p-8 text-center font-sans">
                <IconAlertCircle className="w-16 h-16 text-red-500 mx-auto mb-4" />
                <h1 className="text-xl font-bold text-gray-900 mb-2">Registro no encontrado</h1>
                <p className="text-gray-500 text-sm mb-6">El enlace es inválido o el registro ha expirado.</p>
                <Link href="/" className="bg-[#121212] text-white px-6 py-3 rounded-full font-bold inline-block text-sm">Volver al inicio</Link>
            </div>
        </div>
    );

    return (
        <div className="min-h-screen bg-[#f1f5f9] py-12 px-4 font-sans" style={{fontFamily: 'Montserrat, sans-serif'}}>
            <div className="max-w-[1200px] mx-auto bg-white rounded-[20px] shadow-2xl overflow-hidden">
                
                {/* Header Estilo Banner */}
                <div className="bg-[#f8fafc] border-bottom border-[#f1f5f9] px-8 py-6 flex justify-between items-center">
                    <span className="text-[10px] font-bold text-[#64748b] tracking-widest uppercase">Configuración de privacidad y recontacto</span>
                    <div className="flex items-center gap-4">
                        <Link href="/" className="text-[#94a3b8] hover:text-black transition-colors"><IconShieldCheck /></Link>
                    </div>
                </div>

                <div className="p-10 text-center">
                    <h1 className="text-2xl font-extrabold text-[#0f172a] mb-3">Gestione sus preferencias de contacto</h1>
                    <p className="text-[#64748b] text-sm max-w-2xl mx-auto mb-8">
                        Seleccione los medios por los cuales desea recibir información y el tiempo de validez de su autorización personalizada.
                    </p>

                    {/* Selector de Tiempo */}
                    <div className="mb-10">
                        <select 
                            value={duracion}
                            onChange={(e) => setDuracion(Number(e.target.value))}
                            className="bg-[#f1f5f9] border-2 border-[#121212] rounded-full px-6 py-2 font-extrabold text-sm outline-none cursor-pointer uppercase"
                        >
                            <option value={6}>AUTORIZAR RECONTACTO POR 6 MESES</option>
                            <option value={12}>AUTORIZAR RECONTACTO POR 12 MESES</option>
                            <option value={24}>AUTORIZAR RECONTACTO POR 24 MESES</option>
                        </select>
                    </div>

                    {/* Grid de Tarjetas (Igual al Banner) */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mb-10">
                        
                        {/* 1. Básicas (Siempre ON) */}
                        <div className="border border-[#e2e8f0] rounded-[20px] p-6 text-left flex flex-col bg-white">
                            <div className="flex justify-between items-center mb-4">
                                <span className="font-extrabold text-sm text-[#0f172a]">Operaciones básicas</span>
                                <div className="w-10 h-5 bg-[#121212] rounded-full relative">
                                    <div className="absolute right-1 top-1 w-3 h-3 bg-white rounded-full" />
                                </div>
                            </div>
                            <p className="text-[12px] text-[#64748b] leading-relaxed mb-4">
                                Cookies técnicas necesarias para el funcionamiento seguro del sitio y la gestión de su sesión.
                            </p>
                            <div className="mt-auto pt-4 border-t border-[#f1f5f9] space-y-2">
                                <div className="flex items-center gap-2 text-[10px] text-[#94a3b8] font-bold">
                                    <IconLock size={14}/> SEGURIDAD Y SESIÓN
                                </div>
                                <div className="flex items-center gap-2 text-[10px] text-[#94a3b8] font-bold">
                                    <IconShieldCheck size={14}/> NAVEGADOR Y RESOLUCIÓN
                                </div>
                            </div>
                        </div>

                        {/* 2. WhatsApp */}
                        <div className={`border rounded-[20px] p-6 text-left flex flex-col transition-all bg-white ${whatsapp ? 'border-[#121212] shadow-lg' : 'border-[#e2e8f0]'}`}>
                            <div className="flex justify-between items-center mb-4">
                                <span className="font-extrabold text-sm text-[#0f172a]">WhatsApp / Chat</span>
                                <button onClick={() => setWhatsapp(!whatsapp)} className={`w-10 h-5 rounded-full relative transition-colors ${whatsapp ? 'bg-[#121212]' : 'bg-[#e2e8f0]'}`}>
                                    <div className={`absolute top-1 w-3 h-3 bg-white rounded-full transition-all ${whatsapp ? 'left-6' : 'left-1'}`} />
                                </button>
                            </div>
                            <p className="text-[12px] text-[#64748b] leading-relaxed mb-4">
                                Permite el envío de audios, videos explicativos, mensajes de texto y enlaces directos vía WhatsApp.
                            </p>
                            <div className="mt-auto pt-4 border-t border-[#f1f5f9] space-y-2">
                                <div className="flex items-center gap-2 text-[10px] text-[#94a3b8] font-bold">
                                    <IconMessageDots size={14}/> MENSAJES Y AUDIOS
                                </div>
                                <div className="flex items-center gap-2 text-[10px] text-[#94a3b8] font-bold">
                                    <IconPlayerPlay size={14}/> VIDEOS INFORMATIVOS
                                </div>
                            </div>
                        </div>

                        {/* 3. Email */}
                        <div className={`border rounded-[20px] p-6 text-left flex flex-col transition-all bg-white ${email ? 'border-[#121212] shadow-lg' : 'border-[#e2e8f0]'}`}>
                            <div className="flex justify-between items-center mb-4">
                                <span className="font-extrabold text-sm text-[#0f172a]">Recontacto Correo</span>
                                <button onClick={() => setEmail(!email)} className={`w-10 h-5 rounded-full relative transition-colors ${email ? 'bg-[#121212]' : 'bg-[#e2e8f0]'}`}>
                                    <div className={`absolute top-1 w-3 h-3 bg-white rounded-full transition-all ${email ? 'left-6' : 'left-1'}`} />
                                </button>
                            </div>
                            <p className="text-[12px] text-[#64748b] leading-relaxed mb-4">
                                Envío de correos electrónicos con actualizaciones de su solicitud, material de apoyo y links de interés.
                            </p>
                            <div className="mt-auto pt-4 border-t border-[#f1f5f9] space-y-2">
                                <div className="flex items-center gap-2 text-[10px] text-[#94a3b8] font-bold">
                                    <IconMail size={14}/> SEGUIMIENTO PERSONALIZADO
                                </div>
                                <div className="flex items-center gap-2 text-[10px] text-[#94a3b8] font-bold">
                                    <IconShieldCheck size={14}/> HISTORIAL DE CONTACTO
                                </div>
                            </div>
                        </div>

                        {/* 4. Multimedia */}
                        <div className={`border rounded-[20px] p-6 text-left flex flex-col transition-all bg-white ${media ? 'border-[#121212] shadow-lg' : 'border-[#e2e8f0]'}`}>
                            <div className="flex justify-between items-center mb-4">
                                <span className="font-extrabold text-sm text-[#0f172a]">Mejora de Contenido</span>
                                <button onClick={() => setMedia(!media)} className={`w-10 h-5 rounded-full relative transition-colors ${media ? 'bg-[#121212]' : 'bg-[#e2e8f0]'}`}>
                                    <div className={`absolute top-1 w-3 h-3 bg-white rounded-full transition-all ${media ? 'left-6' : 'left-1'}`} />
                                </button>
                            </div>
                            <p className="text-[12px] text-[#64748b] leading-relaxed mb-4">
                                Analiza qué videos o audios le son más útiles para personalizar el material multimedia que le enviamos.
                            </p>
                            <div className="mt-auto pt-4 border-t border-[#f1f5f9] space-y-2">
                                <div className="flex items-center gap-2 text-[10px] text-[#94a3b8] font-bold">
                                    <IconShieldCheck size={14}/> PREFERENCIA DE MEDIOS
                                </div>
                                <div className="flex items-center gap-2 text-[10px] text-[#94a3b8] font-bold">
                                    <IconPlayerPlay size={14}/> INTERÉS MULTIMEDIA
                                </div>
                            </div>
                        </div>

                    </div>

                    {/* Footer de la Tarjeta */}
                    <div className="border-t border-[#f1f5f9] pt-8">
                        <p className="text-[11px] font-bold text-[#0f172a] mb-1 uppercase tracking-widest">Privacidad Garantizada</p>
                        <p className="text-[11px] text-[#64748b] mb-8">Manejamos su recontacto bajo estrictos estándares de seguridad y transparencia.</p>
                        
                        <div className="flex flex-col md:flex-row items-center justify-center gap-10">
                            <button 
                                onClick={handleSave}
                                disabled={saving}
                                className="bg-[#121212] text-white px-10 py-4 rounded-full font-extrabold text-sm hover:scale-105 transition-all disabled:opacity-50 min-w-[280px] uppercase"
                            >
                                {saving ? 'GUARDANDO...' : success ? '¡CAMBIOS GUARDADOS!' : 'GUARDAR PREFERENCIAS'}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            
            <div className="mt-8 flex justify-center items-center gap-8">
                <Link href="/" className="text-[11px] font-bold text-[#94a3b8] hover:text-black uppercase tracking-tighter">Configurar</Link>
                <Link href="/" className="text-[11px] font-bold text-[#94a3b8] hover:text-black uppercase tracking-tighter">Política de privacidad</Link>
            </div>
        </div>
    );
}

export default function GestionConsentimiento() {
    return (
        <Suspense fallback={
            <div className="min-h-screen bg-[#f1f5f9] flex items-center justify-center">
                <IconLoader2 className="animate-spin text-black w-10 h-10" />
            </div>
        }>
            <ConsentContent />
        </Suspense>
    );
}
