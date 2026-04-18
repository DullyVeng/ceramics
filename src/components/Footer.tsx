import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Instagram, Youtube, Facebook } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer id="footer" className="h-[68px] flex items-center justify-between px-10 md:px-[60px] bg-brand-bg text-[11px] text-brand-text-light border-t border-black/5">
      <div className="flex items-center">
        <span className="w-2 h-2 rounded-full bg-brand-clay mr-3" />
        <span className="hidden sm:inline">{t.footer.store}</span>{t.footer.address}
      </div>
      <div className="hidden lg:block uppercase tracking-wider">
        {t.footer.copyright}
      </div>
      <div className="font-light">
        {t.footer.slogan}
      </div>
    </footer>
  );
}
