import { motion } from 'motion/react';
import { useLanguage } from '../context/LanguageContext';
import imgBrandStory from '../assets/images/brand_story.png';

export default function BrandStory() {
  const { t } = useLanguage();
  
  return (
    <section id="story" className="py-24 md:py-40 px-6 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="relative aspect-[3/4] overflow-hidden group"
        >
          <img 
            src={imgBrandStory} 
            alt="Craftsman working" 
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 border-[20px] border-brand-bg m-4" />
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <span className="text-brand-accent text-sm uppercase tracking-[0.3em] font-medium mb-4 block">{t.story.philosophy}</span>
          <h2 className="text-4xl md:text-5xl font-serif mb-8 leading-tight">{t.story.title1}<br />{t.story.title2}</h2>
          <div className="space-y-6 text-brand-ink/70 font-light leading-relaxed tracking-wide">
            <p>{t.story.p1}</p>
            <p>{t.story.p2}</p>
            <div className="pt-8">
              <div className="flex items-center gap-4 group cursor-pointer inline-flex">
                <span className="text-sm uppercase tracking-[0.2em] font-medium group-hover:text-brand-accent transition-colors">{t.story.explore}</span>
                <div className="w-12 h-[1px] bg-brand-ink group-hover:w-20 group-hover:bg-brand-accent transition-all duration-300" />
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Decorative vertical text */}
      <div className="hidden lg:block absolute right-12 top-1/2 -translate-y-1/2 overflow-hidden italic text-brand-secondary">
         <span className="text-8xl opacity-10 select-none pointer-events-none block vertical-text">
            {t.story.bgText}
         </span>
      </div>
    </section>
  );
}
