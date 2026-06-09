import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
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

// All editorial bridal gown photography — white gowns on models only
const photos = [
  {
    id: 1,
    src: 'https://images.pexels.com/photos/1043902/pexels-photo-1043902.jpeg?auto=compress&cs=tinysrgb&w=900',
    titleEn: 'Royal Bloom',
    titleAr: 'البهاء الملكي',
    year: '2026',
    catEn: 'Ballgown',
    catAr: 'منفوش فاخر',
    cls: 'md:col-span-1 md:row-span-2', // tall left
  },
  {
    id: 2,
    src: 'https://images.pexels.com/photos/1024993/pexels-photo-1024993.jpeg?auto=compress&cs=tinysrgb&w=900',
    titleEn: 'The Celestine',
    titleAr: 'سيليستين',
    year: '2026',
    catEn: 'Mermaid',
    catAr: 'حورية البحر',
    cls: 'md:col-span-1 md:row-span-1',
  },
  {
    id: 3,
    src: 'https://images.pexels.com/photos/265722/pexels-photo-265722.jpeg?auto=compress&cs=tinysrgb&w=900',
    titleEn: 'Ivory Whisper',
    titleAr: 'همس العاج',
    year: '2025',
    catEn: 'A-Line',
    catAr: 'إيه لاين',
    cls: 'md:col-span-1 md:row-span-1',
  },
  {
    id: 4,
    src: 'https://images.pexels.com/photos/2955375/pexels-photo-2955375.jpeg?auto=compress&cs=tinysrgb&w=1200',
    titleEn: 'Aria Silhouette',
    titleAr: 'ظلال آريا',
    year: '2025',
    catEn: 'Sheath',
    catAr: 'الأنيقة المتوهجة',
    cls: 'md:col-span-2 md:row-span-1', // wide bottom
  },
];

const MasonryGallery = () => {
  const { i18n } = useTranslation();
  const isRTL = i18n.language === 'ar';

  return (
    <section style={{ background: 'white', paddingBlock: 'clamp(80px,10vw,140px)' }}>
      <div className="max-w-7xl mx-auto px-8 lg:px-24">

        <Reveal className="text-center mb-16">
          <span className="section-label">{isRTL ? 'روائع المجموعة' : 'The Collection'}</span>
          <h2 className="section-title mt-4">
            {isRTL ? 'أثواب الكوتور 2025–2026' : 'Couture Gowns 2025–2026'}
          </h2>
          <p className="section-subtitle" style={{ maxWidth: 500 }}>
            {isRTL
              ? 'كل قطعة تحكي قصة — خُلقت لتُحفظ في الذاكرة إلى الأبد'
              : 'Each piece tells a story — created to live in memory forever'}
          </p>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-3 auto-rows-[280px] gap-3 lg:gap-4">
          {photos.map((photo, idx) => (
            <motion.div
              key={photo.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.8, delay: idx * 0.12, ease: [0.22, 1, 0.36, 1] }}
              className={`group relative overflow-hidden cursor-pointer ${photo.cls}`}
            >
              <img
                src={photo.src}
                alt={isRTL ? photo.titleAr : photo.titleEn}
                className="w-full h-full object-cover transition-transform duration-[1400ms] group-hover:scale-108"
                style={{ objectPosition: 'center top' }}
                loading="lazy"
              />
              {/* Luxury overlay — always subtle, stronger on hover */}
              <div
                className="absolute inset-0 transition-opacity duration-700"
                style={{ background: 'linear-gradient(to top, rgba(28,22,18,0.82) 0%, rgba(28,22,18,0.18) 45%, transparent 100%)', opacity: 0.7 }}
              />
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700"
                style={{ background: 'rgba(28,22,18,0.25)' }}
              />

              {/* Card content */}
              <div className="absolute inset-0 flex flex-col justify-end p-6 lg:p-8">
                <div className="transform translate-y-3 group-hover:translate-y-0 transition-transform duration-500">
                  <span className="badge-brand mb-3 text-[0.5rem] tracking-[0.2em]">
                    {isRTL ? photo.catAr : photo.catEn}
                  </span>
                  <h3 className="text-white" style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '1.7rem', fontWeight: 400, lineHeight: 1.1, marginBottom: 4 }}>
                    {isRTL ? photo.titleAr : photo.titleEn}
                  </h3>
                  <p style={{ color: 'var(--color-gold)', fontSize: '0.58rem', letterSpacing: '0.28em', fontFamily: 'Manrope, sans-serif', marginBottom: 14 }}>
                    {photo.year}
                  </p>
                  <Link
                    to="/collections"
                    className="inline-flex items-center gap-2 text-white/70 hover:text-white text-[0.58rem] tracking-[0.2em] uppercase font-semibold transition-colors opacity-0 group-hover:opacity-100"
                    style={{ transitionDelay: '80ms' }}
                  >
                    {isRTL ? 'عرض المجموعة' : 'View Collection'} <ArrowRight size={10} />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <Reveal delay={0.2} className="mt-14 text-center">
          <Link to="/collections" className="btn-secondary">
            {isRTL ? 'عرض كافة المجموعات' : 'View All Collections'}
          </Link>
        </Reveal>
      </div>
    </section>
  );
};

export default MasonryGallery;
