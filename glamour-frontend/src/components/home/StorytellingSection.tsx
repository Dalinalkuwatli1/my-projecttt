import { useRef, useState, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

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

function AnimatedCounter({ value, duration = 2000 }: { value: string; duration?: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-20px' });
  const [displayValue, setDisplayValue] = useState('0');

  useEffect(() => {
    if (!isInView) return;
    if (value === '∞') {
      let step = 0;
      const interval = setInterval(() => {
        step += 1;
        if (step > 15) {
          clearInterval(interval);
          setDisplayValue('∞');
        } else {
          setDisplayValue(String(Math.floor(Math.random() * 999)));
        }
      }, 70);
      return () => clearInterval(interval);
    }

    const numericValue = parseInt(value.replace(/[^0-9]/g, ''), 10) || 0;
    const suffix = value.replace(/[0-9]/g, '');
    let start = 0;
    const end = numericValue;
    if (start === end) {
      setDisplayValue(value);
      return;
    }

    const totalSteps = 40;
    const stepTime = Math.max(Math.floor(duration / totalSteps), 20);
    const stepValue = Math.ceil(end / totalSteps);

    const timer = setInterval(() => {
      start += stepValue;
      if (start >= end) {
        clearInterval(timer);
        setDisplayValue(`${end}${suffix}`);
      } else {
        setDisplayValue(`${start}${suffix}`);
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, [value, isInView, duration]);

  return <span ref={ref} className="font-serif">{displayValue}</span>;
}

const StorytellingSection = () => {
  const { i18n } = useTranslation();
  const isRTL = i18n.language === 'ar';

  return (
    <section className="section-lg bg-[#FAF7F2] relative overflow-hidden py-24 border-y border-[#e8dbd1]/60">
      {/* Background soft gold circles */}
      <div className="absolute top-1/2 -left-32 w-96 h-96 rounded-full bg-[#C6A27A]/5 blur-[80px]" />
      
      <div className="max-w-7xl mx-auto px-8 lg:px-24 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-28 items-center">

          {/* Left: text */}
          <div>
            <Reveal delay={0.1}>
              <h2 
                className="text-[#2b1b12] text-3xl md:text-5xl font-normal leading-[1.15]"
                style={{ fontFamily: 'Cormorant Garamond, serif' }}
              >
                {isRTL ? (
                  <>
                    14 عاماً من تصميم{' '}
                    <span className="font-medium text-[#C6A27A] block mt-1" style={{ fontStyle: 'normal' }}>
                      اللحظات التي لا تُنسى
                    </span>
                  </>
                ) : (
                  <>
                    14 Years of Designing{' '}
                    <span className="font-medium text-[#C6A27A] block mt-1" style={{ fontStyle: 'normal' }}>
                      Unforgettable Moments
                    </span>
                  </>
                )}
              </h2>
            </Reveal>

            <Reveal delay={0.2}>
              <div style={{ width: 60, height: 1, background: '#C6A27A', margin: '24px 0' }} />
            </Reveal>

            <Reveal delay={0.25}>
              <p className="text-[#8a7b71] leading-relaxed text-sm max-w-lg mb-6">
                {isRTL
                  ? 'من أول رسم بالقلم إلى آخر غرزة يدوية، نرافق كل عروس في رحلة تصميم فريدة. كل فستان قصة، وكل غرزة وعد.'
                  : 'From the first sketch to the final hand stitch, we accompany each bride on a bespoke journey. Every gown is a legacy, every stitch a sacred vow.'}
              </p>
            </Reveal>

            <Reveal delay={0.32}>
              <p className="text-[#8a7b71] leading-relaxed text-sm max-w-lg mb-10">
                {isRTL
                  ? 'نصنع فساتين تُروى للأجيال — تُجسّد روح العروس وتحمل ذكرى اللحظة الأثمن في حياتها.'
                  : 'We create heirlooms to be passed down through generations — capturing the essence of the bride and carrying the memory of her most precious day.'}
              </p>
            </Reveal>

            <Reveal delay={0.4}>
              <div className="grid grid-cols-3 gap-6 max-w-md border-t border-[#e8dbd1] pt-8">
                {([
                  { key: '200+', ar: 'عروس', en: 'BRIDES' },
                  { key: '14', ar: 'عاماً', en: 'YEARS' },
                  { key: '∞', ar: 'قصة', en: 'STORIES' }
                ]).map((stat) => (
                  <div key={stat.key} className="space-y-1">
                    <div className="text-3xl md:text-4xl font-light text-[#2b1b12]">
                      <AnimatedCounter value={stat.key} />
                    </div>
                    <p className="text-[0.58rem] tracking-[0.2em] uppercase text-[#C6A27A] font-bold">
                      {isRTL ? stat.ar : stat.en}
                    </p>
                  </div>
                ))}
              </div>
            </Reveal>

            <Reveal delay={0.48}>
              <Link 
                to="/our-story" 
                className="mt-10 inline-flex items-center gap-2 text-[0.7rem] font-black uppercase tracking-wider text-[#2b1b12] hover:text-[#C6A27A] transition-colors border-b-[2px] border-[#C6A27A] pb-1"
              >
                {isRTL ? 'قصتنا الكاملة' : 'Our Full Story'}
                <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
              </Link>
            </Reveal>
          </div>

          {/* Right: Premium editorial template collage layout */}
          <div className="relative h-[560px] lg:h-[650px] flex items-center justify-center">
            
            {/* Elegant luxury frame back */}
            <div className="absolute inset-4 border border-[#C6A27A]/20 pointer-events-none rounded-[24px] z-0" />

            {/* Main large image */}
            <Reveal delay={0.1} className="absolute top-[5%] right-[5%] w-[68%] h-[75%] z-10">
              <div className="w-full h-full overflow-hidden rounded-[20px] shadow-lg border border-[#e8dbd1]">
                <img
                  src="https://images.pexels.com/photos/1616113/pexels-photo-1616113.jpeg?auto=compress&cs=tinysrgb&w=900"
                  alt="Happy Couple Wedding"
                  className="w-full h-full object-cover transition-transform duration-[2000ms] hover:scale-105"
                />
              </div>
            </Reveal>

            {/* Overlapping accent image */}
            <Reveal delay={0.3} className="absolute bottom-[5%] left-[5%] w-[48%] h-[48%] z-20">
              <div className="w-full h-full overflow-hidden rounded-[20px] shadow-xl border-[6px] border-[#FAF7F2]">
                <img
                  src="https://images.pexels.com/photos/2959192/pexels-photo-2959192.jpeg?auto=compress&cs=tinysrgb&w=700"
                  alt="Wedding Couple Portrait"
                  className="w-full h-full object-cover transition-transform duration-[2000ms] hover:scale-105"
                />
              </div>
            </Reveal>

            {/* Floating quote card */}
            <Reveal delay={0.55} className="absolute bottom-[20%] right-[-10px] z-30">
              <div className="px-5 py-4 max-w-[190px] bg-white/90 backdrop-blur-md rounded-[16px] border border-[#C6A27A]/30 shadow-md">
                <p 
                  className="text-xs font-normal text-[#2b1b12] leading-relaxed" 
                  style={{ fontFamily: 'Cormorant Garamond, serif' }}
                >
                  {isRTL ? '« كل غرزة تحكي فصلاً من حلم زفاف خيالي فريد. »' : '“Every stitch narrates a chapter of a unique dream.”'}
                </p>
                <div className="h-[1px] bg-[#C6A27A] opacity-40 mt-3" />
              </div>
            </Reveal>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default StorytellingSection;
