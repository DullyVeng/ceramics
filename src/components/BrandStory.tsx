import { motion } from 'motion/react';

export default function BrandStory() {
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
            src="https://images.unsplash.com/photo-1565193998771-e6a133ef07a9?q=80&w=2070&auto=format&fit=crop" 
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
          <span className="text-brand-accent text-sm uppercase tracking-[0.3em] font-medium mb-4 block">品牌理念 | Philosophy</span>
          <h2 className="text-4xl md:text-5xl font-serif mb-8 leading-tight">瓷韵流转，<br />重塑东方当代叙事</h2>
          <div className="space-y-6 text-brand-ink/70 font-light leading-relaxed tracking-wide">
            <p>
              御瓷东方致力于将古老的陶瓷语言转化为当代生活的诗意表达。我们相信，每一件瓷器都是凝固的时间，在指尖触碰间传递温润的艺术力量。
            </p>
            <p>
              我们以现代设计重构传统意象，在极简的线条与天然的质感中，寻找东方禅意与日常生活的完美平衡。为您的每一处居住空间，注入一份静谧而高级的艺术厚度。
            </p>
            <div className="pt-8">
              <div className="flex items-center gap-4 group cursor-pointer inline-flex">
                <span className="text-sm uppercase tracking-[0.2em] font-medium group-hover:text-brand-accent transition-colors">探索匠心造物</span>
                <div className="w-12 h-[1px] bg-brand-ink group-hover:w-20 group-hover:bg-brand-accent transition-all duration-300" />
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Decorative vertical text */}
      <div className="hidden lg:block absolute right-12 top-1/2 -translate-y-1/2 overflow-hidden italic text-brand-secondary">
         <span className="text-8xl opacity-10 select-none pointer-events-none block vertical-text">
            YU CI ORIENTAL
         </span>
      </div>
    </section>
  );
}
