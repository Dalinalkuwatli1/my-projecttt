import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const GOLD = '#c5a059';
const DARK = '#362e24';
const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, delay },
});

const milestones = [
  { year: '2018', en: 'Founded in Istanbul with a single atelier and a vision for bespoke bridal luxury.', ar: 'التأسيس في إسطنبول بمشغل واحد ورؤية للفخامة العروسية المخصصة.' },
  { year: '2020', en: 'Launched our debut collection "The Ivory Edit" — 30 gowns, each hand-embroidered.', ar: 'إطلاق مجموعتنا الأولى "إيفوري إيديت" — 30 ثوباً مطرزاً يدوياً.' },
  { year: '2022', en: 'Expanded to Dubai and Beirut. Dressed over 200 brides across the Middle East.', ar: 'التوسع إلى دبي وبيروت. ألبسنا أكثر من 200 عروس في جميع أنحاء الشرق الأوسط.' },
  { year: '2023', en: 'Opened the Glamour flagship atelier in the heart of old Istanbul — our creative soul.', ar: 'افتتاح مشغل جلامور الرئيسي في قلب إسطنبول القديمة — روحنا الإبداعية.' },
  { year: '2025', en: 'Today, Glamour dresses over 500 brides a year across 6 countries. The story continues.', ar: 'اليوم، تُلبس جلامور أكثر من 500 عروس سنوياً في 6 دول. القصة مستمرة.' },
];

