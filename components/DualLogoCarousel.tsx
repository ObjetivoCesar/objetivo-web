'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, FreeMode } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/free-mode';
import { ArrowRight } from 'lucide-react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";

// Define interface for Logo items
interface LogoItem {
    id: string;
    name: string;
    imageSrc: string; // User will provide images for all
    url: string;
    description?: string;
    services?: { name: string; price: number }[];
    precioFinal?: number;
    detallesEspeciales?: string; // Para casos como "Por las páginas 38"
}

// Data Sets - 17 Projects Total
// Split: 9 in Row 1, 8 in Row 2
const row1Logos: LogoItem[] = [
    { 
        id: 'topdent', 
        name: 'TopDent Cuenca', 
        imageSrc: '/images/logos/topdent.webp', 
        url: 'https://topdentcuenca.com/', 
        description: 'Clínica Dental Especializada',
        services: [
            { name: "Página web 7 páginas", price: 500 },
            { name: "Agendamiento de Google", price: 50 }
        ],
        precioFinal: 550
    },
    { 
        id: 'diesel', 
        name: 'Reparación Diesel Loja', 
        imageSrc: '/images/logos/reparaciondiesel.webp', 
        url: 'https://reparaciondieselloja.com/', 
        description: 'Mecánica Automotriz Expertos',
        precioFinal: 250,
        detallesEspeciales: "Landing Page - Marca de negocio"
    },
    { 
        id: 'optica', 
        name: 'Óptica y Lentes', 
        imageSrc: '/images/logos/opticaylentes.webp', 
        url: 'https://opticaylentes.com/', 
        description: 'Salud Visual y Moda',
        precioFinal: 250,
        detallesEspeciales: "Landing Page + Catálogo (Galería) - Marca de negocio"
    },
    { 
        id: 'notaria', 
        name: 'Notaría Octava', 
        imageSrc: '/images/logos/notariaoctava.webp', 
        url: 'https://notariaoctavaloja.com/', 
        description: 'Servicios Notariales y Legales',
        services: [
            { name: "Página web 8 páginas", price: 500 },
            { name: "Formulario con respuestas automáticas", price: 60 }
        ],
        precioFinal: 560,
        detallesEspeciales: "Marca de Negocio"
    },
    { 
        id: 'metalca', 
        name: 'MetalcaEC', 
        imageSrc: '/images/logos/metalca.webp', 
        url: 'https://metalcaec.com/', 
        description: 'Estructuras Metálicas de Alta Calidad',
        precioFinal: 250,
        detallesEspeciales: "Landing Page - Marca de negocio"
    },
    { 
        id: 'mayra', 
        name: 'Ing. Mayra Castillo', 
        imageSrc: '/images/logos/mayracastillo.webp', 
        url: 'https://www.ingmayracastillo.com/', 
        description: 'Ingeniería y Consultoría',
        precioFinal: 500,
        detallesEspeciales: "Página web 7 páginas - Marca personal"
    },
    { 
        id: 'enloja', 
        name: 'EnLoja / Hotel Puente Roto', 
        imageSrc: '/images/logos/enloja.webp', 
        url: 'https://www.enloja.net/', 
        description: 'Hospitalidad y Turismo',
        services: [
            { name: "Página web 8 páginas", price: 500 },
            { name: "Sistema de reservas", price: 700 },
            { name: "Blog de posicionamiento", price: 200 }
        ],
        precioFinal: 1400
    },
    { 
        id: 'franksimbana', 
        name: 'Frank Simbaña', 
        imageSrc: '/images/logos/franksimbaña.webp', 
        url: 'https://www.franksimbana.com/', 
        description: 'Asesoría y Consultoría',
        services: [
            { name: "Página web 7 páginas", price: 500 },
            { name: "Blog de posicionamiento", price: 200 }
        ],
        precioFinal: 700,
        detallesEspeciales: "Marca Personal"
    },
    { 
        id: 'vinadulce', 
        name: 'La Viña Dulce', 
        imageSrc: '/images/logos/viñadulce.webp', 
        url: 'https://www.lavinadulce.com/', 
        description: 'Gastronomía y Vinos',
        services: [
            { name: "Página web 8 páginas", price: 500 },
            { name: "Sistema de formulario dinámico", price: 0 }
        ],
        precioFinal: 500,
        detallesEspeciales: "Marca de negocio"
    },
    { 
        id: 'camila', 
        name: 'Camila Reyes', 
        imageSrc: '/images/logos/camilareyes.webp', 
        url: 'https://camilareyesp.com/', 
        description: 'Portafolio Profesional',
        precioFinal: 250,
        detallesEspeciales: "Landing Page - Marca personal"
    },
    { 
        id: 'guido', 
        name: 'Dr. Guido Díaz', 
        imageSrc: '/images/logos/guidodiaz.webp', 
        url: 'https://drguidodiazortega.com/', 
        description: 'Servicios Médicos Profesionales',
        precioFinal: 250,
        detallesEspeciales: "Landing page - Marca personal"
    },
];

