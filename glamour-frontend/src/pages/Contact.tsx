import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, Check } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const GOLD = '#c5a059';
const DARK = '#362e24';
const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.65, delay },
});

const contactInfo = [
  {
    icon: MapPin,
    labelEn: 'Atelier Address',
    labelAr: 'عنوان المشغل',
    valueEn: 'Grand Bazaar District, Beyoglu\nIstanbul, Turkey 34420',
    valueAr: 'حي البازار الكبير، بيوغلو\nإسطنبول، تركيا 34420',
  },
  {
    icon: Phone,
    labelEn: 'Phone',
    labelAr: 'الهاتف',
    valueEn: '+90 551 006 9156',
    valueAr: '+90 551 006 9156',
  },
  {
    icon: Mail,
    labelEn: 'Email',
    labelAr: 'البريد الإلكتروني',
    valueEn: 'hello@glamourgroup.com',
    valueAr: 'hello@glamourgroup.com',
  },
  {
    icon: Clock,
    labelEn: 'Working Hours',
    labelAr: 'ساعات العمل',
    valueEn: 'Mon – Sat: 10 AM – 7 PM\nSunday: By Appointment Only',
    valueAr: 'الاثنين – السبت: 10ص – 7م\nالأحد: بموعد مسبق فقط',
  },
];

