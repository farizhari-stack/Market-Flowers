import { Star, Quote } from 'lucide-react';
import { motion } from 'motion/react';

const testimonials = [
  {
    id: 1,
    text: "The arrangement was absolutely breathtaking. Steffi's Blooms truly understands the language of flowers. It made our anniversary so much more special.",
    name: 'Michelle Koh',
    role: 'Corporate Director',
  },
  {
    id: 2,
    text: 'Steffi is a wonderful teacher. She simplified the spiraling technique so well that I finally felt confident arranging my own flowers at home. The studio atmosphere is magic!',
    name: 'Sarah M.',
    role: 'Workshop Student',
  },
  {
    id: 3,
    text: 'The attention to detail was unparalleled. Every centerpiece told a story, and the floral arch was the absolute highlight of our wedding ceremony.',
    name: 'Emily & David',
    role: 'Wedding Couple',
  },
];

export default function Testimonials() {
  return (
    <section className="py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="flex justify-center mb-4 text-brandGold">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-5 h-5 fill-current" />
            ))}
          </div>
          <h2 className="heading-serif text-4xl md:text-5xl">Stories from our Clients</h2>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div 
              key={testimonial.id} 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="bg-brandBeige p-8 relative"
            >
              <Quote className="w-10 h-10 text-brandPink opacity-20 absolute top-4 left-4" />
              <p className="text-sm text-gray-700 italic mb-8 relative z-10">"{testimonial.text}"</p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gray-200 rounded-full"></div>
                <div>
                  <p className="font-bold text-sm">{testimonial.name}</p>
                  <p className="text-[10px] uppercase tracking-widest text-brandGold">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
