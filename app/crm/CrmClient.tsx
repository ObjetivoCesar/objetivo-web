'use client';

import React, { useState } from 'react';
import { PlayCircle, Clock, Smartphone, DollarSign, Zap, Search, Rocket, CheckCircle, MessageCircle, ArrowRight, Check, Plane, Users, Globe } from 'lucide-react';
import FAQSection from '@/components/FaqSection';
import VideoModal from '@/components/VideoModal';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { ExpandableText } from "@/components/ui/expandable-text";
import { CardSlider } from "@/components/ui/card-slider";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import DemoFacade from '@/components/DemoFacade';
import Link from "next/link";
import PayPhoneButton from '@/components/PayPhoneButton';
import IndustryCarousel from '@/components/IndustryCarousel';


const CompactCard = ({ title, shortDesc, fullDesc, justification, icon: Icon }: { title: string, shortDesc: string, fullDesc: string, justification: string, icon: any }) => {
    const [isExpanded, setIsExpanded] = useState(false);

    return (
        <div className="relative h-auto bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col overflow-hidden">
            {/* Top Media Section (Icon Placeholder) */}
            <div className="relative h-48 w-full bg-gradient-to-br from-gray-800 to-black flex items-center justify-center">
                <div className="absolute inset-0 bg-black/20 z-10"></div>
                <Icon className="relative z-20 w-20 h-20 text-[#FF6B00] opacity-90" />
            </div>

            {/* Bottom Content Section */}
            <div className="relative z-20 text-white flex flex-col p-6 bg-gradient-to-b from-gray-900 to-gray-800 flex-grow">
                <h3 className="font-bold text-xl font-playfair text-white mb-3 leading-tight">{title}</h3>

                <div className="text-gray-200 text-sm leading-relaxed font-medium">
                    {!isExpanded ? (
                        <p>
                            {shortDesc}...{' '}
                            <button
                                onClick={() => setIsExpanded(true)}
                                className="text-[#FF6B00] font-bold hover:text-white transition-colors focus:outline-none ml-1"
                            >
                                Seguir leyendo
                            </button>
                        </p>
                    ) : (
                        <div className="animate-in fade-in duration-300">
                            <p className="mb-4">{fullDesc}</p>
                            <div className="bg-white/10 p-4 rounded-lg border-l-4 border-[#FF6B00]">
                                <p className="font-bold text-xs text-[#FF6B00] uppercase mb-2 tracking-wider">Justificación:</p>
                                <p className="text-gray-100 italic">{justification}</p>
                            </div>
                            <button
                                onClick={() => setIsExpanded(false)}
                                className="mt-4 text-gray-400 text-xs hover:text-white flex items-center transition-colors"
                            >
                                Mostrar menos
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

const CrmClient = () => {
    const [activeDemoVideo, setActiveDemoVideo] = useState<string>('/images/software_gestion_servicios/video-proyectos.mp4');
    const [videoUrl, setVideoUrl] = useState<string>(''); // Initialize with your video URL when available

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [modalVideoUrl, setModalVideoUrl] = useState('');
    const [searchQuery, setSearchQuery] = useState('comprar lasaña en Loja');

    // Form submission state
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitSuccess, setSubmitSuccess] = useState(false);
    const [submitError, setSubmitError] = useState('');

    const openModal = (url: string) => {
        setModalVideoUrl(url);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setModalVideoUrl('');
    };

    const faqData = {
        h2: "Las preguntas que todos hacen (y sus respuestas):",
        questions: [
            {
                q: "¿Es difícil de usar? No soy bueno con la tecnología.",
                a: "Si sabes usar WhatsApp, sabes usar CRM a Medida. El panel es visual, intuitivo y está diseñado para celular. Literalmente son 3 clics: activar, activar, listo. Y si tienes dudas, nuestro soporte te guía paso a paso.",
                cta: "Ver demo"
            },
            {
                q: "¿Esto es solo para restaurantes grandes?",
                a: "Todo lo contrario. CRM a Medida fue diseñado pensando en restaurantes pequeños y medianos que no tienen un equipo de marketing ni de IT. Si tienes un menú que cambia (diario, semanal o mensual), esto es para ti.",
                cta: "Conocer más"
            },
            {
                q: "Ya tengo redes sociales. ¿Para qué necesito esto?",
                a: "Las redes sociales son geniales para conversar con tus clientes actuales. Pero no te posicionan en Google, no te dan un dominio propio y no te hacen visible para gente nueva que está buscando activamente dónde comer. CRM a Medida complementa tus redes, no las reemplaza.",
                cta: "Ver beneficios"
            },
            {
                q: "¿Cuánto cuesta? ¿Hay costos ocultos?",
                a: "Sin sorpresas. Un solo pago mensual que incluye todo. No hay costos de instalación, no hay comisiones por pedido, no hay letra chica. Contáctanos por WhatsApp y te damos el precio exacto según tus necesidades.",
                cta: "Hablar por WhatsApp"
            },
        ]
    };

    const handleSearch = () => {
        window.open(`https://www.google.com/search?q=${encodeURIComponent(searchQuery)}`, '_blank');
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        setIsSubmitting(true);
        setSubmitError('');
        setSubmitSuccess(false);

        const formData = new FormData(e.currentTarget);
        const data = {
            nombre: formData.get('nombre') as string,
            email: formData.get('email') as string,
            telefono: formData.get('telefono') as string,
            tipo_restaurante: formData.get('tipo_restaurante') as string,
            terminos: formData.get('terminos') === 'on',
        };

        try {
            const response = await fetch('/api/submit-menu-objetivo', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            });

            const result = await response.json();

            if (!response.ok) {
                throw new Error(result.error || 'Error al enviar el formulario');
            }

            setSubmitSuccess(true);

            // Reset form - use getElementById for more reliability
            const formElement = document.getElementById('formulario-reserva-restaurantes') as HTMLFormElement;
            if (formElement) {
                formElement.reset();
            }

            // Scroll to success message
            setTimeout(() => {
                const successElement = document.getElementById('form-success-message');
                if (successElement) {
                    successElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
                }
            }, 100);
        } catch (error: any) {
            console.error('Error submitting form:', error);
            setSubmitError(error.message || 'Error al enviar el formulario. Por favor, intenta nuevamente.');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="bg-white">
            <VideoModal
                isOpen={isModalOpen}
                onClose={closeModal}
                videoUrl={modalVideoUrl}
            />

            {/* Section 1: Hero */}
            <section className="relative h-screen flex items-center justify-center text-white overflow-hidden px-4">
                <img
                    src="/images/software_gestion_servicios/software_personalizado.webp"
                    alt="Software de gestión a medida"
                    className="absolute z-0 w-full h-full object-cover"
                    style={{ objectPosition: 'right center' }}
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/95 via-black/70 to-black/20 z-0"></div>
                
                <div className="relative z-10 max-w-7xl mx-auto w-full">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                        <div className="flex flex-col justify-center text-left">
                            <h1 className="text-4xl md:text-7xl font-extrabold text-white leading-tight mb-6" style={{ fontFamily: 'var(--font-poiret-one)' }}>
                                <div className="block">El control total de tus</div>
                                <div className="block">proyectos y clientes</div>
                                <div className="text-[#FF6B00]">hecho para ti.</div>
                            </h1>
                            <div className="text-lg md:text-2xl font-montserrat text-gray-100 max-w-2xl mb-8">
                                <ExpandableText
                                    fullText='No es un software genérico que se adapta "más o menos".<br class="hidden md:block" /> Lo construimos sobre cómo trabaja tu empresa: tus procesos, tu equipo, tu forma de cotizar.'
                                    shortText="No es un software genérico..."
                                />
                            </div>

                            {/* CTA Buttons */}
                            <div className="flex flex-col sm:flex-row gap-4 mb-8">
                                <a
                                    href="https://wa.me/593963410409?text=Hola%20César,%20quiero%20agendar%20una%20reunión%20para%20conocer%20el%20CRM%20a%20Medida"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center justify-center gap-2 bg-[#FF6B00] hover:bg-[#E66000] text-white font-bold py-4 px-8 rounded-full shadow-xl transition-all duration-300 transform hover:scale-105 text-base"
                                >
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
                                    Agendar reunión en oficinas
                                </a>
                                <a
                                    href="#demo-iframes"
                                    className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/30 text-white font-semibold py-4 px-8 rounded-full transition-all duration-300 text-base"
                                >
                                    Ver demo en vivo
                                    <ArrowRight className="w-4 h-4" />
                                </a>
                            </div>

                            <p className="text-sm text-gray-400 flex items-center gap-2">
                                <span className="w-2 h-2 bg-[#FF6B00] rounded-full animate-pulse"></span>
                                Sin compromisos. Solo una conversación.
                            </p>
                        </div>
                        {/* Right column empty to match the 2-column grid of the reference */}
                        <div className="hidden lg:block"></div>
                    </div>
                </div>
            </section>

            {/* Live Demo Section - Split Layout */}
            <section className="py-20 px-4 bg-gray-900 text-white overflow-hidden">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                        {/* Left Column: Content & Accordion */}
                        <div className="flex flex-col justify-center">
                            <h2 className="text-3xl md:text-4xl font-bold font-montserrat mb-6 text-left">
                                Mira cómo <span className="text-[#FF6B00]">funciona</span>
                            </h2>
                            <p className="text-gray-300 text-lg mb-10 leading-relaxed text-left">
                                Selecciona una de las funciones en el menú para ver en acción cómo tu próximo CRM a medida transformará la gestión de tu empresa.
                            </p>

                            {/* Instructions Accordion */}
                            <Accordion 
                                type="single" 
                                collapsible 
                                className="w-full space-y-4" 
                                defaultValue="item-1"
                                onValueChange={(value) => {
                                    if (value === 'item-1') setActiveDemoVideo('/images/software_gestion_servicios/video-proyectos.mp4');
                                    if (value === 'item-2') setActiveDemoVideo('/images/software_gestion_servicios/video-obras.mp4');
                                    if (value === 'item-3') setActiveDemoVideo('/images/software_gestion_servicios/video-cotizaciones.mp4');
                                    if (value === 'item-4') setActiveDemoVideo('/images/software_gestion_servicios/video-agendamiento.mp4');
                                }}
                            >
                                <AccordionItem value="item-1" className="bg-gray-800 rounded-lg border-gray-700">
                                    <AccordionTrigger className="text-left text-lg font-semibold px-6 py-4 hover:no-underline text-white">
                                        Creación de Proyectos
                                    </AccordionTrigger>
                                    <AccordionContent className="px-6 pb-6 pt-0">
                                        <ul className="list-disc list-outside ml-6 text-gray-300 space-y-2 mb-4 text-justify">
                                            <li>Define el alcance y presupuesto inicial de cada nuevo proyecto.</li>
                                            <li>Asigna responsables y fechas límite con facilidad.</li>
                                            <li>Centraliza toda la documentación relevante desde el primer día.</li>
                                        </ul>
                                    </AccordionContent>
                                </AccordionItem>
                                <AccordionItem value="item-2" className="bg-gray-800 rounded-lg border-gray-700">
                                    <AccordionTrigger className="text-left text-lg font-semibold px-6 py-4 hover:no-underline text-white">
                                        Registros de obras
                                    </AccordionTrigger>
                                    <AccordionContent className="px-6 pb-6 pt-0">
                                        <ul className="list-disc list-outside ml-6 text-gray-300 space-y-2 mb-4 text-justify">
                                            <li>Chat digital offline para reportes desde el campo.</li>
                                            <li>Captura fotos y firmas directamente desde el celular.</li>
                                            <li>Control de ubicación GPS en tiempo real para cada reporte.</li>
                                        </ul>
                                    </AccordionContent>
                                </AccordionItem>
                                <AccordionItem value="item-3" className="bg-gray-800 rounded-lg border-gray-700">
                                    <AccordionTrigger className="text-left text-lg font-semibold px-6 py-4 hover:no-underline text-white">
                                        Cotizaciones
                                    </AccordionTrigger>
                                    <AccordionContent className="px-6 pb-6 pt-0">
                                        <ul className="list-disc list-outside ml-6 text-gray-300 space-y-2 mb-4 text-justify">
                                            <li>Generación automática de PDFs con tu imagen corporativa.</li>
                                            <li>Cálculo preciso de materiales, mano de obra y márgenes.</li>
                                            <li>Envío directo al cliente y seguimiento de aprobación.</li>
                                        </ul>
                                    </AccordionContent>
                                </AccordionItem>
                                <AccordionItem value="item-4" className="bg-gray-800 rounded-lg border-gray-700">
                                    <AccordionTrigger className="text-left text-lg font-semibold px-6 py-4 hover:no-underline text-white">
                                        Agendamiento
                                    </AccordionTrigger>
                                    <AccordionContent className="px-6 pb-6 pt-0">
                                        <ul className="list-disc list-outside ml-6 text-gray-300 space-y-2 mb-4 text-justify">
                                            <li>Calendario centralizado tipo drag-and-drop.</li>
                                            <li>Asignación inteligente de técnicos según disponibilidad y zona.</li>
                                            <li>Recordatorios automáticos para evitar ausencias del cliente.</li>
                                        </ul>
                                    </AccordionContent>
                                </AccordionItem>
                            </Accordion>

                            <div className="mt-10">
                                <a href="#cuanto-cuesta" className="inline-block bg-[#FF6B00] text-white font-bold py-4 px-8 rounded-lg shadow-lg hover:bg-[#E66000] transition-colors text-lg w-full md:w-auto text-center">
                                    Quiero mi propio CRM a Medida
                                </a>
                            </div>
                        </div>

                        {/* Right Column: Video Loop */}
                        <div className="relative mx-auto w-full max-w-2xl">
                            <div className="relative rounded-2xl overflow-hidden shadow-2xl border-[12px] border-gray-800 bg-gray-900 transform transition-all duration-500 hover:scale-[1.02] hover:shadow-[#FF6B00]/20">
                                {/* Desktop/Browser Bar simulation */}
                                <div className="h-8 bg-gray-800 flex items-center px-4 space-x-2 border-b border-gray-700">
                                    <div className="flex space-x-1.5">
                                        <div className="w-2.5 h-2.5 rounded-full bg-[#FF5F56]"></div>
                                        <div className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E]"></div>
                                        <div className="w-2.5 h-2.5 rounded-full bg-[#27C93F]"></div>
                                    </div>
                                    <div className="flex-1 px-4">
                                        <div className="bg-gray-700 h-4 rounded-md w-full max-w-md mx-auto opacity-50"></div>
                                    </div>
                                </div>

                                <div className="aspect-video bg-black/30 flex items-center justify-center relative z-10">
                                    <video
                                        key={activeDemoVideo}
                                        autoPlay
                                        loop
                                        muted
                                        playsInline
                                        className="h-full w-full object-cover"
                                        poster="/images/thumb-video-poster.jpg"
                                    >
                                        <source src={activeDemoVideo} type="video/mp4" />
                                        Tu navegador no soporta el elemento de video.
                                    </video>
                                </div>

                                {/* Overlay Gradient */}
                                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent p-6 pt-20 text-center z-20">
                                    <p className="text-white text-sm font-medium">¡Así de simple es tener el control total de tu operación!</p>
                                </div>
                            </div>

                            {/* Decorative elements behind the phone */}
                            <div className="absolute -z-10 top-10 -right-10 w-40 h-40 bg-[#FF6B00] rounded-full blur-[80px] opacity-20"></div>
                            <div className="absolute -z-10 bottom-10 -left-10 w-40 h-40 bg-blue-500 rounded-full blur-[80px] opacity-20"></div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Social Proof Section - Industry Carousel */}
            <IndustryCarousel />

            {/* SECCIÓN 2 — La diferencia */}
            <section className="py-20 px-4 bg-white relative overflow-hidden">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                        {/* Texto Izquierda */}
                        <div className="order-2 lg:order-1 flex flex-col justify-center">
                            <h2 className="text-4xl md:text-5xl font-black mb-8 leading-tight text-gray-900 text-left" style={{ fontFamily: 'var(--font-poiret-one, inherit)' }}>
                                No instalamos una plantilla. <br className="hidden md:block" />
                                <span className="text-[#FF6B00]">Construimos tu herramienta.</span>
                            </h2>
                            <p className="text-xl text-gray-600 leading-relaxed mb-8 text-left">
                                Cada empresa tiene su propia forma de trabajar. Por eso no llegamos con un software empaquetado que tú tienes que aprender a usar. Llegamos a entender cómo opera tu negocio y construimos el sistema sobre eso. Tu flujo de cotización, tus módulos, tus reportes, tu marca.
                            </p>
                        </div>

                        {/* Imagen Derecha */}
                        <div className="order-1 lg:order-2 relative group">
                            <div className="absolute -inset-4 bg-blue-100 rounded-3xl blur-2xl opacity-60 group-hover:opacity-100 transition-all duration-700" />
                            <div className="relative aspect-[4/3] md:aspect-video rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-gray-100">
                                <img 
                                    src="/images/software_gestion_servicios/software-gestion-servicios.webp" 
                                    alt="Software Personalizado en Oficina" 
                                    className="object-cover w-full h-full opacity-90 group-hover:scale-105 transition-transform duration-700"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                                <div className="absolute bottom-6 left-6 flex items-center gap-3 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg">
                                    <div className="w-3 h-3 bg-[#FF6B00] rounded-full animate-pulse" />
                                    <span className="text-sm font-bold text-gray-900">Sistema Real en Operación</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* New Video Section */}
            {false && (
            <section className="py-20 px-4 bg-black">
                <div className="max-w-3xl mx-auto text-left relative z-10">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 font-montserrat">
                        Mira cómo funciona <span className="text-[#FF6B00]">CRM a Medida</span>
                    </h2>
                    <div className="relative w-full pb-[56.25%] h-0 rounded-2xl overflow-hidden shadow-2xl border-4 border-[#FF6B00]/30 bg-black">
                        <div className="absolute top-0 left-0 w-full h-full">
                            <DemoFacade
                                src="https://www.youtube.com/embed/4hot82GQezI"
                                title="CRM a Medida Demo"
                                previewImage="https://img.youtube.com/vi/4hot82GQezI/maxresdefault.jpg"
                                buttonText="Ver Video"
                            />
                        </div>
                    </div>
                    <div className="mt-8">
                        <a
                            href="#formulario"
                            className="inline-block bg-[#FF6B00] text-white font-bold py-4 px-8 rounded-lg shadow-lg hover:bg-[#E66000] transition-colors text-lg"
                        >
                            ¡Quiero mi CRM a Medida!
                        </a>
                    </div>
                </div>
            </section>
            )}

            {/* Pricing Section */}
            <section id="cuanto-cuesta" className="py-20 px-4 bg-gradient-to-b from-gray-50 to-white">
                <div className="max-w-7xl mx-auto text-left">
                    <div className="max-w-4xl mb-6">
                        <h2 className="text-3xl md:text-4xl font-bold font-montserrat text-gray-900 mb-4">
                            Elige lo que necesitas. Paga solo por eso.
                        </h2>
                        <p className="text-lg text-gray-600 leading-relaxed">
                            Tres módulos independientes. Puedes empezar con uno y crecer cuando quieras. Cada uno incluye la configuración completa de tu empresa.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
                        {/* Card 1: Proyectos y Rutas */}
                        <div className="bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 flex flex-col border-2 border-[#FF6B00] relative transform lg:scale-105">
                            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                                <span className="bg-[#FF6B00] text-white text-xs font-bold px-4 py-1 rounded-full shadow-lg">⭐ Más elegido</span>
                            </div>
                            <div className="p-6 border-b border-gray-100 bg-gradient-to-br from-[#FF6B00]/5 to-transparent">
                                <h3 className="text-xl font-bold text-gray-900 font-playfair mb-2">Proyectos y Rutas</h3>
                                <div className="flex items-baseline gap-2 mb-2">
                                    <span className="text-4xl font-bold text-[#FF6B00]">$1.500</span>
                                </div>
                                <p className="text-sm text-gray-600">Control de campo, bitácora offline, GPS</p>
                            </div>
                            <div className="p-6 flex-grow">
                                <p className="text-sm font-semibold text-gray-700 mb-4">Incluye:</p>
                                <ul className="space-y-3 mb-6">
                                    <li className="flex items-start gap-2 text-sm text-gray-600">
                                        <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                                        <span>Control de proyectos y equipo</span>
                                    </li>
                                    <li className="flex items-start gap-2 text-sm text-gray-600">
                                        <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                                        <span>Ubicación GPS en tiempo real</span>
                                    </li>
                                    <li className="flex items-start gap-2 text-sm text-gray-600">
                                        <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                                        <span>Bitácora offline (sin internet)</span>
                                    </li>
                                    <li className="flex items-start gap-2 text-sm text-gray-600">
                                        <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                                        <span>Fotos y reportes desde el campo</span>
                                    </li>
                                    <li className="flex items-start gap-2 text-sm text-gray-600">
                                        <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                                        <span>Sistema a la medida de tu empresa</span>
                                    </li>
                                </ul>
                                <div className="bg-[#FF6B00]/5 p-4 rounded-lg mb-6 border border-[#FF6B00]/20">
                                    <p className="text-xs font-semibold text-gray-700 mb-1">Para quién:</p>
                                    <p className="text-xs text-gray-600">Empresas de servicios con técnicos o trabajadores en diferentes ubicaciones.</p>
                                </div>
                            </div>
                            <div className="p-6 pt-0">
                                <Link
                                    href={`/pago?amount=1500&description=${encodeURIComponent("CRM Proyectos y Rutas")}&backTo=/crm#cuanto-cuesta`}
                                    className="block w-full bg-gray-900 text-white text-center font-bold py-4 px-6 rounded-xl hover:bg-[#FF6B00] transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                                >
                                    <span className="flex flex-col items-center justify-center space-y-1">
                                        <span className="text-lg">Seleccionar Plan</span>
                                        <span className="text-xs font-normal opacity-90 max-w-xs leading-tight">
                                            Adquiere tu paquete, paga de contado o difiere a 3, 6, 9 y 12 meses*
                                        </span>
                                    </span>
                                </Link>
                            </div>
                        </div>

                        {/* Card 2: Agendamiento */}
                        <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col border-2 border-gray-100 hover:border-[#FF6B00]/30">
                            <div className="p-6 border-b border-gray-100">
                                <h3 className="text-xl font-bold text-gray-900 font-playfair mb-2">Agendamiento</h3>
                                <div className="flex items-baseline gap-2 mb-2">
                                    <span className="text-4xl font-bold text-[#FF6B00]">$600 </span>
                                </div>
                                <p className="text-sm text-gray-600">Calendario, técnicos, recordatorios</p>
                            </div>
                            <div className="p-6 flex-grow">
                                <p className="text-sm font-semibold text-gray-700 mb-4">Incluye:</p>
                                <ul className="space-y-3 mb-6">
                                    <li className="flex items-start gap-2 text-sm text-gray-600">
                                        <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                                        <span>Calendario centralizado</span>
                                    </li>
                                    <li className="flex items-start gap-2 text-sm text-gray-600">
                                        <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                                        <span>Código QR dinámico</span>
                                    </li>
                                    <li className="flex items-start gap-2 text-sm text-gray-600">
                                        <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                                        <span>Asignacion de Tareas a trabajdores con evidencia de foto, video, audio, docuemntos y recordatorios automaticos</span>
                                    </li>
                                    <li className="flex items-start gap-2 text-sm text-gray-600">
                                        <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                                        <span>Sistema a la medida de tu empresa</span>
                                    </li>
                                    <li className="flex items-start gap-2 text-sm text-gray-600">
                                        <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                                        <span>Asignación automática de técnicos</span>
                                    </li>
                                </ul>
                                <div className="bg-gray-50 p-4 rounded-lg mb-6">
                                    <p className="text-xs font-semibold text-gray-700 mb-1">Para quién:</p>
                                    <p className="text-xs text-gray-600">Empresas que dependen de agendar visitas, instalaciones o mantenimiento.</p>
                                </div>
                            </div>
                            <div className="p-6 pt-0">
                                <Link
                                    href={`/pago?amount=600&description=${encodeURIComponent("CRM Agendamiento")}&backTo=/crm#cuanto-cuesta`}
                                    className="block w-full bg-[#FF6B00] text-white text-center font-bold py-4 px-6 rounded-xl hover:bg-[#E66000] transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                                >
                                    <span className="flex flex-col items-center justify-center space-y-1">
                                        <span className="text-lg">Seleccionar Plan</span>
                                        <span className="text-xs font-normal opacity-90 max-w-xs leading-tight">
                                            Adquiere tu paquete, paga de contado o difiere a 3, 6, 9 y 12 meses*
                                        </span>
                                    </span>
                                </Link>
                            </div>
                        </div>


                        {/* Card 3: Cotizaciones */}
                        <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col border-2 border-gray-100 hover:border-[#FF6B00]/30">
                            <div className="p-6 border-b border-gray-100">
                                <h3 className="text-xl font-bold text-gray-900 font-playfair mb-2">Cotizaciones</h3>
                                <div className="flex items-baseline gap-2 mb-2">
                                    <span className="text-4xl font-bold text-[#FF6B00]">$600</span>
                                </div>
                                <p className="text-sm text-gray-600">PDF profesional, inventario, cálculos</p>
                            </div>
                            <div className="p-6 flex-grow">
                                <p className="text-sm font-semibold text-gray-700 mb-4">Incluye:</p>
                                <ul className="space-y-3 mb-6">
                                    <li className="flex items-start gap-2 text-sm text-gray-600">
                                        <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                                        <span>Generación automática de PDFs</span>
                                    </li>
                                    <li className="flex items-start gap-2 text-sm text-gray-600">
                                        <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                                        <span>Código QR dinámico</span>
                                    </li>
                                    <li className="flex items-start gap-2 text-sm text-gray-600">
                                        <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                                        <span>Cotizacion Personalizada segun tu empresa, proforma al instante</span>
                                    </li>
                                    <li className="flex items-start gap-2 text-sm text-gray-600">
                                        <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                                        <span>Inventario integrado</span>
                                    </li>
                                    <li className="flex items-start gap-2 text-sm text-gray-600">
                                        <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                                        <span>Sistema a la medida de tu empresa</span>
                                    </li>
                                </ul>
                                <div className="bg-gray-50 p-4 rounded-lg mb-6">
                                    <p className="text-xs font-semibold text-gray-700 mb-1">Para quién:</p>
                                    <p className="text-xs text-gray-600">Empresas que cotizan servicios a medida con múltiples variables y precios.</p>
                                </div>
                            </div>
                             <div className="p-6 pt-0">
                                <Link
                                    href={`/pago?amount=600&description=${encodeURIComponent("CRM Cotizaciones")}&backTo=/crm#cuanto-cuesta`}
                                    className="block w-full bg-gray-900 text-white text-center font-bold py-4 px-6 rounded-xl hover:bg-[#FF6B00] transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                                >
                                    <span className="flex flex-col items-center justify-center space-y-1">
                                        <span className="text-lg">Seleccionar Plan</span>
                                        <span className="text-xs font-normal opacity-90 max-w-xs leading-tight">
                                            Adquiere tu paquete, paga de contado o difiere a 3, 6, 9 y 12 meses*
                                        </span>
                                    </span>
                                </Link>
                            </div>
                        </div>

                        {/* Card 4: Suite Completa */}
                        <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col border-2 border-gray-100 hover:border-[#FF6B00]/30">
                            <div className="p-6 border-b border-gray-100">
                                <h3 className="text-xl font-bold text-gray-900 font-playfair mb-2">Suite Completa</h3>
                                <div className="flex items-baseline gap-2 mb-2">
                                    <span className="text-4xl font-bold text-[#FF6B00]">$2.500</span>
                                </div>
                                <p className="text-sm text-gray-600">PDF profesional, inventario, cálculos</p>
                            </div>
                            <div className="p-6 flex-grow">
                                <p className="text-sm font-semibold text-gray-700 mb-4">Incluye:</p>
                                <ul className="space-y-3 mb-6">
                                    <li className="flex items-start gap-2 text-sm text-gray-600">
                                        <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                                        <span>Suite completa. Todos los módulos.</span>
                                    </li>
                                    <li className="flex items-start gap-2 text-sm text-gray-600">
                                        <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                                        <span>Código QR dinámico</span>
                                    </li>
                                    <li className="flex items-start gap-2 text-sm text-gray-600">
                                        <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                                        <span>Integración entre todos los módulos</span>
                                    </li>
                                    <li className="flex items-start gap-2 text-sm text-gray-600">
                                        <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                                        <span>Chat offline (sin internet)</span>
                                    </li>
                                    <li className="flex items-start gap-2 text-sm text-gray-600">
                                        <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                                        <span>Inventario integrado</span>
                                    </li>
                                    <li className="flex items-start gap-2 text-sm text-gray-600">
                                        <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                                        <span>Sistema a la medida de tu empresa</span>
                                    </li>
                                    <li className="flex items-start gap-2 text-sm text-gray-600">
                                        <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                                        <span>Galería de eventos + promociones destacadas</span>
                                    </li>
                                    <li className="flex items-start gap-2 text-sm text-gray-600">
                                        <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                                        <span>Integración con redes sociales</span>
                                    </li>
                                </ul>
                                <div className="bg-gray-50 p-4 rounded-lg mb-6">
                                    <p className="text-xs font-semibold text-gray-700 mb-1">Para quién:</p>
                                    <p className="text-xs text-gray-600">Empresas que quieren la máxima eficiencia operativa y escalar sus ventas.</p>
                                </div>
                            </div>
                            <div className="p-6 pt-0">
                                <Link
                                    href={`/pago?amount=2500&description=${encodeURIComponent("CRM Suite Completa")}&backTo=/crm#cuanto-cuesta`}
                                    className="block w-full bg-gray-900 text-white text-center font-bold py-4 px-6 rounded-xl hover:bg-[#FF6B00] transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                                >
                                    <span className="flex flex-col items-center justify-center space-y-1">
                                        <span className="text-lg">Seleccionar Plan</span>
                                        <span className="text-xs font-normal opacity-90 max-w-xs leading-tight">
                                            Adquiere tu paquete, paga de contado o difiere a 3, 6, 9 y 12 meses*
                                        </span>
                                    </span>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            {/* Problem Scenarios Section - Tabbed Interface */}
            {false && (
            <section className="py-20 px-4 bg-white">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center max-w-4xl mx-auto mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold font-montserrat text-gray-900">
                            Antes de seguir, dime si esto te suena familiar:
                        </h2>
                    </div>

                    <div className="max-w-4xl mx-auto mb-20">
                        <Tabs defaultValue="weekly-menu" className="w-full">
                            <TabsList className="grid w-full grid-cols-1 md:grid-cols-3 h-auto gap-2 bg-gray-100 p-2 rounded-xl">
                                <TabsTrigger
                                    value="weekly-menu"
                                    className="data-[state=active]:bg-white data-[state=active]:text-[#FF6B00] data-[state=active]:shadow-md py-3 text-gray-600 font-semibold"
                                >
                                    El caos del WhatsApp y Excel
                                </TabsTrigger>
                                <TabsTrigger
                                    value="ghost-client"
                                    className="data-[state=active]:bg-white data-[state=active]:text-[#FF6B00] data-[state=active]:shadow-md py-3 text-gray-600 font-semibold"
                                >
                                    Cotizaciones que tardan horas
                                </TabsTrigger>
                                <TabsTrigger
                                    value="whatsapp-photo"
                                    className="data-[state=active]:bg-white data-[state=active]:text-[#FF6B00] data-[state=active]:shadow-md py-3 text-gray-600 font-semibold"
                                >
                                    El equipo de campo desconectado
                                </TabsTrigger>
                            </TabsList>

                            {/* Tab 1: Weekly Menu */}
                            <TabsContent value="weekly-menu" className="mt-8 animate-in fade-in slide-in-from-top-4 duration-500">
                                <div className="bg-gray-50 rounded-2xl p-8 shadow-lg border border-gray-100">
                                    <h3 className="text-2xl font-bold text-gray-900 mb-6 font-playfair text-left">El caos del WhatsApp y Excel</h3>
                                    <ul className="space-y-4 mb-8 max-w-2xl mx-auto">
                                        <li className="flex items-start gap-3 text-gray-600 text-lg">
                                            <span className="flex-shrink-0 mt-1 text-red-500 font-bold">✕</span>
                                            <span>Pierdes horas buscando mensajes</span>
                                        </li>
                                        <li className="flex items-start gap-3 text-gray-600 text-lg">
                                            <span className="flex-shrink-0 mt-1 text-red-500 font-bold">✕</span>
                                            <span>El Excel nunca está actualizado con la versión real</span>
                                        </li>
                                        <li className="flex items-start gap-3 text-gray-600 text-lg">
                                            <span className="flex-shrink-0 mt-1 text-red-500 font-bold">✕</span>
                                            <span>Tus técnicos mandan reportes por WhatsApp que se pierden</span>
                                        </li>
                                        <li className="flex items-start gap-3 text-gray-600 text-lg">
                                            <span className="flex-shrink-0 mt-1 text-red-500 font-bold">✕</span>
                                            <span>Tienes que recordar a quién le pasaste qué precio</span>
                                        </li>
                                        <li className="flex items-start gap-3 text-gray-600 text-lg">
                                            <span className="flex-shrink-0 mt-1 text-red-500 font-bold">✕</span>
                                            <span>Al final del mes no sabes cuántos proyectos cerraron</span>
                                        </li>
                                    </ul>
                                    <div className="pt-6 border-t border-gray-200">
                                        <p className="font-bold text-[#FF6B00] text-left text-xl">¿Cuántas horas perdiste esta semana en esto?</p>
                                    </div>
                                </div>
                            </TabsContent>

                            {/* Tab 2: Ghost Client */}
                            <TabsContent value="ghost-client" className="mt-8 animate-in fade-in slide-in-from-top-4 duration-500">
                                <div className="bg-gray-50 rounded-2xl p-8 shadow-lg border border-gray-100">
                                    <h3 className="text-2xl font-bold text-gray-900 mb-6 font-playfair text-left">Cotizaciones que tardan horas</h3>
                                    <div className="space-y-6 mb-8 text-gray-600 text-lg text-left max-w-2xl mx-auto">
                                        <p>Un turista está en el parque central de tu ciudad.</p>
                                        <p>Abre Google: "Restaurante cerca de mí"</p>
                                        <p>Aparecen 5 opciones. <span className="font-bold text-red-500 text-xl">Tú NO estás ahí.</span></p>
                                        <p>Va a otro lado. Nunca sabrás que existió.</p>
                                    </div>
                                    <div className="pt-6 border-t border-gray-200 mt-auto">
                                        <p className="font-bold text-[#FF6B00] text-left text-xl">¿Cuántos clientes así perdiste este mes sin darte cuenta?</p>
                                    </div>
                                </div>
                            </TabsContent>

                            {/* Tab 3: WhatsApp Photo */}
                            <TabsContent value="whatsapp-photo" className="mt-8 animate-in fade-in slide-in-from-top-4 duration-500">
                                <div className="bg-gray-50 rounded-2xl p-8 shadow-lg border border-gray-100">
                                    <h3 className="text-2xl font-bold text-gray-900 mb-6 font-playfair text-left">El equipo de campo desconectado que nadie abre</h3>
                                    <div className="space-y-6 mb-8 text-gray-600 text-lg text-left max-w-2xl mx-auto">
                                        <p>No sabes dónde están tus técnicos</p>
                                        <p>No sabes en qué estado dejaron el proyecto</p>
                                        <p>Los reportes llegan tarde o mal</p>
                                        <p>El cliente te llama a reclamar y tú no tienes idea de qué pasó en campo.</p>
                                    </div>
                                    <div className="pt-6 border-t border-gray-200 mt-auto">
                                        <p className="font-bold text-[#FF6B00] text-left text-xl">¿Cuánto tiempo más vas a depender de estar llamando a cada técnico cada 5 minutos?</p>
                                    </div>
                                </div>
                            </TabsContent>
                        </Tabs>
                    </div>

                    <div className="text-center max-w-4xl mx-auto mb-16">
                        <p className="text-2xl md:text-3xl font-medium text-gray-800 mb-8 leading-relaxed">
                            "El problema no es tu dedicación. Es que estás usando herramientas del 2010 en 2025. Tu equipo necesita un sistema hecho para su flujo real de trabajo, no hojas de cálculo remendadas."
                        </p>
                        <a
                            href="#demo-iframes"
                            className="inline-flex items-center text-[#FF6B00] font-bold text-xl hover:text-[#E66000] transition-colors group"
                        >
                            Mira cómo funciona en vivo
                            <ArrowRight className="ml-2 w-6 h-6 transform group-hover:translate-x-1 transition-transform" />
                        </a>
                    </div>

                    {/* Relocated Live Demo Iframes */}
                    <div id="demo-iframes" className="grid grid-cols-1 md:grid-cols-2 gap-8 scroll-mt-24">
                        <div className="rounded-2xl shadow-2xl overflow-hidden border-4 border-gray-200">
                            <div className="bg-gray-100 p-3 flex items-center border-b border-gray-200">
                                <div className="flex space-x-2">
                                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                                </div>
                                <p className="text-sm text-gray-500 mx-auto font-medium">Panel de Control</p>
                            </div>
                            <div className="w-full h-[70vh]">
                                <DemoFacade
                                    src="https://los-almuerzos.vercel.app/admin"
                                    title="Panel de Control"
                                    buttonText="Probar Panel Admin"
                                    className="bg-gray-50"
                                />
                            </div>
                        </div>
                        <div className="rounded-2xl shadow-2xl overflow-hidden border-4 border-gray-200">
                            <div className="bg-gray-100 p-3 flex items-center border-b border-gray-200">
                                <div className="flex space-x-2">
                                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                                </div>
                                <p className="text-sm text-gray-500 mx-auto font-medium">Menú Público</p>
                            </div>
                            <div className="w-full h-[70vh]">
                                <DemoFacade
                                    src="https://los-almuerzos.vercel.app/"
                                    title="Menú Público"
                                    buttonText="Ver Menú en Vivo"
                                    className="bg-white"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            )}

            {/* Section 4: The Demonstration */}
            {false && (
            <section className="py-20 px-4 bg-white">
                <div className="text-center max-w-4xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-bold text-[#2B2B2B]" style={{ fontFamily: 'var(--font-poiret-one)' }}>
                        Tu CRM, <span className="text-[#FF6B00]">sin riesgos ni sorpresas</span>
                    </h2>
                    <p className="text-gray-600 mt-6 text-lg leading-relaxed">
                        ¿Preocupado por contratar un servicio online? Lo entendemos. Por eso trabajamos con total transparencia.
                        Conoce a tu equipo, sigue cada paso del proceso y paga con seguridad. Tu inversión está 100% protegida.
                    </p>
                </div>
                <div className="mt-12 max-w-4xl mx-auto">
                    <div className="relative w-full rounded-xl shadow-xl overflow-hidden bg-black/20 cursor-pointer"
                        onClick={() => openModal('https://www.youtube.com/watch?v=oPySzkvDjDk')}>
                        <div className="relative w-full h-0 pb-[56.25%] bg-black">
                            <img
                                src="https://img.youtube.com/vi/oPySzkvDjDk/maxresdefault.jpg"
                                alt="Vista previa del video"
                                className="absolute inset-0 w-full h-full object-cover"
                                loading="lazy"
                            />
                            <div className="absolute inset-0 bg-black/30 flex items-center justify-center group">
                                <div className="bg-white/90 hover:bg-white transition-all duration-300 rounded-full p-4 group-hover:scale-110">
                                    <PlayCircle className="w-12 h-12 text-[#FF6B00]" />
                                </div>
                            </div>
                            <div className="absolute bottom-4 right-4 bg-black/70 text-white text-xs px-2 py-1 rounded">
                                2:45
                            </div>
                        </div>
                    </div>

                    {/* Guarantees List */}
                    <div className="mt-12 max-w-3xl mx-auto text-left">
                        <h3 className="text-xl font-bold text-gray-900 mb-6">Garantías incluidas:</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="flex items-start gap-3 bg-gray-50 p-4 rounded-lg">
                                <div className="flex-shrink-0 w-6 h-6 flex items-center justify-center bg-[#FF6B00] rounded-full text-white text-sm font-bold">
                                    🔒
                                </div>
                                <div>
                                    <p className="font-semibold text-gray-900">Pagas por etapas</p>
                                    <p className="text-sm text-gray-600">(ves resultados antes de cada pago)</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-3 bg-gray-50 p-4 rounded-lg">
                                <div className="flex-shrink-0 w-6 h-6 flex items-center justify-center bg-[#FF6B00] rounded-full text-white text-sm font-bold">
                                    🔒
                                </div>
                                <div>
                                    <p className="font-semibold text-gray-900">Sistema a la medida de tu empresa</p>
                                    <p className="text-sm text-gray-600">(dominio, hosting, archivos)</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-3 bg-gray-50 p-4 rounded-lg">
                                <div className="flex-shrink-0 w-6 h-6 flex items-center justify-center bg-[#FF6B00] rounded-full text-white text-sm font-bold">
                                    🔒
                                </div>
                                <div>
                                    <p className="font-semibold text-gray-900">14 días de garantía</p>
                                    <p className="text-sm text-gray-600">(si tu menú digital no te ahorra tiempo, te devolvemos tu inversión)</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-3 bg-gray-50 p-4 rounded-lg">
                                <div className="flex-shrink-0 w-6 h-6 flex items-center justify-center bg-[#FF6B00] rounded-full text-white text-sm font-bold">
                                    🔒
                                </div>
                                <div>
                                    <p className="font-semibold text-gray-900">Soporte incluido</p>
                                    <p className="text-sm text-gray-600">(dudas, cambios, actualizaciones)</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="mt-8 text-left">
                        <a
                            href="#formulario"
                            className="inline-flex items-center justify-center bg-[#25D366] hover:bg-[#128C7E] text-white font-bold py-3 px-8 rounded-full text-lg transition-colors duration-300 shadow-lg"
                        >
                            <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                <path fillRule="evenodd" d="M12 2C6.48 2 2 6.48 2 12c0 1.8.48 3.48 1.32 4.94L2 22l5.06-1.32C8.52 21.52 10.2 22 12 22c5.52 0 10-4.48 10-10S17.52 2 12 2zm0 18c-1.66 0-3.22-.4-4.6-1.1l-.34-.2-3.54.93.94-3.46-.22-.34C3.4 15.2 3 13.66 3 12c0-4.96 4.04-9 9-9s9 4.04 9 9-4.04 9-9 9zm5.5-6.5c-.08-.14-.28-.22-.6-.4-.32-.18-.88-.44-1.5-.74-.09-.04-.2-.06-.3.06l-.36.45c-.1.12-.2.14-.36.08-.16-.06-.67-.24-1.28-.77-.47-.42-.79-.94-.88-1.1-.1-.16 0-.24.07-.32.08-.08.18-.2.28-.32.1-.12.12-.22.18-.34.06-.12.03-.22.02-.3-.02-.1-.3-.7-.4-.96-.1-.26-.2-.22-.28-.22-.06 0-.14-.02-.22-.02-.08 0-.2.02-.3.3-.1.28-.4.98-.4 2.1 0 1.12 1.12 2.38 1.3 2.54.18.16 2.24 1.4 5.42 1.9.72.12 1.24.1 1.7.06.54-.04 1.68-.7 1.92-1.38.24-.68.24-1.26.16-1.38z" clipRule="evenodd" />
                            </svg>
                            ¡Quiero mi CRM ahora!
                        </a>
                    </div>
                </div>
            </section >
            )}

            {/* Section 5: Transformation + Social Proof */}
            < section className="py-20 px-4 bg-[#F9F9F9]" >
                <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 md:gap-10">
                    <h2 className="text-3xl md:text-4xl font-bold text-[#2B2B2B] font-montserrat">
                        No es magia, son <span className="text-[#FF6B00]">resultados.</span>
                    </h2>
                    <a
                        href="https://wa.me/593963410409?text=Hola%20César,%20estoy%20interesado%20en%20el%20CRM%20a%20Medida"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 bg-[#FF6B00] hover:bg-[#E66000] text-white font-bold py-4 px-8 rounded-full shadow-lg transition-all transform hover:scale-105 text-lg"
                    >
                        <MessageCircle className="w-6 h-6" />
                        Hablar por WhatsApp
                    </a>
                </div>
            </section >


            {/* Section 6: Custom Interactive FAQs */}
            <section className="py-20 px-4 bg-gray-50">
                <div className="max-w-6xl mx-auto">
                    <div className="text-left mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-[#2B2B2B] font-montserrat">
                            Respuestas claras, <span className="text-[#FF6B00]">sin rodeos.</span>
                        </h2>
                    </div>

                    <Accordion type="single" collapsible className="w-full space-y-6">
                        {/* FAQ 1 */}
                        <AccordionItem value="faq-1" className="bg-white rounded-2xl shadow-md border border-gray-100 overflow-hidden">
                            <AccordionTrigger className="text-left text-lg md:text-xl font-bold px-8 py-6 hover:no-underline text-gray-900 flex justify-between items-center group [&[data-state=open]>div>div]:bg-[#FF6B00] [&[data-state=open]>div>div]:text-white">
                                <div className="flex items-center gap-4">
                                    <div className="w-10 h-10 rounded-full bg-[#FF6B00]/10 flex items-center justify-center text-[#FF6B00] group-hover:bg-[#FF6B00] group-hover:text-white transition-colors">
                                        <PlayCircle className="w-6 h-6" />
                                    </div>
                                    <span>¿Ya me ofrecieron algo parecido la semana pasada, qué tiene de diferente?</span>
                                </div>
                            </AccordionTrigger>
                            <AccordionContent className="px-8 pb-8 pt-2">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center border-t border-gray-100 pt-8">
                                    <div className="space-y-4 text-gray-600 text-lg text-left">
                                        <ul className="space-y-4">
                                            <li className="flex items-start gap-3">
                                                <Check className="w-6 h-6 text-[#FF6B00] mt-0.5 flex-shrink-0" />
                                                <span><strong className="text-gray-900">No es una plantilla genérica</strong> que tú adaptas. Nosotros adaptamos cada módulo a tu necesidad real.</span>
                                            </li>
                                            <li className="flex items-start gap-3">
                                                <Check className="w-6 h-6 text-[#FF6B00] mt-0.5 flex-shrink-0" />
                                                <span>Pensado para la operación real: <strong className="text-gray-900">graba videos, fotos y audios directamente desde la obra.</strong></span>
                                            </li>
                                            <li className="flex items-start gap-3">
                                                <Check className="w-6 h-6 text-[#FF6B00] mt-0.5 flex-shrink-0" />
                                                <span>Construido para estar bajo el sol y en la acción, no solo en la oficina.</span>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="relative mx-auto w-full max-w-[400px]">
                                        <div className="relative rounded-xl overflow-hidden shadow-2xl border-4 border-gray-800 bg-black aspect-video">
                                            <video autoPlay loop muted playsInline className="h-full w-full object-cover">
                                                <source src="/images/software_gestion_servicios/video-faq-1.mp4" type="video/mp4" />
                                            </video>
                                        </div>
                                    </div>
                                </div>
                            </AccordionContent>
                        </AccordionItem>

                        {/* FAQ 2 */}
                        <AccordionItem value="faq-2" className="bg-white rounded-2xl shadow-md border border-gray-100 overflow-hidden">
                            <AccordionTrigger className="text-left text-lg md:text-xl font-bold px-8 py-6 hover:no-underline text-gray-900 flex justify-between items-center group [&[data-state=open]>div>div]:bg-[#FF6B00] [&[data-state=open]>div>div]:text-white">
                                <div className="flex items-center gap-4">
                                    <div className="w-10 h-10 rounded-full bg-[#FF6B00]/10 flex items-center justify-center text-[#FF6B00] group-hover:bg-[#FF6B00] group-hover:text-white transition-colors">
                                        <PlayCircle className="w-6 h-6" />
                                    </div>
                                    <span>¿Por qué no seguir usando Excel o Notion si ya los tengo y son gratis?</span>
                                </div>
                            </AccordionTrigger>
                            <AccordionContent className="px-8 pb-8 pt-2">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center border-t border-gray-100 pt-8">
                                    <div className="space-y-4 text-gray-600 text-lg text-left">
                                        <ul className="space-y-4">
                                            <li className="flex items-start gap-3">
                                                <Check className="w-6 h-6 text-[#FF6B00] mt-0.5 flex-shrink-0" />
                                                <span>El costo oculto: usar herramientas no nativas te obliga a ser el <strong className="text-gray-900">"pegamento"</strong> entre archivos y WhatsApp.</span>
                                            </li>
                                            <li className="flex items-start gap-3">
                                                <Check className="w-6 h-6 text-[#FF6B00] mt-0.5 flex-shrink-0" />
                                                <span>El tiempo administrativo puede <strong className="text-gray-900">bajar del 30% al 5%</strong>.</span>
                                            </li>
                                            <li className="flex items-start gap-3">
                                                <Check className="w-6 h-6 text-[#FF6B00] mt-0.5 flex-shrink-0" />
                                                <span>Ahorro directo de entre <strong className="text-gray-900">$1,500 y $2,000 anuales por empleado</strong> solo en eficiencia.</span>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="relative mx-auto w-full max-w-[400px]">
                                        <div className="relative rounded-xl overflow-hidden shadow-2xl border-4 border-gray-800 bg-black aspect-video">
                                            <video autoPlay loop muted playsInline className="h-full w-full object-cover">
                                                <source src="/images/software_gestion_servicios/video-faq-2.mp4" type="video/mp4" />
                                            </video>
                                        </div>
                                    </div>
                                </div>
                            </AccordionContent>
                        </AccordionItem>

                        {/* FAQ 3 */}
                        <AccordionItem value="faq-3" className="bg-white rounded-2xl shadow-md border border-gray-100 overflow-hidden">
                            <AccordionTrigger className="text-left text-lg md:text-xl font-bold px-8 py-6 hover:no-underline text-gray-900 flex justify-between items-center group [&[data-state=open]>div>div]:bg-[#FF6B00] [&[data-state=open]>div>div]:text-white">
                                <div className="flex items-center gap-4">
                                    <div className="w-10 h-10 rounded-full bg-[#FF6B00]/10 flex items-center justify-center text-[#FF6B00] group-hover:bg-[#FF6B00] group-hover:text-white transition-colors">
                                        <PlayCircle className="w-6 h-6" />
                                    </div>
                                    <span>Que se pague sola.</span>
                                </div>
                            </AccordionTrigger>
                            <AccordionContent className="px-8 pb-8 pt-2">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center border-t border-gray-100 pt-8">
                                    <div className="space-y-5 text-gray-600 text-lg text-left">
                                        <p className="font-bold text-gray-900 text-2xl leading-tight">
                                            Ponla a trabajar. Que se pague sola.
                                        </p>
                                        <p>
                                            Pon tu tarjeta de crédito una vez. El sistema empieza a trabajar desde el primer día: <strong className="text-gray-900">controla tu equipo, cierra más cotizaciones, ahorra horas de coordinación.</strong>
                                        </p>
                                        <p>
                                            Mientras tanto, tu tarjeta se va pagando mes a mes con lo que el sistema te hace ganar.
                                        </p>
                                        <div className="bg-orange-50 border-l-4 border-[#FF6B00] p-4 mt-4">
                                            <p className="text-[#FF6B00] font-bold text-xl">
                                                Hasta 24 meses sin intereses con todas las tarjetas.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="relative mx-auto w-full max-w-[400px]">
                                        <div className="relative rounded-xl overflow-hidden shadow-2xl border-4 border-gray-800 bg-black aspect-video">
                                            <video autoPlay loop muted playsInline className="h-full w-full object-cover">
                                                <source src="/images/software_gestion_servicios/video-faq-3.mp4" type="video/mp4" />
                                            </video>
                                        </div>
                                    </div>
                                </div>
                            </AccordionContent>
                        </AccordionItem>

                        {/* FAQ 4 */}
                        <AccordionItem value="faq-4" className="bg-white rounded-2xl shadow-md border border-gray-100 overflow-hidden">
                            <AccordionTrigger className="text-left text-lg md:text-xl font-bold px-8 py-6 hover:no-underline text-gray-900 flex justify-between items-center group [&[data-state=open]>div>div]:bg-[#FF6B00] [&[data-state=open]>div>div]:text-white">
                                <div className="flex items-center gap-4">
                                    <div className="w-10 h-10 rounded-full bg-[#FF6B00]/10 flex items-center justify-center text-[#FF6B00] group-hover:bg-[#FF6B00] group-hover:text-white transition-colors">
                                        <PlayCircle className="w-6 h-6" />
                                    </div>
                                    <span>¿Cuánto tiempo tarda en estar listo y será difícil para mi equipo usarlo?</span>
                                </div>
                            </AccordionTrigger>
                            <AccordionContent className="px-8 pb-8 pt-2">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center border-t border-gray-100 pt-8">
                                    <div className="space-y-4 text-gray-600 text-lg text-left">
                                        <ul className="space-y-4">
                                            <li className="flex items-start gap-3">
                                                <Check className="w-6 h-6 text-[#FF6B00] mt-0.5 flex-shrink-0" />
                                                <span>Implementación rápida y sin fricción, en solo <strong className="text-gray-900">15 a 30 días</strong>.</span>
                                            </li>
                                            <li className="flex items-start gap-3">
                                                <Check className="w-6 h-6 text-[#FF6B00] mt-0.5 flex-shrink-0" />
                                                <span>No solo programamos, sino que <strong className="text-gray-900">educamos a tu equipo</strong> mientras personalizamos el sistema.</span>
                                            </li>
                                            <li className="flex items-start gap-3">
                                                <Check className="w-6 h-6 text-[#FF6B00] mt-0.5 flex-shrink-0" />
                                                <span>Si tus técnicos <strong className="text-gray-900">saben usar WhatsApp, saben usar esto.</strong> Botones grandes y diseño 100% móvil.</span>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="relative mx-auto w-full max-w-[400px]">
                                        <div className="relative rounded-xl overflow-hidden shadow-2xl border-4 border-gray-800 bg-black aspect-video">
                                            <video autoPlay loop muted playsInline className="h-full w-full object-cover">
                                                <source src="/images/software_gestion_servicios/video-faq-4.mp4" type="video/mp4" />
                                            </video>
                                        </div>
                                    </div>
                                </div>
                            </AccordionContent>
                        </AccordionItem>

                        {/* FAQ 5 */}
                        <AccordionItem value="faq-5" className="bg-white rounded-2xl shadow-md border border-gray-100 overflow-hidden">
                            <AccordionTrigger className="text-left text-lg md:text-xl font-bold px-8 py-6 hover:no-underline text-gray-900 flex justify-between items-center group [&[data-state=open]>div>div]:bg-[#FF6B00] [&[data-state=open]>div>div]:text-white">
                                <div className="flex items-center gap-4">
                                    <div className="w-10 h-10 rounded-full bg-[#FF6B00]/10 flex items-center justify-center text-[#FF6B00] group-hover:bg-[#FF6B00] group-hover:text-white transition-colors">
                                        <PlayCircle className="w-6 h-6" />
                                    </div>
                                    <span>¿Qué pasa si mis técnicos se quedan sin señal de internet en una obra?</span>
                                </div>
                            </AccordionTrigger>
                            <AccordionContent className="px-8 pb-8 pt-2">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center border-t border-gray-100 pt-8">
                                    <div className="space-y-4 text-gray-600 text-lg text-left">
                                        <ul className="space-y-4">
                                            <li className="flex items-start gap-3">
                                                <Check className="w-6 h-6 text-[#FF6B00] mt-0.5 flex-shrink-0" />
                                                <span>El sistema está <strong className="text-gray-900">blindado para operar offline</strong> en cualquier terreno.</span>
                                            </li>
                                            <li className="flex items-start gap-3">
                                                <Check className="w-6 h-6 text-[#FF6B00] mt-0.5 flex-shrink-0" />
                                                <span>Captura de <strong className="text-gray-900">videos, fotos, audios y GPS</strong> sin necesidad de datos móviles.</span>
                                            </li>
                                            <li className="flex items-start gap-3">
                                                <Check className="w-6 h-6 text-[#FF6B00] mt-0.5 flex-shrink-0" />
                                                <span>Sincronización automática con administración en cuanto recuperan la señal de internet.</span>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="relative mx-auto w-full max-w-[400px]">
                                        <div className="relative rounded-xl overflow-hidden shadow-2xl border-4 border-gray-800 bg-black aspect-video">
                                            <video autoPlay loop muted playsInline className="h-full w-full object-cover">
                                                <source src="/images/software_gestion_servicios/video-faq-5.mp4" type="video/mp4" />
                                            </video>
                                        </div>
                                    </div>
                                </div>
                            </AccordionContent>
                        </AccordionItem>

                        {/* FAQ 6 */}
                        <AccordionItem value="faq-6" className="bg-white rounded-2xl shadow-md border border-gray-100 overflow-hidden">
                            <AccordionTrigger className="text-left text-lg md:text-xl font-bold px-8 py-6 hover:no-underline text-gray-900 flex justify-between items-center group [&[data-state=open]>div>div]:bg-[#FF6B00] [&[data-state=open]>div>div]:text-white">
                                <div className="flex items-center gap-4">
                                    <div className="w-10 h-10 rounded-full bg-[#FF6B00]/10 flex items-center justify-center text-[#FF6B00] group-hover:bg-[#FF6B00] group-hover:text-white transition-colors">
                                        <PlayCircle className="w-6 h-6" />
                                    </div>
                                    <span>¿Tengo que pagar por funciones que no voy a usar?</span>
                                </div>
                            </AccordionTrigger>
                            <AccordionContent className="px-8 pb-8 pt-2">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center border-t border-gray-100 pt-8">
                                    <div className="space-y-4 text-gray-600 text-lg text-left">
                                        <ul className="space-y-4">
                                            <li className="flex items-start gap-3">
                                                <Check className="w-6 h-6 text-[#FF6B00] mt-0.5 flex-shrink-0" />
                                                <span><strong className="text-gray-900">No.</strong> El software es 100% modular, hecho a la medida de lo que pagas.</span>
                                            </li>
                                            <li className="flex items-start gap-3">
                                                <Check className="w-6 h-6 text-[#FF6B00] mt-0.5 flex-shrink-0" />
                                                <span>Eliges <strong className="text-gray-900">solo lo que necesitas hoy</strong> (como el control de rutas o el agendamiento).</span>
                                            </li>
                                            <li className="flex items-start gap-3">
                                                <Check className="w-6 h-6 text-[#FF6B00] mt-0.5 flex-shrink-0" />
                                                <span>Puedes añadir más módulos y funciones <strong className="text-gray-900">cuando tu empresa crezca</strong> y lo requiera.</span>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="relative mx-auto w-full max-w-[400px]">
                                        <div className="relative rounded-xl overflow-hidden shadow-2xl border-4 border-gray-800 bg-black aspect-video">
                                            <video autoPlay loop muted playsInline className="h-full w-full object-cover">
                                                <source src="/images/software_gestion_servicios/video-faq-6.mp4" type="video/mp4" />
                                            </video>
                                        </div>
                                    </div>
                                </div>
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>
                </div>
            </section>

            {false && (
            <section id="formulario" className="py-16 bg-gradient-to-r from-orange-500 to-orange-600 text-white">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">No seas el último en modernizarte</h2>
                    <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
                        <div className="space-y-6">
                            <p className="text-xl mb-6">Esta tecnología por $150 USD es un regalo insostenible...</p>
                        </div>
                        <div className="bg-white rounded-xl shadow-xl p-6 border border-orange-100">
                            <form onSubmit={handleSubmit} className="space-y-4">
                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="w-full bg-orange-600 hover:bg-orange-700 text-white font-bold py-4 px-6 rounded-lg shadow-lg transition-all transform hover:scale-[1.02] active:scale-[0.98] disabled:opacity-70"
                                >
                                    {isSubmitting ? 'Enviando...' : '¡QUIERO MI CUPO AHORA!'}
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
            )}

        </div>
    );
};

export default CrmClient;
