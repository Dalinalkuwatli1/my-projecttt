import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });
  const imgY = useTransform(scrollYProgress, [0, 1], ['0%', '18%']);
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  return (
    <section ref={ref} className="relative h-screen flex items-end overflow-hidden">
      {/* Editorial bg - close-up gown detail */}
      <motion.div className="absolute inset-0 scale-110" style={{ y: imgY }}>
        <img
          src="https://images.pexels.com/photos/2959192/pexels-photo-2959192.jpeg?auto=compress&cs=tinysrgb&w=1920"
          alt="Haute Couture Gown Detail"
          className="w-full h-full object-cover object-top"
        />
      </motion.div>

      {/* Layered cinematic overlays */}
      <div className="absolute inset-0" style={{ background: 'linear-gradient(to right, rgba(28,26,24,0.88) 0%, rgba(28,26,24,0.4) 55%, rgba(28,26,24,0.1) 100%)' }} />
      <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(28,26,24,0.95) 0%, transparent 45%)' }} />
      <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom, rgba(28,26,24,0.4) 0%, transparent 25%)' }} />

      {/* Content */}
      <motion.div className="relative z-10 px-8 lg:px-24 pb-24 max-w-7xl w-full" style={{ opacity }}>
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="flex items-center gap-5 mb-8"
        >
          <div style={{ width: 56, height: 1, background: 'var(--color-gold)' }} />
          <span className="hero-subtitle text-white/50" style={{ letterSpacing: '0.38em' }}>
            HAUTE COUTURE · ISTANBUL · EST. 2010
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 70, filter: 'blur(14px)' }}
          animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          transition={{ duration: 1.3, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="text-white mb-8"
          style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 'clamp(3.2rem, 9vw, 8rem)', fontWeight: 300, lineHeight: 0.95, letterSpacing: '0.06em', maxWidth: 900 }}
        >
          حيث تتحوّل<br />
          <em style={{ fontStyle: 'italic', fontWeight: 300, color: 'var(--color-gold)' }}>الأحلام</em>
          <br />إلى تحف فنية.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.0 }}
          style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.88rem', lineHeight: 1.85, maxWidth: 400, fontFamily: 'Manrope, sans-serif', fontWeight: 300 }}
          className="mb-12"
        >
          Haute Couture Crafted For Timeless Brides
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="flex flex-col sm:flex-row items-start gap-5"
        >
          <Link to="/collections" className="btn-primary flex items-center gap-3 text-[0.6rem] tracking-[0.24em] group">
            استكشفي المجموعة
            <ArrowRight size={13} className="transition-transform group-hover:translate-x-1" />
          </Link>
          <Link
            to="/book-appointment"
            style={{ color: 'rgba(255,255,255,0.65)', borderBottom: '1px solid rgba(255,255,255,0.25)', paddingBottom: 2, fontFamily: 'Manrope, sans-serif', fontSize: '0.6rem', letterSpacing: '0.24em' }}
            className="uppercase font-semibold flex items-center gap-3 hover:text-white transition-colors"
          >
            احجزي موعدك الخاص
          </Link>
        </motion.div>
      </motion.div>

      {/* Scroll line */}
      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.8, duration: 1 }}
      >
        <span className="hero-subtitle text-white/30" style={{ fontSize: '0.5rem', letterSpacing: '0.45em' }}>SCROLL</span>
        <motion.div
          style={{ width: 1, height: 52, background: 'linear-gradient(to bottom, var(--color-gold), transparent)' }}
          animate={{ scaleY: [0, 1], opacity: [0, 1, 0] }}
          transition={{ duration: 2.2, repeat: Infinity, ease: 'easeInOut' }}
        />
      </motion.div>
    </section>
  );
};

export default HeroSection;
