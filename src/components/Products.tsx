import { motion } from 'motion/react';
import { useState } from 'react';

const categories = [
  { id: 'bath', name: '沐芳 | 卫浴', description: '灵动肌理，为卫浴空间赋予艺术温度。' },
  { id: 'accent', name: '拾光 | 陈设', description: '极简线条，营造宁静雅致的居家氛围。' },
];

const products = [
  { id: 1, category: 'bath', name: '流金岁月套装', price: '¥ 680', image: 'https://images.unsplash.com/photo-1618220179428-22790b461013?item_type=bathroom-set&q=80&w=800&auto=format&fit=crop', description: '黑金拉丝质感 (SA296-D16)' },
  { id: 2, category: 'bath', name: '银月浮影套装', price: '¥ 680', image: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?item_type=bathroom-acc&q=80&w=800&auto=format&fit=crop', description: '银白肌理之美 (SA296-D20)' },
  { id: 3, category: 'bath', name: '翠影流光套装', price: '¥ 520', image: 'https://images.unsplash.com/photo-1603533866380-4573f0ee3880?item_type=green-ceramic&q=80&w=800&auto=format&fit=crop', description: '清新渐变青釉 (SA296-DC10)' },
  { id: 4, category: 'bath', name: '琥珀暖阳套装', price: '¥ 750', image: 'https://images.unsplash.com/photo-1620626011761-9963d7521457?item_type=amber-acc&q=80&w=800&auto=format&fit=crop', description: '高贵琥珀拉丝 (SA296-DC16)' },
  { id: 5, category: 'bath', name: '幻彩流沙套装', price: '¥ 720', image: 'https://images.unsplash.com/photo-1595428774223-ef52624120ec?item_type=texture&q=80&w=800&auto=format&fit=crop', description: '东方金沙纹理 (SA296-DC28)' },
  { id: 6, category: 'bath', name: '极简素白套装', price: '¥ 380', image: 'https://images.unsplash.com/photo-1507652313519-d4511f7ca4ad?item_type=white-porcelain&q=80&w=800&auto=format&fit=crop', description: '磨砂哑光温润 (SA296-MPC)' },
  { id: 7, category: 'bath', name: '原生木纹套装', price: '¥ 580', image: 'https://images.unsplash.com/photo-1516962080544-eac695c93791?item_type=wood-texture&q=80&w=800&auto=format&fit=crop', description: '自然质朴触感 (SA296-S26)' },
  { id: 8, category: 'bath', name: '大理石语套装', price: '¥ 620', image: 'https://images.unsplash.com/photo-1534349762230-e0cadf78f505?item_type=marble-acc&q=80&w=800&auto=format&fit=crop', description: '古典石材纹样 (SA296-S30)' },
  { id: 9, category: 'accent', name: '白釉弦纹瓶', price: '¥ 2,100', image: 'https://images.unsplash.com/photo-1581783898377-1c85bf937427?q=80&w=800&auto=format&fit=crop', description: '静谧空间之眼' },
];

export default function Products() {
  const [activeCategory, setActiveCategory] = useState('bath');

  const filteredProducts = products.filter(p => p.category === activeCategory);

  return (
    <section id="products" className="py-24 bg-brand-secondary/30 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-serif mb-6"
          >
            作品集萃
          </motion.h2>
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="flex justify-center gap-10 mt-12 mb-8 overflow-x-auto pb-4 scrollbar-hide"
          >
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`text-sm uppercase tracking-[0.2em] whitespace-nowrap transition-all duration-300 relative pb-2 ${
                  activeCategory === cat.id ? 'text-brand-ink' : 'text-brand-ink/40'
                }`}
              >
                {cat.name}
                {activeCategory === cat.id && (
                  <motion.div 
                    layoutId="activeCategory"
                    className="absolute bottom-0 left-0 right-0 h-[1px] bg-brand-ink"
                  />
                )}
              </button>
            ))}
          </motion.div>
          <motion.p 
            key={activeCategory}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-brand-ink/60 font-light italic"
          >
            {categories.find(c => c.id === activeCategory)?.description}
          </motion.p>
        </div>

        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 bg-white border border-black/5"
        >
          {filteredProducts.map((product, index) => (
            <motion.div
              layout
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              key={product.id}
              className="group cursor-pointer p-8 md:p-10 border-b md:border-b-0 md:border-r border-black/5 last:border-r-0 hover:bg-neutral-50 transition-colors flex flex-col justify-between"
            >
              <div>
                <span className="font-serif text-[11px] opacity-30 block mb-6">0{index + 1}</span>
                <div className="relative aspect-square overflow-hidden mb-8 bg-[#F9F8F5]">
                  <img 
                    src={product.image} 
                    alt={product.name} 
                    className="w-full h-full object-cover grayscale-[30%] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000"
                    referrerPolicy="no-referrer"
                  />
                </div>
              </div>
              
              <div className="flex justify-between items-end">
                <div>
                  <h3 className="text-xl md:text-[20px] font-serif font-normal mb-2">{product.name}</h3>
                  <p className="text-[12px] text-brand-text-light tracking-wide">{product.description}</p>
                </div>
                <span className="font-serif text-sm text-brand-clay">{product.price}</span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
