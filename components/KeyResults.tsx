'use client';

import { useState, useEffect } from 'react';
import { TrendingDown, AlertTriangle, Clock } from 'lucide-react';

const KeyResults = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [animatedValues, setAnimatedValues] = useState([0, 0, 0]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById('key-results');
    if (element) {
      observer.observe(element);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (isVisible) {
      const targets = [25, 40, 1];
      const durations = [2500, 2500, 1000];
      
      targets.forEach((target, index) => {
        const startTime = Date.now();
        
        const animate = () => {
          const elapsed = Date.now() - startTime;
          const progress = Math.min(elapsed / durations[index], 1);
          const easeOutQuart = 1 - Math.pow(1 - progress, 4);
          const current = Math.floor(target * easeOutQuart);
          
          setAnimatedValues(prev => {
            const newValues = [...prev];
            newValues[index] = current;
            return newValues;
          });
          
          if (progress < 1) {
            requestAnimationFrame(animate);
          }
        };
        
        setTimeout(() => animate(), index * 400);
      });
    }
  }, [isVisible]);

  const results = [
    {
      id: 'cost-savings',
      icon: TrendingDown,
      percentage: `15–${animatedValues[0]}%`,
      label: 'cost savings per project',
      color: 'from-green-500 to-emerald-500'
    },
    {
      id: 'error-reduction',
      icon: AlertTriangle,
      percentage: `${animatedValues[1]}%`,
      label: 'reduction in coordination errors',
      color: 'from-amber-500 to-orange-500'
    },
    {
      id: 'faster-execution',
      icon: Clock,
      percentage: 'Faster',
      label: 'process approvals and execution',
      color: 'from-cyan-500 to-blue-500'
    }
  ];

  return (
    <section id="key-results" className="py-20 bg-gray-900 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Helping our partners{' '}
            <span className="bg-gradient-to-r from-pink-500 to-amber-500 bg-clip-text text-transparent">
              achieve...
            </span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {results.map((result, index) => {
            const IconComponent = result.icon;
            return (
              <div
                key={result.id}
                className={`text-center group cursor-pointer transition-all duration-1000 hover:scale-105 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                <div className={`w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-r ${result.color} flex items-center justify-center group-hover:scale-125 group-hover:rotate-12 transition-all duration-500 group-hover:shadow-2xl`}>
                  <IconComponent className="text-white group-hover:scale-110 transition-transform duration-300" size={32} />
                </div>
                <div className={`text-5xl lg:text-6xl font-bold bg-gradient-to-r ${result.color} bg-clip-text text-transparent mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  {result.percentage}
                </div>
                <p className="text-gray-300 text-lg leading-relaxed max-w-sm mx-auto group-hover:text-gray-200 transition-colors duration-300">
                  {result.label}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default KeyResults;
