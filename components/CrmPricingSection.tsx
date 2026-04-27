'use client';

import React from 'react';
import Link from 'next/link';
import { Check } from 'lucide-react';

export default function CrmPricingSection() {
    return (
        <>
            {/* Pre-Pricing — Objection Removal: Que se pague sola */}
            <section className="relative overflow-hidden bg-gray-900 py-16 px-4">
                {/* Decorative blur blobs */}
                <div className="absolute -top-20 -left-20 w-72 h-72 bg-[#FF6B00] rounded-full blur-[100px] opacity-20 pointer-events-none" />
                <div className="absolute -bottom-20 -right-20 w-72 h-72 bg-[#FF6B00] rounded-full blur-[100px] opacity-10 pointer-events-none" />

                <div className="relative max-w-5xl mx-auto text-center">
                    {/* Eyebrow */}
                    <span className="inline-block text-[#FF6B00] font-bold tracking-widest uppercase text-xs mb-6">
                        Antes de ver los precios, lee esto
                    </span>

                    <h2 className="text-4xl md:text-6xl font-black text-white mb-6 leading-tight" style={{ fontFamily: 'var(--font-poiret-one, inherit)' }}>
                        Ponla a trabajar.{' '}
                        <span className="text-[#FF6B00]">Que se pague sola.</span>
                    </h2>

                    <p className="text-gray-300 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed mb-8">
                        Pon tu tarjeta de crédito una vez. El sistema empieza a trabajar desde el primer día:{' '}
                        <strong className="text-white">controla tu equipo, cierra más cotizaciones, ahorra horas de coordinación.</strong>{' '}
                        Mientras tanto, tu tarjeta se va pagando mes a mes con lo que el sistema te hace ganar.
                    </p>

                    {/* Highlight callout */}
                    <div className="inline-flex items-center gap-3 bg-[#FF6B00]/10 border border-[#FF6B00]/30 rounded-2xl px-8 py-4 mb-10">
                        <svg className="w-6 h-6 text-[#FF6B00] flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                        </svg>
                        <p className="text-[#FF6B00] font-bold text-lg md:text-xl">
                            Hasta 24 meses sin intereses con todas las tarjetas.
                        </p>
                    </div>

                    {/* Social proof strip */}
                    <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-gray-400">
                        <span className="flex items-center gap-2">
                            <span className="w-2 h-2 bg-[#FF6B00] rounded-full"></span>
                            Sin comisiones ocultas
                        </span>
                        <span className="flex items-center gap-2">
                            <span className="w-2 h-2 bg-[#FF6B00] rounded-full"></span>
                            Pago seguro con PayPhone
                        </span>
                        <span className="flex items-center gap-2">
                            <span className="w-2 h-2 bg-[#FF6B00] rounded-full"></span>
                            Control total desde el día 1
                        </span>
                    </div>
                </div>
            </section>

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
                        {/* Plan 1: Proyectos y Rutas */}
                        <div className="bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 flex flex-col border-2 border-gray-100 hover:border-[#FF6B00]/30 relative">
                            <div className="p-6 border-b border-gray-100 bg-gradient-to-br from-gray-50 to-transparent">
                                <h3 className="text-xl font-bold text-gray-900 font-playfair mb-2">Proyectos y Rutas</h3>
                                <div className="flex items-baseline gap-2 mb-2">
                                    <span className="text-4xl font-bold text-[#FF6B00]">$1.500</span>
                                </div>
                            </div>
                            <div className="p-6 flex-grow">
                                <p className="text-sm font-semibold text-gray-700 mb-4">Para: Empresas con técnicos o trabajadores en campo.</p>
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
                                        <span>Bitácora offline</span>
                                    </li>
                                    <li className="flex items-start gap-2 text-sm text-gray-600">
                                        <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                                        <span>Fotos y reportes desde el campo</span>
                                    </li>
                                </ul>
                            </div>
                            <div className="p-6 pt-0">
                                <Link
                                    href={`/pago?amount=1500&description=${encodeURIComponent("CRM Proyectos y Rutas")}&backTo=/blog/software-personalizado/crm-turismo`}
                                    className="block w-full bg-gray-900 text-white text-center font-bold py-4 px-6 rounded-xl hover:bg-[#FF6B00] transition-colors shadow-lg"
                                >
                                    Seleccionar Plan
                                </Link>
                            </div>
                        </div>

                        {/* Plan 2: Agendamiento */}
                        <div className="bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 flex flex-col border-2 border-gray-100 hover:border-[#FF6B00]/30 relative">
                            <div className="p-6 border-b border-gray-100 bg-gradient-to-br from-gray-50 to-transparent">
                                <h3 className="text-xl font-bold text-gray-900 font-playfair mb-2">Agendamiento</h3>
                                <div className="flex items-baseline gap-2 mb-2">
                                    <span className="text-4xl font-bold text-[#FF6B00]">$600</span>
                                </div>
                            </div>
                            <div className="p-6 flex-grow">
                                <p className="text-sm font-semibold text-gray-700 mb-4">Para: Empresas que dependen de agendar visitas o citas.</p>
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
                                        <span>Asignación de tareas automáticas</span>
                                    </li>
                                    <li className="flex items-start gap-2 text-sm text-gray-600">
                                        <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                                        <span>Recordatorios automáticos</span>
                                    </li>
                                </ul>
                            </div>
                            <div className="p-6 pt-0">
                                <Link
                                    href={`/pago?amount=600&description=${encodeURIComponent("CRM Agendamiento")}&backTo=/blog/software-personalizado/crm-turismo`}
                                    className="block w-full bg-[#FF6B00] text-white text-center font-bold py-4 px-6 rounded-xl hover:bg-gray-900 transition-colors shadow-lg"
                                >
                                    Seleccionar Plan
                                </Link>
                            </div>
                        </div>

                        {/* Plan 3: Cotizaciones */}
                        <div className="bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 flex flex-col border-2 border-gray-100 hover:border-[#FF6B00]/30 relative">
                            <div className="p-6 border-b border-gray-100 bg-gradient-to-br from-gray-50 to-transparent">
                                <h3 className="text-xl font-bold text-gray-900 font-playfair mb-2">Cotizaciones</h3>
                                <div className="flex items-baseline gap-2 mb-2">
                                    <span className="text-4xl font-bold text-[#FF6B00]">$600</span>
                                </div>
                            </div>
                            <div className="p-6 flex-grow">
                                <p className="text-sm font-semibold text-gray-700 mb-4">Para: Empresas que cotizan servicios a medida.</p>
                                <ul className="space-y-3 mb-6">
                                    <li className="flex items-start gap-2 text-sm text-gray-600">
                                        <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                                        <span>Generación automática de PDFs</span>
                                    </li>
                                    <li className="flex items-start gap-2 text-sm text-gray-600">
                                        <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                                        <span>Cotización personalizada al instante</span>
                                    </li>
                                    <li className="flex items-start gap-2 text-sm text-gray-600">
                                        <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                                        <span>Inventario integrado</span>
                                    </li>
                                    <li className="flex items-start gap-2 text-sm text-gray-600">
                                        <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                                        <span>Sistema a la medida</span>
                                    </li>
                                </ul>
                            </div>
                            <div className="p-6 pt-0">
                                <Link
                                    href={`/pago?amount=600&description=${encodeURIComponent("CRM Cotizaciones")}&backTo=/blog/software-personalizado/crm-turismo`}
                                    className="block w-full bg-gray-900 text-white text-center font-bold py-4 px-6 rounded-xl hover:bg-[#FF6B00] transition-colors shadow-lg"
                                >
                                    Seleccionar Plan
                                </Link>
                            </div>
                        </div>

                        {/* Plan 4: Suite Completa */}
                        <div className="bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 flex flex-col border-2 border-[#FF6B00] relative transform md:scale-105 z-10">
                            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                                <span className="bg-[#FF6B00] text-white text-xs font-bold px-4 py-1 rounded-full shadow-lg">RECOMENDADO</span>
                            </div>
                            <div className="p-6 border-b border-gray-100 bg-gradient-to-br from-[#FF6B00]/5 to-transparent">
                                <h3 className="text-xl font-bold text-gray-900 font-playfair mb-2">Suite Completa</h3>
                                <div className="flex items-baseline gap-2 mb-2">
                                    <span className="text-4xl font-bold text-[#FF6B00]">$2.500</span>
                                </div>
                            </div>
                            <div className="p-6 flex-grow">
                                <p className="text-sm font-semibold text-gray-700 mb-4">Para: Empresas que buscan máxima eficiencia operativa.</p>
                                <ul className="space-y-3 mb-6">
                                    <li className="flex items-start gap-2 text-sm text-gray-600">
                                        <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                                        <span>Todos los módulos integrados</span>
                                    </li>
                                    <li className="flex items-start gap-2 text-sm text-gray-600">
                                        <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                                        <span>Chat offline</span>
                                    </li>
                                    <li className="flex items-start gap-2 text-sm text-gray-600">
                                        <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                                        <span>Galería de eventos y promociones</span>
                                    </li>
                                    <li className="flex items-start gap-2 text-sm text-gray-600">
                                        <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                                        <span>Integración con redes sociales</span>
                                    </li>
                                </ul>
                            </div>
                            <div className="p-6 pt-0">
                                <Link
                                    href={`/pago?amount=2500&description=${encodeURIComponent("CRM Suite Completa")}&backTo=/blog/software-personalizado/crm-turismo`}
                                    className="block w-full bg-[#FF6B00] text-white text-center font-bold py-4 px-6 rounded-xl hover:bg-gray-900 transition-colors shadow-lg"
                                >
                                    Seleccionar Plan
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
