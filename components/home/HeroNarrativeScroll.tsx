'use client';

import React, { useState, useEffect, useRef, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Sparkles, ChevronDown } from 'lucide-react';

interface SceneData {
  number: string;
  image: string;
  eyebrow: string;
  heading: string;
  subheading?: string;
  badge?: string;
  isCta?: boolean;
}

const scenes: SceneData[] = [
  {
    number: "01 / 06",
    image: "/images/hero-scroll/scene1.png",
    eyebrow: "Posicionamiento Web & SEO Local",
    heading: "Posicionamiento Web y SEO en Ecuador",
    subheading: "Tu negocio puede estar vendiendo bien... y aun así estar perdiendo clientes por no aparecer donde te están buscando.",
  },
  {
    number: "02 / 06",
    image: "/images/hero-scroll/scene2.png",
    eyebrow: "La Verdad del Margen",
    heading: "El problema no es vender.",
    subheading: "Es no saber cuánto de lo que vendes realmente queda.",
  },
  {
    number: "03 / 06",
    image: "/images/hero-scroll/scene3.png",
    eyebrow: "Retención vs Fricción",
    heading: "¿Sabes cuántos clientes tienes?",
    subheading: "¿Y cuántos de ellos vuelven?\nPorque no es lo mismo.",
  },
  {
    number: "04 / 06",
    image: "/images/hero-scroll/scene4.png",
    eyebrow: "El Costo Oculto",
    heading: "Pagas para que alguien responda tus mensajes.",
    subheading: "Pero responder no es vender.\nY si solo convierte el 5%...",
    badge: "95% de pérdida silenciosa en atención manual",
  },
  {
    number: "05 / 06",
    image: "/images/hero-scroll/scene5.png",
    eyebrow: "Cuello de Botella",
    heading: "Tienes equipo. Tienes clientes. Tienes un negocio.",
    subheading: "Entonces, ¿por qué todo sigue pasando por ti?",
  },
  {
    number: "06 / 06",
    image: "/images/hero-scroll/scene6.png",
    eyebrow: "Ahí Empieza Objetivo",
    heading: "No necesitas otra herramienta.",
    subheading: "Necesitas saber dónde está el problema. Eso es un diagnóstico.",
    isCta: true,
  },
];

