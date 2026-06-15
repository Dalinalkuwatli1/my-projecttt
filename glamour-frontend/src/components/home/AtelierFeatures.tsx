import { motion } from 'framer-motion';
import { Sparkles, ShieldCheck, Award, Heart } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export default function AtelierFeatures() {
  const { i18n } = useTranslation();
  const isRTL = i18n.language === 'ar';

  const features = [
    {
      icon: Sparkles,
      titleEn: 'Exclusive Designs',
      titleAr: 'تصاميم حصرية',
      descEn: 'Each gown is designed from scratch to tell a unique bridal story.',
      descAr: 'كل فستان يُصمم خصيصاً للعروس ليروي قصة حبها الاستثنائية.',
    },
    {
      icon: ShieldCheck,
      titleEn: 'Secure International Shipping',
      titleAr: 'شحن دولي آمن',
      descEn: 'Insured and tracked shipping directly to your doorstep worldwide.',
      descAr: 'شحن مؤمّن ومتابع بدقة لجميع دول العالم حتى باب منزلكِ.',
    },
    {
      icon: Heart,
      titleEn: 'Luxury Fabrics',
      titleAr: 'خامات فاخرة',
      descEn: 'Sourced from the finest silk and lace mills in France and Italy.',
      descAr: 'منتقاة بعناية من أرقى بيوت الحرير والدانتيل الفرنسي والإيطالي.',
    },
    {
      icon: Award,
      titleEn: 'Bespoke Tailoring',
      titleAr: 'تفصيل حسب الطلب',
      descEn: 'Handcrafted precision customized to fit your exact silhouette.',
      descAr: 'صناعة يدوية دقيقة ومخصصة لتطابق مقاساتكِ وتفاصيل حضوركِ.',
    },
  ];

  return (
    <section className="py-20 bg-[#FAF7F2] border-b border-[#e8dbd1]/50">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feat, index) => {
            const Icon = feat.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-20px' }}
                transition={{ duration: 0.8, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{ y: -8, boxShadow: '0 30px 60px rgba(42,30,20,0.1)' }}
                className="bg-white p-10 rounded-[32px] border border-[#e8dbd1]/60 transition-all duration-500 flex flex-col items-center text-center space-y-4 cursor-default group"
                style={{ boxShadow: '0 10px 30px rgba(42,30,20,0.03)' }}
              >
                <div className="w-16 h-16 rounded-full bg-[#C6A27A]/10 flex items-center justify-center text-[#C6A27A] border border-[#C6A27A]/15 transition-transform duration-500 group-hover:scale-110">
                  <Icon size={28} />
                </div>
                <h3 className="font-serif text-lg font-bold text-[#2b1b12]">
                  {isRTL ? feat.titleAr : feat.titleEn}
                </h3>
                <p className="text-sm text-[#8a7b71] leading-relaxed">
                  {isRTL ? feat.descAr : feat.descEn}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
