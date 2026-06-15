import { motion } from 'framer-motion';
import { Award, ShieldCheck, Compass } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useEffect, useState, useRef } from 'react';

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-40px' },
  transition: { duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] },
});

// Smooth CountUp Component using requestAnimationFrame & IntersectionObserver
function Counter({ target, duration = 1.5 }: { target: number; duration?: number }) {
  const [count, setCount] = useState(0);
  const elementRef = useRef<HTMLSpanElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          let startTime: number | null = null;
          const end = target;

          const animate = (currentTime: number) => {
            if (!startTime) startTime = currentTime;
            const elapsedTime = (currentTime - startTime) / 1000;
            if (elapsedTime < duration) {
              const progress = elapsedTime / duration;
              // easeOutExpo formula
              const easeProgress = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
              setCount(Math.floor(easeProgress * end));
              requestAnimationFrame(animate);
            } else {
              setCount(end);
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
  }, [target, duration]);

  return <span ref={elementRef}>{count}</span>;
}

export default function OurStory() {
  const { i18n } = useTranslation();
  const isRTL = i18n.language === 'ar';

  return (
    <div className="min-h-screen selection:bg-amber-100 selection:text-ink" style={{ background: '#fcfbf9' }}>

      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
         1. HERO SECTION (Wider & Stronger)
         ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section className="relative h-[85vh] min-h-[700px] flex items-end overflow-hidden">
        <img
          src="/images/25.jpg"
          alt="Glamour Atelier Story"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
        {/* Luxury gradient overlays for title legibility */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#211712]/98 via-[#211712]/50 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#211712]/80 via-transparent to-transparent" />

        <div className="relative z-10 max-w-7xl mx-auto px-8 lg:px-16 pb-24 w-full">
          <motion.div {...fadeUp(0.15)} className="space-y-4">
            <span className="inline-block text-[0.68rem] font-extrabold tracking-[0.35em] uppercase text-[#C6A27A]">
              {isRTL ? 'منذ ٢٠١٨' : 'SINCE 2018'}
            </span>
            <h1 className="text-5xl md:text-7xl text-white leading-tight font-bold" style={{ fontFamily: isRTL ? 'system-ui, -apple-system, sans-serif' : 'Cormorant Garamond, serif' }}>
              {isRTL ? 'قصتنا' : 'Our Story'}
            </h1>
            <p className="text-white/95 text-lg md:text-xl max-w-2xl leading-relaxed font-bold">
              {isRTL
                ? 'بدأت رحلتنا بشغفٍ لصناعة فساتين تحمل قصة كل عروس، واليوم نفخر بخدمة عميلاتنا داخل المملكة وحول العالم.'
                : 'Our journey began with a passion for crafting gowns that carry the unique story of every bride, and today we proudly serve our clients across the Kingdom and around the globe.'}
            </p>
            <div className="flex flex-wrap gap-4 pt-6">
              <Link
                to="/collections"
                className="px-8 py-4 bg-[#C6A27A] text-[#211712] rounded-full text-xs font-bold uppercase tracking-wider hover:bg-[#e0cbb8] transition-all shadow-lg hover:shadow-[#C6A27A]/20"
              >
                {isRTL ? 'تعرفي على خدماتنا' : 'Explore Our Collections'}
              </Link>
              <Link
                to="/book-appointment"
                className="px-8 py-4 border border-white/30 text-white rounded-full text-xs font-bold uppercase tracking-wider hover:bg-white/15 transition-all backdrop-blur-sm"
              >
                {isRTL ? 'احجزي استشارتك الخاصة' : 'Book Your Consultation'}
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
         2. فلسفتنا (Our Philosophy)
         ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section className="max-w-7xl mx-auto px-8 lg:px-16 py-28">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div {...fadeUp(0.1)} className="space-y-8">
            <span className="text-[0.62rem] font-bold tracking-[0.3em] uppercase text-[#C6A27A] block">
              {isRTL ? 'فلسفتنا' : 'OUR PHILOSOPHY'}
            </span>
            <h2 className="text-3xl md:text-5xl leading-tight text-[#2b1b12] font-bold" style={{ fontFamily: isRTL ? 'system-ui, -apple-system, sans-serif' : 'Cormorant Garamond, serif' }}>
              {isRTL
                ? 'نحن لا نصنع فستاناً فقط، بل نصمم تجربة متكاملة تبدأ من الحلم وتنتهي بلحظة لا تُنسى.'
                : 'We do not just make a gown, we design a complete experience that begins with a dream and ends with an unforgettable moment.'}
            </h2>
            <p className="text-[#5c4f44] text-base md:text-lg leading-relaxed font-medium">
              {isRTL
                ? 'كل تصميم يُنفذ بعناية فائقة ليعكس شخصية العروس الفريدة، ويمنحها شعوراً بالتميز والكمال الملكي في أهم يوم بحياتها.'
                : 'Every design is meticulously executed to reflect the bride\'s unique personality, giving her a sense of distinction and royal perfection on the most important day of her life.'}
            </p>
          </motion.div>

          <motion.div {...fadeUp(0.25)} className="relative">
            <div className="aspect-[4/3] rounded-[32px] overflow-hidden shadow-2xl">
              <img
                src="/images/10.jpg"
                alt="Atelier Philosophy"
                className="w-full h-full object-cover object-top"
              />
            </div>
            {/* Ambient gold glow */}
            <div className="absolute -inset-4 bg-[#C6A27A]/10 rounded-[36px] -z-10 blur-2xl" />
          </motion.div>
        </div>
      </section>

      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
         3. أرقام تعزز الثقة (Trust Stats)
         ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section className="py-24 relative overflow-hidden" style={{ background: '#fcfbf9' }}>
        <div className="max-w-7xl mx-auto px-8 lg:px-16 relative z-10 border-y border-[#e8dbd1]/60 py-16">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 text-center">
            {/* Stat 1 */}
            <motion.div {...fadeUp(0)} className="space-y-2">
              <div className="text-4xl md:text-6xl font-light text-[#2b1b12]" style={{ fontFamily: 'system-ui, -apple-system, sans-serif', fontWeight: 300 }} dir="ltr">
                <Counter target={500} />+
              </div>
              <p className="text-xs md:text-sm text-[#8a7b71] uppercase tracking-widest font-bold">
                {isRTL ? 'فستان تم تنفيذه' : 'Bespoke Gowns Crafted'}
              </p>
            </motion.div>

            {/* Stat 2 */}
            <motion.div {...fadeUp(0.1)} className="space-y-2">
              <div className="text-4xl md:text-6xl font-light text-[#2b1b12]" style={{ fontFamily: 'system-ui, -apple-system, sans-serif', fontWeight: 300 }} dir="ltr">
                <Counter target={98} />%
              </div>
              <p className="text-xs md:text-sm text-[#8a7b71] uppercase tracking-widest font-bold">
                {isRTL ? 'رضا العميلات' : 'Client Satisfaction'}
              </p>
            </motion.div>

            {/* Stat 3 */}
            <motion.div {...fadeUp(0.2)} className="space-y-2">
              <div className="text-4xl md:text-6xl font-light text-[#2b1b12]" style={{ fontFamily: 'system-ui, -apple-system, sans-serif', fontWeight: 300 }} dir="ltr">
                <Counter target={15} />+
              </div>
              <p className="text-xs md:text-sm text-[#8a7b71] uppercase tracking-widest font-bold">
                {isRTL ? 'دولة حول العالم' : 'Countries Served'}
              </p>
            </motion.div>

            {/* Stat 4 */}
            <motion.div {...fadeUp(0.3)} className="space-y-2">
              <div className="text-4xl md:text-6xl font-light text-[#2b1b12]" style={{ fontFamily: 'system-ui, -apple-system, sans-serif', fontWeight: 300 }} dir="ltr">
                <Counter target={7} />+
              </div>
              <p className="text-xs md:text-sm text-[#8a7b71] uppercase tracking-widest font-bold">
                {isRTL ? 'سنوات خبرة' : 'Years of Excellence'}
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
         4. رحلتك معنا (Timeline)
         ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section className="py-28 bg-[#faf8f5]">
        <div className="max-w-5xl mx-auto px-8 lg:px-16">
          <motion.div {...fadeUp(0)} className="text-center mb-20 space-y-4">
            <span className="text-[0.62rem] font-bold tracking-[0.3em] uppercase text-[#C6A27A] block">
              {isRTL ? 'رحلتك معنا' : 'YOUR JOURNEY WITH US'}
            </span>
            <h2 className="text-3xl md:text-5xl text-[#362e24] font-bold" style={{ fontFamily: isRTL ? 'system-ui, -apple-system, sans-serif' : 'Cormorant Garamond, serif' }}>
              {isRTL ? 'خطوات تصميم فستان العمر' : 'Bespoke Atelier Process'}
            </h2>
            <div className="w-12 h-[1px] bg-[#C6A27A] mx-auto" />
          </motion.div>

          <div className="relative border-s border-[#e8dbd1] ms-4 space-y-12 py-4">
            {/* Step 1 */}
            <motion.div {...fadeUp(0.05)} className="relative ps-8">
              <span className="absolute -start-4 top-0 w-8 h-8 rounded-full bg-[#C6A27A] text-white flex items-center justify-center text-xs font-bold shadow-md">
                01
              </span>
              <h3 className="text-lg font-bold text-[#362e24] mb-2" style={{ fontFamily: isRTL ? 'system-ui, -apple-system, sans-serif' : 'Cormorant Garamond, serif' }}>
                {isRTL ? 'الاستشارة الخاصة' : 'The Private Consultation'}
              </h3>
              <p className="text-[#8a7b71] text-sm leading-relaxed max-w-xl">
                {isRTL
                  ? 'جلسة استشارية خاصة مدتها 45 دقيقة لمناقشة رؤيتكِ، واستعراض الخامات الفاخرة، ورسم الخطوط العريضة للتصميم.'
                  : 'A 45-minute private session to discuss your wedding theme, look through luxury fabric swatches, and begin sketching.'}
              </p>
            </motion.div>

            {/* Step 2 */}
            <motion.div {...fadeUp(0.1)} className="relative ps-8">
              <span className="absolute -start-4 top-0 w-8 h-8 rounded-full bg-[#C6A27A] text-white flex items-center justify-center text-xs font-bold shadow-md">
                02
              </span>
              <h3 className="text-lg font-bold text-[#362e24] mb-2" style={{ fontFamily: isRTL ? 'system-ui, -apple-system, sans-serif' : 'Cormorant Garamond, serif' }}>
                {isRTL ? 'اختيار التصميم' : 'Design Selection'}
              </h3>
              <p className="text-[#8a7b71] text-sm leading-relaxed max-w-xl">
                {isRTL
                  ? 'تحديد قصة الفستان والتطريزات والملحقات الملكية بما يتناغم تماماً مع حضوركِ.'
                  : 'Selecting the perfect silhouette, lace overlays, beads, and custom elements that flatter you beautifully.'}
              </p>
            </motion.div>

            {/* Step 3 */}
            <motion.div {...fadeUp(0.15)} className="relative ps-8">
              <span className="absolute -start-4 top-0 w-8 h-8 rounded-full bg-[#C6A27A] text-white flex items-center justify-center text-xs font-bold shadow-md">
                03
              </span>
              <h3 className="text-lg font-bold text-[#362e24] mb-2" style={{ fontFamily: isRTL ? 'system-ui, -apple-system, sans-serif' : 'Cormorant Garamond, serif' }}>
                {isRTL ? 'أخذ القياسات' : 'Taking Measurements'}
              </h3>
              <p className="text-[#8a7b71] text-sm leading-relaxed max-w-xl">
                {isRTL
                  ? 'فحص وأخذ القياسات بدقة متناهية إما حضورياً في الدار أو بتوجيه خبيرنا أونلاين.'
                  : 'Taking detailed couture measurements either in-person at our boutique or guided via video call by our specialist.'}
              </p>
            </motion.div>

            {/* Step 4 */}
            <motion.div {...fadeUp(0.2)} className="relative ps-8">
              <span className="absolute -start-4 top-0 w-8 h-8 rounded-full bg-[#C6A27A] text-white flex items-center justify-center text-xs font-bold shadow-md">
                04
              </span>
              <h3 className="text-lg font-bold text-[#362e24] mb-2" style={{ fontFamily: isRTL ? 'system-ui, -apple-system, sans-serif' : 'Cormorant Garamond, serif' }}>
                {isRTL ? 'التنفيذ اليدوي' : 'Handcrafted Execution'}
              </h3>
              <p className="text-[#8a7b71] text-sm leading-relaxed max-w-xl">
                {isRTL
                  ? 'يبدأ خياطو الدار حياكة وتطريز فستانكِ يدوياً بكل حب ودقة في ورشتنا الخاصة.'
                  : 'Our dedicated master tailors and embroiderers begin handcrafting and embellishing your gown to perfection.'}
              </p>
            </motion.div>

            {/* Step 5 */}
            <motion.div {...fadeUp(0.25)} className="relative ps-8">
              <span className="absolute -start-4 top-0 w-8 h-8 rounded-full bg-[#C6A27A] text-white flex items-center justify-center text-xs font-bold shadow-md">
                05
              </span>
              <h3 className="text-lg font-bold text-[#362e24] mb-2" style={{ fontFamily: isRTL ? 'system-ui, -apple-system, sans-serif' : 'Cormorant Garamond, serif' }}>
                {isRTL ? 'التسليم النهائي' : 'Final Delivery'}
              </h3>
              <p className="text-[#8a7b71] text-sm leading-relaxed max-w-xl">
                {isRTL
                  ? 'جلسة القياس النهائية والتسليم الفخم، أو شحن فستانكِ بأمان وبعناية فائقة إلى باب منزلكِ.'
                  : 'The final fitting session followed by hand-over, or insured global express shipping directly to your home.'}
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
         5. لماذا يختارنا العملاء (Why Us)
         ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section className="max-w-7xl mx-auto px-8 lg:px-16 py-28">
        <motion.div {...fadeUp(0)} className="text-center mb-20 space-y-4">
          <span className="text-[0.62rem] font-bold tracking-[0.3em] uppercase text-[#C6A27A] block">
            {isRTL ? 'لماذا يختارنا العملاء' : 'WHY CLIENTS CHOOSE US'}
          </span>
          <h2 className="text-3xl md:text-5xl text-[#362e24] font-bold" style={{ fontFamily: isRTL ? 'system-ui, -apple-system, sans-serif' : 'Cormorant Garamond, serif' }}>
            {isRTL ? 'معايير الفخامة والتميز' : 'Standards of Bridal Prestige'}
          </h2>
          <div className="w-12 h-[1px] bg-[#C6A27A] mx-auto" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Card 1 */}
          <motion.div {...fadeUp(0.05)} className="bg-white p-10 rounded-[24px] border border-[#e8dbd1]/50 shadow-sm hover:shadow-lg transition-all duration-300 space-y-4">
            <div className="w-12 h-12 rounded-full bg-[#C6A27A]/10 flex items-center justify-center text-[#C6A27A]">
              <Compass size={22} />
            </div>
            <h3 className="text-xl font-bold text-[#362e24]" style={{ fontFamily: isRTL ? 'system-ui, -apple-system, sans-serif' : 'Cormorant Garamond, serif' }}>
              {isRTL ? 'تصميم مخصص' : 'Bespoke Customization'}
            </h3>
            <p className="text-[#8a7b71] text-sm leading-relaxed">
              {isRTL
                ? 'كل فستان يُصمم بالكامل من الصفر ليعبّر عن شخصية العروس الفريدة ويناسب تفاصيلها بدقة.'
                : 'Every single gown is custom designed from scratch to highlight your personality and frame you beautifully.'}
            </p>
          </motion.div>

          {/* Card 2 */}
          <motion.div {...fadeUp(0.1)} className="bg-white p-10 rounded-[24px] border border-[#e8dbd1]/50 shadow-sm hover:shadow-lg transition-all duration-300 space-y-4">
            <div className="w-12 h-12 rounded-full bg-[#C6A27A]/10 flex items-center justify-center text-[#C6A27A]">
              <Award size={22} />
            </div>
            <h3 className="text-xl font-bold text-[#362e24]" style={{ fontFamily: isRTL ? 'system-ui, -apple-system, sans-serif' : 'Cormorant Garamond, serif' }}>
              {isRTL ? 'خامات فاخرة' : 'Premium Fabrics'}
            </h3>
            <p className="text-[#8a7b71] text-sm leading-relaxed">
              {isRTL
                ? 'ننتقي بعناية أفضل الأقمشة العالمية والتطريزات الفرنسية الفخمة وخيوط الحرير الإيطالي.'
                : 'We strictly source the finest global silks, French laces, and exquisite beadwork for all creations.'}
            </p>
          </motion.div>

          {/* Card 3 */}
          <motion.div {...fadeUp(0.15)} className="bg-white p-10 rounded-[24px] border border-[#e8dbd1]/50 shadow-sm hover:shadow-lg transition-all duration-300 space-y-4">
            <div className="w-12 h-12 rounded-full bg-[#C6A27A]/10 flex items-center justify-center text-[#C6A27A]">
              <ShieldCheck size={22} />
            </div>
            <h3 className="text-xl font-bold text-[#362e24]" style={{ fontFamily: isRTL ? 'system-ui, -apple-system, sans-serif' : 'Cormorant Garamond, serif' }}>
              {isRTL ? 'متابعة شخصية' : 'Personal Atelier Support'}
            </h3>
            <p className="text-[#8a7b71] text-sm leading-relaxed">
              {isRTL
                ? 'يرافقكِ فريق متكامل من مستشاري الموضة والخياطين من أول استشارة وحتى ليلة زفافكِ.'
                : 'A dedicated team of bridal consultants and tailors stays in touch with you right up to your wedding day.'}
            </p>
          </motion.div>
        </div>
      </section>

      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
         7. رسالة المؤسس (Founder's Message)
         ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section className="px-8 lg:px-16 py-32 text-center" style={{ background: 'linear-gradient(to bottom, #ffffff, #f8f5ef)' }}>
        <div className="flex flex-col items-center space-y-12 max-w-5xl mx-auto">
          <motion.div {...fadeUp(0)} className="w-56 h-56 md:w-72 md:h-72 rounded-[40px] overflow-hidden border-[8px] border-white shadow-[0_30px_60px_rgba(0,0,0,0.12)]">
            <img
              src="/images/5.jpg"
              alt="Nilufer Aydin - Founder"
              className="w-full h-full object-cover"
            />
          </motion.div>

          <motion.div {...fadeUp(0.15)} className="max-w-2xl space-y-6">
            <span className="text-[0.62rem] font-bold tracking-[0.25em] uppercase text-[#C6A27A]">
              {isRTL ? 'رسالة المؤسس' : 'FOUNDER\'S MESSAGE'}
            </span>
            <blockquote className="font-serif text-2xl md:text-3xl text-[#362e24] leading-relaxed">
              {isRTL
                ? '"رسالتنا ليست بيع فستان، بل أن تشعر كل عروس أنها ترتدي شيئاً صُنع خصيصاً لها ليخلد أجمل ذكرياتها."'
                : '"Our mission is not to sell a gown, but to ensure that every bride feels she is wearing something handcrafted solely for her to immortalise her beautiful memories."'}
            </blockquote>
            <div className="space-y-1">
              <cite className="not-italic font-bold text-sm text-[#362e24] uppercase tracking-wider block">
                {isRTL ? 'نيلوفر أيدين' : 'Nilufer Aydin'}
              </cite>
              <span className="text-xs text-[#8a7b71]">
                {isRTL ? 'المؤسسة والمديرة الإبداعية' : 'Founder & Creative Director'}
              </span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
         8. FINAL CTA (Dark Luxury Brand Theme)
         ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section className="py-32 bg-[#211712] text-white text-center relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src="/images/203.jpg" alt="Luxury Fabric Background" className="w-full h-full object-cover opacity-30 blur-[8px]" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#100e0c]/90 to-[#211712]/60" />
        </div>
        
        <motion.div {...fadeUp(0)} className="relative z-10 max-w-3xl mx-auto px-8 space-y-8">
          <h2 className="font-serif text-4xl md:text-6xl font-bold leading-tight drop-shadow-lg">
            {isRTL ? 'جاهزة لتصميم فستان أحلامكِ؟' : 'Ready to Design Your Dream Gown?'}
          </h2>
          <p className="text-white/95 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto font-medium drop-shadow-md">
            {isRTL
              ? 'احجزي استشارتك الخاصة اليوم، ودعينا نبدأ رحلة تصميم إطلالة لا تُنسى.'
              : 'Book your private consultation today, and let us embark on the journey of designing an unforgettable look.'}
          </p>
          <div className="pt-6">
            <Link
              to="/book-appointment"
              className="inline-block px-12 py-6 bg-gradient-to-br from-[#C6A27A] to-[#a37e58] text-[#100e0c] rounded-full text-sm font-bold uppercase tracking-widest transition-all duration-400 shadow-[0_10px_40px_rgba(198,162,122,0.3)] hover:-translate-y-1 hover:shadow-[0_15px_50px_rgba(198,162,122,0.4)]"
            >
              {isRTL ? 'احجزي جلستك الخاصة' : 'Book Your Private Session'}
            </Link>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
