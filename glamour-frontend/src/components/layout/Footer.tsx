import { ArrowRight, MapPin, Phone, Mail, Check } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import logo from '../../assets/logo.png';

const GOLD = '#C6A27A';
const GOLD_DEEP = '#8C6A4A';

/* WhatsApp SVG icon */
const WhatsAppIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

const InstagramIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
);

const PinterestIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0C5.373 0 0 5.373 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738a.36.36 0 01.083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.632-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0z" />
  </svg>
);

const TikTokIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
    <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.27 6.27 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.69a8.18 8.18 0 004.78 1.52V6.76a4.85 4.85 0 01-1.01-.07z" />
  </svg>
);

const Footer = () => {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === 'ar';

  const exploreLinks = isRTL ? [
    { label: 'التصميمات الحصرية', to: '/collections' },
    { label: 'التصاميم الملكية',  to: '/atelier' },
    { label: 'خدمة التفصيل',      to: '/services' },
    { label: 'من نحن',             to: '/our-story' },
    { label: 'عرائس جلامور',       to: '/real-brides' },
    { label: 'العروض الخاصة',      to: '/trunk-shows' },
  ] : [
    { label: 'Exclusive Designs',  to: '/collections' },
    { label: 'Royal Designs',      to: '/atelier' },
    { label: 'Bespoke Service',    to: '/services' },
    { label: 'About Us',           to: '/our-story' },
    { label: 'Real Brides',        to: '/real-brides' },
    { label: 'Special Shows',      to: '/trunk-shows' },
  ];

  const serviceLinks = isRTL ? [
    { label: 'احجزي موعداً',       to: '/book-appointment' },
    { label: 'دليل القياسات',      to: '/size-guide' },
    { label: 'تواصلي معنا',        to: '/contact' },
    { label: 'قصة الدار',          to: '/our-story' },
    { label: 'الأسئلة الشائعة',   to: '/faq' },
    { label: 'سياسة الخصوصية',    to: '/faq' },
  ] : [
    { label: 'Book Appointment', to: '/book-appointment' },
    { label: 'Size Guide',       to: '/size-guide' },
    { label: 'Contact Us',       to: '/contact' },
    { label: 'Our Story',        to: '/our-story' },
    { label: 'FAQ',              to: '/faq' },
    { label: 'Privacy Policy',   to: '/faq' },
  ];

  const socials = [
    { label: 'Instagram', icon: <InstagramIcon />, href: '#' },
    { label: 'Pinterest', icon: <PinterestIcon />, href: '#' },
    { label: 'TikTok',    icon: <TikTokIcon />,    href: '#' },
  ];

  return (
    <footer style={{ background: '#0F0D0B' }} className="text-white">

      {/* ── Pre-footer CTA band ── */}
      <div
        className="border-b"
        style={{ borderColor: 'rgba(198,162,122,0.12)', background: 'linear-gradient(135deg, #1C1A18 0%, #100e0c 100%)' }}
      >
        <div className="max-w-5xl mx-auto px-6 py-[70px] flex flex-col lg:flex-row items-center justify-between gap-10" style={{ minHeight: 320 }}>
          <div style={{ maxWidth: 480 }}>
            <p style={{ fontSize: '0.6rem', letterSpacing: '0.32em', textTransform: 'uppercase', color: GOLD, fontFamily: 'Manrope, sans-serif', marginBottom: 16 }}>
              {isRTL ? 'دار أزياء جلامور — إسطنبول' : 'Glamour Couture House — Istanbul'}
            </p>
            <p style={{ fontFamily: 'Manrope, sans-serif', fontSize: 'clamp(1.7rem,3vw,2.4rem)', fontWeight: 600, lineHeight: 1.15, color: 'white', marginBottom: 12 }}>
              {isRTL ? (
                <>ابدئي رحلة تصميم<br /><span style={{ color: GOLD }}>فستان أحلامك</span></>
              ) : (
                <>Begin Your Journey Toward<br /><span style={{ color: GOLD }}>Your Dream Gown</span></>
              )}
            </p>
            <p style={{ color: 'rgba(255,255,255,0.45)', fontSize: '0.85rem', fontFamily: 'Manrope, sans-serif', lineHeight: 1.75, marginBottom: 20 }}>
              {isRTL
                ? 'واكتشفي تجربة تفصيل راقية تجمع بين الحرفية الاستثنائية والتفاصيل المصممة خصيصاً لتعكس شخصيتك في أهم يوم من حياتك.'
                : 'Discover a refined tailoring experience that unites exceptional craftsmanship with details designed exclusively to reflect your personality on the most important day of your life.'}
            </p>
          </div>
          <div className="flex flex-col gap-4 shrink-0 w-full lg:w-auto">
            <Link
              to="/book-appointment"
              className="inline-flex items-center justify-center gap-2 font-semibold text-[0.62rem] tracking-[0.22em] uppercase transition-all duration-300 hover:scale-105"
              style={{
                background: GOLD,
                color: '#0F0D0B',
                fontFamily: 'Manrope, sans-serif',
                boxShadow: `0 8px 40px rgba(198,162,122,0.3)`,
                height: 58,
                borderRadius: 50,
                paddingInline: 36,
              }}
            >
              {isRTL ? 'احجزي استشارتك المجانية' : 'Book Free Consultation'}
              <ArrowRight size={13} />
            </Link>
            <a
              href="https://wa.me/905510069156"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 font-semibold text-[0.62rem] tracking-[0.22em] uppercase transition-all duration-300 hover:bg-white/10"
              style={{
                border: '1.5px solid rgba(255,255,255,0.25)',
                color: 'white',
                fontFamily: 'Manrope, sans-serif',
                height: 58,
                borderRadius: 50,
                paddingInline: 36,
              }}
            >
              <WhatsAppIcon />
              {isRTL ? 'تحدثي معنا عبر واتساب' : 'Chat via WhatsApp'}
            </a>
          </div>
        </div>
      </div>

      {/* ── Main footer body ── */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 pt-20 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-16">

          {/* Brand column – 4/12 */}
          <div className="lg:col-span-4">
            <Link to="/" className="inline-block hover:opacity-80 transition-opacity mb-8">
              <img src={logo} alt="Glamour Couture" style={{ width: 240, objectFit: 'contain' }} className="rounded-md" />
            </Link>

            <p style={{ fontFamily: 'Manrope, sans-serif', fontSize: '1.35rem', fontWeight: 800, color: GOLD, marginBottom: 8 }}>
              Glamour Couture
            </p>
            <p style={{ color: 'rgba(255,255,255,0.4)', fontSize: '0.875rem', lineHeight: 1.85, maxWidth: 300, fontFamily: 'Manrope, sans-serif', fontWeight: 300 }}>
              {isRTL
                ? 'نصمم فساتين الزفاف الراقية بعناية فائقة وحرفية يدوية استثنائية، لنمنح كل عروس تجربة فريدة وإطلالة لا تُنسى.'
                : 'We design luxury bridal gowns with meticulous care and exceptional handcraft, giving every bride a unique experience and unforgettable look.'}
            </p>

            {/* Location */}
            <div className="mt-8 space-y-3">
              {[
                { icon: <MapPin size={14} />, text: 'Istanbul, Turkey' },
                { icon: <Phone size={14} />,  text: '+90 551 006 9156' },
                { icon: <Mail size={14} />,   text: 'hello@glamourgroup.com' },
              ].map(({ icon, text }) => (
                <p key={text} className="flex items-center gap-3 text-sm" style={{ color: 'rgba(255,255,255,0.4)', fontFamily: 'Manrope, sans-serif', fontWeight: 300 }}>
                  <span style={{ color: GOLD }}>{icon}</span>
                  {text}
                </p>
              ))}
            </div>

            {/* International note */}
            <div className="mt-8 p-4 rounded-xl" style={{ background: 'rgba(198,162,122,0.06)', border: '1px solid rgba(198,162,122,0.12)' }}>
              <p style={{ color: 'rgba(255,255,255,0.4)', fontSize: '0.78rem', lineHeight: 1.8, fontFamily: 'Manrope, sans-serif' }}>
                {isRTL
                  ? 'نخدم العرائس من مختلف أنحاء العالم من خلال جلسات استشارية عبر الإنترنت، قياسات عن بُعد، وشحن دولي آمن حتى باب منزلك.'
                  : 'We serve brides worldwide through online consultations, remote fittings, and safe international shipping directly to your door.'}
              </p>
            </div>

            {/* Social icons */}
            <div className="flex gap-4 mt-8">
              {socials.map(({ label, icon, href }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
                  style={{ border: '1px solid rgba(198,162,122,0.25)', color: 'rgba(255,255,255,0.5)' }}
                  onMouseEnter={e => {
                    (e.currentTarget as HTMLElement).style.background = GOLD_DEEP;
                    (e.currentTarget as HTMLElement).style.color = 'white';
                    (e.currentTarget as HTMLElement).style.borderColor = GOLD_DEEP;
                  }}
                  onMouseLeave={e => {
                    (e.currentTarget as HTMLElement).style.background = 'transparent';
                    (e.currentTarget as HTMLElement).style.color = 'rgba(255,255,255,0.5)';
                    (e.currentTarget as HTMLElement).style.borderColor = 'rgba(198,162,122,0.25)';
                  }}
                >
                  {icon}
                </a>
              ))}
            </div>
          </div>

          {/* Explore – 3/12 */}
          <div className="lg:col-span-3 lg:col-start-6">
            <h4 className="text-[0.6rem] tracking-[0.28em] uppercase font-bold mb-8" style={{ color: GOLD }}>
              {isRTL ? 'اكتشفي' : 'Explore'}
            </h4>
            <ul className="space-y-4">
              {exploreLinks.map(({ label, to }) => (
                <li key={to}>
                  <Link
                    to={to}
                    className="text-sm font-semibold flex items-center gap-2 group transition-colors duration-200"
                    style={{ color: 'rgba(255,255,255,0.4)', fontFamily: 'Manrope, sans-serif' }}
                    onMouseEnter={e => (e.currentTarget as HTMLElement).style.color = 'white'}
                    onMouseLeave={e => (e.currentTarget as HTMLElement).style.color = 'rgba(255,255,255,0.4)'}
                  >
                    <span style={{ color: GOLD, opacity: 0, transition: 'opacity 0.2s' }}
                      className="group-hover:!opacity-100">
                      <ArrowRight size={10} className={isRTL ? 'rotate-180' : ''} />
                    </span>
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links – 3/12 */}
          <div className="lg:col-span-3 lg:col-start-10">
            <h4 className="text-[0.6rem] tracking-[0.28em] uppercase font-bold mb-8" style={{ color: GOLD }}>
              {isRTL ? 'روابط سريعة' : 'Quick Links'}
            </h4>
            <ul className="space-y-4">
              {serviceLinks.map(({ label, to }) => (
                <li key={label}>
                  <Link
                    to={to}
                    className="text-sm font-semibold flex items-center gap-2 group transition-colors duration-200"
                    style={{ color: 'rgba(255,255,255,0.4)', fontFamily: 'Manrope, sans-serif' }}
                    onMouseEnter={e => (e.currentTarget as HTMLElement).style.color = 'white'}
                    onMouseLeave={e => (e.currentTarget as HTMLElement).style.color = 'rgba(255,255,255,0.4)'}
                  >
                    <span style={{ color: GOLD, opacity: 0, transition: 'opacity 0.2s' }}
                      className="group-hover:!opacity-100">
                      <ArrowRight size={10} className={isRTL ? 'rotate-180' : ''} />
                    </span>
                    {label}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Newsletter */}
            <div className="mt-12">
              <h4 className="text-[0.6rem] tracking-[0.28em] uppercase font-bold mb-3" style={{ color: GOLD }}>
                {isRTL ? 'انضمي إلى عالمنا' : 'Join Our World'}
              </h4>
              <p style={{ fontFamily: 'Manrope, sans-serif', fontSize: '1.05rem', fontWeight: 700, color: 'white', marginBottom: 6 }}>
                {isRTL ? 'انضمي إلى عالم Glamour Couture' : 'Join Glamour Couture World'}
              </p>
              <p style={{ color: 'rgba(255,255,255,0.35)', fontSize: '0.78rem', lineHeight: 1.7, marginBottom: 16, fontFamily: 'Manrope, sans-serif' }}>
                {isRTL
                  ? 'كوني أول من يطلع على المجموعات الجديدة والعروض الحصرية وتجارب العرائس الملهمة.'
                  : 'Be the first to discover new collections, exclusive offers, and inspiring bride stories.'}
              </p>
              <div className="flex items-center border-b pb-3" style={{ borderColor: 'rgba(255,255,255,0.12)' }}>
                <input
                  type="email"
                  placeholder={isRTL ? 'بريدكِ الإلكتروني...' : 'Your email address...'}
                  className="bg-transparent flex-1 text-sm text-white placeholder:text-white/25 focus:outline-none"
                  style={{ fontFamily: 'Manrope, sans-serif' }}
                />
                <button style={{ color: GOLD }} className="hover:scale-110 transition-transform">
                  <ArrowRight size={18} />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Ornamental divider */}
        <div className="flex items-center gap-6 mb-10">
          <div className="flex-1 h-px" style={{ background: 'linear-gradient(to right, transparent, rgba(198,162,122,0.2))' }} />
          <span style={{ color: GOLD, fontSize: '0.8rem' }}>◇</span>
          <div className="flex-1 h-px" style={{ background: 'linear-gradient(to left, transparent, rgba(198,162,122,0.2))' }} />
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p style={{ color: 'rgba(255,255,255,0.2)', fontSize: '0.72rem', fontFamily: 'Manrope, sans-serif' }}>
            {t('footer.rights', { year: new Date().getFullYear() })}
          </p>
          <p style={{ color: 'rgba(255,255,255,0.3)', fontSize: '0.68rem', fontFamily: 'Manrope, sans-serif', letterSpacing: '0.1em', textAlign: 'center' }}>
            {isRTL
              ? 'صُمد بإتقان ليعكس معايير الأناقة الراقية والحرفية الاستثنائية.'
              : 'Crafted with precision to reflect the highest standards of luxury and exceptional craftsmanship.'}
          </p>
          <div className="flex gap-6">
            {(isRTL ? ['سياسة الخصوصية', 'الشروط والأحكام'] : ['Privacy Policy', 'Terms of Service']).map(lbl => (
              <Link
                key={lbl}
                to="/faq"
                className="transition-colors duration-200"
                style={{ color: 'rgba(255,255,255,0.2)', fontSize: '0.72rem', fontFamily: 'Manrope, sans-serif' }}
                onMouseEnter={e => (e.currentTarget as HTMLElement).style.color = 'white'}
                onMouseLeave={e => (e.currentTarget as HTMLElement).style.color = 'rgba(255,255,255,0.2)'}
              >
                {lbl}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
