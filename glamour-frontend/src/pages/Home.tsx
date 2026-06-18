import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, ArrowRight, Heart, ChevronDown } from 'lucide-react';
import { useState } from 'react';
import HeroSection from '../components/home/HeroSection';
import StorytellingSection from '../components/home/StorytellingSection';

import AtelierFeatures from '../components/home/AtelierFeatures';
import TestimonialsSlider from '../components/home/TestimonialsSlider';
import { GOWNS_DATA } from '../data/gowns';

import { useNavigate } from 'react-router-dom';

function GownPreviewCard({ gown, isRTL, aspectClass = "aspect-[3/4]" }: { gown: typeof GOWNS_DATA[0]; isRTL: boolean; aspectClass?: string }) {
  const [fav, setFav] = useState(false);
  const navigate = useNavigate();

  return (
    <motion.div
      whileHover={{ y: -6 }}
      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
      onClick={() => navigate(`/collections?type=${gown.type}`)}
      className="group relative rounded-[20px] overflow-hidden bg-[#F5F1EC] shadow-sm hover:shadow-2xl transition-all duration-500 border border-[#e8dbd1]/70 cursor-pointer h-full flex flex-col"
    >
      {/* Image */}
      <div className={`${aspectClass} overflow-hidden relative flex-shrink-0`}>
        <img
          src={gown.image}
          alt={isRTL ? gown.name.ar : gown.name.en}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          loading="lazy"
        />
        
        {/* Hover image scaling is handled by group-hover:scale-110 on the img */}

        {/* Heart */}
        <button
          onClick={(e) => { e.stopPropagation(); setFav(!fav); }}
          className={`absolute top-4 right-4 w-9 h-9 rounded-full flex items-center justify-center border shadow-sm transition-all z-30 ${
            fav ? 'bg-[#C6A27A] border-[#C6A27A]' : 'bg-white/90 border-white/60 hover:bg-white'
          }`}
        >
          <Heart size={14} fill={fav ? 'white' : 'none'} strokeWidth={1.8} style={{ color: fav ? 'white' : '#2b1b12' }} />
        </button>
        {/* Category badge */}
        <span className="absolute bottom-4 left-4 bg-black/60 text-white text-[0.6rem] font-bold uppercase tracking-widest px-3 py-1.5 rounded-full backdrop-blur-md z-30 border border-white/10">
          {isRTL ? gown.category.ar : gown.category.en}
        </span>
      </div>
      {/* Info */}
      <div className="p-4 space-y-1 text-center">
        <h3 className="text-sm font-bold text-[#2b1b12] leading-snug" style={{ fontFamily: isRTL ? 'system-ui, -apple-system, sans-serif' : "'Cormorant Garamond', serif" }}>
          {isRTL ? gown.name.ar : gown.name.en}
        </h3>
        <p className="text-[0.62rem] text-[#8a7b71] leading-relaxed">
          {isRTL ? 'تفصيل يدوي · حسب المقاس' : 'Handcrafted · Bespoke'}
        </p>
        <p className="text-[0.6rem] text-[#C6A27A] font-bold tracking-[0.18em] uppercase pt-1">
          {isRTL ? `ابتداءً من $${gown.price}` : `From $${gown.price}`}
        </p>
      </div>
    </motion.div>
  );
}