const row2Logos: LogoItem[] = [
    { 
        id: 'energym', 
        name: 'Energym', 
        imageSrc: '/images/logos/energym.webp', 
        url: 'https://energymloja.com/', 
        description: 'Centro de Entrenamiento Físico',
        services: [
            { name: "Página web 8 páginas", price: 500 },
            { name: "Blog de posicionamiento", price: 200 }
        ],
        precioFinal: 700,
        detallesEspeciales: "Marca de negocio"
    },
    { 
        id: 'imper', 
        name: 'Impermeabilisa', 
        imageSrc: '/images/logos/impermeabilisa.webp', 
        url: 'https://impermeabilisa.com/', 
        description: 'Impermeabilización Técnica',
        precioFinal: 250,
        detallesEspeciales: "Landing Page - Marca de negocio"
    },
    { 
        id: '200millas', 
        name: 'Restaurante 200 Millas', 
        imageSrc: '/images/logos/200millas.webp', 
        url: 'https://www.restaurante200millasloja.com/', 
        description: 'Gastronomía del Mar',
        services: [
            { name: "Página web 10 páginas", price: 750 },
            { name: "Galería dinámica", price: 50 }
        ],
        precioFinal: 800,
        detallesEspeciales: "Marca de negocio"
    },
    { 
        id: 'corretec', 
        name: 'Corretec', 
        imageSrc: '/images/logos/corretec.webp', 
        url: 'https://www.corretec.ec/', 
        description: 'Servicios Corporativos',
        precioFinal: 500,
        detallesEspeciales: "Página web 8 páginas - Marca de negocio"
    },
    { 
        id: 'cajamedidor', 
        name: 'Caja de Medidor', 
        imageSrc: '/images/logos/cajamedidor.webp', 
        url: 'https://www.cajademedidordeluz.com/', 
        description: 'Soluciones Eléctricas',
        precioFinal: 250,
        detallesEspeciales: "Landing Page - Marca de negocio"
    },
    { 
        id: 'sastreria', 
        name: 'Sastrería Carlos Poma', 
        imageSrc: '/images/logos/sastreriapoma.webp', 
        url: 'https://www.sastreriacarlospoma.com/', 
        description: 'Alta Costura a Medida',
        precioFinal: 500,
        detallesEspeciales: "Página web 7 páginas - Marca de negocio"
    },
    { 
        id: 'santapetrona', 
        name: 'Hosteria Santa Petrona', 
        imageSrc: '/images/logos/hosteriasantapetrona.webp', 
        url: 'https://hosteriasantapetrona.com/', 
        description: 'Turismo y Descanso',
        services: [
            { name: "Landing Page", price: 250 },
            { name: "Formulario+Recolección de datos (BD)", price: 50 }
        ],
        precioFinal: 300,
        detallesEspeciales: "Marca de negocio"
    },
    { 
        id: 'colibrírojo', 
        name: 'Atelier Colibrí Rojo', 
        imageSrc: '/images/logos/ateliercolibrirojo.webp', 
        url: 'https://ateliercolibrirojo.com/', 
        description: 'Arte y Diseño',
        precioFinal: 500,
        detallesEspeciales: "Página web 8 páginas - Marca de negocio"
    },
    { 
        id: 'naluz', 
        name: 'Naluz', 
        imageSrc: '/images/logos/naluz.webp', 
        url: 'https://naluzloja.com/', 
        description: 'Iluminación y Decoración',
        precioFinal: 250,
        detallesEspeciales: "Landing Page + Catálogo (Galería) - Marca de negocio"
    },
    { 
        id: 'calefonesloja', 
        name: 'Calefones Loja', 
        imageSrc: '/images/logos/calefonesloja.webp', 
        url: 'https://calefonesloja.com/', 
        description: 'Soluciones Térmicas',
        precioFinal: 250,
        detallesEspeciales: "Landing Page + Catálogo (Galería) - Marca de negocio"
    },
    { 
        id: 'activaqr', 
        name: 'ActivaQR', 
        imageSrc: '/images/logos/activaqr.webp', 
        url: 'https://activaqr.com/', 
        description: 'Menús Digitales y QR',
        services: [
            { name: "Página web 7 páginas", price: 500 },
            { name: "Blog de posicionamiento", price: 200 },
            { name: "Sistema SaaS de Contacto Digitales", price: 5000 },
            { name: "Sistema SAS de Revendedores", price: 5000 },
            { name: "Bot autónomo del negocio", price: 500 }
        ],
        precioFinal: 11200,
        detallesEspeciales: "Marca de negocio"
    },
    { 
        id: 'hexadent', 
        name: 'Hexadent', 
        imageSrc: '/images/logos/Hexadent.webp', 
        url: 'https://hexadent.vercel.app/', 
        description: 'Gestión Odontológica',
        services: [
            { name: "Landing Page", price: 250 },
            { name: "Bot Autónomo de su negocio", price: 500 },
            { name: "Software Web para Gestión Odontológica", price: 600 }
        ],
        precioFinal: 1350,
        detallesEspeciales: "Marca de negocio"
    },
    { 
        id: 'pagoexpress', 
        name: 'Pago Express', 
        imageSrc: '/images/logos/PagoExpress.webp', 
        url: 'https://pagoexpress.vercel.app/', 
        description: 'Soluciones de Pago',
        services: [
            { name: "Página web 8 páginas", price: 500 },
            { name: "Bot Autónomo de su negocio", price: 500 }
        ],
        precioFinal: 1000,
        detallesEspeciales: "Marca de negocio"
    },
];

