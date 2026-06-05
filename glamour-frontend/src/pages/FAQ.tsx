import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const GOLD = '#c5a059';
const DARK = '#362e24';
const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.65, delay },
});

const faqs = [
  {
    q: { en: 'How far in advance should I book my appointment?', ar: 'كم من الوقت قبل الزفاف يجب أن أحجز موعدي؟' },
    a: { en: 'We recommend booking your first consultation 9–12 months before your wedding date. Bespoke gowns require 5–7 months to create, with 1–2 months for fittings and alterations.', ar: 'ننصح بحجز استشارتك الأولى قبل 9–12 شهراً من تاريخ زفافك. الأثواب المخصصة تستغرق 5–7 أشهر للتصنيع، مع 1–2 شهر للتجربة والتعديلات.' },
  },
  {
    q: { en: 'What is your price range for bridal gowns?', ar: 'ما هو نطاق أسعار أثواب الزفاف لديكم؟' },
    a: { en: 'Our ready-to-wear collection starts from $1,200. Bespoke (made-to-measure) gowns begin at $2,800, with fully custom designs starting from $5,000. Each gown is handcrafted in our Istanbul atelier.', ar: 'تبدأ مجموعتنا الجاهزة من 1,200 دولار. الأثواب المخصصة (حسب الطلب) تبدأ من 2,800 دولار، مع التصاميم المخصصة بالكامل تبدأ من 5,000 دولار. كل ثوب مُصنَّع يدوياً في مشغلنا بإسطنبول.' },
  },
  {
    q: { en: 'Do you ship internationally?', ar: 'هل تشحنون دولياً؟' },
    a: { en: 'Yes. We ship to all GCC countries, Lebanon, and Europe. Shipping is handled via secure, insured courier. We also offer White Glove delivery for orders above $3,000.', ar: 'نعم. نشحن إلى جميع دول الخليج ولبنان وأوروبا. يتم الشحن عبر خدمة بريد آمنة ومؤمَّنة. نقدم أيضاً خدمة التوصيل الفاخر للطلبات التي تزيد عن 3,000 دولار.' },
  },
  {
    q: { en: 'Can I bring guests to my fitting appointments?', ar: 'هل يمكنني إحضار ضيوف إلى جلسات التجربة؟' },
    a: { en: 'Absolutely. We welcome up to 3 guests per appointment to make the experience memorable. For larger groups, please contact us in advance so we can prepare our private suite.', ar: 'بالتأكيد. نرحب بما يصل إلى 3 ضيوف لكل موعد لجعل التجربة لا تُنسى. للمجموعات الأكبر، يرجى التواصل معنا مسبقاً لنتمكن من تجهيز جناحنا الخاص.' },
  },
  {
    q: { en: 'What is your alteration and return policy?', ar: 'ما هي سياسة التعديلات والإرجاع لديكم؟' },
    a: { en: 'All gowns include two complimentary fitting sessions and minor alterations. Major alterations are charged separately. Due to the bespoke nature of our work, we do not accept returns. Exchanges are assessed on a case-by-case basis.', ar: 'تشمل جميع الأثواب جلستَي تجربة مجانيتَين وتعديلات طفيفة. التعديلات الكبرى تُفرض عليها رسوم منفصلة. نظراً للطابع المخصص لعملنا، لا نقبل الإرجاع. يتم تقييم الاستبدال على أساس كل حالة على حدة.' },
  },
  {
    q: { en: 'Do you offer payment plans?', ar: 'هل تقدمون خطط دفع بالتقسيط؟' },
    a: { en: 'Yes. We offer a 50/25/25 payment plan: 50% deposit to begin production, 25% at the first fitting, and 25% upon collection. For orders above $5,000, a custom payment schedule can be arranged.', ar: 'نعم. نقدم خطة دفع 50/25/25: 50% دفعة مقدمة لبدء الإنتاج، 25% عند أول تجربة، و25% عند الاستلام. للطلبات التي تزيد عن 5,000 دولار، يمكن ترتيب جدول دفع مخصص.' },
  },
  {
    q: { en: 'Can I see gowns before my appointment?', ar: 'هل يمكنني رؤية الأثواب قبل موعدي؟' },
    a: { en: 'Yes. Browse our full collection gallery online, or visit our atelier during open hours to view samples. We also share lookbooks and trend boards during your consultation.', ar: 'نعم. تصفحي معرض مجموعتنا الكاملة عبر الإنترنت، أو زوري مشغلنا خلال ساعات العمل لمشاهدة العينات. نشارك أيضاً كتب العروض ولوحات الاتجاهات خلال استشارتك.' },
  },
];

