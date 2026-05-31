import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-fade';

const Reveal = ({ children, delay = 0, className = '' }: { children: React.ReactNode; delay?: number; className?: string }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-60px' });
  return (
    <motion.div ref={ref} className={className}
      initial={{ opacity: 0, y: 30, filter: 'blur(5px)' }}
      animate={isInView ? { opacity: 1, y: 0, filter: 'blur(0px)' } : {}}
      transition={{ duration: 0.9, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
};

const reviews = [
  {
    name: 'Sarah M.',
    quote: 'تجاوز الفستان كل توقعاتي. شعرت وكأنني أميرة في ليلة زفافي.',
    quoteEn: 'The dress exceeded all my expectations. I felt like a princess.',
  },
  {
    name: 'Reem A.',
    quote: 'أشعر أنني أرتدي قطعة فنية. كل غرزة تم تنفيذها بحب وإتقان مذهل.',
    quoteEn: 'I feel like I\'m wearing a masterpiece. The craftsmanship is flawless.',
  },
  {
    name: 'Lana K.',
    quote: 'التجربة بأكملها كانت ساحرة، من أول رسمة حتى البروفة الأخيرة.',
    quoteEn: 'The entire experience was magical, from the first sketch to the final fitting.',
  },
];

const TestimonialsSlider = () => {
  return (
    <section className="section-lg overflow-hidden" style={{ background: 'var(--color-bg)' }}>
      <div className="max-w-4xl mx-auto px-8 text-center relative">
        <Reveal>
          <span className="section-label mb-8">Brides of Glamour</span>
        </Reveal>
        
        <div className="relative">
          <span style={{ position: 'absolute', top: -30, left: '50%', transform: 'translateX(-50%)', fontSize: '6rem', fontFamily: 'Cormorant Garamond, serif', color: 'rgba(212,176,138,0.15)', lineHeight: 1, zIndex: 0 }}>
            "
          </span>
          <Swiper
            modules={[Autoplay, EffectFade]}
            effect="fade"
            speed={1200}
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            loop={true}
            className="w-full relative z-10"
          >
            {reviews.map((r, i) => (
              <SwiperSlide key={i} className="pb-8">
                <Reveal delay={0.2}>
                  <p style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 'clamp(1.6rem, 3.5vw, 2.4rem)', fontStyle: 'italic', color: 'var(--color-text)', lineHeight: 1.6, marginBottom: 20 }}>
                    {r.quote}
                  </p>
                  <p style={{ fontSize: '0.85rem', color: 'var(--color-muted)', fontFamily: 'Manrope, sans-serif', fontWeight: 300, marginBottom: 40, maxWidth: '600px', marginInline: 'auto' }}>
                    "{r.quoteEn}"
                  </p>
                  <div className="flex items-center justify-center gap-4">
                    <div style={{ width: 30, height: 1, background: 'var(--color-gold)' }} />
                    <span style={{ fontSize: '0.68rem', letterSpacing: '0.24em', textTransform: 'uppercase', fontWeight: 600, color: 'var(--color-text)' }}>
                      {r.name}
                    </span>
                    <div style={{ width: 30, height: 1, background: 'var(--color-gold)' }} />
                  </div>
                </Reveal>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSlider;
