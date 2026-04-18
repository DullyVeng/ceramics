import Navbar from './components/Navbar';
import Hero from './components/Hero';
import BrandStory from './components/BrandStory';
import Products from './components/Products';
import Craft from './components/Craft';
import Footer from './components/Footer';
import { motion, useScroll, useSpring } from 'motion/react';

export default function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="min-h-screen selection:bg-brand-accent selection:text-white">
      {/* Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-[1.5px] bg-brand-accent z-[60] origin-left"
        style={{ scaleX }}
      />
      
      <Navbar />
      
      <main>
        <Hero />
        <BrandStory />
        <Products />
        <Craft />
      </main>
      
      <Footer />

      {/* Aesthetic floating decoration */}
      <div className="fixed bottom-10 right-10 z-40 hidden lg:block">
        <div className="flex flex-col items-center gap-8">
          <div className="w-[1px] h-24 bg-brand-ink/10" />
          <span className="vertical-text text-[10px] uppercase tracking-[0.4em] text-brand-ink/30 italic">
            Art of Clay & Fire
          </span>
        </div>
      </div>
    </div>
  );
}
