import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Reveal = ({ children, delay = 0, className = '' }: { children: React.ReactNode; delay?: number; className?: string }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-60px' });
  return (
    <motion.div ref={ref} className={className}
      initial={{ opacity: 0, y: 48, filter: 'blur(6px)' }}
      animate={isInView ? { opacity: 1, y: 0, filter: 'blur(0px)' } : {}}
      transition={{ duration: 0.9, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
};

import { useTranslation } from 'react-i18next';

const StorytellingSection = () => {
  const { i18n } = useTranslation();
  const isRTL = i18n.language === 'ar';

  return (
    <section className="section-lg" style={{ background: 'var(--color-ivory)' }}>
      <div className="max-w-7xl mx-auto px-8 lg:px-24">
        <div className="grid lg:grid-cols-2 gap-20 lg:gap-32 items-center">

          {/* Left: text */}
          <div>
            <Reveal>
              <span className="section-label">{isRTL ? 'إرث الدار' : 'Our Heritage'}</span>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 'clamp(2.6rem, 5vw, 4.4rem)', fontWeight: 300, lineHeight: 1.05, letterSpacing: '0.02em', color: 'var(--color-text)', marginTop: 20 }}>
                {isRTL ? (
                  <>
                    14 عاماً من تصميم<br />
                    <em style={{ fontStyle: 'italic', color: 'var(--color-gold)' }}>اللحظات التي لا تُنسى</em>
                  </>
                ) : (
                  <>
                    14 Years of Crafting<br />
                    <em style={{ fontStyle: 'italic', color: 'var(--color-gold)' }}>Unforgettable Moments</em>
                  </>
                )}
              </h2>
            </Reveal>
            <Reveal delay={0.2}>
              <div style={{ width: 56, height: 1, background: 'var(--color-gold)', margin: '28px 0' }} />
            </Reveal>
            <Reveal delay={0.25}>
              <p style={{ color: 'var(--color-muted)', lineHeight: 2, fontSize: '1rem', maxWidth: 460 }}>
                {isRTL
                  ? 'من أول رسم بالقلم إلى آخر غرزة يدوية، نرافق كل عروس في رحلة تصميم فريدة. كل فستان قصة، وكل غرزة وعد.'
                  : 'From the first sketch to the final hand stitch, we accompany each bride on a bespoke journey. Every gown is a legacy, every stitch a sacred vow.'}
              </p>
            </Reveal>
            <Reveal delay={0.32}>
              <p style={{ color: 'var(--color-muted)', lineHeight: 2, fontSize: '1rem', maxWidth: 460, marginTop: 20 }}>
                {isRTL
                  ? 'نصنع فساتين تُروى للأجيال — تُجسّد روح العروس وتحمل ذكرى اللحظة الأثمن في حياتها.'
                  : 'We create heirlooms to be passed down through generations — capturing the essence of the bride and carrying the memory of her most precious day.'}
              </p>
            </Reveal>
            <Reveal delay={0.4}>
              <div className="flex gap-14 mt-14">
                {(isRTL 
                  ? [['200+', 'عروس'], ['14', 'عاماً'], ['∞', 'قصة']] 
                  : [['200+', 'BRIDES'], ['14', 'YEARS'], ['∞', 'STORIES']]
                ).map(([n, l]) => (
                  <div key={l}>
                    <div className="stat-number">{n}</div>
                    <p style={{ fontSize: '0.6rem', letterSpacing: '0.24em', textTransform: 'uppercase', color: 'var(--color-muted)', marginTop: 6, fontFamily: 'Manrope, sans-serif', fontWeight: 600 }}>{l}</p>
                  </div>
                ))}
              </div>
            </Reveal>
            <Reveal delay={0.48}>
              <Link to="/our-story" className="mt-12 inline-flex items-center gap-3 group" style={{ color: 'var(--color-text)', fontSize: '0.62rem', letterSpacing: '0.22em', textTransform: 'uppercase', fontFamily: 'Manrope, sans-serif', fontWeight: 600, borderBottom: '1px solid var(--color-gold)', paddingBottom: 3 }}>
                {isRTL ? 'قصتنا الكاملة' : 'Our Full Story'}
                <ArrowRight size={12} className="transition-transform group-hover:translate-x-1" />
              </Link>
            </Reveal>
          </div>

          {/* Right: Magazine layout - 70% main + overlapping accent */}
          <div className="relative h-[600px] lg:h-[700px]">
            {/* Main large image */}
            <Reveal delay={0.1} className="absolute top-0 right-0 w-[78%] h-[85%]">
              <div className="w-full h-full overflow-hidden" style={{ boxShadow: 'var(--shadow-xl)' }}>
                <img
                  src="https://images.pexels.com/photos/1024993/pexels-photo-1024993.jpeg?auto=compress&cs=tinysrgb&w=900"
                  alt="Atelier"
                  className="w-full h-full object-cover transition-transform duration-[1600ms] hover:scale-105"
                />
              </div>
            </Reveal>
            {/* Overlapping accent image */}
            <Reveal delay={0.3} className="absolute bottom-0 left-0 w-[52%] h-[52%]">
              <div className="w-full h-full overflow-hidden" style={{ boxShadow: 'var(--shadow-xl)', border: '5px solid var(--color-ivory)' }}>
                <img
                  src="https://images.pexels.com/photos/265722/pexels-photo-265722.jpeg?auto=compress&cs=tinysrgb&w=700"
                  alt="Couture Detail"
                  className="w-full h-full object-cover transition-transform duration-[1600ms] hover:scale-105"
                />
              </div>
            </Reveal>
            {/* Floating quote card */}
            <Reveal delay={0.55} className="absolute bottom-[28%] right-[-28px] z-10">
              <div className="px-6 py-5 max-w-[210px]" style={{ background: 'rgba(255,255,255,0.95)', backdropFilter: 'blur(20px)', border: '1px solid rgba(212,176,138,0.25)', boxShadow: 'var(--shadow-lg)' }}>
                <p style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '1rem', fontStyle: 'italic', color: 'var(--color-text)', lineHeight: 1.6 }}>
                  {isRTL ? '"كل غرزة تروي قصة زفاف خيالية."' : '"Every stitch tells a story of love."'}
                </p>
                <div style={{ height: 1, background: 'var(--color-gold)', opacity: 0.45, marginTop: 12 }} />
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StorytellingSection;