function GownSection({
  type,
  isRTL,
}: {
  type: 'wedding' | 'evening';
  isRTL: boolean;
}) {
  const gowns = GOWNS_DATA.filter((g) => g.type === type).slice(0, 4);
  const isWedding = type === 'wedding';

  return (
    <section className="max-w-7xl mx-auto px-6 lg:px-12 py-14">
      {/* Section header */}
      <div className="flex items-end justify-between mb-10">
        <div>
          <span className="text-[0.62rem] font-extrabold uppercase tracking-[0.3em] text-[#C6A27A] block mb-2">
            {isWedding
              ? (isRTL ? '✦ مجموعة الأعراس ✦' : '✦ WEDDING COLLECTION ✦')
              : (isRTL ? '✦ مجموعة السهرة ✦' : '✦ EVENING COLLECTION ✦')}
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-[#2b1b12]" style={{ fontFamily: "'Cormorant Garamond', serif", fontStyle: 'normal' }}>
            {isWedding
              ? (isRTL ? 'فساتين الأعراس' : 'Wedding Gowns')
              : (isRTL ? 'فساتين السهرة' : 'Evening Gowns')}
          </h2>
        </div>
      </div>

      {/* 4-column uniform grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
        {gowns.map((g) => (
          <div key={g.id} className="h-full">
            <GownPreviewCard gown={g} isRTL={isRTL} aspectClass="aspect-[3/4]" />
          </div>
        ))}
      </div>

      {/* Gold Gradient Discovery CTA Button */}
      <div className="mt-16 text-center">
        <Link
          to={`/collections?type=${type}`}
          className="group inline-flex items-center gap-4 rounded-full text-xs font-bold uppercase tracking-[0.3em] text-[#1a0f09] transition-all duration-500 hover:-translate-y-1.5"
          style={{
            background: 'linear-gradient(135deg, #C6A27A 0%, #d4b48e 40%, #b8905f 100%)',
            padding: '16px 48px',
            boxShadow: '0 8px 28px rgba(198,162,122,0.35)',
          }}
          onMouseEnter={e => {
            (e.currentTarget as HTMLElement).style.boxShadow = '0 20px 50px rgba(198,162,122,0.55)';
            (e.currentTarget as HTMLElement).style.background = 'linear-gradient(135deg, #d4b48e 0%, #C6A27A 40%, #c49362 100%)';
          }}
          onMouseLeave={e => {
            (e.currentTarget as HTMLElement).style.boxShadow = '0 8px 28px rgba(198,162,122,0.35)';
            (e.currentTarget as HTMLElement).style.background = 'linear-gradient(135deg, #C6A27A 0%, #d4b48e 40%, #b8905f 100%)';
          }}
        >
          <span style={{ fontFamily: isRTL ? "'Cairo', sans-serif" : "'Cormorant Garamond', serif", fontStyle: isRTL ? 'normal' : 'italic', fontSize: '0.85rem' }}>
            {isRTL ? 'اكتشفي المجموعة' : 'Explore the Collection'}
          </span>
          {isRTL
            ? <ArrowLeft size={15} className="transition-transform duration-300 group-hover:-translate-x-1" />
            : <ArrowRight size={15} className="transition-transform duration-300 group-hover:translate-x-1" />}
        </Link>
      </div>
    </section>
  );
}
function FAQSection({ isRTL }: { isRTL: boolean }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      qEn: "How long does it take to tailor a custom bridal gown?",
      qAr: "كم من الوقت يستغرق تفصيل فستان الزفاف المخصص؟",
      aEn: "Our bespoke creation process takes approximately 1 to 2 weeks. We highly recommend booking in advance as priority slots are limited, though urgent requests are accommodated.",
      aAr: "تستغرق عملية التصميم والتفصيل المخصصة من أسبوع إلى أسبوعين. نفضل دائماً وبشدة الحجز مسبقاً لأنها أولوية قصوى بالنسبة لنا، كما تتوفر لدينا خيارات مخصصة للطلبات العاجلة جداً."
    },
    {
      qEn: "Do you offer international shipping?",
      qAr: "هل توفرون خدمة الشحن الدولي لجميع الدول؟",
      aEn: "Yes, we ship our customized couture creations securely to brides worldwide, using global luxury logistics partners.",
      aAr: "نعم، نقوم بشحن فساتين الكوتور الفاخرة الخاصة بنا بأمان تام إلى جميع أنحاء العالم، بالتعاون مع شركاء لوجستيين دوليين متخصصين."
    },
    {
      qEn: "Can I make changes to an existing collection design?",
      qAr: "هل يمكنني تعديل تصميم من تصميمات المجموعة الحالية؟",
      aEn: "Absolutely. We can customize fabrics, necklines, sleeves, and embellishments during your private consultation sessions to reflect your style.",
      aAr: "بالتأكيد. يمكننا تعديل الأقمشة، فتحات العنق، الأكمام، والتطريزات أثناء جلسات الاستشارة الخاصة لتناسب ذوقك تماماً."
    },
    {
      qEn: "What is your private consultation experience like?",
      qAr: "كيف تسير تجربة جلسة الاستشارة الخاصة؟",
      aEn: "During your private consultation in our Nişantaşı atelier or online, you will collaborate with our designer to discover fabrics and map out your gown.",
      aAr: "خلال جلستك الخاصة في أتيليه عثمان بيه أو عبر الإنترنت، ستتعاونين مباشرة مع مصممتنا لتجربة الخامات ورسم مخطط الفستان."
    }
  ];

  return (
    <section className="max-w-4xl mx-auto px-6 py-20">
      <div className="text-center mb-12">
        <span className="text-[0.62rem] font-extrabold uppercase tracking-[0.3em] text-[#C6A27A] block mb-2">
          {isRTL ? '✦ الأسئلة الشائعة ✦' : '✦ FREQUENTLY ASKED QUESTIONS ✦'}
        </span>
        <h2 className="text-3xl font-bold text-[#2b1b12]" style={{ fontFamily: isRTL ? "'Noto Naskh Arabic', 'Cairo', serif" : "'Cormorant Garamond', serif" }}>
          {isRTL ? 'الأسئلة الأكثر شيوعاً' : 'Common Questions'}
        </h2>
      </div>

      <div className="space-y-2">
        {faqs.map((faq, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: isRTL ? 30 : -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-30px' }}
            transition={{ duration: 0.55, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
            whileHover={{ x: isRTL ? -4 : 4 }}
            className="border-b border-[#e8dbd1] pb-4 cursor-default"
          >
            <button
              onClick={() => setOpenIndex(openIndex === i ? null : i)}
              className="w-full flex justify-between items-center text-start py-4 text-[#2b1b12] hover:text-[#C6A27A] transition-colors duration-300 focus:outline-none group"
            >
              <span className="font-bold text-base md:text-lg group-hover:tracking-wider transition-all duration-300"
                style={{ fontFamily: isRTL ? "'Cairo', sans-serif" : "'Cormorant Garamond', serif", fontSize: isRTL ? '1rem' : '1.15rem' }}>
                {isRTL ? faq.qAr : faq.qEn}
              </span>
              <motion.div
                animate={{ rotate: openIndex === i ? 180 : 0 }}
                transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                className="shrink-0 w-8 h-8 rounded-full border border-[#C6A27A]/30 flex items-center justify-center text-[#C6A27A] group-hover:bg-[#C6A27A]/10 transition-colors duration-300 ms-4"
              >
                <ChevronDown size={15} />
              </motion.div>
            </button>
            <AnimatePresence initial={false}>
              {openIndex === i && (
                <motion.div
                  initial={{ height: 0, opacity: 0, y: -8 }}
                  animate={{ height: 'auto', opacity: 1, y: 0 }}
                  exit={{ height: 0, opacity: 0, y: -8 }}
                  transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                  className="overflow-hidden"
                >
                  <p className="text-sm md:text-base text-[#8a7b71] leading-relaxed pb-4 ps-1"
                    style={{ fontFamily: isRTL ? "'Cairo', sans-serif" : 'inherit' }}>
                    {isRTL ? faq.aAr : faq.aEn}
                  </p>

                  {i === 0 && (
                    <motion.div
                      animate={{
                        scale: [1, 1.015, 1],
                        borderColor: ['rgba(198,162,122,0.3)', 'rgba(198,162,122,0.65)', 'rgba(198,162,122,0.3)'],
                        boxShadow: [
                          '0 4px 12px rgba(198,162,122,0.05)',
                          '0 8px 24px rgba(198,162,122,0.15)',
                          '0 4px 12px rgba(198,162,122,0.05)',
                        ],
                      }}
                      transition={{ repeat: Infinity, duration: 2.8, ease: 'easeInOut' }}
                      className="mb-4 flex items-center gap-3 px-5 py-3 rounded-xl bg-[#C6A27A]/5 border text-xs font-bold text-[#8f6b42]"
                    >
                      <span className="relative flex h-2.5 w-2.5 shrink-0">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#C6A27A] opacity-75" />
                        <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#C6A27A]" />
                      </span>
                      <span style={{ fontFamily: isRTL ? "'Cairo', sans-serif" : 'inherit' }}>
                        {isRTL
                          ? 'أولوية للحجز المسبق | متوفر خدمة تفصيل عاجل للحالات الطارئة'
                          : 'Priority for Early Booking | Express Crafting Available for Urgent Dates'}
                      </span>
                    </motion.div>
                  )}
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default function Home() {
  const { i18n } = useTranslation();
  const isRTL = i18n.language === 'ar';

  return (
    <>
      {/* 1. Cinematic Hero */}
      <HeroSection />

      {/* 2. Atelier Features (Cards moved down from Hero) */}
      <AtelierFeatures />

      {/* 3. Heritage Story */}
      <StorytellingSection />


      {/* 5. Wedding Gowns Preview — 1 row (4 columns) */}
      <GownSection type="wedding" isRTL={isRTL} />

      {/* Divider */}
      <div className="max-w-5xl mx-auto px-6">
        <div className="border-t border-[#e8dbd1]" />
      </div>

      {/* 6. Evening Gowns Preview — 1 row (4 columns) */}
      <GownSection type="evening" isRTL={isRTL} />

      {/* 7. Brides Social Proof & Testimonials (Placed after the gowns cards) */}
      <TestimonialsSlider />

      {/* 8. FAQ Section */}
      <FAQSection isRTL={isRTL} />
    </>
  );
}
