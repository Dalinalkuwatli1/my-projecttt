import { motion, AnimatePresence, useInView } from 'framer-motion';
import { Heart, X, SlidersHorizontal, ChevronDown, ChevronLeft, ChevronRight, Sparkles, ShieldCheck, ShoppingBag, Check } from 'lucide-react';
import { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useCart } from '../context/CartContext';
import { GOWNS_DATA } from '../data/gowns';
import type { Gown } from '../data/gowns';



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

function AnimatedCounter({ value, duration = 1800 }: { value: string; duration?: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-20px' });
  const [count, setCount] = useState(0);

  const numericValue = parseInt(value.replace(/[^0-9]/g, ''), 10) || 0;
  const suffix = value.replace(/[0-9]/g, '');

  useEffect(() => {
    if (!isInView) return;
    let start = 0;
    const end = numericValue;
    if (start === end) return;

    const totalSteps = 50;
    const stepTime = Math.max(Math.floor(duration / totalSteps), 15);
    const stepValue = Math.ceil(end / totalSteps);

    const timer = setInterval(() => {
      start += stepValue;
      if (start >= end) {
        clearInterval(timer);
        setCount(end);
      } else {
        setCount(start);
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, [numericValue, isInView, duration]);

  return <span ref={ref}>{count}{suffix}</span>;
}

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
    <div className="min-h-screen pb-20 selection:bg-amber-100 selection:text-ink bg-[#F7F4EF] text-[#2b1b12]">

      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
         1. CINEMATIC FULL-WIDTH BACKGROUND HERO
         ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section
        className="relative h-screen min-h-[560px] w-full flex items-center justify-center text-center px-6"
        style={{
          backgroundImage: 'url(https://images.pexels.com/photos/1488316/pexels-photo-1488316.jpeg?auto=compress&cs=tinysrgb&w=1800)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/52" />
        {/* Bottom fade to page bg */}
        <div className="absolute inset-x-0 bottom-0 h-48"
          style={{ background: 'linear-gradient(to top, #F7F4EF, transparent)' }} />

        {/* Text — centered over the background image */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          className="relative z-10 max-w-3xl mx-auto text-white space-y-6 pt-20"
        >
          <span className="text-[0.72rem] font-bold uppercase tracking-[0.48em] text-[#C6A27A] block">
            {isRTL ? '✦ التصميمات الحصرية ✦' : '✦ THE EXCLUSIVE DESIGNS ✦'}
          </span>
          <h1 className="font-sans text-5xl md:text-7xl text-white leading-tight tracking-wide font-extrabold drop-shadow-lg">
            {isRTL ? 'عالم من الأناقة المصممة خصيصاً لكِ' : 'A World of Tailored Elegance'}
          </h1>
          <div className="w-16 h-[1px] bg-[#C6A27A] mx-auto" />
          <p className="text-white/90 font-sans font-semibold text-sm md:text-base max-w-xl mx-auto leading-relaxed drop-shadow-sm">
            {isRTL
              ? 'كل تصميم في دار غلايمور كوتور وُلد من رؤية فنية مستقلة، حيث تلتقي الحرفية الراقية مع الإبداع المعاصر لتقديم فساتين استثنائية تروي قصة كل عروس بأسلوب فريد.'
              : 'Every design at Glamour Couture is born from an independent artistic vision, where fine craft meets contemporary creativity to present extraordinary gowns.'}
          </p>
        </motion.div>
      </section>

      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
         4. ATMowns GALLERY & INTERACTIVE FILTERS
         ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section id="gowns-gallery-section" className="scroll-mt-28 max-w-7xl mx-auto px-6 lg:px-16 pt-16">
        
        {/* Title */}
        <div className="text-center mb-16">
          <motion.div {...textReveal}>
            <span className="text-[0.72rem] font-extrabold uppercase tracking-[0.34em] text-[#c49a78] block mb-3">
              ✦ {currentLang === 'ar' ? 'معرض التصميمات الملكية' : 'ROYAL CREATIONS'} ✦
            </span>
            <h2 className="font-sans text-4xl md:text-5xl text-[#2b1b12] font-extrabold">
              {copy.gallery.title}
            </h2>
            <p className="text-[#8a7b71] font-sans font-bold text-sm mt-4">
              {copy.gallery.subtitle}
            </p>
          </motion.div>
        </div>

        {/* BESPOKE BOUTIQUE FILTER BAR */}
        <div className="relative z-30 mb-12 pb-6 border-b border-[#e8dbd1]">
          <div className="flex flex-wrap items-center justify-between gap-6">
            
            {/* Filter icon label */}
            <div className="flex items-center gap-2.5 text-[0.68rem] font-bold uppercase tracking-widest text-[#8a7b71]">
              <SlidersHorizontal size={14} className="text-[#c49a78]" />
              <span>{isRTL ? 'تصفية بوتيك غلايمور الفاخرة' : 'Bespoke Boutique Filters'}</span>
            </div>

            {/* Filter categories */}
            <div className="flex flex-wrap items-center gap-6 md:gap-8">
              {/* Category Filter */}
              <button
                onClick={() => setActiveFilterTab(activeFilterTab === 'category' ? null : 'category')}
                className={`flex items-center gap-1.5 hover:text-[#c49a78] transition-colors text-[0.68rem] font-bold uppercase tracking-[0.16em] ${selectedCategory ? 'text-[#c49a78]' : 'text-[#2b1b12]'}`}
              >
                <span>{selectedCategory ? (isRTL ? `الفئة: ${selectedCategory}` : `Cat: ${selectedCategory}`) : (isRTL ? 'الفئة' : 'Category')}</span>
                <ChevronDown size={11} className={`transition-transform duration-300 ${activeFilterTab === 'category' ? 'rotate-180' : ''}`} />
              </button>

              {/* Color Filter */}
              <button
                onClick={() => setActiveFilterTab(activeFilterTab === 'color' ? null : 'color')}
                className={`flex items-center gap-1.5 hover:text-[#c49a78] transition-colors text-[0.68rem] font-bold uppercase tracking-[0.16em] ${selectedColor ? 'text-[#c49a78]' : 'text-[#2b1b12]'}`}
              >
                <span>{selectedColor ? (isRTL ? `اللون: ${selectedColor === 'white' ? 'أبيض' : 'أوف وايت'}` : `Tone: ${selectedColor === 'white' ? 'White' : 'Off-White'}`) : (isRTL ? 'الدرجة' : 'Tone')}</span>
                <ChevronDown size={11} className={`transition-transform duration-300 ${activeFilterTab === 'color' ? 'rotate-180' : ''}`} />
              </button>

              {/* Size Filter */}
              <button
                onClick={() => setActiveFilterTab(activeFilterTab === 'size' ? null : 'size')}
                className={`flex items-center gap-1.5 hover:text-[#c49a78] transition-colors text-[0.68rem] font-bold uppercase tracking-[0.16em] ${selectedSize ? 'text-[#c49a78]' : 'text-[#2b1b12]'}`}
              >
                <span>{selectedSize ? (isRTL ? `المقاس: ${selectedSize}` : `Size: ${selectedSize}`) : (isRTL ? 'المقاس' : 'Size')}</span>
                <ChevronDown size={11} className={`transition-transform duration-300 ${activeFilterTab === 'size' ? 'rotate-180' : ''}`} />
              </button>

              {/* Price Filter */}
              <button
                onClick={() => setActiveFilterTab(activeFilterTab === 'price' ? null : 'price')}
                className={`flex items-center gap-1.5 hover:text-[#c49a78] transition-colors text-[0.68rem] font-bold uppercase tracking-[0.16em] ${priceRange ? 'text-[#c49a78]' : 'text-[#2b1b12]'}`}
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
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-4 gap-y-10" style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))' }}>
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
                        favorites.has(g.id) ? 'bg-[#c49a78] border-[#c49a78]' : 'bg-white/70 hover:bg-white'
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
                      className="quick-view-btn absolute inset-x-0 bottom-0 py-4 text-[0.62rem] font-bold uppercase tracking-[0.22em] text-white bg-[#2b1b12]/80 backdrop-blur-md hover:bg-[#c49a78]/90 transition-all border-t border-white/10 text-center"
                      onClick={(e) => { e.stopPropagation(); openModal(g); }}
                    >
                      {t('collections.quickView')}
                    </button>
                  </div>

                  {/* Card Description — Couture-grade */}
                  <div className="text-center space-y-1.5 px-1">
                    <span className="block text-[0.52rem] font-bold uppercase tracking-[0.22em] text-[#C6A27A]">
                      {isRTL ? g.category.ar : g.category.en}
                    </span>
                    <h3 className="font-sans text-base leading-snug text-[#2F1D16] font-bold">
                      {isRTL ? g.name.ar : g.name.en}
                    </h3>
                    <p className="text-[0.62rem] font-sans text-[#3B2A23]/70 font-bold leading-relaxed">
                      {isRTL ? 'تفصيل يدوي فاخر · تطريز فرنسي حصري · حسب المقاس' : 'Handcrafted Couture · French Embroidery · Bespoke Fit'}
                    </p>
                    <p className="font-sans text-[#C6A27A] text-sm font-extrabold">
                      ${g.price.toLocaleString()}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* LUXURY PAGINATION SYSTEM */}
            {totalPages > 1 && (
              <div className="flex items-center justify-center gap-8 mt-24 pt-8 border-t border-[#e8dbd1]/60">
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
                        className={`w-9 h-9 rounded-full flex items-center justify-center transition-all ${
                          isActive 
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


      <section className="max-w-7xl mx-auto px-6 lg:px-16 mt-12">
        <div className="relative rounded-[32px] overflow-hidden bg-[#2b1b12] text-white p-8 md:p-16 flex flex-col lg:flex-row items-center gap-12 shadow-xl">
          <div className="absolute inset-0 opacity-15 pointer-events-none">
            <img 
              src="https://images.pexels.com/photos/291759/pexels-photo-291759.jpeg?auto=compress&cs=tinysrgb&w=900" 
              alt="Atelier fitting room background" 
              className="w-full h-full object-cover" 
            />
          </div>
          
          <div className="lg:w-3/5 space-y-6 relative z-10">
            <span className="text-[0.62rem] font-extrabold uppercase tracking-[0.28em] text-[#c49a78] block">
              {isRTL ? '✦ احجزي استشارتكِ الخاصة ✦' : '✦ PRIVATE APPOINTMENTS ✦'}
            </span>
            <h2 className="font-sans text-3xl md:text-5xl font-extrabold leading-tight">
              {isRTL ? 'ابدئي رحلتكِ نحو الأناقة الأبدية' : 'Begin Your Haute Couture Journey'}
            </h2>
            <p className="text-white/80 font-sans font-semibold text-sm md:text-base leading-relaxed">
              {isRTL 
                ? 'استمتعي باستشارة مجانية مدتها 45 دقيقة مع أحد مصممي الدار. سنساعدكِ في فهم الأقمشة والقصات الملائمة لجسدك وتصميم الفستان الاستثنائي الخاص بكِ.'
                : 'Experience a complimentary 45-minute digital or in-studio session. We map the silhouette and fabric pairings perfectly tailored to your posture.'}
            </p>
            <div className="pt-4">
              <Link 
                to="/book-appointment" 
                className="btn-brand inline-flex items-center gap-2 rounded-full font-extrabold uppercase tracking-wider py-4 px-10 text-[0.68rem]"
              >
                {isRTL ? 'ابدئي تصميم فستانكِ الخاص ✦' : 'Begin Designing Your Gown ✦'}
              </Link>
            </div>
          </div>

          <div className="lg:w-2/5 w-full relative z-10">
            <div className="glass p-8 rounded-[24px] bg-white/5 border border-white/10 backdrop-blur-md space-y-6 text-sm">
              <h4 className="font-sans text-white font-bold text-lg border-b border-white/10 pb-4">
                {isRTL ? 'ما الذي تتضمنه الجلسة؟' : "What's Included"}
              </h4>
              <div className="space-y-4 font-semibold text-white/90 text-xs">
                <p className="flex items-center gap-3">
                  <Check size={14} className="text-[#c49a78]" />
                  <span>{isRTL ? 'استشارة فردية لمدة 45 دقيقة' : '45-minute private 1-on-1'}</span>
                </p>
                <p className="flex items-center gap-3">
                  <Check size={14} className="text-[#c49a78]" />
                  <span>{isRTL ? 'مراجعة احترافية للقياسات والقصات الملائمة' : 'Curated fabric and design blueprint review'}</span>
                </p>
                <p className="flex items-center gap-3">
                  <Check size={14} className="text-[#c49a78]" />
                  <span>{isRTL ? 'تخصيص كامل للتفاصيل والتطريز' : 'Bespoke handcraft tailoring options'}</span>
                </p>
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
                  ${modal.price.toLocaleString()}
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
                                ? 'border-[#c49a78] bg-[#c49a78]/10 text-[#2b1b12] font-semibold' 
                                : 'border-[#e8dbd1] text-[#8a7b71] hover:border-[#2b1b12]'
                            }`}
                          >
                            <span className={`w-3.5 h-3.5 rounded-full border flex items-center justify-center transition-colors ${isSelected ? 'border-[#c49a78]' : 'border-[#e8dbd1]'}`}>
                              {isSelected && <span className="w-2 h-2 rounded-full bg-[#c49a78]" />}
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
                            className={`flex-1 py-3 text-center border text-xs tracking-wider transition-all rounded-lg ${
                              isSelected 
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
