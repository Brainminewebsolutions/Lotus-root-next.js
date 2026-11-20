'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

const DigitalTransformation = () => {
  const router = useRouter();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById('digital-transformation');
    if (element) {
      observer.observe(element);
    }

    return () => observer.disconnect();
  }, []);

  const scrollToContact = () => {
    router.push('/contact');
  };

  const starterFeatures = [
    'Professional Landing Page Website',
    'Premium Domain Name (.com/.co.uk)',
    'Fast & Secure Hosting (1 Year)',
    'Mobile-Responsive Design'
  ];

  const premiumFeatures = [
    'Professional Business Email Setup',
    'Complete Social Media Setup',
    'Search Engine Optimization',
  ];

  return (
    <section id="digital-transformation" className="pt-10 bg-gray-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-64 h-64 bg-pink-500/3 rounded-full animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-amber-500/3 rounded-full animate-pulse delay-1000"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Your Business Deserves to{' '}
            <span className="bg-gradient-to-r from-pink-500 to-amber-500 bg-clip-text text-transparent">Dominate Online</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-12">
            Ready to launch your digital empire? Our cutting-edge transformation packages are designed to catapult new businesses from day one.
          </p>
        </div>

        {/* Offers */}
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto mb-16">
          {/* Starter Package */}
          <div className={`p-8 bg-gray-800/50 backdrop-blur-sm rounded-2xl border border-gray-700/50 hover:border-pink-500/30 transition-all duration-500 transform hover:scale-105 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <div className="mb-6">
              <div className="inline-block bg-pink-500/10 text-pink-400 px-3 py-1 rounded-full text-xs font-semibold mb-3 border border-pink-500/20">DIGITAL STARTER</div>
              <h3 className="text-2xl font-bold text-white mb-2">Launch Your Online Empire</h3>
              <p className="text-gray-400">Get online fast with a professional presence that converts visitors into customers</p>
            </div>

            <div className="text-center bg-gray-700/50 rounded-xl p-6 mb-6">
              <div className="flex items-baseline justify-center mb-2">
                <span className="text-2xl font-semibold text-pink-400">£</span>
                <span className="text-5xl font-bold bg-gradient-to-r from-pink-500 to-amber-500 bg-clip-text text-transparent">399</span>
              </div>
              <div className="text-sm text-gray-400">One-time investment</div>
            </div>

            <div className="space-y-3 mb-6">
              {starterFeatures.map((feature) => (
                <div key={feature} className="flex items-center">
                  <div className="w-5 h-5 bg-pink-500 rounded-full flex items-center justify-center mr-3">
                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-gray-300 font-medium">{feature}</span>
                </div>
              ))}
            </div>

            <button 
              onClick={scrollToContact}
              className="w-full bg-gradient-to-r from-pink-500 to-amber-500 text-white py-4 rounded-full font-bold text-lg hover:scale-105 transition-transform shadow-lg hover:shadow-pink-500/25"
            >
              CONTACT US NOW →
            </button>
          </div>

          {/* Premium Package */}
          <div className={`p-8 bg-gray-800/50 backdrop-blur-sm rounded-2xl border border-pink-500/30 hover:border-pink-500/50 transition-all duration-500 transform hover:scale-105 relative ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`} style={{ transitionDelay: '200ms' }}>
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-pink-500 to-amber-500 text-white px-6 py-2 rounded-full text-sm font-bold animate-bounce">
              👑 MOST POPULAR
            </div>
            
            <div className="mb-6 mt-4">
              <div className="inline-block bg-pink-500/10 text-pink-400 px-3 py-1 rounded-full text-xs font-semibold mb-3 border border-pink-500/20">BUSINESS ACCELERATOR</div>
              <h3 className="text-2xl font-bold text-white mb-2">Complete Digital Domination</h3>
              <p className="text-gray-400">Everything you need to crush competitors and become the go-to choice in your industry</p>
            </div>

            <div className="text-center bg-gradient-to-r from-pink-500/10 to-amber-500/10 rounded-xl p-6 mb-6 border border-pink-500/20">
              <div className="flex items-baseline justify-center mb-2">
                <span className="text-2xl font-semibold text-pink-400">£</span>
                <span className="text-5xl font-bold bg-gradient-to-r from-pink-500 to-amber-500 bg-clip-text text-transparent">799</span>
              </div>
              <div className="text-sm text-gray-400 mb-2">Complete transformation package</div>
            </div>

            <div className="space-y-3 mb-6">
              <div className="text-sm font-semibold text-pink-400 uppercase tracking-wide mb-3">Everything in Digital Starter PLUS:</div>
              {premiumFeatures.map((feature) => (
                <div key={feature} className="flex items-center">
                  <div className="w-5 h-5 bg-amber-500 rounded-full flex items-center justify-center mr-3">
                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-gray-300 font-medium">{feature}</span>
                </div>
              ))}
            </div>

            <button 
              onClick={scrollToContact}
              className="w-full bg-gradient-to-r from-pink-500 to-amber-500 text-white py-4 rounded-full font-bold text-lg hover:scale-105 transition-transform shadow-lg hover:shadow-pink-500/25"
            >
              CONTACT US NOW 🚀
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DigitalTransformation;
