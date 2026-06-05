import { useState, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useTransform, useSpring } from 'framer-motion';
import { Clock, ArrowRight, Sparkles, BookOpen, Heart, Calendar } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

// All bridal/fashion editorial images from Pexels
const IMGS = {
  featured: 'https://images.pexels.com/photos/1043902/pexels-photo-1043902.jpeg?auto=compress&cs=tinysrgb&w=1600',
  a1:       'https://images.pexels.com/photos/1024993/pexels-photo-1024993.jpeg?auto=compress&cs=tinysrgb&w=900',
  a2:       'https://images.pexels.com/photos/265722/pexels-photo-265722.jpeg?auto=compress&cs=tinysrgb&w=900',
  a3:       'https://images.pexels.com/photos/2955375/pexels-photo-2955375.jpeg?auto=compress&cs=tinysrgb&w=900',
  a4:       'https://images.pexels.com/photos/1755428/pexels-photo-1755428.jpeg?auto=compress&cs=tinysrgb&w=900',
};

// Luxury Bilingual copy for Vogue-tier Editorial feeling
const localCopy = {
  en: {
    hero: {
      preTitle: "✦ GLAMOUR CHRONICLES ✦",
      title: "The Journal",
      subtitle: "Stories of love, style guides, and an exclusive look behind the heavy oak doors of our Nişantaşı atelier.",
    },
    featured: {
      tag: "✦ COVER STORY ✦",
      title: "The Evolution of the Modern Bridal Veil",
      desc: "Explore how this traditional accessory has been reinvented for the contemporary bride, combining ancient heritage with modern architectural draping and custom hand-embellished pearl tulle.",
      date: "November 02, 2026",
      read: "8 min read"
    },
    categories: {
      all: "All Stories",
      style: "Style Guides",
      brides: "Real Brides",
      seams: "Behind the Seams",
      trends: "Trends"
    },
    articles: [
      {
        id: 1,
        catKey: "style",
        cat: "Style Guide",
        title: "Choosing the Perfect Silhouette for Your Body Type",
        desc: "A masterclass in proportions, corsetry, and necklines to help you select a dress that sculpts and celebrates your form.",
        date: "October 12, 2026",
        image: IMGS.a1,
        readMin: 5
      },
      {
        id: 2,
        catKey: "brides",
        cat: "Real Brides",
        title: "A Tuscan Dream: Sophia & Marco's Vintage Wedding",
        desc: "Step inside a breathtaking estate in Florence where Sophia wore a custom silk-chiffon Glamour gown under olive branches.",
        date: "September 28, 2026",
        image: IMGS.a2,
        readMin: 7
      },
      {
        id: 3,
        catKey: "seams",
        cat: "Behind the Seams",
        title: "The Making of the 'Spring Reverie' Collection",
        desc: "An exclusive look at the sketchbooks, moodboards, and over 800 hours of handwork that shaped our newest line.",
        date: "September 15, 2026",
        image: IMGS.a3,
        readMin: 4
      },
      {
        id: 4,
        catKey: "trends",
        cat: "Trends",
        title: "Why Minimalist Bridal Wear is Here to Stay",
        desc: "Exploring the rise of unembellished silk column gowns, sharp tailoring, and Stark white architectural aesthetics.",
        date: "August 30, 2026",
        image: IMGS.a4,
        readMin: 6
      }
    ],
    buttons: {
      readMore: "Read Story",
      loadMore: "Load More Stories"
    }
  },
  ar: {
    hero: {
      preTitle: "✦ مجلة دار جلامور ✦",
      title: "أوراق إبداعية",
      subtitle: "قصص حب خالدة، أدلة تنسيق مخصصة، ونظرة حصرية خلف الأبواب المهيبة لمشغلنا في نيشانتاشي.",
    },
    featured: {
      tag: "✦ مقال الغلاف المميز ✦",
      title: "تطور طرحة الزفاف العصرية",
      desc: "اكتشفي كيف تم إعادة ابتكار هذا الإكسسوار التقليدي للعروس المعاصرة، ليجمع بين الإرث العتيق والقصّات الهندسية العصرية المبتكرة مع حبات اللؤلؤ المخيطة يدوياً.",
      date: "02 نوفمبر 2026",
      read: "٨ دقائق للقراءة"
    },
    categories: {
      all: "جميع المقالات",
      style: "أدلة التنسيق",
      brides: "عرائسنا حقيقيات",
      seams: "خلف الكواليس",
      trends: "أحدث الصيحات"
    },
    articles: [
      {
        id: 1,
        catKey: "style",
        cat: "دليل التنسيق",
        title: "اختيار القصة المثالية لشكل جسمكِ",
        desc: "دليل احترافي في النسب الهندسية، الكورسيه المدمج، وفتحات الصدر لمساعدتكِ في اختيار فستان ينحت قوامكِ ويثني على جمالكِ الطبيعي.",
        date: "12 أكتوبر 2026",
        image: IMGS.a1,
        readMin: 5
      },
      {
        id: 2,
        catKey: "brides",
        cat: "عرائسنا",
        title: "حلم توسكاني: زفاف صوفيا وماركو الكلاسيكي",
        desc: "ألقي نظرة داخل قصر عتيق في فلورنسا حيث تألقت صوفيا بفستان مخصص من الشيفون الحريري من جلامور تحت ظلال أشجار الزيتون الساحرة.",
        date: "28 سبتمبر 2026",
        image: IMGS.a2,
        readMin: 7
      },
      {
        id: 3,
        catKey: "seams",
        cat: "خلف الكواليس",
        title: "كواليس تصميم مجموعة 'أحلام الربيع'",
        desc: "نظرة حصرية على دفاتر الرسم، لوحات الإلهام، وأكثر من 800 ساعة من العمل اليدوي الدقيق الذي شكّل مجموعتنا الأحدث.",
        date: "15 سبتمبر 2026",
        image: IMGS.a3,
        readMin: 4
      },
      {
        id: 4,
        catKey: "trends",
        cat: "أحدث الصيحات",
        title: "لماذا ستبقى أزياء الزفاف البسيطة هي الأجمل",
        desc: "دراسة حول تطور الفساتين الحريرية العمودية البسيطة، والقصّات الحادة، وجمال البنية الهندسية ذات البياض الناصع الخالي من التكلف.",
        date: "30 أغسطس 2026",
        image: IMGS.a4,
        readMin: 6
      }
    ],
    buttons: {
      readMore: "اقرئي المقال كاملاً",
      loadMore: "تصفح المزيد من القصص"
    }
  }
};

