'use client';

import { useRouter } from 'next/navigation';
import { Calendar, FileText, ArrowRight } from 'lucide-react';

const CTAContactStrip = () => {
  const router = useRouter();

  const scrollToContact = () => {
    router.push('/contact');
  };

  return (
    <section className="py-16 bg-gradient-to-r from-pink-500/10 to-amber-500/10 border-t border-pink-500/20">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-4xl mx-auto">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Discover how we can support your{' '}
            <span className="bg-gradient-to-r from-pink-500 to-amber-500 bg-clip-text text-transparent">
              next project
            </span>
          </h2>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={scrollToContact}
              className="bg-gradient-to-r from-pink-500 to-amber-500 text-white px-8 py-4 rounded-full font-semibold hover:shadow-lg hover:shadow-pink-500/25 transition-all duration-300 flex items-center justify-center group"
            >
              <Calendar className="mr-2" size={20} />
              Schedule a Call
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform duration-200" size={20} />
            </button>
            <button 
              onClick={scrollToContact}
              className="border border-gray-600 text-white px-8 py-4 rounded-full font-semibold hover:border-pink-500 hover:text-pink-400 transition-all duration-300 flex items-center justify-center group"
            >
              <FileText className="mr-2" size={20} />
              Request Work Samples
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform duration-200" size={20} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTAContactStrip;
