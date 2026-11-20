'use client';

import { useState, useEffect, useRef } from 'react';
import { Mail, Phone, MapPin, Send, Globe } from 'lucide-react';

const Contact = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    message: ''
  });
  const [status, setStatus] = useState<'success' | 'error' | null>(null);
  const [statusMsg, setStatusMsg] = useState('');
  const [showStatus, setShowStatus] = useState(false);
  const [progress, setProgress] = useState(100);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const timerRef = useRef<number | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById('contact');
    if (element) {
      observer.observe(element);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (showStatus) {
      setProgress(100);
      const start = Date.now();
      const duration = 10000;
      function update() {
        const elapsed = Date.now() - start;
        setProgress(Math.max(0, 100 - (elapsed / duration) * 100));
        if (elapsed < duration) {
          timerRef.current = globalThis.setTimeout(update, 50) as unknown as number;
        } else {
          setShowStatus(false);
        }
      }
      update();
      return () => { if (timerRef.current) clearTimeout(timerRef.current); };
    }
  }, [showStatus]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus(null);
    setShowStatus(false);
    setIsSubmitting(true);

    // Basic validation
    if (!formData.name.trim()) {
      setStatus('error');
      setStatusMsg('Please enter your full name.');
      setShowStatus(true);
      setIsSubmitting(false);
      return;
    }

    if (!formData.phone.trim() && !formData.email.trim()) {
      setStatus('error');
      setStatusMsg('Please provide either your phone number or email address.');
      setShowStatus(true);
      setIsSubmitting(false);
      return;
    }

    try {
      const response = await fetch('https://formsubmit.co/ajax/sales@thelotusroots.co.uk', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          ...formData,
          _subject: 'New Contact Form Submission - The Lotus Roots',
          _template: 'table',
          _captcha: 'false',
          _cc: 'gaurav.b@brainminetech.com'
        })
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const result = await response.json();
      
      if (result.success === 'true' || result.success === true) {
        setStatus('success');
        setStatusMsg('Thank you! Your message has been sent successfully. We\'ll get back to you soon.');
        setFormData({
          name: '',
          email: '',
          phone: '',
          company: '',
          service: '',
          message: ''
        });
      } else {
        throw new Error(result.message || 'Form submission failed');
      }
    } catch {
      const subject = encodeURIComponent('New Contact Form Submission - The Lotus Roots');
      const body = encodeURIComponent(
        `Name: ${formData.name}\n` +
        `Email: ${formData.email}\n` +
        `Phone: ${formData.phone}\n` +
        `Company: ${formData.company}\n` +
        `Service: ${formData.service}\n` +
        `Message: ${formData.message}`
      );
      
      const mailtoLink = `mailto:sales@thelotusroots.co.uk?subject=${subject}&body=${body}`;
      
      setStatus('error');
      setStatusMsg(
        `Network error occurred. Please try again or ` +
        `click here to send via email: ` +
        `<a href="${mailtoLink}" class="text-yellow-300 underline hover:text-yellow-200">Send Email</a>`
      );
    } finally {
      setIsSubmitting(false);
      setShowStatus(true);
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email Us',
      value: 'sales@thelotusroots.co.uk',
      link: 'mailto:sales@thelotusroots.co.uk',
      description: 'Get in touch for business inquiries'
    },
    {
      icon: Phone,
      label: 'Call Us',
      value: '+44 2038703808',
      link: 'tel:+442038703808',
      description: 'Direct line for immediate assistance'
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'United Kingdom',
      link: '#',
      description: 'Serving AEC clients nationwide'
    }
  ];

  const services = [
    'Web & Application Development',
    'AI Services',
    'Cybersecurity',
    'Digital Marketing & SEO',
    'Infrastructure & Engineering Services',
    'Resource Staffing',
    'General Inquiry'
  ];

  return (
    <section id="contact" className="py-20 bg-gray-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-20 w-96 h-96 bg-pink-500/5 rounded-full animate-pulse"></div>
        <div className="absolute bottom-20 left-20 w-64 h-64 bg-amber-500/5 rounded-full animate-pulse delay-1000"></div>
      </div>

      <div className="container mx-auto px-8 relative z-10">
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Let&apos;s Build Something{' '}
            <span className="bg-gradient-to-r from-pink-500 to-amber-500 bg-clip-text text-transparent">
              Extraordinary
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Ready to transform your AEC business? Get in touch with our experts and discover how we can help you achieve your goals.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Information */}
          <div className={`transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}>
            <div className="mb-12">
              <h3 className="text-3xl font-bold text-white mb-6">Get In Touch</h3>
              <p className="text-gray-300 text-lg leading-relaxed mb-8">
                We&apos;re here to help you navigate the digital transformation of your AEC business. 
                Reach out to discuss your project requirements and discover our tailored solutions.
              </p>

              <div className="flex items-center space-x-2 mb-6">
                <Globe className="text-pink-400" size={20} />
                <span className="text-gray-300">Proudly serving the UK AEC industry</span>
              </div>
            </div>

            <div className="space-y-6">
              {contactInfo.map((info) => {
                const IconComponent = info.icon;
                return (
                  <div 
                    key={info.label}
                    className="group p-6 bg-gray-800/80 backdrop-blur-sm rounded-xl border border-gray-700/50 hover:border-pink-500/30 transition-all duration-300"
                  >
                    <div className="flex items-start space-x-4">
                      <div className="p-3 bg-gradient-to-r from-pink-500/20 to-amber-500/20 rounded-lg group-hover:from-pink-500/30 group-hover:to-amber-500/30 transition-all duration-300">
                        <IconComponent className="text-pink-400 group-hover:text-pink-300" size={24} />
                      </div>
                      <div className="flex-1">
                        <h4 className="text-white font-semibold text-lg mb-1">{info.label}</h4>
                        {info.link !== '#' ? (
                          <a 
                            href={info.link}
                            className="text-pink-400 hover:text-pink-300 font-medium text-lg block mb-2 transition-colors duration-200"
                          >
                            {info.value}
                          </a>
                        ) : (
                          <p className="text-pink-400 font-medium text-lg mb-2">{info.value}</p>
                        )}
                        <p className="text-gray-400 text-sm">{info.description}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Contact Form */}
          <div className={`transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}>
            <div className="bg-gray-800/80 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50">
              <h3 className="text-2xl font-bold text-white mb-6">Send Us a Message</h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-pink-500 focus:ring-1 focus:ring-pink-500 transition-colors duration-200"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-pink-500 focus:ring-1 focus:ring-pink-500 transition-colors duration-200"
                      placeholder="your.email@company.com"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-gray-300 mb-2">
                      Company Name
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-pink-500 focus:ring-1 focus:ring-pink-500 transition-colors duration-200"
                      placeholder="Your company name"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-pink-500 focus:ring-1 focus:ring-pink-500 transition-colors duration-200"
                      placeholder="Your phone number"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-gray-300 mb-2">
                    Service Interest
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg text-white focus:border-pink-500 focus:ring-1 focus:ring-pink-500 transition-colors duration-200"
                  >
                    <option value="">Select a service</option>
                    {services.map((service) => (
                      <option key={service} value={service}>{service}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-pink-500 focus:ring-1 focus:ring-pink-500 transition-colors duration-200 resize-none"
                    placeholder="Tell us about your project or inquiry..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-pink-500 to-amber-500 text-white px-8 py-4 rounded-lg font-semibold hover:shadow-lg hover:shadow-pink-500/25 transition-all duration-300 inline-flex items-center justify-center group disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                  <Send className="ml-2 group-hover:translate-x-1 transition-transform duration-200" size={20} />
                </button>

                {/* Status message */}
                {showStatus && (
                  <div className={`mt-6 w-full rounded-xl shadow-xl flex flex-col items-center ${status === 'success' ? 'bg-green-500' : 'bg-red-500'} text-white p-4 transition-all`}>
                    <span className="font-bold text-lg">{status === 'success' ? 'Success' : 'Error'}:</span>
                    <div className="mb-2 text-center" dangerouslySetInnerHTML={{ __html: statusMsg }}></div>
                    <div className="w-full h-1 bg-white/30 rounded overflow-hidden mt-2">
                      <div style={{ width: `${progress}%`, transition: 'width 0.1s linear' }} className="h-full bg-white"></div>
                    </div>
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>

        {/* Additional CTA */}
        <div className={`text-center mt-16 transition-all duration-1000 delay-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="inline-flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-6 bg-gradient-to-r from-gray-800/80 to-gray-800/60 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/50">
            <div className="text-center sm:text-left">
              <p className="text-white font-semibold">Need immediate assistance?</p>
              <p className="text-gray-400 text-sm">Our AEC experts are ready to help</p>
            </div>
            <a
              href="tel:+442038703808"
              className="bg-gradient-to-r from-pink-500 to-amber-500 text-white px-6 py-3 rounded-full font-semibold hover:shadow-lg hover:shadow-pink-500/25 transition-all duration-300 flex-shrink-0"
            >
              Call Now: +44 2038703808
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
