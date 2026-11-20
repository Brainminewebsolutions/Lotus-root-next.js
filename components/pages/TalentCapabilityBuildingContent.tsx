'use client';

import ServicePageTemplate from '@/components/ServicePageTemplate';
import { Users, UserCheck, Briefcase, Award, TrendingUp, Zap, Target, Clock } from 'lucide-react';

export default function TalentCapabilityBuildingContent() {
  const heroCornerIcons = [
    { icon: UserCheck, color: 'text-indigo-400', borderColor: 'border-indigo-500/50', position: 'top-left' as const, delay: '1000ms' },
    { icon: Briefcase, color: 'text-blue-400', borderColor: 'border-blue-500/50', position: 'top-right' as const, delay: '2000ms' },
    { icon: Award, color: 'text-purple-400', borderColor: 'border-purple-500/50', position: 'bottom-left' as const, delay: '0ms' },
    { icon: Target, color: 'text-green-400', borderColor: 'border-green-500/50', position: 'bottom-right' as const, delay: '500ms' },
  ];

  const stats = [
    {
      value: '95%',
      label: 'client satisfaction rate with our placed candidates',
      icon: Award,
      color: 'from-indigo-500 to-blue-500'
    },
    {
      value: '72h',
      label: 'average time to present qualified candidates',
      icon: Clock,
      color: 'from-green-500 to-emerald-500'
    },
    {
      value: '500+',
      label: 'successful placements in AEC industry',
      icon: Users,
      color: 'from-purple-500 to-violet-500'
    }
  ];

  const trendingContent = [
    {
      type: 'Research Report',
      title: 'AEC Talent Market Trends 2024',
      description: 'What skills are in demand? What are companies paying? A clear guide to hiring trends in construction.',
      readTime: '13 min read',
      category: 'Market Analysis',
      image: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=400&h=250&fit=crop&auto=format'
    },
    {
      type: 'Case Study',
      title: 'Scaling Engineering Team for £1.5B Project',
      description: 'How we quickly put together a team of specialists for a large-scale infrastructure project.',
      readTime: '11 min read',
      category: 'Success Story',
      image: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=400&h=250&fit=crop&auto=format'
    },
    {
      type: 'Blog',
      title: 'Remote Work in Construction: New Opportunities',
      description: 'How remote and hybrid roles are opening up new ways to find and hire great AEC talent.',
      readTime: '7 min read',
      category: 'Industry Insights',
      image: 'https://images.unsplash.com/photo-1556761175-b413da4baf72?w=400&h=250&fit=crop&auto=format'
    }
  ];

  const services = [
    {
      title: 'Specialized AEC Talent',
      description: 'Expert recruitment for architecture, engineering, and construction professionals.',
      icon: Users,
      features: ['Structural engineers', 'Project managers', 'BIM specialists', 'Construction managers']
    },
    {
      title: 'Contract & Permanent',
      description: 'Flexible staffing solutions for both short-term projects and long-term growth.',
      icon: Briefcase,
      features: ['Contract placements', 'Permanent hires', 'Project-based teams', 'Flexible arrangements']
    },
    {
      title: 'Skills Assessment',
      description: 'Comprehensive evaluation of technical competencies and cultural fit.',
      icon: UserCheck,
      features: ['Technical interviews', 'Portfolio reviews', 'Reference checks', 'Cultural assessment']
    },
    {
      title: 'Executive Search',
      description: 'Leadership recruitment for senior and C-level positions in AEC companies.',
      icon: Award,
      features: ['C-suite executives', 'Department heads', 'Practice leaders', 'Board positions']
    }
  ];

  const whyChooseUs = [
    {
      icon: Target,
      title: 'AEC Focus',
      description: 'Specialized expertise in architecture, engineering, and construction recruitment.'
    },
    {
      icon: Users,
      title: 'Proven Network',
      description: 'Extensive network of qualified professionals across all AEC disciplines.'
    },
    {
      icon: Zap,
      title: 'Fast Delivery',
      description: 'Rapid candidate identification and placement with streamlined processes.'
    },
    {
      icon: Award,
      title: 'Quality Guarantee',
      description: 'Rigorous vetting process ensuring only top-tier talent recommendations.'
    }
  ];

  return (
    <ServicePageTemplate
      heroTitle="AEC Staffing & Recruitment Services in the UK"
      heroHighlight="in the UK"
      heroDescription="Find the right people for your projects, fast. We connect you with skilled AEC professionals — from contract roles to executive hires — so your team is always ready to deliver."
      heroPatternId="staffing-pattern"
      heroPatternColor="text-indigo-400"
      heroGradientFrom="from-indigo-500/20"
      heroGradientTo="to-blue-500/20"
      heroIcon={Users}
      heroCornerIcons={heroCornerIcons}
      heroTagline="Resource Staffing"
      heroCTAText="Find Talent"
      heroSecondaryCTAText="View Success Stories"
      servicesSectionTitle="Our Staffing Services"
      servicesSectionSubtitle="Comprehensive talent solutions for AEC industry"
      statsSectionTitle="Staffing Impact"
      statsSectionSubtitle="Our track record in talent placement"
      trendingSectionTitle="What's Trending"
      trendingSectionSubtitle="Latest insights in AEC talent and recruitment"
      whyChooseSectionTitle="Why Choose Lotus Roots for Staffing?"
      whyChooseSectionSubtitle="Specialized AEC recruitment expertise"
      ctaTitle="Ready to Build Your Team?"
      ctaDescription="Let's discuss how we can help you find the right talent for your projects and grow your organization."
      ctaButtonText="Find Talent"
      ctaBorderColor="border-indigo-500/20"
      stats={stats}
      trendingContent={trendingContent}
      services={services}
      whyChooseUs={whyChooseUs}
    />
  );
}
