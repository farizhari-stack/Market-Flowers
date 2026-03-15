import { Facebook, Instagram, Twitter, MapPin, Phone, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-brandCharcoal text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-1">
            <span className="heading-serif text-2xl font-bold tracking-tighter block mb-6">
              Stefii's <span className="italic text-brandPink font-medium">Store</span>
            </span>
            <p className="text-sm text-gray-400 leading-relaxed mb-6">
              Artisan floral design based in Singapore, specializing in boutique bouquets, weddings, and corporate styling.
            </p>
            <div className="flex space-x-4">
              <a className="text-white hover:text-brandPink transition" href="#">
                <Instagram className="w-5 h-5" />
              </a>
              <a className="text-white hover:text-brandPink transition" href="#">
                <Facebook className="w-5 h-5" />
              </a>
              <a className="text-white hover:text-brandPink transition" href="#">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>
          <div>
            <h4 className="font-bold uppercase tracking-widest text-xs mb-6">Quick Links</h4>
            <ul className="space-y-4 text-sm text-gray-400">
              <li><a className="hover:text-brandPink transition" href="#">Our Story</a></li>
              <li><a className="hover:text-brandPink transition" href="#">Floral Collections</a></li>
              <li><a className="hover:text-brandPink transition" href="#">Wedding Packages</a></li>
              <li><a className="hover:text-brandPink transition" href="#">Corporate Solutions</a></li>
              <li><a className="hover:text-brandPink transition" href="#">Workshops</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold uppercase tracking-widest text-xs mb-6">The Boutique</h4>
            <ul className="space-y-4 text-sm text-gray-400">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-brandPink shrink-0" />
                <span>22 Sin Ming Ln, #04-75 Midview City, Singapore 573969</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-brandPink shrink-0" />
                <span>+65 9028 6299</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-brandPink shrink-0" />
                <span>hello@stefiiblooms.com.sg</span>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold uppercase tracking-widest text-xs mb-6">Join Our Newsletter</h4>
            <p className="text-xs text-gray-400 mb-6">
              Be the first to hear about seasonal blooms and exclusive workshops.
            </p>
            <form className="space-y-3">
              <input
                className="w-full bg-white/5 border-white/10 text-white text-xs px-4 py-3 focus:ring-brandPink focus:border-brandPink"
                placeholder="Your email address"
                type="email"
              />
              <button className="w-full bg-brandPink text-white text-[10px] uppercase tracking-widest font-bold py-3 hover:bg-brandPink/90 transition">
                Subscribe Now
              </button>
            </form>
          </div>
        </div>
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-[10px] uppercase tracking-widest text-gray-500 gap-4">
          <p>© 2024 Stefii's Store Pte Ltd. All Rights Reserved.</p>
          <div className="flex space-x-8">
            <a className="hover:text-white transition" href="#">Privacy Policy</a>
            <a className="hover:text-white transition" href="#">Terms & Conditions</a>
            <a className="hover:text-white transition" href="#">Shipping & Returns</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
