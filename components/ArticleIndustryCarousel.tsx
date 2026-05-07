'use client';

import React from 'react';
import Image from 'next/image';
import { Plane, Hotel, Utensils, ArrowRight } from 'lucide-react';

interface SectorSolution {
    id: string;
    title: string;
    shortTitle: string;
    description: string;
    imageSrc: string;
    icon: React.ReactNode;
    benefits: string[];
    details: string;
    problemPoints: string[];
    solutionPoints: string[];
}

const sectors: SectorSolution[] = [
    {
        id: 'agencias',
        title: 'Agencias de Viajes',
        shortTitle: 'Operadoras Turísticas',
        description: 'Deja de cotizar y empieza a cerrar ventas.',
        imageSrc: '/images/software_gestion_servicios/nicho_turismo_objetivo.webp',
        icon: <Plane className="w-8 h-8" />,
        benefits: ['Proformas en segundos', 'Seguimiento de Leads'],
        details: 'El 70% de las ventas se pierden por falta de inmediatez. El viajero moderno pregunta en 3 agencias al mismo tiempo y se queda con la que le responda primero.',
        problemPoints: [
            'Fuga de leads por demora en cotización.',
            'Errores manuales en proformas de Word/Excel.',
            'Invisibilidad de quién abrió tu propuesta.'
        ],
        solutionPoints: [
            'Generador automático de PDFs profesionales.',
            'Seguimiento en tiempo real (sabes cuándo lo leen).',
            'Botón de reserva inmediata por WhatsApp.'
        ]
    },
    {
        id: 'hoteles',
        title: 'Hoteles y Alojamiento',
        shortTitle: 'Hoteles y Alojamientos',
        description: 'El fin de las comisiones y el overbooking.',
        imageSrc: '/images/software_gestion_servicios/nicho_hoteleria_objetivo.webp',
        icon: <Hotel className="w-8 h-8" />,
        benefits: ['Reservas Sincronizadas', 'Pagos Directos'],
        details: 'Un hotel sin un motor de reservas propio es un negocio que trabaja para las OTAs. Recupera tu margen del 20% y el control de tu recepción.',
        problemPoints: [
            'Dependencia total de comisiones de Booking/Expedia.',
            'Terror al overbooking por falta de sincronización.',
            'Desconocimiento del perfil del huésped.'
        ],
        solutionPoints: [
            'Motor de reservas directo en tu web sin comisiones.',
            'Sincronización total con tu recepción física.',
            'Historial detallado para fidelización real.'
        ]
    },
    {
        id: 'restaurantes',
        title: 'Gastronomía y Restaurantes',
        shortTitle: 'Restaurantes',
        description: 'Convierte comensales ocasionales en clientes fieles.',
        imageSrc: '/images/software_gestion_servicios/nicho_gastronomia_objetivo.webp',
        icon: <Utensils className="w-8 h-8" />,
        benefits: ['Control de No-Shows', 'Perfiles de Comensales'],
        details: 'Si no tienes sus datos, no tienes un negocio, tienes un mostrador. Anticipa sus gustos y haz que vuelvan una y otra vez.',
        problemPoints: [
            'Mesas vacías por reservas que no llegan (No-Shows).',
            'Falta de base de datos para marketing directo.',
            'Servicio genérico sin conocer gustos del cliente.'
        ],
        solutionPoints: [
            'Control de inasistencias y prepagos de reserva.',
            'Base de datos inteligente de consumos y alergias.',
            'Invitaciones automatizadas para fechas especiales.'
        ]
    }
];

export const sectorsData = sectors;

export default function ArticleIndustryCarousel() {
    return (
        <div className="w-full relative py-10">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-4 w-full">
                {sectors.map((sector) => (
                    <a 
                        key={sector.id} 
                        href={`#${sector.id}`}
                        className="group block relative aspect-[3/4.2] rounded-[3rem] overflow-hidden shadow-xl transition-all duration-500 hover:-translate-y-4 hover:shadow-orange-500/10 border border-gray-100 bg-white"
                    >
                        <div className="absolute inset-0 z-0">
                            <Image
                                src={sector.imageSrc}
                                alt={sector.title}
                                fill
                                className="object-cover transition-transform duration-1000 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-white/10 group-hover:bg-transparent transition-colors duration-500"></div>
                            <div className="absolute inset-0 bg-gradient-to-t from-white via-white/80 to-transparent opacity-95 group-hover:opacity-100 transition-opacity"></div>
                        </div>
                        
                        <div className="absolute inset-x-0 bottom-0 p-8 flex flex-col items-start text-left z-20">
                            <div className="w-12 h-1 bg-[#FF6B00] rounded-full mb-6 transform origin-left transition-all duration-500 group-hover:w-20"></div>
                            
                            <div className="mb-4 p-4 bg-gray-50 border border-gray-100 rounded-2xl text-[#FF6B00] shadow-sm group-hover:bg-[#FF6B00] group-hover:text-white transition-all duration-300">
                                {sector.icon}
                            </div>
                            
                            <h3 className="text-3xl font-black text-gray-900 mb-2 leading-none uppercase tracking-tighter">
                                {sector.shortTitle}
                            </h3>
                            <p className="text-gray-600 text-base mb-6 font-medium leading-tight">
                                {sector.description}
                            </p>
                            
                            <div className="inline-flex items-center gap-3 text-gray-900 font-black text-xs uppercase tracking-widest transition-all duration-300 group-hover:text-[#FF6B00]">
                                Ver Detalles
                                <ArrowRight className="w-4 h-4 transform transition-transform group-hover:translate-x-2" />
                            </div>
                        </div>
                    </a>
                ))}
            </div>
        </div>
    );
}
