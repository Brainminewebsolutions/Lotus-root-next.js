'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { 
  Code2, 
  Cpu, 
  Settings, 
  ArrowRight, 
  Target,
  Zap,
  Award,
  Wand2,
  Cloud,
  Box,
  Eye,
  Cog,
  Sparkles,
  GitBranch,
  Terminal
} from 'lucide-react';

const CADAutomationContent = () => {
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
      id: 'automation',
      icon: Wand2,
      title: 'CAD Automation Solutions',
      description: 'Development of macros, scripts, and plugins for software like AutoCAD, SolidWorks, CATIA, and Revit. Automated parametric design for repetitive tasks and custom tools for complex workflows.',
      features: ['Macros & Scripts', 'Plugin Development', 'Parametric Design', 'Workflow Optimization']
    },
    {
      id: 'software-dev',
      icon: Code2,
      title: 'Custom CAD Software Development',
      description: 'Standalone CAD applications tailored to specific industry requirements, API development and integration for CAD platforms, and cloud-based CAD solutions for collaborative design.',
      features: ['Standalone Apps', 'API Development', 'Cloud Solutions', 'Custom Tools']
    },
    {
      id: 'config-tools',
      icon: Settings,
      title: 'Product Configuration Tools',
      description: 'Rule-based configurators for quick design iterations and seamless integration of CAD with Product Lifecycle Management (PLM) and Enterprise Resource Planning (ERP) systems.',
      features: ['Rule-Based Config', 'PLM Integration', 'ERP Integration', 'Design Automation']
    },
    {
      id: '3d-viz',
      icon: Eye,
      title: '3D Modeling & Visualization',
      description: 'High-quality 3D modeling, rendering, and simulations. Virtual reality (VR) and augmented reality (AR) integrations for enhanced visualization and immersive experiences.',
      features: ['3D Rendering', 'Simulations', 'VR Integration', 'AR Experiences']
    }
  ];

  const technologies = [
    {
      id: 'cad',
      category: 'CAD Platforms',
      items: ['AutoCAD', 'SolidWorks', 'CATIA', 'Creo', 'Revit', 'Rhino'],
      icon: Box
    },
    {
      id: 'programming',
      category: 'Programming Languages',
      items: ['Python', 'C#', 'VBA', 'C++', 'JavaScript'],
      icon: Terminal
    },
    {
      id: 'apis',
      category: 'APIs and Libraries',
      items: ['Autodesk API', 'SolidWorks API', 'Forge', 'Open CASCADE'],
      icon: GitBranch
    },
    {
      id: 'emerging',
      category: 'Emerging Tech',
      items: ['AI', 'ML', 'VR', 'AR', 'IoT'],
      icon: Sparkles
    }
  ];

  const whyChooseUs = [
    {
      id: 'innovation',
      icon: Sparkles,
      title: 'Innovation First',
      description: 'Cutting-edge automation solutions that push the boundaries of CAD technology.'
    },
    {
      id: 'efficiency',
      icon: Zap,
      title: 'Maximum Efficiency',
      description: 'Streamlined workflows that minimize errors and reduce design cycles significantly.'
    },
    {
      id: 'expertise',
      icon: Award,
      title: 'Deep Expertise',
      description: 'Years of experience in CAD automation across multiple platforms and industries.'
    },
    {
      id: 'custom',
      icon: Target,
      title: 'Tailored Solutions',
      description: 'Custom-built tools and applications designed for your specific requirements.'
    }
  ];

  const benefits = [
    { id: 'productivity', text: 'Enhanced productivity through automated workflows', icon: Zap },
    { id: 'errors', text: 'Reduced design errors with rule-based automation', icon: Target },
    { id: 'cycles', text: 'Shorter design cycles and faster time-to-market', icon: Cpu },
    { id: 'accuracy', text: 'Greater accuracy in engineering processes', icon: Award },
    { id: 'collaboration', text: 'Improved collaboration with cloud-based solutions', icon: Cloud },
    { id: 'visualization', text: 'Enhanced visualization with VR/AR integrations', icon: Eye }
  ];

  return (
    <div className="min-h-screen bg-gray-900">
      
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-gray-900 via-gray-900 to-gray-800 pt-20">
        <div className="absolute inset-0 opacity-10">
          <svg width="100%" height="100%" className="w-full h-full">
            <defs>
              <pattern id="code-pattern" x="0" y="0" width="60" height="60" patternUnits="userSpaceOnUse">
                <text x="5" y="15" fontSize="10" fill="currentColor" className="text-orange-400">{'<>'}</text>
                <text x="30" y="35" fontSize="10" fill="currentColor" className="text-orange-400">{'/>'}</text>
                <text x="10" y="55" fontSize="10" fill="currentColor" className="text-orange-400">{'{ }'}</text>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#code-pattern)"/>
          </svg>
        </div>

        <div className="container mx-auto px-6 py-24 lg:py-32">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Side - Animation */}
            <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}>
              <div className="relative">
                <div className="relative w-80 h-80 lg:w-96 lg:h-96 mx-auto">
                  {/* Animated code blocks */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-full h-full relative">
                      {/* Floating code elements */}
                      <div className="absolute top-0 left-1/4 w-32 h-8 bg-gradient-to-r from-orange-500/20 to-amber-500/20 rounded-lg border border-orange-500/30 animate-pulse"></div>
                      <div className="absolute top-12 right-1/4 w-24 h-8 bg-gradient-to-r from-orange-500/30 to-amber-500/30 rounded-lg border border-orange-500/40 animate-pulse" style={{ animationDelay: '200ms' }}></div>
                      <div className="absolute top-24 left-1/3 w-28 h-8 bg-gradient-to-r from-orange-500/20 to-amber-500/20 rounded-lg border border-orange-500/30 animate-pulse" style={{ animationDelay: '400ms' }}></div>
                      
                      {/* Center icon */}
                      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                        <div className="w-28 h-28 lg:w-32 lg:h-32 bg-gradient-to-br from-orange-500 to-amber-500 rounded-2xl flex items-center justify-center shadow-2xl shadow-orange-500/50 transform hover:rotate-3 transition-transform duration-500">
                          <Code2 className="text-white" size={56} />
                        </div>
                      </div>
                      
                      {/* More floating elements */}
                      <div className="absolute bottom-24 left-1/4 w-20 h-8 bg-gradient-to-r from-orange-500/30 to-amber-500/30 rounded-lg border border-orange-500/40 animate-pulse" style={{ animationDelay: '300ms' }}></div>
                      <div className="absolute bottom-12 right-1/3 w-36 h-8 bg-gradient-to-r from-orange-500/20 to-amber-500/20 rounded-lg border border-orange-500/30 animate-pulse" style={{ animationDelay: '500ms' }}></div>
                      <div className="absolute bottom-0 left-1/3 w-24 h-8 bg-gradient-to-r from-orange-500/30 to-amber-500/30 rounded-lg border border-orange-500/40 animate-pulse" style={{ animationDelay: '100ms' }}></div>
                    </div>
                  </div>

                  {/* Corner icons */}
                  <div className="absolute -top-2 -left-2 animate-bounce">
                    <div className="p-3 bg-gray-800/80 backdrop-blur-sm rounded-xl border border-orange-500/50 shadow-lg">
                      <Wand2 className="text-orange-400" size={24} />
                    </div>
                  </div>
                  <div className="absolute -top-2 -right-2 animate-bounce" style={{ animationDelay: '200ms' }}>
                    <div className="p-3 bg-gray-800/80 backdrop-blur-sm rounded-xl border border-amber-500/50 shadow-lg">
                      <Cog className="text-amber-400" size={24} />
                    </div>
                  </div>
                  <div className="absolute -bottom-2 -left-2 animate-bounce" style={{ animationDelay: '400ms' }}>
                    <div className="p-3 bg-gray-800/80 backdrop-blur-sm rounded-xl border border-yellow-500/50 shadow-lg">
                      <Cpu className="text-yellow-400" size={24} />
                    </div>
                  </div>
                  <div className="absolute -bottom-2 -right-2 animate-bounce" style={{ animationDelay: '300ms' }}>
                    <div className="p-3 bg-gray-800/80 backdrop-blur-sm rounded-xl border border-red-500/50 shadow-lg">
                      <Sparkles className="text-red-400" size={24} />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side - Content */}
            <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`} style={{ transitionDelay: '300ms' }}>
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-3 h-3 bg-gradient-to-r from-orange-500 to-amber-500 rounded-full animate-pulse"></div>
                <span className="text-orange-400 font-medium">CAD Automation & Development</span>
              </div>
              
              <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-6 leading-tight">
                Automate Your{' '}
                <span className="bg-gradient-to-r from-orange-500 to-amber-500 bg-clip-text text-transparent">
                  CAD Workflows
                </span>
              </h1>
              
              <p className="text-lg lg:text-xl text-gray-300 mb-8 leading-relaxed">
                Lotos Root specializes in state-of-the-art CAD automation and development solutions, empowering businesses to enhance productivity, reduce design cycles, and achieve greater accuracy in engineering processes.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <button 
                  onClick={scrollToContact}
                  className="bg-gradient-to-r from-orange-500 to-amber-500 text-white px-8 py-4 rounded-full font-semibold hover:shadow-lg hover:shadow-orange-500/25 transition-all duration-300 flex items-center justify-center group"
                >
                  Get Started
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform duration-200" size={20} />
                </button>
                <button 
                  onClick={() => router.push('/projects')}
                  className="border border-gray-600 text-white px-8 py-4 rounded-full font-semibold hover:border-orange-500 hover:text-orange-400 transition-all duration-300"
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
              To provide robust CAD automation solutions that simplify workflows, minimize errors, and deliver exceptional value to our clients worldwide. We combine cutting-edge technology with deep industry expertise.
            </p>
          </div>
        </div>
      </section>

      {/* Core Services Section */}
      <section className="py-16 lg:py-20 bg-gray-900">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12 lg:mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">Core Services</h2>
            <p className="text-gray-300 text-lg">Comprehensive CAD automation solutions</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
            {coreServices.map((service) => (
              <div 
                key={service.id}
                className="group p-6 lg:p-8 rounded-2xl bg-gray-800/50 border border-gray-700 hover:border-orange-500/50 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-xl hover:shadow-orange-500/10"
              >
                <div className="flex items-start gap-6">
                  <div className="w-14 h-14 lg:w-16 lg:h-16 rounded-xl bg-gradient-to-r from-orange-500 to-amber-500 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <service.icon className="text-white" size={28} />
                  </div>
                  
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
                    <p className="text-gray-300 mb-4 leading-relaxed text-sm lg:text-base">{service.description}</p>
                    
                    <div className="flex flex-wrap gap-2">
                      {service.features.map((feature) => (
                        <span 
                          key={`${service.id}-${feature}`}
                          className="px-3 py-1 bg-orange-500/10 text-orange-400 rounded-full text-xs font-medium"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 lg:py-20 bg-gray-800/50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12 lg:mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">Why Automate Your CAD?</h2>
            <p className="text-gray-300 text-lg">Transform your design process with automation</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit) => (
              <div 
                key={benefit.id}
                className="flex items-center p-4 lg:p-6 rounded-xl bg-gray-800/50 border border-gray-700 hover:border-orange-500/50 transition-all duration-300 group"
              >
                <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-orange-500/20 to-amber-500/20 flex items-center justify-center mr-4 group-hover:from-orange-500 group-hover:to-amber-500 transition-all duration-300">
                  <benefit.icon className="text-orange-400 group-hover:text-white transition-colors duration-300" size={24} />
                </div>
                <span className="text-white font-medium text-sm lg:text-base">{benefit.text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-16 lg:py-20 bg-gray-900">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12 lg:mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">Technologies We Use</h2>
            <p className="text-gray-300 text-lg">Cutting-edge tools and platforms for CAD automation</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {technologies.map((tech) => (
              <div 
                key={tech.id}
                className="p-6 rounded-2xl bg-gray-800/50 border border-gray-700 hover:border-orange-500/50 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-orange-500 to-amber-500 flex items-center justify-center mb-4">
                  <tech.icon className="text-white" size={24} />
                </div>
                <h3 className="text-orange-400 font-semibold mb-4">{tech.category}</h3>
                <div className="flex flex-wrap gap-2">
                  {tech.items.map((item) => (
                    <span 
                      key={`${tech.id}-${item}`}
                      className="px-3 py-1 bg-gray-700 text-gray-300 rounded-lg text-sm"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 lg:py-20 bg-gray-800/30">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12 lg:mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">Why Choose Lotos Root?</h2>
            <p className="text-gray-300 text-lg">Experience excellence in CAD automation</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {whyChooseUs.map((item) => (
              <div key={item.id} className="text-center group">
                <div className="w-16 h-16 lg:w-20 lg:h-20 mx-auto mb-6 rounded-full bg-gradient-to-r from-orange-500 to-amber-500 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-orange-500/25">
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
      <section className="py-16 lg:py-20 bg-gradient-to-r from-orange-500/10 to-amber-500/10 border-t border-orange-500/20">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">Ready to Automate Your CAD Workflows?</h2>
          <p className="text-lg lg:text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Let&apos;s discuss how our CAD automation solutions can transform your design process and boost productivity.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button 
              onClick={scrollToContact}
              className="bg-gradient-to-r from-orange-500 to-amber-500 text-white px-8 py-4 rounded-full font-semibold hover:shadow-lg hover:shadow-orange-500/25 transition-all duration-300 flex items-center justify-center group"
            >
              <Code2 className="mr-2" size={20} />
              Start Your Project
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform duration-200" size={20} />
            </button>
            <button 
              onClick={() => router.push('/digital-engineering')}
              className="border border-gray-600 text-white px-8 py-4 rounded-full font-semibold hover:border-orange-500 hover:text-orange-400 transition-all duration-300"
            >
              Back to Engineering Services
            </button>
          </div>
        </div>
      </section>

    </div>
  );
};

export default CADAutomationContent;