export default function FAQ() {
  const { i18n } = useTranslation();
  const isRTL = i18n.language === 'ar';
  const [open, setOpen] = useState<number | null>(null);

  return (
    <div className="min-h-screen pt-24 pb-24" style={{ background: 'var(--color-brand-light,#fcfbf9)' }}>

      {/* Header */}
      <div className="max-w-4xl mx-auto px-6 lg:px-16 pt-12 mb-20">
        <motion.div {...fadeUp(0)} className="text-center">
          <span className="block text-[0.65rem] font-bold tracking-[0.28em] uppercase mb-4" style={{ color: GOLD }}>
            {isRTL ? 'لديك سؤال؟' : 'Have a Question?'}
          </span>
          <h1 className="font-serif text-5xl md:text-6xl mb-5" style={{ color: DARK }}>
            {isRTL ? 'الأسئلة الشائعة' : 'Frequently Asked Questions'}
          </h1>
          <p className="text-lg leading-relaxed" style={{ color: 'var(--color-surface-500,#bfb39c)' }}>
            {isRTL
              ? 'كل ما تحتاجين معرفته عن مجموعاتنا وخدماتنا وعملية الحجز.'
              : 'Everything you need to know about our collections, services, and booking process.'}
          </p>
        </motion.div>
      </div>

      {/* FAQ Accordion */}
      <div className="max-w-4xl mx-auto px-6 lg:px-16 mb-20">
        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              {...fadeUp(i * 0.04)}
              className="rounded-2xl overflow-hidden bg-white"
              style={{ boxShadow: '0 2px 16px rgba(54,46,36,0.06)' }}
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between gap-4 p-6 md:p-8 text-start"
              >
                <span className="font-serif text-lg font-semibold leading-snug flex-1" style={{ color: open === i ? GOLD : DARK }}>
                  {isRTL ? faq.q.ar : faq.q.en}
                </span>
                <div
                  className="w-9 h-9 rounded-full flex items-center justify-center shrink-0 transition-colors duration-300"
                  style={{ background: open === i ? GOLD : 'var(--color-brand-50,#faf9f7)' }}
                >
                  {open === i
                    ? <Minus size={16} color="white" />
                    : <Plus size={16} style={{ color: GOLD }} />}
                </div>
              </button>

              <AnimatePresence>
                {open === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.35 }}
                    className="overflow-hidden"
                  >
                    <p className="px-6 md:px-8 pb-7 text-sm leading-relaxed" style={{ color: 'var(--color-surface-600,#9c8f77)' }}>
                      {isRTL ? faq.a.ar : faq.a.en}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Still have questions CTA */}
      <div className="max-w-4xl mx-auto px-6 lg:px-16">
        <motion.div
          {...fadeUp(0.1)}
          className="text-center rounded-3xl p-12"
          style={{ background: DARK }}
        >
          <h2 className="font-serif text-3xl text-white mb-4">
            {isRTL ? 'لديك سؤال آخر؟' : 'Still have a question?'}
          </h2>
          <p className="text-white/60 mb-8">
            {isRTL
              ? 'فريقنا سعيد بالمساعدة. تواصلي معنا عبر البريد الإلكتروني أو احجزي استشارة خاصة.'
              : 'Our team is happy to help. Reach us by email or book a private consultation.'}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="px-7 py-3.5 rounded-full text-xs font-bold tracking-widest uppercase text-white border border-white/20 hover:bg-white/10 transition-colors"
            >
              {isRTL ? 'تواصل معنا' : 'Contact Us'}
            </Link>
            <Link
              to="/book-appointment"
              className="px-7 py-3.5 rounded-full text-xs font-bold tracking-widest uppercase text-white transition-opacity hover:opacity-85"
              style={{ background: GOLD }}
            >
              {isRTL ? 'احجزي موعدك' : 'Book Appointment'}
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
