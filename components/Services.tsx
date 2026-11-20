'use client';

import { useState, useEffect } from 'react';
import { Bot, Shield, Search, Building, Users, ArrowRight, ChevronRight } from 'lucide-react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

const Services = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeService, setActiveService] = useState(0);
  const [isFooterClicked, setIsFooterClicked] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById('services');
    if (element) {
      observer.observe(element);
    }

    // Listen for custom event from footer
    const handleActivateService = (event: CustomEvent) => {
      const serviceIndex = event.detail;
      setIsFooterClicked(true);
      setActiveService(serviceIndex);
      
      // Scroll to specific service card
      setTimeout(() => {
        const serviceElement = document.getElementById(`service-${serviceIndex}`);
        if (serviceElement) {
          if (globalThis.innerWidth < 1024) {
            const elementPosition = serviceElement.getBoundingClientRect().top + globalThis.pageYOffset - 150;
            globalThis.scrollTo({ top: elementPosition, behavior: 'smooth' });
          } else {
            serviceElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
          }
        }
        setTimeout(() => setIsFooterClicked(false), 2000);
      }, 100);
    };

    globalThis.addEventListener('activateService', handleActivateService as EventListener);

    return () => {
      observer.disconnect();
      globalThis.removeEventListener('activateService', handleActivateService as EventListener);
    };
  }, []);

  const services = [
    {
      id: 'tech-dev',
      icon: Bot,
      title: 'Technology Development',
      description: 'Custom digital tools, AI solutions, and platforms that solve real-world AEC challenges.',
      details: [
        'Custom Platform Development',
        'AI Development for Efficiency Intelligence',
        'Interactive Dashboards & Data Visualization',
        'Workflow Automation & Data Handling',
        'Secure Cloud Deployment & Hosting Support'
      ],
      color: 'from-pink-500 to-rose-500',
      bgColor: 'bg-pink-500/10',
      borderColor: 'border-pink-500/30',
      path: '/technology-development'
    },
    {
      id: 'digital-eng',
      icon: Building,
      title: 'Digital Engineering',
      description: 'Modular, scalable digital engineering solutions across the full project lifecycle.',
      details: [
        'End-to-End BIM Services',
        'GeoBIM Solutions',
        'Digital Twin & Industry 4.0 Integration',
        'Engineering Consulting & Project Management',
        'Sustainability Solutions'
      ],
      color: 'from-cyan-500 to-blue-500',
      bgColor: 'bg-cyan-500/10',
      borderColor: 'border-cyan-500/30',
      path: '/digital-engineering'
    },
    {
      id: 'digital-biz',
      icon: Search,
      title: 'Digital Business',
      description: 'Build compelling digital identities and accelerate growth through design and technology.',
      details: [
        'Digital Branding & Identity',
        'Web & Platform Experience Design',
        'Digital Marketing & Campaign Strategy',
        'Sales Enablement & Lead Generation',
        'Content Strategy & Development'
      ],
      color: 'from-green-500 to-emerald-500',
      bgColor: 'bg-green-500/10',
      borderColor: 'border-green-500/30',
      path: '/digital-business'
    },
    {
      id: 'digital-sec',
      icon: Shield,
      title: 'Digital Security',
      description: 'Resilient, compliant, and protected digital transformation across all platforms.',
      details: [
        'Security Infrastructure Management',
        'Transformation Security',
        'Security Governance, Risk & Compliance',
        'Security Monitoring & Response',
        'System Integration & Program Governance'
      ],
      color: 'from-amber-500 to-orange-500',
      bgColor: 'bg-amber-500/10',
      borderColor: 'border-amber-500/30',
      path: '/digital-security'
    },
    {
      id: 'talent',
      icon: Users,
      title: 'Talent & Capability Building',
      description: 'Flexible skilled teams and upskilling programs for global delivery and innovation.',
      details: [
        'Onsite/Offshore Staffing Models',
        'BIM/VDC Training & Certification',
        'Managed Services & Long-Term Augmentation',
        'Capability Building Workshops',
        'Knowledge Transfer & Process Documentation'
      ],
      color: 'from-indigo-500 to-blue-500',
      bgColor: 'bg-indigo-500/10',
      borderColor: 'border-indigo-500/30',
      path: '/talent-capability-building'
    }
  ];

  const handleServiceClick = (service: typeof services[0], index: number) => {
    if (service.path) {
      router.push(service.path);
    } else {
      setActiveService(index);
      setIsFooterClicked(false);
    }
  };

  const scrollToContact = () => {
    router.push('/contact');
  };

  return (
    <section id="services" className="py-20 bg-gray-800/30 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <svg width="100%" height="100%" className="w-full h-full">
          <defs>
            <pattern id="services-pattern" x="0" y="0" width="60" height="60" patternUnits="userSpaceOnUse">
              <circle cx="30" cy="30" r="1" fill="currentColor" className="text-pink-400"/>
              <path d="M30 0v60M0 30h60" stroke="currentColor" strokeWidth="0.5" className="text-cyan-400"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#services-pattern)"/>
        </svg>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Comprehensive{' '}
            <span className="bg-gradient-to-r from-pink-500 to-amber-500 bg-clip-text text-transparent">
              AEC Solutions
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            From cutting-edge technology implementation to strategic consulting, 
            we provide end-to-end solutions that drive success in the AEC industry.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 items-stretch">
          {/* First row - 3 services */}
          <div className="lg:col-span-3 grid lg:grid-cols-3 gap-8">
          {services.slice(0, 3).map((service, index) => {
            const IconComponent = service.icon;
            const isActive = activeService === index;
            
            return (
              <div
                key={service.id}
                id={`service-${index}`}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    handleServiceClick(service, index);
                  }
                }}
                className={`group cursor-pointer transition-all duration-300 h-full ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                } ${isActive ? 'ring-2 ring-pink-500/50 ring-offset-0 rounded-2xl' : ''}`}
                style={{ transitionDelay: `${index * 150}ms` }}
                onClick={() => handleServiceClick(service, index)}
                onMouseEnter={() => {
                  if (!isFooterClicked) {
                    setActiveService(index);
                  }
                }}
              >
                <div className={`h-full p-8 bg-gray-800/80 backdrop-blur-sm rounded-2xl border ${service.borderColor} group-hover:border-pink-500/50 transition-all duration-300 ${service.bgColor}`}>
                  <div className={`inline-flex p-4 rounded-xl bg-gradient-to-r ${service.color} mb-6 transition-all duration-300`}>
                    <IconComponent className="text-white" size={28} />
                  </div>
                  
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-pink-400 transition-colors duration-300">
                    {service.title}
                  </h3>
                  
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    {service.description}
                  </p>

                  <div className={`space-y-3 mb-6 transition-all duration-500 ${isActive ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
                    {service.details.map((detail) => (
                      <div key={detail} className="flex items-start space-x-3">
                        <ChevronRight className="text-pink-400 mt-0.5 flex-shrink-0" size={16} />
                        <span className="text-gray-400 text-sm">{detail}</span>
                      </div>
                    ))}
                  </div>

                  <Link 
                    href={service.path}
                    className="inline-flex items-center text-pink-400 font-semibold hover:text-pink-300 transition-colors duration-200 group"
                  >
                    Learn more about {service.title}
                    <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform duration-200" size={16} />
                  </Link>
                </div>
              </div>
            );
          })}
          </div>
          
          {/* Second row - 2 services centered */}
          <div className="lg:col-span-3 grid lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {services.slice(3, 5).map((service, index) => {
            const IconComponent = service.icon;
            const actualIndex = index + 3;
            const isActive = activeService === actualIndex;
            
            return (
              <div
                key={service.id}
                id={`service-${actualIndex}`}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    handleServiceClick(service, actualIndex);
                  }
                }}
                className={`group cursor-pointer transition-all duration-300 h-full ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                } ${isActive ? 'ring-2 ring-pink-500/50 ring-offset-0 rounded-2xl' : ''}`}
                style={{ transitionDelay: `${actualIndex * 150}ms` }}
                onClick={() => handleServiceClick(service, actualIndex)}
                onMouseEnter={() => {
                  if (!isFooterClicked) {
                    setActiveService(actualIndex);
                  }
                }}
              >
                <div className={`h-full p-8 bg-gray-800/80 backdrop-blur-sm rounded-2xl border ${service.borderColor} group-hover:border-pink-500/50 transition-all duration-300 ${service.bgColor}`}>
                  <div className={`inline-flex p-4 rounded-xl bg-gradient-to-r ${service.color} mb-6 transition-all duration-300`}>
                    <IconComponent className="text-white" size={28} />
                  </div>
                  
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-pink-400 transition-colors duration-300">
                    {service.title}
                  </h3>
                  
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    {service.description}
                  </p>

                  <div className={`space-y-3 mb-6 transition-all duration-500 ${isActive ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
                    {service.details.map((detail) => (
                      <div key={detail} className="flex items-start space-x-3">
                        <ChevronRight className="text-pink-400 mt-0.5 flex-shrink-0" size={16} />
                        <span className="text-gray-400 text-sm">{detail}</span>
                      </div>
                    ))}
                  </div>

                  <Link 
                    href={service.path}
                    className="inline-flex items-center text-pink-400 font-semibold hover:text-pink-300 transition-colors duration-200 group"
                  >
                    Learn more about {service.title}
                    <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform duration-200" size={16} />
                  </Link>
                </div>
              </div>
            );
          })}
          </div>
        </div>

        {/* Call to Action */}
        <div className={`text-center mt-16 transition-all duration-1000 delay-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="bg-gradient-to-r from-gray-800/80 to-gray-800/60 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50">
            <h3 className="text-3xl font-bold text-white mb-4">Ready to Transform Your AEC Business?</h3>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
              Let&apos;s discuss how our comprehensive solutions can drive innovation and growth for your organization.
            </p>
            <button 
              onClick={scrollToContact}
              className="bg-gradient-to-r from-pink-500 to-amber-500 text-white px-8 py-4 rounded-full font-semibold hover:shadow-lg hover:shadow-pink-500/25 transition-all duration-300 inline-flex items-center group"
            >
              Start Your Transformation
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform duration-200" size={20} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
