import { motion } from 'motion/react';

const workshops = [
  {
    id: 1,
    date: 'Feb 14 • 2:00 PM',
    title: 'Hand-tied Bouquet Masterclass',
    price: '$120',
    description: 'Learn the spiraling technique to create a lush, professional garden-style bouquet. Includes all premium flowers.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCjrLkmbsvFMY0p08Qu3-97UsyGwJS3WTywdFLzDs-DDBMxJKIk-tKmaoGlu7KZwKXByLsXXPkmQbPL685gLVXkJerhniJQEuOJ_ZnmdVXdzpws41qCYU-82KTkZdDu72T6OpP6I-f0iAx9phUrzQpdS37OgRr_Rz6jXF6BPelJ0baom60N7H6K2GSHJZAAjTW5HMPStTsOewkay9Mo2IyWcisdQ_MivWYAoxUk1RIrHXBcmiL-tpquO9ZB0JNzUkOQak2vk_T-sSSu',
  },
  {
    id: 2,
    date: 'Mar 05 • 10:00 AM',
    title: 'Wedding Floral Design',
    price: '$250',
    description: 'An intensive workshop focusing on bridal personals: bouquets, boutonnieres, and delicate flower crowns.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBqGNsTqExl__bXIvDuLGYPw5hHmn7yc4X9qgwXuVIo_H9wZ_ciVaOQ96uZHVd2eq5_o7gq2lB-kv17RI-HC8BF5TjEfcSY2tiHIpELAx3KerCBZcxKB0Wnn7qdi0gKdHHfVIx9eFbd4PfDlXGAlFGIZSp36T-lIjbpm57GbaBrpt5YP-DPHkksl0yoi2F9-dn3wkZrDgHRLXUYxL7-UPrjnMSax2rwpXeW3d9pVsOk4iIXzquM63EDFjMzWxjWG1jVWTLJrlgrZVSs',
  },
  {
    id: 3,
    date: 'Mar 22 • 6:00 PM',
    title: 'Seasonal Table Centerpieces',
    price: '$145',
    description: 'Create low, conversation-friendly centerpieces using sustainable foam-free mechanics and architectural branches.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDnmYu4-ndF8mftkGp9ZqL2TuqOo6ejuzrxEudure_g7Emwih4Dw_om2cDU_n6Lfj-Mw5J7ydtYgwyhevhTxI300zTcurAutW7n9wpdI558BtSqhrMPREKtMAZZIidfIZKyr285Lle7tj18AlvlHCindmmh2fLt6Q_XcxLQ2SLu2PlIDrb52c5yS2qGKkN1vplbZpkk20nD4jppgRn2bBqJCK1rFGlpuRodys3ACGtqYqwVsAqwXvy9umgjlMnZKtd2CDsB_2frnOo1',
  },
];

export default function Workshops() {
  return (
    <section className="py-24" id="workshops">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex flex-col md:flex-row justify-between items-center mb-16 gap-8 text-center md:text-left"
        >
          <div>
            <p className="uppercase tracking-widest text-xs text-brandGold font-bold mb-4">Artisan Education</p>
            <h2 className="heading-serif text-4xl md:text-5xl">
              Master the Art of <span className="italic text-brandPink">Floristry</span>
            </h2>
          </div>
          <div className="flex gap-4">
            <button className="bg-brandPink/10 text-brandPink px-6 py-3 font-bold uppercase tracking-widest text-[10px] hover:bg-brandPink hover:text-white transition">
              View Classes
            </button>
            <button className="border border-brandCharcoal/10 text-brandCharcoal px-6 py-3 font-bold uppercase tracking-widest text-[10px] hover:bg-brandCharcoal hover:text-white transition">
              Our Philosophy
            </button>
          </div>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {workshops.map((workshop, index) => (
            <motion.div 
              key={workshop.id} 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="bg-white border border-brandBeige group"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  alt={workshop.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
                  src={workshop.image}
                />
                <div className="absolute top-4 left-4 bg-white/90 px-3 py-1 text-[10px] font-bold uppercase tracking-widest">
                  {workshop.date}
                </div>
              </div>
              <div className="p-8">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="heading-serif text-xl">{workshop.title}</h3>
                  <span className="font-bold text-brandPink">{workshop.price}</span>
                </div>
                <p className="text-sm text-gray-600 mb-8 leading-relaxed">{workshop.description}</p>
                <button className="w-full py-3 bg-brandCharcoal text-white text-[10px] uppercase tracking-widest font-bold hover:bg-brandPink transition">
                  Book via WhatsApp
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
