'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { 
  Pencil, 
  Box, 
  Scan, 
  Activity, 
  RefreshCw, 
  ArrowRight, 
  Factory, 
  Car, 
  Smartphone, 
  Settings, 
  Droplet, 
  Pill,
  Layers,
  Target,
  Zap,
  Award
} from 'lucide-react';

const CADServicesContent = () => {
  const [isVisible, setIsVisible] = useState(false);
  const router = useRouter();

  useEffect(() => {
    window.scrollTo(0, 0);
    setIsVisible(true);
  }, []);

  const scrollToContact = () => {
    router.push('/contact');
  };

  const coreServices = [
    {
      icon: Box,
      title: '3D CAD Modeling',
      description: 'We offer detailed 3D CAD modeling services using platforms like AutoCAD, SolidWorks, Creo, and Autodesk Inventor. Our models are designed for manufacturability, ensuring every aspect is production-ready.',
      features: ['AutoCAD', 'SolidWorks', 'Creo', 'Autodesk Inventor']
    },
    {
      icon: Pencil,
      title: '2D Drafting and Detailing',
      description: 'Our precise 2D drafting services deliver detailed engineering drawings, including layouts, schematics, and assembly instructions, to meet stringent industry standards.',
      features: ['Engineering drawings', 'Layouts', 'Schematics', 'Assembly instructions']
    },
    {
      icon: Layers,
      title: 'Product Design and Development',
      description: 'From concept to final product, we assist clients in the complete product design cycle, offering expertise in parametric design, surfacing, sheet metal, and plastics engineering.',
      features: ['Parametric design', 'Surfacing', 'Sheet metal', 'Plastics engineering']
    },
    {
      icon: Scan,
      title: 'Reverse Engineering',
      description: 'We specialize in reverse engineering services, helping clients re-create detailed 3D models from physical parts using advanced scanning and modeling tools.',
      features: ['3D scanning', 'Physical to digital', 'Model recreation', 'Advanced tools']
    },
    {
      icon: Activity,
      title: 'Finite Element Analysis (FEA) & Simulation',
      description: 'Our team conducts FEA and simulation services to analyze structural integrity, thermal performance, and optimize design functionality for safety and efficiency.',
      features: ['Structural analysis', 'Thermal performance', 'Design optimization', 'Safety validation']
    },
    {
      icon: RefreshCw,
      title: 'CAD Conversion and Migration',
      description: 'We assist companies in converting legacy CAD data into modern formats, ensuring a smooth transition during upgrades or software migrations.',
      features: ['Legacy data conversion', 'Format migration', 'Software upgrades', 'Seamless transition']
    }
  ];

  const industries = [
    { icon: Factory, name: 'Manufacturing' },
    { icon: Car, name: 'Automotive' },
    { icon: Smartphone, name: 'Consumer Electronics' },
    { icon: Settings, name: 'Industrial Machinery' },
    { icon: Droplet, name: 'Oil & Gas Industry' },
    { icon: Pill, name: 'Pharmaceutical & Chemical' }
  ];

  const whyChooseUs = [
    {
      icon: Target,
      title: 'Precision Focus',
      description: 'Every design is crafted with meticulous attention to detail and accuracy.'
    },
    {
      icon: Zap,
      title: 'Cutting-Edge Tools',
      description: 'We leverage the latest CAD technologies and industry best practices.'
    },
    {
      icon: Award,
      title: 'Expert Team',
      description: 'Skilled professionals with deep expertise across diverse industries.'
    },
    {
      icon: RefreshCw,
      title: 'Innovation Driven',
      description: 'Committed to continuous improvement and innovative solutions.'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-900">
      
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-gray-900 via-gray-900 to-gray-800 pt-20">
        <div className="absolute inset-0 opacity-10">
          <svg width="100%" height="100%" className="w-full h-full">
            <defs>
              <pattern id="cad-pattern" x="0" y="0" width="80" height="80" patternUnits="userSpaceOnUse">
                <path d="M0 40h80M40 0v80" stroke="currentColor" strokeWidth="0.5" fill="none" className="text-blue-400"/>
                <rect x="20" y="20" width="40" height="40" stroke="currentColor" strokeWidth="0.5" fill="none" className="text-blue-400"/>
                <circle cx="40" cy="40" r="10" stroke="currentColor" strokeWidth="0.5" fill="none" className="text-blue-400"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#cad-pattern)"/>
          </svg>
        </div>

        <div className="container mx-auto px-6 py-24 lg:py-32">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Side - Animation */}
            <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}>
              <div className="relative">
                <div className="relative w-80 h-80 lg:w-96 lg:h-96 mx-auto">
                  {/* Animated circles */}
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-full animate-pulse"></div>
                  <div className="absolute inset-8 bg-gradient-to-br from-blue-500/30 to-cyan-500/30 rounded-full animate-pulse" style={{ animationDelay: '300ms' }}></div>
                  <div className="absolute inset-16 bg-gradient-to-br from-blue-500/40 to-cyan-500/40 rounded-full animate-pulse" style={{ animationDelay: '500ms' }}></div>
                  
                  {/* Center icon */}
                  <div className="absolute inset-24 flex items-center justify-center">
                    <div className="w-28 h-28 lg:w-32 lg:h-32 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center shadow-2xl shadow-blue-500/50 transform rotate-3 hover:rotate-0 transition-transform duration-500">
                      <Pencil className="text-white" size={56} />
                    </div>
                  </div>

                  {/* Floating icons */}
                  <div className="absolute top-4 left-4 animate-bounce">
                    <div className="p-3 bg-gray-800/80 backdrop-blur-sm rounded-xl border border-blue-500/50 shadow-lg">
                      <Box className="text-blue-400" size={24} />
                    </div>
                  </div>
                  <div className="absolute top-4 right-4 animate-bounce" style={{ animationDelay: '200ms' }}>
                    <div className="p-3 bg-gray-800/80 backdrop-blur-sm rounded-xl border border-cyan-500/50 shadow-lg">
                      <Layers className="text-cyan-400" size={24} />
                    </div>
                  </div>
                  <div className="absolute bottom-4 left-4 animate-bounce" style={{ animationDelay: '400ms' }}>
                    <div className="p-3 bg-gray-800/80 backdrop-blur-sm rounded-xl border border-green-500/50 shadow-lg">
                      <Activity className="text-green-400" size={24} />
                    </div>
                  </div>
                  <div className="absolute bottom-4 right-4 animate-bounce" style={{ animationDelay: '600ms' }}>
                    <div className="p-3 bg-gray-800/80 backdrop-blur-sm rounded-xl border border-purple-500/50 shadow-lg">
                      <Scan className="text-purple-400" size={24} />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side - Content */}
            <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`} style={{ transitionDelay: '300ms' }}>
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-3 h-3 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full animate-pulse"></div>
                <span className="text-blue-400 font-medium">CAD Services</span>
              </div>
              
              <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-6 leading-tight">
                Precision{' '}
                <span className="bg-gradient-to-r from-blue-500 to-cyan-500 bg-clip-text text-transparent">
                  CAD Solutions
                </span>
              </h1>
              
              <p className="text-lg lg:text-xl text-gray-300 mb-8 leading-relaxed">
                Lotos Root is a leading provider of comprehensive CAD services, specializing in delivering high-quality design, drafting, and modeling solutions to clients across diverse industries. We are committed to precision, innovation, and customer satisfaction.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <button 
                  onClick={scrollToContact}
                  className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-8 py-4 rounded-full font-semibold hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300 flex items-center justify-center group"
                >
                  Get Started
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform duration-200" size={20} />
                </button>
                <button 
                  onClick={() => router.push('/projects')}
                  className="border border-gray-600 text-white px-8 py-4 rounded-full font-semibold hover:border-blue-500 hover:text-blue-400 transition-all duration-300"
                >
                  View Portfolio
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 lg:py-20 bg-gray-800/30">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">Our Mission</h2>
            <p className="text-lg lg:text-xl text-gray-300 leading-relaxed">
              To provide exceptional CAD services that empower our clients to innovate, design, and manufacture with accuracy and efficiency. Our goal is to enhance the product development lifecycle through state-of-the-art design tools and methodologies.
            </p>
          </div>
        </div>
      </section>

      {/* Core Services Section */}
      <section className="py-16 lg:py-20 bg-gray-900">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12 lg:mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">Core Services</h2>
            <p className="text-gray-300 text-lg">Comprehensive CAD solutions for every stage of product development</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {coreServices.map((service, index) => (
              <div 
                key={index}
                className="group p-6 lg:p-8 rounded-2xl bg-gray-800/50 border border-gray-700 hover:border-blue-500/50 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-xl hover:shadow-blue-500/10"
              >
                <div className="w-14 h-14 lg:w-16 lg:h-16 rounded-xl bg-gradient-to-r from-blue-500 to-cyan-500 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <service.icon className="text-white" size={28} />
                </div>
                
                <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
                <p className="text-gray-300 mb-4 leading-relaxed text-sm lg:text-base">{service.description}</p>
                
                <div className="flex flex-wrap gap-2">
                  {service.features.map((feature, featureIndex) => (
                    <span 
                      key={featureIndex}
                      className="px-3 py-1 bg-blue-500/10 text-blue-400 rounded-full text-xs font-medium"
                    >
                      {feature}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-16 lg:py-20 bg-gray-800/50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12 lg:mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">Industries We Serve</h2>
            <p className="text-gray-300 text-lg">Delivering CAD excellence across diverse sectors</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 lg:gap-6">
            {industries.map((industry, index) => (
              <div 
                key={index}
                className="group p-6 rounded-2xl bg-gray-800/50 border border-gray-700 hover:border-blue-500/50 transition-all duration-300 text-center hover:transform hover:scale-105"
              >
                <div className="w-14 h-14 mx-auto rounded-full bg-gradient-to-r from-blue-500/20 to-cyan-500/20 flex items-center justify-center mb-4 group-hover:bg-gradient-to-r group-hover:from-blue-500 group-hover:to-cyan-500 transition-all duration-300">
                  <industry.icon className="text-blue-400 group-hover:text-white transition-colors duration-300" size={24} />
                </div>
                <h3 className="text-sm lg:text-base font-semibold text-white">{industry.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 lg:py-20 bg-gray-900">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12 lg:mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">Why Choose Lotos Root?</h2>
            <p className="text-gray-300 text-lg">Experience excellence in CAD services</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {whyChooseUs.map((item, index) => (
              <div key={index} className="text-center group">
                <div className="w-16 h-16 lg:w-20 lg:h-20 mx-auto mb-6 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-blue-500/25">
                  <item.icon className="text-white" size={28} />
                </div>
                <h3 className="text-lg lg:text-xl font-bold text-white mb-3">{item.title}</h3>
                <p className="text-gray-300 leading-relaxed text-sm lg:text-base">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-20 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 border-t border-blue-500/20">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">Ready to Transform Your Designs?</h2>
          <p className="text-lg lg:text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Let&apos;s discuss how our CAD services can accelerate your product development and bring your ideas to life with precision.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button 
              onClick={scrollToContact}
              className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-8 py-4 rounded-full font-semibold hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300 flex items-center justify-center group"
            >
              <Pencil className="mr-2" size={20} />
              Start Your Project
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform duration-200" size={20} />
            </button>
            <button 
              onClick={() => router.push('/digital-engineering')}
              className="border border-gray-600 text-white px-8 py-4 rounded-full font-semibold hover:border-blue-500 hover:text-blue-400 transition-all duration-300"
            >
              Back to Engineering Services
            </button>
          </div>
        </div>
      </section>

    </div>
  );
};

export default CADServicesContent;
