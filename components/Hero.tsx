'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { ChevronRight, Play } from 'lucide-react';
import Image from 'next/image';

interface HeroBanner {
  id: number;
  title: string;
  highlightText: string;
  description: string;
  videoSrc?: string;
  isVideo: boolean;
  imageSrc?: string;
}

const Hero = () => {
  const router = useRouter();
  const [isVisible, setIsVisible] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [parallaxOffset, setParallaxOffset] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);
  const [isDesktop, setIsDesktop] = useState(false);

  const banners: HeroBanner[] = [
    {
      id: 1,
      title: "AI-Powered BIM & Digital Engineering Solutions",
      highlightText: "for the UK AEC Industry",
      description: "We build smart software and engineering tools for the construction and infrastructure industry. Our AI-driven automation and custom applications help you work faster and grow your business.",
      videoSrc: "/heroBannerVideo.mov",
      isVideo: true,
    },
    {
      id: 2,
      title: "Advanced Engineering",
      highlightText: "Capabilities",
      description: "Get more from your construction and infrastructure projects. We offer BIM Services, Digital Twin technology, and expert consultation to help you plan, build, and manage every stage of your project.",
      imageSrc: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1920&h=1080&fit=crop&q=80",
      isVideo: false,
    },
    {
      id: 3,
      title: "Scale Your Business",
      highlightText: "Digitally",
      description: "Grow your business with modern digital solutions. We build responsive web and mobile apps, drive traffic through SEO, and boost your online presence with data-driven marketing strategies.",
      imageSrc: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=1920&h=1080&fit=crop&q=80",
      isVideo: false,
    },
  ];

  useEffect(() => {
    setIsVisible(true);
    setIsDesktop(window.innerWidth > 768);
  }, []);

  // Parallax effect — uses only translateY (GPU composited)
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = globalThis.scrollY;
      if (scrollY < globalThis.innerHeight) {
        setParallaxOffset(scrollY * 0.5);
      }
    };

    globalThis.addEventListener('scroll', handleScroll);
    return () => globalThis.removeEventListener('scroll', handleScroll);
  }, []);

  // Auto-play carousel with 3-second interval
  useEffect(() => {
    if (!autoPlay) return;

    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % banners.length);
    }, 3000);

    return () => clearInterval(timer);
  }, [autoPlay, banners.length]);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
    setAutoPlay(false);
    // Resume autoplay after 8 seconds of user interaction
    setTimeout(() => setAutoPlay(true), 8000);
  };

  const scrollToContact = () => {
    router.push('/contact');
  };

  const currentBanner = banners[currentSlide];

  return (
    <section
      id="home"
      className="relative overflow-hidden bg-gray-900"
      style={{ minHeight: '100vh' }}
    >
      {/* Carousel Container */}
      <div className="absolute inset-0">
        {/* Background Slides with Crossfade — transform only for compositing */}
        {banners.map((banner, index) => (
          <div
            key={banner.id}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
            style={{
              transform: index === currentSlide ? `translateY(${parallaxOffset}px)` : 'translateY(0)',
              willChange: 'transform, opacity',
            }}
          >
            {banner.isVideo ? (
              <video
                autoPlay={isDesktop}
                muted
                loop
                playsInline
                preload="none"
                className="w-full h-full object-cover opacity-30"
                style={{ width: '100%', height: '100%' }}
                poster="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1920 1080'%3E%3Crect fill='%23111827' width='1920' height='1080'/%3E%3C/svg%3E"
              >
                {banner.videoSrc && <source src={banner.videoSrc} type="video/mp4" />}
              </video>
            ) : banner.imageSrc ? (
              <Image
                src={banner.imageSrc}
                alt={`${banner.title} ${banner.highlightText}`}
                fill
                className="object-cover opacity-30"
                priority={index === 0}
                loading={index === 0 ? 'eager' : 'lazy'}
                fetchPriority={index === 0 ? 'high' : 'auto'}
                sizes="100vw"
                quality={80}
              />
            ) : null}
            <div className="absolute inset-0 bg-gray-900/60"></div>
          </div>
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 pt-32 pb-20 min-h-screen flex items-center">
        <div className="max-w-4xl mx-auto text-center w-full">
          <div
            className={`transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
            style={{ willChange: 'transform, opacity' }}
          >
            <h1 className="text-3xl sm:text-5xl lg:text-7xl font-bold text-white mb-12 leading-tight">
              {currentBanner.title}{' '}
              <span className="bg-gradient-to-r from-pink-500 to-amber-500 bg-clip-text text-transparent">
                {currentBanner.highlightText}
              </span>
            </h1>

            <div className="mt-8">
              <p className="text-base sm:text-xl text-gray-300 mb-12 leading-relaxed max-w-3xl mx-auto">
                {currentBanner.description}
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  onClick={scrollToContact}
                  className="bg-gradient-to-r from-pink-500 to-amber-500 text-white px-8 py-4 rounded-full font-semibold hover:shadow-lg hover:shadow-pink-500/25 transition-all duration-300 flex items-center justify-center group"
                >
                  Request a Demo
                  <ChevronRight className="ml-2 group-hover:translate-x-1 transition-transform duration-200" size={20} />
                </button>
                <button
                  onClick={() => {
                    const element = document.getElementById('client-showcase');
                    element?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="border border-gray-600 text-white px-8 py-4 rounded-full font-semibold hover:border-pink-500 hover:text-pink-400 transition-all duration-300 flex items-center justify-center group"
                >
                  <Play className="mr-2 group-hover:scale-110 transition-transform duration-200" size={20} />
                  View Our Work
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Carousel Indicators with Timer */}
      <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 z-20 flex gap-3">
        {banners.map((banner, index) => (
          <button
            key={`slide-indicator-${banner.id}`}
            onClick={() => goToSlide(index)}
            className={`relative transition-all duration-300 rounded-full focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pink-500 overflow-hidden ${
              index === currentSlide
                ? 'w-8 h-2'
                : 'w-2 h-2 bg-gray-600 hover:bg-gray-400'
            }`}
            aria-label={`Go to slide ${index + 1}`}
            aria-current={index === currentSlide ? 'true' : 'false'}
          >
            {index === currentSlide && (
              <>
                {/* Background bar */}
                <div className="absolute inset-0 bg-gray-700"></div>
                {/* Animated timer bar — uses width animation which is acceptable for small indicator */}
                <div
                  className="absolute inset-y-0 left-0 bg-gradient-to-r from-pink-500 to-amber-500"
                  style={{
                    animation: autoPlay ? 'slideRight 3s linear infinite' : 'none',
                    width: '100%',
                  }}
                />
              </>
            )}
          </button>
        ))}
      </div>
    </section>
  );
};

export default Hero;
