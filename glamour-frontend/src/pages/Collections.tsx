import { motion, AnimatePresence } from 'framer-motion';
import { Heart, X, SlidersHorizontal, ChevronDown, ChevronLeft, ChevronRight, Sparkles, ShieldCheck, ShoppingBag, Check } from 'lucide-react';
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useCart } from '../context/CartContext';
import { GOWNS_DATA } from '../data/gowns';
import type { Gown } from '../data/gowns';

const colorLabels: Record<string, { en: string; ar: string }> = {
  white: { en: 'Pure White', ar: 'أبيض ناصع' },
  ivory: { en: 'Off-White', ar: 'أوف وايت' },
  champagne: { en: 'Champagne', ar: 'شامبانيا' },
  emerald: { en: 'Emerald Green', ar: 'أخضر زمردي' },
  gold: { en: 'Luxury Gold', ar: 'ذهبي فاخر' },
  ruby: { en: 'Ruby Red', ar: 'أحمر ياقوتي' },
  black: { en: 'Noir Black', ar: 'أسود فاخر' },
  blush: { en: 'Blush Pink', ar: 'وردي ناعم' },
  nude: { en: 'Nude', ar: 'نيود' }
};

const colorHex: Record<string, string> = {
  white: '#FFFFFF',
  ivory: '#F5F0E6',
  champagne: '#E8D5B0',
  emerald: '#2D7A4F',
  gold: '#C8A84B',
  ruby: '#9B2335',
  black: '#1A1A1A',
  blush: '#F4C2C2',
  nude: '#D4A898',
};




// Luxury Bilingual copy for Collection Intros
const localCopy = {
  en: {
    hero: {
      preTitle: "✦ THE COUTURE GALLERY ✦",
      title: "Exclusive Designs Crafted to Immortalise Your Moments",
      subtitle: "Discover our handcrafted bridal gown collections, where refined artistry meets exceptional detail — giving you an appearance unlike any other.",
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
      title: "The Atelier Collections",
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
      preTitle: "✦ مجموعات الزفاف الراقية ✦",
      title: "تصاميم حصرية صُنعت لتُخلِّد لحظاتكِ",
      subtitle: "اكتشفي مجموعات فساتين الزفاف المصممة بعناية فائقة، حيث تلتقي الحرفية الراقية بالتفاصيل الاستثنائية لتمنحكِ إطلالة لا تشبه سواكِ.",
    },

    gallery: {
      title: "معرض التصميمات الملكية",
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

const textReveal = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-40px' },
  transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] }
};


