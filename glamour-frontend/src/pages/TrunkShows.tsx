import { motion } from 'framer-motion';
import { CalendarDays, MapPin, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const GOLD = '#c5a059';
const DARK = '#362e24';

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, delay },
});

const events = [
  {
    id: 1,
    img: 'https://images.pexels.com/photos/1024993/pexels-photo-1024993.jpeg?auto=compress&cs=tinysrgb&w=900',
    month: { en: 'JUN', ar: 'يون' },
    day: '14',
    year: '2025',
    titleEn: 'The Spring Soirée',
    titleAr: 'سهرة الربيع',
    locationEn: 'Istanbul Grand Hall',
    locationAr: 'قاعة إسطنبول الكبرى',
    descEn: 'An exclusive evening showcasing our Spring/Summer 2025 bridal collection. By invitation only.',
    descAr: 'أمسية حصرية لعرض مجموعة الزفاف لربيع/صيف 2025. بالدعوة فقط.',
  },
  {
    id: 2,
    img: 'https://images.pexels.com/photos/265722/pexels-photo-265722.jpeg?auto=compress&cs=tinysrgb&w=900',
    month: { en: 'AUG', ar: 'أغس' },
    day: '22',
    year: '2025',
    titleEn: 'The Ivory Edit',
    titleAr: 'إيفوري إيديت',
    locationEn: 'Dubai Fashion Hub',
    locationAr: 'مركز دبي للأزياء',
    descEn: 'A curated trunk show celebrating modern minimalist bridal silhouettes in ivory and champagne.',
    descAr: 'عرض منتقى يحتفل بصور العرائس البيضاء والشامبانيا المينيماليستية الحديثة.',
  },
  {
    id: 3,
    img: 'https://images.pexels.com/photos/2955375/pexels-photo-2955375.jpeg?auto=compress&cs=tinysrgb&w=900',
    month: { en: 'OCT', ar: 'أكت' },
    day: '08',
    year: '2025',
    titleEn: 'The Golden Gown Gala',
    titleAr: 'حفل الثوب الذهبي',
    locationEn: 'Beirut Cultural Palace',
    locationAr: 'قصر بيروت الثقافي',
    descEn: 'Our most anticipated annual runway show. Witness the full Autumn/Winter 2025 collection.',
    descAr: 'عرض الأزياء السنوي الأكثر انتظاراً. شاهدي مجموعة الخريف/الشتاء 2025 كاملة.',
  },
];

