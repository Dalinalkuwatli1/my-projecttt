import { useRef, useState, useEffect } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const reviews = [
  {
    nameEn: 'Sarah Al-Mansouri',
    nameAr: 'سارة المنصوري',
    locationEn: 'Dubai, UAE',
    locationAr: 'دبي، الإمارات',
    quoteEn: 'The gown exceeded every expectation. The moment I wore it, I felt transformed — like a living work of art.',
    quoteAr: 'الفستان تجاوز كل توقعاتي. لحظة ارتديته شعرت بأنني تحولت إلى عمل فني حي ينبض بالحياة.',
    image: '/images/22.jpg',
    rating: 5,
  },
  {
    nameEn: 'Reem Al-Ahmad',
    nameAr: 'ريم الأحمد',
    locationEn: 'Riyadh, KSA',
    locationAr: 'الرياض، المملكة العربية السعودية',
    quoteEn: 'Every single stitch was executed with love and extraordinary precision. I felt like I was wearing a masterpiece.',
    quoteAr: 'كل غرزة نُفّذت بحب ودقة استثنائية. شعرت وكأنني أرتدي تحفة فنية تستحق أن تُروى قصتها.',
    image: '/images/23.jpg',
    rating: 5,
  },
  {
    nameEn: 'Lana Al-Khatib',
    nameAr: 'لانا الخطيب',
    locationEn: 'Beirut, Lebanon',
    locationAr: 'بيروت، لبنان',
    quoteEn: 'The entire experience was magical — from the first sketch to the final fitting. Truly world-class craftsmanship.',
    quoteAr: 'التجربة بأكملها كانت ساحرة — من أول رسمة حتى البروفة الأخيرة. حرفية بمستوى عالمي حقيقي.',
    image: '/images/24.jpg',
    rating: 5,
  },
  {
    nameEn: 'Nour Al-Hassan',
    nameAr: 'نور الحسن',
    locationEn: 'Kuwait City',
    locationAr: 'مدينة الكويت',
    quoteEn: 'Glamour transformed my dream into reality. The attention to detail is second to none — absolute perfection.',
    quoteAr: 'غلامور حوّلت حلمي إلى حقيقة. الاهتمام بالتفاصيل لا مثيل له — كمال مطلق في كل زاوية.',
    image: '/images/28.jpg',
    rating: 5,
  },
];

const stats = [
  { numEn: '+1500', numAr: '+١٥٠٠', labelEn: 'Happy Brides', labelAr: 'عروس سعيدة' },
  { numEn: '14',    numAr: '١٤',    labelEn: 'Years Experience', labelAr: 'سنة خبرة' },
  { numEn: '4.9/5', numAr: '٤.٩/٥', labelEn: 'Client Rating', labelAr: 'تقييم العملاء' },
  { numEn: '100%',  numAr: '١٠٠٪',  labelEn: 'Bespoke Design', labelAr: 'تصميم مخصص' },
];

function AnimatedStat({ text }: { text: string }) {
  const [display, setDisplay] = useState("0");
  const elementRef = useRef<HTMLDivElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    // extract number and prefix/suffix
    const match = text.match(/[\d.]+/);
    if (!match) {
      setDisplay(text);
      return;
    }
    
    const numStr = match[0];
    const prefix = text.slice(0, match.index);
    const suffix = text.slice((match.index || 0) + numStr.length);
    const target = parseFloat(numStr);
    const isFloat = numStr.includes('.');

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          let startTime: number | null = null;
          const duration = 1.5;

          const animate = (currentTime: number) => {
            if (!startTime) startTime = currentTime;
            const elapsedTime = (currentTime - startTime) / 1000;
            if (elapsedTime < duration) {
              const progress = elapsedTime / duration;
              const easeProgress = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
              const currentNum = easeProgress * target;
              setDisplay(`${prefix}${isFloat ? currentNum.toFixed(1) : Math.floor(currentNum)}${suffix}`);
              requestAnimationFrame(animate);
            } else {
              setDisplay(text);
            }
          };

          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.1 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, [text]);

  return <div ref={elementRef} dir="ltr">{display}</div>;
}

