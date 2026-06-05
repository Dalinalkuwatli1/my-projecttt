import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export default function WhatsAppButton() {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === 'ar';

  const handleClick = () => {
    // Open Whatsapp conversation
    window.open('https://wa.me/905510069156', '_blank', 'noopener,noreferrer');
  };

  return (
    <motion.button
      onClick={handleClick}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 2, duration: 0.5 }}
      whileHover={{ y: -4 }}
      className={`fixed bottom-8 ${isRTL ? 'left-8' : 'right-8'} z-40 flex items-center gap-3 px-5 py-3.5 rounded-full shadow-float bg-card border border-brand-200/80 backdrop-blur-md group hover:border-brand-400 transition-colors duration-300`}
    >
      {/* Icon with glowing pulse */}
      <div className="relative flex items-center justify-center">
        <span className="absolute inline-flex h-3 w-3 rounded-full bg-emerald-400 opacity-75 animate-ping" />
        <MessageCircle size={20} className="text-emerald-500 group-hover:scale-110 transition-transform duration-300" />
      </div>

      <span className="text-[0.7rem] font-bold uppercase tracking-widest text-ink">
        {t('common.whatsapp', { defaultValue: isRTL ? 'تواصل معنا' : 'Contact Us' })}
      </span>
    </motion.button>
  );
}
