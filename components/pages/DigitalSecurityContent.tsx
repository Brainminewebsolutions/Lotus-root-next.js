'use client';

import ServicePageTemplate from '@/components/ServicePageTemplate';
import { Shield, Lock, Eye, AlertTriangle, TrendingUp, CheckCircle, Users, Globe, Zap, Target, Award } from 'lucide-react';

export default function DigitalSecurityContent() {
  const heroCornerIcons = [
    { icon: Lock, color: 'text-red-400', borderColor: 'border-red-500/50', position: 'top-left' as const, delay: '1000ms' },
    { icon: Eye, color: 'text-pink-400', borderColor: 'border-pink-500/50', position: 'top-right' as const, delay: '2000ms' },
    { icon: AlertTriangle, color: 'text-amber-400', borderColor: 'border-amber-500/50', position: 'bottom-left' as const, delay: '0ms' },
    { icon: Zap, color: 'text-cyan-400', borderColor: 'border-cyan-500/50', position: 'bottom-right' as const, delay: '500ms' },
  ];

  const stats = [
    {
      value: '$10.5T',
      label: 'estimated yearly cost of cybercrime in 2025',
      icon: TrendingUp,
      color: 'from-red-500 to-pink-500'
    },
    {
      value: '86%',
      label: 'of business leaders believe global geopolitical instability',
      icon: AlertTriangle,
      color: 'from-amber-500 to-orange-500'
    },
    {
      value: '200%',
      label: 'levels of disruption increased from 2017 to 2022',
      icon: TrendingUp,
      color: 'from-cyan-500 to-blue-500'
    }
  ];

  const trendingContent = [
    {
      type: 'Research Report',
      title: 'The Future of Cybersecurity in AEC Industry',
      description: 'A practical guide to the latest cyber threats facing construction and engineering firms, and how to defend against them.',
      readTime: '15 min read',
      category: 'Industry Analysis',
      image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=400&h=250&fit=crop&auto=format'
    },
    {
      type: 'Case Study',
      title: 'How We Protected a Major Infrastructure Project',
      description: 'How we set up strong security for a £500M infrastructure project and kept it safe from attacks.',
      readTime: '8 min read',
      category: 'Success Story',
      image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=400&h=250&fit=crop&auto=format'
    },
    {
      type: 'Blog',
      title: 'Zero Trust Architecture for Construction Companies',
      description: 'A step-by-step guide to setting up zero trust security for construction teams spread across many sites.',
      readTime: '12 min read',
      category: 'Technical Guide',
      image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=400&h=250&fit=crop&auto=format'
    }
  ];

  const services = [
    {
      title: 'Threat Detection & Response',
      description: 'Advanced AI-powered threat detection with 24/7 monitoring and rapid incident response.',
      icon: Eye,
      features: ['Real-time monitoring', 'AI threat analysis', 'Automated response', 'Forensic investigation']
    },
    {
      title: 'Security Architecture',
      description: 'Design and implement robust security frameworks tailored for AEC industry requirements.',
      icon: Shield,
      features: ['Zero trust design', 'Network segmentation', 'Access controls', 'Security policies']
    },
    {
      title: 'Compliance & Risk Management',
      description: 'Ensure regulatory compliance and manage cybersecurity risks across your organization.',
      icon: CheckCircle,
      features: ['Compliance audits', 'Risk assessments', 'Policy development', 'Training programs']
    },
    {
      title: 'Incident Response',
      description: 'Rapid response and recovery services to minimize impact of security incidents.',
      icon: Zap,
      features: ['24/7 response team', 'Damage assessment', 'Recovery planning', 'Business continuity']
    }
  ];

  const whyChooseUs = [
    {
      icon: Award,
      title: 'Industry Expertise',
      description: 'Specialized knowledge of AEC industry security challenges and requirements.'
    },
    {
      icon: Users,
      title: 'Expert Team',
      description: 'Certified cybersecurity professionals with proven track records.'
    },
    {
      icon: Globe,
      title: 'Global Standards',
      description: 'Compliance with international security frameworks and regulations.'
    },
    {
      icon: Target,
      title: 'Tailored Solutions',
      description: 'Customized security strategies designed for your specific business needs.'
    }
  ];

  return (
    <ServicePageTemplate
      heroTitle="Cybersecurity Services for Construction & Engineering Firms"
      heroHighlight="Engineering Firms"
      heroDescription="Keep your projects, data, and daily operations safe from cyber threats. We offer smart threat detection and fast response tools built for construction and engineering companies."
      heroPatternId="cyber-pattern"
      heroPatternColor="text-red-400"
      heroGradientFrom="from-red-500/20"
      heroGradientTo="to-pink-500/20"
      heroIcon={Shield}
      heroCornerIcons={heroCornerIcons}
      heroTagline="Cybersecurity Services"
      heroCTAText="Get Security Assessment"
      heroSecondaryCTAText="View Case Studies"
      servicesSectionTitle="Our Cybersecurity Services"
      servicesSectionSubtitle="Comprehensive protection for your digital infrastructure"
      statsSectionTitle="Cybersecurity Now"
      statsSectionSubtitle="The current state of cyber threats and their impact"
      trendingSectionTitle="What's Trending"
      trendingSectionSubtitle="Latest insights and developments in cybersecurity"
      whyChooseSectionTitle="Why Choose Lotus Roots for Cybersecurity?"
      whyChooseSectionSubtitle="Trusted expertise in AEC industry cybersecurity"
      ctaTitle="Ready to Secure Your Business?"
      ctaDescription="Don't wait for a cyber attack to happen. Get a comprehensive security assessment and protect your valuable assets today."
      ctaButtonText="Start Security Assessment"
      ctaBorderColor="border-red-500/20"
      stats={stats}
      trendingContent={trendingContent}
      services={services}
      whyChooseUs={whyChooseUs}
    />
  );
}
