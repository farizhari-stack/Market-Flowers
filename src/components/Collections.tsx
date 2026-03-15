import { MessageCircle } from 'lucide-react';
import { motion } from 'motion/react';

const collections = [
  {
    id: 1,
    title: 'Classic Rose Blush',
    description: 'Signature pink roses in editorial wrap',
    price: '$88.00',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBH5vhb7u4-7yfKrK2HPaEpuALbog8U3MnZ4H_kLB_Fxl5EwrnGTv542oXFZRBCOYUfLus-zIM6LFIh_jI7ysdQalzTA-O2yw-VGUyQRxyY_bD9iYUTrk2BccK86edwGJPJPiQUlP3aQpWpy3V8B1fVhDXKUzVkzjQwkkveBqFHJMj4ynpf0LTHJ4r70VjEk3ThP055RY1UkH0j0_RGSDow-IvszNCZ0oRa-IpK7RfdLSJ-AxuyTK9CEtcibjVv0P87hRzNXmVoRTb3',
    badge: 'Best Seller',
    badgeColor: 'bg-brandPink',
  },
  {
    id: 2,
    title: 'Spring Tulip Selection',
    description: 'Fresh pastel tulips with eucalyptus',
    price: '$75.00',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBOoAFizmvKC5HegBzCzJdbCnH7E1PpYQAi0b1LDHMEKdN-WLOyCv_No41hmTmCXB9g1iXwyLjW1JKik7PFjYSWwM-CXCfjdQfnYlaurVbN1pyFHawIJojpJqoZ1d94vcszKfnlRFmw_SoTUEgZIOhoh3FYHcqtQa4eEd5lQ-CVLdkee7k1ST5ZtVWhJ2S_I0yQWmhHSIgne-OeetgFDCUp4DbAb66cMr-d4wBDeLXivM7A1KlrtW-5wXDENGuM6oQkFf0UYOOxrmUk',
  },
  {
    id: 3,
    title: 'Velvet Luxury Box',
    description: 'Signature suede box with premium roses',
    price: '$125.00',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDvoiJSQKphJtJnL5xhPygocKSZo0yIc8i_qPuPuo_tx9C7GYzoI0S4GdxVDlvL8Hu-JPBoukfNeG6eGOtxAPcMoA9EeJ7StpGzPyjyrSm8njM7GJeHj9wUbH4_9AFGQ5C8IgcJXJqHA7tLr9aeD7dMcC2ntlKyHFSvNaPQX6RVHwlO-Xp-f5ivdaOjILpKtYiIzr8RzUsQc9o3jERjeRYkTaZtrIFok9JQLJxg22F-OUuDQpOuS3bPX8oozFLp-AlCE4d12qiIZF8m',
    badge: 'Premium',
    badgeColor: 'bg-brandGold',
  },
];

export default function Collections() {
  return (
    <section className="py-24 bg-brandBeige" id="collections">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex flex-col md:flex-row justify-between items-end mb-12"
        >
          <div>
            <p className="uppercase tracking-widest text-xs text-brandGold font-bold mb-2">Exquisite Floral Artistry</p>
            <h2 className="heading-serif text-4xl md:text-5xl">
              Our Floral <span className="italic text-brandPink">Collection</span>
            </h2>
          </div>
          <a
            className="flex items-center gap-2 text-xs uppercase tracking-[0.2em] font-bold border-b-2 border-[#25D366] pb-1 hover:text-[#25D366] text-[#25D366] transition mt-4 md:mt-0"
            href="https://wa.me/6281234567890" target="_blank" rel="noopener noreferrer"
          >
            <MessageCircle className="w-4 h-4" />
            Consultasi via Whatsapp
          </a>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {collections.map((item, index) => (
            <motion.div 
              key={item.id} 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="group cursor-pointer"
            >
              <div className="relative overflow-hidden aspect-4/5 mb-6 shadow-sm">
                <img
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-700"
                  src={item.image}
                />
                {item.badge && (
                  <span
                    className={`absolute top-4 left-4 ${item.badgeColor} text-white text-[10px] uppercase tracking-widest px-3 py-1`}
                  >
                    {item.badge}
                  </span>
                )}
              </div>
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="heading-serif text-xl mb-1">{item.title}</h3>
                  <p className="text-xs text-gray-500 italic">{item.description}</p>
                </div>
                <p className="font-semibold text-brandPink">{item.price}</p>
              </div>
              <button className="mt-4 w-full py-3 border border-brandPink/30 text-xs uppercase tracking-widest font-bold text-brandPink hover:bg-brandPink hover:text-white transition flex items-center justify-center gap-2">
                <MessageCircle className="w-3 h-3" />
                WhatsApp Order
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
