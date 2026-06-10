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

      {/* Parallax background image — luxury royal bridal gown */}
      <motion.div className="absolute inset-0" style={{ y: imgY, scale }}>
        <img
          src="/dress4-imperial.png"
          alt="Glamour Haute Couture — Istanbul Bridal Atelier"
          className="w-full h-full object-cover object-top"
        />
      </motion.div>

      {/* Multi-layered cinematic overlays — no white fade */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#0a0806]/92 via-[#0a0806]/55 to-[#0a0806]/20" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#0a0806]/98 via-[#0a0806]/35 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0806]/45 to-transparent" />

      {/* Radial accent glow */}
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_15%_70%,rgba(212,176,138,0.14)_0%,transparent_60%)]" />

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
          className="font-serif text-[clamp(2.4rem,6.5vw,4.8rem)] font-light leading-[1.1] tracking-[0.04em] max-w-[820px] text-white"
          style={{ textShadow: '0 0 40px rgba(198,162,122,0.35), 0 0 80px rgba(198,162,122,0.15)' }}
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
          className="w-20 h-[1px] bg-gradient-to-r from-[#C6A27A] to-transparent my-6 origin-left"
        />

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, delay: 1.0 }}
          className="text-white/65 text-[0.82rem] leading-[1.8] max-w-[480px] font-sans font-light mb-10 shadow-sm"
          style={{ textShadow: '0 2px 10px rgba(0,0,0,0.5)' }}
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
            className="group inline-flex items-center gap-3 bg-gradient-to-br from-[#C6A27A] to-[#a37e58] text-[#100e0c] font-sans text-[0.82rem] font-bold tracking-[0.18em] uppercase py-[18px] px-10 rounded-full shadow-[0_8px_30px_rgba(198,162,122,0.3),_0_0_15px_rgba(198,162,122,0.2)] transition-all duration-400 hover:-translate-y-0.5 hover:shadow-[0_12px_36px_rgba(198,162,122,0.5),_0_0_20px_rgba(198,162,122,0.3)]"
          >
            {isRTL ? 'اكتشفي المجموعة' : 'Explore Collection'}
            <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
          </Link>

          <Link
            to="/book-appointment"
            className="group inline-flex items-center gap-2 text-white/85 border border-white/25 py-[15px] px-[34px] rounded-full font-sans text-[0.82rem] tracking-[0.18em] font-semibold uppercase backdrop-blur-[4px] transition-all duration-300 hover:text-[#C6A27A] hover:border-[#C6A27A] hover:bg-[#C6A27A]/5"
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
