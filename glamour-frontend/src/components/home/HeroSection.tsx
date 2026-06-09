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
          src="https://images.pexels.com/photos/2959192/pexels-photo-2959192.jpeg?auto=compress&cs=tinysrgb&w=1920"
          alt="Glamour Haute Couture — Istanbul Bridal Atelier"
          className="w-full h-full object-cover object-top"
        />
      </motion.div>

      {/* Multi-layered cinematic overlays */}
      <div className="absolute inset-0" style={{ background: 'linear-gradient(to right, rgba(10,8,6,0.93) 0%, rgba(10,8,6,0.52) 52%, rgba(10,8,6,0.08) 100%)' }} />
      <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(10,8,6,0.98) 0%, rgba(10,8,6,0.3) 40%, transparent 70%)' }} />
      <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom, rgba(10,8,6,0.45) 0%, transparent 28%)' }} />

      {/* Radial accent glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse at 15% 70%, rgba(212,176,138,0.08) 0%, transparent 55%)' }}
      />

      {/* Horizontal brand line top */}
      <motion.div
        className="absolute top-0 left-0 right-0 flex items-center justify-center pt-8 gap-6"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, delay: 2.2 }}
      >
        <div style={{ flex: 1, maxWidth: 120, height: 1, background: 'linear-gradient(to right, transparent, rgba(212,176,138,0.3))' }} />
        <span style={{ fontSize: '0.48rem', letterSpacing: '0.5em', textTransform: 'uppercase', color: 'rgba(212,176,138,0.5)', fontFamily: 'Manrope, sans-serif', fontWeight: 600 }}>
          {isRTL ? 'دار غلامور للأزياء الراقية' : 'Glamour Haute Couture Maison'}
        </span>
        <div style={{ flex: 1, maxWidth: 120, height: 1, background: 'linear-gradient(to left, transparent, rgba(212,176,138,0.3))' }} />
      </motion.div>

      {/* Main content */}
      <motion.div
        className="relative z-10 px-8 lg:px-24 pb-28 max-w-7xl w-full"
        style={{ opacity }}
      >
        {/* Pre-title */}
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="flex items-center gap-5 mb-10"
        >
          <div style={{ width: 60, height: 1, background: 'linear-gradient(to right, var(--color-gold), transparent)' }} />
          <span
            style={{
              fontSize: '0.52rem',
              letterSpacing: '0.42em',
              textTransform: 'uppercase',
              color: 'rgba(212,176,138,0.65)',
              fontFamily: 'Manrope, sans-serif',
              fontWeight: 600,
            }}
          >
            {isRTL ? '✦ إسطنبول — دار أزياء هوت كوتور ✦' : '✦ Istanbul — Haute Couture Fashion House ✦'}
          </span>
        </motion.div>

        {/* Hero headline */}
        <motion.h1
          initial={{ opacity: 0, y: 80, filter: 'blur(18px)' }}
          animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          transition={{ duration: 1.5, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="text-white"
          style={{
            fontFamily: 'Cormorant Garamond, serif',
            fontSize: 'clamp(3.4rem, 10vw, 9rem)',
            fontWeight: 300,
            lineHeight: 0.92,
            letterSpacing: '0.05em',
            maxWidth: 820,
          }}
        >
          {isRTL ? (
            <>
              حيث تتحوّل<br />
              <span style={{ fontStyle: 'normal', fontWeight: 300, color: 'var(--color-gold)' }}>الأحلام</span>
              <br />إلى تحف فنية.
            </>
          ) : (
            <>
              Where<br />
              <span style={{ fontStyle: 'normal', fontWeight: 300, color: 'var(--color-gold)' }}>Dreams</span>
              <br />Take Shape.
            </>
          )}
        </motion.h1>

        {/* Divider ornament */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{ duration: 1.2, delay: 1.1, ease: [0.22, 1, 0.36, 1] }}
          style={{ width: 80, height: 1, background: 'linear-gradient(to right, var(--color-gold), transparent)', margin: '40px 0 32px', transformOrigin: 'left' }}
        />

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, delay: 1.0 }}
          style={{
            color: 'rgba(255,255,255,0.42)',
            fontSize: '0.88rem',
            lineHeight: 1.9,
            maxWidth: 380,
            fontFamily: 'Manrope, sans-serif',
            fontWeight: 300,
            marginBottom: 48,
          }}
        >
          {isRTL
            ? 'فساتين زفاف وهوت كوتور بتفاصيل صُنعت لتبقى وتخلد أجمل ذكرياتكِ إلى الأبد.'
            : 'Haute couture bridal gowns crafted to immortalise the most precious moments of your life.'}
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 1.3, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col sm:flex-row items-start gap-5"
        >
          <Link
            to="/collections"
            className="group inline-flex items-center gap-3"
            style={{
              background: 'linear-gradient(135deg, var(--color-gold) 0%, var(--color-gold-deep) 100%)',
              color: '#100e0c',
              fontFamily: 'Manrope, sans-serif',
              fontSize: '0.58rem',
              fontWeight: 700,
              letterSpacing: '0.28em',
              textTransform: 'uppercase',
              padding: '17px 38px',
              borderRadius: 999,
              boxShadow: '0 10px 40px rgba(212,176,138,0.35)',
              transition: 'all 0.45s cubic-bezier(0.22, 1, 0.36, 1)',
            }}
            onMouseEnter={e => {
              (e.currentTarget as HTMLElement).style.transform = 'translateY(-3px)';
              (e.currentTarget as HTMLElement).style.boxShadow = '0 16px 52px rgba(212,176,138,0.5)';
            }}
            onMouseLeave={e => {
              (e.currentTarget as HTMLElement).style.transform = '';
              (e.currentTarget as HTMLElement).style.boxShadow = '0 10px 40px rgba(212,176,138,0.35)';
            }}
          >
            {isRTL ? 'استكشفي المجموعة' : 'Explore Collection'}
            <ArrowRight size={13} className="transition-transform group-hover:translate-x-1" />
          </Link>

          <Link
            to="/book-appointment"
            style={{
              color: 'rgba(255,255,255,0.6)',
              borderBottom: '1px solid rgba(255,255,255,0.2)',
              paddingBottom: 3,
              fontFamily: 'Manrope, sans-serif',
              fontSize: '0.58rem',
              letterSpacing: '0.26em',
              fontWeight: 600,
              textTransform: 'uppercase',
              transition: 'all 0.3s ease',
              display: 'inline-flex',
              alignItems: 'center',
              gap: 10,
              marginTop: 6,
            }}
            onMouseEnter={e => {
              (e.currentTarget as HTMLElement).style.color = 'rgba(212,176,138,0.9)';
              (e.currentTarget as HTMLElement).style.borderColor = 'rgba(212,176,138,0.6)';
            }}
            onMouseLeave={e => {
              (e.currentTarget as HTMLElement).style.color = 'rgba(255,255,255,0.6)';
              (e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,255,255,0.2)';
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

      {/* Floating editorial badge */}
      <motion.div
        className="absolute bottom-16 right-12 lg:right-24 hidden lg:flex flex-col items-end gap-2"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.8, duration: 1 }}
      >
        <div
          className="px-5 py-3"
          style={{
            background: 'rgba(255,255,255,0.04)',
            border: '1px solid rgba(212,176,138,0.18)',
            backdropFilter: 'blur(12px)',
            WebkitBackdropFilter: 'blur(12px)',
            borderRadius: 2,
          }}
        >
          <p style={{ fontSize: '0.52rem', letterSpacing: '0.3em', textTransform: 'uppercase', color: 'var(--color-gold)', fontFamily: 'Manrope, sans-serif', fontWeight: 700, marginBottom: 4 }}>
            {isRTL ? 'نقبل عدداً محدوداً' : 'Limited Availability'}
          </p>
          <p style={{ fontSize: '0.72rem', color: 'rgba(255,255,255,0.5)', fontFamily: 'Manrope, sans-serif', fontWeight: 300 }}>
            {isRTL ? 'موسم 2025 · مواعيد محدودة' : 'Season 2025 · Select Appointments'}
          </p>
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
