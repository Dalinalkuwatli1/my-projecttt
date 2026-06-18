import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, Check, MessageCircle, ChevronRight } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const GOLD = '#C6A27A';
const DARK = '#2b1b12';

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 32 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.75, delay, ease: [0.22, 1, 0.36, 1] },
});

const slideIn = (delay = 0) => ({
  initial: { opacity: 0, x: -40 },
  animate: { opacity: 1, x: 0 },
  transition: { duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] },
});

export default function Contact() {
  const { i18n } = useTranslation();
  const isRTL = i18n.language === 'ar';

  const [form, setForm] = useState({ name: '', email: '', phone: '', subject: '', message: '' });
  const [sent, setSent] = useState(false);
  const [focused, setFocused] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  const inputStyle = (field: string) => ({
    width: '100%',
    height: field === 'message' ? 'auto' : 64,
    padding: field === 'message' ? '20px 20px' : '0 20px',
    border: `1.5px solid ${focused === field ? '#B8925A' : '#E5DED5'}`,
    borderRadius: 14,
    background: '#FAF8F5',
    fontSize: '0.9rem',
    color: DARK,
    outline: 'none',
    fontFamily: 'Manrope, sans-serif',
    transition: 'all 0.3s ease',
    boxShadow: focused === field ? '0 0 0 4px rgba(184,146,90,0.15)' : 'none',
    resize: field === 'message' ? 'none' as const : undefined,
  });

  const contactItems = [
    {
      icon: MapPin,
      labelAr: 'عنوان الأتيليه',
      labelEn: 'Atelier Address',
      valueAr: 'عثمان بيه، تشويقية، شيشلي\nإسطنبول، تركيا',
      valueEn: 'Osmanbe, Teşvikiye, Şişli\nIstanbul, Turkey',
    },
    {
      icon: Phone,
      labelAr: 'الهاتف',
      labelEn: 'Phone',
      valueAr: '+90 551 006 9156',
      valueEn: '+90 551 006 9156',
    },
    {
      icon: MessageCircle,
      labelAr: 'واتساب',
      labelEn: 'WhatsApp',
      valueAr: '+90 551 006 9156',
      valueEn: '+90 551 006 9156',
    },
    {
      icon: Mail,
      labelAr: 'البريد الإلكتروني',
      labelEn: 'Email',
      valueAr: '555glamourgruop@gmail.com',
      valueEn: '555glamourgruop@gmail.com',
    },
    {
      icon: Clock,
      labelAr: 'ساعات العمل',
      labelEn: 'Working Hours',
      valueAr: 'الاثنين – السبت: 10ص – 7م',
      valueEn: 'Mon – Sat: 10 AM – 7 PM',
    },
  ];

  return (
    <div style={{ background: '#FEFCF9', minHeight: '100vh', fontFamily: 'Manrope, sans-serif' }}>

      {/* ━━ HERO — Full-bleed editorial image ━━ */}
      <section className="relative w-full overflow-hidden" style={{ height: '90vh', minHeight: '750px' }}>

        {/* Full-bleed background image — the star of the show */}
        <motion.div
          className="absolute inset-0 z-0"
          initial={{ scale: 1.06, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <img
            src="https://images.pexels.com/photos/2253879/pexels-photo-2253879.jpeg?auto=compress&cs=tinysrgb&w=1600"
            alt="Glamour Couture Atelier Couple"
            className="w-full h-full object-cover object-center"
          />
        </motion.div>

        {/* Thin gradient only at bottom for text legibility — image stays mostly clear */}
        <div className="absolute inset-0 z-10 bg-gradient-to-t from-[#0a0806]/80 via-[#0a0806]/20 to-transparent" />
        <div className="absolute inset-0 z-10 bg-gradient-to-r from-[#0a0806]/50 via-transparent to-transparent" />

        {/* Text content — bottom-left, editorial style */}
        <div className="absolute inset-0 z-20 flex flex-col justify-end pb-16 md:pb-24 px-8 md:px-20 lg:px-28">
          <motion.span
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="block text-[0.65rem] font-bold uppercase tracking-[0.45em] mb-4"
            style={{ color: GOLD }}
          >
            {isRTL ? '✦ نحن هنا من أجلكِ ✦' : '✦ We Are Here For You ✦'}
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.55, ease: [0.22, 1, 0.36, 1] }}
            className="text-white font-bold mb-4"
            style={{
              fontFamily: isRTL ? "'Noto Naskh Arabic', 'Cairo', serif" : "'Cormorant Garamond', serif",
              fontSize: 'clamp(3.2rem, 7vw, 6.5rem)',
              lineHeight: 1.05,
              letterSpacing: '0.02em',
              maxWidth: '700px',
            }}
          >
            {isRTL ? 'للتواصل معنا' : 'Contact Us'}
          </motion.h1>

          {/* Gold rule */}
          <motion.div
            initial={{ scaleX: 0 }} animate={{ scaleX: 1 }}
            transition={{ duration: 1.2, delay: 0.75, ease: [0.22, 1, 0.36, 1] }}
            style={{ width: 72, height: 1, background: GOLD, transformOrigin: isRTL ? 'right' : 'left', marginBottom: 20 }}
          />

          <motion.p
            initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="text-white/75 leading-relaxed"
            style={{ fontSize: '1rem', fontWeight: 300, maxWidth: '500px' }}
          >
            {isRTL
              ? 'يسعدنا مساعدتكِ في إيجاد فستان أحلامكِ. أرسلي استفسارك وسيتواصل معكِ فريقنا خلال 24 ساعة.'
              : 'We would be delighted to help you find the perfect dress. Our team will respond within 24 hours.'}
          </motion.p>
        </div>
      </section>

      {/* ━━ MAIN CONTENT ━━ */}
      <section style={{ padding: '100px 0', background: '#FEFCF9' }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-16">

            {/* Contact Information Card */}
            <motion.div {...slideIn(0.1)} className="lg:col-span-2">
              <div
                className="h-full"
                style={{
                  background: '#FFFFFF',
                  borderRadius: 30,
                  padding: 50,
                  boxShadow: '0 20px 60px rgba(0,0,0,0.07)',
                  border: '1px solid rgba(198,162,122,0.15)',
                }}
              >
                <motion.div {...fadeUp(0.15)}>
                  <span className="block text-[0.62rem] font-bold uppercase tracking-[0.32em] mb-4" style={{ color: GOLD }}>
                    {isRTL ? 'معلومات التواصل' : 'Contact Information'}
                  </span>
                  <h2 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '2rem', color: DARK, fontWeight: 400, marginBottom: 40 }}>
                    {isRTL ? 'تواصلي معنا' : 'Get In Touch'}
                  </h2>
                </motion.div>

                <div className="space-y-8">
                  {contactItems.map((item, i) => {
                    const Icon = item.icon;
                    return (
                      <motion.div
                        key={i}
                        {...fadeUp(0.2 + i * 0.08)}
                        className="flex gap-5"
                        style={{ paddingBottom: i < contactItems.length - 1 ? 32 : 0, borderBottom: i < contactItems.length - 1 ? '1px solid #F0EAE0' : 'none' }}
                      >
                        <div
                          className="shrink-0 flex items-center justify-center"
                          style={{ width: 48, height: 48, borderRadius: '50%', background: 'rgba(198,162,122,0.1)', border: '1px solid rgba(198,162,122,0.25)' }}
                        >
                          <Icon size={20} style={{ color: GOLD }} />
                        </div>
                        <div>
                          <p className="text-[0.65rem] font-bold uppercase tracking-[0.18em] mb-2" style={{ color: GOLD }}>
                            {isRTL ? item.labelAr : item.labelEn}
                          </p>
                          <p className="text-sm leading-relaxed whitespace-pre-line" style={{ color: '#7a6b5e', fontWeight: 500 }}>
                            {isRTL ? item.valueAr : item.valueEn}
                          </p>
                        </div>
                      </motion.div>
                    );
                  })}
                </div>

                {/* WhatsApp button */}
                <motion.a
                  href="https://wa.me/905510069156"
                  target="_blank"
                  rel="noopener noreferrer"
                  {...fadeUp(0.7)}
                  className="mt-10 w-full flex items-center justify-center gap-3"
                  style={{
                    background: 'linear-gradient(135deg, #25D366, #128C7E)',
                    color: 'white',
                    borderRadius: 999,
                    padding: '16px 32px',
                    fontSize: '0.78rem',
                    fontWeight: 700,
                    letterSpacing: '0.08em',
                    textDecoration: 'none',
                    boxShadow: '0 8px 28px rgba(37,211,102,0.3)',
                    transition: 'all 0.3s ease',
                  }}
                  onMouseEnter={e => { (e.currentTarget as HTMLElement).style.transform = 'translateY(-3px)'; (e.currentTarget as HTMLElement).style.boxShadow = '0 14px 36px rgba(37,211,102,0.4)'; }}
                  onMouseLeave={e => { (e.currentTarget as HTMLElement).style.transform = ''; (e.currentTarget as HTMLElement).style.boxShadow = '0 8px 28px rgba(37,211,102,0.3)'; }}
                >
                  <MessageCircle size={18} />
                  {isRTL ? 'تواصلي عبر واتساب' : 'Book via WhatsApp'}
                </motion.a>
              </div>
            </motion.div>

            {/* Contact Form Card */}
            <motion.div {...fadeUp(0.2)} className="lg:col-span-3">
              <div
                style={{
                  background: '#FFFFFF',
                  borderRadius: 30,
                  padding: '60px',
                  boxShadow: '0 20px 60px rgba(0,0,0,0.07)',
                  border: '1px solid rgba(198,162,122,0.15)',
                }}
              >
                <AnimatePresence mode="wait">
                  {!sent ? (
                    <motion.form
                      key="contact-form"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0, y: -20 }}
                      onSubmit={handleSubmit}
                    >
                      <span className="block text-[0.62rem] font-bold uppercase tracking-[0.32em] mb-4" style={{ color: GOLD }}>
                        {isRTL ? 'أرسلي رسالتكِ' : 'Send Your Inquiry'}
                      </span>
                      <h2 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '2rem', color: DARK, fontWeight: 400, marginBottom: 40 }}>
                        {isRTL ? 'ابدئي محادثتكِ معنا' : 'Start the Conversation'}
                      </h2>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                        <div>
                          <label className="block text-[0.65rem] font-bold uppercase tracking-[0.16em] mb-3" style={{ color: '#9a8a7a' }}>
                            {isRTL ? 'الاسم الكامل *' : 'Full Name *'}
                          </label>
                          <input
                            type="text" required value={form.name}
                            onChange={e => setForm({ ...form, name: e.target.value })}
                            onFocus={() => setFocused('name')} onBlur={() => setFocused(null)}
                            placeholder={isRTL ? 'اسمكِ الكامل...' : 'Your full name...'}
                            style={inputStyle('name')}
                          />
                        </div>
                        <div>
                          <label className="block text-[0.65rem] font-bold uppercase tracking-[0.16em] mb-3" style={{ color: '#9a8a7a' }}>
                            {isRTL ? 'البريد الإلكتروني *' : 'Email Address *'}
                          </label>
                          <input
                            type="email" required value={form.email}
                            onChange={e => setForm({ ...form, email: e.target.value })}
                            onFocus={() => setFocused('email')} onBlur={() => setFocused(null)}
                            placeholder="email@example.com"
                            style={inputStyle('email')}
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                        <div>
                          <label className="block text-[0.65rem] font-bold uppercase tracking-[0.16em] mb-3" style={{ color: '#9a8a7a' }}>
                            {isRTL ? 'رقم الهاتف / واتساب' : 'Phone / WhatsApp'}
                          </label>
                          <input
                            type="tel" value={form.phone}
                            onChange={e => setForm({ ...form, phone: e.target.value })}
                            onFocus={() => setFocused('phone')} onBlur={() => setFocused(null)}
                            placeholder={isRTL ? '+966 5xx xxx xxxx' : '+1 (555) 000-0000'}
                            style={inputStyle('phone')}
                          />
                        </div>
                        <div>
                          <label className="block text-[0.65rem] font-bold uppercase tracking-[0.16em] mb-3" style={{ color: '#9a8a7a' }}>
                            {isRTL ? 'الموضوع *' : 'Subject *'}
                          </label>
                          <input
                            type="text" required value={form.subject}
                            onChange={e => setForm({ ...form, subject: e.target.value })}
                            onFocus={() => setFocused('subject')} onBlur={() => setFocused(null)}
                            placeholder={isRTL ? 'استفسار عن فستان زفاف...' : 'Bridal gown inquiry...'}
                            style={inputStyle('subject')}
                          />
                        </div>
                      </div>

                      <div className="mb-8">
                        <label className="block text-[0.65rem] font-bold uppercase tracking-[0.16em] mb-3" style={{ color: '#9a8a7a' }}>
                          {isRTL ? 'رسالتكِ *' : 'Your Message *'}
                        </label>
                        <textarea
                          required rows={6} value={form.message}
                          onChange={e => setForm({ ...form, message: e.target.value })}
                          onFocus={() => setFocused('message')} onBlur={() => setFocused(null)}
                          placeholder={isRTL ? 'أخبرينا عن فستان أحلامكِ وتاريخ زفافكِ...' : 'Tell us about your dream gown and wedding date...'}
                          style={inputStyle('message')}
                        />
                      </div>

                      <motion.button
                        type="submit"
                        whileHover={{ y: -2, boxShadow: '0 15px 40px rgba(143,106,66,0.35)' }}
                        whileTap={{ scale: 0.98 }}
                        className="w-full flex items-center justify-center gap-3"
                        style={{
                          height: 64,
                          borderRadius: 999,
                          background: `linear-gradient(135deg, ${DARK}, #8F6A42)`,
                          color: 'white',
                          fontSize: '0.82rem',
                          fontWeight: 700,
                          letterSpacing: '0.12em',
                          textTransform: 'uppercase',
                          border: 'none',
                          cursor: 'pointer',
                          transition: 'all 0.3s ease',
                        }}
                      >
                        {isRTL ? 'إرسال الرسالة ✦' : 'Send Your Inquiry ✦'}
                        <ChevronRight size={16} />
                      </motion.button>

                      {/* WhatsApp below form */}
                      <div className="mt-8 text-center">
                        <p className="text-sm mb-4" style={{ color: '#9a8a7a', fontWeight: 500 }}>
                          {isRTL ? 'هل تحتاجين مساعدة فورية؟' : 'Need immediate assistance?'}
                        </p>
                        <p className="text-xs mb-4" style={{ color: '#b5a899' }}>
                          {isRTL ? 'تحدثي مع مستشارة العرائس عبر واتساب' : 'Chat with our bridal consultant on WhatsApp'}
                        </p>
                      </div>
                    </motion.form>
                  ) : (
                    <motion.div
                      key="contact-success"
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="text-center py-20"
                    >
                      <motion.div
                        initial={{ scale: 0 }} animate={{ scale: 1 }}
                        transition={{ type: 'spring', stiffness: 200, delay: 0.2 }}
                        className="w-24 h-24 mx-auto rounded-full flex items-center justify-center mb-10"
                        style={{ background: 'rgba(198,162,122,0.12)', border: '2px solid rgba(198,162,122,0.3)' }}
                      >
                        <Check size={44} style={{ color: GOLD }} />
                      </motion.div>
                      <motion.h3 {...fadeUp(0.3)} style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '2.4rem', color: DARK, fontWeight: 400, marginBottom: 16 }}>
                        {isRTL ? 'تم إرسال رسالتك!' : 'Message Sent!'}
                      </motion.h3>
                      <motion.p {...fadeUp(0.45)} className="text-sm leading-relaxed mb-10 max-w-sm mx-auto" style={{ color: '#9a8a7a' }}>
                        {isRTL
                          ? 'شكراً لتواصلكِ مع جلامور كوتور. سيرد عليكِ فريقنا خلال 24 ساعة بإذن الله.'
                          : 'Thank you for reaching out to Glamour Couture. Our team will reply within 24 hours.'}
                      </motion.p>
                      <motion.button
                        {...fadeUp(0.6)}
                        onClick={() => { setSent(false); setForm({ name: '', email: '', phone: '', subject: '', message: '' }); }}
                        className="px-10 py-4 rounded-full text-xs font-bold tracking-widest uppercase border-2 transition-all duration-300"
                        style={{ borderColor: GOLD, color: GOLD }}
                        onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = GOLD; (e.currentTarget as HTMLElement).style.color = 'white'; }}
                        onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = 'transparent'; (e.currentTarget as HTMLElement).style.color = GOLD; }}
                      >
                        {isRTL ? 'إرسال رسالة جديدة' : 'Send Another Message'}
                      </motion.button>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

    </div>
  );
}
