import { useRef } from 'react';
import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, MapPin, Clock, Users, Award } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const Reveal = ({
  children,
  delay = 0,
  className = '',
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });
  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, y: 44, filter: 'blur(6px)' }}
      animate={isInView ? { opacity: 1, y: 0, filter: 'blur(0px)' } : {}}
      transition={{ duration: 0.95, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
};

const pillars = [
  {
    icon: MapPin,
    titleEn: 'Istanbul Atelier',
    titleAr: 'أتيليه إسطنبول',
    descEn: 'Nestled in the heart of Nişantaşı — the fashion capital of Turkey.',
    descAr: 'في قلب نيشانتاشي — عاصمة الموضة في تركيا.',
  },
  {
    icon: Clock,
    titleEn: 'By Appointment Only',
    titleAr: 'بموعد حصري فقط',
    descEn: 'Private, unhurried sessions. Every bride receives our complete devotion.',
    descAr: 'جلسات خاصة بلا عجلة. كل عروس تحظى بعنايتنا الكاملة.',
  },
  {
    icon: Users,
    titleEn: 'Personal Design Team',
    titleAr: 'فريق تصميم شخصي',
    descEn: 'A dedicated designer and seamstress assigned to you from day one.',
    descAr: 'مصممة وخياطة مخصصتان لكِ من اليوم الأول.',
  },
  {
    icon: Award,
    titleEn: '14 Years of Excellence',
    titleAr: '14 عاماً من التميز',
    descEn: 'A legacy of over 1,500 brides who trusted us with their most precious day.',
    descAr: 'إرث من أكثر من 1500 عروس أسندن إلينا أثمن يوم في حياتهن.',
  },
];

const AtelierExperience = () => {
  const { i18n } = useTranslation();
  const isRTL = i18n.language === 'ar';

  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const imgY = useTransform(scrollYProgress, [0, 1], ['0%', '20%']);
  const textY = useTransform(scrollYProgress, [0, 1], ['0%', '-5%']);

  return (
    <section ref={ref} style={{ background: '#100e0c', overflow: 'hidden', position: 'relative' }}>
      {/* Full-bleed parallax image */}
      <motion.div
        className="absolute inset-0"
        style={{ y: imgY }}
      >
        <img
          src="https://images.pexels.com/photos/2959192/pexels-photo-2959192.jpeg?auto=compress&cs=tinysrgb&w=1920"
          alt="Glamour Bridal Atelier"
          className="w-full h-full object-cover"
          style={{ transform: 'scale(1.15)', transformOrigin: 'center' }}
        />
      </motion.div>

      {/* Cinematic overlays */}
      <div className="absolute inset-0" style={{ background: 'linear-gradient(to right, rgba(10,8,6,0.97) 0%, rgba(10,8,6,0.72) 55%, rgba(10,8,6,0.4) 100%)' }} />
      <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(10,8,6,0.9) 0%, transparent 50%)' }} />

      <motion.div
        className="relative z-10 max-w-7xl mx-auto px-8 lg:px-24"
        style={{ paddingBlock: 'clamp(120px,14vw,200px)', y: textY }}
      >
        <div className="grid lg:grid-cols-2 gap-20 items-center">

          {/* Left: Text */}
          <div>
            <Reveal>
              <span className="section-label">{isRTL ? 'تجربة الأتيليه' : 'The Atelier Experience'}</span>
            </Reveal>
            <Reveal delay={0.1}>
              <h2
                style={{
                  fontFamily: 'Cormorant Garamond, serif',
                  fontSize: 'clamp(2.6rem, 5.5vw, 4.8rem)',
                  fontWeight: 300,
                  lineHeight: 1.05,
                  color: 'white',
                  letterSpacing: '0.02em',
                  marginTop: 20,
                }}
              >
                {isRTL ? (
                  <>
                    ليست مجرد تجربة—<br />
                    <em style={{ fontStyle: 'italic', color: 'var(--color-gold)' }}>إنها ذاكرة تُصنع</em>
                  </>
                ) : (
                  <>
                    Not just a fitting—<br />
                    <em style={{ fontStyle: 'italic', color: 'var(--color-gold)' }}>A memory crafted</em>
                  </>
                )}
              </h2>
            </Reveal>
            <Reveal delay={0.2}>
              <div style={{ width: 56, height: 1, background: 'var(--color-gold)', margin: '32px 0' }} />
            </Reveal>
            <Reveal delay={0.25}>
              <p style={{ color: 'rgba(255,255,255,0.5)', lineHeight: 2, fontSize: '0.95rem', fontFamily: 'Manrope, sans-serif', fontWeight: 300, maxWidth: 440 }}>
                {isRTL
                  ? 'أتيليه جلامور ليس مجرد مكان — إنه مقدس للأنوثة والجمال. ادخلي إلى عالم من الهدوء، التفاصيل، والاهتمام الكامل بكِ وحدكِ.'
                  : 'The Glamour Atelier is not merely a place — it is a sanctuary of femininity and beauty. Step into a world of calm, detail, and absolute focus devoted entirely to you.'}
              </p>
            </Reveal>
            <Reveal delay={0.35}>
              <Link
                to="/book-appointment"
                className="inline-flex items-center gap-3 group mt-12"
                style={{
                  color: 'white',
                  background: 'linear-gradient(135deg, var(--color-gold) 0%, var(--color-gold-deep) 100%)',
                  fontFamily: 'Manrope, sans-serif',
                  fontSize: '0.6rem',
                  fontWeight: 700,
                  letterSpacing: '0.26em',
                  textTransform: 'uppercase',
                  padding: '17px 38px',
                  borderRadius: 999,
                  boxShadow: '0 10px 40px rgba(212,176,138,0.35)',
                  transition: 'all 0.45s cubic-bezier(0.22, 1, 0.36, 1)',
                }}
                onMouseEnter={e => {
                  (e.currentTarget as HTMLElement).style.transform = 'translateY(-4px)';
                  (e.currentTarget as HTMLElement).style.boxShadow = '0 16px 52px rgba(212,176,138,0.5)';
                }}
                onMouseLeave={e => {
                  (e.currentTarget as HTMLElement).style.transform = 'translateY(0)';
                  (e.currentTarget as HTMLElement).style.boxShadow = '0 10px 40px rgba(212,176,138,0.35)';
                }}
              >
                {isRTL ? 'احجزي زيارتك للأتيليه' : 'Schedule Your Atelier Visit'}
                <ArrowRight size={13} className="transition-transform group-hover:translate-x-1" />
              </Link>
            </Reveal>
          </div>

          {/* Right: Glassmorphic pillars */}
          <Reveal delay={0.15}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {pillars.map((pillar, i) => {
                const Icon = pillar.icon;
                return (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7, delay: 0.2 + i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                    className="group p-7 cursor-default transition-all duration-500"
                    style={{
                      background: 'rgba(255,255,255,0.04)',
                      border: '1px solid rgba(212,176,138,0.15)',
                      backdropFilter: 'blur(20px)',
                      WebkitBackdropFilter: 'blur(20px)',
                      borderRadius: 4,
                    }}
                    onMouseEnter={e => {
                      (e.currentTarget as HTMLElement).style.background = 'rgba(212,176,138,0.07)';
                      (e.currentTarget as HTMLElement).style.borderColor = 'rgba(212,176,138,0.35)';
                    }}
                    onMouseLeave={e => {
                      (e.currentTarget as HTMLElement).style.background = 'rgba(255,255,255,0.04)';
                      (e.currentTarget as HTMLElement).style.borderColor = 'rgba(212,176,138,0.15)';
                    }}
                  >
                    <div
                      className="w-10 h-10 flex items-center justify-center mb-5 rounded-full"
                      style={{ background: 'rgba(212,176,138,0.1)', border: '1px solid rgba(212,176,138,0.25)' }}
                    >
                      <Icon size={16} style={{ color: 'var(--color-gold)' }} />
                    </div>
                    <h4 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '1.2rem', fontWeight: 500, color: 'white', marginBottom: 8 }}>
                      {isRTL ? pillar.titleAr : pillar.titleEn}
                    </h4>
                    <p style={{ color: 'rgba(255,255,255,0.4)', fontSize: '0.8rem', lineHeight: 1.8, fontFamily: 'Manrope, sans-serif', fontWeight: 300 }}>
                      {isRTL ? pillar.descAr : pillar.descEn}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </Reveal>
        </div>
      </motion.div>
    </section>
  );
};

export default AtelierExperience;