export default function Contact() {
  const { i18n } = useTranslation();
  const isRTL = i18n.language === 'ar';

  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <div className="min-h-screen pt-24 pb-24" style={{ background: 'var(--color-brand-light,#fcfbf9)' }}>

      {/* Header */}
      <div className="max-w-7xl mx-auto px-6 lg:px-16 pt-12 mb-16">
        <motion.div {...fadeUp(0)} className="text-center">
          <span className="block text-[0.65rem] font-bold tracking-[0.28em] uppercase mb-4" style={{ color: GOLD }}>
            {isRTL ? 'نحن هنا' : "We're Here"}
          </span>
          <h1 className="font-serif text-5xl md:text-6xl mb-5" style={{ color: DARK }}>
            {isRTL ? 'تواصل معنا' : 'Contact Us'}
          </h1>
          <p className="text-lg max-w-xl mx-auto leading-relaxed" style={{ color: 'var(--color-surface-500,#bfb39c)' }}>
            {isRTL
              ? 'سواء كان لديك سؤال أو استفسار أو مجرد رغبة في التحدث عن ثوب أحلامك — نحن هنا.'
              : 'Whether you have a question, an inquiry, or simply want to talk about your dream gown — we are here.'}
          </p>
        </motion.div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">

          {/* Contact Info */}
          <motion.div {...fadeUp(0.05)} className="lg:col-span-2 space-y-8">
            {contactInfo.map((info, i) => {
              const Icon = info.icon;
              return (
                <div key={i} className="flex gap-5">
                  <div className="w-11 h-11 rounded-full flex items-center justify-center shrink-0" style={{ background: 'rgba(197,160,89,0.1)' }}>
                    <Icon size={18} style={{ color: GOLD }} />
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-widest mb-1.5" style={{ color: GOLD }}>
                      {isRTL ? info.labelAr : info.labelEn}
                    </p>
                    <p className="text-sm leading-relaxed whitespace-pre-line" style={{ color: 'var(--color-surface-600,#9c8f77)' }}>
                      {isRTL ? info.valueAr : info.valueEn}
                    </p>
                  </div>
                </div>
              );
            })}

            {/* Map placeholder */}
            <div className="rounded-2xl overflow-hidden h-56 relative mt-4" style={{ boxShadow: '0 4px 20px rgba(54,46,36,0.1)' }}>
              <img
                src="https://images.pexels.com/photos/3622608/pexels-photo-3622608.jpeg?auto=compress&cs=tinysrgb&w=700"
                alt="Atelier"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 flex items-center justify-center" style={{ background: 'rgba(54,46,36,0.45)' }}>
                <div className="text-center">
                  <MapPin size={32} className="mx-auto mb-2" style={{ color: GOLD }} />
                  <p className="text-white font-serif text-lg">{isRTL ? 'مشغل جلامور' : 'Glamour Atelier'}</p>
                  <p className="text-white/70 text-sm">{isRTL ? 'إسطنبول، تركيا' : 'Istanbul, Turkey'}</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            {...fadeUp(0.1)}
            className="lg:col-span-3 bg-white rounded-3xl p-8 md:p-10"
            style={{ boxShadow: '0 8px 40px rgba(54,46,36,0.08)' }}
          >
            <AnimatePresence mode="wait">
              {!sent ? (
                <motion.form
                  key="contact-form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onSubmit={handleSubmit}
                  className="space-y-7"
                >
                  <h2 className="font-serif text-2xl mb-2" style={{ color: DARK }}>
                    {isRTL ? 'أرسلي لنا رسالة' : 'Send Us a Message'}
                  </h2>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="relative">
                      <input
                        type="text"
                        required
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        placeholder=" "
                        className="input-underline peer w-full"
                        id="contact-name"
                      />
                      <label htmlFor="contact-name" className="input-label">
                        {isRTL ? 'الاسم الكامل' : 'Full Name'}
                      </label>
                    </div>
                    <div className="relative">
                      <input
                        type="email"
                        required
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        placeholder=" "
                        className="input-underline peer w-full"
                        id="contact-email"
                      />
                      <label htmlFor="contact-email" className="input-label">
                        {isRTL ? 'البريد الإلكتروني' : 'Email Address'}
                      </label>
                    </div>
                  </div>

                  <div className="relative">
                    <input
                      type="text"
                      required
                      value={form.subject}
                      onChange={(e) => setForm({ ...form, subject: e.target.value })}
                      placeholder=" "
                      className="input-underline peer w-full"
                      id="contact-subject"
                    />
                    <label htmlFor="contact-subject" className="input-label">
                      {isRTL ? 'الموضوع' : 'Subject'}
                    </label>
                  </div>

                  <div className="relative">
                    <textarea
                      required
                      rows={5}
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      placeholder=" "
                      className="input-underline peer w-full resize-none"
                      id="contact-message"
                    />
                    <label htmlFor="contact-message" className="input-label">
                      {isRTL ? 'رسالتك' : 'Your Message'}
                    </label>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 rounded-full text-xs font-bold tracking-[0.2em] uppercase text-white transition-all duration-300"
                    style={{ background: DARK }}
                    onMouseEnter={(e) => { e.currentTarget.style.background = GOLD; }}
                    onMouseLeave={(e) => { e.currentTarget.style.background = DARK; }}
                  >
                    {isRTL ? 'إرسال الرسالة' : 'Send Message'}
                  </button>
                </motion.form>
              ) : (
                <motion.div
                  key="contact-success"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-16"
                >
                  <div className="w-20 h-20 mx-auto rounded-full flex items-center justify-center mb-8" style={{ background: 'rgba(197,160,89,0.1)' }}>
                    <Check size={40} style={{ color: GOLD }} />
                  </div>
                  <h3 className="font-serif text-2xl mb-3" style={{ color: DARK }}>
                    {isRTL ? 'تم إرسال رسالتك!' : 'Message Sent!'}
                  </h3>
                  <p className="text-sm leading-relaxed mb-8 max-w-sm mx-auto" style={{ color: 'var(--color-surface-600,#9c8f77)' }}>
                    {isRTL
                      ? 'شكراً لتواصلك مع جلامور. سيرد عليك فريقنا خلال 24 ساعة.'
                      : 'Thank you for reaching out to Glamour. Our team will reply within 24 hours.'}
                  </p>
                  <button
                    onClick={() => { setSent(false); setForm({ name: '', email: '', subject: '', message: '' }); }}
                    className="px-7 py-3 rounded-full text-xs font-bold tracking-widest uppercase border-2 transition-colors"
                    style={{ borderColor: GOLD, color: GOLD }}
                  >
                    {isRTL ? 'إرسال رسالة جديدة' : 'Send Another Message'}
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
