import { motion } from 'motion/react';

export default function Navbar() {
  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 glass-nav h-20 px-10 md:px-[60px] flex justify-between items-center"
    >
      <div className="flex items-center">
        <a href="/" className="font-serif text-2xl tracking-[0.2em] font-semibold uppercase">瓷 · 意</a>
      </div>
      <div className="hidden md:flex gap-10 text-[13px] tracking-widest font-normal">
        <a href="#story" className="text-brand-ink/80 hover:text-brand-clay transition-colors">品牌故事</a>
        <a href="#products" className="text-brand-ink/80 hover:text-brand-clay transition-colors">系列作品</a>
        <a href="#craft" className="text-brand-ink/80 hover:text-brand-clay transition-colors">匠心工艺</a>
        <a href="#" className="text-brand-ink/80 hover:text-brand-clay transition-colors">私人定制</a>
        <a href="#footer" className="text-brand-ink/80 hover:text-brand-clay transition-colors">联系我们</a>
      </div>
      <div className="md:hidden">
        {/* Mobile menu icon placeholder */}
        <div className="w-6 h-px bg-brand-ink mb-1"></div>
        <div className="w-6 h-px bg-brand-ink mb-1"></div>
        <div className="w-6 h-px bg-brand-ink"></div>
      </div>
    </motion.nav>
  );
}