export default function Collections() {
  const { t, i18n } = useTranslation();
  const currentLang = i18n.language === 'ar' ? 'ar' : 'en';
  const copy = localCopy[currentLang];
  const isRTL = currentLang === 'ar';

  const [modal, setModal] = useState<Gown | null>(null);
  const [favorites, setFavorites] = useState<Set<string>>(new Set());
  const [color, setColor] = useState<string>('');
  const [size, setSize] = useState<'S' | 'M' | 'L'>('M');
  const [added, setAdded] = useState(false);

  // FILTER STATES
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedColor, setSelectedColor] = useState<string | null>(null);
  const [selectedSize, setSelectedSize] = useState<string | null>(null);
  const [priceRange, setPriceRange] = useState<string | null>(null);
  const [activeFilterTab, setActiveFilterTab] = useState<'category' | 'color' | 'size' | 'price' | null>(null);
  const [selectedCollection] = useState<'c1' | 'c2' | 'c3' | null>(null);

  // TYPE FILTER (from URL query param)
  const location = useLocation();
  const selectedType = new URLSearchParams(location.search).get('type') as 'wedding' | 'evening' | null;

  // Reset page when URL type changes
  const [currentPage, setCurrentPage] = useState(1);
  useEffect(() => {
    setCurrentPage(1);
  }, [selectedType]);

  const itemsPerPage = 12;

  const { addToCart: addGlobalToCart } = useCart();


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
    setColor(g.colors[0] || 'white');
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

  // FILTER LOGIC
  const filteredGowns = GOWNS_DATA.filter(gown => {
    if (selectedType && gown.type !== selectedType) return false;
    if (selectedCollection && gown.collection !== selectedCollection) return false;
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
    { en: 'Sculpted Couture', ar: 'كوتور منحوت' },
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
    <div className="min-h-screen pb-20 selection:bg-amber-100 selection:text-ink bg-[#FAF8F5] text-[#2b1b12]">

      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
         1. CINEMATIC FULL-WIDTH BACKGROUND HERO
         ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section
        className="relative w-full flex items-center justify-center text-center px-6 overflow-hidden"
        style={{
          height: '90vh',
          minHeight: 750,
          backgroundImage: `url(${
            selectedType === 'evening'
              ? '/images/9.jpg'
              : '/images/10.jpg'
          })`,
          backgroundSize: 'cover',
          backgroundPosition: 'center 20%',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <div className="absolute inset-0" style={{ background: 'linear-gradient(rgba(0,0,0,0.25), rgba(0,0,0,0.35))' }} />
        
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="relative z-10 max-w-4xl mx-auto text-white space-y-8"
        >
          <h1
            style={{ fontFamily: isRTL ? 'system-ui, -apple-system, sans-serif' : "'Playfair Display', serif", fontSize: 'clamp(48px, 6vw, 90px)', fontWeight: 700, letterSpacing: isRTL ? '0px' : '-2px', textShadow: '0 2px 12px rgba(0,0,0,0.4)' }}
            className="leading-[1.1] drop-shadow-lg"
          >
            {isRTL
              ? (selectedType === 'evening' ? 'فساتين السهرة الملكية' : 'المجموعات الحصرية')
              : (selectedType === 'evening' ? 'Royal Evening Gowns' : 'The Exclusive Collections')}
          </h1>
          <p
            style={{ maxWidth: 650, margin: '0 auto', lineHeight: 1.9, opacity: 0.9, textShadow: '0 2px 8px rgba(0,0,0,0.4)' }}
            className="text-base md:text-lg font-medium"
          >
            {isRTL
              ? 'تصاميم صنعت خصيصاً للعروس التي تبحث عن التفرد. حيث تلتقي الحرفية الراقية مع الأناقة الخالدة.'
              : 'Designs crafted for the bride who seeks distinction, where refined artistry meets timeless elegance.'}
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 pt-6">
            <button
              onClick={() => { document.getElementById('gowns-gallery-section')?.scrollIntoView({ behavior: 'smooth' }); }}
              className="px-10 py-4 bg-gradient-to-r from-[#8E6C4C] to-[#C8A97E] text-white rounded-full text-sm font-bold uppercase tracking-wider transition-all duration-400 hover:-translate-y-1 hover:shadow-[0_20px_40px_rgba(200,169,126,0.35)]"
            >
              {isRTL ? 'استكشف المجموعة' : 'Explore Collection'}
            </button>
            <Link
              to="/book-appointment"
              className="px-10 py-4 border border-white/40 text-white rounded-full text-sm font-bold uppercase tracking-wider transition-all duration-400 hover:bg-white/10 hover:-translate-y-1 hover:border-white"
            >
              {isRTL ? 'احجز استشارتك' : 'Book Consultation'}
            </Link>
          </div>
        </motion.div>
      </section>



      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
         4. ATMowns GALLERY & INTERACTIVE FILTERS
         ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section id="gowns-gallery-section" className="scroll-mt-28 max-w-7xl mx-auto px-6 lg:px-16 pt-10">

        {/* Title */}
        <div className="text-center mb-10">
          <motion.div {...textReveal}>
            <span className="text-[0.68rem] font-extrabold uppercase tracking-[0.34em] text-[#c49a78] block mb-3">
              ✦ {currentLang === 'ar' ? 'معرض التصميمات الملكية' : 'ROYAL CREATIONS'} ✦
            </span>

            <p className="text-[#8a7b71] text-sm mt-3 max-w-xl mx-auto">
              {isRTL ? 'تصفحي تصاميمنا الحصرية، المصنوعة يدوياً خصيصاً لتتوج ليلة العمر بالكمال.' : 'Browse our signature creations, handcrafted for the modern bride.'}
            </p>
          </motion.div>
        </div>

        {/* BESPOKE BOUTIQUE FILTER BAR */}
        <div className="sticky top-[90px] z-[100] mb-16 mx-auto bg-white/70 backdrop-blur-[15px] border border-[#E6D5C3] p-4 rounded-full max-w-5xl shadow-[0_10px_30px_rgba(0,0,0,0.04)]">
          <div className="flex flex-wrap items-center justify-between gap-4 px-4">
            
            {/* Filter icon label */}
            <button
              onClick={() => setActiveFilterTab(activeFilterTab ? null : 'category')}
              className="flex items-center gap-2 text-sm font-bold text-[#2C1D15] hover:text-[#C8A97E] transition-colors bg-[#FAF7F3] px-6 py-3 rounded-full border border-[#E6D5C3]"
            >
              <SlidersHorizontal size={16} />
              <span>{isRTL ? 'تصفية متقدمة' : 'Advanced Filters'}</span>
            </button>

            {/* Filter categories */}
            <div className="flex flex-wrap items-center gap-3">
              {/* Collection Filter (Price) */}
              <button
                onClick={() => setActiveFilterTab(activeFilterTab === 'price' ? null : 'price')}
                className={`flex items-center gap-2 px-6 py-3 rounded-full text-sm font-bold transition-all duration-300 border ${activeFilterTab === 'price' || priceRange ? 'bg-[#C8A97E] text-white border-[#C8A97E] shadow-[0_10px_30px_rgba(0,0,0,0.08)] -translate-y-[2px]' : 'bg-white text-[#2C1D15] border-[#E6D5C3] hover:-translate-y-[2px] hover:shadow-[0_10px_30px_rgba(0,0,0,0.08)]'}`}
              >
                <span>{priceRange ? (isRTL ? 'المجموعة: محددة' : 'Collection: Selected') : (isRTL ? 'المجموعة' : 'Collection')}</span>
                <ChevronDown size={14} className={`transition-transform duration-300 ${activeFilterTab === 'price' ? 'rotate-180' : ''}`} />
              </button>

              {/* Silhouette Filter (Size) */}
              <button
                onClick={() => setActiveFilterTab(activeFilterTab === 'size' ? null : 'size')}
                className={`flex items-center gap-2 px-6 py-3 rounded-full text-sm font-bold transition-all duration-300 border ${activeFilterTab === 'size' || selectedSize ? 'bg-[#C8A97E] text-white border-[#C8A97E] shadow-[0_10px_30px_rgba(0,0,0,0.08)] -translate-y-[2px]' : 'bg-white text-[#2C1D15] border-[#E6D5C3] hover:-translate-y-[2px] hover:shadow-[0_10px_30px_rgba(0,0,0,0.08)]'}`}
              >
                <span>{selectedSize ? (isRTL ? `القصّة: ${selectedSize}` : `Silhouette: ${selectedSize}`) : (isRTL ? 'القصة' : 'Silhouette')}</span>
                <ChevronDown size={14} className={`transition-transform duration-300 ${activeFilterTab === 'size' ? 'rotate-180' : ''}`} />
              </button>

              {/* Tone Filter */}
              <button
                onClick={() => setActiveFilterTab(activeFilterTab === 'color' ? null : 'color')}
                className={`flex items-center gap-2 px-6 py-3 rounded-full text-sm font-bold transition-all duration-300 border ${activeFilterTab === 'color' || selectedColor ? 'bg-[#C8A97E] text-white border-[#C8A97E] shadow-[0_10px_30px_rgba(0,0,0,0.08)] -translate-y-[2px]' : 'bg-white text-[#2C1D15] border-[#E6D5C3] hover:-translate-y-[2px] hover:shadow-[0_10px_30px_rgba(0,0,0,0.08)]'}`}
              >
                <span>{selectedColor ? (isRTL ? `الدرجة: ${selectedColor === 'white' ? 'أبيض' : 'أوف وايت'}` : `Tone: ${selectedColor === 'white' ? 'White' : 'Off-White'}`) : (isRTL ? 'الدرجة' : 'Tone')}</span>
                <ChevronDown size={14} className={`transition-transform duration-300 ${activeFilterTab === 'color' ? 'rotate-180' : ''}`} />
              </button>

              {/* Style Filter */}
              <button
                onClick={() => setActiveFilterTab(activeFilterTab === 'category' ? null : 'category')}
                className={`flex items-center gap-2 px-6 py-3 rounded-full text-sm font-bold transition-all duration-300 border ${activeFilterTab === 'category' || selectedCategory ? 'bg-[#C8A97E] text-white border-[#C8A97E] shadow-[0_10px_30px_rgba(0,0,0,0.08)] -translate-y-[2px]' : 'bg-white text-[#2C1D15] border-[#E6D5C3] hover:-translate-y-[2px] hover:shadow-[0_10px_30px_rgba(0,0,0,0.08)]'}`}
              >
                <span>{selectedCategory ? (isRTL ? `الأسلوب: ${selectedCategory}` : `Style: ${selectedCategory}`) : (isRTL ? 'الأسلوب' : 'Style')}</span>
                <ChevronDown size={14} className={`transition-transform duration-300 ${activeFilterTab === 'category' ? 'rotate-180' : ''}`} />
              </button>
            </div>
            
            {/* Sort Dropdown Placeholder */}
            <div className="flex items-center gap-2 text-sm font-bold text-[#2C1D15]">
              <span>{isRTL ? 'ترتيب حسب' : 'Sort by'}</span>
              <button className="flex items-center gap-2 px-4 py-2 rounded-full border border-[#E6D5C3] bg-white hover:bg-[#FAF7F3] transition-colors">
                <span>{isRTL ? 'الأحدث' : 'Newest'}</span>
                <ChevronDown size={14} />
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
                  className="absolute left-0 right-0 mt-4 p-6 bg-white border border-[#e8dbd1] rounded-[20px] shadow-lg grid grid-cols-1 gap-6 z-40"
                >
                  {/* Category Dropdown */}
                  {activeFilterTab === 'category' && (
                    <div>
                      <h4 className="text-[0.62rem] font-bold uppercase tracking-wider text-[#8a7b71] mb-4">{isRTL ? 'اختر الفئة' : 'Select Category'}</h4>
                      <div className="flex flex-wrap gap-2.5">
                        <button
                          onClick={() => updateCategoryFilter(null)}
                          className={`px-4 py-2 rounded-full text-xs transition-all border ${!selectedCategory ? 'bg-[#2b1b12] text-white border-[#2b1b12]' : 'bg-transparent text-[#2b1b12] border-[#e8dbd1] hover:border-[#2b1b12]'}`}
                        >
                          {isRTL ? 'الكل' : 'All Gowns'}
                        </button>
                        {categoriesList.map(cat => (
                          <button
                            key={cat.en}
                            onClick={() => updateCategoryFilter(isRTL ? cat.ar : cat.en)}
                            className={`px-4 py-2 rounded-full text-xs transition-all border ${selectedCategory === (isRTL ? cat.ar : cat.en) ? 'bg-[#2b1b12] text-white border-[#2b1b12]' : 'bg-transparent text-[#2b1b12] border-[#e8dbd1] hover:border-[#2b1b12]'}`}
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
                      <h4 className="text-[0.62rem] font-bold uppercase tracking-wider text-[#8a7b71] mb-4">{isRTL ? 'اختر درجة اللون' : 'Select Tone'}</h4>
                      <div className="flex flex-wrap gap-2.5">
                        <button
                          onClick={() => updateColorFilter(null)}
                          className={`px-4 py-2 rounded-full text-xs transition-all border ${!selectedColor ? 'bg-[#2b1b12] text-white border-[#2b1b12]' : 'bg-transparent text-[#2b1b12] border-[#e8dbd1] hover:border-[#2b1b12]'}`}
                        >
                          {isRTL ? 'الكل' : 'All Tones'}
                        </button>
                        {colorsList.map(col => (
                          <button
                            key={col.id}
                            onClick={() => updateColorFilter(col.id)}
                            className={`px-4 py-2 rounded-full text-xs transition-all border ${selectedColor === col.id ? 'bg-[#2b1b12] text-white border-[#2b1b12]' : 'bg-transparent text-[#2b1b12] border-[#e8dbd1] hover:border-[#2b1b12]'}`}
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
                      <h4 className="text-[0.62rem] font-bold uppercase tracking-wider text-[#8a7b71] mb-4">{isRTL ? 'اختر المقاس' : 'Select Size'}</h4>
                      <div className="flex flex-wrap gap-2.5">
                        <button
                          onClick={() => updateSizeFilter(null)}
                          className={`px-4 py-2 rounded-full text-xs transition-all border ${!selectedSize ? 'bg-[#2b1b12] text-white border-[#2b1b12]' : 'bg-transparent text-[#2b1b12] border-[#e8dbd1] hover:border-[#2b1b12]'}`}
                        >
                          {isRTL ? 'الكل' : 'All Sizes'}
                        </button>
                        {sizesList.map(sz => (
                          <button
                            key={sz}
                            onClick={() => updateSizeFilter(sz)}
                            className={`px-4 py-2 rounded-full text-xs transition-all border ${selectedSize === sz ? 'bg-[#2b1b12] text-white border-[#2b1b12]' : 'bg-transparent text-[#2b1b12] border-[#e8dbd1] hover:border-[#2b1b12]'}`}
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
                      <h4 className="text-[0.62rem] font-bold uppercase tracking-wider text-[#8a7b71] mb-4">{isRTL ? 'نطاق السعر' : 'Price Range'}</h4>
                      <div className="flex flex-wrap gap-2.5">
                        <button
                          onClick={() => updatePriceFilter(null)}
                          className={`px-4 py-2 rounded-full text-xs transition-all border ${!priceRange ? 'bg-[#2b1b12] text-white border-[#2b1b12]' : 'bg-transparent text-[#2b1b12] border-[#e8dbd1] hover:border-[#2b1b12]'}`}
                        >
                          {isRTL ? 'الكل' : 'All Prices'}
                        </button>
                        {pricesList.map(pr => (
                          <button
                            key={pr.id}
                            onClick={() => updatePriceFilter(pr.id)}
                            className={`px-4 py-2 rounded-full text-xs transition-all border ${priceRange === pr.id ? 'bg-[#2b1b12] text-white border-[#2b1b12]' : 'bg-transparent text-[#2b1b12] border-[#e8dbd1] hover:border-[#2b1b12]'}`}
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
        </div>

        {/* GALLERY ITEMS GRID */}
        {currentGowns.length === 0 ? (
          <div className="text-center py-24 rounded-[32px] bg-white border border-[#e8dbd1]/60 shadow-sm">
            <p className="text-[#8a7b71] font-serif text-lg">
              {isRTL ? 'معذرةً، لم نجد أي قطعة زفاف مطابقة لخيارات التصفية الحالية.' : 'We could not find any bridal creation matching these filters.'}
            </p>
            <button
              onClick={() => {
                setSelectedCategory(null);
                setSelectedColor(null);
                setSelectedSize(null);
                setPriceRange(null);
              }}
              className="mt-6 text-[0.65rem] font-bold uppercase tracking-[0.2em] text-[#c49a78] hover:text-[#A67B5B] transition-colors border-b border-[#c49a78]/30 pb-1"
            >
              {isRTL ? 'إعادة تعيين خيارات التصفية' : 'Reset All Filters'}
            </button>
          </div>
        ) : (
          <div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-5 gap-y-10">
              {currentGowns.map((g, idx) => (
                <motion.div
                  key={g.id}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{ duration: 0.7, delay: (idx % 4) * 0.08 }}
                  className="group flex flex-col bg-white rounded-[32px] overflow-hidden transition-all duration-400 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-2 hover:shadow-[0_30px_60px_rgba(0,0,0,0.12)] cursor-pointer border border-[#E8DED4]"
                  onClick={() => openModal(g)}
                >
                  {/* Luxury Image Card */}
                  <div className="relative overflow-hidden aspect-[3/4] bg-[#f7f4f1]">
                    <img
                      src={g.image}
                      alt={isRTL ? g.name.ar : g.name.en}
                      loading="lazy"
                      className="w-full h-full object-cover transition-transform duration-[800ms] ease-out group-hover:scale-105"
                    />

                    {/* Gradient Overlay for bottom text clarity if needed, but keeping it minimal */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                    {/* Heart Button */}
                    <button
                      onClick={(e) => toggleFav(g.id, e)}
                      className={`w-9 h-9 rounded-full flex items-center justify-center absolute top-4 right-4 z-20 border transition-all duration-300 ${
                        favorites.has(g.id) 
                          ? 'bg-[#c49a78] border-[#c49a78] text-white' 
                          : 'bg-white/80 backdrop-blur-md border-white/40 hover:bg-white text-[#2b1b12]'
                      }`}
                    >
                      <Heart
                        size={14}
                        fill={favorites.has(g.id) ? 'currentColor' : 'none'}
                        strokeWidth={2}
                      />
                    </button>

                    {/* Quick Actions (Glassmorphism) */}
                    <div className="absolute inset-x-0 bottom-4 flex justify-center gap-3 px-4 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 z-20">
                      <button
                        className="flex-1 py-3 text-xs font-bold uppercase tracking-wider text-[#2C1D15] bg-white/70 backdrop-blur-[10px] rounded-full hover:bg-white hover:shadow-lg transition-all"
                        onClick={(e) => { e.stopPropagation(); openModal(g); }}
                      >
                        {isRTL ? 'نظرة سريعة' : 'Quick View'}
                      </button>
                    </div>
                  </div>

                  {/* Card Description — Couture-grade */}
                  <div className="text-center p-6 space-y-3 bg-white">
                    <span className="block text-[12px] font-bold uppercase tracking-[2px] text-[#B08A62]">
                      {isRTL ? g.category.ar : g.category.en}
                    </span>
                    <h3 className="text-lg md:text-xl font-bold leading-[1.5] text-[#2C1D15]" style={{ fontFamily: isRTL ? 'system-ui, -apple-system, sans-serif' : "'Playfair Display', serif" }}>
                      {isRTL ? g.name.ar : g.name.en}
                    </h3>
                    <p className="text-xl md:text-2xl font-semibold text-[#C8A97E] pt-1">
                      {isRTL ? `${g.price.toLocaleString()}$` : `$${g.price.toLocaleString()}`}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* LUXURY PAGINATION SYSTEM */}
            {totalPages > 1 && (
              <div className="flex items-center justify-center gap-8 mt-14 pt-8 border-t border-[#e8dbd1]/60">
                <button
                  onClick={() => handlePageChange(currentPage - 1)}
                  disabled={currentPage === 1}
                  className={`flex items-center gap-2.5 text-[0.62rem] font-bold uppercase tracking-[0.2em] transition-colors ${currentPage === 1 ? 'opacity-30 cursor-not-allowed' : 'text-[#2b1b12] hover:text-[#c49a78]'}`}
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
                        className={`w-9 h-9 rounded-full flex items-center justify-center transition-all ${isActive
                          ? 'bg-[#c49a78] text-white shadow-soft font-bold'
                          : 'text-[#8a7b71] hover:text-[#2b1b12] hover:bg-amber-100/35'
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
                  className={`flex items-center gap-2.5 text-[0.62rem] font-bold uppercase tracking-[0.2em] transition-colors ${currentPage === totalPages ? 'opacity-30 cursor-not-allowed' : 'text-[#2b1b12] hover:text-[#c49a78]'}`}
                >
                  <span>{isRTL ? 'التالي' : 'Next'}</span>
                  <ChevronRight size={14} className={isRTL ? 'rotate-180' : ''} />
                </button>
              </div>
            )}
          </div>
        )}
      </section>

      {/* ━━ MERGED PREMIUM ATELIER EXPERIENCE SECTION ━━ */}
      <section className="max-w-7xl mx-auto px-6 lg:px-16 my-16">
        <div className="relative rounded-[36px] overflow-hidden bg-[#2b1b12] text-white shadow-2xl">
          {/* Background texture */}
          <div className="absolute inset-0 opacity-10 pointer-events-none">
            <img src="https://images.pexels.com/photos/291759/pexels-photo-291759.jpeg?auto=compress&cs=tinysrgb&w=1200"
              alt="" className="w-full h-full object-cover" />
          </div>
          <div className="absolute inset-0 bg-gradient-to-br from-[#2b1b12] via-[#1e1410]/90 to-[#2b1b12]/80 pointer-events-none" />

          {/* Top header band */}
          <div className="relative z-10 text-center pt-14 pb-8 px-8 border-b border-white/8">
            <span className="text-[0.62rem] font-extrabold uppercase tracking-[0.38em] text-[#C6A27A] block mb-4">
              {isRTL ? '✦ تجربة الدار الفاخرة ✦' : '✦ THE ATELIER EXPERIENCE ✦'}
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-white leading-snug mb-3" style={{ fontFamily: "'Cormorant Garamond', serif", fontStyle: 'normal' }}>
              {isRTL ? 'فستان أحلامكِ — سواءً كنتِ بجانبنا أم على بُعد آلاف الأميال' : 'Your Dream Gown — Whether Here or Across the World'}
            </h2>
            <p className="text-white/70 text-sm max-w-2xl mx-auto leading-relaxed">
              {isRTL
                ? 'استمتعي باستشارة شخصية خاصة سواءً حضورياً أو عن بُعد. فريقنا يرافقكِ من أولى لحظات الاختيار حتى تسليم فستانكِ أينما كنتِ في العالم.'
                : 'Enjoy a private personal consultation — in studio or remotely. Our team accompanies you from the first moment of selection until delivery, wherever you are.'}
            </p>
          </div>

          {/* Three columns body */}
          <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-0 divide-y md:divide-y-0 md:divide-x divide-white/8">

            {/* Column 1: الاستشارة */}
            <div className="p-10 space-y-5">
              <div className="w-10 h-10 rounded-full bg-[#C6A27A]/15 border border-[#C6A27A]/30 flex items-center justify-center mb-2">
                <span className="text-[#C6A27A] font-bold text-sm">01</span>
              </div>
              <h3 className="text-lg font-bold text-white" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                {isRTL ? 'الاستشارة الخاصة' : 'Private Consultation'}
              </h3>
              <p className="text-white/65 text-xs leading-relaxed">
                {isRTL
                  ? 'استشارة مجانية مدتها 45 دقيقة مع مصمم متخصص لفهم رؤيتكِ واختيار الأقمشة والقصات المناسبة.'
                  : 'A complimentary 45-minute session with a dedicated designer to understand your vision and select the right fabrics and silhouettes.'}
              </p>
              <ul className="space-y-2.5">
                {(isRTL
                  ? ['استشارة فردية لمدة 45 دقيقة', 'مراجعة الأقمشة والقصات', 'تخصيص التفاصيل والتطريز']
                  : ['45-minute private 1-on-1', 'Fabric & silhouette review', 'Custom detail & embroidery options']
                ).map((item, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-xs text-white/80">
                    <Check size={12} className="text-[#C6A27A] mt-0.5 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 2: القياسات عن بُعد */}
            <div className="p-10 space-y-5">
              <div className="w-10 h-10 rounded-full bg-[#C6A27A]/15 border border-[#C6A27A]/30 flex items-center justify-center mb-2">
                <span className="text-[#C6A27A] font-bold text-sm">02</span>
              </div>
              <h3 className="text-lg font-bold text-white" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                {isRTL ? 'القياسات عن بُعد' : 'Remote Measurements'}
              </h3>
              <p className="text-white/65 text-xs leading-relaxed">
                {isRTL
                  ? 'لستِ بحاجة إلى السفر. أرسلي قياساتكِ أونلاين ويتولى فريقنا المراجعة والاعتماد قبل بدء التنفيذ.'
                  : 'No travel needed. Send your measurements online and our team handles the review and approval before production begins.'}
              </p>
              <ul className="space-y-2 text-xs text-white/80">
                {(isRTL
                  ? ['حجز الاستشارة الأولية', 'استلام دليل القياسات', 'إرسال المقاسات والصور', 'مراجعة واعتماد المقاسات', 'تنفيذ الفستان يدوياً', 'الشحن العالمي إلى عنوانك']
                  : ['Book initial consultation', 'Receive measurement guide', 'Submit measurements & photos', 'Review & approve measurements', 'Handcraft the gown', 'Global delivery to your door']
                ).map((step, i) => (
                  <li key={i} className="flex gap-2.5">
                    <span className="text-[#C6A27A] font-extrabold shrink-0">{i + 1}.</span>
                    <span>{step}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 3: المزايا + الزر */}
            <div className="p-10 space-y-5 flex flex-col">
              <div className="w-10 h-10 rounded-full bg-[#C6A27A]/15 border border-[#C6A27A]/30 flex items-center justify-center mb-2">
                <span className="text-[#C6A27A] font-bold text-sm">03</span>
              </div>
              <h3 className="text-lg font-bold text-white font-serif">
                {isRTL ? 'مزايا حصرية' : 'Exclusive Benefits'}
              </h3>
              <ul className="space-y-3 flex-1">
                {(isRTL
                  ? ['دليل قياسات احترافي', 'مراجعة المقاسات من مختص', 'اجتماعات فيديو خاصة', 'متابعة شخصية حتى التسليم', 'شحن عالمي مؤمن']
                  : ['Professional measurement guide', 'Expert size verification', 'Private video sessions', 'Personal follow-up to delivery', 'Secure worldwide shipping']
                ).map((b, i) => (
                  <li key={i} className="flex items-center gap-2.5 text-xs text-white/80">
                    <Check size={12} className="text-[#C6A27A] shrink-0" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
              <div className="pt-4">
                <Link
                  to="/book-appointment"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-full font-bold uppercase tracking-wider py-4 px-8 text-[0.68rem] transition-all duration-300 bg-[#C6A27A] text-[#0F0D0B] hover:bg-[#e2c5a4] hover:shadow-[0_6px_20px_rgba(198,162,122,0.4)]"
                >
                  {isRTL ? 'ابدئي تصميم فستانكِ الخاص ✦' : 'Begin Your Custom Gown ✦'}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
         6. ELITE QUICK VIEW VIP MODAL
         ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <AnimatePresence>
        {modal && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setModal(null)}
              className="absolute inset-0 bg-[#211712]/70 backdrop-blur-md"
            />

            <motion.div
              initial={{ opacity: 0, y: 32, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 16, scale: 0.98 }}
              transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
              className="relative w-full max-w-4xl bg-[#F7F4EF] rounded-[32px] overflow-hidden flex flex-col md:flex-row shadow-2xl z-10 border border-[#e8dbd1]"
              style={{ maxHeight: '90vh' }}
            >
              <button
                onClick={() => setModal(null)}
                className="absolute top-5 right-5 z-20 w-9 h-9 flex items-center justify-center rounded-full glass border border-white/50 hover:bg-white transition-all shadow-md text-[#2b1b12]"
              >
                <X size={15} />
              </button>

              <div className="w-full md:w-1/2 h-[320px] md:h-auto relative overflow-hidden group bg-white">
                <img
                  src={modal.image}
                  alt={isRTL ? modal.name.ar : modal.name.en}
                  className="w-full h-full object-cover transition-transform duration-[2s] hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
              </div>

              <div className="w-full md:w-1/2 p-8 md:p-12 overflow-y-auto flex flex-col justify-center bg-white">

                <span className="block text-[0.6rem] font-bold uppercase tracking-[0.2em] text-[#c49a78] mb-3">
                  {isRTL ? modal.category.ar : modal.category.en}
                </span>

                <h2 className="font-sans text-3xl md:text-4xl mb-4 text-[#2b1b12] font-extrabold leading-snug">
                  {isRTL ? modal.name.ar : modal.name.en}
                </h2>

                <p className="price-gold text-2xl mb-6 font-extrabold">
                  {isRTL ? `${modal.price.toLocaleString()}$` : `$${modal.price.toLocaleString()}`}
                </p>

                <p className="text-sm text-[#8a7b71] font-sans font-semibold leading-relaxed mb-8">
                  {isRTL ? modal.desc.ar : modal.desc.en}
                </p>

                <form onSubmit={handleAddToCartSubmit} className="space-y-6">
                  {/* Select Color */}
                  <div>
                    <label className="block text-[0.62rem] font-bold uppercase tracking-[0.16em] text-[#8a7b71] mb-3">
                      {copy.quickViewModal.chooseColor}
                    </label>
                    <div className="flex flex-wrap gap-3">
                      {modal.colors.map((cId) => {
                        const isSelected = color === cId;
                        const label = isRTL
                          ? (colorLabels[cId]?.ar || cId)
                          : (colorLabels[cId]?.en || cId);
                        const hex = colorHex[cId] || '#ccc';
                        const isLight = ['white', 'ivory', 'champagne', 'nude'].includes(cId);
                        return (
                          <button
                            type="button"
                            key={cId}
                            onClick={() => setColor(cId)}
                            className={`flex items-center gap-2 px-3 py-2 border rounded-full transition-all text-xs ${
                              isSelected
                                ? 'border-[#c49a78] bg-[#c49a78]/10 text-[#2b1b12] font-semibold'
                                : 'border-[#e8dbd1] text-[#8a7b71] hover:border-[#2b1b12]'
                            }`}
                          >
                            <span
                              className="w-4 h-4 rounded-full flex-shrink-0 shadow-sm"
                              style={{
                                background: hex,
                                border: isLight ? '1.5px solid #d0c4b4' : '1.5px solid transparent',
                                boxShadow: isSelected ? '0 0 0 2px #c49a78' : undefined,
                              }}
                            />
                            <span>{label}</span>
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Select Size */}
                  <div>
                    <div className="flex justify-between items-center mb-3">
                      <label className="text-[0.62rem] font-bold uppercase tracking-[0.16em] text-[#8a7b71]">
                        {copy.quickViewModal.chooseSize}
                      </label>
                      <Link
                        to="/size-guide"
                        onClick={() => setModal(null)}
                        className="text-[0.6rem] uppercase tracking-wider text-[#c49a78] hover:text-[#a37351] transition-colors border-b border-[#c49a78]/20 pb-0.5"
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
                            className={`flex-1 py-3 text-center border text-xs tracking-wider transition-all rounded-lg ${isSelected
                              ? 'border-[#c49a78] bg-[#c49a78]/10 text-[#2b1b12] font-semibold'
                              : 'border-[#e8dbd1] text-[#8a7b71] hover:border-[#2b1b12]'
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
                    className="btn-primary w-full py-4.5 text-[0.68rem] tracking-[0.24em] font-semibold rounded-full bg-[#2b1b12] text-white hover:bg-[#c49a78] hover:shadow-gold transition-all duration-300 flex items-center justify-center gap-3"
                    disabled={added}
                  >
                    <ShoppingBag size={14} />
                    <span>
                      {added ? copy.quickViewModal.added : copy.quickViewModal.add}
                    </span>
                  </button>
                </form>

                {/* High-end Security Details Badges */}
                <div className="mt-8 pt-6 border-t border-[#e8dbd1] space-y-2.5 text-[0.78rem] text-[#8a7b71] font-sans font-bold">
                  <p className="flex items-center gap-2">
                    <Sparkles size={12} className="text-[#c49a78]" />
                    <span>{copy.quickViewModal.shipping}</span>
                  </p>
                  <p className="flex items-center gap-2">
                    <ShieldCheck size={12} className="text-[#c49a78]" />
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
