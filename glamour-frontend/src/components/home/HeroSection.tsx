import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const HeroSection = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });
  const imgY    = useTransform(scrollYProgress, [0, 1], ['0%', '22%']);
  const opacity = useTransform(scrollYProgress, [0, 0.65], [1, 0]);
  const scale   = useTransform(scrollYProgress, [0, 1], [1, 1.08]);
  const { i18n } = useTranslation();
  const isRTL = i18n.language === 'ar';

  return (
    <section ref={ref} className="relative flex items-end overflow-hidden h-[90vh] min-h-[750px]">

      {/* Parallax background image — luxury couple */}
      <motion.div className="absolute inset-0" style={{ y: imgY, scale }}>
        <img
          src="/images/2.jpg"
          alt="Glamour Haute Couture — Bespoke Couple"
          className="w-full h-full object-cover object-center"
        />
      </motion.div>

      {/* Multi-layered cinematic overlays */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#0a0806]/95 via-[#0a0806]/60 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#0a0806]/98 via-[#0a0806]/40 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0806]/60 to-transparent" />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,0,0,0.55),transparent)]" />

      {/* Radial accent glow */}
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_15%_70%,rgba(212,176,138,0.18)_0%,transparent_65%)]" />

      {/* Main content */}
      <motion.div
        className="relative z-10 px-8 lg:px-24 pb-28 max-w-7xl w-full"
        style={{ opacity }}
      >

        {/* Hero headline */}
        <motion.h1
          initial={{ opacity: 0, y: 80, filter: 'blur(18px)' }}
          animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          transition={{ duration: 1.5, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="text-[clamp(2.4rem,6vw,4.12rem)] font-bold leading-[1.1] max-w-[900px] text-white"
          style={{
            textShadow: '0 0 40px rgba(198,162,122,0.35), 0 0 80px rgba(198,162,122,0.15)',
            fontFamily: isRTL ? "'Noto Naskh Arabic', 'Cairo', serif" : "'Cormorant Garamond', serif",
            letterSpacing: isRTL ? '0' : '0.02em',
            fontFeatureSettings: '"liga" 1, "calt" 1',
            WebkitFontSmoothing: 'antialiased',
          }}
        >
          {isRTL ? (
            <span className="shimmer-luxury-text" style={{ display: 'block', lineHeight: 1.35 }}>
              حيث تتحوّل الأحلام إلى حقيقة
            </span>
          ) : (
            <span className="shimmer-luxury-text">
              Where Dreams Become Masterpieces
            </span>
          )}
        </motion.h1>

        {/* Divider ornament */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{ duration: 1.2, delay: 1.1, ease: [0.22, 1, 0.36, 1] }}
          className="w-20 h-[1px] bg-gradient-to-r from-[#C6A27A] to-transparent my-6 origin-left"
        />

        {/* Subtitle */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, delay: 1.0 }}
          className="mb-12 mt-6"
        >
          <p
            className="text-white font-medium leading-[1.9] max-w-xl font-sans drop-shadow-2xl px-5 py-4 rounded-2xl"
            style={{ 
              fontSize: 'clamp(0.75rem, 1.5vw, 0.88rem)',
              background: 'linear-gradient(90deg, rgba(0,0,0,0.65), rgba(0,0,0,0.15), transparent)',
              backdropFilter: 'blur(12px)',
              WebkitBackdropFilter: 'blur(12px)',
              textShadow: '0 2px 16px rgba(0,0,0,0.9)',
              borderLeft: isRTL ? 'none' : '3px solid #C6A27A',
              borderRight: isRTL ? '3px solid #C6A27A' : 'none'
            }}
          >
            {isRTL
              ? 'نصمم فساتين زفاف استثنائية تُفصّل خصيصًا لكِ، تمزج بين الحرفية الراقية والتفاصيل الخالدة لتصنع إطلالة لا تُنسى.'
              : 'We design exceptional bespoke bridal gowns tailored specifically for you, blending exquisite craftsmanship and timeless details.'}
          </p>
        </motion.div>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 1.3, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-wrap items-center gap-6"
        >
          <Link
            to="/collections"
            className="group inline-flex items-center justify-center gap-3 bg-gradient-to-br from-[#C6A27A] to-[#a37e58] text-[#100e0c] font-sans font-bold tracking-[0.18em] uppercase px-8 rounded-full transition-all duration-400"
            style={{ height: '45px', fontSize: '0.68rem', boxShadow: '0 10px 30px rgba(198,162,122,0.25)' }}
            onMouseEnter={e => {
              (e.currentTarget as HTMLElement).style.transform = 'translateY(-4px)';
              (e.currentTarget as HTMLElement).style.boxShadow = '0 15px 40px rgba(198,162,122,0.4)';
            }}
            onMouseLeave={e => {
              (e.currentTarget as HTMLElement).style.transform = 'translateY(0)';
              (e.currentTarget as HTMLElement).style.boxShadow = '0 10px 30px rgba(198,162,122,0.25)';
            }}
          >
            {isRTL ? 'اكتشفي المجموعة' : 'Explore Collection'}
            <ArrowRight size={13} className="transition-transform group-hover:translate-x-1.5" />
          </Link>
          <Link
            to="/book-appointment"
            className="group inline-flex items-center justify-center gap-3 text-white font-sans font-bold tracking-[0.18em] uppercase px-7 rounded-full transition-all duration-400"
            style={{ height: '45px', fontSize: '0.68rem', border: '1px solid rgba(255,255,255,0.3)', backdropFilter: 'blur(8px)', WebkitBackdropFilter: 'blur(8px)' }}
            onMouseEnter={e => {
              (e.currentTarget as HTMLElement).style.background = 'rgba(255,255,255,0.1)';
              (e.currentTarget as HTMLElement).style.transform = 'translateY(-4px)';
              (e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,255,255,0.5)';
            }}
            onMouseLeave={e => {
              (e.currentTarget as HTMLElement).style.background = 'transparent';
              (e.currentTarget as HTMLElement).style.transform = 'translateY(0)';
              (e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,255,255,0.3)';
            }}
          >
            {isRTL ? 'حجز موعد' : 'Book Fitting'}
          </Link>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.0, duration: 1.2 }}
      >
        <span className="text-[0.48rem] tracking-[0.48em] uppercase text-white/25 font-sans">
          SCROLL
        </span>
        <motion.div
          className="w-[1px] h-14 bg-gradient-to-b from-[#C6A27A] to-transparent"
          animate={{ scaleY: [0, 1], opacity: [0, 1, 0] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
        />
      </motion.div>
    </section>
  );
};

export default HeroSection;
