import { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { Scissors, Gem, Clock, Star, Sparkles, Heart, ChevronDown } from 'lucide-react';

// Elite photography assets from Pexels
const IMGS = {
  hero:    'https://images.pexels.com/photos/1043902/pexels-photo-1043902.jpeg?auto=compress&cs=tinysrgb&w=1600',
  craft1:  'https://images.pexels.com/photos/2955375/pexels-photo-2955375.jpeg?auto=compress&cs=tinysrgb&w=1000',
  craft2:  'https://images.pexels.com/photos/1755428/pexels-photo-1755428.jpeg?auto=compress&cs=tinysrgb&w=900',
  wide:    'https://images.pexels.com/photos/265722/pexels-photo-265722.jpeg?auto=compress&cs=tinysrgb&w=1600',
  detail1: 'https://images.pexels.com/photos/3622608/pexels-photo-3622608.jpeg?auto=compress&cs=tinysrgb&w=800',
  detail2: 'https://images.pexels.com/photos/1759622/pexels-photo-1759622.jpeg?auto=compress&cs=tinysrgb&w=800',
  detail3: 'https://images.pexels.com/photos/2253842/pexels-photo-2253842.jpeg?auto=compress&cs=tinysrgb&w=800',
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
      subtitle: "How we bring your dream gown from imagination to reality.",
      steps: [
        {
          num: "01",
          title: "The Design Sketch",
          desc: "A collaborative consultation where your vision is translated into an elegant, custom fashion sketch."
        },
        {
          num: "02",
          title: "Premium Fabric Selection",
          desc: "Sourcing exquisite silks, custom tulles, and hand-woven French lace from the finest European mills."
        },
        {
          num: "03",
          title: "Masterful Fitting",
          desc: "Meticulous draping and custom tailoring over multiple sessions to sculpt the dress perfectly to your form."
        }
      ]
    },
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
      subtitle: "كيف نتحرك بفساتين أحلامكِ من مخيلتكِ إلى واقع ملموس يأسر القلوب.",
      steps: [
        {
          num: "٠١",
          title: "الرسم والتصميم الأولي",
          desc: "جلسة استشارية خاصة يتم فيها تحويل رؤيتكِ وخيالكِ إلى رسمة أزياء راقية ومخصصة لكِ وحدكِ."
        },
        {
          num: "٠٢",
          title: "انتقاء الأقمشة الفاخرة",
          desc: "اختيار الحرير الفاخر، التول المنسوج، والدانتيل الفرنسي المعشق من أرقى بيوت النسيج الأوروبية."
        },
        {
          num: "٠٣",
          title: "القياس والصياغة اليدوية",
          desc: "عمليات التشكيل والقص المتقنة على مدار عدة جلسات قياس لتطويع الفستان ليلائم تفاصيل جسدكِ بدقة مثالية."
        }
      ]
    },
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
      <section ref={parallaxQuoteRef} className="relative h-[70vh] overflow-hidden flex items-center justify-center">
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
        <div className="absolute inset-0 bg-[#2A1E1A]/60 backdrop-blur-[2px]" />
        
        {/* Beautiful Floating Frame Container */}
        <motion.div 
          {...smokeReveal}
          className="relative z-10 max-w-4xl mx-auto px-6 text-center"
        >
          <div className="p-8 md:p-14 rounded-[32px] bg-[#2A1E1A]/35 border border-white/10 backdrop-blur-md shadow-2xl">
            <span className="block text-[0.62rem] font-bold uppercase tracking-[0.38em] text-[#C6A27A] mb-8">
              ✦ BRAND PHILOSOPHY ✦
            </span>
            <p className="font-serif text-3xl md:text-5xl lg:text-6xl text-white italic max-w-3xl leading-snug mx-auto font-light">
              {copy.craft.quote}
            </p>
            <div className="w-16 h-[1.5px] bg-[#C6A27A] mx-auto my-8 opacity-70" />
            <span className="block text-[0.68rem] font-bold uppercase tracking-[0.24em] text-[#e8e0d7]">
              {copy.craft.designer}
            </span>
          </div>
        </motion.div>
      </section>

      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
         4. THE PROCESS STORYBOARD
         ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section className="py-24 lg:py-36 relative px-6 md:px-12 lg:px-20 bg-white">
        <div className="max-w-7xl mx-auto">
          
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-24">
            <motion.div {...textReveal}>
              <span className="text-[0.62rem] font-bold uppercase tracking-[0.34em] text-[#C6A27A] block mb-3">
                ✦ {copy.process.label}
              </span>
              <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-[#2A1E1A] leading-[1.1] mb-6 font-light">
                {copy.process.title}
              </h2>
              <p className="text-[#8f7d6d] font-sans font-light text-base md:text-lg max-w-xl mx-auto leading-relaxed">
                {copy.process.subtitle}
              </p>
            </motion.div>
          </div>

          {/* Interactive Steps Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-14">
            {[
              { img: IMGS.detail1, step: copy.process.steps[0] },
              { img: IMGS.detail2, step: copy.process.steps[1] },
              { img: IMGS.detail3, step: copy.process.steps[2] },
            ].map((item, idx) => (
              <motion.div 
                key={idx} 
                {...textReveal}
                transition={{ delay: idx * 0.15, duration: 1.0 }} 
                className="group flex flex-col"
              >
                {/* Image Container with Blur Reveal and Inner Hover Border */}
                <div className="aspect-[4/5] rounded-[24px] overflow-hidden mb-8 shadow-md relative group/img">
                  <motion.img 
                    src={item.img} 
                    alt={item.step.title} 
                    className="w-full h-full object-cover transition-transform duration-[1.5s] group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-[#2A1E1A]/10 group-hover:bg-[#2A1E1A]/30 transition-colors duration-500" />
                  
                  {/* Subtle Inner Border Overlay */}
                  <div className="absolute inset-4 rounded-[18px] border border-white/0 group-hover/img:border-white/30 transition-all duration-500" />
                </div>

                {/* Step Metadata */}
                <div className="flex gap-5">
                  <span className="font-serif text-4xl lg:text-5xl text-[#C6A27A] font-light leading-none">
                    {item.step.num}
                  </span>
                  <div className="space-y-3">
                    <h3 className="font-serif text-2xl text-[#2A1E1A] font-light tracking-wide">
                      {item.step.title}
                    </h3>
                    <p className="text-sm text-[#8f7d6d] font-sans font-light leading-relaxed">
                      {item.step.desc}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
         5. THE EXQUISITE PRIVATE CONSULTATION CARD (CTA)
         ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section className="py-24 relative px-6 md:px-12 lg:px-20 overflow-hidden bg-[#FBF8F4]">
        
        {/* Soft Background Blur Orb */}
        <div className="absolute left-0 bottom-0 w-[400px] h-[400px] bg-amber-100/40 rounded-full blur-[100px] pointer-events-none" />

        <div className="max-w-5xl mx-auto">
          <motion.div 
            {...smokeReveal}
            className="p-10 md:p-20 rounded-[40px] bg-white border border-[#dfd7cc] shadow-xl text-center relative overflow-hidden"
          >
            
            {/* Elegant Inner Frame lines */}
            <div className="absolute inset-4 rounded-[32px] border border-[#dfd7cc]/30 pointer-events-none" />
            <div className="absolute inset-6 rounded-[28px] border border-[#C6A27A]/15 pointer-events-none" />

            <div className="relative z-10 max-w-2xl mx-auto">
              
              {/* Small Elegant Icon */}
              <div className="w-16 h-16 rounded-full bg-[#F5F1EC] flex items-center justify-center mx-auto mb-8 border border-[#dfd7cc]/50">
                <Heart size={20} className="text-[#C6A27A] animate-pulse" />
              </div>

              <span className="text-[0.62rem] font-bold uppercase tracking-[0.38em] text-[#C6A27A] block mb-4">
                ✦ {copy.cta.label} ✦
              </span>

              <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-[#2A1E1A] leading-[1.1] mb-6 font-light">
                {copy.cta.title}
              </h2>

              <p className="text-[#8f7d6d] font-sans font-light text-base leading-relaxed mb-12">
                {copy.cta.desc}
              </p>

              {/* Gold border luxury primary button */}
              <Link 
                to="/book-appointment" 
                className="btn-primary inline-flex px-10 py-5 text-[0.65rem] tracking-[0.24em] font-semibold rounded-full text-white bg-[#2A1E1A] hover:bg-[#C6A27A] hover:shadow-gold transition-all duration-300"
              >
                {copy.cta.btn}
              </Link>
            </div>

          </motion.div>
        </div>
      </section>

    </div>
  );
}
