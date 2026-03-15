import { MessageCircle } from 'lucide-react';
import { motion } from 'motion/react';

export default function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden pt-20" id="hero">
      <div className="absolute inset-0 z-0">
        <img
          alt="Luxury Floral Hero"
          className="w-full h-full object-cover"
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuCq3WLv3Vpd5FDfdjrCRbwPZ7hrwsFC0sqBz1HFohDqRGqoYexNcUAVFn0s03Y_RAmAIAvxX-FGCw8TLE1JF7xkNrvjCAHIdcREwTX0vqsNDBqupjnG0llKZARaFkIb3AwUtIBaTV-ucBBXS2P5QwRDSLPJuYBZFjwc25QaHfS7Chb-H1La7THPvc5-HFmYFoJF7oCvnNuQR-pDGFOdUSf0FWjcTXYJ18SgomnJUiW0s1oZfNg3KPu60PayCqMr7I-GdNTR2V-hgxDY"
        />
        <div className="absolute inset-0 bg-black/20"></div>
      </div>
      <div className="relative z-10 text-center text-white px-4">
        <motion.p 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="uppercase tracking-[0.3em] text-sm mb-4 font-light"
        >
          Singapore's Premier Boutique Florist
        </motion.p>
        <motion.h1 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="heading-serif text-5xl md:text-8xl mb-8 leading-tight"
        >
          Luxury Floral <br />
          <span className="italic-serif text-brandPink">Arrangements</span>
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="max-w-xl mx-auto mb-10 text-lg font-light opacity-90"
        >
          Handcrafted bouquets, wedding flowers, and bespoke floral arrangements designed with elegance and care.
        </motion.p>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a
            className="bg-brandPink text-white px-10 py-4 font-semibold uppercase tracking-widest text-xs hover:bg-brandPink/90 transition duration-300"
            href="#collections"
          >
            Shop Collection
          </a>
          <a
            className="bg-white text-brandCharcoal px-10 py-4 font-semibold uppercase tracking-widest text-xs hover:bg-brandBeige transition duration-300 flex items-center justify-center gap-2"
            href="https://wa.me/6281234567890" target="_blank" rel="noopener noreferrer"
          >
            <MessageCircle className="w-4 h-4" />
            Order via WhatsApp
          </a>
        </motion.div>
      </div>
    </section>
  );
}