export default function OurStory() {
  const { i18n } = useTranslation();
  const isRTL = i18n.language === 'ar';

  return (
    <div className="min-h-screen" style={{ background: 'var(--color-brand-light,#fcfbf9)' }}>

      {/* Cinematic Hero */}
      <section className="relative h-[80vh] flex items-end overflow-hidden">
        <img
          src="https://images.pexels.com/photos/1043902/pexels-photo-1043902.jpeg?auto=compress&cs=tinysrgb&w=1400"
          alt="Our Story"
          className="absolute inset-0 w-full h-full object-cover object-top"
        />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(54,46,36,0.92) 0%, rgba(54,46,36,0.15) 60%, transparent 100%)' }} />
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-16 pb-20 w-full">
          <motion.div {...fadeUp(0.15)}>
            <span className="block text-[0.65rem] font-bold tracking-[0.3em] uppercase mb-5" style={{ color: GOLD }}>
              {isRTL ? 'منذ ٢٠١٨' : 'Since 2018'}
            </span>
            <h1 className="font-serif text-5xl md:text-7xl text-white leading-tight mb-6 max-w-2xl">
              {isRTL ? 'قصتنا' : 'Our Story'}
            </h1>
            <p className="text-white/70 text-lg max-w-lg leading-relaxed">
              {isRTL
                ? 'قصة ولدت من شغف الحرفة، ونمت بفضل ثقة آلاف العرائس.'
                : 'A story born from a passion for craft, and grown through the trust of thousands of brides.'}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Manifesto */}
      <section className="max-w-5xl mx-auto px-6 lg:px-16 py-28">
        <motion.div {...fadeUp(0)} className="text-center">
          <p className="font-serif text-3xl md:text-4xl leading-relaxed italic mb-8" style={{ color: DARK }}>
            {isRTL
              ? '"نحن لا نصنع فساتين. نخلق اللحظة التي لا تُنسى."'
              : '"We don\'t make dresses. We craft the moment you never forget."'}
          </p>
          <span className="text-xs font-bold uppercase tracking-widest" style={{ color: GOLD }}>— Glamour Group</span>
        </motion.div>
      </section>

      {/* Founders Section */}
      <section className="max-w-7xl mx-auto px-6 lg:px-16 mb-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div {...fadeUp(0)} className="relative">
            <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-float">
              <img
                src="https://images.pexels.com/photos/1755428/pexels-photo-1755428.jpeg?auto=compress&cs=tinysrgb&w=900"
                alt="Founder"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -end-6 w-48 h-56 rounded-2xl overflow-hidden border-4 border-white shadow-lg hidden md:block">
              <img
                src="https://images.pexels.com/photos/265722/pexels-photo-265722.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Atelier"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>

          <motion.div {...fadeUp(0.15)}>
            <span className="block text-[0.65rem] font-bold tracking-[0.28em] uppercase mb-5" style={{ color: GOLD }}>
              {isRTL ? 'المؤسسة' : 'The Founder'}
            </span>
            <h2 className="font-serif text-4xl lg:text-5xl mb-6 leading-snug" style={{ color: DARK }}>
              {isRTL ? 'نيلوفر أيدين' : 'Nilufer Aydin'}
            </h2>
            <p className="text-lg leading-relaxed mb-6" style={{ color: 'var(--color-surface-600,#9c8f77)' }}>
              {isRTL
                ? 'بعد سنوات من الدراسة في فلورنسا وباريس، عادت نيلوفر إلى إسطنبول بحلم واحد: خلق فستان زفاف لا تنساه. اليوم، يُجسّد مشغل جلامور هذا الحلم لمئات العرائس كل عام.'
                : 'After years of study in Florence and Paris, Nilufer returned to Istanbul with one dream: to create a wedding gown you\'d never forget. Today, Glamour Atelier embodies that dream for hundreds of brides every year.'}
            </p>
            <p className="text-lg leading-relaxed mb-10" style={{ color: 'var(--color-surface-600,#9c8f77)' }}>
              {isRTL
                ? 'فلسفتها بسيطة: كل عروس فريدة، وكل فستان يجب أن يكون كذلك. الحرفية اليدوية، والأقمشة الفاخرة، والاهتمام بأدق التفاصيل — هذا ما يُميّز جلامور.'
                : 'Her philosophy is simple: every bride is unique, and every gown should be too. Hand-crafted precision, luxurious fabrics, and an obsessive attention to detail — that is what sets Glamour apart.'}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-24" style={{ background: DARK }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-16">
          <motion.div {...fadeUp(0)} className="text-center mb-16">
            <span className="block text-[0.65rem] font-bold tracking-[0.28em] uppercase mb-4" style={{ color: GOLD }}>
              {isRTL ? 'رحلتنا' : 'Our Journey'}
            </span>
            <h2 className="font-serif text-4xl text-white">{isRTL ? 'المعالم الرئيسية' : 'Key Milestones'}</h2>
          </motion.div>

          <div className="relative">
            {/* Vertical line */}
            <div className="absolute start-[50%] top-0 bottom-0 w-px hidden lg:block" style={{ background: 'rgba(197,160,89,0.2)' }} />

            <div className="space-y-12">
              {milestones.map((m, i) => (
                <motion.div
                  key={m.year}
                  {...fadeUp(i * 0.1)}
                  className={`flex flex-col lg:flex-row items-center gap-6 ${i % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}
                >
                  <div className={`lg:w-[45%] ${i % 2 === 0 ? 'lg:text-end' : 'lg:text-start'}`}>
                    <p className="text-white/70 text-sm leading-relaxed">
                      {isRTL ? m.ar : m.en}
                    </p>
                  </div>
                  <div className="flex items-center justify-center w-20 h-20 rounded-full border-2 shrink-0 z-10" style={{ borderColor: GOLD, background: DARK }}>
                    <span className="font-serif font-bold text-lg" style={{ color: GOLD }}>{m.year}</span>
                  </div>
                  <div className="lg:w-[45%]" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-7xl mx-auto px-6 lg:px-16 py-24 text-center">
        <motion.div {...fadeUp(0)}>
          <h2 className="font-serif text-4xl mb-6" style={{ color: DARK }}>
            {isRTL ? 'اكتبي فصلك معنا' : 'Write Your Chapter With Us'}
          </h2>
          <Link to="/book-appointment" className="inline-flex items-center gap-3 group">
            <span className="text-xs font-bold tracking-widest uppercase border-b-2 pb-0.5" style={{ borderColor: GOLD, color: DARK }}>
              {isRTL ? 'احجزي استشارتك' : 'Book a Consultation'}
            </span>
            <ArrowRight size={16} className={`transition-transform duration-300 group-hover:translate-x-1 ${isRTL ? 'rotate-180' : ''}`} style={{ color: GOLD }} />
          </Link>
        </motion.div>
      </section>
    </div>
  );
}
