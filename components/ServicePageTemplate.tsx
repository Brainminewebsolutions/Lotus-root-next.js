'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { LucideIcon, ArrowRight, CheckCircle } from 'lucide-react';

interface Stat {
  value: string;
  label: string;
  icon: LucideIcon;
  color: string;
}

interface Content {
  type: string;
  title: string;
  description: string;
  readTime: string;
  category: string;
  image: string;
}

interface Service {
  id?: string;
  title: string;
  description: string;
  icon: LucideIcon;
  features: string[];
  route?: string | null;
}

interface WhyChooseItem {
  icon: LucideIcon;
  title: string;
  description: string;
}

interface CornerIcon {
  icon: LucideIcon;
  color: string;
  borderColor: string;
  position: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';
  delay: string;
}

interface ServicePageProps {
  // Hero section
  heroTitle: string;
  heroHighlight: string;
  heroDescription: string;
  heroPatternId: string;
  heroPatternColor: string;
  heroGradientFrom: string;
  heroGradientTo: string;
  heroIcon: LucideIcon;
  heroCornerIcons?: CornerIcon[];
  heroTagline?: string;
  heroCTAText?: string;
  heroSecondaryCTAText?: string;
  
  // Stats section
  stats: Stat[];
  statsSectionTitle?: string;
  statsSectionSubtitle?: string;
  
  // Content section
  trendingContent: Content[];
  trendingSectionTitle?: string;
  trendingSectionSubtitle?: string;
  
  // Services section
  services: Service[];
  servicesSectionTitle?: string;
  servicesSectionSubtitle?: string;
  
  // Why choose us section
  whyChooseUs: WhyChooseItem[];
  whyChooseSectionTitle?: string;
  whyChooseSectionSubtitle?: string;
  
  // CTA section
  ctaTitle?: string;
  ctaDescription?: string;
  ctaButtonText?: string;
  ctaBorderColor?: string;
}

