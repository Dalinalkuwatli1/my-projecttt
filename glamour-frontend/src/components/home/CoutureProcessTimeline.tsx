import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles, Calendar } from 'lucide-react';
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

const steps = [
  {
    number: '01',
    iconEn: 'Dream',
    iconAr: 'الحلم',
    titleEn: 'Private Consultation',
    titleAr: 'الاستشارة الخاصة',
    descEn: 'A serene one-on-one with our lead designer. We listen, we understand, we envision.',
    descAr: 'جلسة هادئة مع كبيرة مصمماتنا. نستمع، نفهم، نتخيل.',
  },
  {
    number: '02',
    iconEn: 'Create',
    iconAr: 'الإبداع',
    titleEn: 'Sketch & Design',
    titleAr: 'الرسم والتصميم',
    descEn: 'Your vision transformed into exclusive hand-drawn sketches, refined until perfect.',
    descAr: 'رؤيتك تتجسد في رسومات يدوية حصرية، تُصقل حتى الكمال.',
  },
  {
    number: '03',
    iconEn: 'Craft',
    iconAr: 'الصنعة',
    titleEn: 'Fabric & Materials',
    titleAr: 'القماش والمواد',
    descEn: 'We source from the finest European mills — Lyon silk, Belgian lace, Italian satin.',
    descAr: 'نُوَرِّد من أرقى مصانع أوروبا — حرير ليون، دانتيل بلجيكي، ساتان إيطالي.',
  },
  {
    number: '04',
    iconEn: 'Refine',
    iconAr: 'التهذيب',
    titleEn: 'Master Tailoring',
    titleAr: 'الخياطة الماهرة',
    descEn: 'Multiple private fittings with our master artisans until every curve is perfection.',
    descAr: 'قياسات خاصة متعددة مع أمهر الحرفيين حتى يصبح كل خط مثالياً.',
  },
  {
    number: '05',
    iconEn: 'Unveil',
    iconAr: 'الكشف',
    titleEn: 'Grand Reveal',
    titleAr: 'الكشف الكبير',
    descEn: 'Your gown is presented in a ceremonial unveiling — a moment as precious as the day itself.',
    descAr: 'فستانك يُقدَّم في احتفالية خاصة — لحظة بقيمة اليوم نفسه.',
  },
];

