import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import logo from '../../assets/logo.png';

/* Social Vector Icons */
const WhatsAppIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);
const InstagramIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
);
const PinterestIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.162-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.401.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.951-7.252 4.163 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.354-.629-2.758-1.379l-.749 2.848c-.269 1.045-1.004 2.352-1.498 3.146 1.123.345 2.306.535 3.55.535 6.607 0 11.985-5.365 11.985-11.987C23.97 5.367 18.625 0 12.017 0z"/>
  </svg>
);
const TikTokIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12.525.02c1.31-.02 2.61-.01 3.91.04.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.48-.59 2.93-1.46 4.12-1.35 1.83-3.4 2.97-5.64 3.03-1.95.06-3.92-.47-5.46-1.69-1.66-1.31-2.64-3.32-2.7-5.41-.05-1.89.62-3.8 1.87-5.23 1.34-1.54 3.32-2.46 5.35-2.5v4.06c-1.31.02-2.63.48-3.56 1.41-.95.96-1.42 2.37-1.24 3.7.2 1.46 1.34 2.77 2.75 3.2 1.46.45 3.09.2 4.3-.67 1.15-.83 1.83-2.18 1.89-3.59.07-3.99.04-7.98.05-11.97h.03z"/>
  </svg>
);

const footerCopy = {
  ar: {
    ribbon: {
      pre: "✨ موثوق من عرائس حول العالم",
      cities: "تركيا • الإمارات • السعودية • قطر • الكويت • البحرين • لندن • باريس • ميلانو"
    },
    col1: {
      desc: "دار أزياء هوت كوتور متخصصة في تصميم فساتين الزفاف وفساتين السهرة الفاخرة المصممة خصيصاً لكل عروس."
    },
    col2: {
      title: "خدماتنا",
      links: [
        { label: "استشارة خاصة", to: "/book-appointment" },
        { label: "تصميم حسب الطلب", to: "/services" },
        { label: "القياسات عن بعد", to: "/remote-fittings" },
        { label: "اجتماعات فيديو", to: "/remote-fittings" },
        { label: "شحن عالمي", to: "/international-clients" }
      ]
    },
    col3: {
      title: "استكشفي",
      links: [
        { label: "المجموعات الحصرية", to: "/collections" },
        { label: "فساتين الزفاف", to: "/collections?type=wedding" },
        { label: "فساتين السهرة", to: "/collections?type=evening" },
        { label: "من نحن", to: "/our-story" }
      ]
    },
    col4: {
      title: "خدمة العملاء",
      links: [
        { label: "حجز موعد", to: "/book-appointment" },
        { label: "دليل القياسات", to: "/size-guide" },
        { label: "خدمة العملاء الدوليين", to: "/international-clients" },
        { label: "الأسئلة الشائعة", to: "/faq" },
        { label: "تواصلي معنا", to: "/contact" }
      ]
    },
    bottom: {
      rights: "جميع الحقوق محفوظة. غلامور كوتور.",
      policy: "سياسة الخصوصية",
      terms: "الشروط والأحكام"
    }
  },
  en: {
    ribbon: {
      pre: "✨ Trusted by brides worldwide",
      cities: "Turkey • UAE • Saudi Arabia • Qatar • Kuwait • Bahrain • London • Paris • Milan"
    },
    col1: {
      desc: "Luxury bridal couture house specializing in custom wedding gowns and evening dresses. Designed exclusively for each bride."
    },
    col2: {
      title: "Our Services",
      links: [
        { label: "Private Consultation", to: "/book-appointment" },
        { label: "Bespoke Design", to: "/services" },
        { label: "Remote Fittings", to: "/remote-fittings" },
        { label: "Video Meetings", to: "/remote-fittings" },
        { label: "Worldwide Shipping", to: "/international-clients" }
      ]
    },
    col3: {
      title: "Explore",
      links: [
        { label: "Exclusive Collections", to: "/collections" },
        { label: "Wedding Gowns", to: "/collections?type=wedding" },
        { label: "Evening Gowns", to: "/collections?type=evening" },
        { label: "About Us", to: "/our-story" }
      ]
    },
    col4: {
      title: "Customer Care",
      links: [
        { label: "Book Appointment", to: "/book-appointment" },
        { label: "Size Guide", to: "/size-guide" },
        { label: "International Services", to: "/international-clients" },
        { label: "FAQ", to: "/faq" },
        { label: "Contact Us", to: "/contact" }
      ]
    },
    bottom: {
      rights: "All rights reserved. Glamour Couture.",
      policy: "Privacy Policy",
      terms: "Terms & Conditions"
    }
  }
};

