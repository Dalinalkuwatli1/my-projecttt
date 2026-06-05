import { motion } from 'framer-motion';
import { Scissors, Gem, Clock, Ruler, Sparkles, HeartHandshake } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const GOLD = '#c5a059';
const DARK = '#362e24';
const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, delay },
});

const services = [
  {
    icon: HeartHandshake,
    titleEn: 'Bridal Consultation',
    titleAr: 'الاستشارة العروسية',
    descEn: 'A private one-on-one session with our lead stylist to discuss your vision, budget, and timeline. Complimentary for all clients.',
    descAr: 'جلسة خاصة فردية مع كبيرة المصممات لمناقشة رؤيتك وميزانيتك والجدول الزمني. مجانية لجميع العملاء.',
    badge: { en: 'Complimentary', ar: 'مجاني' },
    img: 'https://images.pexels.com/photos/1043902/pexels-photo-1043902.jpeg?auto=compress&cs=tinysrgb&w=700',
  },
  {
    icon: Scissors,
    titleEn: 'Bespoke Gown Creation',
    titleAr: 'تصميم ثوب مخصص',
    descEn: 'Your dream gown, crafted entirely from scratch. From the first sketch to the final fitting — an end-to-end bespoke journey.',
    descAr: 'ثوب أحلامك، مُصنَّع من الصفر تماماً. من الرسم الأول إلى التجربة النهائية — رحلة مخصصة بالكامل.',
    badge: { en: 'Signature', ar: 'الخدمة الرئيسية' },
    img: 'https://images.pexels.com/photos/265722/pexels-photo-265722.jpeg?auto=compress&cs=tinysrgb&w=700',
  },
  {
    icon: Ruler,
    titleEn: 'Precision Alterations',
    titleAr: 'التعديلات الدقيقة',
    descEn: 'Whether purchased from our collection or another designer, we offer meticulous alterations to achieve a perfect, custom fit.',
    descAr: 'سواء اشتريت من مجموعتنا أو من مصمم آخر، نقدم تعديلات دقيقة لتحقيق ملاءمة مثالية.',
    badge: { en: 'Available', ar: 'متاح' },
    img: 'https://images.pexels.com/photos/2955375/pexels-photo-2955375.jpeg?auto=compress&cs=tinysrgb&w=700',
  },
  {
    icon: Gem,
    titleEn: 'Accessories Curation',
    titleAr: 'تنسيق الإكسسوارات',
    descEn: 'Complete the look with our hand-selected veils, tiaras, earrings, and jewelry — all curated to complement your gown.',
    descAr: 'أكملي إطلالتك مع طرح وتيجان وأقراط ومجوهرات منتقاة بعناية — كلها منسقة لتتناغم مع ثوبك.',
    badge: { en: 'Add-On', ar: 'إضافي' },
    img: 'https://images.pexels.com/photos/1755428/pexels-photo-1755428.jpeg?auto=compress&cs=tinysrgb&w=700',
  },
  {
    icon: Clock,
    titleEn: 'Rush & Express Service',
    titleAr: 'الخدمة السريعة',
    descEn: 'Need your gown in less than 3 months? Our dedicated rush team ensures luxury quality even under tight timelines.',
    descAr: 'تحتاجين الثوب في أقل من 3 أشهر؟ فريق الخدمة السريعة الخاص بنا يضمن الجودة الفاخرة حتى في المواعيد الضيقة.',
    badge: { en: 'Express', ar: 'سريع' },
    img: 'https://images.pexels.com/photos/2253842/pexels-photo-2253842.jpeg?auto=compress&cs=tinysrgb&w=700',
  },
  {
    icon: Sparkles,
    titleEn: 'Preservation & Cleaning',
    titleAr: 'الحفظ والتنظيف',
    descEn: 'Preserve your wedding gown for a lifetime with our museum-quality cleaning and archival boxing service.',
    descAr: 'احفظي ثوب زفافك للأبد مع خدمة التنظيف والتعبئة الأرشيفية بجودة المتاحف.',
    badge: { en: 'After-Care', ar: 'ما بعد الزفاف' },
    img: 'https://images.pexels.com/photos/3622608/pexels-photo-3622608.jpeg?auto=compress&cs=tinysrgb&w=700',
  },
];

