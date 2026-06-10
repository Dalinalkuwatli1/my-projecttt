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
    <section ref={ref} className="relative h-screen flex items-end overflow-hidden">

      {/* Parallax background image */}
      <motion.div className="absolute inset-0" style={{ y: imgY, scale }}>
        <img
          src="https://images.pexels.com/photos/2253870/pexels-photo-2253870.jpeg?auto=compress&cs=tinysrgb&w=1920"
          alt="Glamour Haute Couture — Istanbul Bridal Atelier"
          className="w-full h-full object-cover object-center"
        />
      </motion.div>

      {/* Multi-layered cinematic overlays */}
      <div className="absolute inset-0" style={{ background: 'linear-gradient(to right, rgba(10,8,6,0.95) 0%, rgba(10,8,6,0.6) 50%, rgba(10,8,6,0.2) 100%)' }} />
      <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(10,8,6,1) 0%, rgba(10,8,6,0.4) 40%, transparent 75%)' }} />
      <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom, rgba(10,8,6,0.5) 0%, transparent 30%)' }} />

      {/* Radial accent glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse at 15% 70%, rgba(212,176,138,0.12) 0%, transparent 60%)' }}
      />



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
          className="text-white"
          style={{
            fontFamily: 'Cormorant Garamond, serif',
            fontSize: 'clamp(2.4rem, 6.5vw, 4.8rem)',
            fontWeight: 300,
            lineHeight: 1.1,
            letterSpacing: '0.04em',
            maxWidth: 820,
            textShadow: '0 0 40px rgba(198,162,122,0.35), 0 0 80px rgba(198,162,122,0.15)',
          }}
        >
          {isRTL ? (
            <span className="shimmer-luxury-text">
              حيث تتحوّل الأحلام إلى تحف فنية
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
          style={{ width: 80, height: 1, background: 'linear-gradient(to right, var(--color-gold), transparent)', margin: '30px 0 24px', transformOrigin: 'left' }}
        />

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, delay: 1.0 }}
          style={{
            color: 'rgba(255,255,255,0.65)',
            fontSize: '0.82rem',
            lineHeight: 1.8,
            maxWidth: 480,
            fontFamily: 'Manrope, sans-serif',
            fontWeight: 300,
            textShadow: '0 2px 10px rgba(0,0,0,0.5)',
            marginBottom: 40,
          }}
        >
          {isRTL
            ? 'نصمم فساتين زفاف استثنائية تُفصّل خصيصًا لكِ، وتمزج بين الحرفية الراقية والتفاصيل الخالدة لتصنع إطلالة لا تُنسى بتفاصيل صُنعت لتبقى وتخلد أجمل ذكرياتكِ إلى الأبد.'
            : 'We design exceptional bespoke bridal gowns tailored specifically for you, blending exquisite craftsmanship and timeless details to create an unforgettable look.'}
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 1.3, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-wrap items-center gap-6"
        >
          <Link
            to="/collections"
            className="group inline-flex items-center gap-3"
            style={{
              background: 'linear-gradient(135deg, var(--color-gold) 0%, var(--color-gold-deep) 100%)',
              color: '#100e0c',
              fontFamily: 'Manrope, sans-serif',
              fontSize: '0.82rem',
              fontWeight: 700,
              letterSpacing: '0.18em',
              textTransform: 'uppercase',
              padding: '18px 40px',
              borderRadius: 999,
              boxShadow: '0 8px 30px rgba(198,162,122,0.3), 0 0 15px rgba(198,162,122,0.2)',
              transition: 'all 0.4s ease',
            }}
            onMouseEnter={e => {
              (e.currentTarget as HTMLElement).style.transform = 'translateY(-2px)';
              (e.currentTarget as HTMLElement).style.boxShadow = '0 12px 36px rgba(198,162,122,0.5), 0 0 20px rgba(198,162,122,0.3)';
            }}
            onMouseLeave={e => {
              (e.currentTarget as HTMLElement).style.transform = '';
              (e.currentTarget as HTMLElement).style.boxShadow = '0 8px 30px rgba(198,162,122,0.3), 0 0 15px rgba(198,162,122,0.2)';
            }}
          >
            {isRTL ? 'اكتشفي المجموعة' : 'Explore Collection'}
            <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
          </Link>

          <Link
            to="/book-appointment"
            className="group inline-flex items-center gap-2"
            style={{
              color: 'rgba(255,255,255,0.85)',
              border: '1px solid rgba(255,255,255,0.25)',
              padding: '15px 34px',
              borderRadius: 999,
              fontFamily: 'Manrope, sans-serif',
              fontSize: '0.82rem',
              letterSpacing: '0.18em',
              fontWeight: 600,
              textTransform: 'uppercase',
              transition: 'all 0.3s ease',
              backdropFilter: 'blur(4px)',
            }}
            onMouseEnter={e => {
              (e.currentTarget as HTMLElement).style.color = 'var(--color-gold)';
              (e.currentTarget as HTMLElement).style.borderColor = 'var(--color-gold)';
              (e.currentTarget as HTMLElement).style.background = 'rgba(198,162,122,0.05)';
            }}
            onMouseLeave={e => {
              (e.currentTarget as HTMLElement).style.color = 'rgba(255,255,255,0.85)';
              (e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,255,255,0.25)';
              (e.currentTarget as HTMLElement).style.background = 'transparent';
            }}
          >
            {isRTL ? 'احجزي موعدكِ الخاص' : 'Book Private Fitting'}
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
        <span style={{ fontSize: '0.48rem', letterSpacing: '0.48em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.25)', fontFamily: 'Manrope, sans-serif' }}>
          SCROLL
        </span>
        <motion.div
          style={{
            width: 1,
            height: 56,
            background: 'linear-gradient(to bottom, var(--color-gold), transparent)',
          }}
          animate={{ scaleY: [0, 1], opacity: [0, 1, 0] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
        />
      </motion.div>
    </section>
  );
};

export default HeroSection;
