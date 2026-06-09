import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Check } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const Reveal = ({ children, delay = 0, className = '' }: { children: React.ReactNode; delay?: number; className?: string }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-60px' });
  return (
    <motion.div ref={ref} className={className}
      initial={{ opacity: 0, y: 40, filter: 'blur(5px)' }}
      animate={isInView ? { opacity: 1, y: 0, filter: 'blur(0px)' } : {}}
      transition={{ duration: 0.9, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
};

const services = [
  {
    number: '01',
    img: 'https://images.pexels.com/photos/1043902/pexels-photo-1043902.jpeg?auto=compress&cs=tinysrgb&w=800',
    titleEn: 'Bespoke Gown Design',
    titleAr: 'تصميم فستان حصري',
    descEn: 'Your dream gown, crafted entirely from scratch. A bespoke end-to-end journey from first sketch to final stitch.',
    descAr: 'فستان أحلامك، مُصنَّع من الصفر تماماً. رحلة مخصصة بالكامل من الرسم الأول إلى آخر غرزة يدوية.',
    pointsEn: ['Private 1-on-1 design session', 'Unlimited sketch revisions', 'Premium European fabrics', 'Complimentary fittings included'],
    pointsAr: ['جلسة تصميم خاصة مع كبيرة المصممات', 'تعديلات لا محدودة على الرسوم', 'أقمشة أوروبية فاخرة', 'جلسات قياس مجانية مشمولة'],
    badge: { en: 'Signature Service', ar: 'الخدمة الرئيسية' },
    isFeatured: true,
  },
  {
    number: '02',
    img: 'https://images.pexels.com/photos/1755428/pexels-photo-1755428.jpeg?auto=compress&cs=tinysrgb&w=800',
    titleEn: 'Bridal Consultation',
    titleAr: 'الاستشارة العروسية',
    descEn: 'A private one-on-one session with our lead stylist to discuss your vision, budget, and timeline.',
    descAr: 'جلسة خاصة فردية مع كبيرة المصممات لمناقشة رؤيتك وميزانيتك والجدول الزمني.',
    pointsEn: ['Complimentary for all brides', 'Expert style guidance', 'Personalised moodboard'],
    pointsAr: ['مجانية لجميع العرائس', 'إرشاد متخصص في الأسلوب', 'لوحة مزاجية مخصصة'],
    badge: { en: 'Complimentary', ar: 'مجاني' },
    isFeatured: false,
  },
  {
    number: '03',
    img: 'https://images.pexels.com/photos/2955375/pexels-photo-2955375.jpeg?auto=compress&cs=tinysrgb&w=800',
    titleEn: 'Precision Alterations',
    titleAr: 'التعديلات الدقيقة',
    descEn: 'Whether from our collection or another designer, we offer meticulous alterations for a perfect fit.',
    descAr: 'سواء من مجموعتنا أو مصمم آخر، نقدم تعديلات دقيقة لتحقيق ملاءمة مثالية تامة.',
    pointsEn: ['Same-day minor repairs', 'Master tailor craftsmen', 'All designers welcome'],
    pointsAr: ['تصليحات طارئة في نفس اليوم', 'خياطون أساتذة متمرسون', 'جميع فساتين المصممين مقبولة'],
    badge: { en: 'Available', ar: 'متاح' },
    isFeatured: false,
  },
];

const ServicesSection = () => {
  const { i18n } = useTranslation();
  const isRTL = i18n.language === 'ar';

  return (
    <section style={{ background: 'var(--color-surface-900)', paddingBlock: 'clamp(80px,10vw,140px)' }}>
      <div className="max-w-7xl mx-auto px-8 lg:px-24">

        {/* Header */}
        <Reveal className="text-center mb-20">
          <span className="section-label">{isRTL ? 'ما نقدمه' : 'What We Offer'}</span>
          <h2 className="section-title mt-4" style={{ color: 'white' }}>
            {isRTL ? (
              <>خدمات صُمّمت<br /><em style={{ fontStyle: 'italic', color: 'var(--color-gold)', fontWeight: 300 }}>لتجربة لا تُنسى</em></>
            ) : (
              <>Services Designed<br /><em style={{ fontStyle: 'italic', color: 'var(--color-gold)', fontWeight: 300 }}>For An Unforgettable Experience</em></>
            )}
          </h2>
        </Reveal>

        {/* Services Grid — Featured card is larger */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {services.map((svc, i) => (
            <motion.div
              key={svc.number}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.8, delay: i * 0.14, ease: [0.22, 1, 0.36, 1] }}
              className={`group relative flex flex-col overflow-hidden ${svc.isFeatured ? 'lg:col-span-1 lg:row-span-1' : ''}`}
              style={{
                background: svc.isFeatured ? 'rgba(212,176,138,0.08)' : 'rgba(255,255,255,0.03)',
                border: svc.isFeatured ? '1px solid rgba(212,176,138,0.3)' : '1px solid rgba(255,255,255,0.07)',
              }}
            >
              {/* Image */}
              <div className="relative overflow-hidden" style={{ height: svc.isFeatured ? 320 : 240 }}>
                <img
                  src={svc.img}
                  alt={isRTL ? svc.titleAr : svc.titleEn}
                  className="w-full h-full object-cover transition-transform duration-[1400ms] group-hover:scale-105"
                />
                <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(28,22,18,0.75) 0%, rgba(0,0,0,0.1) 60%, transparent 100%)' }} />
                <span
                  className="absolute top-4 end-4 text-[0.55rem] font-bold uppercase tracking-widest px-3 py-1.5"
                  style={{ background: svc.isFeatured ? 'var(--color-gold)' : 'rgba(255,255,255,0.12)', color: svc.isFeatured ? '#1C1A18' : 'rgba(255,255,255,0.7)', backdropFilter: 'blur(8px)', borderRadius: 2 }}
                >
                  {isRTL ? svc.badge.ar : svc.badge.en}
                </span>
                <span className="absolute bottom-4 start-5" style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '3.5rem', fontWeight: 300, color: 'rgba(212,176,138,0.25)', lineHeight: 1 }}>
                  {svc.number}
                </span>
              </div>

              {/* Content */}
              <div className="p-8 flex flex-col flex-1">
                <h3 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: svc.isFeatured ? '1.9rem' : '1.55rem', fontWeight: 400, color: 'white', marginBottom: 8, lineHeight: 1.15 }}>
                  {isRTL ? svc.titleAr : svc.titleEn}
                </h3>
                <p style={{ color: 'rgba(255,255,255,0.45)', fontSize: '0.85rem', lineHeight: 1.8, marginBottom: 20, fontFamily: 'Manrope, sans-serif', fontWeight: 300 }}>
                  {isRTL ? svc.descAr : svc.descEn}
                </p>

                {/* Value Points */}
                <ul className="space-y-2.5 mb-8 flex-1">
                  {(isRTL ? svc.pointsAr : svc.pointsEn).map((pt, j) => (
                    <li key={j} className="flex items-start gap-3">
                      <span className="mt-0.5 shrink-0 w-4 h-4 rounded-full flex items-center justify-center" style={{ background: 'rgba(212,176,138,0.15)', border: '1px solid rgba(212,176,138,0.35)' }}>
                        <Check size={9} style={{ color: 'var(--color-gold)' }} />
                      </span>
                      <span style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.8rem', fontFamily: 'Manrope, sans-serif', fontWeight: 300, lineHeight: 1.5 }}>{pt}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  to="/book-appointment"
                  className="inline-flex items-center gap-2 self-start group/btn"
                  style={{ color: 'var(--color-gold)', fontSize: '0.6rem', letterSpacing: '0.22em', textTransform: 'uppercase', fontFamily: 'Manrope, sans-serif', fontWeight: 700, borderBottom: '1px solid rgba(212,176,138,0.35)', paddingBottom: 2 }}
                >
                  {isRTL ? 'اكتشفي المزيد' : 'Discover More'}
                  <ArrowRight size={11} className="transition-transform group-hover/btn:translate-x-1" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Journey Timeline */}
        <Reveal delay={0.15} className="mt-24">
          <div className="rounded-2xl p-12 md:p-16" style={{ background: 'rgba(212,176,138,0.06)', border: '1px solid rgba(212,176,138,0.14)' }}>
            <div className="text-center mb-14">
              <span className="section-label">{isRTL ? 'كيف يعمل' : 'How It Works'}</span>
              <h2 className="section-title mt-3" style={{ color: 'white' }}>
                {isRTL ? 'رحلتك معنا' : 'Your Journey With Us'}
              </h2>
            </div>

            {/* Steps with connector line */}
            <div className="relative">
              {/* Connecting line — hidden on mobile */}
              <div className="hidden md:block absolute top-8 left-[12.5%] right-[12.5%] h-px" style={{ background: 'linear-gradient(to right, transparent, rgba(212,176,138,0.4), rgba(212,176,138,0.4), transparent)' }} />

              <div className="grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-6 text-center relative">
                {(isRTL ? [
                  { step: '01', title: 'الاستشارة الخاصة', desc: 'جلسة مغلقة مع فريق التصميم لمناقشة رؤيتك الكاملة' },
                  { step: '02', title: 'اختيار التصميم والقماش', desc: 'انتقاء أدق التفاصيل من الدانتيل والأقمشة والطراز' },
                  { step: '03', title: 'التفصيل والتعديلات', desc: 'جلسات قياس متعددة لضمان ملاءمة مثالية للجسم' },
                  { step: '04', title: 'التسليم النهائي', desc: 'استلام فستانك في حقيبة فاخرة مع ضمان الجودة' },
                ] : [
                  { step: '01', title: 'Private Consultation', desc: 'A closed session with our design team to discuss your full vision' },
                  { step: '02', title: 'Design & Fabric Selection', desc: 'Choosing every detail from lace to fabric to silhouette' },
                  { step: '03', title: 'Tailoring & Fittings', desc: 'Multiple fitting sessions to ensure a perfect body fit' },
                  { step: '04', title: 'Final Delivery', desc: 'Receive your gown in a luxury bag with quality guarantee' },
                ]).map((step, i) => (
                  <motion.div
                    key={step.step}
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7, delay: i * 0.12 }}
                  >
                    <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-5 relative" style={{ background: 'rgba(212,176,138,0.1)', border: '1px solid rgba(212,176,138,0.3)' }}>
                      <span style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '1.4rem', fontWeight: 500, color: 'var(--color-gold)' }}>{step.step}</span>
                    </div>
                    <h4 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '1.1rem', fontWeight: 500, color: 'white', marginBottom: 8 }}>{step.title}</h4>
                    <p style={{ color: 'rgba(255,255,255,0.4)', fontSize: '0.8rem', lineHeight: 1.7, fontFamily: 'Manrope, sans-serif', fontWeight: 300 }}>{step.desc}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </Reveal>

      </div>
    </section>
  );
};

export default ServicesSection;
