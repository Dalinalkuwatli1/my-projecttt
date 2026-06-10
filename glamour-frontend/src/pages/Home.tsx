import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { ArrowLeft, ArrowRight, Heart } from 'lucide-react';
import { useState } from 'react';
import HeroSection from '../components/home/HeroSection';
import StorytellingSection from '../components/home/StorytellingSection';
import AtelierExperience from '../components/home/AtelierExperience';
import { GOWNS_DATA } from '../data/gowns';

const GOLD = '#C6A27A';

import { useNavigate } from 'react-router-dom';

function GownPreviewCard({ gown, isRTL }: { gown: typeof GOWNS_DATA[0]; isRTL: boolean }) {
  const [fav, setFav] = useState(false);
  const navigate = useNavigate();

  return (
    <motion.div
      whileHover={{ y: -6 }}
      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
      onClick={() => navigate(`/collections?type=${gown.type}`)}
      className="group relative rounded-[20px] overflow-hidden bg-[#F5F1EC] shadow-sm hover:shadow-xl transition-shadow duration-500 border border-[#e8dbd1]/70 cursor-pointer"
    >
      {/* Image */}
      <div className="aspect-[3/4] overflow-hidden relative">
        <img
          src={gown.image}
          alt={isRTL ? gown.name.ar : gown.name.en}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.06]"
          loading="lazy"
        />
        {/* Heart */}
        <button
          onClick={(e) => { e.stopPropagation(); setFav(!fav); }}
          className={`absolute top-3 right-3 w-8 h-8 rounded-full flex items-center justify-center border shadow-sm transition-all z-10 ${
            fav ? 'bg-[#C6A27A] border-[#C6A27A]' : 'bg-white/85 border-white/60 hover:bg-white'
          }`}
        >
          <Heart size={12} fill={fav ? 'white' : 'none'} strokeWidth={1.8} style={{ color: fav ? 'white' : '#2b1b12' }} />
        </button>
        {/* Category badge */}
        <span className="absolute bottom-3 left-3 bg-black/50 text-white text-[0.58rem] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full backdrop-blur-sm z-10">
          {isRTL ? gown.category.ar : gown.category.en}
        </span>
      </div>
      {/* Info */}
      <div className="p-4 space-y-1">
        <h3 className="text-sm font-bold text-[#2b1b12] leading-snug" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
          {isRTL ? gown.name.ar : gown.name.en}
        </h3>
        <p className="text-[0.62rem] text-[#8a7b71] leading-relaxed">
          {isRTL ? 'تفصيل يدوي · حسب المقاس' : 'Handcrafted · Bespoke'}
        </p>
        <p className="text-[#C6A27A] text-xs font-bold tracking-wide">
          {isRTL ? `ابتداءً من ${gown.price.toLocaleString()}$` : `From $${gown.price.toLocaleString()}`}
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
  const gowns = GOWNS_DATA.filter((g) => g.type === type).slice(0, 8);
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
        <Link
          to={`/collections?type=${type}`}
          className="group hidden md:flex items-center gap-2 text-[0.68rem] font-bold uppercase tracking-wider text-[#2b1b12] hover:text-[#C6A27A] transition-colors"
        >
          <span>{isRTL ? 'المزيد' : 'See More'}</span>
          {isRTL
            ? <ArrowLeft size={16} className="transition-transform group-hover:-translate-x-1" />
            : <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
          }
        </Link>
      </div>

      {/* 4-column grid, 2 rows = 8 cards */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
        {gowns.map((g) => (
          <GownPreviewCard key={g.id} gown={g} isRTL={isRTL} />
        ))}
      </div>

      {/* Mobile see more */}
      <div className="md:hidden mt-8 text-center">
        <Link
          to={`/collections?type=${type}`}
          className="inline-flex items-center gap-2 rounded-full font-bold uppercase tracking-wider py-3 px-8 text-[0.68rem] text-white transition-all"
          style={{ background: '#2b1b12' }}
          onMouseEnter={e => (e.currentTarget as HTMLElement).style.background = GOLD}
          onMouseLeave={e => (e.currentTarget as HTMLElement).style.background = '#2b1b12'}
        >
          {isRTL ? 'المزيد' : 'See More'}
          {isRTL ? <ArrowLeft size={14} /> : <ArrowRight size={14} />}
        </Link>
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

      {/* 2. Heritage Story */}
      <StorytellingSection />

      {/* 3. Wedding Gowns Preview — 2 rows × 4 columns */}
      <GownSection type="wedding" isRTL={isRTL} />

      {/* Divider */}
      <div className="max-w-5xl mx-auto px-6">
        <div className="border-t border-[#e8dbd1]" />
      </div>

      {/* 4. Evening Gowns Preview — 2 rows × 4 columns */}
      <GownSection type="evening" isRTL={isRTL} />

      {/* 5. Atelier Experience */}
      <AtelierExperience />
    </>
  );
}
