'use client';

import React from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, EffectCoverflow } from 'swiper/modules';
import { motion } from 'framer-motion';
import Link from 'next/link';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow';

interface Sector {
    id: string;
    name: string;
    description: string;
    imageSrc: string;
    benefit: string;
    slug: string;
}

const sectors: Sector[] = [
    {
        id: 'turismo',
        name: 'Turismo',
        description: 'Gestión de reservas, check-ins y experiencias personalizadas.',
        imageSrc: '/images/hotel-objetivo/hero.png',
        benefit: 'Automatiza tu recepción y mejora la ocupación.',
        slug: '/blog/software-personalizado/crm-turismo'
    },
    {
        id: 'industria',
        name: 'Industria',
        description: 'Control de procesos, mantenimiento y monitoreo en tiempo real.',
        imageSrc: '/images/automatizacion.webp',
        benefit: 'Reduce tiempos muertos y optimiza la producción.',
        slug: '/blog/software-personalizado/crm-industria'
    },
    {
        id: 'manufactura',
        name: 'Manufactura',
        description: 'Gestión de inventarios, órdenes de producción y calidad.',
        imageSrc: '/images/software-gestion-campo.png',
        benefit: 'Trazabilidad total de cada producto fabricado.',
        slug: '/blog/software-personalizado/crm-manufactura'
    },
    {
        id: 'servicio',
        name: 'Servicios',
        description: 'Agendamiento, gestión de tickets y atención al cliente.',
        imageSrc: '/images/software_gestion_servicios/software-gestion-servicios.webp',
        benefit: 'Escala tu capacidad de servicio sin perder calidad.',
        slug: '/blog/software-personalizado/crm-servicios'
    },
    {
        id: 'educacion',
        name: 'Educación',
        description: 'Plataformas de aprendizaje, matrículas y seguimiento académico.',
        imageSrc: '/images/pensamiento.webp',
        benefit: 'Digitaliza la experiencia educativa de tus alumnos.',
        slug: '/blog/software-personalizado/crm-educacion'
    },
    {
        id: 'salud',
        name: 'Salud',
        description: 'Historias clínicas, turnos médicos y gestión de pacientes.',
        imageSrc: '/images/maspacientes/dr-patricio.jpg',
        benefit: 'Optimiza la atención y el seguimiento de tus pacientes.',
        slug: '/blog/software-personalizado/crm-salud'
    },
    {
        id: 'comercio',
        name: 'Comercio',
        description: 'Puntos de venta, e-commerce y lealtad de clientes.',
        imageSrc: '/images/negocio_resultados.webp',
        benefit: 'Vende más canales de forma sincronizada y eficiente.',
        slug: '/blog/software-personalizado/crm-comercio'
    }
];

const IndustryCarousel: React.FC = () => {
    return (
        <section className="py-24 bg-white overflow-hidden">
            <div className="container mx-auto px-4 mb-16">
                <div className="max-w-3xl text-left">
                    <motion.span
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-orange-600 font-bold tracking-wider uppercase text-sm mb-4 block"
                    >
                        Sectores de alto impacto
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-5xl font-black text-gray-900 mb-6 leading-tight"
                        style={{ fontFamily: 'var(--font-poiret-one, inherit)' }}
                    >
                        ¿Está tu sector aquí? <br />
                        <span className="text-[#FF6B00]">Construimos sobre tu realidad.</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-xl text-gray-600 leading-relaxed"
                    >
                        No forzamos tu negocio a un software. Adaptamos nuestra tecnología para que se sienta como una extensión natural de tu operación diaria.
                    </motion.p>
                </div>
            </div>

            {/* 
              KEY FIX: 
              - NO slidesPerView='auto' at top level (conflicts with centeredSlides + breakpoints)
              - Use numeric slidesPerView with a .15 fraction so you ALWAYS see partial cards on edges
              - This guarantees the active card is always visually in the center
              - loop={true} with enough slides (7) works fine without loopedSlides hack
            */}
            <Swiper
                effect="coverflow"
                grabCursor={true}
                centeredSlides={true}
                loop={true}
                coverflowEffect={{
                    rotate: 0,
                    stretch: 0,
                    depth: 120,
                    modifier: 2,
                    slideShadows: false,
                }}
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                    pauseOnMouseEnter: true,
                }}
                pagination={{ clickable: true }}
                modules={[Autoplay, Pagination, EffectCoverflow]}
                className="industry-swiper !pb-20"
                breakpoints={{
                    // Mobile: show 1 full card + peek both sides
                    0:    { slidesPerView: 1.15, spaceBetween: 16 },
                    // Tablet
                    640:  { slidesPerView: 2.15, spaceBetween: 24 },
                    // Small desktop
                    1024: { slidesPerView: 3.15, spaceBetween: 32 },
                    // Large desktop
                    1440: { slidesPerView: 4.15, spaceBetween: 40 },
                }}
            >
                {sectors.map((sector, index) => (
                    <SwiperSlide key={`${sector.id}-${index}`}>
                        {({ isActive }) => (
                            <Link
                                href={sector.slug}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={`
                                    block relative aspect-[3/4] rounded-[2rem] overflow-hidden shadow-2xl
                                    transition-all duration-500 ease-in-out group cursor-pointer
                                    ${isActive
                                        ? 'scale-100 opacity-100'
                                        : 'scale-[0.88] opacity-40 blur-[1.5px]'
                                    }
                                `}
                            >
                                <Image
                                    src={sector.imageSrc}
                                    alt={sector.name}
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                                    unoptimized={true}
                                />
                                {/* Dark gradient overlay */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent transition-opacity duration-300 group-hover:from-black/95" />

                                {/* Content */}
                                <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 text-left flex flex-col justify-end h-full">
                                    <div className="mt-auto">
                                        <div className="bg-[#FF6B00] h-1 w-10 mb-3" />
                                        <h3 className="text-white text-2xl md:text-3xl font-black mb-2">
                                            {sector.name}
                                        </h3>
                                        <p className="text-gray-300 text-sm leading-relaxed line-clamp-2 mb-4">
                                            {sector.description}
                                        </p>
                                        
                                        {/* Benefit & CTA — only visible when active */}
                                        <div
                                            className={`
                                                transition-all duration-500
                                                ${isActive ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'}
                                            `}
                                        >
                                            <p className="text-orange-400 font-bold text-[10px] uppercase tracking-widest mb-2">
                                                Beneficio Clave
                                            </p>
                                            <p className="text-white text-sm font-medium mb-4">
                                                {sector.benefit}
                                            </p>
                                            
                                            {/* CTA Button */}
                                            <div className="inline-flex items-center gap-2 text-white bg-[#FF6B00] px-4 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider hover:bg-orange-600 transition-colors">
                                                Ver solución
                                                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                                </svg>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Badge */}
                                <div className="absolute top-5 right-5 px-3 py-1.5 bg-white/10 backdrop-blur-md rounded-full border border-white/20">
                                    <span className="text-white text-[9px] font-bold uppercase tracking-widest">
                                        Sector Ideal
                                    </span>
                                </div>
                            </Link>
                        )}
                    </SwiperSlide>
                ))}
            </Swiper>

            <style jsx global>{`
                .industry-swiper .swiper-pagination-bullet {
                    width: 10px;
                    height: 10px;
                    background: #cbd5e1;
                    opacity: 1;
                    transition: all 0.3s ease;
                }
                .industry-swiper .swiper-pagination-bullet-active {
                    width: 36px;
                    border-radius: 5px;
                    background: #FF6B00;
                }
            `}</style>
        </section>
    );
};

export default IndustryCarousel;
