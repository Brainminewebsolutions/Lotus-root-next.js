'use client';

import { Phone, MessageCircle, Mail } from 'lucide-react';
import { useRouter } from 'next/navigation';

const MobileFooter = () => {
  const router = useRouter();

  const handleCall = () => {
    globalThis.location.href = 'tel:+447833818001';
  };

  const handleWhatsApp = () => {
    window.open('https://wa.me/447833818001', '_blank');
  };

  const handleGetInTouch = () => {
    router.push('/contact');
  };

  return (
    <div className="lg:hidden fixed bottom-0 left-0 right-0 z-50 bg-gray-800/95 backdrop-blur-md rounded-t-3xl">
      <div className="flex items-center px-2 py-[4px]">
        <button
          onClick={handleCall}
          className="flex-1 flex flex-col items-center p-1 rounded-lg hover:bg-gray-700/50 transition-all duration-200 group"
        >
          <div className="p-1 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full group-hover:scale-110 transition-transform duration-200">
            <Phone className="text-white" size={14} />
          </div>
          <span className="text-xs text-gray-300 font-medium mt-0.5">Call</span>
        </button>

        <button
          onClick={handleGetInTouch}
          className="flex-1 flex flex-col items-center p-1 rounded-lg hover:bg-gray-700/50 transition-all duration-200 group"
        >
          <div className="p-1 bg-gradient-to-r from-pink-500 to-amber-500 rounded-full group-hover:scale-110 transition-transform duration-200">
            <Mail className="text-white" size={14} />
          </div>
          <span className="text-xs text-gray-300 font-medium mt-0.5">Get in Touch</span>
        </button>

        <button
          onClick={handleWhatsApp}
          className="flex-1 flex flex-col items-center p-1 rounded-lg hover:bg-gray-700/50 transition-all duration-200 group"
        >
          <div className="p-1 bg-gradient-to-r from-green-400 to-green-600 rounded-full group-hover:scale-110 transition-transform duration-200">
            <MessageCircle className="text-white" size={14} />
          </div>
          <span className="text-xs text-gray-300 font-medium mt-0.5">WhatsApp</span>
        </button>
      </div>
    </div>
  );
};

export default MobileFooter;
