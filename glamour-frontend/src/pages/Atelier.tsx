import { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { Scissors, Gem, Clock, Star, Sparkles, Heart, ChevronDown } from 'lucide-react';

// Bridal couture photography — white gowns & atelier details only
const IMGS = {
  hero:    'https://images.pexels.com/photos/1043902/pexels-photo-1043902.jpeg?auto=compress&cs=tinysrgb&w=1600',
  craft1:  'https://images.pexels.com/photos/2955375/pexels-photo-2955375.jpeg?auto=compress&cs=tinysrgb&w=1000',
  craft2:  'https://images.pexels.com/photos/1024993/pexels-photo-1024993.jpeg?auto=compress&cs=tinysrgb&w=900',
  wide:    'https://images.pexels.com/photos/1755428/pexels-photo-1755428.jpeg?auto=compress&cs=tinysrgb&w=1600',
  detail1: 'https://images.pexels.com/photos/265722/pexels-photo-265722.jpeg?auto=compress&cs=tinysrgb&w=800',
  detail2: 'https://images.pexels.com/photos/1043902/pexels-photo-1043902.jpeg?auto=compress&cs=tinysrgb&w=800',
  detail3: 'https://images.pexels.com/photos/2955375/pexels-photo-2955375.jpeg?auto=compress&cs=tinysrgb&w=800',
  designer:'https://images.pexels.com/photos/1024993/pexels-photo-1024993.jpeg?auto=compress&cs=tinysrgb&w=200',
};

// Luxury Bilingual copy for Dior-tier Editorial feeling
const content = {
  en: {
    hero: {
      preTitle: "✦ The House of Glamour ✦",
      title: "Where Dreams Take Shape",
      subtitle: "Bespoke wedding gowns and haute couture crafted with uncompromising luxury.",
      ctaPrimary: "Book Private Fitting",
      ctaSecondary: "Explore Collections"
    },
    craft: {
      label: "Masterful Artistry",
      title: "The Art of the Craft",
      p1: "We believe that true luxury lies in the unseen details. From the initial sketch to the final fitting, every step is executed with an uncompromising commitment to quality.",
      p2: "Our master tailors use only the finest European silks, French laces, and hand-placed Swarovski crystals. A single gown can require over 400 hours of delicate handwork.",
      quote: "\"A dress should not just fit the body; it should elevate the spirit.\"",
      designer: "— Nilufer Aydin, Lead Designer",
      crystalsCardTitle: "Swarovski Brilliance",
      crystalsCardDesc: "Each crystal is hand-sewn with micro-precision under high-end jewelry loupes."
    },
    stats: {
      hours: "Handcraft Hours",
      years: "Bespoke Heritage",
      brides: "Elite Brides",
      custom: "Tailored Perfection"
    },
    process: {
      label: "The Journey",
      title: "The Couture Process",
      subtitle: "Five deliberate steps — from your first dream to the last stitch.",
      steps: [
        { num: "01", title: "Private Consultation", desc: "A closed, intimate session to understand your vision, personality, and wedding day story." },
        { num: "02", title: "Design & Sketch", desc: "Our lead designer translates your vision into bespoke fashion sketches, refined until perfect." },
        { num: "03", title: "Fabric Selection", desc: "Sourcing exquisite European silks, French lace, and hand-woven tulles from our curated ateliers." },
        { num: "04", title: "Tailoring & Fittings", desc: "Multiple fitting sessions with master tailors to sculpt the gown precisely to your silhouette." },
        { num: "05", title: "Final Delivery", desc: "Your gown arrives in a signature Glamour box, ready to make history on your most important day." }
      ]
    },
    scarcity: "We accept a limited number of brides each season to ensure every gown receives our full dedication.",
    cta: {
      label: "Private consultation",
      title: "The Fitting Experience",
      desc: "Your appointment is a private, 90-minute session in our elite Nişantaşı salon. Enjoy complimentary champagne and expert styling guidance in a completely intimate setting.",
      btn: "Reserve Your Private Salon"
    }
  },
  ar: {
    hero: {
      preTitle: "✦ دار جلامور للهوت كوتور ✦",
      title: "مصمم خصيصًا للحظات التي لا تُنسى",
      subtitle: "فساتين زفاف وهوت كوتور بتفاصيل صُنعت لتبقى وتخلد أجمل ذكرياتكِ في الذاكرة.",
      ctaPrimary: "احجزي موعدكِ الخاص",
      ctaSecondary: "اكتشفي المجموعات"
    },
    craft: {
      label: "حرفة يدوية متقنة",
      title: "فن الحرفة والنبض الإبداعي",
      p1: "نحن نؤمن بأن الفخامة الحقيقية لا تكمن في الجمال الظاهري فقط، بل في أدق التفاصيل غير المرئية التي تحتضن جسدكِ. من الرسمة الأولى إلى الجلسة الأخيرة، يتم إتقان كل تفصيل بشغف تام.",
      p2: "يقضي خبراؤنا وحرفيونا المهرة في إسطنبول ما يزيد عن 400 ساعة عمل في حياكة وتطريز الفستان الواحد يدوياً، مستخدمين أرقى أنواع الحرير الإيطالي والدانتيل الفرنسي الفاخر، وكريستالات Swarovski البراقة.",
      quote: "\"يجب ألا يقتصر الفستان على ملاءمة الجسد فحسب؛ بل يجب أن يرتقي بالروح.\"",
      designer: "— نيلوفر آيدين، كبيرة المصممين",
      crystalsCardTitle: "بريق شواروفسكي المذهل",
      crystalsCardDesc: "تُطرز كل حبة كريستال يدوياً بدقة فائقة تحت إشراف نخبة من مصممي المجوهرات."
    },
    stats: {
      hours: "ساعات عمل يدوية",
      years: "عاماً من الإبداع",
      brides: "عروس فخمة",
      custom: "تفصيل مخصص بالكامل"
    },
    process: {
      label: "الرحلة الإبداعية",
      title: "مراحل صنع الفستان الفاخر",
      subtitle: "خمس مراحل متقنة — من أول حلم إلى آخر غرزة.",
      steps: [
        { num: "٠١", title: "الاستشارة الخاصة", desc: "جلسة مغلقة وحميمة لفهم رؤيتكِ وشخصيتكِ وقصة يوم زفافكِ الاستثنائي." },
        { num: "٠٢", title: "التصميم والرسم", desc: "تترجم كبيرة مصمماتنا رؤيتكِ إلى رسوم أزياء مخصصة، تُعدَّل حتى تصل إلى الكمال." },
        { num: "٠٣", title: "انتقاء الأقمشة", desc: "استيراد الحرير الأوروبي الفاخر والدانتيل الفرنسي والتول المنسوج يدوياً من أرقى بيوت النسيج." },
        { num: "٠٤", title: "التفصيل وجلسات القياس", desc: "جلسات قياس متعددة مع خياطين أساتذة لتطويع الفستان بدقة مطلقة لتناسب تفاصيل جسدكِ." },
        { num: "٠٥", title: "التسليم النهائي", desc: "فستانكِ يصلكِ في صندوق جلامور المميز، جاهزاً لصنع التاريخ في أهم أيام حياتكِ." }
      ]
    },
    scarcity: "نستقبل عدداً محدوداً من العرائس في كل موسم لضمان حصول كل فستان على اهتمامنا الكامل وعنايتنا المطلقة.",
    cta: {
      label: "استشارة خاصة وحصرية",
      title: "تجربة القياس الحصرية",
      desc: "موعدكِ هو جلسة مغلقة بالكامل لمدة 90 دقيقة في صالوننا الرئيسي في نيشانتاشي. استمتعي بالضيافة الفاخرة والإرشاد الفني من خبيرات التنسيق في خصوصية تامة.",
      btn: "احجزي موعد صالونكِ الخاص"
    }
  }
};

// Custom Smoke Reveal Animation Definition
const smokeReveal = {
  initial: { opacity: 0, filter: 'blur(24px)', scale: 1.08 },
  whileInView: { opacity: 1, filter: 'blur(0px)', scale: 1 },
  viewport: { once: true, margin: '-80px' },
  transition: { duration: 1.4, ease: [0.22, 1, 0.36, 1] }
};

// Custom Text Reveal Animation Definition
const textReveal = {
  initial: { opacity: 0, y: 48, filter: 'blur(6px)' },
  whileInView: { opacity: 1, y: 0, filter: 'blur(0px)' },
  viewport: { once: true, margin: '-60px' },
  transition: { duration: 1.0, ease: [0.22, 1, 0.36, 1] }
};

export default function Atelier() {
  const { i18n } = useTranslation();
  const currentLang = i18n.language === 'ar' ? 'ar' : 'en';
  const copy = content[currentLang];
  const isRtl = currentLang === 'ar';

  // Refs for Scroll Parallax
  const craftSectionRef = useRef<HTMLDivElement>(null);
  const parallaxQuoteRef = useRef<HTMLDivElement>(null);

  // Parallax Calculations for Quote Background
  const { scrollYProgress: quoteScrollProgress } = useScroll({
    target: parallaxQuoteRef,
    offset: ['start end', 'end start']
  });
  const quoteBgY = useTransform(quoteScrollProgress, [0, 1], ['-15%', '15%']);
  const quoteBgSpringY = useSpring(quoteBgY, { stiffness: 45, damping: 15 });

  // Parallax Calculations for Craft Layering
  const { scrollYProgress: craftScrollProgress } = useScroll({
    target: craftSectionRef,
    offset: ['start end', 'end start']
  });
  const craftLayerY = useTransform(craftScrollProgress, [0, 1], ['12%', '-12%']);
  const craftLayerSpringY = useSpring(craftLayerY, { stiffness: 40, damping: 18 });

  const stats = [
    { icon: Scissors, value: '400+', label: copy.stats.hours },
    { icon: Clock,    value: '20+',  label: copy.stats.years },
    { icon: Gem,      value: '500+', label: copy.stats.brides },
    { icon: Star,     value: '100%', label: copy.stats.custom },
  ];

  return (
    <div className="min-h-screen pb-20 overflow-x-hidden selection:bg-amber-100 selection:text-ink bg-[#F5F1EC] text-[#2A1E1A]">
      
      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
         1. CINEMATIC HERO SECTION
         ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section className="relative h-screen flex items-end overflow-hidden">
        {/* Soft Zoom / Smoke reveal animation on mount for the image */}
        <motion.div 
          className="absolute inset-0 scale-105"
          initial={{ scale: 1.15, filter: 'blur(16px)', opacity: 0 }}
          animate={{ scale: 1.0, filter: 'blur(0px)', opacity: 1 }}
          transition={{ duration: 1.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <img 
            src={IMGS.hero} 
            alt="Glamour Atelier" 
            className="w-full h-full object-cover" 
          />
        </motion.div>

        {/* Dior-style Premium Overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#130d0b]/95 via-[#1a1412]/50 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#130d0b]/75 via-transparent to-[#130d0b]/15" />
        
        {/* Subtle Decorative Film Grain */}
        <div className="absolute inset-0 opacity-[0.03] mix-blend-overlay pointer-events-none grain-overlay" />

        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-16 pb-20 md:pb-28">
          <div className="max-w-3xl">
            {/* Elegant Sparkle Badge */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.0, delay: 0.3 }}
              className="flex items-center gap-3 mb-6"
            >
              <div className="w-10 h-[1px] bg-[#C6A27A]" />
              <span className="text-[0.62rem] font-bold uppercase tracking-[0.38em] text-[#C6A27A] flex items-center gap-2">
                <Sparkles size={11} className="animate-pulse" />
                {copy.hero.preTitle}
              </span>
            </motion.div>

            {/* Oversized Serif Title */}
            <motion.h1 
              initial={{ opacity: 0, y: 50, filter: 'blur(10px)' }}
              animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              transition={{ duration: 1.3, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="font-serif text-5xl md:text-7xl lg:text-8xl text-white mb-6 leading-[1.08] tracking-wide"
            >
              {copy.hero.title}
            </motion.h1>

            {/* Cinematic subtitle paragraph */}
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.2, delay: 0.9 }}
              className="text-white/70 text-base md:text-lg max-w-xl leading-relaxed mb-10 font-sans font-light"
            >
              {copy.hero.subtitle}
            </motion.p>

            {/* Premium CTA Buttons Group */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.1 }}
              className="flex flex-wrap items-center gap-5"
            >
              <Link 
                to="/book-appointment" 
                className="btn-primary px-8 py-4 text-[0.62rem] tracking-[0.24em] font-semibold rounded-full group flex items-center gap-3 text-white bg-[#2A1E1A] hover:bg-[#C6A27A] hover:shadow-gold transition-all duration-300"
              >
                {copy.hero.ctaPrimary}
              </Link>

              <Link 
                to="/collections" 
                className="text-[0.62rem] tracking-[0.24em] font-semibold uppercase text-white/80 hover:text-white border-b border-white/20 hover:border-[#C6A27A] py-1 transition-all duration-300"
              >
                {copy.hero.ctaSecondary}
              </Link>
            </motion.div>
          </div>
        </div>

        {/* Elegant Animated Scroll Down Indicator */}
        <motion.div 
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 cursor-pointer z-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          onClick={() => {
            craftSectionRef.current?.scrollIntoView({ behavior: 'smooth' });
          }}
        >
          <span className="text-[0.55rem] font-bold text-white/40 tracking-[0.4em] uppercase">SCROLL</span>
          <motion.div 
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          >
            <ChevronDown size={14} className="text-[#C6A27A]" />
          </motion.div>
        </motion.div>
      </section>

      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
         2. ASYMMETRICAL LUXURY EDITORIAL LAYOUT
         ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section ref={craftSectionRef} className="py-24 lg:py-36 relative px-6 md:px-12 lg:px-20 overflow-hidden">
        {/* Subtle Decorative Background Gold Lines */}
        <div className="absolute right-0 top-1/4 w-[500px] h-[500px] bg-amber-100/35 rounded-full blur-[120px] pointer-events-none" />

        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-12 gap-16 lg:gap-24 items-center">
            
            {/* Left: Narrative Content (5 cols) */}
            <div className="lg:col-span-6 space-y-8">
              <motion.div {...textReveal}>
                <span className="text-[0.62rem] font-bold uppercase tracking-[0.34em] text-[#C6A27A] block mb-3">
                  ✦ {copy.craft.label}
                </span>
                <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-[#2A1E1A] leading-[1.1] mb-8 font-light">
                  {copy.craft.title}
                </h2>
                
                <div className="space-y-6 text-[#8f7d6d] font-sans font-light text-base md:text-lg leading-relaxed">
                  <p>{copy.craft.p1}</p>
                  <p>{copy.craft.p2}</p>
                </div>
              </motion.div>

              {/* Statistics Grid */}
              <motion.div 
                {...textReveal}
                className="grid grid-cols-2 gap-8 pt-8 border-t border-[#dfd7cc]"
              >
                {stats.map((s, idx) => (
                  <div key={idx} className="flex gap-4 group">
                    <div className="w-12 h-12 shrink-0 rounded-full bg-white flex items-center justify-center text-[#C6A27A] shadow-soft border border-amber-100/50 group-hover:bg-[#C6A27A] group-hover:text-white transition-all duration-300">
                      <s.icon size={18} strokeWidth={1.5} />
                    </div>
                    <div>
                      <p className="font-serif text-3xl md:text-4xl text-[#2A1E1A] leading-none mb-2 font-medium tracking-tight">
                        {s.value}
                      </p>
                      <p className="text-[0.65rem] font-bold uppercase tracking-widest text-[#8f7d6d]">
                        {s.label}
                      </p>
                    </div>
                  </div>
                ))}
              </motion.div>
            </div>

            {/* Right: Layered Image Composition (6 cols) */}
            <div className="lg:col-span-6 relative flex items-center justify-center min-h-[500px] md:min-h-[640px]">
              
              {/* Main Background Image - with Smoke Reveal */}
              <motion.div 
                {...smokeReveal}
                className="w-[78%] aspect-[3/4] rounded-[24px] overflow-hidden shadow-xl"
              >
                <img 
                  src={IMGS.craft1} 
                  alt="Haute Couture Crafting" 
                  className="w-full h-full object-cover transition-transform duration-[1.8s] hover:scale-105" 
                />
              </motion.div>

              {/* Overlapping Parallax Image Card */}
              <motion.div 
                style={{ y: craftLayerSpringY }}
                className={`absolute w-[45%] aspect-[4/5] rounded-[20px] overflow-hidden shadow-2xl border-4 border-[#F5F1EC] hidden md:block ${
                  isRtl ? 'bottom-0 left-0 -translate-x-8' : 'bottom-0 right-0 translate-x-8'
                }`}
              >
                <img 
                  src={IMGS.craft2} 
                  alt="Dress Detailing" 
                  className="w-full h-full object-cover" 
                />
              </motion.div>

              {/* Luxury Floating Glassmorphic Details Card */}
              <motion.div 
                initial={{ opacity: 0, scale: 0.9, y: 30 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1.0, delay: 0.4 }}
                className={`absolute max-w-[220px] p-5 rounded-[20px] glass shadow-lg hidden md:block ${
                  isRtl ? 'top-[15%] right-0 translate-x-10' : 'top-[15%] left-0 -translate-x-10'
                }`}
              >
                <div className="flex items-center gap-2 mb-3">
                  <Gem size={14} className="text-[#C6A27A] animate-pulse" />
                  <span className="text-[0.6rem] font-bold uppercase tracking-wider text-[#2A1E1A]">
                    {copy.craft.crystalsCardTitle}
                  </span>
                </div>
                <p className="text-[0.7rem] text-[#8f7d6d] leading-relaxed">
                  {copy.craft.crystalsCardDesc}
                </p>
              </motion.div>

            </div>

          </div>
        </div>
      </section>

      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
         3. FULL WIDTH IMMERSIVE PARALLAX QUOTE
         ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
         3. FULL WIDTH IMMERSIVE PARALLAX QUOTE
         ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section ref={parallaxQuoteRef} className="relative h-[65vh] overflow-hidden flex items-center justify-center">
        {/* Parallax Background Image */}
        <motion.div 
          className="absolute inset-0 h-[130%] w-full scale-105"
          style={{ y: quoteBgSpringY }}
        >
          <img 
            src={IMGS.wide} 
            alt="Glamour Atelier Couture Wide" 
            className="w-full h-full object-cover" 
          />
        </motion.div>

        {/* Heavy Atmospheric Darkened Layer */}
        <div className="absolute inset-0 bg-[#120904]/70 backdrop-blur-[2px]" />
        
        {/* Beautiful Floating Frame Container */}
        <motion.div 
          {...smokeReveal}
          className="relative z-10 max-w-4xl mx-auto px-6 text-center"
        >
          <div className="p-8 md:p-14 rounded-[32px] bg-[#120904]/50 border border-white/10 backdrop-blur-md shadow-2xl">
            <span className="block text-[0.62rem] font-bold uppercase tracking-[0.38em] text-[#C6A27A] mb-6">
              ✦ {isRtl ? 'فلسفة الدار' : 'Brand Philosophy'} ✦
            </span>
            <p className="font-serif text-2xl md:text-4xl lg:text-5xl text-white italic max-w-3xl leading-snug mx-auto font-light">
              {copy.craft.quote}
            </p>
            <div className="w-16 h-[1.5px] bg-[#C6A27A] mx-auto my-6 opacity-70" />
            {/* Designer attribution with human touch */}
            <div className="flex items-center justify-center gap-4">
              <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-[#C6A27A]/40">
                <img src={IMGS.designer} alt="Designer" className="w-full h-full object-cover object-top" />
              </div>
              <div className="text-start">
                <span className="block text-[0.68rem] font-bold uppercase tracking-[0.24em] text-[#e8e0d7]">
                  {copy.craft.designer}
                </span>
                <span className="block text-[0.58rem] text-[#C6A27A] tracking-wider mt-0.5">
                  {isRtl ? 'المديرة الإبداعية للدار' : 'Creative Director'}
                </span>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
         3.5 STORYTELLING VISUALS GRID (Elie Saab Style)
         ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section className="py-16 lg:py-20 px-6 md:px-12 lg:px-20 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-[0.62rem] font-bold uppercase tracking-[0.34em] text-[#C6A27A] block mb-3">✦ {isRtl ? 'تفاصيل الأناقة والريادة' : 'Couture Craftsmanship Details'}</span>
            <h2 className="font-serif text-3xl md:text-4xl text-[#120904] font-light leading-snug">
              {isRtl ? 'كواليس صياغة الأحلام يدوياً' : 'Behind The Scenes Of Crafting Dreams'}
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {[
              {
                img: 'https://images.pexels.com/photos/9311797/pexels-photo-9311797.jpeg?auto=compress&cs=tinysrgb&w=800',
                titleAr: 'جلسة القياسات والتعديل',
                titleEn: 'Measurement & Draping Session',
                descAr: 'نعتمد أدق التفاصيل لضمان تطابق الفستان مع انحناءات الجسد بدقة لا مثيل لها.',
                descEn: 'Meticulous measurements ensuring the dress forms perfectly around your silhouette.'
              },
              {
                img: 'https://images.pexels.com/photos/9311796/pexels-photo-9311796.jpeg?auto=compress&cs=tinysrgb&w=800',
                titleAr: 'التطريز اليدوي الدقيق',
                titleEn: 'Hand Embroidery & Pearls',
                descAr: 'حياكة يدوية بالخيوط الحريرية وحبات اللؤلؤ وخرز الكريستال تروي قصة فخامة خالدة.',
                descEn: 'Intricate silk sewing, crystal beads, and fresh pearls telling a story of timeless glamour.'
              },
              {
                img: 'https://images.pexels.com/photos/6122695/pexels-photo-6122695.jpeg?auto=compress&cs=tinysrgb&w=800',
                titleAr: 'اختيار الخامات والدانتيل الفاخر',
                titleEn: 'Exquisite Materials & Lace Selection',
                descAr: 'ننتقي أجود الأقمشة الفرنسية والإيطالية والحرير الطبيعي الفاخر ليحتضن إطلالتك.',
                descEn: 'Curated premium French lace, Italian tulle, and organic silk drapery.'
              }
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: i * 0.15 }}
                className="group flex flex-col rounded-[24px] overflow-hidden bg-[#FAF7F2] border border-[#E8DED4] shadow-sm hover:shadow-lg transition-all duration-400"
              >
                <div className="overflow-hidden aspect-[4/3] w-full relative">
                  <img
                    src={item.img}
                    alt={isRtl ? item.titleAr : item.titleEn}
                    className="w-full h-full object-cover transition-transform duration-[1.5s] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors duration-300" />
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <h3 className="font-serif text-lg text-[#120904] font-medium mb-2" style={{ fontFamily: isRtl ? "'Noto Naskh Arabic', serif" : 'inherit' }}>
                    {isRtl ? item.titleAr : item.titleEn}
                  </h3>
                  <p className="text-xs text-[#6e5c52] font-light leading-relaxed flex-1">
                    {isRtl ? item.descAr : item.descEn}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
         4. LUXURY HORIZONTAL TIMELINE PROCESS
         ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section className="py-16 lg:py-20 relative px-6 md:px-12 lg:px-20 overflow-hidden" style={{ background: '#FAF7F2' }}>
        <div className="absolute top-0 inset-x-0 h-px" style={{ background: 'linear-gradient(to right, transparent, rgba(198,162,122,0.4), transparent)' }} />

        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <motion.div {...textReveal}>
              <span className="text-[0.62rem] font-bold uppercase tracking-[0.34em] text-[#C6A27A] block mb-3">✦ {copy.process.label}</span>
              <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-[#120904] leading-[1.1] mb-4 font-light">{copy.process.title}</h2>
              <p className="text-[#6e5c52] font-sans font-light text-sm max-w-xl mx-auto leading-relaxed">{copy.process.subtitle}</p>
            </motion.div>
          </div>

          {/* Timeline Steps */}
          <div className="relative">
            {/* Connecting horizontal line */}
            <div className="hidden lg:block absolute top-[35px] left-[10%] right-[10%] h-[1.5px]" style={{ background: 'linear-gradient(to right, transparent, #C6A27A 20%, #C6A27A 80%, transparent)' }} />

            <div className="grid grid-cols-1 sm:grid-cols-5 gap-8 lg:gap-4">
              {copy.process.steps.map((step, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 32 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{ duration: 0.8, delay: idx * 0.12, ease: [0.22, 1, 0.36, 1] }}
                  className="flex flex-col items-center text-center relative group cursor-pointer"
                  style={{ transition: 'all 0.4s ease' }}
                >
                  {/* Step circle */}
                  <div
                    className="w-[70px] h-[70px] rounded-full flex flex-col items-center justify-center mb-5 relative z-10 transition-all duration-500 bg-white border border-[#C6A27A]/30 group-hover:scale-105 group-hover:shadow-[0_0_30px_rgba(198,162,122,0.5)] group-hover:border-[#C6A27A] group-hover:bg-[#C6A27A]/5"
                  >
                    <span className="font-serif text-lg font-light text-[#C6A27A]" style={{ fontFamily: isRtl ? "'Noto Naskh Arabic', serif" : 'inherit' }}>{step.num}</span>
                  </div>
                  <h3 className="font-serif text-base text-[#120904] font-medium mb-2 leading-tight group-hover:text-[#C6A27A] transition-colors duration-300">{step.title}</h3>
                  <p className="text-[11px] text-[#6e5c52] font-sans font-light leading-relaxed max-w-[160px] group-hover:translate-y-[-2px] transition-transform duration-300">{step.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Scarcity signal */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mt-16 text-center"
          >
            <div className="inline-flex items-center gap-3 px-6 py-2.5 rounded-full bg-amber-50/50 border border-amber-100/50">
              <Sparkles size={11} className="text-[#C6A27A]" />
              <p className="text-[0.68rem] text-[#6e5c52] font-sans italic leading-relaxed">{copy.scarcity}</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
         5. TESTIMONIALS — آراء العميلات
         ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section className="py-16 lg:py-20 px-6 md:px-12 lg:px-20 bg-white relative overflow-hidden">
        <div className="absolute top-0 inset-x-0 h-px" style={{ background: 'linear-gradient(to right, transparent, rgba(198,162,122,0.4), transparent)' }} />
        <div className="max-w-7xl mx-auto">
          <motion.div {...textReveal} className="text-center mb-12">
            <span className="text-[0.62rem] font-bold uppercase tracking-[0.34em] text-[#C6A27A] block mb-3">✦ {isRtl ? 'آراء عرائسنا' : 'Our Brides Say'}</span>
            <h2 className="font-serif text-3xl md:text-4xl text-[#120904] font-light leading-snug">
              {isRtl ? 'لحظات لا تُنسى، شهادات حقيقية' : 'Unforgettable Moments, Real Stories'}
            </h2>
          </motion.div>
          <div className="grid md:grid-cols-3 gap-6">
            {(isRtl ? [
              { name: 'سارة الأحمد', city: 'الرياض', stars: 5, text: 'الفستان تجاوز كل توقعاتي. كل تفصيل كان مثالياً ومصنوعاً بحب حقيقي. شعرت وكأنني أميرة في يوم زفافي.' },
              { name: 'نور المنصور', city: 'الكويت', stars: 5, text: 'تجربة لا توصف. الفريق تعامل معي بأسلوب راقٍ جداً وفهموا رؤيتي من اللحظة الأولى.' },
              { name: 'لينا حداد', city: 'بيروت', stars: 5, text: 'فستان من الحلم! كل غرزة حكت قصة. أنصح كل عروس بتجربة جلامور كوتور.' },
            ] : [
              { name: 'Sarah Al-Ahmad', city: 'Riyadh', stars: 5, text: 'The gown exceeded every expectation. Each detail was perfection, crafted with genuine love. I felt like royalty.' },
              { name: 'Nour Al-Mansour', city: 'Kuwait', stars: 5, text: 'An indescribable experience. The team handled everything with such refinement and understood my vision immediately.' },
              { name: 'Lina Haddad', city: 'Beirut', stars: 5, text: 'A dream gown! Every stitch told a story. I recommend Glamour Couture to every bride.' },
            ]).map((t, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: i * 0.12 }}
                className="p-8 rounded-[24px] bg-[#FAF7F2] border border-[#E8DED4] hover:border-[#C6A27A]/40 hover:shadow-lg transition-all duration-400 group"
              >
                <div className="flex gap-1 mb-5">
                  {Array.from({ length: t.stars }).map((_, s) => (
                    <Star key={s} size={13} className="text-[#C6A27A] fill-[#C6A27A]" />
                  ))}
                </div>
                <p className="text-[#6e5c52] text-sm leading-relaxed mb-6 font-light font-sans">
                  "{t.text}"
                </p>
                <div className="flex items-center gap-3 pt-5 border-t border-[#E8DED4]">
                  <div className="w-9 h-9 rounded-full bg-[#C6A27A]/15 flex items-center justify-center border border-[#C6A27A]/30">
                    <Heart size={13} className="text-[#C6A27A]" />
                  </div>
                  <div>
                    <p className="text-[#120904] text-sm font-bold" style={{ fontFamily: isRtl ? "'Noto Naskh Arabic','Cairo',sans-serif" : 'Cormorant Garamond,serif' }}>{t.name}</p>
                    <p className="text-[#6e5c52] text-[10px] tracking-wider uppercase">{t.city}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
         6. FOUNDER SECTION — رسالة المؤسسة
         ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section className="py-16 lg:py-20 px-6 md:px-12 lg:px-20 bg-[#FAF7F2] relative overflow-hidden">
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-amber-100/30 rounded-full blur-[120px] pointer-events-none" />
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            {/* Founder Professional Circular Photo Column */}
            <motion.div
              {...smokeReveal}
              className="relative flex flex-col items-center justify-center text-center"
            >
              <div className="relative w-[280px] h-[280px] lg:w-[320px] lg:h-[320px] rounded-full overflow-hidden shadow-2xl border-4 border-white">
                <img
                  src="https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Nilufer Aydin — Founder & Creative Director"
                  className="w-full h-full object-cover object-top"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#120904]/40 to-transparent" />
              </div>
              <div className="mt-6">
                <p className="text-[#120904] font-serif text-2xl font-light" style={{ fontFamily: isRtl ? "'Noto Naskh Arabic', serif" : 'Cormorant Garamond,serif' }}>
                  {isRtl ? 'نيلوفر آيدين' : 'Nilufer Aydin'}
                </p>
                <p className="text-[#C6A27A] text-[10px] tracking-[0.2em] uppercase mt-1.5 font-sans font-bold">
                  {isRtl ? 'Founder & Creative Director' : 'Founder & Creative Director'}
                </p>
                <div className="mt-4 font-serif text-2xl italic text-[#C6A27A]/80 font-light tracking-widest opacity-60">
                  Nilufer Aydin
                </div>
              </div>
              
              {/* Floating quote badge */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="absolute top-[10%] -right-4 lg:-right-8 max-w-[200px] p-5 rounded-[20px] bg-white/90 backdrop-blur-md shadow-xl border border-[#E8DED4] hidden sm:block"
              >
                <Sparkles size={14} className="text-[#C6A27A] mb-3" />
                <p className="text-[#120904] text-xs leading-relaxed font-light" style={{ fontFamily: isRtl ? "'Cairo',sans-serif" : 'Manrope,sans-serif' }}>
                  {isRtl ? '20+ عام من صنع أحلام العرائس حقيقة' : '20+ years turning bridal dreams into reality'}
                </p>
              </motion.div>
            </motion.div>

            {/* Founder Text Column */}
            <div className="space-y-6">
              <motion.div {...textReveal}>
                <span className="text-[0.62rem] font-bold uppercase tracking-[0.34em] text-[#C6A27A] block mb-3">✦ {isRtl ? 'رسالة المؤسسة' : "Founder's Message"}</span>
                <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-[#120904] leading-[1.15] mb-6 font-light">
                  {isRtl ? 'رسالتنا ليست بيع فستان' : 'Our Mission Is Not To Sell A Dress'}
                </h2>
                <div className="space-y-4 text-[#6e5c52] font-light text-base leading-relaxed" style={{ fontFamily: isRtl ? "'Cairo','Tajawal',sans-serif" : 'Manrope,sans-serif' }}>
                  <p>
                    {isRtl
                      ? '«حين أسستُ جلامور كوتور، كان حلمي أن تشعر كل عروس بأنها الأجمل والأكثر تميزاً في يوم زفافها. نحن لا نبيع فساتين — نصنع ذكريات خالدة تُروى للأجيال.»'
                      : '"When I founded Glamour Couture, my dream was for every bride to feel like the most beautiful, most unique version of herself on her wedding day. We don\'t sell dresses — we craft eternal memories."'}
                  </p>
                  <p>
                    {isRtl
                      ? 'كل فستان يحمل روحي، روح فريقي، وأهم من كل ذلك — روح العروس نفسها.'
                      : 'Every gown carries my spirit, the spirit of my team, and above all — the spirit of the bride herself.'}
                  </p>
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.2 }}
                className="pt-6 border-t border-[#dfd7cc] flex items-center gap-4"
              >
                <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-[#C6A27A]/40 shrink-0">
                  <img src={IMGS.designer} alt="Nilufer" className="w-full h-full object-cover object-top" />
                </div>
                <div>
                  <p className="font-bold text-[#120904] text-sm" style={{ fontFamily: isRtl ? "'Noto Naskh Arabic','Cairo',sans-serif" : 'Cormorant Garamond,serif' }}>
                    {isRtl ? 'نيلوفر آيدين' : 'Nilufer Aydin'}
                  </p>
                  <p className="text-[#C6A27A] text-[10px] tracking-[0.2em] uppercase mt-0.5">
                    {isRtl ? 'المؤسسة والمديرة الإبداعية' : 'Founder & Creative Director'}
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
         7. CINEMATIC FULL-BLEED CTA (Mini Hero Silk Style)
         ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section className="relative h-[65vh] min-h-[500px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.pexels.com/photos/3315291/pexels-photo-3315291.jpeg?auto=compress&cs=tinysrgb&w=1600"
            alt="Glamour Silk Texture Background"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-[#120904]/75 backdrop-blur-[2px]" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#120904] via-transparent to-transparent" />

        <motion.div
          {...smokeReveal}
          className="relative z-10 text-center max-w-3xl mx-auto px-6"
        >
          <span className="text-[0.62rem] font-bold uppercase tracking-[0.38em] text-[#C6A27A] block mb-6">
            ✦ {isRtl ? 'استشارة خاصة وحصرية' : 'Private Consultation'} ✦
          </span>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-white leading-[1.1] mb-4 font-light">
            {isRtl ? 'جاهزة لتصميم فستان أحلامكِ؟' : 'Ready to Design Your Dream Gown?'}
          </h2>
          <p className="text-white/80 text-sm leading-relaxed mb-10 max-w-lg mx-auto font-sans font-light">
            {isRtl
              ? 'احجزي استشارتكِ الخاصة اليوم مع فريق مصمماتنا لنبدأ معاً رحلة تصميم إطلالة العمر الفريدة.'
              : 'Reserve your private consultation today with our designer team to begin the exquisite journey of your lifetime fit.'}
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-5">
            <Link
              to="/book-appointment"
              className="inline-flex items-center justify-center gap-3 px-10 py-4 rounded-full font-bold uppercase tracking-wider text-[0.65rem] transition-all duration-400 hover:-translate-y-1 hover:shadow-2xl"
              style={{
                background: 'linear-gradient(135deg, #C6A27A 0%, #a37e58 100%)',
                color: '#120904',
                boxShadow: '0 12px 40px rgba(198,162,122,0.4)',
              }}
            >
              <Heart size={12} className="fill-[#120904]" />
              {isRtl ? 'احجزي استشارتكِ الخاصة' : 'Book Consultation'}
            </Link>
            <Link
              to="/collections"
              className="text-[0.62rem] font-bold uppercase tracking-[0.22em] text-white/80 hover:text-white border-b border-white/20 hover:border-[#C6A27A] pb-0.5 transition-all duration-300"
            >
              {isRtl ? 'اكتشفي المجموعة الحصرية' : 'Explore Collections'}
            </Link>
          </div>
        </motion.div>
      </section>

    </div>
  );
}
