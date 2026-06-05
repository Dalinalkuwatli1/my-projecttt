import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import logo from '../../assets/logo.png';

const Preloader = ({ onComplete }: { onComplete: () => void }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Simulate luxury loading time
    const duration = 2000;
    const interval = 20;
    let current = 0;

    const timer = setInterval(() => {
      current += (interval / duration) * 100;
      setProgress(Math.min(current, 100));

      if (current >= 100) {
        clearInterval(timer);
        setTimeout(onComplete, 500); // Wait a bit after reaching 100%
      }
    }, interval);

    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <motion.div
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-brand-light"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, y: '-100%' }}
      transition={{ duration: 1, ease: [0.76, 0, 0.24, 1] }}
    >
      <div className="overflow-hidden mb-8 flex items-center justify-center">
        <motion.img
          src={logo}
          alt="Glamour Group"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.2, ease: 'easeOut' }}
          className="h-24 md:h-32 object-contain mix-blend-multiply"
        />
      </div>

      <div className="w-48 h-[1px] bg-surface-200 relative overflow-hidden">
        <motion.div
          className="absolute top-0 left-0 h-full bg-brand"
          style={{ width: `${progress}%` }}
        />
      </div>
      
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="mt-4 text-[0.6rem] uppercase tracking-widest text-surface-400 font-medium"
      >
        {Math.round(progress)}%
      </motion.p>
    </motion.div>
  );
};

export default Preloader;
