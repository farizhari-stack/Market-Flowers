import { Menu, MessageCircle } from 'lucide-react';
import { motion } from 'motion/react';

export default function Navbar() {
  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="fixed top-0 w-full bg-white/90 backdrop-blur-sm z-50 border-b border-brandBeige"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="shrink-0 flex items-center gap-2">
            <img src="/logo.png" alt="Stefii's Store Logo" className="w-10 h-10 object-contain" />
            <span className="heading-serif text-2xl font-bold tracking-tighter">
              Stefii's <span className="italic text-brandPink font-medium">Store</span>
            </span>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8 uppercase text-xs tracking-widest font-semibold">
              <a className="hover:text-brandPink transition" href="#">Home</a>
              <a className="hover:text-brandPink transition" href="#collections">Shop</a>
              <a className="hover:text-brandPink transition" href="#weddings">Weddings</a>
              <a className="hover:text-brandPink transition" href="#corporate">Corporate</a>
              <a className="hover:text-brandPink transition" href="#workshops">Workshops</a>
              <a className="hover:text-brandPink transition" href="#our-story">About</a>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <a 
              href="https://wa.me/6281234567890" target="_blank" rel="noopener noreferrer"
              className="hidden md:flex items-center gap-2 bg-[#25D366] text-white px-5 py-2.5 font-bold uppercase tracking-widest text-[10px] hover:bg-[#1DA851] transition"
            >
              <MessageCircle className="w-4 h-4" />
              Order WhatsApp
            </a>
            <button className="p-2 md:hidden">
              <Menu className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </motion.nav>
  );
}
