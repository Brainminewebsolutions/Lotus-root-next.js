import fs from 'fs';
import path from 'path';
import StandaloneMobileFooter from '@/components/StandaloneMobileFooter';

export const metadata = {
  title: { absolute: "BIM Services in UK | Lotus Roots" },
  description: 'Expert BIM services in the UK. Lotus Roots Technologies delivers precise Building Information Modeling solutions for construction and engineering projects.',
  alternates: {
    canonical: 'https://www.thelotusroots.co.uk/bim-services-in-uk',
  },
  robots: { index: true, follow: true },
};

export default function BIMServicesPage() {
  const html = fs.readFileSync(
    path.join(process.cwd(), 'public/BIM LP Mockup.html'),
    'utf-8'
  );
  return (
    <>
      <div dangerouslySetInnerHTML={{ __html: html }} />
      <StandaloneMobileFooter />
    </>
  );
}