// Custom Smoke Reveal Animation Definition
const smokeReveal = {
  initial: { opacity: 0, filter: 'blur(20px)', scale: 1.04 },
  whileInView: { opacity: 1, filter: 'blur(0px)', scale: 1 },
  viewport: { once: true, margin: '-60px' },
  transition: { duration: 1.2, ease: [0.22, 1, 0.36, 1] }
};

// Custom Text Reveal Animation Definition
const textReveal = {
  initial: { opacity: 0, y: 32, filter: 'blur(4px)' },
  whileInView: { opacity: 1, y: 0, filter: 'blur(0px)' },
  viewport: { once: true, margin: '-40px' },
  transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] }
};

export default function Journal() {
  const { i18n } = useTranslation();
  const currentLang = i18n.language === 'ar' ? 'ar' : 'en';
  const copy = localCopy[currentLang];
  const isRtl = currentLang === 'ar';

  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [favorites, setFavorites] = useState<Set<number>>(new Set());

  // Refs for scroll parallax on Featured Image
  const featuredRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress: featuredScroll } = useScroll({
    target: featuredRef,
    offset: ['start end', 'end start']
  });
  const featuredImgY = useTransform(featuredScroll, [0, 1], ['-6%', '6%']);
  const featuredImgSpringY = useSpring(featuredImgY, { stiffness: 45, damping: 15 });

  const toggleFavorite = (id: number, e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setFavorites(prev => {
      const n = new Set(prev);
      n.has(id) ? n.delete(id) : n.add(id);
      return n;
    });
  };

  // Filter logic
  const filteredArticles = selectedCategory === 'all'
    ? copy.articles
    : copy.articles.filter(art => art.catKey === selectedCategory);

  return (
    <div className="min-h-screen pt-24 pb-20 selection:bg-amber-100 selection:text-ink bg-[#F5F1EC] text-[#2A1E1A] overflow-x-hidden">
      
      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
         1. CINEMATIC JOURNAL HEADER
         ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section className="py-16 md:py-24 relative text-center px-6 max-w-5xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.0, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="text-[0.65rem] font-bold uppercase tracking-[0.38em] text-[#C6A27A] mb-4 block">
            {copy.hero.preTitle}
          </span>
          <h1 className="font-serif text-5xl md:text-7xl text-[#2A1E1A] mb-6 leading-tight tracking-wide font-light">
            {copy.hero.title}
          </h1>
          <div className="w-12 h-[1px] bg-[#C6A27A] mx-auto my-6" />
          <p className="text-[#8f7d6d] font-sans font-light text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
            {copy.hero.subtitle}
          </p>
        </motion.div>
      </section>

      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
         2. SPECTACULAR COVER STORY (FEATURED POST)
         ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section ref={featuredRef} className="max-w-7xl mx-auto px-6 lg:px-16 mb-28">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          className="relative rounded-[40px] overflow-hidden shadow-2xl bg-white border border-[#dfd7cc] grid lg:grid-cols-12"
        >
          {/* Cover Story Left/Right Image (6 cols) */}
          <div className="lg:col-span-7 h-[45vh] lg:h-[75vh] relative overflow-hidden">
            <motion.div 
              style={{ y: featuredImgSpringY }}
              className="absolute inset-0 h-[115%] w-full"
            >
              <img 
                src={IMGS.featured} 
                alt={copy.featured.title} 
                className="w-full h-full object-cover" 
              />
            </motion.div>
            
            {/* Atmospheric overlay */}
            <div className="absolute inset-0 bg-[#2A1E1A]/20" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#2A1E1A]/70 via-transparent to-transparent hidden lg:block" />

            {/* Float badge indicator */}
            <div className="absolute top-6 left-6 z-10">
              <span className="badge glass text-[0.6rem] font-bold tracking-widest text-[#2A1E1A] border-white/40">
                {copy.featured.tag}
              </span>
            </div>
          </div>

          {/* Cover Story Text Box (5 cols) */}
          <div className="lg:col-span-5 p-8 md:p-14 flex flex-col justify-center bg-[#FBF8F4] relative">
            {/* Elegant Inner Frame lines */}
            <div className="absolute inset-4 rounded-[28px] border border-[#dfd7cc]/30 pointer-events-none" />
            <div className="absolute inset-6 rounded-[24px] border border-[#C6A27A]/10 pointer-events-none" />

            <div className="relative z-10 space-y-6">
              
              {/* Category */}
              <div className="flex items-center gap-3">
                <Sparkles size={13} className="text-[#C6A27A] animate-pulse" />
                <span className="text-[0.62rem] font-bold uppercase tracking-[0.24em] text-[#C6A27A]">
                  {currentLang === 'ar' ? 'مقال افتتاحي رئيسي' : 'Editorial Masterpiece'}
                </span>
              </div>

              {/* Title */}
              <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-[#2A1E1A] leading-[1.15] font-light">
                {copy.featured.title}
              </h2>

              {/* Desc */}
              <p className="text-[#8f7d6d] font-sans font-light text-sm md:text-base leading-relaxed">
                {copy.featured.desc}
              </p>

              {/* Meta */}
              <div className="flex items-center gap-6 text-[0.78rem] text-[#8f7d6d] pt-4 border-t border-[#dfd7cc]">
                <span className="flex items-center gap-2">
                  <Calendar size={13} className="text-[#C6A27A]" />
                  {copy.featured.date}
                </span>
                <span className="flex items-center gap-2">
                  <Clock size={13} className="text-[#C6A27A]" />
                  {copy.featured.read}
                </span>
              </div>

              {/* Action Button */}
              <div className="pt-6">
                <Link
                  to="#"
                  className="btn-primary inline-flex px-8 py-3.5 text-[0.65rem] tracking-[0.22em] font-semibold rounded-full text-white bg-[#2A1E1A] hover:bg-[#C6A27A] hover:shadow-gold transition-all duration-300 items-center gap-2.5"
                >
                  <BookOpen size={13} />
                  <span>{copy.buttons.readMore}</span>
                </Link>
              </div>

            </div>
          </div>
        </motion.div>
      </section>

      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
         3. LATEST STORIES GRID & INTERACTIVE CATEGORIES
         ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section className="max-w-7xl mx-auto px-6 lg:px-16">
        
        {/* Category Filter Title & Menu */}
        <div className="flex flex-col md:flex-row justify-between items-center md:items-end mb-12 pb-5 border-b border-[#dfd7cc]">
          <h3 className="font-serif text-3xl text-[#2A1E1A] font-light mb-6 md:mb-0">
            {currentLang === 'ar' ? 'تصفح القصص والإلهام' : 'Latest Stories'}
          </h3>
          
          {/* Custom Minimalist Category Selectors */}
          <div className="flex flex-wrap justify-center gap-6 text-[0.65rem] font-bold uppercase tracking-widest text-[#8f7d6d]">
            {[
              { id: 'all', label: copy.categories.all },
              { id: 'style', label: copy.categories.style },
              { id: 'brides', label: copy.categories.brides },
              { id: 'seams', label: copy.categories.seams },
              { id: 'trends', label: copy.categories.trends }
            ].map(cat => {
              const isActive = selectedCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`pb-2 transition-all relative ${
                    isActive ? 'text-[#2A1E1A] font-bold' : 'hover:text-[#2A1E1A]'
                  }`}
                >
                  <span>{cat.label}</span>
                  {isActive && (
                    <motion.div 
                      layoutId="activeTabLine"
                      className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-[#C6A27A]"
                    />
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {/* Stories Grid */}
        <AnimatePresence mode="wait">
          <motion.div 
            key={selectedCategory}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.4 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16"
          >
            {filteredArticles.map((art, i) => (
              <motion.div 
                key={art.id}
                {...smokeReveal}
                transition={{ delay: (i % 2) * 0.12, duration: 1.0 }}
                className="group cursor-pointer flex flex-col"
              >
                {/* Photo Card Frame */}
                <div className="aspect-[4/3] rounded-[24px] overflow-hidden mb-6 shadow-soft relative">
                  <img 
                    src={art.image} 
                    alt={art.title} 
                    className="w-full h-full object-cover transition-transform duration-[1.8s] group-hover:scale-105" 
                  />
                  <div className="absolute inset-0 bg-[#2A1E1A]/10 group-hover:bg-[#2A1E1A]/20 transition-all" />
                  
                  {/* Category overlay label */}
                  <div className="absolute top-4 left-4">
                    <span className="badge glass text-[0.58rem] font-bold uppercase tracking-wider text-[#2A1E1A] border-white/40">
                      {art.cat}
                    </span>
                  </div>

                  {/* Micro Favorites overlay */}
                  <button 
                    onClick={(e) => toggleFavorite(art.id, e)}
                    className={`w-9 h-9 rounded-full flex items-center justify-center absolute top-4 right-4 z-10 glass border border-white/40 shadow-sm transition-all ${
                      favorites.has(art.id) ? 'bg-[#C6A27A] border-[#C6A27A]' : 'bg-white/70 hover:bg-white'
                    }`}
                  >
                    <Heart 
                      size={14}
                      fill={favorites.has(art.id) ? 'white' : 'none'}
                      style={{ color: favorites.has(art.id) ? 'white' : 'var(--color-ink)' }}
                    />
                  </button>
                </div>

                {/* Article Info */}
                <div className="space-y-3 flex-1 flex flex-col">
                  
                  {/* Meta date & read time */}
                  <div className="flex items-center gap-5 text-xs text-[#8f7d6d]">
                    <span className="flex items-center gap-1.5">
                      <Calendar size={12} className="text-[#C6A27A]" />
                      {art.date}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Clock size={12} className="text-[#C6A27A]" />
                      {art.readMin} {isRtl ? 'دقائق' : 'min'}
                    </span>
                  </div>

                  {/* Title */}
                  <h4 className="font-serif text-2xl lg:text-3xl text-[#2A1E1A] leading-snug group-hover:text-[#C6A27A] transition-colors duration-400 font-light flex-1">
                    {art.title}
                  </h4>

                  {/* Desc */}
                  <p className="text-sm text-[#8f7d6d] font-sans font-light leading-relaxed">
                    {art.desc}
                  </p>

                  {/* Read story link with arrow micro-interaction */}
                  <div className="pt-3">
                    <span
                      className="inline-flex items-center gap-2.5 text-[0.62rem] tracking-[0.22em] font-semibold uppercase text-[#2A1E1A] group-hover:text-[#C6A27A] border-b border-[#2A1E1A]/20 group-hover:border-[#C6A27A] pb-1 duration-300"
                    >
                      <span>{copy.buttons.readMore}</span>
                      <ArrowRight size={11} className={`transition-transform duration-300 ${
                        isRtl ? 'rotate-180 group-hover:-translate-x-1.5' : 'group-hover:translate-x-1.5'
                      }`} />
                    </span>
                  </div>

                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Load More Button */}
        {filteredArticles.length > 0 && (
          <div className="text-center mt-24">
            <button className="btn-secondary inline-flex px-8 py-4 rounded-full text-[0.62rem] tracking-[0.22em] font-semibold border-1.5 border-[#2A1E1A] hover:bg-[#2A1E1A] hover:text-white transition-all duration-300 shadow-sm">
              {copy.buttons.loadMore}
            </button>
          </div>
        )}
      </section>

    </div>
  );
}
