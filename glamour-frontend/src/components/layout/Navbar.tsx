import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Heart, ShoppingBag, Globe, Plus, Minus, Trash2, User } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { useCart } from '../../context/CartContext';
import logo from '../../assets/logo.png';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const location = useLocation();
  const { t, i18n } = useTranslation();
  const { cartItems, addToCart, removeFromCart, totalAmount, totalItems } = useCart();

  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [loginEmail, setLoginEmail] = useState('');
  const [loginPassword, setLoginPassword] = useState('');
  const [loginName, setLoginName] = useState('');
  const [loginWeddingDate, setLoginWeddingDate] = useState('');
  const [isRegisterMode, setIsRegisterMode] = useState(false);
  const [authError, setAuthError] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userName, setUserName] = useState('');

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
    { label: isRTL ? 'الرئيسية' : 'Home', to: '/' },
    { label: isRTL ? 'التصميم' : 'Collections', to: '/collections' },
    { label: isRTL ? 'من نحن' : 'About Us',  to: '/our-story'   },
    { label: isRTL ? 'تواصلي معنا' : 'Contact Us', to: '/contact'     },
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
    background: 'rgba(255,255,255,0.95)',
    backdropFilter: 'blur(15px)',
    WebkitBackdropFilter: 'blur(15px)',
    borderBottom: '1px solid rgba(194,157,102,0.25)',
    boxShadow: '0 4px 32px rgba(42,30,26,0.06)',
  } : {};

  return (
    <>
      <nav className={`fixed w-full z-50 transition-all duration-500 ${navBg} ${navBorder}`} style={scrolledStyle}>
        <div className="max-w-7xl mx-auto px-6 lg:px-12 h-[96px] flex items-center justify-between relative">

          {/* ── Left Column: nav links (desktop) ── */}
          <div className="hidden lg:flex items-center gap-6 xl:gap-8 w-[40%] justify-start relative">
            {navItems.map(({ label, to }) => {
              const isCollections = to === '/collections';
              if (isCollections) {
                return (
                  <div
                    key={to}
                    className="relative group py-2"
                    onMouseEnter={() => setIsDropdownOpen(true)}
                    onMouseLeave={() => setIsDropdownOpen(false)}
                  >
                    <button
                      onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                      className={`nav-link ${textColor} text-[0.68rem] xl:text-[0.72rem] tracking-[0.18em] uppercase font-medium flex items-center gap-1.5`}
                      style={{ color: isLightText ? 'rgba(255,255,255,0.88)' : 'var(--color-surface-900)' }}
                    >
                      {label}
                      <motion.span
                        animate={{ rotate: isDropdownOpen ? 180 : 0 }}
                        transition={{ duration: 0.2 }}
                        className="text-[8px]"
                      >
                        ▼
                      </motion.span>
                    </button>

                    {/* Dropdown Menu */}
                    <AnimatePresence>
                      {isDropdownOpen && (
                        <motion.div
                          initial={{ opacity: 0, y: 15 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 15 }}
                          transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
                          className="absolute top-full left-0 mt-1 w-48 bg-[#FAF7F2] border border-[#e8dbd1] rounded-2xl shadow-xl overflow-hidden py-2 z-50 text-[#2b1b12]"
                          style={{
                            backdropFilter: 'blur(10px)',
                          }}
                        >
                          <Link
                            to="/collections?type=wedding"
                            className="block px-5 py-3 text-[0.72rem] font-bold tracking-wider hover:bg-[#C6A27A]/15 hover:text-[#C6A27A] transition-all border-b border-[#e8dbd1]/40"
                            onClick={() => setIsDropdownOpen(false)}
                          >
                            {isRTL ? 'فساتين زفاف' : 'Wedding Gowns'}
                          </Link>
                          <Link
                            to="/collections?type=evening"
                            className="block px-5 py-3 text-[0.72rem] font-bold tracking-wider hover:bg-[#C6A27A]/15 hover:text-[#C6A27A] transition-all"
                            onClick={() => setIsDropdownOpen(false)}
                          >
                            {isRTL ? 'فساتين سهرة' : 'Evening Gowns'}
                          </Link>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              }
              return (
                <Link
                  key={to}
                  to={to}
                  className={`nav-link ${textColor} text-[0.68rem] xl:text-[0.72rem] tracking-[0.18em] uppercase font-medium`}
                  style={{ color: isLightText ? 'rgba(255,255,255,0.88)' : 'var(--color-surface-900)' }}
                >
                  {label}
                </Link>
              );
            })}
          </div>

          {/* ── Center Column Spacer for absolute-positioned logo ── */}
          <div className="hidden lg:block w-[20%]" />

          {/* ── Center: logo ── */}
          <Link
            to="/"
            className="absolute left-1/2 -translate-x-1/2 flex items-center justify-center z-10"
          >
            <img 
              src={logo} 
              alt="Glamour Haute Couture" 
              className="object-contain transition-opacity duration-300 hover:opacity-80 rounded-sm"
              style={{ height: 'clamp(60px, 6vw, 90px)' }}
            />
          </Link>

          {/* ── Right Column: actions (desktop) ── */}
          <div className="hidden lg:flex items-center gap-5 xl:gap-6 w-[40%] justify-end">
            <button
              onClick={toggleLanguage}
              className={`nav-link ${textColor} text-[0.62rem] xl:text-[0.68rem] tracking-[0.22em] flex items-center gap-1.5`}
              style={{ color: iconColor }}
            >
              <Globe size={14} strokeWidth={1.8} />
              {i18n.language === 'ar' ? 'EN' : 'AR'}
            </button>

            {/* User Login Trigger */}
            <button
              onClick={() => {
                if (isLoggedIn) {
                  setIsLoggedIn(false);
                  setUserName('');
                } else {
                  setIsLoginOpen(true);
                }
              }}
              className="relative transition-opacity hover:opacity-70 flex items-center gap-1.5"
              style={{ color: iconColor }}
              title={isLoggedIn ? (isRTL ? 'تسجيل الخروج' : 'Log Out') : (isRTL ? 'تسجيل الدخول / التسجيل' : 'Log In / Register')}
            >
              <User size={18} strokeWidth={1.6} />
              {isLoggedIn && (
                <span className="text-[9px] uppercase tracking-wider text-[#C6A27A] font-bold hidden xl:inline">
                  {isRTL ? `مرحباً، ${userName.split(' ')[0]}` : `Hi, ${userName.split(' ')[0]}`}
                </span>
              )}
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
              className="text-[0.68rem] font-bold uppercase tracking-[0.2em] px-6 py-3 rounded-full transition-all duration-300 bg-[#C6A27A] text-[#211712] hover:bg-[#e0cbb8] shadow-md hover:shadow-[#C6A27A]/20"
            >
              {isRTL ? 'احجزي استشارتكِ' : 'Book Consultation'}
            </Link>
          </div>

          {/* ── Mobile right ── */}
          <div className="lg:hidden flex items-center gap-4 ms-auto">
            <button
              onClick={() => {
                if (isLoggedIn) {
                  setIsLoggedIn(false);
                  setUserName('');
                } else {
                  setIsLoginOpen(true);
                }
              }}
              style={{ color: iconColor }}
            >
              <User size={20} strokeWidth={1.6} />
            </button>
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
                {navItems.map(({ label, to }) => {
                  const isCollections = to === '/collections';
                  if (isCollections) {
                    return (
                      <div key={to} className="flex flex-col gap-3">
                        <span className="text-surface-900 text-sm font-semibold tracking-wider">
                          {label}
                        </span>
                        <div className="flex flex-col gap-2 ps-4 border-l border-[#e8dbd1] text-left">
                          <Link
                            to="/collections?type=wedding"
                            className="text-surface-600 text-xs font-medium"
                            onClick={() => setIsOpen(false)}
                          >
                            {isRTL ? '— فساتين زفاف' : '— Wedding Gowns'}
                          </Link>
                          <Link
                            to="/collections?type=evening"
                            className="text-surface-600 text-xs font-medium"
                            onClick={() => setIsOpen(false)}
                          >
                            {isRTL ? '— فساتين سهرة' : '— Evening Gowns'}
                          </Link>
                        </div>
                      </div>
                    );
                  }
                  return (
                    <Link
                      key={to}
                      to={to}
                      className="nav-link text-surface-900 text-sm"
                      style={{ color: 'var(--color-surface-900)' }}
                      onClick={() => setIsOpen(false)}
                    >
                      {label}
                    </Link>
                  );
                })}
                <Link to="/book-appointment" className="btn-primary text-center mt-2" onClick={() => setIsOpen(false)}>
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
      {/* ════════════════════════════════════
          LUXURY USER LOGIN/REGISTER MODAL
          ════════════════════════════════════ */}
      <AnimatePresence>
        {isLoginOpen && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsLoginOpen(false)}
              className="absolute inset-0 bg-black/70 backdrop-blur-md"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 15 }}
              className="relative w-full max-w-md bg-[#F5F1EC] text-[#2b1b12] rounded-[28px] overflow-hidden shadow-2xl z-10 border border-[#e8dbd1] p-8 md:p-10"
            >
              {/* Close Button */}
              <button
                onClick={() => setIsLoginOpen(false)}
                className="absolute top-5 right-5 w-8 h-8 flex items-center justify-center rounded-full border border-[#2b1b12]/10 hover:bg-[#2b1b12]/5 transition-all"
              >
                <X size={14} />
              </button>

              {/* Title Header */}
              <div className="text-center mb-8">
                <span className="text-[0.62rem] font-extrabold uppercase tracking-[0.28em] text-[#C6A27A] block mb-2">
                  {isRTL ? '✦ دار غلايمور كوتور ✦' : '✦ THE HOUSE OF GLAMOUR ✦'}
                </span>
                <h3 className="text-2xl font-bold font-serif" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                  {isRegisterMode 
                    ? (isRTL ? 'انضمي لعضوية الكوتور' : 'Couture Club Membership')
                    : (isRTL ? 'بوابة تسجيل الدخول' : 'Atelier Member Portal')
                  }
                </h3>
              </div>

              {authError && (
                <div className="mb-4 text-xs font-bold text-red-600 bg-red-50 p-3 rounded-xl border border-red-200 text-center">
                  {authError}
                </div>
              )}

              {/* Form Input fields */}
              <form 
                onSubmit={(e) => {
                  e.preventDefault();
                  if (isRegisterMode) {
                    if (!loginName || !loginEmail || !loginPassword) {
                      setAuthError(isRTL ? 'يرجى ملء جميع الحقول المطلوبة' : 'Please fill all required fields');
                      return;
                    }
                    setIsLoggedIn(true);
                    setUserName(loginName);
                    setIsLoginOpen(false);
                  } else {
                    if (!loginEmail || !loginPassword) {
                      setAuthError(isRTL ? 'يرجى إدخال البريد الإلكتروني وكلمة المرور' : 'Email and password required');
                      return;
                    }
                    setIsLoggedIn(true);
                    setUserName(loginEmail.split('@')[0]);
                    setIsLoginOpen(false);
                  }
                  setAuthError('');
                }}
                className="space-y-4"
              >
                {isRegisterMode && (
                  <div>
                    <label className="block text-[0.65rem] font-bold uppercase tracking-wider text-[#8a7b71] mb-1.5">
                      {isRTL ? 'الاسم بالكامل *' : 'Full Name *'}
                    </label>
                    <input
                      type="text"
                      required
                      value={loginName}
                      onChange={(e) => setLoginName(e.target.value)}
                      placeholder={isRTL ? 'اسم العروس...' : 'Your name...'}
                      className="w-full bg-white border border-[#e8dbd1] rounded-full px-5 py-3 text-xs focus:outline-none focus:border-[#C6A27A] transition-colors"
                    />
                  </div>
                )}

                <div>
                  <label className="block text-[0.65rem] font-bold uppercase tracking-wider text-[#8a7b71] mb-1.5">
                    {isRTL ? 'البريد الإلكتروني *' : 'Email Address *'}
                  </label>
                  <input
                    type="email"
                    required
                    value={loginEmail}
                    onChange={(e) => setLoginEmail(e.target.value)}
                    placeholder="email@example.com"
                    className="w-full bg-white border border-[#e8dbd1] rounded-full px-5 py-3 text-xs focus:outline-none focus:border-[#C6A27A] transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-[0.65rem] font-bold uppercase tracking-wider text-[#8a7b71] mb-1.5">
                    {isRTL ? 'كلمة المرور *' : 'Password *'}
                  </label>
                  <input
                    type="password"
                    required
                    value={loginPassword}
                    onChange={(e) => setLoginPassword(e.target.value)}
                    placeholder="••••••••"
                    className="w-full bg-white border border-[#e8dbd1] rounded-full px-5 py-3 text-xs focus:outline-none focus:border-[#C6A27A] transition-colors"
                  />
                </div>

                {isRegisterMode && (
                  <div>
                    <label className="block text-[0.65rem] font-bold uppercase tracking-wider text-[#8a7b71] mb-1.5">
                      {isRTL ? 'تاريخ الزفاف المتوقع (اختياري)' : 'Expected Wedding Date (Optional)'}
                    </label>
                    <input
                      type="date"
                      value={loginWeddingDate}
                      onChange={(e) => setLoginWeddingDate(e.target.value)}
                      className="w-full bg-white border border-[#e8dbd1] rounded-full px-5 py-3 text-xs focus:outline-none focus:border-[#C6A27A] transition-colors"
                    />
                  </div>
                )}

                {/* Submit button */}
                <button
                  type="submit"
                  className="w-full rounded-full py-4 text-[0.7rem] font-bold uppercase tracking-widest text-[#F5F1EC] transition-all duration-300 mt-2"
                  style={{ background: '#2b1b12' }}
                  onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = '#C6A27A'; }}
                  onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = '#2b1b12'; }}
                >
                  {isRegisterMode 
                    ? (isRTL ? 'تأكيد التسجيل والانضمام ✦' : 'Confirm & Register ✦')
                    : (isRTL ? 'دخول للبوابة الحصرية ✦' : 'Access Member Portal ✦')
                  }
                </button>
              </form>

              {/* Footer text to switch modes */}
              <div className="mt-6 text-center text-xs text-[#8a7b71] font-medium border-t border-[#2b1b12]/5 pt-4">
                {isRegisterMode ? (
                  <p>
                    {isRTL ? 'لديك حساب بالفعل؟ ' : 'Already have a membership? '}
                    <button 
                      onClick={() => { setIsRegisterMode(false); setAuthError(''); }}
                      className="text-[#C6A27A] font-bold underline hover:opacity-80"
                    >
                      {isRTL ? 'سجلي دخولكِ من هنا' : 'Sign in here'}
                    </button>
                  </p>
                ) : (
                  <p>
                    {isRTL ? 'ليس لديك حساب؟ ' : 'First time visiting? '}
                    <button 
                      onClick={() => { setIsRegisterMode(true); setAuthError(''); }}
                      className="text-[#C6A27A] font-bold underline hover:opacity-80"
                    >
                      {isRTL ? 'أنشئي حساب عضوية جديد' : 'Register a new membership'}
                    </button>
                  </p>
                )}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
