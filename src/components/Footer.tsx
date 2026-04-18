import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Instagram, Youtube, Facebook } from 'lucide-react';

export default function Footer() {
  return (
    <footer id="footer" className="h-[68px] flex items-center justify-between px-10 md:px-[60px] bg-brand-bg text-[11px] text-brand-text-light border-t border-black/5">
      <div className="flex items-center">
        <span className="w-2 h-2 rounded-full bg-brand-clay mr-3" />
        <span className="hidden sm:inline">寻访门店：</span>上海市静安区延安西路 88 号
      </div>
      <div className="hidden lg:block uppercase tracking-wider">
        &copy; 2026 CíYì CERAMICS. ALL RIGHTS RESERVED.
      </div>
      <div className="font-light">
        文化传承 · 手作匠心
      </div>
    </footer>
  );
}
