'use client';

import ServicePageTemplate from '@/components/ServicePageTemplate';
import { Search, TrendingUp, Target, BarChart3, Users, Globe, Zap, Award, Megaphone } from 'lucide-react';

export default function DigitalBusinessContent() {
  const heroCornerIcons = [
    { icon: Search, color: 'text-emerald-400', borderColor: 'border-emerald-500/50', position: 'top-left' as const, delay: '1000ms' },
    { icon: Target, color: 'text-blue-400', borderColor: 'border-blue-500/50', position: 'top-right' as const, delay: '2000ms' },
    { icon: BarChart3, color: 'text-purple-400', borderColor: 'border-purple-500/50', position: 'bottom-left' as const, delay: '0ms' },
    { icon: Megaphone, color: 'text-orange-400', borderColor: 'border-orange-500/50', position: 'bottom-right' as const, delay: '500ms' },
  ];

  const stats = [
    {
      value: '68%',
      label: 'of online experiences begin with a search engine',
      icon: Search,
      color: 'from-emerald-500 to-green-500'
    },
    {
      value: '3.5x',
      label: 'more leads generated through SEO than traditional marketing',
      icon: TrendingUp,
      color: 'from-blue-500 to-indigo-500'
    },
    {
      value: '200%',
      label: 'average ROI increase with targeted digital marketing campaigns',
      icon: Target,
      color: 'from-purple-500 to-violet-500'
    }
  ];

  const trendingContent = [
    {
      type: 'Research Report',
      title: 'Digital Marketing Trends in AEC Industry 2024',
      description: 'A deep look at how construction companies use digital marketing to win more clients and grow faster.',
      readTime: '14 min read',
      category: 'Industry Analysis',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=250&fit=crop&auto=format'
    },
    {
      type: 'Case Study',
      title: 'How SEO Generated 300% More Leads for Construction Firm',
      description: 'See how one construction company tripled its leads by improving its online presence.',
      readTime: '10 min read',
      category: 'Success Story',
      image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=400&h=250&fit=crop&auto=format'
    },
    {
      type: 'Blog',
      title: 'Local SEO Strategies for Construction Companies',
      description: 'Simple tactics to help you show up first in local search results and win nearby clients.',
      readTime: '8 min read',
      category: 'Technical Guide',
      image: 'https://images.unsplash.com/photo-1562577309-4932fdd64cd1?w=400&h=250&fit=crop&auto=format'
    }
  ];

  const services = [
    {
      title: 'Search Engine Optimization',
      description: 'Comprehensive SEO strategies to improve your search rankings and organic visibility.',
      icon: Search,
      features: ['Keyword research & strategy', 'On-page optimization', 'Technical SEO audits', 'Local SEO optimization']
    },
    {
      title: 'Pay-Per-Click Advertising',
      description: 'Targeted PPC campaigns that deliver immediate results and qualified leads.',
      icon: Target,
      features: ['Google Ads management', 'Social media advertising', 'Landing page optimization', 'Conversion tracking']
    },
    {
      title: 'Content Marketing',
      description: 'Strategic content creation that engages your audience and builds industry authority.',
      icon: Megaphone,
      features: ['Blog content strategy', 'Video marketing', 'Social media content', 'Email campaigns']
    },
    {
      title: 'Analytics & Reporting',
      description: 'Data-driven insights to measure performance and optimize marketing strategies.',
      icon: BarChart3,
      features: ['Performance tracking', 'ROI analysis', 'Custom dashboards', 'Monthly reporting']
    }
  ];

  const whyChooseUs = [
    {
      icon: Award,
      title: 'AEC Expertise',
      description: 'Specialized knowledge of construction and engineering industry marketing needs.'
    },
    {
      icon: Users,
      title: 'Proven Results',
      description: 'Track record of delivering measurable growth for AEC companies.'
    },
    {
      icon: Zap,
      title: 'Data-Driven',
      description: 'Strategic approach based on analytics and performance metrics.'
    },
    {
      icon: Globe,
      title: 'Full-Service',
      description: 'Complete digital marketing solutions from strategy to execution.'
    }
  ];

  return (
    <ServicePageTemplate
      heroTitle="Digital Marketing & SEO Services for AEC Businesses"
      heroHighlight="AEC Businesses"
      heroDescription="Boost your online reach with digital marketing built for the AEC industry. We help you rank higher, bring in quality leads, and grow your business with clear, data-driven strategies."
      heroPatternId="marketing-pattern"
      heroPatternColor="text-emerald-400"
      heroGradientFrom="from-emerald-500/20"
      heroGradientTo="to-green-500/20"
      heroIcon={TrendingUp}
      heroCornerIcons={heroCornerIcons}
      heroTagline="Digital Marketing & SEO"
      heroCTAText="Get Marketing Strategy"
      heroSecondaryCTAText="View Case Studies"
      servicesSectionTitle="Our Digital Marketing Services"
      servicesSectionSubtitle="Comprehensive solutions to grow your online presence"
      statsSectionTitle="Digital Marketing Impact"
      statsSectionSubtitle="The power of strategic digital marketing"
      trendingSectionTitle="What's Trending"
      trendingSectionSubtitle="Latest insights in digital marketing for AEC"
      whyChooseSectionTitle="Why Choose Lotus Roots for Digital Marketing?"
      whyChooseSectionSubtitle="Proven expertise in AEC industry marketing"
      ctaTitle="Ready to Grow Your Business?"
      ctaDescription="Let's discuss how our digital marketing solutions can increase your visibility and generate quality leads."
      ctaButtonText="Get Started"
      ctaBorderColor="border-emerald-500/20"
      stats={stats}
      trendingContent={trendingContent}
      services={services}
      whyChooseUs={whyChooseUs}
    />
  );
}
