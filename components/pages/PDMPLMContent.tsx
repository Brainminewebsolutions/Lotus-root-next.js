'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { 
  Database, 
  GitBranch, 
  Settings, 
  RefreshCw, 
  ArrowRight, 
  Layers,
  Factory, 
  Car, 
  Smartphone, 
  Droplet, 
  Pill,
  Target,
  Zap,
  Award,
  BookOpen,
  Shield,
  Link,
  FileText,
  Users,
  Cog
} from 'lucide-react';

const PDMPLMContent = () => {
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
      id: 'vault-impl',
      icon: Database,
      title: 'Autodesk Vault Implementation & Consulting',
      description: 'We offer expert implementation services for Autodesk Vault, helping companies manage, control, and track their design data securely. Our consulting services ensure Vault is tailored to meet your specific requirements.',
      features: ['Data management', 'Version control', 'Security setup', 'Custom configuration']
    },
    {
      id: 'vault-custom',
      icon: Settings,
      title: 'Autodesk Vault Customization',
      description: 'Our team specializes in customizing Vault workflows, automating processes, and integrating with other enterprise systems like ERP, CRM to ensure seamless data flow across departments.',
      features: ['Workflow automation', 'ERP integration', 'CRM integration', 'Custom processes']
    },
    {
      id: 'pdm-integration',
      icon: Link,
      title: 'PDM and PLM Integration',
      description: 'We assist companies in integrating Autodesk Vault with Autodesk Fusion 360 Manage (PLM) to unify product data management and lifecycle management for efficient tracking.',
      features: ['Unified platform', 'Data synchronization', 'Lifecycle tracking', 'Process alignment']
    },
    {
      id: 'fusion-impl',
      icon: Layers,
      title: 'Fusion 360 Manage Implementation',
      description: 'As experts in Fusion 360 Manage, we help companies implement PLM systems that manage product development, BOMs, change management, and compliance processes.',
      features: ['BOM management', 'Change management', 'Compliance tracking', 'Unified platform']
    },
    {
      id: 'data-migration',
      icon: RefreshCw,
      title: 'Data Migration Services',
      description: 'Our team provides comprehensive data migration services, ensuring smooth transition from legacy PDM/PLM systems to Autodesk Vault or Fusion 360 Manage with zero data loss.',
      features: ['Legacy migration', 'Data integrity', 'Zero downtime', 'Complex structures']
    },
    {
      id: 'plm-optimization',
      icon: Zap,
      title: 'PLM Process Optimization',
      description: 'We work with companies to streamline their product lifecycle management processes, from development and design to manufacturing, focusing on workflow optimization.',
      features: ['Process streamlining', 'Workflow optimization', 'Data consistency', 'Team collaboration']
    },
    {
      id: 'training-support',
      icon: BookOpen,
      title: 'Training & Support',
      description: 'We provide ongoing support and training for Autodesk Vault and Fusion 360 Manage users, ensuring teams can efficiently utilize these tools and drive maximum value.',
      features: ['User training', 'Ongoing support', 'Best practices', 'Documentation']
    }
  ];

  const industries = [
    { id: 'manufacturing', icon: Factory, name: 'Manufacturing' },
    { id: 'automotive', icon: Car, name: 'Automotive' },
    { id: 'electronics', icon: Smartphone, name: 'Consumer Electronics' },
    { id: 'machinery', icon: Cog, name: 'Industrial Machinery' },
    { id: 'oil-gas', icon: Droplet, name: 'Oil & Gas Industry' },
    { id: 'pharma', icon: Pill, name: 'Pharmaceutical & Chemical' }
  ];

  const certifications = [
    { id: 'vault-cert', icon: Award, title: 'Autodesk Vault Certified Professionals' },
    { id: 'compliance', icon: Shield, title: 'Industry-Specific Compliance' },
    { id: 'standards', icon: FileText, title: 'Regulatory Standards Adherence' }
  ];

  const technologies = [
    { id: 'pdm', category: 'PDM Solutions', items: ['Autodesk Vault Basic', 'Vault Workgroup', 'Vault Professional'] },
    { id: 'plm', category: 'PLM Solutions', items: ['Autodesk Fusion 360 Manage'] },
    { id: 'cad', category: 'CAD Platforms', items: ['Autodesk Inventor', 'AutoCAD', 'SolidWorks', 'Creo'] },
    { id: 'integration', category: 'Integration', items: ['ERP Systems', 'CRM Platforms', 'Enterprise Systems'] }
  ];

  const whyChooseUs = [
    {
      id: 'expertise',
      icon: Target,
      title: 'Deep Expertise',
      description: 'Specialized knowledge in Autodesk PDM/PLM ecosystem and implementation.'
    },
    {
      id: 'integration',
      icon: Link,
      title: 'Seamless Integration',
      description: 'Connect your PDM/PLM with existing enterprise systems effortlessly.'
    },
    {
      id: 'support',
      icon: Users,
      title: 'Dedicated Support',
      description: 'Ongoing training and support to ensure maximum ROI from your investment.'
    },
    {
      id: 'efficiency',
      icon: Zap,
      title: 'Process Efficiency',
      description: 'Streamlined workflows that reduce time-to-market and improve collaboration.'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-900">
      
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-gray-900 via-gray-900 to-gray-800 pt-20">
        <div className="absolute inset-0 opacity-10">
          <svg width="100%" height="100%" className="w-full h-full">
            <defs>
              <pattern id="pdm-pattern" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
                <circle cx="50" cy="50" r="2" fill="currentColor" className="text-green-400"/>
                <path d="M50 10v80M10 50h80" stroke="currentColor" strokeWidth="0.5" fill="none" className="text-green-400"/>
                <circle cx="50" cy="50" r="30" stroke="currentColor" strokeWidth="0.5" fill="none" className="text-green-400"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#pdm-pattern)"/>
          </svg>
        </div>

        <div className="container mx-auto px-6 py-24 lg:py-32">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Side - Animation */}
            <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}>
              <div className="relative">
                <div className="relative w-80 h-80 lg:w-96 lg:h-96 mx-auto">
                  {/* Animated rings */}
                  <div className="absolute inset-0 border-2 border-green-500/30 rounded-full animate-spin" style={{ animationDuration: '20s' }}></div>
                  <div className="absolute inset-8 border-2 border-emerald-500/40 rounded-full animate-spin" style={{ animationDuration: '15s', animationDirection: 'reverse' }}></div>
                  <div className="absolute inset-16 border-2 border-teal-500/50 rounded-full animate-spin" style={{ animationDuration: '10s' }}></div>
                  
                  {/* Center icon */}
                  <div className="absolute inset-24 flex items-center justify-center">
                    <div className="w-28 h-28 lg:w-32 lg:h-32 bg-gradient-to-br from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center shadow-2xl shadow-green-500/50">
                      <Database className="text-white" size={56} />
                    </div>
                  </div>

                  {/* Floating icons */}
                  <div className="absolute top-4 left-1/2 -translate-x-1/2 animate-bounce">
                    <div className="p-3 bg-gray-800/80 backdrop-blur-sm rounded-xl border border-green-500/50 shadow-lg">
                      <GitBranch className="text-green-400" size={24} />
                    </div>
                  </div>
                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 animate-bounce" style={{ animationDelay: '300ms' }}>
                    <div className="p-3 bg-gray-800/80 backdrop-blur-sm rounded-xl border border-emerald-500/50 shadow-lg">
                      <RefreshCw className="text-emerald-400" size={24} />
                    </div>
                  </div>
                  <div className="absolute left-4 top-1/2 -translate-y-1/2 animate-bounce" style={{ animationDelay: '200ms' }}>
                    <div className="p-3 bg-gray-800/80 backdrop-blur-sm rounded-xl border border-teal-500/50 shadow-lg">
                      <Layers className="text-teal-400" size={24} />
                    </div>
                  </div>
                  <div className="absolute right-4 top-1/2 -translate-y-1/2 animate-bounce" style={{ animationDelay: '400ms' }}>
                    <div className="p-3 bg-gray-800/80 backdrop-blur-sm rounded-xl border border-cyan-500/50 shadow-lg">
                      <Link className="text-cyan-400" size={24} />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side - Content */}
            <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`} style={{ transitionDelay: '300ms' }}>
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-3 h-3 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full animate-pulse"></div>
                <span className="text-green-400 font-medium">PDM/PLM Services</span>
              </div>
              
              <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-6 leading-tight">
                Product Data{' '}
                <span className="bg-gradient-to-r from-green-500 to-emerald-500 bg-clip-text text-transparent">
                  Management
                </span>
              </h1>
              
              <p className="text-lg lg:text-xl text-gray-300 mb-8 leading-relaxed">
                Lotos Root is a specialized provider of Autodesk PDM and PLM services, helping businesses streamline their product development processes, improve collaboration, and enhance data management efficiency across the entire lifecycle.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <button 
                  onClick={scrollToContact}
                  className="bg-gradient-to-r from-green-500 to-emerald-500 text-white px-8 py-4 rounded-full font-semibold hover:shadow-lg hover:shadow-green-500/25 transition-all duration-300 flex items-center justify-center group"
                >
                  Get Started
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform duration-200" size={20} />
                </button>
                <button 
                  onClick={() => router.push('/projects')}
                  className="border border-gray-600 text-white px-8 py-4 rounded-full font-semibold hover:border-green-500 hover:text-green-400 transition-all duration-300"
                >
                  View Portfolio
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Services Section */}
      <section className="py-16 lg:py-20 bg-gray-800/30">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12 lg:mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">Core Services</h2>
            <p className="text-gray-300 text-lg">End-to-end PDM/PLM solutions for your business</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {coreServices.map((service) => (
              <div 
                key={service.id}
                className="group p-6 lg:p-8 rounded-2xl bg-gray-800/50 border border-gray-700 hover:border-green-500/50 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-xl hover:shadow-green-500/10"
              >
                <div className="w-14 h-14 lg:w-16 lg:h-16 rounded-xl bg-gradient-to-r from-green-500 to-emerald-500 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <service.icon className="text-white" size={28} />
                </div>
                
                <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
                <p className="text-gray-300 mb-4 leading-relaxed text-sm lg:text-base">{service.description}</p>
                
                <div className="flex flex-wrap gap-2">
                  {service.features.map((feature) => (
                    <span 
                      key={`${service.id}-${feature}`}
                      className="px-3 py-1 bg-green-500/10 text-green-400 rounded-full text-xs font-medium"
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
      <section className="py-16 lg:py-20 bg-gray-900">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12 lg:mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">Industries We Serve</h2>
            <p className="text-gray-300 text-lg">Delivering PDM/PLM excellence across diverse sectors</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 lg:gap-6">
            {industries.map((industry) => (
              <div 
                key={industry.id}
                className="group p-6 rounded-2xl bg-gray-800/50 border border-gray-700 hover:border-green-500/50 transition-all duration-300 text-center hover:transform hover:scale-105"
              >
                <div className="w-14 h-14 mx-auto rounded-full bg-gradient-to-r from-green-500/20 to-emerald-500/20 flex items-center justify-center mb-4 group-hover:bg-gradient-to-r group-hover:from-green-500 group-hover:to-emerald-500 transition-all duration-300">
                  <industry.icon className="text-green-400 group-hover:text-white transition-colors duration-300" size={24} />
                </div>
                <h3 className="text-sm lg:text-base font-semibold text-white">{industry.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications & Technologies */}
      <section className="py-16 lg:py-20 bg-gray-800/50">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Certifications */}
            <div>
              <h2 className="text-2xl lg:text-3xl font-bold text-white mb-8">Certifications & Compliance</h2>
              <div className="space-y-4">
                {certifications.map((cert) => (
                  <div 
                    key={cert.id}
                    className="flex items-center p-4 rounded-xl bg-gray-800/50 border border-gray-700 hover:border-green-500/50 transition-all duration-300"
                  >
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-green-500 to-emerald-500 flex items-center justify-center mr-4">
                      <cert.icon className="text-white" size={24} />
                    </div>
                    <span className="text-white font-medium">{cert.title}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Technologies */}
            <div>
              <h2 className="text-2xl lg:text-3xl font-bold text-white mb-8">Technologies & Tools</h2>
              <div className="space-y-6">
                {technologies.map((tech) => (
                  <div key={tech.id}>
                    <h3 className="text-green-400 font-semibold mb-3">{tech.category}</h3>
                    <div className="flex flex-wrap gap-2">
                      {tech.items.map((item) => (
                        <span 
                          key={`${tech.id}-${item}`}
                          className="px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-gray-300 text-sm hover:border-green-500/50 transition-colors duration-300"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 lg:py-20 bg-gray-900">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12 lg:mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">Why Choose Lotos Root?</h2>
            <p className="text-gray-300 text-lg">Experience excellence in PDM/PLM services</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {whyChooseUs.map((item) => (
              <div key={item.id} className="text-center group">
                <div className="w-16 h-16 lg:w-20 lg:h-20 mx-auto mb-6 rounded-full bg-gradient-to-r from-green-500 to-emerald-500 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-green-500/25">
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
      <section className="py-16 lg:py-20 bg-gradient-to-r from-green-500/10 to-emerald-500/10 border-t border-green-500/20">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">Ready to Streamline Your Product Lifecycle?</h2>
          <p className="text-lg lg:text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Let&apos;s discuss how our PDM/PLM services can transform your product development process and improve collaboration across teams.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button 
              onClick={scrollToContact}
              className="bg-gradient-to-r from-green-500 to-emerald-500 text-white px-8 py-4 rounded-full font-semibold hover:shadow-lg hover:shadow-green-500/25 transition-all duration-300 flex items-center justify-center group"
            >
              <Database className="mr-2" size={20} />
              Start Your Project
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform duration-200" size={20} />
            </button>
            <button 
              onClick={() => router.push('/digital-engineering')}
              className="border border-gray-600 text-white px-8 py-4 rounded-full font-semibold hover:border-green-500 hover:text-green-400 transition-all duration-300"
            >
              Back to Engineering Services
            </button>
          </div>
        </div>
      </section>

    </div>
  );
};

export default PDMPLMContent;
