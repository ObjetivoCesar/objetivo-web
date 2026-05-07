'use client';

import { useState, useEffect, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { IconCheck, IconShieldCheck, IconLoader2, IconAlertCircle } from '@tabler/icons-react';
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
        setError(null);
        setSuccess(false);

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
                    duracion_meses: data.duracion_meses
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

    const handleRevokeAll = async () => {
        if (!confirm('¿Estás seguro de que deseas revocar todos tus consentimientos? Dejarás de recibir cualquier tipo de comunicación.')) return;
        
        setWhatsapp(false);
        setEmail(false);
        setMedia(false);
        
        setSaving(true);
        try {
            await fetch('/api/consent', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    consent_uuid: id,
                    consent_whatsapp: false,
                    consent_email: false,
                    consent_media: false,
                    nombre: data.nombre,
                    email: data.email,
                    whatsapp: data.whatsapp,
                    duracion_meses: data.duracion_meses
                })
            });
            setSuccess(true);
        } catch (err: any) {
            setError(err.message);
        } finally {
            setSaving(false);
        }
    };

    if (loading) {
        return (
            <div className="min-h-screen bg-white flex items-center justify-center">
                <IconLoader2 className="animate-spin text-black w-10 h-10" />
            </div>
        );
    }

    if (error && !data) {
        return (
            <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
                <div className="max-w-md w-full bg-white rounded-2xl shadow-xl p-8 text-center">
                    <IconAlertCircle className="w-16 h-16 text-red-500 mx-auto mb-4" />
                    <h1 className="text-2xl font-bold text-gray-900 mb-2">Error de Acceso</h1>
                    <p className="text-gray-600 mb-6">{error}</p>
                    <Link href="/" className="bg-black text-white px-6 py-3 rounded-xl font-bold inline-block">
                        Volver al inicio
                    </Link>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-[#F9FAFB] py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-xl mx-auto">
                <div className="bg-white rounded-[2.5rem] shadow-[0_32px_64px_-16px_rgba(0,0,0,0.1)] border border-gray-100 overflow-hidden">
                    <div className="bg-black p-10 text-center">
                        <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                            <IconShieldCheck className="text-white w-10 h-10" />
                        </div>
                        <h1 className="text-3xl font-black text-white mb-2 tracking-tight">Gestión de Privacidad</h1>
                        <p className="text-gray-400 font-medium">Gestiona cómo podemos comunicarnos contigo</p>
                    </div>

                    <div className="p-10">
                        <div className="mb-8 p-4 bg-gray-50 rounded-2xl border border-gray-100">
                            <p className="text-sm text-gray-500 mb-1">Registrado como:</p>
                            <p className="text-lg font-bold text-gray-900">{data.nombre}</p>
                            <p className="text-sm text-gray-600 font-medium">{data.email}</p>
                        </div>

                        <div className="space-y-6">
                            <div className={`p-6 rounded-3xl border-2 transition-all duration-300 flex items-center justify-between ${whatsapp ? 'border-green-500 bg-green-50/30' : 'border-gray-100 bg-white'}`}>
                                <div>
                                    <h3 className="font-bold text-gray-900 text-lg">Comunicación WhatsApp</h3>
                                    <p className="text-sm text-gray-500">Recibir actualizaciones y respuestas rápidas.</p>
                                </div>
                                <button 
                                    onClick={() => setWhatsapp(!whatsapp)}
                                    className={`w-14 h-8 rounded-full transition-colors relative ${whatsapp ? 'bg-green-500' : 'bg-gray-200'}`}
                                >
                                    <div className={`absolute top-1 w-6 h-6 bg-white rounded-full transition-all ${whatsapp ? 'left-7' : 'left-1'}`} />
                                </button>
                            </div>

                            <div className={`p-6 rounded-3xl border-2 transition-all duration-300 flex items-center justify-between ${email ? 'border-blue-500 bg-blue-50/30' : 'border-gray-100 bg-white'}`}>
                                <div>
                                    <h3 className="font-bold text-gray-900 text-lg">Correo Electrónico</h3>
                                    <p className="text-sm text-gray-500">Boletines, promociones y novedades.</p>
                                </div>
                                <button 
                                    onClick={() => setEmail(!email)}
                                    className={`w-14 h-8 rounded-full transition-colors relative ${email ? 'bg-blue-500' : 'bg-gray-200'}`}
                                >
                                    <div className={`absolute top-1 w-6 h-6 bg-white rounded-full transition-all ${email ? 'left-7' : 'left-1'}`} />
                                </button>
                            </div>

                            <div className={`p-6 rounded-3xl border-2 transition-all duration-300 flex items-center justify-between ${media ? 'border-purple-500 bg-purple-50/30' : 'border-gray-100 bg-white'}`}>
                                <div>
                                    <h3 className="font-bold text-gray-900 text-lg">Uso de Multimedia</h3>
                                    <p className="text-sm text-gray-500">Permitir uso de fotos/videos testimoniales.</p>
                                </div>
                                <button 
                                    onClick={() => setMedia(!media)}
                                    className={`w-14 h-8 rounded-full transition-colors relative ${media ? 'bg-purple-500' : 'bg-gray-200'}`}
                                >
                                    <div className={`absolute top-1 w-6 h-6 bg-white rounded-full transition-all ${media ? 'left-7' : 'left-1'}`} />
                                </button>
                            </div>
                        </div>

                        {success && (
                            <div className="mt-8 p-4 bg-green-50 text-green-700 rounded-2xl flex items-center gap-3 animate-bounce">
                                <IconCheck className="w-5 h-5" />
                                <span className="font-bold">¡Preferencias actualizadas con éxito!</span>
                            </div>
                        )}

                        <div className="mt-10 space-y-4">
                            <button
                                onClick={handleSave}
                                disabled={saving}
                                className="w-full bg-black text-white py-5 rounded-3xl font-black text-lg shadow-xl shadow-black/10 hover:scale-[1.02] active:scale-[0.98] transition-all disabled:opacity-50 flex items-center justify-center gap-3"
                            >
                                {saving ? <IconLoader2 className="animate-spin" /> : 'Guardar Cambios'}
                            </button>

                            <button
                                onClick={handleRevokeAll}
                                disabled={saving}
                                className="w-full text-red-500 py-3 font-bold text-sm hover:underline transition-all"
                            >
                                Revocar todo el consentimiento
                            </button>
                        </div>

                        <p className="mt-12 text-center text-xs text-gray-400 leading-relaxed uppercase tracking-widest font-bold">
                            Cumplimiento estricto con la LOPDP <br/>
                            ID: {id}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default function GestionConsentimiento() {
    return (
        <Suspense fallback={
            <div className="min-h-screen bg-white flex items-center justify-center">
                <IconLoader2 className="animate-spin text-black w-10 h-10" />
            </div>
        }>
            <ConsentContent />
        </Suspense>
    );
}