export function DualLogoCarousel({ align = 'center' }: { align?: 'left' | 'center' }) {
    const [selectedLogo, setSelectedLogo] = useState<LogoItem | null>(null);

    const duplicate = (arr: LogoItem[]) => [...arr, ...arr, ...arr]; // Triple duplicate for safer loop on smaller screens

    const LogoCard = ({ logo }: { logo: LogoItem }) => (
        <button
            onClick={() => setSelectedLogo(logo)}
            className="bg-white p-0 border-4 border-black box-border hover:border-orange-600 transition-all duration-300 w-full h-44 md:h-52 flex flex-col items-center justify-center group relative overflow-hidden"
        >
            <div className="flex-1 flex items-center justify-center w-full group-hover:scale-110 transition-transform duration-300 relative z-10">
                <div className="relative w-28 h-28 md:w-36 md:h-36">
                    <Image
                        src={logo.imageSrc}
                        alt={logo.name}
                        fill
                        unoptimized={true}
                        className="object-contain"
                        sizes="(max-width: 640px) 112px, (max-width: 1024px) 144px, 160px"
                    />
                </div>
            </div>
            <div className="absolute bottom-0 left-0 w-full h-1 bg-orange-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 z-20"></div>
        </button>
    );

    return (
        <div className="w-full py-20 bg-white overflow-hidden border-y border-gray-100">
            <div className={`max-w-7xl mx-auto px-4 ${align === 'left' ? 'text-left' : 'text-center'} mb-12`}>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 tracking-tight">
                    Marcas que <span className="text-[#FF6B00]">Confían y Crecen</span>
                </h2>
                <p className={`text-gray-600 max-w-2xl text-lg ${align === 'left' ? '' : 'mx-auto'}`}>
                    Portafolio de proyectos que han transformado su presencia digital con nuestra metodología.
                </p>
            </div>

            <div className="flex flex-col">
                {/* Row 1: Moves Left */}
                <Swiper
                    slidesPerView={2}
                    breakpoints={{
                        640: { slidesPerView: 3 },
                        768: { slidesPerView: 4 },
                        1024: { slidesPerView: 5 },
                        1280: { slidesPerView: 6 },
                    }}
                    spaceBetween={0}
                    loop={true}
                    speed={5000}
                    autoplay={{
                        delay: 0,
                        disableOnInteraction: false,
                        reverseDirection: false
                    }}
                    freeMode={{
                        enabled: true,
                        momentum: false
                    }}
                    modules={[Autoplay, FreeMode]}
                    className="w-full"
                >
                    {duplicate(row1Logos).map((logo, index) => (
                        <SwiperSlide key={`r1-${logo.id}-${index}`}>
                            <LogoCard logo={logo} />
                        </SwiperSlide>
                    ))}
                </Swiper>

                {/* Row 2: Moves Right */}
                <Swiper
                    slidesPerView={2}
                    breakpoints={{
                        640: { slidesPerView: 3 },
                        768: { slidesPerView: 4 },
                        1024: { slidesPerView: 5 },
                        1280: { slidesPerView: 6 },
                    }}
                    spaceBetween={0}
                    loop={true}
                    speed={5000}
                    autoplay={{
                        delay: 0,
                        disableOnInteraction: false,
                        reverseDirection: true
                    }}
                    freeMode={{
                        enabled: true,
                        momentum: false
                    }}
                    modules={[Autoplay, FreeMode]}
                    className="w-full"
                >
                    {duplicate(row2Logos).map((logo, index) => (
                        <SwiperSlide key={`r2-${logo.id}-${index}`}>
                            <LogoCard logo={logo} />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>

            {/* Lightbox / Modal */}
            <Dialog open={!!selectedLogo} onOpenChange={() => setSelectedLogo(null)}>
                <DialogContent className="sm:max-w-md bg-white border-0 shadow-2xl">
                    <DialogHeader>
                        <DialogTitle className="text-center text-2xl font-bold text-gray-900 mt-2">{selectedLogo?.name}</DialogTitle>
                        <DialogDescription className="text-center text-gray-500 text-base">
                            {selectedLogo?.description || 'Proyecto destacado'}
                        </DialogDescription>
                    </DialogHeader>

                    <div className="flex flex-col items-center justify-center p-6 bg-gray-50 rounded-2xl my-4 border border-gray-100">
                        {selectedLogo?.imageSrc && (
                            <div className="relative w-40 h-40 mb-4">
                                <Image
                                    src={selectedLogo.imageSrc}
                                    alt={selectedLogo.name}
                                    fill
                                    className="object-contain drop-shadow-sm"
                                    priority
                                />
                            </div>
                        )}

                        {/* Desglose de Servicios y Precios */}
                        <div className="w-full space-y-3 mt-2">
                            {selectedLogo?.services && (
                                <div className="border-t border-gray-200 pt-4">
                                    <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">Inversión Real del Proyecto</p>
                                    {selectedLogo.services.map((service, idx) => (
                                        <div key={idx} className="flex justify-between text-sm text-gray-700">
                                            <span>{service.name}</span>
                                            <span className="font-mono">${service.price}</span>
                                        </div>
                                    ))}
                                </div>
                            )}

                            {selectedLogo?.detallesEspeciales && (
                                <div className="bg-blue-50 p-3 rounded-lg border border-blue-100 italic text-sm text-blue-800">
                                    {selectedLogo.detallesEspeciales}
                                </div>
                            )}

                            {selectedLogo?.precioFinal && (
                                <div className="flex justify-between items-center border-t-2 border-dashed border-gray-200 pt-3 mt-2">
                                    <span className="font-bold text-gray-900">Inversión Final:</span>
                                    <span className="text-xl font-black text-orange-600 font-mono">${selectedLogo.precioFinal}</span>
                                </div>
                            )}
                            
                            {selectedLogo?.precioFinal && (
                                <p className="text-[10px] text-gray-400 text-center mt-2 italic">
                                    * Este presupuesto fue una excepción para este cliente y puede variar según requerimientos técnicos.
                                </p>
                            )}
                        </div>
                    </div>

                    <div className="flex justify-center pb-2">
                        <a
                            href={selectedLogo?.url || '#'}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group inline-flex items-center justify-center px-8 py-4 border border-transparent text-lg font-bold rounded-xl text-white bg-[#121212] hover:bg-gray-900 transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5"
                        >
                            Visitar Sitio Web
                            <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                        </a>
                    </div>
                </DialogContent>
            </Dialog>
        </div>
    );
}
