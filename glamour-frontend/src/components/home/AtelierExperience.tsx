import { useRef } from 'react';
import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import { MapPin, Clock, Users } from 'lucide-react';
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
    descEn: 'In the heart of Nişantaşı — Turkey.',
    descAr: 'في قلب نيشانتاشي — تركيا.',
  },
  {
    icon: Clock,
    titleEn: 'By Appointment Only',
    titleAr: 'بموعد حصري فقط',
    descEn: 'Private sessions. Complete devotion.',
    descAr: 'جلسات خاصة بلا عجلة. عنايتنا الكاملة.',
  },
  {
    icon: Users,
    titleEn: 'Personal Design Team',
    titleAr: 'فريق تصميم شخصي',
    descEn: 'Seamstress assigned from day one.',
    descAr: 'مصممة مخصصة لكِ منذ اليوم الأول.',
  },
];

const AtelierExperience = () => {
  const { i18n } = useTranslation();
  const isRTL = i18n.language === 'ar';

  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const imgY = useTransform(scrollYProgress, [0, 1], ['-10%', '10%']);

  return (
    <section
      ref={ref}
      style={{ overflow: 'hidden', position: 'relative' }}
      className="py-20 lg:py-32 flex items-center min-h-[720px]"
    >
      {/* Full-bleed background image - beautiful wedding gown */}
      <motion.div className="absolute inset-0 z-0" style={{ y: imgY, scale: 1.1 }}>
        <img
          src="https://images.pexels.com/photos/1755428/pexels-photo-1755428.jpeg?auto=compress&cs=tinysrgb&w=1600"
          alt="Bespoke Wedding Gown Atelier"
          className="w-full h-full object-cover"
        />
      </motion.div>

      {/* Cinematic dark & warm overlays */}
      <div className="absolute inset-0 bg-[#100e0c]/40 z-0" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#100e0c]/90 via-[#100e0c]/40 to-transparent z-0" />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-16 flex justify-start">
        {/* Glassmorphic Consultation Card — Positioned on the left side with blur ("تغبيش") */}
        <div 
          className="w-full max-w-2xl p-8 lg:p-12 backdrop-blur-[24px] rounded-[32px] border border-white/20 shadow-2xl"
          style={{ 
            background: 'rgba(255, 255, 255, 0.08)',
            border: '1px solid rgba(255, 255, 255, 0.15)'
          }}
        >
          <Reveal>
            <span
              style={{
                fontSize: '0.55rem',
                letterSpacing: '0.38em',
                textTransform: 'uppercase',
                color: 'var(--color-gold)',
                fontFamily: 'Manrope, sans-serif',
                fontWeight: 700,
                display: 'block',
                marginBottom: 10,
              }}
            >
              {isRTL ? '✦ تجربة الأتيليه الحصرية' : '✦ The Atelier Experience'}
            </span>
            <h2
              style={{
                fontFamily: isRTL ? "'Reem Kufi', 'Cairo', sans-serif" : 'Cormorant Garamond, serif',
                fontSize: 'clamp(1.8rem, 3.5vw, 2.6rem)',
                fontWeight: isRTL ? 600 : 300,
                lineHeight: 1.2,
                color: 'white',
                marginBottom: 12,
              }}
            >
              {isRTL ? (
                <>
                  ليست مجرد تجربة زفاف<br />
                  <span style={{ color: 'var(--color-gold)' }}>إنها ذاكرة تُصنع</span>
                </>
              ) : (
                <>
                  Not just a fitting —<br />
                  <span style={{ color: 'var(--color-gold)' }}>A memory crafted</span>
                </>
              )}
            </h2>
            <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '0.85rem', lineHeight: 1.8, fontFamily: "'Cairo', 'Tajawal', sans-serif", marginBottom: 20 }}>
              {isRTL
                ? 'تصاميم صُنعت خصيصًا للعروس التي تبحث عن التفرد. حيث تلتقي الحرفية الراقية مع الأناقة الخالدة لتصنع إطلالة استثنائية.'
                : 'Designs crafted exclusively for the bride seeking distinction, where refined artistry meets timeless elegance.'}
            </p>
          </Reveal>

          {/* Gold separator */}
          <div style={{ height: 1, background: 'linear-gradient(to right, #C6A27A, transparent)', marginBlock: '8px 24px', width: '50%' }} />

          {/* Pillars Grid (20% smaller layout) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
            {pillars.map((pillar, i) => {
              const Icon = pillar.icon;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.1 + i * 0.08 }}
                  className="p-5 rounded-[20px] transition-all duration-400"
                  style={{
                    background: 'rgba(255, 255, 255, 0.05)',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                  }}
                  onMouseEnter={e => {
                    (e.currentTarget as HTMLElement).style.background = 'rgba(255, 255, 255, 0.12)';
                    (e.currentTarget as HTMLElement).style.borderColor = 'rgba(198, 162, 122, 0.45)';
                  }}
                  onMouseLeave={e => {
                    (e.currentTarget as HTMLElement).style.background = 'rgba(255, 255, 255, 0.05)';
                    (e.currentTarget as HTMLElement).style.borderColor = 'rgba(255, 255, 255, 0.1)';
                  }}
                >
                  <div
                    className="w-8 h-8 flex items-center justify-center mb-3 rounded-full"
                    style={{ background: 'rgba(198, 162, 122, 0.2)', border: '1px solid rgba(198, 162, 122, 0.3)' }}
                  >
                    <Icon size={14} style={{ color: 'var(--color-gold)' }} />
                  </div>
                  <h4
                    style={{
                      fontFamily: isRTL ? "'Reem Kufi', 'Cairo', sans-serif" : 'Cormorant Garamond, serif',
                      fontSize: '0.9rem',
                      fontWeight: 600,
                      color: 'white',
                      marginBottom: 4,
                    }}
                  >
                    {isRTL ? pillar.titleAr : pillar.titleEn}
                  </h4>
                  <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.7rem', lineHeight: 1.6, fontFamily: "'Cairo', 'Tajawal', sans-serif" }}>
                    {isRTL ? pillar.descAr : pillar.descEn}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AtelierExperience;
