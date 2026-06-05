import { motion } from 'framer-motion';
import { Ruler, ChevronDown } from 'lucide-react';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';

const GOLD = '#c5a059';
const DARK = '#362e24';
const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.65, delay },
});

const sizes = [
  { label: 'XS', bust: '80–82', waist: '60–62', hips: '86–88' },
  { label: 'S',  bust: '84–86', waist: '64–66', hips: '90–92' },
  { label: 'M',  bust: '88–90', waist: '68–70', hips: '94–96' },
  { label: 'L',  bust: '92–95', waist: '72–75', hips: '98–101' },
  { label: 'XL', bust: '96–100', waist: '76–80', hips: '102–106' },
  { label: '2XL', bust: '101–106', waist: '81–86', hips: '107–112' },
];

const tips = [
  { en: 'Measure in centimetres. Do not pull the tape too tight.', ar: 'القياس بالسنتيمترات. لا تشدي الشريط بإحكام.' },
  { en: 'Measure your bust at the fullest point, keeping the tape parallel to the floor.', ar: 'قيسي الصدر عند أوسع نقطة، مع إبقاء الشريط موازياً للأرضية.' },
  { en: 'Measure your natural waist — the narrowest part of your torso.', ar: 'قيسي خصرك الطبيعي — أضيق جزء في جذعك.' },
  { en: 'Measure your hips at the fullest point, about 18–20 cm below your waist.', ar: 'قيسي الوركين عند أوسع نقطة، حوالي 18–20 سم أسفل الخصر.' },
  { en: 'Always order to your largest measurement; alterations can reduce, not add, fabric.', ar: 'اطلبي دائماً حسب أكبر قياساتك؛ التعديلات تُقلص ولا تُضيف القماش.' },
];

