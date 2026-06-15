import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Landmark } from 'lucide-react';
import logo from '../../assets/logo.png';

/* ── Social Icons ── */
const WhatsAppIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);
const InstagramIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
);
const FacebookIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
    <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1V12h3v3h-3v6.8c4.56-.93 8-4.96 8-9.8z" />
  </svg>
);
const TikTokIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12.525.02c1.31-.02 2.61-.01 3.91.04.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.48-.59 2.93-1.46 4.12-1.35 1.83-3.4 2.97-5.64 3.03-1.95.06-3.92-.47-5.46-1.69-1.66-1.31-2.64-3.32-2.7-5.41-.05-1.89.62-3.8 1.87-5.23 1.34-1.54 3.32-2.46 5.35-2.5v4.06c-1.31.02-2.63.48-3.56 1.41-.95.96-1.42 2.37-1.24 3.7.2 1.46 1.34 2.77 2.75 3.2 1.46.45 3.09.2 4.3-.67 1.15-.83 1.83-2.18 1.89-3.59.07-3.99.04-7.98.05-11.97h.03z" />
  </svg>
);

const footerCopy = {
  ar: {
    ribbon: {
      pre: '✨ موثوق من عرائس حول العالم',
      cities: 'تركيا • الإمارات • السعودية • قطر • الكويت • البحرين • لندن • باريس • ميلانو',
    },
    col1: {
      desc: 'دار أزياء هوت كوتور متخصصة في تصميم فساتين الزفاف الفاخرة المصنوعة يدوياً خصيصاً لكل عروس.',
    },
    col2: {
      title: 'خدماتنا',
      links: [
        { label: 'استشارة خاصة', to: '/book-appointment' },
        { label: 'تصميم حسب الطلب', to: '/services' },
        { label: 'القياسات عن بعد', to: '/remote-fittings' },
        { label: 'اجتماعات فيديو', to: '/remote-fittings' },
        { label: 'شحن عالمي', to: '/international-clients' },
      ],
    },
    col3: {
      title: 'روابط سريعة',
      links: [
        { label: 'المجموعات الحصرية', to: '/collections' },
        { label: 'فساتين الزفاف', to: '/collections?type=wedding' },
        { label: 'قصتنا', to: '/our-story' },
        { label: 'دليل القياسات', to: '/size-guide' },
        { label: 'الأسئلة الشائعة', to: '/faq' },
      ],
    },
    col4: {
      title: 'تواصلي معنا',
      address: 'إسطنبول، تركيا',
      phone: '+90 551 006 9156',
      email: '555glamourgruop@gmail.com',
    },
    bottom: {
      rights: 'جميع الحقوق محفوظة. غلامور كوتور.',
      policy: 'سياسة الخصوصية',
      terms: 'الشروط والأحكام',
    },
  },
  en: {
    ribbon: {
      pre: '✨ Trusted by brides worldwide',
      cities: 'Turkey • UAE • Saudi Arabia • Qatar • Kuwait • Bahrain • London • Paris • Milan',
    },
    col1: {
      desc: 'Luxury bridal couture house specializing in bespoke wedding gowns, handcrafted exclusively for each bride.',
    },
    col2: {
      title: 'Our Services',
      links: [
        { label: 'Private Consultation', to: '/book-appointment' },
        { label: 'Bespoke Design', to: '/services' },
        { label: 'Remote Fittings', to: '/remote-fittings' },
        { label: 'Video Meetings', to: '/remote-fittings' },
        { label: 'Worldwide Shipping', to: '/international-clients' },
      ],
    },
    col3: {
      title: 'Quick Links',
      links: [
        { label: 'Exclusive Collections', to: '/collections' },
        { label: 'Wedding Gowns', to: '/collections?type=wedding' },
        { label: 'Our Story', to: '/our-story' },
        { label: 'Size Guide', to: '/size-guide' },
        { label: 'FAQ', to: '/faq' },
      ],
    },
    col4: {
      title: 'Contact Us',
      address: 'Istanbul, Turkey',
      phone: '+90 551 006 9156',
      email: '555glamourgruop@gmail.com',
    },
    bottom: {
      rights: 'All rights reserved. Glamour Couture.',
      policy: 'Privacy Policy',
      terms: 'Terms & Conditions',
    },
  },
};

