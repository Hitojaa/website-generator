import type { Metadata } from 'next';
import { siteConfig } from '@/config/site';
import { Hero } from '@/components/home/Hero';
import { ServicesSection } from '@/components/home/ServicesSection';
import { WhyUs } from '@/components/home/WhyUs';
import { ZonesSection } from '@/components/home/ZonesSection';
import { Testimonials } from '@/components/home/Testimonials';
import { CallToAction } from '@/components/home/CallToAction';

export const metadata: Metadata = {
  title: siteConfig.seo.defaultTitle,
  description: siteConfig.seo.defaultDescription,
  alternates: {
    canonical: '/',
  },
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <ServicesSection />
      <WhyUs />
      <ZonesSection />
      <Testimonials />
      <CallToAction />
    </>
  );
}
