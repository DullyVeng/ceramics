import { motion } from 'motion/react';

const steps = [
  { 
    id: '01', 
    title: '选土研磨', 
    desc: '甄选优质瓷泥，剔除杂质，历经千次捶打研磨，赋予陶土细腻而坚固的肌理。',
    img: 'https://images.unsplash.com/photo-1590422443831-297e596bb056?q=80&w=2070&auto=format&fit=crop'
  },
  { 
    id: '02', 
    title: '手工拉坯', 
    desc: '指尖与转盘的律动，将内心对形状的理解注入泥土。每一个弧度都不可复制。',
    img: 'https://images.unsplash.com/photo-1541571477755-e7019672f094?q=80&w=2037&auto=format&fit=crop'
  },
  { 
    id: '03', 
    title: '素烧施釉', 
    desc: '初入火窑固形，其后手工施釉。天然草木灰与矿物釉，待火的洗礼。',
    img: 'https://images.unsplash.com/photo-1589182397057-b82b719d300b?q=80&w=1974&auto=format&fit=crop'
  },
  { 
    id: '04', 
    title: '浴火重生', 
    desc: '1300度高温，柴窑古法烧制。烟火与釉色的偶发碰撞，成就独一无二的灵魂。',
    img: 'https://images.unsplash.com/photo-1565193998877-507945d836fd?q=80&w=2070&auto=format&fit=crop'
  },
];

export default function Craft() {
  return (
    <section id="craft" className="py-24 md:py-40 bg-brand-ink text-brand-bg px-6">
      <div className="max-w-7xl mx-auto">
        <div className="mb-24">
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-brand-accent text-sm uppercase tracking-[0.4em] mb-4 block"
          >
            The Process
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-serif max-w-2xl leading-tight"
          >
            以时间萃取匠心，<br />
            <span className="italic">成就温润如玉之质。</span>
          </motion.h2>
        </div>

        <div className="space-y-32">
          {steps.map((step, index) => (
            <div key={step.id} className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-12 md:gap-24 items-center`}>
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
                className="flex-1 w-full aspect-square md:aspect-video overflow-hidden"
              >
                <img 
                  src={step.img} 
                  alt={step.title} 
                  className="w-full h-full object-cover opacity-80"
                  referrerPolicy="no-referrer"
                />
              </motion.div>
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.2 }}
                className="flex-1"
              >
                <span className="text-5xl font-serif text-brand-accent/30 mb-6 block">{step.id}</span>
                <h3 className="text-3xl font-serif mb-6">{step.title}</h3>
                <p className="text-brand-bg/60 font-light leading-loose tracking-wider max-w-md">
                  {step.desc}
                </p>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
