import { motion } from 'motion/react';
import { useLanguage } from '../context/LanguageContext';

export default function Hero() {
  const { t } = useLanguage();

  return (
    <section className="relative min-h-[90vh] md:h-screen w-full grid grid-cols-1 md:grid-cols-2 bg-brand-bg border-b border-black/5 pt-20">
      {/* Content */}
      <div className="flex flex-col justify-center px-10 md:px-[60px] py-20">
        <motion.span 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-[11px] uppercase tracking-[3px] text-brand-clay font-bold mb-6"
        >
          {t.hero.subtitle}
        </motion.span>
        
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 1 }}
          className="text-[48px] md:text-[72px] font-serif leading-[1.1] mb-8"
        >
          {t.hero.title}<br />
          <span className="italic">{t.hero.titleItalic}</span>
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 1 }}
          className="text-lg leading-[1.6] text-brand-text-light max-w-[400px] tracking-wide"
        >
          {t.hero.desc}
        </motion.p>

        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ delay: 0.6, duration: 0.8 }}
           className="mt-12"
        >
          <a 
            href="#products" 
            className="inline-flex items-center gap-2 group"
          >
            <span className="w-2 h-2 rounded-full bg-brand-clay" />
            <span className="text-xs uppercase tracking-[0.2em] font-medium border-b border-transparent group-hover:border-brand-clay transition-all py-1">
              {t.hero.explore}
            </span>
          </a>
        </motion.div>
      </div>

      {/* Visual */}
      <div className="bg-[#EFECE7] flex items-center justify-center relative overflow-hidden min-h-[400px]">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="relative w-[240px] md:w-[280px] h-[320px] md:h-[380px] bg-gradient-to-br from-[#FDFCFB] to-[#E8E6E1] rounded-[80%_80%_20%_20%] shadow-[20px_40px_60px_rgba(0,0,0,0.05)]"
        >
          {/* Porcelain neck detail */}
          <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-[60px] h-[15px] border-2 border-black/5 rounded-full" />
        </motion.div>

        {/* Vertical Text */}
        <div className="absolute right-5 top-1/2 -translate-y-1/2 vertical-text text-[10px] tracking-[4px] opacity-20 uppercase">
          {t.hero.verticalText}
        </div>
      </div>
    </section>
  );
}