export default function TrunkShows() {
  const { i18n } = useTranslation();
  const isRTL = i18n.language === 'ar';

  return (
    <div className="min-h-screen pt-24 pb-24" style={{ background: 'var(--color-brand-light,#fcfbf9)' }}>

      {/* Hero */}
      <section className="relative h-[60vh] flex items-end overflow-hidden mb-20">
        <img
          src="https://images.pexels.com/photos/1755428/pexels-photo-1755428.jpeg?auto=compress&cs=tinysrgb&w=1400"
          alt="Trunk Shows"
          className="absolute inset-0 w-full h-full object-cover object-top"
        />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(54,46,36,0.88) 0%, transparent 60%)' }} />
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-16 pb-16 w-full">
          <motion.div {...fadeUp(0.1)}>
            <span className="block text-[0.65rem] font-bold tracking-[0.3em] uppercase mb-4" style={{ color: GOLD }}>
              {isRTL ? 'فعالياتنا الحصرية' : 'Exclusive Events'}
            </span>
            <h1 className="font-serif text-5xl md:text-6xl text-white leading-tight">
              {isRTL ? 'العروض الحصرية' : 'Trunk Shows'}
            </h1>
          </motion.div>
        </div>
      </section>

      {/* Intro */}
      <div className="max-w-7xl mx-auto px-6 lg:px-16">
        <motion.div {...fadeUp(0)} className="max-w-2xl mb-20">
          <p className="text-lg leading-relaxed" style={{ color: 'var(--color-surface-600,#9c8f77)' }}>
            {isRTL
              ? 'تجربة مميزة لن تجديها في أي مكان آخر. عروضنا الحصرية تمنحك وصولاً استثنائياً لأحدث مجموعاتنا قبل إطلاقها الرسمي، مع حضور خبراء تنسيق الأزياء شخصياً.'
              : 'An unmissable experience. Our trunk shows give you exclusive first access to our latest collections before their official launch, with our bridal styling experts personally in attendance.'}
          </p>
        </motion.div>

        {/* Events */}
        <div className="space-y-8">
          {events.map((ev, i) => (
            <motion.div
              key={ev.id}
              {...fadeUp(i * 0.1)}
              className="group flex flex-col md:flex-row gap-0 overflow-hidden rounded-2xl bg-white"
              style={{ boxShadow: '0 4px 24px rgba(54,46,36,0.08)' }}
            >
              {/* Date block */}
              <div className="md:w-28 shrink-0 flex flex-row md:flex-col items-center justify-center p-6 gap-3 md:gap-1" style={{ background: DARK }}>
                <p className="font-bold text-xs tracking-widest" style={{ color: GOLD }}>{isRTL ? ev.month.ar : ev.month.en}</p>
                <p className="font-serif text-5xl font-bold text-white leading-none">{ev.day}</p>
                <p className="text-xs text-white/50">{ev.year}</p>
              </div>

              {/* Image */}
              <div className="md:w-56 shrink-0 h-48 md:h-auto overflow-hidden">
                <img src={ev.img} alt={isRTL ? ev.titleAr : ev.titleEn} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
              </div>

              {/* Info */}
              <div className="flex-1 p-8 flex flex-col justify-center">
                <h2 className="font-serif text-2xl md:text-3xl mb-2" style={{ color: DARK }}>
                  {isRTL ? ev.titleAr : ev.titleEn}
                </h2>
                <p className="flex items-center gap-2 text-sm mb-4 font-medium" style={{ color: GOLD }}>
                  <MapPin size={14} /> {isRTL ? ev.locationAr : ev.locationEn}
                </p>
                <p className="text-sm leading-relaxed mb-6" style={{ color: 'var(--color-surface-600,#9c8f77)' }}>
                  {isRTL ? ev.descAr : ev.descEn}
                </p>
                <Link to="/book-appointment" className="inline-flex items-center gap-2 group/btn self-start">
                  <span className="text-xs font-bold tracking-widest uppercase border-b-2 pb-0.5" style={{ borderColor: GOLD, color: DARK }}>
                    {isRTL ? 'احجزي مكانك' : 'Reserve Your Seat'}
                  </span>
                  <ArrowRight size={14} className={`transition-transform duration-300 group-hover/btn:translate-x-1 ${isRTL ? 'rotate-180' : ''}`} style={{ color: GOLD }} />
                </Link>
              </div>

              {/* Badge */}
              <div className="p-6 flex items-center justify-center">
                <div className="flex items-center gap-2 px-4 py-2 rounded-full text-xs font-bold uppercase tracking-widest" style={{ background: 'var(--color-brand-50,#faf9f7)', color: GOLD }}>
                  <CalendarDays size={12} />
                  {isRTL ? 'قادم' : 'Upcoming'}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div {...fadeUp(0.2)} className="mt-20 rounded-3xl p-12 md:p-16 text-center" style={{ background: DARK }}>
          <span className="block text-[0.65rem] font-bold tracking-[0.28em] uppercase mb-4" style={{ color: GOLD }}>
            {isRTL ? 'قائمة الانتظار' : 'Waiting List'}
          </span>
          <h2 className="font-serif text-3xl md:text-4xl text-white mb-3">
            {isRTL ? 'لا تفوتي الدعوات الخاصة' : "Don't Miss Private Invitations"}
          </h2>
          <p className="text-white/60 mb-8 max-w-md mx-auto">
            {isRTL ? 'سجلي بريدك لتكوني أول من يتلقى دعوات العروض الحصرية.' : 'Register your email to be the first to receive exclusive show invitations.'}
          </p>
          <div className="flex flex-col sm:flex-row gap-3 max-w-sm mx-auto">
            <input type="email" placeholder={isRTL ? 'بريدك الإلكتروني' : 'Your email'} className="flex-1 px-5 py-3.5 rounded-full text-sm outline-none" style={{ background: 'rgba(255,255,255,0.1)', color: 'white', border: '1px solid rgba(255,255,255,0.15)' }} />
            <button className="px-6 py-3.5 rounded-full text-xs font-bold tracking-widest uppercase text-white" style={{ background: GOLD }}>
              {isRTL ? 'سجلي' : 'Join'}
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
