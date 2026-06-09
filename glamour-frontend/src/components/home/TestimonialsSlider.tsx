import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { Star, Quote } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const Reveal = ({ children, delay = 0, className = '' }: { children: React.ReactNode; delay?: number; className?: string }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-60px' });
  return (
    <motion.div ref={ref} className={className}
      initial={{ opacity: 0, y: 30, filter: 'blur(5px)' }}
      animate={isInView ? { opacity: 1, y: 0, filter: 'blur(0px)' } : {}}
      transition={{ duration: 0.9, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
};

const reviews = [
  {
    nameEn: 'Sarah Al-Mansouri', nameAr: 'سارة المنصوري',
    locationEn: 'Dubai, UAE', locationAr: 'دبي، الإمارات',
    quoteEn: '"The gown exceeded every expectation. The moment I wore it, I felt transformed — like a living work of art."',
    quoteAr: '"الفستان تجاوز كل توقعاتي. لحظة ارتديته شعرت بأنني تحولت إلى عمل فني حي ينبض بالحياة."',
    rating: 5,
  },
  {
    nameEn: 'Reem Al-Ahmad', nameAr: 'ريم الأحمد',
    locationEn: 'Riyadh, KSA', locationAr: 'الرياض، المملكة العربية السعودية',
    quoteEn: '"Every single stitch was executed with love and extraordinary precision. I felt like I was wearing a masterpiece."',
    quoteAr: '"كل غرزة نُفّذت بحب ودقة استثنائية. شعرت وكأنني أرتدي تحفة فنية تستحق أن تُروى قصتها."',
    rating: 5,
  },
  {
    nameEn: 'Lana Al-Khatib', nameAr: 'لانا الخطيب',
    locationEn: 'Beirut, Lebanon', locationAr: 'بيروت، لبنان',
    quoteEn: '"The entire experience was magical — from the first sketch to the final fitting. Truly world-class craftsmanship."',
    quoteAr: '"التجربة بأكملها كانت ساحرة — من أول رسمة حتى البروفة الأخيرة. حرفية بمستوى عالمي حقيقي."',
    rating: 5,
  },
  {
    nameEn: 'Nour Al-Hassan', nameAr: 'نور الحسن',
    locationEn: 'Kuwait City', locationAr: 'مدينة الكويت',
    quoteEn: '"Glamour transformed my dream into reality. The attention to detail is second to none — absolute perfection."',
    quoteAr: '"غلامور حوّلت حلمي إلى حقيقة. الاهتمام بالتفاصيل لا مثيل له — كمال مطلق في كل زاوية."',
    rating: 5,
  },
];

const TestimonialsSlider = () => {
  const { i18n } = useTranslation();
  const isRTL = i18n.language === 'ar';
  const [active, setActive] = useState(0);

  return (
    <section style={{ background: 'var(--color-ivory)', paddingBlock: 'clamp(80px,10vw,140px)' }} className="overflow-hidden">
      <div className="max-w-7xl mx-auto px-8 lg:px-24">

        {/* Header */}
        <Reveal className="text-center mb-20">
          <span className="section-label">{isRTL ? 'شهادات العرائس' : 'Bride Stories'}</span>
          <h2 className="section-title mt-4">
            {isRTL ? (
              <>عرائس جلامور،<br /><em style={{ fontStyle: 'italic', color: 'var(--color-gold)' }}>لحظات لا تُنسى</em></>
            ) : (
              <>Brides of Glamour,<br /><em style={{ fontStyle: 'italic', color: 'var(--color-gold)' }}>Moments Eternal</em></>
            )}
          </h2>
        </Reveal>

        {/* Main featured testimonial */}
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center mb-16">

          {/* Large quote */}
          <Reveal delay={0.1}>
            <div className="relative">
              <Quote
                size={72}
                style={{ color: 'rgba(212,176,138,0.15)', position: 'absolute', top: -24, insetInlineStart: -16 }}
                strokeWidth={1}
              />
              <motion.p
                key={active}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                style={{
                  fontFamily: 'Cormorant Garamond, serif',
                  fontSize: 'clamp(1.4rem, 2.8vw, 2rem)',
                  fontStyle: 'italic',
                  color: 'var(--color-text)',
                  lineHeight: 1.65,
                  position: 'relative',
                  zIndex: 1,
                }}
              >
                {isRTL ? reviews[active].quoteAr : reviews[active].quoteEn}
              </motion.p>

              <motion.div
                key={`meta-${active}`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="mt-8 flex items-center gap-5"
              >
                <div style={{ width: 40, height: 1, background: 'var(--color-gold)' }} />
                <div>
                  <p style={{ fontSize: '0.7rem', letterSpacing: '0.22em', textTransform: 'uppercase', fontWeight: 700, color: 'var(--color-text)', fontFamily: 'Manrope, sans-serif' }}>
                    {isRTL ? reviews[active].nameAr : reviews[active].nameEn}
                  </p>
                  <p style={{ fontSize: '0.65rem', color: 'var(--color-gold)', letterSpacing: '0.14em', marginTop: 3, fontFamily: 'Manrope, sans-serif' }}>
                    {isRTL ? reviews[active].locationAr : reviews[active].locationEn}
                  </p>
                </div>
                <div className="flex gap-0.5">
                  {Array.from({ length: reviews[active].rating }).map((_, i) => (
                    <Star key={i} size={12} fill="var(--color-gold)" style={{ color: 'var(--color-gold)' }} />
                  ))}
                </div>
              </motion.div>
            </div>
          </Reveal>

          {/* Selector cards */}
          <Reveal delay={0.2}>
            <div className="flex flex-col gap-4">
              {reviews.map((r, i) => (
                <motion.button
                  key={i}
                  onClick={() => setActive(i)}
                  whileHover={{ x: isRTL ? -4 : 4 }}
                  className="text-start p-5 transition-all duration-400 cursor-pointer"
                  style={{
                    background: i === active ? 'white' : 'transparent',
                    border: i === active ? '1px solid rgba(212,176,138,0.25)' : '1px solid rgba(212,176,138,0.1)',
                    borderRadius: 8,
                    boxShadow: i === active ? '0 8px 32px rgba(42,30,26,0.08)' : 'none',
                  }}
                >
                  <div className="flex items-center justify-between mb-1">
                    <span style={{ fontSize: '0.68rem', fontWeight: 700, letterSpacing: '0.16em', textTransform: 'uppercase', color: i === active ? 'var(--color-text)' : 'var(--color-muted)', fontFamily: 'Manrope, sans-serif' }}>
                      {isRTL ? r.nameAr : r.nameEn}
                    </span>
                    <span style={{ fontSize: '0.62rem', color: i === active ? 'var(--color-gold)' : 'var(--color-muted)', fontFamily: 'Manrope, sans-serif' }}>
                      {isRTL ? r.locationAr : r.locationEn}
                    </span>
                  </div>
                  <p style={{ fontSize: '0.8rem', color: i === active ? 'var(--color-muted)' : 'rgba(122,106,90,0.5)', lineHeight: 1.5, fontStyle: 'italic', fontFamily: 'Cormorant Garamond, serif' }}
                    className="line-clamp-1">
                    {isRTL ? r.quoteAr : r.quoteEn}
                  </p>
                  {i === active && (
                    <motion.div
                      layoutId="active-bar"
                      style={{ height: 2, background: 'linear-gradient(90deg, var(--color-gold), var(--color-gold-deep))', borderRadius: 1, marginTop: 10 }}
                    />
                  )}
                </motion.button>
              ))}
            </div>
          </Reveal>
        </div>

        {/* Trust Signals strip */}
        <Reveal delay={0.3}>
          <div
            className="grid grid-cols-2 md:grid-cols-4 gap-px mt-4"
            style={{ background: 'rgba(212,176,138,0.15)', borderRadius: 12, overflow: 'hidden' }}
          >
            {(isRTL ? [
              { num: '+1500', label: 'عروس سعيدة' },
              { num: '14', label: 'عاماً من الخبرة' },
              { num: '4.9/5', label: 'تقييم العملاء' },
              { num: '100%', label: 'تصميم مخصص' },
            ] : [
              { num: '+1500', label: 'Happy Brides' },
              { num: '14', label: 'Years Experience' },
              { num: '4.9/5', label: 'Client Rating' },
              { num: '100%', label: 'Bespoke Design' },
            ]).map(({ num, label }) => (
              <div key={label} className="text-center py-8 px-4" style={{ background: 'var(--color-ivory)' }}>
                <div className="stat-number mb-1">{num}</div>
                <p style={{ fontSize: '0.6rem', letterSpacing: '0.22em', textTransform: 'uppercase', color: 'var(--color-muted)', fontFamily: 'Manrope, sans-serif', fontWeight: 600 }}>{label}</p>
              </div>
            ))}
          </div>
        </Reveal>

      </div>
    </section>
  );
};

export default TestimonialsSlider;