const CoutureProcessTimeline = () => {
  const { i18n } = useTranslation();
  const isRTL = i18n.language === 'ar';
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section style={{ background: 'var(--color-surface-900)', paddingBlock: 'clamp(100px,12vw,160px)' }}>
      <div className="max-w-7xl mx-auto px-8 lg:px-24">

        {/* Header */}
        <Reveal className="text-center mb-24">
          <span className="section-label">{isRTL ? 'رحلتك معنا' : 'The Journey'}</span>
          <h2
            className="section-title mt-4"
            style={{ color: 'white' }}
          >
            {isRTL ? (
              <>من الحلم<br /><em style={{ fontStyle: 'italic', color: 'var(--color-gold)', fontWeight: 300 }}>إلى التحفة الفنية</em></>
            ) : (
              <>From Dream<br /><em style={{ fontStyle: 'italic', color: 'var(--color-gold)', fontWeight: 300 }}>To Masterpiece</em></>
            )}
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.35)', fontSize: '0.88rem', lineHeight: 1.8, maxWidth: 480, margin: '16px auto 0', fontFamily: 'Manrope, sans-serif', fontWeight: 300 }}>
            {isRTL
              ? 'خمس مراحل مُصمَّمة بعناية لتحويل كل تفصيلة من خيالك إلى حقيقة ملموسة.'
              : 'Five meticulously designed stages to transform every detail of your imagination into tangible reality.'}
          </p>
        </Reveal>

        {/* Desktop: Horizontal Timeline */}
        <div className="hidden lg:block">
          {/* Step connectors */}
          <div className="relative flex items-start gap-0 mb-0">
            {/* Connecting line */}
            <div
              className="absolute top-8 left-[10%] right-[10%]"
              style={{ height: 1, background: 'linear-gradient(to right, transparent, rgba(212,176,138,0.3), rgba(212,176,138,0.3), transparent)' }}
            />
            {/* Animated progress line */}
            <motion.div
              className="absolute top-8 left-[10%]"
              style={{
                height: 1,
                background: 'linear-gradient(to right, var(--color-gold), var(--color-gold-deep))',
                width: `${(activeStep / (steps.length - 1)) * 80}%`,
                zIndex: 2,
              }}
              animate={{ width: `${(activeStep / (steps.length - 1)) * 80}%` }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            />

            {steps.map((step, i) => (
              <motion.div
                key={step.number}
                className="flex-1 flex flex-col items-center cursor-pointer group"
                onClick={() => setActiveStep(i)}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              >
                {/* Step dot */}
                <motion.div
                  className="relative z-10 w-16 h-16 rounded-full flex items-center justify-center mb-8 transition-all duration-500"
                  animate={{
                    background: i <= activeStep ? 'rgba(212,176,138,0.18)' : 'rgba(255,255,255,0.04)',
                    borderColor: i <= activeStep ? 'var(--color-gold)' : 'rgba(255,255,255,0.12)',
                    scale: i === activeStep ? 1.15 : 1,
                  }}
                  style={{ border: '1px solid' }}
                >
                  <span
                    style={{
                      fontFamily: 'Cormorant Garamond, serif',
                      fontSize: '1.35rem',
                      fontWeight: 500,
                      color: i <= activeStep ? 'var(--color-gold)' : 'rgba(255,255,255,0.25)',
                      transition: 'color 0.5s ease',
                    }}
                  >
                    {step.number}
                  </span>
                  {i === activeStep && (
                    <motion.div
                      className="absolute inset-0 rounded-full"
                      style={{ border: '1px solid var(--color-gold)', opacity: 0.4 }}
                      animate={{ scale: [1, 1.4], opacity: [0.4, 0] }}
                      transition={{ duration: 2, repeat: Infinity, ease: 'easeOut' }}
                    />
                  )}
                </motion.div>

                {/* Step content */}
                <div className="text-center px-3">
                  <p
                    style={{
                      fontSize: '0.55rem',
                      letterSpacing: '0.3em',
                      textTransform: 'uppercase',
                      fontFamily: 'Manrope, sans-serif',
                      fontWeight: 700,
                      color: 'var(--color-gold)',
                      marginBottom: 8,
                      opacity: i === activeStep ? 1 : 0.4,
                      transition: 'opacity 0.4s ease',
                    }}
                  >
                    {isRTL ? step.iconAr : step.iconEn}
                  </p>
                  <h4
                    style={{
                      fontFamily: 'Cormorant Garamond, serif',
                      fontSize: '1.1rem',
                      fontWeight: 400,
                      color: i === activeStep ? 'white' : 'rgba(255,255,255,0.35)',
                      transition: 'color 0.4s ease',
                      lineHeight: 1.3,
                      marginBottom: 12,
                    }}
                  >
                    {isRTL ? step.titleAr : step.titleEn}
                  </h4>
                  <p
                    style={{
                      fontSize: '0.78rem',
                      lineHeight: 1.8,
                      color: 'rgba(255,255,255,0.3)',
                      fontFamily: 'Manrope, sans-serif',
                      fontWeight: 300,
                      opacity: i === activeStep ? 1 : 0,
                      transition: 'opacity 0.4s ease',
                      maxWidth: 200,
                    }}
                  >
                    {isRTL ? step.descAr : step.descEn}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Mobile: Vertical Timeline */}
        <div className="lg:hidden space-y-0">
          {steps.map((step, i) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: i * 0.1 }}
              className="flex gap-6 pb-12 relative"
            >
              {/* Vertical connector */}
              {i < steps.length - 1 && (
                <div
                  className="absolute top-16 left-8 bottom-0"
                  style={{ width: 1, background: 'rgba(212,176,138,0.2)' }}
                />
              )}
              {/* Dot */}
              <div
                className="shrink-0 w-16 h-16 rounded-full flex items-center justify-center"
                style={{ background: 'rgba(212,176,138,0.08)', border: '1px solid rgba(212,176,138,0.3)' }}
              >
                <span style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '1.3rem', color: 'var(--color-gold)' }}>
                  {step.number}
                </span>
              </div>
              <div className="pt-3">
                <p style={{ fontSize: '0.55rem', letterSpacing: '0.3em', textTransform: 'uppercase', color: 'var(--color-gold)', fontFamily: 'Manrope, sans-serif', fontWeight: 700, marginBottom: 8 }}>
                  {isRTL ? step.iconAr : step.iconEn}
                </p>
                <h4 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '1.15rem', color: 'white', marginBottom: 8 }}>
                  {isRTL ? step.titleAr : step.titleEn}
                </h4>
                <p style={{ fontSize: '0.82rem', color: 'rgba(255,255,255,0.4)', lineHeight: 1.8, fontFamily: 'Manrope, sans-serif', fontWeight: 300 }}>
                  {isRTL ? step.descAr : step.descEn}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <Reveal delay={0.3} className="mt-24 text-center">
          <div
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full mb-8"
            style={{ background: 'rgba(212,176,138,0.07)', border: '1px solid rgba(212,176,138,0.2)' }}
          >
            <Sparkles size={11} style={{ color: 'var(--color-gold)' }} />
            <span style={{ fontSize: '0.65rem', color: 'rgba(255,255,255,0.4)', fontFamily: 'Manrope, sans-serif', letterSpacing: '0.12em', fontStyle: 'italic' }}>
              {isRTL
                ? 'رحلتك من الحلم إلى الحقيقة تبدأ بخطوة واحدة'
                : 'Your journey from dream to reality begins with one step'}
            </span>
          </div>
          <div>
            <Link
              to="/book-appointment"
              className="inline-flex items-center gap-3 group"
              style={{
                color: '#100e0c',
                background: 'linear-gradient(135deg, var(--color-gold) 0%, var(--color-gold-deep) 100%)',
                fontFamily: 'Manrope, sans-serif',
                fontSize: '0.6rem',
                fontWeight: 700,
                letterSpacing: '0.26em',
                textTransform: 'uppercase',
                padding: '18px 42px',
                borderRadius: 999,
                boxShadow: '0 10px 40px rgba(212,176,138,0.3)',
                transition: 'all 0.45s cubic-bezier(0.22, 1, 0.36, 1)',
                display: 'inline-flex',
                alignItems: 'center',
              }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLElement).style.transform = 'translateY(-4px)';
                (e.currentTarget as HTMLElement).style.boxShadow = '0 16px 52px rgba(212,176,138,0.45)';
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLElement).style.transform = 'translateY(0)';
                (e.currentTarget as HTMLElement).style.boxShadow = '0 10px 40px rgba(212,176,138,0.3)';
              }}
            >
              <Calendar size={13} style={{ marginRight: 4 }} />
              {isRTL ? 'ابدئي رحلتك الآن' : 'Begin Your Journey'}
              <ArrowRight size={13} className="transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default CoutureProcessTimeline;
