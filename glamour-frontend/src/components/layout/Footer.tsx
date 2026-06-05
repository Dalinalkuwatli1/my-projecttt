import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import logo from '../../assets/logo.png';

const GOLD = '#c5a059';

const Footer = () => {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === 'ar';

  const exploreLinks = [
    { label: t('footer.exploreLinks.collections'),  to: '/collections' },
    { label: t('footer.exploreLinks.trunkShows'),   to: '/trunk-shows' },
    { label: t('footer.exploreLinks.realBrides'),   to: '/real-brides' },
    { label: t('footer.exploreLinks.ourStory'),     to: '/our-story' },
  ];

  const serviceLinks = [
    { label: t('footer.serviceLinks.bookAppointment'), to: '/book-appointment' },
    { label: t('footer.serviceLinks.sizeGuide'),       to: '/size-guide' },
    { label: t('footer.serviceLinks.faq'),             to: '/faq' },
    { label: t('footer.serviceLinks.contactUs'),       to: '/contact' },
  ];

  return (
    <footer style={{ background: 'var(--color-ink)' }} className="text-white py-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">

          <div>
            <Link to="/" className="inline-block hover:opacity-80 transition-opacity">
              <img 
                src={logo} 
                alt="Glamour Group" 
                className="h-20 lg:h-24 object-contain rounded-md shadow-soft"
              />
            </Link>
            <p className="text-white/40 text-sm font-light leading-relaxed max-w-xs mt-4">
              {t('footer.brandDesc')}
            </p>
            <div className="flex gap-5 mt-6">
              {['Instagram', 'TikTok', 'Pinterest'].map((s) => (
                <a
                  key={s}
                  href="#"
                  className="text-white/40 text-[0.65rem] uppercase tracking-widest hover:text-white transition-colors"
                >
                  {s}
                </a>
              ))}
            </div>
          </div>

          {/* Explore */}
          <div>
            <h4 className="text-[0.65rem] tracking-[0.22em] uppercase font-bold mb-6" style={{ color: GOLD }}>
              {t('footer.explore')}
            </h4>
            <ul className="space-y-3.5">
              {exploreLinks.map(({ label, to }) => (
                <li key={to}>
                  <Link
                    to={to}
                    className="text-sm font-light text-white/50 hover:text-white transition-colors flex items-center gap-2 group"
                  >
                    <span className="w-0 overflow-hidden group-hover:w-3 transition-all duration-300">
                      <ArrowRight size={10} style={{ color: GOLD }} className={isRTL ? 'rotate-180' : ''} />
                    </span>
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Service */}
          <div>
            <h4 className="text-[0.65rem] tracking-[0.22em] uppercase font-bold mb-6" style={{ color: GOLD }}>
              {t('footer.service')}
            </h4>
            <ul className="space-y-3.5">
              {serviceLinks.map(({ label, to }) => (
                <li key={to}>
                  <Link
                    to={to}
                    className="text-sm font-light text-white/50 hover:text-white transition-colors flex items-center gap-2 group"
                  >
                    <span className="w-0 overflow-hidden group-hover:w-3 transition-all duration-300">
                      <ArrowRight size={10} style={{ color: GOLD }} className={isRTL ? 'rotate-180' : ''} />
                    </span>
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-[0.65rem] tracking-[0.22em] uppercase font-bold mb-6" style={{ color: GOLD }}>
              {t('footer.newsletter')}
            </h4>
            <p className="text-white/50 text-sm font-light mb-5 leading-relaxed">
              {t('footer.newsletterDesc')}
            </p>
            <div
              className="flex items-center border-b pb-3 group focus-within:border-white transition-colors"
              style={{ borderColor: 'rgba(255,255,255,0.15)' }}
            >
              <input
                type="email"
                placeholder={t('footer.emailPlaceholder')}
                className="bg-transparent flex-1 text-sm text-white placeholder:text-white/30 focus:outline-none"
              />
              <button
                className="text-white/40 hover:text-white transition-colors rtl:rotate-180 ltr:ms-4"
                style={{ color: GOLD }}
              >
                <ArrowRight size={18} />
              </button>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t mb-10" style={{ borderColor: 'rgba(255,255,255,0.08)' }} />

        {/* Bottom */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-white/30">
          <p>{t('footer.rights', { year: new Date().getFullYear() })}</p>
          <div className="flex gap-6">
            <Link to="/faq" className="hover:text-white transition-colors">{t('footer.privacy')}</Link>
            <Link to="/faq" className="hover:text-white transition-colors">{t('footer.terms')}</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
