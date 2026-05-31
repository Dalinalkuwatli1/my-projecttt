import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Heart, ArrowRight } from 'lucide-react';

const Reveal = ({ children, delay = 0, className = '' }: { children: React.ReactNode; delay?: number; className?: string }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-60px' });
  return (
    <motion.div ref={ref} className={className}
      initial={{ opacity: 0, y: 48, filter: 'blur(6px)' }}
      animate={isInView ? { opacity: 1, y: 0, filter: 'blur(0px)' } : {}}
      transition={{ duration: 0.9, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
};

const photos = [
  { id: 1, src: 'https://images.pexels.com/photos/1024993/pexels-photo-1024993.jpeg?auto=compress&cs=tinysrgb&w=800', title: 'Royal Bloom', year: '2026', cat: 'Ballgown', cls: 'md:col-span-1 md:row-span-2' },
  { id: 2, src: 'https://images.pexels.com/photos/265722/pexels-photo-265722.jpeg?auto=compress&cs=tinysrgb&w=800', title: 'The Celestine', year: '2026', cat: 'Mermaid', cls: 'md:col-span-1 md:row-span-1' },
  { id: 3, src: 'https://images.pexels.com/photos/1755428/pexels-photo-1755428.jpeg?auto=compress&cs=tinysrgb&w=800', title: 'Ivory Whisper', year: '2025', cat: 'A-Line', cls: 'md:col-span-1 md:row-span-1' },
  { id: 4, src: 'https://images.pexels.com/photos/2955375/pexels-photo-2955375.jpeg?auto=compress&cs=tinysrgb&w=1200', title: 'Aria Silhouette', year: '2025', cat: 'Sheath', cls: 'md:col-span-2 md:row-span-1' },
];

const MasonryGallery = () => {
  return (
    <section className="section" style={{ background: 'white' }}>
      <div className="max-w-7xl mx-auto px-8 lg:px-24">
        <Reveal className="text-center mb-20">
          <span className="section-label">The Collection</span>
          <h2 className="section-title mt-4">Couture Gowns 2025–2026</h2>
          <p className="section-subtitle mt-4">كل قطعة تحكي قصة — خُلقت لتُحفظ في الذاكرة إلى الأبد</p>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-3 auto-rows-[300px] gap-3 lg:gap-4">
          {photos.map((photo, idx) => (
            <motion.div
              key={photo.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.8, delay: idx * 0.12, ease: [0.22, 1, 0.36, 1] }}
              className={`group relative overflow-hidden cursor-pointer ${photo.cls}`}
            >
              <img
                src={photo.src}
                alt={photo.title}
                className="w-full h-full object-cover transition-transform duration-[1400ms] group-hover:scale-110"
                loading="lazy"
              />
              {/* Overlay */}
              <div
                className="cinematic-overlay flex flex-col justify-end p-8"
              >
                <div className="transform translate-y-5 group-hover:translate-y-0 transition-transform duration-500">
                  <span className="badge-brand mb-3 text-[0.5rem] tracking-[0.2em]">{photo.cat}</span>
                  <h3 className="text-white mb-1" style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '1.6rem', fontWeight: 400 }}>{photo.title}</h3>
                  <p style={{ color: 'var(--color-gold)', fontSize: '0.6rem', letterSpacing: '0.28em', fontFamily: 'Manrope, sans-serif', marginBottom: 14 }}>{photo.year}</p>
                  <Link to="/collections" className="inline-flex items-center gap-2 text-white/70 hover:text-white text-[0.58rem] tracking-[0.2em] uppercase font-semibold transition-colors">
                    View Collection <ArrowRight size={10} />
                  </Link>
                </div>
              </div>
              <button className="heart-btn opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <Heart size={14} strokeWidth={1.8} style={{ color: 'var(--color-gold)' }} />
              </button>
            </motion.div>
          ))}
        </div>

        <Reveal delay={0.2} className="mt-16 text-center">
          <Link to="/collections" className="btn-secondary">View All Collections</Link>
        </Reveal>
      </div>
    </section>
  );
};

export default MasonryGallery;
