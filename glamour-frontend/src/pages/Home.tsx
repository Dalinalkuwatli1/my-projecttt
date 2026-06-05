import { useEffect, useRef } from 'react';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import { ArrowRight, Heart, MapPin, Phone, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

/* ─── Fade-up reveal wrapper ─── */
const Reveal = ({ children, delay = 0, className = '' }: { children: React.ReactNode; delay?: number; className?: string }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-60px' });
  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, y: 52, filter: 'blur(6px)' }}
      animate={isInView ? { opacity: 1, y: 0, filter: 'blur(0px)' } : {}}
      transition={{ duration: 0.9, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
};

/* ─── HERO ─── */
const Hero = () => {
  const { t } = useTranslation();
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });
  const imgY = useTransform(scrollYProgress, [0, 1], ['0%', '22%']);
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  return (
    <section ref={ref} className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Parallax image */}
      <motion.div className="absolute inset-0 scale-110" style={{ y: imgY }}>
        <img
          src="https://images.pexels.com/photos/1043902/pexels-photo-1043902.jpeg?auto=compress&cs=tinysrgb&w=1920"
          alt="Glamour Bridal"
          className="w-full h-full object-cover"
        />
      </motion.div>

      {/* Cinematic overlays */}
      <div className="absolute inset-0" style={{ background: 'linear-gradient(to right, rgba(0,0,0,0.72) 0%, rgba(0,0,0,0.28) 60%, rgba(0,0,0,0.1) 100%)' }} />
      <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.75) 0%, transparent 50%)' }} />
      <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom, rgba(0,0,0,0.35) 0%, transparent 30%)' }} />

      {/* Content */}
      <motion.div className="relative z-10 px-8 lg:px-20 max-w-7xl w-full" style={{ opacity }}>
        {/* Pre-title */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="flex items-center gap-4 mb-8"
        >
          <div style={{ width: 48, height: 1, background: 'var(--color-gold)' }} />
          <span className="hero-subtitle text-white/60">{t('home.hero.preTitle')}</span>
        </motion.div>

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 60, filter: 'blur(12px)' }}
          animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          transition={{ duration: 1.2, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="hero-title text-white mb-6"
          style={{ maxWidth: 820, lineHeight: 1.0 }}
        >
          {t('home.hero.title1')}<br />
          <em style={{ fontStyle: 'italic', fontWeight: 300, color: 'rgba(198,162,122,0.9)' }}>{t('home.hero.title2')}</em>
        </motion.h1>

        {/* Subtitle line */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.0 }}
          className="text-white/55 mb-12 max-w-md"
          style={{ fontSize: '0.9rem', lineHeight: 1.8, fontFamily: 'Manrope, sans-serif', fontWeight: 300 }}
        >
          فساتين زفاف وهوت كوتور بتفاصيل صُنعت لتبقى في الذاكرة إلى الأبد.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="flex flex-col sm:flex-row items-start gap-4"
        >
          <Link to="/collections" className="btn-primary text-[0.6rem] tracking-[0.24em] group flex items-center gap-3">
            {t('home.hero.btnExplore')}
            <ArrowRight size={13} className="transition-transform group-hover:translate-x-1" />
          </Link>
          <Link
            to="/book-appointment"
            className="text-[0.6rem] tracking-[0.24em] uppercase font-semibold flex items-center gap-3"
            style={{ color: 'rgba(255,255,255,0.7)', borderBottom: '1px solid rgba(255,255,255,0.3)', paddingBottom: 2, fontFamily: 'Manrope, sans-serif' }}
          >
            {t('home.hero.btnBook')}
          </Link>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8, duration: 1 }}
      >
        <span className="hero-subtitle text-white/35" style={{ fontSize: '0.52rem', letterSpacing: '0.4em' }}>SCROLL</span>
        <motion.div
          style={{ width: 1, height: 48, background: 'linear-gradient(to bottom, rgba(198,162,122,0.8), transparent)' }}
          animate={{ scaleY: [0, 1], opacity: [0, 1, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        />
      </motion.div>
    </section>
  );
};

/* ─── MARQUEE BAR ─── */
const MarqueeBar = () => {
  const items = ['Haute Couture', '✦', 'Wedding Gowns', '✦', 'Bespoke Atelier', '✦', 'Istanbul', '✦', 'Luxury Bridal', '✦', 'Since 2010', '✦'];
  const doubled = [...items, ...items];
  return (
    <div className="overflow-hidden py-4" style={{ background: 'var(--color-surface-900)', borderTop: '1px solid rgba(198,162,122,0.15)' }}>
      <div className="marquee-track">
        {doubled.map((item, i) => (
          <span key={i} className="px-8 hero-subtitle whitespace-nowrap" style={{ fontSize: '0.58rem', letterSpacing: '0.3em', color: i % 2 === 1 ? 'var(--color-gold)' : 'rgba(255,255,255,0.45)' }}>
            {item}
          </span>
        ))}
      </div>
    </div>
  );
};

/* ─── EDITORIAL INTRO ─── */
const EditorialIntro = () => {
  const { t } = useTranslation();
  return (
    <section className="section-lg" style={{ background: 'var(--color-ivory)' }}>
      <div className="max-w-7xl mx-auto px-8 lg:px-20">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left: text */}
          <div>
            <Reveal>
              <span className="section-label">{t('home.gallery.label')}</span>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 'clamp(2.4rem,5vw,4rem)', fontWeight: 300, lineHeight: 1.1, letterSpacing: '0.02em', color: 'var(--color-text)', marginTop: 16 }}>
                {t('home.gallery.title')}
              </h2>
            </Reveal>
            <Reveal delay={0.2}>
              <div className="ornament my-6" style={{ justifyContent: 'flex-start' }}>
                <span style={{ color: 'var(--color-gold)', fontSize: '1rem' }}>◇</span>
              </div>
            </Reveal>
            <Reveal delay={0.25}>
              <p style={{ color: 'var(--color-muted)', lineHeight: 1.85, fontSize: '0.95rem', maxWidth: 440 }}>
                {t('home.gallery.subtitle')}
              </p>
            </Reveal>
            <Reveal delay={0.35}>
              <div className="flex gap-10 mt-12">
                {[['200+', 'Brides'], ['14', 'Years'], ['∞', 'Stories']].map(([n, l]) => (
                  <div key={l}>
                    <div className="stat-number">{n}</div>
                    <p style={{ fontSize: '0.6rem', letterSpacing: '0.24em', textTransform: 'uppercase', color: 'var(--color-muted)', marginTop: 4, fontFamily: 'Manrope, sans-serif', fontWeight: 600 }}>{l}</p>
                  </div>
                ))}
              </div>
            </Reveal>
            <Reveal delay={0.4}>
              <Link to="/our-story" className="mt-10 inline-flex items-center gap-3 group" style={{ color: 'var(--color-text)', fontSize: '0.62rem', letterSpacing: '0.22em', textTransform: 'uppercase', fontFamily: 'Manrope, sans-serif', fontWeight: 600, borderBottom: '1px solid var(--color-gold)', paddingBottom: 2 }}>
                {t('home.gallery.btnViewAll')}
                <ArrowRight size={12} className="transition-transform group-hover:translate-x-1" />
              </Link>
            </Reveal>
          </div>

          {/* Right: asymmetric image stack */}
          <div className="relative h-[540px] lg:h-[640px]">
            <Reveal delay={0.1} className="absolute top-0 right-0 w-4/5 h-4/5">
              <div className="w-full h-full overflow-hidden rounded-2xl" style={{ boxShadow: 'var(--shadow-xl)' }}>
                <img src="https://images.pexels.com/photos/1024993/pexels-photo-1024993.jpeg?auto=compress&cs=tinysrgb&w=900" alt="Bridal" className="w-full h-full object-cover transition-transform duration-[1400ms] hover:scale-105" />
              </div>
            </Reveal>
            <Reveal delay={0.3} className="absolute bottom-0 left-0 w-3/5 h-3/5">
              <div className="w-full h-full overflow-hidden rounded-2xl" style={{ boxShadow: 'var(--shadow-xl)', border: '4px solid var(--color-ivory)' }}>
                <img src="https://images.pexels.com/photos/265722/pexels-photo-265722.jpeg?auto=compress&cs=tinysrgb&w=700" alt="Gown" className="w-full h-full object-cover transition-transform duration-[1400ms] hover:scale-105" />
              </div>
            </Reveal>
            {/* floating quote */}
            <Reveal delay={0.5} className="absolute bottom-1/4 right-0 translate-x-4 z-10">
              <div className="px-5 py-4 rounded-2xl" style={{ background: 'rgba(255,255,255,0.92)', backdropFilter: 'blur(16px)', border: '1px solid rgba(198,162,122,0.2)', boxShadow: 'var(--shadow-lg)', maxWidth: 200 }}>
                <p style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '0.95rem', fontStyle: 'italic', color: 'var(--color-text)', lineHeight: 1.5 }}>
                  "Every stitch tells a story."
                </p>
                <div className="mt-2" style={{ height: 1, background: 'var(--color-gold)', opacity: 0.4 }} />
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
};

