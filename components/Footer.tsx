'use client';

import { Mail, Phone, MapPin, Linkedin, Instagram, Globe } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const pathname = usePathname();

  const services = [
    { name: 'Technology Development', icon: '🤖', path: '/technology-development' },
    { name: 'Digital Engineering', icon: '🏗️', path: '/digital-engineering' },
    { name: 'Digital Business', icon: '📈', path: '/digital-business' },
    { name: 'Digital Security', icon: '🔒', path: '/digital-security' },
    { name: 'Talent & Capability Building', icon: '👥', path: '/talent-capability-building' }
  ];

  const isHomePage = pathname === '/';

  const scrollToSection = (sectionId: string) => {
    if (isHomePage) {
      const element = document.getElementById(sectionId);
      element?.scrollIntoView({ behavior: 'smooth' });
    } else {
      globalThis.location.href = `/#${sectionId}`;
    }
  };

  const quickLinks = [
    { name: 'Who we are', action: () => scrollToSection('about') },
    { name: 'Digital Launch', action: () => scrollToSection('digital-transformation') },
    { name: 'What we do', action: () => scrollToSection('services') },
    { name: 'Blog', href: '/blog' },
    { name: 'Contact', action: () => scrollToSection('contact') },
    { name: 'Privacy Policy', href: '#' },
    { name: 'Terms of Service', href: '#' }
  ];

  return (
    <footer className="bg-gray-900 border-t border-gray-800 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <svg width="100%" height="100%" className="w-full h-full">
          <defs>
            <pattern id="footer-pattern" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
              <circle cx="20" cy="20" r="1" fill="currentColor" className="text-pink-400"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#footer-pattern)"/>
        </svg>
      </div>

      <div className="container mx-auto px-6 py-8 relative z-10">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-3 mb-6">
              <Image 
                src="/logo 01.jpg" 
                alt="Lotus Roots Technologies" 
                width={48}
                height={48}
                className="w-12 h-12 rounded-lg"
              />
              <div>
                <h3 className="text-xl font-bold text-white">Lotus Roots</h3>
                <p className="text-sm text-gray-400">Technologies</p>
              </div>
            </div>
            
            <p className="text-gray-300 mb-6 leading-relaxed text-base">
              Empowering the AEC industry with innovative technology solutions across the UK.
            </p>

            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail className="text-pink-400" size={16} />
                <a 
                  href="mailto:sales@thelotusroots.co.uk" 
                  className="text-gray-300 hover:text-pink-400 transition-colors duration-200 text-base"
                >
                  sales@thelotusroots.co.uk
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="text-pink-400" size={16} />
                <a 
                  href="tel:+442038703808" 
                  className="text-gray-300 hover:text-pink-400 transition-colors duration-200 text-base"
                >
                  +44 2038703808
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="text-pink-400" size={16} />
                <span className="text-gray-300 text-base">United Kingdom</span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-semibold text-lg mb-6">Our Services</h4>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service.name}>
                  <Link 
                    href={service.path}
                    className="flex items-center space-x-3 text-gray-300 hover:text-pink-400 transition-colors duration-200 text-base group w-full text-left cursor-pointer"
                  >
                    <span className="text-lg group-hover:scale-110 transition-transform duration-200">{service.icon}</span>
                    <span>{service.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold text-lg mb-6">Quick Links</h4>
            <ul className="space-y-3 mb-8">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  {link.action ? (
                    <button 
                      onClick={link.action}
                      className="text-gray-300 hover:text-pink-400 transition-colors duration-200 text-base text-left"
                    >
                      {link.name}
                    </button>
                  ) : (
                    <a 
                      href={link.href} 
                      className="text-gray-300 hover:text-pink-400 transition-colors duration-200 text-base"
                    >
                      {link.name}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* SEO & Local Services */}
          <div>
            <h4 className="text-white font-semibold text-lg mb-6">SEO & Local Services</h4>
            <ul className="space-y-3">
              <li>
                <Link 
                  href="/seo-services-manchester"
                  className="text-gray-300 hover:text-pink-400 transition-colors duration-200 text-base block cursor-pointer"
                >
                  Manchester SEO
                </Link>
              </li>
              <li>
                <Link 
                  href="/seo-services-liverpool"
                  className="text-gray-300 hover:text-pink-400 transition-colors duration-200 text-base block cursor-pointer"
                >
                  Liverpool SEO
                </Link>
              </li>
              <li>
                <Link 
                  href="/seo-services-glasgow"
                  className="text-gray-300 hover:text-pink-400 transition-colors duration-200 text-base block cursor-pointer"
                >
                  Glasgow SEO
                </Link>
              </li>
              <li>
                <Link 
                  href="/cad-services-london"
                  className="text-gray-300 hover:text-pink-400 transition-colors duration-200 text-base block cursor-pointer"
                >
                  London CAD Services
                </Link>
              </li>
              <li>
                <Link 
                  href="/why-bim-services-revolutionizing-modern-construction"
                  className="text-gray-300 hover:text-pink-400 transition-colors duration-200 text-base block cursor-pointer"
                >
                  BIM Services Guide
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col lg:flex-row justify-between items-center space-y-4 lg:space-y-0">
            <div className="flex items-center space-x-6">
              <p className="text-gray-400 text-sm">
                © {currentYear} Lotus Roots Technologies. All rights reserved.
              </p>
              <div className="flex items-center space-x-2">
                <Globe className="text-pink-400" size={16} />
                <span className="text-gray-400 text-sm">UK-Based | Global Reach</span>
              </div>
            </div>

            <div className="flex items-center space-x-6">
              <span className="text-gray-400 text-sm">Connect with us:</span>
              <div className="flex space-x-4">
                <a 
                  href="https://www.linkedin.com/company/lotus-roots-technologies" 
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Follow Lotus Roots Technologies on LinkedIn"
                  className="p-2 bg-gray-800 rounded-full hover:bg-gradient-to-r hover:from-pink-500 hover:to-amber-500 transition-all duration-300 group"
                >
                  <Linkedin className="text-gray-400 group-hover:text-white" size={16} />
                </a>
                <a 
                  href="https://www.instagram.com/thelotusroots_official" 
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Follow Lotus Roots Technologies on Instagram"
                  className="p-2 bg-gray-800 rounded-full hover:bg-gradient-to-r hover:from-pink-500 hover:to-amber-500 transition-all duration-300 group"
                >
                  <Instagram className="text-gray-400 group-hover:text-white" size={16} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-r from-pink-500/10 to-amber-500/10 rounded-full transform -translate-x-16 translate-y-16"></div>
      <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-full transform translate-x-12 -translate-y-12"></div>
    </footer>
  );
};

export default Footer;
