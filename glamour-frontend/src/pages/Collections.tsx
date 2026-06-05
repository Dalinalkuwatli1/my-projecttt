import { motion, AnimatePresence, useScroll, useTransform, useSpring } from 'framer-motion';
import { Heart, X, SlidersHorizontal, ChevronDown, ChevronLeft, ChevronRight, Sparkles, Gem, Clock, ShieldCheck, ShoppingBag } from 'lucide-react';
import { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useCart } from '../context/CartContext';
import { GOWNS_DATA } from '../data/gowns';
import type { Gown } from '../data/gowns';

// Luxury Collection Banners (Hero sections)
const HERO_IMAGES = {
  c1: 'https://images.pexels.com/photos/1024993/pexels-photo-1024993.jpeg?auto=compress&cs=tinysrgb&w=1200',
  c2: 'https://images.pexels.com/photos/265722/pexels-photo-265722.jpeg?auto=compress&cs=tinysrgb&w=1200',
  c3: 'https://images.pexels.com/photos/1755428/pexels-photo-1755428.jpeg?auto=compress&cs=tinysrgb&w=1200',
};

// Luxury Bilingual copy for Collection Intros
const localCopy = {
  en: {
    hero: {
      preTitle: "✦ THE COUTURE GALLERY ✦",
      title: "The Collections",
      subtitle: "Discover our exclusive range of bridal wear, where each collection tells a unique story of love, artistry, and elegance.",
    },
    items: {
      c1: {
        tag: "✦ COLLECTION I ✦",
        name: "Spring Reverie 2027",
        desc: "A celebration of floral motifs, lightweight tulle, and romantic silhouettes. Designed for the ethereal bride who dreams in pastel gardens and soft whispers of spring lace.",
      },
      c2: {
        tag: "✦ COLLECTION II ✦",
        name: "Classic Elegance",
        desc: "Timeless designs featuring heavy satin, intricate hand-placed lace, and architectural structure. Sculpted for the regal bride seeking majestic presence and timeless poise.",
      },
      c3: {
        tag: "✦ COLLECTION III ✦",
        name: "Modern Minimalist",
        desc: "Clean lines, stark whites, and unembellished perfection. Tailored from stretch crepe and silk satin for the contemporary bride who commands elegance through stark simplicity.",
      }
    },
    gallery: {
      title: "The Atelier Gallery",
      subtitle: "Browse our signature creations, handcrafted for the modern bride.",
    },
    quickViewModal: {
      chooseColor: "Select Tone",
      chooseSize: "Select Size",
      colors: {
        white: "Pure White",
        offWhite: "Off-White"
      },
      shipping: "Free shipping on orders over $3,000",
      fitting: "Includes 2 complimentary fitting sessions",
      added: "Added to Bag ✔",
      add: "Add to Bag"
    }
  },
  ar: {
    hero: {
      preTitle: "✦ معرض الأزياء الراقية ✦",
      title: "المجموعات الحصرية",
      subtitle: "اكتشفي تشكيلتنا الاستثنائية من فساتين الزفاف، حيث تروي كل مجموعة قصة فريدة من الحب، الفن، والأناقة الأبدية.",
    },
    items: {
      c1: {
        tag: "✦ المجموعة الأولى ✦",
        name: "أحلام الربيع 2027",
        desc: "قصيدة حب منسوجة من التول الخفيف والزخارف الوردية المجسمة. صُممت خصيصاً للعروس الحالمة التي ترغب بإطلالة ناعمة تحاكي حدائق الربيع الساحرة.",
      },
      c2: {
        tag: "✦ المجموعة الثانية ✦",
        name: "أناقة كلاسيكية خالدة",
        desc: "تصاميم ملكية تتميز بالساتان الدوقس الثقيل، والدانتيل المعقد، والبنية الهندسية الكورسيه المشدودة. صُممت للعروس التي تعشق الفخامة المهيبة والتفاصيل الخالدة.",
      },
      c3: {
        tag: "✦ المجموعة الثالثة ✦",
        name: "بساطة عصرية راقية",
        desc: "خطوط هندسية نظيفة، بياض ناصع، وكمال خالٍ من التكلف. صُنعت من كريب الحرير والساتان الانسيابي للعروس العصرية التي تفرض حضورها بأبسط التفاصيل.",
      }
    },
    gallery: {
      title: "معرض المشغل الرئيسي",
      subtitle: "تصفحي تصاميمنا الحصرية، المصنوعة يدوياً خصيصاً لتتوج ليلة العمر بالكمال.",
    },
    quickViewModal: {
      chooseColor: "اختر درجة اللون",
      chooseSize: "اختر المقاس الملائم",
      colors: {
        white: "أبيض ناصع",
        offWhite: "أوف وايت"
      },
      shipping: "شحن مجاني لكافة الطلبات فوق 3000$",
      fitting: "جلسات قياس وتعديل مجانية مع خبير التنسيق الخاص بكِ",
      added: "تمت الإضافة ✔",
      add: "إضافة إلى الحقيبة الفاخرة"
    }
  }
};

