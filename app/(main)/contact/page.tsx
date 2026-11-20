import type { Metadata } from 'next';
import Contact from '@/components/Contact';

export const metadata: Metadata = {
  title: 'Contact Us',
  description: 'Get in touch with Lotus Roots Technologies. We\'re here to help transform your AEC business with digital solutions. Contact us for web development, cybersecurity, AI services, and more.',
  keywords: ['contact', 'AEC technology', 'digital transformation', 'web development', 'cybersecurity', 'UK'],
  openGraph: {
    title: 'Contact Us',
    description: 'Ready to transform your AEC business? Get in touch with our experts and discover how we can help you achieve your goals.',
    url: 'https://thelotusroots.co.uk/contact',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact Us',
    description: 'Ready to transform your AEC business? Get in touch with our experts and discover how we can help you achieve your goals.',
  },
  alternates: {
    canonical: 'https://www.thelotusroots.co.uk/contact',
  },
};

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gray-900 pt-20">
      <Contact />
    </div>
  );
}
