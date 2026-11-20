'use client';

import { useState, useEffect } from 'react';
import { Brain, Leaf, Eye } from 'lucide-react';

const OurExpertise = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  const expertise = [
    {
      id: 'ai-solutions',
      icon: Brain,
      title: 'AI driven Solutions',
      description: 'Intelligent automation and AI-powered solutions for construction & infra project optimization.',
      color: 'from-cyan-500 to-blue-500'
    },
    {
      id: 'sustainability',
      icon: Leaf,
      title: 'Sustainability Consulting',
      description: 'Energy modeling, ESG alignment, and green-building compliance that reduce operational costs.',
      color: 'from-green-500 to-emerald-500'
    },
    {
      id: 'visualization',
      icon: Eye,
      title: 'Digital Visualization & Branding',
      description: 'Photorealistic renders, walkthroughs, and interactive visuals that help market projects effectively.',
      color: 'from-purple-500 to-pink-500'
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById('our-expertise');
    if (element) {
      observer.observe(element);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % expertise.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [expertise.length]);

  return (
    <section id="our-expertise" className="py-20 bg-gray-800/30 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Our{' '}
            <span className="bg-gradient-to-r from-pink-500 to-amber-500 bg-clip-text text-transparent">
              Expertise
            </span>
          </h2>
        </div>

        {/* Desktop View - 3 Columns */}
        <div className="hidden lg:grid lg:grid-cols-3 gap-8">
          {expertise.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <div
                key={item.id}
                className={`group p-8 bg-gray-800/80 backdrop-blur-sm rounded-2xl border border-gray-700/50 hover:border-pink-500/50 hover:bg-gray-800/90 hover:scale-105 hover:shadow-2xl hover:shadow-pink-500/10 transition-all duration-500 cursor-pointer ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                <div className={`w-16 h-16 rounded-xl bg-gradient-to-r ${item.color} flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}>
                  <IconComponent className="text-white group-hover:scale-110 transition-transform duration-300" size={32} />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-pink-400 transition-colors duration-300">{item.title}</h3>
                <p className="text-gray-300 leading-relaxed group-hover:text-gray-200 transition-colors duration-300">{item.description}</p>
              </div>
            );
          })}
        </div>

        {/* Mobile/Tablet View - Carousel */}
        <div className="lg:hidden">
          <div className="relative overflow-hidden rounded-2xl">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${activeSlide * 100}%)` }}
            >
              {expertise.map((item) => {
                const IconComponent = item.icon;
                return (
                  <div key={item.id} className="w-full flex-shrink-0 px-4">
                    <div className="p-8 bg-gray-800/80 backdrop-blur-sm rounded-2xl border border-gray-700/50 text-center hover:border-pink-500/50 hover:bg-gray-800/90 transition-all duration-300">
                      <div className={`w-16 h-16 rounded-xl bg-gradient-to-r ${item.color} flex items-center justify-center mb-6 mx-auto animate-pulse`}>
                        <IconComponent className="text-white" size={32} />
                      </div>
                      <h3 className="text-2xl font-bold text-white mb-4">{item.title}</h3>
                      <p className="text-gray-300 leading-relaxed">{item.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Pagination Dots */}
          <div className="flex justify-center mt-8 space-x-2">
            {expertise.map((item, index) => (
              <button
                key={item.id}
                onClick={() => setActiveSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  activeSlide === index 
                    ? 'bg-gradient-to-r from-pink-500 to-amber-500' 
                    : 'bg-gray-600 hover:bg-gray-500'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurExpertise;
