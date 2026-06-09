import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Check, Calendar, Sparkles, Phone } from 'lucide-react';

export default function BookAppointment() {
  const { i18n } = useTranslation();
  const currentLang = i18n.language === 'ar' ? 'ar' : 'en';
  const isRTL = currentLang === 'ar';

  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    location: '',
    date: '',
    service: 'in-studio',
    notes: ''
  });
  
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  const services = [
    { id: 'in-studio', en: 'In-Studio Fitting', ar: 'جلسة قياس داخل الدار' },
    { id: 'custom-design', en: 'Custom Bespoke Design', ar: 'تصميم وتفصيل حسب الطلب' },
    { id: 'remote-measurement', en: 'Remote Measurement Service', ar: 'خدمة القياسات عن بُعد' },
    { id: 'private-consultation', en: 'Private Consultation', ar: 'استشارة خاصة' }
  ];

  return (
    <div className="min-h-screen bg-[#F7F4EF] text-[#2b1b12] pt-28 selection:bg-amber-100/60 selection:text-ink">
      
      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
         1. CINEMATIC HERO SECTION
         ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section className="relative h-[65vh] flex items-center justify-center overflow-hidden">
        {/* Luxury Background Image */}
        <div className="absolute inset-0">
          <img
            src="https://images.pexels.com/photos/1043902/pexels-photo-1043902.jpeg?auto=compress&cs=tinysrgb&w=1920"
            alt="Glamour Atelier Showroom"
            className="w-full h-full object-cover object-center scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#211712]/85 via-[#211712]/60 to-[#F7F4EF]" />
        </div>

        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto space-y-6">
          <motion.span 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-[0.62rem] font-bold uppercase tracking-[0.35em] text-[#c49a78] block"
          >
            {isRTL ? '✦ تجربة خاصة مصممة من أجلك ✦' : '✦ A PRIVATE EXPERIENCE CUSTOM MADE FOR YOU ✦'}
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.0, delay: 0.1 }}
            className="font-serif text-4xl md:text-6xl text-white font-light tracking-wide leading-tight"
          >
            {isRTL ? 'احجزي جلسة القياس الحصرية' : 'Book Your Exclusive Fitting'}
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2, delay: 0.2 }}
            className="text-white/80 font-sans font-light text-sm md:text-base max-w-2xl mx-auto leading-relaxed"
          >
            {isRTL 
              ? 'استمتعي باستشارة شخصية مع خبراء الأزياء لدينا في أجواء راقية وخاصة، حيث نساعدك على اختيار التصميم المثالي وتخصيص أدق التفاصيل بما يتناسب مع ذوقك وأحلامك.'
              : 'Enjoy a personal consultation with our fashion experts in a luxurious private environment, where we help you select the perfect design and customize every detail to match your dreams.'}
          </motion.p>
        </div>
      </section>

      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
         2. SPLIT LAYOUT: FORM & PROCESS
         ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section className="max-w-[1400px] mx-auto px-6 lg:px-12 -mt-16 pb-24 relative z-20">
        <div className="flex flex-col lg:flex-row bg-white rounded-[32px] overflow-hidden shadow-xl border border-[#e8dbd1]/60">
          
          {/* Left / Top Side: Interactive Booking Form */}
          <div className="lg:w-[55%] p-8 md:p-14 lg:p-16 bg-white">
            <AnimatePresence mode="wait">
              {!isSubmitted ? (
                <motion.div
                  key="booking-form"
                  initial={{ opacity: 0, x: isRTL ? 30 : -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.6 }}
                >
                  <div className="mb-10">
                    <span className="text-[0.6rem] font-bold uppercase tracking-[0.25em] text-[#c49a78] block mb-2">
                      {isRTL ? 'استمارة الحجز الفاخرة' : 'HAUTE COUTURE APPOINTMENT'}
                    </span>
                    <h2 className="font-serif text-3xl md:text-4xl text-[#2b1b12] font-light">
                      {isRTL ? 'تفاصيل الموعد الملكي' : 'Royal Appointment Details'}
                    </h2>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      {/* Full Name */}
                      <div className="relative">
                        <input
                          type="text"
                          id="fullName"
                          required
                          value={formData.fullName}
                          onChange={(e) => setFormData({...formData, fullName: e.target.value})}
                          className="input-underline peer w-full"
                          placeholder=" "
                        />
                        <label htmlFor="fullName" className="input-label">
                          {isRTL ? 'الاسم الكامل' : 'Full Name'}
                        </label>
                      </div>

                      {/* Email */}
                      <div className="relative">
                        <input
                          type="email"
                          id="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({...formData, email: e.target.value})}
                          className="input-underline peer w-full"
                          placeholder=" "
                        />
                        <label htmlFor="email" className="input-label">
                          {isRTL ? 'البريد الإلكتروني' : 'Email Address'}
                        </label>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      {/* Phone */}
                      <div className="relative">
                        <input
                          type="tel"
                          id="phone"
                          required
                          value={formData.phone}
                          onChange={(e) => setFormData({...formData, phone: e.target.value})}
                          className="input-underline peer w-full"
                          placeholder=" "
                        />
                        <label htmlFor="phone" className="input-label">
                          {isRTL ? 'رقم الهاتف' : 'Phone Number'}
                        </label>
                      </div>

                      {/* Location */}
                      <div className="relative">
                        <input
                          type="text"
                          id="location"
                          required
                          value={formData.location}
                          onChange={(e) => setFormData({...formData, location: e.target.value})}
                          className="input-underline peer w-full"
                          placeholder=" "
                        />
                        <label htmlFor="location" className="input-label">
                          {isRTL ? 'الدولة / المدينة' : 'Country / City'}
                        </label>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      {/* Date */}
                      <div className="relative">
                        <input
                          type="date"
                          id="date"
                          required
                          value={formData.date}
                          onChange={(e) => setFormData({...formData, date: e.target.value})}
                          className="input-underline peer w-full"
                          placeholder=" "
                        />
                        <label htmlFor="date" className="input-label">
                          {isRTL ? 'تاريخ المناسبة' : 'Event Date'}
                        </label>
                      </div>

                      {/* Service Type */}
                      <div className="relative">
                        <select
                          id="service"
                          required
                          value={formData.service}
                          onChange={(e) => setFormData({...formData, service: e.target.value})}
                          className="input-underline peer w-full bg-transparent appearance-none"
                        >
                          {services.map(srv => (
                            <option key={srv.id} value={srv.id} className="text-[#2b1b12]">
                              {isRTL ? srv.ar : srv.en}
                            </option>
                          ))}
                        </select>
                        <label htmlFor="service" className="input-label">
                          {isRTL ? 'نوع الخدمة المطلوبة' : 'Requested Service'}
                        </label>
                      </div>
                    </div>

                    {/* Notes */}
                    <div className="relative">
                      <textarea
                        id="notes"
                        rows={3}
                        value={formData.notes}
                        onChange={(e) => setFormData({...formData, notes: e.target.value})}
                        className="input-underline peer w-full resize-none"
                        placeholder=" "
                      />
                      <label htmlFor="notes" className="input-label">
                        {isRTL ? 'تفاصيل إضافية / ملاحظات خاصة' : 'Additional Details / Special Requests'}
                      </label>
                    </div>

                    <button
                      type="submit"
                      className="btn-brand w-full py-4.5 text-[0.7rem] tracking-[0.22em] uppercase font-bold rounded-full transition-all duration-300 flex items-center justify-center gap-3 hover:scale-[1.01]"
                    >
                      <Calendar size={14} />
                      <span>{isRTL ? 'احجزي استشارتك المجانية الآن ✦' : 'Book Your Free Consultation Now ✦'}</span>
                    </button>
                  </form>
                </motion.div>
              ) : (
                <motion.div
                  key="success-booking"
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center text-center py-20"
                >
                  <div className="w-20 h-20 bg-brand-50 rounded-full flex items-center justify-center mb-6 border border-brand/20">
                    <Check size={36} className="text-brand" />
                  </div>
                  <h3 className="font-serif text-3xl mb-4 text-[#2b1b12]">
                    {isRTL ? 'طلبك قيد المراجعة الملكية' : 'Your Request is Under Review'}
                  </h3>
                  <p className="text-[#8a7b71] leading-relaxed mb-8 max-w-md font-sans font-light">
                    {isRTL 
                      ? 'شكراً لكِ. لقد تلقينا طلب الحجز الخاص بكِ بنجاح. سيتواصل معكِ خبير الأزياء الشخصي لدينا خلال 24 ساعة لتأكيد التفاصيل.'
                      : 'Thank you. We have received your booking request. Our styling consultant will contact you within 24 hours to confirm your private session.'}
                  </p>
                  <button
                    onClick={() => {
                      setIsSubmitted(false);
                      setFormData({ fullName: '', email: '', phone: '', location: '', date: '', service: 'in-studio', notes: '' });
                    }}
                    className="btn-secondary"
                  >
                    {isRTL ? 'تقديم طلب حجز جديد' : 'Submit Another Request'}
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Right / Bottom Side: Narrative Details & Steps */}
          <div className="lg:w-[45%] bg-[#211712] p-8 md:p-14 lg:p-16 text-white flex flex-col justify-between relative">
            {/* Background Texture Overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-black/60 pointer-events-none" />
            
            <div className="relative z-10 space-y-10">
              <div>
                <span className="text-[0.6rem] font-bold uppercase tracking-[0.25em] text-[#c49a78] block mb-2">
                  {isRTL ? 'ما الذي ينتظركِ؟' : 'WHAT AWAITS YOU?'}
                </span>
                <h3 className="font-serif text-2xl lg:text-3xl text-white font-light">
                  {isRTL ? 'رحلتكِ الاستثنائية نحو الفستان المثالي' : 'Your Journey to the Perfect Gown'}
                </h3>
              </div>

              {/* Journey Steps */}
              <div className="space-y-8">
                {[
                  {
                    step: '01',
                    title: isRTL ? 'الخطوة الأولى: جلسة تعارف' : 'Step 1: Introduction Session',
                    desc: isRTL ? 'جلسة تعارف لفهم رؤيتك وأسلوبك وتفاصيل المناسبة.' : 'Understanding your vision, style preferences, and event details.'
                  },
                  {
                    step: '02',
                    title: isRTL ? 'الخطوة الثانية: استعراض التصاميم' : 'Step 2: Gown Curation',
                    desc: isRTL ? 'استعراض التصاميم والمجموعات المناسبة لشخصيتك وذوقك الخاص.' : 'Exploring collections and designs aligned with your personality.'
                  },
                  {
                    step: '03',
                    title: isRTL ? 'الخطوة الثالثة: القياس الأولي' : 'Step 3: Fitting & Draping',
                    desc: isRTL ? 'جلسة قياس احترافية وتجربة أولية للتصميم المختار.' : 'A professional measurement session and initial fitting layout.'
                  },
                  {
                    step: '04',
                    title: isRTL ? 'الخطوة الرابعة: الصنع اليدوي' : 'Step 4: Master Handcraft',
                    desc: isRTL ? 'اعتماد التعديلات النهائية والبدء بتنفيذ الفستان يدوياً بأعلى معايير الجودة.' : 'Finalizing custom updates and beginning handcrafting your gown.'
                  }
                ].map((item, index) => (
                  <div key={index} className="flex gap-4 items-start">
                    <span className="font-serif text-lg text-[#c49a78] font-semibold tracking-wide border-r border-[#c49a78]/30 pr-3">
                      {item.step}
                    </span>
                    <div className="space-y-1">
                      <h4 className="font-serif text-base text-white font-medium">{item.title}</h4>
                      <p className="text-white/60 text-xs font-sans font-light leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick trust metrics */}
            <div className="relative z-10 pt-10 border-t border-white/10 mt-12 grid grid-cols-2 gap-4">
              <div className="flex items-center gap-2">
                <Check size={12} className="text-[#c49a78]" />
                <span className="text-[0.68rem] text-white/70 font-light">{isRTL ? 'استشارة خاصة حصرية' : 'Exclusive Consultations'}</span>
              </div>
              <div className="flex items-center gap-2">
                <Check size={12} className="text-[#c49a78]" />
                <span className="text-[0.68rem] text-white/70 font-light">{isRTL ? 'خامات فاخرة فرنسية' : 'Fine French Fabrics'}</span>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
         3. REMOTE MEASUREMENTS SECTION (TIMELINE & GUIDANCE)
         ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section className="bg-[#FAF7F4] py-24 border-y border-[#e8dbd1]/50">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          
          <div className="max-w-3xl mx-auto text-center mb-16 space-y-4">
            <span className="text-[0.62rem] font-bold uppercase tracking-[0.3em] text-[#c49a78] block">
              {isRTL ? '✦ أينما كنتِ... نصمم فستان أحلامكِ ✦' : '✦ WHEREVER YOU ARE... WE DESIGN YOUR DREAM ✦'}
            </span>
            <h2 className="font-serif text-3xl md:text-5xl text-[#2b1b12] font-light">
              {isRTL ? 'خدمة القياسات والطلب عن بُعد' : 'Remote Couture Fitting & Ordering'}
            </h2>
            <p className="text-[#8a7b71] font-sans font-light text-sm md:text-base leading-relaxed">
              {isRTL 
                ? 'إذا كنتِ خارج إسطنبول أو لا تستطيعين زيارة الدار شخصياً، نوفر لك خدمة القياسات عن بُعد بإشراف فريقنا المختص لضمان الحصول على مقاسات دقيقة وتجربة مريحة وآمنة.'
                : 'If you reside outside Istanbul or cannot visit the atelier in person, we offer a dedicated remote measurement service to ensure an impeccable fit and a seamless couture experience.'}
            </p>
          </div>

          {/* Visual Timeline Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-6 mb-16">
            {[
              {
                num: '1',
                title: isRTL ? 'حجز الاستشارة' : 'Book Consultation',
                desc: isRTL ? 'يتواصل معك أحد مستشارينا لتحديد ملامح التصميم.' : 'A stylist contacts you to discuss design blueprints.'
              },
              {
                num: '2',
                title: isRTL ? 'دليل القياسات' : 'Measurement Guide',
                desc: isRTL ? 'تحصلين على دليل توضيحي وفيديوهات تفصيلية.' : 'Receive an illustrated guide with step-by-step videos.'
              },
              {
                num: '3',
                title: isRTL ? 'إرسال المقاسات' : 'Submit Measures',
                desc: isRTL ? 'إرسال المقاسات بمساعدة شخص قريب أو خياط محلي.' : 'Send measures taken with a helper or local tailor.'
              },
              {
                num: '4',
                title: isRTL ? 'المراجعة الفنية' : 'Technical Review',
                desc: isRTL ? 'مراجعة دقة الأبعاد واعتمادها من قبل كبار الخياطين.' : 'Our master tailors cross-check and verify dimensions.'
              },
              {
                num: '5',
                title: isRTL ? 'تنفيذ الفستان' : 'Couture Crafting',
                desc: isRTL ? 'البدء بتفصيل الفستان وتطريزه يدوياً بالكامل.' : 'Starting the handcrafting and custom sewing phase.'
              },
              {
                num: '6',
                title: isRTL ? 'الشحن العالمي' : 'Global Delivery',
                desc: isRTL ? 'تغليف فاخر وشحن دولي مؤمن لباب منزلكِ.' : 'Luxury packing and insured worldwide courier shipment.'
              }
            ].map((step, idx) => (
              <div key={idx} className="bg-white p-6 rounded-[24px] border border-[#e8dbd1]/40 shadow-soft flex flex-col justify-between">
                <span className="font-serif text-3xl text-[#c49a78]/40 font-semibold block mb-4">
                  {step.num}
                </span>
                <div className="space-y-2">
                  <h4 className="font-serif text-sm font-semibold text-[#2b1b12]">{step.title}</h4>
                  <p className="text-[#8a7b71] text-xs font-sans font-light leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Quick list specs for remote order */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* What you need */}
            <div className="bg-[#FAF7F4] p-8 rounded-[24px] border border-[#e8dbd1]/50 space-y-4">
              <h4 className="font-serif text-lg font-semibold text-[#2b1b12]">{isRTL ? '✓ ماذا ستحتاجين؟' : '✓ What You Will Need'}</h4>
              <ul className="space-y-2 text-xs text-[#8a7b71] font-sans font-light">
                <li>• {isRTL ? 'شريط قياس مرن مناسب' : 'A flexible measuring tape'}</li>
                <li>• {isRTL ? 'صديقة أو شخص للمساعدة' : 'A friend or helper to take measures'}</li>
                <li>• {isRTL ? 'صور أمامية وجانبية للمراجعة' : 'Front and side photos (optional for fit check)'}</li>
                <li>• {isRTL ? 'تعبئة النموذج الخاص بنجاح' : 'Filling our digital couture spec sheet'}</li>
              </ul>
            </div>

            {/* Our Precision Guarantee */}
            <div className="bg-[#FAF7F4] p-8 rounded-[24px] border border-[#e8dbd1]/50 space-y-4">
              <h4 className="font-serif text-lg font-semibold text-[#2b1b12]">{isRTL ? '✦ ضمان الدقة والأمان' : '✦ Absolute Fit Guarantee'}</h4>
              <p className="text-xs text-[#8a7b71] font-sans font-light leading-relaxed">
                {isRTL 
                  ? 'نقوم بمراجعة قياساتكِ فنيّاً وتجربتها على تمثال قياس (Mannequin) يطابق تفاصيل قوامك تماماً قبل قص الأقمشة الفاخرة لضمان الانسيابية والدقة المطلقة.'
                  : 'We match your exact measurements on a custom mannequin representation before cutting our precious silks, ensuring absolute flow, precision, and confidence.'}
              </p>
            </div>

            {/* Global services summary */}
            <div className="bg-[#FAF7F4] p-8 rounded-[24px] border border-[#e8dbd1]/50 space-y-4">
              <h4 className="font-serif text-lg font-semibold text-[#2b1b12]">{isRTL ? '✈ خدماتنا الدولية' : '✈ International Services'}</h4>
              <ul className="space-y-2 text-xs text-[#8a7b71] font-sans font-light">
                <li>• {isRTL ? 'شحن عالمي مؤمن بالكامل' : 'Fully insured express courier delivery'}</li>
                <li>• {isRTL ? 'مكالمات فيديو مباشرة مع المصممين' : 'Live video calls with our master drapers'}</li>
                <li>• {isRTL ? 'دعم كامل باللغتين العربية والإنجليزية' : 'Bilingual support in Arabic and English'}</li>
                <li>• {isRTL ? 'أكثر من 20 دولة قمنا بالشحن لها' : 'Proudly served brides across 20+ countries'}</li>
              </ul>
            </div>
          </div>

        </div>
      </section>

      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
         4. TRUST STATS & METRICS
         ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 text-center space-y-12">
          <div className="max-w-2xl mx-auto space-y-4">
            <span className="text-[0.62rem] font-bold uppercase tracking-[0.25em] text-[#c49a78] block">
              {isRTL ? 'إرث من التميز الفني' : 'A LEGACY OF EXCELLENCE'}
            </span>
            <h2 className="font-serif text-3xl md:text-4xl text-[#2b1b12] font-light">
              {isRTL ? 'أكثر من 500 عروس اختارت تصاميمنا' : 'Over 500 Brides Have Chosen Us'}
            </h2>
            <p className="text-[#8a7b71] font-sans font-light text-sm leading-relaxed">
              {isRTL 
                ? 'نفخر بتحويل الأحلام إلى إطلالات استثنائية من خلال حرفية راقية وتجربة شخصية مصممة خصيصاً لكل عروس.'
                : 'We take pride in turning dream silhouettes into legacy designs, marked by exquisite handcraft and premium personalized care.'}
            </p>
          </div>

          {/* Metrics Grid */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto pt-6">
            {[
              { val: '500+', label: isRTL ? 'عروس تألقت بفخر' : 'Brides Handled' },
              { val: '15+', label: isRTL ? 'عاماً من الخبرة والريادة' : 'Years of Experience' },
              { val: '100%', label: isRTL ? 'تصميم مخصص بالكامل' : 'Bespoke Customization' },
              { val: '400+', label: isRTL ? 'ساعة عمل يدوي لكل قطعة' : 'Handmade Hours per Gown' }
            ].map((stat, idx) => (
              <div key={idx} className="space-y-2 p-6 rounded-2xl bg-[#FAF7F4] border border-[#e8dbd1]/30">
                <span className="font-serif text-3xl md:text-4xl text-[#c49a78] font-bold block">{stat.val}</span>
                <span className="text-xs text-[#2b1b12] font-semibold tracking-wider block">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
         5. PERSUASIVE SCARCITY BANNER & FINAL CTA
         ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section className="relative py-28 bg-[#211712] overflow-hidden text-center text-white">
        <div className="absolute inset-0 opacity-20">
          <img
            src="https://images.pexels.com/photos/2959192/pexels-photo-2959192.jpeg?auto=compress&cs=tinysrgb&w=1920"
            alt="Handcrafting luxury gown detail"
            className="w-full h-full object-cover object-center"
          />
        </div>
        <div className="absolute inset-0 bg-[#211712]/90" />
        
        <div className="relative z-10 max-w-3xl mx-auto px-6 space-y-8">
          <div className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-full border border-[#c49a78]/30 bg-white/5 backdrop-blur-md">
            <Sparkles size={12} className="text-[#c49a78]" />
            <span className="text-[0.6rem] font-bold uppercase tracking-[0.25em] text-[#c49a78]">
              {isRTL ? 'مواعيد محدودة للموسم الحالي' : 'LIMITED SEASONAL AVAILABILITY'}
            </span>
          </div>

          <h2 className="font-serif text-3xl md:text-5xl font-light leading-snug">
            {isRTL 
              ? 'لستِ بحاجة إلى السفر للحصول على فستان أحلامكِ' 
              : 'You Don\'t Need to Travel for Your Dream Dress'}
          </h2>
          
          <p className="text-white/60 text-sm md:text-base font-sans font-light leading-relaxed max-w-xl mx-auto">
            {isRTL 
              ? 'فريقنا سيرافقكِ في كل خطوة، من اختيار التصميم وحتى استلام الفستان جاهزاً، أينما كنتِ حول العالم. ابدئي رحلتكِ اليوم واحصلي على تجربة تصميم راقية ومخصصة بالكامل لكِ.'
              : 'Our design house will accompany you every single step of the way, from blueprint drafting to package delivery, worldwide. Begin your bridal journey today.'}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
            <button
              onClick={() => {
                const el = document.getElementById('fullName');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }}
              className="btn-brand px-10 py-4.5 rounded-full text-[0.7rem] uppercase tracking-wider font-bold shadow-lg"
            >
              {isRTL ? 'احجزي موعدكِ الآن' : 'Book Your Session Now'}
            </button>
            <a
              href="https://wa.me/905510069156"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-10 py-4.5 rounded-full border border-white/20 hover:border-white/40 hover:bg-white/5 text-[0.7rem] uppercase tracking-wider font-bold transition-all text-white"
            >
              <Phone size={12} />
              <span>{isRTL ? 'تواصل عبر واتساب' : 'WhatsApp Consultation'}</span>
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}
