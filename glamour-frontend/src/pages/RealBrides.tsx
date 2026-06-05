import { motion } from 'framer-motion';
import { Heart, Star, Quote } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const GOLD = '#c5a059';
const DARK = '#362e24';

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, delay },
});

const brides = [
  {
    id: 1,
    name: { en: 'Sarah Al-Mansoori', ar: 'سارة المنصوري' },
    gown: { en: 'Royal Empress Gown', ar: 'ثوب الإمبراطورة' },
    date: { en: 'May 2024 · Dubai', ar: 'مايو 2024 · دبي' },
    quote: {
      en: 'The moment I put on the Royal Empress, I knew this was the one. The craftsmanship is beyond anything I had imagined. Every stitch felt intentional.',
      ar: 'في اللحظة التي ارتديت فيها ثوب الإمبراطورة الملكية، عرفت أنه هو. الحرفية تفوق كل ما تخيلته. كل غرزة كانت مقصودة.',
    },
    rating: 5,
    portrait: 'https://images.pexels.com/photos/1024993/pexels-photo-1024993.jpeg?auto=compress&cs=tinysrgb&w=700',
    dress: 'https://images.pexels.com/photos/1043902/pexels-photo-1043902.jpeg?auto=compress&cs=tinysrgb&w=700',
  },
  {
    id: 2,
    name: { en: 'Layla Hassan', ar: 'ليلى حسن' },
    gown: { en: 'Aria Silhouette Gown', ar: 'ثوب آريا' },
    date: { en: 'September 2024 · Beirut', ar: 'سبتمبر 2024 · بيروت' },
    quote: {
      en: 'From the first consultation to the final fitting, the Glamour team made me feel like royalty. My Aria gown was everything — and more.',
      ar: 'من أول استشارة إلى التفصيل الأخير، جعلني فريق جلامور أشعر بأنني ملكة. كان ثوب آريا الخاص بي كل شيء - وأكثر.',
    },
    rating: 5,
    portrait: 'https://images.pexels.com/photos/265722/pexels-photo-265722.jpeg?auto=compress&cs=tinysrgb&w=700',
    dress: 'https://images.pexels.com/photos/1755428/pexels-photo-1755428.jpeg?auto=compress&cs=tinysrgb&w=700',
  },
  {
    id: 3,
    name: { en: 'Noor Al-Rashidi', ar: 'نور الراشدي' },
    gown: { en: 'Celestine Glow Gown', ar: 'ثوب سيليستين' },
    date: { en: 'January 2025 · Istanbul', ar: 'يناير 2025 · إسطنبول' },
    quote: {
      en: 'Walking down the aisle in my Celestine felt like floating on clouds. The secret? Two meters of the most exquisite French tulle I have ever touched.',
      ar: 'السير في ممر العرس بثوب سيليستين شعرت وكأنني أسير على السحاب. السر؟ مترين من أرق التول الفرنسي الذي لمسته في حياتي.',
    },
    rating: 5,
    portrait: 'https://images.pexels.com/photos/2955375/pexels-photo-2955375.jpeg?auto=compress&cs=tinysrgb&w=700',
    dress: 'https://images.pexels.com/photos/2253842/pexels-photo-2253842.jpeg?auto=compress&cs=tinysrgb&w=700',
  },
  {
    id: 4,
    name: { en: 'Reem Al-Khalidi', ar: 'ريم الخالدي' },
    gown: { en: 'Ivory Whisper Gown', ar: 'ثوب إيفوري ويسبر' },
    date: { en: 'March 2025 · Riyadh', ar: 'مارس 2025 · الرياض' },
    quote: {
      en: "My wedding day was perfect, and I owe much of that to the Glamour team. The Ivory Whisper fit like it was made for me — because it was.",
      ar: 'كان يوم زفافي مثالياً، وأعزو الكثير من ذلك لفريق جلامور. ثوب إيفوري ويسبر كان ملائماً كأنه صُنع من أجلي - لأنه كان كذلك.',
    },
    rating: 5,
    portrait: 'https://images.pexels.com/photos/3622608/pexels-photo-3622608.jpeg?auto=compress&cs=tinysrgb&w=700',
    dress: 'https://images.pexels.com/photos/1759622/pexels-photo-1759622.jpeg?auto=compress&cs=tinysrgb&w=700',
  },
];

