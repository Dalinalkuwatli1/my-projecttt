import { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Check } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: 'easeOut' }
};

export default function BookAppointment() {
  const { t } = useTranslation();
  
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    notes: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <div className="pt-32 pb-24 min-h-screen bg-bg flex items-center">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 w-full">
        <div className="overflow-hidden max-w-6xl mx-auto flex flex-col lg:flex-row shadow-float rounded-[24px] bg-card">
          
          {/* Left Side: Information */}
          <div className="lg:w-5/12 relative min-h-[400px] lg:min-h-auto p-10 lg:p-14 flex flex-col justify-between" style={{ background: 'var(--color-ink)' }}>
            <img
              src="https://images.pexels.com/photos/3622608/pexels-photo-3622608.jpeg?auto=compress&cs=tinysrgb&w=900"
              alt="Bridal Consultation"
              className="absolute inset-0 w-full h-full object-cover opacity-30"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/90 to-transparent" />
            
            <div className="relative z-10">
              <span className="block text-[0.65rem] font-bold uppercase tracking-[0.2em] text-brand mb-4">
                {t('book.info.label', { defaultValue: 'Private Session' })}
              </span>
              <h3 className="font-serif text-3xl lg:text-4xl text-white mb-4 leading-snug">{t('book.info.title')}</h3>
              <p className="text-white/70 text-sm leading-relaxed mb-12 max-w-sm">
                {t('book.info.desc')}
              </p>
            </div>

            <div className="relative z-10 space-y-6 text-sm font-light">
              <div className="flex items-start gap-4">
                <MapPin size={18} className="mt-0.5 shrink-0 text-brand" />
                <div>
                  <p className="font-semibold text-white mb-1">{t('book.info.location')}</p>
                  <p className="text-white/60">{t('book.info.address1')}<br />{t('book.info.address2')}</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <Phone size={18} className="shrink-0 text-brand" />
                <p className="text-white/60">+90 551 006 9156</p>
              </div>
              <div className="flex items-center gap-4">
                <Mail size={18} className="shrink-0 text-brand" />
                <p className="text-white/60">hello@glamourgroup.com</p>
              </div>
              <div className="flex items-start gap-4">
                <Clock size={18} className="mt-0.5 shrink-0 text-brand" />
                <div>
                  <p className="font-semibold text-white mb-1">{t('book.info.hours')}</p>
                  <p className="text-white/60">{t('book.info.hoursDesc')}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side: Form */}
          <div className="lg:w-7/12 p-10 lg:p-16">
            <AnimatePresence mode="wait">
              {!isSubmitted ? (
                <motion.div
                  key="form"
                  initial="initial"
                  animate="animate"
                  exit={{ opacity: 0, y: -20 }}
                  variants={{
                    initial: { opacity: 0 },
                    animate: { opacity: 1, transition: { staggerChildren: 0.1 } }
                  }}
                >
                  <motion.div variants={fadeUp}>
                    <h2 className="font-serif text-4xl mb-3 text-ink">{t('book.form.title')}</h2>
                    <p className="text-muted text-sm mb-10">{t('book.form.subtitle')}</p>
                  </motion.div>

                  <form onSubmit={handleSubmit} className="space-y-8">
                    <motion.div variants={fadeUp} className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="relative">
                        <input
                          type="text"
                          id="firstName"
                          required
                          value={formData.firstName}
                          onChange={(e) => setFormData({...formData, firstName: e.target.value})}
                          className="input-underline peer"
                          placeholder=" "
                        />
                        <label htmlFor="firstName" className="input-label">
                          {t('book.form.firstName')}
                        </label>
                      </div>
                      <div className="relative">
                        <input
                          type="text"
                          id="lastName"
                          required
                          value={formData.lastName}
                          onChange={(e) => setFormData({...formData, lastName: e.target.value})}
                          className="input-underline peer"
                          placeholder=" "
                        />
                        <label htmlFor="lastName" className="input-label">
                          {t('book.form.lastName')}
                        </label>
                      </div>
                    </motion.div>

                    <motion.div variants={fadeUp} className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="relative">
                        <input
                          type="email"
                          id="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({...formData, email: e.target.value})}
                          className="input-underline peer"
                          placeholder=" "
                        />
                        <label htmlFor="email" className="input-label">
                          {t('book.form.email')}
                        </label>
                      </div>
                      <div className="relative">
                        <input
                          type="tel"
                          id="phone"
                          required
                          value={formData.phone}
                          onChange={(e) => setFormData({...formData, phone: e.target.value})}
                          className="input-underline peer"
                          placeholder=" "
                        />
                        <label htmlFor="phone" className="input-label">
                          {t('book.form.phone')}
                        </label>
                      </div>
                    </motion.div>

                    <motion.div variants={fadeUp} className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="relative">
                        <input
                          type="date"
                          id="date"
                          required
                          value={formData.date}
                          onChange={(e) => setFormData({...formData, date: e.target.value})}
                          className="input-underline peer"
                          placeholder=" "
                        />
                        <label htmlFor="date" className="input-label">
                          {t('book.form.date')}
                        </label>
                      </div>
                      <div className="relative">
                        <select
                          id="time"
                          required
                          value={formData.time}
                          onChange={(e) => setFormData({...formData, time: e.target.value})}
                          className="input-underline peer appearance-none bg-transparent"
                        >
                          <option value="" disabled></option>
                          <option value="10:00">10:00 AM</option>
                          <option value="11:30">11:30 AM</option>
                          <option value="14:00">02:00 PM</option>
                          <option value="15:30">03:30 PM</option>
                          <option value="17:00">05:00 PM</option>
                        </select>
                        <label htmlFor="time" className="input-label">
                          {t('book.form.time')}
                        </label>
                      </div>
                    </motion.div>

                    <motion.div variants={fadeUp} className="relative">
                      <textarea
                        id="notes"
                        rows={3}
                        value={formData.notes}
                        onChange={(e) => setFormData({...formData, notes: e.target.value})}
                        className="input-underline peer resize-none"
                        placeholder=" "
                      ></textarea>
                      <label htmlFor="notes" className="input-label">
                        {t('book.form.notes')}
                      </label>
                    </motion.div>

                    <motion.div variants={fadeUp} className="pt-4">
                      <button type="submit" className="btn-primary w-full py-4.5">
                        {t('book.form.submit')}
                      </button>
                    </motion.div>
                  </form>
                </motion.div>
              ) : (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, ease: 'easeOut' }}
                  className="h-full flex flex-col items-center justify-center text-center py-16"
                >
                  <div className="w-20 h-20 bg-brand-50 rounded-full flex items-center justify-center mb-6">
                    <Check size={40} className="text-brand" />
                  </div>
                  <h3 className="font-serif text-3xl mb-4 text-ink">{t('book.success.title')}</h3>
                  <p className="text-muted leading-relaxed mb-8 max-w-sm">
                    {t('book.success.desc')}
                  </p>
                  <button
                    onClick={() => {
                      setIsSubmitted(false);
                      setFormData({ firstName: '', lastName: '', email: '', phone: '', date: '', time: '', notes: '' });
                    }}
                    className="btn-secondary"
                  >
                    {t('book.success.btn')}
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

        </div>
      </div>
    </div>
  );
}
