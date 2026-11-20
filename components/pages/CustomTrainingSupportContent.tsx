'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { 
  GraduationCap, 
  Users, 
  Monitor, 
  ArrowRight, 
  Target,
  Award,
  BookOpen,
  Headphones,
  Wrench,
  Video,
  FileText,
  CheckCircle2,
  Clock,
  Globe,
  Settings
} from 'lucide-react';

const CustomTrainingSupportContent = () => {
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
      id: 'custom-training',
      icon: GraduationCap,
      title: 'Custom CAD Training Programs',
      description: 'Tailored training for industry-standard software like AutoCAD, Inventor, SolidWorks, Creo, CATIA, Revit, and more. From beginner to advanced levels with specialized training in parametric design, 3D modeling, and simulation.',
      features: ['AutoCAD', 'Inventor', 'SolidWorks', 'Creo', 'CATIA', 'Revit']
    },
    {
      id: 'workshops',
      icon: Award,
      title: 'Workshops & Certification Courses',
      description: 'Hands-on workshops for individuals and teams with certification programs aligned with industry requirements. Focus on real-world applications and problem-solving.',
      features: ['Hands-on Learning', 'Industry Certifications', 'Real-world Projects', 'Problem Solving']
    },
    {
      id: 'remote-training',
      icon: Globe,
      title: 'On-Site & Remote Training',
      description: 'On-site corporate training tailored to organizational needs and online training sessions with flexible schedules. Interactive learning modules and practice projects.',
      features: ['Corporate Training', 'Online Sessions', 'Flexible Schedules', 'Interactive Modules']
    },
    {
      id: 'support',
      icon: Headphones,
      title: 'CAD Support Services',
      description: 'Technical support for troubleshooting CAD software issues. Assistance with installing, configuring, and optimizing CAD tools. Guidance on utilizing APIs and customizing workflows.',
      features: ['Troubleshooting', 'Installation Help', 'Configuration', 'API Guidance']
    },
    {
      id: 'workflow',
      icon: Settings,
      title: 'Custom Workflow Optimization',
      description: 'Development of bespoke templates, libraries, and macros to streamline repetitive tasks. Training on automating processes using CAD plugins and scripting. Advanced solutions for integrating CAD with PLM/ERP systems.',
      features: ['Custom Templates', 'Macro Development', 'Process Automation', 'PLM/ERP Integration']
    }
  ];

  const trainingFormats = [
    {
      id: 'onsite',
      icon: Users,
      title: 'On-Site Training',
      description: 'In-person training at your location for teams and organizations.'
    },
    {
      id: 'online',
      icon: Video,
      title: 'Live Online Sessions',
      description: 'Interactive virtual training with real-time instructor interaction.'
    },
    {
      id: 'self-paced',
      icon: Clock,
      title: 'Self-Paced Learning',
      description: 'Flexible learning modules you can complete at your own pace.'
    },
    {
      id: 'hybrid',
      icon: Monitor,
      title: 'Hybrid Programs',
      description: 'Combination of online and on-site training for maximum flexibility.'
    }
  ];

  const softwareCovered = [
    { id: 'autocad', name: 'AutoCAD', level: 'All Levels' },
    { id: 'inventor', name: 'Inventor', level: 'All Levels' },
    { id: 'solidworks', name: 'SolidWorks', level: 'All Levels' },
    { id: 'creo', name: 'Creo', level: 'All Levels' },
    { id: 'catia', name: 'CATIA', level: 'All Levels' },
    { id: 'revit', name: 'Revit', level: 'All Levels' }
  ];

  const whyChooseUs = [
    {
      id: 'expert',
      icon: Award,
      title: 'Expert Instructors',
      description: 'Industry veterans with years of real-world CAD experience.'
    },
    {
      id: 'customized',
      icon: Target,
      title: 'Customized Content',
      description: 'Training programs tailored to your specific needs and industry.'
    },
    {
      id: 'practical',
      icon: Wrench,
      title: 'Practical Focus',
      description: 'Hands-on exercises and real-world project-based learning.'
    },
    {
      id: 'ongoing',
      icon: Headphones,
      title: 'Ongoing Support',
      description: 'Continuous support even after training completion.'
    }
  ];

  const trainingBenefits = [
    { id: 'skill', text: 'Enhanced skill proficiency across CAD platforms' },
    { id: 'productivity', text: 'Increased productivity and efficiency' },
    { id: 'errors', text: 'Reduced errors and rework' },
    { id: 'confidence', text: 'Greater confidence in using advanced features' },
    { id: 'certification', text: 'Industry-recognized certifications' },
    { id: 'best', text: 'Knowledge of best practices and workflows' }
  ];

  return (
    <div className="min-h-screen bg-gray-900">
      
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-gray-900 via-gray-900 to-gray-800 pt-20">
        <div className="absolute inset-0 opacity-10">
          <svg width="100%" height="100%" className="w-full h-full">
            <defs>
              <pattern id="training-pattern" x="0" y="0" width="80" height="80" patternUnits="userSpaceOnUse">
                <circle cx="40" cy="40" r="3" fill="currentColor" className="text-pink-400"/>
                <path d="M10 40h60M40 10v60" stroke="currentColor" strokeWidth="0.3" fill="none" className="text-pink-400"/>
                <rect x="25" y="25" width="30" height="30" stroke="currentColor" strokeWidth="0.5" fill="none" className="text-pink-400" rx="5"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#training-pattern)"/>
          </svg>
        </div>

        <div className="container mx-auto px-6 py-24 lg:py-32">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Side - Animation */}
            <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}>
              <div className="relative">
                <div className="relative w-80 h-80 lg:w-96 lg:h-96 mx-auto">
                  {/* Background elements */}
                  <div className="absolute inset-0 bg-gradient-to-br from-pink-500/10 to-rose-500/10 rounded-full"></div>
                  
                  {/* Animated book/learning elements */}
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-48 h-32 bg-gradient-to-br from-pink-500/20 to-rose-500/20 rounded-xl border border-pink-500/30 flex items-center justify-center animate-pulse">
                    <BookOpen className="text-pink-400" size={40} />
                  </div>
                  
                  {/* Center graduation cap */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                    <div className="w-28 h-28 lg:w-32 lg:h-32 bg-gradient-to-br from-pink-500 to-rose-500 rounded-2xl flex items-center justify-center shadow-2xl shadow-pink-500/50 transform hover:scale-105 transition-transform duration-500">
                      <GraduationCap className="text-white" size={56} />
                    </div>
                  </div>
                  
                  {/* Bottom elements */}
                  <div className="absolute bottom-0 left-1/4 w-20 h-20 bg-gradient-to-br from-pink-500/30 to-rose-500/30 rounded-xl border border-pink-500/40 flex items-center justify-center animate-bounce" style={{ animationDelay: '200ms' }}>
                    <FileText className="text-pink-400" size={28} />
                  </div>
                  <div className="absolute bottom-0 right-1/4 w-20 h-20 bg-gradient-to-br from-rose-500/30 to-pink-500/30 rounded-xl border border-rose-500/40 flex items-center justify-center animate-bounce" style={{ animationDelay: '400ms' }}>
                    <Award className="text-rose-400" size={28} />
                  </div>

                  {/* Corner icons */}
                  <div className="absolute top-8 left-0 animate-bounce">
                    <div className="p-3 bg-gray-800/80 backdrop-blur-sm rounded-xl border border-pink-500/50 shadow-lg">
                      <Users className="text-pink-400" size={24} />
                    </div>
                  </div>
                  <div className="absolute top-8 right-0 animate-bounce" style={{ animationDelay: '300ms' }}>
                    <div className="p-3 bg-gray-800/80 backdrop-blur-sm rounded-xl border border-rose-500/50 shadow-lg">
                      <Monitor className="text-rose-400" size={24} />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side - Content */}
            <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`} style={{ transitionDelay: '300ms' }}>
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-3 h-3 bg-gradient-to-r from-pink-500 to-rose-500 rounded-full animate-pulse"></div>
                <span className="text-pink-400 font-medium">Custom Training & Support</span>
              </div>
              
              <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-6 leading-tight">
                Expert{' '}
                <span className="bg-gradient-to-r from-pink-500 to-rose-500 bg-clip-text text-transparent">
                  CAD Training
                </span>
              </h1>
              
              <p className="text-lg lg:text-xl text-gray-300 mb-8 leading-relaxed">
                Lotos Root is a premier provider of Custom CAD Training and Support Services, specializing in empowering professionals and organizations to excel in computer-aided design. We ensure our clients gain mastery over leading CAD software and tools.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <button 
                  onClick={scrollToContact}
                  className="bg-gradient-to-r from-pink-500 to-rose-500 text-white px-8 py-4 rounded-full font-semibold hover:shadow-lg hover:shadow-pink-500/25 transition-all duration-300 flex items-center justify-center group"
                >
                  Get Started
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform duration-200" size={20} />
                </button>
                <button 
                  onClick={() => router.push('/projects')}
                  className="border border-gray-600 text-white px-8 py-4 rounded-full font-semibold hover:border-pink-500 hover:text-pink-400 transition-all duration-300"
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
              To deliver high-quality, customized training and support services, fostering innovation and efficiency in CAD workflows while ensuring long-term success for our clients.
            </p>
          </div>
        </div>
      </section>

      {/* Core Services Section */}
      <section className="py-16 lg:py-20 bg-gray-900">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12 lg:mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">Core Services</h2>
            <p className="text-gray-300 text-lg">Comprehensive training and support solutions</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {coreServices.map((service) => (
              <div 
                key={service.id}
                className="group p-6 lg:p-8 rounded-2xl bg-gray-800/50 border border-gray-700 hover:border-pink-500/50 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-xl hover:shadow-pink-500/10"
              >
                <div className="w-14 h-14 lg:w-16 lg:h-16 rounded-xl bg-gradient-to-r from-pink-500 to-rose-500 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <service.icon className="text-white" size={28} />
                </div>
                
                <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
                <p className="text-gray-300 mb-4 leading-relaxed text-sm lg:text-base">{service.description}</p>
                
                <div className="flex flex-wrap gap-2">
                  {service.features.map((feature) => (
                    <span 
                      key={`${service.id}-${feature}`}
                      className="px-3 py-1 bg-pink-500/10 text-pink-400 rounded-full text-xs font-medium"
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

      {/* Training Formats Section */}
      <section className="py-16 lg:py-20 bg-gray-800/50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12 lg:mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">Training Formats</h2>
            <p className="text-gray-300 text-lg">Flexible learning options to suit your needs</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {trainingFormats.map((format) => (
              <div 
                key={format.id}
                className="group p-6 rounded-2xl bg-gray-800/50 border border-gray-700 hover:border-pink-500/50 transition-all duration-300 text-center hover:transform hover:scale-105"
              >
                <div className="w-16 h-16 mx-auto rounded-full bg-gradient-to-r from-pink-500/20 to-rose-500/20 flex items-center justify-center mb-4 group-hover:bg-gradient-to-r group-hover:from-pink-500 group-hover:to-rose-500 transition-all duration-300">
                  <format.icon className="text-pink-400 group-hover:text-white transition-colors duration-300" size={28} />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{format.title}</h3>
                <p className="text-gray-300 text-sm">{format.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Software Covered Section */}
      <section className="py-16 lg:py-20 bg-gray-900">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12 lg:mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">Software We Cover</h2>
            <p className="text-gray-300 text-lg">Industry-leading CAD software training</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 lg:gap-6">
            {softwareCovered.map((software) => (
              <div 
                key={software.id}
                className="group p-6 rounded-2xl bg-gray-800/50 border border-gray-700 hover:border-pink-500/50 transition-all duration-300 text-center hover:transform hover:scale-105"
              >
                <h3 className="text-lg font-bold text-white mb-2">{software.name}</h3>
                <span className="text-pink-400 text-sm">{software.level}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 lg:py-20 bg-gray-800/30">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12 lg:mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">Training Benefits</h2>
            <p className="text-gray-300 text-lg">What you&apos;ll gain from our training programs</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6 max-w-5xl mx-auto">
            {trainingBenefits.map((benefit) => (
              <div 
                key={benefit.id}
                className="flex items-center p-4 lg:p-5 rounded-xl bg-gray-800/50 border border-gray-700 hover:border-pink-500/50 transition-all duration-300 group"
              >
                <div className="w-10 h-10 rounded-lg bg-gradient-to-r from-pink-500 to-rose-500 flex items-center justify-center mr-4 flex-shrink-0">
                  <CheckCircle2 className="text-white" size={20} />
                </div>
                <span className="text-white font-medium text-sm lg:text-base">{benefit.text}</span>
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
            <p className="text-gray-300 text-lg">Experience excellence in CAD training</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {whyChooseUs.map((item) => (
              <div key={item.id} className="text-center group">
                <div className="w-16 h-16 lg:w-20 lg:h-20 mx-auto mb-6 rounded-full bg-gradient-to-r from-pink-500 to-rose-500 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-pink-500/25">
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
      <section className="py-16 lg:py-20 bg-gradient-to-r from-pink-500/10 to-rose-500/10 border-t border-pink-500/20">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">Ready to Elevate Your CAD Skills?</h2>
          <p className="text-lg lg:text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Let&apos;s discuss how our custom training programs can empower your team to excel in CAD design and development.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button 
              onClick={scrollToContact}
              className="bg-gradient-to-r from-pink-500 to-rose-500 text-white px-8 py-4 rounded-full font-semibold hover:shadow-lg hover:shadow-pink-500/25 transition-all duration-300 flex items-center justify-center group"
            >
              <GraduationCap className="mr-2" size={20} />
              Start Training
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform duration-200" size={20} />
            </button>
            <button 
              onClick={() => router.push('/digital-engineering')}
              className="border border-gray-600 text-white px-8 py-4 rounded-full font-semibold hover:border-pink-500 hover:text-pink-400 transition-all duration-300"
            >
              Back to Engineering Services
            </button>
          </div>
        </div>
      </section>

    </div>
  );
};

export default CustomTrainingSupportContent;