/* ─── GALLERY GRID ─── */
const Gallery = () => {
  const { t, i18n } = useTranslation();
  const photos = [
    { id: 1, src: 'https://images.pexels.com/photos/1024993/pexels-photo-1024993.jpeg?auto=compress&cs=tinysrgb&w=800', title: 'Aria Silhouette', cat: 'A-Line', span: 'md:col-span-1 md:row-span-2' },
    { id: 2, src: 'https://images.pexels.com/photos/265722/pexels-photo-265722.jpeg?auto=compress&cs=tinysrgb&w=800', title: 'The Celestine', cat: 'Mermaid', span: 'md:col-span-1 md:row-span-1' },
    { id: 3, src: 'https://images.pexels.com/photos/1755428/pexels-photo-1755428.jpeg?auto=compress&cs=tinysrgb&w=800', title: 'Royal Tulle', cat: 'Ballgown', span: 'md:col-span-1 md:row-span-1' },
    { id: 4, src: 'https://images.pexels.com/photos/2955375/pexels-photo-2955375.jpeg?auto=compress&cs=tinysrgb&w=1200', title: 'Ivory Whisper', cat: 'Sheath', span: 'md:col-span-2 md:row-span-1' },
  ];

  return (
    <section className="section" style={{ background: 'white' }}>
      <div className="max-w-7xl mx-auto px-8 lg:px-20">
        <Reveal className="section-header">
          <span className="section-label">{t('home.gallery.label')}</span>
          <h2 className="section-title mt-3">The Collection</h2>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-3 auto-rows-[280px] gap-3 lg:gap-4">
          {photos.map((photo, idx) => (
            <motion.div
              key={photo.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.75, delay: idx * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className={`group relative overflow-hidden rounded-2xl cursor-pointer ${photo.span}`}
            >
              <img src={photo.src} alt={photo.title} className="w-full h-full object-cover transition-transform duration-[1200ms] group-hover:scale-108" loading="lazy" style={{ transition: 'transform 1.2s cubic-bezier(0.22,1,0.36,1)' }} />
              <div className="cinematic-overlay flex flex-col justify-end p-7">
                <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <span className="badge-brand mb-3 text-[0.52rem] tracking-[0.18em]">{photo.cat}</span>
                  <h3 className="text-white text-2xl mb-3" style={{ fontFamily: 'Cormorant Garamond, serif', fontWeight: 400 }}>{photo.title}</h3>
                  <Link to="/collections" className="btn-ghost text-white text-[0.58rem] tracking-[0.2em] !px-0 flex items-center gap-2 hover:text-amber-200">
                    {t('home.gallery.quickView')}
                    <ArrowRight size={11} className={i18n.language === 'ar' ? 'rotate-180' : ''} />
                  </Link>
                </div>
              </div>
              <button className="heart-btn opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <Heart size={15} strokeWidth={1.8} style={{ color: 'var(--color-gold)' }} />
              </button>
            </motion.div>
          ))}
        </div>

        <Reveal delay={0.2} className="mt-14 text-center">
          <Link to="/collections" className="btn-secondary">{t('home.gallery.btnViewAll')}</Link>
        </Reveal>
      </div>
    </section>
  );
};

/* ─── CINEMATIC BANNER ─── */
const CinematicBanner = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const y = useTransform(scrollYProgress, [0, 1], ['-8%', '8%']);
  return (
    <section ref={ref} className="relative h-[70vh] flex items-center justify-center overflow-hidden">
      <motion.div className="absolute inset-0 scale-110" style={{ y }}>
        <img src="https://images.pexels.com/photos/3622608/pexels-photo-3622608.jpeg?auto=compress&cs=tinysrgb&w=1920" alt="Atelier" className="w-full h-full object-cover" />
      </motion.div>
      <div className="absolute inset-0" style={{ background: 'linear-gradient(135deg, rgba(42,30,26,0.82) 0%, rgba(42,30,26,0.4) 60%, rgba(0,0,0,0.2) 100%)' }} />
      <div className="relative z-10 text-center px-8 max-w-3xl mx-auto">
        <Reveal>
          <span className="hero-subtitle text-white/50 mb-6 block" style={{ letterSpacing: '0.38em' }}>THE ATELIER EXPERIENCE</span>
        </Reveal>
        <Reveal delay={0.15}>
          <h2 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 'clamp(2.4rem,6vw,5rem)', fontWeight: 300, color: 'white', lineHeight: 1.1, letterSpacing: '0.04em' }}>
            Crafted for the<br /><em style={{ color: 'rgba(198,162,122,0.9)', fontStyle: 'italic' }}>Unforgettable Moment</em>
          </h2>
        </Reveal>
        <Reveal delay={0.3}>
          <Link to="/atelier" className="btn-gold-outline mt-10 inline-flex">
            Discover the Atelier
          </Link>
        </Reveal>
      </div>
    </section>
  );
};

