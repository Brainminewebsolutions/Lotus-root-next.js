'use client';

import React, { useState, useEffect, useRef } from 'react';
import { Search, Lightbulb, Cog, TrendingUp, CheckCircle } from 'lucide-react';

const SolutionsJourney = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [activeMobileStep, setActiveMobileStep] = useState(0);
  const mobileRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById('solutions-journey');
      if (!element) return;

      const rect = element.getBoundingClientRect();
      const windowHeight = globalThis.innerHeight;
      
      if (rect.top <= 0 && rect.bottom > windowHeight) {
        const progress = Math.abs(rect.top) / (rect.height - windowHeight);
        const step = Math.min(Math.floor(progress * 4.5), 3);
        setActiveStep(step);
      } else if (rect.top > 0) {
        setActiveStep(0);
      }
    };

    // Only add scroll listener for desktop
    if (globalThis.innerWidth >= 1024) {
      globalThis.addEventListener('scroll', handleScroll, { passive: true });
    }
    
    return () => globalThis.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = mobileRefs.current.findIndex(ref => ref === entry.target);
            if (index !== -1) {
              setActiveMobileStep(index);
            }
          }
        });
      },
      { threshold: 0.5 }
    );

    mobileRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  const journeySteps = [
    {
      id: 'discovery',
      icon: Search,
      title: 'Discovery & Strategy',
      subtitle: 'Understanding Your Vision',
      description: 'We dive deep into your business requirements, challenges, and goals to create a comprehensive transformation roadmap.',
      details: [
        'Business requirement analysis',
        'Current system assessment',
        'Stakeholder consultation',
        'Strategic roadmap development'
      ],
      color: 'from-cyan-500 to-blue-500',
      bgColor: 'bg-cyan-500/10',
      borderColor: 'border-cyan-500/30'
    },
    {
      id: 'design',
      icon: Lightbulb,
      title: 'Solution Design',
      subtitle: 'Comprehensive Planning',
      description: 'Our experts design integrated solutions that address all aspects of your AEC transformation needs.',
      details: [
        'Architecture & system design',
        'Technology stack selection',
        'Integration planning',
        'Risk assessment & mitigation'
      ],
      color: 'from-pink-500 to-rose-500',
      bgColor: 'bg-pink-500/10',
      borderColor: 'border-pink-500/30'
    },
    {
      id: 'implementation',
      icon: Cog,
      title: 'Implementation',
      subtitle: 'Full Delivery Excellence',
      description: 'We handle every aspect of implementation, from development to deployment, ensuring seamless integration.',
      details: [
        'End-to-end development',
        'System integration',
        'Testing & quality assurance',
        'Deployment & go-live support'
      ],
      color: 'from-amber-500 to-orange-500',
      bgColor: 'bg-amber-500/10',
      borderColor: 'border-amber-500/30'
    },
    {
      id: 'support',
      icon: TrendingUp,
      title: 'Support & Growth',
      subtitle: 'Ongoing Partnership',
      description: 'Our relationship continues beyond delivery with ongoing support, optimization, and strategic guidance.',
      details: [
        'Continuous monitoring',
        'Performance optimization',
        'Feature enhancements',
        'Strategic consulting'
      ],
      color: 'from-green-500 to-emerald-500',
      bgColor: 'bg-green-500/10',
      borderColor: 'border-green-500/30'
    }
  ];

  return (
    <>
      {/* Desktop View */}
      <section id="solutions-journey" className="hidden lg:block h-[200vh] bg-gray-800/50 relative">
        <div className="absolute inset-0 opacity-5">
          <svg width="100%" height="100%" className="w-full h-full">
            <defs>
              <pattern id="journey-pattern" x="0" y="0" width="80" height="80" patternUnits="userSpaceOnUse">
                <path d="M0 40h80M40 0v80" stroke="currentColor" strokeWidth="0.5" className="text-pink-400"/>
                <circle cx="40" cy="40" r="2" fill="currentColor" className="text-cyan-400"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#journey-pattern)"/>
          </svg>
        </div>

        <div className="sticky top-0 h-screen flex items-start justify-center pt-[90px]">
          <div className="w-full max-w-7xl mx-auto px-8">
            <div className="text-center mb-6">
              <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
                Your Complete{' '}
                <span className="bg-gradient-to-r from-pink-500 to-amber-500 bg-clip-text text-transparent">
                  Transformation Journey
                </span>
              </h2>
              <p className="text-lg text-gray-300 max-w-3xl mx-auto">
                From initial consultation to ongoing success, we handle every aspect of your AEC transformation.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 items-start">
              {/* Left Side - Steps */}
              <div className="space-y-4">
                {journeySteps.map((step, index) => {
                  const IconComponent = step.icon;
                  const isActive = activeStep === index;
                  
                  return (
                    <div key={step.id} className="relative">
                      <div className={`relative flex items-start space-x-4 p-6 rounded-2xl transition-all duration-500 ${
                        isActive 
                          ? 'bg-gradient-to-r from-gray-800/90 to-gray-700/80 border-2 border-pink-500/50 shadow-lg shadow-pink-500/10' 
                          : 'bg-gray-800/40 border border-gray-700/30'
                      }`}>
                        <div className={`p-3 rounded-xl bg-gradient-to-r ${step.color} flex-shrink-0 transition-all duration-300 ${
                          isActive ? 'scale-110 shadow-lg' : ''
                        }`}>
                          <IconComponent className="text-white" size={24} />
                        </div>
                        
                        <div className="flex-1">
                          <div className="flex items-center space-x-2 mb-1">
                            <span className="w-6 h-6 bg-gray-700 rounded-full flex items-center justify-center text-xs font-bold text-white">
                              {index + 1}
                            </span>
                            <h3 className={`text-lg font-bold transition-colors duration-300 ${
                              isActive ? 'text-white' : 'text-gray-400'
                            }`}>{step.title}</h3>
                          </div>
                          <p className={`text-sm transition-colors duration-300 ${
                            isActive ? 'text-pink-400' : 'text-gray-500'
                          }`}>{step.subtitle}</p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Right Side - Fixed Height Description */}
              <div className="lg:pl-8">
                <div className="bg-gray-800/80 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50 h-[450px] transition-all duration-500">
                  <div className="text-center mb-6">
                    <div className={`w-16 h-16 mx-auto rounded-full bg-gradient-to-r ${journeySteps[activeStep].color} flex items-center justify-center shadow-2xl mb-4`}>
                      {React.createElement(journeySteps[activeStep].icon, { className: "text-white", size: 24 })}
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-4">{journeySteps[activeStep].title}</h3>
                    <p className="text-pink-400 font-medium">{journeySteps[activeStep].subtitle}</p>
                  </div>
                  
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    {journeySteps[activeStep].description}
                  </p>
                  
                  <div className="space-y-3">
                    {journeySteps[activeStep].details.map((detail) => (
                      <div key={detail} className="flex items-center space-x-3">
                        <CheckCircle className="text-green-400 flex-shrink-0" size={16} />
                        <span className="text-gray-400">{detail}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mobile View */}
      <section className="lg:hidden bg-gray-800/50 relative">
        <div className="absolute inset-0 opacity-5">
          <svg width="100%" height="100%" className="w-full h-full">
            <defs>
              <pattern id="journey-pattern-mobile" x="0" y="0" width="80" height="80" patternUnits="userSpaceOnUse">
                <path d="M0 40h80M40 0v80" stroke="currentColor" strokeWidth="0.5" className="text-pink-400"/>
                <circle cx="40" cy="40" r="2" fill="currentColor" className="text-cyan-400"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#journey-pattern-mobile)"/>
          </svg>
        </div>

        <div className="px-4 py-16 relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">
              Your Complete{' '}
              <span className="bg-gradient-to-r from-pink-500 to-amber-500 bg-clip-text text-transparent">
                Transformation Journey
              </span>
            </h2>
            <p className="text-base text-gray-300">
              From initial consultation to ongoing success, we handle every aspect of your AEC transformation.
            </p>
          </div>

          <div className="space-y-8 max-w-lg mx-auto">
            {journeySteps.map((step, index) => {
              const IconComponent = step.icon;
              const isActive = activeMobileStep === index;
              
              return (
                <div 
                  key={step.id} 
                  ref={(el) => { mobileRefs.current[index] = el; }}
                  className={`backdrop-blur-sm rounded-xl p-6 border shadow-lg transition-all duration-500 ${
                    isActive 
                      ? 'bg-gradient-to-r from-gray-800/90 to-gray-700/80 border-pink-500/50 shadow-pink-500/10' 
                      : 'bg-gray-800/40 border-gray-700/30'
                  }`}
                >
                  <div className="flex items-center space-x-4 mb-4">
                    <div className={`p-3 rounded-xl bg-gradient-to-r ${step.color} flex-shrink-0 transition-all duration-300 ${
                      isActive ? 'scale-110 shadow-lg' : ''
                    }`}>
                      <IconComponent className="text-white" size={24} />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center space-x-2 mb-2">
                        <span className="w-6 h-6 bg-gray-700 rounded-full flex items-center justify-center text-sm font-bold text-white">
                          {index + 1}
                        </span>
                        <h3 className={`text-xl font-bold transition-colors duration-300 ${
                          isActive ? 'text-white' : 'text-gray-400'
                        }`}>{step.title}</h3>
                      </div>
                      <p className={`font-medium text-sm transition-colors duration-300 ${
                        isActive ? 'text-pink-400' : 'text-gray-500'
                      }`}>{step.subtitle}</p>
                    </div>
                  </div>
                  
                  <p className="text-gray-300 text-base leading-relaxed mb-6">
                    {step.description}
                  </p>
                  
                  <div className="space-y-3">
                    {step.details.map((detail) => (
                      <div key={detail} className="flex items-center space-x-3">
                        <CheckCircle className="text-green-400 flex-shrink-0" size={16} />
                        <span className="text-gray-400 text-sm">{detail}</span>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default SolutionsJourney;
