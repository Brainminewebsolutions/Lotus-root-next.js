'use client';

import ServicePageTemplate from '@/components/ServicePageTemplate';
import { Globe, Code, Smartphone, Database, TrendingUp, Zap, CheckCircle, Users, Target, Award } from 'lucide-react';

export default function WebDevelopmentContent() {
  const stats = [
    {
      value: '73%',
      label: 'of AEC companies report improved project efficiency with custom web applications',
      icon: TrendingUp,
      color: 'from-cyan-500 to-blue-500'
    },
    {
      value: '2.5x',
      label: 'faster project delivery with integrated digital solutions',
      icon: Zap,
      color: 'from-green-500 to-emerald-500'
    },
    {
      value: '90%',
      label: 'reduction in manual data entry with automated workflows',
      icon: Database,
      color: 'from-purple-500 to-violet-500'
    }
  ];

  const trendingContent = [
    {
      type: 'Research Report',
      title: 'Digital Transformation in Construction 2024',
      description: 'Comprehensive analysis of how web technologies are revolutionizing the AEC industry.',
      readTime: '12 min read',
      category: 'Industry Insights',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=250&fit=crop&auto=format'
    },
    {
      type: 'Case Study',
      title: 'Building Management Platform for £2B Development',
      description: 'How we created a comprehensive web platform managing multiple construction phases.',
      readTime: '10 min read',
      category: 'Success Story',
      image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?w=400&h=250&fit=crop&auto=format'
    },
    {
      type: 'Blog',
      title: 'Progressive Web Apps for Construction Teams',
      description: 'Building offline-capable applications for field workers and project managers.',
      readTime: '8 min read',
      category: 'Technical Guide',
      image: 'https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?w=400&h=250&fit=crop&auto=format'
    }
  ];

  const services = [
    {
      title: 'Custom Web Applications',
      description: 'Tailored web solutions for project management, collaboration, and workflow optimization.',
      icon: Globe,
      features: ['Project management dashboards', 'Real-time collaboration tools', 'Document management systems', 'Custom reporting interfaces']
    },
    {
      title: 'Mobile Applications',
      description: 'Native and cross-platform mobile apps for field operations and remote access.',
      icon: Smartphone,
      features: ['Field data collection apps', 'Inspection and audit tools', 'Offline-capable solutions', 'Real-time synchronization']
    },
    {
      title: 'API Development',
      description: 'Robust APIs for system integration and third-party software connectivity.',
      icon: Code,
      features: ['RESTful API design', 'BIM software integration', 'ERP system connections', 'Real-time data exchange']
    },
    {
      title: 'Database Solutions',
      description: 'Scalable database architecture for large-scale construction data management.',
      icon: Database,
      features: ['Cloud database design', 'Data migration services', 'Performance optimization', 'Backup and recovery']
    }
  ];

  const whyChooseUs = [
    {
      icon: Award,
      title: 'AEC Expertise',
      description: 'Deep understanding of construction workflows and industry requirements.'
    },
    {
      icon: Users,
      title: 'Full-Stack Team',
      description: 'Complete development team from UI/UX design to backend architecture.'
    },
    {
      icon: Zap,
      title: 'Agile Delivery',
      description: 'Fast, iterative development with regular client feedback and updates.'
    },
    {
      icon: Target,
      title: 'Scalable Solutions',
      description: 'Future-proof applications that grow with your business needs.'
    }
  ];

  return (
    <ServicePageTemplate
      heroTitle="Build Your Digital Future"
      heroHighlight="Digital Future"
      heroDescription="Custom web and mobile applications designed specifically for the AEC industry. Transform your workflows with cutting-edge technology solutions that drive efficiency and growth."
      heroPatternId="web-pattern"
      heroPatternColor="text-cyan-400"
      heroGradientFrom="from-cyan-500/20"
      heroGradientTo="to-blue-500/20"
      heroIcon={Globe}
      heroCornerIcons={[
        { icon: Code, color: 'text-cyan-400', borderColor: 'border-cyan-500/50', position: 'top-left' as const, delay: '1000ms' },
        { icon: Smartphone, color: 'text-blue-400', borderColor: 'border-blue-500/50', position: 'top-right' as const, delay: '2000ms' },
        { icon: Database, color: 'text-green-400', borderColor: 'border-green-500/50', position: 'bottom-left' as const, delay: '0ms' },
        { icon: Zap, color: 'text-purple-400', borderColor: 'border-purple-500/50', position: 'bottom-right' as const, delay: '500ms' },
      ]}
      heroTagline="Web & Application Development"
      heroCTAText="Start Your Project"
      heroSecondaryCTAText="View Portfolio"
      servicesSectionTitle="Our Development Services"
      servicesSectionSubtitle="Full-stack solutions for modern businesses"
      statsSectionTitle="Development Impact"
      statsSectionSubtitle="How custom solutions transform AEC operations"
      trendingSectionTitle="What's Trending"
      trendingSectionSubtitle="Latest insights in web and mobile development"
      whyChooseSectionTitle="Why Choose Lotus Roots for Development?"
      whyChooseSectionSubtitle="Expert development team with AEC industry knowledge"
      ctaTitle="Ready to Build Your Digital Platform?"
      ctaDescription="Let's discuss how custom web and mobile solutions can streamline your operations and drive growth."
      ctaButtonText="Start Your Project"
      ctaBorderColor="border-cyan-500/20"
      stats={stats}
      trendingContent={trendingContent}
      services={services}
      whyChooseUs={whyChooseUs}
    />
  );
}
