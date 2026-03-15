import { MessageCircle } from 'lucide-react';

export default function FloatingContact() {
  return (
    <a
      className="floating-whatsapp bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:shadow-green-500/20"
      href="https://wa.me/6590286299"
      target="_blank"
      rel="noreferrer"
    >
      <MessageCircle className="w-6 h-6" />
    </a>
  );
}
