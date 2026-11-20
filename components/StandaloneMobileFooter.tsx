'use client';

import { Phone, MessageCircle } from 'lucide-react';

const StandaloneMobileFooter = () => {
  const handleCall = () => {
    globalThis.location.href = 'tel:+447833818001';
  };

  const handleWhatsApp = () => {
    window.open('https://wa.me/447833818001', '_blank');
  };

  return (
    <div className="lg:hidden fixed bottom-0 left-0 right-0 z-[100] bg-gray-800/95 backdrop-blur-md rounded-t-2xl shadow-[0_-4px_20px_rgba(0,0,0,0.5)]">
      <div className="flex items-center justify-between px-2 py-1.5 gap-2">
        <button
          onClick={handleCall}
          className="flex-1 flex flex-col items-center p-1 rounded-lg hover:bg-gray-700/50 transition-all duration-200 group"
        >
          <div className="p-2 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full group-hover:scale-110 transition-transform duration-200 mb-0.5">
            <Phone className="text-white" size={16} />
          </div>
          <span className="text-[10px] text-gray-200 font-bold tracking-widest uppercase">Call Us</span>
        </button>

        <div className="w-px h-8 bg-gray-600/50 rounded-full"></div>

        <button
          onClick={handleWhatsApp}
          className="flex-1 flex flex-col items-center p-1 rounded-lg hover:bg-gray-700/50 transition-all duration-200 group"
        >
          <div className="p-2 bg-gradient-to-r from-green-400 to-green-600 rounded-full group-hover:scale-110 transition-transform duration-200 mb-0.5">
            <MessageCircle className="text-white" size={16} />
          </div>
          <span className="text-[10px] text-gray-200 font-bold tracking-widest uppercase">WhatsApp</span>
        </button>
      </div>
    </div>
  );
};

export default StandaloneMobileFooter;
