import { motion } from 'motion/react';
import { useLanguage } from '../context/LanguageContext';

import imgCraft01 from '../assets/images/craft_01.png';
import imgCraft02 from '../assets/images/craft_02.png';
import imgCraft03 from '../assets/images/craft_03.png';
import imgCraft04 from '../assets/images/craft_04.png';

export default function Craft() {
  const { t } = useLanguage();

  const steps = [
    { 
      id: t.craft.steps[0].id, 
      title: t.craft.steps[0].title, 
      desc: t.craft.steps[0].desc,
      img: imgCraft01
    },
    { 
      id: t.craft.steps[1].id, 
      title: t.craft.steps[1].title, 
      desc: t.craft.steps[1].desc,
      img: imgCraft02
    },
    { 
      id: t.craft.steps[2].id, 
      title: t.craft.steps[2].title, 
      desc: t.craft.steps[2].desc,
      img: imgCraft03
    },
    { 
      id: t.craft.steps[3].id, 
      title: t.craft.steps[3].title, 
      desc: t.craft.steps[3].desc,
      img: imgCraft04
    },
  ];

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
            {t.craft.process}
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-serif max-w-2xl leading-tight"
          >
            {t.craft.title1}<br />
            <span className="italic">{t.craft.title2}</span>
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
