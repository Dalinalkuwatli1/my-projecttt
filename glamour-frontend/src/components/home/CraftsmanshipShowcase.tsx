import { useRef } from 'react';
import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
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
      initial={{ opacity: 0, y: 52, filter: 'blur(8px)' }}
      animate={isInView ? { opacity: 1, y: 0, filter: 'blur(0px)' } : {}}
      transition={{ duration: 1.0, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
};

const crafts = [
  {
    id: 1,
    src: 'https://images.pexels.com/photos/1043902/pexels-photo-1043902.jpeg?auto=compress&cs=tinysrgb&w=1200',
    labelEn: 'Hand-Sewn Embroidery',
    labelAr: 'التطريز اليدوي',
    descEn: 'Over 800 hours of meticulous beadwork on a single gown.',
    descAr: 'أكثر من 800 ساعة من الخرزية الدقيقة على فستان واحد.',
    span: 'lg:col-span-2 lg:row-span-2',
    aspect: 'aspect-[4/5]',
  },
  {
    id: 2,
    src: 'https://images.pexels.com/photos/2955375/pexels-photo-2955375.jpeg?auto=compress&cs=tinysrgb&w=900',
    labelEn: 'French Duchess Satin',
    labelAr: 'ساتان الدوقة الفرنسية',
    descEn: 'Sourced from the finest ateliers of Lyon.',
    descAr: 'مُستوردة من أرقى ورش ليون الفرنسية.',
    span: 'lg:col-span-1 lg:row-span-1',
    aspect: 'aspect-[4/3]',
  },
  {
    id: 3,
    src: 'https://images.pexels.com/photos/1755428/pexels-photo-1755428.jpeg?auto=compress&cs=tinysrgb&w=900',
    labelEn: 'Couture Silhouette',
    labelAr: 'سيلويت الكوتور',
    descEn: 'Every cut shaped to celebrate the bride\'s form.',
    descAr: 'كل قصة تحتفل بجمال العروس.',
    span: 'lg:col-span-1 lg:row-span-1',
    aspect: 'aspect-[4/3]',
  },
  {
    id: 4,
    src: 'https://images.pexels.com/photos/1024993/pexels-photo-1024993.jpeg?auto=compress&cs=tinysrgb&w=1200',
    labelEn: 'Chantilly Lace',
    labelAr: 'دانتيل شانتيلي',
    descEn: 'Imported Belgian lace, placed by hand, stitch by stitch.',
    descAr: 'دانتيل بلجيكي مستورد، يُوضع باليد غرزة بغرزة.',
    span: 'lg:col-span-2 lg:row-span-1',
    aspect: 'aspect-video',
  },
];

const CraftsmanshipShowcase = () => {
  const { i18n } = useTranslation();
  const isRTL = i18n.language === 'ar';

  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ['start end', 'end start'] });
  const bgY = useTransform(scrollYProgress, [0, 1], ['0%', '6%']);

  return (
    <section
      ref={sectionRef}
      style={{ background: 'var(--color-ivory)', paddingBlock: 'clamp(100px,12vw,160px)', overflow: 'hidden' }}
    >
      <div className="max-w-7xl mx-auto px-8 lg:px-24">

        {/* Section header */}
        <Reveal className="mb-20">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8">
            <div>
              <span className="section-label">{isRTL ? 'فن الصنعة' : 'The Craft'}</span>
              <h2
                style={{
                  fontFamily: 'Cormorant Garamond, serif',
                  fontSize: 'clamp(2.4rem, 5vw, 4.2rem)',
                  fontWeight: 300,
                  lineHeight: 1.08,
                  color: 'var(--color-text)',
                  letterSpacing: '0.02em',
                  marginTop: 16,
                }}
              >
                {isRTL ? (
                  <>
                    فن الصنعة يُولد<br />
                    <em style={{ fontStyle: 'italic', color: 'var(--color-gold)' }}>الخلود</em>
                  </>
                ) : (
                  <>
                    Where Craft<br />
                    <em style={{ fontStyle: 'italic', color: 'var(--color-gold)' }}>Becomes Legacy</em>
                  </>
                )}
              </h2>
            </div>
            <div style={{ maxWidth: 360 }}>
              <p style={{ color: 'var(--color-muted)', lineHeight: 1.9, fontSize: '0.92rem', fontFamily: 'Manrope, sans-serif' }}>
                {isRTL
                  ? 'نؤمن بأن التفاصيل هي روح كل تحفة. كل غرزة، كل نسيج، كل حجر — مختار بعناية فائقة.'
                  : 'We believe the details are the soul of every masterpiece. Every stitch, fabric, and stone — chosen with obsessive care.'}
              </p>
              <Link
                to="/atelier"
                className="inline-flex items-center gap-3 group mt-8"
                style={{
                  color: 'var(--color-text)',
                  fontSize: '0.62rem',
                  letterSpacing: '0.22em',
                  textTransform: 'uppercase',
                  fontFamily: 'Manrope, sans-serif',
                  fontWeight: 700,
                  borderBottom: '1px solid var(--color-gold)',
                  paddingBottom: 3,
                }}
              >
                {isRTL ? 'اكتشفي فن الصنعة' : 'Explore Craftsmanship'}
                <ArrowRight size={12} className="transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </Reveal>

        {/* Editorial Grid */}
        <motion.div style={{ y: bgY }}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 lg:gap-4" style={{ gridAutoRows: '1fr' }}>
            {crafts.map((craft, idx) => (
              <motion.div
                key={craft.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.9, delay: idx * 0.1, ease: [0.22, 1, 0.36, 1] }}
                className={`group relative overflow-hidden cursor-pointer ${craft.span}`}
              >
                <div className={`w-full ${craft.aspect} overflow-hidden`} style={{ height: '100%', minHeight: 280 }}>
                  <img
                    src={craft.src}
                    alt={isRTL ? craft.labelAr : craft.labelEn}
                    className="w-full h-full object-cover object-top transition-transform duration-[1600ms] group-hover:scale-105"
                    loading="lazy"
                  />
                </div>

                {/* Always-on gradient */}
                <div
                  className="absolute inset-0"
                  style={{ background: 'linear-gradient(to top, rgba(18,14,10,0.88) 0%, rgba(18,14,10,0.12) 48%, transparent 100%)' }}
                />
                {/* Hover overlay */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700"
                  style={{ background: 'rgba(18,14,10,0.22)' }}
                />

                {/* Gold corner marks */}
                <div
                  className="absolute top-4 left-4 opacity-0 group-hover:opacity-100 transition-all duration-500"
                  style={{ width: 22, height: 22, borderTop: '1.5px solid var(--color-gold)', borderLeft: '1.5px solid var(--color-gold)' }}
                />
                <div
                  className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-500"
                  style={{ width: 22, height: 22, borderBottom: '1.5px solid var(--color-gold)', borderRight: '1.5px solid var(--color-gold)' }}
                />

                {/* Content */}
                <div className="absolute inset-x-0 bottom-0 p-7">
                  <div className="transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                    <p style={{ fontSize: '0.55rem', letterSpacing: '0.32em', textTransform: 'uppercase', color: 'var(--color-gold)', fontFamily: 'Manrope, sans-serif', fontWeight: 700, marginBottom: 8 }}>
                      {isRTL ? craft.labelAr : craft.labelEn}
                    </p>
                    <p
                      className="text-white/70 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                      style={{ fontSize: '0.8rem', lineHeight: 1.7, fontFamily: 'Manrope, sans-serif', fontWeight: 300, maxWidth: 320 }}
                    >
                      {isRTL ? craft.descAr : craft.descEn}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Marquee strip */}
        <Reveal delay={0.1} className="mt-20 overflow-hidden">
          <div className="relative overflow-hidden py-6 border-y" style={{ borderColor: 'rgba(212,176,138,0.2)' }}>
            <div className="marquee-track">
              {[...Array(3)].map((_, i) => (
                <div key={i} className="flex items-center gap-10 pr-10 shrink-0">
                  {['Hand Embroidery', 'Duchess Satin', 'Chantilly Lace', 'Bespoke Design', 'Master Tailoring', 'Couture Fittings'].map((t) => (
                    <span key={t} className="flex items-center gap-10 shrink-0">
                      <span style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '1.1rem', fontWeight: 400, color: 'var(--color-text)', letterSpacing: '0.04em', whiteSpace: 'nowrap' }}>
                        {t}
                      </span>
                      <span style={{ color: 'var(--color-gold)', fontSize: '0.6rem' }}>✦</span>
                    </span>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </Reveal>

      </div>
    </section>
  );
};

export default CraftsmanshipShowcase;
