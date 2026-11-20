'use client';

import ServicePageTemplate from '@/components/ServicePageTemplate';
import { Bot, Brain, Cpu, BarChart3, TrendingUp, Zap, Users, Target, Award } from 'lucide-react';

export default function TechnologyDevelopmentContent() {
  const heroCornerIcons = [
    { icon: Brain, color: 'text-pink-400', borderColor: 'border-pink-500/50', position: 'top-left' as const, delay: '1000ms' },
    { icon: Cpu, color: 'text-purple-400', borderColor: 'border-purple-500/50', position: 'top-right' as const, delay: '2000ms' },
    { icon: BarChart3, color: 'text-indigo-400', borderColor: 'border-indigo-500/50', position: 'bottom-left' as const, delay: '0ms' },
    { icon: Zap, color: 'text-violet-400', borderColor: 'border-violet-500/50', position: 'bottom-right' as const, delay: '500ms' },
  ];

  const stats = [
    {
      value: '40%',
      label: 'reduction in project costs with AI-powered optimization',
      icon: TrendingUp,
      color: 'from-pink-500 to-rose-500'
    },
    {
      value: '60%',
      label: 'faster decision-making with predictive analytics',
      icon: Zap,
      color: 'from-purple-500 to-violet-500'
    },
    {
      value: '85%',
      label: 'accuracy in AI-driven risk assessment models',
      icon: BarChart3,
      color: 'from-indigo-500 to-blue-500'
    }
  ];

  const trendingContent = [
    {
      type: 'Research Report',
      title: 'AI Revolution in Construction Industry 2024',
      description: 'A clear look at how AI is changing the way construction teams plan, build, and make decisions every day.',
      readTime: '18 min read',
      category: 'Industry Analysis',
      image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400&h=250&fit=crop&auto=format'
    },
    {
      type: 'Case Study',
      title: 'Predictive Analytics for £1.2B Infrastructure Project',
      description: 'How AI-powered forecasting helped a major project avoid delays and make the best use of resources.',
      readTime: '14 min read',
      category: 'Success Story',
      image: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=400&h=250&fit=crop&auto=format'
    },
    {
      type: 'Blog',
      title: 'Machine Learning for Quality Control in Construction',
      description: 'How computer vision and machine learning can check quality on construction sites without manual work.',
      readTime: '11 min read',
      category: 'Technical Guide',
      image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=400&h=250&fit=crop&auto=format'
    }
  ];

  const services = [
    {
      title: 'Predictive Analytics',
      description: 'Advanced forecasting models for project timelines, costs, and resource optimization.',
      icon: BarChart3,
      features: ['Project timeline prediction', 'Cost estimation models', 'Resource optimization', 'Risk forecasting']
    },
    {
      title: 'Computer Vision',
      description: 'AI-powered visual analysis for quality control, progress monitoring, and safety compliance.',
      icon: Brain,
      features: ['Automated quality inspection', 'Progress tracking', 'Safety monitoring', 'Defect detection']
    },
    {
      title: 'Process Automation',
      description: 'Intelligent automation of repetitive tasks and workflow optimization using AI.',
      icon: Cpu,
      features: ['Document processing', 'Workflow automation', 'Data extraction', 'Report generation']
    },
    {
      title: 'Decision Support Systems',
      description: 'AI-driven insights and recommendations for strategic decision-making.',
      icon: Bot,
      features: ['Strategic recommendations', 'Performance analytics', 'Trend analysis', 'Business intelligence']
    }
  ];

  const whyChooseUs = [
    {
      icon: Award,
      title: 'AI Expertise',
      description: 'Cutting-edge AI solutions tailored specifically for AEC industry challenges.'
    },
    {
      icon: Users,
      title: 'Data Scientists',
      description: 'Expert team of AI engineers and data scientists with proven track records.'
    },
    {
      icon: Zap,
      title: 'Rapid Implementation',
      description: 'Fast deployment of AI solutions with minimal disruption to operations.'
    },
    {
      icon: Target,
      title: 'Custom Models',
      description: 'Bespoke AI models trained on your specific data and requirements.'
    }
  ];

  return (
    <ServicePageTemplate
      heroTitle="AI & Technology Development Solutions for the AEC Industry"
      heroHighlight="AEC Industry"
      heroDescription="Put AI to work in your construction and infrastructure business. We build tools for forecasting, automation, and smarter decisions — so you can save time, cut costs, and stay ahead."
      heroPatternId="ai-pattern"
      heroPatternColor="text-pink-400"
      heroGradientFrom="from-pink-500/20"
      heroGradientTo="to-rose-500/20"
      heroIcon={Bot}
      heroCornerIcons={heroCornerIcons}
      heroTagline="AI & Technology Services"
      heroCTAText="Explore AI Solutions"
      heroSecondaryCTAText="View Case Studies"
      servicesSectionTitle="Our AI & Technology Services"
      servicesSectionSubtitle="Intelligent solutions for modern businesses"
      statsSectionTitle="AI Impact"
      statsSectionSubtitle="How AI transforms infrastructure projects"
      trendingSectionTitle="What's Trending"
      trendingSectionSubtitle="Latest insights in AI and technology"
      whyChooseSectionTitle="Why Choose Lotus Roots for AI?"
      whyChooseSectionSubtitle="Cutting-edge AI expertise for AEC industry"
      ctaTitle="Ready to Embrace AI?"
      ctaDescription="Let's discuss how AI can optimize your operations and drive innovation in your projects."
      ctaButtonText="Explore AI Solutions"
      ctaBorderColor="border-pink-500/20"
      stats={stats}
      trendingContent={trendingContent}
      services={services}
      whyChooseUs={whyChooseUs}
    />
  );
}