export default function SizeGuide() {
  const { i18n } = useTranslation();
  const isRTL = i18n.language === 'ar';
  const [selected, setSelected] = useState<string | null>(null);

  return (
    <div className="min-h-screen pt-24 pb-24" style={{ background: 'var(--color-brand-light,#fcfbf9)' }}>

      {/* Header */}
      <div className="max-w-7xl mx-auto px-6 lg:px-16 pt-12 mb-20">
        <motion.div {...fadeUp(0)} className="text-center">
          <Ruler size={36} className="mx-auto mb-5" style={{ color: GOLD }} />
          <span className="block text-[0.65rem] font-bold tracking-[0.28em] uppercase mb-4" style={{ color: GOLD }}>
            {isRTL ? 'دليل المقاسات' : 'Size Guide'}
          </span>
          <h1 className="font-serif text-5xl md:text-6xl mb-5" style={{ color: DARK }}>
            {isRTL ? 'ابحثي عن مقاسك المثالي' : 'Find Your Perfect Fit'}
          </h1>
          <p className="text-lg max-w-xl mx-auto leading-relaxed" style={{ color: 'var(--color-surface-500,#bfb39c)' }}>
            {isRTL
              ? 'جميع مقاساتنا بالسنتيمترات. إذا كنت بين مقاسين، ننصح باختيار الأكبر وتعديله لاحقاً.'
              : 'All our measurements are in centimetres. If you are between sizes, we recommend selecting the larger and tailoring to fit.'}
          </p>
        </motion.div>
      </div>

      <div className="max-w-5xl mx-auto px-6 lg:px-16">

        {/* Size Table */}
        <motion.div {...fadeUp(0)} className="bg-white rounded-3xl overflow-hidden mb-16" style={{ boxShadow: '0 8px 40px rgba(54,46,36,0.08)' }}>
          <table className="w-full">
            <thead>
              <tr style={{ background: DARK }}>
                {[
                  isRTL ? 'المقاس' : 'Size',
                  isRTL ? 'الصدر (سم)' : 'Bust (cm)',
                  isRTL ? 'الخصر (سم)' : 'Waist (cm)',
                  isRTL ? 'الوركين (سم)' : 'Hips (cm)',
                ].map((h) => (
                  <th key={h} className="text-white text-xs font-bold uppercase tracking-widest py-5 px-6 text-center">{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {sizes.map((sz, i) => (
                <tr
                  key={sz.label}
                  onClick={() => setSelected(selected === sz.label ? null : sz.label)}
                  className="cursor-pointer transition-all duration-200"
                  style={{
                    background: selected === sz.label ? 'rgba(197,160,89,0.08)' : i % 2 === 0 ? 'white' : 'rgba(252,251,249,0.7)',
                  }}
                >
                  <td className="py-4 px-6 text-center font-serif font-bold text-lg" style={{ color: selected === sz.label ? GOLD : DARK }}>
                    {sz.label}
                  </td>
                  <td className="py-4 px-6 text-center text-sm font-medium" style={{ color: 'var(--color-surface-600,#9c8f77)' }}>{sz.bust}</td>
                  <td className="py-4 px-6 text-center text-sm font-medium" style={{ color: 'var(--color-surface-600,#9c8f77)' }}>{sz.waist}</td>
                  <td className="py-4 px-6 text-center text-sm font-medium" style={{ color: 'var(--color-surface-600,#9c8f77)' }}>{sz.hips}</td>
                </tr>
              ))}
            </tbody>
          </table>
          {selected && (
            <div className="px-8 py-5 border-t" style={{ borderColor: 'var(--color-surface-200,#f3efe6)', background: 'rgba(197,160,89,0.05)' }}>
              <p className="text-sm font-medium" style={{ color: DARK }}>
                {isRTL
                  ? `مقاس ${selected}: يناسب الصدر ${sizes.find(s=>s.label===selected)?.bust}، الخصر ${sizes.find(s=>s.label===selected)?.waist}، الوركين ${sizes.find(s=>s.label===selected)?.hips} سم.`
                  : `Size ${selected}: fits Bust ${sizes.find(s=>s.label===selected)?.bust}cm · Waist ${sizes.find(s=>s.label===selected)?.waist}cm · Hips ${sizes.find(s=>s.label===selected)?.hips}cm.`}
              </p>
            </div>
          )}
        </motion.div>

        {/* Measurement Tips */}
        <motion.div {...fadeUp(0.1)} className="mb-16">
          <h2 className="font-serif text-3xl mb-8 text-center" style={{ color: DARK }}>
            {isRTL ? 'نصائح القياس' : 'Measurement Tips'}
          </h2>
          <div className="space-y-4">
            {tips.map((tip, i) => (
              <div key={i} className="flex items-start gap-4 p-5 rounded-2xl bg-white" style={{ boxShadow: '0 2px 12px rgba(54,46,36,0.06)' }}>
                <span className="font-serif font-bold text-lg shrink-0" style={{ color: GOLD }}>0{i + 1}</span>
                <p className="text-sm leading-relaxed" style={{ color: 'var(--color-surface-600,#9c8f77)' }}>
                  {isRTL ? tip.ar : tip.en}
                </p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Accordion: How to measure diagram area */}
        <motion.div {...fadeUp(0.15)} className="rounded-3xl overflow-hidden" style={{ background: DARK }}>
          <button
            onClick={() => setSelected(selected === 'diagram' ? null : 'diagram')}
            className="w-full flex items-center justify-between p-8 text-white"
          >
            <span className="font-serif text-xl">
              {isRTL ? 'كيفية أخذ القياسات' : 'How to Take Your Measurements'}
            </span>
            <ChevronDown
              size={22}
              className="transition-transform duration-300"
              style={{ transform: selected === 'diagram' ? 'rotate(180deg)' : 'rotate(0deg)', color: GOLD }}
            />
          </button>
          {selected === 'diagram' && (
            <div className="px-8 pb-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[
                  { label: isRTL ? 'الصدر' : 'Bust', img: 'https://images.pexels.com/photos/1024993/pexels-photo-1024993.jpeg?auto=compress&cs=tinysrgb&w=400' },
                  { label: isRTL ? 'الخصر' : 'Waist', img: 'https://images.pexels.com/photos/265722/pexels-photo-265722.jpeg?auto=compress&cs=tinysrgb&w=400' },
                  { label: isRTL ? 'الوركين' : 'Hips', img: 'https://images.pexels.com/photos/1755428/pexels-photo-1755428.jpeg?auto=compress&cs=tinysrgb&w=400' },
                ].map((m) => (
                  <div key={m.label} className="text-center">
                    <div className="rounded-xl overflow-hidden mb-3 aspect-[3/4]">
                      <img src={m.img} alt={m.label} className="w-full h-full object-cover" />
                    </div>
                    <p className="text-white/80 text-sm font-medium">{m.label}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </motion.div>
      </div>
    </div>
  );
}
