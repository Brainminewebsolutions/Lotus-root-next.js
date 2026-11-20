'use client';

import { useState, useEffect } from 'react';
import { Menu, X, MessageCircle, Shield, Bot, TrendingUp, Building, Users, Home } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname, useRouter } from 'next/navigation';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isHomePage = pathname === '/';

  const scrollToSection = (sectionId: string) => {
    if (sectionId === 'contact') {
      router.push('/contact');
      setIsMobileMenuOpen(false);
      return;
    }
    if (isHomePage) {
      const element = document.getElementById(sectionId);
      element?.scrollIntoView({ behavior: 'smooth' });
    } else {
      router.push(`/#${sectionId}`);
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-gray-900/95 backdrop-blur-md' : 'bg-transparent'
      }`}>
      <nav className={`container mx-auto px-6 py-4 ${isMobileMenuOpen ? 'lg:bg-transparent bg-gray-800/95 backdrop-blur-md rounded-b-3xl' : ''}`}>
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-3">
            <Image
              src="/LRT-logo.webp"
              alt="Lotus Roots Technologies"
              width={48}
              height={48}
              className="h-12 w-auto"
            />
            <div>
              <span className="text-xl font-bold text-white">Lotus Roots</span>
              <p className="text-xs text-gray-400">Technologies</p>
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-8">
            <Link
              href="/"
              aria-label="Go to homepage"
              className="text-gray-300 hover:text-white transition-colors duration-200 cursor-default"
            >
              <Home size={20} />
            </Link>
            <div className="relative group" onMouseLeave={() => setIsDropdownOpen(false)}>
              <button
                onClick={() => scrollToSection('services')}
                className="text-gray-300 hover:text-white transition-colors duration-200 flex items-center space-x-1"
              >
                <span>What we do</span>
              </button>
              <div className={`absolute top-full left-0 mt-2 w-80 bg-gray-800 rounded-lg shadow-lg transition-all duration-200 z-50 ${isDropdownOpen ? 'opacity-0 invisible' : 'opacity-0 invisible group-hover:opacity-100 group-hover:visible'
                }`}>
                <div className="p-2">
                  <Link
                    href="/technology-development"
                    onClick={() => setIsDropdownOpen(true)}
                    className="block px-4 py-3 text-gray-300 hover:text-white hover:bg-gray-700 rounded-lg transition-colors duration-200"
                  >
                    <div className="flex items-center space-x-3">
                      <Bot size={16} className="text-pink-400" />
                      <div>
                        <div className="font-medium">Technology Development</div>
                        <div className="text-xs text-gray-400">AI Solutions • Custom Platforms • Automation</div>
                      </div>
                    </div>
                  </Link>
                  <Link
                    href="/digital-engineering"
                    onClick={() => setIsDropdownOpen(true)}
                    className="block px-4 py-3 text-gray-300 hover:text-white hover:bg-gray-700 rounded-lg transition-colors duration-200"
                  >
                    <div className="flex items-center space-x-3">
                      <Building size={16} className="text-cyan-400" />
                      <div>
                        <div className="font-medium">Digital Engineering</div>
                        <div className="text-xs text-gray-400">BIM Services • Digital Twin • Digital Manufacturing • Design Automation</div>
                      </div>
                    </div>
                  </Link>
                  <Link
                    href="/digital-business"
                    onClick={() => setIsDropdownOpen(true)}
                    className="block px-4 py-3 text-gray-300 hover:text-white hover:bg-gray-700 rounded-lg transition-colors duration-200"
                  >
                    <div className="flex items-center space-x-3">
                      <TrendingUp size={16} className="text-emerald-400" />
                      <div>
                        <div className="font-medium">Digital Business</div>
                        <div className="text-xs text-gray-400">Digital Marketing • Web Development • Branding</div>
                      </div>
                    </div>
                  </Link>
                  <Link
                    href="/digital-security"
                    onClick={() => setIsDropdownOpen(true)}
                    className="block px-4 py-3 text-gray-300 hover:text-white hover:bg-gray-700 rounded-lg transition-colors duration-200"
                  >
                    <div className="flex items-center space-x-3">
                      <Shield size={16} className="text-red-400" />
                      <div>
                        <div className="font-medium">Digital Security</div>
                        <div className="text-xs text-gray-400">Security Infrastructure • Risk Management • Compliance</div>
                      </div>
                    </div>
                  </Link>
                  <Link
                    href="/talent-capability-building"
                    onClick={() => setIsDropdownOpen(true)}
                    className="block px-4 py-3 text-gray-300 hover:text-white hover:bg-gray-700 rounded-lg transition-colors duration-200"
                  >
                    <div className="flex items-center space-x-3">
                      <Users size={16} className="text-indigo-400" />
                      <div>
                        <div className="font-medium">Talent & Capability Building</div>
                        <div className="text-xs text-gray-400">Staffing • Training • Managed Services</div>
                      </div>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
            <button
              onClick={() => scrollToSection('about')}
              className="text-gray-300 hover:text-white transition-colors duration-200"
            >
              Who we are
            </button>
            <button
              onClick={() => router.push('/product/fenestraone')}
              className="text-gray-300 hover:text-white transition-colors duration-200"
            >
              Our Products
            </button>
            {/* 
            <Link
              href="/blog"
              className="text-gray-300 hover:text-white transition-colors duration-200"
            >
              Blog
            </Link>
            */}
            <button
              onClick={() => scrollToSection('contact')}
              className="bg-gradient-to-r from-pink-500 to-amber-500 text-white px-6 py-2 rounded-full hover:shadow-lg hover:shadow-pink-500/25 transition-all duration-300"
            >
              Contact Us
            </button>
            <a
              href="https://wa.me/447833818001"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-full transition-all duration-300 flex items-center space-x-2"
            >
              <MessageCircle size={16} />
              <span>WhatsApp</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label={isMobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden mt-4 pb-2">
            <div className="flex flex-col space-y-4 pt-4">
              <Link
                href="/"
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-gray-300 hover:text-white text-left transition-colors duration-200 cursor-default flex items-center space-x-2"
              >
                <Home size={20} />
                <span>Home</span>
              </Link>
              <button
                onClick={() => scrollToSection('services')}
                className="text-gray-300 hover:text-white text-left transition-colors duration-200"
              >
                What we do
              </button>
              <Link
                href="/technology-development"
                onClick={() => setIsMobileMenuOpen(false)}
                className="flex items-center space-x-2 text-gray-300 hover:text-white text-left transition-colors duration-200 pl-4"
              >
                <Bot size={16} className="text-pink-400" />
                <span>Technology Development</span>
              </Link>
              <Link
                href="/digital-engineering"
                onClick={() => setIsMobileMenuOpen(false)}
                className="flex items-center space-x-2 text-gray-300 hover:text-white text-left transition-colors duration-200 pl-4"
              >
                <Building size={16} className="text-cyan-400" />
                <span>Digital Engineering</span>
              </Link>
              <Link
                href="/digital-business"
                onClick={() => setIsMobileMenuOpen(false)}
                className="flex items-center space-x-2 text-gray-300 hover:text-white text-left transition-colors duration-200 pl-4"
              >
                <TrendingUp size={16} className="text-emerald-400" />
                <span>Digital Business</span>
              </Link>
              <Link
                href="/digital-security"
                onClick={() => setIsMobileMenuOpen(false)}
                className="flex items-center space-x-2 text-gray-300 hover:text-white text-left transition-colors duration-200 pl-4"
              >
                <Shield size={16} className="text-red-400" />
                <span>Digital Security</span>
              </Link>
              <Link
                href="/talent-capability-building"
                onClick={() => setIsMobileMenuOpen(false)}
                className="flex items-center space-x-2 text-gray-300 hover:text-white text-left transition-colors duration-200 pl-4"
              >
                <Users size={16} className="text-indigo-400" />
                <span>Talent & Capability Building</span>
              </Link>
              <button
                onClick={() => scrollToSection('about')}
                className="text-gray-300 hover:text-white text-left transition-colors duration-200"
              >
                Who we are
              </button>
              <button
                onClick={() => {
                  router.push('/product/fenestraone');
                  setIsMobileMenuOpen(false);
                }}
                className="text-gray-300 hover:text-white text-left transition-colors duration-200"
              >
                Our Products
              </button>
              {/* 
              <Link
                href="/blog"
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-gray-300 hover:text-white text-left transition-colors duration-200"
              >
                Blog
              </Link>
              */}
              <button
                onClick={() => scrollToSection('contact')}
                className="bg-gradient-to-r from-pink-500 to-amber-500 text-white px-6 py-2 rounded-full text-left inline-block w-fit mb-3"
              >
                Contact Us
              </button>
              <a
                href="https://wa.me/447833818001"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-full text-left inline-block w-fit flex items-center space-x-2"
              >
                <MessageCircle size={16} />
                <span>WhatsApp</span>
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
