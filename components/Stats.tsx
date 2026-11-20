'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

const Stats = () => {
  const router = useRouter();
  const [isVisible, setIsVisible] = useState(false);
  const [animatedNumbers, setAnimatedNumbers] = useState({
    projects: 0,
    clients: 0,
    years: 0,
    satisfaction: 0
  });

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          animateNumbers();
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById('stats');
    if (element) {
      observer.observe(element);
    }

    return () => observer.disconnect();
  }, []);

  const animateNumbers = () => {
    const targets = { projects: 25, clients: 15, years: 2, satisfaction: 100 };
    const duration = 2000;
    const steps = 60;
    const stepTime = duration / steps;

    Object.entries(targets).forEach(([key, target]) => {
      let current = 0;
      const increment = target / steps;
      
      const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
          current = target;
          clearInterval(timer);
        }
        setAnimatedNumbers(prev => ({
          ...prev,
          [key]: Math.floor(current)
        }));
      }, stepTime);
    });
  };

  const stats = [
    {
      id: 'projects',
      number: animatedNumbers.projects,
      suffix: '+',
      label: 'Projects Initiated',
      description: 'Innovative AEC solutions launched',
      icon: '🏗️'
    },
    {
      id: 'clients',
      number: animatedNumbers.clients,
      suffix: '+',
      label: 'Growing Clients',
      description: 'Building trusted partnerships',
      icon: '🤝'
    },
    {
      id: 'years',
      number: animatedNumbers.years,
      suffix: '+',
      label: 'Years Innovation',
      description: 'Pioneering AEC technology',
      icon: '⚡'
    },
    {
      id: 'satisfaction',
      number: animatedNumbers.satisfaction,
      suffix: '%',
      label: 'Commitment',
      description: 'Dedicated to excellence',
      icon: '⭐'
    }
  ];

  const scrollToContact = () => {
    router.push('/contact');
  };

  return (
    <section id="stats" className="py-20 bg-gray-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-64 h-64 bg-pink-500/3 rounded-full animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-amber-500/3 rounded-full animate-pulse delay-1000"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Building Our Legacy of{' '}
            <span className="bg-gradient-to-r from-pink-500 to-amber-500 bg-clip-text text-transparent">Success</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Starting strong with innovation and dedication to AEC industry transformation
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={stat.id}
              className={`text-center p-8 bg-gray-800/50 backdrop-blur-sm rounded-2xl border border-gray-700/50 hover:border-pink-500/30 transition-all duration-500 transform hover:scale-105 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              <div className="text-4xl mb-4">{stat.icon}</div>
              <div className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-pink-500 to-amber-500 bg-clip-text text-transparent mb-2">
                {stat.number}{stat.suffix}
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">{stat.label}</h3>
              <p className="text-gray-400">{stat.description}</p>
            </div>
          ))}
        </div>

        {/* Call-to-action */}
        <div className={`text-center mt-16 transition-all duration-1000 delay-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-pink-500/10 to-amber-500/10 px-6 py-3 rounded-full border border-pink-500/20">
            <span className="text-white font-medium">Ready to join our success stories?</span>
            <button 
              onClick={scrollToContact}
              className="bg-gradient-to-r from-pink-500 to-amber-500 text-white px-6 py-2 rounded-full hover:shadow-lg hover:shadow-pink-500/25 transition-all duration-300"
            >
              Get Started
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stats;