export default function HeroNarrativeScroll() {
  const [currentIdx, setCurrentIdx] = useState(0);
  const [heroCompleted, setHeroCompleted] = useState(false);
  const isAnimating = useRef(false);
  const touchStartY = useRef(0);
  const containerRef = useRef<HTMLDivElement>(null);

  const isLastScene = currentIdx === scenes.length - 1;

  // ════════════════════════════════════════════════════════
  // CONTROL AL RECARGAR (RELOAD SAFETY):
  // Si el usuario recarga la página estando abajo, no trabar el scroll.
  // Si recarga arriba (scrollY <= 50), forzar scroll(0,0) y activar hero.
  // ════════════════════════════════════════════════════════
  useEffect(() => {
    if (typeof window !== 'undefined') {
      if (window.scrollY > 150) {
        // El usuario recargó ya abajo en la página -> no bloquear
        setHeroCompleted(true);
        setCurrentIdx(scenes.length - 1);
      } else {
        // Recargó cerca del tope -> ir exactamente a top 0
        window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior });
      }
    }
  }, []);

  // ════════════════════════════════════════════════════════
  // GESTIÓN DE BLOQUEO DE BODY OVERFLOW
  // ════════════════════════════════════════════════════════
  useEffect(() => {
    if (!heroCompleted) {
      document.body.style.overflow = 'hidden';
      document.body.style.touchAction = 'none';
      document.documentElement.style.overflow = 'hidden';
      document.documentElement.style.touchAction = 'none';
    } else {
      document.body.style.overflow = '';
      document.body.style.touchAction = '';
      document.documentElement.style.overflow = '';
      document.documentElement.style.touchAction = '';
    }

    return () => {
      document.body.style.overflow = '';
      document.body.style.touchAction = '';
      document.documentElement.style.overflow = '';
      document.documentElement.style.touchAction = '';
    };
  }, [heroCompleted]);

  // Completar hero cuando se llega a la escena final
  useEffect(() => {
    if (isLastScene && !heroCompleted) {
      setHeroCompleted(true);
    }
  }, [isLastScene, heroCompleted]);

  // ════════════════════════════════════════════════════════
  // CAMBIO DE ESCENA
  // ════════════════════════════════════════════════════════
  const handleSceneChange = useCallback((direction: 'next' | 'prev') => {
    if (isAnimating.current) return;

    if (direction === 'next' && currentIdx < scenes.length - 1) {
      isAnimating.current = true;
      setCurrentIdx(prev => prev + 1);
      setTimeout(() => { isAnimating.current = false; }, 700);
    } else if (direction === 'prev' && currentIdx > 0) {
      isAnimating.current = true;
      setCurrentIdx(prev => prev - 1);
      setTimeout(() => { isAnimating.current = false; }, 700);
    }
  }, [currentIdx]);

  // ════════════════════════════════════════════════════════
  // MANEJO DE RUEDA DE MOUSE (Desktop)
  // ════════════════════════════════════════════════════════
  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      // Si el hero se completó y el usuario está abajo de la página, scroll normal
      if (heroCompleted && window.scrollY > 20) {
        return;
      }

      // Si el hero está activo (no completado)
      if (!heroCompleted) {
        e.preventDefault();
        if (e.deltaY > 20) {
          handleSceneChange('next');
        } else if (e.deltaY < -20) {
          handleSceneChange('prev');
        }
      } else if (heroCompleted && window.scrollY <= 10 && e.deltaY < -30) {
        // Volver a atrapar hero si vuelve al tope y scrollea arriba
        e.preventDefault();
        setHeroCompleted(false);
        handleSceneChange('prev');
      }
    };

    window.addEventListener('wheel', handleWheel, { passive: false });
    return () => window.removeEventListener('wheel', handleWheel);
  }, [currentIdx, heroCompleted, handleSceneChange]);

  // ════════════════════════════════════════════════════════
  // MANEJO DE TOUCH (Mobile)
  // ════════════════════════════════════════════════════════
  useEffect(() => {
    const handleTouchStart = (e: TouchEvent) => {
      touchStartY.current = e.touches[0].clientY;
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (!heroCompleted || (heroCompleted && window.scrollY <= 10 && touchStartY.current < e.touches[0].clientY)) {
        if (window.scrollY <= 10) {
          e.preventDefault();
        }
      }
    };

    const handleTouchEnd = (e: TouchEvent) => {
      if (isAnimating.current) return;
      const deltaY = touchStartY.current - e.changedTouches[0].clientY;

      if (!heroCompleted) {
        if (deltaY > 40) {
          handleSceneChange('next');
        } else if (deltaY < -40) {
          handleSceneChange('prev');
        }
      } else if (heroCompleted && window.scrollY <= 10 && deltaY < -40 && currentIdx > 0) {
        setHeroCompleted(false);
        handleSceneChange('prev');
      }
    };

    document.addEventListener('touchstart', handleTouchStart, { passive: true });
    document.addEventListener('touchmove', handleTouchMove, { passive: false });
    document.addEventListener('touchend', handleTouchEnd, { passive: true });

    return () => {
      document.removeEventListener('touchstart', handleTouchStart);
      document.removeEventListener('touchmove', handleTouchMove);
      document.removeEventListener('touchend', handleTouchEnd);
    };
  }, [heroCompleted, currentIdx, handleSceneChange]);

  // ════════════════════════════════════════════════════════
  // TECLADO (Flechas / Espacio)
  // ════════════════════════════════════════════════════════
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!heroCompleted) {
        if (e.key === 'ArrowDown' || e.key === ' ') {
          e.preventDefault();
          handleSceneChange('next');
        } else if (e.key === 'ArrowUp') {
          e.preventDefault();
          handleSceneChange('prev');
        }
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [heroCompleted, handleSceneChange]);

  const scene = scenes[currentIdx];

  return (
    <div
      ref={containerRef}
      className="relative w-full h-screen overflow-hidden bg-[#121212] text-white select-none"
      style={{ touchAction: heroCompleted ? 'auto' : 'none' }}
    >
      {/* Fondo con Transición entre Escenas */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIdx}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.98 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="absolute inset-0 w-full h-full pointer-events-none"
        >
          <img
            src={scene.image}
            alt={scene.eyebrow}
            className="w-full h-full object-cover brightness-[0.38] contrast-[1.15]"
          />
          {/* Sombra inferior degradada para destacar el texto de la izquierda */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#121212] via-[#121212]/50 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#121212]/80 via-transparent to-transparent" />
        </motion.div>
      </AnimatePresence>

      {/* Indicador de Progreso 01 / 06 (Superior Derecha) */}
      <div className="absolute top-24 right-6 sm:right-10 z-40 flex items-center gap-2 bg-black/50 backdrop-blur-md px-4 py-2 rounded-full border border-cyan-500/20">
        {scenes.map((s, idx) => (
          <button
            key={idx}
            onClick={() => {
              setCurrentIdx(idx);
              if (idx === scenes.length - 1) setHeroCompleted(true);
            }}
            className={`font-mono text-xs font-bold transition-all px-1.5 py-0.5 rounded ${
              idx === currentIdx
                ? 'text-cyan-400 bg-cyan-500/20 border border-cyan-500/40'
                : 'text-slate-500 hover:text-slate-300'
            }`}
          >
            {s.number}
          </button>
        ))}
      </div>

      {/* Contenido de Texto - ALINEADO ABAJO A LA IZQUIERDA */}
      <div className="absolute inset-x-0 bottom-0 z-30 flex flex-col items-start text-left px-6 sm:px-16 pb-16 sm:pb-20 max-w-5xl pointer-events-auto">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIdx}
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col items-start"
          >
            {/* Numerador (01 / 06) */}
            <div className="font-mono text-sm sm:text-base font-bold text-cyan-400/90 tracking-[0.25em] uppercase mb-2">
              {scene.number}
            </div>

            {/* Eyebrow / Categoría */}
            <div className="font-mono text-xs sm:text-sm font-semibold text-slate-400 tracking-[0.2em] uppercase mb-4 flex items-center gap-2">
              <span className="w-6 h-px bg-cyan-400/60 inline-block"></span>
              {scene.eyebrow}
            </div>

            {/* Título Principal: H1 solo para la primera escena, H2 para las demás */}
            {currentIdx === 0 ? (
              <h1 className="font-sans text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white leading-[1.15] mb-4 max-w-3xl">
                {scene.heading}
              </h1>
            ) : (
              <h2 className="font-sans text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white leading-[1.15] mb-4 max-w-3xl">
                {scene.heading}
              </h2>
            )}

            {/* Subtítulo */}
            <p className="font-sans text-base sm:text-xl text-slate-300 font-light leading-relaxed max-w-2xl whitespace-pre-line mb-6">
              {scene.subheading}
            </p>

            {/* Badge dato (Pantalla 4) */}
            {scene.badge && (
              <div className="inline-block px-4 py-2 rounded-xl bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-sm font-semibold tracking-wide backdrop-blur-md animate-pulse mb-4">
                💡 {scene.badge}
              </div>
            )}

            {/* CTA Final Profesional (Pantalla 6) */}
            {scene.isCta && (
              <motion.div
                initial={{ scale: 0.95 }}
                animate={{ scale: 1 }}
                transition={{ repeat: Infinity, repeatType: "reverse", duration: 1.5 }}
                className="mt-2"
              >
                <button
                  onClick={() => {
                    setHeroCompleted(true);
                    setTimeout(() => {
                      document.getElementById('auditoria-form')?.scrollIntoView({ behavior: 'smooth' });
                    }, 50);
                  }}
                  className="group relative inline-flex items-center gap-4 px-8 py-4 sm:px-10 sm:py-5 bg-cyan-400 hover:bg-cyan-300 text-black text-base sm:text-lg font-extrabold rounded-2xl shadow-2xl shadow-cyan-400/30 transition-all duration-300 hover:scale-105 active:scale-95"
                >
                  <span>Solicitar Evaluación de Eficiencia Operativa</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
                <p className="text-xs text-slate-400 mt-3 tracking-wider uppercase font-mono">
                  Sin compromiso • Análisis de viabilidad y rentabilidad real
                </p>
              </motion.div>
            )}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Botón inferior de navegación */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-40 flex flex-col items-center gap-2 pointer-events-auto">
        {!isLastScene ? (
          <button
            onClick={() => handleSceneChange('next')}
            className="flex items-center gap-2 text-xs font-mono tracking-widest text-cyan-400 uppercase bg-cyan-500/10 border border-cyan-500/20 px-4 py-2 rounded-full hover:bg-cyan-500/20 transition-all animate-bounce"
          >
            <span>Siguiente</span>
            <ChevronDown className="w-4 h-4" />
          </button>
        ) : (
          <button
            onClick={() => {
              setHeroCompleted(true);
              setTimeout(() => {
                document.getElementById('auditoria-form')?.scrollIntoView({ behavior: 'smooth' });
              }, 50);
            }}
            className="flex items-center gap-2 text-xs font-mono tracking-widest text-slate-400 uppercase hover:text-white transition-all"
          >
            <span>Continuar</span>
            <ChevronDown className="w-4 h-4" />
          </button>
        )}
      </div>
    </div>
  );
}