const Footer = () => {
  const { i18n } = useTranslation();
  const currentLang = i18n.language === 'ar' ? 'ar' : 'en';
  const copy = footerCopy[currentLang];

  return (
    <footer
      className="bg-gradient-to-b from-[#0a0a0a] to-[#060606] shadow-[inset_0_1px_rgba(201,169,110,0.12)] text-white border-t border-[#C6A27A]/12 overflow-hidden font-sans"
    >
      {/* ── Main Grid ── */}
      <div className="max-w-[1360px] mx-auto px-6 md:px-12 lg:px-20 pt-10 pb-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr] gap-8 lg:gap-10">
        {/* Column 1: Brand */}
        <div className="flex flex-col gap-2">
          <Link to="/" className="inline-block">
            <img
              src={logo}
              alt="Glamour Haute Couture"
              className="w-[130px] object-contain rounded-sm mix-blend-screen"
            />
          </Link>
          <p className="text-[0.78rem] leading-[1.8] text-white/55 max-w-[260px]">
            {copy.col1.desc}
          </p>
        </div>

        {/* Column 2: Services */}
        <div className="flex flex-col">
          <h4 className="font-serif text-[0.85rem] font-bold tracking-[0.15em] uppercase text-[#C8A97E] mb-2">{copy.col2.title}</h4>
          <div className="w-7 h-[1px] bg-[#C8A97E]/50 mb-2.5" />
          <ul>
            {copy.col2.links.map((link, idx) => (
              <li key={idx}>
                <Link
                  to={link.to}
                  className="font-sans text-[0.78rem] text-white/60 leading-[1.8] block transition-colors duration-250 hover:text-[#C8A97E]"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 3: Quick Links */}
        <div className="flex flex-col">
          <h4 className="font-serif text-[0.85rem] font-bold tracking-[0.15em] uppercase text-[#C8A97E] mb-2">{copy.col3.title}</h4>
          <div className="w-7 h-[1px] bg-[#C8A97E]/50 mb-2.5" />
          <ul>
            {copy.col3.links.map((link, idx) => (
              <li key={idx}>
                <Link
                  to={link.to}
                  className="font-sans text-[0.78rem] text-white/60 leading-[1.8] block transition-colors duration-250 hover:text-[#C8A97E]"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 4: Contact */}
        <div className="flex flex-col gap-2">
          <h4 className="font-serif text-[0.85rem] font-bold tracking-[0.15em] uppercase text-[#C8A97E] mb-2">{copy.col4.title}</h4>
          <div className="w-7 h-[1px] bg-[#C8A97E]/50 mb-2.5" />
          <div className="flex flex-col gap-1.5">
            <p className="text-[0.78rem] text-white/55 flex items-start gap-2.5">
              <span className="text-[#C8A97E]">📍</span>
              <span>{copy.col4.address}</span>
            </p>
            <p className="text-[0.78rem] text-white/55 flex items-start gap-2.5">
              <span className="text-[#C8A97E]">📞</span>
              <span dir="ltr">{copy.col4.phone}</span>
            </p>
            <p className="text-[0.78rem] text-white/55 flex items-start gap-2.5">
              <span className="text-[#C8A97E]">✉</span>
              <span>{copy.col4.email}</span>
            </p>
          </div>

          {/* Social Icons */}
          <div className="flex gap-2.5 mt-2">
            {[
              { icon: <InstagramIcon />, href: 'https://instagram.com/glamour_couture' },
              { icon: <FacebookIcon />, href: 'https://facebook.com/glamour_couture' },
              { icon: <TikTokIcon />, href: 'https://tiktok.com/@glamour_couture' },
              { icon: <WhatsAppIcon />, href: 'https://wa.me/905510069156' },
            ].map((soc, idx) => (
              <a
                key={idx}
                href={soc.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-7 h-7 border border-[#C8A97E]/20 rounded-full transition-all duration-300 flex items-center justify-center text-white/50 hover:bg-[#C8A97E] hover:text-[#0F0D0B] hover:border-[#C8A97E] hover:-translate-y-[2px]"
              >
                {soc.icon}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* ── Trust Ribbon ── */}
      <div className="w-full flex items-center justify-center px-4 py-2 border-t border-b border-[#C8A97E]/10">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-center gap-1.5 md:gap-2 text-center">
          <span className="text-[0.62rem] uppercase tracking-[0.2em] text-[#C8A97E] font-bold">
            {copy.ribbon.pre}
          </span>
          <span className="hidden md:inline text-[#C8A97E]/30 text-xs">•</span>
          <span className="text-[0.68rem] tracking-[0.05em] text-white/55 font-medium">
            {copy.ribbon.cities}
          </span>
        </div>
      </div>

      {/* ── Payment Methods ── */}
      <div className="flex justify-center gap-6 py-4 px-6 flex-wrap items-center opacity-60 hover:opacity-100 transition-opacity duration-300">
        {/* Visa */}
        <svg viewBox="0 0 38 12" className="h-3" fill="currentColor" style={{ color: '#fff' }}>
          <path d="M14.7 0L12 12H8.3L10.3 0H14.7ZM34.7 0L32.2 12H28.7L31.2 0H34.7ZM25.5 0C27.5 0 28.5 0.8 28.5 0.8L27.6 3.8C27.6 3.8 26.8 3.2 25.4 3.2C24 3.2 23 3.9 23 4.8C23 5.6 23.8 6 24.8 6.5C25.8 6.9 26 7.4 26 8.1C26 9.6 24.5 10.3 22.8 10.3C21.1 10.3 19.8 9.5 19.8 9.5L20.8 6.3C20.8 6.3 21.8 7.2 23.3 7.2C24.8 7.2 25.7 6.5 25.7 5.5C25.7 4.7 25.1 4.3 24 3.8C23 3.3 22.5 2.8 22.5 1.9C22.5 0.5 23.8 0 25.5 0ZM8.5 0L5.5 8.2L4.7 4C4.3 2 3.1 0.7 1 0H8.5ZM1.1 1.6C1.9 2 2.6 2.6 3 3.5L4.8 12H8.5L5.4 0H0C0.4 0.6 0.7 1.1 1.1 1.6Z" />
        </svg>

        {/* Mastercard */}
        <svg viewBox="0 0 24 14" className="h-4" fill="currentColor" style={{ color: '#fff' }}>
          <path d="M14.6 7C14.6 5.1 15.4 3.4 16.7 2.2C15.2 0.8 13.1 0 10.9 0C6.1 0 2.2 3.9 2.2 8.7C2.2 13.5 6.1 17.4 10.9 17.4C13.1 17.4 15.2 16.6 16.7 15.2C15.4 14 14.6 12.3 14.6 10.4V7ZM24 8.7C24 13.5 20.1 17.4 15.3 17.4C14.4 17.4 13.5 17.2 12.7 16.9C14.2 15.2 15.1 13 15.1 10.6V6.8C15.1 4.4 14.2 2.2 12.7 0.5C13.5 0.2 14.4 0 15.3 0C20.1 0 24 3.9 24 8.7Z" />
        </svg>

        {/* Amex */}
        <div className="flex items-center justify-center border border-white/60 rounded px-1.5 py-0.5 text-[0.45rem] font-bold tracking-widest text-white mt-0.5">
          AMEX
        </div>

        {/* Bank Transfer */}
        <div className="flex items-center gap-1.5 text-[0.55rem] font-bold tracking-wider text-white">
          <Landmark size={14} />
          <span>BANK</span>
        </div>
      </div>

      {/* ── Bottom Bar ── */}
      <div className="w-full border-t border-white/5 py-2.5">
        <div className="max-w-[1360px] mx-auto px-6 md:px-12 lg:px-20 flex flex-col md:flex-row items-center justify-between gap-2.5 text-[0.68rem] text-white/35 font-medium">
          <span>© 2026 Glamour Couture. {copy.bottom.rights} | صنع بواسطة dalin alkuwatli</span>
          <div className="flex gap-4">
            <Link to="/faq" className="hover:text-white/70 transition-colors">{copy.bottom.policy}</Link>
            <span className="text-white/15">|</span>
            <Link to="/faq" className="hover:text-white/70 transition-colors">{copy.bottom.terms}</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