// Custom Smoke Reveal Animation Definition
const smokeReveal = {
  initial: { opacity: 0, filter: 'blur(20px)', scale: 1.05 },
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

export default function Collections() {
  const { t, i18n } = useTranslation();
  const currentLang = i18n.language === 'ar' ? 'ar' : 'en';
  const copy = localCopy[currentLang];
  const isRTL = currentLang === 'ar';

  const [modal, setModal] = useState<Gown | null>(null);
  const [favorites, setFavorites] = useState<Set<string>>(new Set());
  const [color, setColor] = useState<'white' | 'offWhite'>('white');
  const [size, setSize] = useState<'S' | 'M' | 'L'>('M');
  const [added, setAdded] = useState(false);

  // FILTER STATES
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedColor, setSelectedColor] = useState<string | null>(null);
  const [selectedSize, setSelectedSize] = useState<string | null>(null);
  const [priceRange, setPriceRange] = useState<string | null>(null);
  const [activeFilterTab, setActiveFilterTab] = useState<'category' | 'color' | 'size' | 'price' | null>(null);

  // PAGINATION STATES
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;

  const { addToCart: addGlobalToCart } = useCart();

  // Scroll Parallax references for Editorial Showcase
  const showcaseRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress: showcaseScroll } = useScroll({
    target: showcaseRef,
    offset: ['start end', 'end start']
  });
  const floatingOffset = useTransform(showcaseScroll, [0, 1], ['8%', '-8%']);
  const floatingSpringY = useSpring(floatingOffset, { stiffness: 45, damping: 18 });

  const toggleFav = (id: string, e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    setFavorites(prev => {
      const n = new Set(prev);
      n.has(id) ? n.delete(id) : n.add(id);
      return n;
    });
  };

  const openModal = (g: Gown) => {
    setModal(g);
    setColor('white');
    setSize('M');
    setAdded(false);
  };

  const handleAddToCartSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!modal) return;
    addGlobalToCart({
      id: modal.id,
      nameKey: modal.nameKey,
      catKey: modal.catKey,
      price: modal.price,
      image: modal.image,
      color,
      size
    });
    setAdded(true);
    setTimeout(() => {
      setAdded(false);
      setModal(null);
    }, 1800);
  };

  const collections = [
    { id: 'c1', tag: copy.items.c1.tag, name: copy.items.c1.name, desc: copy.items.c1.desc, image: HERO_IMAGES.c1 },
    { id: 'c2', tag: copy.items.c2.tag, name: copy.items.c2.name, desc: copy.items.c2.desc, image: HERO_IMAGES.c2 },
    { id: 'c3', tag: copy.items.c3.tag, name: copy.items.c3.name, desc: copy.items.c3.desc, image: HERO_IMAGES.c3 },
  ];

  // FILTER LOGIC
  const filteredGowns = GOWNS_DATA.filter(gown => {
    if (selectedCategory && gown.category.en !== selectedCategory && gown.category.ar !== selectedCategory) {
      return false;
    }
    if (selectedColor && !gown.colors.includes(selectedColor)) {
      return false;
    }
    if (selectedSize && !gown.sizes.includes(selectedSize)) {
      return false;
    }
    if (priceRange) {
      if (priceRange === 'low' && gown.price >= 1500) return false;
      if (priceRange === 'mid' && (gown.price < 1500 || gown.price > 2500)) return false;
      if (priceRange === 'high' && gown.price <= 2500) return false;
    }
    return true;
  });

  // PAGINATION LOGIC
  const totalPages = Math.ceil(filteredGowns.length / itemsPerPage) || 1;
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentGowns = filteredGowns.slice(indexOfFirstItem, indexOfLastItem);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    const el = document.getElementById('gowns-gallery-section');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  // Reset page when filter changes
  const updateCategoryFilter = (val: string | null) => {
    setSelectedCategory(val);
    setCurrentPage(1);
    setActiveFilterTab(null);
  };

  const updateColorFilter = (val: string | null) => {
    setSelectedColor(val);
    setCurrentPage(1);
    setActiveFilterTab(null);
  };

  const updateSizeFilter = (val: string | null) => {
    setSelectedSize(val);
    setCurrentPage(1);
    setActiveFilterTab(null);
  };

  const updatePriceFilter = (val: string | null) => {
    setPriceRange(val);
    setCurrentPage(1);
    setActiveFilterTab(null);
  };

  const categoriesList = [
    { en: 'Ballgown', ar: 'منفوش' },
    { en: 'Mermaid', ar: 'حورية البحر' },
    { en: 'A-Line', ar: 'إيه لاين' },
    { en: 'Imperial', ar: 'إمبراطوري' },
    { en: 'Romantic', ar: 'رومانسي' },
    { en: 'Boho Chic', ar: 'بوهيمي أنيق' },
    { en: 'Modest Luxury', ar: 'فخامة محتشمة' }
  ];

  const colorsList = [
    { id: 'white', en: 'Pure White', ar: 'أبيض ناصع' },
    { id: 'offWhite', en: 'Off-White', ar: 'أوف وايت' }
  ];

  const sizesList = ['S', 'M', 'L'];

  const pricesList = [
    { id: 'low', en: 'Under $1,500', ar: 'أقل من 1,500$' },
    { id: 'mid', en: '$1,500 - $2,500', ar: '1,500$ - 2,500$' },
    { id: 'high', en: 'Over $2,500', ar: 'أكثر من 2,500$' }
  ];

  return (
    <div className="min-h-screen pt-24 pb-20 selection:bg-amber-100 selection:text-ink bg-[#F5F1EC] text-[#2A1E1A] overflow-x-hidden">
      
      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
         1. CINEMATIC PAGE HEADER
         ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section className="py-20 md:py-28 relative text-center px-6 max-w-5xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
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
         2. ASYMMETRICAL STORYBOOK COLLECTIONS
         ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section ref={showcaseRef} className="max-w-7xl mx-auto px-6 lg:px-16 space-y-36 lg:space-y-48 mb-36">
        {collections.map((col, i) => {
          const isEven = i % 2 === 0;
          return (
            <div 
              key={col.id}
              className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 lg:gap-24 items-center relative`}
            >
              {/* Background Glow Orb for depth */}
              <div className={`absolute w-[350px] h-[350px] rounded-full bg-amber-100/35 blur-[100px] pointer-events-none -z-10 ${
                isEven ? '-right-16 -top-12' : '-left-16 -top-12'
              }`} />

              {/* Layered Image Frame */}
              <div className="lg:w-1/2 w-full relative">
                {/* Master Image Frame */}
                <motion.div 
                  {...smokeReveal}
                  className="aspect-[3/4] overflow-hidden rounded-[24px] shadow-2xl relative group"
                >
                  <img 
                    src={col.image} 
                    alt={col.name} 
                    className="w-full h-full object-cover transition-transform duration-[1.8s] group-hover:scale-105" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#130d0b]/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                </motion.div>

                {/* Overlapping Floating badge card */}
                <motion.div 
                  style={{ y: floatingSpringY }}
                  className={`absolute p-6 rounded-[20px] glass shadow-lg max-w-[200px] hidden lg:block ${
                    isEven ? '-bottom-10 -right-10 translate-x-4' : '-bottom-10 -left-10 -translate-x-4'
                  }`}
                >
                  <Gem size={15} className="text-[#C6A27A] mb-3 animate-pulse" />
                  <p className="font-serif text-[0.8rem] italic text-[#2A1E1A] leading-relaxed">
                    "{currentLang === 'ar' ? 'فصل من الجمال الاستثنائي والخياطة الملكية.' : 'A chapter of pure elegance and royal handcraft.'}"
                  </p>
                </motion.div>
              </div>

              {/* Text Narrative */}
              <div className="lg:w-1/2 flex flex-col justify-center space-y-6">
                <motion.div {...textReveal}>
                  <span className="text-[0.62rem] font-bold uppercase tracking-[0.34em] text-[#C6A27A] block mb-3">
                    {col.tag}
                  </span>
                  <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-[#2A1E1A] font-light leading-snug mb-5">
                    {col.name}
                  </h2>
                  <p className="text-[#8f7d6d] font-sans font-light text-base md:text-lg leading-relaxed mb-8">
                    {col.desc}
                  </p>
                  
                  {/* Luxury Link Underline Animation */}
                  <Link
                    to="/book-appointment"
                    className="group inline-flex items-center gap-3 text-[0.65rem] tracking-[0.24em] font-semibold uppercase text-[#2A1E1A] hover:text-[#C6A27A] transition-colors border-b border-[#2A1E1A]/20 hover:border-[#C6A27A] pb-1.5 duration-300"
                  >
                    {currentLang === 'ar' ? 'احجزي تجربة القياس' : 'Book Fitting Session'}
                  </Link>
                </motion.div>
              </div>
            </div>
          );
        })}
      </section>

      <div className="max-w-7xl mx-auto px-6 lg:px-16 my-28">
        <hr className="border-t border-[#dfd7cc]/60" />
      </div>

      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
         3. ATMOSPHERIC GOWNS GALLERY & INTERACTIVE FILTERS
         ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section id="gowns-gallery-section" className="scroll-mt-28 max-w-7xl mx-auto px-6 lg:px-16">
        
        {/* Title */}
        <div className="text-center mb-16">
          <motion.div {...textReveal}>
            <span className="text-[0.62rem] font-bold uppercase tracking-[0.34em] text-[#C6A27A] block mb-3">
              ✦ {currentLang === 'ar' ? 'معرض التصاميم' : 'ATELIER CREATIONS'} ✦
            </span>
            <h2 className="font-serif text-4xl md:text-5xl text-[#2A1E1A] font-light">
              {copy.gallery.title}
            </h2>
            <p className="text-[#8f7d6d] font-sans font-light text-sm mt-4">
              {copy.gallery.subtitle}
            </p>
          </motion.div>
        </div>

        {/* BESPOKE BOUTIQUE FILTER BAR */}
        <div className="relative z-30 mb-12 pb-6 border-b border-[#dfd7cc]">
          <div className="flex flex-wrap items-center justify-between gap-6">
            
            {/* Filter icon label */}
            <div className="flex items-center gap-2.5 text-[0.68rem] font-bold uppercase tracking-widest text-[#8f7d6d]">
              <SlidersHorizontal size={14} className="text-[#C6A27A]" />
              <span>{isRTL ? 'خيارات التصفية الفاخرة' : 'Luxury Filters'}</span>
            </div>

            {/* Filter categories */}
            <div className="flex flex-wrap items-center gap-6 md:gap-8">
              {/* Category Filter */}
              <button
                onClick={() => setActiveFilterTab(activeFilterTab === 'category' ? null : 'category')}
                className={`flex items-center gap-1.5 hover:text-[#C6A27A] transition-colors text-[0.68rem] font-bold uppercase tracking-[0.16em] ${selectedCategory ? 'text-[#C6A27A]' : 'text-[#2A1E1A]'}`}
              >
                <span>{selectedCategory ? (isRTL ? `الفئة: ${selectedCategory}` : `Cat: ${selectedCategory}`) : (isRTL ? 'الفئة' : 'Category')}</span>
                <ChevronDown size={11} className={`transition-transform duration-300 ${activeFilterTab === 'category' ? 'rotate-180' : ''}`} />
              </button>

              {/* Color Filter */}
              <button
                onClick={() => setActiveFilterTab(activeFilterTab === 'color' ? null : 'color')}
                className={`flex items-center gap-1.5 hover:text-[#C6A27A] transition-colors text-[0.68rem] font-bold uppercase tracking-[0.16em] ${selectedColor ? 'text-[#C6A27A]' : 'text-[#2A1E1A]'}`}
              >
                <span>{selectedColor ? (isRTL ? `اللون: ${selectedColor === 'white' ? 'أبيض' : 'أوف وايت'}` : `Tone: ${selectedColor === 'white' ? 'White' : 'Off-White'}`) : (isRTL ? 'الدرجة' : 'Tone')}</span>
                <ChevronDown size={11} className={`transition-transform duration-300 ${activeFilterTab === 'color' ? 'rotate-180' : ''}`} />
              </button>

              {/* Size Filter */}
              <button
                onClick={() => setActiveFilterTab(activeFilterTab === 'size' ? null : 'size')}
                className={`flex items-center gap-1.5 hover:text-[#C6A27A] transition-colors text-[0.68rem] font-bold uppercase tracking-[0.16em] ${selectedSize ? 'text-[#C6A27A]' : 'text-[#2A1E1A]'}`}
              >
                <span>{selectedSize ? (isRTL ? `المقاس: ${selectedSize}` : `Size: ${selectedSize}`) : (isRTL ? 'المقاس' : 'Size')}</span>
                <ChevronDown size={11} className={`transition-transform duration-300 ${activeFilterTab === 'size' ? 'rotate-180' : ''}`} />
              </button>

              {/* Price Filter */}
              <button
                onClick={() => setActiveFilterTab(activeFilterTab === 'price' ? null : 'price')}
                className={`flex items-center gap-1.5 hover:text-[#C6A27A] transition-colors text-[0.68rem] font-bold uppercase tracking-[0.16em] ${priceRange ? 'text-[#C6A27A]' : 'text-[#2A1E1A]'}`}
              >
                <span>{priceRange ? (isRTL ? 'السعر: محدد' : 'Price: Fitted') : (isRTL ? 'السعر' : 'Price')}</span>
                <ChevronDown size={11} className={`transition-transform duration-300 ${activeFilterTab === 'price' ? 'rotate-180' : ''}`} />
              </button>
            </div>

          </div>

          {/* Filter Dropdowns Panels */}
          <AnimatePresence>
            {activeFilterTab && (
              <motion.div
                initial={{ opacity: 0, y: -8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.25, ease: 'easeOut' }}
                className="absolute left-0 right-0 mt-4 p-6 bg-white border border-[#dfd7cc] rounded-[20px] shadow-lg grid grid-cols-1 gap-6 z-40"
              >
                {/* Category Dropdown */}
                {activeFilterTab === 'category' && (
                  <div>
                    <h4 className="text-[0.62rem] font-bold uppercase tracking-wider text-[#8f7d6d] mb-4">{isRTL ? 'اختر الفئة' : 'Select Category'}</h4>
                    <div className="flex flex-wrap gap-2.5">
                      <button
                        onClick={() => updateCategoryFilter(null)}
                        className={`px-4 py-2 rounded-full text-xs transition-all border ${!selectedCategory ? 'bg-[#2A1E1A] text-white border-[#2A1E1A]' : 'bg-transparent text-[#2A1E1A] border-[#dfd7cc] hover:border-[#2A1E1A]'}`}
                      >
                        {isRTL ? 'الكل' : 'All Gowns'}
                      </button>
                      {categoriesList.map(cat => (
                        <button
                          key={cat.en}
                          onClick={() => updateCategoryFilter(isRTL ? cat.ar : cat.en)}
                          className={`px-4 py-2 rounded-full text-xs transition-all border ${selectedCategory === (isRTL ? cat.ar : cat.en) ? 'bg-[#2A1E1A] text-white border-[#2A1E1A]' : 'bg-transparent text-[#2A1E1A] border-[#dfd7cc] hover:border-[#2A1E1A]'}`}
                        >
                          {isRTL ? cat.ar : cat.en}
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {/* Color Dropdown */}
                {activeFilterTab === 'color' && (
                  <div>
                    <h4 className="text-[0.62rem] font-bold uppercase tracking-wider text-[#8f7d6d] mb-4">{isRTL ? 'اختر درجة اللون' : 'Select Tone'}</h4>
                    <div className="flex flex-wrap gap-2.5">
                      <button
                        onClick={() => updateColorFilter(null)}
                        className={`px-4 py-2 rounded-full text-xs transition-all border ${!selectedColor ? 'bg-[#2A1E1A] text-white border-[#2A1E1A]' : 'bg-transparent text-[#2A1E1A] border-[#dfd7cc] hover:border-[#2A1E1A]'}`}
                      >
                        {isRTL ? 'الكل' : 'All Tones'}
                      </button>
                      {colorsList.map(col => (
                        <button
                          key={col.id}
                          onClick={() => updateColorFilter(col.id)}
                          className={`px-4 py-2 rounded-full text-xs transition-all border ${selectedColor === col.id ? 'bg-[#2A1E1A] text-white border-[#2A1E1A]' : 'bg-transparent text-[#2A1E1A] border-[#dfd7cc] hover:border-[#2A1E1A]'}`}
                        >
                          {isRTL ? col.ar : col.en}
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {/* Size Dropdown */}
                {activeFilterTab === 'size' && (
                  <div>
                    <h4 className="text-[0.62rem] font-bold uppercase tracking-wider text-[#8f7d6d] mb-4">{isRTL ? 'اختر المقاس' : 'Select Size'}</h4>
                    <div className="flex flex-wrap gap-2.5">
                      <button
                        onClick={() => updateSizeFilter(null)}
                        className={`px-4 py-2 rounded-full text-xs transition-all border ${!selectedSize ? 'bg-[#2A1E1A] text-white border-[#2A1E1A]' : 'bg-transparent text-[#2A1E1A] border-[#dfd7cc] hover:border-[#2A1E1A]'}`}
                      >
                        {isRTL ? 'الكل' : 'All Sizes'}
                      </button>
                      {sizesList.map(sz => (
                        <button
                          key={sz}
                          onClick={() => updateSizeFilter(sz)}
                          className={`px-4 py-2 rounded-full text-xs transition-all border ${selectedSize === sz ? 'bg-[#2A1E1A] text-white border-[#2A1E1A]' : 'bg-transparent text-[#2A1E1A] border-[#dfd7cc] hover:border-[#2A1E1A]'}`}
                        >
                          {sz}
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {/* Price Dropdown */}
                {activeFilterTab === 'price' && (
                  <div>
                    <h4 className="text-[0.62rem] font-bold uppercase tracking-wider text-[#8f7d6d] mb-4">{isRTL ? 'نطاق السعر' : 'Price Range'}</h4>
                    <div className="flex flex-wrap gap-2.5">
                      <button
                        onClick={() => updatePriceFilter(null)}
                        className={`px-4 py-2 rounded-full text-xs transition-all border ${!priceRange ? 'bg-[#2A1E1A] text-white border-[#2A1E1A]' : 'bg-transparent text-[#2A1E1A] border-[#dfd7cc] hover:border-[#2A1E1A]'}`}
                      >
                        {isRTL ? 'الكل' : 'All Prices'}
                      </button>
                      {pricesList.map(pr => (
                        <button
                          key={pr.id}
                          onClick={() => updatePriceFilter(pr.id)}
                          className={`px-4 py-2 rounded-full text-xs transition-all border ${priceRange === pr.id ? 'bg-[#2A1E1A] text-white border-[#2A1E1A]' : 'bg-transparent text-[#2A1E1A] border-[#dfd7cc] hover:border-[#2A1E1A]'}`}
                        >
                          {isRTL ? pr.ar : pr.en}
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* GALLERY ITEMS GRID */}
        {currentGowns.length === 0 ? (
          <div className="text-center py-24 rounded-[32px] bg-white border border-[#dfd7cc]/60 shadow-sm">
            <p className="text-[#8f7d6d] font-serif text-lg">
              {isRTL ? 'معذرةً، لم نجد أي قطعة زفاف مطابقة لخيارات التصفية الحالية.' : 'We could not find any bridal creation matching these filters.'}
            </p>
            <button
              onClick={() => {
                setSelectedCategory(null);
                setSelectedColor(null);
                setSelectedSize(null);
                setPriceRange(null);
              }}
              className="mt-6 text-[0.65rem] font-bold uppercase tracking-[0.2em] text-[#C6A27A] hover:text-[#A67B5B] transition-colors border-b border-[#C6A27A]/30 pb-1"
            >
              {isRTL ? 'إعادة تعيين خيارات التصفية' : 'Reset All Filters'}
            </button>
          </div>
        ) : (
          <div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-5 gap-y-12">
              {currentGowns.map((g, idx) => (
                <motion.div
                  key={g.id}
                  initial={{ opacity: 0, y: 32 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{ duration: 0.8, delay: (idx % 4) * 0.12 }}
                  className="group flex flex-col"
                >
                  {/* Luxury Image Card */}
                  <div
                    className="product-img-wrap mb-5 cursor-pointer relative overflow-hidden rounded-[20px] shadow-soft"
                    onClick={() => openModal(g)}
                  >
                    <img 
                      src={g.image} 
                      alt={isRTL ? g.name.ar : g.name.en} 
                      loading="lazy" 
                      className="w-full h-full object-cover transition-transform duration-[1.5s] group-hover:scale-106" 
                    />
                    
                    {/* Glassmorphic Favorites Heart Button */}
                    <button
                      onClick={(e) => toggleFav(g.id, e)}
                      className={`heart-btn w-10 h-10 rounded-full flex items-center justify-center absolute top-4 right-4 z-10 glass border border-white/40 shadow-md transition-all ${
                        favorites.has(g.id) ? 'bg-[#C6A27A] border-[#C6A27A]' : 'bg-white/70 hover:bg-white'
                      }`}
                    >
                      <Heart 
                        size={15} 
                        fill={favorites.has(g.id) ? 'white' : 'none'} 
                        strokeWidth={1.8} 
                        style={{ color: favorites.has(g.id) ? 'white' : 'var(--color-ink)' }} 
                      />
                    </button>

                    {/* Sliding Glassmorphic Quick View Button */}
                    <button
                      className="quick-view-btn absolute inset-x-0 bottom-0 py-4 text-[0.62rem] font-bold uppercase tracking-[0.22em] text-white bg-[#2A1E1A]/80 backdrop-blur-md hover:bg-[#C6A27A]/90 transition-all border-t border-white/10 text-center"
                      onClick={(e) => { e.stopPropagation(); openModal(g); }}
                    >
                      {t('collections.quickView')}
                    </button>
                  </div>

                  {/* Card Description */}
                  <div className="text-center space-y-1">
                    <span className="block text-[0.55rem] font-bold uppercase tracking-[0.2em] text-[#C6A27A]">
                      {isRTL ? g.category.ar : g.category.en}
                    </span>
                    <h3 className="font-serif text-lg leading-snug text-[#2A1E1A] font-light">
                      {isRTL ? g.name.ar : g.name.en}
                    </h3>
                    <p className="price-gold text-sm font-medium mt-1">
                      ${g.price.toLocaleString()}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* LUXURY PAGINATION SYSTEM */}
            {totalPages > 1 && (
              <div className="flex items-center justify-center gap-8 mt-24 pt-8 border-t border-[#dfd7cc]/60">
                <button
                  onClick={() => handlePageChange(currentPage - 1)}
                  disabled={currentPage === 1}
                  className={`flex items-center gap-2.5 text-[0.62rem] font-bold uppercase tracking-[0.2em] transition-colors ${currentPage === 1 ? 'opacity-30 cursor-not-allowed' : 'text-[#2A1E1A] hover:text-[#C6A27A]'}`}
                >
                  <ChevronLeft size={14} className={isRTL ? 'rotate-180' : ''} />
                  <span>{isRTL ? 'السابق' : 'Prev'}</span>
                </button>

                <div className="flex items-center gap-3 text-sm font-serif">
                  {Array.from({ length: totalPages }).map((_, i) => {
                    const pageNum = i + 1;
                    const isActive = currentPage === pageNum;
                    return (
                      <button
                        key={pageNum}
                        onClick={() => handlePageChange(pageNum)}
                        className={`w-9 h-9 rounded-full flex items-center justify-center transition-all ${
                          isActive 
                            ? 'bg-[#C6A27A] text-white shadow-soft font-bold' 
                            : 'text-[#8f7d6d] hover:text-[#2A1E1A] hover:bg-amber-100/35'
                        }`}
                      >
                        {pageNum}
                      </button>
                    );
                  })}
                </div>

                <button
                  onClick={() => handlePageChange(currentPage + 1)}
                  disabled={currentPage === totalPages}
                  className={`flex items-center gap-2.5 text-[0.62rem] font-bold uppercase tracking-[0.2em] transition-colors ${currentPage === totalPages ? 'opacity-30 cursor-not-allowed' : 'text-[#2A1E1A] hover:text-[#C6A27A]'}`}
                >
                  <span>{isRTL ? 'التالي' : 'Next'}</span>
                  <ChevronRight size={14} className={isRTL ? 'rotate-180' : ''} />
                </button>
              </div>
            )}
          </div>
        )}
      </section>

      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
         4. ELITE QUICK VIEW VIP MODAL
         ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <AnimatePresence>
        {modal && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
            {/* Dark Elegant Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setModal(null)}
              className="absolute inset-0 bg-[#2A1E1A]/60 backdrop-blur-md"
            />

            {/* Modal Body Container */}
            <motion.div
              initial={{ opacity: 0, y: 32, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 16, scale: 0.98 }}
              transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
              className="relative w-full max-w-4xl bg-white rounded-[32px] overflow-hidden flex flex-col md:flex-row shadow-2xl z-10 border border-[#dfd7cc]"
              style={{ maxHeight: '90vh' }}
            >
              {/* Close Glassmorphic Button */}
              <button
                onClick={() => setModal(null)}
                className="absolute top-5 right-5 z-20 w-9 h-9 flex items-center justify-center rounded-full glass border border-white/50 hover:bg-white transition-all shadow-md"
              >
                <X size={15} />
              </button>

              {/* Modal Image Wrapper */}
              <div className="w-full md:w-1/2 h-[320px] md:h-auto relative bg-[#F5F1EC] overflow-hidden group">
                <img 
                  src={modal.image} 
                  alt={isRTL ? modal.name.ar : modal.name.en} 
                  className="w-full h-full object-cover transition-transform duration-[2s] hover:scale-105" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
              </div>

              {/* Modal Technical Information / Checkout Form */}
              <div className="w-full md:w-1/2 p-8 md:p-12 overflow-y-auto flex flex-col justify-center bg-[#FBF8F4]">
                
                {/* Badge Category */}
                <span className="block text-[0.6rem] font-bold uppercase tracking-[0.2em] text-[#C6A27A] mb-3">
                  {isRTL ? modal.category.ar : modal.category.en}
                </span>

                {/* Name */}
                <h2 className="font-serif text-3xl md:text-4xl mb-4 text-[#2A1E1A] font-light leading-snug">
                  {isRTL ? modal.name.ar : modal.name.en}
                </h2>

                {/* Price */}
                <p className="price-gold text-2xl mb-6 font-semibold">
                  ${modal.price.toLocaleString()}
                </p>

                {/* Description */}
                <p className="text-sm text-[#8f7d6d] font-sans font-light leading-relaxed mb-8">
                  {isRTL ? modal.desc.ar : modal.desc.en}
                </p>

                {/* Cart Form */}
                <form onSubmit={handleAddToCartSubmit} className="space-y-6">
                  {/* Select Color */}
                  <div>
                    <label className="block text-[0.62rem] font-bold uppercase tracking-[0.16em] text-[#8f7d6d] mb-3">
                      {copy.quickViewModal.chooseColor}
                    </label>
                    <div className="flex gap-3">
                      {[
                        { id: 'white', label: copy.quickViewModal.colors.white },
                        { id: 'offWhite', label: copy.quickViewModal.colors.offWhite },
                      ].map((c) => {
                        const isSelected = color === c.id;
                        return (
                          <button
                            type="button"
                            key={c.id}
                            onClick={() => setColor(c.id as 'white' | 'offWhite')}
                            className={`flex items-center gap-2 px-4 py-2 border rounded-full transition-all text-xs ${
                              isSelected 
                                ? 'border-[#C6A27A] bg-[#C6A27A]/10 text-[#2A1E1A] font-semibold' 
                                : 'border-[#dfd7cc] text-[#8f7d6d] hover:border-[#2A1E1A]'
                            }`}
                          >
                            <span className={`w-3.5 h-3.5 rounded-full border flex items-center justify-center transition-colors ${isSelected ? 'border-[#C6A27A]' : 'border-[#dfd7cc]'}`}>
                              {isSelected && <span className="w-2 h-2 rounded-full bg-[#C6A27A]" />}
                            </span>
                            <span>{c.label}</span>
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Select Size */}
                  <div>
                    <div className="flex justify-between items-center mb-3">
                      <label className="text-[0.62rem] font-bold uppercase tracking-[0.16em] text-[#8f7d6d]">
                        {copy.quickViewModal.chooseSize}
                      </label>
                      <Link 
                        to="/size-guide" 
                        onClick={() => setModal(null)}
                        className="text-[0.6rem] uppercase tracking-wider text-[#C6A27A] hover:text-[#A67B5B] transition-colors border-b border-[#C6A27A]/20 pb-0.5"
                      >
                        {isRTL ? 'دليل القياسات الفني' : 'Size Guide'}
                      </Link>
                    </div>
                    
                    <div className="flex gap-3">
                      {(['S', 'M', 'L'] as const).map((s) => {
                        const isSelected = size === s;
                        return (
                          <button
                            type="button"
                            key={s}
                            onClick={() => setSize(s)}
                            className={`flex-1 py-3 text-center border text-xs tracking-wider transition-all rounded-lg ${
                              isSelected 
                                ? 'border-[#C6A27A] bg-[#C6A27A]/10 text-[#2A1E1A] font-semibold' 
                                : 'border-[#dfd7cc] text-[#8f7d6d] hover:border-[#2A1E1A] hover:text-[#2A1E1A]'
                            }`}
                          >
                            {s}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Checkout Button */}
                  <button
                    type="submit"
                    className="btn-primary w-full py-4.5 text-[0.68rem] tracking-[0.24em] font-semibold rounded-full bg-[#2A1E1A] text-white hover:bg-[#C6A27A] hover:shadow-gold transition-all duration-300 flex items-center justify-center gap-3"
                    disabled={added}
                  >
                    <ShoppingBag size={14} />
                    <span>
                      {added ? copy.quickViewModal.added : copy.quickViewModal.add}
                    </span>
                  </button>
                </form>

                {/* High-end Security Details Badges */}
                <div className="mt-8 pt-6 border-t border-[#dfd7cc] space-y-2.5 text-[0.78rem] text-[#8f7d6d] font-sans font-light">
                  <p className="flex items-center gap-2">
                    <Sparkles size={12} className="text-[#C6A27A]" />
                    <span>{copy.quickViewModal.shipping}</span>
                  </p>
                  <p className="flex items-center gap-2">
                    <ShieldCheck size={12} className="text-[#C6A27A]" />
                    <span>{copy.quickViewModal.fitting}</span>
                  </p>
                </div>

              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
