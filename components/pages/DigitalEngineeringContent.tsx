'use client';

import ServicePageTemplate from '@/components/ServicePageTemplate';
import { Building, Layers, Globe2, Settings, Users, Leaf, Zap, Award, Target, Pencil, Database, Code2, GraduationCap } from 'lucide-react';

export default function DigitalEngineeringContent() {
  const heroCornerIcons = [
    { icon: Layers, color: 'text-purple-400', borderColor: 'border-purple-500/50', position: 'top-left' as const, delay: '1000ms' },
    { icon: Globe2, color: 'text-blue-400', borderColor: 'border-blue-500/50', position: 'top-right' as const, delay: '2000ms' },
    { icon: Leaf, color: 'text-green-400', borderColor: 'border-green-500/50', position: 'bottom-left' as const, delay: '0ms' },
    { icon: Settings, color: 'text-orange-400', borderColor: 'border-orange-500/50', position: 'bottom-right' as const, delay: '500ms' },
  ];

  const stats = [
    {
      value: '85%',
      label: 'reduction in design errors with BIM implementation',
      icon: Building,
      color: 'from-purple-500 to-violet-500'
    },
    {
      value: '40%',
      label: 'faster project delivery with digital twin technology',
      icon: Zap,
      color: 'from-blue-500 to-indigo-500'
    },
    {
      value: '60%',
      label: 'improvement in sustainability metrics through digital solutions',
      icon: Leaf,
      color: 'from-green-500 to-emerald-500'
    }
  ];

  const trendingContent = [
    {
      type: 'Research Report',
      title: 'Digital Transformation in Infrastructure 2024',
      description: 'A clear look at how digital engineering is changing the way we plan, build, and run infrastructure projects.',
      readTime: '16 min read',
      category: 'Industry Analysis',
      image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=400&h=250&fit=crop&auto=format'
    },
    {
      type: 'Case Study',
      title: 'BIM Implementation for £800M Transport Hub',
      description: 'How we provided full BIM services for a large transport hub, improving coordination and cutting errors.',
      readTime: '12 min read',
      category: 'Success Story',
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=250&fit=crop&auto=format'
    },
    {
      type: 'Blog',
      title: 'Digital Twins in Smart City Development',
      description: 'How digital twin technology helps cities plan smarter, greener, and more connected urban spaces.',
      readTime: '9 min read',
      category: 'Technical Guide',
      image: 'https://images.unsplash.com/photo-1573804633927-bfcbcd909acd?w=400&h=250&fit=crop&auto=format'
    }
  ];

  const services = [
    {
      id: 'bim',
      title: 'End-to-End BIM Services',
      description: 'Comprehensive Building Information Modeling solutions from concept to completion.',
      icon: Building,
      features: ['3D/4D/5D BIM modeling', 'Clash detection & resolution', 'BIM coordination', 'Model validation & QA'],
      route: '/building-information-modeling-services'
    },
    {
      id: 'geobim',
      title: 'GeoBIM Solutions',
      description: 'Integration of geographic information systems with BIM for enhanced spatial analysis.',
      icon: Globe2,
      features: ['GIS-BIM integration', 'Spatial data analysis', 'Terrain modeling', 'Infrastructure mapping']
    },
    {
      id: 'digital-twin',
      title: 'Digital Twin & Industry 4.0',
      description: 'Advanced digital twin implementations for real-time monitoring and optimization.',
      icon: Layers,
      features: ['IoT integration', 'Real-time monitoring', 'Predictive maintenance', 'Performance optimization']
    },
    {
      id: 'consulting',
      title: 'Engineering Consulting',
      description: 'Expert engineering consultation and project management for complex infrastructure.',
      icon: Settings,
      features: ['Structural analysis', 'Project planning', 'Risk assessment', 'Quality assurance']
    },
    {
      id: 'cad-services',
      title: 'CAD Services',
      description: 'High-quality 3D modeling, 2D drafting, and reverse engineering solutions.',
      icon: Pencil,
      features: ['3D CAD Modeling', '2D Drafting', 'Reverse Engineering', 'FEA & Simulation'],
      route: '/digital-engineering/cad-services'
    },
    {
      id: 'pdm-plm',
      title: 'PDM/PLM',
      description: 'Streamline product development with Autodesk PDM and PLM solutions.',
      icon: Database,
      features: ['Vault Implementation', 'PLM Integration', 'Data Migration', 'Process Optimization'],
      route: '/digital-engineering/pdm-plm'
    },
    {
      id: 'cad-automation',
      title: 'CAD Automation & Development',
      description: 'Custom automation solutions to enhance productivity and reduce design cycles.',
      icon: Code2,
      features: ['Macros & Scripts', 'Custom Software', 'API Development', 'VR/AR Integration'],
      route: '/digital-engineering/cad-automation'
    },
    {
      id: 'training',
      title: 'Custom Training & Support',
      description: 'Tailored CAD training programs and ongoing support for your team.',
      icon: GraduationCap,
      features: ['Custom Training', 'Certifications', 'Technical Support', 'Workflow Optimization'],
      route: '/digital-engineering/custom-training-support'
    }
  ];

  const whyChooseUs = [
    {
      icon: Award,
      title: 'Deep Expertise',
      description: 'Specialized knowledge in infrastructure and engineering domain solutions.'
    },
    {
      icon: Users,
      title: 'Global Delivery',
      description: 'Scalable resource deployment with worldwide project execution capabilities.'
    },
    {
      icon: Zap,
      title: 'Innovation Focus',
      description: 'Cutting-edge technology adoption and continuous improvement practices.'
    },
    {
      icon: Target,
      title: 'Quality Assured',
      description: 'Rigorous quality processes ensuring accuracy and reliability.'
    }
  ];

  return (
    <ServicePageTemplate
      heroTitle="Digital Engineering & BIM Services for Construction Projects"
      heroHighlight="Construction Projects"
      heroDescription="We build flexible, results-driven digital engineering solutions for the built environment. Our services cover every stage — from early design and 3D modeling to day-to-day operations and ongoing improvements."
      heroPatternId="engineering-pattern"
      heroPatternColor="text-purple-400"
      heroGradientFrom="from-purple-500/20"
      heroGradientTo="to-violet-500/20"
      heroIcon={Building}
      heroCornerIcons={heroCornerIcons}
      heroTagline="Infrastructure & Engineering Services"
      heroCTAText="Start Your Project"
      heroSecondaryCTAText="View Portfolio"
      servicesSectionTitle="Our Engineering Services"
      servicesSectionSubtitle="Comprehensive solutions for infrastructure development"
      statsSectionTitle="Engineering Impact"
      statsSectionSubtitle="How digital engineering transforms infrastructure projects"
      trendingSectionTitle="What's Trending"
      trendingSectionSubtitle="Latest insights in infrastructure and engineering"
      whyChooseSectionTitle="Why Choose Lotus Roots for Infrastructure?"
      whyChooseSectionSubtitle="Proven expertise in infrastructure and engineering solutions"
      ctaTitle="Ready to Transform Your Infrastructure?"
      ctaDescription="Let's discuss how our digital engineering solutions can optimize your infrastructure projects and drive sustainable outcomes."
      ctaButtonText="Start Your Project"
      ctaBorderColor="border-purple-500/20"
      stats={stats}
      trendingContent={trendingContent}
      services={services}
      whyChooseUs={whyChooseUs}
    />
  );
}