/* ─── TESTIMONIALS ─── */
const Testimonials = () => {
  const { t } = useTranslation();
  const reviews = [
    { name: 'Sarah M.', quote: 'Glamour made my dream dress a reality. The attention to detail was beyond anything I imagined.', rating: 5 },
    { name: 'Layla K.', quote: 'From the first fitting to walking down the aisle, the experience was pure luxury. I felt like royalty.', rating: 5 },
    { name: 'Noor A.', quote: 'The craftsmanship is unmatched. Every stitch tells a story of elegance and care.', rating: 5 },
  ];

  return (
    <section className="section-lg" style={{ background: 'var(--color-surface-900)' }}>
      <div className="max-w-7xl mx-auto px-8 lg:px-20">
        <Reveal className="section-header">
          <span className="section-label">{t('home.testimonials.label')}</span>
          <h2 className="section-title mt-3" style={{ color: 'white' }}>{t('home.testimonials.title')}</h2>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {reviews.map((review, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: i * 0.15, ease: [0.22, 1, 0.36, 1] }}
              className="flex flex-col p-9 rounded-2xl"
              style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(198,162,122,0.15)', backdropFilter: 'blur(8px)' }}
            >
              <div className="flex gap-1 mb-6">
                {Array.from({ length: review.rating }).map((_, s) => (
                  <svg key={s} width="13" height="13" viewBox="0 0 24 24" style={{ fill: 'var(--color-gold)' }}>
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                  </svg>
                ))}
              </div>
              <p className="flex-1 leading-relaxed flex-1 mb-8" style={{ color: 'rgba(255,255,255,0.65)', fontFamily: 'Cormorant Garamond, serif', fontSize: '1.1rem', fontStyle: 'italic', lineHeight: 1.75 }}>
                "{review.quote}"
              </p>
              <div className="border-t pt-5" style={{ borderColor: 'rgba(198,162,122,0.2)' }}>
                <p className="font-semibold text-sm tracking-wide text-white">{review.name}</p>
                <p className="text-xs mt-1 tracking-wider" style={{ color: 'var(--color-gold)' }}>{t('home.testimonials.verified')}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

/* ─── CONTACT ─── */
const ContactSection = () => {
  const { t } = useTranslation();
  return (
    <section className="section" style={{ background: 'var(--color-ivory)' }}>
      <div className="max-w-7xl mx-auto px-8 lg:px-20">
        <div className="overflow-hidden max-w-6xl mx-auto flex flex-col lg:flex-row rounded-3xl" style={{ boxShadow: 'var(--shadow-xl)' }}>
          <div className="lg:w-5/12 relative min-h-[420px]">
            <img src="https://images.pexels.com/photos/3622608/pexels-photo-3622608.jpeg?auto=compress&cs=tinysrgb&w=900" alt="Bridal Consultation" className="absolute inset-0 w-full h-full object-cover" />
            <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(42,30,26,0.88) 0%, rgba(42,30,26,0.3) 60%, transparent 100%)' }} />
            <div className="absolute bottom-8 start-8 end-8 text-white">
              <h3 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '2rem', fontWeight: 400, lineHeight: 1.15 }} className="mb-5">
                {t('home.contact.visitUs')}
              </h3>
              <div className="space-y-3 text-sm font-light">
                <p className="flex items-center gap-2 text-white/65"><MapPin size={13} /> Istanbul, Turkey</p>
                <p className="flex items-center gap-2 text-white/65"><Phone size={13} /> +90 551 006 9156</p>
                <p className="flex items-center gap-2 text-white/65"><Mail size={13} /> hello@glamourgroup.com</p>
              </div>
            </div>
          </div>
          <div className="lg:w-7/12 p-10 lg:p-16 bg-white">
            <Reveal>
              <span className="section-label">{t('home.contact.label')}</span>
              <h2 className="section-title mt-3 mb-2">{t('home.contact.title')}</h2>
              <p className="section-subtitle !mt-2 !mx-0 text-sm mb-10">{t('home.contact.subtitle')}</p>
            </Reveal>
            <form className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="relative"><input type="text" id="c-name" className="input-underline peer" placeholder=" " /><label htmlFor="c-name" className="input-label">{t('home.contact.name')}</label></div>
                <div className="relative"><input type="email" id="c-email" className="input-underline peer" placeholder=" " /><label htmlFor="c-email" className="input-label">{t('home.contact.email')}</label></div>
              </div>
              <div className="relative"><input type="tel" id="c-phone" className="input-underline peer" placeholder=" " /><label htmlFor="c-phone" className="input-label">{t('home.contact.phone')}</label></div>
              <div className="relative"><textarea id="c-msg" rows={3} className="input-underline peer resize-none" placeholder=" " /><label htmlFor="c-msg" className="input-label">{t('home.contact.message')}</label></div>
              <button type="submit" className="btn-primary w-full">{t('home.contact.btnSubmit')}</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default function Home() {
  return (
    <>
      <Hero />
      <MarqueeBar />
      <EditorialIntro />
      <Gallery />
      <CinematicBanner />
      <Testimonials />
      <ContactSection />
    </>
  );
}
