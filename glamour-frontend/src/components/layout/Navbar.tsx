import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Heart, ShoppingBag, Globe, Plus, Minus, Trash2 } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { useCart } from '../../context/CartContext';
import logo from '../../assets/logo.png';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const location = useLocation();
  const { t, i18n } = useTranslation();
  const { cartItems, addToCart, removeFromCart, totalAmount, totalItems } = useCart();

  const isHome = location.pathname === '/';
  const isRTL = i18n.language === 'ar';
  const isLightText = isHome && !scrolled;

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => { setIsOpen(false); setIsCartOpen(false); }, [location.pathname]);

  const toggleLanguage = () => {
    const newLang = i18n.language === 'en' ? 'ar' : 'en';
    i18n.changeLanguage(newLang);
    localStorage.setItem('i18nextLng', newLang);
  };

  const navItems = [
    { label: 'Couture Collections', to: '/collections' },
    { label: 'Atelier',             to: '/atelier'     },
    { label: 'Bespoke Service',     to: '/services'    },
    { label: 'Journal',             to: '/journal'     },
    { label: 'Contact',             to: '/contact'     },
  ];

  /* ── nav background transition ── */
  const navBg = scrolled
    ? ''   // handled by inline style below
    : isHome
      ? 'bg-transparent'
      : 'bg-white border-b border-surface-200';

  const navBorder = scrolled ? 'border-surface-200' : 'border-transparent';
  const textColor  = isLightText ? 'text-white'         : 'text-surface-900';
  const iconColor  = isLightText ? 'rgba(255,255,255,0.85)' : 'var(--color-surface-900)';

  const scrolledStyle = scrolled ? {
    background: 'rgba(245,241,236,0.82)',
    backdropFilter: 'blur(20px)',
    WebkitBackdropFilter: 'blur(20px)',
    borderBottom: '1px solid rgba(198,162,122,0.18)',
    boxShadow: '0 4px 32px rgba(42,30,26,0.06)',
  } : {};

  return (
    <>
      <nav className={`fixed w-full z-50 transition-all duration-500 ${navBg} ${navBorder}`} style={scrolledStyle}>
        <div className="max-w-7xl mx-auto px-6 lg:px-12 h-[84px] flex items-center justify-between">

          {/* ── Left: nav links (desktop) ── */}
          <div className="hidden lg:flex items-center gap-10">
            {navItems.map(({ label, to }) => (
              <Link
                key={to}
                to={to}
                className={`nav-link ${textColor}`}
                style={{ color: isLightText ? 'rgba(255,255,255,0.88)' : 'var(--color-surface-900)' }}
              >
                {label}
              </Link>
            ))}
          </div>

          {/* ── Center: logo ── */}
          <Link
            to="/"
            className="absolute left-1/2 -translate-x-1/2 flex items-center justify-center"
          >
            <img 
              src={logo} 
              alt="Glamour Group" 
              className="h-20 lg:h-24 object-contain transition-opacity duration-300 hover:opacity-80 rounded-sm"
            />
          </Link>

          {/* ── Right: actions (desktop) ── */}
          <div className="hidden lg:flex items-center gap-6">
            <button
              onClick={toggleLanguage}
              className={`nav-link ${textColor} text-[0.62rem] tracking-[0.22em] flex items-center gap-1.5`}
              style={{ color: iconColor }}
            >
              <Globe size={14} strokeWidth={1.8} />
              {i18n.language === 'ar' ? 'EN' : 'AR'}
            </button>

            <button
              style={{ color: iconColor }}
              className="transition-colors hover:opacity-70"
            >
              <Heart size={18} strokeWidth={1.6} />
            </button>

            {/* Cart trigger with badge */}
            <button
              onClick={() => setIsCartOpen(true)}
              className="relative transition-opacity hover:opacity-70"
              style={{ color: iconColor }}
            >
              <ShoppingBag size={18} strokeWidth={1.6} />
              {totalItems > 0 && (
                <span
                  className="absolute -top-2 -right-2 text-white text-[9px] font-bold flex items-center justify-center rounded-full"
                  style={{ width: 16, height: 16, background: 'var(--color-gold)', fontFamily: 'Manrope, sans-serif' }}
                >
                  {totalItems}
                </span>
              )}
            </button>

            <Link
              to="/book-appointment"
              className="nav-link text-[0.62rem] tracking-[0.22em] px-5 py-2.5 rounded-full border transition-all"
              style={{
                border: isLightText ? '1.5px solid rgba(255,255,255,0.5)' : '1.5px solid var(--color-surface-900)',
                color: isLightText ? 'white' : 'var(--color-surface-900)',
              }}
              onMouseEnter={e => {
                const el = e.currentTarget as HTMLElement;
                el.style.background = isLightText ? 'rgba(255,255,255,0.15)' : 'var(--color-surface-900)';
                el.style.color = isLightText ? 'white' : 'white';
              }}
              onMouseLeave={e => {
                const el = e.currentTarget as HTMLElement;
                el.style.background = 'transparent';
                el.style.color = isLightText ? 'white' : 'var(--color-surface-900)';
              }}
            >
              {t('nav.bookAppointment')}
            </Link>
          </div>

          {/* ── Mobile right ── */}
          <div className="lg:hidden flex items-center gap-4 ms-auto">
            <button onClick={() => setIsCartOpen(true)} className="relative" style={{ color: iconColor }}>
              <ShoppingBag size={20} strokeWidth={1.6} />
              {totalItems > 0 && (
                <span className="absolute -top-2 -right-2 text-white text-[8px] font-bold flex items-center justify-center rounded-full"
                  style={{ width: 15, height: 15, background: 'var(--color-gold)' }}>
                  {totalItems}
                </span>
              )}
            </button>
            <button onClick={toggleLanguage} className={`text-[0.6rem] font-bold uppercase tracking-widest ${textColor}`}>
              {i18n.language === 'ar' ? 'EN' : 'AR'}
            </button>
            <button onClick={() => setIsOpen(!isOpen)} style={{ color: iconColor }}>
              {isOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>

        {/* ── Mobile menu ── */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden overflow-hidden bg-white border-t"
              style={{ borderColor: 'var(--color-surface-300)' }}
            >
              <div className="px-6 py-8 flex flex-col gap-6">
                {navItems.map(({ label, to }) => (
                  <Link
                    key={to}
                    to={to}
                    className="nav-link text-surface-900 text-sm"
                    style={{ color: 'var(--color-surface-900)' }}
                  >
                    {label}
                  </Link>
                ))}
                <Link to="/book-appointment" className="btn-primary text-center mt-2">
                  {t('nav.bookAppointment')}
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* ════════════════════════════════════
          CART DRAWER
          ════════════════════════════════════ */}
      <AnimatePresence>
        {isCartOpen && (
          <div className="fixed inset-0 z-50 flex justify-end">
            {/* backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsCartOpen(false)}
              className="absolute inset-0"
              style={{ background: 'rgba(26,21,17,0.45)', backdropFilter: 'blur(4px)' }}
            />

            {/* panel */}
            <motion.div
              initial={{ x: isRTL ? '-100%' : '100%' }}
              animate={{ x: 0 }}
              exit={{ x: isRTL ? '-100%' : '100%' }}
              transition={{ type: 'tween', duration: 0.38, ease: [0.22, 1, 0.36, 1] }}
              className="relative h-full bg-white flex flex-col z-10"
              style={{ width: 'min(420px, 100vw)', boxShadow: 'var(--shadow-xl)' }}
            >
              {/* Header */}
              <div className="flex items-center justify-between px-7 py-5" style={{ borderBottom: '1px solid var(--color-surface-300)' }}>
                <div className="flex items-center gap-3">
                  <ShoppingBag size={18} style={{ color: 'var(--color-gold)' }} strokeWidth={1.5} />
                  <span style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '1.25rem', fontWeight: 500, color: 'var(--color-text)' }}>
                    {isRTL ? 'حقيبة التسوق' : 'Shopping Bag'}
                  </span>
                  {totalItems > 0 && (
                    <span className="text-[0.62rem] font-bold px-2.5 py-0.5 rounded-full" style={{ background: 'var(--color-brand-100)', color: 'var(--color-gold)' }}>
                      {totalItems}
                    </span>
                  )}
                </div>
                <button
                  onClick={() => setIsCartOpen(false)}
                  className="w-8 h-8 rounded-full flex items-center justify-center transition-colors hover:bg-surface-100"
                  style={{ background: 'var(--color-brand-50)' }}
                >
                  <X size={16} />
                </button>
              </div>

              {/* Items */}
              <div className="flex-1 overflow-y-auto px-7 py-5 space-y-5">
                {cartItems.length === 0 ? (
                  <div className="h-full flex flex-col items-center justify-center text-center py-16">
                    <ShoppingBag size={40} strokeWidth={1} className="mb-5" style={{ color: 'var(--color-brand-300)' }} />
                    <p style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '1.2rem', color: 'var(--color-muted)' }}>
                      {isRTL ? 'حقيبتك فارغة' : 'Your bag is empty'}
                    </p>
                    <button
                      onClick={() => setIsCartOpen(false)}
                      className="btn-brand mt-6 text-[0.62rem] tracking-[0.2em]"
                    >
                      {isRTL ? 'تصفح الفساتين' : 'Browse Gowns'}
                    </button>
                  </div>
                ) : cartItems.map((item) => (
                  <div
                    key={`${item.id}-${item.color}-${item.size}`}
                    className="flex gap-4 pb-5"
                    style={{ borderBottom: '1px solid var(--color-surface-300)' }}
                  >
                    <div className="w-20 h-24 rounded-xl overflow-hidden shrink-0" style={{ background: 'var(--color-brand-50)' }}>
                      <img src={item.image} alt={t(item.nameKey)} className="w-full h-full object-cover" />
                    </div>
                    <div className="flex-1 flex flex-col justify-between">
                      <div className="flex justify-between items-start">
                        <div>
                          <h4 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '1rem', fontWeight: 500, color: 'var(--color-text)' }}>
                            {t(item.nameKey)}
                          </h4>
                          <p className="text-[0.62rem] font-bold uppercase tracking-widest mt-0.5" style={{ color: 'var(--color-gold)' }}>
                            {t(item.catKey)}
                          </p>
                          <p className="text-[0.7rem] mt-1" style={{ color: 'var(--color-muted)' }}>
                            {item.size}
                          </p>
                        </div>
                        <button onClick={() => removeFromCart(item.id, item.color, item.size)} className="text-surface-400 hover:text-red-400 transition-colors">
                          <Trash2 size={14} />
                        </button>
                      </div>
                      <div className="flex items-center justify-between mt-3">
                        <div className="flex items-center gap-2 px-3 py-1 rounded-full" style={{ border: '1px solid var(--color-surface-300)' }}>
                          <button onClick={() => item.quantity > 1 ? addToCart({ ...item }, -1) : removeFromCart(item.id, item.color, item.size)} className="hover:text-gold transition-colors">
                            <Minus size={11} />
                          </button>
                          <span className="text-xs font-semibold w-4 text-center">{item.quantity}</span>
                          <button onClick={() => addToCart({ ...item }, 1)} className="hover:text-gold transition-colors">
                            <Plus size={11} />
                          </button>
                        </div>
                        <span className="price-gold text-base">${(item.price * item.quantity).toLocaleString()}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Footer */}
              {cartItems.length > 0 && (
                <div className="px-7 py-6" style={{ borderTop: '1px solid var(--color-surface-300)', background: 'var(--color-brand-50)' }}>
                  <div className="flex justify-between items-center mb-5">
                    <span className="text-xs font-medium tracking-wider uppercase" style={{ color: 'var(--color-muted)' }}>
                      {isRTL ? 'المجموع' : 'Total'}
                    </span>
                    <span className="price-gold text-xl">${totalAmount.toLocaleString()}</span>
                  </div>
                  <button
                    className="btn-primary w-full"
                    onClick={() => { setIsCartOpen(false); }}
                  >
                    {isRTL ? 'إتمام الطلب' : 'Checkout'}
                  </button>
                </div>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
