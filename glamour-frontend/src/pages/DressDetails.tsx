import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, Heart, ChevronRight, Share2, Ruler, Truck, ShieldCheck } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { useCart } from '../context/CartContext';
import { GOWNS_DATA } from '../data/gowns';

const GOLD = '#c5a059';
const DARK = '#362e24';

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

export default function DressDetails() {
  const { id } = useParams();
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === 'ar';
  const { addToCart: addGlobalToCart } = useCart();

  // Find the exact gown or fallback to the first gown
  const gown = GOWNS_DATA.find(g => g.id === id) || GOWNS_DATA[0];

  const [activeImage, setActiveImage] = useState(0);
  const [color, setColor] = useState<'white' | 'offWhite'>('white');
  const [size, setSize] = useState<'S' | 'M' | 'L'>('M');
  const [added, setAdded] = useState(false);
  const [isFav, setIsFav] = useState(false);
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  const handleAddToCart = (e: React.FormEvent) => {
    e.preventDefault();
    addGlobalToCart({
      id: gown.id,
      nameKey: gown.nameKey,
      catKey: gown.catKey,
      price: gown.price,
      image: gown.image,
      color,
      size
    });
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  // Generate thumbnail list using the main image and details images
  const allImages = gown.images && gown.images.length > 0 ? gown.images : [gown.image];

  return (
    <div className="min-h-screen pt-24 pb-32" style={{ background: 'var(--color-bg)' }}>
      
      {/* Breadcrumbs */}
      <div className="max-w-7xl mx-auto px-6 lg:px-16 mb-8 flex items-center gap-2 text-[0.65rem] font-bold uppercase tracking-widest text-muted">
        <Link to="/collections" className="hover:text-ink transition-colors flex items-center gap-1.5">
          <ArrowLeft size={12} className={isRTL ? 'rotate-180' : ''} />
          {isRTL ? 'العودة للمجموعات' : 'Back to Collections'}
        </Link>
        <ChevronRight size={10} className={`mx-2 ${isRTL ? 'rotate-180' : ''}`} />
        <span>{isRTL ? gown.category.ar : gown.category.en}</span>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-16">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">
          
          {/* ── IMAGE GALLERY ── */}
          <div className="lg:w-7/12 flex flex-col-reverse md:flex-row gap-4 lg:gap-6">
            {/* Thumbnails */}
            <div className="flex md:flex-col gap-4 overflow-x-auto md:overflow-y-auto hide-scrollbar md:w-24 shrink-0">
              {allImages.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveImage(idx)}
                  className={`relative aspect-[3/4] w-20 md:w-full overflow-hidden transition-all duration-300 ${activeImage === idx ? 'ring-1 ring-ink ring-offset-2 ring-offset-bg' : 'opacity-60 hover:opacity-100'}`}
                >
                  <img src={img} alt={`Thumbnail ${idx}`} className="w-full h-full object-cover" />
                </button>
              ))}
            </div>

            {/* Main Image */}
            <div className="relative aspect-[3/4] flex-1 overflow-hidden bg-brand-50 rounded-sm">
              <AnimatePresence mode="wait">
                <motion.img
                  key={activeImage}
                  initial={{ opacity: 0, scale: 1.02 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5 }}
                  src={allImages[activeImage]}
                  alt={isRTL ? gown.name.ar : gown.name.en}
                  className="w-full h-full object-cover cursor-zoom-in"
                />
              </AnimatePresence>
              <button 
                onClick={() => setIsFav(!isFav)}
                className={`heart-btn !top-6 !end-6 ${isFav ? 'active' : ''}`}
              >
                <Heart size={18} fill={isFav ? 'white' : 'none'} style={{ color: isFav ? 'white' : DARK }} strokeWidth={1.8} />
              </button>
            </div>
          </div>

          {/* ── PRODUCT INFO ── */}
          <div className="lg:w-5/12 pt-4 lg:pt-10 flex flex-col">
            <motion.div {...fadeUp}>
              <span className="block text-[0.65rem] font-bold uppercase tracking-[0.2em] text-brand mb-4">
                {isRTL ? gown.category.ar : gown.category.en}
              </span>
              <h1 className="font-serif text-4xl lg:text-5xl mb-4 text-ink leading-tight">
                {isRTL ? gown.name.ar : gown.name.en}
              </h1>
              <p className="price-gold text-3xl mb-8">${gown.price.toLocaleString()}</p>
            </motion.div>

            <motion.div {...fadeUp} transition={{ delay: 0.1 }} className="mb-10">
              <p className="text-muted leading-relaxed text-sm md:text-base">
                {isRTL ? gown.desc.ar : gown.desc.en}
              </p>
            </motion.div>

            <motion.form {...fadeUp} transition={{ delay: 0.2 }} onSubmit={handleAddToCart} className="space-y-8 mb-12">
              {/* Color Selector */}
              <div>
                <label className="block text-[0.65rem] font-bold uppercase tracking-[0.15em] text-muted mb-4">
                  {isRTL ? 'اللون' : 'Color'}
                </label>
                <div className="flex gap-4">
                  {[
                    { id: 'white', label: isRTL ? 'أبيض ناصع' : 'Pure White' },
                    { id: 'offWhite', label: isRTL ? 'أوف وايت' : 'Off-White' },
                  ].map((c) => {
                    const isSelected = color === c.id;
                    return (
                      <button
                        type="button"
                        key={c.id}
                        onClick={() => setColor(c.id as 'white' | 'offWhite')}
                        className={`flex items-center gap-2.5 px-4 py-2.5 border transition-all ${isSelected ? 'border-brand bg-[#fbf9f4] text-brand-dark font-bold' : 'border-surface-300 text-muted'}`}
                        style={{ borderRadius: '4px' }}
                      >
                        <span className={`w-3.5 h-3.5 rounded-full border flex items-center justify-center transition-colors ${isSelected ? 'border-brand' : 'border-surface-300'}`}>
                          {isSelected && <span className="w-2 h-2 rounded-full bg-brand" />}
                        </span>
                        <span className="text-xs">{c.label}</span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Size Selector */}
              <div>
                <div className="flex justify-between items-center mb-4">
                  <label className="text-[0.65rem] font-bold uppercase tracking-[0.15em] text-muted">
                    {isRTL ? 'المقاس' : 'Size'}
                  </label>
                  <Link to="/size-guide" className="text-[0.6rem] uppercase tracking-widest text-brand hover:text-brand-dark transition-colors flex items-center gap-1.5">
                    <Ruler size={12} />
                    {isRTL ? 'دليل المقاسات' : 'Size Guide'}
                  </Link>
                </div>
                <div className="grid grid-cols-3 gap-3">
                  {(['S', 'M', 'L'] as const).map((s) => {
                    const isSelected = size === s;
                    return (
                      <button
                        type="button"
                        key={s}
                        onClick={() => setSize(s)}
                        className={`py-3 text-center border text-xs tracking-wider transition-all ${isSelected ? 'border-brand bg-[#fbf9f4] text-brand-dark font-bold' : 'border-surface-300 text-muted hover:border-ink hover:text-ink'}`}
                        style={{ borderRadius: '4px' }}
                      >
                        {s}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Actions */}
              <div className="pt-4 flex gap-4">
                <button
                  type="submit"
                  className="btn-primary flex-1 py-4.5 text-[0.7rem] relative overflow-hidden"
                  disabled={added}
                >
                  <AnimatePresence mode="wait">
                    {added ? (
                      <motion.span key="added" initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ y: -20, opacity: 0 }} className="flex items-center justify-center gap-2">
                        {isRTL ? 'تمت الإضافة بنجاح' : 'Added Successfully'} <ShieldCheck size={14} />
                      </motion.span>
                    ) : (
                      <motion.span key="add" initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ y: -20, opacity: 0 }}>
                        {isRTL ? 'إضافة إلى الحقيبة' : 'Add to Bag'}
                      </motion.span>
                    )}
                  </AnimatePresence>
                </button>
                <button type="button" className="w-14 h-[52px] border border-surface-300 flex items-center justify-center text-ink hover:border-ink transition-colors">
                  <Share2 size={18} strokeWidth={1.5} />
                </button>
              </div>
            </motion.form>

            <motion.div {...fadeUp} transition={{ delay: 0.3 }} className="mt-auto space-y-4 pt-8 border-t border-surface-300">
              <div className="flex items-center gap-3 text-sm text-muted">
                <Truck size={18} strokeWidth={1.5} style={{ color: GOLD }} />
                <span>{isRTL ? 'شحن عالمي مجاني متوفر' : 'Complimentary worldwide shipping available'}</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-muted">
                <ShieldCheck size={18} strokeWidth={1.5} style={{ color: GOLD }} />
                <span>{isRTL ? 'ضمان المقاس المثالي والاستبدال' : 'Perfect fit guarantee and seamless exchange'}</span>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
