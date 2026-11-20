import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Thank You',
  alternates: {
    canonical: 'https://www.thelotusroots.co.uk/thank-you',
  },
  robots: { index: false, follow: false },
};

export default function ThankYouPage() {
  return (
    <div style={{ backgroundColor: '#0A0A0A', minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '24px', fontFamily: 'Montserrat, sans-serif' }}>
      <Image src="/LRT-logo.webp" alt="Lotus Roots Technologies" width={160} height={48} style={{ marginBottom: '32px' }} />
      <h1 style={{ color: '#D4B46A', fontSize: '48px', fontWeight: '800', marginBottom: '16px', textAlign: 'center' }}>Thank You!</h1>
      <p style={{ color: '#e9e1d9', fontSize: '18px', marginBottom: '40px', textAlign: 'center', maxWidth: '480px', lineHeight: '1.6' }}>
        Thank you! Our team will get back to you shortly.
      </p>
      <Link href="/" style={{ backgroundColor: '#D4B46A', color: '#0A0A0A', padding: '14px 36px', borderRadius: '9999px', fontWeight: '700', fontSize: '14px', letterSpacing: '0.05em', textDecoration: 'none', textTransform: 'uppercase' }}>
        Back to Home
      </Link>
    </div>
  );
}
