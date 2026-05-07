'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

interface FaqItem {
    question: string;
    answer: string;
}

interface BlogFaqAccordionProps {
    faqs: FaqItem[];
}

export default function BlogFaqAccordion({ faqs }: BlogFaqAccordionProps) {
    const [activeIndex, setActiveIndex] = useState<number | null>(0);

    if (!faqs || faqs.length === 0) return null;

    return (
        <section className="py-16 bg-gray-50/50 rounded-[40px] px-6 md:px-12 my-16 border border-gray-100">
            <div className="max-w-3xl mx-auto">
                <div className="text-center mb-12">
                    <span className="text-[#FF6B00] font-black text-[10px] uppercase tracking-[0.3em] mb-4 block">Resolviendo Dudas</span>
                    <h2 className="text-4xl font-black text-gray-900 tracking-tighter uppercase leading-none">
                        Preguntas <br /> Frecuentes
                    </h2>
                </div>

                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <div 
                            key={index}
                            className={`group border-2 transition-all duration-500 rounded-3xl overflow-hidden ${activeIndex === index ? 'border-[#FF6B00] bg-white shadow-xl shadow-orange-100/50' : 'border-gray-100 bg-white hover:border-gray-200 shadow-sm'}`}
                        >
                            <button
                                onClick={() => setActiveIndex(activeIndex === index ? null : index)}
                                className="w-full flex items-center justify-between p-6 md:p-8 text-left transition-all"
                            >
                                <span className={`text-lg md:text-xl font-bold tracking-tight pr-8 transition-colors ${activeIndex === index ? 'text-[#FF6B00]' : 'text-gray-900'}`}>
                                    {faq.question}
                                </span>
                                <div className={`flex-shrink-0 w-10 h-10 rounded-2xl flex items-center justify-center transition-all duration-500 ${activeIndex === index ? 'bg-[#FF6B00] text-white rotate-180 shadow-lg shadow-orange-200' : 'bg-gray-50 text-gray-400 group-hover:bg-gray-100'}`}>
                                    <ChevronDown className="w-6 h-6" strokeWidth={3} />
                                </div>
                            </button>

                            <AnimatePresence>
                                {activeIndex === index && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: 'auto', opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.4, ease: [0.04, 0.62, 0.23, 0.98] }}
                                    >
                                        <div className="px-8 pb-8 md:px-10 md:pb-10 pt-0">
                                            <div className="w-12 h-1 bg-gray-100 mb-6 rounded-full" />
                                            <p className="text-gray-600 text-lg leading-relaxed font-medium">
                                                {faq.answer}
                                            </p>
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
