import { motion } from 'motion/react';
import { useLanguage } from '../context/LanguageContext';

export default function Navbar() {
  const { t, language, setLanguage } = useLanguage();

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 glass-nav h-20 px-10 md:px-[60px] flex justify-between items-center"
    >
      <div className="flex items-center">
        <a href="/" className="font-serif text-2xl tracking-[0.2em] font-semibold uppercase">{t.nav.brand}</a>
      </div>
      <div className="hidden md:flex items-center gap-10 text-[13px] tracking-widest font-normal">
        <a href="#story" className="text-brand-ink/80 hover:text-brand-clay transition-colors">{t.nav.story}</a>
        <a href="#products" className="text-brand-ink/80 hover:text-brand-clay transition-colors">{t.nav.products}</a>
        <a href="#craft" className="text-brand-ink/80 hover:text-brand-clay transition-colors">{t.nav.craft}</a>
        <a href="#" className="text-brand-ink/80 hover:text-brand-clay transition-colors">{t.nav.custom}</a>
        <a href="#footer" className="text-brand-ink/80 hover:text-brand-clay transition-colors">{t.nav.contact}</a>
        
        <button 
          onClick={() => setLanguage(language === 'zh' ? 'en' : 'zh')}
          className="ml-4 border border-brand-ink/20 px-3 py-1 rounded-full hover:bg-brand-ink hover:text-white transition-colors text-[11px] uppercase tracking-widest"
        >
          {language === 'zh' ? 'EN' : '中文'}
        </button>
      </div>
      <div className="md:hidden flex items-center gap-4">
        <button 
          onClick={() => setLanguage(language === 'zh' ? 'en' : 'zh')}
          className="border border-brand-ink/20 px-2 py-1 rounded-sm hover:bg-brand-ink hover:text-white transition-colors text-[10px] uppercase"
        >
          {language === 'zh' ? 'EN' : '中'}
        </button>
        <div className="cursor-pointer">
          <div className="w-6 h-px bg-brand-ink mb-1"></div>
          <div className="w-6 h-px bg-brand-ink mb-1"></div>
          <div className="w-6 h-px bg-brand-ink"></div>
        </div>
      </div>
    </motion.nav>
  );
}