export default function ServicePageTemplate({
  heroTitle,
  heroHighlight,
  heroDescription,
  heroPatternId,
  heroPatternColor,
  heroGradientFrom,
  heroGradientTo,
  heroIcon: HeroIcon,
  heroCornerIcons,
  heroTagline,
  heroCTAText = 'Start Your Project',
  heroSecondaryCTAText = 'View Portfolio',
  stats,
  statsSectionTitle = 'Impact & Results',
  statsSectionSubtitle = 'How we deliver measurable outcomes',
  trendingContent,
  trendingSectionTitle = "What's Trending",
  trendingSectionSubtitle = 'Latest insights and developments',
  services,
  servicesSectionTitle = 'Our Services',
  servicesSectionSubtitle = 'Comprehensive solutions tailored to your needs',
  whyChooseUs,
  whyChooseSectionTitle = 'Why Choose Lotus Roots?',
  whyChooseSectionSubtitle = 'Partner with experts who understand your industry',
  ctaTitle = 'Ready to Get Started?',
  ctaDescription = "Let's discuss how we can help transform your business with our expertise.",
  ctaButtonText = 'Contact Us Today',
  ctaBorderColor = 'border-purple-500/20'
}: ServicePageProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [activeService, setActiveService] = useState(0);
  const router = useRouter();

  useEffect(() => {
    globalThis.scrollTo(0, 0);
    setIsVisible(true);
  }, []);

  const scrollToContact = () => {
    router.push('/contact');
  };

  // Position classes for corner icons
  const getPositionClasses = (position: CornerIcon['position']) => {
    switch (position) {
      case 'top-left': return 'top-8 left-8';
      case 'top-right': return 'top-8 right-8';
      case 'bottom-left': return 'bottom-8 left-8';
      case 'bottom-right': return 'bottom-8 right-8';
      default: return '';
    }
  };

  return (
    <div className="min-h-screen bg-gray-900">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-gray-900 via-gray-900 to-gray-800 pt-20">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <svg width="100%" height="100%" className="w-full h-full">
            <defs>
              <pattern id={heroPatternId} x="0" y="0" width="60" height="60" patternUnits="userSpaceOnUse">
                <path d="M0 30h60M30 0v60M15 15h30v30h-30z" stroke="currentColor" strokeWidth="0.5" fill="none" className={heroPatternColor}/>
                <circle cx="15" cy="15" r="1" fill="currentColor" className={heroPatternColor}/>
                <circle cx="45" cy="15" r="1" fill="currentColor" className={heroPatternColor}/>
                <circle cx="15" cy="45" r="1" fill="currentColor" className={heroPatternColor}/>
                <circle cx="45" cy="45" r="1" fill="currentColor" className={heroPatternColor}/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill={`url(#${heroPatternId})`}/>
          </svg>
        </div>

        <div className="container mx-auto px-6 py-32">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Side - Conceptual Illustration with Animations */}
            <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}>
              <div className="relative">
                <div className="relative w-96 h-96 mx-auto">
                  {/* Pulsing concentric circles */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${heroGradientFrom} ${heroGradientTo} rounded-full animate-pulse`}></div>
                  <div className={`absolute inset-8 bg-gradient-to-br ${heroGradientFrom} ${heroGradientTo} rounded-full animate-pulse`} style={{ animationDelay: '500ms' }}></div>
                  <div className={`absolute inset-16 bg-gradient-to-br ${heroGradientFrom} ${heroGradientTo} rounded-full animate-pulse`} style={{ animationDelay: '1000ms' }}></div>
                  
                  {/* Center icon */}
                  <div className="absolute inset-24 flex items-center justify-center">
                    <div className={`w-32 h-32 bg-gradient-to-br ${heroGradientFrom.replace('/20', '')} ${heroGradientTo.replace('/20', '')} rounded-2xl flex items-center justify-center shadow-2xl`}>
                      <HeroIcon className="text-white" size={64} />
                    </div>
                  </div>

                  {/* Corner bouncing icons */}
                  {heroCornerIcons?.map((cornerIcon, index) => {
                    const CornerIconComponent = cornerIcon.icon;
                    return (
                      <div 
                        key={index}
                        className={`absolute ${getPositionClasses(cornerIcon.position)} animate-bounce`}
                        style={{ animationDelay: cornerIcon.delay }}
                      >
                        <div className={`p-3 bg-gray-800/80 backdrop-blur-sm rounded-full border ${cornerIcon.borderColor}`}>
                          <CornerIconComponent className={cornerIcon.color} size={20} />
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Right Side - Content */}
            <div className={`transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}>
              {heroTagline && (
                <div className="flex items-center space-x-3 mb-6">
                  <div className={`w-3 h-3 bg-gradient-to-r ${heroGradientFrom.replace('/20', '')} ${heroGradientTo.replace('/20', '')} rounded-full animate-pulse`}></div>
                  <span className={`${heroPatternColor.replace('text-', 'text-')} font-medium`}>{heroTagline}</span>
                </div>
              )}
              
              <h1 className="text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                {heroTitle.split(heroHighlight)[0]}
                <span className={`bg-gradient-to-r ${heroGradientFrom.replace('/20', '')} ${heroGradientTo.replace('/20', '')} bg-clip-text text-transparent`}>
                  {heroHighlight}
                </span>
                {heroTitle.split(heroHighlight)[1] || ''}
              </h1>
              
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                {heroDescription}
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <button 
                  onClick={scrollToContact}
                  className={`bg-gradient-to-r ${heroGradientFrom.replace('/20', '')} ${heroGradientTo.replace('/20', '')} text-white px-8 py-4 rounded-full font-semibold hover:shadow-lg transition-all duration-300 flex items-center justify-center group`}
                >
                  Start Your Project
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform duration-200" size={20} />
                </button>
                <Link 
                  href="/projects"
                  className="border border-gray-600 text-white px-8 py-4 rounded-full font-semibold hover:border-purple-500 hover:text-purple-400 transition-all duration-300 text-center"
                >
                  View Portfolio
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section - BEFORE Stats like original */}
      <section className="py-20 bg-gray-800/30">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">{servicesSectionTitle}</h2>
            <p className="text-gray-300 text-lg">{servicesSectionSubtitle}</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 items-stretch">
            {services.map((service, index) => {
              const ServiceIcon = service.icon;
              return (
                <div
                  key={service.id || service.title}
                  className="group cursor-pointer h-full"
                  onMouseEnter={() => setActiveService(index)}
                  onClick={() => service.route && router.push(service.route)}
                  onKeyDown={(e) => e.key === 'Enter' && service.route && router.push(service.route)}
                  role="button"
                  tabIndex={0}
                >
                  <div className={`p-6 rounded-2xl border transition-all duration-300 h-full flex flex-col ${
                    activeService === index 
                      ? `bg-gradient-to-br ${heroGradientFrom} ${heroGradientTo} border-purple-500/50 transform scale-105` 
                      : 'bg-gray-800/50 border-gray-700 hover:border-purple-500/30'
                  }`}>
                    <div className={`w-16 h-16 rounded-xl mb-6 flex items-center justify-center transition-all duration-300 ${
                      activeService === index
                        ? `bg-gradient-to-r ${heroGradientFrom.replace('/20', '')} ${heroGradientTo.replace('/20', '')} shadow-lg shadow-purple-500/25` 
                        : 'bg-gray-700 group-hover:bg-purple-500/20'
                    }`}>
                      <ServiceIcon className="text-white" size={28} />
                    </div>
                    
                    <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
                    <p className="text-gray-300 mb-4 leading-relaxed flex-1">{service.description}</p>
                    
                    <ul className="space-y-2">
                      {service.features.map((feature) => (
                        <li key={feature} className="flex items-center space-x-2">
                          <CheckCircle className="text-green-400" size={16} />
                          <span className="text-gray-300 text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gray-800/50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">{statsSectionTitle}</h2>
            <p className="text-gray-300 text-lg">{statsSectionSubtitle}</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {stats.map((stat) => {
              const StatIcon = stat.icon;
              return (
                <div key={stat.label} className="text-center group">
                  <div className={`w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-r ${stat.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <StatIcon className="text-white" size={32} />
                  </div>
                  <div className={`text-6xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-4`}>
                    {stat.value}
                  </div>
                  <p className="text-gray-300 text-lg leading-relaxed max-w-sm mx-auto">
                    {stat.label}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* What's Trending Section */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">{trendingSectionTitle}</h2>
            <p className="text-gray-300 text-lg">{trendingSectionSubtitle}</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 items-stretch">
            {trendingContent.map((content) => (
              <div key={content.title} className="group cursor-pointer h-full">
                <div className="relative overflow-hidden rounded-2xl bg-gray-800 border border-gray-700 hover:border-opacity-50 transition-all duration-300 hover:transform hover:scale-105 h-full flex flex-col">
                  <div className="h-48 relative overflow-hidden">
                    <Image 
                      src={content.image} 
                      alt={content.title}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 to-transparent"></div>
                    <div className="absolute top-4 left-4">
                      <span className={`bg-gradient-to-r ${heroGradientFrom.replace('/20', '')}/20 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-medium`} style={{ color: heroPatternColor.replace('text-', '') }}>
                        {content.type}
                      </span>
                    </div>
                    <div className="absolute top-4 right-4">
                      <span className="bg-gray-800/80 backdrop-blur-sm text-gray-300 px-3 py-1 rounded-full text-sm">
                        {content.readTime}
                      </span>
                    </div>
                  </div>
                  
                  <div className="p-6 flex-1 flex flex-col">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-gray-400 text-sm">{content.category}</span>
                      <ArrowRight className="group-hover:translate-x-1 transition-transform duration-200" size={16} style={{ color: heroPatternColor.replace('text-', '') }} />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3 group-hover:opacity-80 transition-colors duration-200">
                      {content.title}
                    </h3>
                    <p className="text-gray-300 leading-relaxed flex-1">
                      {content.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">{whyChooseSectionTitle}</h2>
            <p className="text-gray-300 text-lg">{whyChooseSectionSubtitle}</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyChooseUs.map((item) => {
              const ItemIcon = item.icon;
              return (
                <div key={item.title} className="text-center group">
                  <div className={`w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-r ${heroGradientFrom.replace('/20', '')} ${heroGradientTo.replace('/20', '')} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <ItemIcon className="text-white" size={32} />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                  <p className="text-gray-300 leading-relaxed">{item.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className={`py-20 bg-gradient-to-r ${heroGradientFrom} ${heroGradientTo} border-t ${ctaBorderColor}`}>
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">{ctaTitle}</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            {ctaDescription}
          </p>
          
          <div className="flex justify-center">
            <button 
              type="button"
              onClick={scrollToContact}
              className={`bg-gradient-to-r ${heroGradientFrom.replace('/20', '')} ${heroGradientTo.replace('/20', '')} text-white px-8 py-4 rounded-full font-semibold hover:shadow-lg transition-all duration-300 flex items-center justify-center group`}
            >
              <HeroIcon className="mr-2" size={20} />
              {ctaButtonText}
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform duration-200" size={20} />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