export default function RealBrides() {
  const { i18n } = useTranslation();
  const isRTL = i18n.language === 'ar';

  return (
    <div className="min-h-screen pt-24 pb-24" style={{ background: 'var(--color-brand-light,#fcfbf9)' }}>

      {/* Header */}
      <div className="max-w-7xl mx-auto px-6 lg:px-16 pt-12 mb-20">
        <motion.div {...fadeUp(0)} className="text-center">
          <span className="block text-[0.65rem] font-bold tracking-[0.28em] uppercase mb-4" style={{ color: GOLD }}>
            {isRTL ? 'ألهمينا' : 'Inspire Us'}
          </span>
          <h1 className="font-serif text-5xl md:text-6xl mb-5" style={{ color: DARK }}>
            {isRTL ? 'عرائسنا' : 'Real Brides'}
          </h1>
          <p className="text-lg max-w-xl mx-auto leading-relaxed" style={{ color: 'var(--color-surface-500,#bfb39c)' }}>
            {isRTL
              ? 'كل عروس تحمل قصة فريدة. هنا، نشارككم لحظات حقيقية من أجمل أيام حياتهن.'
              : 'Every bride carries a unique story. Here, we share real moments from the most beautiful days of their lives.'}
          </p>
        </motion.div>
      </div>

      {/* Brides Editorial */}
      <div className="max-w-7xl mx-auto px-6 lg:px-16 space-y-28">
        {brides.map((bride, i) => (
          <motion.div
            key={bride.id}
            {...fadeUp(i * 0.08)}
            className={`flex flex-col ${i % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-10 lg:gap-16 items-center`}
          >
            {/* Images — stacked overlap */}
            <div className="lg:w-1/2 w-full relative">
              <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-float">
                <img src={bride.dress} alt={isRTL ? bride.name.ar : bride.name.en} className="w-full h-full object-cover" />
              </div>
              <div className="absolute -bottom-8 -end-4 w-44 h-56 rounded-2xl overflow-hidden border-4 border-white shadow-lg hidden md:block">
                <img src={bride.portrait} alt={isRTL ? bride.name.ar : bride.name.en} className="w-full h-full object-cover" />
              </div>
            </div>

            {/* Story */}
            <div className="lg:w-1/2">
              <Quote size={36} className="mb-6 opacity-30" style={{ color: GOLD }} />
              <p className="font-serif text-2xl lg:text-3xl italic leading-relaxed mb-8" style={{ color: DARK }}>
                "{isRTL ? bride.quote.ar : bride.quote.en}"
              </p>

              {/* Stars */}
              <div className="flex gap-1 mb-6">
                {Array.from({ length: bride.rating }).map((_, s) => (
                  <Star key={s} size={16} style={{ fill: GOLD, color: GOLD }} />
                ))}
              </div>

              <div className="flex items-center gap-4">
                <div>
                  <p className="font-bold text-sm tracking-wide" style={{ color: DARK }}>
                    {isRTL ? bride.name.ar : bride.name.en}
                  </p>
                  <p className="text-xs font-medium mt-1" style={{ color: GOLD }}>
                    {isRTL ? bride.gown.ar : bride.gown.en}
                  </p>
                  <p className="text-xs mt-0.5" style={{ color: 'var(--color-surface-400,#e7e0d0)' }}>
                    {isRTL ? bride.date.ar : bride.date.en}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Share CTA */}
      <div className="max-w-7xl mx-auto px-6 lg:px-16 mt-28">
        <motion.div
          {...fadeUp(0)}
          className="rounded-3xl p-12 md:p-16 text-center"
          style={{ background: DARK }}
        >
          <Heart size={36} className="mx-auto mb-6" style={{ fill: GOLD, color: GOLD }} />
          <h2 className="font-serif text-3xl md:text-4xl text-white mb-4">
            {isRTL ? 'شاركينا قصتك' : 'Share Your Story'}
          </h2>
          <p className="text-white/60 max-w-md mx-auto mb-8">
            {isRTL
              ? 'أرسلي لنا صور يوم زفافك لتكوني جزءاً من مجتمع عرائس جلامور.'
              : 'Send us your wedding day photos to become part of the Glamour brides community.'}
          </p>
          <a
            href="mailto:brides@glamourgroup.com"
            className="inline-block px-8 py-3.5 rounded-full text-xs font-bold tracking-widest uppercase text-white transition-opacity hover:opacity-85"
            style={{ background: GOLD }}
          >
            {isRTL ? 'تواصلي معنا' : 'Contact Us'}
          </a>
        </motion.div>
      </div>
    </div>
  );
}
