'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plane, Hotel, Utensils, X, ArrowRight, CheckCircle2 } from 'lucide-react';

interface Solution {
    id: string;
    title: string;
    shortTitle: string;
    icon: React.ReactNode;
    color: string;
    description: string;
    benefits: string[];
    details: string;
}

const solutions: Solution[] = [
    {
        id: 'agencias',
        title: 'Agencias de Viajes: De cotizar a cerrar ventas',
        shortTitle: 'Agencias de Viajes',
        icon: <Plane className="w-8 h-8" />,
        color: '#FF6B00',
        description: 'Reduce el tiempo de proforma de horas a segundos.',
        benefits: [
            'Proformas en 40 segundos',
            'Embudo visual de viajeros',
            'Seguimiento automatizado'
        ],
        details: 'El 80% de las ventas requieren al menos 3 interacciones. Si solo envías un PDF y esperas, estás perdiendo dinero. Con nuestro CRM, mientras tu competencia busca fotos, tú ya has enviado una propuesta profesional. Identifica al instante quién está listo para pagar y quién necesita un recordatorio.'
    },
    {
        id: 'hoteles',
        title: 'Hoteles y Alojamiento: El fin de la dependencia de las OTAs',
        shortTitle: 'Hoteles y Alojamiento',
        icon: <Hotel className="w-8 h-8" />,
        color: '#FF6B00',
        description: 'Potencia tu canal de venta directa y evita comisiones.',
        benefits: [
            'Disponibilidad en tiempo real',
            'Sincronización anti-overbooking',
            'Fidelización inteligente'
        ],
        details: 'Tu mayor gasto son las comisiones de terceros. El CRM es tu canal de venta directa. Sincroniza habitaciones y evita el terror del overbooking. El sistema sabe cuándo es el aniversario de tu huésped y le envía una oferta de estancia antes de que busque en Booking.'
    },
    {
        id: 'restaurantes',
        title: 'Restaurantes: Máximo provecho a cada mesa',
        shortTitle: 'Gastronomía y Restaurantes',
        icon: <Utensils className="w-8 h-8" />,
        color: '#FF6B00',
        description: 'Gestiona la demanda y asegura la recurrencia.',
        benefits: [
            'Control total de No-Shows',
            'Psicología del comensal',
            'Perfiles de gustos y alergias'
        ],
        details: 'Un restaurante vacío es una pérdida absoluta. El CRM gestiona la demanda y la recurrencia. Los recordatorios automáticos aseguran que la mesa esté ocupada. Usa los datos de gustos y alergias para que cada visita sea una experiencia personalizada que genere reseñas de 5 estrellas.'
    }
];

export const IndustrySolutionsBoxes = () => {
    const [selectedSolution, setSelectedSolution] = useState<Solution | null>(null);

    return (
        <section className="py-12 bg-white">
            <div className="max-w-6xl mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold text-gray-900 mb-4">Soluciones Especializadas</h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        Haz clic en tu sector para ver cómo el CRM transforma tu operación diaria.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {solutions.map((solution) => (
                        <motion.div
                            key={solution.id}
                            whileHover={{ y: -5 }}
                            className="relative group cursor-pointer"
                            onClick={() => setSelectedSolution(solution)}
                        >
                            <div className="h-full bg-white border border-gray-100 rounded-3xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden">
                                {/* Accent Bar */}
                                <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-transparent via-[#FF6B00] to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                                
                                <div className="mb-6 inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-orange-50 text-[#FF6B00] group-hover:bg-[#FF6B00] group-hover:text-white transition-colors duration-300">
                                    {solution.icon}
                                </div>
                                
                                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[#FF6B00] transition-colors">
                                    {solution.shortTitle}
                                </h3>
                                
                                <p className="text-gray-600 mb-6 line-clamp-2">
                                    {solution.description}
                                </p>

                                <ul className="space-y-2 mb-8">
                                    {solution.benefits.slice(0, 2).map((benefit, i) => (
                                        <li key={i} className="flex items-center text-sm text-gray-500">
                                            <CheckCircle2 className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                                            {benefit}
                                        </li>
                                    ))}
                                </ul>

                                <div className="inline-flex items-center text-[#FF6B00] font-bold text-sm uppercase tracking-wider group-hover:translate-x-2 transition-transform">
                                    Ver Detalle <ArrowRight className="ml-2 w-4 h-4" />
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Lightbox / Modal */}
            <AnimatePresence>
                {selectedSolution && (
                    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setSelectedSolution(null)}
                            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
                        />
                        
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.9, y: 20 }}
                            className="relative bg-white w-full max-w-2xl rounded-3xl shadow-2xl overflow-hidden"
                        >
                            <button 
                                onClick={() => setSelectedSolution(null)}
                                className="absolute top-6 right-6 p-2 rounded-full hover:bg-gray-100 transition-colors z-10"
                            >
                                <X className="w-6 h-6 text-gray-400" />
                            </button>

                            <div className="flex flex-col md:flex-row h-full">
                                <div className="md:w-1/3 bg-gradient-to-br from-orange-500 to-[#FF6B00] p-10 flex flex-col items-center justify-center text-white">
                                    <div className="w-20 h-20 bg-white/20 rounded-3xl flex items-center justify-center mb-6 backdrop-blur-md">
                                        {selectedSolution.icon}
                                    </div>
                                    <h4 className="text-xl font-bold text-center">
                                        {selectedSolution.shortTitle}
                                    </h4>
                                </div>

                                <div className="md:w-2/3 p-10">
                                    <h3 className="text-2xl font-bold text-gray-900 mb-6 leading-tight">
                                        {selectedSolution.title}
                                    </h3>
                                    
                                    <div className="prose prose-orange max-w-none">
                                        <p className="text-gray-600 text-lg leading-relaxed mb-6">
                                            {selectedSolution.details}
                                        </p>
                                    </div>

                                    <div className="space-y-3 mb-8">
                                        {selectedSolution.benefits.map((benefit, i) => (
                                            <div key={i} className="flex items-center gap-3">
                                                <div className="w-6 h-6 rounded-full bg-orange-100 flex items-center justify-center flex-shrink-0">
                                                    <CheckCircle2 className="w-4 h-4 text-[#FF6B00]" />
                                                </div>
                                                <span className="text-gray-700 font-medium">{benefit}</span>
                                            </div>
                                        ))}
                                    </div>

                                    <button 
                                        onClick={() => setSelectedSolution(null)}
                                        className="w-full bg-gray-900 text-white font-bold py-4 rounded-xl hover:bg-gray-800 transition-colors"
                                    >
                                        Entendido
                                    </button>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
        </section>
    );
};

export default IndustrySolutionsBoxes;