const TestimonialsSlider = () => {
  const { i18n } = useTranslation();
  const isRTL = i18n.language === 'ar';
  const [active, setActive] = useState(0);
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-80px' });

  const prev = () => setActive((a) => (a - 1 + reviews.length) % reviews.length);
  const next = () => setActive((a) => (a + 1) % reviews.length);

  const r = reviews[active];

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, #FAF7F2 0%, #F5F0E8 100%)',
        paddingBlock: 'clamp(80px, 10vw, 130px)',
      }}
    >
      {/* Luxury radial glow background */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(circle at top right, rgba(201,165,117,0.08), transparent 55%), radial-gradient(circle at bottom left, rgba(201,165,117,0.05), transparent 45%)',
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">

        {/* ── Section header ── */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <span
            className="block text-[0.62rem] font-extrabold uppercase tracking-[0.35em] mb-4"
            style={{ color: '#C6A27A' }}
          >
            {isRTL ? '✦ شهادات العرائس ✦' : '✦ BRIDE STORIES ✦'}
          </span>
          <h2
            className="font-bold leading-[1.2]"
            style={{
              fontFamily: isRTL ? 'system-ui, -apple-system, sans-serif' : 'Cormorant Garamond, serif',
              fontSize: 'clamp(2.2rem, 4.5vw, 3.6rem)',
              color: '#2b1b12',
            }}
          >
            {isRTL ? (
              <>عرائس جلامور،{' '}<span style={{ color: '#C6A27A' }}>لحظات لا تُنسى</span></>
            ) : (
              <>Glamour Brides,{' '}<em style={{ fontStyle: 'italic', color: '#C6A27A' }}>Unforgettable Moments</em></>
            )}
          </h2>
        </motion.div>

        {/* ── Main Testimonial Block ── */}
        <motion.div
          className="grid lg:grid-cols-[1fr_1.6fr] gap-8 lg:gap-14 items-center mb-12"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
        >

          {/* Left: Bride image */}
          <div className="relative flex justify-center lg:justify-end">
            <AnimatePresence mode="wait">
              <motion.div
                key={`img-${active}`}
                initial={{ opacity: 0, scale: 0.92, x: isRTL ? 20 : -20 }}
                animate={{ opacity: 1, scale: 1, x: 0 }}
                exit={{ opacity: 0, scale: 0.94, x: isRTL ? -20 : 20 }}
                transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
                className="relative"
              >
                {/* Decorative gold ring */}
                <div
                  className="absolute -inset-3 rounded-full"
                  style={{ border: '1px solid rgba(198,162,122,0.25)', borderRadius: '50%' }}
                />
                <div
                  className="relative w-[220px] h-[220px] md:w-[280px] md:h-[280px] rounded-full overflow-hidden shadow-2xl"
                  style={{ border: '4px solid #FAF7F2', boxShadow: '0 24px 60px rgba(42,30,20,0.18)' }}
                >
                  <img
                    src={r.image}
                    alt={isRTL ? r.nameAr : r.nameEn}
                    className="w-full h-full object-cover object-top"
                  />
                  {/* Subtle overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#2b1b12]/20 to-transparent" />
                </div>

                {/* Floating name badge */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.5 }}
                  className="absolute -bottom-4 left-1/2 -translate-x-1/2 whitespace-nowrap px-5 py-2.5 rounded-full shadow-lg"
                  style={{
                    background: 'white',
                    border: '1px solid rgba(198,162,122,0.3)',
                    boxShadow: '0 8px 32px rgba(42,30,20,0.12)',
                  }}
                >
                  <p style={{ fontSize: '0.65rem', fontWeight: 800, letterSpacing: '0.18em', textTransform: 'uppercase', color: '#2b1b12', fontFamily: 'Manrope, sans-serif' }}>
                    {isRTL ? r.nameAr : r.nameEn}
                  </p>
                </motion.div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Right: Quote + meta + stats */}
          <div className="flex flex-col gap-6 pt-8 lg:pt-0">

            {/* Big quote */}
            <div className="relative">
              {/* Decorative quote mark */}
              <span
                className="absolute -top-6 select-none pointer-events-none"
                style={{
                  fontSize: '8rem',
                  lineHeight: 1,
                  color: 'rgba(198,162,122,0.12)',
                  fontFamily: 'Georgia, serif',
                  insetInlineStart: '-0.5rem',
                }}
              >
                "
              </span>
              <AnimatePresence mode="wait">
                <motion.p
                  key={`quote-${active}`}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
                  style={{
                    fontFamily: isRTL ? "system-ui, -apple-system, sans-serif" : 'Cormorant Garamond, serif',
                    fontSize: 'clamp(1.4rem, 2vw, 1.8rem)',
                    fontStyle: isRTL ? 'normal' : 'italic',
                    fontWeight: 400,
                    color: '#2b1b12',
                    lineHeight: 1.8,
                    position: 'relative',
                    zIndex: 1,
                  }}
                >
                  {isRTL ? `«${r.quoteAr}»` : `"${r.quoteEn}"`}
                </motion.p>
              </AnimatePresence>
            </div>

            {/* Stars + location */}
            <div className="flex items-center gap-4">
              <div className="flex gap-0.5">
                {Array.from({ length: r.rating }).map((_, i) => (
                  <Star key={i} size={14} fill="#C6A27A" style={{ color: '#C6A27A' }} />
                ))}
              </div>
              <span style={{ fontSize: '0.65rem', color: '#C6A27A', letterSpacing: '0.14em', fontFamily: 'Manrope, sans-serif', fontWeight: 600 }}>
                {isRTL ? r.locationAr : r.locationEn}
              </span>
            </div>

            {/* Gold separator */}
            <div style={{ width: 48, height: 1, background: 'linear-gradient(90deg, #C6A27A, transparent)' }} />

            {/* Stats grid — integrated directly below quote */}
            <div className="grid grid-cols-4 gap-3">
              {stats.map((s) => (
                <div key={s.labelEn} className="text-center">
                  <div
                    style={{
                      fontFamily: 'system-ui, -apple-system, sans-serif',
                      fontSize: 'clamp(1.5rem, 2.5vw, 2.2rem)',
                      fontWeight: 300,
                      color: '#2b1b12',
                      lineHeight: 1,
                    }}
                  >
                    <AnimatedStat text={s.numEn} />
                  </div>
                  <p style={{ fontSize: '0.55rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: '#C6A27A', fontFamily: 'Manrope, sans-serif', fontWeight: 700, marginTop: 5 }}>
                    {isRTL ? s.labelAr : s.labelEn}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* ── Review Cards Slider ── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="relative"
        >
          {/* Navigation arrows */}
          <div className="flex items-center justify-between mb-6">
            <span style={{ fontSize: '0.6rem', fontWeight: 700, letterSpacing: '0.25em', textTransform: 'uppercase', color: '#C6A27A', fontFamily: 'Manrope, sans-serif' }}>
              {isRTL ? 'شهادات أخرى' : 'More stories'}
            </span>
            <div className="flex gap-2">
              <button
                onClick={isRTL ? next : prev}
                className="w-9 h-9 rounded-full border flex items-center justify-center transition-all duration-300 hover:-translate-y-0.5"
                style={{ border: '1px solid rgba(198,162,122,0.35)', color: '#C6A27A', background: 'transparent' }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = '#C6A27A'; (e.currentTarget as HTMLElement).style.color = 'white'; }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = 'transparent'; (e.currentTarget as HTMLElement).style.color = '#C6A27A'; }}
              >
                <ChevronLeft size={14} />
              </button>
              <button
                onClick={isRTL ? prev : next}
                className="w-9 h-9 rounded-full border flex items-center justify-center transition-all duration-300 hover:-translate-y-0.5"
                style={{ border: '1px solid rgba(198,162,122,0.35)', color: '#C6A27A', background: 'transparent' }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = '#C6A27A'; (e.currentTarget as HTMLElement).style.color = 'white'; }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = 'transparent'; (e.currentTarget as HTMLElement).style.color = '#C6A27A'; }}
              >
                <ChevronRight size={14} />
              </button>
            </div>
          </div>

          {/* Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {reviews.map((rev, i) => (
              <motion.button
                key={i}
                onClick={() => setActive(i)}
                whileHover={{ y: -4, boxShadow: '0 16px 40px rgba(42,30,20,0.14)' }}
                transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
                className="text-start p-5 cursor-pointer"
                style={{
                  background: i === active ? 'white' : 'rgba(255,255,255,0.65)',
                  border: i === active ? '1.5px solid rgba(198,162,122,0.4)' : '1.5px solid rgba(198,162,122,0.15)',
                  borderRadius: 16,
                  boxShadow: i === active ? '0 8px 32px rgba(42,30,20,0.10)' : '0 2px 12px rgba(42,30,20,0.04)',
                  transition: 'all 0.3s ease',
                }}
              >
                {/* Mini avatar + name */}
                <div className="flex items-center gap-3 mb-3">
                  <div
                    className="w-8 h-8 rounded-full overflow-hidden flex-shrink-0"
                    style={{ border: '2px solid rgba(198,162,122,0.3)' }}
                  >
                    <img src={rev.image} alt="" className="w-full h-full object-cover object-top" />
                  </div>
                  <div>
                    <p style={{ fontSize: '0.65rem', fontWeight: 800, letterSpacing: '0.12em', textTransform: 'uppercase', color: i === active ? '#2b1b12' : '#8a7b71', fontFamily: 'Manrope, sans-serif' }}>
                      {isRTL ? rev.nameAr : rev.nameEn}
                    </p>
                    <p style={{ fontSize: '0.58rem', color: '#C6A27A', fontFamily: 'Manrope, sans-serif' }}>
                      {isRTL ? rev.locationAr : rev.locationEn}
                    </p>
                  </div>
                </div>

                {/* Stars */}
                <div className="flex gap-0.5 mb-2">
                  {Array.from({ length: rev.rating }).map((_, si) => (
                    <Star key={si} size={10} fill="#C6A27A" style={{ color: '#C6A27A', opacity: i === active ? 1 : 0.5 }} />
                  ))}
                </div>

                {/* Quote snippet */}
                <p
                  className="line-clamp-2"
                  style={{
                    fontFamily: 'Cormorant Garamond, serif',
                    fontSize: '0.82rem',
                    fontStyle: 'italic',
                    color: i === active ? '#5a4a3a' : '#a09080',
                    lineHeight: 1.55,
                    transition: 'color 0.3s',
                  }}
                >
                  {isRTL ? rev.quoteAr : rev.quoteEn}
                </p>

                {/* Active indicator bar */}
                {i === active && (
                  <motion.div
                    layoutId="active-indicator"
                    style={{ height: 2, background: 'linear-gradient(90deg, #C6A27A, #a37e58)', borderRadius: 1, marginTop: 12 }}
                  />
                )}
              </motion.button>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default TestimonialsSlider;
