'use client';

import { useState, useEffect } from 'react';
import { MapPin, Lightbulb, Award } from 'lucide-react';
import Image from 'next/image';

const About = () => {
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

    const element = document.getElementById('about');
    if (element) {
      observer.observe(element);
    }

    return () => observer.disconnect();
  }, []);

  const certifications = [
    { name: 'Autodesk', logo: '/logo 01.jpg' },
    { name: 'Zoho', logo: '/logo 01.jpg' },
    { name: 'LEED', logo: '/logo 01.jpg' },
    { name: 'Partner 4', logo: '/logo 01.jpg' }
  ];

  return (
    <section id="about" className="py-20 bg-gray-800/50 relative overflow-hidden">
      <div className="container mx-auto px-8 relative z-10">
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            About{' '}
            <span className="bg-gradient-to-r from-pink-500 to-amber-500 bg-clip-text text-transparent">Us</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div className={`transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}>
            <div className="space-y-8">
              <div>
                <h3 className="text-3xl font-bold text-white mb-4">
                  Who We{' '}
                  <span className="bg-gradient-to-r from-pink-500 to-amber-500 bg-clip-text text-transparent">Are</span>
                </h3>
                <p className="text-gray-300 text-lg leading-relaxed">
                  Lotus Roots Technologies is a multidisciplinary design-tech firm specializing in Building Information Modeling (BIM), CAD engineering, and sustainability consulting. With offices in London and India, we bridge innovation, efficiency, and precision to support smarter project delivery.
                </p>
              </div>

              <div>
                <h3 className="text-3xl font-bold text-white mb-4">
                  Our{' '}
                  <span className="bg-gradient-to-r from-pink-500 to-amber-500 bg-clip-text text-transparent">Mission</span>
                </h3>
                <p className="text-gray-300 text-lg leading-relaxed">
                  To empower construction and design teams with technology-driven workflows that minimize errors, optimize resources, and support sustainable growth.
                </p>
              </div>

              <div>
                <h3 className="text-3xl font-bold text-white mb-4">
                  Our{' '}
                  <span className="bg-gradient-to-r from-pink-500 to-amber-500 bg-clip-text text-transparent">Approach</span>
                </h3>
                <div className="flex items-start space-x-4 p-6 bg-gray-800/80 rounded-xl border border-gray-700/50">
                  <div className="p-2 bg-pink-500/20 rounded-lg">
                    <Lightbulb className="text-pink-400" size={24} />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold text-lg mb-2">&quot;Design-to-Market&quot;</h4>
                    <p className="text-gray-400">Integrating BIM, sustainability, and visualization from concept to completion for maximum ROI.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className={`transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}>
            <div className="bg-gray-800/80 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50 shadow-2xl">
              <h3 className="text-2xl font-bold text-white mb-6">
                Global{' '}
                <span className="bg-gradient-to-r from-pink-500 to-amber-500 bg-clip-text text-transparent">Presence</span>
              </h3>
              
              <div className="space-y-6 mb-8">
                <div className="flex items-center space-x-4">
                  <MapPin className="text-pink-400" size={24} />
                  <div>
                    <h4 className="text-white font-semibold">London Office</h4>
                    <p className="text-gray-400">European operations & client services</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <MapPin className="text-amber-400" size={24} />
                  <div>
                    <h4 className="text-white font-semibold">India Office</h4>
                    <p className="text-gray-400">Technical delivery & innovation hub</p>
                  </div>
                </div>
              </div>

              <div className="mb-8">
                <h4 className="text-white font-semibold text-lg mb-4">Certifications & Partnerships</h4>
                <div className="grid grid-cols-2 gap-4">
                  {certifications.map((cert) => (
                    <div key={cert.name} className="p-3 bg-gray-700/50 rounded-lg border border-gray-600/50 hover:border-pink-500/30 transition-all duration-300 group">
                      <Image 
                        src={cert.logo} 
                        alt={cert.name}
                        width={200}
                        height={32}
                        loading="lazy"
                        quality={75}
                        className="w-full h-8 object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300"
                      />
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex items-center space-x-4 p-4 bg-gradient-to-r from-pink-500/10 to-amber-500/10 rounded-lg border border-pink-500/20">
                <Award className="text-pink-400" size={32} />
                <div>
                  <p className="text-white font-semibold">Trusted by 50+ AEC Companies</p>
                  <p className="text-gray-400">Across UK, UAE, and India</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