const Footer = () => {
  const { i18n } = useTranslation();
  const currentLang = i18n.language === 'ar' ? 'ar' : 'en';
  const isRTL = currentLang === 'ar';
  const copy = footerCopy[currentLang];

  const fontTitleStyle = {
    fontFamily: "'Cormorant Garamond', serif",
    fontStyle: 'normal'
  };

  const fontTextStyle = {
    fontFamily: isRTL ? "'Tajawal', sans-serif" : "'Manrope', sans-serif"
  };

  return (
    <footer
      style={{
        background: 'linear-gradient(180deg, #080808 0%, #050505 100%)',
        boxShadow: 'inset 0 1px rgba(201,169,110,.15)',
        paddingTop: 120,
        paddingBottom: 80,
        ...fontTextStyle
      }}
      className="text-white border-t border-[#C6A27A]/15 overflow-hidden"
    >
      {/* 1. Main Footer Grid Container */}
      <div 
        style={{ maxWidth: 1400, margin: '0 auto' }}
        className="px-6 md:px-12 lg:px-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[1.3fr_1fr_1fr_1fr] gap-16 lg:gap-[100px] items-start"
      >
        {/* Column 1: Brand Information */}
        <div className="flex flex-col gap-6">
          <Link to="/" className="inline-block">
            <img 
              src={logo} 
              alt="Glamour Haute Couture" 
              style={{ width: 180, objectFit: 'contain' }} 
              className="rounded-md mix-blend-screen" 
            />
          </Link>
          <p 
            style={{ fontSize: 17, lineHeight: 2, opacity: 0.85 }}
            className="font-medium text-white/90"
          >
            {copy.col1.desc}
          </p>

          {/* Contact Details with gold icons and 20px spacing */}
          <div className="flex flex-col gap-5 pt-4 text-[15px] text-white/80 font-medium">
            <p className="flex items-center gap-3">
              <span className="text-[#C8A97E] text-[18px]">📍</span>
              <span>Istanbul, Turkey</span>
            </p>
            <p className="flex items-center gap-3">
              <span className="text-[#C8A97E] text-[18px]">📞</span>
              <span dir="ltr">+90 551 006 9156</span>
            </p>
            <p className="flex items-center gap-3">
              <span className="text-[#C8A97E] text-[18px]">✉</span>
              <span>hello@glamourgroup.com</span>
            </p>
            <p className="flex items-center gap-3 -mt-2">
              <span className="text-[#C8A97E]/60 text-[15px]">✉</span>
              <span className="text-[0.85rem] text-white/50">555glamourgruop@gmail.com</span>
            </p>
            <p className="flex items-center gap-3">
              <span className="text-[#C8A97E] text-[18px]">🕒</span>
              <span>{isRTL ? 'بموعد مسبق فقط' : 'By Appointment Only'}</span>
            </p>
          </div>
        </div>

        {/* Column 2: Our Services */}
        <div className="flex flex-col">
          <h4 
            style={{ fontSize: 22, fontWeight: 700, ...fontTitleStyle }} 
            className="text-[#C8A97E] tracking-wider"
          >
            {copy.col2.title}
          </h4>
          <div style={{ width: 40, height: 2, background: '#C8A97E', marginTop: 12, marginBottom: 30 }} />
          <ul className="flex flex-col">
            {copy.col2.links.map((link, idx) => (
              <li key={idx}>
                <Link 
                  to={link.to} 
                  style={{ fontSize: 17, lineHeight: 3 }}
                  className="text-white/70 hover:text-[#C8A97E] transition-all duration-300 block hover:translate-x-1 rtl:hover:-translate-x-1"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 3: Explore */}
        <div className="flex flex-col">
          <h4 
            style={{ fontSize: 22, fontWeight: 700, ...fontTitleStyle }} 
            className="text-[#C8A97E] tracking-wider"
          >
            {copy.col3.title}
          </h4>
          <div style={{ width: 40, height: 2, background: '#C8A97E', marginTop: 12, marginBottom: 30 }} />
          <ul className="flex flex-col">
            {copy.col3.links.map((link, idx) => (
              <li key={idx}>
                <Link 
                  to={link.to} 
                  style={{ fontSize: 17, lineHeight: 3 }}
                  className="text-white/70 hover:text-[#C8A97E] transition-all duration-300 block hover:translate-x-1 rtl:hover:-translate-x-1"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 4: Customer Care */}
        <div className="flex flex-col">
          <h4 
            style={{ fontSize: 22, fontWeight: 700, ...fontTitleStyle }} 
            className="text-[#C8A97E] tracking-wider"
          >
            {copy.col4.title}
          </h4>
          <div style={{ width: 40, height: 2, background: '#C8A97E', marginTop: 12, marginBottom: 30 }} />
          <ul className="flex flex-col">
            {copy.col4.links.map((link, idx) => (
              <li key={idx}>
                <Link 
                  to={link.to} 
                  style={{ fontSize: 17, lineHeight: 3 }}
                  className="text-white/70 hover:text-[#C8A97E] transition-all duration-300 block hover:translate-x-1 rtl:hover:-translate-x-1"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* 2. Spacing divider */}
      <div style={{ height: 60 }} />

      {/* 3. International Trust Bar */}
      <div 
        style={{ height: 70, background: 'rgba(200,169,126,.06)' }}
        className="w-full flex items-center justify-center px-4"
      >
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-center gap-2 md:gap-4 text-center">
          <span className="text-[0.78rem] uppercase tracking-[0.24em] text-[#C8A97E] font-bold">
            {copy.ribbon.pre}
          </span>
          <span className="hidden md:inline text-[#C8A97E]/40 text-xs">•</span>
          <span className="text-[0.82rem] tracking-[0.08em] text-white/80 font-medium">
            {copy.ribbon.cities}
          </span>
        </div>
      </div>

      <div style={{ height: 40 }} />

      {/* 4. Social Media Section */}
      <div className="flex justify-center gap-6 items-center">
        {[
          { icon: <InstagramIcon />, href: "https://instagram.com/glamour_couture" },
          { icon: <PinterestIcon />, href: "https://pinterest.com/glamour_couture" },
          { icon: <TikTokIcon />, href: "https://tiktok.com/@glamour_couture" },
          { icon: <WhatsAppIcon />, href: "https://wa.me/905510069156" }
        ].map((soc, idx) => (
          <a 
            key={idx} 
            href={soc.href}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              width: 58,
              height: 58,
              border: '1px solid rgba(255,255,255,.15)',
              borderRadius: '50%',
              transition: 'all 0.3s ease'
            }}
            className="flex items-center justify-center text-white/70 hover:bg-[#C8A97E] hover:text-[#0F0D0B] hover:-translate-y-[3px] shadow-sm"
          >
            {soc.icon}
          </a>
        ))}
      </div>

      <div style={{ height: 32 }} />

      {/* 5. Payment Methods */}
      <div 
        style={{ display: 'flex', justifyContent: 'center', gap: 20 }}
        className="flex-wrap items-center px-4"
      >
        {/* AMEX */}
        <div style={{ height: 48, padding: '0 24px', borderRadius: 12, background: '#111', border: '1px solid rgba(255,255,255,.08)' }} className="flex items-center justify-center">
          <span className="text-[0.7rem] font-bold tracking-widest text-[#2089d4]">AMEX</span>
        </div>
        {/* BANK TRANSFER */}
        <div style={{ height: 48, padding: '0 24px', borderRadius: 12, background: '#111', border: '1px solid rgba(255,255,255,.08)' }} className="flex items-center justify-center">
          <span className="text-[0.7rem] font-bold uppercase tracking-widest text-white/70">BANK TRANSFER</span>
        </div>
        {/* PayPal */}
        <div style={{ height: 48, padding: '0 24px', borderRadius: 12, background: '#111', border: '1px solid rgba(255,255,255,.08)' }} className="flex items-center justify-center">
          <svg width="52" height="14" viewBox="0 0 124 33" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M46.2 4.2c-1-1.3-2.7-2-5-2H34c-.6 0-1 .4-1.1 1L29.5 26c-.1.4.2.8.6.8h4.9l1.2-7.8v.3c.1-.6.6-1 1.1-1h2.3c4.5 0 8-1.8 9-7.1.1-.3.1-.5.1-.8 0-2.8-1.5-4.5-2.5-5.2z" fill="#009CDE"/>
            <path d="M16 4.2c-1-1.3-2.7-2-5-2H3.7c-.6 0-1 .4-1.1 1L0 26c-.1.4.2.8.6.8h4.7l1.2-7.8 1.2 7.8h4.9l1.2-7.8v.3c.1-.6.6-1 1.1-1h2.3c4.5 0 8-1.8 9-7.1.1-.3.1-.5.1-.8 0-2.8-1.5-4.5-2.5-5.2z" fill="#003087"/>
          </svg>
        </div>
        {/* MasterCard */}
        <div style={{ height: 48, padding: '0 24px', borderRadius: 12, background: '#111', border: '1px solid rgba(255,255,255,.08)' }} className="flex items-center justify-center gap-1">
          <div className="w-5 h-5 rounded-full" style={{background:'#EB001B',opacity:0.9}}/>
          <div className="w-5 h-5 rounded-full -ml-3.5" style={{background:'#F79E1B',opacity:0.9}}/>
          <span className="text-[0.62rem] font-bold text-white/50 tracking-wider ml-1">MasterCard</span>
        </div>
        {/* Visa */}
        <div style={{ height: 48, padding: '0 24px', borderRadius: 12, background: '#111', border: '1px solid rgba(255,255,255,.08)' }} className="flex items-center justify-center">
          <svg width="44" height="16" viewBox="0 0 750 471" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M300 336L328 136H374L346 336H300Z" fill="#2089d4"/>
            <path d="M495 140c-17-7-44-14-78-14-86 0-147 44-148 107-1 46 43 72 76 88 34 16 45 26 45 41-1 22-27 32-52 32-35 0-54-5-83-18l-11-5-12 73c21 9 59 18 99 18 91 0 151-44 152-111 1-37-23-65-73-88-31-15-50-25-50-40 0-13 16-27 51-27 29-1 51 6 67 14l8 4 12-72z" fill="#2089d4"/>
            <path d="M594 136h-67c-21 0-37 6-46 27l-130 173h92s15-40 18-49h112c3 13 10 49 10 49h81L594 136zm-108 93c7-19 35-93 35-93s7-19 11-31l6 28s16 79 20 96h-72z" fill="#2089d4"/>
            <path d="M228 136l-85 136-9-47c-16-52-66-109-121-137l78 248h93l138-200h-94z" fill="#2089d4"/>
          </svg>
        </div>
      </div>

      <div style={{ height: 40 }} />

      {/* 6. Bottom Bar */}
      <div 
        style={{ borderTop: '1px solid rgba(255,255,255,.08)', padding: '30px 0' }}
        className="w-full"
      >
        <div 
          style={{ maxWidth: 1400, margin: '0 auto' }}
          className="px-6 md:px-12 lg:px-20 flex flex-col md:flex-row items-center justify-between gap-4 text-[0.8rem] text-white/50 font-medium"
        >
          <span>
            © 2026 Glamour Couture. {copy.bottom.rights}
          </span>
          <div className="flex gap-6">
            <Link to="/faq" className="hover:text-white transition-colors">{copy.bottom.policy}</Link>
            <span className="text-white/20">|</span>
            <Link to="/faq" className="hover:text-white transition-colors">{copy.bottom.terms}</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
