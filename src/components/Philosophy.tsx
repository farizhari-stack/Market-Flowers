import { Leaf, Heart, RefreshCw } from 'lucide-react';
import { motion } from 'motion/react';

export default function Philosophy() {
  return (
    <section className="py-24 bg-brandBeige" id="our-story">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <p className="uppercase tracking-widest text-xs text-brandGold font-bold mb-4">The Brand Heart</p>
          <h2 className="heading-serif text-4xl md:text-6xl italic text-brandCharcoal mb-8">Our Philosophy</h2>
          <div className="w-24 h-1 bg-brandPink mx-auto mb-12"></div>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-20">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="space-y-4"
          >
            <div className="mx-auto w-12 h-12 flex items-center justify-center bg-white rounded-full text-brandPink">
              <Leaf className="w-6 h-6" />
            </div>
            <h3 className="heading-serif text-xl font-bold">Artistry</h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              Sculpting nature into evocative floral experiences that capture the essence of your unique story.
            </p>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="space-y-4"
          >
            <div className="mx-auto w-12 h-12 flex items-center justify-center bg-white rounded-full text-brandPink">
              <Heart className="w-6 h-6" />
            </div>
            <h3 className="heading-serif text-xl font-bold">Quality</h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              Sourcing only the rarest, most vibrant seasonal blooms from world-class sustainable growers.
            </p>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="space-y-4"
          >
            <div className="mx-auto w-12 h-12 flex items-center justify-center bg-white rounded-full text-brandPink">
              <RefreshCw className="w-6 h-6" />
            </div>
            <h3 className="heading-serif text-xl font-bold">Sustainability</h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              Mindful practices that honor the earth's delicate beauty, from compostable wraps to eco-friendly mechanics.
            </p>
          </motion.div>
        </div>
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-white p-12 shadow-sm flex flex-col md:flex-row items-center gap-12 text-left"
        >
          <img
            alt="Steffi Founder"
            className="w-64 h-80 object-cover shadow-lg"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBC2QefODMIbNtvLyO_eiFxNJ1_fqIRQsAexn5tcjU2GnSXJfpzEscd9nho7uAooummYkAeTZcfJdcpIPIhJM1q1MvfP4H2VJka5PjrJ0YJwoGwHlYZRvn98G_dmspk5hdw-Z4cMcRghFbTGtEpU9MC3yInomg7WymalB5Q0ZkseJrkxen6iN9CRlTry4uLgxuqJEsiSoAYfG5ZWug0byrKHLZxpetAu7u7WmWu87x8B0WcBVlaZWFUD-67QuIRqnq0Kh-6FpaJ5sgq"
          />
          <div>
            <h3 className="heading-serif text-3xl mb-4">The Art of Storytelling Through Flowers</h3>
            <p className="text-gray-600 mb-6 leading-relaxed italic">
              "Steffi's passion for floristry transcends mere arrangement; it is an intimate dialogue between the hand and
              the bloom. Every bouquet is a curated masterpiece, reflecting a lifelong dedication to the art of floral
              storytelling."
            </p>
            <p className="uppercase tracking-widest text-xs font-bold text-brandCharcoal">
              — Steffi, Lead Florist & Founder
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
