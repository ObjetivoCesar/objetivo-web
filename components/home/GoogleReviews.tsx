'use client';

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Star, MessageSquare, ExternalLink, ArrowRight } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

// Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

interface Review {
  author_name: string;
  rating: number;
  relative_time_description: string;
  text: string;
  profile_photo_url: string;
}

interface GoogleData {
  rating: number;
  totalReviews: number;
  reviews: Review[];
}

export default function GoogleReviews() {
  const [data, setData] = useState<GoogleData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchReviews() {
      try {
        const res = await fetch('/api/google-reviews');
        if (res.ok) {
          const json = await res.json();
          setData(json);
        }
      } catch (err) {
        console.error('Error fetching reviews:', err);
      } finally {
        setLoading(false);
      }
    }
    fetchReviews();
  }, []);

  if (loading) return null;
  
  // Si hay un error o no hay datos, simplemente no renderizamos la sección
  if (!data || (data as any).error || !data.reviews || data.reviews.length === 0) {
    return null;
  }

  const googleReviewUrl = "https://search.google.com/local/reviews?placeid=ChIJr8s4l045y5ERFbMRzasikaM";

  // Framer Motion Variants for Stars
  const starVariants = {
    initial: { scale: 0, rotate: -45, opacity: 0 },
    animate: (i: number) => ({
      scale: [0, 1.3, 1],
      rotate: 0,
      opacity: 1,
      transition: { 
        delay: 0.1 * i, 
        duration: 0.5, 
        ease: "easeOut" as const 
      }
    })
  };

  return (
    <section className="py-20 bg-[#121212] relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-cyan-500/5 blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row items-center justify-between mb-16 gap-8">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-left"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 flex items-center gap-3">
              Lo que dicen nuestros clientes
              <span className="text-cyan-400"><MessageSquare size={28} /></span>
            </h2>
            <div className="flex items-center gap-6">
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <motion.div
                    key={i}
                    custom={i}
                    variants={starVariants}
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: true }}
                  >
                    <Star 
                      size={24} 
                      fill={i < Math.floor(data.rating) ? '#FFB800' : 'none'} 
                      className={i < Math.floor(data.rating) ? 'text-[#FFB800]' : 'text-gray-700'}
                    />
                  </motion.div>
                ))}
              </div>
              <p className="text-gray-400 font-medium text-lg">
                <span className="text-white font-bold text-2xl">{data.rating}</span>/5 basado en <span className="text-white font-bold">{data.totalReviews}</span> reseñas reales
              </p>
            </div>
          </motion.div>

          <motion.a
            href="https://search.google.com/local/writereview?placeid=ChIJr8s4l045y5ERFbMRzasikaM"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-white/5 hover:bg-white/10 border border-white/10 rounded-full text-white font-bold flex items-center gap-2 transition-all backdrop-blur-md shadow-lg"
          >
            Dejar una reseña <ExternalLink size={18} />
          </motion.a>
        </div>

        {/* Reviews Carousel */}
        <div className="reviews-carousel">
          <Swiper
            modules={[Autoplay, Pagination, Navigation]}
            spaceBetween={30}
            slidesPerView={1}
            loop={true}
            autoplay={{
              delay: 4000,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
              bulletActiveClass: 'bg-cyan-500 !opacity-100',
              bulletClass: 'swiper-pagination-bullet !bg-white/20 !opacity-50'
            }}
            breakpoints={{
              640: { slidesPerView: 1.5 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            className="pb-16"
          >
            {data.reviews.map((review, index) => (
              <SwiperSlide key={index} className="h-auto">
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white/5 border border-white/10 p-8 rounded-[2.5rem] backdrop-blur-md hover:border-cyan-500/40 transition-all group h-[280px] flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center gap-4 mb-6">
                      <div className="relative">
                        <img 
                          src={review.profile_photo_url} 
                          alt={review.author_name}
                          className="w-14 h-14 rounded-full border-2 border-white/10 shadow-xl"
                        />
                        <div className="absolute -bottom-1 -right-1 bg-white rounded-full p-1 shadow-md">
                          <img src="https://www.google.com/images/branding/product/ico/maps15_24dp.png" className="w-3 h-3" alt="Google" />
                        </div>
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4 className="font-bold text-white text-lg truncate group-hover:text-cyan-400 transition-colors">
                          {review.author_name}
                        </h4>
                        <p className="text-xs text-gray-500 font-medium">{review.relative_time_description}</p>
                      </div>
                      <div className="text-[#FFB800] flex gap-0.5">
                        <Star size={16} fill="currentColor" />
                      </div>
                    </div>
                    
                    <p className="text-gray-300 leading-relaxed italic mb-4 line-clamp-2 text-sm md:text-base">
                      "{review.text}"
                    </p>
                  </div>

                  <div className="flex items-center justify-between mt-auto">
                    <div className="flex items-center gap-1 text-[#FFB800]/60">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} size={12} fill={i < review.rating ? 'currentColor' : 'none'} />
                      ))}
                    </div>
                    <a 
                      href={googleReviewUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-cyan-400 hover:text-white text-sm font-bold flex items-center gap-1 transition-all hover:translate-x-1"
                    >
                      Ver más <ArrowRight size={14} />
                    </a>
                  </div>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

      <style jsx global>{`
        .reviews-carousel .swiper-pagination-bullet {
          width: 8px;
          height: 8px;
          margin: 0 6px !important;
          transition: all 0.3s ease;
        }
        .reviews-carousel .swiper-pagination-bullet-active {
          width: 24px;
          border-radius: 4px;
        }
      `}</style>
    </section>
  );
}