export default function Services() {
  const { i18n } = useTranslation();
  const isRTL = i18n.language === 'ar';

  return (
    <div className="min-h-screen pt-24 pb-24" style={{ background: 'var(--color-brand-light,#fcfbf9)' }}>

      {/* Header */}
      <div className="max-w-7xl mx-auto px-6 lg:px-16 pt-12 mb-20">
        <motion.div {...fadeUp(0)} className="text-center">
          <span className="block text-[0.65rem] font-bold tracking-[0.28em] uppercase mb-4" style={{ color: GOLD }}>
            {isRTL ? 'ما نقدمه' : 'What We Offer'}
          </span>
          <h1 className="font-serif text-5xl md:text-6xl mb-5" style={{ color: DARK }}>
            {isRTL ? 'خدماتنا' : 'Our Services'}
          </h1>
          <p className="text-lg max-w-xl mx-auto leading-relaxed" style={{ color: 'var(--color-surface-500,#bfb39c)' }}>
            {isRTL
              ? 'من أول استشارة إلى اليوم الذي يلي زفافك — نرافقك في كل خطوة بخبرة ولمسة شخصية.'
              : 'From the first consultation to the day after your wedding — we accompany you at every step with expertise and a personal touch.'}
          </p>
        </motion.div>
      </div>

      {/* Services Grid */}
      <div className="max-w-7xl mx-auto px-6 lg:px-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((svc, i) => {
            const Icon = svc.icon;
            return (
              <motion.div
                key={i}
                {...fadeUp(i * 0.07)}
                className="group flex flex-col rounded-2xl overflow-hidden bg-white"
                style={{ boxShadow: '0 4px 24px rgba(54,46,36,0.08)' }}
              >
                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  <img src={svc.img} alt={isRTL ? svc.titleAr : svc.titleEn} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                  <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(54,46,36,0.6) 0%, transparent 60%)' }} />
                  <span className="absolute top-4 end-4 text-[0.6rem] font-bold uppercase tracking-widest px-3 py-1.5 rounded-full" style={{ background: GOLD, color: 'white' }}>
                    {isRTL ? svc.badge.ar : svc.badge.en}
                  </span>
                </div>

                {/* Content */}
                <div className="p-7 flex flex-col flex-1">
                  <div className="w-10 h-10 rounded-full flex items-center justify-center mb-5" style={{ background: 'var(--color-brand-50,#faf9f7)' }}>
                    <Icon size={20} style={{ color: GOLD }} />
                  </div>
                  <h3 className="font-serif text-xl mb-3" style={{ color: DARK }}>
                    {isRTL ? svc.titleAr : svc.titleEn}
                  </h3>
                  <p className="text-sm leading-relaxed flex-1" style={{ color: 'var(--color-surface-600,#9c8f77)' }}>
                    {isRTL ? svc.descAr : svc.descEn}
                  </p>
                  <Link
                    to="/book-appointment"
                    className="mt-6 text-xs font-bold uppercase tracking-widest border-b-2 pb-0.5 self-start transition-opacity hover:opacity-70"
                    style={{ borderColor: GOLD, color: DARK }}
                  >
                    {isRTL ? 'احجزي الآن' : 'Book Now'}
                  </Link>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Process Steps */}
        <motion.div {...fadeUp(0.1)} className="mt-24 rounded-3xl p-12 md:p-16" style={{ background: DARK }}>
          <div className="text-center mb-14">
            <span className="block text-[0.65rem] font-bold tracking-[0.28em] uppercase mb-4" style={{ color: GOLD }}>
              {isRTL ? 'كيف يعمل' : 'How It Works'}
            </span>
            <h2 className="font-serif text-3xl md:text-4xl text-white">
              {isRTL ? 'رحلتك معنا' : 'Your Journey With Us'}
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            {[
              { step: '01', en: 'Book a Consultation', ar: 'احجزي استشارة' },
              { step: '02', en: 'Design Your Gown', ar: 'صمّمي ثوبك' },
              { step: '03', en: 'Fittings & Refinements', ar: 'التجربة والتعديل' },
              { step: '04', en: 'Your Perfect Day', ar: 'يومك المثالي' },
            ].map((step) => (
              <div key={step.step}>
                <p className="font-serif text-4xl font-bold mb-3" style={{ color: GOLD }}>{step.step}</p>
                <p className="text-white/70 text-sm font-medium">{isRTL ? step.ar : step.en}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
