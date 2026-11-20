import fs from 'fs';
import path from 'path';
import StandaloneMobileFooter from '@/components/StandaloneMobileFooter';

export const metadata = {
  title: 'Digital Marketing Services in UK',
  description: 'Results-driven digital marketing services in the UK. SEO, PPC, social media and more. Lotus Roots Technologies helps businesses grow online.',
  alternates: {
    canonical: 'https://www.thelotusroots.co.uk/dm-services-in-uk',
  },
  robots: { index: true, follow: true },
};

export default function DMServicesPage() {
  const html = fs.readFileSync(
    path.join(process.cwd(), 'public/DM Services LP Mockup.html'),
    'utf-8'
  );
  return (
    <>
      <div dangerouslySetInnerHTML={{ __html: html }} />
      <StandaloneMobileFooter />
    </>
  );
}
