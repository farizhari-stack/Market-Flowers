import { Check } from 'lucide-react';
import { motion } from 'motion/react';

export default function Corporate() {
  return (
    <section className="py-24 bg-brandCharcoal text-white" id="corporate">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <img
              alt="Corporate Floral Solutions"
              className="w-full h-[600px] object-cover shadow-2xl"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuABF8im3wpK6FRRmQZT42bMLeb2aE90VKK27ZPpfz-jUTRL8qlUYnk70sokfrzKYHGvZt-UV9CckadHzYkFFicyyusmqPpOljlvv4hAhIFYHE3bg990c8Bj1vuhApO3QFKZDo3eKR1LnmLV8mGsWqKvV6EFdGaBfipikoQeGMos0_DysVlYmEfDtuDnSVdX9i_v6Wu-YWZgEkevwpvtcEVHQrzSUo7lbcXKm0PvXYninBLP0Y8ItxddagbmOBBwiqvR5fKSHgM58dJ5"
            />
            <div className="absolute -bottom-10 -right-10 bg-brandGold p-8 max-w-xs hidden md:block">
              <p className="italic-serif text-lg mb-4 leading-snug">
                "The most professional floral partner we've worked with in a decade."
              </p>
              <p className="uppercase tracking-widest text-[10px] font-bold">— Luxury Hotel Group</p>
            </div>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            <div>
              <p className="uppercase tracking-widest text-xs text-brandGold font-bold mb-4">
                Professional Floral Solutions
              </p>
              <h2 className="heading-serif text-4xl md:text-5xl mb-6">Elevate Your Corporate Presence</h2>
              <p className="text-gray-300 leading-relaxed text-lg">
                We provide a seamless, white-glove experience for business clients who demand perfection, from majestic
                grand openings to weekly concierge office blooms.
              </p>
            </div>
            <ul className="space-y-6">
              <li className="flex items-start gap-4">
                <div className="mt-1 bg-brandPink/20 p-2 rounded-full">
                  <Check className="w-4 h-4 text-brandPink" />
                </div>
                <div>
                  <h4 className="font-bold mb-1">Unmatched Reliability</h4>
                  <p className="text-sm text-gray-400">
                    Punctual delivery and consistent quality. We respect your corporate timelines and high standards.
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <div className="mt-1 bg-brandPink/20 p-2 rounded-full">
                  <Check className="w-4 h-4 text-brandPink" />
                </div>
                <div>
                  <h4 className="font-bold mb-1">Bespoke Branding</h4>
                  <p className="text-sm text-gray-400">
                    Every arrangement is customized to align with your brand's color palette, values, and aesthetic
                    guidelines.
                  </p>
                </div>
              </li>
            </ul>
            <div className="pt-8">
              <button className="bg-brandPink text-white px-10 py-4 font-semibold uppercase tracking-widest text-xs hover:bg-brandPink/90 transition">
                Request Quote via WhatsApp
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
