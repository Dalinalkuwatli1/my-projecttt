import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

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
    title: 'Bespoke Design',
    titleAr: 'تصميم حصري',
    desc: 'فستان صُمّم من الصفر لتعكس شخصيتك — من أول رسم بالقلم حتى آخر غرزة يدوية.',
  },
  {
    number: '02',
    title: 'Couture Alterations',
    titleAr: 'تعديلات احترافية',
    desc: 'تعديلات دقيقة تضمن أن كل تفصيلة تلتصق بجسمك كما لو صُنعت لك.',
  },
  {
    number: '03',
    title: 'Bridal Styling',
    titleAr: 'تنسيق إطلالة العروس',
    desc: 'نرافقكِ في اختيار الإكسسوارات، الطرحة، والتاج لتكتمل الصورة بتناغم.',
  },
  {
    number: '04',
    title: 'Private Appointments',
    titleAr: 'جلسات خاصة',
    desc: 'جلسة مخصصة داخل الأتيليه لك ولأقرب المقربين — في هدوء وخصوصية تامة.',
  },
];

const ServicesSection = () => {
  return (
    <section className="section-lg" style={{ background: 'var(--color-surface-900)' }}>
      <div className="max-w-7xl mx-auto px-8 lg:px-24">
        <Reveal className="text-center mb-20">
          <span className="section-label">Our Services</span>
          <h2 className="section-title mt-4" style={{ color: 'white' }}>
            خدمات صُمّمت<br />
            <em style={{ fontStyle: 'italic', color: 'var(--color-gold)', fontWeight: 300 }}>لتجربة لا تُنسى</em>
          </h2>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-px" style={{ border: '1px solid rgba(212,176,138,0.1)' }}>
          {services.map((s, i) => (
            <motion.div
              key={s.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] }}
              className="group p-12 lg:p-16 transition-colors duration-400 cursor-default"
              style={{ background: 'rgba(255,255,255,0.02)', borderRight: i % 2 === 0 ? '1px solid rgba(212,176,138,0.1)' : 'none', borderBottom: '1px solid rgba(212,176,138,0.1)' }}
              onMouseEnter={e => (e.currentTarget as HTMLElement).style.background = 'rgba(212,176,138,0.05)'}
              onMouseLeave={e => (e.currentTarget as HTMLElement).style.background = 'rgba(255,255,255,0.02)'}
            >
              <span style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '3rem', fontWeight: 300, color: 'rgba(212,176,138,0.2)', display: 'block', lineHeight: 1, marginBottom: 24 }}>
                {s.number}
              </span>
              <h3 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '1.8rem', fontWeight: 400, color: 'white', marginBottom: 6 }}>
                {s.title}
              </h3>
              <p style={{ fontSize: '0.72rem', letterSpacing: '0.18em', color: 'var(--color-gold)', fontFamily: 'Manrope, sans-serif', marginBottom: 20, textTransform: 'uppercase' }}>
                {s.titleAr}
              </p>
              <p style={{ color: 'rgba(255,255,255,0.45)', lineHeight: 1.9, fontSize: '0.9rem', fontFamily: 'Manrope, sans-serif', fontWeight: 300 }}>
                {s.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
