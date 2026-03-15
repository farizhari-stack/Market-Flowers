/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Collections from './components/Collections';
import Weddings from './components/Weddings';
import Corporate from './components/Corporate';
import Workshops from './components/Workshops';
import Philosophy from './components/Philosophy';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import FloatingContact from './components/FloatingContact';

export default function App() {
  return (
    <div className="bg-white text-brandCharcoal font-sans">
      <Navbar />
      <Hero />
      <Collections />
      <Weddings />
      <Corporate />
      <Workshops />
      <Philosophy />
      <Testimonials />
      <Footer />
      <FloatingContact />
    </div>
  );
}
