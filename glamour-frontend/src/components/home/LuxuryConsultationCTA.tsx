import { useRef } from 'react';
import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Calendar, Phone } from 'lucide-react';
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

const LuxuryConsultationCTA = () => {
  const { i18n } = useTranslation();
  const isRTL = i18n.language === 'ar';

  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const imgY = useTransform(scrollYProgress, [0, 1], ['0%', '15%']);

  return (
    <section ref={ref} style={{ position: 'relative', overflow: 'hidden', minHeight: '90vh', display: 'flex', alignItems: 'center' }}>
      {/* Parallax background */}
      <motion.div className="absolute inset-0" style={{ y: imgY, scale: 1.12 }}>
        <img
          src="https://images.pexels.com/photos/1043902/pexels-photo-1043902.jpeg?auto=compress&cs=tinysrgb&w=1920"
          alt="Luxury Bridal Consultation"
          className="w-full h-full object-cover object-center"
        />
      </motion.div>

      {/* Premium dark overlay */}
      <div className="absolute inset-0" style={{ background: 'linear-gradient(135deg, rgba(10,8,6,0.96) 0%, rgba(10,8,6,0.75) 50%, rgba(10,8,6,0.55) 100%)' }} />
      <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(10,8,6,0.9) 0%, transparent 60%)' }} />

      {/* Decorative grain */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(ellipse at 80% 20%, rgba(212,176,138,0.06) 0%, transparent 50%)`,
        }}
      />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-8 lg:px-24 py-32">
        <div className="grid lg:grid-cols-2 gap-20 items-center">

          {/* Left: Main CTA */}
          <div>
            <Reveal>
              <div className="flex items-center gap-4 mb-8">
                <div style={{ width: 44, height: 1, background: 'var(--color-gold)' }} />
                <span style={{ fontSize: '0.58rem', letterSpacing: '0.38em', textTransform: 'uppercase', color: 'var(--color-gold)', fontFamily: 'Manrope, sans-serif', fontWeight: 700 }}>
                  {isRTL ? '✦ استشارة خاصة ✦' : '✦ Private Consultation ✦'}
                </span>
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <h2
                style={{
                  fontFamily: 'Cormorant Garamond, serif',
                  fontSize: 'clamp(2.8rem, 6vw, 5.2rem)',
                  fontWeight: 300,
                  lineHeight: 1.0,
                  color: 'white',
                  letterSpacing: '0.02em',
                  marginBottom: 24,
                }}
              >
                {isRTL ? (
                  <>
                    ابدئي قصتكِ<br />
                    <em style={{ fontStyle: 'italic', color: 'var(--color-gold)' }}>معنا اليوم</em>
                  </>
                ) : (
                  <>
                    Begin your story<br />
                    <em style={{ fontStyle: 'italic', color: 'var(--color-gold)' }}>with us today</em>
                  </>
                )}
              </h2>
            </Reveal>
            <Reveal delay={0.2}>
              <p style={{ color: 'rgba(255,255,255,0.45)', lineHeight: 2, fontSize: '0.95rem', fontFamily: 'Manrope, sans-serif', fontWeight: 300, maxWidth: 420, marginBottom: 40 }}>
                {isRTL
                  ? 'جلسة استشارية خاصة ومجانية مع كبيرة مصمماتنا لمناقشة رؤيتك وتحويل حلمك إلى فستان حصري يحمل روحكِ.'
                  : 'A complimentary private consultation with our lead designer to discuss your vision and transform your dream into an exclusive gown that carries your essence.'}
              </p>
            </Reveal>
            <Reveal delay={0.3}>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/book-appointment"
                  className="inline-flex items-center justify-center gap-3 group"
                  style={{
                    background: 'linear-gradient(135deg, var(--color-gold) 0%, var(--color-gold-deep) 100%)',
                    color: '#100e0c',
                    fontFamily: 'Manrope, sans-serif',
                    fontSize: '0.6rem',
                    fontWeight: 700,
                    letterSpacing: '0.26em',
                    textTransform: 'uppercase',
                    padding: '18px 40px',
                    borderRadius: 999,
                    boxShadow: '0 12px 44px rgba(212,176,138,0.38)',
                    transition: 'all 0.45s cubic-bezier(0.22, 1, 0.36, 1)',
                  }}
                  onMouseEnter={e => {
                    (e.currentTarget as HTMLElement).style.transform = 'translateY(-4px)';
                    (e.currentTarget as HTMLElement).style.boxShadow = '0 20px 56px rgba(212,176,138,0.5)';
                  }}
                  onMouseLeave={e => {
                    (e.currentTarget as HTMLElement).style.transform = '';
                    (e.currentTarget as HTMLElement).style.boxShadow = '0 12px 44px rgba(212,176,138,0.38)';
                  }}
                >
                  <Calendar size={13} />
                  {isRTL ? 'احجزي موعدكِ الآن' : 'Book Your Appointment'}
                  <ArrowRight size={13} className="transition-transform group-hover:translate-x-1" />
                </Link>
                <a
                  href="https://wa.me/905510069156"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-3 group"
                  style={{
                    background: 'rgba(255,255,255,0.05)',
                    color: 'white',
                    fontFamily: 'Manrope, sans-serif',
                    fontSize: '0.6rem',
                    fontWeight: 700,
                    letterSpacing: '0.26em',
                    textTransform: 'uppercase',
                    padding: '18px 40px',
                    borderRadius: 999,
                    border: '1.5px solid rgba(255,255,255,0.18)',
                    backdropFilter: 'blur(12px)',
                    WebkitBackdropFilter: 'blur(12px)',
                    transition: 'all 0.45s cubic-bezier(0.22, 1, 0.36, 1)',
                  }}
                  onMouseEnter={e => {
                    (e.currentTarget as HTMLElement).style.background = 'rgba(255,255,255,0.12)';
                    (e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,255,255,0.35)';
                    (e.currentTarget as HTMLElement).style.transform = 'translateY(-2px)';
                  }}
                  onMouseLeave={e => {
                    (e.currentTarget as HTMLElement).style.background = 'rgba(255,255,255,0.05)';
                    (e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,255,255,0.18)';
                    (e.currentTarget as HTMLElement).style.transform = '';
                  }}
                >
                  <Phone size={13} />
                  {isRTL ? 'واتساب' : 'WhatsApp Us'}
                </a>
              </div>
            </Reveal>
          </div>

          {/* Right: Glassmorphic card */}
          <Reveal delay={0.2}>
            <div
              className="p-10 lg:p-12"
              style={{
                background: 'rgba(255,255,255,0.04)',
                border: '1px solid rgba(212,176,138,0.2)',
                backdropFilter: 'blur(24px)',
                WebkitBackdropFilter: 'blur(24px)',
                borderRadius: 4,
                boxShadow: '0 40px 100px rgba(0,0,0,0.4)',
              }}
            >
              <p style={{ fontSize: '0.58rem', letterSpacing: '0.3em', textTransform: 'uppercase', color: 'var(--color-gold)', fontFamily: 'Manrope, sans-serif', fontWeight: 700, marginBottom: 24 }}>
                {isRTL ? 'ما يشمله الموعد' : "What's Included"}
              </p>

              <div className="space-y-6">
                {(isRTL ? [
                  { title: 'جلسة تصميم خاصة', desc: '90 دقيقة مع كبيرة المصممات بشكل حصري' },
                  { title: 'لوحة أسلوب شخصية', desc: 'مخطط بصري مخصص يعكس رؤيتكِ وروحكِ' },
                  { title: 'استشارة الأقمشة', desc: 'أمثلة حقيقية من أفخر الأقمشة الأوروبية' },
                  { title: 'عرض مجموعتنا', desc: 'وصول حصري إلى المجموعات غير المعروضة للعموم' },
                  { title: 'مجانية تماماً', desc: 'لا تكاليف، لا التزامات — مجرد إلهام نقي' },
                ] : [
                  { title: 'Private Design Session', desc: '90 minutes exclusively with our lead designer' },
                  { title: 'Personal Style Board', desc: 'A bespoke visual guide reflecting your vision and spirit' },
                  { title: 'Fabric Consultation', desc: 'Real swatches from the finest European mills' },
                  { title: 'Collection Preview', desc: 'Exclusive access to unreleased collection pieces' },
                  { title: 'Completely Complimentary', desc: 'No cost, no obligation — pure inspiration' },
                ]).map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -16 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.3 + i * 0.08 }}
                    className="flex items-start gap-4"
                  >
                    <div
                      className="mt-0.5 shrink-0 w-5 h-5 rounded-full flex items-center justify-center"
                      style={{ background: 'rgba(212,176,138,0.15)', border: '1px solid rgba(212,176,138,0.4)' }}
                    >
                      <div style={{ width: 5, height: 5, borderRadius: '50%', background: 'var(--color-gold)' }} />
                    </div>
                    <div>
                      <p style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '1.05rem', fontWeight: 500, color: 'white', lineHeight: 1.3, marginBottom: 3 }}>
                        {item.title}
                      </p>
                      <p style={{ fontSize: '0.78rem', color: 'rgba(255,255,255,0.35)', fontFamily: 'Manrope, sans-serif', fontWeight: 300, lineHeight: 1.6 }}>
                        {item.desc}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>

              <div style={{ height: 1, background: 'rgba(212,176,138,0.15)', marginBlock: 28 }} />

              <div className="flex items-center gap-3">
                <div
                  className="w-2 h-2 rounded-full"
                  style={{ background: 'var(--color-gold)', boxShadow: '0 0 8px rgba(212,176,138,0.6)' }}
                />
                <p style={{ fontSize: '0.72rem', color: 'rgba(255,255,255,0.4)', fontFamily: 'Manrope, sans-serif', fontStyle: 'italic', letterSpacing: '0.06em' }}>
                  {isRTL
                    ? 'نقبل عدداً محدوداً من العرائس كل موسم للحفاظ على مستوى الاهتمام الشخصي الكامل'
                    : 'We accept a limited number of brides each season to maintain our standard of full personal devotion'}
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default LuxuryConsultationCTA;
