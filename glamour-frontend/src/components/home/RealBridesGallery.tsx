import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const Reveal = ({ children, delay = 0, className = '' }: { children: React.ReactNode; delay?: number; className?: string }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-60px' });
  return (
    <motion.div ref={ref} className={className}
      initial={{ opacity: 0, y: 40, filter: 'blur(6px)' }}
      animate={isInView ? { opacity: 1, y: 0, filter: 'blur(0px)' } : {}}
      transition={{ duration: 0.9, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
};

// All editorial bridal photos — white gowns on models only
const brides = [
  {
    src: 'https://images.pexels.com/photos/1043902/pexels-photo-1043902.jpeg?auto=compress&cs=tinysrgb&w=700',
    nameEn: 'Sarah', nameAr: 'سارة',
    cityEn: 'Dubai', cityAr: 'دبي',
    tall: true,
  },
  {
    src: 'https://images.pexels.com/photos/1024993/pexels-photo-1024993.jpeg?auto=compress&cs=tinysrgb&w=700',
    nameEn: 'Reem', nameAr: 'ريم',
    cityEn: 'Riyadh', cityAr: 'الرياض',
    tall: false,
  },
  {
    src: 'https://images.pexels.com/photos/265722/pexels-photo-265722.jpeg?auto=compress&cs=tinysrgb&w=700',
    nameEn: 'Lana', nameAr: 'لانا',
    cityEn: 'Beirut', cityAr: 'بيروت',
    tall: false,
  },
  {
    src: 'https://images.pexels.com/photos/2955375/pexels-photo-2955375.jpeg?auto=compress&cs=tinysrgb&w=700',
    nameEn: 'Nour', nameAr: 'نور',
    cityEn: 'Kuwait', cityAr: 'الكويت',
    tall: false,
  },
  {
    src: 'https://images.pexels.com/photos/1755428/pexels-photo-1755428.jpeg?auto=compress&cs=tinysrgb&w=700',
    nameEn: 'Maya', nameAr: 'مايا',
    cityEn: 'Istanbul', cityAr: 'إسطنبول',
    tall: false,
  },
  {
    src: 'https://images.pexels.com/photos/2959192/pexels-photo-2959192.jpeg?auto=compress&cs=tinysrgb&w=700',
    nameEn: 'Dina', nameAr: 'دينا',
    cityEn: 'Cairo', cityAr: 'القاهرة',
    tall: true,
  },
];

const RealBridesGallery = () => {
  const { i18n } = useTranslation();
  const isRTL = i18n.language === 'ar';

  return (
    <section style={{ background: 'var(--color-surface-900)', paddingBlock: 'clamp(80px,10vw,140px)' }}>
      <div className="max-w-7xl mx-auto px-8 lg:px-24">

        {/* Header */}
        <Reveal className="text-center mb-16">
          <span className="section-label">{isRTL ? 'عرائس جلامور' : 'Real Brides'}</span>
          <h2 className="section-title mt-4" style={{ color: 'white' }}>
            {isRTL ? (
              <>لحظات حقيقية،<br /><em style={{ fontStyle: 'italic', color: 'var(--color-gold)', fontWeight: 300 }}>قصص خالدة</em></>
            ) : (
              <>Real Moments,<br /><em style={{ fontStyle: 'italic', color: 'var(--color-gold)', fontWeight: 300 }}>Timeless Stories</em></>
            )}
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.45)', fontSize: '0.9rem', lineHeight: 1.75, marginTop: 16, fontFamily: 'Manrope, sans-serif', fontWeight: 300 }}>
            {isRTL
              ? 'كل إطلالة هنا هي شهادة على رحلة فريدة صنعناها سوياً'
              : 'Every look here is a testament to a unique journey we crafted together'}
          </p>
        </Reveal>

        {/* 2×3 Editorial Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 lg:gap-4" style={{ gridTemplateRows: 'auto' }}>
          {brides.map((bride, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.8, delay: i * 0.09, ease: [0.22, 1, 0.36, 1] }}
              className="group relative overflow-hidden cursor-pointer"
              style={{
                aspectRatio: bride.tall ? '3/4' : '4/5',
              }}
            >
              <img
                src={bride.src}
                alt={isRTL ? bride.nameAr : bride.nameEn}
                className="w-full h-full object-cover object-top transition-transform duration-[1400ms] group-hover:scale-105"
                loading="lazy"
              />
              {/* Base subtle overlay */}
              <div
                className="absolute inset-0"
                style={{ background: 'linear-gradient(to top, rgba(28,18,14,0.8) 0%, rgba(0,0,0,0.05) 50%, transparent 100%)' }}
              />
              {/* Hover: deeper overlay */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{ background: 'rgba(28,18,14,0.25)' }}
              />

              {/* Name card — slides up on hover */}
              <div className="absolute bottom-0 inset-x-0 p-5 transform translate-y-1 group-hover:translate-y-0 transition-transform duration-500">
                <p style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '1.2rem', fontWeight: 400, color: 'white', lineHeight: 1.2 }}>
                  {isRTL ? bride.nameAr : bride.nameEn}
                </p>
                <p style={{ fontSize: '0.58rem', letterSpacing: '0.22em', textTransform: 'uppercase', color: 'var(--color-gold)', fontFamily: 'Manrope, sans-serif', marginTop: 3 }}>
                  {isRTL ? bride.cityAr : bride.cityEn}
                </p>
              </div>

              {/* Gold corner accent on hover */}
              <div
                className="absolute top-3 end-3 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{ width: 20, height: 20, borderTop: '1.5px solid var(--color-gold)', borderInlineEnd: '1.5px solid var(--color-gold)' }}
              />
              <div
                className="absolute bottom-3 start-3 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{ width: 20, height: 20, borderBottom: '1.5px solid var(--color-gold)', borderInlineStart: '1.5px solid var(--color-gold)' }}
              />
            </motion.div>
          ))}
        </div>

        {/* Scarcity Signal + CTA */}
        <Reveal delay={0.3} className="mt-14 flex flex-col items-center gap-6 text-center">
          <div
            className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full"
            style={{ background: 'rgba(212,176,138,0.08)', border: '1px solid rgba(212,176,138,0.2)' }}
          >
            <Sparkles size={11} style={{ color: 'var(--color-gold)' }} />
            <span style={{ fontSize: '0.68rem', color: 'rgba(255,255,255,0.45)', fontFamily: 'Manrope, sans-serif', letterSpacing: '0.1em', fontStyle: 'italic' }}>
              {isRTL
                ? 'نستقبل عدداً محدوداً من العرائس كل موسم — لضمان حصول كل فستان على عنايتنا الكاملة'
                : 'We accept a limited number of brides each season — ensuring every gown receives our full devotion'}
            </span>
          </div>

          <Link
            to="/collections"
            className="inline-flex items-center gap-3 group"
            style={{ color: 'var(--color-gold)', fontSize: '0.62rem', letterSpacing: '0.22em', textTransform: 'uppercase', fontFamily: 'Manrope, sans-serif', fontWeight: 700, borderBottom: '1px solid rgba(212,176,138,0.4)', paddingBottom: 3 }}
          >
            {isRTL ? 'اكتشفي المجموعات الكاملة' : 'View Full Collections'}
            <ArrowRight size={11} className="transition-transform group-hover:translate-x-1" />
          </Link>
        </Reveal>
      </div>
    </section>
  );
};

export default RealBridesGallery;
