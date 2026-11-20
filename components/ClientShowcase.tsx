'use client';

import { useState, useEffect } from 'react';
import { ExternalLink, MapPin } from 'lucide-react';
import Image from 'next/image';

const ClientShowcase = () => {
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

    const element = document.getElementById('client-showcase');
    if (element) {
      observer.observe(element);
    }

    return () => observer.disconnect();
  }, []);

  const clients = [
    { name: 'Client 1', logo: '/01_clinet.webp' },
    { name: 'Client 2', logo: '/02_clinet.webp' },
    { name: 'Client 3', logo: '/03_clinet.webp' },
    { name: 'Client 4', logo: '/04_clinet.webp' },
    { name: 'Client 5', logo: '/05_clinet.webp' },
    { name: 'Client 6', logo: '/06_clinet.webp' }
  ];

  const projects = [
    {
      id: 'office-complex',
      title: 'Modern Office Complex',
      location: 'London, UK',
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&h=600&fit=crop&q=80',
      description: 'BIM coordination and sustainability consulting'
    },
    {
      id: 'residential',
      title: 'Residential Development',
      location: 'Dubai, UAE',
      image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&h=600&fit=crop&q=80',
      description: 'Complete digital visualization and MEP design'
    },
    {
      id: 'industrial',
      title: 'Industrial Facility',
      location: 'Mumbai, India',
      image: 'https://images.unsplash.com/photo-1565008447742-97f6f38c985c?w=800&h=600&fit=crop&q=80',
      description: 'Structural modeling and clash detection'
    }
  ];

  return (
    <section id="client-showcase" className="py-20 bg-gray-800/50 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Client Showcase &{' '}
            <span className="bg-gradient-to-r from-pink-500 to-amber-500 bg-clip-text text-transparent">
              Reference Work
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Proudly partnered with leading developers and design firms across the UK, UAE, and India.
          </p>
        </div>

        {/* Client Logos */}
        <div className={`mb-16 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
            {clients.map((client) => (
              <div
                key={client.name}
                className="group cursor-pointer p-2 bg-white/10 rounded-lg border border-pink-500/30 transition-all duration-300 hover:scale-105"
              >
                <Image
                  src={client.logo}
                  alt={client.name}
                  width={200}
                  height={64}
                  loading="lazy"
                  quality={75}
                  className="w-full h-16 object-contain transition-all duration-300"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Project Thumbnails */}
        <div className={`transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="grid md:grid-cols-3 gap-8">
            {projects.map((project) => (
              <div
                key={project.id}
                className="group cursor-pointer bg-gray-800/80 rounded-2xl overflow-hidden border border-gray-700/50 hover:border-pink-500/30 transition-all duration-300 hover:scale-105"
              >
                <div className="relative overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={800}
                    height={600}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                    <div className="p-4">
                      <ExternalLink className="text-white" size={20} />
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-pink-400 transition-colors duration-200">
                    {project.title}
                  </h3>
                  <div className="flex items-center text-gray-400 mb-3">
                    <MapPin size={16} className="mr-2" />
                    <span className="text-sm">{project.location}</span>
                  </div>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    {project.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientShowcase;
